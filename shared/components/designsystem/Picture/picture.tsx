import Image from "next/image";
import React from "react";
import { PictureProps } from "./types";

const DefaultPicture = () => {
  return <div className="flex items-center justify-center border border-gray_02 body2 h-full">이미지가 없어요</div>;
};

const Picture = ({ imagePath, alt, width, height, className }: PictureProps) => {
  return imagePath ? (
    <Image
      src={imagePath}
      alt={alt}
      width={width ? width : 380}
      height={height ? height : 430}
      fill={!width && !height ? true : undefined}
      className={className}
      // TODO: 단순한 더미 데이터 생성 URL이나, Next.js의 이미지 최적화가 필요 없는 이미지 (나중에 제거)
      unoptimized={true}
    />
  ) : (
    <DefaultPicture />
  );
};

export { Picture };
