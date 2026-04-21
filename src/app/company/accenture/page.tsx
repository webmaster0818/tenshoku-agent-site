import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "アクセンチュアに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "アクセンチュアへの転職を徹底解説。転職難易度A級の選考フロー、平均年収800〜1,500万円の実態、ケース面接対策ポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "アクセンチュアに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "アクセンチュア転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "アクセンチュアの中途採用比率はどのくらいですか？",
    a: "アクセンチュアの中途採用比率は約72%と非常に高い水準です。多様なバックグラウンドを持つ人材を積極的に採用しており、IT業界以外からの転職者も多数在籍しています。",
  },
  {
    q: "アクセンチュアの面接ではケース面接がありますか？",
    a: "はい、特に戦略コンサルティング部門ではケース面接が実施されます。テクノロジーコンサルティングやオペレーション部門では、技術面接やプロジェクト経験に関する質問が中心となる場合もあります。",
  },
  {
    q: "アクセンチュアの英語力はどの程度必要ですか？",
    a: "部署やプロジェクトによりますが、グローバルプロジェクトに参加する場合は英語でのコミュニケーション能力が必須です。入社時はTOEIC700点以上が目安ですが、昇進にはさらに高い英語力が求められます。",
  },
  {
    q: "アクセンチュアの年収はどのくらいですか？",
    a: "ポジションにより異なりますが、アナリスト（新卒・第二新卒）で430〜500万円、コンサルタントで500〜700万円、マネージャーで800〜1,200万円、シニアマネージャー以上で1,200〜1,500万円以上が目安です。",
  },
  {
    q: "コンサル未経験でもアクセンチュアに転職できますか？",
    a: "可能です。アクセンチュアは中途採用の約72%が異業種からの転職者です。特にIT系のスキルやプロジェクトマネジメント経験があれば、テクノロジーコンサルタントとして採用される可能性があります。",
  },
  {
    q: "アクセンチュアの働き方改革は進んでいますか？",
    a: "近年、働き方改革「Project PRIDE」を推進しており、残業時間の削減やリモートワークの導入が進んでいます。ただし、プロジェクトの繁忙期には忙しくなることもあるため、個人差があります。",
  },
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

export default function AccentureCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "アクセンチュア" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">A</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              アクセンチュアに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            アクセンチュアは世界最大級の総合コンサルティングファームで、戦略・テクノロジー・オペレーションなど幅広い領域でサービスを展開しています。
            中途採用比率72%と中途入社者が多く、異業種からの転職実績も豊富です。
            本記事では、アクセンチュアへの転職難易度・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>アクセンチュアの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "アクセンチュア株式会社（Accenture Japan Ltd.）" },
                { label: "本社", value: "東京都港区赤坂1-8-1（日本法人） / アイルランド ダブリン（グローバル本社）" },
                { label: "設立", value: "1989年（グローバル） / 1995年（日本法人）" },
                { label: "従業員数", value: "約799,000人（グローバル） / 約21,000人（日本）" },
                { label: "平均年収", value: "800〜1,500万円（ポジションにより異なる）" },
                { label: "事業内容", value: "戦略コンサルティング、テクノロジーコンサルティング、オペレーションズ、デジタルマーケティング、AI/DX推進" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※最新情報は各社公式サイトでご確認ください
        </p>

        {/* 転職難易度 */}
        <h2>アクセンチュアの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">A級</span>
            <p className="text-text-secondary text-sm">
              高い難易度だが門戸は比較的広い。中途採用に積極的で、異業種からの転職者も多いのが特徴です。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用比率72%で、積極的に中途人材を採用している</li>
            <li>戦略部門はケース面接が必須で高い論理的思考力が求められる</li>
            <li>テクノロジー部門はIT経験・プロジェクト経験が重視される</li>
            <li>成長スピードが速く、Up or Outの文化は薄れつつあるが成果主義は健在</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>アクセンチュアの選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "履歴書・職務経歴書を提出。学歴・職務経験・スキルセットが評価されます。転職エージェント経由の応募が推薦力の面で有利です。",
            },
            {
              step: 2,
              title: "Webテスト・適性検査",
              desc: "論理的思考力やパーソナリティを測る適性検査が実施されます。GABやSPI形式のテストが使われることが多いです。",
            },
            {
              step: 3,
              title: "一次面接（ケース面接 / 技術面接）",
              desc: "戦略部門ではケース面接が中心。テクノロジー部門では技術面接やプロジェクト経験のディスカッションが行われます。マネージャークラスとの面接です。",
            },
            {
              step: 4,
              title: "最終面接",
              desc: "シニアマネージャー〜マネージングディレクタークラスとの面接。カルチャーフィットやキャリアビジョン、アクセンチュアでの貢献イメージが確認されます。",
            },
            {
              step: 5,
              title: "オファー・入社",
              desc: "最終面接通過後、条件提示が行われます。ポジション・年収・入社時期の調整を経て正式内定となります。",
            },
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

        {/* 面接対策ポイント */}
        <h2>アクセンチュア転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "ケース面接の徹底対策",
              desc: "戦略部門志望の場合、フェルミ推定やビジネスケースの練習は必須です。「東大生の道しるべ」「Case in Point」等の書籍で練習しましょう。",
            },
            {
              title: "論理的思考力のアピール",
              desc: "全ての部門で「構造的に考え、分かりやすく伝える力」が重視されます。PREP法（Point-Reason-Example-Point）を意識した回答を心がけましょう。",
            },
            {
              title: "プロジェクト経験の棚卸し",
              desc: "過去のプロジェクトで自分が果たした役割、困難をどう乗り越えたか、成果は何かを具体的な数字を交えて整理しておきましょう。",
            },
            {
              title: "英語力のアピール",
              desc: "グローバルプロジェクトが多いため、英語力は大きなプラス要因です。英語面接が実施される場合もあるため、英語での自己紹介やプロジェクト説明の準備も重要です。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>アクセンチュア転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手でアクセンチュアへの転職支援実績が豊富。非公開求人も多く、コンサル業界への転職ノウハウを持つアドバイザーが在籍しています。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化。アクセンチュアの採用担当やヘッドハンターから直接スカウトが届くケースもあり、マネージャー以上のポジションを狙う方に最適です。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系コンサルへの転職に圧倒的な実績。ケース面接対策や英語面接のサポートが手厚く、アクセンチュアを含む大手コンサルファームへの転職に強みがあります。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "IT・コンサル業界の求人が豊富。アクセンチュアだけでなく競合他社も含めた比較検討が可能で、エージェントと求人サイトの併用で効率的に情報収集できます。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "若手〜ミドル層のコンサル転職をサポート。コンサル業界未経験からの転職支援実績もあり、初めてのコンサル転職で丁寧なサポートを受けたい方におすすめです。",
            },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link
                  href={agent.href}
                  className="text-teal text-sm hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2>アクセンチュア転職 よくある質問</h2>
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
            アクセンチュア転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントを活用して、万全の準備で選考に臨みましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連企業ガイド */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の企業の転職ガイド</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Google転職ガイド
            </Link>
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Amazon転職ガイド
            </Link>
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              任天堂転職ガイド
            </Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サイバーエージェント転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
