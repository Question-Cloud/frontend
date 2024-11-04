import { AlignCenter, SidePadding } from "@/shared";
import { QuestionList } from "@/views/question";
import React from "react";

const QuestionSelfPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <QuestionList />
      </AlignCenter>
    </SidePadding>
  );
};

export default QuestionSelfPage;
