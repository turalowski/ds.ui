import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ui/scss/lib/Button.css';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Primary Button',
    children: 'Primary Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    children: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger Button',
    children: 'Danger Button',
    variant: 'danger',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};