import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-1100man/" },
  title: "年収1100万円の手取りは約792.0万円・月約66.0万円【2026年・令和8年の税制で試算】配偶者控除が26万円に減る区分",
  description:
    "年収1100万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約792.0万円（約72.0%）、月約66.0万円です。年収1,095万円超で配偶者控除が26万円に減る点と、年収1000万〜1200万円の比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収1100万円の手取りは約792.0万円・月約66.0万円【2026年】",
    description: "令和8年の税制・保険料率で年収1100万円の手取りを試算し、配偶者控除が段階的に減る区分との関係を解説しています。",
  },
};

const ANNUAL = 11000000;
const r = calcTakeHome(ANNUAL);
const o = calcTakeHome(ANNUAL, true);
const steps = [10000000, 10500000, 11000000, 11500000, 12000000].map((y) => calcTakeHome(y));
const totalIncome = ANNUAL - 1950000;
// 配偶者控除が38万円→26万円に減ることによる所得税（復興特別所得税2.1%を含む）の増加の目安
const spouseTaxUp = 120000 * (marginalRate(r.taxable) / 100) * 1.021;

const faq = [
  {
    q: "年収1100万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与を含む年収1100万円の場合、毎月の手取りはこれより少なく、賞与月に多くなります。`,
  },
  {
    q: "年収1100万円でも配偶者控除は受けられますか？",
    a: "受けられますが、控除額が減ります。給与だけの場合、年収1100万円の合計所得金額は905万円（年収－給与所得控除195万円）で、国税庁 No.1191 の表では「900万円超950万円以下」の区分にあたり、一般の控除対象配偶者の配偶者控除は26万円です（合計所得金額900万円以下の場合は38万円）。",
  },
  {
    q: "年収1100万円の所得税率は何%ですか？",
    a: `給与所得控除195万円・基礎控除62万円・社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税の速算表では${marginalRate(r.taxable)}%の区分（695万円以上900万円未満）です。所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}、住民税は年${yen(r.residentTax)}です（当サイト試算）。`,
  },
  {
    q: "年収1000万円を超える人の割合は？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収1,000万円を超える給与所得者は全体の${shareAbove(1000)}です。同調査の階級は「1,000万円超1,500万円以下」のため、1,100万円前後に限った割合は公表されていません。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-1100man/"
      annual={ANNUAL}
      crumb="年収1100万円の手取り"
      h1="年収1100万円の手取りは約792.0万円・月約66.0万円【2026年】"
      lead={
        <>
          <p>
            年収1100万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、{man(ANNUAL - r.net)}が税金と社会保険料として差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。年収1000万円と比べると、年収が100万円増えても手取りの増加は{man(r.net - steps[0].net)}にとどまります。
            配偶者控除を受けている方は、年収1,095万円を超えると控除額が38万円から26万円に減る点にもご注意ください。
          </p>
        </>
      }
      compareHeading="年収1000万〜1200万円の手取り比較"
      compare={[10000000, 10500000, 11000000, 11500000, 12000000]}
      compareNote={
        <p>
          この範囲では、年収が50万円増えるごとに手取りは
          {steps.slice(1).map((s, i) => `${man(s.net - steps[i].net)}`).join("・")}増えます（1000万→1050万円から1150万→1200万円の順・当サイト試算）。
          年収約1,083万円で課税所得が695万円を超え、所得税率が20%から23%の区分に上がります（当サイト試算）。年収1100万円はすでに23%の区分にあり、住民税10%と合わせると、ここから増えた年収の3割以上が税金になります。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-1200man/", label: "年収1200万円の手取り" },
        { href: "/knowledge/tedori-1500man/", label: "年収1500万円の手取り" },
        { href: "/knowledge/nenshu-1000man-shokugyo/", label: "年収1000万円の職業" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/knowledge/gesshu-60man-tedori/", label: "月収60万円の手取り" },
        { href: "/knowledge/gesshu-38man-tedori/", label: "月収38万円の手取り" },
      ]}
    >
      <h2>年収1,095万円を超えると配偶者控除が26万円に減る</h2>
      <p>
        配偶者控除の額は、控除を受ける本人の合計所得金額に応じて3段階で減り、1,000万円を超えると受けられなくなります（国税庁 No.1191）。
        給与だけの方の合計所得金額は「年収－給与所得控除（年収850万円超は195万円）」のため、年収1100万円の合計所得金額は{(totalIncome / 10000).toLocaleString("ja-JP")}万円で、<strong>控除額が26万円の区分</strong>にあたります（当サイト計算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">本人の合計所得金額</th>
              <th className="p-3 text-right">給与だけの場合の年収</th>
              <th className="p-3 text-right">一般の控除対象配偶者</th>
              <th className="p-3 text-right rounded-tr-lg">老人控除対象配偶者</th>
            </tr>
          </thead>
          <tbody>
            {[
              { a: "900万円以下", b: "1,095万円以下", c: "38万円", d: "48万円" },
              { a: "900万円超950万円以下", b: "1,095万円超1,145万円以下", c: "26万円", d: "32万円" },
              { a: "950万円超1,000万円以下", b: "1,145万円超1,195万円以下", c: "13万円", d: "16万円" },
              { a: "1,000万円超", b: "1,195万円超", c: "受けられない", d: "受けられない" },
            ].map((x) => (
              <tr key={x.a} className={`border-b border-gray-100 ${x.a === "900万円超950万円以下" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{x.a}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.c}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※控除額は国税庁 No.1191（令和8年分）の表によります。年収の列は、給与所得控除195万円を加えて当サイトで換算した目安です。配偶者の合計所得金額が62万円以下（給与だけの場合は年収136万円以下）であることなど、配偶者側の要件もあります。
        出典（2026年11月29日確認）：
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1191 配偶者控除</a>／
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1195 配偶者特別控除</a>／
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.2260 所得税の税率</a>
      </p>
      <p className="mb-10">
        年収1,095万円以下から年収1100万円に上がると、配偶者控除（一般）が12万円減ります。所得税率23%の区分では、所得税（復興特別所得税を含む）が年およそ{yen(Math.round(spouseTaxUp / 100) * 100)}増える計算です（当サイト計算・住民税の配偶者控除は所得税と金額が異なるため含めていません）。
        上の手取り試算は独身の前提のため、配偶者控除の影響は含んでいません。年収1,095万円前後で転職先の年収を比べる場合は、控除の区分が変わるかどうかも確認することをおすすめします。
        年収1000万円以上の求人を扱う転職エージェントは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
