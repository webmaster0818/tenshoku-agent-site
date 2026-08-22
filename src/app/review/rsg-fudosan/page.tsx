import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RSGの評判は？建設・不動産専門の転職エージェントを解説【2026年】",
  description: "株式会社RSGは建設・不動産専門の人材紹介・転職支援会社。収入UP率99.4%・月収/年収1.2倍〜1.5倍(いずれも公式表記)を掲げ、業界経験者のキャリアアップ転職を支援。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/rsg-fudosan/" },
};

const faqData = [
  {
    "q": "RSGの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "業界未経験でも利用できますか？",
    "a": "公式サイトは建設業界経験者・不動産業界経験者向けの導線を掲げています(2026年8月22日確認)。未経験の場合は未経験可求人を扱うサービスとの併用が現実的です。"
  },
  {
    "q": "本当に年収は上がりますか？",
    "a": "収入UP率99.4%・1.2〜1.5倍という数値は公式サイト掲載の実績表記です(注記条件は公式参照)。個人の経験・資格・市場環境により結果は異なるため、面談で自身の想定レンジを確認してください。"
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
          { name: "RSGの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            RSGの評判は？建設・不動産専門の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">RSG(株式会社RSG)は、建設・不動産業界専門の人材紹介・転職支援会社です。「はたらくを輝きに。社会を豊かに。」を掲げ、収入UP率99.4%・月収/年収1.2倍〜1.5倍へという実績を公式サイトで表記しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>建設・不動産業界専門の転職エージェント</strong>。業界経験者(建設業界経験者・不動産業界経験者)を主対象としています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>収入UP率99.4%・月収/年収1.2倍〜1.5倍へ</strong>(いずれも公式サイト表記・2026年8月22日確認)。年収アップ軸の支援を強く打ち出しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>人材紹介に加えて採用広告コンサルティング等も展開</strong>する業界特化企業で、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>RSG(建設・不動産転職)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">RSG(建設・不動産専門の人材紹介・転職支援)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社RSG</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">建設業界経験者・不動産業界経験者</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">収入UP率99.4%/月収・年収1.2倍〜1.5倍へ(公式サイト表記・注記条件は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">事業内容</th><td className="px-3 py-2 border-b">人材紹介事業(建設・不動産)/採用広告コンサルティング事業/採用情報ツール制作事業</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">rsg-c.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：RSG公式サイト(rsg-c.jp)、2026年8月22日確認。収入UP率等は公式サイト掲載値(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>RSG(建設・不動産転職)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">建設・不動産の経験者特化</h3><p className="text-sm text-text-secondary leading-relaxed">施工管理・設計などの建設技術者や不動産実務経験者を対象に、業界内でのキャリアアップ転職を専門支援します。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">年収アップ軸の明確な訴求</h3><p className="text-sm text-text-secondary leading-relaxed">収入UP率99.4%・月収/年収1.2倍〜1.5倍へという実績値を公式に掲げ、待遇改善を主目的とした転職に焦点を当てています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">採用側との複層的な接点</h3><p className="text-sm text-text-secondary leading-relaxed">人材紹介に加えて採用広告コンサル・採用ツール制作も手がけており、建設・不動産企業の採用ニーズに複数チャネルで接しています。</p></div>
        </div>

        <h2>RSG(建設・不動産転職)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>施工管理・設計など建設技術職で年収を上げたい人</li>
              <li>不動産業界経験を活かして待遇改善したい人</li>
              <li>業界専門の担当者に市場価値を査定してほしい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>業界未経験の人 →未経験可の求人が多いサービスへ</li>
              <li>不動産の管理系専門職(PM/AM等) →<a href="/review/prime-career/" className="text-teal underline">プライムキャリア</a>も比較を</li>
            </ul>
          </div>
        </div>

        <h2>RSG(建設・不動産転職) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>RSGは、建設・不動産の業界経験者に特化し、年収アップ軸の転職支援を掲げるエージェントです。業界専門の市場価値査定が受けられ、利用は無料。管理系職種はプライムキャリア、総合型との併用で選択肢を広げるのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/prime-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              プライムキャリアの詳細
            </Link>
            <Link href="/company/ebisu-fudousan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              恵比寿不動産の採用解説
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
