import React from "react";
import {
  Question,
  QuestionContent,
  QuestionTitle,
  QuestionInfo,
  QuestionOptions,
  QuestionFooter,
  Button,
} from "@/shared";
import { QuestionItem as QuestionItemType } from "../api/question";
import { formatNumberWithCommas } from "@/utils";
import { useNavigator } from "@/hooks";
import { useParams } from "next/navigation";

const QuestionItem = ({ question }: { question: QuestionItemType }) => {
  const { type } = useParams();
  const { handlePush } = useNavigator();

  const handleNavigateDetailPage = (questionId: number) => {
    handlePush(`/question/${type}/${questionId}`);
  };

  return (
    <Question className="w-full h-[220px]">
      <QuestionContent>
        <QuestionTitle
          difficultyLevel={question.questionContent.questionLevel}
          title={question.questionContent.title}
        />
        <QuestionInfo
          writer={question.creator}
          category={`${question.questionContent.parentCategory} > ${question.questionContent.childCategory}`}
        />
        <QuestionOptions>
          <div className="body1">{formatNumberWithCommas(question.questionContent.price)}원</div>
        </QuestionOptions>
      </QuestionContent>
      <QuestionFooter>
        <Button
          variant="text"
          className="w-full h-full hover:bg-gray_03/30"
          onClick={() => handleNavigateDetailPage(question.questionContent.id)}
        >
          상세보기
        </Button>
      </QuestionFooter>
    </Question>
  );
};

export { QuestionItem };
