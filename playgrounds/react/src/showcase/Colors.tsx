import React from 'react';
import Section, { Subsection } from './Section';
import useCssValues from './useCssValues';

const colorGroups = [
  {
    title: 'Brand',
    tokens: ['primary', 'primary-light', 'primary-dark', 'secondary', 'secondary-light', 'secondary-dark'],
  },
  {
    title: 'Gray scale',
    tokens: ['gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600'],
  },
  {
    title: 'Status',
    tokens: [
      'success', 'success-light', 'success-dark',
      'warning', 'warning-light', 'warning-dark',
      'error', 'error-light', 'error-dark',
    ],
  },
];

const allVariables = colorGroups.flatMap(group => group.tokens.map(token => `--ds-color-${token}`));

const Colors = () => {
  const values = useCssValues(allVariables);

  return (
    <Section id="colors" title="Colors" description="Color tokens exposed as CSS custom properties on :root.">
      {colorGroups.map(group => (
        <Subsection key={group.title} title={group.title}>
          <div className="showcase-grid showcase-grid-swatches">
            {group.tokens.map(token => {
              const variable = `--ds-color-${token}`;
              return (
                <div key={token} className="showcase-swatch">
                  <div className="showcase-swatch-color" style={{ backgroundColor: `var(${variable})` }} />
                  <div className="showcase-swatch-info">
                    <span className="showcase-swatch-name">{token}</span>
                    <code>{values[variable] || '—'}</code>
                  </div>
                </div>
              );
            })}
          </div>
        </Subsection>
      ))}
    </Section>
  );
};

export default Colors;
