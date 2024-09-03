import React, { useEffect, useState } from "react";
import { FilterProps } from "./types";
import { makeQueryString } from "@/utils";

export const useFilter = ({ subjectData, categoryData, levels }: FilterProps) => {
  const [currentSubject, setCurrentSubject] = useState("");
  const [selectedMainUnits, setSelectedMainUnits] = useState<string[]>([]);
  const [selectedSubUnits, setSelectedSubUnits] = useState<number[]>([]);
  const [selectedSubUnitsId, setSelectedSubUnitsId] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const subject = queryParams.get("subject");
    const mainUnitsParam = queryParams.get("mainUnits");
    const subUnitsParam = queryParams.get("subUnits");
    const levelsParam = queryParams.get("levels");

    if (subject) {
      setCurrentSubject(subject);
    } else {
      if (subjectData.length > 0) {
        setCurrentSubject(subjectData[0].value);
      } else {
        setCurrentSubject("");
      }
    }

    if (mainUnitsParam) {
      setSelectedMainUnits(mainUnitsParam.split(","));
    }

    if (subUnitsParam) {
      setSelectedSubUnits(subUnitsParam.split(",").map(Number));
    }

    if (levelsParam) {
      setSelectedLevels(levelsParam.split(","));
    }
  }, []);

  // 난이도 선택
  const handleSelectLevels = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels((prev) => {
        return prev.filter((elem) => elem !== level);
      });
    } else {
      setSelectedLevels((prev) => {
        return [...prev, level];
      });
    }
  };

  // 대단원 (수1, 수2 등)에 체크하는 경우 -> 하위 단원 전체 선택, 전체 해제
  const handleMainUnitChange = (category: { title: string; sub: Array<{ id: number; title: string }> }) => {
    const { sub, title } = category;
    const subUnitIds = sub.map((s) => s.id);

    if (selectedMainUnits.includes(title)) {
      setSelectedMainUnits((prev) => prev.filter((item) => item !== title));
      setSelectedSubUnits((prev) => prev.filter((id) => !subUnitIds.includes(id)));
    } else {
      setSelectedMainUnits((prev) => [...prev, title]);

      setSelectedSubUnits((prev) => {
        const uniqueSelectedSubUnits = new Set(prev);
        subUnitIds.forEach((id) => uniqueSelectedSubUnits.add(id));
        return Array.from(uniqueSelectedSubUnits);
      });
    }
  };

  // 하위 단원 개별 선택
  const handleSubUnitChange = (id: number) => {
    setSelectedSubUnitsId(id);
    if (selectedSubUnits.includes(id)) {
      setSelectedSubUnits((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedSubUnits((prev) => [...prev, id]);
    }
  };

  // 하위 단원 개별 선택시 이미 전체 선택 되어있던 요소인지 검증
  useEffect(() => {
    if (selectedSubUnitsId != 0) {
      const category = categoryData.list.find((category) => category.sub.some((sub) => sub.id === selectedSubUnitsId));
      if (category) {
        const subUnitIds = category.sub.map((sub) => sub.id);
        const allSubUnitsSelected = subUnitIds.every((subId) => selectedSubUnits.includes(subId));
        if (allSubUnitsSelected) {
          setSelectedMainUnits((prev) => [...prev, category.title]);
        } else {
          setSelectedMainUnits((prev) => prev.filter((title) => title !== category.title));
        }
      }
    }
  }, [selectedSubUnitsId, selectedSubUnits]);

  // 초기화
  const refreshFilter = () => {
    setSelectedMainUnits([]);
    setSelectedSubUnits([]);
    setSelectedSubUnitsId(0);
    setSelectedLevels([]);
  };

  // 조회하기
  const search = () => {
    const queryString = makeQueryString(currentSubject, selectedMainUnits, selectedSubUnits, selectedLevels);
    window.history.pushState({}, "", queryString);

    console.log(currentSubject);
    console.log(selectedMainUnits);
    console.log(selectedSubUnits);
    console.log(selectedLevels);
  };

  return {
    currentSubject,
    setCurrentSubject,
    selectedMainUnits,
    selectedSubUnits,
    selectedLevels,
    handleSelectLevels,
    handleMainUnitChange,
    handleSubUnitChange,
    refreshFilter,
    search,
  };
};
