import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "フリーランスから正社員へ｜おすすめ転職エージェント5選と活用法",
  description:
    "フリーランスから正社員への転職を考えている方におすすめの転職エージェントを紹介。フリーランス経験の活かし方、正社員転職の注意点、よくある質問を解説します。",
  openGraph: {
    title: "フリーランスから正社員へ｜おすすめ転職エージェント5選と活用法",
    description: "フリーランスから正社員への転職に強いエージェントを紹介。",
  },
};

const faqData = [
  { q: "フリーランスから正社員への転職は難しいですか？", a: "フリーランスとしての実績やスキルがあれば、正社員への転職は十分可能です。即戦力として評価されるケースも多いです。ただし、組織での協調性やチームワークについての懸念を持つ企業もあるため、その点を面接でカバーする必要があります。" },
  { q: "フリーランス経験は職務経歴書にどう書けばよいですか？", a: "プロジェクトごとに、担当した業務内容、使用したスキル、成果（売上、改善率など具体的な数字）を記載します。クライアント名は守秘義務がある場合「大手IT企業」のように業種で記載しましょう。" },
  { q: "フリーランスの期間が長いと不利ですか？", a: "期間の長さ自体が不利になることは少ないです。むしろ、長期間フリーランスとして活躍できたスキルや自己管理能力は評価されます。なぜ正社員に戻りたいのか、明確な理由を伝えることが大切です。" },
  { q: "フリーランスから正社員になる際の年収の目安は？", a: "フリーランス時代の手取りと正社員の年収は単純比較できません。正社員は社会保険料の会社負担、福利厚生、有給休暇などが加わるため、額面上は下がっても実質的な待遇は同等以上になることもあります。" },
  { q: "転職エージェントにフリーランスだと相手にされませんか？", a: "いいえ、フリーランス経験者の転職支援も多くのエージェントが行っています。特にITエンジニアやクリエイター、コンサルタントなどの専門職は、フリーランス経験が高く評価されます。" },
  { q: "フリーランスから正社員に転職する最適なタイミングは？", a: "プロジェクトの区切りがつくタイミングが理想的です。転職活動には2〜3ヶ月かかることが多いため、余裕を持って計画しましょう。案件が途切れたタイミングで焦って転職するより、在活中に動くことをおすすめします。" },
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

export default function FreelancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "フリーランス" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            フリーランスから正社員へ｜おすすめ転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            フリーランスとして培ったスキルや経験を活かして正社員への転職を検討している方に、
            おすすめの転職エージェントと活用法を紹介します。
          </p>
        </div>

        <h2>フリーランスの転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数で、フリーランス経験者が活かせるポジションも豊富。幅広い業界の求人があるため、自分のスキルを活かせる企業が見つかりやすいです。" },
            { rank: 2, name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス求人に特化したスカウト型サービス。フリーランスとしての専門スキルを評価した企業から直接スカウトが届くため、好条件での転職が期待できます。" },
            { rank: 3, name: "JACリクルートメント", href: "/review/jac/", desc: "管理職や専門職の転職に強く、フリーランスで培った専門性を活かしたポジションの提案が得意です。外資系企業への転職にも対応しています。" },
            { rank: 4, name: "doda", href: "/review/doda/", desc: "エージェントとサイトの両機能があり、自分でも求人を探せます。フリーランスから正社員への転職に関するコンテンツも参考になります。" },
            { rank: 5, name: "マイナビエージェント", href: "/review/mynavi/", desc: "IT・Webクリエイター向けの求人に力を入れており、フリーランスのITエンジニアやデザイナーが正社員に戻る際に活用できます。" },
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

        {/* フリーランスから正社員への転職ポイント */}
        <h2>フリーランスから正社員へ転職する際のポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">正社員転職のメリット</h3>
            <ul className="space-y-2">
              {[
                "安定した収入と社会保険の完備",
                "福利厚生（有給休暇、退職金など）",
                "チームで働くことによる成長機会",
                "住宅ローンなどの審査が通りやすい",
                "キャリアパスが明確になりやすい",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <h3 className="font-bold text-red-500 mb-3">注意すべき点</h3>
            <ul className="space-y-2">
              {[
                "フリーランス時代の時間の自由度は減る",
                "組織のルールや文化への適応が必要",
                "額面年収だけで比較しない（実質待遇で判断）",
                "転職理由を前向きに伝える準備が必要",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2>フリーランス転職 よくある質問</h2>
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
            フリーランス経験を活かして正社員へ
          </h2>
          <p className="text-white/70 text-sm mb-6">
            あなたのスキルと経験を正当に評価してくれる企業を、転職エージェントと一緒に見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent px-8 py-3">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary px-8 py-3 bg-navy-light">
              ビズリーチの詳細
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェント
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
