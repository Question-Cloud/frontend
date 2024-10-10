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
  const { dialogOpen, dialogClose } = useDialogContext();

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
        dialogOpen();
      }
    }
  }, [kakaoCallbackData, dialogOpen, userLogin]);

  useEffect(() => {
    if (kakaoCallbackError) {
      dialogOpen();
    }
  }, [dialogOpen, kakaoCallbackError]);

  return (
    <>
      {kakaoCallbackError && (
        <SimpleAlarmDialog
          message={kakaoCallbackError.message}
          onClose={() => {
            dialogClose();
            handleNavigate(`/`);
          }}
        />
      )}
      {kakaoCallbackData && !kakaoCallbackData.isRegistered && (
        <SimpleAlarmDialog
          message={"회원가입을 진행해주세요"}
          onClose={() => {
            dialogClose();
            handleNavigate(`/register/kakao?registerToken=${kakaoCallbackData.registerToken}`);
          }}
        />
      )}
    </>
  );
};

export { KakaoRedirect };
