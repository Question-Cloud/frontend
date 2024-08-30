import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";
import { Button } from "@/components/ui";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/ui";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Collapsible의 Open 상태입니다.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Collapsible의 Open 상태를 변경하는 함수입니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full border border-gray_02 rounded-[8px]"
        {...args}
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="grayLine"
            size="large"
            className="border-none justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            눌러서 열어보세요
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-[12px] mt-[4px]">
          <div className="flex flex-col gap-[8px]">
            <div>Sub item 1</div>
            <div>Sub item 2</div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Open: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full border border-gray_02 rounded-[8px]"
        {...args}
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="grayLine"
            size="large"
            className="border-none justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            눌러서 열어보세요
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-[12px] mt-[4px]">
          <div className="flex flex-col gap-[12px]">
            <div>Sub item 1</div>
            <div>Sub item 2</div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
