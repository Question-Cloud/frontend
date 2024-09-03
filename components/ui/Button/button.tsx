import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center button whitespace-nowrap cursor-pointer events-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        navy: "bg-navy text-white hover:bg-navy/90 rounded-[8px]",
        gray: "bg-gray_02 text-gray_04 hover:bg-gray_03/60 rounded-[8px]",
        grayLine: "bg-white text-black hover:bg-gray_01/60 border border-solid border-gray_02 rounded-[8px]",
      },
      size: {
        large: "w-full h-[48px] px-[16px] py-[14.5px]",
        medium: "w-full h-[44px] px-[16px] py-[12.5px]",
        small: "w-full h-[36px] px-[16px] py-[8.5px]",
      },
    },
    defaultVariants: {
      variant: "navy",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
