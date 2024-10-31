import { AlignCenter, SidePadding } from "@/shared";
import { Login } from "@/views/login";
import React from "react";

const LoginPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <Login />
      </AlignCenter>
    </SidePadding>
  );
};

export default LoginPage;
