import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ルネサスエレクトロニクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ルネサスエレクトロニクス（証券コード6723）への転職を有価証券報告書などの一次データで解説。平均年間給与は約749万円（2025年12月期・有報／提出会社）。12月決算である点、直近3年の年収推移、グローバル採用サイト経由の中途採用の仕組みまでまとめました。",
  alternates: { canonical: "/company/renesas/" },
  openGraph: {
    title: "ルネサスエレクトロニクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ルネサスエレクトロニクス（6723）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "ルネサスエレクトロニクスの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均年間給与は約749万円（2025年12月期・提出会社単体）です。同社は12月末決算のため、これが本記事執筆時点の最新確定値です。従業員6,025名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "ルネサスの平均年収は下がっているのですか？",
    a: "有価証券報告書ベースの推移では、2023年12月期889万円→2024年12月期809万円→2025年12月期749万円と直近3年は減少傾向です（IR BANK掲載値・2026年8月16日確認）。平均年間給与には賞与等の変動要素が含まれ、事業環境により年度間の差が出やすい点を踏まえてお読みください。個別の中途入社時の提示額は、ポジション・経験により別途決まります。",
  },
  {
    q: "ルネサスエレクトロニクスは中途採用を行っていますか？",
    a: "はい。採用はグローバル共通の採用サイト（jobs.renesas.com・日本語版はcareer.renesas.com）に一本化されており、キーワード・勤務地で求人を検索して応募する仕組みです（2026年8月16日確認）。職種区分にはEngineering、Sales & Marketing、Corporate Rolesなどがあります。最新の募集状況は同サイトでご確認ください。",
  },
  {
    q: "ルネサスの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均勤続年数は23.4年、平均年齢は48.5歳（2025年12月期・提出会社）です。半導体大手の中でも勤続が長く年齢構成が高めの母集団での平均給与である点は、数値を読む際の前提になります。",
  },
  {
    q: "ルネサスエレクトロニクスの本社はどこですか？",
    a: "公式サイトの会社概要によると、本社は東京都江東区豊洲三丁目2番24号（豊洲フォレシア）です。設立は2002年11月1日（営業開始日2010年4月1日）。応募ポジションにより勤務地は異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ルネサスエレクトロニクスへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-16",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/renesas/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ルネサスエレクトロニクス" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ルネサスエレクトロニクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ルネサスエレクトロニクス（証券コード6723）は、マイコン（MCU）を中心に各種半導体の研究・開発・設計・製造・販売を手がける半導体大手です。
            採用はグローバル共通の採用サイトに一本化されており、職種・勤務地から検索して応募する方式です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ルネサスエレクトロニクス転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約749万円（2025年12月期・有価証券報告書。IR BANK掲載値・2026年8月16日確認）。提出会社単体6,025名の全従業員平均。</li>
            <li>同社は12月末決算のため、2025年12月期が本記事執筆時点の最新確定値。</li>
            <li>直近3年は889万円→809万円→749万円と減少傾向（有報ベース）。年度間の変動が大きい点は正直にお伝えします。</li>
            <li>中途採用はグローバル採用サイト（jobs.renesas.com／日本語版career.renesas.com）経由。Engineering・Sales & Marketing・Corporateの職種区分で通年検索できる（2026年8月16日確認）。</li>
            <li>平均年齢48.5歳・平均勤続23.4年と、勤続の長い年齢構成での平均値。</li>
          </ul>
        </div>

        <h2>ルネサスエレクトロニクスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ルネサス エレクトロニクス株式会社" },
                { label: "証券コード", value: "6723" },
                { label: "本社", value: "東京都江東区豊洲三丁目2番24号（豊洲フォレシア）" },
                { label: "設立", value: "2002年11月1日（営業開始日2010年4月1日）" },
                { label: "事業内容", value: "各種半導体に関する研究、開発、設計、製造、販売およびサービス" },
                { label: "平均年間給与", value: "約749万円（2025年12月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月16日確認）" },
                { label: "決算期", value: "12月末決算（2025年12月期が執筆時点の最新確定値）" },
                { label: "直近3年の推移", value: "889万円（2023年12月期）→809万円（2024年12月期）→749万円（2025年12月期）" },
                { label: "平均年齢", value: "48.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "23.4年（同・提出会社）" },
                { label: "従業員数", value: "6,025名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年8月16日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ルネサスエレクトロニクスの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月16日時点で、採用は<a href="https://jobs.renesas.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">グローバル共通の採用サイト</a>（日本語版はcareer.renesas.com）に一本化されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キーワード・勤務地（Location/City）で求人を検索して応募する方式。日本国内の拠点求人も同サイトで扱われている。</li>
            <li>職種区分はEngineering（設計・開発等）、Sales & Marketing、Corporate Roles、Interns & Graduatesの4カテゴリ。</li>
            <li>グローバル一体の採用システムのため、募集要項・応募画面が英語表記のポジションも多い。職務経歴書に加え英文レジュメを用意しておくと応募がスムーズ。</li>
            <li>※2026年8月16日に採用サイトで確認。募集状況は変動するため最新は同サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ルネサスエレクトロニクスで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "半導体分野の専門性", desc: "MCU・SoC・アナログ・パワーなど半導体の設計・開発・プロセス・品質関連の実務経験が、Engineeringカテゴリの求人との適合を示しやすい領域です。" },
            { title: "グローバル環境への適応力", desc: "採用サイト・社内コミュニケーションともグローバル一体運営で、英語での読み書きや海外拠点との協働に抵抗がないことが働きやすさに直結します。" },
            { title: "職種に対応した実務経験", desc: "Engineering・Sales & Marketing・Corporateの職種別採用のため、応募ポジションの要件と自分の経験の対応を職務経歴書で具体的に示すことが重視されます。" },
            { title: "変化の大きい事業環境への耐性", desc: "半導体市況により業績・処遇の年度間変動が大きい業界です。市況サイクルを前提にキャリアを設計できることが長期的な活躍につながります。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ルネサスエレクトロニクスの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用サイトから応募", desc: "jobs.renesas.com（日本語版career.renesas.com）で求人を検索し、オンラインで応募します。英文レジュメの提出を求められる場合があります。" },
            { step: 2, title: "書類選考", desc: "応募ポジションの要件と経験・スキルの適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等との面接。技術職は専門領域の深掘りが中心で、ポジションによっては英語面接が含まれます。" },
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

        <h2>ルネサスエレクトロニクスの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約749万円（2025年12月期）は提出会社単体・全従業員6,025名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>12月末決算のため、この数値は2025年12月31日現在のもの。2026年12月期の有報提出までは2025年12月期が最新確定値です。</li>
            <li>直近3年で889万円→809万円→749万円と推移しており、年度間の変動が大きい点は応募前に知っておくべき事実です（変動の内訳は有報の記載範囲では特定できないため、当サイトでは理由を断定しません）。</li>
            <li>平均年齢48.5歳・平均勤続23.4年という長期勤続の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まるため、エージェント経由でポジション別レンジを確認するのが確実です。</li>
          </ul>
        </div>

        <h2>ルネサス転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用サイトへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。半導体・電機メーカーの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。外資系・グローバル企業の選考に慣れており、英文レジュメの相談もしやすいです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。半導体エンジニアの市場価値の把握と、管理職・専門職の情報収集に向いています。" },
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

        <h2>ルネサスエレクトロニクス転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ルネサス転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。グローバル採用サイトの求人検索とエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体業界の年収ランキング</Link>
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/disco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ディスコ転職ガイド</Link>
            <Link href="/company/tokyo-electron/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京エレクトロン転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
