import React from 'react';
import Switch from './Switch';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ui/scss/lib/Switch.css';

const meta: Meta<typeof Switch> = {
  title: 'Design System/Atoms/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    label: {
      control: 'text',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Toggle me',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Active state',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled state',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="small" label="Small size" />
      <Switch size="medium" label="Medium size" />
      <Switch size="large" label="Large size" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};