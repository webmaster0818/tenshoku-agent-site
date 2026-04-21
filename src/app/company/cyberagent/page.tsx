import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "サイバーエージェントに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "サイバーエージェントへの転職を徹底解説。転職難易度A級の選考フロー、平均年収約800万円の実態、AbemaTV・広告事業の魅力、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "サイバーエージェントに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "サイバーエージェント転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "サイバーエージェントの中途採用比率はどのくらいですか？",
    a: "サイバーエージェントの中途採用比率は約40%です。新卒採用を重視する企業文化がありますが、即戦力となる中途人材も積極的に採用しています。",
  },
  {
    q: "サイバーエージェントの面接は何回ありますか？",
    a: "一般的に2〜3回です。一次面接（現場マネージャー）、二次面接（事業部長クラス）、最終面接（役員クラス）の流れが基本ですが、職種やポジションによって変わることがあります。",
  },
  {
    q: "サイバーエージェントの年収は高いですか？",
    a: "有価証券報告書によると平均年収は約800万円です。IT・インターネット業界ではトップクラスの水準で、業績連動のインセンティブや株式報酬制度もあります。",
  },
  {
    q: "エンジニアとして転職する場合、どのようなスキルが求められますか？",
    a: "Webアプリケーション開発経験（React、Next.js、Go、Python等）が基本です。AbemaTV関連ではストリーミング技術、AI事業部では機械学習の知識も求められます。",
  },
  {
    q: "サイバーエージェントの社風はどのような感じですか？",
    a: "「21世紀を代表する会社を創る」というビジョンのもと、挑戦を奨励する文化が特徴です。若手にも大きな裁量が与えられ、社内異動（キャリチャレ制度）も活発です。",
  },
  {
    q: "サイバーエージェントの勤務地はどこですか？",
    a: "本社は東京都渋谷区のAbema Towers（渋谷スクランブルスクエア）です。大阪・名古屋・福岡にも拠点がありますが、多くのポジションは渋谷本社勤務です。",
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

export default function CyberAgentCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "サイバーエージェント" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">A</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              サイバーエージェントに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            サイバーエージェントは、インターネット広告事業・メディア事業（AbemaTV）・ゲーム事業を展開する国内有数のIT企業です。
            「21世紀を代表する会社を創る」をビジョンに掲げ、挑戦を重視する社風で知られています。
            本記事では、サイバーエージェントへの転職難易度・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>サイバーエージェントの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社サイバーエージェント（CyberAgent, Inc.）" },
                { label: "本社", value: "東京都渋谷区宇田川町40-1 Abema Towers" },
                { label: "設立", value: "1998年3月" },
                { label: "従業員数", value: "約7,000人（連結、2024年9月期）" },
                { label: "平均年収", value: "約800万円（2024年9月期有価証券報告書）" },
                { label: "事業内容", value: "インターネット広告事業、メディア事業（AbemaTV、Ameba）、ゲーム事業（Cygames等）、AI事業" },
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
        <h2>サイバーエージェントの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">A級</span>
            <p className="text-text-secondary text-sm">
              人気IT企業として高い競争率。特にエンジニア・クリエイティブ職は高スキルが求められます。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用比率は約40%で、即戦力人材を積極採用</li>
            <li>「素直でいいやつ」の人物像がカルチャーフィットとして重視される</li>
            <li>事業のスピード感に対応できる主体性・当事者意識が必要</li>
            <li>ゲーム事業（Cygames等）は別会社での選考となるケースも</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>サイバーエージェントの選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "履歴書・職務経歴書を提出。エンジニアはGitHubやポートフォリオの提出が推奨されます。転職エージェント経由または公式サイトから応募可能です。",
            },
            {
              step: 2,
              title: "一次面接",
              desc: "現場マネージャーとの面接。これまでの経験・スキルの確認に加え、サイバーエージェントで何を実現したいかが問われます。カジュアル面談が先に設定されることもあります。",
            },
            {
              step: 3,
              title: "二次面接",
              desc: "事業部長クラスとの面接。より深い業務理解やビジョンの共有が求められます。エンジニアの場合、技術課題やコーディングテストが実施される場合もあります。",
            },
            {
              step: 4,
              title: "最終面接",
              desc: "役員クラスとの面接。サイバーエージェントのビジョンへの共感、カルチャーフィット、中長期的なキャリアビジョンが確認されます。",
            },
            {
              step: 5,
              title: "内定・条件交渉",
              desc: "最終面接通過後、条件提示・入社時期の調整が行われます。年収交渉では現年収と市場価値をベースに提示されます。",
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
        <h2>サイバーエージェント転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "挑戦志向・当事者意識のアピール",
              desc: "サイバーエージェントでは「自ら手を挙げて挑戦する姿勢」が重視されます。過去に自ら提案して実行した経験を具体的に準備しましょう。",
            },
            {
              title: "事業理解の深さ",
              desc: "AbemaTV、広告事業、AI事業など多角的な事業を理解し、志望する事業部で自分がどう貢献できるかを明確に語れるようにしましょう。",
            },
            {
              title: "カルチャーフィット",
              desc: "「素直でいいやつ」という採用基準に合致する人物像を理解し、チームで成果を出した経験や素直に学んで成長した経験をアピールしましょう。",
            },
            {
              title: "スピード感への対応力",
              desc: "IT業界特有の変化の速さに対応できることを示しましょう。短期間で成果を出した経験や、環境変化に柔軟に適応した経験が効果的です。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>サイバーエージェント転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手でIT・Web業界への転職支援実績が豊富。サイバーエージェントとの取引実績も長く、非公開求人を紹介してもらえる可能性があります。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化。サイバーエージェントのマネージャー以上のポジションや、グループ会社の幹部候補ポジションが掲載されることもあります。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "ミドル・ハイクラス層に強み。IT・Web業界のマネジメントポジションに精通したコンサルタントが、サイバーエージェントグループ全体の求人を紹介してくれます。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "IT・Web業界の求人が非常に豊富。サイバーエージェントの求人だけでなく、同業他社との比較検討にも最適。エージェントと求人サイトの併用が可能です。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代のIT業界転職に強み。サイバーエージェントが求める若手人材のマッチングに実績があり、面接対策のサポートも手厚いです。",
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
        <h2>サイバーエージェント転職 よくある質問</h2>
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
            サイバーエージェント転職を成功させるために
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
          </div>
        </div>
      </article>
    </>
  );
}
