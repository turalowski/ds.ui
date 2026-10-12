# Design System (ds.ui)

A comprehensive design system built with React, TypeScript, and SCSS, utilizing a monorepo architecture with Yarn workspaces.

## Packages

The repository consists of the following packages:

- `@ds.ui/scss`: Core SCSS variables, mixins, and foundation styles
- `@ds.ui/react`: React components built using `@ds.ui/scss`
- `@ds.ui/foundation`: Shared constants and foundation elements
- `@ds.ui/playground-react`: Development playground for testing components

## Architecture

### Component Structure

Components are organized following the Atomic Design methodology:

- **Atoms**: Basic building blocks (Text, Color, Margin)
- **Molecules**: Combinations of atoms (Select, Accordion)
- **Organisms**: Complex UI components (coming soon)
- **Templates**: Page-level layouts (coming soon)
- **Pages**: Specific implementations (coming soon)

### Monorepo Setup

The project uses:
- **Yarn Workspaces**: Manages dependencies and enables package symlinks
- **concurrently**: Runs the package watchers together in `yarn dev` and `yarn storybook`
- **Rollup**: Bundles the React components
- **Storybook**: Component development and documentation

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Build all packages:

```bash
yarn build
```

3. Start development:

```bash
yarn dev
```

4. Run tests:

```bash
yarn test
```

## Development

### Available Scripts

- `yarn build`: Build all packages
- `yarn dev`: Start development mode
- `yarn test`: Run tests
- `yarn commit`: Use commitizen for conventional commits
- `yarn test:chromatic`: Run visual regression tests
- `yarn build-storybook`: Build Storybook documentation

### Component Development

Components are built with:
- TypeScript for type safety
- React for UI
- SCSS for styling
- Jest and React Testing Library for testing
- Storybook for development and documentation

### Styling Architecture

The system uses a three-layer approach:

1. **System Variables** (`_variables.scss`)
   - Basic design tokens (colors, typography, spacing)
   - Example: `$green: #5ece7b`

2. **Root Variables** (`_root.scss`)
   - CSS custom properties
   - Can be overridden for theming

3. **Component Styles**
   - BEM methodology
   - Scoped to component

### Testing

Components are tested using:
- Jest for unit testing
- React Testing Library for component testing
- Chromatic for visual regression testing
- Storybook for interactive testing