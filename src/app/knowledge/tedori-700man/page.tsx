import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-700man/" },
  title: "年収700万円の手取りは約530.8万円・月約44.2万円【2026年・令和8年の税制で試算】",
  description:
    "年収700万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約530.8万円（約75.8%）、月約44.2万円です。40歳から介護保険料が加わると手取りがいくら減るか、国税庁統計で見た年収700万円の位置も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収700万円の手取りは約530.8万円・月約44.2万円【2026年】",
    description: "令和8年の税制・保険料率で年収700万円の手取りを試算し、40歳以降の介護保険料の影響も解説しています。",
  },
};

const r = calcTakeHome(7000000);
const o = calcTakeHome(7000000, true);
const steps = [6000000, 6500000, 7000000, 7500000, 8000000].map((y) => calcTakeHome(y));
const ages = [6000000, 7000000, 8000000].map((y) => ({ y, u: calcTakeHome(y), o: calcTakeHome(y, true) }));

const faq = [
  {
    q: "年収700万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。`,
  },
  {
    q: "年収700万円を超える人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収700万円を超える給与所得者は全体の${shareAbove(700)}です。700万円超800万円以下の人は${shareBand(7)}です。`,
  },
  {
    q: "年収700万円の所得税の基礎控除はいくらですか？",
    a: `令和8年分・令和9年分は、合計所得金額489万円超655万円以下で67万円です（国税庁「令和8年分 年末調整のしかた」）。年収700万円の合計所得金額（給与所得）は${(r.salaryIncome / 10000).toLocaleString("ja-JP")}万円のため、67万円が適用されます。年収665万5,556円以下の104万円と比べて37万円少なくなります。`,
  },
  {
    q: "40歳になると年収700万円の手取りはいくら減りますか？",
    a: `40歳から健康保険料に介護保険料（協会けんぽ 令和8年度 1.62%の折半）が加わります。当サイトの試算では、年収700万円の手取りは年${yen(r.net - o.net)}（月${yen((r.net - o.net) / 12)}）少なくなります。社会保険料控除が増えるため、所得税・住民税はわずかに下がります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-700man/"
      annual={7000000}
      crumb="年収700万円の手取り"
      h1="年収700万円の手取りは約530.8万円・月約44.2万円【2026年】"
      lead={
        <>
          <p>
            年収700万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、社会保険料{man(r.social)}・所得税{man(r.incomeTax)}・住民税{man(r.residentTax)}が差し引かれます。
          </p>
          <p className="mt-2">
            年収700万円は、令和8年分の所得税の基礎控除が67万円となる区分（年収665万5,557円〜850万円）に入ります。国税庁の統計では、年収700万円を超える給与所得者は全体の{shareAbove(700)}です。
          </p>
        </>
      }
      compareHeading="年収600万〜800万円の手取り比較"
      compare={[6000000, 6500000, 7000000, 7500000, 8000000]}
      compareNote={
        <p>
          年収が50万円増えるごとに、手取りは
          {steps.slice(1).map((s, i) => man(s.net - steps[i].net)).join("・")}増えます（600万→650万円から750万→800万円の順・当サイト試算）。
          650万→700万円の増え方が小さいのは、この間に基礎控除が104万円から67万円に下がるためです。境目の詳しい試算は
          <Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link>に掲載しています。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/tedori-800man/", label: "年収800万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円に必要な額面" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
      ]}
    >
      <h2>40歳から加わる介護保険料の影響</h2>
      <p>
        40歳から64歳までの方は、健康保険料に介護保険料が加わります。協会けんぽの令和8年度の介護保険料率は1.62%で、会社と本人が半分ずつ負担します（協会けんぽ 令和8年度保険料率のお知らせ）。
        年収600万〜800万円の範囲で、40歳未満と40〜64歳の手取りを比べると次のとおりです。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面年収</th>
              <th className="p-3 text-right">手取り（40歳未満）</th>
              <th className="p-3 text-right">手取り（40〜64歳）</th>
              <th className="p-3 text-right rounded-tr-lg">差額（年額）</th>
            </tr>
          </thead>
          <tbody>
            {ages.map((x) => (
              <tr key={x.y} className={`border-b border-gray-100 ${x.y === 7000000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(x.y / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.u.net)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.o.net)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.u.net - x.o.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        年収700万円（月給約58.3万円・標準報酬月額{yen(r.grade)}）では、介護保険料の本人負担は月{yen(o.health / 12 - r.health / 12)}です。
        社会保険料控除が増える分だけ所得税・住民税が少し下がるため、手取りの減少は年{yen(r.net - o.net)}にとどまります（当サイト試算）。
        転職で年収が上がる場合も、40歳前後では介護保険料の開始時期を考慮して手取りを比べることをおすすめします。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
