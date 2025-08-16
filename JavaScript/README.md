# Campus Club Manager — Vanilla JS Project Roadmap

This folder contains a vanilla JavaScript implementation of Campus Club Manager. The project evolves in stages from a simple, browser‑only app into a more structured version ready to migrate to Angular and a Node/Express API.

## What we’re building

A small app to manage campus clubs:

- Create clubs with a name and capacity
- Show how many seats are filled, seats left, and percent full
- Prepare for future enhancements like member lists, events, search/filter, and persistence

## Stages (start → finish)

1. Minimum Viable App (MVA)

- Static seed data + render a list of clubs
- Add Club form with basic validation and duplicate‑name guard
- Simple helpers (seats left, percent full) and clean DOM updates

2. Refactor for clarity

- Extract small helpers/utilities for calculations and formatting
- Tidy event handling and rendering into focused functions
- Keep the code approachable and beginner‑friendly

3. Structure for growth

- Introduce ES modules and a light folder structure (e.g., `models/`, `store/`, `ui/`, `utils/`)
- Separate state from rendering; keep pure functions where possible
- Make it easy to test behavior manually and iterate quickly

4. UX enhancements

- Add search/filter/sort pipeline (derived from in‑memory state)
- Debounce inputs and streamline render cycles
- Small accessibility and styling improvements

5. Persistence

- Save/load clubs from `localStorage`
- Optional import/export/reset for quick demos

6. Routing

- Hash‑based routes for list vs detail screens
- Keep URLs shareable while staying in a static front‑end

7. Async & data bootstrapping

- Fetch initial seed data from a local JSON file
- Add simple loading/error status messages

8. Ready for MEAN

- Align data shapes with the upcoming Node/Express API
- Prepare the app for an Angular migration (components, services, routing)

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
