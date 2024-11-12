"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookIcon,
  BookmarkIcon,
  Box,
  Button,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  InfoIcon,
  Picture,
  RefreshIcon,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared";
import { cn } from "@/utils";
import { useFilter } from "./useFilter";
import { useCategoryData } from "./useCategoryData";
import { levelTypeList } from "@/shared/constant";
import { Level } from "@/shared/api";

export const Filter = ({ refetch }: { refetch?: () => void }) => {
  const { mainSubjectOption, levels } = useCategoryData();
  const {
    selectedMainSubject,
    setSelectedMainSubject,
    unitListBySelectedMainSubject,
    selectedMainUnits,
    selectedSubUnitsId,
    selectedLevels,
    handleSelectMainUnit,
    handleSelectSubUnit,
    handleSelectLevels,
    resetFilter,
    initSelectedItems,
    search,
  } = useFilter(refetch);

  const [openStates, setOpenStates] = useState(() => unitListBySelectedMainSubject.map(() => false));

  // 새로고침 했을때도 선택된 항목이 있는 Collapsible은 Open 상태이도록
  useEffect(() => {
    setOpenStates(
      unitListBySelectedMainSubject.map(
        (mainUnit) =>
          selectedMainUnits.includes(mainUnit.title) ||
          mainUnit.sub.some((subUnit) => selectedSubUnitsId.includes(subUnit.id))
      )
    );
  }, [unitListBySelectedMainSubject, selectedMainUnits, selectedSubUnitsId]);

  const toggleOpen = (index: number) => {
    setOpenStates((prev) => prev?.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  return (
    <Box className="flex flex-col gap-[40px] w-[450px]">
      <div>
        <div className="flex gap-[4px] items-center mb-[8px]">
          <BookIcon />
          <div className="body1">과목</div>
        </div>
        <Combobox
          placeholder="선택하세요"
          className="w-[408px]"
          options={mainSubjectOption}
          value={selectedMainSubject}
          setValue={setSelectedMainSubject}
          initSelectedItems={initSelectedItems}
        />
      </div>
      <div>
        <div className="flex gap-[4px] items-center mb-[8px]">
          <BookIcon />
          <div className="body1">단원</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          {unitListBySelectedMainSubject.length <= 0 && (
            <Collapsible className="w-full border border-gray_02 rounded-[8px]">
              <CollapsibleTrigger asChild>
                <Button
                  as="div"
                  variant="grayLine"
                  size="large"
                  className="text-gray_04 border-none justify-between"
                  disabled={true}
                >
                  과목을 먼저 선택해 주세요
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          )}
          {unitListBySelectedMainSubject.length > 0 &&
            unitListBySelectedMainSubject.map((mainUnit, index) => {
              const isOpen = openStates && openStates[index];

              return (
                <Collapsible
                  open={isOpen}
                  onOpenChange={() => toggleOpen(index)}
                  className="w-full border border-gray_02 rounded-[8px]"
                  key={mainUnit.title}
                >
                  <CollapsibleTrigger asChild>
                    <Button as="div" variant="grayLine" size="large" className="border-none justify-between">
                      <Checkbox id={mainUnit.title} checked={selectedMainUnits.includes(mainUnit.title)}>
                        <CheckboxInput
                          onClick={(e) => {
                            handleSelectMainUnit(mainUnit);
                            e.stopPropagation();
                          }}
                        />
                        <CheckboxLabel>{mainUnit.title}</CheckboxLabel>
                      </Checkbox>
                      {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-[40px] pb-[12px] mt-[4px]">
                    <div className="flex flex-col gap-[8px]">
                      {mainUnit.sub.map((subUnit) => (
                        <div key={subUnit.id}>
                          <Checkbox id={subUnit.id} checked={selectedSubUnitsId.includes(subUnit.id)}>
                            <CheckboxInput
                              onClick={(e) => {
                                handleSelectSubUnit(subUnit.id, mainUnit);
                                e.stopPropagation();
                              }}
                            />
                            <CheckboxLabel>{subUnit.title}</CheckboxLabel>
                          </Checkbox>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
        </div>
      </div>
      <div>
        <div className="flex gap-[4px] items-center mb-[12px]">
          <BookmarkIcon />
          <div className="body1">난이도</div>
          <div className="cursor-pointer">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    <InfoIcon color="gray_03" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  align="center"
                  className="flex flex-col gap-[8px] bg-white border border-gray_01 px-[20px] py-[16px] rounded-[8px]"
                >
                  <span className="text-red body1">난이도 가이드</span>
                  <span className="text-black caption">1~2: 쉬운 2, 3점 / 3: 비킬러 / 4~5: 준킬러 / 6: 킬러</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex flex-wrap gap-[8px]">
          {levels.map((level) => (
            <div key={level} className="w-[calc(49%)]">
              {levelTypeList.includes(level as Level) && (
                <Button
                  variant="grayLine"
                  size="large"
                  className={cn(selectedLevels.includes(level as Level) ? "bg-gray_01" : "bg-white")}
                  onClick={() => handleSelectLevels(level as Level)}
                >
                  <Picture imagePath={`/levelIcons/${level}.svg`} alt={level} width={24} height={24} />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="grayLine" size="large" className="flex gap-[4px] w-[130px]" onClick={resetFilter}>
          <RefreshIcon />
          <div>초기화</div>
        </Button>
        <Button size="large" className="w-[130px]" onClick={search}>
          <div>조회하기</div>
        </Button>
      </div>
    </Box>
  );
};
