"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCategoryData } from "./useCategoryData";
import { Level } from "@/shared/api";
import { levelTypeList } from "@/shared/constant";

export const useFilter = () => {
  const searchParams = useSearchParams();
  const { subjectOption, selectedSubject, unitListBySelectedSubject } = useCategoryData();

  const [selectedMainUnits, setSelectedMainUnits] = useState<string[]>([]);
  const [selectedSubUnits, setSelectedSubUnits] = useState<number[]>([]);
  const [selectedSubUnitsId, setSelectedSubUnitsId] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState<Level[]>([]);

  useEffect(() => {
    const mainUnitsParam = searchParams.get("mainUnits");
    const subUnitsParam = searchParams.get("subUnits");
    const levelsParam = searchParams.get("levels");

    if (mainUnitsParam) {
      setSelectedMainUnits(mainUnitsParam.split(","));
    }

    if (subUnitsParam) {
      setSelectedSubUnits(subUnitsParam.split(",").map(Number));
    }

    if (levelsParam) {
      setSelectedLevels(levelsParam.split(",").filter((level): level is Level => levelTypeList.includes(level)));
    }
  }, [subjectOption]);

  // 난이도 선택
  const handleSelectLevels = (level: Level) => {
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
      const category = unitListBySelectedSubject.find((category) =>
        category.sub.some((sub) => sub.id === selectedSubUnitsId)
      );
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
    const mainUnitsParam = selectedMainUnits.join(",");
    const subUnitsParam = selectedSubUnits.join(",");
    const levelsParam = selectedLevels.join(",");

    const queryString = `?subject=${encodeURIComponent(selectedSubject)}&mainUnits=${encodeURIComponent(mainUnitsParam)}&subUnits=${encodeURIComponent(subUnitsParam)}&levels=${encodeURIComponent(levelsParam)}`;
    window.history.pushState({}, "", queryString);
  };

  return {
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
