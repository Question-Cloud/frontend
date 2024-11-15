"use client";

import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import React from "react";

const SidePadding = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="w-screen">
        <div className={cn("w-full m-auto", className)}>{children}</div>
      </div>
    );
  }

  return (
    <div className="w-screen">
      <div className={cn("w-full max-w-[1300px] m-auto", className)}>{children}</div>
    </div>
  );
};

export { SidePadding };
