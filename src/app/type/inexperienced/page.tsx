import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "未経験向け転職エージェントおすすめ5選｜未経験可の求人の探し方",
  description:
    "未経験から新しい業界・職種に挑戦したい方におすすめの転職エージェントを紹介。未経験可の求人の探し方、エージェントの活用法、よくある質問を解説します。",
  openGraph: {
    title: "未経験向け転職エージェントおすすめ5選｜未経験可の求人の探し方",
    description: "未経験転職に強いエージェントと求人の探し方を解説。",
  },
};

const faqData = [
  { q: "未経験でも転職エージェントに登録できますか？", a: "はい、登録できます。多くのエージェントが未経験者向けの求人を取り扱っており、業界・職種未経験の方もサポートしています。" },
  { q: "未経験からの転職で人気の業界・職種は？", a: "IT業界（エンジニア、Webマーケティング）、営業職、事務職、介護・福祉、物流などが未経験歓迎の求人が多い傾向にあります。" },
  { q: "未経験転職で年収は下がりますか？", a: "業界・職種によります。未経験の場合、最初は年収が下がるケースもありますが、成長産業や人手不足の業界では、未経験でも好条件の求人があります。エージェントに相談して市場相場を確認しましょう。" },
  { q: "未経験者が転職を成功させるコツは？", a: "ポテンシャルや意欲をアピールすることが重要です。前職で培った汎用スキル（コミュニケーション力、問題解決力など）を新しい仕事にどう活かせるかを伝えましょう。" },
  { q: "資格がなくても未経験転職は可能ですか？", a: "はい、多くの未経験歓迎の求人は資格不問です。ただし、事前に関連資格を取得しておくと、意欲のアピールになります。エージェントに相談すれば、有利な資格についてアドバイスを受けられます。" },
  { q: "未経験転職の場合、転職活動期間はどのくらい？", a: "一般的に2〜4ヶ月程度です。未経験の場合は応募数を増やす必要があるため、経験者転職よりやや時間がかかる傾向があります。" },
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

export default function InexperiencedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "未経験" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            未経験向け転職エージェントおすすめ5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            未経験から新しい業界・職種に挑戦したい方にとって、転職エージェントは心強い味方です。
            未経験可の求人を多く持つエージェントと、効果的な活用法を紹介します。
          </p>
        </div>

        <h2>未経験転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を誇り、未経験歓迎の求人も数万件規模で保有。幅広い業界・職種をカバーしているため、異業種転職の選択肢が豊富です。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "未経験歓迎の求人特集があり、求人検索時に「未経験可」のフィルターで絞り込めます。エージェントとサイトの両方が使えるため、自分のペースで進められます。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "20代・30代の未経験転職に強みがあります。丁寧なカウンセリングで、未経験でも活かせるスキルの棚卸しをサポートしてくれます。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "管理職・専門職経験がある方が新しい業界に挑戦する場合に活用できます。スカウト型のため、自分の経験を評価してくれる企業を見つけやすいです。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "異業界への転職でも、前職の経験やスキルを活かせるポジションの提案が得意です。特にグローバル企業への転職を考えている方に向いています。" },
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

        {/* 未経験可の求人の探し方 */}
        <h2>未経験可の求人を見つける方法</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "複数のエージェントに登録する", desc: "エージェントごとに保有する未経験歓迎求人が異なります。2〜3社に登録して、より多くの求人に出会いましょう。" },
            { step: 2, title: "希望条件を柔軟に伝える", desc: "業界・職種を限定しすぎず、興味のある分野を幅広く伝えることで、思わぬ好条件の求人に出会えることがあります。" },
            { step: 3, title: "転職サイトとの併用", desc: "エージェント経由だけでなく、転職サイトで「未経験歓迎」の求人を自分で探すことも効果的です。dodaなら両方の機能が使えます。" },
            { step: 4, title: "汎用スキルを整理する", desc: "コミュニケーション力、PCスキル、マネジメント経験など、業界を問わず活かせるスキルを洗い出しておきましょう。" },
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

        <h2>未経験転職 よくある質問</h2>
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
            未経験から新しいキャリアを始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            まずは転職エージェントに無料登録して、未経験歓迎の求人をチェックしましょう。
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
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェント
            </Link>
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
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
