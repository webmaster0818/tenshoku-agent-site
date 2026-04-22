import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "トヨタ自動車に転職するには？年収・面接対策・おすすめエージェント",
  description:
    "トヨタ自動車への転職を徹底解説。転職難易度S級の選考フロー、平均年収約895万円の実態、書類選考から面接2〜3回の対策ポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "トヨタ自動車に転職するには？年収・面接対策・おすすめエージェント",
    description:
      "トヨタ転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "トヨタ自動車の中途採用は未経験でも応募できますか？",
    a: "職種によります。技術系職種は自動車業界やモノづくり領域での実務経験が求められることが多いですが、IT・ソフトウェア系やビジネス職では異業種からの転職実績もあります。ただし、いずれも高い専門性と実績が必要です。",
  },
  {
    q: "トヨタ自動車の面接は何回ありますか？",
    a: "一般的に書類選考→適性検査→面接2〜3回の流れです。面接ではトヨタウェイへの理解度や改善提案力が重点的に評価されます。",
  },
  {
    q: "トヨタ自動車の面接で英語は必要ですか？",
    a: "必須ではありませんが、TOEIC600点以上が推奨されています。グローバルポジションや海外事業部門ではビジネスレベルの英語力が求められます。",
  },
  {
    q: "トヨタ自動車の年収はどのくらいですか？",
    a: "平均年収は約895万円です。管理職になると1,000万円を超えるケースも多く、福利厚生も充実しています。住宅手当や家族手当、社員寮なども整備されています。",
  },
  {
    q: "トヨタ自動車に転職するためにおすすめの資格はありますか？",
    a: "技術系では自動車関連の資格（自動車整備士など）やCAD関連資格が評価されます。IT系ではAWS認定やAI関連資格も有利です。TOEIC600点以上の英語力も推奨されています。",
  },
  {
    q: "トヨタ自動車の選考期間はどのくらいですか？",
    a: "応募から内定まで通常1〜2ヶ月程度です。書類選考に1〜2週間、面接が2〜3回あるため、スケジュールに余裕を持って臨むことをおすすめします。",
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

export default function ToyotaCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "トヨタ自動車" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">S</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              トヨタ自動車に転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            トヨタ自動車は世界最大級の自動車メーカーであり、日本を代表するグローバル企業です。
            中途採用の難易度は非常に高いものの、年収・福利厚生・キャリア価値はトップクラスです。
            本記事では、トヨタ転職の選考フロー・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>トヨタ自動車の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "トヨタ自動車株式会社（Toyota Motor Corporation）" },
                { label: "本社", value: "愛知県豊田市トヨタ町1番地" },
                { label: "設立", value: "1937年8月28日" },
                { label: "従業員数", value: "約375,000人（連結）" },
                { label: "平均年収", value: "約895万円" },
                { label: "事業内容", value: "自動車の開発・製造・販売、モビリティサービス、金融事業、CASE（Connected・Autonomous・Shared・Electric）領域" },
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
        <h2>トヨタ自動車の転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">S級</span>
            <p className="text-text-secondary text-sm">
              国内最高レベルの難易度。中途採用比率は約45%と増加傾向にあるものの、求められるスキル・経験のハードルは非常に高いです。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用比率は約45%で、即戦力人材を積極的に採用</li>
            <li>自動車業界やモノづくり領域での実務経験が重視される</li>
            <li>「トヨタウェイ」への共感・理解が選考で重要視される</li>
            <li>CASE領域（コネクテッド・自動運転・シェアリング・電動化）の知見がある人材は特に歓迎</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>トヨタ自動車の選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "履歴書・職務経歴書を提出。過去の実績やスキル、トヨタで実現したいことが評価されます。転職エージェント経由での推薦が有効です。",
            },
            {
              step: 2,
              title: "適性検査",
              desc: "SPIや独自の適性検査が実施されます。論理的思考力やパーソナリティの適合性を確認する目的です。",
            },
            {
              step: 3,
              title: "面接（2〜3回）",
              desc: "現場マネージャーや部門長との面接が2〜3回行われます。「トヨタウェイ」への理解、改善提案力、チームワークが重点的に評価されます。",
            },
            {
              step: 4,
              title: "最終面接・内定",
              desc: "役員クラスとの最終面接を経て、内定・条件提示となります。年収や配属先の交渉もこの段階で行われます。",
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
        <h2>トヨタ転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "トヨタウェイの深い理解",
              desc: "「カイゼン」「現地現物」「チャレンジ」「チームワーク」「リスペクト」の5つの価値観を理解し、自身の経験と紐づけて語れるようにしましょう。",
            },
            {
              title: "改善提案力のアピール",
              desc: "過去の業務で行った改善活動の具体例を準備しましょう。数値で成果を示せると説得力が増します。PDCAサイクルを回した経験は高く評価されます。",
            },
            {
              title: "モビリティへの関心・ビジョン",
              desc: "CASE領域やカーボンニュートラルなど、トヨタが注力する分野への関心と自分なりのビジョンを語れるようにしましょう。",
            },
            {
              title: "チームワークとリーダーシップ",
              desc: "トヨタは「全員参加の経営」を重視します。チームで成果を出した経験や、周囲を巻き込んだプロジェクト推進の事例を準備しましょう。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>トヨタ転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手で求人数No.1。製造業・自動車業界への転職支援実績が豊富で、トヨタを含む大手メーカーとの太いパイプがあります。非公開求人も多数保有しています。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化したスカウト型サービス。年収800万円以上のポジションが充実しており、トヨタの管理職・専門職ポジションへのスカウトが届くこともあります。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系・グローバル企業への転職に強み。トヨタのグローバルポジションや海外事業部門への転職を目指す方に特におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "豊富な求人数と手厚いサポートが魅力。製造業・メーカー系の求人に強く、転職サイトとエージェントサービスを併用できるため、幅広く情報収集したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職に強み。メーカー系企業への転職サポートが充実しており、初めての転職でも丁寧にサポートしてくれます。",
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
        <h2>トヨタ転職 よくある質問</h2>
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
            トヨタ転職を成功させるために
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
