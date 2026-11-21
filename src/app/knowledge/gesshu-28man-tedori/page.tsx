import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-28man-tedori/" },
  title: "月給28万円の手取りは約22.4万円【2026年・令和8年の税制で試算】学歴・年齢別の平均月給との比較",
  description:
    "額面の月給28万円の手取りを、令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約22.4万円（約80.1%）です。月給26.9万円と27万円で手取りが逆転する境目と、令和7年 賃金構造基本統計調査の学歴・年齢別の平均月給との比較も掲載しています。",

  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給28万円の手取りは約22.4万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給28万円の手取りと内訳、学歴・年齢別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 280000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(269000 * 12);
const hi = calcTakeHome(270000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [250000, 260000, 269000, 270000, 280000, 289000, 290000, 300000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表 学歴、性、年齢階級別賃金（男女計・所定内給与額・千円）
const WAGE_CHECKED = "2026年11月22日";
const WAGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const edu = [
  { age: "20〜24歳", hs: 225.2, vo: 238.4, jc: 243.3, univ: 263.9, grad: 298.8 },
  { age: "25〜29歳", hs: 251.7, vo: 266.8, jc: 277.2, univ: 296.4, grad: 335.0 },
  { age: "30〜34歳", hs: 276.2, vo: 282.2, jc: 301.7, univ: 340.3, grad: 406.1 },
  { age: "35〜39歳", hs: 296.6, vo: 302.7, jc: 313.4, univ: 382.2, grad: 466.6 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 270 && v < 290 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月給28万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給28万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給28万円は何歳くらいの平均ですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、男女計の25〜29歳で279.4千円です。学歴別では、高専・短大卒の25〜29歳（277.2千円）、高校卒の30〜34歳（276.2千円）、専門学校卒の30〜34歳（282.2千円）が月給28万円に近い水準です。",
  },
  {
    q: "月給27万円と28万円で社会保険料は変わりますか？",
    a: `変わりません。報酬月額27万円以上29万円未満は、いずれも標準報酬月額28万円の区分です（健康保険法 第40条）。一方、月給26.9万円（標準報酬月額26万円）から27万円に上がると社会保険料が月${yen((hi.social - lo.social) / 12)}増え、手取りは月${yen(lo.netMonthly - hi.netMonthly)}少なくなります（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-28man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給28万円の手取り"
      h1="月給28万円の手取りは約22.4万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給28万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約22.4万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給28万円は、厚生労働省「令和7年 賃金構造基本統計調査」の25〜29歳の平均月給（所定内給与額279.4千円・男女計）とほぼ同じ水準です。
            賞与がない場合の年収は336万円です。以下の内訳・比較表は年収換算（336万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給25万〜30万円の手取り（早見表）"
      compare={[250000, 260000, 270000, 280000, 290000, 300000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月給</th>
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
            1つ目の表は年収換算の比較、2つ目の表は額面の月給ごとの標準報酬月額・社会保険料・手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月給26.9万円と27万円、28.9万円と29万円の間で標準報酬月額の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/tedori-350man/", label: "年収350万円の手取り" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
        { href: "/knowledge/gesshu-100man-tedori/", label: "月収100万円の手取り" },
      ]}
    >
      <h2>月給28万円は学歴・年齢別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を学歴・年齢階級別に公表しています。男女計の値は次のとおりで、月給27万円以上29万円未満にあたる欄を色付けしています。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">高校</th>
              <th className="p-3 text-right">専門学校</th>
              <th className="p-3 text-right">高専・短大</th>
              <th className="p-3 text-right">大学</th>
              <th className="p-3 text-right rounded-tr-lg">大学院</th>
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
                {cell(x.grad)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={WAGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表 学歴、性、年齢階級別賃金</a>（男女計・令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
      </p>
      <p className="mb-10">
        大学卒では20〜24歳が263.9千円、25〜29歳が296.4千円で、月給28万円はその間にあたります。高校卒では30〜34歳（276.2千円）、専門学校卒では30〜34歳（282.2千円）、高専・短大卒では25〜29歳（277.2千円）が近い水準です。
        年齢計の男女別の平均は、
        <a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同 第2表</a>で25〜29歳が男性288.0千円・女性268.8千円です。
        なお、この統計は所定内給与額のため、残業代を含む求人票の「月給」や実際の支給額とは一致しない点にご注意ください。
      </p>

      <h2>月給27万円以上29万円未満は社会保険料が同じ</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額27万円以上29万円未満は、いずれも標準報酬月額28万円です。月給28万円はこの区分のちょうど中央にあたるため、月給が1万円前後増減しても社会保険料は変わりません。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給26.9万円</th>
              <th className="p-3 text-right">月給27万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給28万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(hi.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.grade)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(hi.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.social / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(hi.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が28万円でも、4月〜6月に残業代や通勤手当で平均が29万円以上になると標準報酬月額30万円の区分になります。厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで比べられない点にご注意ください。
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
              <td className="p-3">2年目の6月以降（前年も月給28万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、月給28万円で入社した場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        転職で月給を上げたい場合の進め方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
