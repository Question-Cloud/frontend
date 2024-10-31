import { createApiErrorMessage } from "./httpError";
import axios, { AxiosResponse } from "axios";
import { useUserSession } from "@/hooks";
import { accessTokenName } from "@/shared/constant";

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

client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(accessTokenName);

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newAccessToken = await useUserSession().userRefresh();
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

      return client(originalRequest);
    }

    return Promise.reject(error);
  }
);

export { client, httpClient, setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient };
