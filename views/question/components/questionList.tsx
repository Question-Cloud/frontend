import { Question } from "@/shared/api";
import React from "react";
import { QuestionItem } from "./questionItem";
import { AlignCenter, QuestionNotExist } from "@/shared";

const QuestionList = ({ questionListData }: { questionListData: Question[] }) => {
  return questionListData.length > 0 ? (
    questionListData.map((question) => <QuestionItem key={question.id} question={question} />)
  ) : (
    <AlignCenter className="w-full">
      <div className="flex flex-col items-center gap-[12px]">
        <QuestionNotExist size="48" color="gray_04" />
        <div className="body1 text-gray_04">등록된 문제가 없어요</div>
      </div>
    </AlignCenter>
  );
};

export { QuestionList };
