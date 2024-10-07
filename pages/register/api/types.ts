interface RegisterFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm?: string;
}

interface RegisterApiRequest {
  email: string;
  password: string;
  socialRegisterToken?: string;
  accountType: string | string[];
  phone: string;
  name: string;
}

interface RegisterApiResponse {
  resendToken: string;
}

export type { RegisterFormValues, RegisterApiRequest, RegisterApiResponse };
