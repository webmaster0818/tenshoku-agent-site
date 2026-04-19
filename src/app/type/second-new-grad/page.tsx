import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "第二新卒におすすめの転職エージェント5選｜20代特化の活用法を解説",
  description:
    "第二新卒の転職に強いエージェントを厳選紹介。マイナビエージェント、リクルートエージェント、doda、ビズリーチ、JACリクルートメントの特徴と、20代が転職を成功させるための活用法を解説します。",
  openGraph: {
    title: "第二新卒におすすめの転職エージェント5選｜20代特化の活用法を解説",
    description: "第二新卒の転職に強いエージェントを厳選紹介。20代特化の活用法を解説。",
  },
};

const faqData = [
  { q: "第二新卒とは何歳までを指しますか？", a: "一般的に、学校卒業後おおむね3年以内の求職者を指します。年齢では25歳前後が目安ですが、明確な定義はなく、企業によって異なります。" },
  { q: "第二新卒でも転職エージェントは利用できますか？", a: "はい、利用できます。多くの転職エージェントは第二新卒向けの求人を取り扱っており、社会人経験が浅い方でもキャリアアドバイザーのサポートを受けられます。" },
  { q: "第二新卒の転職で不利になることはありますか？", a: "短期離職がマイナスに見られることはありますが、若さやポテンシャルを評価する企業も多いです。転職理由を前向きに伝えることが重要です。" },
  { q: "第二新卒向けの求人はどのくらいありますか？", a: "大手エージェントでは第二新卒歓迎の求人を多数保有しています。リクルートエージェントやdodaでは数万件規模の該当求人があります。" },
  { q: "第二新卒の転職活動にかかる期間はどのくらいですか？", a: "一般的に1〜3ヶ月程度です。在職中に転職活動を始める場合は、退職交渉を含めて3ヶ月程度見ておくとよいでしょう。" },
  { q: "第二新卒で未経験の業界に転職できますか？", a: "はい、第二新卒はポテンシャル採用の対象となるため、未経験業界への転職も十分可能です。特にIT、営業、事務職などは未経験歓迎の求人が多い傾向にあります。" },
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

export default function SecondNewGradPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "第二新卒" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            第二新卒におすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            第二新卒の転職は、ポテンシャル採用を重視する企業が多く、キャリアチェンジのチャンスが広がる時期です。
            ここでは、第二新卒の転職支援に強い転職エージェントを厳選して紹介します。
          </p>
        </div>

        {/* ランキング */}
        <h2>第二新卒におすすめの転職エージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "マイナビエージェント", href: "/review/mynavi/", desc: "20代・第二新卒の転職支援に特に力を入れています。初めての転職に寄り添うサポート体制が充実しており、書類添削や面接対策も丁寧です。20代の転職事情に精通したアドバイザーが在籍しています。" },
            { rank: 2, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "公開求人約60万件、非公開求人約30万件と業界最大級の求人数を保有。第二新卒歓迎の求人も豊富で、幅広い選択肢から最適な求人を見つけられます。" },
            { rank: 3, name: "doda", href: "/review/doda/", desc: "転職サイトとエージェントの両機能を持ち、自分のペースで転職活動を進められます。第二新卒向けの特集ページもあり、20代向け求人が充実しています。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型の転職サービスで、登録しておくと企業やヘッドハンターから直接オファーが届きます。第二新卒でもスキルや経験次第では好条件のスカウトが届く可能性があります。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "外資系・グローバル企業の転職に強みがあります。語学力を活かしたい第二新卒の方におすすめです。" },
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

        {/* 20代特化の活用法 */}
        <h2>20代・第二新卒が転職エージェントを活用するコツ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "複数のエージェントに登録する", desc: "エージェントごとに保有する求人や得意分野が異なります。2〜3社に登録して比較することで、より多くの求人に出会えます。" },
            { step: 2, title: "転職理由を前向きに整理する", desc: "「なぜ転職したいか」だけでなく「何を実現したいか」を明確にしましょう。アドバイザーとの面談前に自己分析を行うと、より的確な求人紹介を受けられます。" },
            { step: 3, title: "ポテンシャル採用を狙う", desc: "第二新卒はスキルより意欲や成長可能性が評価されます。入社後に何を学び、どう貢献したいかを伝えることが重要です。" },
            { step: 4, title: "書類添削・面接対策を積極的に活用する", desc: "社会人経験が浅いからこそ、プロのサポートを最大限活用しましょう。特に職務経歴書の書き方は、エージェントのアドバイスが大きな差を生みます。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2>第二新卒の転職エージェント よくある質問</h2>
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
            第二新卒の転職を成功させよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            20代の可能性を最大限に引き出す転職エージェントに無料登録しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/mynavi/" className="btn-accent px-8 py-3">
              マイナビエージェントの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary px-8 py-3 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向けエージェント
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
