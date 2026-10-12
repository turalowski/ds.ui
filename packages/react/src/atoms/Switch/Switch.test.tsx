import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {
  it('exposes a labelled switch role', () => {
    render(<Switch label="Notifications" />);

    expect(screen.getByRole('switch', { name: 'Notifications' })).not.toBeChecked();
  });

  it('toggles on its own when uncontrolled', () => {
    const handleChange = jest.fn();
    render(<Switch label="Notifications" defaultChecked onChange={handleChange} />);

    const control = screen.getByRole('switch');
    expect(control).toBeChecked();

    fireEvent.click(control);
    expect(control).not.toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('follows the checked prop when controlled', () => {
    const handleChange = jest.fn();
    render(<Switch label="Notifications" checked={false} onChange={handleChange} />);

    const control = screen.getByRole('switch');
    fireEvent.click(control);
    expect(handleChange).toHaveBeenCalledWith(true);
    expect(control).not.toBeChecked();
  });

  it('disables the underlying control', () => {
    render(<Switch label="Notifications" disabled />);

    expect(screen.getByRole('switch')).toBeDisabled();
  });
});
