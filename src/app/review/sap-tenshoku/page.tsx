import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SAPテンショクの評判は？SAP特化の転職エージェントを解説【2026年】",
  description: "SAPテンショク(スプラッシュエンジニアリング運営)は、SAPエンジニア・SAPコンサルタントに特化した転職エージェント。全員がSAP経験者のキャリアコンサルタントによる支援・完全無料を公式に掲げています。特徴を公式情報ベースで解説します。",
  alternates: { canonical: "/review/sap-tenshoku/" },
};

const faqData = [
  {
    "q": "SAPテンショクの利用に費用はかかりますか？",
    "a": "相談から内定、入社後のフォローまで、すべてのサービスを完全無料で提供と公式に明記されています(2026年8月22日確認)。"
  },
  {
    "q": "どんな人が担当してくれますか？",
    "a": "キャリアコンサルタント全員がSAP経験者と公式に明記されています。経験モジュール・工程を前提にした専門的な相談が可能な体制です。"
  },
  {
    "q": "SAP未経験でも利用できますか？",
    "a": "SAPエンジニア/コンサルタントに特化したサービスです。未経験からSAP領域を目指す場合の対応可否は、公式サイトからの相談時にご確認ください。"
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
          { name: "SAPテンショクの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            SAPテンショクの評判は？SAP特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">SAPテンショクは、株式会社スプラッシュエンジニアリングが運営するSAPエンジニア/SAPコンサルタント特化の転職エージェントです。「SAPで生きる、を支援する。」を掲げ、SAP業界とプロジェクトを熟知したコンサルタントによる支援を打ち出しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>SAPエンジニア・SAPコンサルタントに特化した転職エージェント</strong>。ERP人材のニッチ領域に絞った専門サービスです。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>キャリアコンサルタント全員がSAP経験者</strong>と公式に明記。スキルと経験を正確に評価できる体制を掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>相談から内定・入社後フォローまで完全無料</strong>と公式に明記されています。</span></li>
          </ul>
        </div>

        <h2>SAPテンショクの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">SAPテンショク(SAP業界特化の転職支援サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社スプラッシュエンジニアリング</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">SAPエンジニア・SAPコンサルタント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">体制</th><td className="px-3 py-2 border-b">全員がSAP経験者のキャリアコンサルタント(公式サイト明記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サポート範囲</th><td className="px-3 py-2 border-b">相談〜内定〜入社後フォローまで完全無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">姉妹サービス</th><td className="px-3 py-2 border-b">セキュリティプロ・フリーランス(同社運営)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">splash-eng.com/services/sap-career</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：SAPテンショク公式サイト(splash-eng.com/services/sap-career)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>SAPテンショクの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">SAP経験者だけのコンサルタント体制</h3><p className="text-sm text-text-secondary leading-relaxed">「エージェントに経験を正しく理解してもらえない」というSAP人材特有の悩みに対し、全員がSAP経験者のコンサルタント体制で正確な評価とキャリア提案を行うと明記しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">モジュール・工程を理解した専門マッチング</h3><p className="text-sm text-text-secondary leading-relaxed">SAP業界とプロジェクトを熟知した担当者が、経験モジュールや工程を踏まえた最適なキャリアプランを提案する設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">入社後フォローまでの一貫支援</h3><p className="text-sm text-text-secondary leading-relaxed">相談から内定、入社後フォローまで全て無料で提供と公式に明記されており、転職後の定着まで視野に入れた支援です。</p></div>
        </div>

        <h2>SAPテンショクが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>SAPコンサルタント・エンジニアとして年収/役割を上げたい人</li>
              <li>経験モジュールを正しく評価してくれる担当者を求める人</li>
              <li>SIerからコンサルファーム・事業会社SAP部門への転身を考える人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>SAP未経験のITエンジニア →IT全般特化のエージェントへ</li>
              <li>フリーランスSAP案件を探す人 →フリーランス系サービスと併用を</li>
            </ul>
          </div>
        </div>

        <h2>SAPテンショク よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>SAPテンショクは、SAP経験者だけのコンサルタント体制を掲げるニッチ特化型エージェントです。専門性の正確な評価と入社後フォローまでの一貫支援が特徴で、利用は無料。SAP人材は市場価値が高いため、総合型・IT特化型とも併用して条件を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/techclips/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              TechClipsエージェントの詳細
            </Link>
            <Link href="/industry/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              IT業界の転職ガイド
            </Link>
            <Link href="/review/security-pro/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              セキュリティプロ・フリーランスの詳細
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
