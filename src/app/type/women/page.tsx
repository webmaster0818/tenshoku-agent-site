import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性におすすめの転職エージェント5選｜キャリアとライフバランスを両立",
  description:
    "女性の転職に強い転職エージェントを厳選紹介。ワークライフバランス重視の求人や女性管理職ポジションなど、女性のキャリア形成をサポートするエージェントの特徴と活用法を解説します。",
  openGraph: {
    title: "女性におすすめの転職エージェント5選｜キャリアとライフバランスを両立",
    description: "女性の転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "女性が転職エージェントを選ぶポイントは？", a: "女性のキャリア相談に慣れたアドバイザーがいるか、時短勤務やフレックスなど柔軟な働き方の求人を扱っているか、産休・育休制度が充実した企業の求人があるかなどを確認しましょう。" },
  { q: "育児中でも転職エージェントを利用できますか？", a: "はい、利用可能です。多くのエージェントがオンライン面談に対応しており、お子さんの都合に合わせて面談時間を調整できます。時短勤務やリモートワーク可能な求人も紹介してもらえます。" },
  { q: "女性の転職に有利な時期はありますか？", a: "一般的に求人数が増えるのは1〜3月と9〜11月です。ただし、女性の場合はライフイベントとの兼ね合いも重要なので、自分のタイミングで準備を始めることが大切です。" },
  { q: "ブランクがあっても転職できますか？", a: "はい、可能です。育児や介護でのブランクがある方向けの支援を行うエージェントもあります。ブランク中に身につけたスキルや経験も立派なアピールポイントになります。" },
  { q: "女性管理職の求人は増えていますか？", a: "はい、増加傾向にあります。政府の女性活躍推進法や企業のダイバーシティ推進により、女性管理職の登用に積極的な企業が増えています。" },
  { q: "転職エージェントの利用に費用はかかりますか？", a: "いいえ、転職エージェントは求職者側の費用は一切かかりません。企業からの成功報酬で運営されているため、安心して利用できます。" },
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

export default function WomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "女性向け" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            女性におすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            女性の転職では、キャリアアップとワークライフバランスの両立が重要なテーマです。
            ここでは、女性のキャリア形成を支援する転職エージェントを厳選して紹介します。
          </p>
        </div>

        {/* ランキング */}
        <h2>女性の転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "マイナビエージェント", href: "/review/mynavi/", desc: "女性の転職支援に力を入れており、女性向けの求人特集ページも用意されています。アドバイザーが丁寧にヒアリングし、ライフステージに合わせた求人を提案してくれます。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "女性の転職に関するコンテンツが充実しています。ワークライフバランスを重視した求人や、女性活躍推進企業の求人を多数保有しています。" },
            { rank: 3, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数が業界最大級のため、時短勤務やフレックス制度のある企業、女性管理職ポジションなど、条件に合った求人を見つけやすいです。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス求人が中心で、管理職やスペシャリストとしてキャリアアップしたい女性におすすめです。企業から直接スカウトが届くため、市場価値の把握にも役立ちます。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "外資系企業や日系グローバル企業の求人に強く、ダイバーシティに積極的な企業の求人が多い傾向があります。年収アップを目指す女性にも向いています。" },
          ].map((agent) => (
            <div key={agent.rank} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className={`rank-badge rank-badge--${agent.rank}`}>{agent.rank}</span>
                <h3 className="font-bold text-navy text-lg">{agent.name}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-3">{agent.desc}</p>
              <Link href={agent.href} className="text-teal text-sm font-medium hover:underline">
                詳細を見る →
              </Link>
            </div>
          ))}
        </div>

        {/* 女性のキャリア */}
        <h2>女性がキャリアを築くためのポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">ワークライフバランス</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>フレックスタイム制度の有無を確認</li>
              <li>リモートワーク・在宅勤務の可否</li>
              <li>産休・育休の取得実績</li>
              <li>時短勤務制度の対象期間</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">キャリアアップ</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>女性管理職の比率を確認</li>
              <li>研修・スキルアップ支援制度</li>
              <li>女性活躍推進法に基づく認定企業</li>
              <li>メンター制度の有無</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2>女性の転職エージェント利用 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            あなたらしいキャリアを見つけよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            女性の転職に強いエージェントに無料登録して、理想の働き方を実現しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/mynavi/" className="btn-accent px-8 py-3">
              マイナビエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary px-8 py-3 bg-navy-light">
              dodaの詳細
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェント
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
