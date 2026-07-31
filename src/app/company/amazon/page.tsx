import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Amazon（アマゾン）に転職するには？年収・面接対策・おすすめエージェント",
  description:
    "Amazon（アマゾン）への転職を徹底解説。転職難易度S級の選考フロー、平均年収1,000〜1,500万円+RSUの実態、Leadership Principles面接対策、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "Amazon（アマゾン）に転職するには？年収・面接対策・おすすめエージェント",
    description:
      "Amazon転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "AmazonのLeadership Principlesとは何ですか？",
    a: "AmazonのLeadership Principles（LP）は、全社員に求められる16の行動指針です。「Customer Obsession（顧客へのこだわり）」「Ownership（オーナーシップ）」「Invent and Simplify（創造と簡略化）」などがあり、面接では全ての質問がLPに基づいて設計されています。",
  },
  {
    q: "Amazonの面接は何回ありますか？",
    a: "一般的に電話スクリーニング1回、ループ面接（オンサイト）4〜6回の計5〜7回です。ループ面接では各面接官がそれぞれ異なるLeadership Principlesを評価します。",
  },
  {
    q: "Amazonの年収にはRSUが含まれますか？",
    a: "はい、AmazonのTotal Compensationは基本給+サインオンボーナス+RSU（譲渡制限付き株式）で構成されます。RSUは4年間のべスティングスケジュール（1年目5%、2年目15%、3年目40%、4年目40%）で付与されるのが特徴です。",
  },
  {
    q: "Amazon JapanとAWS Japanは同じ会社ですか？",
    a: "どちらもAmazon.comの日本法人ですが、事業部が異なります。EC・物流関連はアマゾンジャパン合同会社、クラウドサービスはAWSジャパン合同会社として運営されており、採用プロセスも別々に行われます。",
  },
  {
    q: "Amazonに転職するために英語力は必須ですか？",
    a: "ポジションによります。AWS JapanやGlobal Teamのポジションは英語面接が実施され、ビジネスレベルの英語力が必須です。一方、日本市場向けのポジションでは日本語のみで完結する場合もあります。",
  },
  {
    q: "Amazonの「Bar Raiser」とは何ですか？",
    a: "Bar Raiserは、採用基準を維持するために面接に参加する特別な面接官です。採用チームとは別部門から選ばれ、候補者が既存社員の上位50%以上の水準かどうかを客観的に判断する役割を担っています。",
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

export default function AmazonCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "Amazon（アマゾン）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">S</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              Amazon（アマゾン）に転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Amazonは、EC・AWS（クラウド）・Prime Video・Alexa・物流など多角的な事業を展開する世界最大級のテクノロジー企業です。
            16のLeadership Principlesを基盤とした独自の企業文化と、高い報酬パッケージが特徴です。
            本記事では、Amazon転職の選考フロー・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>Amazon（アマゾン）の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "アマゾンジャパン合同会社 / アマゾン ウェブ サービス ジャパン合同会社" },
                { label: "本社", value: "東京都目黒区（日本法人） / ワシントン州シアトル（グローバル本社）" },
                { label: "設立", value: "1994年（グローバル） / 2000年（日本法人）" },
                { label: "従業員数", value: "約1,540,000人（グローバル） / 約10,000人以上（日本）" },
                { label: "平均年収", value: "1,000〜1,500万円（+RSU）※エンジニア職の総報酬中央値は約1,700万円（levels.fyi・東京・RSU込み参考値）" },
                { label: "事業内容", value: "EC（Amazon.co.jp）、クラウド（AWS）、Prime Video、Alexa/デバイス、物流、広告" },
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
        <h2>Amazonの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">S級</span>
            <p className="text-text-secondary text-sm">
              世界トップクラスの難易度。Leadership Principlesに基づく独特の面接プロセスが最大の関門です。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>全ての面接がLeadership Principles（LP）に基づいて設計されている</li>
            <li>Bar Raiser（採用基準の番人）が面接に参加し、高い基準を維持</li>
            <li>技術職ではSystem Design面接やコーディング面接が必須</li>
            <li>ループ面接で4〜6名の面接官全員の合意が必要</li>
          </ul>
        </div>

        {/* 中途採用の状況 */}
        <h2>Amazonの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            Amazonの中途採用は、公式採用ポータル
            <a
              href="https://www.amazon.jobs/jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              amazon.jobs
            </a>
            で求人を検索して応募する方式です。公式検索では日本国内の求人が1,006件掲載されていました（2026年7月31日確認時点）。主要な募集カテゴリは、公式表記でFulfillment & Operations Management、Sales, Advertising, & Account Management、Solutions Architect、Software Developmentなど。勤務地は東京が最多で、大阪・名古屋・尼崎・堺・小田原のほか、全国のフルフィルメントセンター・物流拠点（埼玉・千葉・岐阜・奈良・岡山・佐賀など）でも募集があります。
          </p>
          <p className="text-sm text-text-secondary mb-4">
            選考プロセスは公式の
            <a
              href="https://www.amazon.jobs/content/jp/how-we-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              採用プロセスページ
            </a>
            で「オンライン申請」→「アセスメント」→「電話スクリーニング」→「インタビューループ」と案内されており（職種により異なる旨の記載あり）、応募状況はamazon.jobsのマイページや専用アプリで確認できます。
          </p>
          <p className="text-xs text-text-muted">
            ※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <h2>Amazonの選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※公式採用ページ記載の流れ（2026年7月31日確認）。職種により異なる旨の公式記載があります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "オンライン申請",
              desc: "公式採用ポータルamazon.jobsで職種を検索し、オンラインで応募します。応募状況はマイページで確認でき、専用アプリ（App Store/Google Play）も提供されています。",
            },
            {
              step: 2,
              title: "アセスメント",
              desc: "応募後、アセスメントが実施されます。内容や有無は職種により異なる旨が公式に記載されています。",
            },
            {
              step: 3,
              title: "電話スクリーニング",
              desc: "電話でのスクリーニングが行われます。公式サイトには面接対策コンテンツ「面接の秘訣」やLeadership Principlesの説明ページが用意されています。",
            },
            {
              step: 4,
              title: "インタビューループ",
              desc: "複数回の面接からなるインタビューループが実施されます。選考ステップの詳細は職種により異なるため、応募前に公式採用プロセスページをご確認ください。",
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
        <h2>Amazon転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "Leadership Principlesの徹底理解",
              desc: "16のLPを暗記するだけでなく、各LPに対応する自分の経験エピソードを2〜3個ずつ用意しましょう。「Customer Obsession」「Ownership」「Dive Deep」は特に頻出です。",
            },
            {
              title: "STARメソッドでの回答準備",
              desc: "AmazonのBehavioral面接ではSTAR（Situation, Task, Action, Result）形式での回答が必須です。具体的な数字や成果を含めた回答を準備しましょう。",
            },
            {
              title: "技術面接の対策（エンジニア職）",
              desc: "System Design面接ではスケーラブルなシステム設計を議論します。コーディング面接ではLeetCode Medium〜Hard相当の問題が出題されます。",
            },
            {
              title: "「メカニズム」の理解",
              desc: "Amazonでは個人の努力ではなく「仕組み（メカニズム）」で問題を解決する文化があります。過去に仕組みを作って継続的な改善を実現した経験を準備しましょう。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>Amazon転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手でAmazonへの転職支援実績が豊富。Amazon特有のLP面接対策や、ポジション選びのアドバイスが的確です。EC・AWS両方の求人を扱っています。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化。Amazonのリクルーターやヘッドハンターから直接スカウトが届くことがあり、シニアポジションを狙う方に最適です。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系企業への転職に圧倒的な強み。Amazon特有のLP面接や英語面接の対策サポートが充実しており、外資系転職のプロフェッショナルが担当してくれます。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "IT・Web業界の求人数が豊富。Amazonだけでなく競合他社（Google、Microsoft等）の求人も比較検討でき、幅広い選択肢から最適なポジションを見つけられます。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代のIT業界転職に強み。初めての外資系企業への転職でも、英語レジュメの作成サポートや面接対策を丁寧に行ってくれます。",
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
        <h2>Amazon転職 よくある質問</h2>
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
            Amazon転職を成功させるために
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
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
