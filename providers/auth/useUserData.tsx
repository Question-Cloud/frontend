/**
 * 로그인, 로그아웃 시 accessToken, refreshToken을 관리합니다.
 * 로그인 후 쿠키에 refreshToken을 저장하고, Authorization 헤더를 추가합니다.
 */

import { useCallback } from "react";
import { setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient } from "../http-client";
import { deleteCookie, setCookie } from "cookies-next";
import { queryClient } from "../react-query";

export const refreshTokenCookieName = "qc__refresh-token";

export function useUserData() {
  const userLogin = useCallback(({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
    queryClient.setQueryData(["accessToken"], accessToken);

    setCookie(refreshTokenCookieName, refreshToken, {
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });

    setBearerAuthorizationAtHttpClient(accessToken);
  }, []);

  const userLogout = useCallback(() => {
    queryClient.removeQueries({ queryKey: ["accessToken"] });
    deleteCookie(refreshTokenCookieName);
    removeBearerAuthorizationAtHttpClient();
  }, []);

  return {
    userLogin,
    userLogout,
  };
}
