import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('associates the label with the input', () => {
    render(<Input label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInstanceOf(HTMLInputElement);
  });

  it('uses a provided id', () => {
    render(<Input label="Email" id="email" />);

    expect(screen.getByLabelText('Email')).toHaveAttribute('id', 'email');
  });

  it('marks the input invalid and describes it with the error message', () => {
    render(<Input label="Email" error="Invalid email" aria-describedby="hint" />);

    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.getAttribute('aria-describedby')).toContain('hint');
    expect(input).toHaveAccessibleDescription('Invalid email');
  });

  it('keeps the base classes when a className is passed', () => {
    render(<Input label="Email" className="custom" error="Invalid email" />);

    expect(screen.getByLabelText('Email')).toHaveClass('ds-input', 'ds-input-error', 'custom');
  });
});
