import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "パナソニックHDへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "パナソニックHD（証券コード6752）への転職を有価証券報告書などの一次データで解説。平均年間給与は約988万円（2026年3月期・有報／持株会社単体）。直近の年収推移・中途採用の状況・選考の考え方までまとめました。",
  alternates: { canonical: "/company/panasonic/" },
  openGraph: {
    title: "パナソニックHDへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "パナソニックHD（6752）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "パナソニックHDの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月21日確認）によると、平均年間給与は約988万円（2026年3月期・提出会社持株会社単体）です。従業員1,431名の全従業員平均であり、職種・等級・役職により実際の年収は異なります。",
  },
  {
    q: "パナソニックHDの年収は上がっていますか？",
    a: "有価証券報告書ベースの推移は930万円（2024年3月期）→956万円（2025年3月期）→988万円（2026年3月期）です（IR BANK掲載値・2026年8月21日確認）。3年連続上昇(930→956→988万円)。ただし持株会社単体の数値。 平均年間給与には賞与等の変動要素が含まれ、中途入社時の提示額はポジション・等級により個別に決まります。",
  },
  {
    q: "パナソニックHDは中途採用を行っていますか？",
    a: "はい。グループ採用サイト（recruit.jpn.panasonic.com）に集約され、事業会社横断でポジションを検索して応募する方式(2026年8月21日確認)。 最新の募集状況は公式採用ページでご確認ください。",
  },
  {
    q: "パナソニックHDの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月21日確認）によると、平均年齢は44.1歳、従業員数は1,431名（いずれも2026年3月期・提出会社持株会社単体）です。",
  },
  {
    q: "パナソニックHDの本社はどこですか？",
    a: "日経会社情報（2026年8月21日確認）によると、本社は大阪府門真市大字門真1006です。勤務地はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "パナソニックHDへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-21",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/panasonic/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "パナソニックHD" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            パナソニックHDへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            パナソニック ホールディングス（証券コード6752）は、事業会社群を束ねる持株会社です。有価証券報告書の平均年収は持株会社単体（1,431名）の数値で、家電や電池など事業会社の給与水準とは別である点が読み解きの最重要ポイントです。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：パナソニックHD転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約988万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月21日確認）。提出会社持株会社単体1,431名の全従業員平均。</li>
            <li>推移は930万円（2024年3月期）→956万円（2025年3月期）→988万円（2026年3月期）（有報ベース）。</li>
            <li>3年連続上昇(930→956→988万円)。ただし持株会社単体の数値。</li>
            <li>グループ採用サイト（recruit.jpn.panasonic.com）に集約され、事業会社横断でポジションを検索して応募する方式(2026年8月21日確認)。</li>
            <li>平均年齢44.1歳。数値は全従業員平均で、提示額はポジション・等級により個別に決まる。</li>
          </ul>
        </div>

        <h2>パナソニックHDの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "パナソニック ホールディングス株式会社" },
                { label: "証券コード", value: "6752" },
                { label: "本社", value: "大阪府門真市大字門真1006" },
                { label: "事業内容", value: "くらし事業・車載・エナジー(電池)・コネクト(B2Bソリューション)等を傘下に持つ持株会社" },
                { label: "平均年間給与", value: "約988万円（2026年3月期・有価証券報告書／提出会社持株会社単体。IR BANK・日経会社情報掲載値・2026年8月21日確認）" },
                { label: "直近の推移", value: "930万円（2024年3月期）→956万円（2025年3月期）→988万円（2026年3月期）" },
                { label: "平均年齢", value: "44.1歳（同・提出会社持株会社単体）" },
                { label: "従業員数", value: "1,431名（提出会社持株会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月21日確認）に基づく提出会社持株会社単体・全従業員の平均です。職種・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>パナソニックHDで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "応募先事業会社の特定", desc: "くらし・車載・エナジー・コネクトなど事業会社ごとに技術も処遇も異なるため、どの会社のどの職種かを最初に特定することが最重要です。" },
            { title: "電池・車載の専門性", desc: "エナジー(電池)・車載領域は投資が続く成長領域で、電気化学・生産技術・組込の経験が活きます。" },
            { title: "B2Bソリューション経験", desc: "コネクト系ではSI・サプライチェーン・現場DXの実務経験が採用ニーズと合致します。" },
            { title: "持株数値の正しい理解", desc: "平均年収988万円は経営管理中心の持株会社の数値で、事業会社の提示水準は別物として個別確認が必要です。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>パナソニックHDの選考フロー（一般的な流れ）</h2>
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

        <h2>パナソニックHD転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手IT・メーカーの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。グローバル企業の選考に慣れており英文レジュメの相談もしやすいです。" },
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

        <h2>パナソニックHD転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">パナソニックHD転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニーグループ転職ガイド</Link>
            <Link href="/company/sharp/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">シャープ転職ガイド</Link>
            <Link href="/company/denso/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">デンソー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
