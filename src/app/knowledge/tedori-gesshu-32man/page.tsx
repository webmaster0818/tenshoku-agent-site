import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-32man/" },
  title: "手取り32万円の額面は月約40.7万円・年収約488.4万円【2026年・令和8年の税制で試算】",
  description:
    "手取り32万円に必要な額面（総支給額）と年収を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約40.7万円、年収約488.4万円です。額面39.4万円と39.5万円で手取りが逆転する境目と、性・年齢別の平均月給との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り32万円の額面は月約40.7万円・年収約488.4万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り32万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 407000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 300000, m: 380000 },
  { t: 310000, m: 392000 },
  { t: 320000, m: 407000 },
  { t: 330000, m: 419000 },
  { t: 340000, m: 434000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
// 標準報酬月額の区分（報酬月額37万円以上39.5万円未満＝38万円、39.5万円以上42.5万円未満＝41万円）の境目
const edge = [392000, 394000, 395000, 396000, 407000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月25日";
const AGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf";
const ages = [
  { age: "30〜34歳", all: 312.3, m: 330.4, f: 283.2 },
  { age: "35〜39歳", all: 340.6, m: 366.2, f: 292.4 },
  { age: "40〜44歳", all: 364.3, m: 398.2, f: 303.6 },
  { age: "45〜49歳", all: 377.9, m: 420.7, f: 305.7 },
  { age: "50〜54歳", all: 388.8, m: 437.5, f: 305.4 },
  { age: "55〜59歳", all: 396.2, m: 445.6, f: 305.7 },
  { age: "60〜64歳", all: 329.3, m: 358.5, f: 270.8 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 395 && v < 425 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "手取り32万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り32万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り32万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り32万円以上にするには、額面月給411,000円（年収4,932,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り32万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収400万円超の人は${shareAbove(400)}、500万円超の人は${shareAbove(500)}です。賞与なしで手取り32万円となる年収488.4万円は、この2つの区分の間にあたります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-32man/"
      annual={MONTHLY * 12}
      crumb="手取り32万円の額面"
      h1="手取り32万円の額面は月約40.7万円・年収約488.4万円【2026年】"
      lead={
        <>
          <p>
            手取り32万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが32万円以上になる最小の月給を求めました。額面の約{Math.round(r.rate * 100)}%が手元に残る計算です。
          </p>
        </>
      }
      compareHeading="手取り30万〜34万円に必要な額面（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">手取り（月額）</th>
                  <th className="p-3 text-right">必要な額面月給</th>
                  <th className="p-3 text-right">年収換算</th>
                  <th className="p-3 text-right rounded-tr-lg">試算の手取り</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 320000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.t / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.m * 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り30万・31万・32万・33万・34万円に対応します。
            手取りを1万円増やすのに必要な額面は、手取り30万円から31万円では{yen(table[1].m - table[0].m)}ですが、31万円から32万円では{yen(table[2].m - table[1].m)}必要です（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円の額面" },
        { href: "/knowledge/tedori-gesshu-33man/", label: "手取り33万円の額面" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面" },
        { href: "/knowledge/gesshu-40man-tedori/", label: "月収40万円の手取り" },
        { href: "/knowledge/tedori-480man/", label: "年収480万円の手取り" },
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
      ]}
    >
      <h2>額面39.4万円と39.5万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与ではなく「標準報酬月額」に料率を掛けて計算します。
        報酬月額37万円以上39.5万円未満の標準報酬月額は38万円、39.5万円以上42.5万円未満は41万円です（健康保険法 第40条）。
        この境目では、標準報酬月額が38万円から41万円へ一度に3万円上がります。手取り32万円に必要な額面40.7万円は、41万円の区分にあたります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面月給</th>
              <th className="p-3 text-right">標準報酬月額</th>
              <th className="p-3 text-right">社会保険料（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
            </tr>
          </thead>
          <tbody>
            {edge.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{yen(x.m)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.grade)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.social / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        当サイトの試算では、額面月給39.4万円から39.5万円に上がると、社会保険料が月{yen((edge[2].r.social - edge[1].r.social) / 12)}増え、手取りは月{yen(edge[1].r.netMonthly - edge[2].r.netMonthly)}減ります。
        このため、手取り31万円（額面39.2万円）から手取り32万円に上げるには、額面を1.5万円増やす必要があります。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月25日確認）。
        残業代や通勤手当も報酬月額に含まれるため、基本給が39万円台前半でも4〜6月の残業が多いと41万円の区分になる場合があります。
      </p>

      <h2>額面40.7万円は性・年齢別の平均月給と比べてどの水準か</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（毎年6月分・残業代と賞与を含まない月額）と、手取り32万円に必要な額面40.7万円を比べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">男女計</th>
              <th className="p-3 text-right">男性</th>
              <th className="p-3 text-right rounded-tr-lg">女性</th>
            </tr>
          </thead>
          <tbody>
            {ages.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.all)}
                {cell(x.m)}
                {cell(x.f)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={AGE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表 性、年齢階級別賃金</a>（令和7年6月分の所定内給与額）。{WAGE_CHECKED}確認。標準報酬月額41万円の区分（月39.5万円以上42.5万円未満）の欄を色付けしています。
      </p>
      <p className="mb-10">
        男女計では最も高い55〜59歳（396.2千円）でも40.7万円に届きません。男性では40〜44歳（398.2千円）と45〜49歳（420.7千円）がこの区分にあたります。女性はどの年齢階級でも310千円未満です。
        所定内給与額は残業代を含まないため、残業代込みで額面40.7万円になる人はこれより多いと考えられます。
        転職で提示された月給を比べる際の考え方は
        <Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>、年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
