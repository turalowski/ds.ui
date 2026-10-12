import React, { useId } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = '',
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  const inputClassName = ['ds-input', error ? 'ds-input-error' : '', className].filter(Boolean).join(' ');
  const describedBy = [ariaDescribedBy, error ? errorId : ''].filter(Boolean).join(' ') || undefined;

  return (
    <div className="ds-input-wrapper">
      {label && (
        <label className="ds-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        aria-invalid={error ? true : undefined}
        {...props}
        id={inputId}
        className={inputClassName}
        aria-describedby={describedBy}
      />
      {error && (
        <div id={errorId} className="ds-input-error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
