import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-800man/" },
  title: "年収800万円の手取りは約594.7万円・月約49.5万円【2026年・令和8年の税制で試算】",
  description:
    "年収800万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約594.7万円（約74.3%）、月約49.5万円です。年収850万円を超えると基礎控除が67万円から62万円に下がり、手取りが一時的に減る境目も試算で示しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収800万円の手取りは約594.7万円・月約49.5万円【2026年】",
    description: "令和8年の税制・保険料率で年収800万円の手取りを試算し、年収850万円の基礎控除の境目も解説しています。",
  },
};

const r = calcTakeHome(8000000);
const o = calcTakeHome(8000000, true);
const a = calcTakeHome(8500000);
const b = calcTakeHome(8501000);
const c = calcTakeHome(8515000);

const faq = [
  {
    q: "年収800万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。`,
  },
  {
    q: "年収800万円を超える人の割合は？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収800万円を超える給与所得者は全体の${shareAbove(800)}です。700万円超800万円以下は${shareBand(7)}、800万円超900万円以下は${shareBand(8)}です。`,
  },
  {
    q: "年収800万円の所得税率は何%ですか？",
    a: `令和8年分の制度で、給与所得控除190万円・基礎控除67万円・社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円となり、所得税の速算表では20%の区分（330万円以上695万円未満）です。所得税（復興特別所得税を含む）は年${r.incomeTax.toLocaleString("ja-JP")}円、住民税は年${r.residentTax.toLocaleString("ja-JP")}円です（当サイト試算）。`,
  },
  {
    q: "年収850万円を少し超えると手取りが減るのは本当ですか？",
    a: `令和8年分・令和9年分の所得税では、合計所得金額が655万円を超えると基礎控除が67万円から62万円に下がります。給与だけの場合は年収850万円が境目です（国税庁「令和8年分 年末調整のしかた」）。当サイトの試算では、年収850万円と850万1,000円で手取りが${yen(a.net - b.net)}逆転し、年収851万5,000円で850万円の手取りを上回ります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-800man/"
      annual={8000000}
      crumb="年収800万円の手取り"
      h1="年収800万円の手取りは約594.7万円・月約49.5万円【2026年】"
      lead={
        <>
          <p>
            年収800万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、社会保険料{man(r.social)}・所得税{man(r.incomeTax)}・住民税{man(r.residentTax)}が差し引かれます。
          </p>
          <p className="mt-2">
            年収800万円は、令和8年分の所得税の基礎控除が67万円となる区分の上限（年収850万円）に近い水準です。850万円を超えると基礎控除が62万円に下がり、給与所得控除も195万円で頭打ちになります。
          </p>
        </>
      }
      compareHeading="年収700万〜900万円の手取り比較"
      compare={[7000000, 7500000, 8000000, 8500000, 9000000]}
      compareNote={
        <p>
          年収800万円から850万円では手取りが{man(a.net - r.net)}増えますが、850万円から900万円では{man(calcTakeHome(9000000).net - a.net)}の増加にとどまります。
          850万円を境に基礎控除が5万円下がり、給与所得控除が増えなくなるためです（当サイト試算）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-700man/", label: "年収700万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円に必要な額面" },
        { href: "/company/nttdata/", label: "NTTデータの平均年収（923万円）と手取り試算" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>年収850万円を超えると手取りが一時的に減る理由</h2>
      <p>
        令和8年度税制改正により、令和8年分・令和9年分の所得税の基礎控除は、合計所得金額489万円超655万円以下で67万円、655万円超2,350万円以下で62万円となりました（国税庁「令和8年分 年末調整のしかた」）。
        給与所得控除は年収850万円で上限の195万円に達するため（国税庁 No.1410）、年収850万円の合計所得金額はちょうど655万円です。これを1円でも超えると、基礎控除が5万円下がります。
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
        当サイトの試算では、年収が1,000円増えると所得税が{yen(b.incomeTax - a.incomeTax)}増え、手取りは{yen(a.net - b.net)}減ります。
        年収{yen(c.annual)}で手取りが{yen(c.net)}となり、850万円の手取りを上回ります。
        年収665万円台の境目（基礎控除104万円→67万円）に比べると逆転の幅は小さいものの、年収840万〜860万円程度の提示を比べる際は、この境目を考慮することをおすすめします。
        なお、23歳未満の扶養親族がいる方などで所得金額調整控除の対象となる方は、年収850万円超でも控除が加わるため、試算の結果が変わります（国税庁 No.1411 所得金額調整控除）。年収800万円以上の求人を扱う転職エージェントは
        <Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
