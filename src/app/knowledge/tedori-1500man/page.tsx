import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-1500man/" },
  title: "年収1500万円の手取りは約1,023.9万円・月約85.3万円【2026年・令和8年の税制で試算】",
  description:
    "年収1500万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約1,023.9万円（約68.3%）、月約85.3万円です。所得税率33%の区分に入る年収の目安、子どもがいる場合の所得金額調整控除、年収1300万〜1800万円の比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収1500万円の手取りは約1,023.9万円・月約85.3万円【2026年】",
    description: "令和8年の税制・保険料率で年収1500万円の手取りを試算し、所得税33%の区分と所得金額調整控除を解説しています。",
  },
};

const r = calcTakeHome(15000000);
const o = calcTakeHome(15000000, true);
const steps = [13000000, 14000000, 15000000, 16000000, 18000000].map((y) => calcTakeHome(y));

const faq = [
  {
    q: "年収1500万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与の比率が高い給与体系では、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収1500万円の所得税率は何%ですか？",
    a: `課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税の速算表では${marginalRate(r.taxable)}%の区分（900万円以上1,800万円未満）です。所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}、住民税は年${yen(r.residentTax)}です（国税庁 No.2260・当サイト試算）。`,
  },
  {
    q: "年収1500万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した給与所得者のうち、年収1,000万円超1,500万円以下は${shareBand(10)}、1,500万円を超える人は${shareAbove(1500)}です（当サイトで構成割合を計算）。`,
  },
  {
    q: "子どもがいると年収1500万円の手取りは変わりますか？",
    a: "年齢23歳未満の扶養親族がいる場合などは、所得金額調整控除（上限15万円）を受けられます（国税庁 No.1411）。控除額は「（給与収入。1,000万円超の場合は1,000万円）－850万円」×10%のため、年収1,000万円以上ではいずれも15万円です。課税所得が15万円減るため、所得税率33%の区分では所得税と住民税を合わせて年6.5万円程度少なくなります（15万円×（33%×1.021＋住民税10%）による当サイトの概算）。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-1500man/"
      annual={15000000}
      crumb="年収1500万円の手取り"
      h1="年収1500万円の手取りは約1,023.9万円・月約85.3万円【2026年】"
      lead={
        <>
          <p>
            年収1500万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、{man(15000000 - r.net)}が税金と社会保険料として差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。所得税と住民税の合計が社会保険料の約{((r.incomeTax + r.residentTax) / r.social).toFixed(1)}倍になります。
          </p>
        </>
      }
      compareHeading="年収1300万〜1800万円の手取り比較"
      compare={[13000000, 14000000, 15000000, 16000000, 18000000]}
      compareNote={
        <p>
          年収1300万円から1600万円までは、100万円増えるごとに手取りは
          {steps.slice(1, 4).map((s, i) => `${man(s.net - steps[i].net)}`).join("・")}増えます（当サイト試算）。
          所得税率33%の区分に入った後は、増えた100万円のうち手元に残るのは50万〜55万円程度です。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1200man/", label: "年収1200万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面（月額から逆算）" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/review/bizreach/", label: "ビズリーチの評判と公表データ" },
      ]}
    >
      <h2>年収約1,301万円から所得税率が33%になる</h2>
      <p>
        所得税の速算表では、課税所得900万円以上1,800万円未満に33%の税率がかかります（国税庁 No.2260）。この試算の前提（独身・40歳未満・賞与なし）で年収を1万円刻みで計算すると、
        <strong>年収約1,301万円で課税所得が900万円に達し</strong>、それを超える部分に33%がかかります（当サイト試算）。住民税の所得割10%を合わせると、課税所得の900万円を超える部分の税率は43%（復興特別所得税を除く）です。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年収</th>
              <th className="p-3 text-right">課税所得（所得税）</th>
              <th className="p-3 text-right">所得税率の区分</th>
              <th className="p-3 text-right rounded-tr-lg">手取りの割合</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s) => (
              <tr key={s.annual} className={`border-b border-gray-100 ${s.annual === 15000000 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(s.annual / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(s.taxable)}</td>
                <td className="p-3 text-right whitespace-nowrap">{marginalRate(s.taxable)}%</td>
                <td className="p-3 text-right whitespace-nowrap">{pct(s.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        出典（このページで追加した資料・{"2026年11月16日"}確認）：
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1411.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1411 所得金額調整控除</a>／
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1191 配偶者控除</a>
      </p>
      <p className="mb-10">
        年収1500万円の方は合計所得金額が1,000万円を超えるため、配偶者控除・配偶者特別控除は受けられません（国税庁 No.1191）。一方、23歳未満の扶養親族がいる場合などは所得金額調整控除の対象になります（国税庁 No.1411）。
        家族構成によって手取りは変わるため、上の試算は独身の場合の目安としてご覧ください。年収1500万円クラスの求人を扱う転職エージェントは
        <Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
