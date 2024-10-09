/**
 * 로그인, 로그아웃 시 accessToken, refreshToken을 관리합니다.
 * 로그인 후 쿠키에 refreshToken을 저장하고, Authorization 헤더를 추가합니다.
 */

import { useCallback, useEffect } from "react";
import { setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient } from "@/providers/http-client";
import { deleteCookie, setCookie } from "cookies-next";
import { useUserSessionContext, useRefreshUserApi } from "@/providers/auth";
import { getCookie, hasCookie } from "cookies-next";

export const refreshTokenCookieName = "qc__refresh-token";

export function useUserSession() {
  console.log("test user session");

  const { setAccessToken } = useUserSessionContext();
  const { mutate: refresh, data: refreshData, error: refreshError } = useRefreshUserApi();

  // accessToken, refreshToken을 저장하고, Authorization Header에 accessToken을 설정한다.
  const userLogin = useCallback(
    ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
      setAccessToken(accessToken);

      setCookie(refreshTokenCookieName, refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
      });

      setBearerAuthorizationAtHttpClient(accessToken);
    },
    [setAccessToken]
  );

  // accessToken, refreshToken을 제거하고, Authorization Header를 제거한다.
  const userLogout = useCallback(() => {
    setAccessToken("");
    deleteCookie(refreshTokenCookieName);
    removeBearerAuthorizationAtHttpClient();
  }, [setAccessToken]);

  // User의 Session을 갱신한다.
  // axios interceptor로 옮기자

  // const initUserSession = useCallback(() => {
  //   if (hasCookie(refreshTokenCookieName)) {
  //     const refreshTokenFromCookie = getCookie(refreshTokenCookieName);
  //     if (typeof refreshTokenFromCookie === "string" && refreshTokenFromCookie) {
  //       refresh({ refreshToken: refreshTokenFromCookie });
  //     }
  //   }
  // }, [refresh]);

  // useEffect(() => {
  //   initUserSession();
  // }, [initUserSession]);

  // useEffect(() => {
  //   if (refreshData) {
  //     userLogin({
  //       accessToken: refreshData.authenticationToken.accessToken,
  //       refreshToken: refreshData.authenticationToken.refreshToken,
  //     });
  //   }
  // }, [refreshData, userLogin]);

  // useEffect(() => {
  //   if (refreshError) {
  //     console.log("토큰 갱신에 실패하여 자동으로 로그아웃합니다.");
  //     userLogout();
  //   }
  // }, [refreshError, userLogout]);

  return {
    refreshTokenCookieName,
    userLogin,
    userLogout,
  };
}
