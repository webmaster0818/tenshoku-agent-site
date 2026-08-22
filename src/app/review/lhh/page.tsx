import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "LHH転職エージェントの評判は？アデコ運営のハイクラス転職エージェントを解説【2026年】",
  description: "LHH転職エージェントは、世界的人材サービスAdeccoグループの日本法人アデコ株式会社が展開する転職エージェント。年収以外の条件にもこだわるハイクラス転職を掲げ、IT・営業・エンジニアなど幅広い職種をカバー。公式情報ベースで解説します。",
  alternates: { canonical: "/review/lhh/" },
};

const faqData = [
  {
    "q": "LHH転職エージェントの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "LHHとアデコの関係は？",
    "a": "LHHはAdeccoグループの人材紹介・キャリア支援ブランドで、日本ではアデコ株式会社が展開しています(2026年8月22日確認)。"
  },
  {
    "q": "どんな職種に対応していますか？",
    "a": "公式サイトにはIT・クリエイティブ・マーケティング・営業・販売サービス・ファッション・エンジニア(電気/電子/機械)などの領域が掲げられており、幅広い職種に対応しています。"
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
          { name: "LHH転職エージェントの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            LHH転職エージェントの評判は？アデコ運営のハイクラス転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">LHH転職エージェントは、世界的人材サービスAdeccoグループのブランド「LHH」として、アデコ株式会社が日本で展開する転職エージェントです。人材紹介から再就職支援・キャリアコンサルティングまでを担うグローバルブランドで、「年収以外にもこだわるハイクラス転職」を打ち出しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>世界的人材サービスAdeccoグループの転職エージェントブランド</strong>。日本ではアデコ株式会社が展開しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>IT・クリエイティブ・マーケティング・営業・エンジニア(電気/電子/機械)など幅広い職種</strong>をカバーする総合型に近い設計です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>年収以外の条件も重視するハイクラス転職</strong>を掲げており、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>LHH転職エージェントの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">LHH転職エージェント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">アデコ株式会社(Adeccoグループ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">ブランド</th><td className="px-3 py-2 border-b">LHH(人材紹介・リーダーシップ育成・再就職支援等を含むグローバルブランド)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">IT/クリエイティブ/マーケティング/営業/販売・サービス/ファッション/エンジニア(電気・電子・機械)等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">lhh.com/ja-jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：LHH公式サイト(lhh.com/ja-jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>LHH転職エージェントの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">グローバルブランドの基盤</h3><p className="text-sm text-text-secondary leading-relaxed">Adeccoグループの世界的ネットワークを背景に、外資系・グローバル企業を含む求人にアクセスしやすい体制です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">職種別の専門コンサルタント体制</h3><p className="text-sm text-text-secondary leading-relaxed">IT・営業・エンジニアなど職種別の領域区分が公式サイトに明示されており、職種軸での専門的な支援を受けられる設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">年収以外の条件も重視する提案</h3><p className="text-sm text-text-secondary leading-relaxed">「年収以外にもこだわるハイクラス転職」を掲げ、働き方や役割まで含めた条件のすり合わせを打ち出しています。</p></div>
        </div>

        <h2>LHH転職エージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>年収だけでなく働き方・役割にもこだわりたいミドル〜ハイクラス層</li>
              <li>外資系・グローバル企業も視野に入れたい人</li>
              <li>職種軸の専門的な担当者に相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>経歴の浅い20代 →<a href="/type/second-new-grad/" className="text-teal underline">第二新卒向けエージェント</a>へ</li>
              <li>国内大手中心のサポートを求める人 →<a href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</a>等と併用を</li>
            </ul>
          </div>
        </div>

        <h2>LHH転職エージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>LHH転職エージェントは、Adeccoグループのグローバル基盤を持つハイクラス志向の転職エージェントです。職種別の専門体制と外資系含む求人アクセスが特徴で、利用は無料。ビズリーチ・JAC等のハイクラス系と併用して比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
            </Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェントまとめ
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
