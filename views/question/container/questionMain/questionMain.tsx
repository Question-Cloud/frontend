"use client";

import { ErrorBoundaryWrapper } from "@/providers";
import { Filter, LoadingSpinner } from "@/shared";
import React, { Suspense } from "react";
import { QuestionList } from "../../components";
import { useQuestionMain } from "./useQuestionMain";

const QuestionMain = () => {
  const { questionListData } = useQuestionMain();

  return (
    <ErrorBoundaryWrapper>
      <div className="flex gap-[24px] w-full">
        <div>
          <Filter />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          {questionListData && <QuestionList questionListData={questionListData?.result} />}
        </Suspense>
      </div>
    </ErrorBoundaryWrapper>
  );
};

export { QuestionMain };
