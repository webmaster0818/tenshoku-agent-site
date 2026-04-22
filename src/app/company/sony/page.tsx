import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ソニーに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "ソニーへの転職を徹底解説。転職難易度S級の選考フロー、平均年収約1,085万円の実態、書類選考から面接2〜3回＋人事面接の対策ポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    title: "ソニーに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "ソニー転職の難易度・年収・面接対策・おすすめエージェントを網羅的に解説。",
  },
};

const faqData = [
  {
    q: "ソニーの中途採用は未経験でも応募できますか？",
    a: "職種によります。エンジニア職やクリエイティブ職は専門分野での実務経験が必須です。ビジネス職でも関連業界での経験が求められます。ただし、異業種からの転職実績もあり、ポテンシャルが評価されるケースもあります。",
  },
  {
    q: "ソニーの面接は何回ありますか？",
    a: "一般的に書類選考→適性検査→面接2〜3回→人事面接の流れです。現場マネージャー・部門長面接に加え、最終段階で人事面接が行われるのがソニーの特徴です。",
  },
  {
    q: "ソニーの面接で英語は必要ですか？",
    a: "グローバルポジションでは英語力が必須です。国内ポジションでも英語力は歓迎されます。特にエンジニア職では英語の技術文書を読む機会が多いため、ビジネスレベルの英語力があると有利です。",
  },
  {
    q: "ソニーの年収はどのくらいですか？",
    a: "平均年収は約1,085万円で、国内メーカーの中でもトップクラスです。2022年度に「ジョブグレード制」を導入し、役割・成果に応じた報酬体系になっています。管理職では1,500万円以上も珍しくありません。",
  },
  {
    q: "ソニーに転職するためにおすすめの資格はありますか？",
    a: "特定の資格は必須ではありませんが、エンジニア職ではAWS認定やAI関連資格、半導体・映像関連の専門資格が評価されます。クリエイティブ職ではポートフォリオの質が最も重要です。",
  },
  {
    q: "ソニーの選考期間はどのくらいですか？",
    a: "応募から内定まで通常3週間〜2ヶ月程度です。面接回数が多いため、スケジュールに余裕を持って臨むことをおすすめします。",
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

export default function SonyCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "ソニー" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">S</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              ソニーに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            ソニーはエンタメとテクノロジーを融合した世界的複合企業であり、転職先として非常に人気の高い企業です。
            中途採用の難易度は極めて高いものの、年収・キャリア成長・働きがいは最高水準です。
            本記事では、ソニー転職の選考フロー・年収・面接対策・おすすめエージェントを詳しく解説します。
          </p>
        </div>

        {/* 会社概要 */}
        <h2>ソニーの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ソニーグループ株式会社（Sony Group Corporation）" },
                { label: "本社", value: "東京都港区港南1-7-1" },
                { label: "設立", value: "1946年5月7日" },
                { label: "従業員数", value: "約113,000人（連結）" },
                { label: "平均年収", value: "約1,085万円" },
                { label: "事業内容", value: "ゲーム（PlayStation）、音楽、映画、エレクトロニクス、半導体（イメージセンサー）、金融" },
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
        <h2>ソニーの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-teal">S級</span>
            <p className="text-text-secondary text-sm">
              国内トップクラスの難易度。中途採用比率は約37%で、専門分野での高い実績と即戦力性が求められます。
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用比率は約37%で、各分野のスペシャリストを厳選採用</li>
            <li>専門分野での突出した実績・スキルが必須</li>
            <li>「感動」を生み出すイノベーション志向が重視される</li>
            <li>多角的な事業展開により、幅広い専門性の人材を求めている</li>
          </ul>
        </div>

        {/* 選考フロー */}
        <h2>ソニーの選考フロー</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "書類選考",
              desc: "履歴書・職務経歴書を提出。専門分野での実績やソニーで実現したいビジョンが評価されます。クリエイティブ職はポートフォリオの提出が求められます。",
            },
            {
              step: 2,
              title: "適性検査",
              desc: "SPIや独自の適性検査が実施されます。論理的思考力や創造性に加え、ソニーのカルチャーとの適合性が確認されます。",
            },
            {
              step: 3,
              title: "面接（2〜3回）",
              desc: "現場マネージャーや部門長との面接が2〜3回行われます。技術的な深掘りに加え、「なぜソニーか」「何を実現したいか」といったビジョンが問われます。",
            },
            {
              step: 4,
              title: "人事面接",
              desc: "最終段階で人事部門による面接が行われます。カルチャーフィットや長期的なキャリアビジョン、ソニーの価値観との合致が確認されます。",
            },
            {
              step: 5,
              title: "内定・条件交渉",
              desc: "人事面接通過後、年収・配属先・入社日等の条件交渉が行われます。ジョブグレード制に基づく報酬提示となります。",
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
        <h2>ソニー転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "「感動」を生むビジョン",
              desc: "ソニーのパーパスは「クリエイティビティとテクノロジーの力で、世界を感動で満たす」です。自分がソニーでどんな感動を生み出したいか、具体的なビジョンを語れるようにしましょう。",
            },
            {
              title: "技術×クリエイティブの融合",
              desc: "ソニーは技術とクリエイティビティの融合を重視します。技術者でもクリエイティブな発想力、クリエイターでも技術への理解を示せると評価が高まります。",
            },
            {
              title: "専門分野の深い実績",
              desc: "各事業領域で即戦力となる専門性が求められます。過去のプロジェクトで出した具体的な成果を、数値を交えて説明できるよう準備しましょう。",
            },
            {
              title: "多様性・グローバル視点",
              desc: "ソニーは多様性を重視するグローバル企業です。異文化環境での経験や、多様なメンバーと協働した実績をアピールしましょう。英語力も評価ポイントです。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2>ソニー転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "業界最大手で求人数No.1。大手メーカー・IT企業への転職支援実績が豊富で、ソニーグループ各社の求人を幅広く保有しています。非公開求人も多数あります。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス転職に特化したスカウト型サービス。年収1,000万円以上のポジションが充実しており、ソニーの専門職・管理職ポジションへのスカウトが届くこともあります。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系・グローバル企業への転職に圧倒的な強み。ソニーのグローバルポジションやエンジニア職への転職を目指す方に特におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "豊富な求人数と手厚いサポートが魅力。エレクトロニクス・IT業界の求人に強く、転職サイトとエージェントサービスを併用できるため、幅広く情報収集したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職に強み。大手メーカーやIT企業への転職サポートが充実しており、初めてのソニーへの挑戦という方にもおすすめです。",
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
        <h2>ソニー転職 よくある質問</h2>
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
            ソニー転職を成功させるために
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
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
