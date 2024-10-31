"use client";

import { useOAuthApi, SimpleAlarmDialog } from "@/shared";
import { useNavigator, useUserSession } from "@/hooks";
import { useDialogContext } from "@/providers";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const KakaoRedirect = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const accountType = "KAKAO";

  const { userLogin } = useUserSession();
  const { handleNavigate } = useNavigator();
  const { dialogOpen, dialogClose, isDialogOpen } = useDialogContext();

  const { mutate: kakaoCallback, data: kakaoCallbackData, error: kakaoCallbackError } = useOAuthApi();

  useEffect(() => {
    if (code) {
      kakaoCallback({ accountType, code });
    }
  }, [code, kakaoCallback]);

  useEffect(() => {
    if (kakaoCallbackData) {
      if (kakaoCallbackData.isRegistered === true) {
        const accessToken = kakaoCallbackData.authenticationToken.accessToken;
        const refreshToken = kakaoCallbackData.authenticationToken.refreshToken;
        userLogin({ accessToken, refreshToken });
      } else if (kakaoCallbackData.isRegistered === false) {
        dialogOpen("processRegister");
      }
    }
  }, [kakaoCallbackData, dialogOpen, userLogin]);

  useEffect(() => {
    if (kakaoCallbackError) {
      dialogOpen("kakaoCallbackError");
    }
  }, [dialogOpen, kakaoCallbackError]);

  return (
    <>
      {kakaoCallbackError && isDialogOpen("kakaoCallbackError") && (
        <SimpleAlarmDialog
          id="kakaoCallbackError"
          message={kakaoCallbackError.message}
          onClose={() => {
            dialogClose("kakaoCallbackError");
            handleNavigate(`/`);
          }}
        />
      )}
      {kakaoCallbackData && !kakaoCallbackData.isRegistered && isDialogOpen("processRegister") && (
        <SimpleAlarmDialog
          id="processRegister"
          message={"회원가입을 진행해주세요"}
          onClose={() => {
            dialogClose("ProcessRegister");
            handleNavigate(`/register/kakao?registerToken=${kakaoCallbackData.registerToken}`);
          }}
        />
      )}
    </>
  );
};

export { KakaoRedirect };
