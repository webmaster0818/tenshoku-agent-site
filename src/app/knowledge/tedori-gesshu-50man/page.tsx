import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-50man/" },
  title: "手取り50万円の額面は月約67.3万円・年収約807.6万円【2026年・令和8年の税制で試算】",
  description:
    "手取り50万円に必要な額面（総支給額）と年収を、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で逆算しました。独身・40歳未満・賞与なしで月約67.3万円、年収約807.6万円です。手取り40万〜60万円の早見表と、厚生年金保険料が上限に達する額面月給63.5万円前後の手取りも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り50万円の額面は月約67.3万円・年収約807.6万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り50万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 673000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 400000, m: 514000 },
  { t: 450000, m: 594000 },
  { t: 480000, m: 644000 },
  { t: 500000, m: 673000 },
  { t: 550000, m: 749000 },
  { t: 600000, m: 825000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
// 報酬月額63.5万円以上で厚生年金の標準報酬月額は上限の65万円になる
const cap = [600000, 634000, 635000, 650000, 673000, 700000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

const faq = [
  {
    q: "手取り50万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り50万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り50万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り50万円以上にするには、額面月給678,000円（年収8,136,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り50万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収800万円超の人は${shareAbove(800)}です。賞与なしで手取り50万円となる年収807.6万円は、この区分に入ります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-50man/"
      annual={MONTHLY * 12}
      crumb="手取り50万円の額面"
      h1="手取り50万円の額面は月約67.3万円・年収約807.6万円【2026年】"
      lead={
        <>
          <p>
            手取り50万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが50万円以上になる最小の月給を求めました。手取り30万円では額面の約79%が手元に残りますが、手取り50万円では約{Math.round(r.rate * 100)}%です。
          </p>
        </>
      }
      compareHeading="手取り40万〜60万円に必要な額面（早見表）"
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
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 500000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り40万・45万・48万・50万・55万・60万円に対応します。
            手取りを50万円から60万円に増やすには、額面月給を{yen(table[5].m - table[3].m)}上げる必要があります（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-800man/", label: "年収800万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円の額面" },
        { href: "/knowledge/gesshu-50man-tedori/", label: "月収50万円の手取り" },
        { href: "/knowledge/nenshu-1000man-shokugyo/", label: "平均年収1000万円を超える職業" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>額面月給63.5万円以上で厚生年金保険料は上限になる</h2>
      <p>
        厚生年金保険の標準報酬月額の上限は32等級の65万円で、報酬月額63.5万円以上はすべてこの等級になります（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/20200825.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構 厚生年金保険料額表</a>：2026年11月19日確認）。
        健康保険の標準報酬月額は50等級（139万円）まであるため、額面がさらに上がっても健康保険料は増え続けますが、厚生年金保険料は月{yen(cap[2].r.pension / 12)}で変わりません。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面月給</th>
              <th className="p-3 text-right">厚生年金保険料（月額）</th>
              <th className="p-3 text-right">健康保険料（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
            </tr>
          </thead>
          <tbody>
            {cap.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{yen(x.m)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.pension / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.health / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        手取り50万円に必要な額面67.3万円は、厚生年金保険料が上限に達した後の水準です。ただし、額面月給63.4万円から63.5万円に上がる時点では、厚生年金と健康保険の等級が同時に上がるため、手取りは月{yen(cap[1].r.netMonthly - cap[2].r.netMonthly)}減ります（当サイト試算）。
        額面月給63.4万円の手取りを上回るのは、額面月給63.9万円からです。将来受け取る厚生年金の額も標準報酬月額をもとに計算されるため、保険料が上限で止まることは年金額の計算にも影響します。
        年収アップの実績を公表している転職エージェントは<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
