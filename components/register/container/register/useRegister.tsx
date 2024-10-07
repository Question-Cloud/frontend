"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { RegisterApiRequest, RegisterFormValues, useRegisterApi } from "../../api";
import { useDialogContext } from "@/providers";

const useRegister = () => {
  const { push } = useRouter();
  const { provider } = useParams();
  const { dialogOpen } = useDialogContext();
  const [email, setEmail] = useState("");

  const { mutate: register, data: registerData, error: registerError, isPending: isRegisterPending } = useRegisterApi();

  const handleRegister = (data: RegisterFormValues) => {
    const accountType = Array.isArray(provider) ? provider.map((p) => p.toUpperCase()) : provider.toUpperCase();

    const dataToSend: RegisterApiRequest = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      accountType: accountType,
    };

    setEmail(data.email);
    register(dataToSend);
  };

  useEffect(() => {
    if (registerData && email) {
      push(`/register/${provider}/verify?resendToken=${registerData.resendToken}&email=${email}`);
    }
  }, [registerData, email, push]);

  useEffect(() => {
    if (registerError) {
      dialogOpen();
    }
  }, [registerError]);

  return {
    handleRegister,
    registerError,
    isRegisterPending,
  };
};

export { useRegister };
