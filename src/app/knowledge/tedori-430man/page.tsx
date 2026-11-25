import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-430man/" },
  title: "年収430万円の手取りは約340.1万円・月約28.3万円【2026年・令和8年の税制で試算】",
  description:
    "年収430万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約340.1万円（約79.1%）、月約28.3万円です。所得税が5%の区分に収まる理由、国税庁の年齢階層別の平均給与との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収430万円の手取りは約340.1万円・月約28.3万円【2026年】",
    description: "令和8年の税制・保険料率で年収430万円の手取りを試算し、年齢別の平均給与と比較しています。",
  },
};

const A = 4300000;
const r = calcTakeHome(A);
const o = calcTakeHome(A, true);
const steps = [4000000, 4200000, 4300000, 4400000, 4500000].map((y) => calcTakeHome(y));

// 国税庁「令和7年分 民間給与実態統計調査」第14図 年齢階層別の平均給与（万円）
const NTA_URL = "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf";
const AGES = [
  { age: "20〜24歳", m: 294, f: 265, t: 280 },
  { age: "25〜29歳", m: 460, f: 383, t: 425 },
  { age: "30〜34歳", m: 529, f: 376, t: 462 },
  { age: "35〜39歳", m: 598, f: 362, t: 503 },
  { age: "全年齢平均", m: 597, f: 342, t: 487 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 430 ? "font-bold text-navy" : ""}`}>{v}万円</td>
);

// 課税所得195万円（所得税5%の区分の上限）に達する年収を、1万円刻みで当サイト試算
const fivePctEdge = (() => {
  for (let y = 4300000; y < 8000000; y += 10000) if (calcTakeHome(y).taxable >= 1950000) return y;
  return 0;
})();

const faq = [
  {
    q: "年収430万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある会社では月給が低くなるため、毎月の手取りはこれより少なく、賞与月に多くなります。`,
  },
  {
    q: "年収430万円から引かれる税金と社会保険料はいくらですか？",
    a: `年額で、社会保険料${yen(r.social)}（健康保険${yen(r.health)}・厚生年金${yen(r.pension)}・雇用保険${yen(r.employment)}）、所得税${yen(r.incomeTax)}、住民税${yen(r.residentTax)}です（当サイト試算・40歳未満）。差し引かれる額の約${Math.round((r.social / (A - r.net)) * 100)}%が社会保険料です。`,
  },
  {
    q: "年収430万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収400万円超500万円以下の人は${shareBand(4)}で、全14区分の中で300万円超400万円以下に次いで多い区分です。400万円を超える人は${shareAbove(400)}です（1年を通じて勤務した給与所得者）。`,
  },
  {
    q: "年収430万円は何歳の平均と同じくらいですか？",
    a: "同調査の第14図では、25〜29歳の平均給与が425万円、30〜34歳が462万円です。男女計では20代後半の平均をやや上回り、30代前半の平均をやや下回る水準です。女性は20〜39歳のどの年齢層でも平均給与が430万円を下回ります。",
  },
  {
    q: "年収430万円から少し上がると手取りが減ることはありますか？",
    a: `年収430万円（月給約35.8万円）は、標準報酬月額36万円の等級（報酬月額35万円以上37万円未満）に入ります。月給が37万円（年収444万円）に達すると等級が38万円に上がり、手取りが一時的に減ります。境目の計算は年収420万円の手取りのページに掲載しています。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-430man/"
      annual={A}
      crumb="年収430万円の手取り"
      h1="年収430万円の手取りは約340.1万円・月約28.3万円【2026年】"
      lead={
        <>
          <p>
            年収430万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(A - r.net)}のうち、社会保険料が{man(r.social)}、住民税が{man(r.residentTax)}、所得税が{man(r.incomeTax)}です。
            令和8年分の所得税では基礎控除が104万円となるため、課税所得は{yen(r.taxable)}にとどまり、所得税は最も低い5%の区分で計算されます。
          </p>
        </>
      }
      compareHeading="年収400万〜450万円の手取り比較"
      compare={[4000000, 4200000, 4300000, 4400000, 4500000]}
      compareNote={
        <p>
          年収400万円から430万円に上がると手取りは{man(r.net - steps[0].net)}、430万円から450万円では{man(steps[4].net - r.net)}増えます（当サイト試算）。
          420万円から430万円の10万円の増加では手取りが{man(r.net - steps[1].net)}増え、増えた分の約{Math.round(((r.net - steps[1].net) / 100000) * 100)}%が手元に残ります。
          440万円から450万円では標準報酬月額が36万円から38万円の等級に上がるため、手取りの増加は{man(steps[4].net - steps[3].net)}にとどまります。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-420man/", label: "年収420万円の手取り（月給35万円の境目）" },
        { href: "/knowledge/tedori-450man/", label: "年収450万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-gesshu-27man/", label: "手取り27万円に必要な額面" },
        { href: "/knowledge/tedori-gesshu-38man/", label: "手取り38万円に必要な額面" },
        { href: "/knowledge/tedori-14man-hitorigurashi/", label: "手取り14万円で一人暮らしはできるか" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
        { href: "/knowledge/salary-30sai/", label: "30歳の平均年収" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>年収430万円で所得税が5%の区分に収まる理由</h2>
      <p className="mb-4">
        所得税は、課税所得が195万円未満の部分までは税率5%です（
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁 No.2260 所得税の税率</a>）。
        年収430万円の場合、給与所得控除{yen(A - r.salaryIncome)}を引いた給与所得は{yen(r.salaryIncome)}です。ここから社会保険料{yen(r.social)}と基礎控除{yen(r.basic)}を引くと、課税所得は{yen(r.taxable)}になります（当サイト試算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">計算の段階</th>
              <th className="p-3 text-right rounded-tr-lg">金額（年額）</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["年収（給与収入）", yen(A)],
              ["給与所得控除（年収×20%＋44万円）", `−${yen(A - r.salaryIncome)}`],
              ["社会保険料控除", `−${yen(r.social)}`],
              ["基礎控除（令和8年分・合計所得金額489万円以下）", `−${yen(r.basic)}`],
              ["課税所得（1,000円未満切り捨て）", yen(r.taxable)],
              ["所得税（税率5%・復興特別所得税を含む）", yen(r.incomeTax)],
            ].map(([k, v], i) => (
              <tr key={k} className={`border-b border-gray-100 ${i === 4 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{k}</td>
                <td className="p-3 text-right whitespace-nowrap">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※当サイト試算（東京都・協会けんぽ・独身・40歳未満・賞与なし）。基礎控除は国税庁「令和8年分 年末調整のしかた」、給与所得控除は国税庁 No.1410 によります。住民税の基礎控除は43万円で所得税とは異なります。
      </p>
      <p className="mb-10">
        課税所得が195万円に達するのは、同じ前提で年収{man(fivePctEdge)}前後です（当サイト試算）。それまでは年収が増えても所得税の税率は5%のままです。
        一方、住民税の所得割は課税所得にかかわらず10%で、基礎控除も43万円と所得税より小さいため、年収430万円では住民税（{yen(r.residentTax)}）が所得税（{yen(r.incomeTax)}）の約{Math.round(r.residentTax / r.incomeTax)}倍になります。
        課税所得は{yen(r.taxable)}で、所得税の限界税率は{marginalRate(r.taxable)}%です。
      </p>

      <h2>年収430万円を国税庁の年齢階層別の平均給与と比べる</h2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢</th>
              <th className="p-3 text-right">男女計</th>
              <th className="p-3 text-right">男性</th>
              <th className="p-3 text-right rounded-tr-lg">女性</th>
            </tr>
          </thead>
          <tbody>
            {AGES.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.t)}
                {cell(x.m)}
                {cell(x.f)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※
        <a href={NTA_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁「令和7年分 民間給与実態統計調査」</a>
        第14図（1年を通じて勤務した給与所得者の平均給与）。太字は430万円以上の値です。平均給与には賞与を含みます。
      </p>
      <p className="mb-10">
        男女計では、年収430万円は25〜29歳の平均425万円をわずかに上回り、30〜34歳の平均462万円を下回ります。
        男性は25〜29歳で平均460万円と430万円を超えますが、女性は20〜39歳のどの年齢層でも平均が430万円を下回り、最も高い25〜29歳でも383万円です。
        平均給与は年齢層全体の平均で、職種・企業規模・勤続年数によって大きく異なります。同年代と比べて年収を上げたい場合は、職種別の水準を
        <Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>で確かめたうえで、
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績を公表している転職エージェント</Link>を比べる方法があります。
      </p>
    </TakeHomePage>
  );
}
