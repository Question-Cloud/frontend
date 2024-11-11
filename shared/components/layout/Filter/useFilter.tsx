"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCategoryData } from "./useCategoryData";
import { Level } from "@/shared/api";
import { levelTypeList } from "@/shared/constant";
import { Units } from "./api";

export const useFilter = () => {
  const searchParams = useSearchParams();
  const { selectedMainSubject } = useCategoryData();

  const [selectedMainUnits, setSelectedMainUnits] = useState<string[]>([]);
  const [selectedSubUnitsId, setSelectedSubUnitsId] = useState<number[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<Level[]>([]);

  useEffect(() => {
    const mainUnitsParam = searchParams.get("mainUnits");
    const subUnitsParam = searchParams.get("subUnits");
    const levelsParam = searchParams.get("levels");

    if (mainUnitsParam) {
      setSelectedMainUnits(mainUnitsParam.split(","));
    }

    if (subUnitsParam) {
      setSelectedSubUnitsId(subUnitsParam.split(",").map(Number));
    }

    if (levelsParam) {
      setSelectedLevels(levelsParam.split(",").filter((level): level is Level => levelTypeList.includes(level)));
    }
  }, [searchParams]);

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

  const handleSelectMainUnit = (mainUnit: Units) => {
    if (selectedMainUnits.includes(mainUnit.title)) {
      setSelectedMainUnits((prev) => prev.filter((item) => item !== mainUnit.title));
      setSelectedSubUnitsId((prev) => prev.filter((sub) => !mainUnit.sub.some((unit) => unit.id === sub)));
    } else {
      setSelectedMainUnits((prev) => [...prev, mainUnit.title]);
      setSelectedSubUnitsId((prev) => [...prev, ...mainUnit.sub.map((subUnit) => subUnit.id)]);
    }
  };

  const handleSelectSubUnit = (subId: number, mainUnit: Units) => {
    const newSelectedSubUnits = selectedSubUnitsId.includes(subId)
      ? selectedSubUnitsId.filter((item) => item !== subId)
      : [...selectedSubUnitsId, subId];

    setSelectedSubUnitsId(newSelectedSubUnits);

    const allSubSelected = mainUnit.sub.every((sub) => newSelectedSubUnits.includes(sub.id));
    setSelectedMainUnits((prev) =>
      allSubSelected ? [...prev, mainUnit.title] : prev.filter((item) => item !== mainUnit.title)
    );
  };

  // useEffect(() => {
  //   console.log("selectedSubUnits:", selectedSubUnits);
  // }, [selectedSubUnits]);

  useEffect(() => {
    //console.log(selectedMainSubject);
    setSelectedMainUnits([]);
  }, [selectedMainSubject]);

  const refreshFilter = () => {
    setSelectedMainUnits([]);
    setSelectedSubUnitsId([]);
    setSelectedLevels([]);
  };

  const search = () => {
    const mainUnitsParam = selectedMainUnits.join(",");
    const subUnitsParam = selectedSubUnitsId.join(",");
    const levelsParam = selectedLevels.join(",");

    const queryString = `?subject=${encodeURIComponent(selectedMainSubject)}&mainUnits=${encodeURIComponent(mainUnitsParam)}&subUnits=${encodeURIComponent(subUnitsParam)}&levels=${encodeURIComponent(levelsParam)}`;
    window.history.pushState({}, "", queryString);
  };

  return {
    selectedMainUnits,
    selectedSubUnitsId,
    setSelectedSubUnitsId,
    selectedLevels,
    handleSelectLevels,
    handleSelectMainUnit,
    handleSelectSubUnit,
    refreshFilter,
    search,
  };
};
