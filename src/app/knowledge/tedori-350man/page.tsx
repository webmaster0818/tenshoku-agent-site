import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareBand } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-350man/" },
  title: "年収350万円の手取りは約278万円・月約23.2万円【2026年・令和8年の税制で試算】",
  description:
    "年収350万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約278万円（約79.6%）、月約23.2万円です。月給29万円を境に標準報酬月額が上がり、年収346.8万円より手取りが少なくなる逆転についても計算しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収350万円の手取りは約278万円・月約23.2万円【2026年】",
    description: "令和8年の税制・保険料率で年収350万円の手取りを試算し、内訳と標準報酬月額の境目を掲載しています。",
  },
};

const A = 3500000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
// 標準報酬月額の境目（健康保険法 第40条：報酬月額29万円以上31万円未満→30万円）
const below = calcTakeHome(289000 * 12);
const edge = calcTakeHome(290000 * 12);

const faq = [
  {
    q: "年収350万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある会社では月給が低くなるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収350万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。差し引かれる額の約${Math.round((r.social / (A - r.net)) * 100)}%が社会保険料です。`,
  },
  {
    q: "年収350万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、年収300万円超400万円以下の人が${shareBand(3)}で、全14階級の中で最も多い階級です（1年を通じて勤務した給与所得者・人数から当サイトで集計）。`,
  },
  {
    q: "年収が少し上がったのに手取りが減ることはありますか？",
    a: `あります。健康保険・厚生年金の保険料は、報酬月額を区切った「標準報酬月額」に料率を掛けて決まります。月給${yen(289000)}（年収${yen(289000 * 12)}）は標準報酬月額28万円、月給${yen(290000)}（年収${yen(290000 * 12)}）は30万円の等級になり、手取りは年${yen(below.net)}から${yen(edge.net)}へ${yen(below.net - edge.net)}減ります（当サイト試算）。年収350万円でも、年収346.8万円より手取りは${yen(below.net - r.net)}少なくなります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-350man/"
      annual={A}
      crumb="年収350万円の手取り"
      h1="年収350万円の手取りは約278万円・月約23.2万円【2026年】"
      lead={
        <>
          <p>
            年収350万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(A - r.net)}のうち、社会保険料が{man(r.social)}、住民税が{man(r.residentTax)}、所得税が{man(r.incomeTax)}です。
            月給約29.2万円は標準報酬月額30万円の等級の下限（報酬月額29万円）をわずかに上回る水準で、社会保険料が一段高くなる位置にあります。
          </p>
        </>
      }
      compareHeading="年収300万〜400万円の手取り比較"
      compare={[3000000, 3250000, 3500000, 3750000, 4000000]}
      compareNote={
        <p>
          年収300万円から400万円の範囲では、手取りの割合は80.0%から79.2%へ緩やかに下がります。
          この範囲は所得税の税率が5%の区分（課税所得195万円以下）に収まるため、年収の増加に対する税負担の増え方は小さく、手取りの差は主に社会保険料の等級によって生じます（当サイト試算）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-380man/", label: "年収380万円の手取り" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/knowledge/tedori-gesshu-17man/", label: "手取り17万円の額面" },
        { href: "/age/20s/", label: "20代向けの転職エージェント" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>月給29万円の境目で手取りが逆転する</h2>
      <p>
        健康保険料と厚生年金保険料は、報酬月額を等級に当てはめた標準報酬月額で計算されます（健康保険法 第40条）。報酬月額27万円以上29万円未満は28万円、29万円以上31万円未満は30万円です。
        年収を12等分した月給で計算すると、年収350万円の前後では次のようになります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年収（月給）</th>
              <th className="p-3 text-right">標準報酬月額</th>
              <th className="p-3 text-right">社会保険料（年）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年）</th>
            </tr>
          </thead>
          <tbody>
            {[
              { l: `${yen(289000 * 12)}（月${yen(289000)}）`, x: below },
              { l: `${yen(290000 * 12)}（月${yen(290000)}）`, x: edge },
              { l: `${yen(A)}（月${yen(A / 12)}）`, x: r },
            ].map((row) => (
              <tr key={row.l} className={`border-b border-gray-100 ${row.x === r ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{row.l}</td>
                <td className="p-3 text-right whitespace-nowrap">{(row.x.grade / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.social)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(row.x.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※東京都・協会けんぽ・独身・40歳未満・賞与なしの当サイト試算。実際の標準報酬月額は、原則として4〜6月に支払われた報酬（通勤手当や残業代を含む）の平均で決まります。
      </p>
      <p className="mb-10">
        この試算では、年収{yen(289000 * 12)}から{yen(290000 * 12)}へ1.2万円増えると、社会保険料が{yen(edge.social - below.social)}増え、手取りは{yen(below.net - edge.net)}減ります。
        年収350万円の手取り（{yen(r.net)}）も、年収{yen(289000 * 12)}の手取り（{yen(below.net)}）をわずかに下回ります。
        転職で年収350万円前後の提示を比べる場合は、月給の数千円の差よりも、賞与の有無・残業代の見込み・加入する健康保険の料率のほうが手取りへの影響が大きくなります。
      </p>
    </TakeHomePage>
  );
}
