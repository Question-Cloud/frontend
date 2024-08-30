import { convertStringColorToHex } from "@/utils";
import { SVGProps, baseColor } from "./types";

export const LogoutIcon = ({ color = baseColor, size = "24" }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={convertStringColorToHex(color)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5655 10.8167L15.6329 7.5L14.7958 8.45012L17.3433 11.3313H9V12.6714H17.3433L14.7958 15.5526L15.6335 16.5L18.5661 13.1833C18.7036 13.0277 18.8128 12.8431 18.8872 12.6398C18.9617 12.4365 19 12.2187 19 11.9987C19 11.7786 18.9617 11.5608 18.8872 11.3575C18.8128 11.1543 18.7036 10.9696 18.5661 10.814L18.5655 10.8167Z"
      fill={convertStringColorToHex(color)}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6327 7.31104L18.4964 10.5498L18.497 10.5472L18.6597 10.7311C18.808 10.8989 18.925 11.0972 19.0046 11.3145C19.0842 11.5317 19.125 11.7642 19.125 11.9986C19.125 12.233 19.0842 12.4655 19.0046 12.6827C18.925 12.9 18.808 13.0983 18.6597 13.266L15.6335 16.6886L14.6289 15.5525L17.0659 12.7963H8.875V11.2062H17.0659L14.6291 8.4502L15.6327 7.31104ZM18.5245 10.9591L15.6331 7.68883L14.9625 8.44991L17.6207 11.4562H9.125V12.5463H17.6207L14.9627 15.5525L15.6335 16.3112L18.4724 13.1004C18.5992 12.957 18.7005 12.786 18.7698 12.5967C18.8392 12.4075 18.875 12.2042 18.875 11.9986C18.875 11.793 18.8392 11.5897 18.7698 11.4005C18.7103 11.2379 18.6272 11.0888 18.5245 10.9591Z"
      fill={convertStringColorToHex(color)}
    />
    <path
      d="M10.7977 17.625C10.7977 17.7908 10.7344 17.9497 10.6216 18.0669C10.5089 18.1842 10.356 18.25 10.1965 18.25H6.30346C6.14403 18.25 5.99112 18.1842 5.87838 18.0669C5.76564 17.9497 5.70231 17.7908 5.70231 17.625V6.375C5.70231 6.20924 5.76564 6.05027 5.87838 5.93306C5.99112 5.81585 6.14403 5.75 6.30346 5.75H10.1965C10.356 5.75 10.5089 5.81585 10.6216 5.93306C10.7344 6.05027 10.7977 6.20924 10.7977 6.375V9.70813H12V6.375C12 5.87772 11.81 5.40081 11.4718 5.04917C11.1336 4.69754 10.6748 4.5 10.1965 4.5H6.30346C5.82515 4.5 5.36644 4.69754 5.02822 5.04917C4.69001 5.40081 4.5 5.87772 4.5 6.375V17.625C4.5 18.1223 4.69001 18.5992 5.02822 18.9508C5.36644 19.3025 5.82515 19.5 6.30346 19.5H10.1965C10.6748 19.5 11.1336 19.3025 11.4718 18.9508C11.81 18.5992 12 18.1223 12 17.625V14.2919H10.7977V17.625Z"
      fill={convertStringColorToHex(color)}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.93813 4.96252C5.29938 4.58694 5.7904 4.375 6.30346 4.375H10.1965C10.7096 4.375 11.2006 4.58694 11.5619 4.96252C11.923 5.33793 12.125 5.8461 12.125 6.375V9.83313H10.6727V6.375C10.6727 6.24086 10.6214 6.11314 10.5315 6.01971C10.4418 5.92645 10.3212 5.875 10.1965 5.875H6.30346C6.17878 5.875 6.05818 5.92645 5.96847 6.01971C5.87861 6.11314 5.82731 6.24086 5.82731 6.375V17.625C5.82731 17.7591 5.87861 17.8869 5.96847 17.9803C6.05818 18.0736 6.17878 18.125 6.30346 18.125H10.1965C10.3212 18.125 10.4418 18.0736 10.5315 17.9803C10.6214 17.8869 10.6727 17.7591 10.6727 17.625V14.1669H12.125V17.625C12.125 18.1539 11.923 18.6621 11.5619 19.0375C11.2006 19.4131 10.7096 19.625 10.1965 19.625H6.30346C5.7904 19.625 5.29938 19.4131 4.93813 19.0375C4.57704 18.6621 4.375 18.1539 4.375 17.625V6.375C4.375 5.8461 4.57704 5.33793 4.93813 4.96252ZM6.30346 4.625C5.85991 4.625 5.43349 4.80814 5.11831 5.13583C4.80297 5.46368 4.625 5.90934 4.625 6.375V17.625C4.625 18.0907 4.80297 18.5363 5.11831 18.8642C5.43349 19.1919 5.85991 19.375 6.30346 19.375H10.1965C10.6401 19.375 11.0665 19.1919 11.3817 18.8642C11.697 18.5363 11.875 18.0907 11.875 17.625V14.4169H10.9227V17.625C10.9227 17.8224 10.8473 18.0126 10.7117 18.1536C10.5759 18.2948 10.3907 18.375 10.1965 18.375H6.30346C6.10927 18.375 5.92406 18.2948 5.78829 18.1536C5.65268 18.0126 5.57731 17.8224 5.57731 17.625V6.375C5.57731 6.17762 5.65268 5.9874 5.78829 5.84641C5.92406 5.70525 6.10927 5.625 6.30346 5.625H10.1965C10.3907 5.625 10.5759 5.70525 10.7117 5.84641C10.8473 5.9874 10.9227 6.17762 10.9227 6.375V9.58313H11.875V6.375C11.875 5.90934 11.697 5.46368 11.3817 5.13583C11.0665 4.80814 10.6401 4.625 10.1965 4.625H6.30346Z"
      fill={convertStringColorToHex(color)}
    />
  </svg>
);