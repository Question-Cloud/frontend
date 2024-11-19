"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFilterContext } from "@/providers";
import { useNavigator } from "@/hooks";
import { createQueryString } from "@/utils";
import { reverseSortOptionKeys } from "@/constants";
import { useCategoryData } from "./useCategoryData";
import { Level } from "@/shared";
import { levelTypeList } from "@/constants";
import { Units } from "./api";

export const useFilter = () => {
  const searchParams = useSearchParams();

  const { handleQueryString } = useNavigator();
  const { selectedMainSubject, setSelectedMainSubject, unitListBySelectedMainSubject } = useCategoryData();
  const [selectedMainUnits, setSelectedMainUnits] = useState<string[]>([]);
  const { selectedSubUnitsId, setSelectedSubUnitsId, selectedLevels, setSelectedLevels, setIsSearchClick } =
    useFilterContext();

  useEffect(() => {
    const mainUnitsParam = searchParams.get("mainUnits") ?? undefined;
    const subUnitsParam = searchParams.get("subUnits") ?? undefined;
    const levelsParam = searchParams.get("levels") ?? undefined;

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

    const queryString = createQueryString({
      mainSubject: selectedMainSubject === "All" ? undefined : selectedMainSubject,
      mainUnits: mainUnitsParam === "" ? undefined : mainUnitsParam,
      subUnits: subUnitsParam === "" ? undefined : subUnitsParam,
      levels: levelsParam === "" ? undefined : levelsParam,
      sort: reverseSortOptionKeys["인기순"],
      page: 1,
    });

    handleQueryString(queryString);
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
