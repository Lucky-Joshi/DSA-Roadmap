# DSA Roadmap (C++ + Data Structures & Algorithms)

Professional, browser-first roadmap and checklist for learning C++ and core DSA topics. This project is a lightweight React-based single-file app that runs entirely in the browser (no Node.js or build step required).

Live demo: https://lucky-joshi.github.io/DSA-Roadmap/

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository provides a curated, phase-based learning roadmap for C++ and Data Structures & Algorithms. It helps learners track progress with expandable sections and checklists. The UI is implemented in a single JSX file and rendered via `index.html` using CDN-hosted React and Babel.

## Features

- Phase-based learning roadmap (12 phases)
- Expandable topics with checklist items
- Persistent progress saved in the browser (localStorage)
- Zero-build, browser-first setup for quick iteration and demos

## Demo

View the live demo at: https://lucky-joshi.github.io/DSA-Roadmap/

## Tech Stack

- React (via CDN)
- ReactDOM (via CDN)
- Babel Standalone (in-browser JSX transform)
- Plain HTML, CSS, and a single JSX file (`dsa-cpp-roadmap.jsx`)

## Project Structure

- `index.html` — single HTML entry point that loads the CDN scripts and mounts the app.
- `dsa-cpp-roadmap.jsx` — roadmap data and UI implementation.
- `README.md` — this file.

## Getting Started

Choose one of the following options to run the app locally:

1) Open in your browser (quickest)

 - Simply open `index.html` in any modern browser.

2) Serve with a simple static server (recommended for Chrome file restrictions)

 - Python 3:

```bash
python -m http.server 8000
```

 - Node (http-server):

```bash
npm install -g http-server
http-server -c-1
```

Then open `http://localhost:8000` in your browser.

## Development

- Edit the roadmap and UI in `dsa-cpp-roadmap.jsx`.
- Refresh the browser to see changes. Because Babel runs in-browser, changes take effect immediately when the page reloads.
- For larger refactors or production builds, consider migrating to a standard React toolchain (Vite, Create React App, or a bundler) and adding a build step.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-change`).
3. Make changes and test by opening `index.html` locally.
4. Submit a pull request with a clear description of changes.

Please prefer small, focused PRs (data updates, UI fixes, accessibility improvements).

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Contact

Maintainer: Lucky Joshi (via GitHub: https://github.com/lucky-joshi)

---

If you'd like, I can also:

- Add a `LICENSE` file (MIT) and update this README accordingly.
- Convert the app into a small build setup (Vite) for production bundling.
- Improve accessibility and add tests.

Tell me which of the optional items you'd like next.