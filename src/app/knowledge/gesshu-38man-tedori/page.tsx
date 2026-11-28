import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-38man-tedori/" },
  title: "月収38万円の手取りは約30.0万円【2026年・令和8年の税制で試算】月収39.4万円と39.5万円の境目と学歴別の平均月給",
  description:
    "額面の月収38万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約30.0万円（約79.0%）です。月収39.4万円と39.5万円で手取りが逆転する境目と、学歴・年齢別の平均月給との比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収38万円の手取りは約30.0万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収38万円の手取りと内訳、標準報酬月額の境目、学歴別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 380000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const b1 = calcTakeHome(394000 * 12);
const b2 = calcTakeHome(395000 * 12);
const recover = (() => {
  for (let m = 396000; m < 430000; m += 1000) if (calcTakeHome(m * 12).netMonthly > b1.netMonthly) return m;
  return 0;
})();
const table = [360000, 370000, 380000, 390000, 394000, 395000, 400000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表（男女計・所定内給与額・千円）
const WAGE_CHECKED = "2026年11月29日";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const edu = [
  { age: "25〜29歳", hs: 251.7, vo: 266.8, jc: 277.2, univ: 296.4, grad: 335.0 },
  { age: "30〜34歳", hs: 276.2, vo: 282.2, jc: 301.7, univ: 340.3, grad: 406.1 },
  { age: "35〜39歳", hs: 296.6, vo: 302.7, jc: 313.4, univ: 382.2, grad: 466.6 },
  { age: "40〜44歳", hs: 309.0, vo: 321.6, jc: 336.9, univ: 425.3, grad: 553.7 },
  { age: "45〜49歳", hs: 322.2, vo: 334.0, jc: 340.8, univ: 458.4, grad: 617.8 },
  { age: "50〜54歳", hs: 335.1, vo: 357.0, jc: 349.0, univ: 494.9, grad: 648.3 },
  { age: "55〜59歳", hs: 332.1, vo: 363.7, jc: 364.0, univ: 529.1, grad: 676.2 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 370 && v < 395 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月収38万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収38万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収39.4万円と39.5万円では、なぜ手取りが逆転するのですか？",
    a: `報酬月額37万円以上39万5千円未満は標準報酬月額38万円、39万5千円以上42万5千円未満は41万円の区分です（健康保険法 第40条）。この境目では標準報酬月額が3万円上がるため、月収39.5万円は月収39.4万円より社会保険料が月${yen((b2.social - b1.social) / 12)}増え、手取りが月${yen(b1.netMonthly - b2.netMonthly)}少なくなります（当サイト試算）。`,
  },
  {
    q: "月収38万円は大学卒の平均と比べて高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、大学卒・男女計で30〜34歳340.3千円、35〜39歳382.2千円です。月収38万円は大学卒の35〜39歳の平均とほぼ同じ水準です。高校卒・専門学校卒・高専短大卒では、55〜59歳でも平均が370千円未満です。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-38man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収38万円の手取り"
      h1="月収38万円の手取りは約30.0万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収38万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約30.0万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収38万円は、大学卒（男女計）の35〜39歳の平均月給382.2千円とほぼ同じ水準です。月収39.4万円と39.5万円の間では標準報酬月額が3万円上がり、手取りが逆転します。
            賞与がない場合の年収は456万円です。以下の内訳・比較表は年収換算（456万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収36万〜40万円の手取り（早見表）"
      compare={[360000, 370000, 380000, 390000, 400000].map((m) => m * 12)}
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
            月収37万円で標準報酬月額が38万円に、39.5万円で41万円に上がります。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-36man-tedori/", label: "月収36万円の手取り" },
        { href: "/knowledge/gesshu-40man-tedori/", label: "月収40万円の手取り" },
        { href: "/knowledge/gesshu-35man-tedori/", label: "月収35万円の手取り" },
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円の額面" },
        { href: "/knowledge/tedori-450man/", label: "年収450万円の手取り" },
        { href: "/knowledge/salary-35sai/", label: "35歳の平均年収" },
        { href: "/knowledge/tedori-1100man/", label: "年収1100万円の手取り" },
      ]}
    >
      <h2>月収39.4万円と39.5万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（健康保険法 第40条）。
        報酬月額37万円以上39万5千円未満は標準報酬月額38万円、39万5千円以上42万5千円未満は41万円です。標準報酬月額22万円から38万円までの区分は2万円刻みですが、38万円の次は41万円と3万円刻みになるため、この境目では社会保険料の増え方が大きくなります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月収38万円</th>
              <th className="p-3 text-right">月収39.4万円</th>
              <th className="p-3 text-right rounded-tr-lg">月収39.5万円</th>
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
        月収39.5万円は月収39.4万円より社会保険料が月{yen((b2.social - b1.social) / 12)}増え、手取りは月{yen(b1.netMonthly - b2.netMonthly)}少なくなります。39.4万円の手取りを上回るのは月収{(recover / 10000).toFixed(1)}万円からです（当サイト試算）。
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれます。なお、厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>月収38万円は学歴・年齢別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を学歴・年齢階級別に公表しています。男女計の値を並べました。
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
        ※出典：<a href={EDU_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表 学歴、性、年齢階級別賃金</a>（男女計・令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。月37万円以上39.5万円未満（標準報酬月額38万円の区分）の欄を色付けしています。
      </p>
      <p className="mb-10">
        表の中で平均が標準報酬月額38万円の区分（37万円以上39.5万円未満）に入るのは、大学卒の35〜39歳（382.2千円）だけです。
        高校卒・専門学校卒・高専短大卒は、最も高い55〜59歳でも332.1〜364.0千円で、月収38万円に届きません。大学院卒は25〜29歳で335.0千円、30〜34歳で406.1千円と、30代前半で月収38万円を上回ります。
        所定内給与額には役職手当や住宅手当などの諸手当が含まれ、残業代は含まれません。求人票の月収と比べる場合は、固定残業代の有無を確認してください。
        年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>、30代の転職の進め方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
