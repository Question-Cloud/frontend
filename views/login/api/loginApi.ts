import { httpClient } from "@/providers";
import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from "./types";

function useLoginApi() {
  return useMutation({
    mutationFn: (data: LoginFormValues) =>
      httpClient({
        method: "POST",
        url: "/auth",
        data: data,
      }),
  });
}

export { useLoginApi };
