import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "gray", "grayLine"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "xl", "lg"],
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
    variant: "default",
    size: "default",
    children: "Default Button",
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
    size: "default",
    children: "Gray Button",
  },
};

export const GrayLine: Story = {
  args: {
    variant: "grayLine",
    size: "default",
    children: "GrayLine Button",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <span>❌ Button as a Child</span>,
    variant: "default",
    size: "default",
  },
};
