import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const StarIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2416_18722)">
      <path
        d="M10.9402 2.52849C11.2985 1.42106 12.8653 1.42106 13.2236 2.52849L15.1717 8.54915H21.4898C22.6511 8.54915 23.1352 10.0341 22.1971 10.7186L17.0814 14.4509L19.0327 20.4816C19.3908 21.5881 18.1232 22.5059 17.1838 21.8205L12.0819 18.0983L6.98005 21.8205C6.04057 22.5059 4.77305 21.5881 5.13107 20.4816L7.08245 14.4509L1.96673 10.7186C1.0286 10.0341 1.51273 8.54915 2.67399 8.54915H8.99207L10.9402 2.52849Z"
        fill={convertStringColorToHex(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_2416_18722">
        <rect width={size} height={size} fill={convertStringColorToHex(color)} />
      </clipPath>
    </defs>
  </svg>
);
