import { useEffect } from "react";
import { useResendEmailApi } from "../../api";
import { useSearchParams } from "next/navigation";
import { useDialogContext } from "@/providers";

const useRegisterVerify = () => {
  const searchParams = useSearchParams();
  const resendToken = searchParams.get("resendToken");
  const email = searchParams.get("email");

  const { dialogOpen } = useDialogContext();

  const {
    mutate: resendEmail,
    data: resendEmailData,
    error: resendEmailError,
    isPending: isResendEmailPending,
  } = useResendEmailApi();

  const handleResendEmail = () => {
    if (resendToken) resendEmail(resendToken);
  };

  useEffect(() => {
    if (resendEmailData) {
      dialogOpen("resendEmail");
    }
  }, [dialogOpen, resendEmailData]);

  useEffect(() => {
    if (resendEmailError) {
      dialogOpen("resendEmailError");
    }
  }, [dialogOpen, resendEmailError]);

  return {
    handleResendEmail,
    resendEmailData,
    resendEmailError,
    isResendEmailPending,
    email,
  };
};

export { useRegisterVerify };
