import { QuestionItem as QuestionItemType } from "../api/question";
import React from "react";
import { QuestionItem } from "./questionItem";

const QuestionList = ({ questionListData }: { questionListData: QuestionItemType[] }) => {
  return questionListData.map((question) => <QuestionItem key={question.questionContent.id} question={question} />);
};

export { QuestionList };
