"use client";

import { useEffect, useState } from "react";
import { CategoryList, Units, useCategoryApi } from "./api";
import { Option } from "../../designsystem";
import { subjectKeys } from "@/constants";
import { useSearchParams } from "next/navigation";

const useCategoryData = () => {
  const searchParams = useSearchParams();

  const { data: categoryData } = useCategoryApi();

  const [mainSubjectOption, setMainSubjectOption] = useState<Option[]>([]);
  const [selectedMainSubject, setSelectedMainSubject] = useState("All");
  const [unitListBySelectedMainSubject, setUnitListBySelectedMainSubject] = useState<Units[]>([]);

  function getSubUnitsBySelectedSubject(subject: string, data: CategoryList) {
    const selectedSubjectData = data.categories.find((category) => category.subject === subject);

    return selectedSubjectData ? selectedSubjectData.list : [];
  }

  useEffect(() => {
    if (categoryData) {
      const mainSubjectOption: Option[] = [];

      categoryData.categories.map((category) => {
        const subject = category.subject as keyof typeof subjectKeys;
        mainSubjectOption.push({ value: category.subject as string, label: subjectKeys[subject] });
      });

      setMainSubjectOption([{ value: "All", label: "전체" }, ...mainSubjectOption]);
    }
  }, [categoryData]);

  useEffect(() => {
    const mainSubjectParams = searchParams.get("mainSubject");

    if (mainSubjectParams) {
      setSelectedMainSubject(mainSubjectParams);
    } else {
      if (mainSubjectOption.length > 0) {
        setSelectedMainSubject(mainSubjectOption[0].value);
      } else {
        setSelectedMainSubject("");
      }
    }
  }, [searchParams, mainSubjectOption]);

  useEffect(() => {
    if (selectedMainSubject && categoryData) {
      const selectedSubjectData = getSubUnitsBySelectedSubject(selectedMainSubject, categoryData);

      setUnitListBySelectedMainSubject(selectedSubjectData);
    }
  }, [selectedMainSubject, categoryData]);

  return {
    mainSubjectOption,
    selectedMainSubject,
    setSelectedMainSubject,
    unitListBySelectedMainSubject,
  };
};

export { useCategoryData };
