import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "東急への転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "東急（証券コード9005）への転職を有価証券報告書などの一次データで解説します。平均年間給与は約903万円（2026年3月期・有価証券報告書／提出会社）。キャリア採用の窓口と選考の考え方をまとめています。",
  alternates: { canonical: "/company/tokyu/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "東急への転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "東急（9005）の平均年収・中途採用・選考を有価証券報告書ベースで解説します。",
  },
};

const faqData = [
  {
    q: "東急の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月23日提出、EDINETで2026年10月25日確認）によると、平均年間給与は9,034,606円（約903万円・提出会社単体）です。776万円（2024年3月期）→883万円（2025年3月期）→903万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年9月10日確認）。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "東急は中途採用を行っていますか？",
    a: "はい。公式採用サイト（www.tokyu-recruit.jp/）でキャリア採用の情報を確認できます（2026年9月10日確認）。",
  },
  {
    q: "東急はどんな会社ですか？",
    a: "東急電鉄を中核に、渋谷再開発など不動産・生活サービス・ホテルを展開する事業持株会社です。私鉄大手の中で不動産の比重が最も高いグループの一つです。本社は東京都渋谷区にあります。",
  },
  {
    q: "東急の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は12年11か月、平均年齢は42歳11か月（2026年3月期・提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東急への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/tokyu/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "東急" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            東急への転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/tokyu.jpg" alt="東急の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">東急 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            東急（証券コード9005）は、東急電鉄を中核に、渋谷再開発など不動産・生活サービス・ホテルを展開する事業持株会社です。私鉄大手の中で不動産の比重が最も高いグループの一つです。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">東急転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">東急の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">東急の中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">東急で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">東急の選考フロー（一般的な流れ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">東急の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">東急転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">東急転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">東急転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約903万円（9,034,606円、2026年3月期・有価証券報告書、EDINETで2026年10月25日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>776万円（2024年3月期）→883万円（2025年3月期）→903万円（2026年3月期）と推移しています（2年で計127万円上昇）。</li>
            <li>キャリア採用の情報は公式採用サイトで確認できます（2026年9月10日確認）。</li>
            <li>2019年10月1日に鉄軌道業を東急電鉄株式会社へ会社分割により移転しており、提出会社(東急)は不動産・経営管理中心の事業持株会社です。鉄道現業の平均とは異なります。</li>
          </ul>
        </div>

        <h2 id="s2">東急の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "東急株式会社" },
                { label: "証券コード", value: "9005" },
                { label: "本社", value: "東京都渋谷区" },
                { label: "事業内容", value: "東急電鉄を中核に、渋谷再開発など不動産・生活サービス・ホテルを展開する事業持株会社。私鉄大手で不動産比重が最も高いグループの一つ" },
                { label: "平均年間給与", value: "約903万円（9,034,606円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "776万円（2024年3月期）→883万円（2025年3月期）→903万円（2026年3月期）" },
                { label: "平均年齢", value: "42歳11か月（同・提出会社）" },
                { label: "平均勤続年数", value: "12年11か月（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YE63.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月23日提出、EDINETで2026年10月25日確認）、2025年3月期以前の推移はIR BANK掲載値（2026年9月10日確認）に基づく提出会社単体の平均です。有価証券報告書の注記により、従業員数（1,551人、臨時従業員786人は外数）は就業人員数（社外への出向者を除き、社外からの出向者を含む）で、出向者3,369名を含みません。平均年間給与は賞与及び基準外賃金を含みます。年度の連結業績に応じた特別賞与は支給時期の関係で2026年3月期の平均年間給与に含まれておらず、対前事業年度増減率は2.3%（特別賞与を除いた実質の増減率は5.1%）と記載されています。平均年齢は42歳11か月、平均勤続年数は12年11か月です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">東急の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年9月10日時点で、<a href="https://www.tokyu-recruit.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>を確認できます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式採用サイトで新卒・キャリア採用の情報を公開しています。</li>
            <li>都市開発・生活サービス・デジタルなど職種別のキャリア採用があります。</li>
            <li>※募集状況は変動するため、最新情報は公式採用サイトでご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で東急のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">東急で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "都市開発・不動産", desc: "渋谷を中心とする大規模再開発が事業の柱で、デベロッパー・都市開発の経験が最も直結します。" },
            { title: "沿線生活サービス", desc: "商業施設・ホテル・生活サービスまで沿線経済圏を運営する複合企業です。" },
            { title: "DX・新規事業", desc: "MaaS・データ活用など非鉄道領域の人材採用に積極的です。" },
            { title: "平均勤続12年11か月の流動性", desc: "私鉄大手では中途比率が高めの構成です(提出会社)。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">東急の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページからエントリー", desc: "公式採用ページで求人を確認し、希望ポジションにエントリーします。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等による面接が行われます。主に実務経験と応募職種との適合性が確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考を通過すると内定となります。経験・能力を考慮した条件が提示されます。" },
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

        <h2 id="s6">東急の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約903万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>2019年10月1日に鉄軌道業を東急電鉄株式会社へ会社分割により移転しており、提出会社(東急)は不動産・経営管理中心の事業持株会社です。鉄道現業の平均とは異なります。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジをご確認ください。</p>
        </div>

        <h2 id="s7">東急転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や、管理職・専門職の情報収集に適しています。" },
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

        <h2 id="s8">東急転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">東急転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/tetsudo-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">鉄道 年収ランキング</Link>
            <Link href="/company/odakyu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">小田急電鉄転職ガイド</Link>
            <Link href="/company/tokyo-metro/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京メトロ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
