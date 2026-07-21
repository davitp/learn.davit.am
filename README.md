# learn.davit.am

A portal for learning materials, courses and knowledge sharing — a sub-site of
[davit.am](https://davit.am). Live at **[learn.davit.am](https://learn.davit.am)**.

Currently hosts one course, **Systems Programming**, organized into Topics, Samples,
Homeworks, and Guides. Each course lives under its own path (e.g. `/system-programming`) and
new courses can be added as separate content trees.

## Tech stack

- [Fumadocs](https://fumadocs.dev) (UI + MDX) on **Next.js** App Router
- **Tailwind CSS v4**, TypeScript
- Statically exported (`output: 'export'`) and deployed to **GitHub Pages**

## Content

Course content is MDX under `content/docs/<course>/`, split into sections
(`topics/`, `samples/`, `homeworks/`, `guides/`). Ordering and titles are controlled by
`meta.json` files; the course folder is marked `"root": true` so it becomes its own navbar tab.

## Local development

```sh
pnpm install
pnpm dev        # dev server at http://localhost:3000
pnpm export     # static build into ./out
pnpm serve      # preview the exported ./out
```

## Deployment

Pushes to `main` build and publish to GitHub Pages via `.github/workflows/deploy.yml`
(Pages source: **GitHub Actions**). The custom domain is set by `public/CNAME`.
