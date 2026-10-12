import React from 'react';
import Accordion from './Accordion';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ui/scss/lib/Accordion.css';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Molecules/Accordion',
  component: Accordion,
  argTypes: {
    allowMultiple: {
      control: 'boolean',
    },
    defaultExpanded: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    title: 'Section 1',
    content: 'This is the content for section 1. It can contain any React node.',
  },
  {
    title: 'Section 2',
    content: 'This is the content for section 2. It can be text, components, or any JSX.',
  },
  {
    title: 'Section 3',
    content: (
      <div>
        <h4>Complex Content</h4>
        <p>This section demonstrates that accordion can contain complex JSX content.</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithDefaultExpanded: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: [0],
  },
};

export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
    defaultExpanded: [0, 1],
  },
};