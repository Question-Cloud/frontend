import { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./header";
import {
  CouponIcon,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  LogoutIcon,
  PointIcon,
  ProfileIcon,
  UserIcon,
} from "../../designsystem";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => {
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
            <div className="flex gap-[20px]">
              <Link href="/login" className="heading2">
                로그인
              </Link>
              <Link href="/register" className="heading2">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const LoggedInButNotCreator: Story = {
  render: () => {
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
            <div className="flex gap-[20px]">
              <Link href="#" className="heading2">
                장바구니
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-[4px] outline-none">
                  <ProfileIcon />
                  <div className="heading2">닉네임</div>
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
                    <Link href="#" className="flex items-center gap-[4px]">
                      <LogoutIcon size="16" />
                      로그아웃
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const LoggedInAndCreator: Story = {
  render: () => {
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
            <div className="flex gap-[20px]">
              <Link href="#" className="heading2">
                크리에이터 등록
              </Link>
              <Link href="#" className="heading2">
                장바구니
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-[4px] outline-none">
                  <ProfileIcon />
                  <div className="heading2">닉네임</div>
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
                    <Link href="#" className="flex items-center gap-[4px]">
                      <LogoutIcon size="16" />
                      로그아웃
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
