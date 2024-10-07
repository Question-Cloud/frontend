import { useEffect } from "react";
import { useEmailVerifyApi } from "../../api";
import { useSearchParams, useRouter } from "next/navigation";

const useRegisterResult = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate: verifyEmail } = useEmailVerifyApi();

  const handleVerifyEmail = () => {
    if (token) verifyEmail(token);
  };

  useEffect(() => {
    handleVerifyEmail();
  }, []);

  const handleGoLoginPage = () => {
    push("/login");
  };

  return { handleGoLoginPage };
};

export { useRegisterResult };
