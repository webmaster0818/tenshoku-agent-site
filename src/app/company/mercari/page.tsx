import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メルカリに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "メルカリへの転職を徹底解説。転職難易度A級の選考フロー、平均年収約970万円の実態、書類選考から面接2〜3回の対策ポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "メルカリに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "メルカリ転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "メルカリの中途採用は未経験でも応募できますか？",
    a: "メルカリは中途採用比率が85.6%と非常に高く、即戦力を求めています。未経験からの転職は難しいですが、関連分野での実務経験があれば異業種からの転職も可能です。特にIT・テック業界での経験が重視されます。",
  },
  {
    q: "メルカリの面接は何回ありますか？",
    a: "一般的に書類選考→面接2〜3回の流れです。カルチャーフィット面接が重視され、メルカリのバリュー（Go Bold、All for One、Be a Pro）への共感が問われます。",
  },
  {
    q: "メルカリの面接で英語は必要ですか？",
    a: "必須ではありませんが推奨されています。メルカリは社内公用語を英語化しているチームもあり、外国籍社員も多いため、英語でのコミュニケーション能力があると有利です。",
  },
  {
    q: "メルカリの年収はどのくらいですか？",
    a: "平均年収は約970万円です。メルカリは実力主義の報酬体系で、成果に応じたインセンティブやRSU（譲渡制限付き株式）も支給されます。エンジニア職では1,200万円以上のケースもあります。",
  },
  {
    q: "メルカリに転職するためにおすすめの資格はありますか？",
    a: "特定の資格は必須ではありません。エンジニア職ではプログラミングスキル（Go、Microservices等）やプロダクト開発経験が重要です。ビジネス職ではマーケティングやデータ分析の実績が評価されます。",
  },
  {
    q: "メルカリの選考期間はどのくらいですか？",
    a: "応募から内定まで通常2〜4週間程度です。スタートアップ文化を持つため、大手企業に比べて選考スピードが速いのが特徴です。",
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

export default function MercariCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "メルカリ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">A</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              メルカリに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            メルカリは日本最大のフリマアプリを運営する、国内有数のテック企業です。
            中途採用比率85.6%と中途採用に積極的ですが、即戦力の専門人材が求められるため難易度は高いです。
            本記事では、メルカリ転職の選考フロー・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>メルカリの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社メルカリ（Mercari, Inc.）" },
                { label: "本社", value: "東京都港区六本木6-10-1 六本木ヒルズ森タワー" },
                { label: "設立", value: "2013年2月1日" },
                { label: "従業員数", value: "約2,200人（連結）" },
                { label: "平均年収", value: "約970万円" },
                { label: "事業内容", value: "フリマアプリ「メルカリ」、スマホ決済「メルペイ」、暗号資産「メルコイン」、米国版メルカリ" },
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
        <h2>メルカリの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">A級</span>
            <p className="text-text-secondary text-sm">
              高い難易度。中途採用比率85.6%と中途採用に積極的ですが、即戦力としての専門性とカルチャーフィットが強く求められます。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用比率85.6%で、ほぼ全員が中途入社の即戦力集団</li>
            <li>「Go Bold」「All for One」「Be a Pro」の3つのバリューへの共感が必須</li>
            <li>プロダクト志向が強く、ユーザー価値を考え抜ける人材が求められる</li>
            <li>多国籍な環境で、英語でのコミュニケーション力も評価ポイント</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>メルカリの選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "履歴書・職務経歴書を提出。専門分野での具体的な実績と、メルカリで実現したいことが評価されます。エンジニア職はGitHubやポートフォリオの提出も推奨されます。",
            },
            {
              step: 2,
              title: "面接（2〜3回）",
              desc: "現場マネージャーやチームメンバーとの面接が2〜3回行われます。スキルの深掘りに加え、カルチャーフィット（バリューへの共感）が重点的に評価されます。エンジニア職はコーディングテストが含まれることもあります。",
            },
            {
              step: 3,
              title: "カルチャーフィット面接",
              desc: "メルカリのバリュー（Go Bold・All for One・Be a Pro）との適合性を確認する面接です。過去の行動事例をもとに、バリューを体現できる人材かどうかが判断されます。",
            },
            {
              step: 4,
              title: "内定・条件交渉",
              desc: "面接通過後、年収（基本給+RSU）・ポジション・入社日等の条件交渉が行われます。メルカリは実力主義のため、前職の年収ではなくスキルに応じた報酬が提示されます。",
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
        <h2>メルカリ転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "バリューの体現エピソード",
              desc: "「Go Bold（大胆にやろう）」「All for One（全ては成功のために）」「Be a Pro（プロフェッショナルであれ）」を自分の経験と紐づけて具体的に語れるようにしましょう。",
            },
            {
              title: "「循環型社会」への共感",
              desc: "メルカリのミッションは「あらゆる価値を循環させ、あらゆる人の可能性を広げる」です。サステナビリティや循環型経済への関心・ビジョンを語れるようにしましょう。",
            },
            {
              title: "プロダクト志向のアピール",
              desc: "メルカリはプロダクト中心の組織です。ユーザー視点でプロダクト改善を考え、データドリブンに意思決定した経験を具体的に示しましょう。",
            },
            {
              title: "多様な環境での協働経験",
              desc: "メルカリは約50カ国以上の社員が在籍するグローバルな環境です。多様なバックグラウンドのメンバーと協働した経験や、英語でのコミュニケーション力をアピールしましょう。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>メルカリ転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手で求人数No.1。IT・Web業界への転職支援実績が豊富で、メルカリを含む有力テック企業の非公開求人も多数保有しています。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化したスカウト型サービス。年収800万円以上のテック企業ポジションが充実しており、メルカリの採用担当から直接スカウトが届くこともあります。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "グローバル企業への転職に強み。メルカリのようなグローバルテック企業への転職を目指す方に、英語面接対策を含めた手厚いサポートが受けられます。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "豊富な求人数と手厚いサポートが魅力。IT・Web業界の求人に強く、メガベンチャーへの転職を幅広く検討したい方に最適です。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代のIT業界転職に強み。メガベンチャーへの転職サポートが充実しており、初めてのテック企業への転職という方にもおすすめです。",
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
        <h2>メルカリ転職 よくある質問</h2>
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
            メルカリ転職を成功させるために
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
            <Link href="/company/accenture/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              アクセンチュア転職ガイド
            </Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サイバーエージェント転職ガイド
            </Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トヨタ転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
