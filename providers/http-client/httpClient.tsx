import { createApiErrorMessage } from "./httpError";
import axios, { AxiosResponse } from "axios";

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

// client.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // accessToken 만료로 인해 401이 발생한 경우
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshToken = getCookie(refreshTokenCookieName);
//       if (refreshToken) {
//         try {
//           const { data } = await axios.post("/auth/refresh", { refreshToken });

//           setBearerAuthorizationAtHttpClient(data.authenticationToken.accessToken);
//           originalRequest.headers["Authorization"] = `Bearer ${data.authenticationToken.accessToken}`;

//           return httpClient(originalRequest);
//         } catch (refreshError) {
//           console.log("refresh token failed", refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export { client, httpClient, setBearerAuthorizationAtHttpClient, removeBearerAuthorizationAtHttpClient };
