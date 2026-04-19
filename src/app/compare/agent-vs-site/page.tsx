import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントと転職サイトの違い｜12項目で比較・向いている人を解説",
  description:
    "転職エージェントと転職サイトの違いを12項目で徹底比較。それぞれのメリット・デメリット、向いている人の特徴、併用のコツを解説します。",
  openGraph: {
    title: "転職エージェントと転職サイトの違い｜12項目で比較・向いている人を解説",
    description: "転職エージェントと転職サイトの違いを12項目で比較。",
  },
};

const faqData = [
  { q: "転職エージェントと転職サイトの最大の違いは？", a: "最大の違いは「担当者の有無」です。転職エージェントは専任のキャリアアドバイザーがつき、求人紹介から内定まで一貫サポートします。転職サイトは自分で求人を検索・応募する自己完結型のサービスです。" },
  { q: "転職エージェントと転職サイトは併用できますか？", a: "はい、併用可能です。むしろ両方を使うことで、エージェントの非公開求人と転職サイトの公開求人の両方にアクセスでき、選択肢が広がります。dodaはエージェントとサイトが一体型です。" },
  { q: "転職エージェントの利用は本当に無料ですか？", a: "はい、完全無料です。転職エージェントは採用企業から成功報酬を受け取るビジネスモデルのため、求職者に費用は一切発生しません。" },
  { q: "転職サイトだけで転職できますか？", a: "はい、転職サイトだけでも転職は可能です。ただし、書類添削や面接対策、年収交渉などのサポートは自分で行う必要があります。初めての転職ではエージェントの併用がおすすめです。" },
  { q: "どちらを先に利用すべきですか？", a: "まず転職エージェントに登録してキャリアの方向性を相談し、並行して転職サイトで市場の求人を確認する方法がおすすめです。エージェントの面談で自分の市場価値を把握してから、サイトで比較検討すると効率的です。" },
  { q: "転職エージェントに登録すると必ず転職しなければなりませんか？", a: "いいえ、登録しても転職する義務はありません。キャリア相談だけ、市場価値の確認だけでも利用可能です。良い求人がなければ現職にとどまる判断もできます。" },
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

const comparisonItems = [
  { item: "担当者", agent: "専任のキャリアアドバイザー", site: "なし（自分で対応）" },
  { item: "求人の探し方", agent: "アドバイザーが紹介", site: "自分で検索・応募" },
  { item: "非公開求人", agent: "あり（多数）", site: "なし" },
  { item: "書類添削", agent: "あり", site: "なし" },
  { item: "面接対策", agent: "あり", site: "なし" },
  { item: "年収交渉", agent: "代行してくれる", site: "自分で行う" },
  { item: "面接日程調整", agent: "代行してくれる", site: "自分で行う" },
  { item: "転職活動のペース", agent: "アドバイザーと相談", site: "自分のペースで自由" },
  { item: "求人数の幅", agent: "非公開求人含め幅広い", site: "公開求人のみだが一覧性が高い" },
  { item: "費用", agent: "無料", site: "無料" },
  { item: "向いている経験レベル", agent: "全レベル", site: "ある程度経験がある人" },
  { item: "転職活動の自由度", agent: "やや制約あり", site: "自由度が高い" },
];

export default function AgentVsSitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "比較", href: "/" },
          { name: "エージェント vs 転職サイト" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントと転職サイトの違い｜12項目で徹底比較
          </h1>
          <p className="text-text-secondary leading-relaxed">
            「転職エージェント」と「転職サイト」はどちらも転職活動に役立つサービスですが、仕組みや特徴が異なります。
            12項目で比較し、それぞれに向いている人を解説します。
          </p>
        </div>

        {/* 比較表 */}
        <h2>12項目比較表</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left font-medium rounded-tl-lg">比較項目</th>
                <th className="p-3 text-left font-medium">転職エージェント</th>
                <th className="p-3 text-left font-medium rounded-tr-lg">転職サイト</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray/50" : ""}>
                  <td className="p-3 font-medium text-navy border-b border-border">{row.item}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row.agent}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row.site}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 向いている人 */}
        <h2>向いている人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">転職エージェントが向いている人</h3>
            <ul className="space-y-2">
              {[
                "初めて転職活動をする方",
                "書類の書き方や面接に不安がある方",
                "非公開求人にアクセスしたい方",
                "年収交渉を代行してほしい方",
                "キャリアの方向性を相談したい方",
                "在職中で忙しく、効率的に進めたい方",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-600 mb-3">転職サイトが向いている人</h3>
            <ul className="space-y-2">
              {[
                "自分のペースで転職活動したい方",
                "どんな求人があるか市場を見てみたい方",
                "転職経験があり、自分で進められる方",
                "今すぐ転職するつもりはないが情報収集したい方",
                "多くの求人を自分の目で比較したい方",
                "担当者とのやり取りが煩わしい方",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2>おすすめの使い方：併用が最も効果的</h2>
        <p>
          転職エージェントと転職サイトはそれぞれ異なる強みを持っているため、
          併用することで最大限の効果を発揮します。エージェントでプロのサポートを受けながら、
          転職サイトで自分でも市場を確認するのが理想的な使い方です。
          dodaはエージェントとサイトの両機能を持っているため、1つのサービスで両方を体験できます。
        </p>

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            まずはエージェントに無料登録しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            キャリアのプロに相談して、最適な転職活動のスタイルを見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent px-8 py-3">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary px-8 py-3 bg-navy-light">
              dodaの詳細
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/compare/recruit-vs-doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェント vs doda
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
