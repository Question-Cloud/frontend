import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { Button, UserIcon, PointIcon, CouponIcon, LogoutIcon, ProfileIcon } from "@/components/ui";
import Link from "next/link";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-[4px] outline-none">
          <Button size="large">누르면 DropdownMenu가 열립니다</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="left-[-65px]">
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
    );
  },
};
