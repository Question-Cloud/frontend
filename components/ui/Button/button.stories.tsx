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
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
    },
    asChild: {
      control: { type: "boolean" },
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
