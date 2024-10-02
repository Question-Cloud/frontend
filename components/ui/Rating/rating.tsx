import React from "react";
import { StarIcon } from "../Icons";

export const Rating = (rate: { rate: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        if (index < rate.rate) {
          return <StarIcon color="yellow" />;
        } else if (index >= rate.rate) {
          return <StarIcon color="gray_02" />;
        }
      })}
      <div className="body1 pl-[8px] pt-[3px]">{rate.rate}</div>
    </div>
  );
};
