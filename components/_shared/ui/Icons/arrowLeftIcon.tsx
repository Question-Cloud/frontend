import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const ArrowLeftIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.50001 12.8L14.2 18.4C14.6 18.8 15.2 18.8 15.6 18.4C16 18 16 17.4 15.6 17L10.7 12L15.6 7C16 6.6 16 6 15.6 5.6C15.4 5.4 15.2 5.3 14.9 5.3C14.6 5.3 14.4 5.4 14.2 5.6L8.50001 11.2C8.10001 11.7 8.10001 12.3 8.50001 12.8C8.50001 12.7 8.50001 12.7 8.50001 12.8Z"
      fill={convertStringColorToHex(color)}
    />
  </svg>
);
