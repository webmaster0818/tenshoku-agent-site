import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "EBAフリーランスの評判は？高単価特化のITフリーランス案件サービスを解説【2026年】",
  description: "EBAフリーランス(EBAテック運営)は年収1000万円超を目指す高単価案件特化のITフリーランス案件提案サービス。最高単価180万円・エンド直案件90%・リモート50%以上(いずれも公式表記)。特徴を公式情報ベースで解説します。",
  alternates: { canonical: "/review/eba-freelance/" },
};

const faqData = [
  {
    "q": "EBAフリーランスの利用に費用はかかりますか？",
    "a": "利用は無料です。案件を発注する企業側が費用を負担するモデルです。"
  },
  {
    "q": "どのくらいの単価の案件がありますか？",
    "a": "公式サイトには最高単価180万円、月収65万円→162万円へアップした事例などが掲載されています(2026年8月22日確認・2026年2月末時点の表記)。個人のスキル・経験により提案内容は異なります。"
  },
  {
    "q": "リモート案件はありますか？",
    "a": "リモートワーク50%以上と公式に表記されています。案件ごとの稼働条件は提案時にご確認ください。"
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
          { name: "EBAフリーランスの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            EBAフリーランスの評判は？高単価特化のITフリーランス案件サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">EBAフリーランスは、EBAテック株式会社が運営するITフリーランス向けの案件提案サービスです。「年収1000万超えを実現できる高単価案件に特化したプレミアムな案件提案サービス」を掲げ、最高単価180万円・エンド直案件90%・リモートワーク50%以上(2026年2月末時点)と公式に表記しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>高単価案件に特化したITフリーランス向けサービス</strong>。年収1000万円以上を目指す層が対象です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>エンド直案件90%・最高単価180万円・リモート50%以上</strong>(いずれも公式表記・2026年2月末時点)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>福利厚生の提供にも言及</strong>があり、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>EBAフリーランスの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">EBAフリーランス(高単価特化のITフリーランス案件提案サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">EBAテック株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">ITエンジニア(テックリード・フルスタック等の経験者フリーランス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">最高単価180万円/エンド直案件90%/リモートワーク50%以上(2026年2月末時点・公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">成功事例</th><td className="px-3 py-2 border-b">月収65万→162万円(テックリード)/月収40万→115万円等(公式掲載事例)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">利用は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">eba-freelance.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：EBAフリーランス公式サイト(eba-freelance.com)、2026年8月22日確認。単価・比率は公式サイト掲載値(2026年2月末時点表記)。掲載事例は公式サイトの成功実績より。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>EBAフリーランスの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">エンド直・高単価へのこだわり</h3><p className="text-sm text-text-secondary leading-relaxed">エンド直案件90%と公式表記。多重下請け構造を避けることで、月額100万円超の高単価を実現する構造を打ち出しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ハイスキル人材向けの厳選提案</h3><p className="text-sm text-text-secondary leading-relaxed">テックリード・DXプロジェクト・マイクロサービス化など、上流・リード級の案件事例が公式に紹介されており、経験者の単価アップに焦点を当てています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">リモート比率の開示</h3><p className="text-sm text-text-secondary leading-relaxed">リモートワーク50%以上と働き方の比率も公式開示しており、単価と働き方のバランスを検討できます。</p></div>
        </div>

        <h2>EBAフリーランスが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>月額単価を大きく上げたい経験豊富なITフリーランス</li>
              <li>テックリード・上流工程の案件を探している人</li>
              <li>エンド直案件で商流を浅くしたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>フリーランス経験の浅い人 →案件数の多い大手サービスと併用を</li>
              <li>正社員での転職を考えている人 →<a href="/review/techclips/" className="text-teal underline">TechClipsエージェント</a>等へ</li>
            </ul>
          </div>
        </div>

        <h2>EBAフリーランス よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>EBAフリーランスは、エンド直×高単価に特化したITフリーランス案件サービスです。リード級人材の単価最大化に焦点を当てた設計で、利用は無料。フリーランスの案件探しは2〜3サービス併用が基本なので、専門特化型と大手を組み合わせるのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/security-pro/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              セキュリティプロ・フリーランスの詳細
            </Link>
            <Link href="/type/freelance/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              フリーランス向けサービスまとめ
            </Link>
            <Link href="/review/techclips/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              TechClipsエージェントの詳細
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
