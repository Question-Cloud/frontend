import React, { useEffect, useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./input";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password"],
    },
    placeholder: {
      control: { type: "text" },
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "텍스트를 입력해주세요",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
  },
};

export const Labeled: Story = {
  args: {
    type: "text",
    placeholder: "라벨이 있는 Input",
    label: "라벨명",
  },
};

export const Required: Story = {
  args: {
    type: "text",
    placeholder: "필수 입력 Input",
    label: "필수값",
    isRequired: true,
  },
};

export const Focus: StoryObj<InputProps> = {
  args: {
    type: "text",
    className: "border-gray_04",
    placeholder: "Focus State",
  },
};

export const Error: Story = {
  args: {
    type: "text",
    className: "border-red focus:border-red",
    placeholder: "Error State",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled",
    disabled: true,
  },
};
