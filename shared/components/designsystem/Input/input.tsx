import * as React from "react";
import { cn } from "@/utils/index";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, isRequired, error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <div className="mb-[6px] flex items-center">
            <span className="body1 mr-[4px]">{label}</span>
            {isRequired && <span className="text-red">*</span>}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-[48px] w-full rounded-[8px] border bg-white px-[20px] py-[12px] placeholder placeholder:text-gray_03 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red focus:border-red" : "border-gray_02 focus:border-gray_04",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="caption text-red pt-[8px]">{errorMessage}</div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
