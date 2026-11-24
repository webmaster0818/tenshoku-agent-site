import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-45sai/" },
  title: "45歳の平均年収は約576万円（45〜49歳）・男性約651万円・女性約450万円【令和7年 賃金構造基本統計調査】",
  description:
    "45歳前後の平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額と年間賞与から当サイトで算出しました。45〜49歳は約576万円（男性約651万円・女性約450万円）です。企業規模別（1,000人以上は約700万円）・学歴別・勤続年数別・職種別の値と、国税庁の平均給与も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "45歳の平均年収は約576万円（45〜49歳）【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省・国税庁の統計から、45歳前後の平均年収を企業規模別・学歴別・勤続年数別・職種別に算出しています。",
  },
};

const CHECKED = "2026年11月24日";

// 年収（万円）＝ 所定内給与額（千円）×12 ＋ 年間賞与その他特別給与額（千円）
const annual = (m: number, b: number) => Math.round(m * 12 + b) / 10;
const f1 = (v: number) => `約${v.toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

// e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・民営事業所）45〜49歳 千円
const T = annual(377.9, 1223.4);
const M = annual(420.7, 1456.8);
const F = annual(305.7, 829.7);
const T40 = annual(364.3, 1167.2);
const T50 = annual(388.8, 1316.5);

// 同表の企業規模別シート（45〜49歳）[男女計, 男性, 女性]
const size = [
  { k: "1,000人以上", t: [439.3, 1723.7], m: [495.1, 2111.5], f: [340.1, 1034.7] },
  { k: "100〜999人", t: [362.1, 1128.2], m: [400.6, 1320.6], f: [300.9, 821.8] },
  { k: "10〜99人", t: [330.0, 791.5], m: [362.1, 892.2], f: [274.8, 618.6] },
];

// 同表 45〜49歳・男女計の学歴別（企業規模計）
const edu = [
  { k: "高校卒", v: [322.2, 920.0] },
  { k: "専門学校卒", v: [334.0, 932.3] },
  { k: "高専・短大卒", v: [340.8, 1135.3] },
  { k: "大学卒", v: [458.4, 1709.7] },
  { k: "大学院卒", v: [617.8, 2758.9] },
];

// 同表 45〜49歳・男女計の勤続年数別（企業規模計）
const tenure = [
  { k: "0年", v: [304.5, 80.5] },
  { k: "1〜2年", v: [316.3, 604.4] },
  { k: "3〜4年", v: [316.7, 744.5] },
  { k: "5〜9年", v: [333.9, 881.8] },
  { k: "10〜14年", v: [351.5, 959.7] },
  { k: "15〜19年", v: [391.0, 1360.7] },
  { k: "20〜24年", v: [453.9, 1864.2] },
  { k: "25〜29年", v: [429.1, 1788.8] },
];

// 職種（小分類）別の45〜49歳（同調査 職種 第5表）：労働者数の多い職種
const jobs = SHOKUSHU.filter((x) => x.a4549)
  .map((x) => ({ k: x.k, a: annual(x.a4549![0], x.a4549![1]), w: x.a4549![2] }))
  .sort((p, q) => q.w - p.w)
  .slice(0, 8);
const jobTotalW = SHOKUSHU.reduce((s, x) => s + (x.a4549 ? x.a4549[2] : 0), 0);
const mgr = SHOKUSHU.find((x) => x.k === "管理的職業従事者")!;

// 国税庁「令和7年分 民間給与実態統計調査」第14図 年齢階層別の平均給与（45〜49歳・万円）
const NTA = { t: 550, m: 683, f: 377 };

const o = calcTakeHome(Math.round(T * 10000), true);

const faq = [
  {
    q: "45歳の平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の45〜49歳（一般労働者・男女計）は、所定内給与額が月37.79万円、年間賞与その他特別給与額が122.34万円です。所定内給与額の12か月分と賞与を合計すると${f1(T)}です（当サイト計算）。国税庁「令和7年分 民間給与実態統計調査」の45〜49歳の平均給与は${NTA.t}万円です。どちらも5歳刻みのため、45歳ちょうどの値は公表されていません。`,
  },
  {
    q: "45歳の男性・女性の平均年収はいくらですか？",
    a: `賃金構造基本統計調査から計算すると、45〜49歳の男性は${f1(M)}、女性は${f1(F)}です（当サイト計算・残業代を含まない）。国税庁の調査では男性${NTA.m}万円、女性${NTA.f}万円です。`,
  },
  {
    q: "大企業に勤める45歳の平均年収はいくらですか？",
    a: `同調査で企業規模1,000人以上の45〜49歳は${f1(annual(439.3, 1723.7))}（男性${f1(annual(495.1, 2111.5))}・女性${f1(annual(340.1, 1034.7))}）です。企業規模10〜99人の${f1(annual(330.0, 791.5))}と比べると約${Math.round(annual(439.3, 1723.7) - annual(330.0, 791.5))}万円高く、差の約4割は年間賞与の違いによるものです（当サイト計算）。`,
  },
  {
    q: "45歳で年収576万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なし・介護保険料ありの前提で、年収${T.toFixed(1)}万円の手取りは年${man(o.net)}、月${man(o.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表「年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額」（産業計・企業規模計／1,000人以上／100〜999人／10〜99人）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  SHOKUSHU_SOURCES[1],
  { label: "国税庁「令和7年分 民間給与実態統計調査」第14図 年齢階層別の平均給与", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
  { label: "協会けんぽ 令和8年度 都道府県単位保険料率（東京都）・介護保険料率", url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/rate_prefectures/r08" },
];

const yen = (v: number) => `${v.toFixed(1)}千円`;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "45歳の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            45歳の平均年収は約576万円（45〜49歳）・男性約651万円・女性約450万円【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(T), l: "45〜49歳の年収（男女計・当サイト計算）" },
              { v: f1(annual(439.3, 1723.7)), l: "企業規模1,000人以上の45〜49歳" },
              { v: f1(annual(330.0, 791.5)), l: "企業規模10〜99人の45〜49歳" },
              { v: `${NTA.t}万円`, l: "45〜49歳の平均給与（国税庁）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、45歳前後（45〜49歳）の平均年収は<strong>{f1(T)}</strong>（男性{f1(M)}・女性{f1(F)}）です。
            40〜44歳（{f1(T40)}）より約{Math.round(T - T40)}万円高く、50〜54歳（{f1(T50)}）より約{Math.round(T50 - T)}万円低い水準です。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            45〜49歳では企業規模による差が大きく、1,000人以上の企業は{f1(annual(439.3, 1723.7))}、10〜99人の企業は{f1(annual(330.0, 791.5))}です。国税庁の調査（残業代を含む給与総額）では、45〜49歳の平均給与は{NTA.t}万円です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代などの所定外給与は含みません。
            統計値は{CHECKED}にe-Stat・国税庁の公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>45〜49歳の企業規模別の平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">男女計</th>
                <th className="p-3 text-right">男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">企業規模計</td>
                <td className="p-3 text-right">{f1(T)}</td>
                <td className="p-3 text-right">{f1(M)}</td>
                <td className="p-3 text-right">{f1(F)}</td>
              </tr>
              {size.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{f1(annual(x.t[0], x.t[1]))}</td>
                  <td className="p-3 text-right">{f1(annual(x.m[0], x.m[1]))}</td>
                  <td className="p-3 text-right">{f1(annual(x.f[0], x.f[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・民営事業所）の企業規模別シートから当サイト計算。</p>
        <p className="mb-10">
          企業規模1,000人以上と10〜99人の差は男女計で約{Math.round(annual(439.3, 1723.7) - annual(330.0, 791.5))}万円です。このうち年間賞与の差が{((1723.7 - 791.5) / 10).toFixed(1)}万円、所定内給与額（12か月分）の差が{(((439.3 - 330.0) * 12) / 10).toFixed(1)}万円で、
          差の約{Math.round(((1723.7 - 791.5) / 10 / (annual(439.3, 1723.7) - annual(330.0, 791.5))) * 100)}%が賞与によるものです（当サイト計算）。45歳前後で企業規模の異なる会社へ転職する場合は、月給だけでなく賞与の支給実績を確認すると年収の見込みを比べやすくなります。
        </p>

        <h2>45〜49歳の学歴別の平均年収</h2>
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
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{yen(x.v[0])}</td>
                  <td className="p-3 text-right">{yen(x.v[1])}</td>
                  <td className="p-3 text-right font-bold">{f1(annual(x.v[0], x.v[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同表の45〜49歳・男女計・企業規模計。中学卒と学歴不明は省略しています。</p>
        <p className="mb-10">
          45〜49歳の大学卒は{f1(annual(458.4, 1709.7))}で、高校卒（{f1(annual(322.2, 920.0))}）との差は約{Math.round(annual(458.4, 1709.7) - annual(322.2, 920.0))}万円です。40〜44歳の同じ差（約{Math.round(annual(425.3, 1557.1) - annual(309.0, 848.3))}万円）より広がっています（当サイト計算）。
        </p>

        <h2>45〜49歳の勤続年数別の給与</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">勤続年数</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {tenure.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{yen(x.v[0])}</td>
                  <td className="p-3 text-right">{yen(x.v[1])}</td>
                  <td className="p-3 text-right">{f1(annual(x.v[0], x.v[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同表の45〜49歳・男女計・企業規模計。年間賞与は前年（令和6年）1年間の支給額のため、勤続0年・1〜2年の人は賞与が少なく出ます。
        </p>
        <p className="mb-10">
          所定内給与額で比べると、勤続0〜4年は月30万円台前半で、勤続20〜24年（{yen(453.9)}）とは月約14万円の差があります。これは同じ人の転職前後を比べたものではなく、各勤続年数に在籍している人の平均です。
          45歳前後の転職では、前職の勤続年数で上がってきた給与がそのまま引き継がれるとは限らないため、提示額の根拠（等級・役職）を確認することをおすすめします。
        </p>

        <h2>45〜49歳で働く人が多い職種の年収</h2>
        <p>
          45〜49歳の一般労働者を職種（小分類）別に見ると、最も多いのは管理的職業従事者で、144職種の45〜49歳の労働者数（推計）の{Math.round((mgr.a4549![2] / jobTotalW) * 1000) / 10}%を占めます（当サイト計算）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（45〜49歳）</th>
                <th className="p-3 text-right">労働者数（推計）</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">約{Math.round(x.w / 100).toLocaleString("ja-JP")}千人</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査（職種）第5表（一般労働者・産業計・企業規模計・男女計）の45〜49歳から当サイト計算。労働者数は十人単位の推計値を千人単位に換算しています。</p>
        <p className="mb-10">
          管理的職業従事者の45〜49歳は{f1(annual(mgr.a4549![0], mgr.a4549![1]))}で、同年代の平均を大きく上回ります。一方、販売店員・介護職員の45〜49歳は400万円前後です。
          職種別の全体の順位は<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>、40歳から加わる介護保険料の影響は
          <Link href="/knowledge/salary-40sai/" className="text-teal font-bold hover:underline">40歳の平均年収</Link>のページで解説しています。
          なお、年収{T.toFixed(1)}万円の手取りは、東京都・協会けんぽ・独身・賞与なし・介護保険料ありの前提で年{man(o.net)}（月{man(o.netMonthly)}）です（当サイト試算）。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/salary-40sai/" className="text-teal font-bold hover:underline">40歳の平均年収</Link></li>
          <li><Link href="/knowledge/salary-50sai/" className="text-teal font-bold hover:underline">50歳の平均年収</Link></li>
          <li><Link href="/age/40s/" className="text-teal font-bold hover:underline">40代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link></li>
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
