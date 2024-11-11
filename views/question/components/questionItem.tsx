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
import { Question as QuestionData } from "@/shared/api";
import { formatNumberWithCommas } from "@/utils";

const QuestionItem = ({ question }: { question: QuestionData }) => {
  return (
    <Question className="w-[calc(49.2%)] h-[220px]">
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
        <Button variant="text" className="w-full h-full hover:bg-gray_03/30">
          상세보기
        </Button>
      </QuestionFooter>
    </Question>
  );
};

export { QuestionItem };
