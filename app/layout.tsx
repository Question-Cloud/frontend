import type { Metadata } from "next";
import "../styles/globals.css";
import { QueryClientWrapper } from "@/utils";

export const metadata: Metadata = {
  title: "문제저장소",
  description: "수능 문제저장소 입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryClientWrapper>
          <div>헤더</div>
          {children}
        </QueryClientWrapper>
      </body>
    </html>
  );
}
