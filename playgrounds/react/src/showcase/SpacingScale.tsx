import React, { useEffect, useRef, useState } from 'react';
import { Spacing } from '@ds.ui/foundation';
import Section from './Section';

const sizes = Object.keys(Spacing) as (keyof typeof Spacing)[];

const SpacingScale = () => {
  const boxRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [widths, setWidths] = useState<Record<string, string>>({});

  // Measure the rendered ds-width-* utilities so the labels match the compiled SCSS.
  useEffect(() => {
    setWidths(
      Object.fromEntries(
        sizes.map(size => [size, boxRefs.current[size] ? getComputedStyle(boxRefs.current[size]!).width : ''])
      )
    );
  }, []);

  return (
    <Section
      id="spacing"
      title="Spacing"
      description="The spacing scale behind the Margin component and the ds-margin-* / ds-width-* utilities."
    >
      <div className="showcase-spacing-list">
        {sizes.map(size => (
          <div key={size} className="showcase-spacing-row">
            <code className="showcase-spacing-name">{size}</code>
            <span className="showcase-muted showcase-spacing-value">{widths[size] || '—'}</span>
            <div
              ref={element => {
                boxRefs.current[size] = element;
              }}
              className={`showcase-spacing-bar ds-width-${size}`}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SpacingScale;
