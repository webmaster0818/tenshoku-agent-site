import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リクルートエージェント vs doda 徹底比較｜10項目で違いを解説",
  description:
    "リクルートエージェントとdodaを10項目で徹底比較。求人数、サポート体制、得意分野の違いを解説し、あなたに合ったエージェントの選び方を紹介します。",
  openGraph: {
    title: "リクルートエージェント vs doda 徹底比較｜10項目で違いを解説",
    description: "リクルートエージェントとdodaの違いを10項目で比較。",
  },
};

const faqData = [
  { q: "リクルートエージェントとdodaはどちらが求人数が多いですか？", a: "リクルートエージェントの方が求人数は多い傾向にあります。公開求人約60万件、非公開求人約30万件を保有しています。dodaも公開求人数は20万件以上を保有しており、十分な求人数があります。" },
  { q: "両方に登録しても問題ありませんか？", a: "問題ありません。むしろ、両方に登録することで、より多くの求人にアクセスでき、異なるアドバイザーの視点からアドバイスを受けられるため、おすすめです。" },
  { q: "初めての転職ならどちらがおすすめですか？", a: "初めての転職なら、求人数が最も多いリクルートエージェントを軸にしつつ、dodaも併用するのがおすすめです。dodaは転職サイトとしても使えるため、自分でも求人を探せる利便性があります。" },
  { q: "IT業界への転職ならどちらがよいですか？", a: "どちらもIT業界の求人は豊富ですが、dodaはIT・Web業界の求人特集やイベントが充実しています。リクルートエージェントは総合的な求人数の多さで、選択肢を広げたい場合に有利です。" },
  { q: "サポートの質に違いはありますか？", a: "どちらも書類添削や面接対策などの基本的なサポートは充実しています。リクルートエージェントは業界別の専門アドバイザーが在籍しており、dodaはキャリアアドバイザーと採用プロジェクト担当の分業制をとっています。" },
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
  { item: "運営会社", recruit: "株式会社リクルート", doda: "パーソルキャリア株式会社" },
  { item: "公開求人数", recruit: "約60万件", doda: "約20万件以上" },
  { item: "非公開求人数", recruit: "約30万件", doda: "非公開" },
  { item: "対応エリア", recruit: "全国＋海外", doda: "全国＋海外" },
  { item: "対応年代", recruit: "全年代", doda: "全年代" },
  { item: "サービス形態", recruit: "エージェント特化", doda: "エージェント＋転職サイト一体型" },
  { item: "面談方法", recruit: "対面・オンライン・電話", doda: "対面・オンライン・電話" },
  { item: "書類添削", recruit: "あり", doda: "あり" },
  { item: "面接対策", recruit: "あり", doda: "あり" },
  { item: "スカウト機能", recruit: "なし（リクナビNEXTと連携）", doda: "あり（サイト機能として内蔵）" },
];

export default function RecruitVsDodaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "比較", href: "/" },
          { name: "リクルートエージェント vs doda" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            リクルートエージェント vs doda 徹底比較
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントの2大サービスであるリクルートエージェントとdodaを10項目で比較。
            それぞれの強みと特徴を整理し、あなたに合ったエージェントの選び方を解説します。
          </p>
        </div>

        {/* 比較表 */}
        <h2>10項目比較表</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left font-medium rounded-tl-lg">比較項目</th>
                <th className="p-3 text-left font-medium">リクルートエージェント</th>
                <th className="p-3 text-left font-medium rounded-tr-lg">doda</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray/50" : ""}>
                  <td className="p-3 font-medium text-navy border-b border-border">{row.item}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row.recruit}</td>
                  <td className="p-3 text-text-secondary border-b border-border">{row.doda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 使い分けガイド */}
        <h2>使い分けガイド</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">リクルートエージェントが向いている人</h3>
            <ul className="space-y-2">
              {[
                "とにかく多くの求人から選びたい",
                "非公開求人にアクセスしたい",
                "業界特化のアドバイザーに相談したい",
                "地方の求人を探している",
                "転職支援実績を重視する",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-600 mb-3">dodaが向いている人</h3>
            <ul className="space-y-2">
              {[
                "エージェントと転職サイトを両方使いたい",
                "自分でも求人を検索して比較したい",
                "スカウト機能で企業からのオファーを待ちたい",
                "転職フェアやイベントに参加したい",
                "マイペースに転職活動を進めたい",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2>結論：迷ったら両方に登録がおすすめ</h2>
        <p>
          リクルートエージェントとdodaは、どちらも業界トップクラスの転職エージェントです。
          それぞれ異なる強みを持っているため、両方に登録して使い比べることで、
          より多くの求人と異なる視点のアドバイスを得られます。転職活動を進める中で、
          自分に合った方をメインに活用していくのが効果的です。
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
            まずは無料で登録して比較しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            両方のエージェントに登録して、自分に合ったサービスを見つけましょう。
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
            <Link href="/compare/agent-vs-site/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェント vs 転職サイトの違い
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              複数エージェントの活用法
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
