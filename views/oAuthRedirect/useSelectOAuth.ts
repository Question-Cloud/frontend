const useSelectOAuth = () => {
  const KAKAO_API_KEY = process.env["NEXT_PUBLIC_KAKAO_API_KEY"];
  const KAKAO_REDIRECT_URI = process.env["NEXT_PUBLIC_KAKAO_REDIRECT_URI"];

  const handleKakaoLogin = () => {
    if (KAKAO_API_KEY && KAKAO_REDIRECT_URI) {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
      window.location.href = kakaoAuthUrl;
    }
  };

  return { handleKakaoLogin };
};

export { useSelectOAuth };
