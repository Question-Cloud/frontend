interface RegisterFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm?: string;
}

interface RegisterApiRequest extends RegisterFormValues {
  socialRegisterToken?: string;
  accountType: string;
}

interface RegisterApiResponse {
  resendToken: string;
}

export type { RegisterFormValues, RegisterApiRequest, RegisterApiResponse };
