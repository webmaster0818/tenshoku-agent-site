import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoToc from "@/components/AutoToc";
import ScrollMotion from "@/components/ScrollMotion";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const notoSerif = Noto_Serif_JP({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-serif",
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
    "転職エージェントを比較するサイトです。リクルートエージェント、doda、マイナビ転職エージェント、ビズリーチ、JACリクルートメントなど人気5社を中心に、求人数・特徴・年代別おすすめを詳しく解説します。",
  metadataBase: new URL("https://tenshoku-agent-lab.com"),
  openGraph: {
    images: ["/opengraph-image.jpg"],
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
    <html lang="ja" className={`${notoSans.className} ${notoSerif.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* TOP以外のページにも TOP と同じ系統の動きを入れる（2026-11-03 施主指示「トップ同様に他のレビューページを含めてアニメーションを」）。
            html[data-tl] で TOP と同じスクロール出現（大きめの移動量・長めの減速）、html[data-tl-page] で
            1画面目の見出しのせり上がりと h2 の左からの描き出しを効かせる。TOP は page.tsx の script が担当するので除外。
            reduce の環境・JSが動かない環境では何も付かず、全文がそのまま見える。 */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(location.pathname!=='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;window.__tlT0=performance.now();window.__tlPage=1;d.setAttribute('data-tl','1');d.setAttribute('data-tl-page','1')}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        <div style={{ background: "rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ maxWidth: 1152, margin: "0 auto", padding: "4px 16px", fontSize: 11, color: "#6b7280" }}>本サイトはプロモーション(PR)を含みます。</p>
        </div>

        <Header />
        <main className="flex-1">{children}</main>
        <AutoToc />
        <ScrollMotion />
        <Footer />
      </body>
    </html>
  );
}
