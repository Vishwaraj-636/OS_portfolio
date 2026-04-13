## MacOS-Style Portfolio (React + Vite)

A small macOS-inspired portfolio UI built with React and Vite. The app demonstrates a desktop-like interface with a Dock, top navigation, and multiple draggable, resizable windows implemented using `react-rnd`.

Key features
- Draggable and resizable windows with macOS-style control dots (close, minimize, maximize).
- Smooth transitions, responsive constraints, and bring-to-front on first click.
- An in-app CLI/terminal implemented for demo commands.
- Static assets served from `public/` for icons and images.

Getting started (development)
1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open the app in your browser at the port printed by Vite (commonly http://localhost:5173).

Structure highlights
- `src/components/Dock.jsx` — Dock icons that open windows.
- `src/components/Nav.jsx` — top navigation UI.
- `src/components/Windows/MacWindow.jsx` — window wrapper (drag/resize, control dots, z-index management).
- `src/components/Windows/*` — window content components: `Cli.jsx`, `Note.jsx`, `Resume.jsx`, `Spotify.jsx`, `Github.jsx`.
- `src/components/Windows/window.scss` — window styles (shadows, transitions, minimized/maximized states).

Terminal / CLI
- The terminal is a demo feature and supports a few example commands (type `help` in the terminal to list them). It's rendered inside a draggable window.

Notes and tips
- Static files placed in `public/` are referenced from the root (e.g., `/navbar-icon/cross.svg`).
- If you change window behavior, restart the dev server to clear Vite's cached modules.

Want this README expanded with deployment instructions, tests, or CI configuration? Tell me which sections to add.
