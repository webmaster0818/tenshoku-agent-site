import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-45man-tedori/" },
  title: "月収45万円の手取りは約35.3万円【2026年・令和8年の税制で試算】月収45.5万円に上がると手取りが減る境目",
  description:
    "額面の月収45万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約35.3万円（約78.6%）です。月収45.4万円から45.5万円に上がると手取りが減る標準報酬月額の境目と、大企業・学歴別の平均月給との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収45万円の手取りは約35.3万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収45万円の手取りと内訳、標準報酬月額の境目、大企業・学歴別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 450000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(454000 * 12);
const hi = calcTakeHome(455000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [430000, 440000, 450000, 454000, 455000, 459000, 460000, 470000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表・第3表・第4表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月25日";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const SIZE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/04.pdf";
// 男性：企業規模計（第2表）・大企業（第4表）、男女計：大学・大学院（第3表）
const rows = [
  { age: "35〜39歳", mAll: 366.2, mLarge: 420.0, univ: 382.2, grad: 466.6 },
  { age: "40〜44歳", mAll: 398.2, mLarge: 464.8, univ: 425.3, grad: 553.7 },
  { age: "45〜49歳", mAll: 420.7, mLarge: 495.1, univ: 458.4, grad: 617.8 },
  { age: "50〜54歳", mAll: 437.5, mLarge: 511.2, univ: 494.9, grad: 648.3 },
  { age: "55〜59歳", mAll: 445.6, mLarge: 533.2, univ: 529.1, grad: 676.2 },
  { age: "60〜64歳", mAll: 358.5, mLarge: 391.9, univ: 420.2, grad: 589.8 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 435 && v < 465 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月収45万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収45万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収45万円から少し昇給すると、手取りが減ることはありますか？",
    a: `あります。報酬月額43.5万円以上45.5万円未満は標準報酬月額44万円、45.5万円以上48.5万円未満は47万円の区分です（健康保険法 第40条）。月収45.4万円の手取りは月${yen(lo.netMonthly)}ですが、45.5万円になると社会保険料が月${yen((hi.social - lo.social) / 12)}増え、手取りは月${yen(hi.netMonthly)}に下がります。45.4万円の手取りを上回るのは月収45.9万円からです（当サイト試算）。`,
  },
  {
    q: "月収45万円は平均より高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、男女計のどの年齢階級でも400千円未満で、最も高い55〜59歳でも396.2千円です。月収45万円は男女計の平均をすべての年齢階級で上回ります。男性の企業規模計でも最も高い55〜59歳が445.6千円で、ほぼ同じ水準です。所定内給与額は残業代を含まないため、残業代込みの月収とは比べ方が異なります。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-45man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収45万円の手取り"
      h1="月収45万円の手取りは約35.3万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収45万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約35.3万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収45万円は標準報酬月額44万円の区分の上のほうにあり、<strong>月収45.5万円に上がると手取りが月{yen(lo.netMonthly - hi.netMonthly)}減ります</strong>（月収45.4万円との比較）。
            賞与がない場合の年収は540万円です。以下の内訳・比較表は年収換算（540万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収43万〜47万円の手取り（早見表）"
      compare={[430000, 440000, 450000, 460000, 470000].map((m) => m * 12)}
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
            月収45.4万円と45.5万円の間で標準報酬月額が44万円から47万円に上がり、手取りが逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-40man-tedori/", label: "月収40万円の手取り" },
        { href: "/knowledge/gesshu-50man-tedori/", label: "月収50万円の手取り" },
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/salary-45sai/", label: "45歳の平均年収" },
      ]}
    >
      <h2>月収45.4万円から45.5万円に上がると手取りが減る理由</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額43.5万円以上45.5万円未満は標準報酬月額44万円、45.5万円以上48.5万円未満は47万円です。この区分の幅は3万円あり、上がるときの保険料の増え方も大きくなります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月収45万円</th>
              <th className="p-3 text-right">月収45.4万円</th>
              <th className="p-3 text-right rounded-tr-lg">月収45.5万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(hi.grade)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(hi.social / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((r.incomeTax + r.residentTax) / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((lo.incomeTax + lo.residentTax) / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((hi.incomeTax + hi.residentTax) / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(hi.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        当サイトの試算では、月収45.5万円の手取りは月収45万円より月{yen(hi.netMonthly - r.netMonthly)}多いだけで、45.4万円の手取りを上回るのは月収45.9万円からです。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月25日確認）。
        基本給が45万円でも、4月〜6月の残業代や通勤手当を含めた平均が45.5万円以上になると47万円の区分になります。
        なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>月収45万円に届くのはどの層か（大企業の男性・学歴別）</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（毎年6月分・残業代と賞与を含まない月額）では、男女計の平均はどの年齢階級でも月収45万円に届きません。
        そこで、平均が45万円前後になる層として、男性（企業規模計・大企業）と、大学卒・大学院卒（男女計）の年齢別の値を並べました。大企業は常用労働者1,000人以上の企業です。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">男性（規模計）</th>
              <th className="p-3 text-right">男性（大企業）</th>
              <th className="p-3 text-right">大学卒</th>
              <th className="p-3 text-right rounded-tr-lg">大学院卒</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.mAll)}
                {cell(x.mLarge)}
                {cell(x.univ)}
                {cell(x.grad)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表</a>（男性・企業規模計）、
        <a href={SIZE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">第4表</a>（男性・大企業）、
        <a href={EDU_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">第3表</a>（男女計・大学／大学院）。いずれも令和7年6月分の所定内給与額。{WAGE_CHECKED}確認。月43.5万円以上46.5万円未満の欄を色付けしています。
      </p>
      <p className="mb-10">
        大企業の男性は40〜44歳（464.8千円）、大学卒は45〜49歳（458.4千円）、大学院卒は35〜39歳（466.6千円）で月収45万円前後に達します。男性の企業規模計では55〜59歳（445.6千円）が最も近く、50代後半でようやく同じ水準です。
        月収45万円は、勤め先の規模や学歴によって到達する年齢が15〜20年異なる水準といえます。転職で月収を上げたい場合の進め方は
        <Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは
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
              <td className="p-3">2年目の6月以降（前年も月収45万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、前年に所得がない状態で月収45万円の仕事に就いた場合、2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        転職の場合は前年の勤め先の所得で住民税がかかるため、この差は生じません。
      </p>
    </TakeHomePage>
  );
}
