"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, SimpleAlarmDialog } from "@/shared";
import { registerSchema } from "../../schemas";
import { RegisterFormValues } from "../../api";
import { useRegister } from "./useRegister";
import { useDialogContext } from "@/providers";

const Register = () => {
  const { provider } = useParams();
  const { dialogClose } = useDialogContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleRegister, registerError, isRegisterPending } = useRegister();

  return (
    <>
      <div className="space-y-[32px] w-[620px] m-auto">
        <div className="flex justify-center heading1">회원가입</div>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-[24px]">
          <Input
            label="닉네임"
            isRequired
            type="text"
            placeholder="닉네임을 입력해주세요"
            error={!!errors.name}
            errorMessage={errors.name && errors.name.message}
            {...register("name")}
            autoComplete="new-password"
          />
          <Input
            label="이메일"
            isRequired
            type="email"
            placeholder="이메일을 입력해주세요"
            error={!!errors.email}
            errorMessage={errors.email && errors.email.message}
            {...register("email")}
            autoComplete="new-password"
          />
          <Input
            label="전화번호"
            isRequired
            type="tel"
            placeholder="전화번호를 입력해주세요"
            error={!!errors.phone}
            errorMessage={errors.phone && errors.phone.message}
            {...register("phone")}
          />
          {provider === "email" && (
            <>
              <Input
                label="비밀번호"
                isRequired
                type="password"
                placeholder="비밀번호는 영문, 숫자, 특수문자를 포함하여 8~12 문자로 작성해주세요"
                error={!!errors.password}
                errorMessage={errors.password && errors.password.message}
                {...register("password")}
              />
              <Input
                label="비밀번호 확인"
                isRequired
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요"
                error={!!errors.passwordConfirm}
                errorMessage={errors.passwordConfirm && errors.passwordConfirm.message}
                {...register("passwordConfirm")}
              />
            </>
          )}
          <Button variant="navy" size="large" type="submit" disabled={!isValid || isRegisterPending}>
            {isRegisterPending ? "이메일 전송중" : "회원가입"}
          </Button>
        </form>
      </div>
      <SimpleAlarmDialog message={registerError?.message} onClose={dialogClose} />
    </>
  );
};

export { Register };
