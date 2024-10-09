import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  argTypes: {
    isLogin: { control: "boolean" },
    isAlreadyCreator: { control: "boolean" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => <Header {...args} />,
  args: {
    isLogin: false,
    isAlreadyCreator: false,
  },
};

export const LoggedInButNotCreator: Story = {
  render: (args) => <Header {...args} />,
  args: {
    isLogin: true,
    isAlreadyCreator: false,
  },
};

export const LoggedInAndCreator: Story = {
  render: (args) => <Header {...args} />,
  args: {
    isLogin: true,
    isAlreadyCreator: true,
  },
};
