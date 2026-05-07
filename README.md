# Construction Project Intelligence Demo

A single-page React + Vite concept demo for Firebase Hosting. The app shows how AI-assisted workflow intelligence could help project managers, field teams, and operations identify project risk from scattered construction documentation.

This is a mock-only prototype. It does not connect to Procore, Firebase services, AI APIs, production systems, or private project records.

## Differentiated Concept

The demo is not positioned as a replacement for Procore native tools or the Procore App Marketplace. Its stronger value is as an IT-safe evaluation layer for deciding what kind of workflow intelligence is worth configuring, buying, or piloting.

The `Workflow Intelligence` section demonstrates:

- Cross-record risk chains that connect RFIs, submittals, change events, and safety observations
- Evidence packets that turn scattered records into meeting-ready escalation summaries
- Buy/configure/pilot guidance for IT and operations stakeholders
- Deterministic mock output that can be reviewed without production data access

## Features

- Project overview for the fake `Lancaster Medical Office Renovation`
- KPI cards for RFIs, submittals, change events, safety observations, and schedule risk
- Deterministic weekly risk brief generated from local mock records
- Filterable RFI, submittal, change event, and safety observation tracker
- Workflow intelligence layer with connected risk chains, evidence packets, and IT decision support
- Mock AI project assistant with prewritten project-specific responses
- PM action list generator
- ROI / impact estimate using 10 PMs and 52 annual weeks
- Implementation notes for a safe pilot path

## Tech Stack

- React
- Vite
- Plain CSS
- Local mock data in `src/data/mockProjectData.js`
- Firebase Hosting-ready static build

## Local Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Firebase Hosting

Install and authenticate the Firebase CLI, then connect this app to a Firebase project as appropriate for the demo environment.

```bash
firebase login
firebase init hosting
npm run build
firebase deploy
```

The included `firebase.json` is configured to serve the Vite build output from `dist` and route all paths to `index.html`.

## Important Constraints

- Use only mock/fake data.
- Do not use real company data.
- Do not use Benchmark Construction branding, logos, colors, or proprietary claims.
- Do not require a real Procore integration.
- Present this as a Procore-compatible concept demo or construction project intelligence prototype, not a finished production system.
