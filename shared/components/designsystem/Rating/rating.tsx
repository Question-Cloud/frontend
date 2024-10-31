import React from "react";
import { StarIcon } from "../Icons";
import { cn } from "@/utils";

const Rating = ({ className, rate }: { className?: string; rate: number }) => {
  return (
    <div className={cn("flex", className)}>
      {[...Array(5)].map((_, index) => {
        if (index < rate) {
          return <StarIcon color="yellow" key={index} />;
        } else if (index >= rate) {
          return <StarIcon color="gray_02" key={index} />;
        }
      })}
      <div className="body1 pl-[8px] pt-[3px]">{rate}</div>
    </div>
  );
};
Rating.displayName = "Rating";

export { Rating };
