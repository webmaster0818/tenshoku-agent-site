import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "安川電機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "安川電機（証券コード6506）への転職を有価証券報告書などの一次データで解説。平均年間給与は約859万円（2026年2月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/yaskawa/" },
  openGraph: {
    title: "安川電機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "安川電機（6506）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "安川電機の平均年収はいくらですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均年間給与は約859万円（2026年2月期・提出会社単体）です。同社は2月末決算のため、これが本記事執筆時点の最新確定値です。従業員3,114名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "安川電機は中途採用を行っていますか？",
    "a": "はい。2026年8月12日時点で、公式サイトの採用情報ページに「経験者採用」（中途採用）の窓口があり、安川電機本体の求人一覧のほか、安川オートメーション・ドライブなどグループ会社の経験者採用ページも案内されています。掲載職種には技術職（開発）、営業職、フィールドエンジニア職（サービス）、生産職、物流職、コーポレート職などがあります。最新の募集状況は公式サイトでご確認ください。"
  },
  {
    "q": "安川電機の転職難易度は高いですか？",
    "a": "経験者採用の常設窓口があり、開発・営業・サービスなど複数職種で募集が確認できるため、応募ルート自体は開かれています。サーボモータ・インバータ・産業用ロボットを主力とするため、モーションコントロールやロボティクス、FA関連分野での実務経験を持つ方が応募ポジションとの適合を示しやすいとみられます。"
  },
  {
    "q": "安川電機の平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均勤続年数は17.6年、平均年齢は42.7歳（2026年2月期・提出会社）です。"
  },
  {
    "q": "安川電機の従業員数はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、提出会社単体で3,114名（2026年2月期）です。"
  },
  {
    "q": "安川電機の本社はどこですか？",
    "a": "公式サイトの会社概要によると、本社は福岡県北九州市八幡西区黒崎城石2番1号です。応募ポジション・所属会社により勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "安川電機への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/yaskawa/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "安川電機" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            安川電機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            安川電機（証券コード6506）は、サーボモータ・インバータ・産業用ロボット等の製造販売を手がける北九州本社のメーカーです。公式サイトに「経験者採用」の常設窓口があり、開発・営業・フィールドエンジニアなど複数職種の募集が確認できます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：安川電機転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約859万円（2026年2月期・有価証券報告書。IR BANK掲載値・2026年8月12日確認）。提出会社単体3,114名の全従業員平均。</li>
            <li>同社は2月末決算のため、2026年2月期が本記事執筆時点の最新確定値。</li>
            <li>公式サイトに「経験者採用」の窓口があり、本体の求人一覧に加えグループ会社の採用ページも案内されている（2026年8月12日確認）。</li>
            <li>平均年齢42.7歳・平均勤続17.6年。サーボモータ・インバータ・産業用ロボットが主力。</li>
          </ul>
        </div>

        <h2>安川電機の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社安川電機" },
                { label: "証券コード", value: "6506" },
                { label: "本社", value: "福岡県北九州市八幡西区黒崎城石2番1号" },
                { label: "事業内容", value: "サーボモータ、インバータ、産業用ロボット等の製造販売" },
                { label: "平均年間給与", value: "約859万円（2026年2月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "決算期", value: "2月末決算（2026年2月期が執筆時点の最新確定値）" },
                { label: "平均年齢", value: "42.7歳（同・提出会社）" },
                { label: "平均勤続年数", value: "17.6年（同・提出会社）" },
                { label: "従業員数", value: "3,114名（提出会社単体）" },
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

        <h2>安川電機の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、安川電機の<a href="https://www.yaskawa.co.jp/jobs" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトの採用情報ページ</a>には「経験者採用」（中途採用）の窓口が設けられています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>安川電機本体の経験者採用は、外部採用システム上の求人一覧から応募する仕組みになっている。</li>
            <li>掲載職種には技術職（開発）、営業職、フィールドエンジニア職（サービス）、生産職、物流職、コーポレート職などがある。</li>
            <li>安川オートメーション・ドライブなど、グループ各社の経験者採用ページも同じ採用情報ページから案内されており、開発・営業・サービス分野の募集が複数社で並行して行われている。</li>
            <li>新卒採用は専用サイト（2027年卒・2028年卒対象）が別途用意されている。</li>
            <li>※2026年8月12日に公式サイトの採用情報ページで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>安川電機で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "モーションコントロール・ロボティクスの専門性", desc: "サーボモータ・インバータ・産業用ロボットを主力とするため、制御・メカトロニクス・ロボット関連の技術経験が評価されます。" },
            { title: "職種に対応した実務経験", desc: "開発・営業・フィールドエンジニア・生産・物流・コーポレートと職種別の募集のため、応募職種での実務経験の適合が重視されます。" },
            { title: "顧客の生産現場に向き合う力", desc: "フィールドエンジニア職（サービス）の募集があるように、顧客の生産現場での据付・保守・課題解決に向き合う対応力が求められます。" },
            { title: "グループ・拠点を越えた協働", desc: "本体とグループ各社が並行して採用を行う体制であり、所属会社や拠点を越えて連携しながら働ける協働姿勢が活きます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>安川電機の選考フロー（一般的な流れ）</h2>
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

        <h2>安川電機の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約859万円（2026年2月期）は提出会社単体・全従業員3,114名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>2月末決算のため、この数値は2026年2月28日現在のもの。2027年2月期の有報提出までは2026年2月期が最新確定値です。</li>
            <li>平均年齢42.7歳・平均勤続17.6年の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>グループ会社の求人は本体と労働条件が異なるため、応募先の募集要項での確認が重要です。中途入社時の提示額はポジション・経験により異なり、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>安川電機転職で活用したい転職エージェント</h2>
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

        <h2>安川電機転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">安川電機転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式の経験者採用求人一覧とエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/fanuc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ファナック転職ガイド</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/smc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">SMC転職ガイド</Link>
            <Link href="/company/minebea-mitsumi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ミネベアミツミ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
