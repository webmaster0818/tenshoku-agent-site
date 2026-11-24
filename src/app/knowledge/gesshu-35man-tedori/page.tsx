import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-35man-tedori/" },
  title: "月収35万円の手取りは約27.6万円【2026年・令和8年の税制で試算】月収34.9万円と35万円で手取りが逆転する境目",
  description:
    "額面の月収35万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約27.6万円（約78.9%）です。月収34.9万円のほうが手取りが多くなる標準報酬月額の境目と、年齢・学歴別の平均月給との比較も掲載しています。",

  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収35万円の手取りは約27.6万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収35万円の手取りと内訳、標準報酬月額の境目、年齢・学歴別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 350000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(349000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [330000, 340000, 349000, 350000, 360000, 369000, 370000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表・第3表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月22日";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const ages = [
  { age: "30〜34歳", all: 312.3, m: 330.4, f: 283.2 },
  { age: "35〜39歳", all: 340.6, m: 366.2, f: 292.4 },
  { age: "40〜44歳", all: 364.3, m: 398.2, f: 303.6 },
  { age: "45〜49歳", all: 377.9, m: 420.7, f: 305.7 },
  { age: "50〜54歳", all: 388.8, m: 437.5, f: 305.4 },
];
const edu = [
  { age: "30〜34歳", hs: 276.2, vo: 282.2, jc: 301.7, univ: 340.3 },
  { age: "35〜39歳", hs: 296.6, vo: 302.7, jc: 313.4, univ: 382.2 },
  { age: "40〜44歳", hs: 309.0, vo: 321.6, jc: 336.9, univ: 425.3 },
  { age: "45〜49歳", hs: 322.2, vo: 334.0, jc: 340.8, univ: 458.4 },
  { age: "50〜54歳", hs: 335.1, vo: 357.0, jc: 349.0, univ: 494.9 },
  { age: "55〜59歳", hs: 332.1, vo: 363.7, jc: 364.0, univ: 529.1 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 340 && v < 360 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月収35万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収35万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収34.9万円と35万円では、なぜ手取りが逆転するのですか？",
    a: `報酬月額33万円以上35万円未満は標準報酬月額34万円、35万円以上37万円未満は36万円の区分です（健康保険法 第40条）。月収35万円はちょうど上の区分の下限にあたるため、月収34.9万円より社会保険料が月${yen((r.social - lo.social) / 12)}多くなり、手取りは月${yen(lo.netMonthly - r.netMonthly)}少なくなります（当サイト試算）。`,
  },
  {
    q: "月収35万円は平均より高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、男女計の年齢計で340.6千円です。月収35万円はこれをやや上回り、年齢別では35〜39歳（340.6千円）と40〜44歳（364.3千円）の間にあたります。所定内給与額は残業代を含まないため、残業代込みの月収とは比べ方が異なる点にご注意ください。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-35man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収35万円の手取り"
      h1="月収35万円の手取りは約27.6万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収35万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約27.6万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収35万円は標準報酬月額36万円の区分のちょうど下限にあたり、<strong>月収34.9万円のほうが手取りが月{yen(lo.netMonthly - r.netMonthly)}多くなります</strong>。
            賞与がない場合の年収は420万円です。以下の内訳・比較表は年収換算（420万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収33万〜37万円の手取り（早見表）"
      compare={[330000, 340000, 350000, 360000, 370000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
                  <th className="p-3 text-right">標準報酬月額</th>
                  <th className="p-3 text-right">社会保険料（月額）</th>
                  <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{(x.r.grade / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.social / 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月収ごとの標準報酬月額・社会保険料・手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月収34.9万円と35万円、36.9万円と37万円の間で標準報酬月額の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-33man-tedori/", label: "月収33万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/gesshu-40man-tedori/", label: "月収40万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/salary-35sai/", label: "35歳の平均年収" },
        { href: "/knowledge/gesshu-28man-tedori/", label: "月給28万円の手取り" },
      ]}
    >
      <h2>月収34.9万円と35万円で手取りが逆転する理由</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額33万円以上35万円未満は標準報酬月額34万円、35万円以上37万円未満は36万円です。月収35万円はちょうど36万円の区分に入った直後にあたるため、月収34.9万円より社会保険料が増え、手取りが少なくなります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月収34.9万円</th>
              <th className="p-3 text-right rounded-tr-lg">月収35万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.grade)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.social / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((lo.incomeTax + lo.residentTax) / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((r.incomeTax + r.residentTax) / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        社会保険料が増えた分だけ所得税・住民税の課税対象は少し下がりますが、保険料の増加分のほうが大きいため、手取りは逆転します（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が34万円台でも、4月〜6月の残業代や通勤手当で平均が35万円以上になると36万円の区分になります。
        なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>月収35万円は年齢・学歴別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を年齢・学歴別に公表しています。男女計の年齢計は340.6千円で、月収35万円はこれをやや上回る水準です。
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
            {ages.map((x) => (
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
        ※出典：<a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金</a>（令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。月34万円以上36万円未満の欄を色付けしています。
      </p>
      <p className="mb-6">
        男性では30〜34歳（330.4千円）と35〜39歳（366.2千円）の間、男女計では35〜39歳（340.6千円）と40〜44歳（364.3千円）の間にあたります。女性はどの年齢階級でも310千円未満で、月収35万円は女性の平均を大きく上回る水準です。
      </p>
      <h3>学歴別にみた月収35万円の位置</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">高校</th>
              <th className="p-3 text-right">専門学校</th>
              <th className="p-3 text-right">高専・短大</th>
              <th className="p-3 text-right rounded-tr-lg">大学</th>
            </tr>
          </thead>
          <tbody>
            {edu.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.hs)}
                {cell(x.vo)}
                {cell(x.jc)}
                {cell(x.univ)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={EDU_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表 学歴、性、年齢階級別賃金</a>（男女計・令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
      </p>
      <p className="mb-10">
        大学卒では30〜34歳（340.3千円）が月収35万円に近く、35〜39歳では382.2千円と上回ります。高校卒は最も高い50〜54歳でも335.1千円で、月収35万円に届きません。専門学校卒は50〜54歳（357.0千円）、高専・短大卒は50〜54歳（349.0千円）が近い水準です。
        学歴や年齢で到達時期が大きく異なるため、月収35万円を目標にする場合は、ご自身の学歴・年齢の平均と比べて考えることをおすすめします。
      </p>

      <h3>入社1年目と2年目の手取りの違い</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">時期</th>
              <th className="p-3 text-right">住民税（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額の目安）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">入社1年目（前年の所得なし）</td>
              <td className="p-3 text-right whitespace-nowrap">0円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(firstYear)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">2年目の6月以降（前年も月収35万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、前年に所得がない状態で月収35万円の仕事に就いた場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        転職で月収を上げたい場合の進め方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
