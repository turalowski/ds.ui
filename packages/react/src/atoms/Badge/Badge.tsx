import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  icon,
  count,
  className = '',
}) => {
  const baseClassName = `ds-badge ds-badge-${variant}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <span className={finalClassName}>
      {icon && <span className="ds-badge-icon">{icon}</span>}
      {children}
      {count !== undefined && <span className="ds-badge-count">{count}</span>}
    </span>
  );
};

export default Badge;