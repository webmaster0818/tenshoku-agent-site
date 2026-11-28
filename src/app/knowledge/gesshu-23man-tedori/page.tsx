import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-23man-tedori/" },
  title: "月給23万円の手取りは約18.4万円【2026年・令和8年の税制で試算】月給22.9万円より少なくなる境目と20代の平均月給",
  description:
    "額面の月給23万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約18.4万円（約80.3%）です。月給22.9万円より手取りが少なくなる標準報酬月額の境目と、20代の学歴別の平均月給との比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給23万円の手取りは約18.4万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給23万円の手取りと内訳、標準報酬月額の境目、20代の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 230000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(229000 * 12);
const recover = (() => {
  for (let m = 231000; m < 260000; m += 1000) if (calcTakeHome(m * 12).netMonthly > lo.netMonthly) return m;
  return 0;
})();
const firstYear = (r.net + r.residentTax) / 12;
const table = [210000, 220000, 229000, 230000, 240000, 249000, 250000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表・第3表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月29日";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const young = [
  { l: "20〜24歳（学歴計・男女計）", v: 242.8 },
  { l: "20〜24歳（高校卒・男女計）", v: 225.2 },
  { l: "20〜24歳（専門学校卒・男女計）", v: 238.4 },
  { l: "20〜24歳（高専・短大卒・男女計）", v: 243.3 },
  { l: "20〜24歳（大学卒・男女計）", v: 263.9 },
  { l: "25〜29歳（学歴計・男女計）", v: 279.4 },
  { l: "25〜29歳（高校卒・男女計）", v: 251.7 },
  { l: "25〜29歳（高校卒・女性）", v: 230.0 },
];

const faq = [
  {
    q: "月給23万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給23万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給22.9万円と23万円では、なぜ手取りが逆転するのですか？",
    a: `報酬月額21万円以上23万円未満は標準報酬月額22万円、23万円以上25万円未満は24万円の区分です（健康保険法 第40条）。月給23万円はちょうど24万円の区分の下限にあたるため、月給22.9万円より社会保険料が月${yen((r.social - lo.social) / 12)}多くなり、手取りは月${yen(lo.netMonthly - r.netMonthly)}少なくなります（当サイト試算）。`,
  },
  {
    q: "月給23万円は20代の平均と比べて高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、20〜24歳の学歴計・男女計で242.8千円、高校卒・男女計で225.2千円です。月給23万円は20代前半の高校卒の平均を上回り、学歴計の平均を下回る水準です。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-23man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給23万円の手取り"
      h1="月給23万円の手取りは約18.4万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給23万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約18.4万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給23万円は標準報酬月額24万円の区分のちょうど下限にあたり、<strong>月給22.9万円のほうが手取りが月{yen(lo.netMonthly - r.netMonthly)}多くなります</strong>。
            賞与がない場合の年収は276万円です。以下の内訳・比較表は年収換算（276万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給21万〜25万円の手取り（早見表）"
      compare={[210000, 220000, 230000, 240000, 250000].map((m) => m * 12)}
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
            月給22.9万円と23万円、24.9万円と25万円の間で標準報酬月額の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/gesshu-26man-tedori/", label: "月給26万円の手取り" },
        { href: "/knowledge/gesshu-19man-tedori/", label: "月給19万円の手取り" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/tedori-gesshu-20man/", label: "手取り20万円の額面" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
        { href: "/knowledge/gesshu-16man-tedori/", label: "月給16万円の手取り" },
      ]}
    >
      <h2>月給22.9万円と23万円で手取りが逆転する理由</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額21万円以上23万円未満は標準報酬月額22万円、23万円以上25万円未満は24万円です。月給23万円は24万円の区分に入った直後にあたるため、月給22.9万円より社会保険料が増え、手取りが少なくなります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給22.9万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給23万円</th>
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
        月給22.9万円の手取りを上回るのは月給{(recover / 10000).toFixed(1)}万円からです（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が22万円台でも、4月〜6月の残業代や通勤手当で平均が23万円以上になると24万円の区分になります。
        なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>月給23万円は20代の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を年齢・学歴別に公表しています。20代の値を並べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">区分</th>
              <th className="p-3 text-right">所定内給与額</th>
              <th className="p-3 text-right rounded-tr-lg">月給23万円との差</th>
            </tr>
          </thead>
          <tbody>
            {young.map((x) => (
              <tr key={x.l} className="border-b border-gray-100">
                <td className="p-3">{x.l}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.v.toFixed(1)}千円</td>
                <td className="p-3 text-right whitespace-nowrap">{(x.v - 230 > 0 ? "+" : "") + (x.v - 230).toFixed(1)}千円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金</a>（学歴計）、
        <a href={EDU_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同 第3表 学歴、性、年齢階級別賃金</a>（令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
      </p>
      <p className="mb-10">
        月給23万円は、20〜24歳の高校卒（225.2千円）を上回り、専門学校卒（238.4千円）・高専短大卒（243.3千円）・大学卒（263.9千円）を下回ります。25〜29歳では、高校卒・女性（230.0千円）と同じ水準です。
        所定内給与額には役職手当や住宅手当などの諸手当が含まれ、残業代は含まれません。求人票の月給と比べる場合は、固定残業代が含まれていないかを確認してください。
        20代の転職で月給を上げたい場合は<Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒向けの転職エージェント</Link>、年収アップの実績を公表している転職エージェントは
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
              <td className="p-3">2年目の6月以降（前年も月給23万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、学校を卒業して就職した場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
      </p>
    </TakeHomePage>
  );
}
