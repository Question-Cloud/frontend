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
import { Question as QuestionData } from "../api/question";
import { formatNumberWithCommas } from "@/utils";
import { useNavigator } from "@/hooks";
import { useParams } from "next/navigation";

const QuestionItem = ({ question }: { question: QuestionData }) => {
  const { type } = useParams();
  const { handlePush } = useNavigator();

  const handleNavigateDetailPage = (id: number) => {
    handlePush(`/question/${type}/${id}`);
  };

  return (
    <Question className="w-full h-[220px]">
      <QuestionContent>
        <QuestionTitle difficultyLevel={question.questionLevel} title={question.title} />
        <QuestionInfo
          writer={question.creatorName}
          category={`${question.parentCategory} > ${question.childCategory}`}
        />
        <QuestionOptions>
          <div className="body1">{formatNumberWithCommas(question.price)}원</div>
        </QuestionOptions>
      </QuestionContent>
      <QuestionFooter>
        <Button
          variant="text"
          className="w-full h-full hover:bg-gray_03/30"
          onClick={() => handleNavigateDetailPage(question.id)}
        >
          상세보기
        </Button>
      </QuestionFooter>
    </Question>
  );
};

export { QuestionItem };
