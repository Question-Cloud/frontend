import { useFilterContext } from "@/providers";
import { useQuestionListApi } from "@/shared/api";
import { useParams } from "next/navigation";

const useQuestionList = () => {
  const { type } = useParams();
  const { selectedSubUnitsId, selectedLevels, isSearchClick } = useFilterContext();

  const categoriesString = selectedSubUnitsId.join(",");
  const levelsString = selectedLevels.join(",");

  const { data: questionListData } = useQuestionListApi(
    {
      categories: categoriesString,
      levels: levelsString,
      questionType: type === "self-made" ? "SelfMade" : "Past",
      //sort: "Popularity" | "Rate" | "Latest" | "LEVEL",
      sort: "Popularity",
      page: 1,
      size: 12,
    },
    isSearchClick,
  );

  return { questionListData };
};

export { useQuestionList };
