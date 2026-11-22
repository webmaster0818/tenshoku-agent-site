import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, standardMonthly, RATES, man, pct, yen, shareAbove, shareBand, NTA_R7 } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-380man/" },
  title: "年収380万円の手取りは約302.2万円・月約25.1万円【2026年・令和8年の税制で試算】",
  description:
    "年収380万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約302.2万円（約79.5%）、月約25.1万円です。年収372万円・396万円で標準報酬月額が上がり手取りが一時的に減る境目と令和7年の制度との所得税の差も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収380万円の手取りは約302.2万円・月約25.1万円【2026年】",
    description: "令和8年の税制・保険料率で年収380万円の手取りを試算し、前後の標準報酬月額の境目を掲載しています。",
  },
};

const A = 3800000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const steps = [3000000, 3500000, 3800000, 4000000, 4500000].map((y) => calcTakeHome(y));
// 標準報酬月額の境目（健康保険法 第40条）
// 報酬月額29万円以上31万円未満 → 30万円、31万円以上33万円未満 → 32万円、33万円以上35万円未満 → 34万円
const edges = [
  { label: "月給30.9万円", m: 309000 },
  { label: "月給31万円", m: 310000 },
  { label: "月給31.2万円", m: 312000 },
  { label: "月給31.6万円（年収約380万円）", m: 316667 },
  { label: "月給32.9万円", m: 329000 },
  { label: "月給33万円", m: 330000 },
  { label: "月給33.2万円", m: 332000 },
].map((x) => ({ ...x, r: x.m === 316667 ? calcTakeHome(A) : calcTakeHome(x.m * 12) }));
const e = (m: number) => edges.find((x) => x.m === m)!.r;

// 賞与ありの例：月給26万円×12か月＋賞与68万円（年2回・34万円ずつ）
const bm = 260000;
const be = 340000;
const hRate = RATES.health / 2 + RATES.childSupport / 2;
const bmGrade = standardMonthly(bm);
const monthlySocial = Math.round(bmGrade * hRate) + Math.round(bmGrade * (RATES.pension / 2)) + Math.round(bm * RATES.employment);
const bonusSocial = Math.round(be * hRate) + Math.round(be * (RATES.pension / 2)) + Math.round(be * RATES.employment);

const faq = [
  {
    q: "年収380万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある場合は月給が下がるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収380万円は平均より高いですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者の平均給与は${NTA_R7.average}で、年収380万円はこれを約100万円下回ります。給与階級別では300万円超400万円以下の人が${shareBand(3)}で、全階級の中で最も多い層です。300万円を超える人は${shareAbove(300)}、400万円を超える人は${shareAbove(400)}です（同調査 第16表から当サイトで集計）。`,
  },
  {
    q: "2026年（令和8年）の税制改正で年収380万円の手取りは増えますか？",
    a: "増えます。年収380万円の合計所得金額は260万円で、所得税の基礎控除は令和7年分の88万円から令和8年分は104万円になります。当サイトの試算では、所得税は年8,200円少なくなります。住民税の基礎控除（43万円）は変わりません。",
  },
  {
    q: "年収が上がったのに手取りが減ることはありますか？",
    a: `あります。年収380万円の前後では、月給31万円（年収372万円）と月給33万円（年収396万円）で健康保険・厚生年金の標準報酬月額が一段上がります。月給30.9万円から31万円に上がると手取りは年${yen(e(309000).net - e(310000).net)}、月給32.9万円から33万円に上がると年${yen(e(329000).net - e(330000).net)}減ります（当サイト試算・40歳未満）。`,
  },
  {
    q: "年収380万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。住民税は前年の所得で決まるため、転職1年目は前職の年収をもとに課税されます。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-380man/"
      annual={A}
      crumb="年収380万円の手取り"
      h1="年収380万円の手取りは約302.2万円・月約25.1万円【2026年】"
      lead={
        <>
          <p>
            年収380万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            介護保険料がかかる40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残り、
            {man(A - r.net)}が社会保険料（{man(r.social)}）と所得税・住民税（{man(r.incomeTax + r.residentTax)}）として差し引かれます。
          </p>
          <p className="mt-2">
            年収380万円を12等分した月給は約31.6万円で、標準報酬月額32万円の等級（報酬月額31万円以上33万円未満）に入ります。
            年収372万円と396万円の2つの境目の間にあり、この範囲では年収が上がるほど手取りも増えます（当サイト試算）。
          </p>
        </>
      }
      compareHeading="年収300万〜450万円の手取り比較"
      compare={[3000000, 3500000, 3800000, 4000000, 4500000]}
      compareNote={
        <p>
          年収350万円から380万円に30万円上がると手取りは{man(steps[2].net - steps[1].net)}（約{Math.round(((steps[2].net - steps[1].net) / 300000) * 100)}%）、
          380万円から400万円の20万円では{man(steps[3].net - steps[2].net)}（約{Math.round(((steps[3].net - steps[2].net) / 200000) * 100)}%）増えます（当サイト試算）。
          この範囲は所得税の税率5%の区分（課税所得195万円未満）に収まるため、増え方の差は主に社会保険料の等級によって生じます。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-420man/", label: "年収420万円の手取り" },
        { href: "/knowledge/tedori-350man/", label: "年収350万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円に必要な額面" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/company/", label: "企業別の平均年収（有価証券報告書）" },
      ]}
    >
      <h2>年収372万円と396万円の境目で手取りが一時的に減る</h2>
      <p>
        健康保険と厚生年金の保険料は、報酬月額を区切った標準報酬月額に料率を掛けて決まります（健康保険法 第40条、
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表</a>）。
        報酬月額29万円以上31万円未満は30万円、31万円以上33万円未満は32万円、33万円以上35万円未満は34万円です。
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
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === 316667 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">
                  {x.label}
                  <span className="block text-xs text-text-muted">年収{x.m === 316667 ? "3,800,000円" : yen(x.m * 12)}</span>
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
        月給30.9万円から31万円に上がると、保険料が月{yen((e(310000).health + e(310000).pension - e(309000).health - e(309000).pension) / 12)}増え、手取りは年{yen(e(309000).net - e(310000).net)}減ります。月給31.2万円（年収374.4万円）で境目の前の手取りを上回ります。
        同じように、月給33万円（年収396万円）で手取りは年{yen(e(329000).net - e(330000).net)}減り、月給33.2万円（年収398.4万円）で回復します（当サイト試算）。
        年収380万円から400万円前後への転職では、年収396万円〜398万円台のように境目の直後に入る提示額だと、手取りの増え方が見込みより小さくなります。
      </p>

      <h2>賞与がある場合の月の手取り（年収380万円の例）</h2>
      <p>
        上の試算は年収を12等分した月給（月約31.6万円）で計算しています。賞与を含めて年収380万円となる給与体系では、毎月の手取りが少なくなります。
        月給26万円・賞与年68万円（34万円×2回）の例で、社会保険料を差し引いた額は次のとおりです（40歳未満・当サイト試算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目</th>
              <th className="p-3 text-right">毎月の給与（26万円）</th>
              <th className="p-3 text-right rounded-tr-lg">賞与1回（34万円）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料（健康保険・厚生年金・雇用保険）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(monthlySocial)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(bonusSocial)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">社会保険料を差し引いた額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(bm - monthlySocial)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(be - bonusSocial)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※月給26万円の標準報酬月額は{yen(bmGrade)}（報酬月額25万円以上27万円未満）、賞与は標準賞与額34万円として、協会けんぽ東京支部の令和8年度料率・子ども・子育て支援金率・厚生年金18.3%の折半額と雇用保険0.5%で計算しています。
        ここからさらに所得税（源泉徴収）と住民税が差し引かれます。
      </p>
      <p className="mb-10">
        希望年収の伝え方や条件の優先順位の整理は<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">転職エージェントへの伝え方</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
