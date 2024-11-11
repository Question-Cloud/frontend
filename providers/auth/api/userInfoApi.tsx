import { httpClient } from "@/providers";
import { useMutation } from "@tanstack/react-query";
import { UserInfo } from "./types";

function useUserInfoApi() {
  return useMutation({
    mutationFn: () =>
      httpClient<UserInfo>({
        method: "GET",
        url: "/user/profile/me",
      }),
  });
}

export { useUserInfoApi };
