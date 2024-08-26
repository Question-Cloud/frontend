import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["red", "navy"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    variant: "red",
    children: "뱃지입니다",
  },
};
