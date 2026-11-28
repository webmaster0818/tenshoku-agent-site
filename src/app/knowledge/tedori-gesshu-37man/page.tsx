import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-37man/" },
  title: "手取り37万円の額面は月約47.4万円・年収約568.8万円【2026年・令和8年の税制で試算】",
  description:
    "手取り37万円に必要な額面と年収を、令和8年の税制と協会けんぽ東京支部の料率で逆算しました。40歳未満・賞与なしで月約47.4万円、年収約568.8万円です。額面45.4万円と45.5万円で手取りが逆転する境目と、所定内給与が47.4万円以上の職種も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り37万円の額面は月約47.4万円・年収約568.8万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り37万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 474000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 350000, m: 446000 },
  { t: 360000, m: 462000 },
  { t: 370000, m: 474000 },
  { t: 380000, m: 490000 },
  { t: 390000, m: 502000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
// 標準報酬月額の区分（報酬月額42.5万円以上45.5万円未満＝44万円、45.5万円以上48.5万円未満＝47万円）の境目
const edge = [453000, 454000, 455000, 458000, 459000, 474000].map((m) => ({ m, r: calcTakeHome(m * 12) }));
const e = (m: number) => edge.find((x) => x.m === m)!.r;

// 賃金構造基本統計調査（職種）第1表：所定内給与額（千円）が474以上の職種
const HIGH = SHOKUSHU.filter((x) => x.t[0] >= 474).sort((a, b) => b.t[0] - a.t[0]);
const totalW = SHOKUSHU.reduce((s, x) => s + x.w, 0);
const highW = HIGH.reduce((s, x) => s + x.w, 0);
const high4549 = SHOKUSHU.filter((x) => x.a4549 && x.a4549[0] >= 474).length;

const faq = [
  {
    q: "手取り37万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り37万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "40歳以上で手取り37万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。手取り37万円以上にするには、額面月給478,000円（年収5,736,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り37万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収500万円超の人は${shareAbove(500)}、600万円超の人は${shareAbove(600)}です。賞与なしで手取り37万円となる年収568.8万円は、この2つの区分の間にあたります。`,
  },
  {
    q: "額面が上がったのに手取りが減ることはありますか？",
    a: `あります。額面月給45.4万円から45.5万円に上がると、健康保険・厚生年金の標準報酬月額が44万円から47万円に上がり、手取りは月${yen(e(454000).netMonthly - e(455000).netMonthly)}減ります（当サイト試算）。額面45.4万円の手取りを上回るのは額面45.9万円からです。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-37man/"
      annual={MONTHLY * 12}
      crumb="手取り37万円の額面"
      h1="手取り37万円の額面は月約47.4万円・年収約568.8万円【2026年】"
      lead={
        <>
          <p>
            手取り37万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが37万円以上になる最小の月給を求めました。額面47.4万円は標準報酬月額47万円の区分（報酬月額45.5万円以上48.5万円未満）の中ほどにあたり、区分の境目である45.5万円付近では額面が増えても手取りが減る範囲があります。
          </p>
        </>
      }
      compareHeading="手取り35万〜39万円に必要な額面（早見表）"
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
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 370000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り35万・36万・37万・38万・39万円に対応します。
            手取りを1万円増やすのに必要な額面は、手取り35万円から36万円では{yen(table[1].m - table[0].m)}ですが、36万円から37万円では{yen(table[2].m - table[1].m)}、37万円から38万円では{yen(table[3].m - table[2].m)}必要です（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-33man/", label: "手取り33万円の額面" },
        { href: "/knowledge/tedori-gesshu-38man/", label: "手取り38万円の額面" },
        { href: "/knowledge/tedori-gesshu-20man/", label: "手取り20万円の額面" },
        { href: "/knowledge/tedori-gesshu-55man/", label: "手取り55万円の額面" },
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/shokugyo-nenshu-ranking/", label: "職業別の年収ランキング" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>額面45.4万円と45.5万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与ではなく「標準報酬月額」に料率を掛けて計算します。
        報酬月額42.5万円以上45.5万円未満の標準報酬月額は44万円、45.5万円以上48.5万円未満は47万円です（
        <a href="https://laws.e-gov.go.jp/law/211AC0000000070" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">健康保険法 第40条</a>）。
        手取り37万円に必要な額面47.4万円は、47万円の区分に入ります。
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
        当サイトの試算では、額面月給45.4万円から45.5万円に上がると、社会保険料が月{yen((e(455000).social - e(454000).social) / 12)}増え、手取りは月{yen(e(454000).netMonthly - e(455000).netMonthly)}減ります。
        額面45.4万円の手取り（月{yen(e(454000).netMonthly)}）を上回るのは額面45.9万円からで、手取り37万円に届くのは47.4万円からです。なお、額面48.5万円で再び標準報酬月額が50万円の区分に上がります（<Link href="/knowledge/tedori-gesshu-38man/" className="text-teal hover:underline">手取り38万円の額面</Link>で試算しています）。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        残業代や通勤手当も報酬月額に含まれるため、基本給が45万円前後の場合、4〜6月の残業や通勤手当によって47万円の区分になる場合があります。
      </p>

      <h2>所定内給与が月47.4万円以上の職種は144職種中{HIGH.length}職種</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別の所定内給与額（令和7年6月分・残業代と賞与を含まない月額）で、手取り37万円に必要な額面47.4万円以上の職種を抜き出しました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">職種</th>
              <th className="p-3 text-right">所定内給与額</th>
              <th className="p-3 text-right rounded-tr-lg">平均年齢</th>
            </tr>
          </thead>
          <tbody>
            {HIGH.map((x) => (
              <tr key={x.k} className="border-b border-gray-100">
                <td className="p-3">{x.k}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.t[0].toFixed(1)}千円</td>
                <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：
        {SHOKUSHU_SOURCES.slice(0, 1).map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{s.label}</a>
        ))}
        （一般労働者・男女計・企業規模10人以上）。{SHOKUSHU_CHECKED}にe-Statで取得。職種（小分類）のうち「不詳」を除く144職種から当サイトで抽出しています。
      </p>
      <p className="mb-10">
        所定内給与額が47.4万円以上の職種は{HIGH.length}職種で、これらの職種で働く人は144職種全体の約{((highW / totalW) * 100).toFixed(1)}%です（同表の労働者数から当サイト計算）。その大半は管理的職業従事者です。
        年齢を45〜49歳に限ると、所定内給与額が47.4万円以上の職種は{high4549}職種に増えます（同調査（職種）第5表）。
        所定内給与額は残業代を含まないため、残業代込みで額面47.4万円になる人はこれより多いと考えられます。
        月給の水準を上げる転職を考える場合は、職種ごとの年収を
        <Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>で確かめたうえで、
        <Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link>や
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>を参考にする方法があります。
      </p>
    </TakeHomePage>
  );
}
