# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

eXceeders is a B2B marketing/landing site for managed IT services (CIO Plus, Talent Plus, Support Plus, Dev Plus, plus About and a "Project Plus" coming-soon page). Two tiers: a React 19 SPA frontend and a FastAPI backend backed by MongoDB. Scaffolded by Emergent (see `.emergent/`, `@emergentbase/visual-edits`, `emergentintegrations`).

The site is content/design-driven. The backend currently only ships a demo `StatusCheck` API (`/api/`, `/api/status`) — there is no real business API yet, and CTAs are external Calendly links, not wired to the backend.

`AGENTS.md` is the extensive human-facing guide (design system, page inventory, patterns, Azure deployment). Read it for depth. **Where AGENTS.md and the code disagree, the code wins** — see "Corrections" below.

## Commands

Frontend (`frontend/`, package manager is **yarn**, build tool is **craco**):
```bash
yarn install
yarn start      # dev server on :3000  (craco start)
yarn build      # production build -> frontend/build  (craco build)
yarn test       # craco test (Jest/CRA); no test files exist yet
```
There is **no** `lint` or `format` script (AGENTS.md lists them but package.json has neither). ESLint config exists and runs inside CRA's build.

Backend (`backend/`):
```bash
pip install -r requirements.txt
uvicorn server:app --reload            # dev server on :8000
pytest                                 # config in pytest.ini
```

### pytest is pinned — do not fight it
`backend/pytest.ini` hardcodes `addopts = -n 2 --dist loadscope` (pytest-xdist, 2 workers, per-module scope). Do **not** edit `addopts`. To run serially use `pytest -n 0` (NOT `-p no:xdist`, which errors because `-n` is still passed). Don't add a custom `-n` CLI option — it collides with xdist. The `tests/` dir currently holds only `__init__.py`.

## Architecture notes worth knowing up front

**Frontend `@/` path alias** → `src/` (configured in `jsconfig.json`, applied via craco). All imports use it: `import Home from "@/pages/Home"`.

**Routing** ([frontend/src/App.js](frontend/src/App.js)): react-router-dom **v7** (AGENTS.md says v6). `/about` redirects to `/about-us`; `/project-plus` renders the `ComingSoon` component inline.

**SEO**: `react-helmet-async` (`HelmetProvider` wraps the app). Global Organization + WebSite JSON-LD live in `App.js`; per-page metadata is centralized in [frontend/src/seo/config.js](frontend/src/seo/config.js) (single source of truth) with builders in `seo/jsonld.js`.

**Service pages are composed, not bespoke**: CIOPlus/TalentPlus/SupportPlus/DevPlus all assemble primitives from [frontend/src/components/service/ServicePrimitives.jsx](frontend/src/components/service/ServicePrimitives.jsx) (`ServicePageShell`, `ServiceHero`, `Section`, `FeatureCard`, `StepCard`, `FAQItem`, `ServiceFinalCTA`, …). Add shared service-page UI here rather than duplicating per page.

**UI layer**: Radix primitives + shadcn-style wrappers in `src/components/ui/`, Tailwind for styling, Framer Motion for scroll-in animations (`whileInView` + `viewport={{ once: true, margin: "-80px" }}`), Lucide icons. Brand colors and the `Manrope` font are defined in `tailwind.config.js` / `src/index.css`.

**Test IDs**: interactive elements carry `data-testid`; canonical IDs are enumerated in `src/constants/testIds/`.

**Backend shape** ([backend/server.py](backend/server.py)): single-file FastAPI app. All routes hang off an `APIRouter(prefix="/api")`. Async MongoDB via Motor (`AsyncIOMotorClient`). Pydantic v2 models use `model_config = ConfigDict(extra="ignore")` to drop Mongo's `_id`. Datetimes are serialized to ISO strings before insert and parsed back on read.

## Environment variables (match the actual code, not the docs)

Backend `.env`: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` (comma-separated; defaults to `*`). CORS origins are **read from the env var** — do not hardcode `allow_origins` in `server.py` as some AGENTS.md/AZURE_DEPLOYMENT.md snippets show.

Frontend `.env`: `REACT_APP_BACKEND_URL` (the API base the SPA calls — AGENTS.md/deployment docs sometimes call it `REACT_APP_API_URL`; the code uses `REACT_APP_BACKEND_URL`). Also `WDS_SOCKET_PORT`, `ENABLE_HEALTH_CHECK`.

## Corrections to AGENTS.md (verify against code before trusting the guide)

- Package manager is **yarn** + **craco**, not plain `npm`/react-scripts.
- No `yarn lint` / `yarn format` scripts exist.
- react-router-dom is **v7**, not v6.
- Backend CORS is env-driven (`CORS_ORIGINS`), not a hardcoded list.
- Frontend API env var is `REACT_APP_BACKEND_URL`.

## Testing protocol file

`test_result.md` is a machine-maintained YAML testing ledger with a "DO NOT EDIT" protocol header used by the Emergent main/testing agent workflow. If you touch it, preserve the header block and append status in the existing YAML format.

## Deployment

Target is Azure: frontend → Static Web Apps (needs `staticwebapp.config.json` for SPA fallback routing), backend → App Service / Container Apps, DB → Cosmos DB (Mongo API) or Atlas. Full runbook in [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md).
