import type { Metadata } from "next";
import "../styles/globals.css";
import { QueryClientProvider, UserProvider } from "@/providers";
import { Header } from "@/components/_shared/layout";

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
        <QueryClientProvider>
          <UserProvider>
            <div className="w-screen">
              <Header isLogin={false} isAlreadyCreator={false} />
              {children}
            </div>
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
