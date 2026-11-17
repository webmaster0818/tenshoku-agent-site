import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/daisotsu-nenshu/" },
  title: "大卒の平均年収は約611万円・高卒との差は約176万円【令和7年 賃金構造基本統計調査】",
  description:
    "大学卒の平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額と年間賞与から当サイトで算出しました。大学卒は約611万円（男性約670万円・女性約490万円）で、高校卒の約435万円と約176万円の差があります。年齢階級別の推移と、学歴別（高校・専門学校・高専短大・大学院）の比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "大卒の平均年収は約611万円【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省の賃金構造基本統計調査から、大学卒の平均年収を年齢・性別・学歴別に算出しています。",
  },
};

const CHECKED = "2026年11月17日";

// 厚生労働省「令和7年 賃金構造基本統計調査」一般労働者・産業計・企業規模計（10人以上）
// 第2表 学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額（勤続年数計・千円）
type Row = { k: string; m: number; b: number };
const edu: Row[] = [
  { k: "高校", m: 297.2, b: 782.6 },
  { k: "専門学校", m: 313.7, b: 814.5 },
  { k: "高専・短大", m: 321.2, b: 1008.3 },
  { k: "大学", m: 396.3, b: 1357.0 },
  { k: "大学院", m: 517.4, b: 2132.6 },
  { k: "学歴計", m: 340.6, b: 1009.6 },
];
const univAge = [
  { k: "20〜24歳", t: [263.9, 390.1], male: [267.4, 395.9], fem: [260.4, 384.3] },
  { k: "25〜29歳", t: [296.4, 853.0], male: [305.1, 905.4], fem: [286.9, 795.6] },
  { k: "30〜34歳", t: [340.3, 1092.0], male: [358.9, 1212.5], fem: [311.5, 906.5] },
  { k: "35〜39歳", t: [382.2, 1309.6], male: [405.9, 1445.2], fem: [332.4, 1023.8] },
  { k: "40〜44歳", t: [425.3, 1557.1], male: [452.8, 1729.3], fem: [363.7, 1171.0] },
  { k: "45〜49歳", t: [458.4, 1709.7], male: [491.4, 1904.5], fem: [373.8, 1212.0] },
  { k: "50〜54歳", t: [494.9, 2057.0], male: [528.8, 2254.7], fem: [386.3, 1424.5] },
  { k: "55〜59歳", t: [529.1, 2172.0], male: [556.3, 2318.1], fem: [416.2, 1566.4] },
  { k: "60〜64歳", t: [420.2, 1300.2], male: [430.3, 1324.8], fem: [360.1, 1152.1] },
];
const univMale = { m: 429.6, b: 1542.0 };
const univFem = { m: 327.4, b: 973.3 };

// 年収（万円）＝ 所定内給与額×12 ＋ 年間賞与その他特別給与額
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

const U = annual(396.3, 1357.0);
const H = annual(297.2, 782.6);

const faq = [
  {
    q: "大卒の平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の大学卒（一般労働者・男女計）の所定内給与額は月39.63万円、年間賞与その他特別給与額は135.70万円です。所定内給与額の12か月分と賞与を合計すると${f1(U)}です（当サイト計算）。残業代などの所定外給与は含みません。`,
  },
  {
    q: "大卒と高卒の年収の差はどのくらいですか？",
    a: `同じ方法で計算すると、高校卒は${f1(H)}で、大学卒との差は${f1(U - H)}です（当サイト計算）。ただし、学歴別の平均年齢・勤続年数・職種の構成が異なるため、この差がすべて学歴によるものとは言えません。`,
  },
  {
    q: "大卒の年収が最も高くなるのは何歳ですか？",
    a: `大学卒・男女計では55〜59歳が${f1(annual(529.1, 2172.0))}で最も高く、60〜64歳では${f1(annual(420.2, 1300.2))}に下がります（当サイト計算）。同調査は同じ人を追跡したものではなく、各年齢階級に在職している人の平均です。`,
  },
  {
    q: "大卒の初任給はいくらですか？",
    a: "同調査の令和7年の新規学卒者（大学）の賃金は月26.23万円（男女計262.3千円）です。初任給と年齢別の伸びは、当サイトの「25歳の平均年収」のページで詳しく比較しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表「学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額」（産業計）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(3) 学歴別にみた賃金 第3表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(10) 新規学卒者の学歴別にみた賃金 第10表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/10.pdf" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "大卒の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            大卒の平均年収は約611万円・高卒との差は約176万円【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(U), l: "大学卒の平均年収（男女計）" },
              { v: f1(annual(univMale.m, univMale.b)), l: "大学卒・男性" },
              { v: f1(annual(univFem.m, univFem.b)), l: "大学卒・女性" },
              { v: f1(H), l: "高校卒の平均年収（男女計）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、大学卒の平均年収は<strong>{f1(U)}</strong>です（一般労働者・男女計・平均年齢41.8歳）。
            男性は{f1(annual(univMale.m, univMale.b))}、女性は{f1(annual(univFem.m, univFem.b))}で、高校卒（{f1(H)}）との差は{f1(U - H)}です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代・休日出勤手当などの所定外給与は含みません。
            統計値は{CHECKED}に厚生労働省・e-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>学歴別の平均年収（男女計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">学歴</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {edu.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "大学" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・企業規模10人以上・勤続年数計）。短時間労働者は含みません。中学卒・学歴不明の区分は省略しています。
        </p>
        <p className="mb-10">
          大学卒の年収は高校卒の約{(U / H).toFixed(2)}倍で、差の内訳は所定内給与（12か月分）が{f1(((396.3 - 297.2) * 12) / 10)}、賞与が{f1((1357.0 - 782.6) / 10)}です（当サイト計算）。
          月給の差に比べて賞与の差が大きく、賞与の水準が年収差を広げています。大学院卒は{f1(annual(517.4, 2132.6))}です。
        </p>

        <h2>大学卒の年齢階級別の平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">男女計</th>
                <th className="p-3 text-right">男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {univAge.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.t[0], x.t[1]))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.male[0], x.male[1]))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.fem[0], x.fem[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同表の大学卒の所定内給与額×12＋年間賞与その他特別給与額（当サイト計算）。20〜24歳は前年の在籍期間が短く賞与が少ないため、年収が低めに出ます。
        </p>
        <p className="mb-10">
          大学卒・男女計の年収は、25〜29歳の{f1(annual(296.4, 853.0))}から55〜59歳の{f1(annual(529.1, 2172.0))}まで上がり、60〜64歳で{f1(annual(420.2, 1300.2))}に下がります。
          男女の差は25〜29歳では{f1(annual(305.1, 905.4) - annual(286.9, 795.6))}ですが、50〜54歳では{f1(annual(528.8, 2254.7) - annual(386.3, 1424.5))}に広がります（当サイト計算）。
          年齢ごとの全体の平均は<Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link>・
          <Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link>に掲載しています。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "国税庁の「平均給与」とは定義が違う", d: "国税庁「民間給与実態統計調査」の平均給与（令和7年分 487万円）は、正社員以外を含む1年を通じて勤務した給与所得者の給与総額です。賃金構造基本統計調査の一般労働者は短時間労働者を含まず、所定外給与も上の計算には含めていないため、両者を直接比べることはできません。" },
            { t: "学歴だけで年収が決まるわけではない", d: "学歴別の平均年齢は高校卒46.8歳・大学卒41.8歳、平均勤続年数は高校卒14.2年・大学卒12.2年です（同調査 第3表）。職種や企業規模の構成も学歴によって異なります。" },
            { t: "転職先の年収は求人ごとに確認する", d: "大学卒以上を応募条件とする求人もあれば、学歴を問わない求人もあります。提示年収に賞与や残業代がどれだけ含まれているかを、求人票や面接で確認してください。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          統計の平均ではなく、自分の経歴に近い人の年収を参考にしたい場合は、類似ユーザーの年収実績から市場価値を示す診断機能を持つ転職サービスもあります。
          機能と注意点は<Link href="/review/miidas/" className="text-teal font-bold hover:underline">ミイダスの評判・口コミ</Link>で解説しています。
        </p>

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
          <li><Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link></li>
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link></li>
          <li><Link href="/knowledge/shoukyu-heikin/" className="text-teal font-bold hover:underline">昇給の平均</Link></li>
          <li><Link href="/company/" className="text-teal font-bold hover:underline">企業別の平均年収（有価証券報告書）</Link></li>
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
