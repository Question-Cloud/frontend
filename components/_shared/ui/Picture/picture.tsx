import Image from "next/image";
import React from "react";
import { PictureProps } from "./types";

const Picture = ({ imagePath, alt, width, height }: PictureProps) => {
  return (
    <Image
      src={imagePath}
      alt={alt}
      width={width ? width : undefined}
      height={height ? height : undefined}
      fill={!width && !height ? true : undefined}
    />
  );
};

export { Picture };
