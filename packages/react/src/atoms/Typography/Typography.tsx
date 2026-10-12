import React from 'react';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';

export interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
}) => {

  const baseClassName = `ds-typography ds-typography-${variant}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  const Component = variant.match(/^h[1-6]$/) ? variant : 'p';

  return (
    <Component className={finalClassName}>
      {children}
    </Component>
  );
};

export default Typography;