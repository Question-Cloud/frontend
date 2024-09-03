import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const UserIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8ZM15.7142 12.7125C17.1064 11.6137 18 9.91121 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 9.91121 6.8936 11.6137 8.28579 12.7125C4.60205 14.187 2 17.7896 2 22H4C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H22C22 17.7896 19.3979 14.187 15.7142 12.7125Z"
      fill={convertStringColorToHex(color)}
    />
  </svg>
);
