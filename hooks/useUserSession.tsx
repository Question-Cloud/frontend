/**
 * 로그인, 로그아웃 시 accessToken, refreshToken을 관리합니다.
 * 로그인 후 쿠키에 refreshToken을 저장하고, Authorization 헤더를 추가합니다.
 */

import { useCallback } from "react";
import { setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient } from "@/providers/http-client";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useUserSessionContext, useRefreshUserApi } from "@/providers/auth";

export const refreshTokenCookieName = "qc__refresh-token";

export function useUserSession() {
  const { setAccessToken } = useUserSessionContext();
  const { mutate: refresh, data: refreshData } = useRefreshUserApi();

  const userLogin = useCallback(({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
    localStorage.setItem("qc__access_token", accessToken);

    setCookie(refreshTokenCookieName, refreshToken, {
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });

    setBearerAuthorizationAtHttpClient(accessToken);
  }, []);

  const userLogout = useCallback(() => {
    setAccessToken("");
    deleteCookie(refreshTokenCookieName);
    removeBearerAuthorizationAtHttpClient();
  }, [setAccessToken]);

  const userRefresh = useCallback(async () => {
    const refreshToken = getCookie(refreshTokenCookieName) as string | undefined;

    if (!refreshToken) {
      userLogout();
      throw new Error("Refresh token이 없습니다.");
    }

    try {
      refresh({ refreshToken: refreshToken });

      if (refreshData) {
        const newAccessToken = refreshData.authenticationToken.accessToken;
        localStorage.setItem("qc__access_token", newAccessToken);
        setBearerAuthorizationAtHttpClient(newAccessToken);

        return newAccessToken;
      }
    } catch (refreshError) {
      userLogout();
      throw refreshError;
    }
  }, [userLogout, refresh, refreshData]);

  return {
    refreshTokenCookieName,
    userLogin,
    userLogout,
    userRefresh,
  };
}
