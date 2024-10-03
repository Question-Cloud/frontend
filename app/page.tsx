"use client";

import { Pagination } from "@/components/ui";
import { useState } from "react";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination totalPosts={87} postPerPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}
