import { createApiErrorMessage } from "./httpError";
import axios, { AxiosResponse } from "axios";

const developmentApiUrl = process.env["NEXT_PUBLIC_DEVELOPMENT_API"];

const client = axios.create({
  baseURL: developmentApiUrl,
});

async function httpClient<T>(...args: Parameters<typeof client.request>) {
  try {
    const res: AxiosResponse<T> = await client(...args);
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      const errorMessage = e.response.data.message ? e.response.data.message : createApiErrorMessage(e.response.status);
      throw new Error(errorMessage);
    } else {
      throw new Error("알 수 없는 오류가 발생했어요");
    }
  }
}

const setBearerAuthorizationAtHttpClient = (token: string) => {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const removeBearerAuthorizationAtHttpClient = () => {
  delete client.defaults.headers.common.Authorization;
};

export { client, httpClient, setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient };
