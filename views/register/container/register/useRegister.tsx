"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RegisterApiRequest, RegisterFormValues, useRegisterApi } from "../../api";
import { useDialogContext } from "@/providers";
import { useNavigator } from "@/hooks";

const useRegister = () => {
  const { handleNavigate } = useNavigator();
  const { provider } = useParams();
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
    };

    setEmail(data.email);
    register(dataToSend);
  };

  useEffect(() => {
    if (registerData && email) {
      handleNavigate(`/register/${provider}/verify?resendToken=${registerData.resendToken}&email=${email}`);
    }
  }, [registerData, email, provider, handleNavigate]);

  useEffect(() => {
    if (registerError) {
      dialogOpen();
    }
  }, [dialogOpen, registerError]);

  return {
    handleRegister,
    registerError,
    isRegisterPending,
  };
};

export { useRegister };
