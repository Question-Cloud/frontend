import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      description: "Separator의 방향입니다.",
    },
    decorative: {
      description: "가능 여부입니다.",
      defaultValue: true,
    },
    className: {
      description: "추가적인 스타일을 입력합니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

// Template 생성
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => <Separator orientation="horizontal" />,
};

export const Vertical: Story = {
  render: () => <Separator orientation="vertical" className="h-[50px]" />,
};

export const Custom: Story = {
  render: () => <Separator orientation="horizontal" className="bg-green" />,
};
