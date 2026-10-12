import React, { useState } from 'react';

export interface SwitchProps {
  /** Controlled state. Leave undefined to let the switch manage its own state. */
  checked?: boolean;
  /** Initial state when uncontrolled. */
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  className = '',
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const baseClassName = `ds-switch ds-switch-${size} ${isChecked ? 'ds-switch-checked' : ''}`;
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event.target.checked);
  };

  return (
    <label className={`ds-switch-wrapper ${disabled ? 'ds-switch-disabled' : ''}`}>
      <input
        type="checkbox"
        role="switch"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="ds-switch-input"
      />
      <span className={`${finalClassName} ${disabled ? 'ds-switch-disabled' : ''}`} aria-hidden="true">
        <span className="ds-switch-slider" />
      </span>
      {label && <span className={`ds-switch-label ${disabled ? 'ds-switch-disabled' : ''}`}>{label}</span>}
    </label>
  );
};

export default Switch;
