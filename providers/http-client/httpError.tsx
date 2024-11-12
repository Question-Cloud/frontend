import { ERRORS, SERVER_ERROR_REGEX } from "@/constants";

const getErrorMessage = (statusCode: number) => {
  const isServerError = SERVER_ERROR_REGEX.test(statusCode.toString());

  if (isServerError) return ERRORS[500].message;

  if (statusCode in ERRORS) {
    return ERRORS[statusCode as keyof typeof ERRORS].message;
  }

  return ERRORS[0].message;
};

export { getErrorMessage };
