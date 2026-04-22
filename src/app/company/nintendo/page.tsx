import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "任天堂に転職するには？年収・面接対策・おすすめエージェント",
  description:
    "任天堂への転職を徹底解説。転職難易度S級の選考フロー、平均年収約988万円の実態、求められるスキル・面接対策ポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "任天堂に転職するには？年収・面接対策・おすすめエージェント",
    description:
      "任天堂転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "任天堂の中途採用は行っていますか？",
    a: "はい、任天堂は中途採用を積極的に行っています。公式サイトのキャリア採用ページで募集職種を確認できます。ただし、募集ポジションは限られており、競争率は非常に高いです。",
  },
  {
    q: "任天堂の面接ではどのようなことを聞かれますか？",
    a: "ゲーム業界への理解、任天堂製品に対する知識・情熱、過去のプロジェクト経験、チームワークに関する質問が中心です。「なぜ任天堂なのか」を明確に語れることが重要です。",
  },
  {
    q: "ゲーム業界未経験でも任天堂に転職できますか？",
    a: "ビジネス職（経理、法務、マーケティング等）であれば他業界からの転職実績もあります。ただし、開発職はゲーム開発経験が強く求められる傾向にあります。",
  },
  {
    q: "任天堂の年収は高いですか？",
    a: "有価証券報告書によると平均年収は約988万円（2024年3月期）です。ゲーム業界の中ではトップクラスの水準であり、賞与も業績に応じて高水準が期待できます。",
  },
  {
    q: "任天堂の勤務地はどこですか？",
    a: "本社は京都市南区にあります。東京にも開発拠点（東京開発センター）があり、職種によって勤務地が異なります。転勤の可能性もあるため、応募時に確認が必要です。",
  },
  {
    q: "任天堂の選考にはどのくらいの期間がかかりますか？",
    a: "一般的に1〜2ヶ月程度です。書類選考、筆記試験（職種による）、面接2〜3回を経て内定となります。時期や職種によって前後する場合があります。",
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

export default function NintendoCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "任天堂" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">S</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              任天堂に転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            任天堂は、マリオ・ゼルダ・ポケモンなど世界的なIPを持つゲーム業界のトップ企業です。
            京都に本社を構え、独自の企業文化と高い技術力で世界中のファンを魅了し続けています。
            本記事では、任天堂への転職難易度・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>任天堂の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "任天堂株式会社（Nintendo Co., Ltd.）" },
                { label: "本社", value: "京都府京都市南区上鳥羽鉾立町11-1" },
                { label: "設立", value: "1889年（創業） / 1947年（株式会社設立）" },
                { label: "従業員数", value: "約7,700人（連結、2024年3月期）" },
                { label: "平均年収", value: "約988万円（2024年3月期有価証券報告書）" },
                { label: "事業内容", value: "家庭用ゲーム機・ソフトウェアの開発・製造・販売（Nintendo Switch、ゲームソフト、モバイルアプリ等）" },
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
        <h2>任天堂の転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">S級</span>
            <p className="text-text-secondary text-sm">
              ゲーム業界最高峰の難易度。知名度・人気が極めて高く、応募倍率は非常に高水準です。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用の募集ポジション自体が少なく、競争率が非常に高い</li>
            <li>ゲーム開発経験や専門スキルが求められるポジションが多い</li>
            <li>任天堂のモノづくりの哲学や「独創」の精神への共感が重視される</li>
            <li>京都本社勤務が多く、地理的な制約もある</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>任天堂の選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "履歴書・職務経歴書・ポートフォリオ（開発職の場合）を提出。過去の実績とスキルが評価されます。公式サイトまたは転職エージェント経由で応募できます。",
            },
            {
              step: 2,
              title: "筆記試験・適性検査",
              desc: "職種によっては筆記試験（論理思考・専門知識）や適性検査が実施されます。技術職ではプログラミングテストが課される場合もあります。",
            },
            {
              step: 3,
              title: "一次面接",
              desc: "現場のマネージャーや技術リーダーとの面接。スキル・経験の確認に加え、任天堂で何をしたいか、どう貢献できるかが問われます。",
            },
            {
              step: 4,
              title: "最終面接",
              desc: "役員・部門長クラスとの面接。任天堂への志望理由やカルチャーフィット、長期的なキャリアビジョンが確認されます。",
            },
            {
              step: 5,
              title: "内定・条件提示",
              desc: "最終面接通過後、内定通知と条件提示が行われます。入社時期の調整や条件面の確認を経て、正式に入社となります。",
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
        <h2>任天堂転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "任天堂製品への深い理解",
              desc: "単にゲームが好きだけでなく、任天堂の製品哲学（直感的な操作性、幅広い年齢層へのアプローチ）を理解し、自分の言葉で語れるようにしましょう。",
            },
            {
              title: "ゲーム開発・関連スキルの実績",
              desc: "開発職ではゲーム開発経験（Unity、Unreal Engine、C++等）が必須です。個人制作のゲームやポートフォリオを充実させましょう。",
            },
            {
              title: "クリエイティブな思考力",
              desc: "任天堂では「驚き」を生み出す発想力が重視されます。過去に独自のアイデアで課題を解決した経験を具体的に準備しましょう。",
            },
            {
              title: "チームワーク・コミュニケーション力",
              desc: "ゲーム開発は大規模なチーム作業です。異なる職種のメンバーと円滑に連携した経験をアピールすることが効果的です。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>任天堂転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手で求人数No.1。ゲーム業界への転職支援実績も豊富です。任天堂のような人気企業への推薦力が強く、非公開求人を紹介してもらえる可能性があります。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化。任天堂のようなトップ企業のポジションは、ビズリーチ経由で募集されるケースもあります。スカウトを待ちつつ情報収集できます。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "ミドル・ハイクラスの転職に強み。ゲーム業界のハイポジション求人を扱うことも多く、専門性の高いキャリアアドバイスが受けられます。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "IT・Web・ゲーム業界の求人が充実。エージェントサービスと求人サイトの両方を活用でき、任天堂以外のゲーム企業も含めて幅広く比較検討できます。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職に強み。ゲーム業界専門のアドバイザーが在籍しており、初めてのゲーム業界転職でも安心してサポートを受けられます。",
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
        <h2>任天堂転職 よくある質問</h2>
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
            任天堂転職を成功させるために
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
