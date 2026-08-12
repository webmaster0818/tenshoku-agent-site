import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "太陽誘電への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "太陽誘電（証券コード6976）への転職を有価証券報告書などの一次データで解説。平均年間給与は661万円（2026年3月期・有報／提出会社）。キャリア採用の窓口、募集の傾向、選考プロセス、年収の考え方をまとめました。",
  alternates: { canonical: "/company/taiyo-yuden/" },
  openGraph: {
    title: "太陽誘電への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "太陽誘電（6976）の平均年収・キャリア採用・選考プロセスを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "太陽誘電の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は661万円（2026年3月期・提出会社単体）です（IR BANK掲載値・2026年8月12日確認）。単体2,803名の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "太陽誘電は中途採用を行っていますか？",
    "a": "行っています。2026年8月12日時点で、公式サイトの採用情報に「キャリア採用情報」ページが常設されており、専用のエントリー窓口から募集職種の確認・応募ができます。第二新卒採用、キャリアリターン採用（再入社）、障がい者採用の窓口も設けられています。最新の募集職種は公式サイトでご確認ください。"
  },
  {
    "q": "太陽誘電のキャリア採用の選考プロセスは？",
    "a": "公式サイトのキャリア採用情報ページ（2026年8月12日確認）によると、1.エントリー、2.書類選考（履歴書・職務経歴書の提出、筆記試験、適性検査）、3.面接（数回）、4.採用内定（条件提示のうえ入社時期等を決定）という流れが案内されています。"
  },
  {
    "q": "太陽誘電の平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書によると平均勤続年数は16.4年、平均年齢は41.5歳（2026年3月期・提出会社）です（IR BANK掲載値・2026年8月12日確認）。"
  },
  {
    "q": "太陽誘電のキャリア採用の勤務地はどこですか？",
    "a": "公式サイトのキャリア採用情報（2026年8月12日確認）によると、勤務地は群馬県内の各工場および研究所（高崎市・玉村町・中之条町）、神奈川県内の研究所（川崎市）のほか、本社（東京都中央区京橋）、高崎グローバルセンター、全国主要都市の営業所（仙台・東京・名古屋・大阪・福岡）です。将来的に国内・海外転勤の可能性がある旨も記載されています。"
  },
  {
    "q": "太陽誘電の従業員数はどのくらいですか？",
    "a": "有価証券報告書によると提出会社単体2,803名（2026年3月期・IR BANK掲載値・2026年8月12日確認）です。公式サイトの会社概要では連結20,604名（2026年3月31日現在）と記載されています。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "太陽誘電への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/taiyo-yuden/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "太陽誘電" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            太陽誘電への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            太陽誘電（証券コード6976）は、公式サイトの会社概要によると、各種電子部品の開発・製造・販売を事業内容とし、積層セラミックコンデンサ・インダクタ・通信用デバイス（FBAR/SAW）・回路モジュールなどを生産する電子部品メーカーです（1950年設立・本社は東京都中央区京橋）。
            本記事では、有価証券報告書（IR BANK掲載値・2026年8月12日確認）などの公開一次データをもとに、平均年収・中途採用の状況・選考プロセスを客観的に整理します。
          </p>
        </div>

        <h2>結論：太陽誘電転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は661万円（2026年3月期・有価証券報告書、IR BANK掲載値・2026年8月12日確認）。提出会社単体2,803名の全従業員平均。</li>
            <li>平均年齢41.5歳・平均勤続16.4年（同・提出会社）。</li>
            <li>公式サイトに「キャリア採用情報」ページとエントリー窓口が常設。第二新卒採用・キャリアリターン採用の窓口もある。</li>
            <li>キャリア採用の勤務地は群馬県内の工場・研究所が中心で、川崎の研究所、本社・高崎グローバルセンター・全国営業所も対象。給与は前職実績を考慮のうえ決定と公式に記載。</li>
          </ul>
        </div>

        <h2>太陽誘電の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "太陽誘電株式会社" },
                { label: "証券コード", value: "6976" },
                { label: "本社", value: "東京都中央区京橋2-7-19 京橋イーストビル" },
                { label: "事業内容", value: "各種電子部品の開発・製造・販売 他。生産品目は積層セラミックコンデンサ、インダクタ、通信用デバイス（FBAR/SAW）、回路モジュール、アルミニウム電解コンデンサ 他（公式サイト会社概要より）" },
                { label: "平均年間給与", value: "661万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "41.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "16.4年（同・提出会社）" },
                { label: "従業員数", value: "2,803名（提出会社単体・2026年3月期有報）／連結20,604名（2026年3月31日現在・公式サイト会社概要）" },
                { label: "決算期", value: "3月末決算" },
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
          ※数値は有価証券報告書（提出会社）に基づく単体・全従業員の平均です（IR BANK掲載値・2026年8月12日確認）。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>太陽誘電の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、太陽誘電の公式サイトには<a href="https://www.yuden.co.jp/jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用情報ページ</a>が常設されており、専用のエントリー窓口から募集職種の確認・応募ができます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>雇用形態は正社員。給与は「前職実績を考慮の上決定」と公式に記載されている。</li>
            <li>勤務地は群馬県内の各工場・研究所（高崎市・玉村町・中之条町）、神奈川県内の研究所（川崎市）、本社、高崎グローバルセンター、全国主要都市の営業所（仙台・東京・名古屋・大阪・福岡）。</li>
            <li>キャリア採用のほかに、第二新卒採用・キャリアリターン採用（再入社）・障がい者採用・関連会社採用の窓口も設けられている。</li>
            <li>正規雇用労働者の中途採用比率も年度ごとに公式サイトで公表されており、中途採用が継続的に行われていることが確認できる。</li>
            <li>※2026年8月12日に公式サイトのキャリア採用情報ページで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>太陽誘電で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "電子部品分野の専門性", desc: "積層セラミックコンデンサやインダクタ、通信用デバイスなどを手がけるため、材料・プロセス・電気電子など電子部品に関わる専門経験が活きます。" },
            { title: "生産現場に近い開発・技術力", desc: "キャリア採用の勤務地は群馬県内の工場・研究所が中心で、量産と一体になった開発・生産技術の実務力が求められる構成です。" },
            { title: "グローバル対応力", desc: "連結2万名超のグループが海外に生産・販売網を持ち、公式のキャリア採用情報にも将来的な国内・海外転勤の可能性が記載されています。" },
            { title: "長期就業への適性", desc: "平均勤続16.4年（有報・提出会社）と長く働く社員が多い環境で、腰を据えてキャリアを築く姿勢が合いやすい職場といえます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>太陽誘電の選考フロー（公式サイト記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式サイトのキャリア採用情報ページに記載の選考の流れです（2026年8月12日確認）。職種・時期により異なる場合があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "エントリー", desc: "キャリア採用のエントリー窓口から、募集職種を確認のうえ応募します。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を提出。筆記試験・適性検査も実施されます。" },
            { step: 3, title: "面接（数回）", desc: "面接が数回実施され、経験・スキルや志向が確認されます。" },
            { step: 4, title: "採用内定", desc: "条件提示の後、入社時期等を決定して入社となります。" },
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

        <h2>太陽誘電の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>661万円（2026年3月期）は提出会社単体・全従業員2,803名の平均であり、職種・年代・役職で実際の水準は異なります。</li>
            <li>出典は有価証券報告書（IR BANK掲載値・2026年8月12日確認）。</li>
            <li>公式のキャリア採用情報には「給与は前職実績を考慮の上決定」「昇給年1回（4月）・賞与年2回（6月・12月）」と記載されています。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>太陽誘電転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式のキャリア採用窓口に加えて、非公開求人も含めて情報を広く集めるため、複数のエージェントに登録するのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
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

        <h2>太陽誘電転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">太陽誘電転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/murata/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">村田製作所転職ガイド</Link>
            <Link href="/company/hirose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヒロセ電機転職ガイド</Link>
            <Link href="/company/rohm/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ローム転職ガイド</Link>
            <Link href="/company/nidec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ニデック転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
