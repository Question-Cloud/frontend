import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Picture } from "./picture";
import { Button } from "../Button";

const meta: Meta<typeof Picture> = {
  title: "Components/Picture",
  component: Picture,
  argTypes: {
    imagePath: {
      control: { type: "text" },
      description: "이미지 경로입니다.",
    },
    alt: {
      control: { type: "text" },
      description: "이미지 로딩 실패 시 대체 텍스트입니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Picture>;

export const Default: Story = {
  render: () => <Picture imagePath="https://github.com/shadcn.png" alt="" width={220} height={300} />,
};
