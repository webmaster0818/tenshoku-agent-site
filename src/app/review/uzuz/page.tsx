import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UZUZ(ウズウズ)の評判は？第二新卒・既卒・フリーター特化の就職エージェントを解説【2026年】",
  description: "UZUZ(ウズウズ)の「第二の就活」は、20代の第二新卒・既卒・フリーター向け就職/転職エージェント。完全無料・あなた専用の就活サポートを掲げ、IT就職支援のウズウズカレッジも展開。特徴・向いている人を公式情報ベースで解説します。",
  alternates: { canonical: "/review/uzuz/" },
};

const faqData = [
  {
    "q": "UZUZの利用に費用はかかりますか？",
    "a": "求職者の利用は完全無料と公式に明記されています。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "就業経験がまったくなくても使えますか？",
    "a": "対象に既卒・フリーター・無職の人を明確に含めており、就業経験なしの登録導線も用意されています(2026年8月22日確認)。"
  },
  {
    "q": "IT未経験からエンジニアを目指せますか？",
    "a": "UZUZは学習サービス「ウズウズカレッジ」を展開しており、学習と就職支援を組み合わせて未経験からIT職種を目指すルートがあります。詳細は公式サイトでご確認ください。"
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
          { name: "UZUZの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            UZUZ(ウズウズ)の評判は？第二新卒・既卒・フリーター特化の就職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">UZUZ(ウズウズ)は、20代の第二新卒・既卒・フリーター向けの就職・転職エージェントです。サービスサイト「第二の就活」を通じて、完全無料の「あなた専用の就活サポート」を掲げています。学習サービス「ウズウズカレッジ」も展開しており、IT系への就職支援に強みがあります。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>20代の第二新卒・既卒・フリーター専門</strong>の就職・転職エージェント。正社員求人多数・完全無料と公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>「あなた専用の就活サポート」のオーダーメイド型</strong>。面接・自己分析・書類などの対策コンテンツも公式サイトに豊富です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>ウズウズカレッジ(学習サービス)も展開</strong>し、学びながらIT系就職を目指すルートも用意されています。</span></li>
          </ul>
        </div>

        <h2>UZUZ(第二の就活)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">第二の就活(UZUZ・20代の第二新卒/既卒/フリーター向け就職・転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社UZUZ(UZUZホールディングスグループ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">20代(第二新卒・既卒・フリーター・無職の人を含む)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">完全無料・オーダーメイド型サポート・定着率を公式公開(注記条件は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">関連サービス</th><td className="px-3 py-2 border-b">ウズウズカレッジ(IT系学習サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">daini2.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：第二の就活(UZUZ)公式サイト(daini2.co.jp)・株式会社UZUZホールディングス(uzuz-holdings.jp)、2026年8月22日確認。定着率等の数値は公式サイト掲載値(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>UZUZ(第二の就活)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">経歴に不安がある20代への専門サポート</h3><p className="text-sm text-text-secondary leading-relaxed">第二新卒・既卒・フリーター・無職と、経歴に自信のない20代を明確な対象として掲げ、状況別(現職中/離職中/就業経験なし)の登録導線を用意しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">オーダーメイド型の就活サポート</h3><p className="text-sm text-text-secondary leading-relaxed">「あなた専用の就活サポートを。」を掲げ、画一的でない個別サポートを特徴としています。面接・自己分析・履歴書・職務経歴書などのノウハウコンテンツも豊富です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">学習との組み合わせ(ウズウズカレッジ)</h3><p className="text-sm text-text-secondary leading-relaxed">ITスキルを学んでから就職を目指すウズウズカレッジを展開しており、未経験からIT職種を目指すルートを学習込みで設計できます。</p></div>
        </div>

        <h2>UZUZ(第二の就活)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>第二新卒・既卒・フリーターから正社員を目指す20代</li>
              <li>画一的でない、自分に合わせたサポートを求める人</li>
              <li>学習(IT研修)と就職支援をセットで考えたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>30代以上の人 →総合型エージェントへ</li>
              <li>大手グループの安心感を最優先する人 →<a href="/review/mynavi-job20s/" className="text-teal underline">マイナビジョブ20's</a>と併用を</li>
            </ul>
          </div>
        </div>

        <h2>UZUZ(第二の就活) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>UZUZは、経歴に不安のある20代に特化したオーダーメイド型の就職・転職エージェントです。学習サービスとの組み合わせでIT系への未経験就職ルートも用意されており、利用は無料。同じ20代特化のマイナビジョブ20's・第二新卒エージェントneoと併用し、サポートの相性で選ぶのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/mynavi-job20s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビジョブ20'sの詳細
            </Link>
            <Link href="/review/daini-agent-neo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒エージェントneoの詳細
            </Link>
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向けエージェントまとめ
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
