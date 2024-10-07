import React from "react";

const AlignCenter = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center items-center h-screen">{children}</div>;
};

export { AlignCenter };
