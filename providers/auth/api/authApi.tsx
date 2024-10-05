import { httpClient } from "@/providers";
import { useMutation } from "@tanstack/react-query";

export interface RefreshUserResponse {
  authenticationToken: {
    accessToken: string;
    refreshToken: string;
  };
}

function useRefreshUser() {
  return useMutation({
    mutationFn: ({ refreshToken }: { refreshToken: string }) =>
      httpClient<RefreshUserResponse>({
        method: "POST",
        url: "/auth/refresh",
        params: { refreshToken: refreshToken },
      }),
  });
}

export { useRefreshUser };
