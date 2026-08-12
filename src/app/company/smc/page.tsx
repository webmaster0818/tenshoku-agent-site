import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SMCへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "SMC（証券コード6273）への転職を有価証券報告書などの一次データで解説。平均年間給与は約780万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/smc/" },
  openGraph: {
    title: "SMCへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "SMC（6273）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "SMCの平均年収はいくらですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均年間給与は約780万円（2026年3月期・提出会社単体）です。従業員6,560名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "SMCは中途採用を行っていますか？",
    "a": "はい。2026年8月12日時点で、公式採用サイトにキャリア採用（中途採用）の専用ページがあります。営業・技術（製品開発・生産技術など）・企画業務系（経理・人事・総務・購買など）の職種と、勤務地域限定の技能・製造・一般事務系の職種で、それぞれ別の応募窓口が案内されています。最新の募集職種は公式採用サイトでご確認ください。"
  },
  {
    "q": "SMCの転職難易度は高いですか？",
    "a": "キャリア採用の常設窓口があり、営業・技術・企画業務系から技能・製造系まで幅広い職掌で募集枠が用意されています。主力の自動制御機器（空気圧制御システム等）に関連する分野での実務経験を持つ方が、応募ポジションとの適合を示しやすいとみられます。"
  },
  {
    "q": "SMCの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均勤続年数は19.7年、平均年齢は41.1歳（2026年3月期・提出会社）です。"
  },
  {
    "q": "SMCの従業員数はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、提出会社単体で6,560名（2026年3月期）です。"
  },
  {
    "q": "SMCの本社はどこですか？",
    "a": "公式サイトの会社案内によると、本社は東京都中央区京橋一丁目5番5号です。国内には主要都市の販売拠点や、草加・筑波などの生産拠点もあり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SMCへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/smc/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "SMC" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            SMCへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            SMC（証券コード6273）は、空気圧制御システムを主要製品とする自動制御機器製品の製造加工・販売を手がける東京本社のメーカーです。公式採用サイトにキャリア採用の専用ページがあり、営業・技術・企画業務系から技能・製造系まで職掌別の応募窓口が用意されています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：SMC転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約780万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年8月12日確認）。提出会社単体6,560名の全従業員平均。</li>
            <li>公式採用サイトにキャリア採用ページがあり、営業・技術・企画業務系と技能・製造・一般事務系（勤務地域限定）で別々の応募窓口が案内されている（2026年8月12日確認）。</li>
            <li>平均勤続19.7年・平均年齢41.1歳と、長期就業の傾向が顕著なデータ。</li>
            <li>事業内容は自動制御機器製品の製造加工・販売と、焼結濾過体・各種濾過装置の製造・販売。</li>
          </ul>
        </div>

        <h2>SMCの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "SMC株式会社" },
                { label: "証券コード", value: "6273" },
                { label: "本社", value: "東京都中央区京橋一丁目5番5号" },
                { label: "事業内容", value: "自動制御機器製品の製造加工および販売、焼結濾過体および各種濾過装置の製造および販売（主要製品は空気圧制御システム）" },
                { label: "平均年間給与", value: "約780万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "41.1歳（同・提出会社）" },
                { label: "平均勤続年数", value: "19.7年（同・提出会社）" },
                { label: "従業員数", value: "6,560名（提出会社単体）" },
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

        <h2>SMCの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、SMCの<a href="https://www.smcworld.com/about/recruit/ja-jp/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用情報ページ</a>から<a href="https://smcrecruit.smcworld.com/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用（中途採用）ページ</a>にアクセスでき、職掌別の応募窓口が案内されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>営業職・技術職（製品開発・生産技術など）・企画業務職（経理・人事・総務・購買・生産戦略企画・知的財産など）のキャリア採用窓口がある。</li>
            <li>技能職・製造職・一般事務職は、勤務地域限定の職種として拠点ごとに募集する別窓口が用意されている。</li>
            <li>キャリア採用ページには、新卒・中途・経歴に関係なくフラットな環境である旨の記載がある。</li>
            <li>正規雇用労働者の中途採用比率も公式サイト上で公表されており、中途入社の受け入れ実績が開示されている。</li>
            <li>※2026年8月12日に公式サイト・キャリア採用ページで確認。募集状況は変動するため最新は公式採用サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>SMCで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "自動化・省力化分野への関心", desc: "空気圧制御システムなど産業界の自動化・省力化を支える製品を扱うため、FA・制御機器分野への関心と関連経験が評価されます。" },
            { title: "職掌に対応した実務経験", desc: "営業・技術（製品開発・生産技術）・企画業務（経理・人事・購買等）と職掌別の採用のため、応募職種での実務経験が重視されます。" },
            { title: "製造現場を支える技能", desc: "技能職・製造職は勤務地域限定で拠点ごとに募集されており、ものづくりの現場経験を活かしやすい枠組みです。" },
            { title: "顧客の課題に向き合う姿勢", desc: "自動制御機器は多様な産業の生産現場で使われるため、顧客の課題を把握し提案につなげる姿勢が求められます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>SMCの選考フロー（一般的な流れ）</h2>
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

        <h2>SMCの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約780万円（2026年3月期）は提出会社単体・全従業員6,560名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均勤続19.7年という長期就業前提の給与体系である点も踏まえて読む必要があります。</li>
            <li>営業・技術・企画業務系と技能・製造系では職掌が分かれており、募集要項ごとの条件確認が重要です。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>SMC転職で活用したい転職エージェント</h2>
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

        <h2>SMC転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">SMC転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式のキャリア採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/fanuc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ファナック転職ガイド</Link>
            <Link href="/company/yaskawa/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">安川電機転職ガイド</Link>
            <Link href="/company/minebea-mitsumi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ミネベアミツミ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
