import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, standardMonthly, RATES, man, pct, yen, shareAbove, shareBand, NTA_R7 } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-240man/" },
  title: "年収240万円の手取りは約195.2万円・月約16.2万円【2026年・令和8年の税制で試算】",
  description:
    "年収240万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約195.2万円（約81.4%）、月約16.2万円です。年収234万円・252万円で標準報酬月額が上がり手取りが一時的に減る境目と令和7年の制度との所得税の差も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収240万円の手取りは約195.2万円・月約16.2万円【2026年】",
    description: "令和8年の税制・保険料率で年収240万円の手取りを試算し、前後の標準報酬月額の境目を掲載しています。",
  },
};

const A = 2400000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const steps = [2000000, 2400000, 2600000, 3000000].map((y) => calcTakeHome(y));
// 標準報酬月額の境目（健康保険法 第40条）
// 報酬月額18.5万円以上19.5万円未満 → 19万円、19.5万円以上21万円未満 → 20万円、21万円以上23万円未満 → 22万円
const edges = [
  { label: "月給19.4万円", m: 194000 },
  { label: "月給19.5万円", m: 195000 },
  { label: "月給19.6万円", m: 196000 },
  { label: "月給20万円（年収240万円）", m: 200000 },
  { label: "月給20.9万円", m: 209000 },
  { label: "月給21万円", m: 210000 },
  { label: "月給21.2万円", m: 212000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
const e = (m: number) => edges.find((x) => x.m === m)!.r;

// 賞与ありの例：月給17万円×12か月＋賞与36万円（年2回・18万円ずつ）
const bm = 170000;
const be = 180000;
const hRate = RATES.health / 2 + RATES.childSupport / 2;
const bmGrade = standardMonthly(bm);
const monthlySocial = Math.round(bmGrade * hRate) + Math.round(bmGrade * (RATES.pension / 2)) + Math.round(bm * RATES.employment);
const bonusSocial = Math.round(be * hRate) + Math.round(be * (RATES.pension / 2)) + Math.round(be * RATES.employment);

const faq = [
  {
    q: "年収240万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある場合は月給が下がるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収240万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者の平均給与は${NTA_R7.average}です。給与階級別では200万円超300万円以下の人が${shareBand(2)}、300万円を超える人は${shareAbove(300)}です（同調査 第16表から当サイトで集計）。この統計にはパート・アルバイトなど短時間で働く人も含まれます。`,
  },
  {
    q: "2026年（令和8年）の税制改正で年収240万円の手取りは増えますか？",
    a: "増えます。年収240万円の合計所得金額は160万円（給与所得控除80万円）で、所得税の基礎控除は令和7年分の88万円から令和8年分は104万円になります。当サイトの試算では、所得税は年18,700円から10,500円へ8,200円少なくなります。住民税の基礎控除（43万円）は変わりません。",
  },
  {
    q: "年収が上がったのに手取りが減ることはありますか？",
    a: `あります。年収240万円の前後では、月給19.5万円（年収234万円）と月給21万円（年収252万円）で健康保険・厚生年金の標準報酬月額が一段上がります。月給19.4万円から19.5万円に上がると手取りは年${yen(e(194000).net - e(195000).net)}、月給20.9万円から21万円に上がると年${yen(e(209000).net - e(210000).net)}減ります（当サイト試算・40歳未満）。`,
  },
  {
    q: "年収240万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。差し引かれる額の約${Math.round((r.social / (A - r.net)) * 100)}%が社会保険料です。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-240man/"
      annual={A}
      crumb="年収240万円の手取り"
      h1="年収240万円の手取りは約195.2万円・月約16.2万円【2026年】"
      lead={
        <>
          <p>
            年収240万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            介護保険料がかかる40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残り、
            {man(A - r.net)}が社会保険料（{man(r.social)}）と所得税・住民税（{man(r.incomeTax + r.residentTax)}）として差し引かれます。
          </p>
          <p className="mt-2">
            差し引かれる額の約{Math.round((r.social / (A - r.net)) * 100)}%は社会保険料です。この年収帯では所得税が年{yen(r.incomeTax)}と小さく、手取りは主に社会保険料の等級で決まります。
          </p>
        </>
      }
      compareHeading="年収200万〜300万円の手取り比較"
      compare={[2000000, 2400000, 2600000, 3000000]}
      compareNote={
        <p>
          年収200万円から240万円に40万円上がると手取りは{man(steps[1].net - steps[0].net)}（約{Math.round(((steps[1].net - steps[0].net) / 400000) * 100)}%）、
          240万円から260万円の20万円では{man(steps[2].net - steps[1].net)}（約{Math.round(((steps[2].net - steps[1].net) / 200000) * 100)}%）増えます（当サイト試算）。
          この範囲は所得税の税率5%の区分に収まります。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-380man/", label: "年収380万円の手取り" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/tedori-gesshu-17man/", label: "手取り17万円に必要な額面" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/knowledge/dai2-shinsotsu-itsumade/", label: "第二新卒はいつまでか" },
      ]}
    >
      <h2>年収234万円と252万円の境目で手取りが一時的に減る</h2>
      <p>
        健康保険と厚生年金の保険料は、報酬月額を区切った標準報酬月額に料率を掛けて決まります（健康保険法 第40条、
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表</a>）。
        報酬月額18.5万円以上19.5万円未満は19万円、19.5万円以上21万円未満は20万円、21万円以上23万円未満は22万円です。20万円から22万円へは2万円刻みで上がるため、21万円の境目では保険料の増え方が大きくなります。
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
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === 200000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
        月給19.4万円から19.5万円に上がると手取りは年{yen(e(194000).net - e(195000).net)}減り、月給19.6万円（年収235.2万円）で回復します。
        月給20.9万円から21万円（年収252万円）に上がるときは、保険料が月{yen((e(210000).health + e(210000).pension - e(209000).health - e(209000).pension) / 12)}増え、手取りは年{yen(e(209000).net - e(210000).net)}減ります。月給21.2万円（年収254.4万円）で境目の前の手取りを上回ります（当サイト試算）。
        年収240万円からの転職で月給21万円前後の求人を比べるときは、月給20.9万円と21万円で手取りが逆転する点に注意すると差が分かりやすくなります。
      </p>

      <h2>賞与がある場合の月の手取り（年収240万円の例）</h2>
      <p>
        上の試算は年収を12等分した月給（月20万円）で計算しています。賞与を含めて年収240万円となる給与体系では、毎月の手取りが少なくなります。
        月給17万円・賞与年36万円（18万円×2回）の例で、社会保険料を差し引いた額は次のとおりです（40歳未満・当サイト試算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目</th>
              <th className="p-3 text-right">毎月の給与（17万円）</th>
              <th className="p-3 text-right rounded-tr-lg">賞与1回（18万円）</th>
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
        ※月給17万円の標準報酬月額は{yen(bmGrade)}（報酬月額16.5万円以上17.5万円未満）、賞与は標準賞与額18万円として、協会けんぽ東京支部の令和8年度料率・子ども・子育て支援金率・厚生年金18.3%の折半額と雇用保険0.5%で計算しています。
        ここからさらに所得税（源泉徴収）と住民税が差し引かれます。
      </p>
      <p className="mb-10">
        年収を上げる転職の進め方は<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">転職エージェントへの伝え方</Link>や
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
