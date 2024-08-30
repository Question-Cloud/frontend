import React, { useEffect, useState } from "react";
import { FilterProps } from "./types";
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
} from "@/components/ui";
import Image from "next/image";
import { cn } from "@/utils";
import { useFilter } from "./useFilter";

export const Filter = ({ subjectData, categoryData, levels }: FilterProps) => {
  const {
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
  } = useFilter({ subjectData, categoryData, levels });

  return (
    <Box className="flex flex-col gap-[40px] w-[450px]">
      <div>
        <div className="flex elems-center mb-[8px]">
          <BookIcon />
          <div className="body1 gap-[4px] ">과목</div>
        </div>
        <Combobox
          placeholder="선택하세요"
          className="w-[408px]"
          options={subjectData}
          value={currentSubject}
          setValue={setCurrentSubject}
        />
      </div>
      <div>
        <div className="flex gap-[4px] elems-center mb-[8px]">
          <BookIcon />
          <div className="body1 ">단원</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          {categoryData.list.map((category) => {
            const [isOpen, setIsOpen] = useState(false);

            return (
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full border border-gray_02 rounded-[8px]"
                key={category.title}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="grayLine" size="large" className="border-none justify-between">
                    <Checkbox id={category.title} checked={selectedMainUnits.includes(category.title)}>
                      <CheckboxInput
                        onClick={(e) => {
                          handleMainUnitChange(category);
                          setIsOpen(true);
                          e.stopPropagation();
                        }}
                      />
                      <CheckboxLabel>{category.title}</CheckboxLabel>
                    </Checkbox>
                    {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-[40px] pb-[12px] mt-[4px]">
                  <div className="flex flex-col gap-[8px]">
                    {category.sub.map((sub) => (
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
        <div className="flex gap-[4px] elems-center mb-[12px]">
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
            <Button
              variant="grayLine"
              size="large"
              className={cn("w-[calc(33.9%-8px)]", selectedLevels.includes(level) ? "bg-gray_01" : "bg-white")}
              onClick={() => handleSelectLevels(level)}
            >
              <Image src={`/levelIcons/level${level.replace("LEVEL", "")}.svg`} alt={level} width="24" height="24" />
            </Button>
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
