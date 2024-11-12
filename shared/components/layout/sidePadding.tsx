import { cn } from "@/utils";
import React from "react";

const SidePadding = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className="w-screen">
      <div className={cn("w-full max-w-[1300px] m-auto", className)}>{children}</div>
    </div>
  );
};

export { SidePadding };
