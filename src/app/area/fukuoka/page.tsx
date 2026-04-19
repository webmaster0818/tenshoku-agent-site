import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "福岡でおすすめの転職エージェント5選｜九州エリアの求人事情と活用法",
  description:
    "福岡で転職を考えている方におすすめの転職エージェントを紹介。IT企業の進出が進む福岡・九州エリアの求人市場の特徴と活用法を解説します。",
  openGraph: {
    title: "福岡でおすすめの転職エージェント5選｜九州エリアの求人事情と活用法",
    description: "福岡での転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "福岡で転職エージェントを利用するメリットは？", a: "福岡は九州最大の経済都市で、近年はIT企業の進出やスタートアップの集積が進んでいます。大手エージェントは福岡に拠点を持ち、地元企業の非公開求人にもアクセスできます。" },
  { q: "福岡にはどのような業界の求人が多いですか？", a: "IT・Web業界、サービス業、小売・流通、建設、医療・福祉、食品メーカーなどの求人が多い傾向にあります。近年は国家戦略特区としてスタートアップ支援も活発です。" },
  { q: "福岡の年収水準はどのくらいですか？", a: "福岡の平均年収は全国平均をやや下回りますが、生活コスト（家賃・食費）が東京より大幅に低いため、実質的な生活水準は高くなることが多いです。" },
  { q: "東京から福岡への転職は可能ですか？", a: "はい、可能です。UIターン転職の支援を行うエージェントも多く、オンライン面談や面接に対応する企業も増えています。福岡市はコンパクトシティで通勤時間が短い点も魅力です。" },
  { q: "福岡のエージェント拠点はどこにありますか？", a: "大手エージェントの多くは博多駅周辺や天神エリアに拠点を構えています。リクルートエージェント、doda、マイナビエージェントなどが福岡にオフィスを持っています。" },
  { q: "福岡で転職活動する際の注意点は？", a: "東京や大阪に比べると求人数は少ないため、複数のエージェントを併用することが重要です。また、福岡だけでなく九州全域を視野に入れると選択肢が広がります。" },
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

export default function FukuokaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エリア別", href: "/" },
          { name: "福岡" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            福岡でおすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            福岡は九州の経済の中心地で、近年はIT企業の進出やスタートアップの集積が進んでいます。
            福岡での転職に強いエージェントと活用法を紹介します。
          </p>
        </div>

        <h2>福岡の転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "福岡・博多に拠点を持ち、九州エリアの求人を豊富に保有。地場企業から全国展開企業まで幅広い求人を紹介してもらえます。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "福岡に拠点があり、九州エリアの転職市場に精通したアドバイザーが在籍。IT・Web業界を含む多様な求人を保有しています。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "福岡に拠点を持ち、九州の地場企業や成長企業の求人に強みがあります。20代・30代の転職支援が特に充実しています。" },
            { rank: 4, name: "JACリクルートメント", href: "/review/jac/", desc: "福岡に拠点があり、九州に進出している外資系企業やグローバル企業の管理職・専門職求人を保有しています。" },
            { rank: 5, name: "ビズリーチ", href: "/review/bizreach/", desc: "福岡エリアのハイクラス求人も掲載。九州の大手企業や成長企業からスカウトが届く可能性があります。" },
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

        <h2>福岡・九州エリアの求人市場の特徴</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">求人が多い業界</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>IT・Web・ゲーム</li>
              <li>サービス・小売</li>
              <li>建設・不動産</li>
              <li>医療・福祉</li>
              <li>食品メーカー</li>
              <li>物流・運輸</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">福岡の転職市場の強み</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>IT企業の進出・誘致が活発</li>
              <li>スタートアップ支援が充実</li>
              <li>生活コストが東京より大幅に低い</li>
              <li>コンパクトシティで通勤が快適</li>
              <li>食やアクセスなど生活の質が高い</li>
              <li>アジアに近く国際ビジネスに有利</li>
            </ul>
          </div>
        </div>

        <h2>福岡の転職エージェント よくある質問</h2>
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
            福岡でのキャリアを広げよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            成長が続く福岡で、あなたに最適なポジションを見つけましょう。
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
            <Link href="/area/osaka/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              大阪の転職エージェント
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
