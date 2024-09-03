import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const NaverIcon = ({ color = baseColor, size = "20" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2416_18687)">
      <path
        d="M13.5608 10.7042L6.14667 0H0V20H6.43833V9.29667L13.8533 20H20V0H13.5608V10.7042Z"
        fill={convertStringColorToHex(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_2416_18687">
        <rect width={size} height={size} fill={convertStringColorToHex(color)} />
      </clipPath>
    </defs>
  </svg>
);
