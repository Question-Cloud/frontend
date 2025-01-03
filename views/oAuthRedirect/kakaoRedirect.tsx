"use client";

import { SimpleAlarmDialog, LoadingSpinner } from "@/shared";
import { useOAuthApi } from "@/shared/api";
import { useNavigator, useUserSession } from "@/hooks";
import { useDialogContext } from "@/providers";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const KakaoRedirect = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const accountType = "KAKAO";

  const { userLogin } = useUserSession();
  const { handlePush } = useNavigator();
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
  }, [kakaoCallbackData, dialogOpen, userLogin, handlePush]);

  useEffect(() => {
    if (kakaoCallbackError) {
      dialogOpen("kakaoCallbackError");
    }
  }, [dialogOpen, kakaoCallbackError]);

  return (
    <>
      <LoadingSpinner />
      {kakaoCallbackError && isDialogOpen("kakaoCallbackError") && (
        <SimpleAlarmDialog
          id="kakaoCallbackError"
          message={kakaoCallbackError.message}
          onClose={() => {
            dialogClose("kakaoCallbackError");
            handlePush(`/`);
          }}
        />
      )}
      {kakaoCallbackData && !kakaoCallbackData.isRegistered && isDialogOpen("processRegister") && (
        <SimpleAlarmDialog
          id="processRegister"
          message={"회원가입을 진행해주세요"}
          onClose={() => {
            dialogClose("ProcessRegister");
            handlePush(`/register/kakao?registerToken=${kakaoCallbackData.registerToken}`);
          }}
        />
      )}
    </>
  );
};

export { KakaoRedirect };
