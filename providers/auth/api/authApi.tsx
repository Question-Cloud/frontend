import { httpClient } from "@/providers";
import { useMutation } from "@tanstack/react-query";
import { RefreshUserResponse } from "./types";

function useRefreshUserApi() {
  return useMutation({
    mutationFn: ({ refreshToken }: { refreshToken: string }) =>
      httpClient<RefreshUserResponse>({
        method: "POST",
        url: "/auth/refresh",
        params: { refreshToken: refreshToken },
      }),
  });
}

export { useRefreshUserApi };
