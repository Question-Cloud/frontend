import { httpClient } from "@/providers";
import { useMutation } from "@tanstack/react-query";
import { RegisterApiResponse, RegisterFormValues } from "./types";

function useRegisterApi() {
  return useMutation({
    mutationFn: (data: RegisterFormValues) =>
      httpClient<RegisterApiResponse>({
        method: "POST",
        url: "/user",
        data: data,
      }),
  });
}

function useResendEmailApi() {
  return useMutation({
    mutationFn: (resendToken: string) =>
      httpClient<{ success: boolean }>({
        method: "GET",
        url: `/user/resend-verification-mail?resendToken=${resendToken}`,
      }),
  });
}

function useEmailVerifyApi() {
  return useMutation({
    mutationFn: (token: string) =>
      httpClient<{ success: boolean }>({
        method: "GET",
        url: `/user/verify?token=${token}`,
      }),
  });
}

export { useRegisterApi, useResendEmailApi, useEmailVerifyApi };
