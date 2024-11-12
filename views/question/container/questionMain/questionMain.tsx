"use client";

import { ErrorBoundaryWrapper } from "@/providers";
import { Filter, LoadingSpinner } from "@/shared";
import React, { Suspense, useCallback } from "react";
import { QuestionList } from "../../components";
import { useQuestionList } from "../../components";

const QuestionMain = () => {
  const { questionListData, questionListRefetch } = useQuestionList();

  const refetch = useCallback(() => {
    questionListRefetch();
  }, []);

  return (
    <ErrorBoundaryWrapper>
      <div className="flex gap-[24px] w-full">
        <div>
          <Filter refetch={refetch} />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <section className="w-full flex flex-wrap justify-between gap-[12px]">
            {questionListData && <QuestionList questionListData={questionListData?.result} />}
          </section>
        </Suspense>
      </div>
    </ErrorBoundaryWrapper>
  );
};

export { QuestionMain };
