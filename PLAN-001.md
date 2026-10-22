# PLAN-001 — Initial Astro Backbone

## Objective

Create the first locally functional version of the personal website using Astro and TypeScript.

Use `VISION.md` as the architectural reference. Implement only the scope defined below.

## Scope

### 1. Project Initialization

- Initialize Astro using the minimal starter.
- Enable strict TypeScript configuration.
- Use static site generation.
- Use npm for dependency management and commit `package-lock.json` for reproducible installation with `npm ci`.
- Provide scripts: `dev` (`astro dev`), `check` (`astro check`), `build` (`astro build`), and `preview` (`astro preview`).
- Add `@astrojs/check` and `typescript` as development dependencies so checks run without interactive dependency installation.
- Configure the site URL as `https://udit.sh`.
- Avoid unnecessary third-party dependencies.

### 2. Shared Layout and Styling

Implement:

- `BaseLayout.astro`: Shared HTML document, metadata, header, and footer.
- `Header.astro`: Basic site navigation.
- `Footer.astro`: Minimal footer.
- `global.css`: Simple responsive styling, typography, and design tokens.

Favor Astro components and plain CSS. No frontend UI framework is required.

### 3. Pages and Routing

Implement these routes:

| Route | Content |
|---|---|
| `/` | Introduction, link to projects, and documents section |
| `/projects/` | Listing of available projects |
| `/projects/[slug]/` | Individual project detail page |

Use Astro's file-based routing.

### 4. Content Model

Create an Astro content collection for projects.

Validate project frontmatter with the collection schema:

- `title`: required string
- `summary`: required string
- `date`: required date, coerced from frontmatter
- `technologies`: required array of strings
- `repositoryUrl`: optional valid URL

Use the Markdown body for the project description.

Create two sample entries, `vortex.md` and `softcuda.md`, with clearly identifiable placeholder content.

Generate project listing and detail pages from the collection. Sort the listing by date, newest first. Use static route generation for each project detail page.

### 5. PDF Documents

- Move the four existing files from `pdfs/` into `public/pdfs/`, preserving their filenames and contents:
  - `nsight-bitonic-sort.pdf`
  - `oscar25-vortex-apptainer.pdf`
  - `overthinking-reasoning-llm-dos.pdf`
  - `pura23-bf16.pdf`
- Serve each document through Astro's public assets at `/pdfs/<filename>`.
- Add a documents section on the home page linking to all four PDFs, with readable filename-derived labels and visible PDF indicators.
- Do not add a document collection or separate documents route.

### 6. Local Verification

Verify that:

- `npm ci` succeeds from a clean checkout.
- `npm run dev` starts the development server.
- All three route patterns render correctly.
- Both sample project pages are reachable at `/projects/vortex/` and `/projects/softcuda/`.
- Projects appear newest first and their Markdown bodies render on detail pages.
- All four home-page PDF links open the correct documents.
- Published PDF contents match the original files.
- Navigation and internal links work.
- Layout works on desktop and mobile.
- `npm run check` passes the configured Astro and TypeScript checks.
- `npm run build` succeeds.
- `npm run preview` serves the production build locally.

Smoke-check all routes, navigation, and PDF links with both the development server and production preview.

### 7. Documentation

- Preserve the existing `VISION.md` unchanged.
- Update `README.md` to reflect the implemented structure, including `public/pdfs/`, and verified working commands.
- Preserve this implementation plan for reference.

## Constraints

- Do not configure GitHub Actions or deploy the website.
- Do not modify DNS or GitHub Pages settings.
- Do not introduce React, Vue, Tailwind, or other UI frameworks.
- Do not implement the technical notebook or interactive playground.
- Do not add backend services, databases, authentication, or a CMS.
- Preserve all existing PDF filenames and contents.
- Avoid abstractions that are unnecessary for the initial scope.

## Acceptance Criteria

The task is complete when a developer can clone the repository, install dependencies, run the Astro development server, navigate the portfolio pages, access all four PDFs from the home page, pass Astro and TypeScript checks, and successfully build and preview the static website locally.

The repository README must reflect the implemented structure and commands.

## Agent Deliverable

At completion, provide a concise summary of the files created or modified, verification commands executed, their results, and any remaining limitations.

Do not proceed to deployment or subsequent implementation phases.
