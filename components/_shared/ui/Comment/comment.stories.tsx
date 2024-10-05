import { Meta, StoryObj } from "@storybook/react";
import { Comment, CommentHeader, CommentBody, CommentFooter } from "./comment";
import { Rating } from "../Rating";
import { Badge } from "../Badge";

const meta: Meta<typeof Comment> = {
  title: "Components/Comment",
  component: Comment,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  render: () => (
    <Comment>
      <CommentHeader profileImage="" userName="이지현" />
      <CommentBody content="현재 Backend 1명과 함께 진행 중인 사이드 프로젝트로 수능 기출, 자작 문제를 모아 이커머스 형식으로 구성하여 사용자들이 원하는 문제를 구매하여 나만의 커스텀 문제집을 만들어 출력할 수 있는 서비스입니다." />
      <CommentFooter timestamp="2024.10.02 12:34" isWriter={true} onDelete={() => console.log("Comment deleted")} />
    </Comment>
  ),
};

export const CommentWithRating: Story = {
  render: () => (
    <Comment>
      <CommentHeader profileImage="" userName="이지현" />
      <Rating rate={4} className="mt-[8px]" />
      <CommentBody content="프론트엔드 개발자입니다." />
      <CommentFooter timestamp="2024.10.02 12:34" isWriter={true} onDelete={() => console.log("Comment deleted")} />
    </Comment>
  ),
};

export const CommentWithBadge: Story = {
  render: () => (
    <Comment>
      <div className="flex items-center">
        <CommentHeader profileImage="" userName="이지현" className="mr-[5px]" />
        <Badge>크리에이터</Badge>
      </div>
      <CommentBody content="현재 Backend 1명과 함께 진행 중인 사이드 프로젝트로 수능 기출, 자작 문제를 모아 이커머스 형식으로 구성하여 사용자들이 원하는 문제를 구매하여 나만의 커스텀 문제집을 만들어 출력할 수 있는 서비스입니다." />
      <CommentFooter timestamp="2024.10.02 12:34" isWriter={true} onDelete={() => console.log("Comment deleted")} />
    </Comment>
  ),
};
