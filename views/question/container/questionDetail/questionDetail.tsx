"use client";

import { Picture } from "@/shared";
import React from "react";
import { useQuestionDetail } from "./useQuestionDetail";

const QuestionDetail = () => {
  const { questionDetailData } = useQuestionDetail();

  console.log(questionDetailData);

  return (
    <div>
      <div>
        <Picture imagePath="" alt="" />
      </div>
    </div>
  );
};

export { QuestionDetail };
