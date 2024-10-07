import { isEmail, isHomePhone, isMobilePhone, isPassword } from "@/utils";
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
  .refine((password) => isPassword(password), {
    message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
  });

const phoneSchema = z
  .string()
  .regex(/^\d+$/, "전화번호는 숫자만 입력해야 합니다.")
  .refine((phone) => isMobilePhone(phone) || isHomePhone(phone), {
    message: "전화번호 형식이 유효하지 않습니다.",
  });

const registerSchema = z
  .object({
    name: z.string().min(1, "닉네임을 입력해주세요."),
    email: z.string().refine((email) => isEmail(email), {
      message: "이메일 형식이 유효하지 않습니다.",
    }),
    password: passwordSchema,
    passwordConfirm: z.string(),
    phone: phoneSchema,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export { registerSchema };
