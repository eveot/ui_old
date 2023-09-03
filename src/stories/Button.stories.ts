import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../components";

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'default',
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    mode: 'outline',
    label: 'Button',
  },
};
