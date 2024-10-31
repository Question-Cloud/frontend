import { useCallback } from "react";
import { setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient } from "@/providers/http-client";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRefreshUserApi, useUserSessionContext } from "@/providers/auth";
import { useNavigator } from "./useNavigator";
import { accessTokenName, refreshTokenName } from "@/shared/constant";

export function useUserSession() {
  const { handleNavigate } = useNavigator();
  const { setAccessToken } = useUserSessionContext();

  const { mutate: refresh, data: refreshData } = useRefreshUserApi();

  const userLogin = useCallback(({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
    localStorage.setItem(accessTokenName, accessToken);
    setAccessToken(accessToken);

    setCookie(refreshTokenName, refreshToken, {
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });

    setBearerAuthorizationAtHttpClient(accessToken);
    handleNavigate("/");
    refreshPage();
  }, []);

  const userLogout = useCallback((redirectUrl?: string) => {
    localStorage.removeItem(accessTokenName);
    setAccessToken("");
    deleteCookie(refreshTokenName);
    removeBearerAuthorizationAtHttpClient();
    handleNavigate(redirectUrl ? redirectUrl : "/");

    if (!redirectUrl || redirectUrl === "/") {
      refreshPage();
    }
  }, []);

  const userRefresh = useCallback(async () => {
    const refreshToken = getCookie(refreshTokenName) as string | undefined;

    if (!refreshToken) {
      userLogout();
      throw new Error("Refresh token이 없습니다.");
    }

    try {
      refresh({ refreshToken: refreshToken });

      if (refreshData) {
        const newAccessToken = refreshData.authenticationToken.accessToken;
        localStorage.setItem(accessTokenName, newAccessToken);
        setBearerAuthorizationAtHttpClient(newAccessToken);

        return newAccessToken;
      }
    } catch (refreshError) {
      userLogout();
      throw refreshError;
    }
  }, [userLogout, refresh, refreshData]);

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return {
    userLogin,
    userLogout,
    userRefresh,
  };
}
