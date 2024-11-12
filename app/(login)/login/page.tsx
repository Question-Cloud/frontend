import { GuestGuard } from "@/providers";
import { Login } from "@/views/login";
import React from "react";

const LoginPage = () => {
  return (
    <GuestGuard>
      <Login />
    </GuestGuard>
  );
};

export default LoginPage;
