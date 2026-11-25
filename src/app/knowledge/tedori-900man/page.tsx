import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-900man/" },
  title: "年収900万円の手取りは約661.5万円・月約55.1万円【2026年・令和8年の税制で試算】",
  description:
    "年収900万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約661.5万円（約73.5%）、月約55.1万円です。控除・厚生年金の上限を超えた後の手取りの増え方と、年収876万円・924万円の境目も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収900万円の手取りは約661.5万円・月約55.1万円【2026年】",
    description: "令和8年の税制・保険料率で年収900万円の手取りを試算し、控除の上限を超えた後の手取りの増え方を掲載しています。",
  },
};

const A = 9000000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const steps = [8000000, 8500000, 9000000, 9500000, 10000000].map((y) => calcTakeHome(y));
// 標準報酬月額の境目（健康保険法 第40条）：報酬月額73万円以上77万円未満 → 75万円、77万円以上81万円未満 → 79万円
const edges = [
  { label: "月給72.9万円", m: 729000 },
  { label: "月給73万円", m: 730000 },
  { label: "月給75万円（年収900万円）", m: 750000 },
  { label: "月給76.9万円", m: 769000 },
  { label: "月給77万円", m: 770000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
const e = (m: number) => edges.find((x) => x.m === m)!.r;
const inc = (from: number, to: number) => calcTakeHome(to).net - calcTakeHome(from).net;

const faq = [
  {
    q: "年収900万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある会社では月給が低くなるため、毎月の手取りはこれより少なく、賞与月に多くなります。`,
  },
  {
    q: "年収900万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。合計${man(A - r.net)}が差し引かれ、年収の${pct(1 - r.rate)}にあたります。`,
  },
  {
    q: "年収900万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収800万円超900万円以下の人は${shareBand(8)}、900万円超1,000万円以下の人は${shareBand(9)}、900万円を超える人は${shareAbove(900)}です（1年を通じて勤務した給与所得者）。同調査の平均給与は487万円です。`,
  },
  {
    q: "年収900万円の所得税の税率は何%ですか？",
    a: `当サイトの試算では、年収900万円（40歳未満・独身）の課税所得は${yen(r.taxable)}で、所得税の税率は${marginalRate(r.taxable)}%の区分です（国税庁 No.2260 所得税の税率）。課税所得が695万円以上になると23%の区分に入ります。住民税の所得割は一律10%です。`,
  },
  {
    q: "年収800万円から900万円に上がると手取りはいくら増えますか？",
    a: `当サイトの試算では、年収800万円の手取りは${man(steps[0].net)}、900万円は${man(r.net)}で、年収100万円の増加に対して手取りは${man(r.net - steps[0].net)}増えます。年収850万円を超えると基礎控除が67万円から62万円に下がり、給与所得控除も195万円で増えなくなるため、増えた年収のうち手取りになる割合が下がります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-900man/"
      annual={A}
      crumb="年収900万円の手取り"
      h1="年収900万円の手取りは約661.5万円・月約55.1万円【2026年】"
      lead={
        <>
          <p>
            年収900万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(A - r.net)}のうち、社会保険料が{man(r.social)}、所得税が{man(r.incomeTax)}、住民税が{man(r.residentTax)}です。
            年収900万円は、給与所得控除の上限（年収850万円超で195万円）、所得税の基礎控除が62万円に下がる区分、厚生年金保険料の上限の3つをすべて超えた位置にあります。
          </p>
        </>
      }
      compareHeading="年収800万〜1000万円の手取り比較"
      compare={[8000000, 8500000, 9000000, 9500000, 10000000]}
      compareNote={
        <p>
          年収が50万円増えるごとに、手取りは
          {steps.slice(1).map((s, i) => man(s.net - steps[i].net)).join("・")}増えます（800万→850万円から950万→1000万円の順・当サイト試算）。
          850万→900万円では、50万円のうち約{Math.round(((steps[2].net - steps[1].net) / 500000) * 100)}%が手取りになります。
          800万→850万円の約{Math.round(((steps[1].net - steps[0].net) / 500000) * 100)}%より低いのは、850万円を超えると基礎控除が5万円下がり、給与所得控除が増えなくなるためです。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-800man/", label: "年収800万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-750man/", label: "年収750万円の手取り" },
        { href: "/knowledge/gesshu-80man-tedori/", label: "月収80万円の手取り" },
        { href: "/knowledge/tedori-gesshu-38man/", label: "手取り38万円に必要な額面" },
        { href: "/knowledge/tedori-gesshu-60man/", label: "手取り60万円に必要な額面" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
      ]}
    >
      <h2>年収900万円で上限に達している3つの控除・保険料</h2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目</th>
              <th className="p-3 text-left">変わる位置</th>
              <th className="p-3 text-left rounded-tr-lg">年収900万円での扱い</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">給与所得控除</td>
              <td className="p-3">年収850万円超で195万円（上限）</td>
              <td className="p-3">195万円（年収が増えても控除は増えない）</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税の基礎控除</td>
              <td className="p-3">合計所得金額655万円超（年収850万円超）で67万円→62万円</td>
              <td className="p-3">62万円（合計所得金額2,350万円まで同額）</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">厚生年金保険料</td>
              <td className="p-3">標準報酬月額65万円（報酬月額63.5万円以上・年収762万円以上）が上限</td>
              <td className="p-3">月{yen(r.pension / 12)}で頭打ち（健康保険料は上限まで増え続ける）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：国税庁 No.1410 給与所得控除、国税庁「令和8年分 年末調整のしかた」、日本年金機構 厚生年金保険料額表（令和8年度版）。年収は賞与なし・給与収入のみの場合の換算です。
      </p>
      <p className="mb-10">
        年収800万円台前半までは、年収が増えると給与所得控除も増えるため、課税される所得の増え方が年収の増え方より緩やかでした。
        年収900万円では給与所得控除・基礎控除がともに一定となり、厚生年金保険料も増えないため、年収の増加分から主に健康保険料・雇用保険料・所得税・住民税が差し引かれます。
        当サイトの試算では、年収900万円から950万円に上がると手取りは{man(inc(9000000, 9500000))}、1000万円に上がると{man(inc(9000000, 10000000))}増えます。
        課税所得は{yen(r.taxable)}で所得税は{marginalRate(r.taxable)}%の区分のため、税率23%の区分（課税所得695万円以上）にはまだ入っていません。
      </p>

      <h2>年収876万円と924万円の境目で手取りが一時的に減る</h2>
      <p>
        健康保険の保険料は、報酬月額を区切った標準報酬月額に料率を掛けて決まります（
        <a href="https://laws.e-gov.go.jp/law/211AC0000000070" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">健康保険法 第40条</a>）。
        報酬月額73万円以上77万円未満は標準報酬月額75万円、77万円以上81万円未満は79万円です。年収900万円（月給75万円）は75万円の等級のちょうど中ほどにあります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面月給（年収）</th>
              <th className="p-3 text-right">標準報酬月額</th>
              <th className="p-3 text-right">健康保険料（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年額）</th>
            </tr>
          </thead>
          <tbody>
            {edges.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === 750000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">
                  {x.label}
                  <span className="block text-xs text-text-muted">年収{yen(x.m * 12)}</span>
                </td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.grade)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.health / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※当サイト試算（東京都・協会けんぽ・独身・40歳未満・賞与なし）。健康保険料には子ども・子育て支援金を含みます。厚生年金保険料はこの範囲ではすべて上限の月{yen(r.pension / 12)}です。
      </p>
      <p className="mb-10">
        月給72.9万円から73万円に上がると、健康保険料が月{yen((e(730000).health - e(729000).health) / 12)}増え、手取りは年{yen(e(729000).net - e(730000).net)}減ります。
        月給76.9万円から77万円に上がるときも、手取りは年{yen(e(769000).net - e(770000).net)}減ります（当サイト試算）。
        この範囲では厚生年金保険料が上限に達しているため、境目で増えるのは健康保険料だけとなり、年収750万円前後の境目より減る額は小さくなります。
        転職で年収900万円前後の提示を比べるときは、賞与の割合で月給と標準報酬月額が変わる点も確認すると、手取りの差が分かりやすくなります。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
