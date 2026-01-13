import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "펌프랠리 | LED 발판 게임 · 소상공인 소자본 창업",
  description: "LED 발판 게임 · 암벽 게임 · 소상공인 소자본 창업, 상담 010-5534-4424",
  openGraph: {
    title: '펌프랠리',
    description: 'LED 발판 게임 · 암벽 게임 · 소상공인 소자본 창업, 상담 010-5534-4424',
    url: 'https://www.pumprally.com',
    siteName: '펌프랠리',
    images: [
      {
        url: 'https://www.pumprally.com/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '펌프랠리',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': 'd6b972f7d902376d6c2a516f1f181678c1c9a0e8',
  }
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
