import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, shareBand } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-1000man/" },
  title: "年収1000万円の手取りは約727万円・月約60.6万円【2026年・令和8年の税制で試算】",
  description:
    "年収1000万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約727万円（約72.7%）、月約60.6万円です。年収800万〜1200万円の比較、給与所得控除・厚生年金保険料の上限の影響も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収1000万円の手取りは約727万円・月約60.6万円【2026年】",
    description: "令和8年の税制・保険料率で年収1000万円の手取りを試算し、内訳と根拠を掲載しています。",
  },
};

const r = calcTakeHome(10000000);
const o = calcTakeHome(10000000, true);
const steps = [8000000, 9000000, 10000000, 11000000, 12000000].map((y) => calcTakeHome(y));

const faq = [
  {
    q: "年収1000万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与を含む年収1000万円の場合、毎月の手取りはこれより少なく、賞与月に多くなります。`,
  },
  {
    q: "年収1000万円を超える人の割合は？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収1,000万円を超える給与所得者は全体の${shareAbove(1000)}です。900万円超1,000万円以下は${shareBand(9)}です。`,
  },
  {
    q: "年収1000万円の所得税率は何%ですか？",
    a: `令和8年分の制度で、給与所得控除195万円・基礎控除62万円・社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円となり、所得税の速算表では20%の区分（330万円以上695万円未満）です。所得税（復興特別所得税を含む）は年${r.incomeTax.toLocaleString("ja-JP")}円、住民税は年${r.residentTax.toLocaleString("ja-JP")}円です（当サイト試算）。`,
  },
  {
    q: "令和8年の税制改正で、年収1000万円の手取りは変わりますか？",
    a: "年収1000万円（合計所得金額805万円）の基礎控除は、令和7年分の58万円から令和8年分は62万円になります。当サイトの試算では所得税が年約8千円少なくなります。年収600万円前後で基礎控除が68万円から104万円に増えるのに比べ、改正の影響は小さくなります。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-1000man/"
      annual={10000000}
      crumb="年収1000万円の手取り"
      h1="年収1000万円の手取りは約727万円・月約60.6万円【2026年】"
      lead={
        <>
          <p>
            年収1000万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、年収の約4分の1にあたる{man(10000000 - r.net)}が差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。年収500万円（手取り約78.8%）と比べ、手取りの割合は約6ポイント低くなります。
          </p>
        </>
      }
      compareHeading="年収800万〜1200万円の手取り比較"
      compare={[8000000, 9000000, 10000000, 11000000, 12000000]}
      compareNote={
        <p>
          この範囲では、年収が100万円増えるごとに手取りは
          {steps.slice(1).map((s, i) => `${man(s.net - steps[i].net)}`).join("・")}増えます（800万→900万円から1100万→1200万円の順・当サイト試算）。
          増えた100万円のうち手元に残るのは64万〜67万円程度です。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/review/jac/", label: "JACリクルートメントの評判と公表データ" },
        { href: "/review/bizreach/", label: "ビズリーチの評判と公表データ" },
      ]}
    >
      <h2>年収1000万円前後で手取りに影響する3つの上限・区分</h2>
      <div className="space-y-4 mb-6">
        {[
          {
            t: "給与所得控除は年収850万円で上限（195万円）",
            d: "給与所得控除は年収850万円を超えると195万円で一定です（国税庁 No.1410）。年収850万円を超えた部分は、控除が増えないまま課税対象になります。",
          },
          {
            t: "基礎控除は年収850万円超で62万円",
            d: "令和8年分・令和9年分の所得税の基礎控除は、合計所得金額655万円超2,350万円以下（給与だけの場合は年収850万円超2,545万円以下）で62万円です（国税庁「令和8年分 年末調整のしかた」）。",
          },
          {
            t: "厚生年金保険料は標準報酬月額65万円で上限",
            d: `厚生年金の標準報酬月額は65万円（報酬月額63.5万円以上）が上限です（日本年金機構 厚生年金保険料額表）。月給83.3万円の年収1000万円でも、保険料は月59,475円・年${r.pension.toLocaleString("ja-JP")}円で、年収800万円の場合と同じです。健康保険の標準報酬月額の上限は139万円（健康保険法 第40条）のため、健康保険料は標準報酬月額83万円で計算されます。`,
          },
        ].map((x) => (
          <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="font-bold text-navy mb-2">{x.t}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>
      <p className="mb-10">
        厚生年金保険料が頭打ちになる一方で、所得税・住民税は年収に応じて増えます。そのため年収800万円を超えると、差し引かれる額のうち税金の占める割合が高くなります。
        年収1000万円以上の求人を扱う転職エージェントは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
