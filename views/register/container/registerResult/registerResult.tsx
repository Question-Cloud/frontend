"use client";

import { Button, CheckIcon } from "@/shared";
import React from "react";
import { useNavigator } from "@/hooks";
import { useRegisterResult } from "./useRegisterResult";

const RegisterResult = () => {
  const {} = useRegisterResult();
  const { handlePush } = useNavigator();

  return (
    <div className="flex flex-col items-center space-y-[32px] w-[620px] m-auto">
      <CheckIcon color="green" size="80" />
      <div className="heading1">회원가입이 완료되었습니다.</div>
      <Button variant="navy" size="large" onClick={() => handlePush("/login")}>
        로그인하러 가기
      </Button>
    </div>
  );
};

export { RegisterResult };
