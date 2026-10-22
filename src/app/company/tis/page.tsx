import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "TISへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "TIS（証券コード3626）への転職を有価証券報告書などの一次データで解説します。平均年間給与は約829万円（2026年3月期・有価証券報告書／単体）。直近の年収推移・中途採用の状況・選考の考え方までまとめました。",
  alternates: { canonical: "/company/tis/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "TISへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "TIS（3626）の平均年収・中途採用・選考を有価証券報告書ベースで解説します。",
  },
};

const faqData = [
  {
    q: "TISの平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月22日提出、EDINETで2026年10月22日確認）によると、平均年間給与は8,289千円（約829万円・提出会社単体）です。従業員6,066名の全従業員平均であり、職種・等級・役職により実際の年収は異なります。",
  },
  {
    q: "TISの年収は上がっていますか？",
    a: "有価証券報告書ベースの推移は803万円（2024年3月期）→829万円（2026年3月期）です（2026年3月期は有価証券報告書の原本、それ以前はIR BANK掲載値・2026年8月21日確認）。上昇傾向にあり(803→829万円)、背景には決済・金融SIの安定需要があります。平均年間給与には賞与等の変動要素が含まれ、中途入社時の提示額はポジション・等級により個別に決まります。",
  },
  {
    q: "TISは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトの採用ページに集約されています(tis.co.jp経由・2026年8月21日確認)。キャリア採用は職種別に通年で募集されています。最新の募集状況は公式採用ページでご確認ください。",
  },
  {
    q: "TISの平均年齢・従業員数はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均年齢は40歳8カ月、平均勤続年数は14年5カ月、従業員数は6,066名（いずれも提出会社単体）です。",
  },
  {
    q: "TISの本社はどこですか？",
    a: "日経会社情報（2026年8月21日確認）によると、本社は東京都新宿区西新宿8-17-1 住友不動産新宿グランドタワーです。勤務地はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "TISへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-21",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/tis/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "TIS" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            TISへの転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/tis.jpg" alt="TISの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">TIS 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            TIS（証券コード3626）は、クレジットカード・決済システムに強みを持つ独立系大手SIerです。TISインテックグループの中核会社で、金融×ITのキャリアを積みたいエンジニアに選ばれています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">TIS転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">TISの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">TISで求められる人材</a></li>
            <li><a href="#s4" className="text-teal hover:underline">TISの選考フロー（一般的な流れ）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">TIS転職で活用したい転職エージェント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">TIS転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">TIS転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約829万円（8,289千円、2026年3月期・有価証券報告書、EDINETで2026年10月22日確認）。提出会社単体6,066名の全従業員平均です。</li>
            <li>推移は803万円（2024年3月期）→829万円（2026年3月期）です（有価証券報告書ベース）。</li>
            <li>上昇傾向にあり(803→829万円)、背景には決済・金融SIの安定需要があります。</li>
            <li>採用情報は公式サイトの採用ページに集約されています(tis.co.jp経由・2026年8月21日確認)。キャリア採用は職種別に通年で募集されています。</li>
            <li>平均年齢は40歳8カ月、平均勤続年数は14年5カ月です（同・提出会社単体）。数値は全従業員の平均であり、提示額はポジション・等級により個別に決まります。</li>
          </ul>
        </div>

        <h2 id="s2">TISの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "TIS株式会社" },
                { label: "証券コード", value: "3626" },
                { label: "本社", value: "東京都新宿区西新宿8-17-1 住友不動産新宿グランドタワー" },
                { label: "事業内容", value: "クレジットカード・決済系に強い独立系大手SIer（TISインテックグループ）" },
                { label: "平均年間給与", value: "約829万円（8,289千円、2026年3月期・有価証券報告書／提出会社単体）" },
                { label: "直近の推移", value: "803万円（2024年3月期）→829万円（2026年3月期）" },
                { label: "平均年齢", value: "40歳8カ月（同・提出会社単体）" },
                { label: "従業員数", value: "6,066名（提出会社単体）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YH5C.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月22日提出、EDINETで2026年10月22日確認）、それ以前の推移はIR BANK掲載値（2026年8月21日確認）に基づく提出会社単体・全従業員の平均です。有価証券報告書の注記により、従業員数は就業人員数で、平均年間給与は賞与及び基準外賃金を含みます。平均年齢は40歳8カ月、平均勤続年数は14年5カ月、対前事業年度増減率は2.75%と記載されています。職種・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">TISで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "決済・金融システムの経験", desc: "クレジットカード基幹・キャッシュレス決済の開発運用は同社の看板領域で、経験者の評価が高い分野です。" },
            { title: "大規模基幹系の品質意識", desc: "止められない決済インフラを支えるため、高信頼性設計・運用の経験が重視されます。" },
            { title: "クラウドシフトの推進力", desc: "基幹系のクラウド移行案件が増えており、AWS/Azure移行の実務経験が活きます。" },
            { title: "顧客折衝・上流経験", desc: "独立系SIerとして提案から運用まで担うため、上流工程・PM経験がミドル層の強みになります。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">TISの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属予定部門による面接が行われます。専門領域の深掘りが中心です。" },
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

        <h2 id="s5">TIS転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-secondary mb-4">IT・Web系の求人を非公開求人も含めて比較する場合は、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />などの転職エージェントの利用も選択肢となります。</p>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニアに特化したエージェントです。技術ポジションの要件読み解きと職務経歴書の添削に強みがあります。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手IT・メーカーの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。管理職・専門職クラスの市場価値の把握と情報収集に向いています。" },
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

        <h2 id="s6">TIS転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">TIS転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/nri/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">野村総合研究所転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
