import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-2000man/" },
  title: "年収2000万円の手取りは約1,299.9万円・月約108.3万円【2026年・令和8年の税制で試算】",
  description:
    "年収2000万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約1,299.9万円（約65.0%）、月約108.3万円です。所得税率33%の区分、健康保険・厚生年金の上限、年収2,000万円を超えると確定申告が必要になる点も解説しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収2000万円の手取りは約1,299.9万円・月約108.3万円【2026年】",
    description: "令和8年の税制・保険料率で年収2000万円の手取りを試算し、税率・保険料の上限・確定申告の要否を解説しています。",
  },
};

const r = calcTakeHome(20000000);
const o = calcTakeHome(20000000, true);
const steps = [15000000, 18000000, 20000000, 25000000].map((y) => calcTakeHome(y));

const faq = [
  {
    q: "年収2000万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。実際には賞与の比率が高い給与体系が多く、毎月の手取りはこれより少なくなる場合があります。`,
  },
  {
    q: "年収2000万円を超える人の割合は？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収2,000万円を超える給与所得者は全体の${shareAbove(2000)}です。1,500万円を超える人でも${shareAbove(1500)}です。`,
  },
  {
    q: "年収2000万円の所得税率は何%ですか？",
    a: `給与所得控除195万円・基礎控除62万円・社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税の速算表では${marginalRate(r.taxable)}%の区分（900万円以上1,800万円未満）です。住民税の所得割10%を合わせると、課税所得のうち900万円を超える部分には43%（復興特別所得税を除く）がかかります（国税庁 No.2260・当サイト試算）。`,
  },
  {
    q: "年収2000万円の会社員は確定申告が必要ですか？",
    a: "給与の年間収入金額が2,000万円を超える方は、年末調整の対象とならず確定申告が必要です（国税庁 No.1900）。ちょうど2,000万円の場合は「超える」に当たらないため、ほかに申告が必要な事情がなければ年末調整で所得税が精算されます。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-2000man/"
      annual={20000000}
      crumb="年収2000万円の手取り"
      h1="年収2000万円の手取りは約1,299.9万円・月約108.3万円【2026年】"
      lead={
        <>
          <p>
            年収2000万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、年収の約3分の1にあたる{man(20000000 - r.net)}が差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。差し引かれる額のうち、税金（所得税・住民税）が約{Math.round(((r.incomeTax + r.residentTax) / (20000000 - r.net)) * 100)}%を占めます。
          </p>
        </>
      }
      compareHeading="年収1500万〜2500万円の手取り比較"
      compare={[15000000, 18000000, 20000000, 25000000]}
      compareNote={
        <p>
          年収1500万円から2000万円への500万円の増加で、手取りは{man(steps[2].net - steps[0].net)}増えます。2000万円から2500万円では{man(steps[3].net - steps[2].net)}の増加です（当サイト試算）。
          増えた分の手元に残る割合は、1500万→2000万円で約{Math.round(((steps[2].net - steps[0].net) / 5000000) * 100)}%、2000万→2500万円で約{Math.round(((steps[3].net - steps[2].net) / 5000000) * 100)}%です。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-800man/", label: "年収800万円の手取り" },
        { href: "/knowledge/tedori-700man/", label: "年収700万円の手取り" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/review/jac/", label: "JACリクルートメントの評判と公表データ" },
        { href: "/review/bizreach/", label: "ビズリーチの評判と公表データ" },
      ]}
    >
      <h2>年収2000万円で知っておきたい3つの制度</h2>
      <div className="space-y-4 mb-6">
        {[
          {
            t: "健康保険・厚生年金の保険料は上限に達する",
            d: `年収2000万円（月給約166.7万円）では、健康保険の標準報酬月額は上限の139万円（健康保険法 第40条）、厚生年金は上限の65万円（日本年金機構 厚生年金保険料額表）で計算されます。社会保険料は年${yen(r.social)}で、年収1000万円の場合（年${yen(calcTakeHome(10000000).social)}）からの増加は${yen(r.social - calcTakeHome(10000000).social)}です。年収に対する社会保険料の割合は${pct(r.social / r.annual)}です。`,
          },
          {
            t: "所得税は33%の区分に入る",
            d: `課税所得${r.taxable.toLocaleString("ja-JP")}円は、所得税の速算表で900万円以上1,800万円未満（税率33%・控除額1,536,000円）に当たります（国税庁 No.2260）。所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}です（当サイト試算）。`,
          },
          {
            t: "年収2,000万円を超えると確定申告が必要",
            d: "給与の年間収入金額が2,000万円を超える方は、年末調整ではなく確定申告で所得税を精算します（国税庁 No.1900）。転職や昇給で2,000万円を超える見込みがある場合は、源泉徴収票の保管と申告期限の確認が必要です。",
          },
        ].map((x) => (
          <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="font-bold text-navy mb-2">{x.t}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-text-muted mb-4">
        出典（このページで追加した資料・{"2026年11月14日"}確認）：
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1900 給与所得者で確定申告が必要な人</a>
      </p>
      <p className="mb-10">
        年収2000万円では、保険料が上限で頭打ちになる一方、所得税・住民税の負担が大きくなります。賞与の比率や株式報酬の有無によって手取りの実額は変わるため、条件提示を比べる際は年収の内訳もご確認ください。
        年収2000万円クラスの求人を扱う転職エージェントは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
