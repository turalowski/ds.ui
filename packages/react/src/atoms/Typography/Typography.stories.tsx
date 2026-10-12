import Typography from './Typography';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ui/scss/lib/Typography.css';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text with default size',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const CustomSize: Story = {
  args: {
    variant: 'body',
    children: 'Body text with custom size',
  },
};