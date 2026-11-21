import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-750man/" },
  title: "年収750万円の手取りは約563.4万円・月約46.9万円【2026年・令和8年の税制で試算】",
  description:
    "年収750万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約563.4万円（約75.1%）、月約46.9万円です。年収726万円と762万円で標準報酬月額が上がり手取りが一時的に減る境目、厚生年金保険料が上限に達する位置も計算しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収750万円の手取りは約563.4万円・月約46.9万円【2026年】",
    description: "令和8年の税制・保険料率で年収750万円の手取りを試算し、前後の標準報酬月額の境目を掲載しています。",
  },
};

const A = 7500000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const steps = [6500000, 7000000, 7500000, 8000000, 8500000].map((y) => calcTakeHome(y));
// 標準報酬月額の境目（健康保険法 第40条・厚生年金保険の等級）
// 報酬月額60.5万円以上63.5万円未満 → 62万円、63.5万円以上 → 65万円（厚生年金の上限）
const edges = [
  { label: "月給60.4万円", m: 604000 },
  { label: "月給60.5万円", m: 605000 },
  { label: "月給60.9万円", m: 609000 },
  { label: "月給62.5万円（年収750万円）", m: 625000 },
  { label: "月給63.4万円", m: 634000 },
  { label: "月給63.5万円", m: 635000 },
  { label: "月給63.9万円", m: 639000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
const e = (m: number) => edges.find((x) => x.m === m)!.r;

const faq = [
  {
    q: "年収750万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある会社では月給が低くなるため、毎月の手取りはこれより少なく、賞与月に多くなります。`,
  },
  {
    q: "年収750万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。差し引かれる額の約${Math.round((r.social / (A - r.net)) * 100)}%が社会保険料です。`,
  },
  {
    q: "年収750万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収700万円超800万円以下の人は${shareBand(7)}、700万円を超える人は${shareAbove(700)}、800万円を超える人は${shareAbove(800)}です（1年を通じて勤務した給与所得者）。同調査の平均給与は487万円です。`,
  },
  {
    q: "年収が上がったのに手取りが減ることはありますか？",
    a: `あります。年収750万円の前後では、月給60.5万円（年収726万円）と月給63.5万円（年収762万円）で健康保険・厚生年金の標準報酬月額が一段上がります。月給60.4万円から60.5万円に上がると手取りは年${yen(e(604000).net - e(605000).net)}、月給63.4万円から63.5万円に上がると年${yen(e(634000).net - e(635000).net)}減ります（当サイト試算・40歳未満）。`,
  },
  {
    q: "40歳になると年収750万円の手取りはいくら減りますか？",
    a: `40歳から健康保険料に介護保険料（協会けんぽ 令和8年度 1.62%の折半）が加わります。年収750万円（標準報酬月額${yen(r.grade)}）では本人負担が月${yen(o.health / 12 - r.health / 12)}増え、手取りは年${yen(r.net - o.net)}少なくなります（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-750man/"
      annual={A}
      crumb="年収750万円の手取り"
      h1="年収750万円の手取りは約563.4万円・月約46.9万円【2026年】"
      lead={
        <>
          <p>
            年収750万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(A - r.net)}のうち、社会保険料が{man(r.social)}、住民税が{man(r.residentTax)}、所得税が{man(r.incomeTax)}です。
            月給62.5万円は標準報酬月額62万円の等級（報酬月額60.5万円以上63.5万円未満）に入り、あと月1万円上がると厚生年金保険料が上限の等級に達する位置にあります。
          </p>
        </>
      }
      compareHeading="年収650万〜850万円の手取り比較"
      compare={[6500000, 7000000, 7500000, 8000000, 8500000]}
      compareNote={
        <p>
          年収が50万円増えるごとに、手取りは
          {steps.slice(1).map((s, i) => man(s.net - steps[i].net)).join("・")}増えます（650万→700万円から800万→850万円の順・当サイト試算）。
          700万→750万円の増え方は{man(steps[2].net - steps[1].net)}で、50万円のうち約{Math.round(((steps[2].net - steps[1].net) / 500000) * 100)}%が手取りになります。
          この範囲は所得税の税率20%の区分（課税所得330万円以上695万円未満）に収まり、基礎控除も67万円で変わらないため、手取りの差は主に社会保険料の等級によって生じます。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-700man/", label: "年収700万円の手取り" },
        { href: "/knowledge/tedori-800man/", label: "年収800万円の手取り" },
        { href: "/knowledge/tedori-gesshu-50man/", label: "手取り50万円に必要な額面" },
        { href: "/knowledge/tedori-gesshu-60man/", label: "手取り60万円に必要な額面" },
        { href: "/knowledge/annual-holidays-110/", label: "年間休日110日の水準（求人の条件比較）" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
      ]}
    >
      <h2>年収726万円と762万円の境目で手取りが一時的に減る</h2>
      <p>
        健康保険と厚生年金の保険料は、報酬月額を区切った標準報酬月額に料率を掛けて決まります（健康保険法 第40条、
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表</a>）。
        報酬月額60.5万円以上63.5万円未満は標準報酬月額62万円、63.5万円以上は65万円です。厚生年金保険の標準報酬月額は65万円が上限のため、年収762万円（月給63.5万円）より上では厚生年金保険料は月{yen(e(635000).pension / 12)}で増えなくなります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面月給（年収）</th>
              <th className="p-3 text-right">標準報酬月額</th>
              <th className="p-3 text-right">健康保険＋厚生年金（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年額）</th>
            </tr>
          </thead>
          <tbody>
            {edges.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === 625000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">
                  {x.label}
                  <span className="block text-xs text-text-muted">年収{yen(x.m * 12)}</span>
                </td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.grade)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen((x.r.health + x.r.pension) / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※当サイト試算（東京都・協会けんぽ・独身・40歳未満・賞与なし）。健康保険料には子ども・子育て支援金を含みます。賞与がある場合、標準報酬月額は賞与を除いた月給で決まるため、境目の年収は変わります。
      </p>
      <p className="mb-10">
        月給60.4万円から60.5万円に上がると、保険料が月{yen((e(605000).health + e(605000).pension - e(604000).health - e(604000).pension) / 12)}増え、手取りは年{yen(e(604000).net - e(605000).net)}減ります。月給60.9万円で境目の前の手取りを上回ります。
        同じように、月給63.4万円から63.5万円に上がると手取りは年{yen(e(634000).net - e(635000).net)}減り、月給63.9万円で回復します（当サイト試算）。
        年収750万円はこの2つの境目の間にあり、年収760.8万円（月給63.4万円）までは同じ等級のまま手取りが増えます。
        転職で提示年収を比べるときは、賞与の有無で月給が変わり、等級と手取りが変わる点も確認すると差が分かりやすくなります。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
