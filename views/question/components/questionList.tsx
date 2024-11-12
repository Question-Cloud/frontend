import { Question } from "@/shared/api";
import React from "react";
import { QuestionItem } from "./questionItem";

const QuestionList = ({ questionListData }: { questionListData: Question[] }) => {
  return questionListData.map((question) => <QuestionItem key={question.id} question={question} />);
};

export { QuestionList };
