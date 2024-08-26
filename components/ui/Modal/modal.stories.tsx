import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalClose,
} from "./modal";
import { Box, Button, Input } from "..";

interface ModalStoryProps {
  title: string;
  content: string | React.ReactNode;
}

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ModalStoryProps>;

export const Default: Story = {
  render: ({ title, content, ...args }) => (
    <Modal {...args}>
      <ModalTrigger>
        <Button>Open Default Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{content}</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant={"gray"}>취소하기</Button>
          </ModalClose>
          <Button>확인</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
  args: {
    title: "제목을 입력해주세요",
    content: "텍스트로 된 설명을 입력해주세요",
  },
};

export const Complex: Story = {
  render: ({ title, content, ...args }) => (
    <Modal {...args}>
      <ModalTrigger>
        <Button>Open Complex modal</Button>
      </ModalTrigger>
      <ModalContent className="w-[830px]">
        <ModalHeader>
          <ModalTitle className="text-left">{title}</ModalTitle>
          <ModalDescription>{content}</ModalDescription>
        </ModalHeader>
        <ModalFooter className="w-[276px]">
          <ModalClose asChild>
            <Button variant={"gray"}>취소하기</Button>
          </ModalClose>
          <Button>확인</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
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
