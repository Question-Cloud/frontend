import { AlignCenter, SidePadding } from "@/shared";
import { Register } from "@/views/register";
import React from "react";

const RegisterPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <Register />
      </AlignCenter>
    </SidePadding>
  );
};

export default RegisterPage;
