import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "LIBZ(リブズ)の評判は？逆求人型転職エージェントの仕組みを解説【2026年】",
  description: "LIBZ(リブズ)は株式会社リブが運営する逆求人型の転職エージェント。希望条件を登録・公開すると、それに応えられる企業から面談の立候補が届く「転職者ファースト」設計。リモート・時短など柔軟な働き方の求人にも対応。公式情報ベースで解説します。",
  alternates: { canonical: "/review/libz/" },
};

const faqData = [
  {
    "q": "LIBZの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担するモデルです。"
  },
  {
    "q": "逆求人型とは何ですか？",
    "a": "転職者が希望条件を登録・公開し、その条件に応えられる企業側から面談の立候補が届く仕組みです。企業の求人に応募する従来型と逆の流れになります(公式サイトの説明・2026年8月22日確認)。"
  },
  {
    "q": "登録してすぐ転職しないといけませんか？",
    "a": "逆求人型は条件を公開して企業からのアプローチを待つ設計のため、急いで転職する必要はありません。在職中に受け身で機会を待つ使い方に向いています。"
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "LIBZの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            LIBZ(リブズ)の評判は？逆求人型転職エージェントの仕組みを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">LIBZ(リブズ)は、株式会社リブが運営する逆求人型の転職エージェントです。従来の「企業が出した求人に応募する」仕組みではなく、転職者が希望条件を登録・公開し、それに応えられる企業だけが面談に立候補するという「転職者ファースト」の設計を掲げています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>希望条件を先出しする「逆求人」型</strong>。条件を登録・公開すると、応えられる企業から面談の立候補が届く仕組みです。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>フルリモート・時短などの柔軟な働き方の求人</strong>に関連するキーワードで訴求されており、働き方重視の転職に向いた設計です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>利用は無料</strong>。会員登録から始めるマッチング型サービスです。</span></li>
          </ul>
        </div>

        <h2>LIBZ(リブズ)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">LIBZ(リブズ・逆求人型転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社リブ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">仕組み</th><td className="px-3 py-2 border-b">転職の希望条件を登録して公開→希望を叶えられる企業から面談の立候補が届く</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">「転職者ファースト」を掲げる逆求人起点のマッチング</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">career.prismy.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：LIBZ公式サイト(career.prismy.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>LIBZ(リブズ)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">希望条件の先出しによるミスマッチ削減</h3><p className="text-sm text-text-secondary leading-relaxed">「こんな仕事がしたい」「こんな働き方がしたい」という希望を逆求人として公開し、応えられる企業だけがアプローチする構造のため、条件面のミスマッチが起きにくい設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">企業主導ではないマッチング体験</h3><p className="text-sm text-text-secondary leading-relaxed">従来型の求人応募ではなく、企業側が転職者の条件に立候補する形式で、選考の力学が転職者寄りになります。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">働き方重視の転職に適した設計</h3><p className="text-sm text-text-secondary leading-relaxed">リモート・時短などの柔軟な働き方を条件として提示しやすく、条件を曲げずに合う企業を待つ使い方ができます。</p></div>
        </div>

        <h2>LIBZ(リブズ)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>希望条件(働き方・リモート等)を曲げずに転職したい人</li>
              <li>スカウト型・逆求人型で自分の市場価値を確かめたい人</li>
              <li>在職中に受け身で機会を待ちたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>すぐに大量の求人を比較したい人 →求人検索型の総合エージェントと併用を</li>
              <li>対面サポート重視の人 →エージェント面談型のサービスへ</li>
            </ul>
          </div>
        </div>

        <h2>LIBZ(リブズ) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>LIBZは、希望条件を先出しして企業からの立候補を待つ逆求人型エージェントです。働き方の条件を重視する人・在職中に受け身で機会を待ちたい人に向いた設計で、利用は無料。能動的に求人を探す総合型と併用すると、攻めと待ちの両輪で転職活動を進められます。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチ(スカウト型)の詳細
            </Link>
            <Link href="/review/realme-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リアルミーキャリア(時短特化)の詳細
            </Link>
            <Link href="/type/women/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              女性向けエージェントまとめ
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
