# Campus Club Manager — Vanilla JS Project Roadmap

This folder contains a vanilla JavaScript implementation of Campus Club Manager. The project evolves in stages from a simple, browser‑only app into a more structured version ready to migrate to Angular and a Node/Express API.

## What we’re building

A small app to manage campus clubs:

- Create clubs with a name and capacity
- Show how many seats are filled, seats left, and percent full
- Prepare for future enhancements like member lists, events, search/filter, and persistence

## Planned features

- Clubs
  - Create club with name and capacity (validation + duplicate guard)
  - Edit capacity; optional archive/delete (later)
- Members (later)
  - Add/remove members per club
  - Show live counts; respect capacity limits
- Events (later)
  - Create events with title/date/capacity
  - Friendly date display
- Search / Filter / Sort
  - Search by club name
  - Filter by availability or fullness
  - Sort by name, seats left, or percent full
- Persistence
  - Save/load via localStorage
  - Import/Export/Reset JSON
- Routing
  - Hash-based routes for list and detail views
- Async & Seed Data
  - Fetch initial seed JSON on first run
  - Loading/error status messages
- UX & Accessibility
  - Debounced inputs, keyboard-friendly interactions, lightweight styles
- MEAN readiness
  - Data shapes aligned to a future Node/Express API
  - Smooth migration path to Angular components/services

## Skills you’ll learn

- Core JavaScript fundamentals: variables, arrays/objects, functions, scope
- DOM manipulation: querying, creating/updating elements, event handling
- State and rendering: deriving values, pure helpers, minimizing reflows
- Modular code organization with ES modules and simple folder structure
- UI patterns: search/filter/sort pipelines, debouncing, basic accessibility
- Client‑side persistence with localStorage (save/load, import/export/reset)
- Routing concepts in the browser via hash‑based URLs
- Async basics: fetching JSON, handling loading and error states
- Practical debugging: console tools, error messages, and quick fixes
- Readiness for MEAN: data shapes and conventions that translate to Angular/Express

## Run locally (VS Code Live Server)

We use the VS Code “Live Server” extension for local development with auto‑reload.

1. Install the extension: Live Server (ritwickdey.LiveServer)
2. Open the repo in VS Code
3. Open `JavaScript/index.html` and click “Go Live” (or right‑click → Open with Live Server)
4. Your browser opens to a local URL (e.g., http://127.0.0.1:5500). Edits auto‑reload

Tips

- If “Go Live” doesn’t appear, confirm the extension is installed and you’ve opened the folder (not just a single file)
- Opening `JavaScript/index.html` directly ensures correct relative paths

## Data model overview

These minimal shapes guide calculations and rendering. Derived values (e.g., `current`, `seatsLeft`, `percentFull`) are computed in code.

```js
// Club
{
  id?: string,      // added later when persistence/async are introduced
  name: string,
  capacity: number,
  members?: Member[],
  events?: EventItem[]
}

// Member
{ id?: string, name: string }

// EventItem
{
  id?: string,
  title: string,
  dateISO?: string,
  description?: string,
  capacity?: number
}
```

## Notes & troubleshooting

- If you run into a JSON parsing error while experimenting with persistence, clear the relevant `localStorage` key (e.g., `clubs`) and refresh
- If a future refactor fetches a local JSON file, ensure Live Server is running so the request is served over HTTP
