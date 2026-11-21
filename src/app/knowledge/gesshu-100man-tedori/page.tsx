import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen, shareAbove } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-100man-tedori/" },
  title: "月収100万円の手取りは約71.3万円【2026年・令和8年の税制で試算】厚生年金の上限で社会保険料の割合が下がる仕組み",
  description:
    "会社員の額面の月収100万円の手取りを、令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約71.3万円（約71.3%）です。厚生年金保険料が上限になる仕組み、月収100.5万円で健康保険料の区分が上がる境目も掲載しています。",

  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収100万円の手取りは約71.3万円【2026年】",
    description: "令和8年の税制・保険料率で、会社員の額面の月収100万円の手取りと内訳、社会保険料の上限の仕組みを試算しています。",
  },
};

const MONTHLY = 1000000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const m28 = calcTakeHome(280000 * 12);
const m50 = calcTakeHome(500000 * 12);
const m64 = calcTakeHome(650000 * 12);
const below = calcTakeHome(1004000 * 12);
const above = calcTakeHome(1005000 * 12);
const table = [800000, 900000, 1000000, 1004000, 1005000, 1100000, 1200000].map((m) => ({ m, r: calcTakeHome(m * 12) }));
const socialRate = (x: ReturnType<typeof calcTakeHome>) => pct(x.social / x.annual);

const faq = [
  {
    q: "月収100万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの会社員の前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収100万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。所得税と住民税の合計が社会保険料を上回ります。`,
  },
  {
    q: "月収100万円の所得税率は何%ですか？",
    a: `賞与なしで年収1,200万円の場合、課税所得は${yen(r.taxable)}で、適用される最高税率は23%です（国税庁 No.2260 所得税の税率・当サイト試算）。課税所得が900万円以上になると33%の税率が適用されます。`,
  },
  {
    q: "個人事業主・フリーランスの月収100万円にも当てはまりますか？",
    a: "当てはまりません。このページは会社員（協会けんぽ・厚生年金の加入者）の給与で試算しています。個人事業主・フリーランスは国民健康保険・国民年金に加入し、所得税も給与所得控除ではなく必要経費や青色申告特別控除で計算するため、手取りの計算方法が異なります。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-100man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収100万円の手取り"
      h1="月収100万円の手取りは約71.3万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            会社員の額面の月収100万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約71.3万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            厚生年金保険料は標準報酬月額65万円で上限になるため、月収に対する社会保険料の割合は{socialRate(r)}で、月給28万円（{socialRate(m28)}）より低くなります。
            賞与がない場合の年収は1,200万円です。以下の内訳・比較表は年収換算（1,200万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収80万〜120万円の手取り（早見表）"
      compare={[800000, 900000, 1000000, 1100000, 1200000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
                  <th className="p-3 text-right">健康保険の標準報酬月額</th>
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
            1つ目の表は年収換算の比較、2つ目の表は額面の月収ごとの健康保険の標準報酬月額・社会保険料・手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月収100.4万円と100.5万円の間で健康保険の区分が上がるため、手取りが月{yen(below.netMonthly - above.netMonthly)}逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1200man/", label: "年収1200万円の手取り" },
        { href: "/knowledge/gesshu-50man-tedori/", label: "月収50万円の手取り" },
        { href: "/knowledge/tedori-gesshu-60man/", label: "手取り60万円の額面" },
        { href: "/knowledge/nenshu-1000man-shokugyo/", label: "年収1000万円を超える職業" },
        { href: "/knowledge/gesshu-28man-tedori/", label: "月給28万円の手取り" },
      ]}
    >
      <h2>厚生年金保険料は月収65万円前後で上限になる</h2>
      <p>
        厚生年金保険料は、標準報酬月額に保険料率18.300%を掛け、会社と従業員が半分ずつ負担します。厚生年金の標準報酬月額は65万円が上限で、報酬月額63.5万円以上はすべて65万円として計算します（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表（令和8年度版）</a>）。
        そのため、月収100万円でも厚生年金保険料は月収65万円の人と同じ月{yen(r.pension / 12)}です。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
              <th className="p-3 text-right">厚生年金保険料（月額）</th>
              <th className="p-3 text-right">社会保険料の合計（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">月収に対する社会保険料の割合</th>
            </tr>
          </thead>
          <tbody>
            {[
              { k: "28万円", x: m28 },
              { k: "50万円", x: m50 },
              { k: "65万円", x: m64 },
              { k: "100万円", x: r },
            ].map((row) => (
              <tr key={row.k} className={`border-b border-gray-100 ${row.x === r ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{row.k}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.pension / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.social / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{socialRate(row.x)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">※当サイト試算（協会けんぽ東京支部・40歳未満・賞与なし）。社会保険料は健康保険（子ども・子育て支援金を含む）・厚生年金・雇用保険の従業員負担分の合計です。</p>
      <p className="mb-10">
        健康保険の標準報酬月額の上限は139万円（健康保険法 第40条）のため、月収100万円では健康保険料は月収に応じて増え続けます。雇用保険料は標準報酬月額ではなく実際の賃金に料率（一般の事業の労働者負担5/1,000）を掛けるため、上限がありません。
        社会保険料の割合が下がる一方で、所得税は課税所得に応じて税率が上がるため、月収100万円では所得税と住民税の合計（月{yen((r.incomeTax + r.residentTax) / 12)}）が社会保険料（月{yen(r.social / 12)}）を上回ります。
      </p>

      <h2>月収100.5万円で健康保険料の区分が上がる</h2>
      <p>
        健康保険の標準報酬月額は、報酬月額95.5万円以上100.5万円未満が98万円、100.5万円以上106万円未満が103万円の区分です（健康保険法 第40条）。月収100万円は98万円の区分の上のほうにあたり、月収が5千円増えるだけで区分が上がります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月収100.4万円</th>
              <th className="p-3 text-right rounded-tr-lg">月収100.5万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">健康保険の標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(below.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(above.grade)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">健康保険料（子ども・子育て支援金を含む）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(below.health / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(above.health / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(below.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(above.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        この期間の報酬には残業代や通勤手当も含まれるため、基本給が100万円未満でも、4月〜6月の平均が100.5万円以上になると103万円の区分になります。
      </p>

      <h2>月収100万円（年収1,200万円）の人の割合</h2>
      <p className="mb-10">
        国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち、年間の給与が1,000万円を超える人は{shareAbove(1000)}です（第16表・当サイト計算）。
        賞与なしで月収100万円の人の年収（1,200万円）は、この1,000万円超の層に入ります。賞与がある会社では、月収が100万円未満でも年収1,200万円に届くことがあり、その場合の手取りは<Link href="/knowledge/tedori-1200man/" className="text-teal font-bold hover:underline">年収1200万円の手取り</Link>のページで試算しています。
        年収1,000万円以上の求人を扱う転職サービスは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
