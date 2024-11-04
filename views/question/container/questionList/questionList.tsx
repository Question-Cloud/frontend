import { ErrorBoundaryWrapper } from "@/providers";
import { Filter } from "@/shared";
import React from "react";

const QuestionList = () => {
  return (
    <ErrorBoundaryWrapper>
      <Filter />
    </ErrorBoundaryWrapper>
  );
};

export { QuestionList };
