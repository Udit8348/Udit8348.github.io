# Personal Website — Architecture & Vision

## Purpose

Build a personal website that serves as an extensible platform for publishing technical work, organizing knowledge, and hosting interactive experiments.

The website should remain simple to maintain, inexpensive to host, and flexible enough to support increasingly complex browser-side functionality.

## Core Functions

**Portfolio**
- Present experience, research, projects, and open-source contributions.
- Support individual project pages containing technical explanations, references, and external links.

**Technical Notebook**
- Publish structured technical notes on mathematics, computing, and other subjects.
- Support Markdown/MDX, equations, diagrams, code, and cross-references.
- Allow knowledge to be organized and navigated as the collection grows.

**Interactive Playground**
- Host interactive visualizations, simulations, and technical demonstrations.
- Support technologies such as D3.js, WebAssembly, and WebGPU.
- Keep interactive components isolated from the rest of the website when practical.

## Architectural Principles

1. **Static-first:** Prefer content generated at build time and executed client-side. Avoid server dependencies unless justified by a specific requirement.
2. **Modularity:** Separate content, layouts, reusable components, and interactive applications.
3. **Progressive complexity:** Introduce frameworks, dependencies, and infrastructure only when needed.
4. **Content portability:** Prefer open, text-based formats such as Markdown, MDX, and structured data.
5. **Maintainability:** Favor established conventions, simple interfaces, and minimal configuration.
6. **Extensibility:** New content types and applications should integrate without requiring substantial architectural changes.

## Technology Direction

| Layer | Technology |
|---|---|
| Site framework | Astro |
| Language | TypeScript |
| Content | Markdown / MDX |
| Styling | CSS, reusable design tokens |
| Interactive functionality | Browser JavaScript, selectively chosen libraries |
| Visualization | D3.js, WebGPU, or similar |
| Portable computation | WebAssembly |
| Hosting | GitHub Pages |
| Domain | udit.sh |
| CI/CD | GitHub Actions |

These technologies form the preferred foundation, not an immutable dependency list.

## Architectural Boundaries

- Content and presentation should remain independently maintainable.
- Interactive applications should not dictate the framework of the entire website.
- The core site should remain navigable without substantial client-side JavaScript.
- Build and deployment processes should be reproducible.
- Hosting limitations should be respected, but should not unnecessarily restrict browser-side functionality.
- Backend services may be introduced if future requirements genuinely need them.

## Long-Term Direction

The website should evolve from a simple portfolio into an interconnected collection of projects, technical knowledge, and interactive demonstrations.

The architecture should support that evolution without forcing all capabilities to be implemented upfront.

This document describes the intended direction of the project. Implementation plans may change independently. Changes to these principles should be deliberate rather than incidental.