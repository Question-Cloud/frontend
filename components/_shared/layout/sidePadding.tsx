import React from "react";

const SidePadding = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen">
      <div className="w-full max-w-[1300px] m-auto">
        <div className="pb-[100px]" />
        {children}
      </div>
    </div>
  );
};

export { SidePadding };
