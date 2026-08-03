import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "村田製作所への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "村田製作所（証券コード6981）への転職を有価証券報告書などの一次データで解説。平均年間給与は約838万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "村田製作所への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "村田製作所（6981）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "村田製作所の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約838万円（2026年3月期・提出会社単体）です。前期（2025年3月期）は約803万円でした。電子部品分野の企業として高めの水準ですが、職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "村田製作所は中途採用を行っていますか？",
    "a": "はい。技術系を中心にキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "村田製作所の転職難易度は高いですか？",
    "a": "知名度の高い企業で、専門性を持つ経験者採用が中心です。電子部品や近接領域での実務経験を持つ方が有利です。"
  },
  {
    "q": "村田製作所の平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は約14.4年（2026年3月期・提出会社）です。平均年齢は約40.5歳です。"
  },
  {
    "q": "村田製作所の本社はどこですか？",
    "a": "本社は京都府長岡京市です。事業所・工場勤務の職種もあり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "村田製作所への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/murata/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "村田製作所" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            村田製作所への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            村田製作所（証券コード6981）は、積層セラミックコンデンサ（MLCC）を中心とした電子部品を手がける京都の大手メーカーです。MLCCで世界シェア首位級を持ち、スマートフォンや車載向けを支えるコンデンサ・通信部品などに強みがあります。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：村田製作所転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約838万円（2026年3月期・有価証券報告書・単体）。電子部品大手として堅調な水準。</li>
            <li>MLCC（積層セラミックコンデンサ）で世界シェア首位級。スマホ・車載が需要の柱。</li>
            <li>平均年齢40.5歳・平均勤続14.4年。京都・長岡京を軸にした技術志向の文化。</li>
            <li>材料・プロセス・回路・生産技術など、電子部品の専門職が中心。</li>
          </ul>
        </div>

        <h2>村田製作所の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "村田製作所" },
                { label: "証券コード", value: "6981（東証プライム）" },
                { label: "本社", value: "京都府長岡京市" },
                { label: "事業内容", value: "積層セラミックコンデンサ（MLCC）等の電子部品の開発・製造・販売" },
                { label: "平均年間給与", value: "約838万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約40.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約14.4年（同・提出会社）" },
                { label: "従業員数", value: "11,174名（提出会社単体）" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>村田製作所の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">村田製作所は<a href="https://recruit.murata.com/ja-jp/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">専用のキャリア採用サイト</a>を常設しており、<a href="https://joblist.recruit.murata.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">求人一覧</a>からの募集職種エントリーと「キャリア登録」の2本立てで採用を行っています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（求人一覧の公式表記例）：無線通信機能搭載製品開発 / 電源IC、パワーマネジメントIC開発 / 電源IC、電源モジュール開発 / IT基盤エンジニア/ネットワークシステム / DX推進 / 品質保証システムエンジニア / 営業/営業系エンジニア(FAE) / 経営管理（2026年7月31日確認時点）。区分として総合職・一般職（関東地区／京都・大阪地区）あり。</li>
            <li>応募方法（公式FAQ記載）：(1)公式応募サイトへ直接登録、(2)人材紹介会社（転職エージェント）経由——の2ルート。面接は原則オンライン。</li>
            <li>「キャリア登録」制度あり：すぐに応募しなくても登録しておくと、ポジション発生時に個別連絡を受けられる仕組み。</li>
            <li>キャリア入社者向けコンテンツが充実：中堅社員座談会（キャリア採用）・管理職座談会（キャリア採用）・社員インタビュー・グローバルビジネス座談会・新規事業技術開発座談会などを公式掲載。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</p>
        </div>

        <h2>村田製作所で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "材料・部品の専門性", desc: "セラミックス材料や電子部品プロセスなど、応募領域の専門知識が中核職種で重視されます。" },
            { title: "微細化・高信頼への探究", desc: "小型化・高性能化が進む部品づくりに向き合う探究心・改善意欲が評価されます。" },
            { title: "品質への責任感", desc: "スマホ・車載を支える部品を扱うため、品質と信頼性への責任感が問われます。" },
            { title: "チームで作り込む力", desc: "材料・設計・生産が連携する開発のため、部門を跨ぐ協働力が求められます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>村田製作所の選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用ページ記載の流れ（2026年7月31日確認）。公式FAQでは書類提出から内定通知までの期間は「おおよそ1〜2ヶ月」とされています。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "公式応募サイトへの直接登録、または人材紹介会社経由で応募し、書類選考が行われます。" },
            { step: 2, title: "適性検査", desc: "書類選考通過後、適性検査が実施されます。" },
            { step: 3, title: "一次面接", desc: "面接は原則オンラインで実施と公式FAQに記載されています。" },
            { step: 4, title: "二次面接（最終）", desc: "二次面接が最終面接となります。" },
            { step: 5, title: "内定通知・条件提示", desc: "選考通過後、内定通知・条件提示が行われます。" },
            { step: 6, title: "入社", desc: "条件面の確認を経て入社となります。" },
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

        <h2>村田製作所の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約838万円（2026年3月期）は単体全社員の平均。職種・年代・役職で水準は異なる。</li>
            <li>電子部品市況で業績が変動し、賞与など処遇に反映されやすい。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>村田製作所転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
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

        <h2>村田製作所転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">村田製作所転職を成功させるために</h2>
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
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
