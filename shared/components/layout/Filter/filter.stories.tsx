import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Filter } from "./filter";
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
  Option,
} from "@/shared";
import Image from "next/image";
import { cn } from "@/utils";
import { CategoryList, Units } from "./api";
import { subjectKeys } from "@/constants";

const categoryData = {
  categories: [
    {
      subject: "Mathematics",
      list: [
        {
          title: "수1",
          subject: "Mathematics",
          sub: [
            {
              id: 2,
              title: "지수와 로그",
            },
            {
              id: 3,
              title: "지수함수와 로그함수",
            },
            {
              id: 4,
              title: "삼각함수",
            },
            {
              id: 5,
              title: "사인법칙과 코사인법칙",
            },
            {
              id: 6,
              title: "등차수열과 등비수열",
            },
            {
              id: 7,
              title: "수열의 합과 수학적 귀납법",
            },
          ],
        },
        {
          title: "수2",
          subject: "Mathematics",
          sub: [
            {
              id: 9,
              title: "함수의 극한",
            },
            {
              id: 10,
              title: "함수의 연속",
            },
            {
              id: 11,
              title: "미분계수와 도함수",
            },
            {
              id: 12,
              title: "도함수의 활용",
            },
            {
              id: 13,
              title: "부정적분과 정적분",
            },
            {
              id: 14,
              title: "정적분의 활용",
            },
          ],
        },
        {
          title: "미적분",
          subject: "Mathematics",
          sub: [
            {
              id: 16,
              title: "수열의 극한",
            },
            {
              id: 17,
              title: "급수",
            },
            {
              id: 18,
              title: "여러 가지 함수의 미분",
            },
            {
              id: 19,
              title: "여러 가지 미분법",
            },
            {
              id: 20,
              title: "도함수의 활용",
            },
            {
              id: 21,
              title: "여러 가지 적분법",
            },
            {
              id: 22,
              title: "정적분의 활용",
            },
          ],
        },
        {
          title: "확률과 통계",
          subject: "Mathematics",
          sub: [
            {
              id: 24,
              title: "여러 가지 순열",
            },
            {
              id: 25,
              title: "중복조합과 이항정리",
            },
            {
              id: 26,
              title: "확률",
            },
            {
              id: 27,
              title: "조건부확률",
            },
            {
              id: 28,
              title: "이산확률변수의 확률분포",
            },
            {
              id: 29,
              title: "연속확률변수의 확률분포",
            },
            {
              id: 30,
              title: "통계적 추정",
            },
          ],
        },
      ],
    },
    {
      subject: "Chemistry",
      list: [
        {
          title: "화학의 첫걸음",
          subject: "Chemistry",
          sub: [
            {
              id: 32,
              title: "우리 생활 속의 화학",
            },
            {
              id: 33,
              title: "화학식량과 몰",
            },
            {
              id: 34,
              title: "화학 반응식(기본형)",
            },
            {
              id: 35,
              title: "화학 반응식(심화형)",
            },
            {
              id: 36,
              title: "용액의 농도",
            },
          ],
        },
      ],
    },
  ],
};

const levels = ["LEVEL1", "LEVEL2", "LEVEL3", "LEVEL4", "LEVEL5", "LEVEL6"];

const meta: Meta<typeof Filter> = {
  title: "Layout/Filter",
  component: Filter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  render: (argsType) => {
    const useCategoryDataMock = () => {
      const [subjectOption, setSubjectOption] = useState<Option[]>([]);
      const [selectedSubject, setSelectedSubject] = useState("");
      const [unitListBySelectedSubject, setUnitListBySelectedSubject] = useState<Units[]>([]);
      const levels = ["LEVEL1", "LEVEL2", "LEVEL3", "LEVEL4", "LEVEL5", "LEVEL6"];

      function getSubUnitsBySelectedSubject(subject: string, data: CategoryList) {
        const selectedSubjectData = data.categories.find((category) => category.subject === subject);
        return selectedSubjectData ? selectedSubjectData.list : [];
      }

      useEffect(() => {
        if (categoryData) {
          const subjectOption: Option[] = [];

          categoryData.categories.map((category) => {
            const subject = category.subject as keyof typeof subjectKeys;
            subjectOption.push({ value: category.subject as string, label: subjectKeys[subject] });
          });

          setSubjectOption(subjectOption);
        }
      }, [categoryData]);

      useEffect(() => {
        setSelectedSubject("Mathematics");
      }, [subjectOption]);

      useEffect(() => {
        if (selectedSubject && categoryData) {
          const selectedSubjectData = getSubUnitsBySelectedSubject(selectedSubject, categoryData);

          setUnitListBySelectedSubject(selectedSubjectData);
        }
      }, [selectedSubject, categoryData]);

      return { subjectOption, selectedSubject, setSelectedSubject, unitListBySelectedSubject, levels };
    };

    const useFilterMock = () => {
      const [currentSubject, setCurrentSubject] = useState("");
      const [selectedMainUnits, setSelectedMainUnits] = useState<string[]>([]);
      const [selectedSubUnits, setSelectedSubUnits] = useState<number[]>([]);
      const [selectedSubUnitsId, setSelectedSubUnitsId] = useState(0);
      const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

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

      const handleSubUnitChange = (id: number) => {
        setSelectedSubUnitsId(id);
        if (selectedSubUnits.includes(id)) {
          setSelectedSubUnits((prev) => prev.filter((item) => item !== id));
        } else {
          setSelectedSubUnits((prev) => [...prev, id]);
        }
      };

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

      const refreshFilter = () => {
        setSelectedMainUnits([]);
        setSelectedSubUnits([]);
        setSelectedSubUnitsId(0);
        setSelectedLevels([]);
      };

      const search = () => {};

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

    const { subjectOption, selectedSubject, setSelectedSubject, unitListBySelectedSubject } = useCategoryDataMock();

    const {
      selectedMainUnits,
      selectedSubUnits,
      selectedLevels,
      handleSelectLevels,
      handleMainUnitChange,
      handleSubUnitChange,
      refreshFilter,
      search,
    } = useFilterMock();

    const [openStates, setOpenStates] = useState(() => unitListBySelectedSubject.map(() => false));

    const toggleOpen = (index: number) => {
      setOpenStates((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
    };

    return (
      <Box className="flex flex-col gap-[40px] w-[450px]">
        <div>
          <div className="flex gap-[4px] items-center mb-[8px]">
            <BookIcon />
            <div className="body1 gap-[4px] ">과목</div>
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
            <div className="body1 ">단원</div>
          </div>
          <div className="flex flex-col gap-[8px]">
            {unitListBySelectedSubject.map((category, index) => {
              const isOpen = openStates[index];

              return (
                <Collapsible
                  open={isOpen}
                  onOpenChange={() => toggleOpen(index)}
                  className="w-full border border-gray_02 rounded-[8px]"
                  key={category.title}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="grayLine" size="large" className="border-none justify-between">
                      <Checkbox id={category.title} checked={selectedMainUnits.includes(category.title)}>
                        <CheckboxInput
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMainUnitChange(category);
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
              <Button
                key={level}
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
  },
  // args: {
  //   subjectData: subjectData,
  //   categoryData: categoryData,
  //   levels: levels,
  // },
  // argTypes: {
  //   subjectData: {
  //     control: { type: "object" },
  //     description: "수학, 생명과학, 화학 등의 과목 객체 배열입니다.",
  //   },
  //   categoryData: {
  //     control: { type: "object" },
  //     description: "수1, 미적분 등의 대단원과 하위 단원을 포함하는 객체 배열입니다.",
  //   },
  //   levels: {
  //     control: { type: "object" },
  //     description: "LEVEL 1~6까지의 난이도입니다. (수정불가)",
  //   },
  // },
};
