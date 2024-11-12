"use client";

import { useNavigator } from "@/hooks";
import { useFilterContext } from "@/providers";
import { useQuestionListApi } from "@/shared/api";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useQuestionList = () => {
  const { type } = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  const { handleQueryString } = useNavigator();
  const { selectedSubUnitsId, selectedLevels, isSearchClick, setIsSearchClick } = useFilterContext();
  const [totalQuestionCount, setTotalQuestionCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const categoriesString = selectedSubUnitsId.join(",");
  const levelsString = selectedLevels.join(",");

  const { data: questionListData, isLoading: questionDataIsLoading } = useQuestionListApi(
    {
      categories: categoriesString,
      levels: levelsString,
      questionType: type === "self-made" ? "SelfMade" : "Past",
      //sort: "Popularity" | "Rate" | "Latest" | "LEVEL",
      sort: "Popularity",
      page: Number(page),
      size: 12,
    },
    isSearchClick
  );

  useEffect(() => {
    const queryString = `?page=${page}`;
    handleQueryString(queryString);
    setCurrentPage(Number(page));
  }, [page]);

  useEffect(() => {
    if (questionListData) {
      setIsSearchClick(false);
      setTotalQuestionCount(questionListData.total);
    }
  }, [questionListData]);

  return {
    questionListData,
    questionDataIsLoading,
    totalQuestionCount,
    currentPage,
    setCurrentPage: (page: number) => {
      window.scrollTo(0, 0);
      setCurrentPage(page);
      const queryString = `?page=${page}`;
      handleQueryString(queryString);
    },
  };
};

export { useQuestionList };
