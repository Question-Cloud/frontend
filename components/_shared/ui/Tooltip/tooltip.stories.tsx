import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip";
import { TooltipProps } from "./types";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  render: (argTypes) => (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer">마우스를 올려보세요</div>
        </TooltipTrigger>
        <TooltipContent
          side={argTypes.position}
          align={argTypes.align}
          className="flex flex-col gap-[8px] bg-white border border-gray_01 px-[20px] py-[16px] rounded-[8px]"
        >
          <span className="text-red body1">난이도 가이드</span>
          <span className="text-black caption">1~2: 쉬운 2, 3점 / 3: 비킬러 / 4~5: 준킬러 / 6: 킬러</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  // 기본값 설정하는 방법
  args: {
    position: "right",
    align: "center",
  },
  argTypes: {
    position: {
      control: { type: "select" },
      description: "Tooltip의 위치입니다.",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: { type: "select" },
      description: "Tooltip의 내부 콘텐츠 정렬방식입니다.",
      options: ["center", "end", "start"],
    },
  },
};
