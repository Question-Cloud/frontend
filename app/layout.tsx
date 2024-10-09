import type { Metadata } from "next";
import "../styles/globals.css";
import { DialogProvider, QueryClientProvider, UserSessionProvider } from "@/providers";

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
          <UserSessionProvider>
            <DialogProvider>
              <div className="w-screen">{children}</div>
            </DialogProvider>
          </UserSessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
