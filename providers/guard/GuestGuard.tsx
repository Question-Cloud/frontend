"use client";

import { useEffect } from "react";
import { useUserSessionContext } from "../auth";
import { useNavigator } from "@/hooks";

function GuestGuard({ children, redirectTo }: { children: React.ReactNode; redirectTo?: string }) {
  const { isLoggedIn } = useUserSessionContext();
  const { handleReplace } = useNavigator();

  useEffect(() => {
    if (isLoggedIn) {
      handleReplace(redirectTo ? redirectTo : "/");
    }
  }, [isLoggedIn, handleReplace, redirectTo]);

  if (!isLoggedIn) {
    return <>{children}</>;
  }

  return <></>;
}

export { GuestGuard };
