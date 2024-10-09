import { AlignCenter, SidePadding } from "@/components/_shared/layout";
import { RegisterVerify } from "@/views/register";
import React from "react";

const RegisterVerifyPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <RegisterVerify />
      </AlignCenter>
    </SidePadding>
  );
};

export default RegisterVerifyPage;