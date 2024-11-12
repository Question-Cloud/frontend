import type { Metadata } from "next";
import "../styles/globals.css";
import { DialogProvider, QueryClientProvider, UserSessionProvider } from "@/providers";
import { AlignCenter, Footer, Header, SidePadding } from "@/shared";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
          <ReactQueryDevtools />
          <DialogProvider>
            <UserSessionProvider>
              <div className="w-screen">
                <Header />
                <SidePadding>
                  <AlignCenter>{children}</AlignCenter>
                </SidePadding>
                <Footer />
              </div>
            </UserSessionProvider>
          </DialogProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
