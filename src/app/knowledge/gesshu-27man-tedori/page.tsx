import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-27man-tedori/" },
  title: "月給27万円の手取りは約21.5万円【2026年・令和8年の税制で試算】月給26.9万円より少なくなる理由と産業別の平均月給",
  description:
    "額面の月給27万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約21.5万円（約79.8%）で、標準報酬月額の区分が上がるため月給26.9万円より少なくなります。賃金構造基本統計調査の産業別の平均月給との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給27万円の手取りは約21.5万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給27万円の手取りと、月給26.9万円より少なくなる理由、産業別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 270000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(269000 * 12);
const be = calcTakeHome(272000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [260000, 265000, 269000, 270000, 271000, 272000, 275000, 280000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第5-1表 産業、年齢階級別賃金（男女計・所定内給与額・千円）
const WAGE_CHECKED = "2026年11月23日";
const WAGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/05.pdf";
const EMP_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/06.pdf";
const ind = [
  { name: "学術研究，専門・技術サービス業", a25: 335.8, a30: 406.6 },
  { name: "鉱業，採石業，砂利採取業", a25: 327.0, a30: 396.5 },
  { name: "電気・ガス・熱供給・水道業", a25: 309.9, a30: 379.5 },
  { name: "金融業，保険業", a25: 309.6, a30: 378.6 },
  { name: "情報通信業", a25: 308.7, a30: 363.4 },
  { name: "不動産業，物品賃貸業", a25: 298.2, a30: 337.3 },
  { name: "建設業", a25: 292.8, a30: 330.9 },
  { name: "運輸業，郵便業", a25: 278.2, a30: 306.9 },
  { name: "医療，福祉", a25: 277.3, a30: 298.8 },
  { name: "教育，学習支援業", a25: 272.9, a30: 312.1 },
  { name: "卸売業，小売業", a25: 272.7, a30: 302.2 },
  { name: "生活関連サービス業，娯楽業", a25: 269.4, a30: 285.8 },
  { name: "サービス業（他に分類されないもの）", a25: 260.6, a30: 274.6 },
  { name: "製造業", a25: 259.3, a30: 291.2 },
  { name: "宿泊業，飲食サービス業", a25: 250.5, a30: 270.0 },
  { name: "複合サービス事業", a25: 247.2, a30: 272.5 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 260 && v < 280 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月給27万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給27万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給26.9万円から27万円に上がると手取りが減るのはなぜですか？",
    a: `報酬月額27万円から標準報酬月額が26万円から28万円の区分に上がり（健康保険法 第40条）、健康保険料と厚生年金保険料が合わせて月${yen((r.health + r.pension - lo.health - lo.pension) / 12)}増えるためです。この試算の前提では、月給27万円の手取りは月給26.9万円より月${yen(lo.netMonthly - r.netMonthly)}少なく、月給約27.2万円で月給26.9万円の手取りを上回ります（当サイト試算）。`,
  },
  {
    q: "月給27万円はどの産業の平均に近いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額・男女計）で、25〜29歳の卸売業，小売業が272.7千円、教育，学習支援業が272.9千円、生活関連サービス業，娯楽業が269.4千円で、月給27万円に近い水準です。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-27man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給27万円の手取り"
      h1="月給27万円の手取りは約21.5万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給27万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約21.5万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給27万円は標準報酬月額28万円の区分の下限にあたるため、<strong>月給26.9万円より手取りが月{yen(lo.netMonthly - r.netMonthly)}少なくなります</strong>。
            賞与がない場合の年収は324万円です。以下の内訳・比較表は年収換算（324万円）で表示しています。
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
            月給27万円・27.1万円の手取りは、いずれも月給26.9万円を下回っています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-26man-tedori/", label: "月給26万円の手取り" },
        { href: "/knowledge/gesshu-28man-tedori/", label: "月給28万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/bonus-60man-tedori/", label: "ボーナス60万円の手取り" },
        { href: "/knowledge/shoukyu-heikin/", label: "昇給の平均額" },
      ]}
    >
      <h2>月給26.9万円から27万円に上がると手取りが減る理由</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額25万円以上27万円未満は標準報酬月額26万円、27万円以上29万円未満は28万円です。月給27万円はちょうど区分が上がる境目にあたるため、月給が1,000円増えただけで保険料が月2,000円以上増えます。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給26.9万円</th>
              <th className="p-3 text-right">月給27万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給27.2万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(be.grade)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">健康保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.health / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.health / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(be.health / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">厚生年金保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.pension / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.pension / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(be.pension / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(be.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        この試算の前提で100円刻みに計算すると、月給27万円の区分で月給26.9万円の手取りを上回るのは月給約27.2万円からです（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が26.9万円でも、4月〜6月の平均が27万円以上になると標準報酬月額28万円の区分になります。
        一方、厚生年金保険料は将来の年金額の計算にも使われるため、区分が上がることは手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>月給27万円は産業別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を産業・年齢階級別に公表しています。男女計の25〜29歳・30〜34歳の値を25〜29歳の高い順に並べ、月給26万円以上28万円未満にあたる欄を色付けしています。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">産業</th>
              <th className="p-3 text-right">25〜29歳</th>
              <th className="p-3 text-right rounded-tr-lg">30〜34歳</th>
            </tr>
          </thead>
          <tbody>
            {ind.map((x) => (
              <tr key={x.name} className="border-b border-gray-100">
                <td className="p-3">{x.name}</td>
                {cell(x.a25)}
                {cell(x.a30)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={WAGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第5-1表 産業、年齢階級別賃金</a>（男女計・令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。
      </p>
      <p className="mb-10">
        25〜29歳では、卸売業，小売業（272.7千円）、教育，学習支援業（272.9千円）、生活関連サービス業，娯楽業（269.4千円）が月給27万円に近い水準です。宿泊業，飲食サービス業と複合サービス事業は30〜34歳で27万円前後になります。
        雇用形態別では、
        <a href={EMP_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同 第6-1表</a>で正社員・正職員の25〜29歳が285.0千円です。
        この統計は所定内給与額のため、残業代を含む求人票の「月給」や実際の支給額とは一致しない点にご注意ください。
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
              <td className="p-3">2年目の6月以降（前年も月給27万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、月給27万円で入社した場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        産業による月給の差を踏まえて転職先を探す場合は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
