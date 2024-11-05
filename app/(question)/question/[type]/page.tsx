"use client";

import { AlignCenter, SidePadding } from "@/shared";
import { QuestionMain } from "@/views/question";
import { useParams } from "next/navigation";
import React from "react";

const QuestionSelfPage = () => {
  const { type } = useParams();

  return (
    <SidePadding className="pt-[90px]">
      <div className="heading1">{type === "self-made" ? "자작" : "기출"}문제</div>
      <AlignCenter>
        <QuestionMain />
      </AlignCenter>
    </SidePadding>
  );
};

export default QuestionSelfPage;
