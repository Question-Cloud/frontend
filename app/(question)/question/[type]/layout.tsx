"use client";

import { AlignCenter, SidePadding } from "@/shared";
import { useParams } from "next/navigation";
import React from "react";

export default function QuestionLayout({ children }: { children: React.ReactNode }) {
  const { type } = useParams();

  return (
    <div className="w-full">
      <div className="heading1 my-[90px]">{type === "self-made" ? "자작" : "기출"}문제</div>
      {children}
    </div>
  );
}
