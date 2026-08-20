import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "日鉄ソリューションズへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "日鉄ソリューションズ（証券コード2327）への転職を有価証券報告書などの一次データで解説。平均年間給与は約936万円（2026年3月期・有報／単体）。直近の年収推移・中途採用の状況・選考の考え方までまとめました。",
  alternates: { canonical: "/company/nssol/" },
  openGraph: {
    title: "日鉄ソリューションズへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "日鉄ソリューションズ（2327）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "日鉄ソリューションズの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月21日確認）によると、平均年間給与は約936万円（2026年3月期・提出会社単体）です。従業員4,102名の全従業員平均であり、職種・等級・役職により実際の年収は異なります。",
  },
  {
    q: "日鉄ソリューションズの年収は上がっていますか？",
    a: "有価証券報告書ベースの推移は886万円（2024年3月期）→905万円（2025年3月期）→936万円（2026年3月期）です（IR BANK掲載値・2026年8月21日確認）。3年連続上昇(886→905→936万円)。NRIに次ぐSIer高水準グループ。 平均年間給与には賞与等の変動要素が含まれ、中途入社時の提示額はポジション・等級により個別に決まります。",
  },
  {
    q: "日鉄ソリューションズは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトの採用ページ（nssol.nipponsteel.com）に集約。キャリア採用は職種別の通年募集(2026年8月21日確認)。 最新の募集状況は公式採用ページでご確認ください。",
  },
  {
    q: "日鉄ソリューションズの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月21日確認）によると、平均年齢は39.8歳、従業員数は4,102名（いずれも2026年3月期・提出会社単体）です。",
  },
  {
    q: "日鉄ソリューションズの本社はどこですか？",
    a: "日経会社情報（2026年8月21日確認）によると、本社は東京都港区虎ノ門1-17-1 虎ノ門ヒルズビジネスタワーです。勤務地はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "日鉄ソリューションズへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-21",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/nssol/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "日鉄ソリューションズ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            日鉄ソリューションズへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            日鉄ソリューションズ（NSSOL・証券コード2327）は、日本製鉄グループの大手SIerです。製鉄業で培った大規模システムの知見を製造業DX・金融に展開しており、平均年収は930万円台とSIerの中でも高水準です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：日鉄ソリューションズ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約936万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月21日確認）。提出会社単体4,102名の全従業員平均。</li>
            <li>推移は886万円（2024年3月期）→905万円（2025年3月期）→936万円（2026年3月期）（有報ベース）。</li>
            <li>3年連続上昇(886→905→936万円)。NRIに次ぐSIer高水準グループ。</li>
            <li>採用情報は公式サイトの採用ページ（nssol.nipponsteel.com）に集約。キャリア採用は職種別の通年募集(2026年8月21日確認)。</li>
            <li>平均年齢39.8歳。数値は全従業員平均で、提示額はポジション・等級により個別に決まる。</li>
          </ul>
        </div>

        <h2>日鉄ソリューションズの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "日鉄ソリューションズ株式会社" },
                { label: "証券コード", value: "2327" },
                { label: "本社", value: "東京都港区虎ノ門1-17-1 虎ノ門ヒルズビジネスタワー" },
                { label: "事業内容", value: "日本製鉄グループの大手SIer（製造業DX・金融・ITインフラ）" },
                { label: "平均年間給与", value: "約936万円（2026年3月期・有価証券報告書／提出会社単体。IR BANK・日経会社情報掲載値・2026年8月21日確認）" },
                { label: "直近の推移", value: "886万円（2024年3月期）→905万円（2025年3月期）→936万円（2026年3月期）" },
                { label: "平均年齢", value: "39.8歳（同・提出会社単体）" },
                { label: "従業員数", value: "4,102名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月21日確認）に基づく提出会社単体・全従業員の平均です。職種・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>日鉄ソリューションズで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "製造業ドメインの知見", desc: "生産管理・工場系システム・IoTの経験は、製造業DXという同社の主戦場と直結します。" },
            { title: "大規模ミッションクリティカル経験", desc: "製鉄所の24時間稼働を支えてきた文化のため、高信頼性システムの設計運用経験が評価されます。" },
            { title: "クラウド・基盤技術", desc: "ITインフラソリューションが柱の一つで、クラウド基盤・仮想化・コンテナの専門性が活きます。" },
            { title: "腰を据えた開発志向", desc: "長期・大型案件が多く、じっくり品質を作り込むスタイルが合う人に向いています。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>日鉄ソリューションズの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属予定部門との面接。専門領域の深掘りが中心です。" },
            { step: 4, title: "内定・条件提示", desc: "職務・等級に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>日鉄ソリューションズ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。技術ポジションの要件読み解きと職務経歴書の添削に強みがあります。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手IT・メーカーの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。管理職・専門職クラスの市場価値の把握と情報収集に向いています。" },
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

        <h2>日鉄ソリューションズ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">日鉄ソリューションズ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/nri/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">野村総合研究所転職ガイド</Link>
            <Link href="/company/tis/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">TIS転職ガイド</Link>
            <Link href="/company/fujitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士通転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
