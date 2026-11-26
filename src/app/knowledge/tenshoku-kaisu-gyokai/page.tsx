import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tenshoku-kaisu-gyokai/" },
  title: "転職回数を気にしない業界は？正社員の入職者に占める転職者の割合を産業別に比較【厚生労働省の統計】",
  description:
    "転職回数を気にしにくい業界を厚生労働省の統計で比較しました。正社員の入職者に占める転職入職者の割合は、サービス業（他に分類されないもの）76.3%、不動産業75.9%が高く、金融業・保険業は51.4%です。転職者を優先して採用したい事業所の割合も産業別に掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "転職回数を気にしない業界は？転職者の受け入れ状況を産業別に比較【厚生労働省の統計】",
    description: "雇用動向調査と転職者実態調査から、転職者の受け入れが多い業界・少ない業界を比較しています。",
  },
};

const CHECKED = "2026年11月26日";
const DOUKOU_TABLE = "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040305969";
const TENSHOKU_R07 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-gaikyo.pdf";
const TENSHOKU_INDEX = "https://www.mhlw.go.jp/toukei/list/6-18c-r07.html";

// k: 産業
// hire/tensh: 厚生労働省「令和6年 雇用動向調査」第9-3表 一般労働者・期間の定めなし（一般・定めなし）の入職者数（千人）と、うち既就業者（転職入職者）数（千人）
// share: 在籍する一般労働者に占める転職者の割合（%）＝令和7年 転職者実態調査 表2
// plan: 今後3年間に転職者を採用する予定がある事業所の割合（%）、pri: そのうち「転職者を優先して採用したい」割合（%）＝同 表7
// age: 転職者の賃金決定の際に「年齢」を考慮した事業所の割合（%）＝同 表5
type Row = { k: string; hire: number; tensh: number; share: number; plan: number; pri: number; age: number };
const ROWS: Row[] = [
  { k: "建設業", hire: 203.6, tensh: 144.4, share: 5.2, plan: 70.9, pri: 46.9, age: 36.6 },
  { k: "製造業", hire: 408.0, tensh: 266.1, share: 4.8, plan: 68.3, pri: 45.0, age: 52.4 },
  { k: "電気・ガス・熱供給・水道業", hire: 15.5, tensh: 9.5, share: 3.2, plan: 39.9, pri: 19.6, age: 44.1 },
  { k: "情報通信業", hire: 160.3, tensh: 99.0, share: 7.5, plan: 72.6, pri: 33.5, age: 50.8 },
  { k: "運輸業，郵便業", hire: 172.1, tensh: 124.7, share: 6.3, plan: 69.4, pri: 55.6, age: 23.4 },
  { k: "卸売業，小売業", hire: 488.5, tensh: 317.3, share: 6.0, plan: 64.5, pri: 33.7, age: 41.3 },
  { k: "金融業，保険業", hire: 80.8, tensh: 41.5, share: 4.0, plan: 52.6, pri: 25.6, age: 27.9 },
  { k: "不動産業，物品賃貸業", hire: 65.1, tensh: 49.4, share: 9.9, plan: 62.1, pri: 48.7, age: 32.3 },
  { k: "学術研究，専門・技術サービス業", hire: 131.2, tensh: 81.8, share: 6.6, plan: 60.9, pri: 40.5, age: 50.0 },
  { k: "宿泊業，飲食サービス業", hire: 327.3, tensh: 228.5, share: 5.2, plan: 59.3, pri: 38.8, age: 14.1 },
  { k: "生活関連サービス業，娯楽業", hire: 104.2, tensh: 74.7, share: 7.0, plan: 55.0, pri: 45.6, age: 33.5 },
  { k: "教育，学習支援業", hire: 108.8, tensh: 69.7, share: 3.8, plan: 44.0, pri: 24.2, age: 22.4 },
  { k: "医療，福祉", hire: 613.2, tensh: 429.9, share: 8.8, plan: 68.4, pri: 36.9, age: 26.3 },
  { k: "複合サービス事業", hire: 7.6, tensh: 3.6, share: 1.2, plan: 41.5, pri: 11.5, age: 43.8 },
  { k: "サービス業（他に分類されないもの）", hire: 373.9, tensh: 285.4, share: 9.3, plan: 61.9, pri: 57.2, age: 43.0 },
];
const TOTAL = { hire: 3260.8, tensh: 2225.9, share: 6.4, plan: 63.6, pri: 40.0, age: 35.3 };
const pct = (r: { hire: number; tensh: number }) => Math.round((r.tensh / r.hire) * 1000) / 10;
const SORTED = [...ROWS].sort((x, y) => pct(y) - pct(x));
const TOTAL_PCT = pct(TOTAL);
// 「正社員の入職者に占める転職者の割合」と「転職者を優先して採用したい割合」がどちらも全産業の値を上回る産業
const BOTH = SORTED.filter((r) => pct(r) > TOTAL_PCT && r.pri > TOTAL.pri);
const BOTH_LOW = SORTED.filter((r) => pct(r) < TOTAL_PCT && r.pri < TOTAL.pri);

const faq = [
  {
    q: "転職回数を気にしない業界はどこですか？",
    a: `転職回数そのものを企業がどう評価しているかを産業別に示した公的統計はありません。当サイトでは、転職者を多く受け入れている業界ほど転職歴が問題になりにくいと考え、2つの指標で比較しました。正社員（一般労働者・期間の定めなし）の入職者に占める転職入職者の割合と、「転職者を優先して採用したい」事業所の割合が、どちらも全産業の値を上回るのは${BOTH.map((r) => r.k).join("・")}です。`,
  },
  {
    q: "転職回数が多いと不利になりやすい業界はありますか？",
    a: `同じ2つの指標がどちらも全産業の値を下回るのは${BOTH_LOW.map((r) => r.k).join("・")}です。金融業・保険業は正社員の入職者に占める転職者の割合が${pct(ROWS[6])}%で、「新規学卒者を優先して採用したい」事業所の割合も28.1%と産業別で最も高くなっています（令和7年 転職者実態調査 表7）。ただし、これは業界全体の傾向で、個々の企業の選考方針とは異なる場合があります。`,
  },
  {
    q: "転職者の採用で企業は何を重視していますか？",
    a: "令和7年 転職者実態調査では、転職者の賃金決定の際に考慮した要素は「これまでの経験・能力・知識」が59.2%で最も多く、「年齢」35.3%、「賃金の世間相場」34.2%が続きます。最も重視した要素も「これまでの経験・能力・知識」が38.4%です。転職回数よりも、経験をどう説明できるかが評価に影響すると考えられます。",
  },
  {
    q: "転職者はどのくらい珍しいのですか？",
    a: `令和6年 雇用動向調査では、正社員（一般労働者・期間の定めなし）として入職した${(TOTAL.hire * 1000).toLocaleString("ja-JP")}人のうち、${(TOTAL.tensh * 1000).toLocaleString("ja-JP")}人（${TOTAL_PCT}%）が転職入職者です。正社員として入職する人の約3人に2人は、転職による入職です。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和6年 雇用動向調査 年計 結果表 第9-3表「産業（中分類）、性、職歴、就業形態、雇用形態別入職者数」", url: DOUKOU_TABLE },
  { label: "厚生労働省「令和7（2025）年転職者実態調査の概況」（令和8年9月25日公表）表1・表2・表5・表7", url: TENSHOKU_R07 },
  { label: "厚生労働省「令和7年転職者実態調査の概況」掲載ページ", url: TENSHOKU_INDEX },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "転職回数を気にしない業界" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職回数を気にしない業界は？正社員の入職者に占める転職者の割合を産業別に比較【厚生労働省の統計】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `${TOTAL_PCT}%`, l: "正社員の入職者に占める転職入職者の割合（全産業・令和6年）" },
              { v: `${pct(SORTED[0])}%`, l: `最も高い産業：${SORTED[0].k}` },
              { v: `${pct(ROWS[6])}%`, l: "金融業，保険業（期間の定めなしの一般労働者の入職者）" },
              { v: "59.2%", l: "賃金決定で「これまでの経験・能力・知識」を考慮した事業所" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>転職者の受け入れが多い業界は、{BOTH.map((r) => r.k).join("・")}です。</strong>
            厚生労働省の統計で、正社員（一般労働者・期間の定めなし）の入職者に占める転職入職者の割合と、「転職者を優先して採用したい」事業所の割合が、どちらも全産業の値を上回っています。
            反対に、{BOTH_LOW.map((r) => r.k).join("・")}はどちらも全産業の値を下回っています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            統計は{CHECKED}に厚生労働省・e-Statで確認しました。転職回数そのものへの評価を産業別に調べた公的統計はないため、転職者の受け入れの多さを目安として比較しています。個々の企業の選考方針とは異なる場合があります。
          </p>
        </div>

        <h2>正社員の入職者に占める転職入職者の割合（産業別）</h2>
        <p className="mb-4">
          厚生労働省「令和6年 雇用動向調査」の第9-3表から、一般労働者のうち雇用期間の定めがない人（いわゆる正社員にあたる働き方）として入職した人のうち、前職がある転職入職者の割合を当サイトで計算しました。割合が高い業界ほど、中途採用が入職の中心になっています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">産業</th>
                <th className="p-3 text-right">入職者（千人）</th>
                <th className="p-3 text-right">うち転職入職者（千人）</th>
                <th className="p-3 text-right rounded-tr-lg">転職入職者の割合</th>
              </tr>
            </thead>
            <tbody>
              {SORTED.map((r) => (
                <tr key={r.k} className={`border-b border-gray-100 ${pct(r) > TOTAL_PCT ? "bg-teal/5" : ""}`}>
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.hire.toFixed(1)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.tensh.toFixed(1)}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{pct(r)}%</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 font-bold">
                <td className="p-3">全産業</td>
                <td className="p-3 text-right">{TOTAL.hire.toFixed(1)}</td>
                <td className="p-3 text-right">{TOTAL.tensh.toFixed(1)}</td>
                <td className="p-3 text-right">{TOTAL_PCT}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※{a(DOUKOU_TABLE, "e-Stat 令和6年 雇用動向調査 第9-3表")}の「一般・定めなし」の列（男女計）。転職入職者は入職前1年間に就業経験がある人です。割合は当サイト計算。鉱業，採石業，砂利採取業は入職者が0.6千人と少ないため掲載していません。網掛けは全産業の値を上回る産業です。
        </p>

        <h2>転職者を優先して採用したい事業所の割合（産業別）</h2>
        <p className="mb-4">
          厚生労働省「令和7年 転職者実態調査」（令和8年9月25日公表）は、事業所に今後3年間の転職者の採用予定と、新規学卒者との優先順位を尋ねています。あわせて、在籍する一般労働者に占める転職者（直近1年間に採用された人）の割合と、転職者の賃金を決める際に「年齢」を考慮した割合を並べました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">産業</th>
                <th className="p-3 text-right">在籍者に占める転職者</th>
                <th className="p-3 text-right">転職者の採用予定あり</th>
                <th className="p-3 text-right">うち転職者を優先</th>
                <th className="p-3 text-right rounded-tr-lg">賃金決定で年齢を考慮</th>
              </tr>
            </thead>
            <tbody>
              {[...ROWS].sort((x, y) => y.pri - x.pri).map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.share}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.plan}%</td>
                  <td className={`p-3 text-right whitespace-nowrap ${r.pri > TOTAL.pri ? "font-bold text-navy" : ""}`}>{r.pri}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}%</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 font-bold">
                <td className="p-3">全産業</td>
                <td className="p-3 text-right">{TOTAL.share}%</td>
                <td className="p-3 text-right">{TOTAL.plan}%</td>
                <td className="p-3 text-right">{TOTAL.pri}%</td>
                <td className="p-3 text-right">{TOTAL.age}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※{a(TENSHOKU_R07, "厚生労働省「令和7年転職者実態調査の概況」")}表2（在籍する一般労働者に占める転職者の割合）・表7（今後3年間の採用予定。「うち転職者を優先」は採用予定がある事業所を100とした割合）・表5（賃金決定の際に考慮した要素・複数回答）。鉱業，採石業，砂利採取業は掲載を省略しています。
        </p>
        <p className="mb-10">
          「転職者を優先して採用したい」はサービス業（他に分類されないもの）57.2%、運輸業・郵便業55.6%、不動産業・物品賃貸業48.7%が高く、複合サービス事業11.5%、電気・ガス・熱供給・水道業19.6%、教育・学習支援業24.2%、金融業・保険業25.6%が低くなっています。
          賃金決定で年齢を考慮する割合は製造業52.4%、情報通信業50.8%が高く、年齢と経歴の対応を見られやすい業界といえます。一方、宿泊業・飲食サービス業は14.1%、運輸業・郵便業は23.4%と低めです。
        </p>

        <h2>2つの指標で見た業界の分類</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-navy mb-2">転職者の受け入れが多い業界</p>
            <ul className="text-sm space-y-1">
              {BOTH.map((r) => (
                <li key={r.k}>{r.k}（転職入職者 {pct(r)}%・転職者を優先 {r.pri}%）</li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-navy mb-2">転職者の受け入れが全産業より少ない業界</p>
            <ul className="text-sm space-y-1">
              {BOTH_LOW.map((r) => (
                <li key={r.k}>{r.k}（転職入職者 {pct(r)}%・転職者を優先 {r.pri}%）</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-4">※両方の指標が全産業の値（転職入職者{TOTAL_PCT}%・転職者を優先{TOTAL.pri}%）を上回る／下回る産業を当サイトで抽出しました。</p>
        <p className="mb-10">
          受け入れが多い業界でも、職種によって求められる経験は異なります。転職者実態調査の表4では、専門的・技術的な仕事で転職者を採用した理由は「経験を活かし即戦力になるから」64.1%が最も多く、事務的な仕事・販売の仕事・サービスの仕事などでは「離職者の補充のため」が最も多くなっています。
          転職回数が多い場合は、業界を選ぶだけでなく、これまでの経験のうち応募先で使えるものを具体的に示すことが大切です。職務経歴の伝え方は
          <Link href="/knowledge/job-history/" className="text-teal font-bold hover:underline">転職回数は何回から不利かのページ</Link>で解説しています。
        </p>

        <h2>転職回数が気になるときの確認事項</h2>
        <ul className="mb-10 space-y-2">
          <li><strong>応募先の業界の中途採用比率：</strong>上の表で、希望する業界の転職入職者の割合が全産業（{TOTAL_PCT}%）より高いかを確認します。</li>
          <li><strong>年齢を考慮する業界か：</strong>製造業・情報通信業・学術研究などは賃金決定で年齢を考慮する事業所が5割前後あり、年齢に見合った経験の説明が求められやすくなります。</li>
          <li><strong>企業規模：</strong>表7では事業所規模1,000人以上の90.5%が転職者の採用予定ありと回答しています。大企業ほど中途採用の枠が多い傾向です。</li>
          <li><strong>求人票の応募条件：</strong>統計は業界全体の傾向です。個々の企業の方針は求人票や面接で確認します。</li>
        </ul>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/job-history/" className="text-teal font-bold hover:underline">転職回数は何回から不利か</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className="text-teal font-bold hover:underline">転職が怖いときに確認すること</Link></li>
          <li><Link href="/knowledge/tenshoku-umakuikanai/" className="text-teal font-bold hover:underline">転職がうまくいかないときに見直すこと</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className="text-teal font-bold hover:underline">30代女性の転職</Link></li>
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
