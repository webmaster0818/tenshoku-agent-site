import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, shareBand, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-60man/" },
  title: "手取り60万円の額面は月約82.5万円・年収約990万円【2026年・令和8年の税制で試算】",
  description:
    "手取り60万円に必要な額面（総支給額）と年収を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約82.5万円、年収約990万円です。年収850万円で給与所得控除が上限になり基礎控除が下がる境目、所得税23%が始まる額面月給も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り60万円の額面は月約82.5万円・年収約990万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り60万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 825000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 500000, m: 673000 },
  { t: 550000, m: 749000 },
  { t: 580000, m: 794000 },
  { t: 600000, m: 825000 },
  { t: 650000, m: 900000 },
  { t: 700000, m: 980000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
// 年収850万円（月給約70.8万円）で給与所得控除が上限195万円に達し、合計所得金額が655万円を超えて所得税の基礎控除が67万円→62万円に下がる
const b1 = calcTakeHome(708000 * 12);
const b2 = calcTakeHome(709000 * 12);
// 課税所得695万円以上で所得税の税率が23%になる（額面月給90.2万円から）
const t1 = calcTakeHome(901000 * 12);
const t2 = calcTakeHome(902000 * 12);

const faq = [
  {
    q: "手取り60万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り60万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り60万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り60万円以上にするには、額面月給832,000円（年収9,984,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り60万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収900万円超1,000万円以下の人は${shareBand(9)}、1,000万円を超える人は${shareAbove(1000)}です（1年を通じて勤務した給与所得者）。賞与なしで手取り60万円となる年収990万円は、900万円超1,000万円以下の区分に入ります。`,
  },
  {
    q: "手取り60万円は年収1000万円と同じですか？",
    a: `賞与なしの場合、年収1,000万円（月給約83.3万円）の手取りは月${yen(calcTakeHome(10000000).netMonthly)}で、手取り60万円の額面（年収990万円）とほぼ同じ水準です（当サイト試算）。賞与がある会社では、同じ年収でも毎月の手取りは60万円より少なくなります。年収1,000万円の詳しい内訳は年収1000万円の手取りのページに掲載しています。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-60man/"
      annual={MONTHLY * 12}
      crumb="手取り60万円の額面"
      h1="手取り60万円の額面は月約82.5万円・年収約990万円【2026年】"
      lead={
        <>
          <p>
            手取り60万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが60万円以上になる最小の月給を求めました。手取り60万円の額面では、給与所得控除が上限の195万円に達し、所得税の基礎控除は62万円です。
            額面の約{Math.round(r.rate * 100)}%が手元に残ります。
          </p>
        </>
      }
      compareHeading="手取り50万〜70万円に必要な額面（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">手取り（月額）</th>
                  <th className="p-3 text-right">必要な額面月給</th>
                  <th className="p-3 text-right">年収換算</th>
                  <th className="p-3 text-right rounded-tr-lg">試算の手取り</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 600000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.t / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m * 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り50万・55万・58万・60万・65万・70万円に対応します。
            手取りを50万円から60万円に増やすには額面月給を{yen(table[3].m - table[0].m)}、60万円から70万円に増やすには{yen(table[5].m - table[3].m)}上げる必要があります（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-50man/", label: "手取り50万円の額面" },
        { href: "/knowledge/tedori-750man/", label: "年収750万円の手取り" },
        { href: "/company/mufg-bank/", label: "三菱UFJ銀行の平均年収（約914万円）" },
        { href: "/company/fujifilm-bi/", label: "富士フイルムビジネスイノベーションの平均年収（約1,059万円）" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-800man/", label: "年収800万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面" },
        { href: "/knowledge/nenshu-1000man-shokugyo/", label: "平均年収1000万円を超える職業" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
      ]}
    >
      <h2>年収850万円で給与所得控除が上限になり、基礎控除が下がる</h2>
      <p>
        給与所得控除は年収850万円超で上限の195万円となり、それ以上は年収が増えても控除額は増えません（
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁 No.1410 給与所得控除</a>）。
        また、令和8年分の所得税の基礎控除は、合計所得金額489万円超655万円以下で67万円、655万円超2,350万円以下で62万円です（国税庁「令和8年分 年末調整のしかた」）。給与だけの場合、合計所得金額が655万円を超えるのは年収850万円超です。
        手取り60万円の額面（年収990万円）は、この2つの境目を超えた位置にあります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面月給（年収）</th>
              <th className="p-3 text-right">給与所得</th>
              <th className="p-3 text-right">所得税の基礎控除</th>
              <th className="p-3 text-right">所得税（年額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年額）</th>
            </tr>
          </thead>
          <tbody>
            {[
              { l: "月給70.8万円", x: b1 },
              { l: "月給70.9万円", x: b2 },
              { l: "月給82.5万円（手取り60万円）", x: r },
              { l: "月給90.1万円", x: t1 },
              { l: "月給90.2万円", x: t2 },
            ].map((row) => (
              <tr key={row.l} className={`border-b border-gray-100 ${row.x === r ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">
                  {row.l}
                  <span className="block text-xs text-text-muted">年収{yen(row.x.annual)}</span>
                </td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.salaryIncome)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.basic)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.incomeTax)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※当サイト試算（東京都・協会けんぽ・独身・40歳未満・賞与なし）。個人住民税の基礎控除は43万円で、この範囲では変わりません。
      </p>
      <p className="mb-10">
        額面月給70.8万円から70.9万円に上がると、基礎控除が5万円下がるため所得税が年{yen(b2.incomeTax - b1.incomeTax)}増え、手取りは年{yen(b1.net - b2.net)}減ります（当サイト試算）。
        さらに、課税所得が695万円以上になると所得税の税率は20%から23%に上がります（
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁 No.2260 所得税の税率</a>）。
        この試算の前提では、税率23%が始まるのは額面月給90.2万円（年収約1,082万円）からで、手取り60万円の額面82.5万円は税率20%の区分に収まります。額面月給82.5万円から1万円上げたときに増える手取りは月約{Math.round((calcTakeHome(835000 * 12).netMonthly - r.netMonthly) / 100) / 100}万円です。
        年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
