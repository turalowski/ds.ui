import React from 'react';
import { Typography } from '@ds.ui/react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Section = ({ id, title, description, children }: SectionProps) => (
  <section id={id} className="showcase-section" aria-labelledby={`${id}-title`}>
    <header className="showcase-section-header">
      <Typography variant="h2" className="showcase-section-title">
        <span id={`${id}-title`}>{title}</span>
      </Typography>
      {description && <Typography className="showcase-muted">{description}</Typography>}
    </header>
    {children}
  </section>
);

export const Subsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="showcase-subsection">
    <Typography variant="h4" className="showcase-subsection-title">
      {title}
    </Typography>
    {children}
  </div>
);

export default Section;
