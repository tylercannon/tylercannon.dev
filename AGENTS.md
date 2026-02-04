# AGENTS.md

Guidelines and conventions for AI agents working on this TypeScript project.

## Tech Stack

- **Runtime**: Bun
- **Framework**: TanStack Start (React meta-framework)
- **Build Tool**: Vite 7
- **Language**: TypeScript (ES2022 target, strict mode)
- **Styling**: Tailwind CSS v4
- **Linting/Formatting**: Biome

## Commands

```bash
bun run dev      # Start dev server on port 5173
bun run build    # Production build
bun run check    # Lint and format check (Biome)
bun run test     # Run tests (Vitest)
```

## Project Structure

```
src/
├── components/  # React components
├── data/        # Static data and constants
├── hooks/       # Custom React hooks
├── lib/         # Utility functions
├── routes/      # TanStack Router file-based routes
└── styles.css   # Global styles
```

## TypeScript Conventions

- Use `strict: true` mode—no `any` types unless absolutely necessary
- Prefer `interface` for object shapes, `type` for unions/intersections
- Use path alias `@/*` for imports from `src/`
- Target ES2022 features (top-level await, etc.)

## React Patterns

This project uses **React 19** with the React Compiler enabled.

- **Functional components only**—no class components
- **No manual memoization**—React Compiler handles optimization automatically
- Avoid `useMemo`, `useCallback`, and `React.memo` unless profiling shows necessity
- Use TanStack Router for navigation and data loading
- Colocate component-specific logic within the component file

## Styling Guidelines

- Use **Tailwind CSS v4** utility classes
- Combine classes with `clsx` and `tailwind-merge` via the `cn()` utility in `@/lib/utils`
- CSS custom properties are defined in `src/styles.css`
- Prefer CSS variables for theming over hardcoded values

## Code Formatting (Biome)

The project uses Biome for linting and formatting:

Run `bun run check` before committing to validate code style.

## TanStack Start / Router

- Routes are file-based in `src/routes/`
- Route tree is auto-generated in `src/routeTree.gen.ts`—do not edit manually
- Use `createFileRoute` for route definitions
- Prefer TanStack Router's `Link` component over `<a>` tags

## Import Organization

Imports should be organized and sorted automatically by Biome. The order is:

1. External packages (React, TanStack, etc.)
2. Internal aliases (`@/components`, `@/lib`, etc.)
3. Relative imports

## File Naming

- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utilities: `camelCase.ts`
- Data files: `camelCase.descriptive.ts` (e.g., `trajectory.milestones.ts`)
- Route files: Follow TanStack Router conventions

## Testing

- Test framework: Vitest
- Test utilities: Testing Library (React)
- Tests colocated or in `__tests__` directories
- Run with `bun run test`

## Performance Best Practices

- Leverage React Compiler—avoid unnecessary manual optimization
- Use CSS for animations over JavaScript when possible
- Minimize client-side JavaScript in favor of server-rendered content
- Prefer `position: sticky` over `position: fixed` when applicable

## Error Handling

- Use TypeScript's type system to prevent runtime errors
- Handle async errors with try/catch in data loaders
- Provide meaningful error boundaries for UI failures

## Git Conventions

- Keep commits atomic and focused
- Run `bun run check` before committing
- Ensure all tests pass with `bun run test`
