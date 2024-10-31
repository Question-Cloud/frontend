"use client";

import { KakaoRedirect } from "@/views/oAuthRedirect";
import { useParams } from "next/navigation";
import React from "react";

const OAuthRedirectPage = () => {
  const { provider } = useParams();

  return provider === "kakao" ? (
    <KakaoRedirect />
  ) : provider === "naver" ? (
    <></>
  ) : provider === "google" ? (
    <></>
  ) : (
    <></>
  );
};

export default OAuthRedirectPage;
