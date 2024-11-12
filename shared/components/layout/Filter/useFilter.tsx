"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCategoryData } from "./useCategoryData";
import { Level } from "@/shared/api";
import { levelTypeList } from "@/shared/constant";
import { Units } from "./api";
import { useFilterContext } from "@/providers";
import { useNavigator } from "@/hooks";

export const useFilter = () => {
  const searchParams = useSearchParams();
  const { handleQueryString } = useNavigator();
  const { selectedMainSubject, setSelectedMainSubject, unitListBySelectedMainSubject } = useCategoryData();
  const [selectedMainUnits, setSelectedMainUnits] = useState<string[]>([]);
  const { selectedSubUnitsId, setSelectedSubUnitsId, selectedLevels, setSelectedLevels, setIsSearchClick } =
    useFilterContext();

  useEffect(() => {
    const mainUnitsParam = searchParams.get("mainUnits");
    const subUnitsParam = searchParams.get("subUnits");
    const levelsParam = searchParams.get("levels");

    if (mainUnitsParam) {
      const decodedMainUnits = decodeURIComponent(mainUnitsParam);
      setSelectedMainUnits(decodedMainUnits.split(","));
    }

    if (subUnitsParam) {
      const decodedSubUnits = decodeURIComponent(subUnitsParam);
      setSelectedSubUnitsId(decodedSubUnits.split(",").map(Number));
    }

    if (levelsParam) {
      setSelectedLevels(
        decodeURIComponent(levelsParam)
          .split(",")
          .filter((level): level is Level => levelTypeList.includes(level))
      );
    }

    setIsSearchClick(true);
  }, [searchParams]);

  const handleSelectMainUnit = (mainUnit: Units) => {
    if (selectedMainUnits.includes(mainUnit.title)) {
      setSelectedMainUnits((prev) => prev.filter((item) => item !== mainUnit.title));
      setSelectedSubUnitsId((prev) => prev.filter((sub) => !mainUnit.sub.some((unit) => unit.id === sub)));
    } else {
      setSelectedMainUnits((prev) => [...prev, mainUnit.title]);
      setSelectedSubUnitsId((prev) => {
        const newSubUnits = [...prev, ...mainUnit.sub.map((subUnit) => subUnit.id)];
        return Array.from(new Set(newSubUnits));
      });
    }
  };

  const handleSelectSubUnit = (subId: number, mainUnit: Units) => {
    const newSelectedSubUnits = selectedSubUnitsId.includes(subId)
      ? selectedSubUnitsId.filter((item) => item !== subId)
      : Array.from(new Set([...selectedSubUnitsId, subId]));

    setSelectedSubUnitsId(newSelectedSubUnits);

    const allSubSelected = mainUnit.sub.every((sub) => newSelectedSubUnits.includes(sub.id));
    setSelectedMainUnits((prev) =>
      allSubSelected ? Array.from(new Set([...prev, mainUnit.title])) : prev.filter((item) => item !== mainUnit.title)
    );
  };

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

  const initSelectedItems = () => {
    setSelectedMainUnits([]);
    setSelectedSubUnitsId([]);
    setSelectedLevels([]);
  };

  const resetFilter = () => {
    setSelectedMainSubject("All");
    initSelectedItems();
  };

  const search = () => {
    setIsSearchClick(true);

    const mainUnitsParam = selectedMainUnits.join(",");
    const subUnitsParam = selectedSubUnitsId.join(",");
    const levelsParam = selectedLevels.join(",");

    if (mainUnitsParam === "" && subUnitsParam === "" && levelsParam === "") {
      const baseUrl = window.location.origin + window.location.pathname;
      handleQueryString(baseUrl);
    } else {
      const queryString = `?mainSubject=${encodeURIComponent(selectedMainSubject)}&mainUnits=${encodeURIComponent(mainUnitsParam)}&subUnits=${encodeURIComponent(subUnitsParam)}&levels=${encodeURIComponent(levelsParam)}`;
      handleQueryString(queryString);
    }
  };

  return {
    selectedMainSubject,
    setSelectedMainSubject,
    unitListBySelectedMainSubject,
    selectedMainUnits,
    selectedSubUnitsId,
    setSelectedSubUnitsId,
    selectedLevels,
    handleSelectMainUnit,
    handleSelectSubUnit,
    handleSelectLevels,
    resetFilter,
    initSelectedItems,
    search,
  };
};
