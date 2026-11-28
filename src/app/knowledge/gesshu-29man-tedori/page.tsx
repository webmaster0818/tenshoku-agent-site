import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, pct, yen } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-29man-tedori/" },
  title: "月給29万円の手取りは約23.1万円【2026年・令和8年の税制で試算】月給28.9万円より少なくなる境目と25〜29歳で29万円以上の職種",
  description:
    "額面の月給29万円の手取りを令和8年分の税制と協会けんぽ東京支部の料率で試算しました。独身・40歳未満・賞与なしで月約23.1万円（約79.6%）です。月給28.9万円より手取りが少なくなる標準報酬月額の境目と、25〜29歳の所定内給与が29万円以上の職種を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月給29万円の手取りは約23.1万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月給29万円の手取りと内訳、標準報酬月額の境目、25〜29歳の職種別の月給との比較を試算しています。",
  },
};

const MONTHLY = 290000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const lo = calcTakeHome(289000 * 12);
const recover = (() => {
  for (let m = 291000; m < 320000; m += 1000) if (calcTakeHome(m * 12).netMonthly > lo.netMonthly) return m;
  return 0;
})();
const table = [270000, 280000, 289000, 290000, 300000, 309000, 310000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 賃金構造基本統計調査（職種）第5表：25〜29歳・労働者数5,000人（500十人）以上の職種
const BASE = SHOKUSHU.filter((x) => x.a2529 && x.a2529[2] >= 500);
const HIGH = BASE.filter((x) => x.a2529![0] >= 290).sort((a, b) => b.a2529![0] - a.a2529![0]);

const faq = [
  {
    q: "月給29万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月給29万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月給28.9万円と29万円では、なぜ手取りが逆転するのですか？",
    a: `報酬月額27万円以上29万円未満は標準報酬月額28万円、29万円以上31万円未満は30万円の区分です（健康保険法 第40条）。月給29万円は30万円の区分の下限にあたるため、月給28.9万円より社会保険料が月${yen((r.social - lo.social) / 12)}多くなり、手取りは月${yen(lo.netMonthly - r.netMonthly)}少なくなります（当サイト試算）。`,
  },
  {
    q: "月給29万円の年収はいくらですか？",
    a: "賞与がない場合は348万円です。賞与が年2か月分（58万円）ある場合は年収406万円になります。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-29man-tedori/"
      annual={MONTHLY * 12}
      crumb="月給29万円の手取り"
      h1="月給29万円の手取りは約23.1万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月給29万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約23.1万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月給29万円は標準報酬月額30万円の区分のちょうど下限にあたり、<strong>月給28.9万円のほうが手取りが月{yen(lo.netMonthly - r.netMonthly)}多くなります</strong>。
            賞与がない場合の年収は348万円です。以下の内訳・比較表は年収換算（348万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月給27万〜31万円の手取り（早見表）"
      compare={[270000, 280000, 290000, 300000, 310000].map((m) => m * 12)}
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
            月給28.9万円と29万円、30.9万円と31万円の間で標準報酬月額の区分が上がり、手取りがそれぞれ逆転しています。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-28man-tedori/", label: "月給28万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月給30万円の手取り" },
        { href: "/knowledge/gesshu-22man-tedori/", label: "月給22万円の手取り" },
        { href: "/knowledge/tedori-gesshu-36man/", label: "手取り36万円の額面" },
        { href: "/knowledge/tedori-350man/", label: "年収350万円の手取り" },
        { href: "/knowledge/salary-30sai/", label: "30歳の平均年収" },
      ]}
    >
      <h2>月給28.9万円と29万円で手取りが逆転する理由</h2>
      <p>
        健康保険と厚生年金の保険料は、毎月の給与そのものではなく「標準報酬月額」に料率を掛けて計算します（
        <a href="https://laws.e-gov.go.jp/law/211AC0000000070" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">健康保険法 第40条</a>）。
        報酬月額27万円以上29万円未満は標準報酬月額28万円、29万円以上31万円未満は30万円です。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">項目（月額）</th>
              <th className="p-3 text-right">月給28.9万円</th>
              <th className="p-3 text-right rounded-tr-lg">月給29万円</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">標準報酬月額</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.grade)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.grade)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">社会保険料</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.social / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.social / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">所得税＋住民税</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((lo.incomeTax + lo.residentTax) / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen((r.incomeTax + r.residentTax) / 12)}</td>
            </tr>
            <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
              <td className="p-3">手取り</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(lo.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        月給28.9万円の手取りを上回るのは月給{(recover / 10000).toFixed(1)}万円からです（当サイト試算）。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>）。
        残業代や通勤手当も報酬月額に含まれるため、基本給が28万円台でも4〜6月の残業代で平均が29万円以上になると30万円の区分になります。
        厚生年金保険料は将来の年金額の計算にも使われるため、手取りだけで損得を判断できない点にご注意ください。
      </p>

      <h2>25〜29歳の所定内給与が月29万円以上の職種は{BASE.length}職種中{HIGH.length}職種</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別・年齢階級別の所定内給与額（令和7年6月分・残業代と賞与を含まない月額）から、25〜29歳の労働者が5,000人以上いる{BASE.length}職種を対象に、月29万円以上の職種を高い順に並べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">職種</th>
              <th className="p-3 text-right rounded-tr-lg">25〜29歳の所定内給与額</th>
            </tr>
          </thead>
          <tbody>
            {HIGH.map((x) => (
              <tr key={x.k} className="border-b border-gray-100">
                <td className="p-3">{x.k}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.a2529![0].toFixed(1)}千円</td>
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
        （一般労働者・男女計・企業規模10人以上）。{SHOKUSHU_CHECKED}にe-Statで取得。25〜29歳の労働者数が5,000人以上の職種を当サイトで抽出しています。
      </p>
      <p className="mb-10">
        25〜29歳で所定内給与額の平均が月29万円以上になるのは、医師・システムコンサルタント・技術者・看護師・営業職などの{HIGH.length}職種で、残りの{BASE.length - HIGH.length}職種は29万円未満です。
        所定内給与額は残業代を含まないため、残業代込みで月給29万円の人はこれより広い職種にいると考えられます。
        月給を上げる転職を考える場合は、職種ごとの年収を<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>で確かめ、
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>も参考にしてください。
      </p>
    </TakeHomePage>
  );
}
