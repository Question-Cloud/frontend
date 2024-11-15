import React from "react";
import { FilterProvider } from "@/providers";
import { QuestionDetail } from "@/views/question";

const QuestionSelfPage = () => {
  return (
    <FilterProvider>
      <QuestionDetail />
    </FilterProvider>
  );
};

export default QuestionSelfPage;
