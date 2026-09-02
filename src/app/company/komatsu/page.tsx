import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コマツ（小松製作所）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "コマツ（小松製作所）（証券コード6301）への転職を有価証券報告書などの一次データで解説。平均年間給与は約902万円（2026年3月期・有報／提出会社）。建設・鉱山機械で世界トップクラスの総合建機メーカーのキャリア採用窓口・選考の考え方をまとめました。",
  alternates: { canonical: "/company/komatsu/" },
  openGraph: {
    title: "コマツ（小松製作所）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "コマツ（小松製作所）（6301）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "コマツ（小松製作所）の平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月2日確認）によると、平均年間給与は約902万円（2026年3月期・提出会社単体）です。830万円（2024年3月期）→859万円（2025年3月期）→902万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "コマツ（小松製作所）は中途採用を行っていますか？",
    a: "はい。公式サイトの公式経験者採用ページ（www.komatsu.jp/ja/recruit/career）でキャリア採用の情報を確認できます（2026年9月2日確認）。",
  },
  {
    q: "コマツ（小松製作所）はどんな会社ですか？",
    a: "建設・鉱山機械で世界トップクラスの総合建機メーカー。スマートコンストラクション等の施工デジタル化も展開です。本社は東京都港区（赤坂）にあります。",
  },
  {
    q: "コマツ（小松製作所）の平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月2日確認）によると、平均勤続年数は17.1年、平均年齢は41.7歳（2026年3月期・提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "コマツ（小松製作所）への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-09-02",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/komatsu/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "コマツ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            コマツ（小松製作所）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            コマツ（小松製作所）（証券コード6301）は、建設・鉱山機械で世界トップクラスの総合建機メーカー。スマートコンストラクション等の施工デジタル化も展開です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：コマツ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約902万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年9月2日確認）。提出会社単体の全従業員平均。</li>
            <li>830万円（2024年3月期）→859万円（2025年3月期）→902万円（2026年3月期）と推移（3年連続で上昇し900万円台に到達）。</li>
            <li>キャリア採用は公式経験者採用ページで確認可能（2026年9月2日確認）。</li>
            <li>平均勤続17.1年の長期勤続型の構成での平均値です。</li>
          </ul>
        </div>

        <h2>コマツの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社小松製作所（コマツ）" },
                { label: "証券コード", value: "6301" },
                { label: "本社", value: "東京都港区（赤坂）" },
                { label: "事業内容", value: "建設・鉱山機械で世界トップクラスの総合建機メーカー。スマートコンストラクション等の施工デジタル化も展開" },
                { label: "平均年間給与", value: "約902万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月2日確認）" },
                { label: "直近3年の推移", value: "830万円（2024年3月期）→859万円（2025年3月期）→902万円（2026年3月期）" },
                { label: "平均年齢", value: "41.7歳（同・提出会社）" },
                { label: "平均勤続年数", value: "17.1年（同・提出会社）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月2日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>コマツの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年9月2日時点で、<a href="https://www.komatsu.jp/ja/recruit/career" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式経験者採用ページ</a>を確認できます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式サイトに経験者採用ページがあり、研究開発・生産管理・生産技術・調達・経理財務・法務・システムエンジニアなど職種別の募集を確認できます。</li>
            <li>リファラル採用・アルムナイ採用（退職者の再入社制度）も公式に案内されています。</li>
            <li>※募集状況は変動するため最新は公式採用ページでご確認ください。</li>
          </ul>
        </div>

        <h2>コマツで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "機械・車両系の開発・生産技術", desc: "建機のエンジン・油圧・車体などの機械系実務経験が中核領域に直結します。" },
            { title: "鉱山・海外市場への対応力", desc: "海外売上比率が非常に高く、鉱山機械など海外顧客と向き合う場面が多いため英語での実務力が評価されます。" },
            { title: "施工のデジタル化への関心", desc: "ICT建機・スマートコンストラクションなど建設現場のDXを進めており、IT×機械の複合スキルの需要が高まっています。" },
            { title: "長期就業を前提とした姿勢", desc: "平均勤続17.1年の長期就業型で、腰を据えたものづくりのキャリア志向が適合します。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>コマツの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページからエントリー", desc: "公式採用ページで求人を確認し、希望ポジションにエントリーします。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等との面接。実務経験と応募職種の適合が中心です。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。経験・能力を考慮した条件が提示されます。" },
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

        <h2>コマツの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約902万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>平均勤続17.1年の長期勤続型の構成での平均値です。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>コマツ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からベンチャーまで幅広い求人を扱っています。" },
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

        <h2>コマツ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">コマツ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/kubota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">クボタ転職ガイド</Link>
            <Link href="/company/yaskawa/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">安川電機転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
