import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "転職エージェント比較ラボ｜おすすめ転職エージェントランキング2026",
    template: "%s｜転職エージェント比較ラボ",
  },
  icons: {
    icon: '/favicon.jpg',
  },
  description:
    "転職エージェントを徹底比較。リクルートエージェント、doda、マイナビエージェント、ビズリーチ、JACリクルートメントなど人気5社を厳選。求人数・特徴・年代別おすすめを詳しく解説します。",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "転職エージェント比較ラボ",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenKaku.className} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
