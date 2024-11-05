import { cn } from "@/utils";
import React from "react";

const AlignCenter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex justify-center h-screen", className)}>{children}</div>;
};

export { AlignCenter };
