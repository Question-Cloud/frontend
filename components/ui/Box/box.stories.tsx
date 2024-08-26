import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "./box";
import { Button } from "../Button";

const meta: Meta = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const WithString: Story = {
  args: {
    children: "일반 문자열 형식을 삽입할 수 있습니다.",
  },
};

export const WithObject: Story = {
  args: {
    children: (
      <div className="flex items-center gap-[8px]">
        <Button className="w-[80px]">버튼</Button>컴포넌트를 삽입할 수 있습니다.
      </div>
    ),
  },
};
