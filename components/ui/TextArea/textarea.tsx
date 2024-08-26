import * as React from "react";
import { cn } from "@/utils/index";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isRequired?: boolean;
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, isRequired, error, ...props }, ref) => {
    return (
      <>
        <div className="w-full">
          {label && (
            <div className="mb-[6px] flex items-center">
              <span className="body1 mr-[4px]">{label}</span>
              {isRequired && <span className="text-red">*</span>}
            </div>
          )}
          <textarea
            className={cn(
              "flex min-h-[150px] w-full rounded-[8px] border bg-white px-[20px] py-[12px] body2 placeholder:text-gray_03 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
              error ? "border-red focus:border-red" : "border-gray_02 focus:border-gray_04",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
