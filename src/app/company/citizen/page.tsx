import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "シチズン時計への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "シチズン時計（証券コード7762）への転職を有価証券報告書などの一次データで解説。平均年間給与は約789万円（2026年3月期・有報／提出会社）ですが、事業持株会社のため単体770名（本社機能中心）の値である点に注意。中途採用の状況、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "シチズン時計への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "シチズン時計（7762）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。事業持株会社ゆえの数値の読み方も整理。",
  },
};

const faqData = [
  {
    "q": "シチズン時計の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約789万円（2026年3月期・提出会社）です。ただしシチズン時計は事業持株会社であり、この数値は単体770名（本社機能中心）の平均です。シチズン時計マニュファクチャリング等の製造子会社の従業員は含まれないため、グループ全体の実態より高めに出る点に注意が必要です。"
  },
  {
    "q": "シチズン時計は中途採用を行っていますか？",
    "a": "はい。時計の企画・開発、グループ経営戦略に関わる本社機能（経営企画・経理・人事等）などの職種でキャリア採用が行われることがあります。募集主体がシチズン時計（持株会社）かグループ各社かはポジションにより異なるため、公式採用サイトでご確認ください。"
  },
  {
    "q": "シチズン時計の転職難易度は高いですか？",
    "a": "知名度の高い時計ブランドで、単体は770名と少数精鋭のため、中途の募集枠は多くありません。時計・精密機器業界の経験や、本社機能での専門経験を持つ方が有利です。"
  },
  {
    "q": "シチズン時計のどんな職種の募集がありますか？",
    "a": "時計類の企画・開発・マーケティングに加え、持株会社としてのグループ経営戦略に関わる経営企画・経理・人事などコーポレート職種の募集が中心です。製造・生産技術系はグループの製造子会社が募集主体となる場合があります。募集の有無は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都西東京市田無町6-1-12です。グループ各社への応募の場合は勤務地が異なるため、応募ポジションごとにご確認ください。"
  },
  {
    "q": "定着率は高いですか？",
    "a": "有報の平均勤続年数は約17.4年（2026年3月期・提出会社）と上場企業の中でも長い部類です。長く働く社員が多い企業文化がうかがえます。"
  }
];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "シチズン時計" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            シチズン時計への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            シチズン時計（証券コード7762）は東京都西東京市に本社を置く時計メーカーです。時計類とその部品の製造販売を行うとともに、事業持株会社としてグループ経営戦略の策定・推進等を担っており、連結従業員は14,254名（2025年9月末）にのぼります。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：シチズン時計転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約789万円（2026年3月期・有価証券報告書・提出会社）。ただし事業持株会社のため、単体770名（本社機能中心）の値であり、製造子会社（シチズン時計マニュファクチャリング等）の従業員は含まれない。グループ全体の実態より高めに出る点に注意。</li>
            <li>2021年3月期の593万円から5年で約196万円上昇と、単体平均給与は上昇傾向。</li>
            <li>平均勤続約17.4年と長く、定着率の高さがうかがえるのが特徴。</li>
            <li>単体は770名と少数精鋭。時計の企画・開発とグループ経営を担う本社機能が中心。</li>
            <li>製造・生産系の求人はグループ各社が募集主体となる場合があり、応募先の法人確認が重要。</li>
          </ul>
        </div>

        <h2>シチズン時計の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "シチズン時計" },
                { label: "証券コード", value: "7762（東証プライム）" },
                { label: "本社", value: "東京都西東京市田無町6-1-12" },
                { label: "事業内容", value: "時計類とその部品の製造販売、並びに持株会社としてのグループ経営戦略の策定・推進等" },
                { label: "平均年間給与", value: "約789万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "43.9歳（同・提出会社）" },
                { label: "平均勤続年数", value: "17.4年（同・提出会社）" },
                { label: "従業員数", value: "770名（同・提出会社単体）／連結14,254名（2025年9月末）" },
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
          ※シチズン時計は事業持株会社です。平均年間給与 約789万円は単体770名（本社機能中心）の平均であり、シチズン時計マニュファクチャリング等の製造子会社の従業員は含まれません。そのため、グループ全体の給与実態よりも高めに出る点にご注意ください。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>シチズン時計の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            シチズン時計は公式採用サイトに<a href="https://www.citizen.co.jp/recruit/info/career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用情報</a>ページを常設しており、<strong className="text-navy">中途採用比率は2025年度で50%</strong>（出典：公式採用サイト。2023〜2025年度の比率を公式開示）と、採用の半分を中途が占めます。応募は<a href="https://citizen-recruit.snar.jp/index.aspx?id=mLqGGGMpvyg" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">エントリーサイト</a>で現在募集中の職種を確認し、職種ごとの「エントリー」から行う形式です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（公式表記・2026年7月31日確認時点のエントリーサイト掲載分）：ブランド推進（事務系職）、サステナビリティ推進業務（気候変動関連）（事務系職）、海外販売会社の事業管理（事務系職）、腕時計完成品のルート国内営業職（事務系職）、社内SE（ERP/SAP経験者）、社内SE（AWS・Azure経験者・英語力歓迎）、組込みソフトウェア開発（技術系職）、生産技術（技術系職）。</li>
            <li>希望職種の募集がない場合は「キャリア登録」を活用でき、登録内容と合致するポジション募集時に選考案内（キャリア登録枠：基礎研究、製品設計、生産技術、国内営業、海外営業、デザイナー職）。</li>
            <li>勤務地は東京事業所／本社（東京都西東京市）、所沢事業所（埼玉県所沢市）、全国営業所・海外拠点（公式記載）。</li>
            <li>エントリーサイトはシチズングループ共通基盤で、グループ各社（シチズンマシナリー等）も中途採用を実施。面接回数等の選考ステップ詳細は公式ページ上では確認できず。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。
          </p>
        </div>

        <h2>シチズン時計で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "時計・精密機器業界での実務経験", desc: "時計類の企画・開発・マーケティングなど、時計または近接する精密機器業界での経験が評価されやすい構造です。" },
            { title: "本社機能での専門性", desc: "経営企画・経理・人事など、持株会社としてグループ経営を担う職種では、各分野の専門経験が重視されます。" },
            { title: "グループを跨ぐ調整力", desc: "連結14,254名のグループ各社と連携する立場のため、組織を跨ぐコミュニケーション力が求められます。" },
            { title: "腰を据えて働く姿勢", desc: "平均勤続17.4年という数字が示すように、長期でキャリアを築く文化との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>シチズン時計の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
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

        <h2>シチズン時計の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約789万円（2026年3月期）は事業持株会社であるシチズン時計単体770名（本社機能中心）の平均。製造子会社（シチズン時計マニュファクチャリング等）の従業員は含まれず、グループ全体の給与実態より高めに出る。</li>
            <li>2021年3月期の593万円から5年で約196万円上昇しており、単体の平均給与は上昇傾向にある。</li>
            <li>平均勤続17.4年・平均年齢43.9歳の安定雇用型。</li>
            <li>応募先がシチズン時計（持株会社）かグループ各社かで水準が異なりうるため、募集主体の法人確認が重要。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>シチズン時計転職で活用したい転職エージェント</h2>
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

        <h2>シチズン時計転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">シチズン時計転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/casio/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カシオ計算機転職ガイド</Link>
            <Link href="/company/yamaha/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤマハ転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニーグループ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
