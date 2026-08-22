import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファミキャリ!の評判は？ゲーム業界専門の転職エージェントを解説【2026年】",
  description: "ファミキャリ!はクリーク・アンド・リバー社がファミ通と連携して運営するゲーム業界専門の転職サービス。ゲーム業界の求人6,000件以上・利用者2万人以上(公式表記)。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/famicari/" },
};

const faqData = [
  {
    "q": "ファミキャリ!の利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "ゲーム業界未経験でも利用できますか？",
    "a": "求人はゲーム業界の中途採用が中心です。未経験可の求人有無や応募可能性は、キャリア相談・求人検索でご確認ください。"
  },
  {
    "q": "地方在住でも使えますか？",
    "a": "公式サイトには大阪・京都・北海道(札幌)などエリア別求人特集があります(2026年8月22日確認)。希望勤務地の求人量は検索画面でご確認ください。"
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
          { name: "ファミキャリ!の評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ファミキャリ!の評判は？ゲーム業界専門の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">ファミキャリ!は、株式会社クリーク・アンド・リバー社が運営するゲーム業界専門の転職サービスです(サイトはファミ通ブランドのcareer.famitsu.com)。ゲーム業界の求人6,000件以上(非公開求人含む)・利用者2万人以上と公式に掲げています。公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>ゲーム業界専門の転職サービス</strong>。求人6,000件以上(非公開含む)・利用者2万人以上と公式に表記されています(2026年8月22日確認)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>ファミ通ブランドとクリーク・アンド・リバー社の運営</strong>で、ゲーム会社との接点が豊富な体制です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>利用は無料</strong>。求人検索・キャリア相談・イベント情報が公式サイトに揃っています。</span></li>
          </ul>
        </div>

        <h2>ファミキャリ!の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ファミキャリ!(ゲーム業界専門の求人・転職サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社クリーク・アンド・リバー社(ファミ通ブランドと連携)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">求人数</th><td className="px-3 py-2 border-b">ゲーム業界の求人6,000件以上(非公開求人含む・公式表記・2026年8月22日確認)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">利用者数</th><td className="px-3 py-2 border-b">2万人以上(公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対応エリア</th><td className="px-3 py-2 border-b">全国(大阪・京都・北海道-札幌-などエリア別求人特集あり)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">career.famitsu.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ファミキャリ!公式サイト(career.famitsu.com)、2026年8月22日確認。求人数・利用者数は公式サイト掲載値。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>ファミキャリ!の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ゲーム業界特化の求人ボリューム</h3><p className="text-sm text-text-secondary leading-relaxed">プランナー・ディレクター・エンジニア・デザイナーなどゲーム開発職種の求人を6,000件以上(非公開含む)掲載と公式表記。職種別・エリア別の特集も組まれています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ファミ通ブランドの業界接点</h3><p className="text-sm text-text-secondary leading-relaxed">ゲームメディアの老舗ブランドと、クリエイター人材大手クリーク・アンド・リバー社の組み合わせで、紹介可能企業の一覧も公式に公開されています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">求人検索とエージェント相談の併用</h3><p className="text-sm text-text-secondary leading-relaxed">自分で求人を探すことも、キャリア相談からエージェントに提案してもらうこともできる構成です。</p></div>
        </div>

        <h2>ファミキャリ!が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ゲーム業界内でのステップアップ転職を考えている人</li>
              <li>プランナー・ディレクター・ゲームエンジニア・デザイナー職の人</li>
              <li>自分で求人を探しつつ、非公開求人の紹介も受けたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ゲーム以外のクリエイティブ職も見たい人 →<a href="/review/highfive/" className="text-teal underline">HIGH-FIVE</a>や<a href="/review/mynavi-creator/" className="text-teal underline">マイナビクリエイター</a>を併用</li>
              <li>ゲーム業界経験者向けの高密度サポートを求める人 →<a href="/review/hiraku-agent/" className="text-teal underline">Hiraku agent</a>も比較を</li>
            </ul>
          </div>
        </div>

        <h2>ファミキャリ! よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>ファミキャリ!は、ファミ通ブランド×クリーク・アンド・リバー社によるゲーム業界専門の転職サービスです。業界特化の求人ボリュームと紹介可能企業の公開が特徴で、利用は無料。ゲーム業界の転職では、Hiraku agent等の専門エージェントとの併用で選択肢を広げるのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/hiraku-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Hiraku agentの詳細
            </Link>
            <Link href="/review/highfive/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              HIGH-FIVEの詳細
            </Link>
            <Link href="/review/mynavi-creator/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビクリエイターの詳細
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
