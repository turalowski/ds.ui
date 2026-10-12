import React from 'react';
import Tabs from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ui/scss/lib/Tabs.css';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Molecules/Tabs',
  component: Tabs,
  argTypes: {
    defaultActiveTab: {
      control: 'number',
    },
    activeTab: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const sampleItems = [
  {
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>,
  },
  {
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>,
  },
  {
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      ...sampleItems.slice(0, 2),
      {
        label: 'Disabled Tab',
        content: <div>This content won't be shown</div>,
        disabled: true,
      },
    ],
  },
};

export const CustomInitialTab: Story = {
  args: {
    items: sampleItems,
    defaultActiveTab: 1,
  },
};