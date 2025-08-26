# FE_Project

A lightweight front‑end and MEAN demo application repo (MongoDB, Express, Angular, Node.js). It hosts small, class project files you can open directly in a browser or extend into larger projects.

## What is MEAN?

MEAN is a full‑stack JavaScript stack:

- MongoDB — NoSQL database for storing app data
- Express — Minimal web framework on Node.js for building REST APIs
- Angular — Front‑end framework for building SPAs
- Node.js — Runtime for server‑side JavaScript

Typical flow: Angular (frontend) calls Express APIs on Node.js, which read/write data in MongoDB.

## What’s here

### JavaScript — Campus Club Manager (vanilla JS)

- Goal: Build a dynamic, browser‑only version of Campus Club Manager to practice core JS and DOM skills.
- Concepts: arrays/objects, functions, events, DOM updates, template literals, basic math
- Run: Open `JavaScript/index.html` with VS Code Live Server (see Quick start)
- Status: Working demo; no persistence yet (intentionally simple)

### Angular — Campus Club Manager (SPA)

- Goal: Migrate the vanilla demo into a modular Angular application.
- Scope (phased):
  - Components for list, card, and add‑club form
  - Services for club state and (later) API integration
  - Routing for future multi‑page flows (e.g., details, admin)
  - Forms (Template‑driven → Reactive) and basic validation
- Outcome: A maintainable SPA mirroring the vanilla app’s UX with room to grow
- Status: Scaffolding to be added during the Angular module of the course

### NodeJS — API for Campus Club Manager (Express)

- Goal: Provide a REST API to back the Angular app.
- Stack: Node.js + Express + MongoDB (database)
- Plan:
  - CRUD endpoints for clubs (list, create, update membership, archive)
  - Validation and basic error handling
  - CORS and simple environment config
  - MongoDB models and data persistence
- Outcome: A clean API the Angular frontend can consume during MEAN integration
- Status: Will be implemented in the backend section; initial Express scaffold to follow

## Quick start (VS Code Live Server)

We’ll use the VS Code "Live Server" extension for local development with auto‑reload.

1. Install the extension in VS Code: "Live Server" (ID: ritwickdey.LiveServer).

2. Open this repo folder in VS Code.

3. Open `JavaScript/index.html` and either:

- Click the "Go Live" button in the status bar, or
- Right‑click inside the file and choose "Open with Live Server".

4. Your browser will open to a local URL (e.g., http://127.0.0.1:5500). Edits to HTML/CSS/JS will auto‑refresh.

Tips

- If "Go Live" doesn’t appear, confirm the extension is installed and the repo folder (not a single file) is opened in VS Code.
- Live Server typically serves from the workspace root; opening `JavaScript/index.html` directly ensures correct relative paths for this demo.

## Walkthroughs and lecture materials

For guided walkthroughs, slides, and companion materials, see:

- https://github.com/jrletner/FE_Lectures

## Notes

- No build step is required for the `JavaScript/` example.
- If you experiment with persistence and run into a JSON parsing error, you can clear the browser’s localStorage key you introduced (e.g., `localStorage.removeItem('clubs')`) and refresh.

