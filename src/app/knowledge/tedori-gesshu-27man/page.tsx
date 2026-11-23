import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-27man/" },
  title: "手取り27万円の額面は月約34.1万円・年収約409.2万円【2026年・令和8年の税制で試算】",
  description:
    "手取り27万円に必要な額面（総支給額）と年収を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約34.1万円、年収約409.2万円です。額面34万円では届かない理由と、令和7年 賃金構造基本統計調査の性・年齢別の平均月給も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り27万円の額面は月約34.1万円・年収約409.2万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り27万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 341000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const just = calcTakeHome(340000 * 12);
const table = [
  { t: 250000, m: 315000 },
  { t: 260000, m: 326000 },
  { t: 270000, m: 341000 },
  { t: 280000, m: 355000 },
  { t: 300000, m: 380000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金（所定内給与額・千円）
const WAGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const WAGE_CHECKED = "2026年11月24日";
const wage = [
  { age: "20〜24歳", all: 242.8, m: 245.7, f: 239.6 },
  { age: "25〜29歳", all: 279.4, m: 288.0, f: 268.8 },
  { age: "30〜34歳", all: 312.3, m: 330.4, f: 283.2 },
  { age: "35〜39歳", all: 340.6, m: 366.2, f: 292.4 },
  { age: "40〜44歳", all: 364.3, m: 398.2, f: 303.6 },
  { age: "45〜49歳", all: 377.9, m: 420.7, f: 305.7 },
  { age: "50〜54歳", all: 388.8, m: 437.5, f: 305.4 },
  { age: "55〜59歳", all: 396.2, m: 445.6, f: 305.7 },
  { age: "年齢計", all: 340.6, m: 373.4, f: 285.9 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 330 && v < 350 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "手取り27万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "額面34万円では手取り27万円になりませんか？",
    a: `当サイトの試算では、額面月給340,000円の手取りは月${yen(just.netMonthly)}で、27万円に${yen(270000 - just.netMonthly)}届きません。額面月給を1,000円上げた341,000円で月${yen(r.netMonthly)}になります（40歳未満・賞与なし）。`,
  },
  {
    q: "40歳以上で手取り27万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り27万円以上にするには、額面月給343,000円（年収4,116,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り27万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収400万円超の人は${shareAbove(400)}、500万円超の人は${shareAbove(500)}です。賞与なしで手取り27万円となる年収409.2万円は、400万円をわずかに上回る水準です。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-27man/"
      annual={MONTHLY * 12}
      crumb="手取り27万円の額面"
      h1="手取り27万円の額面は月約34.1万円・年収約409.2万円【2026年】"
      lead={
        <>
          <p>
            手取り27万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが27万円以上になる最小の月給を求めました。額面34万円では月{yen(just.netMonthly)}となり、27万円にわずかに届きません。
            厚生労働省「令和7年 賃金構造基本統計調査」の一般労働者の平均月給（所定内給与額・男女計）は340.6千円で、手取り27万円に必要な額面とほぼ同じ水準です。
          </p>
        </>
      }
      compareHeading="手取り25万〜30万円に必要な額面（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">手取り（月額）</th>
                  <th className="p-3 text-right">必要な額面月給</th>
                  <th className="p-3 text-right">年収換算</th>
                  <th className="p-3 text-right rounded-tr-lg">試算の手取り</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 270000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.t / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m * 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り25万・26万・27万・28万・30万円に対応します。
            手取り27万円から30万円に増やすには、額面月給を{yen(table[4].m - table[2].m)}上げる必要があります（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-26man/", label: "手取り26万円の額面" },
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円の額面" },
        { href: "/knowledge/gesshu-27man-tedori/", label: "月給27万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-420man/", label: "年収420万円の手取り" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>手取り27万円になる額面は何歳くらいの平均月給か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、一般労働者の令和7年6月分の所定内給与額（残業代・賞与を含まない月額）を性・年齢階級別に公表しています。
        手取り27万円に必要な額面34.1万円の前後（33万円以上35万円未満）にあたる欄を色付けしています。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">男女計</th>
              <th className="p-3 text-right">男性</th>
              <th className="p-3 text-right rounded-tr-lg">女性</th>
            </tr>
          </thead>
          <tbody>
            {wage.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.all)}
                {cell(x.m)}
                {cell(x.f)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={WAGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金</a>（一般労働者・令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
        年齢計には70歳以上の労働者を含みます。
      </p>
      <p className="mb-10">
        男女計では35〜39歳（340.6千円）と年齢計（340.6千円）、男性では30〜34歳（330.4千円）が額面34.1万円に近い水準です。女性はどの年齢階級も30万円台前半までで、33万円以上の欄はありません。
        所定内給与額には残業代が含まれないため、残業代を含めた総支給額で手取り27万円になっている人は、統計上の所定内給与額がこれより低い場合があります。
        同じ年代の転職事情は<Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link>、年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
