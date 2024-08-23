import React from "react";
import { Meta, StoryFn } from "@storybook/react";
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
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

// 기본 변형 스토리
export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
  children: "Default Button",
};

// Gray 변형 스토리
export const Gray = Template.bind({});
Gray.args = {
  variant: "gray",
  size: "default",
  children: "Gray Button",
};

// XL 사이즈 버튼 스토리
export const GrayLine = Template.bind({});
GrayLine.args = {
  variant: "grayLine",
  size: "default",
  children: "GrayLine Button",
};

// asChild를 사용하는 예제 스토리
export const AsChild = Template.bind({});
AsChild.args = {
  asChild: true,
  children: <span>❌ Button as a Child</span>,
  variant: "default",
  size: "default",
};
