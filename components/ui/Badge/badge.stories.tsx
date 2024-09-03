import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["red", "navy"],
      description: "Badge의 색상입니다.",
    },
    children: {
      control: { type: "text" },
      description: "Badge의 내부 콘텐츠입니다.",
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
