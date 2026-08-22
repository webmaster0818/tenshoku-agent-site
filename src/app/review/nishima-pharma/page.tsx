import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "にしまファーマの評判は？医療業界特化の転職エージェントを解説【2026年】",
  description: "にしまファーマ株式会社は医療業界向けの転職エージェント。医療業界出身のコンサルタントが支援し、未経験からの医療業界転職にも対応。有料職業紹介事業許可番号13-ユ-315534。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/nishima-pharma/" },
};

const faqData = [
  {
    "q": "にしまファーマの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "医療業界未経験でも相談できますか？",
    "a": "公式サイトは「医療業界に行きたいが、未経験で不安」という人を明確に対象に含めています(2026年8月22日確認)。業界の入口からの相談が可能です。"
  },
  {
    "q": "どんな職種の求人がありますか？",
    "a": "医療業界向けの転職エージェントとして運営されています。具体的な職種構成・求人内容は無料キャリア診断・面談時にご確認ください。"
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
          { name: "にしまファーマの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            にしまファーマの評判は？医療業界特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">にしまファーマは、にしまファーマ株式会社が運営する医療業界向けの転職エージェントです。「医療業界出身の転職のプロが一人ひとりに寄り添う」ことを掲げ、医療業界内の転職に加えて、未経験から医療業界を目指す人の相談にも対応しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>医療業界向けの転職エージェント</strong>。医療業界出身のコンサルタントによる支援を公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>未経験から医療業界を目指す人の相談にも対応</strong>する設計が公式サイトに明示されています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>有料職業紹介事業許可番号(13-ユ-315534)を公式サイトで確認</strong>。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>にしまファーマの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">にしまファーマ(医療業界向け転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">にしまファーマ株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">医療業界の転職(業界内転職・未経験からの医療業界挑戦)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-315534</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サポート</th><td className="px-3 py-2 border-b">無料キャリア診断/医療業界出身コンサルタントによる個別支援</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">nishimapharma.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：にしまファーマ公式サイト(nishimapharma.co.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>にしまファーマの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">医療業界出身コンサルタントの専門性</h3><p className="text-sm text-text-secondary leading-relaxed">「他のエージェントに相談したが医療業界に詳しくない」という悩みを起点に、業界出身のプロによる支援を最大の特徴として掲げています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">未経験からの医療業界挑戦に対応</h3><p className="text-sm text-text-secondary leading-relaxed">「医療業界に行きたいが未経験で不安」という人を明確に対象へ含めており、業界への入口の相談から始められます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">無料キャリア診断からの導線</h3><p className="text-sm text-text-secondary leading-relaxed">まず無料でキャリア診断を受けられる導線が公式サイトに用意されており、方向性が固まっていない段階でも使いやすい設計です。</p></div>
        </div>

        <h2>にしまファーマが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>医療業界内でキャリアアップ転職したい人</li>
              <li>未経験から医療業界に挑戦したい人</li>
              <li>業界を深く理解した担当者に相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>薬剤師免許を活かした調剤求人が中心の人 →<a href="/review/oshigoto-lab/" className="text-teal underline">お仕事ラボ</a>も比較を</li>
              <li>医療以外も含めて広く見たい人 →総合型と併用を</li>
            </ul>
          </div>
        </div>

        <h2>にしまファーマ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>にしまファーマは、医療業界出身コンサルタントによる専門支援を掲げる医療特化エージェントです。業界内転職から未経験挑戦まで対応し、利用は無料。医療系の転職では職種特化型(薬剤師・技師等)との併用で求人の幅を確保するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/oshigoto-lab/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              お仕事ラボ(薬剤師)の詳細
            </Link>
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向けエージェントまとめ
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
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
