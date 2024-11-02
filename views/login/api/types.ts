interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginApiRequest extends LoginFormValues {
  socialRegisterToken?: string;
}

export type { LoginFormValues, LoginApiRequest };
