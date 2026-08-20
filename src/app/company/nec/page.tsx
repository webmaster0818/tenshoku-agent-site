import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "NECへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "NEC（証券コード6701）への転職を有価証券報告書などの一次データで解説。平均年間給与は約994万円（2026年3月期・有報／単体）。直近の年収推移・中途採用の状況・選考の考え方までまとめました。",
  alternates: { canonical: "/company/nec/" },
  openGraph: {
    title: "NECへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "NEC（6701）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "NECの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月21日確認）によると、平均年間給与は約994万円（2026年3月期・提出会社単体）です。従業員21,934名の全従業員平均であり、職種・等級・役職により実際の年収は異なります。",
  },
  {
    q: "NECの年収は上がっていますか？",
    a: "有価証券報告書ベースの推移は880万円（2024年3月期）→963万円（2025年3月期）→994万円（2026年3月期）です（IR BANK掲載値・2026年8月21日確認）。2年で114万円の上昇(880→994万円)。処遇改革・ジョブ型移行期の上昇トレンド。 平均年間給与には賞与等の変動要素が含まれ、中途入社時の提示額はポジション・等級により個別に決まります。",
  },
  {
    q: "NECは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトの採用ページ（jpn.nec.com/recruit/）に集約。キャリア採用はポジション単位で通年募集(2026年8月21日確認)。 最新の募集状況は公式採用ページでご確認ください。",
  },
  {
    q: "NECの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月21日確認）によると、平均年齢は43.1歳、従業員数は21,934名（いずれも2026年3月期・提出会社単体）です。",
  },
  {
    q: "NECの本社はどこですか？",
    a: "日経会社情報（2026年8月21日確認）によると、本社は東京都港区芝5-7-1です。勤務地はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NECへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-21",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/nec/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "NEC" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            NECへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            NEC（証券コード6701）は、官公庁・社会インフラ系のITサービスと生体認証・通信技術に強みを持つ大手です。平均年収は2年で110万円超上昇しており、ジョブ型人材マネジメントへの移行を進めています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：NEC転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約994万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月21日確認）。提出会社単体21,934名の全従業員平均。</li>
            <li>推移は880万円（2024年3月期）→963万円（2025年3月期）→994万円（2026年3月期）（有報ベース）。</li>
            <li>2年で114万円の上昇(880→994万円)。処遇改革・ジョブ型移行期の上昇トレンド。</li>
            <li>採用情報は公式サイトの採用ページ（jpn.nec.com/recruit/）に集約。キャリア採用はポジション単位で通年募集(2026年8月21日確認)。</li>
            <li>平均年齢43.1歳。数値は全従業員平均で、提示額はポジション・等級により個別に決まる。</li>
          </ul>
        </div>

        <h2>NECの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "日本電気株式会社" },
                { label: "証券コード", value: "6701" },
                { label: "本社", value: "東京都港区芝5-7-1" },
                { label: "事業内容", value: "ITサービス・社会インフラ（通信・官公庁・防衛等）・生体認証などの大手電機・ITベンダー" },
                { label: "平均年間給与", value: "約994万円（2026年3月期・有価証券報告書／提出会社単体。IR BANK・日経会社情報掲載値・2026年8月21日確認）" },
                { label: "直近の推移", value: "880万円（2024年3月期）→963万円（2025年3月期）→994万円（2026年3月期）" },
                { label: "平均年齢", value: "43.1歳（同・提出会社単体）" },
                { label: "従業員数", value: "21,934名（提出会社単体）" },
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

        <h2>NECで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "社会インフラ案件の経験", desc: "官公庁・金融・通信など大規模で高信頼性が求められるシステムの構築・運用経験は、NECの主力領域と直接適合します。" },
            { title: "AI・セキュリティの専門性", desc: "生体認証・AI・サイバーセキュリティは同社の成長投資領域で、専門人材の採用ニーズが継続しています。" },
            { title: "ジョブ型への適応", desc: "ジョブディスクリプションに基づく採用へ移行が進んでおり、職務要件と自分の経験の対応を具体的に示せることが重要です。" },
            { title: "大規模組織での推進力", desc: "2万名超の大組織のため、部門をまたぐ調整・推進の経験がミドル層の評価につながります。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>NECの選考フロー（一般的な流れ）</h2>
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

        <h2>NEC転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手IT・メーカーの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。技術ポジションの要件読み解きと職務経歴書の添削に強みがあります。" },
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

        <h2>NEC転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">NEC転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/fujitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士通転職ガイド</Link>
            <Link href="/company/hitachi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">日立製作所転職ガイド</Link>
            <Link href="/company/ntt/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">NTT転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
