import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "名古屋でおすすめの転職エージェント5選｜東海エリアの求人事情と活用法",
  description:
    "名古屋・東海エリアで転職を考えている方におすすめの転職エージェントを紹介。自動車産業をはじめとする東海エリアの求人市場の特徴と活用法を解説します。",
  openGraph: {
    title: "名古屋でおすすめの転職エージェント5選｜東海エリアの求人事情と活用法",
    description: "名古屋での転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "名古屋で転職エージェントを利用するメリットは？", a: "名古屋は東海エリアの経済の中心地で、自動車関連をはじめとするメーカーの求人が豊富です。大手エージェントは名古屋に拠点を持っており、地元企業の非公開求人にアクセスできます。" },
  { q: "名古屋にはどのような業界の求人が多いですか？", a: "自動車・自動車部品メーカー、機械メーカー、航空宇宙関連、電子部品、化学、物流などの製造業が特に強い地域です。IT・サービス業の求人も増加傾向にあります。" },
  { q: "名古屋の平均年収は？", a: "名古屋（愛知県）の平均年収は全国平均を上回る水準です。製造業が盛んで、技術職やエンジニアの需要が高いことが要因の一つです。生活コストは東京より低いため、実質的な生活水準は高くなります。" },
  { q: "東京から名古屋への転職は可能ですか？", a: "はい、可能です。UIターン転職の支援を行うエージェントも多く、オンライン面談で対応できます。新幹線で約1時間40分のアクセスも面接時に便利です。" },
  { q: "名古屋のエージェント拠点はどこにありますか？", a: "大手エージェントの多くは名古屋駅周辺や栄エリアに拠点を構えています。リクルートエージェント、doda、マイナビエージェントなどが名古屋にオフィスを持っています。" },
  { q: "名古屋で転職活動する際の注意点は？", a: "製造業に偏りがちなので、IT業界やサービス業を希望する場合は複数のエージェントを併用しましょう。また、愛知・岐阜・三重の東海3県を視野に入れると選択肢が広がります。" },
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

export default function NagoyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エリア別", href: "/" },
          { name: "名古屋" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            名古屋でおすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            名古屋は自動車産業を中心に製造業が盛んな東海エリアの経済拠点です。
            名古屋での転職に強いエージェントと活用法を紹介します。
          </p>
        </div>

        <h2>名古屋の転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "名古屋駅近くに拠点を持ち、東海エリアの求人を豊富に保有。自動車関連メーカーから商社、IT企業まで幅広い求人を紹介してもらえます。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "名古屋に拠点があり、東海エリアの転職市場に精通したアドバイザーが在籍。メーカーの技術職を中心に充実した求人を保有しています。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "名古屋に拠点を持ち、東海エリアの地場企業から大手メーカーまで対応。20代・30代の転職支援に強みがあります。" },
            { rank: 4, name: "JACリクルートメント", href: "/review/jac/", desc: "名古屋に拠点があり、東海エリアのグローバルメーカーや外資系企業の管理職・専門職求人を保有しています。" },
            { rank: 5, name: "ビズリーチ", href: "/review/bizreach/", desc: "名古屋エリアのハイクラス求人も掲載。大手自動車メーカーや関連企業の幹部候補ポジションなどのスカウトが届く可能性があります。" },
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

        <h2>名古屋・東海エリアの求人市場の特徴</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">求人が多い業界</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>自動車・自動車部品</li>
              <li>機械・精密機器</li>
              <li>航空宇宙</li>
              <li>電子部品・半導体</li>
              <li>化学・素材</li>
              <li>物流・運輸</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">名古屋の転職市場の強み</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>製造業の技術職求人が豊富</li>
              <li>大手メーカーの本社・工場が集中</li>
              <li>生活コストが東京より低い</li>
              <li>有効求人倍率が全国平均より高い傾向</li>
              <li>交通アクセスが良好</li>
              <li>IT業界の求人も増加傾向</li>
            </ul>
          </div>
        </div>

        <h2>名古屋の転職エージェント よくある質問</h2>
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
            名古屋でのキャリアを広げよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            東海エリアの豊富な求人の中から、あなたに最適なポジションを見つけましょう。
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
