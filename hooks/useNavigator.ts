"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigator = () => {
  const { push, replace } = useRouter();

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
    window.history.pushState({}, "", queryString);
  };

  return { handlePush, handleReplace, handleQueryString };
};

export { useNavigator };
