"use client";

import { useCallback, useEffect } from "react";
import { useEmailVerifyApi } from "../../api";
import { useSearchParams, useRouter } from "next/navigation";

const useRegisterResult = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate: verifyEmail } = useEmailVerifyApi();

  const handleVerifyEmail = useCallback(() => {
    if (token) verifyEmail(token);
  }, [token, verifyEmail]);

  useEffect(() => {
    handleVerifyEmail();
  }, [handleVerifyEmail]);

  return {};
};

export { useRegisterResult };
