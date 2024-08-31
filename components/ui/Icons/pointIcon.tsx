import { SVGProps, baseColor } from "./types";

export const PointIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.5 13C19.0899 13 22 12.1046 22 11C22 9.89543 19.0899 9 15.5 9C11.9101 9 9 9.89543 9 11C9 12.1046 11.9101 13 15.5 13Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 15.5C22 16.605 19.09 17.5 15.5 17.5C11.91 17.5 9 16.605 9 15.5"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 11V19.8C22 21.015 19.09 22 15.5 22C11.91 22 9 21.015 9 19.8V11"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.5 6C12.0899 6 15 5.10457 15 4C15 2.89543 12.0899 2 8.5 2C4.91015 2 2 2.89543 2 4C2 5.10457 4.91015 6 8.5 6Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 11C4.108 10.77 2.37 10.175 2 9M6 16C4.108 15.77 2.37 15.175 2 14"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 21C4.108 20.77 2.37 20.174 2 19V4M15 6V4"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
