import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "THKへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "THK（証券コード6481）への転職を有価証券報告書などの一次データで解説。平均年間給与は648万円（2025年12月期・有報／提出会社）。中途採用の状況、求められる人材、選考の考え方をまとめました。",
  alternates: { canonical: "/company/thk/" },
  openGraph: {
    title: "THKへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "THK（6481）の平均年収・中途採用・選考の考え方を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "THKの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は648万円（2025年12月期・提出会社単体）です（IR BANK掲載値・2026年8月12日確認）。単体4,016名の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "THKは中途採用を行っていますか？",
    "a": "2026年8月12日時点で、公式サイト（thk.com）の会社情報セクションには中途採用（キャリア採用）の常設ページ・エントリー窓口は確認できませんでした。中途で入社するルートは、転職エージェント経由の求人や転職サイト掲載求人などが中心になるとみられます。最新の募集状況は公式サイトでご確認ください。"
  },
  {
    "q": "THKの転職難易度は高いですか？",
    "a": "LMガイド（直動案内機器）を世界に先駆けて開発した機械要素部品の大手メーカーで、機械設計・生産技術・材料など製造業での専門経験を持つ方が親和性の高い事業内容です。公式サイトに中途採用の常設窓口が確認できないため（2026年8月12日時点）、求人情報の入手にはエージェントの活用が現実的です。"
  },
  {
    "q": "THKの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書によると平均勤続年数は19.2年、平均年齢は41.5歳（2025年12月期・提出会社）です（IR BANK掲載値・2026年8月12日確認）。平均勤続19.2年は長期就業の傾向を示す数値です。"
  },
  {
    "q": "THKの従業員数はどのくらいですか？",
    "a": "有価証券報告書によると提出会社単体4,016名（2025年12月期・IR BANK掲載値・2026年8月12日確認）です。公式サイトの会社概要では従業員数3,906名・連結会社合計9,530名（2026年6月1日現在）と記載されています。"
  },
  {
    "q": "THKの本社はどこですか？",
    "a": "本社は東京都港区芝浦2-12-10です（公式サイト会社概要・2026年8月12日確認）。国内には支店・テクノセンターや生産拠点があり、勤務地はポジションにより異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "THKへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/thk/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "THK" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            THKへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            THK（証券コード6481）は、公式サイトの会社概要によると、LMガイド・ボールスプライン・ボールねじ・LMガイドアクチュエータ等の機械要素部品の開発・製造・販売を事業内容とし、メカトロ関連製品やTHK免震システムも手がけるメーカーです（1971年設立・本社は東京都港区芝浦）。
            本記事では、有価証券報告書（IR BANK掲載値・2026年8月12日確認）などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：THK転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は648万円（2025年12月期・有価証券報告書、IR BANK掲載値・2026年8月12日確認）。提出会社単体4,016名の全従業員平均。</li>
            <li>平均年齢41.5歳・平均勤続19.2年（同・提出会社）。平均勤続19.2年と長期就業の傾向が顕著。</li>
            <li>2026年8月12日時点で、公式サイト（thk.com）の会社情報セクションに中途採用（キャリア採用）の常設ページは確認できず。求人情報はエージェント経由での収集が現実的。</li>
            <li>12月末決算のため、有報の最新確定値は2025年12月期。</li>
          </ul>
        </div>

        <h2>THKの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "THK株式会社" },
                { label: "証券コード", value: "6481" },
                { label: "本社", value: "東京都港区芝浦2-12-10" },
                { label: "事業内容", value: "LMガイド、ボールスプライン、ボールねじ、LMガイドアクチュエータ等の機械要素部品の開発・製造・販売。精密XYステージやリニアモータアクチュエータ等のメカトロ関連製品、THK免震システムも展開（公式サイト会社概要より）" },
                { label: "平均年間給与", value: "648万円（2025年12月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "41.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "19.2年（同・提出会社）" },
                { label: "従業員数", value: "4,016名（提出会社単体・2025年12月期有報）／公式サイト会社概要では3,906名・連結会社合計9,530名（2026年6月1日現在）" },
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

        <h2>THKの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、THKの<a href="https://www.thk.com/jp/ja/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイト</a>の会社情報セクション（会社概要・事業領域・拠点一覧等）には、中途採用（キャリア採用）の常設ページやエントリー窓口は確認できませんでした。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式サイトの日本語トップページおよび会社情報配下のページを確認したが、採用情報への導線は確認できなかった（/jp/ja/recruit/ 等のURLも存在せず）。</li>
            <li>中途で入社するルートは、転職エージェント経由の求人や転職サイト掲載求人などが中心になるとみられる。</li>
            <li>事業内容から、機械設計・生産技術・品質保証・材料など製造業系の専門職種との親和性が高い。</li>
            <li>※2026年8月12日に公式サイト（thk.com）で確認。募集状況・サイト構成は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>THKで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "機械要素部品の専門性", desc: "LMガイド・ボールねじ等の直動システムを扱うため、機械設計、精密加工、トライボロジーなど機械系の専門経験が活きる事業内容です。" },
            { title: "生産技術・品質の実務力", desc: "国内外に生産拠点を持つ量産メーカーであり、生産技術・品質保証・製造管理の実務経験は親和性が高い領域です。" },
            { title: "幅広い産業への応用視点", desc: "工作機械・半導体製造装置からロボット、免震システムまで用途が広く、顧客産業を横断して考えられる視点が役立ちます。" },
            { title: "腰を据えて働く姿勢", desc: "平均勤続19.2年（有報・提出会社）と長期就業の傾向が強く、長期でキャリアを築く姿勢が合いやすい環境といえます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>THKの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※中途採用の選考フローは公式サイトで確認できなかったため、以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
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

        <h2>THKの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>648万円（2025年12月期）は提出会社単体・全従業員4,016名の平均であり、職種・年代・役職で実際の水準は異なります。</li>
            <li>出典は有価証券報告書（IR BANK掲載値・2026年8月12日確認）。</li>
            <li>12月末決算のため、この数値は2025年12月期のもの。次回の有報数値は2026年12月期分で更新されます。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>THK転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式サイトに中途採用の常設窓口が確認できないため、求人情報の入手には複数のエージェントに登録して広く集めるのが有効です。</p>
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

        <h2>THK転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">THK転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/nabtesco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ナブテスコ転職ガイド</Link>
            <Link href="/company/fanuc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ファナック転職ガイド</Link>
            <Link href="/company/daifuku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ダイフク転職ガイド</Link>
            <Link href="/company/nidec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ニデック転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
