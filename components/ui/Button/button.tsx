import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-button whitespace-nowrap disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy text-white hover:bg-navy/90 rounded-[12px]",
        gray: "bg-gray_01 text-gray_03 hover:bg-gray_02/60 rounded-[12px]",
        grayLine: "bg-white text-black hover:bg-gray_01/60 border border-solid border-gray_02 rounded-[12px]",
      },
      size: {
        default: "w-full h-[44px] px-[16px] py-[8px]",
        xl: "w-full h-[48px] px-[16px] py-[12.5px]",
        md: "w-full h-[48px] px-[16px] py-[8.5px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
