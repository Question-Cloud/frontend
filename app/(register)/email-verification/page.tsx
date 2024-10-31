import { AlignCenter, SidePadding } from "@/shared";
import { RegisterResult } from "@/views/register";
import React, { Suspense } from "react";

const RegisterResultPage = () => {
  return (
    <SidePadding>
      <AlignCenter>
        <Suspense>
          <RegisterResult />
        </Suspense>
      </AlignCenter>
    </SidePadding>
  );
};

export default RegisterResultPage;
