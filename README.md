# Udit8348

Personal website built with Astro and TypeScript. Static portfolio pages use Markdown content collections and plain CSS.

## Development

Requires Node.js 22.23.4 or newer (use a compatible LTS release) and npm.

```sh
npm ci
npm run dev
```

Check, build, and preview:

```sh
npm run check
npm run build
npm run preview
```

## Structure

```text
.
├── public/
│   └── pdfs/                 PDF documents served at /pdfs/<filename>
│       ├── nsight-bitonic-sort.pdf
│       ├── oscar25-vortex-apptainer.pdf
│       ├── overthinking-reasoning-llm-dos.pdf
│       └── pura23-bf16.pdf
├── src/
│   ├── components/           Shared header and footer
│   ├── content/projects/     Placeholder Markdown project entries
│   ├── layouts/              Shared HTML document and metadata
│   ├── pages/                Home page and project routes
│   ├── styles/               Global responsive CSS
│   └── content.config.ts     Project collection schema
├── .gitignore
├── astro.config.mjs          Static output and site URL
├── package.json              Dependencies and scripts
├── package-lock.json         Reproducible dependency versions
├── tsconfig.json             Strict TypeScript configuration
├── README.md                 Repository reference
├── VISION.md                 Architectural vision
└── PLAN-001.md               Initial implementation plan
```

Routes: `/`, `/projects/`, `/projects/vortex/`, and `/projects/softcuda/`. The home page links to all four PDFs. Both project entries contain clearly marked placeholder content.

## Maintenance

Keep this README synchronized with the repository.

- Update the directory structure when meaningful directories or their responsibilities change.
- Update the commands when dependencies, scripts, or development requirements change.

Only document what exists in the repository.
