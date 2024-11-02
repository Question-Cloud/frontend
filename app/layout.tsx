import type { Metadata } from "next";
import "../styles/globals.css";
import { DialogProvider, QueryClientProvider, UserSessionProvider } from "@/providers";
import { Header } from "@/shared";

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
          <DialogProvider>
            <UserSessionProvider>
              <Header />
              <div className="w-screen">{children}</div>
            </UserSessionProvider>
          </DialogProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
