"use client";

import { useEffect, useState } from "react";
import { CategoryList, Units, useCategoryApi } from "./api";
import { Option } from "../../designsystem";
import { subjectKeys } from "@/constants";
import { useSearchParams } from "next/navigation";

const useCategoryData = () => {
  const searchParams = useSearchParams();

  const { data: categoryData } = useCategoryApi();

  const subjectParams = searchParams.get("subject");

  const [subjectOption, setSubjectOption] = useState<Option[]>([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [unitListBySelectedSubject, setUnitListBySelectedSubject] = useState<Units[]>([]);
  const levels = ["LEVEL1", "LEVEL2", "LEVEL3", "LEVEL4", "LEVEL5", "LEVEL6"];

  function getSubUnitsBySelectedSubject(subject: string, data: CategoryList) {
    const selectedSubjectData = data.categories.find((category) => category.subject === subject);
    return selectedSubjectData ? selectedSubjectData.list : [];
  }

  useEffect(() => {
    if (categoryData) {
      const subjectOption: Option[] = [];

      categoryData.categories.map((category) => {
        const subject = category.subject as keyof typeof subjectKeys;
        subjectOption.push({ value: category.subject as string, label: subjectKeys[subject] });
      });

      setSubjectOption(subjectOption);
    }
  }, [categoryData]);

  useEffect(() => {
    if (subjectParams) {
      setSelectedSubject(subjectParams);
    } else {
      if (subjectOption.length > 0) {
        setSelectedSubject(subjectOption[0].value);
      } else {
        setSelectedSubject("");
      }
    }
  }, [subjectOption]);

  useEffect(() => {
    if (selectedSubject && categoryData) {
      const selectedSubjectData = getSubUnitsBySelectedSubject(selectedSubject, categoryData);

      setUnitListBySelectedSubject(selectedSubjectData);
    }
  }, [selectedSubject, categoryData]);

  return {
    subjectOption,
    selectedSubject,
    setSelectedSubject,
    unitListBySelectedSubject,
    levels,
  };
};

export { useCategoryData };
