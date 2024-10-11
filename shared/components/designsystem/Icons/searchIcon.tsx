import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const SearchIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
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
      d="M17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11ZM15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.9056 17.3199Z"
      fill={convertStringColorToHex(color)}
    />
  </svg>
);