import React, { createContext, useContext, forwardRef, ReactNode } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/utils/index";
import { CheckboxProps } from "./types";

const CheckboxContext = createContext<
  | {
      id: string | number;
      disabled?: boolean;
      checked?: boolean;
      onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
    }
  | undefined
>(undefined);

const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error("Error: 체크박스 구성요소는 체크박스 내에서 사용해야합니다.");
  }
  return context;
};

const Checkbox = ({ children, id, disabled, checked, onChange }: CheckboxProps) => {
  return (
    <CheckboxContext.Provider value={{ id, disabled, checked, onChange }}>
      <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </CheckboxContext.Provider>
  );
};

const CheckboxInput = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { id, disabled, checked, onChange } = useCheckboxContext();

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      id={id.toString()}
      className={cn(
        "peer h-[24px] w-[24px] shrink-0 rounded-[4px] border border-black focus-visible:outline-none data-[state=checked]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100",
        className
      )}
      {...props}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
    >
      <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center")}>
        <Check className="h-[18px] w-[18px] text-current" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

CheckboxInput.displayName = "CheckboxInput";

const CheckboxLabel = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { id, disabled } = useCheckboxContext();

  return (
    <label
      htmlFor={id.toString()}
      className={cn(
        "body2 text-black pt-[2px] mx-[8px]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100",
        className
      )}
    >
      {children}
    </label>
  );
};

CheckboxLabel.displayName = "CheckboxLabel";

export { Checkbox, CheckboxInput, CheckboxLabel };
