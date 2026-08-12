import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "堀場製作所への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "堀場製作所（証券コード6856）への転職を有価証券報告書などの一次データで解説。平均年間給与は約820万円（2025年12月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/horiba/" },
  openGraph: {
    title: "堀場製作所への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "堀場製作所（6856）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "堀場製作所の平均年収はいくらですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均年間給与は約820万円（2025年12月期・提出会社単体）です。同社は12月末決算のため、これが本記事執筆時点の最新確定値です。従業員1,573名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "堀場製作所は中途採用を行っていますか？",
    "a": "はい。2026年8月12日時点で、公式採用サイトに新卒採用とキャリア採用（中途採用）の窓口が明確に分かれて設けられており、キャリア採用は外部の採用システム上の募集求人一覧から応募できる仕組みになっています。具体的な募集職種は求人一覧で公開されているため、最新の募集状況は公式採用サイトでご確認ください。"
  },
  {
    "q": "堀場製作所の転職難易度は高いですか？",
    "a": "キャリア採用の常設窓口があり、応募ルート自体は開かれています。提出会社単体は1,573名と大手メーカーの中では比較的少数の陣容で、自動車・環境・科学・医用・半導体の各計測分野を手がけるため、分析・計測関連の専門経験を持つ方が応募ポジションとの適合を示しやすいとみられます。"
  },
  {
    "q": "堀場製作所の平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均勤続年数は16.0年、平均年齢は42.8歳（2025年12月期・提出会社）です。"
  },
  {
    "q": "堀場製作所の従業員数はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、提出会社単体で1,573名（2025年12月期）です。"
  },
  {
    "q": "堀場製作所の本社はどこですか？",
    "a": "公式サイトの会社概要によると、本社は京都市南区吉祥院宮の東町2です。応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "堀場製作所への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/horiba/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "堀場製作所" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            堀場製作所への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            堀場製作所（証券コード6856）は、自動車計測機器・環境用計測機器・科学計測機器・医用計測機器・半導体用計測機器の製造販売を手がける京都本社の分析・計測機器メーカーです。公式採用サイトには新卒採用と分かれたキャリア採用の窓口があり、中途からの応募ルートが開かれています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：堀場製作所転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約820万円（2025年12月期・有価証券報告書。IR BANK掲載値・2026年8月12日確認）。提出会社単体1,573名の全従業員平均。</li>
            <li>同社は12月末決算のため、2025年12月期が本記事執筆時点の最新確定値。</li>
            <li>公式採用サイトに新卒採用と別建てのキャリア採用窓口があり、外部採用システム上の募集求人一覧から応募できる（2026年8月12日確認）。</li>
            <li>平均年齢42.8歳・平均勤続16.0年。自動車・環境・科学・医用・半導体の5つの計測分野を展開。</li>
          </ul>
        </div>

        <h2>堀場製作所の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社堀場製作所" },
                { label: "証券コード", value: "6856" },
                { label: "本社", value: "京都市南区吉祥院宮の東町2" },
                { label: "事業内容", value: "自動車計測機器、環境用計測機器、科学計測機器、医用計測機器、半導体用計測機器の製造販売" },
                { label: "平均年間給与", value: "約820万円（2025年12月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "決算期", value: "12月末決算（2025年12月期が執筆時点の最新確定値）" },
                { label: "平均年齢", value: "42.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "16.0年（同・提出会社）" },
                { label: "従業員数", value: "1,573名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年8月12日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>堀場製作所の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、堀場製作所の<a href="https://recruit.horiba.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>には、新卒採用とキャリア採用（中途採用）の窓口が明確に分かれて用意されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キャリア採用は「募集求人一覧」（外部採用システム）と「キャリア採用情報」ページで案内されており、求人ごとに応募する仕組み。</li>
            <li>新卒採用は27卒・28卒それぞれの専用エントリー窓口が別途用意されている。</li>
            <li>キャリア採用の具体的な募集職種は求人一覧で公開されており、時期により変動する。</li>
            <li>※2026年8月12日に公式採用サイトで確認。募集状況は変動するため最新は公式採用サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>堀場製作所で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "分析・計測分野の専門性", desc: "自動車・環境・科学・医用・半導体の計測機器を手がけるため、分析化学・計測制御・光学などの専門経験が評価されます。" },
            { title: "事業分野に対応した実務経験", desc: "5つの計測分野それぞれで顧客も技術も異なるため、応募ポジションの分野（例：半導体、医用）での経験が適合を示しやすくなります。" },
            { title: "少数精鋭で広く動ける力", desc: "提出会社単体1,573名と大手メーカーの中では比較的少数の陣容であり、担当範囲を限定せず動ける人材が活きます。" },
            { title: "「はかる」技術への探究心", desc: "計測・分析という基盤技術を軸に多分野へ展開する事業構造のため、技術を深掘りし続ける姿勢が求められます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>堀場製作所の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募求人で求められる経験・スキルとの適合性が確認されます。" },
            { step: 2, title: "一次面接", desc: "現場のマネージャー等との面接。実務経験・専門スキル・応募動機が中心です。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスとの面接。カルチャーフィットや中長期のキャリアビジョンが確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。入社時期や条件面の確認を経て入社となります。" },
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

        <h2>堀場製作所の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約820万円（2025年12月期）は提出会社単体・全従業員1,573名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>12月末決算のため、この数値は2025年12月31日現在のもの。2026年12月期の有報は翌年提出のため、それまでは2025年12月期が最新確定値です。</li>
            <li>平均年齢42.8歳・平均勤続16.0年の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>堀場製作所転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式窓口への直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
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

        <h2>堀場製作所転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">堀場製作所転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式のキャリア採用求人一覧とエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体年収ランキング</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/screen-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">SCREENホールディングス転職ガイド</Link>
            <Link href="/company/hamamatsu-photonics/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">浜松ホトニクス転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
