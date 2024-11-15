import { Question } from "../api/question";
import React from "react";
import { QuestionItem } from "./questionItem";

const QuestionList = ({ questionListData }: { questionListData: Question[] }) => {
  return questionListData.map((question) => <QuestionItem key={question.id} question={question} />);
};

export { QuestionList };
