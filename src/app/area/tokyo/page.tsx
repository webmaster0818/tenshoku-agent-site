import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京でおすすめの転職エージェント5選｜都内の求人事情と活用法",
  description:
    "東京で転職を考えている方におすすめの転職エージェントを紹介。東京の求人市場の特徴、エリア別の求人傾向、エージェント活用のコツを解説します。",
  openGraph: {
    title: "東京でおすすめの転職エージェント5選｜都内の求人事情と活用法",
    description: "東京での転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "東京で転職エージェントを利用するメリットは？", a: "東京は日本最大の求人市場であり、ほぼすべてのエージェントが東京に拠点を構えています。対面での面談がしやすく、企業との距離が近いため、選考がスムーズに進みやすいです。" },
  { q: "東京にはどのくらいの求人がありますか？", a: "大手エージェントでは、東京都の求人が全体の3〜4割を占めることが一般的です。業界・職種を問わず、圧倒的な求人数があります。" },
  { q: "地方から東京への転職は可能ですか？", a: "はい、可能です。多くのエージェントがオンライン面談に対応しており、地方在住でも東京の求人に応募できます。面接もオンライン対応の企業が増えています。" },
  { q: "東京で年収アップは期待できますか？", a: "東京は生活コストが高い分、年収水準も全国平均より高い傾向にあります。ただし、職種や業界によって差があるため、エージェントに相場を確認することをおすすめします。" },
  { q: "東京のどのエリアに求人が多いですか？", a: "丸の内・大手町（金融・コンサル）、渋谷・六本木（IT・スタートアップ）、新宿（多業種）、品川・田町（メーカー・商社）など、エリアによって集まる業界が異なります。" },
  { q: "東京での転職活動で注意すべきことは？", a: "求人が多い分、自分の軸を明確にしないと迷いやすくなります。通勤時間や勤務地も含めて条件を整理し、エージェントに伝えましょう。" },
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

export default function TokyoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エリア別", href: "/" },
          { name: "東京" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            東京でおすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            東京は日本最大の求人市場で、あらゆる業界・職種の求人が集中しています。
            東京での転職を成功させるためのエージェント選びと活用法を解説します。
          </p>
        </div>

        <h2>東京の転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "東京都内の求人数は業界最大級。丸の内・大手町に拠点があり、金融、コンサル、メーカーなど幅広い業界の求人を保有しています。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "東京都内の求人も豊富で、IT・Web業界を中心に充実しています。丸の内に拠点があり、対面面談も可能です。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "東京に本社を構え、都内の中小企業から大手企業まで幅広い求人を取り扱っています。特に20代・30代向けの求人が充実しています。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "東京のハイクラス求人が特に充実しています。外資系企業やスタートアップのエグゼクティブポジションも多く掲載されています。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "東京に本社があり、都内の外資系企業や日系グローバル企業の求人を豊富に保有しています。管理職・専門職の転職に強みがあります。" },
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

        <h2>東京の求人市場の特徴</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">求人が多い業界</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>IT・Web・通信</li>
              <li>金融・保険</li>
              <li>コンサルティング</li>
              <li>広告・メディア</li>
              <li>商社・流通</li>
              <li>外資系企業全般</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">エリア別の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>丸の内・大手町: 金融・コンサル・大手企業</li>
              <li>渋谷・六本木: IT・スタートアップ</li>
              <li>新宿: 多業種・営業拠点</li>
              <li>品川・田町: メーカー・商社</li>
              <li>秋葉原・上野: IT・通信</li>
              <li>汐留・新橋: 広告・メディア</li>
            </ul>
          </div>
        </div>

        <h2>東京の転職エージェント よくある質問</h2>
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
            東京でのキャリアを広げよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            日本最大の求人市場で、あなたに最適なポジションを見つけましょう。
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
            <Link href="/area/osaka/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              大阪の転職エージェント
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
