"use client";

import { ErrorBoundaryWrapper, FilterProvider, useFilterContext } from "@/providers";
import { Filter, LoadingSpinner } from "@/shared";
import React, { Suspense, useCallback, useEffect } from "react";
import { QuestionList } from "../../components";
import { useQuestionList } from "../../components";

const QuestionMain = () => {
  const { questionListData } = useQuestionList();
  const { setIsSearchClick } = useFilterContext();

  useEffect(() => {
    if (questionListData) {
      setIsSearchClick(false);
    }
  }, [questionListData]);

  return (
    <ErrorBoundaryWrapper>
      <div className="flex gap-[24px] w-full">
        <div>
          <Filter />
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
