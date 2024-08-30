import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxInput, CheckboxLabel } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    id: {
      control: { type: "text" },
      description: "각 checkbox를 판별하기위한 고유 id입니다.",
    },
    children: {
      control: { type: "text" },
      description: "checkbox 내부에 들어갈 콘텐츠입니다.",
    },
    disabled: {
      control: "boolean",
      description: "checkbox를 비활성화하는 옵션입니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  render: (args) => (
    <Checkbox id="checkbox-1" disabled={args.disabled}>
      <CheckboxInput />
    </Checkbox>
  ),
  args: {
    disabled: false,
  },
};

export const Checked: Story = {
  render: (args) => (
    <Checkbox id="checkbox-2" disabled={args.disabled}>
      <CheckboxInput checked />
    </Checkbox>
  ),
  args: {
    disabled: false,
  },
};

export const WithContent: Story = {
  render: (args) => (
    <Checkbox id="checkbox-3" disabled={args.disabled}>
      <CheckboxInput />
      <CheckboxLabel>{args.children}</CheckboxLabel>
    </Checkbox>
  ),
  args: {
    disabled: false,
    children: "이용약관에 동의합니다",
  },
};

export const ManyCheckbox: Story = {
  render: (args) => (
    <div className="flex flex-col gap-[6px]">
      <Checkbox id="checkbox-4" disabled={args.disabled}>
        <CheckboxInput />
        <CheckboxLabel>체크박스 1</CheckboxLabel>
      </Checkbox>
      <Checkbox id="checkbox-5" disabled={args.disabled}>
        <CheckboxInput />
        <CheckboxLabel>체크박스 2</CheckboxLabel>
      </Checkbox>
      <Checkbox id="checkbox-6" disabled={args.disabled}>
        <CheckboxLabel>체크박스 3</CheckboxLabel>
        <CheckboxInput />
      </Checkbox>
    </div>
  ),
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Checkbox id="checkbox-7" disabled>
      <CheckboxInput />
      <CheckboxLabel>{args.children}</CheckboxLabel>
    </Checkbox>
  ),
  args: {
    children: "비활성화된 Checkbox",
  },
};
