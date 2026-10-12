# ds.ui

A design system built with React, TypeScript and SCSS. It contains design tokens, a stylesheet layer, a React component library, a live showcase page and Storybook docs, all in one Yarn workspaces monorepo.

The packages are private and are not published to npm. Everything runs from this repository.

## Quick start

Requirements: Node.js 20.19 or newer and [Yarn 1](https://classic.yarnpkg.com/) (the workspaces setup uses Yarn).

```bash
yarn install
yarn start
```

`yarn start` builds every package once, then runs all of these together:

| What | URL |
|---|---|
| Showcase page (colors, typography, spacing and every component) | http://localhost:3000 (opens automatically) |
| Storybook (component docs, controls and accessibility checks) | http://localhost:6006 |

The showcase header has an **Open Storybook** button. Leave the command running while you work. Changes to SCSS, components or tokens rebuild automatically and show up in both pages. If port 3000 is busy, the showcase picks the next free port and prints it in the terminal.

## What's in the repo

```
ds.ui/
├── packages/
│   ├── foundation/   @ds.ui/foundation: design token names shared with TypeScript
│   ├── scss/         @ds.ui/scss: tokens, CSS variables, base styles and component CSS
│   └── react/        @ds.ui/react: React components, tests and Storybook stories
├── playgrounds/
│   └── react/        @ds.ui/playground-react: the showcase page (Vite)
└── .github/workflows CI: build, tests and Chromatic visual tests
```

### `@ds.ui/foundation`

Token names that components use in their TypeScript types, so props like `space="md"` are type checked.

- `Spacing`: `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`
- `FontSize`: `xs`, `sm`, `base`, `lg`, `xl`

### `@ds.ui/scss`

All visual styling lives here, separate from React, so the CSS can be used on its own. Every class uses the `ds-` prefix.

| Folder | Contents |
|---|---|
| `src/foundation/` | SCSS tokens: colors, typography, spacing scale, breakpoints and mixins |
| `src/base/` | Reset (normalize) and `:root` CSS custom properties such as `--ds-color-primary` |
| `src/atoms/` | Styles for Badge, Button, Input, Margin, Switch and Typography, plus utility classes |
| `src/molecules/` | Styles for Accordion and Tabs |

`yarn build` compiles `src/global.scss` and each component file to a matching CSS file in `lib/`, such as `lib/Button.css`.

Styling has three layers:

1. **SCSS tokens** (`foundation/_variables.scss`): the raw values for colors, type and spacing.
2. **CSS custom properties** (`base/_root.scss`): tokens exposed at runtime as `--ds-*` variables, which can be overridden for theming.
3. **Component styles** (`atoms/`, `molecules/`): one file per component, built from the tokens.

Utility classes are generated from the spacing scale: `ds-margin-{size}`, `ds-margin-{top|right|bottom|left}-{size}`, `ds-width-{size}` and `ds-height-{size}`.

### `@ds.ui/react`

React components organized with [Atomic Design](https://atomicdesign.bradfrost.com/):

| Component | Type | Highlights |
|---|---|---|
| `Typography` | Atom | Variants `h1`–`h6`, `body` and `caption` |
| `Button` | Atom | `primary`, `secondary` and `danger` variants; accepts all native button attributes |
| `Input` | Atom | Label linked to the input; errors set `aria-invalid` and `aria-describedby` |
| `Badge` | Atom | `default`, `success`, `warning` and `error` variants, with optional icon and count |
| `Switch` | Atom | `role="switch"`; works controlled (`checked`) or uncontrolled (`defaultChecked`) |
| `Margin` | Atom | Adds spacing from the scale on any side |
| `Tabs` | Molecule | Arrow keys, Home and End navigate between tabs, and disabled tabs are skipped; controlled or uncontrolled |
| `Accordion` | Molecule | Keyboard-accessible headers, optional multiple open sections; controlled or uncontrolled |

```tsx
import { Button, Tabs } from '@ds.ui/react';
import '@ds.ui/scss/lib/global.css';
import '@ds.ui/scss/lib/Button.css';
import '@ds.ui/scss/lib/Tabs.css';
```

Components are bundled with Rollup into `lib/` as ES modules with TypeScript declarations. Every component folder that has an `index.ts` becomes a build entry automatically.

### Showcase (`playgrounds/react`)

A single page that renders the design system from the compiled packages. It has four sections:

- **Colors:** every color token with its value.
- **Typography:** each text variant with its size and weight.
- **Spacing:** the full scale with measured sizes.
- **Components:** an interactive demo of each component.

Token values are read from the compiled CSS at runtime, so the page always matches the SCSS.

The Storybook button points to `http://localhost:6006` by default. To point it at a deployed Storybook, set `VITE_STORYBOOK_URL`.

## Scripts

Run these from the repository root:

| Command | What it does |
|---|---|
| `yarn start` | Builds everything, then runs the showcase and Storybook with all packages in watch mode |
| `yarn dev` | Watch mode for all packages plus the showcase, without Storybook |
| `yarn storybook` | Storybook only, with the SCSS watcher |
| `yarn build` | Builds foundation, scss and react, in that order |
| `yarn test` | Runs the Jest test suites |
| `yarn build-storybook` | Builds a static Storybook |
| `yarn test:chromatic` | Uploads Storybook to Chromatic for visual tests (needs `CHROMATIC_PROJECT_TOKEN`) |
| `yarn commit` | Writes a conventional commit message with Commitizen |

## Adding a component

1. Create `packages/react/src/{atoms|molecules}/Name/` with `Name.tsx`, `index.ts` (`export { default } from './Name';`), `Name.stories.tsx` and `Name.test.tsx`.
2. Export it, and its prop types, from `packages/react/src/index.ts`.
3. Add `packages/scss/src/{atoms|molecules}/Name.scss` using `ds-` classes and the foundation tokens.
4. Add a demo to `playgrounds/react/src/showcase/Components.tsx` and import its CSS in `playgrounds/react/src/index.tsx`.

The Rollup build and the SCSS build pick up the new files automatically.

## Quality checks

- **Unit tests:** Jest and React Testing Library, including keyboard and ARIA behavior.
- **Accessibility:** the Storybook a11y addon checks each story.
- **Visual regression:** Chromatic runs in CI on every push and pull request to `main`.
- **Commits:** follow [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint. A Husky pre-commit hook runs the tests.
