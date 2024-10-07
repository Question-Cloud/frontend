"use client";

import { Button, CheckIcon } from "@/components/_shared/ui";
import React from "react";
import { useRegisterResult } from "./useRegisterResult";

const RegisterResult = () => {
  const { handleGoLoginPage } = useRegisterResult();

  return (
    <div className="flex flex-col items-center space-y-[32px] w-[620px] m-auto">
      <CheckIcon color="green" size="80" />
      <div className="heading1">회원가입이 완료되었습니다.</div>
      <Button variant="navy" size="large" onClick={handleGoLoginPage}>
        로그인하러 가기
      </Button>
    </div>
  );
};

export { RegisterResult };
