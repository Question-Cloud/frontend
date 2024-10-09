import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const CheckIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2979_11914)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8.46106 16.5656C8.74183 16.8439 9.12296 17.0002 9.52036 17C9.91776 17.0002 10.2989 16.8439 10.5797 16.5656L18.7415 8.4908C19.0862 8.14971 19.0862 7.59682 18.7415 7.25573C18.3968 6.91476 17.8381 6.91476 17.4933 7.25573L9.52036 15.1448L6.50666 12.1628C6.16195 11.8218 5.60317 11.8218 5.25845 12.1628C4.91385 12.5039 4.91385 13.0568 5.25845 13.3979L8.46106 16.5656Z"
        fill={convertStringColorToHex(color)}
      />
    </g>
    <defs>
      <clipPath id="clip0_2979_11914">
        <rect width="24" height="24" fill={convertStringColorToHex(color)} />
      </clipPath>
    </defs>
  </svg>
);
