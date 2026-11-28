import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-36man/" },
  title: "手取り36万円の額面は月約46.2万円・年収約554.4万円【2026年・令和8年の税制で試算】45〜49歳で届く22職種",
  description:
    "手取り36万円に必要な額面と年収を、令和8年の税制と協会けんぽ東京支部の料率で逆算しました。40歳未満・賞与なしで月約46.2万円、年収約554.4万円、40歳以上は月約46.6万円です。45〜49歳の所定内給与が46.2万円以上の職種（賃金構造基本統計調査）も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り36万円の額面は月約46.2万円・年収約554.4万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り36万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 462000;
const OVER40 = 466000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const o2 = calcTakeHome(OVER40 * 12, true);
const table = [
  { t: 340000, m: 434000 },
  { t: 350000, m: 446000 },
  { t: 360000, m: 462000 },
  { t: 370000, m: 474000 },
  { t: 380000, m: 490000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));

// 賃金構造基本統計調査（職種）第5表：45〜49歳の所定内給与額（千円）が462以上の職種
const BASE = SHOKUSHU.filter((x) => x.a4549);
const HIGH = BASE.filter((x) => x.a4549![0] >= 462).sort((a, b) => b.a4549![0] - a.a4549![0]);

const faq = [
  {
    q: "手取り36万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り36万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り36万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り36万円以上にするには、額面月給${yen(OVER40)}（年収${yen(OVER40 * 12)}）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り36万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収500万円超の人は${shareAbove(500)}、600万円超の人は${shareAbove(600)}です。賞与なしで手取り36万円となる年収554.4万円は、この2つの区分の間にあたります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-36man/"
      annual={MONTHLY * 12}
      crumb="手取り36万円の額面"
      h1="手取り36万円の額面は月約46.2万円・年収約554.4万円【2026年】"
      lead={
        <>
          <p>
            手取り36万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが36万円以上になる最小の月給を求めました。40歳以上は介護保険料が加わるため、額面月給{yen(OVER40)}（手取り月{yen(o2.netMonthly)}）が必要です。
          </p>
        </>
      }
      compareHeading="手取り34万〜38万円に必要な額面（早見表）"
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
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 360000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です（当サイト試算・40歳未満）。
            手取り35万円から36万円に増やすには額面が{yen(table[2].m - table[1].m)}必要で、34万円から35万円（{yen(table[1].m - table[0].m)}）より多くなります。
            額面45.5万円で標準報酬月額が44万円から47万円の区分に上がり、社会保険料が増えるためです（
            <a href="https://laws.e-gov.go.jp/law/211AC0000000070" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">健康保険法 第40条</a>）。
            境目の前後の手取りは<Link href="/knowledge/tedori-gesshu-37man/" className="text-teal hover:underline">手取り37万円の額面</Link>で試算しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-33man/", label: "手取り33万円の額面" },
        { href: "/knowledge/tedori-gesshu-37man/", label: "手取り37万円の額面" },
        { href: "/knowledge/tedori-gesshu-38man/", label: "手取り38万円の額面" },
        { href: "/knowledge/gesshu-29man-tedori/", label: "月給29万円の手取り" },
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>45〜49歳で所定内給与が月46.2万円以上の職種は{BASE.length}職種中{HIGH.length}職種</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別・年齢階級別の所定内給与額（令和7年6月分・残業代と賞与を含まない月額）で、40代後半に手取り36万円の額面（46.2万円）に届く職種を抜き出しました。
        40歳以上の目安（46.6万円）とはほぼ同じ水準です。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">職種</th>
              <th className="p-3 text-right">45〜49歳の所定内給与額</th>
              <th className="p-3 text-right rounded-tr-lg">45〜49歳の労働者数</th>
            </tr>
          </thead>
          <tbody>
            {HIGH.map((x) => (
              <tr key={x.k} className="border-b border-gray-100">
                <td className="p-3">{x.k}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.a4549![0].toFixed(1)}千円</td>
                <td className="p-3 text-right whitespace-nowrap">{(x.a4549![2] * 10).toLocaleString("ja-JP")}人</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：
        {SHOKUSHU_SOURCES.slice(1, 2).map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{s.label}</a>
        ))}
        （一般労働者・男女計・企業規模10人以上）。{SHOKUSHU_CHECKED}にe-Statで取得。職種（小分類）のうち「不詳」を除く144職種から当サイトで抽出しています。労働者数は調査の推計値です。
      </p>
      <p className="mb-10">
        45〜49歳でも、所定内給与額の平均が月46.2万円以上になるのは医師・大学教員・システムコンサルタント・公認会計士などの専門職、管理的職業従事者、金融営業、企画事務員などに限られます。
        所定内給与額は残業代を含まないため、残業代込みで額面46.2万円になる人はこれより多いと考えられます。
        また、賞与がある場合は月給がこれより低くても年収554.4万円に届きます。
        年収の水準を上げる転職を考える場合は、<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link>や
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>を参考にしてください。
      </p>
    </TakeHomePage>
  );
}
