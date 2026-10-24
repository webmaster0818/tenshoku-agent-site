import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { salaryMan, salaryYen } from "@/data/verified-salary";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "楽天グループへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "楽天グループ（証券コード4755）への転職について、有価証券報告書などの一次データにもとづいて解説します。平均年間給与は約850万円（2025年12月期・有価証券報告書／単体・12月期決算）です。直近の年収推移・中途採用の状況・選考の考え方までまとめました。",
  alternates: { canonical: "/company/rakuten/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "楽天グループへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "楽天グループ（4755）の平均年収・中途採用・選考を有価証券報告書ベースで解説します。",
  },
};

const faqData = [
  {
    q: "楽天グループの平均年収はいくらですか？",
    a: "2025年12月期の有価証券報告書（2026年3月26日提出、EDINETで2026年10月24日確認）によると、平均年間給与は8,508,495円（約850万円・万円未満切り捨て・提出会社単体・12月期決算）です。従業員9,989名の全従業員平均であり、職種・等級・役職により実際の年収は異なります。",
  },
  {
    q: "楽天グループの年収は上がっていますか？",
    a: "有価証券報告書ベースの推移は820万円（2024年12月期）→850万円（2025年12月期）です（2024年12月期以前はIR BANK掲載値・2026年8月21日確認）。上昇傾向にあります。平均年齢は36.0歳と、大手企業の中では若い構成です。平均年間給与には賞与等の変動要素が含まれ、中途入社時の提示額はポジション・等級により個別に決まります。",
  },
  {
    q: "楽天グループは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトのキャリアページ（corp.rakuten.co.jp/careers/）に集約されています。エンジニアはグローバル採用が基本です（2026年8月21日確認）。最新の募集状況は公式採用ページでご確認ください。",
  },
  {
    q: "楽天グループの平均年齢・従業員数はどのくらいですか？",
    a: "2025年12月期の有価証券報告書によると、平均年齢は36.0歳、従業員数は9,989名（いずれも2025年12月期・提出会社単体・12月期決算）です。",
  },
  {
    q: "楽天グループの本社はどこですか？",
    a: "日経会社情報（2026年8月21日確認）によると、本社は東京都世田谷区玉川1-14-1です。勤務地はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "楽天グループへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-21",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/rakuten/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "楽天グループ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            楽天グループへの転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/rakuten.jpg" alt="楽天グループの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">楽天グループ 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            楽天グループ（証券コード4755）は、EC・金融・モバイルを貫く楽天経済圏を運営するインターネット企業です。12月末決算のため最新確定値は2025年12月期で、社内公用語が英語である点が転職検討時の大きな特徴です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">楽天グループ転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">楽天グループの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">楽天グループで求められる人材</a></li>
            <li><a href="#s4" className="text-teal hover:underline">楽天グループの選考フロー（一般的な流れ）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">楽天グループ転職で活用したい転職エージェント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">楽天グループ転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">楽天グループ転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約850万円です（8,508,495円、2025年12月期・有価証券報告書、EDINETで2026年10月24日確認）。提出会社単体・12月期決算9,989名の全従業員平均です。</li>
            <li>推移は820万円（2024年12月期）→850万円（2025年12月期）です（有価証券報告書ベース）。</li>
            <li>平均年間給与は上昇傾向にあります（820→850万円）。平均年齢は36.0歳と、大手企業の中では若い構成です。</li>
            <li>採用情報は公式サイトのキャリアページ（corp.rakuten.co.jp/careers/）に集約されています。エンジニアはグローバル採用が基本です（2026年8月21日確認）。</li>
            <li>平均年齢は36.0歳です。数値は全従業員の平均であり、提示額はポジション・等級により個別に決まります。</li>
          </ul>
        </div>

        <h2 id="s2">楽天グループの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "楽天グループ株式会社" },
                { label: "証券コード", value: "4755" },
                { label: "本社", value: "東京都世田谷区玉川1-14-1" },
                { label: "事業内容", value: "EC（楽天市場）・フィンテック・モバイルなど70超のサービスを展開するインターネット企業" },
                { label: "平均年間給与", value: `${salaryMan("rakuten")}（${salaryYen("rakuten")}、2025年12月期・有価証券報告書／提出会社単体・12月期決算）` },
                { label: "直近の推移", value: "820万円（2024年12月期）→850万円（2025年12月期）" },
                { label: "平均年齢", value: "36.0歳（同・提出会社単体・12月期決算）" },
                { label: "従業員数", value: "9,989名（提出会社単体・12月期決算）" },
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
          ※2025年12月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XTNW.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年3月26日提出、EDINETで2026年10月24日確認）、2024年12月期以前の推移はIR BANK掲載値（2026年8月21日確認）に基づく提出会社単体・12月期決算・全従業員の平均です。万円表示は万円未満を切り捨てています。2024年12月期の8,208,366円（約820万円）は前期の有価証券報告書（2025年3月28日提出）でも確認しました。有価証券報告書の注記により、従業員数（9,989名）は就業人員で、使用人兼務取締役、他社への出向者、派遣社員及びアルバイトを含みません。平均年間給与は賞与及び基準外賃金を含みます。平均勤続年数は6.3年と記載されています。職種・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">楽天グループで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "英語での実務力", desc: "社内公用語が英語のため、読み書き・会議での英語使用に抵抗がないことが前提条件になります。" },
            { title: "大規模ECの開発・運用", desc: "楽天市場の大規模トラフィックを支える開発・SRE・データ経験が中核ニーズです。" },
            { title: "フィンテック・モバイルの専門性", desc: "カード・銀行・証券・モバイルまで領域が広く、金融システムや通信の経験も活かせます。" },
            { title: "経済圏をまたぐ発想", desc: "サービス間連携(ポイント・ID)が戦略の軸のため、事業横断で考えられる人が評価されます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">楽天グループの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属予定部門による面接が行われます。主に専門領域について詳しく確認されます。" },
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

        <h2 id="s5">楽天グループ転職で活用したい転職エージェント</h2>
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

        <h2 id="s6">楽天グループ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">楽天グループ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/line-yahoo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">LINEヤフー転職ガイド</Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メルカリ転職ガイド</Link>
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">Amazon転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
