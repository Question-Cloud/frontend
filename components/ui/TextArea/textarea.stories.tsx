import React, { useEffect, useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Textarea, TextareaProps } from "./textarea";

const meta: Meta<TextareaProps> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Textarea에 값이 입력되지 않았을때 기본 노출 텍스트입니다.",
    },
    disabled: {
      control: "boolean",
      description: "Textarea를 비활성화하는 옵션입니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    placeholder: "내용을 입력해주세요",
  },
};

export const Labeled: Story = {
  args: {
    placeholder: "라벨이 있는 Textarea",
    label: "라벨명",
  },
};

export const Required: Story = {
  args: {
    placeholder: "필수 입력 Textarea",
    label: "필수값",
    isRequired: true,
  },
};

export const Focus: StoryObj<TextareaProps> = {
  args: {
    className: "border-gray_04",
    placeholder: "Focus State",
  },
};

export const Error: Story = {
  args: {
    className: "border-red focus:border-red",
    placeholder: "Error State",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};
