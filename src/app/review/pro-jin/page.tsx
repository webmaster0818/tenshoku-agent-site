import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "@PRO人(アットプロジン)の評判は？IT専門転職エージェントを解説【2026年】",
  description: "@PRO人(アットプロジン・株式会社エスアイアイー運営)はIT・Web・ゲーム専門の転職エージェント。「たくさんの求人はいらない。私のための求人があればいい」を掲げる提案型・厳選紹介スタイル。未経験者向け窓口もあり。公式情報ベースで解説します。",
  alternates: { canonical: "/review/pro-jin/" },
};

const faqData = [
  {
    "q": "@PRO人の利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "未経験でも利用できますか？",
    "a": "公式LPに「未経験の方の登録はこちら」という専用導線が用意されています(2026年8月22日確認)。未経験からのIT転職相談にも対応する設計です。"
  },
  {
    "q": "「3部門で最高評価」とは何ですか？",
    "a": "公式LPに掲載されている評価表記は、日本コンシューマーリサーチによるWEB上のイメージ調査(2022年10月実施・IT業界への転職希望者111名対象)にもとづくものです。実利用者の成果調査ではないため、参考情報として捉えるのが適切です。"
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
          { name: "@PRO人の評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            @PRO人(アットプロジン)の評判は？IT専門転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">@PRO人(アットプロジン)は、株式会社エスアイアイーが運営するIT専門の転職エージェントです。「たくさんの求人はいらない。私のための求人があればいい。」をキャッチコピーに、大量紹介ではなく徹底したヒアリングからの提案型支援をモットーとしています。未経験者向けの登録窓口も用意されています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>IT専門の転職エージェント</strong>。IT技術・業界に精通する専門カウンセラーによる提案型支援を掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>大量紹介ではない厳選提案スタイル</strong>。「他社で多数の求人を紹介され困った」人向けの設計を明示しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>未経験者向けの登録窓口</strong>も用意されており、電話受付は10時〜21時です。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>IT転職 AGENT @PRO人の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">IT転職 AGENT @PRO人(アットプロジン)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社エスアイアイー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">IT・Web・ゲーム業界の転職(キャリアアップ・上流志向のエンジニア)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">支援スタイル</th><td className="px-3 py-2 border-b">徹底ヒアリング+提案型・厳選紹介(公式サイト記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">受付</th><td className="px-3 py-2 border-b">電話受付10時〜21時・未経験の方向け登録窓口あり</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">jobcareer.jp/lp/agent-projin</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：@PRO人公式LP(jobcareer.jp/lp/agent-projin)、2026年8月22日確認。3部門最高評価等の表記は日本コンシューマーリサーチのWEB上イメージ調査(2022年10月・111名対象)にもとづく公式掲載であり、実利用者の実績調査ではない点にご留意ください。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>IT転職 AGENT @PRO人の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">「聞く」を起点にした提案型支援</h3><p className="text-sm text-text-secondary leading-relaxed">転職希望者の話を徹底的に聞き、新たな気づきを提供する提案型をモットーに掲げています。大量の求人を送られて選びきれない、という他社エージェントへの不満を持つ人向けの設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">IT業界に精通した専門カウンセラー</h3><p className="text-sm text-text-secondary leading-relaxed">IT技術・業界に精通する専門カウンセラーによる、上流志向・キャリアアップ志向のエンジニアへの提案を強みとしています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">未経験からの相談窓口</h3><p className="text-sm text-text-secondary leading-relaxed">未経験の方向けの登録導線が別に用意されており、IT業界への入口の相談にも対応しています。</p></div>
        </div>

        <h2>IT転職 AGENT @PRO人が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>上流工程・キャリアアップを目指すITエンジニア</li>
              <li>大量紹介型のエージェントが合わなかった人</li>
              <li>夜間(〜21時)に電話相談したい在職中の人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>求人をたくさん見て自分で選びたい人 →求人検索型・総合型と併用を</li>
              <li>IT以外も検討中の人 →<a href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</a>等へ</li>
            </ul>
          </div>
        </div>

        <h2>IT転職 AGENT @PRO人 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>@PRO人は、厳選提案型のIT専門エージェントです。大量紹介が合わない人・上流志向のエンジニアに向いた設計で、利用は無料。IT特化型はTechClips・ユニゾンキャリア等と2〜3社併用し、提案の質を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/techclips/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              TechClipsエージェントの詳細
            </Link>
            <Link href="/review/unison-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ユニゾンキャリアの詳細
            </Link>
            <Link href="/type/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ITエンジニア向けエージェントまとめ
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
