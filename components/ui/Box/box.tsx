import { cn } from "@/utils";
import React from "react";

const Box = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-full p-[20px] rounded-[8px] border border-gray_02 text-left", className)} {...props}>
    {children}
  </div>
);
Box.displayName = "Box";

export { Box };
