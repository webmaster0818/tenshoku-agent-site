import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "大阪でおすすめの転職エージェント5選｜関西の求人事情と活用法",
  description:
    "大阪で転職を考えている方におすすめの転職エージェントを紹介。大阪・関西エリアの求人市場の特徴、業界別の求人傾向、エージェント活用のコツを解説します。",
  openGraph: {
    title: "大阪でおすすめの転職エージェント5選｜関西の求人事情と活用法",
    description: "大阪での転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "大阪で転職エージェントを利用するメリットは？", a: "大阪は関西最大の経済圏で、多くの大手エージェントが拠点を構えています。関西に本社を置く企業の非公開求人など、エージェントでしか出会えない求人にアクセスできます。" },
  { q: "大阪にはどのような業界の求人が多いですか？", a: "メーカー（電気・機械・化学）、商社、医薬品、食品、IT、サービス業の求人が多い傾向にあります。大阪に本社を持つ大手企業も多数あります。" },
  { q: "大阪の平均年収はどのくらいですか？", a: "大阪府の平均年収は全国平均をやや上回る水準です。東京と比べると生活コストが低いため、実質的な生活水準は高くなる傾向があります。" },
  { q: "東京から大阪への転職は可能ですか？", a: "はい、可能です。UIターン転職の支援を行うエージェントも多く、オンライン面談や面接で対応可能な企業も増えています。" },
  { q: "大阪のエージェント拠点はどこにありますか？", a: "大手エージェントの多くは梅田（大阪駅周辺）に拠点を構えています。リクルートエージェント、doda、マイナビエージェントなどが梅田エリアにオフィスを持っています。" },
  { q: "大阪で転職活動する際の注意点は？", a: "東京ほど求人数が多くないため、条件を絞りすぎないことが重要です。複数のエージェントを併用し、関西全域を視野に入れると選択肢が広がります。" },
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

export default function OsakaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エリア別", href: "/" },
          { name: "大阪" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            大阪でおすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大阪は関西経済の中心地で、メーカーや商社を中心に多くの求人があります。
            大阪での転職に強いエージェントと活用法を紹介します。
          </p>
        </div>

        <h2>大阪の転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "大阪・梅田に拠点を持ち、関西エリアの求人を豊富に保有。大阪府内だけでなく、兵庫・京都・奈良など関西圏全体の求人を紹介してもらえます。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "大阪に拠点があり、関西の転職市場に精通したアドバイザーが在籍。メーカーやIT業界を中心に、大阪の求人が充実しています。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "大阪に拠点を構え、関西の中小企業から大手企業まで幅広い求人を取り扱っています。地場企業の求人にも強みがあります。" },
            { rank: 4, name: "JACリクルートメント", href: "/review/jac/", desc: "大阪に拠点があり、関西のグローバル企業や外資系企業の求人を保有。管理職や専門職の転職に強みがあります。" },
            { rank: 5, name: "ビズリーチ", href: "/review/bizreach/", desc: "大阪のハイクラス求人も掲載されています。関西に本社を持つ大手企業のエグゼクティブポジションなどのスカウトが届く可能性があります。" },
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

        <h2>大阪の求人市場の特徴</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">求人が多い業界</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>電気・機械メーカー</li>
              <li>化学・素材メーカー</li>
              <li>医薬品・医療機器</li>
              <li>食品・消費財</li>
              <li>商社・流通</li>
              <li>IT・Webサービス</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">大阪に本社がある主な大手企業の業界</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>総合家電メーカー</li>
              <li>住宅設備メーカー</li>
              <li>食品・飲料メーカー</li>
              <li>医薬品メーカー</li>
              <li>総合商社</li>
              <li>通信・鉄道</li>
            </ul>
          </div>
        </div>

        <h2>大阪の転職エージェント よくある質問</h2>
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
            大阪でのキャリアを広げよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            関西最大の求人市場で、あなたに最適なポジションを見つけましょう。
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
          <h3 className="font-bold text-navy mb-4">他のエリアも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/area/tokyo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              東京の転職エージェント
            </Link>
            <Link href="/area/nagoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              名古屋の転職エージェント
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
