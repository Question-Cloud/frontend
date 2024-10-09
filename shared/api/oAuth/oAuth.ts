import { httpClient } from "@/providers";
import { useMutation } from "@tanstack/react-query";
import { OAuthRequest, OAuthResponse } from "./types";

function useOAuthApi() {
  return useMutation({
    mutationFn: ({ accountType, code }: OAuthRequest) =>
      httpClient<OAuthResponse>({
        method: "GET",
        url: `/auth/social?accountType=${accountType}&code=${code}`,
      }),
  });
}

export { useOAuthApi };
