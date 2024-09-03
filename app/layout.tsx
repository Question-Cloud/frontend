import type { Metadata } from "next";
import "../styles/globals.css";
import { QueryClientWrapper } from "@/utils";
import { Header } from "@/components/layout";

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
          <div className="w-screen">
            <Header isLogin={false} isAlreadyCreator={false} />
            <div className="w-full max-w-[1300px] m-auto">
              <div className="pb-[100px]" />
              {children}
            </div>
          </div>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
