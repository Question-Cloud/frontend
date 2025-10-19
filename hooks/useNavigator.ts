"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigator = () => {
  const { push, replace } = useRouter();
  const pathname = usePathname();

  const handlePush = useCallback(
    (url: string) => {
      push(url);
    },
    [push]
  );

  const handleReplace = useCallback(
    (url: string) => {
      replace(url);
    },
    [replace]
  );

  const handleQueryString = (queryString: string) => {
    // 기존의 pushState는 Next.js 라우터의 상태 관리 시스템을 파괴함.
    // 그래서 뒤로가기가 제대로 작동하지 않은 것임
    // pathname을 유지하면서 쿼리 스트링만 변경하도록 router.push 호출
    // scroll: false -> 페이지를 스크롤 최상단으로 이동시키지 않도록 설정 (불필요시 제거)
    push(`${pathname}${queryString}`, { scroll: false });
  };

  return { handlePush, handleReplace, handleQueryString };
};

export { useNavigator };
