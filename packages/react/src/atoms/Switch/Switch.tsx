import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  className = '',
}) => {
  const baseClassName = `ds-switch ds-switch-${size} ${checked ? 'ds-switch-checked' : ''}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className={`ds-switch-wrapper ${disabled ? 'ds-switch-disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="ds-switch-input"
      />
      <span className={`${finalClassName} ${disabled ? 'ds-switch-disabled' : ''}`}>
        <span className="ds-switch-slider" />
      </span>
      {label && <span className={`ds-switch-label ${disabled ? 'ds-switch-disabled' : ''}`}>{label}</span>}
    </label>
  );
};

export default Switch;