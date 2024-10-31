"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Separator, SimpleAlarmDialog } from "@/shared";
import { loginSchema } from "../../schemas";
import { LoginFormValues } from "../../api";
import { useLogin } from "./useLogin";
import { useDialogContext } from "@/providers";
import { SocialLogin } from "../../components";
import { useNavigator } from "@/hooks";

const Login = () => {
  const { provider } = useParams();
  const { handleNavigate } = useNavigator();
  const { dialogClose, isDialogOpen } = useDialogContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { handleRegister, loginError, isLoginPending } = useLogin();

  return (
    <>
      <div className="flex flex-col">
        <div className="space-y-[32px] w-[420px] m-auto">
          <div className="flex justify-center heading1">로그인</div>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-[12px]">
            <Input
              type="email"
              placeholder="이메일을 입력해주세요"
              error={!!errors.email}
              errorMessage={errors.email && errors.email.message}
              {...register("email")}
              autoComplete="new-password"
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              error={!!errors.password}
              errorMessage={errors.password && errors.password.message}
              {...register("password")}
            />
            <Button variant="navy" size="large" type="submit" disabled={!isValid || isLoginPending}>
              {isLoginPending ? "로그인 중" : "로그인"}
            </Button>
          </form>
        </div>
        <div className="flex w-[250px] justify-between items-center m-auto mt-[12px]">
          <Button variant="text" size="large">
            <div>이메일 찾기</div>
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <Button variant="text" size="large">
            <div>비밀번호 찾기</div>
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <Button variant="text" size="large" onClick={() => handleNavigate("/register")}>
            <div>회원가입</div>
          </Button>
        </div>
        <SocialLogin />
      </div>
      {isDialogOpen("loginError") && (
        <SimpleAlarmDialog id="loginError" message={loginError?.message} onClose={() => dialogClose("loginError")} />
      )}
    </>
  );
};

export { Login };
