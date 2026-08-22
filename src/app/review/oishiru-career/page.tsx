import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "オイシルキャリアの評判は？スーパー・生鮮業界特化の転職サービスを解説【2026年】",
  description: "オイシルキャリア(株式会社オイシル運営)はスーパー・生鮮業界特化の求人サイト・転職支援サービス。全国の求人を扱い、LINEでの無料転職相談に対応。有料職業紹介事業許可番号13-ユ-314489。特徴を公式情報ベースで解説します。",
  alternates: { canonical: "/review/oishiru-career/" },
};

const faqData = [
  {
    "q": "オイシルキャリアの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が費用を負担するモデルです。"
  },
  {
    "q": "どんな求人がありますか？",
    "a": "スーパーマーケット・生鮮業界(精肉・鮮魚・青果・惣菜など)の求人を全国で扱っています。エリア・職種ごとの求人量は公式サイトの検索でご確認ください(2026年8月22日確認)。"
  },
  {
    "q": "生鮮部門の経験がなくても使えますか？",
    "a": "スーパー・生鮮業界特化のサービスのため、業界経験者が主対象です。未経験の場合の紹介可否はLINE相談でご確認ください。"
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
          { name: "オイシルキャリアの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            オイシルキャリアの評判は？スーパー・生鮮業界特化の転職サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">オイシルキャリアは、株式会社オイシルが運営するスーパー・生鮮業界特化の求人サイト・転職支援サービスです。スーパーマーケット・生鮮部門(精肉・鮮魚・青果等)の経験者を主対象に、全国の求人を扱いLINEでの無料転職相談にも対応しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>スーパー・生鮮業界に特化した求人・転職支援サービス</strong>。業界経験を正しく評価するニッチ特化型です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>全国の求人に対応</strong>し、都道府県・市区単位で検索できます。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>LINEでの無料転職相談</strong>に対応。有料職業紹介事業許可番号(13-ユ-314489)も公式サイトで確認できます。</span></li>
          </ul>
        </div>

        <h2>オイシルキャリアの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">オイシルキャリア(スーパー・生鮮業界特化の求人サイト)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社オイシル</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">スーパーマーケット・生鮮業界(精肉/鮮魚/青果/惣菜等)の転職</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-314489</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対応エリア</th><td className="px-3 py-2 border-b">全国(都道府県・市区単位の求人検索)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">相談窓口</th><td className="px-3 py-2 border-b">LINEで無料転職相談</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">oishiru-career.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：オイシルキャリア公式サイト(oishiru-career.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>オイシルキャリアの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">生鮮業界の経験が武器になる特化設計</h3><p className="text-sm text-text-secondary leading-relaxed">スーパー・生鮮業界の経験者を明確な対象とし、残業時間・年間休日・年収などの労働条件改善を軸にした転職を支援する構成です(広告紹介文では残業15時間程度・年間休日115日・年収450万といった求人例が示されています)。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">全国対応の求人検索</h3><p className="text-sm text-text-secondary leading-relaxed">北海道から沖縄まで全国の求人を市区単位で検索でき、地方のスーパー・食品小売の求人も探せます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">LINE完結の気軽な相談</h3><p className="text-sm text-text-secondary leading-relaxed">LINEでの無料転職相談に対応しており、店舗勤務で電話がしづらい人でもすき間時間に相談を進められます。</p></div>
        </div>

        <h2>オイシルキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>スーパー・生鮮部門の経験を活かして労働条件を改善したい人</li>
              <li>精肉・鮮魚・青果・惣菜のスキルを評価してほしい人</li>
              <li>LINEで気軽に転職相談を始めたい店舗勤務の人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>小売以外への異業種転職 →総合型エージェントへ</li>
              <li>飲食業界への転身 →<a href="/review/inshoku-agent/" className="text-teal underline">飲食店ドットコムエージェント</a>も比較を</li>
            </ul>
          </div>
        </div>

        <h2>オイシルキャリア よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>オイシルキャリアは、スーパー・生鮮業界という明確なニッチに特化した転職サービスです。業界経験の正当な評価と労働条件改善が軸で、利用は無料。小売業界の転職では総合型と併用しつつ、専門特化の求人を確認するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/inshoku-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              飲食店ドットコムエージェントの詳細
            </Link>
            <Link href="/review/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職サービス解説一覧
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
