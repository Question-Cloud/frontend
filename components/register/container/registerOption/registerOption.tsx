"use client";

import { Button, GoogleIcon, KakaoIcon, NaverIcon } from "@/components/_shared/ui";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterOption = () => {
  const { push } = useRouter();

  const handleNavigate = (provider: string) => {
    push(`/register/${provider}`);
  };

  return (
    <>
      <div className="w-[620px] m-auto">
        <div className="flex justify-center heading1 mb-[32px]">회원가입</div>
        <div className="space-y-[24px] mb-[80px]">
          <Button
            size="large"
            className="bg-naverBg hover:bg-naverBg space-x-[8px]"
            onClick={() => handleNavigate("naver")}
          >
            <NaverIcon color="white" />
            <div>네이버 간편 가입하기</div>
          </Button>
          <Button
            size="large"
            className="bg-kakaoBg hover:bg-kakaoBg space-x-[8px]"
            onClick={() => handleNavigate("kakao")}
          >
            <KakaoIcon color="kakaoLogo" />
            <div className="text-kakaoLogo">카카오톡 간편 가입하기</div>
          </Button>
          <Button
            size="large"
            className="bg-googleBg hover:bg-googleBg space-x-[8px]"
            onClick={() => handleNavigate("google")}
          >
            <GoogleIcon color="white" />
            <div>구글 간편 가입하기</div>
          </Button>
        </div>
        <Button variant="grayLine" size="large" onClick={() => handleNavigate("email")}>
          <div>이메일로 가입하기</div>
        </Button>
        <Button variant="text" className="text-gray_04 mt-[16px]" onClick={() => push("/login")}>
          <div>이미 회원이신가요?</div>
        </Button>
      </div>
    </>
  );
};

export { RegisterOption };
