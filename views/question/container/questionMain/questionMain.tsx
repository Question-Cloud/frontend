"use client";

import { ErrorBoundaryWrapper } from "@/providers";
import { AlignCenter, Filter, LoadingSpinner, Pagination } from "@/shared";
import React, { Suspense } from "react";
import { QuestionList } from "../../components";
import { CONTENT_PER_PAGE } from "@/constants";
import { useQuestionList } from "./useQuestionList";

const QuestionMain = () => {
  const { questionListData, questionDataIsLoading, totalQuestionCount, currentPage, setCurrentPage } =
    useQuestionList();

  return (
    <ErrorBoundaryWrapper>
      <div className="flex gap-[24px] w-full">
        <div>
          <Filter />
        </div>
        <section className="w-full">
          {questionDataIsLoading ? (
            <div className="relative w-full h-full">
              <LoadingSpinner message="문제 목록을 불러오는 중이에요" />
            </div>
          ) : (
            <>
              <div className="w-full grid grid-cols-2 justify-between gap-[12px]">
                {questionListData && <QuestionList questionListData={questionListData.result} />}
              </div>
              <div className="my-[60px]">
                <Pagination
                  totalContent={totalQuestionCount}
                  contentPerPage={CONTENT_PER_PAGE}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </>
          )}
        </section>
      </div>
    </ErrorBoundaryWrapper>
  );
};

export { QuestionMain };
