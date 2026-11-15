import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-300man/" },
  title: "年収300万円の手取りは約239.9万円・月約19.9万円【2026年・令和8年の税制で試算】",
  description:
    "年収300万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約239.9万円（約80.0%）、月約19.9万円です。年収240万〜400万円との比較、国税庁統計での位置づけ、入社1年目の手取りも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収300万円の手取りは約239.9万円・月約19.9万円【2026年】",
    description: "令和8年の税制・保険料率で年収300万円の手取りを試算し、内訳と根拠を掲載しています。",
  },
};

const ANNUAL = 3000000;
const r = calcTakeHome(ANNUAL);
const o = calcTakeHome(ANNUAL, true);
const firstYear = (r.net + r.residentTax) / 12;

const faq = [
  {
    q: "年収300万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${yen(r.netMonthly)}、40〜64歳は月${yen(o.netMonthly)}が目安です（当サイト試算）。賞与がある会社では月給が低くなるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収300万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、200万円超300万円以下が${shareBand(2)}、300万円超400万円以下が${shareBand(3)}です。年収300万円を超える人の割合は${shareAbove(300)}です（人数から当サイトで集計）。`,
  },
  {
    q: "年収300万円の所得税と住民税はいくらですか？",
    a: `令和8年分の制度で、給与所得控除98万円・基礎控除104万円・社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}です。住民税は年${yen(r.residentTax)}で、所得税の約${Math.round(r.residentTax / r.incomeTax)}倍です（当サイト試算）。住民税の基礎控除は43万円のままで、所得税の基礎控除より小さいためです。`,
  },
  {
    q: "入社1年目の手取りはいくらですか？",
    a: `住民税は前年の所得をもとに翌年6月から差し引かれます（総務省 個人住民税）。前年に住民税が課税される所得がない入社1年目は、同じ年収300万円でも手取りは月${yen(firstYear)}程度になり、2年目の6月から月${yen(r.residentTax / 12)}の住民税が差し引かれます（当サイト試算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-300man/"
      annual={ANNUAL}
      crumb="年収300万円の手取り"
      h1="年収300万円の手取りは約239.9万円・月約19.9万円【2026年】"
      lead={
        <>
          <p>
            年収300万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(ANNUAL - r.net)}のうち、約{Math.round((r.social / (ANNUAL - r.net)) * 100)}%が社会保険料（{man(r.social)}）です。所得税は年{man(r.incomeTax)}、住民税は年{man(r.residentTax)}で、この年収帯では住民税が所得税を大きく上回ります。
          </p>
        </>
      }
      compareHeading="年収240万〜400万円の手取り比較"
      compare={[2400000, 2700000, 3000000, 3300000, 3600000, 4000000]}
      compareNote={
        <p>
          年収240万円から400万円の範囲では、手取りの割合は81.4%から79.2%へ緩やかに下がります（当サイト試算・40歳未満）。
          年収300万円から30万円増えると、手取りは年{man(calcTakeHome(3300000).net - r.net)}増えます。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/gesshu-30man-tedori/", label: "月収30万円の手取り" },
        { href: "/knowledge/tedori-gesshu-18man/", label: "手取り18万円の額面" },
        { href: "/knowledge/salary-30sai/", label: "30歳の平均年収（国税庁統計）" },
        { href: "/type/second-new-grad/", label: "第二新卒向けの転職エージェント" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
      ]}
    >
      <h2>令和8年分から変わった控除と年収300万円の税額</h2>
      <p>
        令和8年分の所得税では、基礎控除が合計所得金額489万円以下の人で104万円になり、給与所得控除の最低額が74万円になりました（国税庁「令和8年分 年末調整のしかた」、No.1410）。
        年収300万円の給与所得控除は「年収×30%＋8万円」の区分にあたり、98万円です。給与所得は{yen(r.salaryIncome)}となります。
      </p>
      <p>
        一方、住民税の基礎控除は43万円のまま改正されていないため（総務省 説明資料）、住民税の課税所得は{yen(r.residentTaxable)}と、所得税の課税所得（{yen(r.taxable)}）より大きくなります。
        年収300万円で住民税（年{yen(r.residentTax)}）が所得税（年{yen(r.incomeTax)}）より多いのはこのためです。
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
              <td className="p-3">2年目の6月以降（前年も年収300万円）</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.residentTax / 12)}</td>
              <td className="p-3 text-right whitespace-nowrap">{yen(r.netMonthly)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        年収300万円前後から転職で年収を上げたい場合は、年収アップの実績を公表している転職エージェントを
        <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
