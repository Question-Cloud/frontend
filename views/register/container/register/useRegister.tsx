"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { RegisterApiRequest, RegisterFormValues, useRegisterApi } from "../../api";
import { useDialogContext } from "@/providers";
import { useNavigator } from "@/hooks";

const useRegister = () => {
  const { handlePush } = useNavigator();
  const { provider } = useParams();
  const searchParams = useSearchParams();
  const socialRegisterToken = searchParams.get("registerToken");

  const { dialogOpen } = useDialogContext();
  const [email, setEmail] = useState("");

  const { mutate: register, data: registerData, error: registerError, isPending: isRegisterPending } = useRegisterApi();

  const handleRegister = (data: RegisterFormValues) => {
    const dataToSend: RegisterApiRequest = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      accountType: (provider as string).toUpperCase(),
      socialRegisterToken: socialRegisterToken ? socialRegisterToken : "",
    };

    setEmail(data.email);
    register(dataToSend);
  };

  useEffect(() => {
    if (registerData && email) {
      handlePush(`/register/${provider}/verify?resendToken=${registerData.resendToken}&email=${email}`);
    }
  }, [registerData, email, provider, handlePush]);

  useEffect(() => {
    if (registerError) {
      dialogOpen("registerFailed");
    }
  }, [dialogOpen, registerError]);

  return {
    handleRegister,
    registerError,
    isRegisterPending,
  };
};

export { useRegister };
