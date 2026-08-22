import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "HIGH-FIVE(ハイファイブ)の評判は？クリエイター専門転職エージェントを解説【2026年】",
  description: "HIGH-FIVE(ハイファイブ)はクリーク・アンド・リバー社が運営するデザイナー・クリエイター専門の転職エージェント。「量より質」を掲げ、UI/UXデザイナーやWebディレクター等の求人を扱います。特徴を公式情報ベースで解説。利用は無料。",
  alternates: { canonical: "/review/highfive/" },
};

const faqData = [
  {
    "q": "HIGH-FIVEの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "未経験からデザイナーになりたい場合も使えますか？",
    "a": "公式サイトには「未経験からデザイナーへ」向けのコンテンツも用意されています(2026年8月22日確認)。紹介可能な求人は経歴・ポートフォリオによるため、詳細は申し込み時にご確認ください。"
  },
  {
    "q": "どんな職種の求人がありますか？",
    "a": "UIデザイナー・UXデザイナー・Webディレクター・Webデザイナー・アートディレクター・グラフィックデザイナー・コンテンツディレクター・フロントエンドエンジニア・プロダクトマネージャー・マーケターなどの職種別求人検索が公式サイトに用意されています。"
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
          { name: "HIGH-FIVEの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            HIGH-FIVE(ハイファイブ)の評判は？クリエイター専門転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">HIGH-FIVE(ハイファイブ)は、株式会社クリーク・アンド・リバー社が運営するデザイナー・クリエイター専門の転職エージェントです。「量より質。」をコンセプトに、価値観に合う求人・企業だけを紹介するスタイルを掲げています。公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>デザイナー・クリエイター専門の転職エージェント</strong>。UI/UXデザイナー・Webディレクター・アートディレクター・フロントエンドエンジニア等が対象です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>「量より質」を掲げ、価値観に合う求人だけを紹介</strong>する方針を公式に打ち出しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>運営はクリエイター人材大手のクリーク・アンド・リバー社</strong>(東証プライム上場)。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>HIGH-FIVE(ハイファイブ)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">HIGH-FIVE(ハイファイブ・デザイナー/クリエイター専門転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社クリーク・アンド・リバー社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">UIデザイナー/UXデザイナー/Webディレクター/Webデザイナー/アートディレクター/グラフィックデザイナー/フロントエンドエンジニア/プロダクトマネージャー/マーケター等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">非公開求人あり・会社説明会/イベント・キャリアマガジン等のコンテンツも展開</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">high-five.careers</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：HIGH-FIVE公式サイト(high-five.careers)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>HIGH-FIVE(ハイファイブ)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">「量より質」の求人紹介方針</h3><p className="text-sm text-text-secondary leading-relaxed">量より質を重視した求人が多数、価値観に合う求人・企業だけを紹介と公式トップで明言しています。大量応募型が合わない人向けの設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">クリエイティブ職種の網羅性</h3><p className="text-sm text-text-secondary leading-relaxed">UI/UXからグラフィック、フロントエンド、プロダクトマネージャーまで、クリエイティブ関連職種を幅広くカバーしています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">クリエイター人材大手の運営基盤</h3><p className="text-sm text-text-secondary leading-relaxed">運営のクリーク・アンド・リバー社はクリエイター領域の人材サービスを長年展開しており、ゲーム特化の「ファミキャリ!」など兄弟サービスも持ちます。</p></div>
        </div>

        <h2>HIGH-FIVE(ハイファイブ)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>デザイナー・クリエイターとしてキャリアアップ転職したい人</li>
              <li>大量の求人より、価値観に合う厳選求人を提案してほしい人</li>
              <li>ポートフォリオの見せ方から相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>クリエイティブ職以外への転職 →総合型エージェントへ</li>
              <li>ゲーム業界に絞りたい人 →<a href="/review/famicari/" className="text-teal underline">ファミキャリ!</a>も比較を</li>
            </ul>
          </div>
        </div>

        <h2>HIGH-FIVE(ハイファイブ) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>HIGH-FIVEは、「量より質」を掲げるクリエイター専門転職エージェントです。クリエイティブ職種の網羅性と大手運営の基盤が特徴で、利用は無料。クリエイターの転職では、同系のマイナビクリエイター等と2社併用して提案の質を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/mynavi-creator/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビクリエイターの詳細
            </Link>
            <Link href="/review/famicari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ファミキャリ!の詳細
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
