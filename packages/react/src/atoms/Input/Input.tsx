import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ 
  label,
  error,
  ...props
}) => {
  return (
    <div className="ds-input-wrapper">
      {label && (
        <label className="ds-input-label">
          {label}
        </label>
      )}
      <input
        className={`ds-input ${error ? 'ds-input-error' : ''}`}
        {...props}
      />
      {error && (
        <div className="ds-input-error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;