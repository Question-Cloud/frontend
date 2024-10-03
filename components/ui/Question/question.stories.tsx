import { Meta, StoryObj } from "@storybook/react";
import { Question, QuestionContent, QuestionTitle, QuestionInfo, QuestionOptions, QuestionFooter } from "./question";
import { Separator } from "../Separator";
import { Button } from "../Button";
import { NoteIcon, SearchIcon } from "../Icons";

const meta: Meta<typeof Question> = {
  title: "Components/Question",
  component: Question,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Question>;

export const Default: Story = {
  render: () => (
    <Question className="w-[300px]">
      <QuestionContent>
        <QuestionTitle difficultyLevel="Level3" title="유전이 유전유전" />
        <QuestionInfo writer="이지현" category="생명과학 > 유전" />
        <QuestionOptions>
          <div className="body1">500원</div>
        </QuestionOptions>
      </QuestionContent>
      <QuestionFooter>
        <Button variant="text" className="w-full h-full">
          상세보기
        </Button>
      </QuestionFooter>
    </Question>
  ),
};

export const PurchasedQuestion: Story = {
  render: () => (
    <Question className="w-[300px]">
      <QuestionContent>
        <QuestionTitle difficultyLevel="Level5" title="내가 구매한 문제" />
        <QuestionInfo writer="이지현" category="생명과학 > 유전" />
        <QuestionOptions>
          <Button variant="grayLine" size="small" asChild>
            <div className="flex gap-[4px] items-center">
              <NoteIcon color="navy" size="18" />
              <span className="caption pt-[2px]">문제보기</span>
            </div>
          </Button>
          <Button variant="grayLine" size="small" asChild>
            <div className="flex gap-[4px] items-center">
              <SearchIcon color="navy" size="18" />
              <span className="caption pt-[2px]">해설보기</span>
            </div>
          </Button>
        </QuestionOptions>
      </QuestionContent>
      <QuestionFooter>
        <Button variant="text" className="w-full h-full">
          문제평점 작성하기
        </Button>
        <Separator orientation="vertical" className="mx-[4px] h-[20px]" />
        <Button variant="text" className="w-full h-full">
          오류게시판
        </Button>
      </QuestionFooter>
    </Question>
  ),
};
