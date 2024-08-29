import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const PointIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 23"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 15C16 13.895 12.866 13 9 13M16 15C16 16.105 12.866 17 9 17C5.134 17 2 16.105 2 15M16 15V19.937C16 21.076 12.866 22 9 22C5.134 22 2 21.077 2 19.937V15M16 15C19.824 15 23 14.013 23 13V3M9 13C5.134 13 2 13.895 2 15M9 13C4.582 13 1 12.013 1 11V6M9 4C4.582 4 1 4.895 1 6M1 6C1 7.105 4.582 8 9 8C9 9.013 12.253 10 16.077 10C19.901 10 23 9.013 23 8M23 3C23 1.895 19.9 1 16.077 1C12.254 1 9.154 1.895 9.154 3M23 3C23 4.105 19.9 5 16.077 5C12.254 5 9.154 4.105 9.154 3M9.154 3V13.166"
      stroke={convertStringColorToHex(color)}
      stroke-width="2"
    />
  </svg>
);
