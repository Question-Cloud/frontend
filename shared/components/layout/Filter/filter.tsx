"use client";

import { useState } from "react";
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
  RefreshIcon,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared";
import Image from "next/image";
import { cn } from "@/utils";
import { useFilter } from "./useFilter";
import { useCategoryData } from "./useCategoryData";
import { levelTypeList } from "@/shared/constant";
import { Level } from "@/shared/api";

export const Filter = () => {
  const { subjectOption, selectedSubject, setSelectedSubject, unitListBySelectedSubject, levels } = useCategoryData();
  const {
    selectedMainUnits,
    selectedSubUnits,
    selectedLevels,
    handleSelectLevels,
    handleMainUnitChange,
    handleSubUnitChange,
    refreshFilter,
    search,
  } = useFilter();

  const [openStates, setOpenStates] = useState(() => unitListBySelectedSubject.map(() => false));

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
          options={subjectOption}
          value={selectedSubject}
          setValue={setSelectedSubject}
        />
      </div>
      <div>
        <div className="flex gap-[4px] items-center mb-[8px]">
          <BookIcon />
          <div className="body1">단원</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          {unitListBySelectedSubject.map((unit, index) => {
            const isOpen = openStates && openStates[index];

            return (
              <Collapsible
                open={isOpen}
                onOpenChange={() => toggleOpen(index)}
                className="w-full border border-gray_02 rounded-[8px]"
                key={unit.title}
              >
                <CollapsibleTrigger asChild>
                  <Button as="div" variant="grayLine" size="large" className="border-none justify-between">
                    <Checkbox id={unit.title} checked={selectedMainUnits.includes(unit.title)}>
                      <CheckboxInput
                        onClick={(e) => {
                          handleMainUnitChange(unit);
                          e.stopPropagation();
                        }}
                      />
                      <CheckboxLabel>{unit.title}</CheckboxLabel>
                    </Checkbox>
                    {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-[40px] pb-[12px] mt-[4px]">
                  <div className="flex flex-col gap-[8px]">
                    {unit.sub.map((sub) => (
                      <div key={sub.id}>
                        <Checkbox id={sub.id} checked={selectedSubUnits.includes(sub.id)}>
                          <CheckboxInput
                            onClick={(e) => {
                              handleSubUnitChange(sub.id);
                              e.stopPropagation();
                            }}
                          />
                          <CheckboxLabel>{sub.title}</CheckboxLabel>
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
            <div key={level}>
              {levelTypeList.includes(level as Level) && (
                <Button
                  variant="grayLine"
                  size="large"
                  className={cn(
                    "w-[calc(33.9%-8px)]",
                    selectedLevels.includes(level as Level) ? "bg-gray_01" : "bg-white"
                  )}
                  onClick={() => handleSelectLevels(level as Level)}
                >
                  <Image src={`/levelIcons/${level}.svg`} alt={level} width="24" height="24" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="grayLine" size="large" className="flex gap-[4px] w-[130px]" onClick={refreshFilter}>
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
