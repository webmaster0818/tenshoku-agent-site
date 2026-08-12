import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ミネベアミツミへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ミネベアミツミ（証券コード6479）への転職を有価証券報告書などの一次データで解説。平均年間給与は約785万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/minebea-mitsumi/" },
  openGraph: {
    title: "ミネベアミツミへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ミネベアミツミ（6479）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ミネベアミツミの平均年収はいくらですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均年間給与は約785万円（2026年3月期・提出会社単体）です。従業員4,946名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "ミネベアミツミは中途採用を行っていますか？",
    "a": "はい。2026年8月12日時点で、公式サイトの採用情報ページにキャリア採用（中途採用）の専用ページが設けられており、「職種一覧（キャリア採用）」から外部の採用システム経由で応募できる仕組みになっています。元社員向けの「ジョブ・リターン制度」のエントリー窓口も用意されています。具体的な募集職種はリンク先の職種一覧で公開されているため、最新の募集状況は公式サイトでご確認ください。"
  },
  {
    "q": "ミネベアミツミの転職難易度は高いですか？",
    "a": "キャリア採用の常設窓口があり、応募ルート自体は開かれています。ベアリングなどの機械加工品、電子デバイス・半導体・小型モーターなどの電子機器、自動車部品・産業機械・住宅機器と事業領域が広いため、応募ポジションに対応する専門経験を持つ方が有利とみられます。"
  },
  {
    "q": "ミネベアミツミの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均勤続年数は15.9年、平均年齢は45.0歳（2026年3月期・提出会社）です。"
  },
  {
    "q": "ミネベアミツミの従業員数はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、提出会社単体で4,946名（2026年3月期）です。"
  },
  {
    "q": "ミネベアミツミの本社はどこですか？",
    "a": "公式サイトの会社概要によると、本社所在地（軽井沢工場）は長野県北佐久郡御代田町大字御代田4106-73、東京本部所在地は東京都港区東新橋1-9-3です。応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ミネベアミツミへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/minebea-mitsumi/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ミネベアミツミ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ミネベアミツミへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ミネベアミツミ（証券コード6479）は、ベアリングなどの機械加工品事業、電子デバイス・半導体・小型モーターなどの電子機器事業、自動車部品・産業機械・住宅機器事業を手がける精密部品メーカーです。公式サイトにキャリア採用の常設窓口があり、中途からの応募ルートが開かれています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ミネベアミツミ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約785万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年8月12日確認）。提出会社単体4,946名の全従業員平均。</li>
            <li>公式サイトにキャリア採用（中途採用）の専用ページと応募窓口があり、元社員向けのジョブ・リターン制度も用意されている（2026年8月12日確認）。</li>
            <li>平均年齢45.0歳・平均勤続15.9年と、長期就業の傾向がうかがえるデータ。</li>
            <li>機械加工品・電子機器・自動車部品等と事業領域が広く、ポジションに合った専門経験が評価されやすい。</li>
          </ul>
        </div>

        <h2>ミネベアミツミの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ミネベアミツミ株式会社" },
                { label: "証券コード", value: "6479" },
                { label: "本社", value: "長野県北佐久郡御代田町大字御代田4106-73（本社・軽井沢工場）／東京本部：東京都港区東新橋1-9-3" },
                { label: "事業内容", value: "ベアリングなどの機械加工品事業、電子デバイス・半導体・小型モーターなどの電子機器事業、自動車部品・産業機械・住宅機器事業" },
                { label: "平均年間給与", value: "約785万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "45.0歳（同・提出会社）" },
                { label: "平均勤続年数", value: "15.9年（同・提出会社）" },
                { label: "従業員数", value: "4,946名（提出会社単体）" },
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

        <h2>ミネベアミツミの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、ミネベアミツミの<a href="https://www.minebeamitsumi.com/corp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用情報ページ</a>には、新卒採用とは別にキャリア採用（中途採用）の専用ページが設けられています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キャリア採用ページには「職種一覧（キャリア採用）」の案内があり、外部の採用システム経由でエントリーする仕組みになっている。</li>
            <li>元社員向けの「ジョブ・リターン制度」のエントリー窓口も別途用意されている。</li>
            <li>キャリア採用の具体的な募集職種は、公式ページからリンクされた職種一覧で公開されている。</li>
            <li>公式採用サイトには「キャリア入社者の声」のコンテンツもあり、中途入社者の受け入れ実績がうかがえる。</li>
            <li>※2026年8月12日に公式サイトの採用情報ページ・キャリア採用ページで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ミネベアミツミで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "精密部品・量産ものづくりの専門性", desc: "ベアリングをはじめとする機械加工品を主力とするため、精密加工・生産技術・品質管理などの製造業経験が評価されます。" },
            { title: "電子・半導体分野の技術力", desc: "電子デバイス・半導体・小型モーターなどの電子機器事業も柱であり、電気・電子・半導体分野の設計開発経験が活きます。" },
            { title: "幅広い事業領域への適応力", desc: "機械加工品から自動車部品・産業機械・住宅機器まで事業が広く、担当領域を越えて学び続けられる姿勢が求められます。" },
            { title: "ポジションに合った実務経験", desc: "キャリア採用は職種一覧に基づく職種別の応募が基本のため、応募ポジションと自身の経験の適合性が重視されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ミネベアミツミの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
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

        <h2>ミネベアミツミの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約785万円（2026年3月期）は提出会社単体・全従業員4,946名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年齢45.0歳・平均勤続15.9年の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ミネベアミツミ転職で活用したい転職エージェント</h2>
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

        <h2>ミネベアミツミ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ミネベアミツミ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式のキャリア採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/nidec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ニデック転職ガイド</Link>
            <Link href="/company/murata/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">村田製作所転職ガイド</Link>
            <Link href="/company/smc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">SMC転職ガイド</Link>
            <Link href="/company/yaskawa/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">安川電機転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
