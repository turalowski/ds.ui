import React from 'react';
import Badge from './Badge';
import type { Meta, StoryObj } from '@storybook/react';
import { FiCheck, FiAlertTriangle, FiAlertCircle } from 'react-icons/fi';

import '@ds.ui/scss/lib/Badge.css';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    children: {
      control: 'text',
    },
    count: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
    icon: <FiCheck />,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
    icon: <FiAlertTriangle />,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
    icon: <FiAlertCircle />,
  },
};

export const WithCount: Story = {
  args: {
    children: 'Messages',
    count: 5,
  },
};

export const WithIconAndCount: Story = {
  args: {
    variant: 'success',
    children: 'Completed',
    icon: <FiCheck />,
    count: 12,
  },
};

export const BadgeGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success" icon={<FiCheck />}>Success</Badge>
      <Badge variant="warning" icon={<FiAlertTriangle />}>Warning</Badge>
      <Badge variant="error" icon={<FiAlertCircle />}>Error</Badge>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children: 'This is a very long badge text',
    count: 99,
  },
};