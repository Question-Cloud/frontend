export const makeQueryString = (subject: string, mainUnits: string[], subUnits: number[], levels: string[]): string => {
  const mainUnitsParam = mainUnits.join(",");
  const subUnitsParam = subUnits.join(",");
  const levelsParam = levels.join(",");

  return `?subject=${encodeURIComponent(subject)}&mainUnits=${encodeURIComponent(mainUnitsParam)}&subUnits=${encodeURIComponent(subUnitsParam)}&levels=${encodeURIComponent(levelsParam)}`;
};
