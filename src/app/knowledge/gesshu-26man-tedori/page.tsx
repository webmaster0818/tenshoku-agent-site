import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-26man-tedori/" },
  title: "月給26万円の手取りは約20.9万円【2026年・令和8年の税制で試算】企業規模・年齢別の平均月給との比較",
  description:
    "額面の月給26万円の手取りを、令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約20.9万円（約80.3%）です。月給24.9万円と25万円で手取りが逆転する境目と、令和7年 賃金構造基本統計調査の企業規模・年齢別の平均月給との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給26万円の手取りは約20.9万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給26万円の手取りと内訳、企業規模・年齢別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 260000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(249000 * 12);
const hi = calcTakeHome(250000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [240000, 249000, 250000, 255000, 260000, 265000, 269000, 270000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第4表 企業規模、性、年齢階級別賃金（男女計・所定内給与額・千円）
const WAGE_CHECKED = "2026年11月23日";
const WAGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/04.pdf";
const EMP_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/06.pdf";
const size = [
  { age: "20〜24歳", large: 258.4, mid: 237.6, small: 226.3 },
  { age: "25〜29歳", large: 301.7, mid: 270.6, small: 258.2 },
  { age: "30〜34歳", large: 344.6, mid: 299.4, small: 286.5 },
  { age: "35〜39歳", large: 386.3, mid: 322.3, small: 305.3 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 250 && v < 270 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月給26万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給26万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給26万円はどのくらいの会社・年齢の平均ですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額・男女計）では、従業員10〜99人の小企業の25〜29歳が258.2千円、従業員1,000人以上の大企業の20〜24歳が258.4千円で、月給26万円に近い水準です。従業員100〜999人の中企業では25〜29歳が270.6千円です。",
  },
  {
    q: "月給25万円と26万円で社会保険料は変わりますか？",
    a: `変わりません。報酬月額25万円以上27万円未満は、いずれも標準報酬月額26万円の区分です（健康保険法 第40条）。一方、月給24.9万円（標準報酬月額24万円）から25万円に上がると社会保険料が月${yen((hi.social - lo.social) / 12)}増え、手取りは月${yen(lo.netMonthly - hi.netMonthly)}少なくなります（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-26man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給26万円の手取り"
      h1="月給26万円の手取りは約20.9万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給26万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約20.9万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給26万円は、厚生労働省「令和7年 賃金構造基本統計調査」で、従業員10〜99人の企業の25〜29歳の平均月給（所定内給与額258.2千円・男女計）とほぼ同じ水準です。
            賞与がない場合の年収は312万円です。以下の内訳・比較表は年収換算（312万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給24万〜29万円の手取り（早見表）"
      compare={[240000, 250000, 260000, 270000, 280000, 290000].map((m) => m * 12)}
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
            月給24.9万円と25万円、26.9万円と27万円の間で標準報酬月額の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-28man-tedori/", label: "月給28万円の手取り" },
        { href: "/knowledge/gesshu-27man-tedori/", label: "月給27万円の手取り" },
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/bonus-60man-tedori/", label: "ボーナス60万円の手取り" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
      ]}
    >
      <h2>月給26万円は企業規模・年齢別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を企業規模・年齢階級別に公表しています。企業規模は常用労働者1,000人以上が大企業、100〜999人が中企業、10〜99人が小企業です。男女計の値は次のとおりで、月給25万円以上27万円未満にあたる欄を色付けしています。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">大企業</th>
              <th className="p-3 text-right">中企業</th>
              <th className="p-3 text-right rounded-tr-lg">小企業</th>
            </tr>
          </thead>
          <tbody>
            {size.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.large)}
                {cell(x.mid)}
                {cell(x.small)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={WAGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第4表 企業規模、性、年齢階級別賃金</a>（男女計・令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
      </p>
      <p className="mb-10">
        大企業では20〜24歳（258.4千円）、小企業では25〜29歳（258.2千円）が月給26万円に近い水準です。同じ25〜29歳でも、大企業は301.7千円、中企業は270.6千円で、企業規模によって4万円以上の差があります。
        雇用形態別では、
        <a href={EMP_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同 第6-1表</a>で正社員・正職員の25〜29歳が285.0千円、20〜24歳が247.5千円です。
        なお、この統計は所定内給与額のため、残業代を含む求人票の「月給」や実際の支給額とは一致しない点にご注意ください。
      </p>

      <h2>月給25万円以上27万円未満は社会保険料が同じ</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額25万円以上27万円未満は、いずれも標準報酬月額26万円です。月給26万円はこの区分のちょうど中央にあたるため、月給が1万円前後増減しても社会保険料は変わりません。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給24.9万円</th>
              <th className="p-3 text-right">月給25万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給26万円</th>
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
        月給25万円の手取りは、月給24.9万円より月{yen(lo.netMonthly - hi.netMonthly)}少なくなります。この試算の前提で1,000円刻みに計算すると、月給25万円の区分で月給24.9万円の手取りを上回るのは月給約25.2万円からです（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が26万円でも、4月〜6月の平均が27万円以上になると標準報酬月額28万円の区分になります。厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで比べられない点にご注意ください。
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
              <td className="p-3">2年目の6月以降（前年も月給26万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、月給26万円で入社した場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        企業規模による月給の差を踏まえて転職先を探す場合の進め方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
