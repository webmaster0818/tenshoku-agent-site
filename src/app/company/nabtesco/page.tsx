import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ナブテスコへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ナブテスコ（証券コード6268）への転職を有価証券報告書などの一次データで解説。平均年間給与は715万円（2025年12月期・有報／提出会社）。キャリア採用の募集要項、選考プロセス、年収の考え方をまとめました。",
  alternates: { canonical: "/company/nabtesco/" },
  openGraph: {
    title: "ナブテスコへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ナブテスコ（6268）の平均年収・キャリア採用・選考プロセスを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ナブテスコの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は715万円（2025年12月期・提出会社単体）です（IR BANK掲載値・2026年8月12日確認）。単体2,186名の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "ナブテスコは中途採用を行っていますか？",
    "a": "行っています。2026年8月12日時点で、公式採用サイトに「キャリア採用募集要項・選考プロセス」ページが常設されており、募集職種一覧から職種ごとにエントリーできます。カムバック採用（再入社）の案内もあります。最新の募集職種は公式採用サイトでご確認ください。"
  },
  {
    "q": "ナブテスコのキャリア採用の選考プロセスは？",
    "a": "公式採用サイト（2026年8月12日確認）によると、1.エントリー（募集職種から希望職種に応募）、2.書類選考、3.Web適性検査、4.一次選考（募集部門による面接・Web面接可）、5.最終選考（部門長および人事部長との対面面接・東京本社で実施）、6.内定という流れが案内されています。"
  },
  {
    "q": "ナブテスコのキャリア採用の勤務地はどこですか？",
    "a": "公式採用サイトのキャリア採用募集要項（2026年8月12日確認）によると、本社（東京都千代田区）、ナブテスコR&Dセンター（京都府京都市）、津工場（三重県津市）、岐阜工場（岐阜県不破郡）、甲南工場・神戸工場・西神工場（兵庫県神戸市）の各事業所・研究所です。"
  },
  {
    "q": "ナブテスコの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書によると平均勤続年数は16.9年、平均年齢は42.6歳（2025年12月期・提出会社）です（IR BANK掲載値・2026年8月12日確認）。"
  },
  {
    "q": "ナブテスコの従業員数はどのくらいですか？",
    "a": "有価証券報告書によると提出会社単体2,186名（2025年12月期・IR BANK掲載値・2026年8月12日確認）です。公式サイトの会社概要でも単体2,186人・連結8,472人（2025年12月末）と記載されています。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ナブテスコへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/nabtesco/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ナブテスコ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ナブテスコへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ナブテスコ（証券コード6268）は、公式サイトによると、「うごかす、とめる」のモーションコントロール技術を核に、精密減速機・鉄道車両用機器・航空機器・舶用機器・商用車用機器・自動ドア・ホームドア・包装機・福祉機器などを手がけるメーカーです（2003年設立・本社は東京都千代田区）。
            本記事では、有価証券報告書（IR BANK掲載値・2026年8月12日確認）などの公開一次データをもとに、平均年収・中途採用の状況・選考プロセスを客観的に整理します。
          </p>
        </div>

        <h2>結論：ナブテスコ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は715万円（2025年12月期・有価証券報告書、IR BANK掲載値・2026年8月12日確認）。提出会社単体2,186名の全従業員平均。</li>
            <li>平均年齢42.6歳・平均勤続16.9年（同・提出会社）。</li>
            <li>公式採用サイトに「キャリア採用募集要項・選考プロセス」が常設され、職種ごとにエントリー可能。選考は書類選考→Web適性検査→一次選考→最終選考の流れが公式に案内されている。</li>
            <li>勤務地は東京本社、京都のR&Dセンター、津・岐阜・神戸エリアの各工場など。カムバック採用の仕組みもある。</li>
          </ul>
        </div>

        <h2>ナブテスコの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ナブテスコ株式会社" },
                { label: "証券コード", value: "6268" },
                { label: "本社", value: "東京都千代田区平河町2丁目7番9号 JA共済ビル" },
                { label: "事業内容", value: "モーションコントロール技術による精密減速機、鉄道車両用機器、航空機器、舶用機器、商用車用機器、自動ドア・ホームドア、包装機、福祉機器等の製造・販売（公式サイトより）" },
                { label: "平均年間給与", value: "715万円（2025年12月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "42.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "16.9年（同・提出会社）" },
                { label: "従業員数", value: "2,186名（提出会社単体）／連結8,472人（2025年12月末・公式サイト会社概要）" },
                { label: "決算期", value: "12月末決算（最新有報は2025年12月期）" },
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

        <h2>ナブテスコの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、ナブテスコの公式採用サイトには<a href="https://www.nabtesco.com/recruit/recruitinginformation/career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用募集要項・選考プロセスのページ</a>が常設されており、募集職種一覧から職種ごとにエントリーできます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>勤務地は本社（東京都千代田区）、ナブテスコR&Dセンター（京都市）、津工場（三重県津市）、岐阜工場（岐阜県不破郡）、甲南工場・神戸工場・西神工場（神戸市）の各事業所・研究所。</li>
            <li>給与は「年齢などを考慮して、当社規定にて決定」と公式に記載。昇給年1回（4月）・賞与年2回（6月・12月）。</li>
            <li>独身寮・社宅（借上含む）や福利厚生パッケージ等の制度も募集要項に明記されている。</li>
            <li>キャリア採用のほかに、一度退職した社員を対象とするカムバック採用の案内もある。</li>
            <li>※2026年8月12日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ナブテスコで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "モーションコントロール領域の専門性", desc: "精密減速機や油圧機器など「うごかす、とめる」技術が事業の核であり、機械・制御・油圧などの専門経験が活きます。" },
            { title: "複数事業を横断する視点", desc: "鉄道・航空・舶用・自動ドアなど事業領域が広く、カンパニー制の各事業で製品に向き合える人材が求められます。" },
            { title: "現場・顧客に向き合う実務力", desc: "工場・研究所勤務のポジションが中心で、開発から量産・品質まで現場に根ざした実務力が重視されます。" },
            { title: "グローバル対応力", desc: "連結8,472人（2025年12月末・公式）のグループは海外にも展開しており、海外拠点・顧客と連携できる素養が役立ちます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ナブテスコの選考フロー（公式サイト記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用サイトのキャリア採用ページに記載の選考プロセスです（2026年8月12日確認）。職種・時期により異なる場合があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "エントリー", desc: "募集職種一覧から希望の職種にエントリーします。" },
            { step: 2, title: "書類選考・Web適性検査", desc: "エントリーに基づき書類選考が行われ、通過後に自宅などでWeb適性検査を受検します。" },
            { step: 3, title: "一次選考", desc: "募集部門による面接が行われます（Web面接も可能）。" },
            { step: 4, title: "最終選考・内定", desc: "部門長および人事部長との対面面接（東京本社で実施）を経て内定となります。" },
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

        <h2>ナブテスコの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>715万円（2025年12月期）は提出会社単体・全従業員2,186名の平均であり、職種・年代・役職で実際の水準は異なります。</li>
            <li>出典は有価証券報告書（IR BANK掲載値・2026年8月12日確認）。</li>
            <li>キャリア採用の給与は「年齢などを考慮して、当社規定にて決定」と公式募集要項に記載されています。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ナブテスコ転職で活用したい転職エージェント</h2>
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

        <h2>ナブテスコ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ナブテスコ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/thk/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">THK転職ガイド</Link>
            <Link href="/company/fanuc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ファナック転職ガイド</Link>
            <Link href="/company/daifuku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ダイフク転職ガイド</Link>
            <Link href="/company/yamaha-motor/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤマハ発動機転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
