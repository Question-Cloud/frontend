import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/index";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-[10px] pt-[4px] pb-[2px] caption",
  {
    variants: {
      variant: {
        red: "border-red bg-red text-white",
        navy: "border-navy bg-navy text-white",
      },
    },
    defaultVariants: {
      variant: "red",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
