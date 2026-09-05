import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "豊田通商への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "豊田通商（証券コード8015）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,421万円（2026年3月期・有報／提出会社）。トヨタグループ唯一の商社のキャリア採用窓口・選考の考え方をまとめました。",
  alternates: { canonical: "/company/toyota-tsusho/" },
  openGraph: {
    title: "豊田通商への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "豊田通商（8015）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "豊田通商の平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月5日確認）によると、平均年間給与は約1,421万円（2026年3月期・提出会社単体）です。1,262万円（2024年3月期）→1,320万円（2025年3月期）→1,421万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "豊田通商は中途採用を行っていますか？",
    a: "はい。公式サイトの公式採用サイト(キャリア採用)（www.toyota-tsusho-recruit.com/career/）でキャリア採用の情報を確認できます（2026年9月5日確認）。",
  },
  {
    q: "豊田通商はどんな会社ですか？",
    a: "トヨタグループ唯一の商社。自動車バリューチェーンとアフリカ事業に強みを持つ総合商社です。本社は愛知県名古屋市・東京都にあります。",
  },
  {
    q: "豊田通商の平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月5日確認）によると、平均勤続年数は16.7年、平均年齢は43.0歳（2026年3月期・提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "豊田通商への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-09-05",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/toyota-tsusho/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "豊田通商" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            豊田通商への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            豊田通商（証券コード8015）は、トヨタグループ唯一の商社。自動車バリューチェーンとアフリカ事業に強みを持つ総合商社です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：豊田通商転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,421万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年9月5日確認）。提出会社単体の全従業員平均。</li>
            <li>1,262万円（2024年3月期）→1,320万円（2025年3月期）→1,421万円（2026年3月期）と推移（2年連続で大きく上昇(計159万円)）。</li>
            <li>キャリア採用は公式採用サイト(キャリア採用)で確認可能（2026年9月5日確認）。</li>
            <li>トヨタグループの商社として5大商社に次ぐ規模です。2年で計159万円の大幅上昇です。</li>
          </ul>
        </div>

        <h2>豊田通商の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "豊田通商株式会社" },
                { label: "証券コード", value: "8015" },
                { label: "本社", value: "愛知県名古屋市・東京都" },
                { label: "事業内容", value: "トヨタグループ唯一の商社。自動車バリューチェーンとアフリカ事業に強みを持つ総合商社" },
                { label: "平均年間給与", value: "約1,421万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月5日確認）" },
                { label: "直近3年の推移", value: "1,262万円（2024年3月期）→1,320万円（2025年3月期）→1,421万円（2026年3月期）" },
                { label: "平均年齢", value: "43.0歳（同・提出会社）" },
                { label: "平均勤続年数", value: "16.7年（同・提出会社）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月5日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>豊田通商の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年9月5日時点で、<a href="https://www.toyota-tsusho-recruit.com/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト(キャリア採用)</a>を確認できます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式採用サイトにキャリア採用ページがあり、募集職種一覧は採用管理システム(HRMOS)上で公開されています。</li>
            <li>自動車・アフリカ・サーキュラーエコノミーなど注力領域の採用が活発です。</li>
            <li>※募集状況は変動するため最新は公式採用サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>豊田通商で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "自動車業界の実務", desc: "トヨタグループの自動車バリューチェーン(部品調達〜販売金融)が中核で、自動車業界経験が最も直結します。" },
            { title: "アフリカ・新興国ビジネス", desc: "アフリカ54カ国に事業展開する日本企業随一の基盤があり、新興国での事業経験が活きます。" },
            { title: "電動化・資源循環の新領域", desc: "電池材料・リチウム・リサイクルなど電動化関連の採用需要が高い局面です。" },
            { title: "名古屋・東京の2拠点", desc: "本社機能は名古屋と東京にあり、勤務地の軸を確認して臨むのが確実です。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>豊田通商の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページからエントリー", desc: "公式採用ページで求人を確認し、希望ポジションにエントリーします。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等との面接。実務経験と応募職種の適合が中心です。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。経験・能力を考慮した条件が提示されます。" },
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

        <h2>豊田通商の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,421万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>トヨタグループの商社として5大商社に次ぐ規模です。2年で計159万円の大幅上昇です。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>豊田通商転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職の情報収集に向いています。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2>豊田通商転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">豊田通商転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/shosha-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">総合商社 年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/marubeni/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">丸紅転職ガイド</Link>
            <Link href="/company/sojitz/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">双日転職ガイド</Link>
          </div>
        </div>
      </article>
    </>
  );
}
