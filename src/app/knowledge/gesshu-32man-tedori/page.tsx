import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-32man-tedori/" },
  title: "月収32万円の手取りは約25.4万円【2026年・令和8年の税制で試算】学歴・年齢別の平均月給との比較",
  description:
    "額面の月収32万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約25.4万円（約79.6%）です。月収31万〜32.9万円が同じ標準報酬月額になる仕組みと、高校卒・専門学校卒・高専短大卒・大学卒の年齢別の平均月給との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収32万円の手取りは約25.4万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収32万円の手取りと内訳、標準報酬月額の区分、学歴・年齢別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 320000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(309000 * 12);
const lo2 = calcTakeHome(310000 * 12);
const hi = calcTakeHome(329000 * 12);
const hi2 = calcTakeHome(330000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [300000, 309000, 310000, 320000, 329000, 330000, 340000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表（男女計・所定内給与額・千円）
const WAGE_CHECKED = "2026年11月25日";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const edu = [
  { age: "25〜29歳", hs: 251.7, voc: 266.8, jc: 277.2, univ: 296.4 },
  { age: "30〜34歳", hs: 276.2, voc: 282.2, jc: 301.7, univ: 340.3 },
  { age: "35〜39歳", hs: 296.6, voc: 302.7, jc: 313.4, univ: 382.2 },
  { age: "40〜44歳", hs: 309.0, voc: 321.6, jc: 336.9, univ: 425.3 },
  { age: "45〜49歳", hs: 322.2, voc: 334.0, jc: 340.8, univ: 458.4 },
  { age: "50〜54歳", hs: 335.1, voc: 357.0, jc: 349.0, univ: 494.9 },
  { age: "55〜59歳", hs: 332.1, voc: 363.7, jc: 364.0, univ: 529.1 },
  { age: "年齢計", hs: 297.2, voc: 313.7, jc: 321.2, univ: 396.3 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 310 && v < 330 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月収32万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収32万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収32万円の社会保険料は、月収31万円や32.9万円と同じですか？",
    a: `健康保険と厚生年金の保険料は、報酬月額31万円以上33万円未満であればいずれも標準報酬月額32万円で計算します（健康保険法 第40条）。この範囲では健康保険料と厚生年金保険料は同じ額で、雇用保険料だけが月収に比例して変わります。月収33万円になると34万円の区分に上がり、社会保険料が月${yen((hi2.social - hi.social) / 12)}増えます（当サイト試算）。`,
  },
  {
    q: "月収32万円は平均より高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、男女計の年齢計で340.6千円です。学歴別の年齢計では、高校卒297.2千円・専門学校卒313.7千円・高専短大卒321.2千円・大学卒396.3千円で、月収32万円は専門学校卒と高専短大卒の平均に近い水準です。所定内給与額は残業代を含まないため、残業代込みの月収とは比べ方が異なります。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-32man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収32万円の手取り"
      h1="月収32万円の手取りは約25.4万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収32万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約25.4万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収32万円は、標準報酬月額32万円の区分（報酬月額31万円以上33万円未満）のほぼ中央にあたります。区分の両端の月収30.9万円・31万円と32.9万円・33万円では手取りが逆転しますが、月収32万円はどちらの境目からも1万円離れています。
            賞与がない場合の年収は384万円です。以下の内訳・比較表は年収換算（384万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収30万〜34万円の手取り（早見表）"
      compare={[300000, 310000, 320000, 330000, 340000].map((m) => m * 12)}
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
            月収30.9万円と31万円、32.9万円と33万円の間で標準報酬月額の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/gesshu-33man-tedori/", label: "月収33万円の手取り" },
        { href: "/knowledge/gesshu-35man-tedori/", label: "月収35万円の手取り" },
        { href: "/knowledge/gesshu-19man-tedori/", label: "月給19万円の手取り" },
        { href: "/knowledge/bonus-30man-tedori/", label: "ボーナス30万円の手取り" },
        { href: "/knowledge/tedori-380man/", label: "年収380万円の手取り" },
        { href: "/knowledge/tedori-gesshu-26man/", label: "手取り26万円の額面" },
      ]}
    >
      <h2>月収31万〜32.9万円は社会保険料がほぼ同じ</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額31万円以上33万円未満はすべて標準報酬月額32万円の区分のため、この範囲では月収が増えても健康保険料と厚生年金保険料は変わらず、手取りは額面の増加分からほぼそのまま増えます。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月収30.9万円</th>
              <th className="p-3 text-right">月収31万円</th>
              <th className="p-3 text-right">月収32万円</th>
              <th className="p-3 text-right">月収32.9万円</th>
              <th className="p-3 text-right rounded-tr-lg">月収33万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              {[lo, lo2, r, hi, hi2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.grade)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              {[lo, lo2, r, hi, hi2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.social / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              {[lo, lo2, r, hi, hi2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen((x.incomeTax + x.residentTax) / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              {[lo, lo2, r, hi, hi2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.netMonthly)}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        月収31万円は月収30.9万円より手取りが月{yen(lo.netMonthly - lo2.netMonthly)}少なく、月収30.9万円の手取りを上回るのは月収31.2万円からです。月収33万円も月収32.9万円より月{yen(hi.netMonthly - hi2.netMonthly)}少なくなります（当サイト試算）。
        月収32万円は区分の内側にあるため、こうした逆転の影響を受けません。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月25日確認）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が32万円でも、4月〜6月の残業代や通勤手当で平均が33万円以上になると34万円の区分になります。
      </p>

      <h2>月収32万円は学歴・年齢別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を学歴・年齢別に公表しています。男女計の値を並べ、月31万円以上33万円未満の欄を色付けしました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">高校卒</th>
              <th className="p-3 text-right">専門学校卒</th>
              <th className="p-3 text-right">高専・短大卒</th>
              <th className="p-3 text-right rounded-tr-lg">大学卒</th>
            </tr>
          </thead>
          <tbody>
            {edu.map((x) => (
              <tr key={x.age} className={`border-b border-gray-100 ${x.age === "年齢計" ? "font-bold" : ""}`}>
                <td className="p-3">{x.age}</td>
                {cell(x.hs)}
                {cell(x.voc)}
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
        平均が月31万〜33万円の範囲に入るのは、高校卒では45〜49歳（322.2千円）、専門学校卒では40〜44歳（321.6千円）、高専・短大卒では35〜39歳（313.4千円）です。大学卒は25〜29歳（296.4千円）から30〜34歳（340.3千円）に上がる間にこの範囲を通過します。
        高校卒の平均は最も高い50〜54歳でも335.1千円で、月収32万円は高校卒の平均のほぼ上限に近い水準です。同じ月収32万円でも、平均で到達する年齢階級は大学卒の30歳前後から高校卒の45〜49歳まで、学歴によって大きく異なります。
        転職で月収を上げたい場合の進め方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
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
              <td className="p-3">2年目の6月以降（前年も月収32万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、前年に所得がない状態で月収32万円の仕事に就いた場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
      </p>
    </TakeHomePage>
  );
}
