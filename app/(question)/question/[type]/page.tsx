import { FilterProvider } from "@/providers";
import { QuestionMain } from "@/views/question";
import React from "react";

const QuestionSelfPage = () => {
  return (
    <FilterProvider>
      <QuestionMain />
    </FilterProvider>
  );
};

export default QuestionSelfPage;
