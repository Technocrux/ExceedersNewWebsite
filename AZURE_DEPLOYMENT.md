---
title: Deploy eXceeders to Azure
description: Frontend Static Web App + Backend App Service deployment strategy
---

# Azure Deployment Strategy for eXceeders

## Overview

eXceeders is a two-tier application:
- **Frontend:** React SPA (static assets) → Azure Static Web Apps
- **Backend:** FastAPI REST API → Azure App Service (Linux) or Container Apps
- **Database:** MongoDB (via Atlas or Cosmos DB with MongoDB API)

---

## Pre-Deployment Checklist

- [ ] All console errors resolved (`npm start` outputs clean)
- [ ] Environment variables set in `.env` (frontend + backend)
- [ ] CORS configured for production domain in `backend/server.py`
- [ ] MongoDB IP whitelist includes Azure outbound IP ranges
- [ ] CI/CD pipeline configured (GitHub Actions recommended)

---

## Deployment Plan

### 1. Frontend Deployment (Azure Static Web Apps)

**Strategy:** GitHub-integrated automatic deployment on push to `main`

**Steps:**

1. **Create Static Web App resource:**
   ```bash
   az staticwebapp create \
     --name exceeders-web \
     --resource-group exceeders-rg \
     --source https://github.com/YOUR_ORG/exceeders \
     --branch main \
     --app-location frontend \
     --output-location build \
     --app-build-command "npm install && npm run build"
   ```

2. **Add SPA routing** (`staticwebapp.config.json` in frontend root):
   ```json
   {
     "navigationFallback": {
       "rewrite": "/index.html"
     },
     "responseOverrides": {
       "404": {
         "rewrite": "/index.html"
       }
     }
   }
   ```

3. **Environment secrets:**
   ```bash
   az staticwebapp secrets list \
     --name exceeders-web \
     --resource-group exceeders-rg
   ```

4. **Custom domain:**
   ```bash
   az staticwebapp create-custom-domain \
     --name exceeders-web \
     --domain-name www.exceeders.com \
     --resource-group exceeders-rg
   ```

---

### 2. Backend Deployment (Azure App Service)

**Strategy:** Docker container or direct code deployment

**Option A: Docker Container (recommended for consistency)**

1. **Create Dockerfile** in backend root:
   ```dockerfile
   FROM python:3.11-slim
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt
   COPY . .
   EXPOSE 8000
   CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
   ```

2. **Push to Azure Container Registry:**
   ```bash
   az acr build \
     --registry exceedersacr \
     --image exceeders-api:latest \
     --file backend/Dockerfile backend/
   ```

3. **Deploy to App Service:**
   ```bash
   az containerapp create \
     --name exceeders-api \
     --resource-group exceeders-rg \
     --image exceedersacr.azurecr.io/exceeders-api:latest \
     --cpu 0.5 --memory 1.0Gi \
     --environment-variables MONGO_URL=$MONGO_URL DB_NAME=exceeders
   ```

**Option B: Direct Code Deployment (faster for small changes)**

1. **Create App Service:**
   ```bash
   az appservice plan create \
     --name exceeders-plan \
     --resource-group exceeders-rg \
     --sku B1 --is-linux
   
   az webapp create \
     --name exceeders-api \
     --resource-group exceeders-rg \
     --plan exceeders-plan \
     --runtime "PYTHON|3.11"
   ```

2. **Configure startup command:**
   ```bash
   az webapp config appsettings set \
     --name exceeders-api \
     --resource-group exceeders-rg \
     --settings STARTUP_COMMAND="uvicorn server:app --host 0.0.0.0 --port 8000"
   ```

3. **Deploy code:**
   ```bash
   cd backend
   az webapp deployment source config-zip \
     --resource-group exceeders-rg \
     --name exceeders-api \
     --src <path-to-backend-zip>
   ```

---

### 3. Environment Variables (Azure Key Vault)

**Create Key Vault:**
```bash
az keyvault create \
  --name exceeders-vault \
  --resource-group exceeders-rg
```

**Store secrets:**
```bash
az keyvault secret set --vault-name exceeders-vault --name MONGO-URL --value $MONGO_URL
az keyvault secret set --vault-name exceeders-vault --name DB-NAME --value exceeders
```

**Link to App Service:**
```bash
az webapp identity assign \
  --name exceeders-api \
  --resource-group exceeders-rg

# Grant Key Vault access
az keyvault set-policy \
  --name exceeders-vault \
  --object-id <APP_SERVICE_IDENTITY_ID> \
  --secret-permissions get list
```

---

### 4. CORS & API Configuration

**Update backend CORS for production:**

In `backend/server.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://www.exceeders.com",
        "https://exceeders.azurestaticapps.net",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Update frontend API endpoint:**

In `frontend/src/lib/api.js` or axios config:
```js
const API_BASE = process.env.REACT_APP_API_URL || 'https://exceeders-api.azurewebsites.net/api';
```

**Frontend `.env` file:**
```
REACT_APP_API_URL=https://exceeders-api.azurewebsites.net/api
```

---

### 5. GitHub Actions CI/CD Pipeline

**`.github/workflows/deploy.yml`:**

```yaml
name: Deploy to Azure

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build React app
        run: |
          cd frontend
          npm install
          npm run build
      
      - name: Deploy to Static Web App
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: upload
          app_location: frontend/build
          
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: |
          docker build -t exceedersacr.azurecr.io/exceeders-api:${{ github.sha }} backend/
      
      - name: Push to ACR
        run: |
          az acr login --name exceedersacr
          docker push exceedersacr.azurecr.io/exceeders-api:${{ github.sha }}
      
      - name: Deploy to App Service
        run: |
          az containerapp update \
            --name exceeders-api \
            --resource-group exceeders-rg \
            --image exceedersacr.azurecr.io/exceeders-api:${{ github.sha }}
```

---

### 6. Monitoring & Logging

**Application Insights setup:**

```bash
az monitor app-insights component create \
  --app exceeders-insights \
  --location eastus \
  --resource-group exceeders-rg \
  --application-type web
```

**Link to App Service:**
```bash
az webapp config appsettings set \
  --name exceeders-api \
  --resource-group exceeders-rg \
  --settings APPINSIGHTS_INSTRUMENTATIONKEY=$INSTRUMENTATION_KEY
```

---

## Post-Deployment Validation

1. **Frontend:** https://www.exceeders.com → Load homepage, check console (F12)
2. **API Health:** https://exceeders-api.azurewebsites.net/api/health → Should return `{"status": "ok"}`
3. **CORS:** Call backend from frontend — no CORS errors in DevTools
4. **Database:** Check MongoDB connection from App Service IP
5. **Analytics:** Monitor Application Insights dashboard

---

## Rollback Strategy

```bash
# Frontend: Revert to previous deployment
az staticwebapp create-custom-domain \
  --name exceeders-web \
  --deployment-environment production

# Backend: Revert to previous container image
az containerapp update \
  --name exceeders-api \
  --image exceedersacr.azurecr.io/exceeders-api:previous-tag
```

---

## Cost Optimization

- **Static Web Apps:** Free tier (up to 1 GB/month bandwidth)
- **App Service:** B1 Linux ($10-15/month), B2 ($50/month)
- **Cosmos DB:** Serverless or provisioned (start low, scale with demand)
- **Application Insights:** $2.99 per GB (free tier: 1 GB/month)

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| 404 on SPA routes | Add `staticwebapp.config.json` with navigationFallback |
| CORS errors | Verify backend `allow_origins` includes Static Web App domain |
| MongoDB connection timeout | Whitelist Azure App Service IP in MongoDB Atlas |
| Slow API response | Check App Service tier (B1 may be insufficient), enable auto-scale |
| High costs | Review App Service tier, consider Azure Cosmos DB autoscale or MongoDB Atlas free tier |

