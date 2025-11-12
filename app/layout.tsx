import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "펌프랠리",
  description: "컨설팅 국내 업체 중 가장 합리적인 금액으로! 불필요한 프랜차이즈 개설 비용없이 LED발판 게임장 창업을 준비해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
