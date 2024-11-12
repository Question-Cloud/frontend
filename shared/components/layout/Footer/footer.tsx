"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  if (
    pathname.startsWith("/register") ||
    pathname.startsWith("/email-verification") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/user")
  ) {
    return <></>;
  }

  return <div className="w-full h-[180px] bg-navy mt-[60px]" />;
};

export { Footer };
