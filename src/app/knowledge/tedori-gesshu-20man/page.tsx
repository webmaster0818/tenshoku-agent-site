import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, yen } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-gesshu-20man/" },
  title: "手取り20万円の額面は月約24.8万円・年収約297.6万円【2026年・令和8年の税制で試算】",
  description:
    "手取り20万円に必要な額面と年収を、令和8年の税制と協会けんぽ東京支部の料率で逆算しました。40歳未満・賞与なしで月約24.8万円、年収約297.6万円です。額面24.9万円と25万円で手取りが逆転する境目と、所定内給与が24.8万円未満の職種も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り20万円の額面は月約24.8万円・年収約297.6万円【2026年】",
    description: "令和8年の税制・保険料率で、手取り20万円に必要な額面月給と年収を逆算しています。",
  },
};

const MONTHLY = 248000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const table = [
  { t: 180000, m: 223000 },
  { t: 190000, m: 237000 },
  { t: 200000, m: 248000 },
  { t: 210000, m: 262000 },
  { t: 220000, m: 276000 },
].map((x) => ({ ...x, r: calcTakeHome(x.m * 12) }));
// 標準報酬月額の区分（報酬月額23万円以上25万円未満＝24万円、25万円以上27万円未満＝26万円）の境目
const edge = [247000, 248000, 249000, 250000, 251000, 252000].map((m) => ({ m, r: calcTakeHome(m * 12) }));
const e = (m: number) => edge.find((x) => x.m === m)!.r;

// 賃金構造基本統計調査（職種）第1表：所定内給与額（千円）が248未満の職種
const LOW = SHOKUSHU.filter((x) => x.t[0] < 248).sort((a, b) => a.t[0] - b.t[0]);
const totalW = SHOKUSHU.reduce((s, x) => s + x.w, 0);
const lowW = LOW.reduce((s, x) => s + x.w, 0);
const with2024 = SHOKUSHU.filter((x) => x.a2024);
const low2024 = with2024.filter((x) => x.a2024![0] < 248).length;

const faq = [
  {
    q: "手取り20万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。`,
  },
  {
    q: "手取り20万円から引かれているものは何ですか？",
    a: `額面月給${yen(MONTHLY)}の場合、月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}が差し引かれます（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "額面25万円なら手取りは20万円を超えますか？",
    a: `超えません。額面月給25万円では健康保険・厚生年金の標準報酬月額が26万円の区分に上がるため、手取りは月${yen(e(250000).netMonthly)}となり、20万円をわずかに下回ります（当サイト試算）。額面24.8万円・24.9万円のほうが手取りは多くなります。`,
  },
  {
    q: "40歳以上で手取り20万円にするには額面がいくら必要ですか？",
    a: `40歳から介護保険料が加わるため、同じ額面月給${yen(MONTHLY)}でも手取りは月${yen(o.netMonthly)}になります。40歳以上で手取り20万円以上にするには、額面月給253,000円（年収3,036,000円）が目安です（当サイト試算）。`,
  },
  {
    q: "手取り20万円の年収は全体のどのくらいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収200万円超の人は${shareAbove(200)}、300万円超の人は${shareAbove(300)}です。賞与なしで手取り20万円となる年収297.6万円は、200万円超300万円以下の区分の上端にあたります。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-gesshu-20man/"
      annual={MONTHLY * 12}
      crumb="手取り20万円の額面"
      h1="手取り20万円の額面は月約24.8万円・年収約297.6万円【2026年】"
      lead={
        <>
          <p>
            手取り20万円に必要な額面は、<strong>月{man(MONTHLY)}（年収{man(MONTHLY * 12)}）</strong>が目安です（40歳未満・賞与なし）。
            額面月給{yen(MONTHLY)}の手取りは月{yen(r.netMonthly)}で、社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれます。
          </p>
          <p className="mt-2">
            額面月給を1,000円刻みで計算し、手取りが20万円以上になる最小の月給を求めました。額面25万円にすると標準報酬月額の区分が上がって手取りは20万円を下回り、額面25.1万円で再び20万円を超えます。
          </p>
        </>
      }
      compareHeading="手取り18万〜22万円に必要な額面（早見表）"
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
                  <tr key={x.t} className={`border-b border-gray-100 ${x.t === 200000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
            1つ目の表は年収換算の手取りの比較、2つ目の表は手取りの月額から逆算した額面月給です。各行が手取り18万・19万・20万・21万・22万円に対応します。
            手取りを1万円増やすのに必要な額面は、手取り19万円から20万円では{yen(table[2].m - table[1].m)}、20万円から21万円では{yen(table[3].m - table[2].m)}です（当サイト試算・40歳未満）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/tedori-gesshu-22man/", label: "手取り22万円の額面" },
        { href: "/knowledge/gesshu-21man-tedori/", label: "月収21万円の手取り" },
        { href: "/knowledge/tedori-300man/", label: "年収300万円の手取り" },
        { href: "/knowledge/tedori-gesshu-37man/", label: "手取り37万円の額面" },
        { href: "/knowledge/shokugyo-nenshu-ranking/", label: "職業別の年収ランキング" },
        { href: "/knowledge/tedori-hayamihyo/", label: "年収別の手取り早見表" },
      ]}
    >
      <h2>額面24.9万円と25万円で手取りが逆転する</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与ではなく「標準報酬月額」に料率を掛けて計算します。
        報酬月額23万円以上25万円未満の標準報酬月額は24万円、25万円以上27万円未満は26万円です（
        <a href="https://laws.e-gov.go.jp/law/211AC0000000070" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">健康保険法 第40条</a>）。
        手取り20万円に必要な額面24.8万円は、24万円の区分の上限の近くにあります。
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
        当サイトの試算では、額面月給24.9万円から25万円に上がると、社会保険料が月{yen((e(250000).social - e(249000).social) / 12)}増え、手取りは月{yen(e(249000).netMonthly - e(250000).netMonthly)}減って{yen(e(250000).netMonthly)}になります。
        求人票の「月給25万円」は手取り20万円を下回る点に注意が必要です。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        残業代や通勤手当も報酬月額に含まれるため、基本給が24万円台でも4〜6月の残業や通勤手当によって26万円の区分になる場合があります。
      </p>

      <h2>所定内給与が月24.8万円未満の職種は144職種中{LOW.length}職種</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別の所定内給与額（令和7年6月分・残業代と賞与を含まない月額）で、手取り20万円に必要な額面24.8万円に届かない職種を抜き出しました。
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
            {LOW.map((x) => (
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
        全年齢の平均で所定内給与額が24.8万円に届かない職種は{LOW.length}職種で、これらの職種で働く人は144職種全体の約{((lowW / totalW) * 100).toFixed(1)}%です（同表の労働者数から当サイト計算）。
        一方、年齢を20〜24歳に限ると、値のある{with2024.length}職種のうち{low2024}職種で所定内給与額が24.8万円未満です（同調査（職種）第5表）。
        手取り20万円は、全年齢の平均では多くの職種で届く水準ですが、20代前半では届かない職種のほうが多いことが分かります。
        月給の水準を上げる転職を考える場合は、職種ごとの年収を
        <Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>で確かめたうえで、
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>を参考にする方法があります。
      </p>
    </TakeHomePage>
  );
}
