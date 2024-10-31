import { useNavigator } from "@/hooks";
import { Button, GoogleIcon, KakaoIcon, NaverIcon } from "@/shared";
import { useSelectOAuth } from "@/views/oAuthRedirect";
import React from "react";

const SocialLogin = () => {
  const { handleNavigate } = useNavigator();
  const { handleKakaoLogin } = useSelectOAuth();

  return (
    <div className="w-[200px] m-auto mt-[40px]">
      <div className="w-full flex justify-between">
        <Button
          className="w-[60px] h-[60px] rounded-full bg-naverBg hover:bg-naverBg"
          onClick={() => handleNavigate("/login/naver")}
        >
          <NaverIcon color="white" />
        </Button>
        <Button
          size="large"
          className="w-[60px] h-[60px] rounded-full bg-kakaoBg hover:bg-kakaoBg"
          onClick={handleKakaoLogin}
        >
          <KakaoIcon color="kakaoLogo" />
        </Button>
        <Button
          size="large"
          className="w-[60px] h-[60px] rounded-full bg-googleBg hover:bg-googleBg"
          onClick={() => handleNavigate("/login/google")}
        >
          <GoogleIcon color="white" />
        </Button>
      </div>
    </div>
  );
};

export { SocialLogin };
