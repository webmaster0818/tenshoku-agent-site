import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-22man-tedori/" },
  title: "月給22万円の手取りは約17.8万円【2026年・令和8年の税制で試算】20〜24歳で月給22万円を下回る21職種",
  description:
    "額面の月給22万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約17.8万円（約81.0%）です。標準報酬月額22万円の区分の中での位置と、20〜24歳の所定内給与が22万円未満の職種（賃金構造基本統計調査）を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給22万円の手取りは約17.8万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給22万円の手取りと内訳、20〜24歳の職種別の月給との比較を試算しています。",
  },
};

const MONTHLY = 220000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const hi = calcTakeHome(229000 * 12);
const next = calcTakeHome(230000 * 12);
const firstYear = (r.net + r.residentTax) / 12;
const table = [200000, 210000, 219000, 220000, 229000, 230000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 賃金構造基本統計調査（職種）第5表：20〜24歳・労働者数1,000人（100十人）以上の職種
const YOUNG = SHOKUSHU.filter((x) => x.a2024 && x.a2024[2] >= 100);
const LOW = YOUNG.filter((x) => x.a2024![0] < 220).sort((a, b) => a.a2024![0] - b.a2024![0]);

const faq = [
  {
    q: "月給22万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給22万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給22万円の年収はいくらですか？",
    a: `賞与がない場合は264万円です。賞与が年2か月分（44万円）ある場合は年収308万円になります。手取りの年額は賞与なしで約${Math.round(r.net / 10000)}万円です（当サイト試算）。`,
  },
  {
    q: "月給22万円は20代前半として低いですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」で、20〜24歳の労働者が1,000人以上いる${YOUNG.length}職種のうち、所定内給与額（残業代・賞与を含まない月額）が22万円未満の職種は${LOW.length}職種です。多くの職種では20〜24歳の平均が22万円を上回っています。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-22man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給22万円の手取り"
      h1="月給22万円の手取りは約17.8万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給22万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約17.8万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給22万円は標準報酬月額22万円の区分（報酬月額21万円以上23万円未満）のほぼ中央にあり、月給が22.9万円までは社会保険料がほとんど変わりません。
            賞与がない場合の年収は264万円です。以下の内訳・比較表は年収換算（264万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給20万〜24万円の手取り（早見表）"
      compare={[200000, 210000, 220000, 230000, 240000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月給</th>
                  <th className="p-3 text-right">標準報酬月額</th>
                  <th className="p-3 text-right">社会保険料（月額）</th>
                  <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{(x.r.grade / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.social / 12)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月給ごとの標準報酬月額・社会保険料・手取り月額です（当サイト試算・40歳未満・賞与なし）。
            月給21万円から22.9万円までは同じ標準報酬月額22万円の区分のため、額面が増えた分の約8割がそのまま手取りの増加になります。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-21man-tedori/", label: "月給21万円の手取り" },
        { href: "/knowledge/gesshu-23man-tedori/", label: "月給23万円の手取り" },
        { href: "/knowledge/gesshu-29man-tedori/", label: "月給29万円の手取り" },
        { href: "/knowledge/tedori-gesshu-22man/", label: "手取り22万円の額面" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/salary-25sai/", label: "25歳の平均年収" },
      ]}
    >
      <h2>月給22万円から23万円に上がるときの注意点</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（
        <a href="https://laws.e-gov.go.jp/law/211AC0000000070" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">健康保険法 第40条</a>）。
        報酬月額21万円以上23万円未満は標準報酬月額22万円、23万円以上25万円未満は24万円です。
      </p>
      <p className="mb-10">
        当サイトの試算では、月給22.9万円の手取りは月{yen(hi.netMonthly)}ですが、月給23万円になると社会保険料が月{yen((next.social - hi.social) / 12)}増え、手取りは月{yen(next.netMonthly)}に下がります。
        月給22万円から昇給する場合、23万円をわずかに超える程度の昇給では手取りの増加が小さくなります。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        残業代や通勤手当も報酬月額に含まれるため、基本給22万円でも4〜6月の残業代で平均が23万円以上になると24万円の区分になります。
      </p>

      <h2>20〜24歳で所定内給与が月22万円を下回る職種は{YOUNG.length}職種中{LOW.length}職種</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別・年齢階級別の所定内給与額（令和7年6月分・残業代と賞与を含まない月額）から、20〜24歳の労働者が1,000人以上いる{YOUNG.length}職種を対象に、月22万円を下回る職種を低い順に並べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">職種</th>
              <th className="p-3 text-right">20〜24歳の所定内給与額</th>
              <th className="p-3 text-right rounded-tr-lg">月給22万円との差</th>
            </tr>
          </thead>
          <tbody>
            {LOW.map((x) => (
              <tr key={x.k} className="border-b border-gray-100">
                <td className="p-3">{x.k}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.a2024![0].toFixed(1)}千円</td>
                <td className="p-3 text-right whitespace-nowrap">{(x.a2024![0] - 220).toFixed(1)}千円</td>
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
        （一般労働者・男女計・企業規模10人以上）。{SHOKUSHU_CHECKED}にe-Statで取得。20〜24歳の労働者数が1,000人以上の職種を当サイトで抽出しています。
      </p>
      <p className="mb-10">
        残りの{YOUNG.length - LOW.length}職種は、20〜24歳の所定内給与額の平均が月22万円以上です。月給22万円は、20代前半としては製造・清掃・一部の事務職に近い水準といえます。
        ただし、所定内給与額には諸手当が含まれ残業代は含まれないため、求人票の月給と比べる場合は固定残業代が含まれていないかを確認してください。
        20代で月給を上げる転職を考える場合は<Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒向けの転職エージェント</Link>、
        職種ごとの年収は<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>で確認できます。
      </p>

      <h3>入社1年目と2年目の手取りの違い</h3>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれます。学校を卒業して就職した1年目は住民税がかからないため、手取りは月{yen(firstYear)}が目安です。
        2年目の6月以降は住民税が月{yen(r.residentTax / 12)}差し引かれ、月{yen(r.netMonthly)}になります（当サイト試算・前年も月給22万円の場合）。
      </p>
    </TakeHomePage>
  );
}
