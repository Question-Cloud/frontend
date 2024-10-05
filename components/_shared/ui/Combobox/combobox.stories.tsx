import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "./combobox";
import { ComboboxProps } from "./types";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "value 값이 선택되지 않았을때 기본 노출 텍스트입니다.",
    },
    options: {
      control: { type: "object" },
      description: "value, label 속성을 가진 배열 형태의 option 객체입니다.",
    },
    value: {
      control: { type: "text" },
      description: "현재 선택된 value 값입니다.",
    },
    setValue: {
      action: "setValue",
      description: "value를 업데이트하는 함수입니다.",
    },
    className: {
      control: { type: "text" },
      description: "추가적인 CSS 클래스입니다.",
    },
    label: {
      control: { type: "text" },
      description: "Combobox 상단에 노출될 라벨명입니다.",
    },
    isRequired: {
      control: { type: "boolean" },
      description: "필수 입력필드를 판단하는 값입니다",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ComboboxProps>;

const options = [
  { label: "옵션 1", value: "옵션 1" },
  { label: "옵션 2", value: "옵션 2" },
  { label: "옵션 3", value: "옵션 3" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <Combobox {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder: "옵션을 선택하세요",
    options: options,
    className: "w-[320px]",
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <Combobox {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder: "옵션을 선택하세요",
    options: options,
    className: "w-[320px]",
    label: "라벨명",
  },
};

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <Combobox {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder: "옵션을 선택하세요",
    options: options,
    className: "w-[320px]",
    label: "필수값",
    isRequired: true,
  },
};

export const WithSelectedValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("옵션 1");

    return <Combobox {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder: "Select an option",
    options: options,
    className: "w-[320px]",
  },
};

export const NoOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <Combobox {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder: "옵션을 선택하세요",
    options: [],
    className: "w-[320px]",
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <Combobox {...args} value={value} setValue={setValue} />;
  },
  args: {
    placeholder: "비활성화된 Combobox",
    options: options,
    className: "w-[320px] pointer-events-none opacity-50",
  },
};
