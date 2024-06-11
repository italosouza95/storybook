import type { Meta, StoryObj } from '@storybook/angular/';
import { ButtonComponent } from './button.component';
import { fn } from '@storybook/test';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description:
        'is a required @Input that receives the button data. his type is IButton.',
      table: { category: '@Input' },
    },
    clicked: {
      description:
        'Method called when the user clicks on this button, and will emit an event to his parent component.',
      table: { category: '@Output' },
    },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Disabled: Story = {
  args: {
    data: {
      theme: 'default',
      label: 'Disabled Button',
      hoverText: 'Hi there! (Disabled)',
      disabled: true,
    },
  },
};

export const Stroked: Story = {
  args: {
    data: {
      theme: 'stroked',
      label: 'Stroked Button',
      hoverText: 'Hi there! (Stroked)',
      disabled: false,
    },
  },
};

export const Default: Story = {
  args: {
    data: {
      theme: 'default',
      label: 'Default Button',
      hoverText: 'Hi there!',
      disabled: false,
    },
  },
};

export const Primary: Story = {
  args: {
    data: {
      theme: 'primary',
      label: 'Primary Button',
      hoverText: 'Hi there! (Primary)',
      disabled: false,
    },
  },
};

export const Warning: Story = {
  args: {
    data: {
      theme: 'warning',
      label: 'Warning Button',
      hoverText: 'Hi there! (Warning)',
      disabled: false,
    },
  },
};

export const Danger: Story = {
  args: {
    data: {
      theme: 'danger',
      label: 'Danger Button',
      hoverText: 'Hi there! (Danger)',
      disabled: false,
    },
  },
};
