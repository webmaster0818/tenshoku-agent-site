import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-30man-tedori/" },
  title: "月収30万円の手取りは約24.0万円【2026年・令和8年の税制で試算】月収25万〜40万円の早見表つき",
  description:
    "額面の月収30万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約24.0万円（約79.9%）です。差し引かれる保険料・税金の内訳、月収25万〜40万円の早見表、入社1年目との違いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収30万円の手取りは約24.0万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収30万円の手取りと内訳を試算しています。",
  },
};

const MONTHLY = 300000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const firstYear = (r.net + r.residentTax) / 12;
const table = [250000, 280000, 300000, 320000, 350000, 400000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

const faq = [
  {
    q: "月収30万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収30万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収30万円は年収にするといくらですか？",
    a: `賞与がない場合は年収${yen(MONTHLY * 12)}です。賞与がある会社では、年収は月収×12に賞与を加えた額になります。年収${yen(MONTHLY * 12)}の手取りは年${yen(r.net)}です（当サイト試算）。`,
  },
  {
    q: "月収に残業代や通勤手当は含まれますか？",
    a: "一般に月収（額面・総支給額）は、基本給に残業代や各種手当を加えた支給額の合計を指します。なお、通勤手当は一定額まで所得税が非課税ですが、社会保険料の計算では報酬に含まれます（国税庁 No.2582、日本年金機構「厚生年金保険の保険料」）。当ページの試算は、通勤手当を含まない額面月収30万円として計算しています。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-30man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収30万円の手取り"
      h1="月収30万円の手取りは約24.0万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収30万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約24.0万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            賞与がない場合の年収は360万円です。以下の内訳・比較表は年収換算（360万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収25万〜40万円の手取り（早見表）"
      compare={table.map((x) => x.m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
                  <th className="p-3 text-right">手取り（月額）</th>
                  <th className="p-3 text-right rounded-tr-lg">手取りの割合</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{pct(x.r.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月収ごとの手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月収25万〜40万円の範囲では、手取りは額面の約8割（78.5%〜80.1%）です。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>月収30万円の社会保険料が決まる仕組み</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します。
        月収30万円は報酬月額29万円以上31万円未満の区分にあたり、標準報酬月額は30万円です（健康保険法 第40条）。
        月収が29万円台でも30万円台でも、この区分内であれば保険料は同じです。
      </p>
      <p>
        標準報酬月額は、原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（定時決定）。
        この時期に残業が多いと、標準報酬月額が上がり、1年間の保険料が高くなる場合があります（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>、
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20150515-01.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「厚生年金保険の保険料」</a>、
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2582.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁 No.2582</a>：2026年11月15日確認）。
      </p>
      <h3>入社1年目と2年目の手取りの違い</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">時期</th>
              <th className="p-3 text-right">住民税（月額）</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（月額の目安）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">入社1年目（前年の所得なし）</td>
              <td className="p-3 text-right whitespace-nowrap">0円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(firstYear)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">2年目の6月以降（前年も月収30万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれるため（総務省 個人住民税）、額面が同じでも2年目の6月から手取りが月{yen(firstYear - r.netMonthly)}少なくなります。
        転職で月収を比べる際の注意点は<Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">エージェントへの伝え方</Link>にもまとめています。
      </p>
    </TakeHomePage>
  );
}
