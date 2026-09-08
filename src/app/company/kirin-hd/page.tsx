import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "キリンホールディングスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "キリンホールディングス（証券コード2503）への転職を有価証券報告書などの一次データで解説。平均年間給与は約998万円（2025年12月期・有報／提出会社）。キリンビール・キリンビバレッジ・協和キリン(医薬)などを束ねのキャリア採用窓口・選考の考え方をまとめました。",
  alternates: { canonical: "/company/kirin-hd/" },
  openGraph: {
    title: "キリンホールディングスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "キリンホールディングス（2503）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "キリンホールディングスの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月8日確認）によると、平均年間給与は約998万円（2025年12月期・提出会社単体）です。956万円（2023年12月期）→1,000万円（2024年12月期）→998万円（2025年12月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "キリンホールディングスは中途採用を行っていますか？",
    a: "はい。公式サイトの公式キャリア採用ページ(グループ)（www.kirinholdings.com/jp/careers/）でキャリア採用の情報を確認できます（2026年9月8日確認）。",
  },
  {
    q: "キリンホールディングスはどんな会社ですか？",
    a: "キリンビール・キリンビバレッジ・協和キリン(医薬)などを束ねる持株会社。「食から医にわたる領域」を掲げるCSV経営の先駆です。本社は東京都中野区にあります。",
  },
  {
    q: "キリンホールディングスの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月8日確認）によると、平均勤続年数は13.6年、平均年齢は41.6歳（2025年12月期・提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "キリンホールディングスへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kirin-hd/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "キリンHD" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            キリンホールディングスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            キリンホールディングス（証券コード2503）は、キリンビール・キリンビバレッジ・協和キリン(医薬)などを束ねる持株会社。「食から医にわたる領域」を掲げるCSV経営の先駆です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：キリンHD転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約998万円（2025年12月期・有価証券報告書。IR BANK掲載値・2026年9月8日確認）。提出会社単体の全従業員平均。</li>
            <li>956万円（2023年12月期）→1,000万円（2024年12月期）→998万円（2025年12月期）と推移（1,000万円前後で推移）。</li>
            <li>キャリア採用は公式キャリア採用ページ(グループ)で確認可能（2026年9月8日確認）。</li>
            <li>提出会社は持株会社単体であり、キリンビールなど事業会社の平均とは別の数値です。</li>
          </ul>
        </div>

        <h2>キリンHDの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "キリンホールディングス株式会社" },
                { label: "証券コード", value: "2503" },
                { label: "本社", value: "東京都中野区" },
                { label: "事業内容", value: "キリンビール・キリンビバレッジ・協和キリン(医薬)などを束ねる持株会社。「食から医にわたる領域」を掲げるCSV経営の先駆" },
                { label: "平均年間給与", value: "約998万円（2025年12月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月8日確認）" },
                { label: "直近3年の推移", value: "956万円（2023年12月期）→1,000万円（2024年12月期）→998万円（2025年12月期）" },
                { label: "平均年齢", value: "41.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "13.6年（同・提出会社）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月8日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>キリンHDの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年9月8日時点で、<a href="https://www.kirinholdings.com/jp/careers/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式キャリア採用ページ(グループ)</a>を確認できます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>グループ公式のCareersページからキャリア採用情報を確認できます。</li>
            <li>事業会社(キリンビール・キリンビバレッジ・協和キリン等)ごとの採用が中心です。</li>
            <li>※募集状況は変動するため最新は公式採用ページでご確認ください。</li>
          </ul>
        </div>

        <h2>キリンHDで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "ヘルスサイエンス領域", desc: "医薬(協和キリン)・ヘルスサイエンスへの展開で、バイオ・薬事系人材の入口があるのが他の飲料大手との違いです。" },
            { title: "ビール・飲料のブランドマーケ", desc: "一番搾り・生茶などのブランド経験が直結します。" },
            { title: "持株会社の専門職", desc: "提出会社はHD単体で、経営企画・財務・人事等の本社専門職が中心です。" },
            { title: "R&D・発酵バイオ技術", desc: "発酵・バイオテクノロジーの研究人材を継続採用しています。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>キリンHDの選考フロー（一般的な流れ）</h2>
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

        <h2>キリンHDの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約998万円（2025年12月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>提出会社は持株会社単体であり、キリンビールなど事業会社の平均とは別の数値です。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>キリンHD転職で活用したい転職エージェント</h2>
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

        <h2>キリンHD転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">キリンHD転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/shokuhin-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">食品・飲料 年収ランキング</Link>
            <Link href="/company/asahi-ghd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">アサヒGHD転職ガイド</Link>
            <Link href="/company/suntory-bf/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">サントリー食品転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
