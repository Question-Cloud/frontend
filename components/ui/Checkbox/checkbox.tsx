import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/utils/index";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, id, content, disabled, ...props }, ref) => (
  <div className="flex items-center">
    <CheckboxPrimitive.Root
      ref={ref}
      id={id}
      className={cn(
        "peer h-[24px] w-[24px] shrink-0 rounded-[4px] border border-black focus-visible:outline-none data-[state=checked]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100",
        className
      )}
      {...props}
      disabled={disabled}
    >
      <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center")}>
        <Check className="h-[18px] w-[18px] text-current" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label
      className={cn(
        "body2 text-black pt-[2px] ml-[8px] ",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"
      )}
      htmlFor={id}
    >
      {content}
    </label>
  </div>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
