import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "信越化学工業への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "信越化学工業（証券コード4063）への転職を有価証券報告書などの一次データで解説。平均年間給与は約898万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "信越化学工業への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "信越化学工業（4063）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "信越化学工業の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約898万円（2026年3月期・提出会社単体）です。前期（2025年3月期）は約875万円でした。化学・素材分野の企業として高めの水準ですが、職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "信越化学工業は中途採用を行っていますか？",
    "a": "はい。技術系を中心にキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "信越化学工業の転職難易度は高いですか？",
    "a": "知名度の高い企業で、専門性を持つ経験者採用が中心です。総合化学・高機能材料や近接領域での実務経験を持つ方が有利です。"
  },
  {
    "q": "信越化学工業の平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は約18.8年（2026年3月期・提出会社）です。平均年齢は約40.8歳です。"
  },
  {
    "q": "信越化学工業の本社はどこですか？",
    "a": "本社は東京都千代田区丸の内です。事業所・工場勤務の職種もあり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "信越化学工業への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/shin-etsu/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "信越化学工業" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            信越化学工業への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            信越化学工業（証券コード4063）は、塩化ビニル樹脂や半導体シリコン（シリコンウエハー）、シリコーン、フォトレジストなどを手がける総合化学メーカーです。塩ビ・半導体シリコンで世界首位級のシェアを持つ高収益企業として知られます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：信越化学工業転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約898万円（2026年3月期・有価証券報告書・単体）。化学大手として高めの水準。</li>
            <li>塩化ビニル樹脂・半導体シリコンで世界首位級。高収益体質で知られる。</li>
            <li>平均勤続18.8年と長く、安定雇用型。腰を据えて専門を深める文化がうかがえる。</li>
            <li>研究開発・生産技術・プロセス開発など、化学・素材の専門職が中心。</li>
          </ul>
        </div>

        <h2>信越化学工業の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "信越化学工業" },
                { label: "証券コード", value: "4063（東証プライム）" },
                { label: "本社", value: "東京都千代田区丸の内" },
                { label: "事業内容", value: "塩化ビニル樹脂、半導体シリコン（シリコンウエハー）、シリコーン、フォトレジスト等の総合化学・高機能材料の製造・販売" },
                { label: "平均年間給与", value: "約898万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約40.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約18.8年（同・提出会社）" },
                { label: "従業員数", value: "4,059名（提出会社単体）／連結約2.7万名" },
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

        <h2>信越化学工業の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">信越化学工業の<a href="https://www.shinetsu.co.jp/jp/recruit/recruitment/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用情報ページ</a>で中途採用の募集が明記されているのは「プラントエンジニアリング職（機械・電気・計装・プロセス）」（対象：大学（高専専攻科）卒業者以上）です。全社横断のキャリア採用専用サイトは確認できず、中途採用はメールや工場窓口への問い合わせが入口になります。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>プラントエンジニアリング職は「ご興味のある方は、jinji@shinetsu.jpまでお問い合わせください」と案内されている。</li>
            <li>製造オペレーターは各工場窓口への問い合わせ。武生工場は「採用に関するお問い合わせ」から募集の有無を確認する形式で、ハローワーク等の求人サイトにも掲載と案内。</li>
            <li>武生工場サイトの社員紹介には、2023年・2024年にキャリア採用で入社した社員の事例が掲載されている。</li>
            <li>※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>信越化学工業で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "化学・材料の専門性", desc: "高分子・無機・半導体材料など、応募領域に沿った専門知識が中核職種で重視されます。" },
            { title: "プロセスを磨く姿勢", desc: "世界首位級のコスト競争力を支えるプロセス改善・生産技術への意欲が評価されます。" },
            { title: "安全・品質への誠実さ", desc: "化学プラントを扱うため、安全と品質に対する誠実な姿勢が全職種で問われます。" },
            { title: "長期で深める志向", desc: "平均勤続18.8年が示すように、専門を長期で深める文化との相性が問われます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>信越化学工業の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
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

        <h2>信越化学工業の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約898万円（2026年3月期）は単体全社員の平均。職種・年代・役職で水準は異なる。</li>
            <li>平均勤続18.8年・平均年齢40.8歳の安定雇用型で、平均値は上振れしやすい。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>信越化学工業転職で活用したい転職エージェント</h2>
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

        <h2>信越化学工業転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">信越化学工業転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
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
