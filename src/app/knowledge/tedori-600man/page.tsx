import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-600man/" },
  title: "年収600万円の手取りは約466万円・月約38.8万円【2026年・令和8年の税制で試算】",
  description:
    "年収600万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約466万円（約77.7%）、月約38.8万円です。年収665万円台で基礎控除が104万円から67万円に下がり、手取りが逆転する点も試算で示しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収600万円の手取りは約466万円・月約38.8万円【2026年】",
    description: "令和8年の税制・保険料率で年収600万円の手取りを試算し、年収665万円台の基礎控除の境目も解説しています。",
  },
};

const r = calcTakeHome(6000000);
const o = calcTakeHome(6000000, true);
const a = calcTakeHome(6655000);
const b = calcTakeHome(6656000);
const c = calcTakeHome(6700000);

const faq = [
  {
    q: "年収600万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。`,
  },
  {
    q: "年収600万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収600万円を超える給与所得者は全体の${shareAbove(600)}です。500万円を超える人は${shareAbove(500)}です。`,
  },
  {
    q: "年収が増えたのに手取りが減ることはありますか？",
    a: `令和8年分・令和9年分の所得税では、合計所得金額が489万円を超えると基礎控除が104万円から67万円に下がります。給与だけの場合、年収665万5,556円がその境目です（国税庁「令和8年分 年末調整のしかた」）。当サイトの試算では、年収665万5,000円と665万6,000円で手取りが約${Math.round((a.net - b.net) / 1000) / 10}万円逆転します。`,
  },
  {
    q: "令和8年の税制改正で、年収600万円の所得税はいくら減りますか？",
    a: "年収600万円（合計所得金額436万円）の基礎控除は、令和7年分の68万円から令和8年分は104万円になります。当サイトの試算では、所得税は年約3.7万円少なくなります。住民税の基礎控除（43万円）は変わりません。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-600man/"
      annual={6000000}
      crumb="年収600万円の手取り"
      h1="年収600万円の手取りは約466万円・月約38.8万円【2026年】"
      lead={
        <>
          <p>
            年収600万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、社会保険料{man(r.social)}・所得税{man(r.incomeTax)}・住民税{man(r.residentTax)}が差し引かれます。
          </p>
          <p className="mt-2">
            令和8年分・令和9年分は、年収665万円台を境に所得税の基礎控除が104万円から67万円に下がります。年収600万円は基礎控除104万円の範囲に入ります。
          </p>
        </>
      }
      compareHeading="年収550万〜700万円の手取り比較"
      compare={[5500000, 6000000, 6500000, 7000000]}
      compareNote={
        <p>
          年収600万円から650万円では手取りが約37.6万円増えますが、650万円から700万円では約27.1万円の増加にとどまります。
          この間に基礎控除の引下げ（104万円→67万円）と、標準報酬月額の上昇（53万円→59万円）が重なるためです（当サイト試算）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
      ]}
    >
      <h2>年収665万円台で手取りが逆転する理由</h2>
      <p>
        令和8年度税制改正により、令和8年分・令和9年分の所得税の基礎控除は、合計所得金額489万円以下で104万円、489万円超655万円以下で67万円となりました。
        給与だけの場合、合計所得金額489万円は年収665万5,556円にあたります（国税庁「令和8年分 年末調整のしかた」）。境目を超えると基礎控除が37万円減り、課税所得が増えます。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面年収</th>
              <th className="p-3 text-right">基礎控除（所得税）</th>
              <th className="p-3 text-right">所得税</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年額）</th>
            </tr>
          </thead>
          <tbody>
            {[a, b, c].map((x) => (
              <tr key={x.annual} className="border-b border-gray-100">
                <td className="p-3">{yen(x.annual)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.basic)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.incomeTax)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        当サイトの試算では、年収が1,000円増えるだけで所得税が{man(b.incomeTax - a.incomeTax)}増え、手取りは{man(a.net - b.net)}減ります。
        年収{yen(c.annual)}でも手取りは{yen(c.net)}で、665万5,000円の手取りをまだ{yen(a.net - c.net)}下回ります。
        転職の条件交渉で年収660万〜680万円程度を提示された場合は、この境目を考慮して手取りを比べることをおすすめします。
        なお、国税庁の同資料では、令和10年分以後は合計所得金額132万円超2,350万円以下の基礎控除が一律62万円とされており、この境目はなくなります。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
