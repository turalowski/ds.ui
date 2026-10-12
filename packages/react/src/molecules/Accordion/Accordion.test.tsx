import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Accordion from './Accordion';

const items = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
];

describe('Accordion', () => {
  it('renders headers as buttons linked to their panels', () => {
    render(<Accordion items={items} />);

    const header = screen.getByRole('button', { name: 'Section 1' });
    expect(header).toHaveAttribute('aria-expanded', 'false');

    const panelId = header.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();
    expect(document.getElementById(panelId as string)).not.toBeVisible();
  });

  it('expands and collapses an item when its header is clicked', () => {
    render(<Accordion items={items} />);

    const header = screen.getByRole('button', { name: 'Section 1' });
    fireEvent.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('region', { name: 'Section 1' })).toHaveTextContent('Content 1');

    fireEvent.click(header);
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('only keeps one item open unless allowMultiple is set', () => {
    const { rerender } = render(<Accordion items={items} defaultExpanded={[0]} />);

    fireEvent.click(screen.getByRole('button', { name: 'Section 2' }));
    expect(screen.getByRole('button', { name: 'Section 1' })).toHaveAttribute('aria-expanded', 'false');

    rerender(<Accordion key="multiple" items={items} defaultExpanded={[0]} allowMultiple />);
    fireEvent.click(screen.getByRole('button', { name: 'Section 2' }));
    expect(screen.getByRole('button', { name: 'Section 1' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Section 2' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('applies extra props to the root element', () => {
    const { container } = render(<Accordion items={items} data-testid="root" />);

    expect(container.firstChild).toHaveAttribute('data-testid', 'root');
    expect(screen.getAllByTestId('root')).toHaveLength(1);
  });

  it('calls onExpandedChange in controlled mode without changing on its own', () => {
    const handleChange = jest.fn();
    render(<Accordion items={items} expandedItems={[]} onExpandedChange={handleChange} />);

    const header = screen.getByRole('button', { name: 'Section 1' });
    fireEvent.click(header);
    expect(handleChange).toHaveBeenCalledWith([0]);
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });
});
