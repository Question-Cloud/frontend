import { GuestGuard } from "@/providers";
import { AlignCenter, SidePadding } from "@/shared";
import { Login } from "@/views/login";
import React from "react";

const LoginPage = () => {
  return (
    <GuestGuard>
      <SidePadding>
        <AlignCenter>
          <Login />
        </AlignCenter>
      </SidePadding>
    </GuestGuard>
  );
};

export default LoginPage;
