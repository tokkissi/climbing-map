import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "서울 클라이밍 지도",
    template: "%s | 서울 클라이밍 지도",
  },
  description: "서울 시내의 클라이밍 센터 위치를 알려주는 웹 앱 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
