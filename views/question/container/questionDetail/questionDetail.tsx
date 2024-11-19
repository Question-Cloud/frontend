"use client";

import { Badge, Button, Picture, Separator } from "@/shared";
import React from "react";
import { useQuestionDetail } from "./useQuestionDetail";
import { formatNumberWithCommas } from "@/utils";
import { levelTypeKeys } from "@/constants";

const QuestionDetail = () => {
  const { questionDetailData } = useQuestionDetail();

  console.log(questionDetailData);

  return (
    questionDetailData && (
      <div className="space-y-[20px]">
        <div className="flex gap-[20px]">
          <Picture imagePath={questionDetailData.thumbnail} alt="" width={380} className="border border-gray_02" />
          <div className="w-full border border-gray_02 body2 p-[32px] rounded-[8px]">
            <div className="space-y-[12px]">
              <div className="heading2">{questionDetailData.title}</div>
              <div className="body1 text-gray_05">
                <Badge>크리에이터</Badge>
                <span className="ml-[12px] text-gray_05">{questionDetailData.creatorName}</span>
              </div>
            </div>
            <Separator className="my-[24px]" />
            <div className="space-y-[24px] body2">
              <div className="flex text-gray_05">
                <p className="w-[100px]">과목</p>
                <p className="text-black">{questionDetailData.parentCategory}</p>
              </div>
              <div className="flex text-gray_05">
                <p className="w-[100px]">단원</p>
                <p className="text-black">{questionDetailData.childCategory}</p>
              </div>
              <div className="flex text-gray_05">
                <p className="w-[100px]">난이도</p>
                <p className="flex text-black">
                  <Picture
                    imagePath={`/levelIcons/${questionDetailData.questionLevel}.svg`}
                    alt={questionDetailData.questionLevel}
                    width={24}
                    height={24}
                    className="mr-[4px]"
                  />
                  {levelTypeKeys[questionDetailData.questionLevel]}
                </p>
              </div>
              <div className="flex text-gray_05">
                <p className="w-[100px]">발행일</p>
                <p className="text-black">2024.01.01</p>
              </div>
              <div className="flex text-gray_05">
                <p className="w-[100px]">판매가</p>
                <p className="text-black">{formatNumberWithCommas(questionDetailData.price)}원</p>
              </div>
              <div className="caption text-gray_03">* 문제와 해설이 모두 포함되어있는 상품입니다.</div>
              <div className="flex gap-[12px]">
                <Button variant="grayLine" size="large">
                  장바구니 담기
                </Button>
                <Button>바로 구매하기</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray_02 body2 p-[24px] rounded-[8px] space-y-[8px]">
          <div className="body1">문제 소개</div>
          <div>{questionDetailData.description ?? "소개글이 없어요"}</div>
        </div>
        <div className="w-full">댓글 영역</div>
      </div>
    )
  );
};

export { QuestionDetail };
