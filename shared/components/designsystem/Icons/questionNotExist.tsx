import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const QuestionNotExist = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 19C10.6318 18.2101 9.07983 17.7942 7.5 17.7942C5.92017 17.7942 4.36817 18.2101 3 19V6C3.66412 5.61647 4.37455 5.31939 5.114 5.116M12 19C13.7831 17.9707 15.8652 17.5838 17.899 17.904M12 19V12M8.914 4.906C9.984 5.076 11.03 5.44 12 6M12 6C13.3682 5.21009 14.9202 4.79423 16.5 4.79423C18.0798 4.79423 19.6318 5.21009 21 6V17M12 6V8M3 3L21 21"
      stroke={convertStringColorToHex(color)}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
