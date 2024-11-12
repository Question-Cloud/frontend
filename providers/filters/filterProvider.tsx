"use client";

import { createContext, useContext, useState } from "react";
import { Level } from "@/shared/api";

interface FilterContextProps {
  selectedSubUnitsId: number[];
  setSelectedSubUnitsId: React.Dispatch<React.SetStateAction<number[]>>;
  selectedLevels: Level[];
  setSelectedLevels: React.Dispatch<React.SetStateAction<Level[]>>;
  isSearchClick: boolean;
  setIsSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterProvider는 FilterProvider 내부에서 사용되어야 합니다.");
  }
  return context;
};

function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedSubUnitsId, setSelectedSubUnitsId] = useState<number[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<Level[]>([]);
  const [isSearchClick, setIsSearchClick] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        selectedSubUnitsId,
        setSelectedSubUnitsId,
        selectedLevels,
        setSelectedLevels,
        isSearchClick,
        setIsSearchClick,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, useFilterContext };
