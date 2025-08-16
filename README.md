# FE_Project

A lightweight front‑end practice repo for the Codefi 2025 Angular/Rails track. It hosts small, focused examples and class exercises you can open directly in a browser or extend into larger projects.

## What’s here

- JavaScript/
  - index.html, app.js, styles.css — a simple "Campus Club Manager" demo used in early classes to practice:
    - Variables, arrays/objects
    - DOM rendering and events (form submit)
    - Basic math/formatting and templating
- Angular/
  - Placeholder for Angular lessons/projects to be added as the course progresses
- NodeJS/
  - Placeholder for simple backend/API demos

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

## Contributing

- Keep examples small and self‑contained.
- Add a brief README to new subfolders describing purpose and how to run.
- Use clear, beginner‑friendly code and comments.
