import { isEmail } from "@/utils";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().refine((email) => isEmail(email), {
    message: "이메일 형식이 유효하지 않습니다.",
  }),
  password: z.string().min(1, { message: "비밀번호를 입력해주세요." }),
});

export { loginSchema };
