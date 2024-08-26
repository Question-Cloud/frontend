import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./dialog";
import { Box, Button, Input } from "..";

interface DialogStoryProps {
  title: string;
  content: string | React.ReactNode;
}

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<DialogStoryProps>;

export const Default: Story = {
  render: ({ title, content, ...args }) => (
    <Dialog {...args}>
      <DialogTrigger>
        <Button>Open Default Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"gray"}>취소하기</Button>
          </DialogClose>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  args: {
    title: "제목을 입력해주세요",
    content: "텍스트로 된 설명을 입력해주세요",
  },
};

export const Complex: Story = {
  render: ({ title, content, ...args }) => (
    <Dialog {...args}>
      <DialogTrigger>
        <Button>Open Complex Dialog</Button>
      </DialogTrigger>
      <DialogContent className="w-[830px]">
        <DialogHeader>
          <DialogTitle className="text-left">{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-[276px]">
          <DialogClose asChild>
            <Button variant={"gray"}>취소하기</Button>
          </DialogClose>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  args: {
    title: "쿠폰 선택",
    content: (
      <>
        <div className="flex gap-[8px] items-end mb-[32px]">
          <Input placeholder="쿠폰 코드를 입력해주세요" label="쿠폰 등록" />
          <Button variant={"grayLine"} size="large" className="w-[60px] ">
            등록
          </Button>
        </div>
        <div>
          <div className="body1 text-left mb-[6px]">보유 쿠폰 목록</div>
          <Box className="mb-[8px]">쿠폰입니다</Box>
          <Box>쿠폰입니다</Box>
        </div>
      </>
    ),
  },
};
