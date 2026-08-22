import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ほいくのむすびの評判は？保育士専門の転職支援サービスを解説【2026年】",
  description: "ほいくのむすびは株式会社Nプランニングが運営する保育士専門の転職支援サービス。非公開求人・採用情報が多数で、宿舎借り上げ制度対応求人や残業少なめ求人を掲載。有料職業紹介事業許可番号13-ユ-316438。公式情報ベースで解説します。",
  alternates: { canonical: "/review/hoiku-musubi/" },
};

const faqData = [
  {
    "q": "ほいくのむすびの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "どんな求人がありますか？",
    "a": "小規模保育園・企業内保育所・園長候補など、東京都・千葉県等の求人が公式サイトに掲載されています(2026年8月22日確認時点)。非公開求人も多数と記載されており、詳細は登録後にご確認ください。"
  },
  {
    "q": "ピアノが苦手でも転職できますか？",
    "a": "公式サイトには「ピアノスキル不要」を明記した求人の掲載例があります(2026年8月22日確認)。条件に合う求人の有無は相談時にご確認ください。"
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
          { name: "ほいくのむすびの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ほいくのむすびの評判は？保育士専門の転職支援サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">ほいくのむすびは、株式会社Nプランニングが運営する保育士専門の転職支援サービスです。非公開求人・採用情報が多数と掲げ、「職場の人間関係に疲れた」「行事の準備が大変」「ピアノが苦手」といった保育士特有の悩みを起点にした職場探しを支援します。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>保育士専門の転職支援サービス</strong>。非公開求人・採用情報が多数と公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>保育士特有の悩み(人間関係・行事準備・ピアノ等)を起点にした職場選び</strong>を打ち出しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>有料職業紹介事業許可番号(13-ユ-316438)を公式サイトで確認</strong>。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>ほいくのむすびの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ほいくのむすび(保育士専門の転職支援サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社Nプランニング</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">保育士の転職(小規模保育園・企業内保育所・園長職まで)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-316438</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">掲載求人の例</th><td className="px-3 py-2 border-b">定員19〜70名規模の保育園/宿舎借り上げ制度対応/賞与4ヶ月以上/残業ほぼなし/園長候補(年収520万以上)等(2026年8月22日確認時点の掲載例)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">n-planning.jp/hoikunomusubi</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ほいくのむすび公式サイト(n-planning.jp/hoikunomusubi)、2026年8月22日確認。掲載求人例は確認時点のもので、充足により募集停止の場合があります。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>ほいくのむすびの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">保育士の「辞めたい理由」起点の設計</h3><p className="text-sm text-text-secondary leading-relaxed">人間関係・業務量・行事準備・ピアノスキル・通勤距離・園の方針など、保育士が抱えやすい悩みを明示し、それを解消できる職場への転職を支援する構成です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">条件の良い求人の具体的掲載</h3><p className="text-sm text-text-secondary leading-relaxed">宿舎借り上げ制度・賞与4ヶ月以上・残業ほぼなし・年間休日125日以上など、条件面が明記された求人が公式サイトに掲載されています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">園長職までのキャリアカバー</h3><p className="text-sm text-text-secondary leading-relaxed">一般保育士だけでなく園長候補求人(掲載例: 年収520万円以上)まで扱っており、キャリアアップ転職にも対応します。</p></div>
        </div>

        <h2>ほいくのむすびが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>今の園の人間関係・業務量に悩んでいる保育士</li>
              <li>宿舎借り上げ・賞与などの条件を改善したい保育士</li>
              <li>園長候補などキャリアアップを目指す保育士</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>保育士以外の職種への転身 →<a href="/type/inexperienced/" className="text-teal underline">未経験向けエージェント</a>へ</li>
              <li>全国大手の求人網羅性を求める人 →大手保育士特化サービスとの併用を</li>
            </ul>
          </div>
        </div>

        <h2>ほいくのむすび よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>ほいくのむすびは、保育士特有の悩みを起点に職場探しを支援する保育士専門サービスです。条件が明記された求人の掲載と許可番号の公開が確認でき、利用は無料。保育士の転職では複数の特化型サービスを併用し、非公開求人を含めた選択肢を広げるのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/type/women/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              女性向けエージェントまとめ
            </Link>
            <Link href="/review/realme-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リアルミーキャリア(時短特化)の詳細
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
