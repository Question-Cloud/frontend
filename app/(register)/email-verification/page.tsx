import { AlignCenter, SidePadding } from "@/components/_shared/layout";
import { RegisterResult } from "@/views/register";
import React from "react";

const RegisterResultPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <RegisterResult />
      </AlignCenter>
    </SidePadding>
  );
};

export default RegisterResultPage;