import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, shareAbove, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-50man-tedori/" },
  title: "月収50万円の手取りは約38.8万円【2026年・令和8年の税制で試算】月収45万〜60万円の早見表つき",
  description:
    "額面の月収50万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約38.8万円（約77.7%）です。保険料・税金の内訳、月収45万〜60万円の早見表、標準報酬月額の区分が変わる月収48.5万円前後の手取りの比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収50万円の手取りは約38.8万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収50万円の手取りと内訳を試算しています。",
  },
};

const MONTHLY = 500000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [450000, 480000, 500000, 520000, 550000, 600000].map((m) => ({ m, r: calcTakeHome(m * 12), o: calcTakeHome(m * 12, true) }));
// 標準報酬月額の区分（報酬月額45.5万円以上48.5万円未満＝47万円、48.5万円以上51.5万円未満＝50万円）の境目
const edge = [484000, 485000, 489000, 500000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

const faq = [
  {
    q: "月収50万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収50万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。合計は月${yen(MONTHLY - r.netMonthly)}です。`,
  },
  {
    q: "月収50万円は年収にするといくらですか？",
    a: `賞与がない場合は年収${yen(MONTHLY * 12)}です。国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収600万円超の人は${shareAbove(600)}です。賞与がある会社では、年収は月収×12に賞与を加えた額になります。`,
  },
  {
    q: "月収48万円台と50万円で手取りはどのくらい違いますか？",
    a: `月収48.5万円以上で標準報酬月額が47万円から50万円の区分に上がるため、社会保険料が月約4,300円増えます。当サイトの試算では、月収48.4万円の手取りは${yen(edge[0].r.netMonthly)}、48.5万円は${yen(edge[1].r.netMonthly)}、50万円は${yen(edge[3].r.netMonthly)}です。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-50man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収50万円の手取り"
      h1="月収50万円の手取りは約38.8万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収50万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約38.8万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            賞与がない場合の年収は600万円です。以下の内訳・比較表は年収換算（600万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収45万〜60万円の手取り（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
                  <th className="p-3 text-right">手取り（40歳未満）</th>
                  <th className="p-3 text-right">手取り（40〜64歳）</th>
                  <th className="p-3 text-right rounded-tr-lg">差額（介護保険料）</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.o.netMonthly)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly - x.o.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月収ごとの手取り月額を年齢区分別に示したものです（当サイト試算・賞与なし）。
            40〜64歳は介護保険料（協会けんぽ 令和8年度 1.62%・労使折半）が加わり、月収50万円では手取りが月{yen(r.netMonthly - o.netMonthly)}少なくなります。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/gesshu-40man-tedori/", label: "月収40万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面（逆算）" },
        { href: "/knowledge/tedori-gesshu-30man/", label: "手取り30万円の額面" },
        { href: "/knowledge/tedori-gesshu-50man/", label: "手取り50万円の額面" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>月収48.5万円の前後で手取りが逆転する理由</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します。
        報酬月額45.5万円以上48.5万円未満の標準報酬月額は47万円、48.5万円以上51.5万円未満は50万円です（健康保険法 第40条）。
        月収50万円は50万円の区分にあたり、月収48.4万円より社会保険料が月{yen((edge[1].r.social - edge[0].r.social) / 12)}多くなります。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
              <th className="p-3 text-right">標準報酬月額</th>
              <th className="p-3 text-right">社会保険料（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
            </tr>
          </thead>
          <tbody>
            {edge.map((x) => (
              <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.grade)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.social / 12)}</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        当サイトの試算では、月収48.4万円から48.5万円に上がると手取りは月{yen(edge[0].r.netMonthly - edge[1].r.netMonthly)}減り、月収48.9万円で48.4万円のときの手取りを上回ります。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されるため（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月19日確認）、この時期の残業代で区分が変わることがあります。
        年収交渉の際の伝え方は<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">エージェントへの伝え方</Link>にもまとめています。
      </p>
    </TakeHomePage>
  );
}
