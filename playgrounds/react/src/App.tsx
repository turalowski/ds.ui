import React from 'react';
import { Typography } from '@ds.ui/react';
import Colors from './showcase/Colors';
import TypographyScale from './showcase/TypographyScale';
import SpacingScale from './showcase/SpacingScale';
import Components from './showcase/Components';

const sections = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'components', label: 'Components' },
];

const storybookUrl = import.meta.env.VITE_STORYBOOK_URL ?? 'http://localhost:6006';

const App = () => (
  <div className="showcase">
    <header className="showcase-header">
      <div className="showcase-container showcase-header-inner">
        <Typography variant="h1">ds.ui</Typography>
        <div className="showcase-header-actions">
          <nav aria-label="Sections">
            <ul className="showcase-nav">
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="ds-button ds-button-primary showcase-storybook-link"
            href={storybookUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open Storybook
            <span className="showcase-visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </header>

    <main className="showcase-container">
      <Colors />
      <TypographyScale />
      <SpacingScale />
      <Components />
    </main>
  </div>
);

export default App;
