import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "イビデンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "イビデン（証券コード4062）への転職を有価証券報告書などの一次データで解説。平均年間給与は766万円（2026年3月期・有報／提出会社）。キャリア採用の窓口、募集職種の傾向、年収の考え方をまとめました。",
  alternates: { canonical: "/company/ibiden/" },
  openGraph: {
    title: "イビデンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "イビデン（4062）の平均年収・キャリア採用・選考の考え方を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "イビデンの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は766万円（2026年3月期・提出会社単体）です（IR BANK掲載値・2026年8月12日確認）。単体4,036名の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "イビデンは中途採用を行っていますか？",
    "a": "行っています。2026年8月12日時点で、公式採用サイトに「キャリア採用」ページが常設されており、「現在、技術・管理・製造などの多数の職種で募集をしております」と記載され、CAREER ENTRYの窓口から募集職種一覧を確認して応募できます。一度退職した社員向けのウェルカムバック採用の窓口もあります。最新の募集職種は公式サイトでご確認ください。"
  },
  {
    "q": "イビデンのキャリア採用に年齢制限や業界経験の条件はありますか？",
    "a": "公式採用サイトのキャリア採用よくある質問（2026年8月12日確認）には、「年齢制限はございません」「異業種からの転職者も多数」「国籍、性別による制限はなく、すべての応募者に対して同じ基準で選考」と記載されています。複数職種への応募も可能とされています。"
  },
  {
    "q": "イビデンの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書によると平均勤続年数は16.9年、平均年齢は40.2歳（2026年3月期・提出会社）です（IR BANK掲載値・2026年8月12日確認）。"
  },
  {
    "q": "イビデンの従業員数はどのくらいですか？",
    "a": "有価証券報告書によると提出会社単体4,036名（2026年3月期・IR BANK掲載値・2026年8月12日確認）です。公式サイトの会社概要でも単体4,036名・連結11,105名（2026年3月末現在）と記載されています。"
  },
  {
    "q": "イビデンの本社はどこですか？",
    "a": "本社は岐阜県大垣市神田町2-1です（公式サイト会社概要・2026年8月12日確認）。キャリア採用の問い合わせ窓口も本社の人事戦略部採用グループに置かれています。転居を伴う入社の場合は独身寮（30歳まで）を利用できる旨が公式FAQに記載されています。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "イビデンへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/ibiden/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "イビデン" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            イビデンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            イビデン（証券コード4062）は、公式サイトの会社概要によると、ICパッケージ基板、SiC-DPF、触媒担体保持・シール材、グラファイト、高温断熱ウール、EVバッテリー用安全部材を事業内容とする岐阜県大垣市本社のメーカーです（1912年創立）。
            本記事では、有価証券報告書（IR BANK掲載値・2026年8月12日確認）などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：イビデン転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は766万円（2026年3月期・有価証券報告書、IR BANK掲載値・2026年8月12日確認）。提出会社単体4,036名の全従業員平均。</li>
            <li>平均年齢40.2歳・平均勤続16.9年（同・提出会社）。</li>
            <li>公式採用サイトに「キャリア採用」ページが常設。「技術・管理・製造などの多数の職種で募集」と明記され、CAREER ENTRY窓口から応募できる。</li>
            <li>年齢制限なし・異業種からの応募可と公式FAQに記載。勤務地は大垣本社をはじめとする各事業場が中心。</li>
          </ul>
        </div>

        <h2>イビデンの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "イビデン株式会社" },
                { label: "証券コード", value: "4062" },
                { label: "本社", value: "岐阜県大垣市神田町2-1" },
                { label: "事業内容", value: "ICパッケージ基板（電子事業）、SiC-DPF、触媒担体保持・シール材、グラファイト、高温断熱ウール、EVバッテリー用安全部材（セラミック事業）等（公式サイト会社概要より）" },
                { label: "平均年間給与", value: "766万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "40.2歳（同・提出会社）" },
                { label: "平均勤続年数", value: "16.9年（同・提出会社）" },
                { label: "従業員数", value: "4,036名（提出会社単体）／連結11,105名（2026年3月末現在・公式サイト会社概要）" },
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

        <h2>イビデンの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、イビデンの公式採用サイトには<a href="https://www.ibiden.co.jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用ページ</a>が常設されており、「現在、技術・管理・製造などの多数の職種で募集をしております」と記載されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>CAREER ENTRYの窓口から募集職種一覧を確認し、経験・専門性や希望に近い職種に応募する形式。複数職種への応募も可能。</li>
            <li>公式FAQに「年齢制限はございません」「異業種からの転職者も多数」「国籍、性別による制限はなく、すべての応募者に対して同じ基準で選考」と明記。</li>
            <li>2次面接を対面で行う際には交通費が支給される旨、転居を伴う入社の場合は独身寮（30歳まで）を利用できる旨も公式FAQに記載。</li>
            <li>キャリア採用のほかに、一度退職した社員向けのウェルカムバック採用や障がい者採用の窓口もある。</li>
            <li>問い合わせ窓口は本社（岐阜県大垣市）の人事戦略部採用グループ。</li>
            <li>※2026年8月12日に公式採用サイトのキャリア採用ページで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>イビデンで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "電子・セラミック分野の専門性", desc: "ICパッケージ基板やSiC-DPFなどを手がけるため、材料・化学・電気電子・機械などの専門経験が活きる事業構成です。" },
            { title: "製造現場を支える実務力", desc: "キャリア採用は技術・管理に加えて製造の職種も募集されており、量産現場を支える実務力が求められます。" },
            { title: "異業種経験も含む幅広い知見", desc: "公式FAQに「異業種からの転職者も多数」「幅広い経験・知見をお持ちの方のご応募をお待ちしております」と記載されています。" },
            { title: "地元・大垣に根ざして働く姿勢", desc: "本社・事業場は岐阜県大垣市周辺が中心で、採用サイトにも大垣の魅力を紹介するコンテンツが用意されています。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>イビデンの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※キャリア採用はCAREER ENTRY窓口から求人ごとに応募する形式です。公式FAQからは2次面接（対面実施の場合あり）を含む複数回の選考があることが確認できますが、全体の詳細フローは職種により異なるため、以下は一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "CAREER ENTRYから応募", desc: "募集職種一覧から、これまでの経験・専門性や希望に近い職種に応募します。複数職種への応募も可能です。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書をもとに、応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "公式FAQによると2次面接を対面で行う場合は交通費が支給されます。経験・スキルや志向が確認されます。" },
            { step: 4, title: "内定・入社時期の相談", desc: "選考通過後に内定・条件提示。公式FAQには「入社の時期については、ご相談ください」と記載されています。" },
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

        <h2>イビデンの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>766万円（2026年3月期）は提出会社単体・全従業員4,036名の平均であり、職種・年代・役職で実際の水準は異なります。</li>
            <li>出典は有価証券報告書（IR BANK掲載値・2026年8月12日確認）。</li>
            <li>平均年齢40.2歳・平均勤続16.9年という構成の中での平均値である点も踏まえて読む必要があります。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>イビデン転職で活用したい転職エージェント</h2>
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

        <h2>イビデン転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">イビデン転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体年収ランキング</Link>
            <Link href="/company/shin-etsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">信越化学転職ガイド</Link>
            <Link href="/company/murata/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">村田製作所転職ガイド</Link>
            <Link href="/company/taiyo-yuden/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">太陽誘電転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
