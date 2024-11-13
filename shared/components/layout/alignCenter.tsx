"use client";

import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import React from "react";

const AlignCenter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const pathname = usePathname();

  if (
    pathname.startsWith("/register") ||
    pathname.startsWith("/email-verification") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/user")
  ) {
    return <div className={cn("flex justify-center h-screen", className)}>{children}</div>;
  }

  return <div className={cn("flex justify-center min-h-[calc(100vh-260px)]", className)}>{children}</div>;
};

export { AlignCenter };
