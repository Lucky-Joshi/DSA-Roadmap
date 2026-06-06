# DSA Roadmap

Live demo: https://lucky-joshi.github.io/DSA-Roadmap/

A browser-only C++ + DSA roadmap app built with React and JSX. It runs directly in the browser through Babel Standalone, so there is no Node.js, bundler, or build step required.

## What It Does

- Shows a structured 12-phase roadmap for C++ and DSA.
- Lets you expand phases and topics to track progress.
- Saves checklist state in the browser.
- Uses a single HTML entry point plus one JSX file.

## How To Run Locally

1. Open `index.html` in a browser.
2. Make sure the browser can load the CDN scripts for React, ReactDOM, and Babel Standalone.
3. Start checking off topics; progress is saved automatically in the browser.

If you prefer a local server, you can still serve the folder with any static file server, but it is not required.

## Project Files

- `index.html` loads React, ReactDOM, and Babel Standalone, then renders the app.
- `dsa-cpp-roadmap.jsx` contains the roadmap data and the UI logic.

## Notes

- This setup is intended for quick browser-based development and demos.
- Because it uses Babel in the browser, it is best for small projects and prototypes rather than production builds.