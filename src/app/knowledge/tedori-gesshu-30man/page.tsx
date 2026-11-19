import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-30man/" },
  title: "手取り30万円の額面は月約38.0万円・年収約456万円【2026年・令和8年の税制で試算】",
  description:
    "手取り30万円に必要な額面（総支給額）と年収を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約38.0万円、年収約456万円です。手取り25万〜35万円の早見表と、額面月給37万円の前後で手取りが逆転する点も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り30万円の額面は月約38.0万円・年収約456万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り30万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 380000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 250000, m: 315000 },
  { t: 280000, m: 355000 },
  { t: 300000, m: 380000 },
  { t: 320000, m: 407000 },
  { t: 350000, m: 446000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
// 標準報酬月額の区分（報酬月額35万円以上37万円未満＝36万円、37万円以上39.5万円未満＝38万円）の境目
const edge = [360000, 369000, 370000, 380000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

const faq = [
  {
    q: "手取り30万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り30万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り30万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り30万円以上にするには、額面月給383,000円（年収4,596,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り30万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収400万円超の人は${shareAbove(400)}、500万円超の人は${shareAbove(500)}です。賞与なしで手取り30万円となる年収456万円は、この2つの区分の間にあたります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-30man/"
      annual={MONTHLY * 12}
      crumb="手取り30万円の額面"
      h1="手取り30万円の額面は月約38.0万円・年収約456万円【2026年】"
      lead={
        <>
          <p>
            手取り30万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが30万円以上になる最小の月給を求めました。額面の約{Math.round(r.rate * 100)}%が手元に残る計算です。
          </p>
        </>
      }
      compareHeading="手取り25万〜35万円に必要な額面（早見表）"
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
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 300000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り25万・28万・30万・32万・35万円に対応します。
            手取り30万円から35万円に増やすには、額面月給を{yen(table[4].m - table[2].m)}上げる必要があります（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-450man/", label: "年収450万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面" },
        { href: "/knowledge/tedori-gesshu-50man/", label: "手取り50万円の額面" },
        { href: "/knowledge/gesshu-50man-tedori/", label: "月収50万円の手取り" },
        { href: "/knowledge/30dai-josei-tenshoku/", label: "30代女性の転職（雇用動向調査）" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>額面月給37万円の前後で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与ではなく「標準報酬月額」に料率を掛けて計算します。
        報酬月額35万円以上37万円未満の標準報酬月額は36万円、37万円以上39.5万円未満は38万円です（健康保険法 第40条）。
        手取り30万円に必要な額面38万円は、38万円の区分にあたります。
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
        当サイトの試算では、額面月給36.9万円から37万円に上がると、社会保険料が月{yen((edge[2].r.social - edge[1].r.social) / 12)}増え、手取りは月{yen(edge[1].r.netMonthly - edge[2].r.netMonthly)}減ります。
        額面月給36.9万円の手取り（{yen(edge[1].r.netMonthly)}）を上回るのは、額面月給37.2万円前後からです。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月19日確認）。
        転職で提示された月給がこの境目の近くにある場合は、残業代を含めた報酬月額で区分を確認してください。年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
