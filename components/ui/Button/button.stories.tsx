import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["navy", "gray", "grayLine"],
      description: "Button의 색상입니다.",
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
      description: "Button의 크기입니다.",
    },
    children: {
      control: { type: "text" },
      description: "Button 내부 콘텐츠입니다.",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Button을 다른 컴포넌트의 자식으로 넣을때 사용합니다.",
    },
    disabled: {
      control: "boolean",
      description: "checkbox를 비활성화하는 옵션입니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

// 각 스토리에 대한 타입 설정
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "navy",
    size: "medium",
    children: "Default Button",
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
    size: "medium",
    children: "Gray Button",
  },
};

export const GrayLine: Story = {
  args: {
    variant: "grayLine",
    size: "medium",
    children: "GrayLine Button",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <span>❌ Button as a Child</span>,
    variant: "navy",
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    variant: "navy",
    size: "medium",
    children: "Disabled Button",
    disabled: true,
  },
};
