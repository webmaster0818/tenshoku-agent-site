import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ITエンジニアにおすすめの転職エージェント｜IT業界の転職成功ガイド",
  description:
    "ITエンジニア向けのおすすめ転職エージェントを厳選紹介。リクルートエージェント、doda、ビズリーチなど、IT業界の転職に強いエージェントの特徴、キャリアパス、よくある質問を解説します。",
  openGraph: {
    title: "ITエンジニアにおすすめの転職エージェント｜IT業界の転職成功ガイド",
    description: "ITエンジニアの転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "ITエンジニアの転職に特化したエージェントを使うべきですか？", a: "IT業界に詳しいエージェントを利用することで、技術スタックや開発環境に合った求人を紹介してもらえるメリットがあります。総合型エージェントと特化型を併用するのがおすすめです。" },
  { q: "エンジニアの転職で年収はどのくらい上がりますか？", a: "スキルや経験、転職先の企業規模によりますが、エンジニアの転職で年収が上がるケースは少なくありません。特にクラウドやAI関連のスキルを持つ方は好条件のオファーを得やすい傾向にあります。" },
  { q: "未経験からITエンジニアに転職できますか？", a: "未経験からITエンジニアへの転職は可能ですが、基本的なプログラミングスキルの習得が前提となります。未経験歓迎の求人を扱うエージェントに相談し、研修制度のある企業を紹介してもらいましょう。" },
  { q: "フリーランスと正社員、どちらが良いですか？", a: "安定性を重視するなら正社員、収入の最大化や自由な働き方を求めるならフリーランスが向いています。キャリアの段階や生活状況に応じて判断しましょう。エージェントに相談して比較検討するのもおすすめです。" },
  { q: "ポートフォリオは必要ですか？", a: "特にWeb系やフロントエンドエンジニアの場合、ポートフォリオがあると選考で有利になります。GitHubの公開リポジトリや個人プロジェクトも評価されるため、日頃からアウトプットを意識しましょう。" },
  { q: "リモートワーク可能な求人は多いですか？", a: "IT業界ではリモートワークを導入する企業が増えています。フルリモート、ハイブリッドなど勤務形態はさまざまですので、エージェントに希望する働き方を伝えて求人を絞り込みましょう。" },
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

export default function ItEngineerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "業界別", href: "/" },
          { name: "ITエンジニア" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ITエンジニアにおすすめの転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            IT業界の転職では、技術トレンドや開発環境を理解したエージェントの存在が重要です。
            エンジニアのキャリアアップに強いエージェントを活用して、スキルに見合った好条件の求人を見つけましょう。
          </p>
        </div>

        {/* おすすめランキング */}
        <h2>ITエンジニアにおすすめの転職エージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "リクルートエージェント",
              desc: "IT・Web業界の求人を多数保有し、エンジニア向けの専門アドバイザーが在籍。大手からスタートアップまで幅広い選択肢があります。",
              href: "/review/recruit-agent/",
            },
            {
              rank: 2,
              name: "doda",
              desc: "転職サイト一体型でIT求人の検索がしやすく、スカウト機能でエンジニアへのオファーも多数。年収診断ツールで市場価値の確認も可能です。",
              href: "/review/doda/",
            },
            {
              rank: 3,
              name: "ビズリーチ",
              desc: "ハイクラスのITポジションに特化したスカウトが届きます。テックリード、CTO候補など、上位ポジションを狙うエンジニアにおすすめです。",
              href: "/review/bizreach/",
            },
          ].map((agent) => (
            <div key={agent.rank} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="rank-badge rank-badge--1">{agent.rank}</span>
                <h3 className="font-bold text-navy text-lg">{agent.name}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-3">{agent.desc}</p>
              <Link href={agent.href} className="text-teal text-sm font-medium hover:underline">
                詳細レビューを見る &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* IT業界の転職市場 */}
        <h2>IT業界の転職市場</h2>
        <p>
          IT業界はDX推進やクラウド移行の加速により、エンジニアの需要が高まり続けています。
          特にクラウドエンジニア、データサイエンティスト、セキュリティエンジニアなどの専門性の高い職種は、
          人材不足が深刻で好条件の求人が多い状況です。
        </p>
        <p>
          また、SaaS企業やスタートアップの成長に伴い、プロダクト開発に携わるエンジニアの採用も活発です。
          転職エージェントを活用することで、一般には公開されていない好条件の求人にアクセスできます。
        </p>

        {/* エンジニアのキャリアパス */}
        <h2>エンジニアのキャリアパス</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">テクニカル路線</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>シニアエンジニア</li>
              <li>テックリード / リードエンジニア</li>
              <li>アーキテクト</li>
              <li>CTO / VPoE</li>
              <li>技術顧問</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">マネジメント路線</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>チームリーダー</li>
              <li>エンジニアリングマネージャー</li>
              <li>開発部長</li>
              <li>プロダクトマネージャー</li>
              <li>事業責任者</li>
            </ul>
          </div>
        </div>

        {/* 需要の高いスキル */}
        <h2>転職市場で需要の高いスキル</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            "クラウド（AWS / GCP / Azure）",
            "コンテナ技術（Docker / Kubernetes）",
            "AI / 機械学習",
            "データエンジニアリング",
            "セキュリティ",
            "SRE / DevOps",
          ].map((skill, i) => (
            <div key={i} className="glass-card p-3 text-center">
              <p className="text-sm font-medium text-navy">{skill}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2>ITエンジニアの転職 よくある質問</h2>
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
            ITエンジニアとしてのキャリアアップを実現しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            IT業界に精通したエージェントがあなたの転職をサポートします。登録は完全無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              リクルートエージェントに無料登録
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のカテゴリも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/industry/consulting/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              コンサル向けエージェント
            </Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェント
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
