import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, standardMonthly, RATES, man, pct, yen, shareAbove, shareBand, NTA_R7 } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-420man/" },
  title: "年収420万円の手取りは約331.4万円・月約27.6万円【2026年・令和8年の税制で試算】",
  description:
    "年収420万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約331.4万円（約78.9%）、月約27.6万円です。月給35万円は標準報酬月額が上がる境目にあたり、年収418.8万円より手取りが少なくなる点も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収420万円の手取りは約331.4万円・月約27.6万円【2026年】",
    description: "令和8年の税制・保険料率で年収420万円の手取りを試算し、月給35万円の標準報酬月額の境目を掲載しています。",
  },
};

const A = 4200000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const steps = [3500000, 4000000, 4200000, 4500000, 5000000].map((y) => calcTakeHome(y));
// 標準報酬月額の境目（健康保険法 第40条）：報酬月額33万円以上35万円未満 → 34万円、35万円以上37万円未満 → 36万円
const edges = [
  { label: "月給34.9万円", m: 349000 },
  { label: "月給35万円（年収420万円）", m: 350000 },
  { label: "月給35.1万円", m: 351000 },
  { label: "月給35.2万円", m: 352000 },
  { label: "月給36.9万円", m: 369000 },
  { label: "月給37万円", m: 370000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
const e = (m: number) => edges.find((x) => x.m === m)!.r;

// 賞与ありの例：月給30万円×12か月＋賞与60万円（年2回・30万円ずつ）
const bm = 300000;
const be = 300000;
const hRate = RATES.health / 2 + RATES.childSupport / 2;
const bmGrade = standardMonthly(bm);
const monthlySocial = Math.round(bmGrade * hRate) + Math.round(bmGrade * (RATES.pension / 2)) + Math.round(bm * RATES.employment);
const bonusSocial = Math.round(be * hRate) + Math.round(be * (RATES.pension / 2)) + Math.round(be * RATES.employment);

const faq = [
  {
    q: "年収420万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある場合は月給が下がるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収420万円より年収418.8万円のほうが手取りが多いのはなぜですか？",
    a: `年収420万円を12等分した月給35万円は、健康保険・厚生年金の標準報酬月額が34万円から36万円に上がる境目（報酬月額35万円以上）にあたるためです。月給34.9万円（年収418.8万円）から35万円に上がると、保険料が月${yen((e(350000).health + e(350000).pension - e(349000).health - e(349000).pension) / 12)}増え、手取りは年${yen(e(349000).net - e(350000).net)}少なくなります（当サイト試算・40歳未満）。月給35.2万円（年収422.4万円）で境目の前の手取りを上回ります。`,
  },
  {
    q: "年収420万円は平均より高いですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者の平均給与は${NTA_R7.average}で、年収420万円はこれを下回ります。給与階級別では400万円超500万円以下の人が${shareBand(4)}、400万円を超える人は${shareAbove(400)}です（同調査 第16表から当サイトで集計）。`,
  },
  {
    q: "2026年（令和8年）の税制改正で年収420万円の手取りは増えますか？",
    a: "増えます。年収420万円の合計所得金額は292万円で、所得税の基礎控除は令和7年分の88万円から令和8年分は104万円になります。当サイトの試算では、所得税は年8,200円少なくなります。住民税の基礎控除（43万円）は変わりません。",
  },
  {
    q: "年収420万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。住民税は前年の所得で決まるため、転職1年目は前職の年収をもとに課税されます。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-420man/"
      annual={A}
      crumb="年収420万円の手取り"
      h1="年収420万円の手取りは約331.4万円・月約27.6万円【2026年】"
      lead={
        <>
          <p>
            年収420万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            介護保険料がかかる40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残り、
            {man(A - r.net)}が社会保険料（{man(r.social)}）と所得税・住民税（{man(r.incomeTax + r.residentTax)}）として差し引かれます。
          </p>
          <p className="mt-2">
            賞与なしで年収420万円の場合、月給35万円はちょうど標準報酬月額が上がる境目にあたります。
            そのため、年収418.8万円（月給34.9万円）より手取りが年{yen(e(349000).net - e(350000).net)}少なくなります（当サイト試算）。
          </p>
        </>
      }
      compareHeading="年収350万〜500万円の手取り比較"
      compare={[3500000, 4000000, 4200000, 4500000, 5000000]}
      compareNote={
        <p>
          年収400万円から420万円に20万円上がると手取りは{man(steps[2].net - steps[1].net)}増え、増えた分のうち約{Math.round(((steps[2].net - steps[1].net) / 200000) * 100)}%が手取りになります。
          420万円から450万円の30万円では{man(steps[3].net - steps[2].net)}（約{Math.round(((steps[3].net - steps[2].net) / 300000) * 100)}%）です（当サイト試算）。
          この範囲は所得税の税率5%の区分（課税所得195万円未満）に収まるため、手取りの増え方の差は主に社会保険料の等級によって生じます。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-480man/", label: "年収480万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-450man/", label: "年収450万円の手取り" },
        { href: "/knowledge/gesshu-35man-tedori/", label: "月収35万円の手取り" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/knowledge/salary-30sai/", label: "30歳の平均年収" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/company/", label: "企業別の平均年収（有価証券報告書）" },
      ]}
    >
      <h2>月給35万円の境目で手取りが一時的に減る</h2>
      <p>
        健康保険と厚生年金の保険料は、報酬月額を区切った標準報酬月額に料率を掛けて決まります（健康保険法 第40条、
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表</a>）。
        報酬月額33万円以上35万円未満は標準報酬月額34万円、35万円以上37万円未満は36万円です。年収420万円を12等分した月給35万円は、上の等級のちょうど下限にあたります。
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
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === 350000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
        月給35.2万円（年収422.4万円）で境目の前の手取りを上回り、その後は月給36.9万円（年収442.8万円）まで同じ等級のまま手取りが増えます。
        次の境目の月給37万円（年収444万円）でも、手取りは年{yen(e(369000).net - e(370000).net)}減ります（当サイト試算）。
        年収420万円前後で転職の条件を比べるときは、提示額が月給35万円をわずかに超えるかどうかで手取りが逆転することがあるため、月給と賞与の内訳まで確認すると差が分かりやすくなります。
      </p>

      <h2>賞与がある場合の月の手取り（年収420万円の例）</h2>
      <p>
        上の試算は年収を12等分した月給（月35万円）で計算しています。賞与を含めて年収420万円となる給与体系では、毎月の手取りが少なくなります。
        月給30万円・賞与年60万円（30万円×2回）の例で、社会保険料を差し引いた額は次のとおりです（40歳未満・当サイト試算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目</th>
              <th className="p-3 text-right">毎月の給与（30万円）</th>
              <th className="p-3 text-right rounded-tr-lg">賞与1回（30万円）</th>
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
        ※月給29万円の標準報酬月額は{yen(bmGrade)}（報酬月額29万円以上31万円未満）、賞与は標準賞与額30万円として、協会けんぽ東京支部の令和8年度料率・子ども・子育て支援金率・厚生年金18.3%の折半額と雇用保険0.5%で計算しています。
        ここからさらに所得税（源泉徴収）と住民税が差し引かれます。
      </p>
      <p className="mb-10">
        希望年収の伝え方や条件の優先順位の整理は<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">転職エージェントへの伝え方</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
