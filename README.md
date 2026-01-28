# Tyler Cannon's Personal Website

This is the source code for my personal website, built with [TanStack Start](https://tanstack.com/start/latest) and deployed on [Railway](https://railway.com).

## Project Structure

```
├── .agent/                  # AI agent configurations
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── career/          # Career page components
│   │   ├── home/            # Homepage components
│   │   ├── projects/        # Projects page components
│   │   ├── tech/            # Tech page components
│   │   ├── GlobalBackground.tsx
│   │   ├── Header.tsx
│   │   ├── NotFound.tsx     # 404 default component
│   │   ├── PageHeader.tsx   # Page header component
│   │   └── Stars.tsx
│   ├── data/                # Data files
│   │   ├── career.ts        # Career milestones data
│   │   ├── projects.ts      # Projects data
│   │   └── tech.ts          # Tech data
│   ├── lib/                 # Utility functions
│   ├── routes/              # File-based routes
│   │   ├── __root.tsx       # Root layout
│   │   ├── career.tsx       # Career page
│   │   ├── index.tsx        # Home page
│   │   ├── projects.tsx     # Projects page
│   │   └── tech.tsx         # Tech page
│   ├── router.tsx           # Router configuration
│   ├── routeTree.gen.ts     # Auto-generated route tree
│   └── styles.css           # Global styles
├── biome.json               # Biome linter/formatter config
├── package.json             # Project dependencies and scripts
├── tsconfig.json
└── vite.config.ts           # Vite configuration
```

## Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install dependencies |
| `bun run dev` | Start development server on port 4000 |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run test` | Run tests with Vitest |
| `bun run lint` | Lint code with Biome |
| `bun run format` | Format code with Biome |
| `bun run check` | Run Biome checks |
| `bun run fix` | Run Biome checks and apply safe fixes |

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start/latest) with [React 19](https://react.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router/latest)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Runtime**: [Bun](https://bun.sh/)

## Deployment

This project is set up for deployment on Railway. Just connect your GitHub repository to Railway, and it will automatically build and deploy the site when changes are pushed using the following commands:

- **Build Command**: `bun --bun run build`
- **Start Command**: `bun --bun run start`
