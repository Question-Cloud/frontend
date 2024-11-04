import { createApiErrorMessage } from "./httpError";
import axios, { AxiosResponse } from "axios";
import { useUserSession } from "@/hooks";
import { accessTokenName, refreshTokenName } from "@/shared/constant";
import { jwtDecode } from "jwt-decode";
import { deleteCookie } from "cookies-next";

const developmentApiUrl = process.env["NEXT_PUBLIC_DEVELOPMENT_API"];

const client = axios.create({
  baseURL: developmentApiUrl,
});

async function httpClient<T>(...args: Parameters<typeof client.request>) {
  try {
    const response: AxiosResponse<T> = await client(...args);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      const errorMessage = e.response.data.message ? e.response.data.message : createApiErrorMessage(e.response.status);
      throw new Error(errorMessage);
    } else {
      throw new Error("알 수 없는 오류가 발생했어요.\n같은 오류가 지속되면 개발자에게 문의해주세요.");
    }
  }
}

const setBearerAuthorizationAtHttpClient = (token: string) => {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const removeBearerAuthorizationAtHttpClient = () => {
  delete client.defaults.headers.common.Authorization;
};

const checkTokenExpiring = (token: string): boolean => {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp - currentTime <= 60;
  } catch (error) {
    return true;
  }
};

client.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(accessTokenName);

    if (accessToken && checkTokenExpiring(accessToken)) {
      try {
        const newAccessToken = await useUserSession().userRefresh();
        config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      } catch (error) {
        localStorage.removeItem(accessTokenName);
        deleteCookie(refreshTokenName);
        removeBearerAuthorizationAtHttpClient();
        window.location.href = "/login";
      }
    } else if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { client, httpClient, setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient };
