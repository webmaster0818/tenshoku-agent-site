import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-36man-tedori/" },
  title: "月収36万円の手取りは約28.4万円【2026年・令和8年の税制で試算】月収36.9万円と37万円の境目と40歳からの介護保険料",
  description:
    "額面の月収36万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約28.4万円（約79.2%）です。月収36.9万円と37万円で手取りが逆転する境目、40歳から加わる介護保険料、年齢別の平均月給との比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収36万円の手取りは約28.4万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収36万円の手取りと内訳、標準報酬月額の境目、40歳以降の手取りを試算しています。",
  },
};

const MONTHLY = 360000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const b1 = calcTakeHome(369000 * 12);
const b2 = calcTakeHome(370000 * 12);
const recover = (() => {
  for (let m = 371000; m < 400000; m += 1000) if (calcTakeHome(m * 12).netMonthly > b1.netMonthly) return m;
  return 0;
})();
const firstYear = (r.net + r.residentTax) / 12;
const table = [340000, 350000, 360000, 369000, 370000, 380000].map((m) => ({ m, r: calcTakeHome(m * 12) }));
const careRows = [330000, 360000, 400000].map((m) => ({ m, u: calcTakeHome(m * 12), o: calcTakeHome(m * 12, true) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月29日";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const ages = [
  { age: "30〜34歳", all: 312.3, m: 330.4, f: 283.2 },
  { age: "35〜39歳", all: 340.6, m: 366.2, f: 292.4 },
  { age: "40〜44歳", all: 364.3, m: 398.2, f: 303.6 },
  { age: "45〜49歳", all: 377.9, m: 420.7, f: 305.7 },
  { age: "50〜54歳", all: 388.8, m: 437.5, f: 305.4 },
  { age: "55〜59歳", all: 396.2, m: 445.6, f: 305.7 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 350 && v < 370 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月収36万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収36万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収36.9万円と37万円では、なぜ手取りが逆転するのですか？",
    a: `報酬月額35万円以上37万円未満は標準報酬月額36万円、37万円以上39万5千円未満は38万円の区分です（健康保険法 第40条）。月収37万円になると社会保険料が月${yen((b2.social - b1.social) / 12)}増え、月収36.9万円より手取りが月${yen(b1.netMonthly - b2.netMonthly)}少なくなります。36.9万円の手取りを上回るのは月収${(recover / 10000).toFixed(1)}万円からです（当サイト試算）。`,
  },
  {
    q: "40歳になると月収36万円の手取りはいくら減りますか？",
    a: `40歳になった月から介護保険料が健康保険料に上乗せされます。月収36万円では手取りが月${yen(r.netMonthly - o.netMonthly)}少なくなり、月${yen(o.netMonthly)}になります（当サイト試算・協会けんぽ東京支部の令和8年度料率）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-36man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収36万円の手取り"
      h1="月収36万円の手取りは約28.4万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収36万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約28.4万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収36万円は標準報酬月額36万円の区分（35万円以上37万円未満）にあり、<strong>月収が37万円に上がると社会保険料の区分が1つ上がって手取りが逆転します</strong>。
            賞与がない場合の年収は432万円です。以下の内訳・比較表は年収換算（432万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収34万〜38万円の手取り（早見表）"
      compare={[340000, 350000, 360000, 370000, 380000].map((m) => m * 12)}
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
            月収36.9万円と37万円の間で標準報酬月額が36万円から38万円に上がり、手取りが逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-35man-tedori/", label: "月収35万円の手取り" },
        { href: "/knowledge/gesshu-38man-tedori/", label: "月収38万円の手取り" },
        { href: "/knowledge/gesshu-40man-tedori/", label: "月収40万円の手取り" },
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円の額面" },
        { href: "/knowledge/salary-35sai/", label: "35歳の平均年収" },
        { href: "/knowledge/salary-40sai/", label: "40歳の平均年収" },
      ]}
    >
      <h2>月収36.9万円と37万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額35万円以上37万円未満は標準報酬月額36万円、37万円以上39万5千円未満は38万円です。月収36万円は36万円の区分の中ほどにありますが、月収が1万円上がって37万円になると38万円の区分に入ります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月収36万円</th>
              <th className="p-3 text-right">月収36.9万円</th>
              <th className="p-3 text-right rounded-tr-lg">月収37万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.grade)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.social / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen((x.incomeTax + x.residentTax) / 12)}</td>)}
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              {[r, b1, b2].map((x, i) => <td key={i} className="p-3 text-right whitespace-nowrap">{yen(x.netMonthly)}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        月収37万円は月収36.9万円より社会保険料が月{yen((b2.social - b1.social) / 12)}増え、手取りは月{yen(b1.netMonthly - b2.netMonthly)}少なくなります。36.9万円の手取りを上回るのは月収{(recover / 10000).toFixed(1)}万円からです（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が36万円でも、4月〜6月の残業代で平均が37万円以上になると38万円の区分になります。
        なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>40歳からは介護保険料が加わる</h2>
      <p>
        40歳から64歳までの方は介護保険の第2号被保険者となり、健康保険料率と子ども・子育て支援金（0.23%）に、全国一律の介護保険料率1.62%が加わります（
        <a href="https://www.kyoukaikenpo.or.jp/g7/cat330/sb3130/r08/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">協会けんぽ「令和8年度保険料率のお知らせ」</a>：{WAGE_CHECKED}確認）。
        月収36万円前後で、40歳未満と40〜64歳の手取りを比べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
              <th className="p-3 text-right">40歳未満の手取り</th>
              <th className="p-3 text-right">40〜64歳の手取り</th>
              <th className="p-3 text-right rounded-tr-lg">差（月額）</th>
            </tr>
          </thead>
          <tbody>
            {careRows.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.u.netMonthly)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.o.netMonthly)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.u.netMonthly - x.o.netMonthly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        月収36万円の場合、40歳になると手取りは月{yen(r.netMonthly - o.netMonthly)}、年間では約{Math.round((r.net - o.net) / 10000).toLocaleString("ja-JP")}万円少なくなります（当サイト試算）。
        介護保険料の分だけ社会保険料控除が増えるため、所得税・住民税はわずかに下がりますが、手取りの減少のほうが大きくなります。
        転職で年収が変わる時期と40歳の到来が重なる場合は、手取りの比較に介護保険料の分も含めて考えることをおすすめします。
      </p>

      <h2>月収36万円は年齢別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を性・年齢階級別に公表しています。
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
        ※出典：<a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金</a>（令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。月35万円以上37万円未満の欄を色付けしています。
      </p>
      <p className="mb-10">
        月収36万円に最も近いのは、男女計の40〜44歳（364.3千円）と男性の35〜39歳（366.2千円）です。男女計の年齢計（340.6千円）はやや下回ります。女性はどの年齢階級でも310千円未満で、月収36万円は女性の平均を大きく上回る水準です。
        所定内給与額は残業代を含まないため、残業代込みの月収と比べる場合は差が小さく見える点にご注意ください。
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
              <td className="p-3">前年の所得がない場合</td>
              <td className="p-3 text-right whitespace-nowrap">0円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(firstYear)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">前年も月収36万円の場合</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれます（総務省 個人住民税）。前年に所得がない状態で月収36万円の仕事に就いた場合、翌年6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        転職で月収を上げたい場合の進め方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
