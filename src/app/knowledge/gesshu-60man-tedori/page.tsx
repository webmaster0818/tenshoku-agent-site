import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, marginalRate, pct, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/gesshu-60man-tedori/" },
  title: "月収60万円の手取りは約45.4万円【2026年・令和8年の税制で試算】手取りの割合が下がる3つの境目",
  description:
    "額面の月収60万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満・賞与なしで月約45.4万円（約75.7%）です。月収50万円台後半で手取りの割合が下がる3つの境目（基礎控除・所得税率・標準報酬月額）と、大学院卒・大企業の男性の平均月給との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "月収60万円の手取りは約45.4万円【2026年】",
    description: "令和8年の税制・保険料率で、額面の月収60万円の手取りと内訳、手取りの割合が下がる3つの境目、学歴・企業規模別の平均月給との比較を試算しています。",
  },
};

const MONTHLY = 600000;
const r = calcTakeHome(MONTHLY * 12);
const o = calcTakeHome(MONTHLY * 12, true);
const firstYear = (r.net + r.residentTax) / 12;
const b1 = calcTakeHome(554000 * 12);
const b2 = calcTakeHome(555000 * 12);
const t1 = calcTakeHome(560000 * 12);
const t2 = calcTakeHome(561000 * 12);
const g1 = calcTakeHome(604000 * 12);
const g2 = calcTakeHome(605000 * 12);
const table = [550000, 554000, 555000, 560000, 561000, 580000, 600000, 604000, 605000, 620000].map((m) => ({ m, r: calcTakeHome(m * 12) }));

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表・第4表（所定内給与額・千円）
const WAGE_CHECKED = "2026年11月25日";
const EDU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/03.pdf";
const SIZE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/04.pdf";
const rows = [
  { age: "40〜44歳", grad: 553.7, mUniv: 452.8, mLarge: 464.8 },
  { age: "45〜49歳", grad: 617.8, mUniv: 491.4, mLarge: 495.1 },
  { age: "50〜54歳", grad: 648.3, mUniv: 528.8, mLarge: 511.2 },
  { age: "55〜59歳", grad: 676.2, mUniv: 556.3, mLarge: 533.2 },
  { age: "60〜64歳", grad: 589.8, mUniv: 430.3, mLarge: 391.9 },
];
const cell = (v: number) => (
  <td className={`p-3 text-right whitespace-nowrap ${v >= 575 && v < 605 ? "bg-teal/10 font-bold text-navy" : ""}`}>{v.toFixed(1)}千円</td>
);

const faq = [
  {
    q: "月収60万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月収${yen(MONTHLY)}の手取りは月${yen(r.netMonthly)}です（当サイト試算）。額面に対する手取りの割合は${pct(r.rate)}です。40〜64歳は介護保険料が加わり、月${yen(o.netMonthly)}になります。`,
  },
  {
    q: "月収60万円から引かれるものは何ですか？",
    a: `月あたりで健康保険料（子ども・子育て支援金を含む）${yen(r.health / 12)}、厚生年金保険料${yen(r.pension / 12)}、雇用保険料${yen(r.employment / 12)}、所得税${yen(r.incomeTax / 12)}、住民税${yen(r.residentTax / 12)}です（当サイト試算・所得税は年末調整後の年額を12等分）。`,
  },
  {
    q: "月収60万円の所得税率は何%ですか？",
    a: `賞与なしの月収60万円（年収720万円）の場合、所得税の課税所得は${yen(r.taxable)}で、速算表の税率は${marginalRate(r.taxable)}%の区分です（国税庁 No.2260）。当サイトの試算では、月収56.1万円から課税所得が330万円以上になり、20%の区分に入ります。なお、20%は課税所得のうち330万円を超えた部分にだけかかる税率です。`,
  },
  {
    q: "月収60万円は平均より高いですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（残業代・賞与を含まない月額）は、男女計で最も高い55〜59歳でも396.2千円です。月収60万円に近い平均になるのは、大学院卒の45〜49歳（617.8千円）など一部の層に限られます。所定内給与額は残業代を含まないため、残業代込みの月収とは比べ方が異なります。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/gesshu-60man-tedori/"
      annual={MONTHLY * 12}
      crumb="月収60万円の手取り"
      h1="月収60万円の手取りは約45.4万円【2026年・令和8年の税制で試算】"
      lead={
        <>
          <p>
            額面の月収60万円の手取りは、<strong>40歳未満で月{yen(r.netMonthly)}（約45.4万円）</strong>が目安です（賞与なし・独身）。
            社会保険料が月{yen(r.social / 12)}、所得税と住民税が合わせて月{yen((r.incomeTax + r.residentTax) / 12)}差し引かれ、額面の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            月収55万円の手取りの割合は{pct(table[0].r.rate)}で、月収60万円までの間に<strong>基礎控除の縮小・所得税率の上昇・標準報酬月額の区分の上昇</strong>の3つの境目があります。
            賞与がない場合の年収は720万円です。以下の内訳・比較表は年収換算（720万円）で表示しています。
          </p>
        </>
      }
      compareHeading="月収55万〜65万円の手取り（早見表）"
      compare={[550000, 580000, 600000, 620000, 650000].map((m) => m * 12)}
      compareNote={
        <>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">額面の月収</th>
                  <th className="p-3 text-right">標準報酬月額</th>
                  <th className="p-3 text-right">所得税の基礎控除</th>
                  <th className="p-3 text-right">所得税率</th>
                  <th className="p-3 text-right rounded-tr-lg">手取り（月額）</th>
                </tr>
              </thead>
              <tbody>
                {table.map((x) => (
                  <tr key={x.m} className={`border-b border-gray-100 ${x.m === MONTHLY ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(x.m / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{(x.r.grade / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{(x.r.basic / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{marginalRate(x.r.taxable)}%</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(x.r.netMonthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            1つ目の表は年収換算の比較、2つ目の表は額面の月収ごとの標準報酬月額・所得税の基礎控除・所得税率（速算表の区分）・手取り月額です（当サイト試算・40歳未満・賞与なし）。
          </p>
        </>
      }
      faq={faq}
      related={[
        { href: "/knowledge/gesshu-50man-tedori/", label: "月収50万円の手取り" },
        { href: "/knowledge/gesshu-100man-tedori/", label: "月収100万円の手取り" },
        { href: "/knowledge/tedori-700man/", label: "年収700万円の手取り" },
        { href: "/knowledge/tedori-750man/", label: "年収750万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面" },
        { href: "/knowledge/tedori-gesshu-50man/", label: "手取り50万円の額面" },
      ]}
    >
      <h2>月収55万〜60万円で手取りの割合が下がる3つの境目</h2>
      <p>
        月収60万円の手取りの割合は、月収50万円台前半より低くなります。賞与なしの月給制で試算すると、次の3か所で手取りの増え方が変わります（当サイト試算・40歳未満）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">境目</th>
              <th className="p-3 text-left">変わるもの</th>
              <th className="p-3 text-right">直前の手取り</th>
              <th className="p-3 text-right rounded-tr-lg">直後の手取り</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">月収55.4万円→55.5万円</td>
              <td className="p-3">所得税の基礎控除 104万円→67万円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(b1.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(b2.netMonthly)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">月収56万円→56.1万円</td>
              <td className="p-3">所得税率 10%→20%（330万円を超えた部分）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(t1.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(t2.netMonthly)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">月収60.4万円→60.5万円</td>
              <td className="p-3">標準報酬月額 59万円→62万円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(g1.netMonthly)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(g2.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>1. 基礎控除が104万円から67万円に下がる（月収55.5万円）</h3>
      <p>
        令和8年分の所得税の基礎控除は、合計所得金額489万円以下で104万円、489万円超655万円以下で67万円です（
        <a href="https://www.nta.go.jp/publication/pamph/gensen/nencho2026/pdf/102.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁「令和8年分 年末調整のしかた」</a>）。
        賞与なしの月給制では、月収55.5万円（年収666万円）で合計所得金額が489万円を超え、基礎控除が37万円少なくなります。当サイトの試算では、月収55.4万円より手取りが月{yen(b1.netMonthly - b2.netMonthly)}少なくなり、55.4万円の手取りを上回るのは月収55.8万円からです。
        月収60万円は、この縮小後の基礎控除67万円で計算しています。
      </p>
      <h3>2. 所得税率が20%の区分に入る（月収56.1万円）</h3>
      <p>
        所得税の税率は、課税所得195万円以上330万円未満が10%、330万円以上695万円未満が20%です（
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">国税庁 No.2260 所得税の税率</a>）。
        超過累進税率のため手取りが逆転することはありませんが、月収56.1万円以降は、額面が1万円増えるごとに所得税が増える額が大きくなります。月収60万円の課税所得は{yen(r.taxable)}です。
      </p>
      <h3>3. 標準報酬月額が62万円の区分に上がる（月収60.5万円）</h3>
      <p className="mb-10">
        報酬月額57.5万円以上60.5万円未満は標準報酬月額59万円、60.5万円以上63.5万円未満は62万円です（健康保険法 第40条）。
        月収60万円は59万円の区分の上のほうにあり、月収60.5万円に上がると社会保険料が月{yen((g2.social - g1.social) / 12)}増え、手取りは月収60.4万円より月{yen(g1.netMonthly - g2.netMonthly)}少なくなります。60.4万円の手取りを上回るのは月収60.9万円からです（当サイト試算）。
        標準報酬月額は原則として4月〜6月の報酬の平均で決まり、その年の9月から1年間適用されます（
        <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本年金機構「定時決定（算定基礎届）」</a>：2026年11月25日確認）。
        なお、厚生年金保険料は標準報酬月額65万円が上限のため、月収63.5万円以上では厚生年金保険料が増えなくなります。
      </p>

      <h2>月収60万円に届くのはどの層か（大学院卒・大学卒の男性・大企業の男性）</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額（毎年6月分・残業代と賞与を含まない月額）で、平均が月収60万円に近い層は限られます。
        大学院卒（男女計）、大学卒の男性、大企業（常用労働者1,000人以上）の男性の年齢別の値を並べました。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
              <th className="p-3 text-right">大学院卒（男女計）</th>
              <th className="p-3 text-right">大学卒（男性）</th>
              <th className="p-3 text-right rounded-tr-lg">大企業（男性）</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x) => (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                {cell(x.grad)}
                {cell(x.mUniv)}
                {cell(x.mLarge)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：<a href={EDU_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第3表 学歴、性、年齢階級別賃金</a>（大学院卒は男女計、大学卒は男性）、
        <a href={SIZE_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">第4表 企業規模、性、年齢階級別賃金</a>（大企業・男性）。いずれも令和7年6月分の所定内給与額。{WAGE_CHECKED}確認。月57.5万円以上60.5万円未満の欄を色付けしています。
      </p>
      <p className="mb-10">
        大学院卒は60〜64歳（589.8千円）がほぼ同じ水準で、45〜49歳（617.8千円）から55〜59歳（676.2千円）は月収60万円を上回ります。大学卒の男性は最も高い55〜59歳でも556.3千円、大企業の男性は533.2千円で、平均では月収60万円に届きません。
        月収60万円は、残業代を含まない所定内給与では、管理職や専門職など一部の層に限られる水準といえます。ハイクラス向けの転職サービスの比較は
        <Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス転職エージェントの比較</Link>、年収アップの実績を公表している転職エージェントは
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
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
              <td className="p-3">前年の所得がない場合</td>
              <td className="p-3 text-right whitespace-nowrap">0円</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(firstYear)}</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">前年も月収60万円の場合（6月以降）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        住民税は前年の所得をもとに翌年6月から差し引かれます（総務省 個人住民税）。前年の所得が低い状態から月収60万円の仕事に転職した場合、翌年6月から住民税が月{yen(r.residentTax / 12)}程度に増え、手取りが減ります。
      </p>
    </TakeHomePage>
  );
}
