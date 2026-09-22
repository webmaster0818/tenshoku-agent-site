import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "スカイマークへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "スカイマーク（証券コード9204）への転職を有価証券報告書などの一次データで解説。平均年間給与は約593万円（2026年3月期・有報／提出会社）。国内線を中心に運航する航空会社のキャリア採用窓口・選考の考え方をまとめました。",
  alternates: { canonical: "/company/skymark/" },
  openGraph: {
    title: "スカイマークへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "スカイマーク（9204）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "スカイマークの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月22日確認）によると、平均年間給与は約593万円（2026年3月期・提出会社単体）です。577万円（2024年3月期）→577万円（2025年3月期）→593万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "スカイマークは中途採用を行っていますか？",
    a: "はい。公式サイトの採用ページ（https://www.skymark.co.jp/ja/company/recruit/）でキャリア採用の情報を確認できます（2026年9月22日確認）。",
  },
  {
    q: "スカイマークはどんな会社ですか？",
    a: "羽田・神戸などを拠点に国内線を中心に運航する航空会社です。本社は(会社概要は公式サイトをご確認ください)にあります。",
  },
  {
    q: "スカイマークの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月22日確認）によると、平均勤続年数は9.0年、平均年齢は36.5歳（2026年3月期・提出会社）です。",
  },
  {
    q: "航空会社の平均年収はどう推移していますか？",
    a: "有報の平均年間給与は賞与を含む値で、航空は旅客需要や燃油費の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、スカイマークも577万円→577万円→593万円と年ごとに動いています。高水準の年だけを見て将来も同じとは考えず、複数年の推移で見るのが実態に近い読み方です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "スカイマークへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-09-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/skymark/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "スカイマーク" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            スカイマークへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/skymark.jpg" alt="スカイマークの採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">スカイマーク 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            スカイマーク（証券コード9204）は、羽田・神戸などを拠点に国内線を中心に運航する航空会社です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">結論：スカイマーク転職のポイント</a></li>
            <li><a href="#s2" className="text-teal hover:underline">スカイマークの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">スカイマークの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">スカイマークで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">スカイマークの選考フロー（一般的な流れ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">スカイマークの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">スカイマーク転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">スカイマーク転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">結論：スカイマーク転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約593万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年9月22日確認）。提出会社単体の全従業員平均。</li>
            <li>577万円（2024年3月期）→577万円（2025年3月期）→593万円（2026年3月期）と推移。平均36.5歳と4社で最も若い構成。2024・2025年3月期は577万円で横ばいだったが最新期に+16万円。</li>
            <li>キャリア採用は公式採用ページで確認可能（2026年9月22日確認）。</li>
            <li>平均36.5歳・勤続9.0年。航空は旅客需要と燃油費の影響を受けやすく、コロナ禍で大きく落ち込んだ後に回復した経緯があります。単年の平均額だけでなく推移で見るのが安全です。</li>
          </ul>
        </div>

        <h2 id="s2">スカイマークの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社スカイマーク" },
                { label: "証券コード", value: "9204" },
                { label: "本社", value: "(会社概要は公式サイトをご確認ください)" },
                { label: "事業内容", value: "羽田・神戸などを拠点に国内線を中心に運航する航空会社" },
                { label: "平均年間給与", value: "約593万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月22日確認）" },
                { label: "直近3年の推移", value: "577万円（2024年3月期）→577万円（2025年3月期）→593万円（2026年3月期）" },
                { label: "平均年齢", value: "36.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "9.0年（同・提出会社）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月22日確認）に基づく提出会社単体・全従業員の平均です。航空会社は総合職・客室乗務員・整備士など職種によって働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">スカイマークの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年9月22日時点で、<a href="https://www.skymark.co.jp/ja/company/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用ページ</a>でキャリア採用の案内を確認できます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式サイトの採用ページから新卒採用とキャリア採用の窓口が分かれて案内されています。</li>
            <li>航空会社は総合職のほか、客室乗務員・運航乗務員・整備士など職種別の採用枠が設けられている場合があります。</li>
            <li>※募集職種・募集状況は変動するため、最新は公式採用ページでご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒でスカイマークのような大手を目指すなら、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />のような若手特化エージェントで求人の紹介と書類の壁打ちを受けるのが近道です。</p>
        </div>

        <h2 id="s4">スカイマークで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収593万円の水準", desc: "当サイト収録企業の中でも航空各社の中で、スカイマークは空運4社中4位です。" },
            { title: "需要回復の推移", desc: "577→577→593万円と年ごとに動きます。コロナ禍からの回復局面を数字が反映しています。" },
            { title: "グローバルな事業基盤", desc: "国際線や海外拠点を持つ会社では、英語を使う実務や海外勤務の機会があります。" },
            { title: "専門性の高い実務", desc: "路線計画・営業・整備・IT・財務など、職種ごとの専門実務経験が評価されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">スカイマークの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページからエントリー", desc: "公式採用ページで募集職種を確認し、希望ポジションにエントリーします。" },
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

        <h2 id="s6">スカイマークの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約593万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。航空は旅客需要・燃油費の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均36.5歳・勤続9.0年。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2 id="s7">スカイマーク転職で活用したい転職エージェント</h2>
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

        <h2 id="s8">スカイマーク転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">スカイマーク転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kuuun-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">空運(航空) 年収ランキング</Link>
            <Link href="/company/jal/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">日本航空(JAL)転職ガイド</Link>
            <Link href="/company/ana-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ANAホールディングス転職ガイド</Link>
            <Link href="/company/starflyer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スターフライヤー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
