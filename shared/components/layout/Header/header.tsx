"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ProfileIcon,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  UserIcon,
  PointIcon,
  CouponIcon,
  LogoutIcon,
  SimpleAlarmDialog,
} from "@/shared";
import { usePathname } from "next/navigation";
import { useUserSession } from "@/hooks";
import { useDialogContext, useUserSessionContext } from "@/providers";

export const Header = () => {
  const pathname = usePathname();
  const { dialogClose, isDialogOpen } = useDialogContext();
  const { userInfo, isLoggedIn } = useUserSessionContext();
  const { userLogout } = useUserSession();

  if (
    pathname.startsWith("/register") ||
    pathname.startsWith("/email-verification") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/user")
  ) {
    return <></>;
  }

  return (
    <div className="sticky top-0 z-3 w-full bg-white drop-shadow-md">
      <div className="w-full max-w-[1300px] flex items-center h-[80px] m-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="40" height="40" className="mr-[40px]" />
        </Link>
        <div className="w-full flex justify-between">
          <div className="flex gap-[20px]">
            <Link href="#" className="heading2">
              자작문제
            </Link>
            <Link href="#" className="heading2">
              기출문제
            </Link>
          </div>
          {isLoggedIn && (
            <div className="flex gap-[20px]">
              {userInfo.myInformation.userType === "CreatorUser" ? (
                <></>
              ) : (
                <Link href="#" className="heading2">
                  크리에이터 등록
                </Link>
              )}
              <Link href="#" className="heading2">
                장바구니
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-[4px] outline-none">
                  <ProfileIcon />
                  <div className="heading2">{userInfo.myInformation.name}</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-[4px]">
                      <UserIcon size="16" />
                      마이페이지
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-[4px]">
                      <PointIcon size="16" />
                      포인트 충전
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-[4px]">
                      <CouponIcon size="16" />
                      쿠폰 관리
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-[4px]" onClick={() => userLogout()}>
                      <LogoutIcon size="16" />
                      로그아웃
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {!isLoggedIn && (
            <div className="flex gap-[20px]">
              <Link href="/login" className="heading2">
                로그인
              </Link>
              <Link href="/register" className="heading2">
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
      {isDialogOpen("userInfoError") && (
        <SimpleAlarmDialog
          id="userInfoError"
          message={"사용자 정보를 가져오는데 실패했어요😨\n다시 로그인 해주세요"}
          onClose={() => {
            dialogClose("userInfoError");
            userLogout("/login");
          }}
        />
      )}
    </div>
  );
};
