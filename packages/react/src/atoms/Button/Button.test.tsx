import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders a button with default props', () => {
    const { getByRole } = render(<Button title="Default Button">Click me</Button>);
    
    const button = getByRole('button');
    expect(button).toHaveClass('ds-button ds-button-primary');
    expect(button).toHaveAttribute('title', 'Default Button');
    expect(button).not.toBeDisabled();
  });

  it('renders primary variant correctly', () => {
    const { getByRole } = render(
      <Button title="Primary Button" variant="primary">
        Primary
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveClass('ds-button ds-button-primary');
  });

  it('renders secondary variant correctly', () => {
    const { getByRole } = render(
      <Button title="Secondary Button" variant="secondary">
        Secondary
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveClass('ds-button ds-button-secondary');
  });

  it('handles disabled state correctly', () => {
    const { getByRole } = render(
      <Button title="Disabled Button" disabled>
        Disabled
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button title="Clickable Button" onClick={handleClick}>
        Click me
      </Button>
    );
    
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button title="Disabled Button" onClick={handleClick} disabled>
        Click me
      </Button>
    );
    
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Button title="Button with children">
        Custom Content
      </Button>
    );
    
    expect(getByText('Custom Content')).toBeInTheDocument();
  });

  it('renders danger variant correctly', () => {
    const { getByRole } = render(
      <Button title="Danger Button" variant="danger">
        Danger
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveClass('ds-button ds-button-danger');
  });
});