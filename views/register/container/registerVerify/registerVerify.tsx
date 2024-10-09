"use client";

import React from "react";
import { Button, SimpleAlarmDialog } from "@/shared";
import { useRegisterVerify } from "./useRegisterVerify";
import { useDialogContext } from "@/providers";

const RegisterVerify = () => {
  const { dialogClose } = useDialogContext();
  const { handleResendEmail, email, resendEmailData, resendEmailError, isResendEmailPending } = useRegisterVerify();

  return (
    <div className="flex flex-col items-center space-y-[32px] w-[620px] m-auto">
      <div className="heading1">회원가입</div>
      <div className="body2 text-center">
        입력하신 이메일로 인증 관련 메일을 전송하였습니다.
        <br />
        아래의 메일에 전송된 링크를 클릭하면 회원가입이 완료됩니다.
      </div>
      <div className="heading2 text-navy">{email}</div>
      <div className="w-full text-center space-y-[20px]">
        <div className="caption text-gray_03">이메일을 받지 못하셨나요?</div>
        <Button variant="navy" size="large" onClick={handleResendEmail} disabled={isResendEmailPending}>
          {isResendEmailPending ? "이메일 전송중" : "이메일 재전송"}
        </Button>
      </div>
      {resendEmailData && <SimpleAlarmDialog message={"이메일이 재전송 되었습니다"} onClose={dialogClose} />}
      {resendEmailError && <SimpleAlarmDialog message={resendEmailError?.message} onClose={dialogClose} />}
    </div>
  );
};

export { RegisterVerify };
