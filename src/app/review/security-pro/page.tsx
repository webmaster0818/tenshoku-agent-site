import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "セキュリティプロ・フリーランスの評判は？セキュリティ特化の案件紹介サービスを解説【2026年】",
  description: "セキュリティプロ・フリーランス(スプラッシュエンジニアリング運営)は、セキュリティエンジニア・コンサルタント向けのフリーランス案件紹介サービス。セキュリティ領域特化のエージェントがキャリアを支援。特徴を公式情報ベースで解説します。",
  alternates: { canonical: "/review/security-pro/" },
};

const faqData = [
  {
    "q": "セキュリティプロ・フリーランスの利用に費用はかかりますか？",
    "a": "利用は無料です。案件を発注する企業側が費用を負担するモデルです。"
  },
  {
    "q": "どんな案件がありますか？",
    "a": "セキュリティ領域(エンジニア・コンサルタント向け)のフリーランス案件を扱っています。単価・稼働条件などの詳細は公式サイトの案件検索・無料相談でご確認ください。"
  },
  {
    "q": "会社員からフリーランスへの転身相談もできますか？",
    "a": "無料相談の導線が公式サイトに用意されており、フリーランス転身を検討する段階からの相談に対応する設計です(2026年8月22日確認)。"
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
          { name: "セキュリティプロ・フリーランスの特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            セキュリティプロ・フリーランスの評判は？セキュリティ特化の案件紹介サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">セキュリティプロ・フリーランスは、株式会社スプラッシュエンジニアリングが運営するセキュリティ領域特化のフリーランス案件紹介サービスです。「高いスキルや経験が必ずしも正当な評価や報酬に結びついていない」というセキュリティ専門家の課題を掲げ、専門特化エージェントによるキャリア支援を打ち出しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>セキュリティエンジニア・セキュリティコンサルタント向けのフリーランス案件紹介</strong>に特化したサービスです。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>セキュリティ領域特化のエージェントがキャリアを支援</strong>。単なる案件紹介でなく専門家としてのキャリア最大化を掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>案件検索・無料相談の導線あり</strong>。同社はSAP特化の転職支援も展開しています。</span></li>
          </ul>
        </div>

        <h2>セキュリティプロ・フリーランスの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">セキュリティプロ・フリーランス(セキュリティ領域特化の案件紹介サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社スプラッシュエンジニアリング</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">セキュリティエンジニア・セキュリティコンサルタント(フリーランス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">機能</th><td className="px-3 py-2 border-b">案件検索/無料相談/ご利用の流れ・FAQ・ブログ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">姉妹サービス</th><td className="px-3 py-2 border-b">SAP業界の転職支援サービス(同社運営)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">利用は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">security.splash-eng.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：セキュリティプロ・フリーランス公式サイト(security.splash-eng.com)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>セキュリティプロ・フリーランスの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">セキュリティ領域だけの専門特化</h3><p className="text-sm text-text-secondary leading-relaxed">SOC・脆弱性診断・CSIRT・コンサルティングなどセキュリティ人材の市場価値を理解した専門エージェントによる支援を掲げています。汎用IT案件サイトでは埋もれがちな専門性を評価される場です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">正当な報酬評価へのこだわり</h3><p className="text-sm text-text-secondary leading-relaxed">「高いスキルが正当な評価・報酬に結びついていない現実」を課題として明示し、単価・キャリアの最大化を支援の軸に据えています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">フリーランス転身の相談窓口</h3><p className="text-sm text-text-secondary leading-relaxed">会社員セキュリティエンジニアがフリーランス転身を検討する段階の無料相談から対応する設計です。</p></div>
        </div>

        <h2>セキュリティプロ・フリーランスが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>セキュリティエンジニアとしてフリーランス独立を考えている人</li>
              <li>現在フリーランスで、専門性を評価してくれる案件を探している人</li>
              <li>セキュリティコンサルタントとして単価を上げたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>正社員転職を希望するセキュリティ人材 →IT特化転職エージェントへ</li>
              <li>セキュリティ未経験の人 →まず実務経験を積める正社員求人へ</li>
            </ul>
          </div>
        </div>

        <h2>セキュリティプロ・フリーランス よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>セキュリティプロ・フリーランスは、セキュリティ専門人材の案件紹介に特化した希少なサービスです。専門性の正当な評価を軸にした支援が特徴で、利用は無料。正社員転職も視野に入れる場合はIT特化の転職エージェントと併用して選択肢を比較しましょう。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/techclips/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              TechClipsエージェントの詳細
            </Link>
            <Link href="/review/eba-freelance/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              EBAフリーランスの詳細
            </Link>
            <Link href="/type/freelance/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              フリーランス向けサービスまとめ
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
