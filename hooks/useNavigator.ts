"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigator = () => {
  const { push } = useRouter();

  const handlePush = useCallback(
    (url: string) => {
      push(url);
    },
    [push]
  );

  return { handlePush };
};

export { useNavigator };
