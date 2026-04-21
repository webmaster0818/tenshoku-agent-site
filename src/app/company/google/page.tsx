import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Google（グーグル）に転職するには？年収・面接対策・おすすめエージェント",
  description:
    "Google（グーグル）への転職を徹底解説。転職難易度S級の選考フロー、平均年収1,200〜1,800万円の実態、書類選考からオンサイト面接4〜5回の対策ポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "Google（グーグル）に転職するには？年収・面接対策・おすすめエージェント",
    description:
      "Google転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "Googleの中途採用は未経験でも応募できますか？",
    a: "職種によります。エンジニア職はCS学位または同等の実務経験が求められます。ビジネス職やマーケティング職は業界経験があれば応募可能ですが、いずれも高い専門性が必要です。",
  },
  {
    q: "Googleの面接は何回ありますか？",
    a: "一般的に電話スクリーニング1回、オンサイト面接4〜5回の計5〜6回です。オンサイト面接では異なる面接官がそれぞれ別の観点から評価します。",
  },
  {
    q: "Googleの面接で英語は必須ですか？",
    a: "はい、基本的に英語力は必須です。面接自体が英語で行われることが多く、業務でも英語を日常的に使用します。TOEIC900点以上またはビジネスレベルの英語力が目安です。",
  },
  {
    q: "Googleの年収はどのくらいですか？",
    a: "職種・レベルにより異なりますが、中途入社の場合は年収1,200〜1,800万円程度が一般的です。これに加えてRSU（譲渡制限付き株式）やボーナスが支給されるため、トータルコンペンセーションはさらに高くなります。",
  },
  {
    q: "Googleに転職するためにおすすめの資格はありますか？",
    a: "特定の資格は必須ではありませんが、エンジニア職ではGoogle Cloud認定資格、データサイエンス関連の資格が評価されます。それ以上に実務経験とプロジェクト実績が重視されます。",
  },
  {
    q: "Googleの選考期間はどのくらいですか？",
    a: "応募から内定まで通常1〜2ヶ月程度です。Hiring Committeeによる審査プロセスがあるため、他社より時間がかかる傾向があります。",
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

export default function GoogleCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "Google（グーグル）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">S</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              Google（グーグル）に転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Googleは世界最大の検索エンジン企業であり、転職先として最も人気の高い企業のひとつです。
            中途採用の難易度は極めて高いものの、年収・福利厚生・キャリア価値は最高水準です。
            本記事では、Google転職の選考フロー・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>Google（グーグル）の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "グーグル合同会社（Google LLC）" },
                { label: "本社", value: "東京都渋谷区（日本法人） / カリフォルニア州マウンテンビュー（グローバル本社）" },
                { label: "設立", value: "1998年（グローバル） / 2001年（日本法人）" },
                { label: "従業員数", value: "約180,000人（グローバル） / 約2,000人（日本）" },
                { label: "平均年収", value: "1,200〜1,800万円（+RSU・ボーナス）" },
                { label: "事業内容", value: "検索エンジン、広告、クラウド（Google Cloud）、Android、YouTube、AI/ML" },
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
        <h2>Googleの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">S級</span>
            <p className="text-text-secondary text-sm">
              国内外トップクラスの難易度。書類通過率は非常に低く、面接も高度な技術力・思考力が求められます。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募者数が非常に多く、書類選考の通過率は約1%以下とも言われる</li>
            <li>技術職はコーディング面接・システムデザイン面接が必須</li>
            <li>全職種で「Googleyness（Googleらしさ）」が評価される</li>
            <li>Hiring Committeeによる合議制の採用判断</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>Googleの選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "レジュメ（英語）を提出。過去の実績・スキル・学歴が総合的に評価されます。リクルーターからの連絡を受けるケースも多いです。",
            },
            {
              step: 2,
              title: "電話/ビデオ面接",
              desc: "リクルーターとの電話スクリーニングの後、技術職はコーディング問題を含む技術面接が行われます。ビジネス職はケーススタディやビヘイビアル面接です。",
            },
            {
              step: 3,
              title: "オンサイト面接（4〜5回）",
              desc: "Google オフィスで4〜5名の面接官と各45分程度の面接を実施。技術力、問題解決能力、リーダーシップ、Googleyness（Google文化との適合性）が評価されます。",
            },
            {
              step: 4,
              title: "Hiring Committee審査",
              desc: "面接官のフィードバックをもとにHiring Committeeが合否を判断。面接官個人ではなく委員会による合議制で公平性を確保しています。",
            },
            {
              step: 5,
              title: "オファー・条件交渉",
              desc: "Hiring Committee通過後、報酬パッケージ（基本給+RSU+ボーナス）の提示・交渉が行われます。",
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
        <h2>Google転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "コーディング力の強化",
              desc: "LeetCode等でアルゴリズム・データ構造の問題を毎日練習。Medium〜Hard難易度を中心に200問以上は解いておきたいところです。",
            },
            {
              title: "英語力の向上",
              desc: "面接は英語で行われることが多いため、技術用語を英語で説明できるレベルが必要です。英語での模擬面接練習が効果的です。",
            },
            {
              title: "行動面接（Behavioral Interview）対策",
              desc: "STARメソッド（Situation, Task, Action, Result）で過去の経験を構造的に説明する練習を重ねましょう。リーダーシップ経験が重要視されます。",
            },
            {
              title: "Googleyness（Google文化の理解）",
              desc: "チームワーク、曖昧さへの対処力、学習意欲など、Google独自の文化・価値観を理解し、自分の経験と紐づけて語れるようにしましょう。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>Google転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手で求人数No.1。外資系IT企業への転職支援実績が豊富で、Google出身のアドバイザーが在籍している場合もあります。幅広い求人から比較検討したい方に最適です。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化したスカウト型サービス。年収1,000万円以上のポジションが充実しており、Googleのリクルーターから直接スカウトが届くこともあります。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系・グローバル企業への転職に圧倒的な強み。英語面接対策や外資系特有の選考プロセスへのサポートが手厚く、Google転職を目指す方に特におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "豊富な求人数と手厚いサポートが魅力。IT・Web業界の求人に強く、転職サイトとエージェントサービスを併用できるため、幅広く情報収集したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代のIT業界転職に強み。初めての外資系転職でも丁寧にサポートしてくれるため、Google転職が初めてのチャレンジという方におすすめです。",
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
        <h2>Google転職 よくある質問</h2>
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
            Google転職を成功させるために
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
          </div>
        </div>
      </article>
    </>
  );
}
