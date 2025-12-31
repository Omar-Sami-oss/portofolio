# Portfolio React App

This repository is a personal portfolio built with React. It includes pages for Home, About, Projects, Blog (Dev.to integration), and Contact (Formspree). The UI is componentized under `src/components` and pages under `src/pages`.

**Key Features:**
- Client-side routing with React Router
- Blog list and detail pages fetched from the Dev.to API
- Projects list fetched from GitHub
- Contact form wired to Formspree
- Random quote display using an external quote API
- Refactored component files to `.jsx` for better JSX tooling

Getting started
---------------

Prerequisites:
- Node.js (16+) and npm installed

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm start
```

Open http://localhost:3000 to view the app.

Build for production:

```bash
npm run build
```

Environment configuration
-------------------------
This app reads a few optional environment variables (place in a `.env` file at the project root):

- `REACT_APP_FORMSPREE_ENDPOINT` — Formspree form endpoint for contact submissions
- `REACT_APP_GITHUB_USERNAME` — GitHub username used to fetch public repos for the Projects page
- `REACT_APP_DEVTO_USERNAME` — Dev.to username used to fetch posts (if applicable)

If you don't provide them, the app uses sensible defaults or static placeholders.

Project structure
-----------------
- `public/` — static assets and `index.html`
- `src/` — React source
	- `components/` — shared UI components
	- `pages/` — route pages (Home, About, Projects, Blog, Contact)
	- `App.js` — router and app shell

Notes about recent changes
-------------------------
- The codebase was recently refactored: React components and pages were copied to `.jsx` files for improved editor support. Originals with `.js` extensions are still present and pending deletion once you've verified `.jsx` files work in your environment.

Next steps you may want to run
----------------------------
- Delete original `.js` files after confirming `.jsx` copies work.
- Run `npm run build` and deploy the `build/` directory to your static host of choice (Netlify, Vercel, GitHub Pages, etc.).

Contributing
------------
PRs and issues are welcome — keep changes focused and test the build before submitting.

License
-------
This project is provided without an explicit license. Add a `LICENSE` file if you intend to make it open-source.
