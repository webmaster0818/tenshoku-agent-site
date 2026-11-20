import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man, yen as yenFmt } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-50sai/" },
  title: "50歳の平均年収は約598万円（50〜54歳）・男性約683万円・女性約453万円【令和7年 賃金構造基本統計調査】",
  description:
    "50歳前後の平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額と年間賞与から当サイトで算出しました。50〜54歳は約598万円（男性約683万円・女性約453万円）です。企業規模別（1000人以上と10〜99人で約243万円の差）・学歴別・勤続年数別の比較と、手取りの試算も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "50歳の平均年収は約598万円（50〜54歳）【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省の統計から、50歳前後の平均年収を性別・企業規模別・学歴別・勤続年数別に算出しています。",
  },
};

const CHECKED = "2026年11月20日";

// 年収（万円）＝ 所定内給与額（千円）×12 ＋ 年間賞与その他特別給与額（千円）
const annual = (m: number, b: number) => Math.round(m * 12 + b) / 10;
const f1 = (v: number) => `約${v.toFixed(1)}万円`;

// e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・企業規模計・民営事業所）千円
const ages = [
  { age: "45〜49歳", t: [377.9, 1223.4], m: [420.7, 1456.8], f: [305.7, 829.7] },
  { age: "50〜54歳", t: [388.8, 1316.5], m: [437.5, 1580.7], f: [305.4, 863.5] },
  { age: "55〜59歳", t: [396.2, 1330.3], m: [445.6, 1589.6], f: [305.7, 855.6] },
  { age: "60〜64歳", t: [329.3, 861.5], m: null, f: null },
];

// 同表 50〜54歳・学歴計の企業規模別（男女計・男性・女性）
const sizes = [
  { k: "1,000人以上", t: [447.6, 1889.1], m: [511.2, 2336.7], f: [332.2, 1077.8] },
  { k: "100〜999人", t: [376.0, 1207.5], m: [420.8, 1430.3], f: [303.6, 847.5] },
  { k: "10〜99人", t: [336.6, 788.2], m: [370.6, 871.4], f: [277.8, 644.1] },
];

// 同表 50〜54歳・男女計の学歴別
const edu = [
  { k: "中学卒", v: [314.5, 638.2] },
  { k: "高校卒", v: [335.1, 989.6] },
  { k: "専門学校卒", v: [357.0, 1065.8] },
  { k: "高専・短大卒", v: [349.0, 1219.5] },
  { k: "大学卒", v: [494.9, 2057.0] },
  { k: "大学院卒", v: [648.3, 2814.3] },
];

// 同表 50〜54歳・男女計の勤続年数別
const tenure = [
  { k: "0年", v: [291.5, 75.1] },
  { k: "1〜2年", v: [305.2, 513.5] },
  { k: "3〜4年", v: [307.7, 639.3] },
  { k: "5〜9年", v: [323.9, 757.3] },
  { k: "10〜14年", v: [336.2, 864.7] },
  { k: "15〜19年", v: [376.3, 1181.1] },
  { k: "20〜24年", v: [407.1, 1387.5] },
  { k: "25〜29年", v: [489.5, 2216.6] },
  { k: "30年以上", v: [465.1, 2103.7] },
];

const T = annual(388.8, 1316.5);
const M = annual(437.5, 1580.7);
const F = annual(305.4, 863.5);
const T45 = annual(377.9, 1223.4);
const T55 = annual(396.2, 1330.3);
const T60 = annual(329.3, 861.5);
const L = annual(447.6, 1889.1);
const S = annual(336.6, 788.2);
const t0 = annual(291.5, 75.1);
const t25 = annual(489.5, 2216.6);
const o50 = calcTakeHome(Math.round(T * 10000), true);

const faq = [
  {
    q: "50歳の平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の50〜54歳（一般労働者・男女計）は、所定内給与額が月38.88万円、年間賞与その他特別給与額が131.65万円です。所定内給与額の12か月分と賞与を合計すると${f1(T)}です（当サイト計算）。同調査は5歳刻みのため、50歳ちょうどの値は公表されていません。`,
  },
  {
    q: "50歳の男性・女性の平均年収はいくらですか？",
    a: `同じ方法で計算すると、50〜54歳の男性は${f1(M)}、女性は${f1(F)}で、差は${f1(M - F)}です（当サイト計算）。女性の所定内給与額は45〜49歳・50〜54歳・55〜59歳のいずれも月30.5万円前後で、年齢による伸びがほとんどありません。`,
  },
  {
    q: "50歳の平均年収は会社の規模でどのくらい違いますか？",
    a: `50〜54歳（男女計）では、企業規模1,000人以上が${f1(L)}、100〜999人が${f1(annual(376.0, 1207.5))}、10〜99人が${f1(S)}です。1,000人以上と10〜99人の差は${f1(L - S)}で、そのうち約${Math.round(((1889.1 - 788.2) / 10 / (L - S)) * 100)}%は年間賞与の差です（当サイト計算）。`,
  },
  {
    q: "50歳で年収598万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なし・介護保険料ありの前提で、年収${T.toFixed(1)}万円の手取りは年${man(o50.net)}、月${man(o50.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
  {
    q: "50代前半で転職した人の給与はどのくらいですか？",
    a: `同調査で50〜54歳を勤続年数別に見ると、勤続0年の人の所定内給与額は月29.15万円で、勤続25〜29年の人（月48.95万円）より月19.80万円低くなっています。40〜44歳では、勤続0年と最も高い勤続15〜19年の差が月9.24万円で、50〜54歳の差はその約2倍です。これは同じ人の転職前後を比べたものではなく、各勤続年数に在籍している人の平均です。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表「学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額」（産業計・企業規模計／1,000人以上／100〜999人／10〜99人）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 調査の概要」（調査の時期：令和7年6月分の賃金、賞与は令和6年1年間）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/gaiyo.html" },
  { label: "協会けんぽ 令和8年度保険料率のお知らせ（介護保険料率 1.62%）", url: "https://www.kyoukaikenpo.or.jp/g7/cat330/sb3130/r08/" },
  { label: "協会けんぽ 令和8年度 都道府県単位保険料率（東京都 9.85%）", url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/rate_prefectures/r08" },
];

const yen = (v: number) => `${v.toFixed(1)}千円`;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "50歳の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            50歳の平均年収は約598万円（50〜54歳）・男性約683万円・女性約453万円【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(T), l: "50〜54歳の年収（男女計・当サイト計算）" },
              { v: f1(M), l: "50〜54歳の男性" },
              { v: f1(F), l: "50〜54歳の女性" },
              { v: f1(L - S), l: "企業規模1,000人以上と10〜99人の差" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、50歳前後（50〜54歳）の平均年収は<strong>{f1(T)}</strong>です。
            男性は{f1(M)}、女性は{f1(F)}です。45〜49歳（{f1(T45)}）より約{Math.round(T - T45)}万円高く、55〜59歳（{f1(T55)}）とは約{Math.round(T55 - T)}万円の差にとどまり、60〜64歳（{f1(T60)}）で大きく下がります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代・休日出勤手当などの所定外給与は含みません。
            統計値は{CHECKED}にe-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>45〜64歳の平均年収（男女別）</h2>
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
              {ages.map((x) => (
                <tr key={x.age} className={`border-b border-gray-100 ${x.age === "50〜54歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.age}</td>
                  <td className="p-3 text-right">{f1(annual(x.t[0], x.t[1]))}</td>
                  <td className="p-3 text-right">{x.m ? f1(annual(x.m[0], x.m[1])) : "—"}</td>
                  <td className="p-3 text-right">{x.f ? f1(annual(x.f[0], x.f[1])) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・企業規模10人以上・民営事業所）の所定内給与額×12＋年間賞与その他特別給与額（当サイト計算）。短時間労働者は含みません。60〜64歳の男女別は本ページでは掲載していません。
        </p>
        <p className="mb-10">
          男性は55〜59歳（{f1(annual(445.6, 1589.6))}）まで年収が上がる一方、50〜54歳から55〜59歳への増加は約{Math.round(annual(445.6, 1589.6) - M)}万円にとどまります。
          女性は45〜59歳の3つの年齢階級がいずれも約450万円前後で、ほぼ横ばいです。
          同調査は同じ人を追跡したものではなく、各年齢階級に在職している人の平均であるため、役職・職種・雇用形態の構成の違いも差に表れていると考えられます。
        </p>

        <h2>50〜54歳の企業規模別の平均年収</h2>
        <p>
          50代前半は、勤める会社の規模による年収の差が大きくなる年齢です。同じ第2表の企業規模別の表から、50〜54歳の年収を計算しました。
        </p>
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
              {sizes.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right font-bold">{f1(annual(x.t[0], x.t[1]))}</td>
                  <td className="p-3 text-right">{f1(annual(x.m[0], x.m[1]))}</td>
                  <td className="p-3 text-right">{f1(annual(x.f[0], x.f[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同表の企業規模1,000人以上・100〜999人・10〜99人の各表、50〜54歳・学歴計（当サイト計算）。
        </p>
        <p className="mb-10">
          男女計で、企業規模1,000人以上（{f1(L)}）と10〜99人（{f1(S)}）の差は{f1(L - S)}です。
          月額の所定内給与額の差は11.10万円（年133.2万円）、年間賞与の差は110.09万円で、年収の差の約45%は賞与によるものです（当サイト計算）。
          男性の1,000人以上は{f1(annual(511.2, 2336.7))}で、10〜99人（{f1(annual(370.6, 871.4))}）との差は約{Math.round(annual(511.2, 2336.7) - annual(370.6, 871.4))}万円あります。
          50代で企業規模の異なる会社へ転職する場合は、月給だけでなく賞与の支給実績（月数）を確認すると、年収の見込みとの差が小さくなります。
        </p>

        <h2>50〜54歳の学歴別の平均年収</h2>
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
        <p className="text-xs text-text-muted mb-4">
          ※同表の50〜54歳・男女計。学歴別の年収全体の比較は<Link href="/knowledge/daisotsu-nenshu/" className="text-teal hover:underline">大卒の平均年収</Link>のページにまとめています。
        </p>
        <p className="mb-10">
          50〜54歳では、大学卒（{f1(annual(494.9, 2057.0))}）と高校卒（{f1(annual(335.1, 989.6))}）の差が約{Math.round(annual(494.9, 2057.0) - annual(335.1, 989.6))}万円あり、
          40〜44歳の同じ差（約{Math.round(annual(425.3, 1557.1) - annual(309.0, 848.3))}万円）より広がっています（当サイト計算）。
        </p>

        <h2>50〜54歳の勤続年数別の給与（転職者と在籍が長い人の差）</h2>
        <p>
          50歳前後で転職を考える方に向けて、同じ50〜54歳の中で勤続年数ごとの給与を並べました。勤続0年には、その年に入社した転職者などが含まれます。
        </p>
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
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "25〜29年" ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
          ※同表の50〜54歳・男女計。年間賞与は前年（令和6年）1年間の支給額のため、勤続0年・1〜2年の人は在籍期間が短く賞与が少なく出ます。
        </p>
        <p className="mb-10">
          50〜54歳で最も給与が高いのは勤続25〜29年（{f1(t25)}）で、大学を卒業して新卒で入社し、同じ会社に勤め続けている人が多い区分と考えられます（当サイトの推測）。
          勤続0〜9年の所定内給与額は291.5〜323.9千円で、勤続25〜29年（489.5千円）と比べると月16.6万〜19.8万円低い水準です。
          50代の転職では、勤続年数の長い現職の給与水準を転職先で維持できるとは限りません。提示額を比べるときは、役職・等級の扱いと、初年度の賞与の算定方法を確認してください。
        </p>

        <h2>50歳の年収の手取り</h2>
        <p>
          40歳から64歳までは、健康保険料に介護保険料が加わります。協会けんぽ東京支部の令和8年度料率で、年収{T.toFixed(1)}万円の手取りを試算すると、
          年<strong>{man(o50.net)}</strong>（月{man(o50.netMonthly)}）です（独身・賞与なし）。社会保険料は年{yenFmt(o50.social)}、所得税は年{yenFmt(o50.incomeTax)}、住民税は年{yenFmt(o50.residentTax)}です。
        </p>
        <p className="mb-10">
          扶養家族の有無や加入する健康保険によって変わります。年収別の手取りは<Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">年収別の手取り早見表</Link>で確認できます。
        </p>

        <h2>50歳前後で転職を考えるときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "比べる年収の定義をそろえる", d: "本ページの年収は残業代を含みません。求人票の想定年収は固定残業代や賞与の見込みを含むことが多いため、月給・賞与・残業代を分けて比べてください。" },
            { t: "企業規模による賞与の差を把握する", d: "上の表のとおり、50〜54歳では企業規模1,000人以上と10〜99人で年間賞与に約110万円の差があります。転職先の賞与の支給実績を確認してください。" },
            { t: "50代向けの求人を扱う転職エージェントを比べる", d: "管理職・専門職の求人は、扱う転職エージェントによって件数が異なります。複数のエージェントで同じ職種の提示額を比べると相場がつかめます。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

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
          <li><Link href="/knowledge/salary-35sai/" className="text-teal font-bold hover:underline">35歳の平均年収</Link></li>
          <li><Link href="/age/50s/" className="text-teal font-bold hover:underline">50代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link></li>
          <li><Link href="/company/" className="text-teal font-bold hover:underline">企業別の平均年収（有価証券報告書）</Link></li>
          <li><Link href="/knowledge/nenshu-500man-josei/" className="text-teal font-bold hover:underline">年収500万円を超える女性の割合</Link></li>
          <li><Link href="/knowledge/ai-nakunaru-shigoto/" className="text-teal font-bold hover:underline">AIでなくなる仕事と平均年収</Link></li>
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
