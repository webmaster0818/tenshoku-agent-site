import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代におすすめの転職エージェント｜キャリアアップ・年収UPを実現",
  description:
    "30代におすすめの転職エージェントを厳選紹介。リクルートエージェント、doda、JACリクルートメントなど、キャリアアップに強いエージェントの特徴、年収交渉のコツ、よくある質問を解説します。",
  openGraph: {
    title: "30代におすすめの転職エージェント｜キャリアアップ・年収UPを実現",
    description: "30代のキャリアアップに最適な転職エージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "30代の転職は遅いですか？", a: "いいえ、30代は転職市場で高い需要がある年代です。実務経験やスキルが評価され、即戦力として採用される機会が多くあります。むしろキャリアアップや年収アップを実現しやすい年代と言えます。" },
  { q: "30代の転職で年収は上がりますか？", a: "30代の転職では、スキルや経験が正当に評価されることで年収がアップするケースが多くあります。特にエージェントを活用した年収交渉により、条件改善が期待できます。" },
  { q: "30代で未経験の業界に転職できますか？", a: "30代前半であれば未経験業界への転職も十分可能です。ただし、20代と比べるとポテンシャル採用は減るため、これまでの経験を活かせる接点を見つけることが重要です。エージェントに相談して戦略を立てましょう。" },
  { q: "管理職経験がなくても大丈夫ですか？", a: "管理職経験がなくても、専門スキルや実務経験が評価されます。リーダー経験やプロジェクト管理経験なども十分なアピールポイントになります。" },
  { q: "転職活動はどのくらいの期間がかかりますか？", a: "30代の転職は一般的に2〜4ヶ月程度です。現職を続けながら活動する場合はやや長引くこともありますが、エージェントを活用することで効率的に進められます。" },
  { q: "家族がいる場合、転職で注意すべきことは？", a: "家族の理解を得ること、収入の空白期間を作らないこと、転勤や勤務地の条件を明確にすることが重要です。エージェントに家庭の事情も伝えることで、条件に合った求人を紹介してもらえます。" },
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

export default function Age30sPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "年代別", href: "/" },
          { name: "30代" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            30代におすすめの転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            30代はキャリアアップや年収アップを実現する絶好の転職タイミングです。
            即戦力としての経験・スキルを活かし、より高いポジションや好条件の求人を
            見つけるために、実績のある転職エージェントを活用しましょう。
          </p>
        </div>

        {/* おすすめランキング */}
        <h2>30代におすすめの転職エージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "リクルートエージェント",
              desc: "業界最大級の求人数を誇り、30代向けの管理職・専門職求人も豊富。全国対応で幅広い業界・職種をカバーしています。",
              href: "/review/recruit-agent/",
            },
            {
              rank: 2,
              name: "doda",
              desc: "転職サイトとエージェントの一体型で、スカウト機能も利用可能。30代のキャリアアップに適した求人が充実しています。",
              href: "/review/doda/",
            },
            {
              rank: 3,
              name: "JACリクルートメント",
              desc: "ハイクラス・外資系に特化し、30代以上をメインターゲットとしたサービス。質の高いコンサルタントによる手厚いサポートが魅力です。",
              href: "/review/jac/",
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

        {/* 30代のキャリアアップ戦略 */}
        <h2>30代のキャリアアップ戦略</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">30代前半（30〜34歳）</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>専門スキルの深化とキャリアの方向性の確定</li>
              <li>リーダーシップ経験の獲得</li>
              <li>異業種転職のラストチャンスを活かす</li>
              <li>中長期的なキャリアプランの策定</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">30代後半（35〜39歳）</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>管理職・マネジメントポジションへの挑戦</li>
              <li>専門性を武器にした年収交渉</li>
              <li>業界内での人脈を活かした転職</li>
              <li>ワークライフバランスを考慮した選択</li>
            </ul>
          </div>
        </div>

        {/* 年収交渉のコツ */}
        <h2>30代の年収交渉のコツ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "市場価値を把握する", desc: "転職エージェントに相談し、自分のスキル・経験に見合った年収相場を確認しましょう。複数のエージェントから意見をもらうとより正確です。" },
            { step: 2, title: "実績を数値化する", desc: "売上、コスト削減、チーム規模、プロジェクト成果など、具体的な数字で実績をアピールしましょう。定量的な実績は年収交渉で強い武器になります。" },
            { step: 3, title: "希望年収の根拠を明確にする", desc: "「現年収＋α」ではなく、市場価値やスキルに基づいた根拠ある希望年収を提示しましょう。エージェントと一緒に適切な金額を設定します。" },
            { step: 4, title: "エージェントに交渉を任せる", desc: "年収交渉はエージェントの得意分野です。直接企業と交渉するよりも、エージェントを通じた方がスムーズに条件改善が期待できます。" },
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
        <h2>30代の転職エージェント よくある質問</h2>
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
            30代のキャリアアップを始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            経験を活かして年収アップ・キャリアアップを実現しましょう。登録は完全無料です。
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
          <h3 className="font-bold text-navy mb-4">他の年代のおすすめも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/age/20s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              20代向けエージェント
            </Link>
            <Link href="/age/40s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              40代向けエージェント
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
