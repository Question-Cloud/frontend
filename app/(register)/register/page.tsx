import { AlignCenter, SidePadding } from "@/components/_shared/layout";
import { RegisterOption } from "@/components/register";
import React from "react";

const RegisterOptionPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <RegisterOption />
      </AlignCenter>
    </SidePadding>
  );
};

export default RegisterOptionPage;
