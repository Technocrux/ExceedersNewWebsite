# eXceeders Agent Instructions

**Project:** eXceeders Landing Page — a B2B digital transformation & managed IT services website  
**Goal:** Deploy to Azure for production.  
**Stack:** React 19 (frontend) + FastAPI (backend) + MongoDB + Tailwind CSS  
**Version:** Iteration 2 (all 7 service pages + About + Header complete, 0 console errors)

---

## 📋 Project Overview

eXceeders is a sophisticated B2B landing page selling four managed IT services (CIO Plus, Talent Plus, Support Plus, Dev Plus) plus About and Project Plus pages. The site emphasizes premium design, generous spacing, and conversion optimization through clear CTAs and multi-channel engagement (Calendly bookings).

**Design Philosophy:**
- Generous spacing (2-3x standard margins)
- Modern, premium, trustworthy tone
- Light + dark hybrid theme (light headers/hero, dark stats/footer sections)
- Brand color palette: Primary Emerald (#059669), Welcome Pine (#07404B), Sea (#9ED3CE), Pistachio (#C6E5DE)
- Typography: Manrope font throughout
- See [design_guidelines.json](design_guidelines.json) for complete visual spec

**Key Links:**
- [PRD with iteration history](memory/PRD.md)
- [SEO config & page metadata](frontend/src/seo/config.js)
- [JSON-LD structured data](frontend/src/seo/jsonld.js)

---

## 🎨 Frontend Architecture & Conventions

### Stack & Key Packages
- **React 19** + React Router v6 (routing)
- **Tailwind CSS** (styling) + PostCSS + craco (overrides)
- **Framer Motion** (animations & scroll triggers)
- **Radix UI** (accessible component primitives)
- **Lucide React** (icons)
- **React Query** (data fetching with cache)
- **React Hook Form** (form state)
- **Axios** (HTTP client)

### Directory Structure

```
frontend/src/
├── App.js                  # Main app wrapper
├── pages/                  # Route pages (Home, AboutUs, DevPlus, SupportPlus, CIOPlus, TalentPlus, ComingSoon)
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page-level sections (Hero, TrustedBy, WhyChoose, etc.)
│   ├── service/           # ServicePrimitives (reusable service page components)
│   └── ui/                # Radix UI + shadcn-ui components (button, card, accordion, etc.)
├── hooks/                 # use-toast custom hook
├── lib/                   # Utilities (utils.js for classNames)
├── constants/             # Test IDs and enums
└── seo/                   # SEO config, JSON-LD builders
```

### Key Patterns

**1. Service Page Shell**  
All service pages (CIOPlus, TalentPlus, SupportPlus, DevPlus) share a common pattern:

```jsx
<ServicePageShell testId="page-name">
  <SEO ... />
  <Header />
  <main>
    <ServiceHero ... />
    <Section> ... </Section>
    <ServiceFinalCTA ... />
  </main>
  <Footer />
</ServicePageShell>
```

**2. Framer Motion Scroll Animations**  
Cards and sections animate in on scroll:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5 }}
>
  {/* content */}
</motion.div>
```

**3. SEO with JSON-LD**  
Every page includes SEO component + structured data:

```jsx
<SEO
  title={meta.title}
  description={meta.description}
  path={meta.path}
  robots={meta.robots}
  jsonLd={webPageLd({ key: "home", ... })}
/>
```

**4. Reusable Component Primitives**  
[ServicePrimitives.jsx](frontend/src/components/service/ServicePrimitives.jsx) exports composable building blocks: `ServicePageShell`, `ServiceHero`, `Section`, `Container`, `SectionHeading`, `Eyebrow`, `FeatureCard`, `StepCard`, `FAQItem`, `ServiceFinalCTA`.

### Tailwind & Styling

**Custom Utilities** (see [index.css](frontend/src/index.css)):
- `.dot-pattern` — subtle background grid
- `.glow-orb` — glowing gradient circles
- Font family: `Manrope` (Google Fonts imported globally)

**Brand Colors** (in tailwind.config.js):
- `brand-dark`: #0D1F2D (dark blue foundation)
- `brand-emerald`: #059669 (primary action)
- `brand-pine`: #07404B (secondary emphasis)
- `brand-sea`: #9ED3CE (lighter accent)
- `brand-pistachio`: #C6E5DE (lightest accent)

### Test IDs Convention

All interactive elements include `data-testid` following pattern:
- `home-page`, `dev-plus-page`, `support-plus-page`
- `dev-hero`, `dev-delivers-custom`, `dev-package-0`
- `dev-faq-1`, `support-case-bank-name`

See [constants/testIds/](frontend/src/constants/testIds/) for reference.

---

## 🔧 Backend Architecture & Conventions

### Stack
- **FastAPI 0.110.1** (async REST framework)
- **Uvicorn** (ASGI server)
- **Motor 3.3.1** (async MongoDB driver)
- **Pydantic 2.6.4** (data validation)
- **Python 3.10+**

### Directory Structure

```
backend/
├── server.py           # FastAPI app, CORS config, routers
├── requirements.txt    # Dependencies
├── pytest.ini          # Pytest config
└── .env               # Environment variables (mongo_url, db_name)
```

### Key Patterns

**1. Async MongoDB Connection**

```python
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

collection = db['collection_name']
result = await collection.find_one({'_id': ObjectId(id)})
```

**2. API Router with /api Prefix**

```python
api_router = APIRouter(prefix="/api")

@api_router.get("/health")
async def health_check():
    return {"status": "ok"}

app.include_router(api_router)
```

**3. Pydantic Models with Validation**

```python
class MyModel(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
```

**4. CORS Middleware**

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://www.exceeders.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Environment Variables

```bash
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=exceeders_db
BACKEND_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
```

### Testing

- **Framework:** pytest + pytest-xdist
- **Linting:** black, isort, flake8, mypy
- **Config:** [pytest.ini](backend/pytest.ini)

Run tests:
```bash
pytest tests/ -v
```

---

## 🚀 Build & Run Commands

### Frontend

```bash
cd frontend

# Install dependencies
npm install

# Development server (http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint & format
npm run lint
npm run format
```

### Backend

```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Run dev server (http://localhost:8000)
uvicorn server:app --reload

# Run tests
pytest tests/ -v

# Format & lint
black . && isort . && flake8 . && mypy .
```

### Full Stack (Local Development)

1. Start MongoDB locally or connect to Atlas cluster
2. Create `.env` file in both `frontend/` and `backend/` with appropriate vars
3. In terminal 1: `cd backend && uvicorn server:app --reload`
4. In terminal 2: `cd frontend && npm start`
5. Open http://localhost:3000

---

## 📱 Routing & Pages

All routes defined in [App.js](frontend/src/App.js) using React Router v6:

- `/` → Home (8 sections: Hero, Trusted By, Why Choose, Ways We Help, Why Our Model, Network, Who Else, Final CTA)
- `/cio-plus` → CIO Plus service page
- `/talent-plus` → Talent Plus service page
- `/support-plus` → Support Plus service page (with 2 pricing models, process, testimonials, FAQ)
- `/dev-plus` → Dev Plus service page (3 delivery cards, packages, comparison table, FAQ)
- `/about-us` → About Us page (story, credibility, 4 solutions, why eXceeders, culture, footer)
- `/project-plus` → Project Plus (Coming Soon placeholder)

**CTA Links:**  
All service page CTAs point to Calendly: `https://calendly.com/batool-hussein-exceeders/30min?...`

---

## 🎯 Common Conventions & Patterns

### Component Props Naming

- `testId` → data-testid (for testing)
- `title`, `subtitle`, `description` → content strings
- `accent` → hex color code (default "#059669")
- `icon` → Lucide component (e.g., `<Code2 />`)
- `to` → React Router Link target (e.g., "/cio-plus")
- `href` → external URL or CTA link
- `onCtaClick` → callback function for CTA button

### Styling Patterns

**Card Hover Effect:**
```jsx
className="hover:-translate-y-1 hover:shadow-xl hover:border-brand-emerald/30 transition-all"
```

**Section Backgrounds (alternating):**
```
bg-white → bg-[#F7F9FA] → bg-gradient-to-br from-[#0D1F2D] to-[#06121B]
```

**Typography Scales:**
- H1: `font-display text-5xl md:text-7xl font-extrabold tracking-tight`
- H2: `font-display text-3xl md:text-4xl font-bold`
- H3: `font-display text-xl md:text-[22px] font-bold`
- Eyebrow: `text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-emerald`

### Testing & QA

**What Must Pass:**
- All pages render without console errors
- FAQ accordions open/close
- Cross-page navigation from Hero/service cards works
- Mobile drawer opens/closes (Header)
- Calendly CTA buttons are present (not yet wired to modal)
- Scroll animations trigger when entering viewport

**Test State File:**  
[test_result.md](test_result.md) tracks backend + frontend tasks, implementation status, and test history. Update this file after major changes.

---

## 🌐 Azure Deployment Notes

### Frontend Deployment (Static Web App)

- Build output: `frontend/build/`
- Build command: `npm run build`
- Start command: N/A (static files)
- Build artifact location: `build`
- Recommended: Azure Static Web Apps for React SPA
- Include `staticwebapp.config.json` for routing (redirect all routes to index.html for SPA)

### Backend Deployment (App Service / Container Apps)

- App: FastAPI with Uvicorn
- Startup command: `uvicorn server:app --host 0.0.0.0 --port 8000`
- Port: 8000 (configurable via PORT env var)
- Keep-alive: Enable to prevent idle timeouts
- Recommended: Azure App Service (Linux) or Container Apps

### Environment Variables (Azure)

Set in App Service Configuration:
```
MONGO_URL=<Azure Cosmos DB connection string or MongoDB Atlas>
DB_NAME=exceeders
BACKEND_URL=https://api-exceeders.azurewebsites.net
FRONTEND_URL=https://www.exceeders.com
```

### CORS Configuration for Production

Update backend CORS in `server.py`:
```python
allow_origins=[
    "https://www.exceeders.com",
    "https://exceeders.azurestaticapps.net",
]
```

### Recommended Azure Resources

- **Frontend:** Azure Static Web Apps (free tier available, auto-deploys from GitHub)
- **Backend:** Azure App Service (Linux, Standard B1 or higher)
- **Database:** Azure Cosmos DB (MongoDB API) or MongoDB Atlas (existing)
- **DNS:** Azure DNS or GoDaddy (for www.exceeders.com)
- **CDN:** Azure Front Door for global edge caching
- **Monitoring:** Application Insights for both frontend + backend

---

## ⚙️ AI Agent Checklist

When working on this project:

### Before Editing Any Code
- ✅ Review [design_guidelines.json](design_guidelines.json) for component styling
- ✅ Check [PRD](memory/PRD.md) for completed + planned features
- ✅ Verify page exists in [seo/config.js](frontend/src/seo/config.js) if adding new route
- ✅ Confirm testId follows naming convention (page-name, component-specific-action-state)

### When Adding Features
- ✅ Use Framer Motion for scroll animations (viewport={{ once: true, margin: "-80px" }})
- ✅ Export reusable components from ServicePrimitives if service page–related
- ✅ Add JSON-LD structured data for SEO
- ✅ Test on mobile (md/lg breakpoints matter)
- ✅ Update test_result.md with implementation status
- ✅ Ensure no console errors (run `npm start` locally)

### When Fixing Issues
- ✅ Check [test_result.md](test_result.md) for known issues
- ✅ Isolate frontend vs. backend (browser DevTools vs. server logs)
- ✅ Verify CORS headers if API errors occur
- ✅ Check async/await chains in backend (common pitfall: missing `await`)
- ✅ Run `npm run build` to catch prod-only errors

### Before Deploying to Azure
- ✅ Update `BACKEND_URL` + `FRONTEND_URL` in environment
- ✅ Verify all CTAs point to production Calendly (or internal endpoint)
- ✅ Run full test suite (frontend + backend)
- ✅ Check console errors in production build
- ✅ Verify MongoDB connection from Azure IP (whitelist if needed)
- ✅ Set up CI/CD pipeline (GitHub Actions recommended)

---

## 🎓 Learning Resources

- **React 19 & Hooks:** https://react.dev
- **Framer Motion:** https://www.framer.com/motion/
- **Radix UI:** https://www.radix-ui.com/
- **Tailwind CSS:** https://tailwindcss.com/
- **FastAPI:** https://fastapi.tiangolo.com/
- **MongoDB Motor (async):** https://motor.readthedocs.io/
- **Azure Static Web Apps:** https://learn.microsoft.com/en-us/azure/static-web-apps/
- **Azure App Service:** https://learn.microsoft.com/en-us/azure/app-service/

---

## 📞 Common Issues & Solutions

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| "Module not found: @/" | Path alias not configured | Check `jsconfig.json` has `"@": "src/"` |
| CORS error on API calls | Backend allow_origins missing frontend URL | Update `allow_origins` in `server.py` |
| Animations not triggering | `whileInView` not working | Ensure parent has `overflow: visible` (not hidden) |
| MongoDB connection timeout | Atlas IP whitelist | Add Azure IP to MongoDB Atlas cluster access |
| "Cannot GET /" in SPA | Static Web App routing | Include `staticwebapp.config.json` for SPA rewrite |
| Tailwind classes not applying | PostCSS config issue | Restart dev server after tsconfig changes |
| FAQ doesn't open | Controlled component missing state | Verify Accordion component has `value` prop |

---

## 📝 Quick Reference

| What | Where | Note |
|------|-------|------|
| Page metadata (title, description) | [seo/config.js](frontend/src/seo/config.js) | Single source of truth |
| Brand colors | [tailwind.config.js](frontend/tailwind.config.js) | Add new colors here |
| Reusable service page components | [components/service/ServicePrimitives.jsx](frontend/src/components/service/ServicePrimitives.jsx) | Import + compose |
| Test state & history | [test_result.md](test_result.md) | Update after major changes |
| Design specs (colors, spacing, fonts) | [design_guidelines.json](design_guidelines.json) | Reference for all new components |
| Environment variables | `backend/.env`, `frontend/.env` | Never commit — use Azure Key Vault |
| Calendly booking URL | [seo/config.js](frontend/src/seo/config.js) `CALENDLY_URL` | All service page CTAs use this |

---

**Last Updated:** 2026-07-20 | Iteration 2 complete (7 service pages, About, Header, 0 console errors)
