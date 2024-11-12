import { cn } from "@/utils";
import React from "react";

const AlignCenter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex justify-center min-h-[calc(100vh-260px)]", className)}>{children}</div>;
};

export { AlignCenter };
