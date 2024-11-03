"use client";

import { useEffect } from "react";
import { useUserSessionContext } from "../auth";
import { useNavigator } from "@/hooks";
import { SimpleAlarmDialog } from "@/shared";
import { useDialogContext } from "../dialog";

function UserGuard({ children, redirectTo }: { children: React.ReactNode; redirectTo?: string }) {
  const { isLoggedIn } = useUserSessionContext();
  const { dialogOpen, dialogClose, isDialogOpen } = useDialogContext();
  const { handleReplace } = useNavigator();

  useEffect(() => {
    if (!isLoggedIn) {
      dialogOpen("loginIsRequired");
    }
  }, [isLoggedIn, dialogOpen]);

  if (isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <>
      {isDialogOpen("loginIsRequired") && (
        <SimpleAlarmDialog
          id="loginIsRequired"
          message={"🔒 로그인이 필요해요!"}
          controlMessage={"로그인 하러가기"}
          onClose={() => {
            dialogClose("loginIsRequired");
            handleReplace(redirectTo ? redirectTo : "/login");
          }}
        />
      )}
    </>
  );
}

export { UserGuard };
