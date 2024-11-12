"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useNavigator } from "@/hooks";
import { useFilterContext } from "@/providers";
import { Option } from "@/shared";
import { reverseSortOptionKeys, sortOptionKeys } from "@/constants";
import { createQueryString } from "@/utils";
import { SortOption, useQuestionListApi } from "@/shared/api";

const useQuestionList = () => {
  const { type } = useParams();
  const searchParams = useSearchParams();
  const mainSubjectParams = searchParams.get("mainSubject") ?? undefined;
  const mainUnitsParam = searchParams.get("mainUnits") ?? undefined;
  const subUnitsParam = searchParams.get("subUnits") ?? undefined;
  const levelsParam = searchParams.get("levels") ?? undefined;
  const pageParams = searchParams.get("page") ?? 1;
  const sortParams = searchParams.get("sort") ?? reverseSortOptionKeys["인기순"];

  const { handleQueryString } = useNavigator();
  const { selectedSubUnitsId, selectedLevels, isSearchClick, setIsSearchClick } = useFilterContext();
  const [totalQuestionCount, setTotalQuestionCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortOption, setSortOption] = useState<Option[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<SortOption | string>(reverseSortOptionKeys["인기순"]);

  useEffect(() => {
    setSortOption(Object.entries(sortOptionKeys).map(([value, label]) => ({ value, label })));
  }, []);

  useEffect(() => {
    const queryString = createQueryString({
      mainSubject: mainSubjectParams,
      mainUnits: mainUnitsParam,
      subUnits: subUnitsParam,
      levels: levelsParam,
      sort: reverseSortOptionKeys["인기순"],
      page: pageParams,
    });

    handleQueryString(queryString);
    setCurrentPage(Number(pageParams));
    setSelectedSortOption(sortParams);
  }, [pageParams]);

  const categoriesString = selectedSubUnitsId.join(",");
  const levelsString = selectedLevels.join(",");

  const { data: questionListData, isLoading: questionDataIsLoading } = useQuestionListApi(
    {
      categories: categoriesString,
      levels: levelsString,
      questionType: type === "self-made" ? "SelfMade" : "Past",
      sort: selectedSortOption,
      page: Number(pageParams),
      size: 12,
    },
    isSearchClick
  );

  useEffect(() => {
    if (questionListData) {
      setIsSearchClick(false);
      setTotalQuestionCount(questionListData.total);
    }
  }, [questionListData]);

  const handleCurrentPage = (page: number) => {
    window.scrollTo(0, 0);
    const queryString = createQueryString({
      mainSubject: mainSubjectParams,
      mainUnits: mainUnitsParam,
      subUnits: subUnitsParam,
      levels: levelsParam,
      sort: reverseSortOptionKeys[sortOptionKeys[selectedSortOption as SortOption]],
      page: page,
    });
    handleQueryString(queryString);
    setCurrentPage(page);
  };

  const handleSelectedSortOption = (sortOption: SortOption) => {
    const queryString = createQueryString({
      mainSubject: mainSubjectParams,
      mainUnits: mainUnitsParam,
      subUnits: subUnitsParam,
      levels: levelsParam,
      sort: sortOption,
      page: 1,
    });
    handleQueryString(queryString);
    setSelectedSortOption(sortOption);
    setCurrentPage(1);
  };

  return {
    questionListData,
    questionDataIsLoading,
    totalQuestionCount,
    currentPage,
    handleCurrentPage,
    sortOption,
    selectedSortOption,
    handleSelectedSortOption,
  };
};

export { useQuestionList };
