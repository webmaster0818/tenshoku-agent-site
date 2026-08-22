import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ジョブソエルの評判は？医療・介護・福祉特化の求人サイトを解説【2026年】",
  description: "ジョブソエル(HIROグローバルホールディングス運営)は医療・介護・福祉特化の求人サイト。看護師2万件超・介護職3.4万件超など職種別求人を掲載し、スカウト機能も搭載(2026年8月確認)。特徴・向いている人を公式情報ベースで解説します。",
  alternates: { canonical: "/review/jobsoelu/" },
};

const faqData = [
  {
    "q": "ジョブソエルの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。求人掲載側(施設)が費用を負担するモデルです。"
  },
  {
    "q": "どんな職種の求人がありますか？",
    "a": "医師・歯科医師・薬剤師・看護師・各種技師・歯科衛生士・医療事務などの医科歯科系と、介護職・ケアマネジャー・生活支援員などの介護福祉系を幅広くカバーしています(2026年8月22日確認)。"
  },
  {
    "q": "エージェントのサポートはありますか？",
    "a": "ジョブソエルは求人サイト型(検索+スカウト)が基本です。担当者による伴走支援を求める場合は、エージェント型サービスとの併用が現実的です。"
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
          { name: "ジョブソエルの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ジョブソエルの評判は？医療・介護・福祉特化の求人サイトを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">ジョブソエルは、株式会社HIROグローバルホールディングスが運営する医療・介護・福祉特化の求人サイトです。医科歯科(医師・薬剤師・看護師・技師等)から介護福祉(介護職・ケアマネ等)まで、医療福祉領域の職種を幅広くカバーし、スカウト・メッセージ機能を備えています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>医療・介護・福祉に特化した求人サイト</strong>。看護師20,109件・介護職34,539件・薬剤師2,141件など職種別の求人を掲載(2026年8月22日確認時点の公式表示)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>スカウト・メッセージ・キープ機能</strong>を備えた求人サイト型で、自分のペースで探せる設計です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>医療事務・調剤事務・歯科助手など資格不問系の職種</strong>もカバーしています。</span></li>
          </ul>
        </div>

        <h2>ジョブソエルの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ジョブソエル(医療・介護・福祉特化の求人サイト)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社HIROグローバルホールディングス</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">医師/歯科医師/薬剤師/看護師/理学療法士/診療放射線技師/臨床検査技師/歯科衛生士/医療事務/介護職/ケアマネジャー/生活支援員等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">求人数の例</th><td className="px-3 py-2 border-b">看護師20,109件・介護職34,539件・理学療法士3,908件・歯科衛生士3,347件(2026年8月22日確認時点の公式表示)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">機能</th><td className="px-3 py-2 border-b">求人検索/スカウト/メッセージ/キープ/施設・動画コンテンツ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">jobsoel.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ジョブソエル公式サイト(jobsoel.com)、2026年8月22日確認。求人数は変動します。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>ジョブソエルの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">医療福祉の職種横断カバー</h3><p className="text-sm text-text-secondary leading-relaxed">医科歯科から介護福祉まで20超の職種区分で求人を掲載しており、資格職(看護師・技師等)も資格不問系(医療事務・助手)も同じサイトで探せます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">スカウト型の受け身転職に対応</h3><p className="text-sm text-text-secondary leading-relaxed">会員登録するとスカウト・メッセージ機能が使え、施設側からのアプローチを待つ使い方ができます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">施設情報・動画コンテンツ</h3><p className="text-sm text-text-secondary leading-relaxed">求人だけでなく施設情報や動画コンテンツも用意されており、職場の雰囲気を掴んでから応募しやすい構成です。</p></div>
        </div>

        <h2>ジョブソエルが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>医療・介護・福祉領域で職場を探している人</li>
              <li>スカウトを受けながら自分のペースで転職したい人</li>
              <li>医療事務・助手など資格不問で医療業界に入りたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>手厚いエージェントサポートを求める人 →<a href="/review/nishima-pharma/" className="text-teal underline">にしまファーマ</a>等のエージェント型と併用を</li>
              <li>薬剤師専門の高密度支援 →<a href="/review/oshigoto-lab/" className="text-teal underline">お仕事ラボ</a>へ</li>
            </ul>
          </div>
        </div>

        <h2>ジョブソエル よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>ジョブソエルは、医療・介護・福祉の職種を横断してカバーする求人サイトです。スカウト機能と豊富な職種区分が特徴で、利用は無料。エージェント型の医療特化サービスと併用すると、検索型と伴走型の両輪で職場を探せます。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/nishima-pharma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              にしまファーマの詳細
            </Link>
            <Link href="/review/oshigoto-lab/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              お仕事ラボの詳細
            </Link>
            <Link href="/review/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職サービス解説一覧
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
