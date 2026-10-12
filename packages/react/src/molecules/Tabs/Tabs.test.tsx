import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Tabs from './Tabs';

const items = [
  { label: 'Tab 1', content: 'Content 1' },
  { label: 'Tab 2', content: 'Content 2' },
  { label: 'Tab 3', content: 'Content 3', disabled: true },
];

describe('Tabs', () => {
  it('links the active tab to its panel', () => {
    render(<Tabs items={items} />);

    const tab = screen.getByRole('tab', { name: 'Tab 1' });
    const panel = screen.getByRole('tabpanel', { name: 'Tab 1' });
    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(tab).toHaveAttribute('aria-controls', panel.id);
    expect(panel).toHaveTextContent('Content 1');
  });

  it('switches tabs on click and ignores disabled tabs', () => {
    render(<Tabs items={items} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2');

    fireEvent.click(screen.getByRole('tab', { name: 'Tab 3' }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2');
  });

  it('moves focus and selection with arrow, Home and End keys, skipping disabled tabs', () => {
    render(<Tabs items={items} />);

    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    tab1.focus();

    fireEvent.keyDown(tab1, { key: 'ArrowRight' });
    expect(tab2).toHaveFocus();
    expect(tab2).toHaveAttribute('aria-selected', 'true');

    // Tab 3 is disabled, so ArrowRight wraps around to Tab 1.
    fireEvent.keyDown(tab2, { key: 'ArrowRight' });
    expect(tab1).toHaveFocus();

    fireEvent.keyDown(tab1, { key: 'ArrowLeft' });
    expect(tab2).toHaveFocus();

    fireEvent.keyDown(tab2, { key: 'Home' });
    expect(tab1).toHaveFocus();

    fireEvent.keyDown(tab1, { key: 'End' });
    expect(tab2).toHaveFocus();
  });

  it('keeps only the active tab in the tab order', () => {
    render(<Tabs items={items} defaultActiveTab={1} />);

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('tabindex', '0');
  });

  it('renders without crashing when there are no items or the active index is out of range', () => {
    const { rerender } = render(<Tabs items={[]} />);
    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();

    rerender(<Tabs items={items} activeTab={10} />);
    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('tabindex', '0');
  });
});
