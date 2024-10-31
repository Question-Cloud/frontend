"use client";

import { useEffect } from "react";
import { useDialogContext } from "@/providers";
import { useNavigator, useUserSession } from "@/hooks";
import { LoginFormValues, LoginApiRequest, useLoginApi } from "../../api";

const useLogin = () => {
  const { handleNavigate } = useNavigator();

  const { userLogin } = useUserSession();
  const { dialogOpen } = useDialogContext();

  const { mutate: login, data: loginData, error: loginError, isPending: isLoginPending } = useLoginApi();

  const handleRegister = (data: LoginFormValues) => {
    const dataToSend: LoginApiRequest = {
      email: data.email,
      password: data.password,
    };

    login(dataToSend);
  };

  useEffect(() => {
    if (loginData) {
      const accessToken = "";
      const refreshToken = "";
      userLogin({ accessToken, refreshToken });
      handleNavigate("/");
    }
  }, [handleNavigate, loginData, userLogin]);

  useEffect(() => {
    if (loginError) {
      dialogOpen("loginError");
    }
  }, [dialogOpen, loginError]);

  return {
    handleRegister,
    loginError,
    isLoginPending,
  };
};

export { useLogin };
