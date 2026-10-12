import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  ...rest
}) => {
  const buttonClassName = `ds-button ds-button-${variant} ${className}`.trim();

  return (
    <button
      className={buttonClassName}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
