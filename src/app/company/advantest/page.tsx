import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "アドバンテストへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "アドバンテスト（証券コード6857）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,097万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/advantest/" },
  openGraph: {
    title: "アドバンテストへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "アドバンテスト（6857）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "アドバンテストの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は10,977,033円（約1,097万円・2026年3月期・提出会社単体）です。対前事業年度増減率は+4.6%でした。有報注記のとおり税込み支給額で基準外給与及び賞与を含む数値であり、単体2,033名の全従業員平均です。職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "アドバンテストは中途採用を行っていますか？",
    "a": "はい。公式サイトにキャリア採用の案内ページがあり、応募は専用のキャリア採用サイト（HRMOS）で受け付けています。2026年8月1日の確認時点では正社員求人46件（技術系30・生産系14・営業系1・人事1）が掲載されていました。募集状況は変動するため最新は公式サイトでご確認ください。"
  },
  {
    "q": "アドバンテストの転職難易度は高いですか？",
    "a": "半導体テストシステムで世界的に知られる企業で、専門性を持つ経験者採用が中心です。電気・電子、メカ、ソフトウェアなど募集職種に近い実務経験を持つ方が有利です。"
  },
  {
    "q": "アドバンテストの平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は20.16年、平均年齢は45.68歳（2026年3月期・提出会社）で、長期就業の傾向が読み取れます。"
  },
  {
    "q": "単体の平均年収はグループ全体の水準と同じですか？",
    "a": "異なります。有報では連結従業員7,241名に対し提出会社単体は2,033名で、単体はグループの約3割弱にあたる国内中核部分です。平均年間給与約1,097万円はこの単体・全従業員の平均であり、グループ全体の水準を示すものではありません。"
  },
  {
    "q": "アドバンテストの本社はどこですか？",
    "a": "本社は東京都千代田区丸の内1丁目6番2号です。応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "アドバンテストへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/advantest/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "アドバンテスト" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            アドバンテストへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            アドバンテスト（証券コード6857）は、半導体テストシステム（SoC・メモリ試験装置）およびメカトロニクス関連製品の製造・販売を手がけるメーカーです。半導体の品質を最終工程で支えるテスタ分野の代表的企業として知られています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：アドバンテスト転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は10,977,033円・約1,097万円（2026年3月期・有価証券報告書）。提出会社単体2,033名の全従業員平均で、対前事業年度増減率は+4.6%。</li>
            <li>単体はグループの約3割弱（連結7,241名に対し2,033名）にあたる国内中核部分。単体平均＝グループ全体の水準ではない点に注意。</li>
            <li>平均勤続20.16年・平均年齢45.68歳と長期就業型。アドバンテスト労働組合（電機連合加盟）がある。</li>
            <li>キャリア採用は専用サイト（HRMOS）で通年掲載。確認時点で正社員求人46件（技術系30・生産系14・営業系1・人事1）。</li>
          </ul>
        </div>

        <h2>アドバンテストの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社アドバンテスト" },
                { label: "証券コード", value: "6857" },
                { label: "本社", value: "東京都千代田区丸の内1丁目6番2号" },
                { label: "事業内容", value: "半導体テストシステム（SoC・メモリ試験装置）およびメカトロニクス関連製品の製造・販売（事業会社）" },
                { label: "平均年間給与", value: "10,977,033円（2026年3月期・有価証券報告書／提出会社。税込み支給額で基準外給与及び賞与を含む）" },
                { label: "決算期", value: "3月末決算（最新有報は第84期・2026年3月期、2026年6月26日提出）" },
                { label: "平均年齢", value: "45.68歳（同・提出会社）" },
                { label: "平均勤続年数", value: "20.16年（同・提出会社）" },
                { label: "従業員数", value: "2,033名（提出会社単体・臨時雇用者 年平均290名を外数）／連結7,241名" },
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
          ※数値は有価証券報告書（提出会社）に基づく単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>アドバンテストの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">アドバンテストは公式サイトに<a href="https://www.advantest.com/ja/about/career-jp/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用の案内ページ</a>を設けており、応募は専用の<a href="https://hrmos.co/pages/advantest?recruitment_country=jp" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用サイト（HRMOS）</a>で受け付けています。確認時点では正社員求人46件が「技術系（30）・生産系（14）・営業系（1）・人事（1）」に分類されて掲載されていました。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（公式表記の例）：電気/電子ハードウェア開発／メカ設計・開発／ソフトウェア開発／フィールドサービスエンジニア（FSE）／ITエンジニア。</li>
            <li>生産系ほか：製造技術／生産DX／生産管理／開発購買・グローバル調達・サプライチェーン。</li>
            <li>コーポレート系：販売支援／人事 など。</li>
            <li>※2026年8月1日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>アドバンテストで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "半導体・計測分野の専門性", desc: "テストシステムを支える電気・電子、メカ、ソフトウェア、計測など関連分野での実務経験が中核職種で評価されます。" },
            { title: "ハード×ソフトの横断力", desc: "試験装置はハードウェアとソフトウェアの複合システムのため、領域を跨いで課題を解決できる人材が活きます。" },
            { title: "グローバル対応力", desc: "連結7,241名のうち単体は2,033名で、海外拠点・海外顧客との協働機会が多く、英語や異文化協働の力が求められます。" },
            { title: "腰を据えて取り組む姿勢", desc: "平均勤続20.16年という数字が示すように、長期で専門性を深める働き方との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>アドバンテストの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。詳細は公式キャリア採用サイトでご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書（開発職はポートフォリオ等）を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
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

        <h2>アドバンテストの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,097万円（2026年3月期）は提出会社単体・全従業員2,033名の平均。有報注記のとおり税込み支給額で基準外給与及び賞与を含む。</li>
            <li>単体は連結7,241名の約3割弱にあたる国内中核部分。グループ全体の水準を示す数値ではない。</li>
            <li>IRBANK集計の推移では2022年3月期1,019万円→2023年3月期1,010万円→2024年3月期1,005万円→2025年3月期1,049万円→2026年3月期1,097万円。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>アドバンテスト転職で活用したい転職エージェント</h2>
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

        <h2>アドバンテスト転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">アドバンテスト転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/tokyo-electron/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京エレクトロン転職ガイド</Link>
            <Link href="/company/disco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ディスコ転職ガイド</Link>
            <Link href="/company/lasertec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">レーザーテック転職ガイド</Link>
            <Link href="/company/murata/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">村田製作所転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
