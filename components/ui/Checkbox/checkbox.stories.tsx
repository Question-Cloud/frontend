import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    id: {
      control: { type: "text" },
    },
    content: {
      control: { type: "text" },
    },
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithContent: Story = {
  args: {
    checked: false,
    content: "이용약관에 동의합니다",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    content: "비활성화",
  },
};
