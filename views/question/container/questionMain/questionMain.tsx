"use client";

import { ErrorBoundaryWrapper } from "@/providers";
import { CONTENT_PER_PAGE } from "@/constants";
import {
  AlignCenter,
  Button,
  Combobox,
  Filter,
  FilterIcon,
  LoadingSpinner,
  Pagination,
  QuestionNotExist,
} from "@/shared";
import { QuestionList } from "../../components";
import { useQuestionList } from "./useQuestionList";

const QuestionMain = () => {
  const {
    questionListData,
    questionDataIsLoading,
    totalQuestionCount,
    currentPage,
    handleCurrentPage,
    sortOption,
    selectedSortOption,
    handleSelectedSortOption,
  } = useQuestionList();

  return (
    <ErrorBoundaryWrapper>
      <div className="flex gap-[24px] w-full">
        <div>
          <Button size="medium" className="w-[130px] rounded-[32px] space-x-[4px] mb-[12px]">
            <FilterIcon color="white" />
            <div>상세 검색</div>
          </Button>
          <Filter />
        </div>
        <section className="relative w-full">
          {questionDataIsLoading ? (
            <div className=" w-full h-full">
              <LoadingSpinner message="문제 목록을 불러오는 중이에요" />
            </div>
          ) : (
            <>
              <Combobox
                placeholder="선택"
                className="w-[140px] float-right mb-[12px]"
                options={sortOption}
                value={selectedSortOption}
                setValue={handleSelectedSortOption}
              />
              {questionListData && questionListData.result.length > 0 ? (
                <>
                  <div className="w-full grid grid-cols-2 justify-between gap-[12px]">
                    <QuestionList questionListData={questionListData.result} />
                  </div>
                  <div className="mt-[60px]">
                    <Pagination
                      totalContent={totalQuestionCount}
                      contentPerPage={CONTENT_PER_PAGE}
                      currentPage={currentPage}
                      setCurrentPage={handleCurrentPage}
                    />
                  </div>
                </>
              ) : (
                <AlignCenter className="w-full">
                  <div className="flex flex-col items-center gap-[12px]">
                    <QuestionNotExist size="48" color="gray_04" />
                    <div className="body1 text-gray_04">등록된 문제가 없어요</div>
                  </div>
                </AlignCenter>
              )}
            </>
          )}
        </section>
      </div>
    </ErrorBoundaryWrapper>
  );
};

export { QuestionMain };
