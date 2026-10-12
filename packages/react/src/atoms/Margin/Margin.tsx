import React from 'react';
import { Spacing } from '@ds.ui/foundation';

export interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const Margin: React.FC<MarginProps> = ({
  space = 'xxxs',
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``;

  if (!left && !right && !top && !bottom) {
    className = `ds-margin-${space}`;
  }

  if (left) {
    className = `${className} ds-margin-left-${space}`;
  }

  if (right) {
    className = `${className} ds-margin-right-${space}`;
  }

  if (top) {
    className = `${className} ds-margin-top-${space}`;
  }

  if (bottom) {
    className = `${className} ds-margin-bottom-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
