import * as React from "react";
import { Picture } from "../Picture";
import { cn } from "@/utils";
import { Badge } from "../Badge";

const Question = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("relative w-full h-full border border-gray_02 rounded-[8px]", className)}>{children}</div>;
};
Question.displayName = "Question";

const QuestionContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-[24px] flex flex-col gap-[12px] ">{children}</div>
);
QuestionContent.displayName = "QuestionContent";

// 난이도, 제목
const QuestionTitle = ({ difficultyLevel, title }: { difficultyLevel: string; title: string }) => (
  <div className="flex items-center gap-[4px]">
    <Picture imagePath={`/levelIcons/${difficultyLevel}.svg`} alt={difficultyLevel} width={24} height={24} />
    <span className="body1">{title}</span>
  </div>
);
QuestionTitle.displayName = "QuestionTitle";

// 지은이, 카테고리
const QuestionInfo = ({ writer, category }: { writer: string; category: string }) => (
  <div className="flex flex-col gap-[2px] body3 text-gray_05">
    <div>크리에이터: {writer}</div>
    <div>{category}</div>
  </div>
);
QuestionTitle.displayName = "QuestionTitle";

// 가격, 옵션 버튼
const QuestionOptions = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-[6px]">{children}</div>
);
QuestionOptions.displayName = "QuestionOptions";

const QuestionFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "absolute bottom-0 w-full flex justify-between items-center bg-gray_01 h-[48px] rounded-bl-[8px] rounded-br-[8px] caption"
      }
    >
      {children}
    </div>
  );
};
QuestionFooter.displayName = "QuestionFooter";

export { Question, QuestionContent, QuestionTitle, QuestionInfo, QuestionOptions, QuestionFooter };
