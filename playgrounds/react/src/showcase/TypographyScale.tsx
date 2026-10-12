import React from 'react';
import { Typography } from '@ds.ui/react';
import type { TypographyVariant } from '@ds.ui/react';
import Section from './Section';
import useCssValues from './useCssValues';

const headings: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const variables = [
  '--ds-body-font-size',
  '--ds-body-font-weight',
  ...headings.flatMap(heading => [`--ds-${heading}-font-size`, `--ds-${heading}-font-weight`]),
];

const sample = 'The quick brown fox jumps over the lazy dog';

const TypographyScale = () => {
  const values = useCssValues(variables);
  const specs = (prefix: string) =>
    `${values[`--ds-${prefix}-font-size`] || '—'} · ${values[`--ds-${prefix}-font-weight`] || '—'}`;

  return (
    <Section id="typography" title="Typography" description="Rendered with the Typography component.">
      <div className="showcase-type-list">
        {headings.map(heading => (
          <div key={heading} className="showcase-type-row">
            <div className="showcase-type-meta">
              <code>{heading}</code>
              <span className="showcase-muted">{specs(heading)}</span>
            </div>
            <Typography variant={heading}>{sample}</Typography>
          </div>
        ))}
        <div className="showcase-type-row">
          <div className="showcase-type-meta">
            <code>body</code>
            <span className="showcase-muted">{specs('body')}</span>
          </div>
          <Typography variant="body">{sample}</Typography>
        </div>
        <div className="showcase-type-row">
          <div className="showcase-type-meta">
            <code>caption</code>
          </div>
          <Typography variant="caption">{sample}</Typography>
        </div>
      </div>
    </Section>
  );
};

export default TypographyScale;
