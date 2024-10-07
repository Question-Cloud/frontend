/**
 * 유저 세션을 초기화 하고, refreshToken이 쿠키에 존재하는지 확인 후 세션을 갱신합니다.
 * 세션 갱신에 성공하면 userLogin을 통해 accessToken과 refreshToken을 업데이트하고, 실패시 자동 로그아웃 합니다.
 */

"use client";

import { useEffect } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { useRefreshUserApi } from "./api";
import { refreshTokenCookieName, useUserData } from "./useUserData";

function UserProvider({ children }: { children: React.ReactNode }) {
  const { userLogin, userLogout } = useUserData();
  const { mutate: refresh, data: refreshData, error: refreshError } = useRefreshUserApi();

  const initializeUserSession = () => {
    if (hasCookie(refreshTokenCookieName)) {
      const refreshTokenFromCookie = getCookie(refreshTokenCookieName);
      if (typeof refreshTokenFromCookie !== "string") {
        throw new Error("유저 세션 초기화 도중 문제가 발생했습니다.");
      }
      refresh({ refreshToken: refreshTokenFromCookie });
    }
  };

  useEffect(() => {
    initializeUserSession();
  }, []);

  useEffect(() => {
    if (refreshData) {
      userLogin({
        accessToken: refreshData.authenticationToken.accessToken,
        refreshToken: refreshData.authenticationToken.refreshToken,
      });
    }
  }, [refreshData]);

  useEffect(() => {
    if (refreshError) {
      console.log("세션 갱신에 실패하여 자동으로 로그아웃합니다.");
      userLogout();
    }
  }, [refreshError]);

  return <>{children}</>;
}

export { UserProvider };
