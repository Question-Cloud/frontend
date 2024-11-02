"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigator = () => {
  const { push } = useRouter();

  const handleNavigate = useCallback(
    (url: string) => {
      push(url);
    },
    [push]
  );

  return { handleNavigate };
};

export { useNavigator };
