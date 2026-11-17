import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareBand, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-3000man/" },
  title: "年収3000万円の手取りは約1,775.1万円・月約147.9万円【2026年・令和8年の税制で試算】",
  description:
    "年収3000万円の手取りを、令和8年分の所得税・住民税と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約1,775.1万円（約59.2%）、月約147.9万円です。年収約2,695万円を超えると基礎控除がなくなる点、所得税率40%の区分、年収2000万〜4000万円の比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収3000万円の手取りは約1,775.1万円・月約147.9万円【2026年】",
    description: "令和8年の税制・保険料率で年収3000万円の手取りを試算し、基礎控除がなくなる境目と税率を解説しています。",
  },
};

const r = calcTakeHome(30000000);
const o = calcTakeHome(30000000, true);
const steps = [20000000, 25000000, 30000000, 35000000, 40000000].map((y) => calcTakeHome(y));

const faq = [
  {
    q: "年収3000万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与の比率が高い給与体系では、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収3000万円の所得税率は何%ですか？",
    a: `給与所得控除195万円と社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税の速算表では${marginalRate(r.taxable)}%の区分（1,800万円以上4,000万円未満）です。住民税の所得割10%を合わせると、課税所得のうち1,800万円を超える部分には50%（復興特別所得税を除く）がかかります（国税庁 No.2260・当サイト試算）。`,
  },
  {
    q: "年収2500万円を超える人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した給与所得者5,163万人のうち、年収2,500万円超は19.6万人で全体の${shareBand(13)}です。同調査は2,500万円超を1つの階級にまとめているため、3,000万円以上に限った人数は公表されていません。`,
  },
  {
    q: "年収3000万円の会社員は確定申告が必要ですか？",
    a: "必要です。給与の年間収入金額が2,000万円を超える方は年末調整の対象とならず、ご自身で確定申告を行います（国税庁 No.1900）。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-3000man/"
      annual={30000000}
      crumb="年収3000万円の手取り"
      h1="年収3000万円の手取りは約1,775.1万円・月約147.9万円【2026年】"
      lead={
        <>
          <p>
            年収3000万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、{man(30000000 - r.net)}が差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。社会保険料は上限に達しているため、差し引かれる額の約{Math.round(((r.incomeTax + r.residentTax) / (30000000 - r.net)) * 100)}%を税金が占めます。
          </p>
        </>
      }
      compareHeading="年収2000万〜4000万円の手取り比較"
      compare={[20000000, 25000000, 30000000, 35000000, 40000000]}
      compareNote={
        <p>
          年収が500万円増えるごとに、手取りは{steps.slice(1).map((s, i) => man(s.net - steps[i].net)).join("・")}増えます（2000万→2500万円から3500万→4000万円の順・当サイト試算）。
          2500万→3000万円の増加が小さいのは、この間で所得税・住民税の基礎控除がなくなるためです（下の解説を参照）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/tedori-1500man/", label: "年収1500万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/review/jac/", label: "JACリクルートメントの評判と公表データ" },
        { href: "/company/", label: "企業別の平均年収（有価証券報告書）" },
      ]}
    >
      <h2>年収約2,695万円を超えると基礎控除がなくなる</h2>
      <p>
        所得税の基礎控除は、合計所得金額が2,350万円を超えると段階的に減り、<strong>2,500万円を超えると0円</strong>になります（国税庁 No.1199）。
        住民税の基礎控除（最高43万円）も同じく2,500万円超で0円となり、住民税の調整控除も受けられなくなります。
        給与だけの方の合計所得金額は「年収－給与所得控除195万円」のため、年収に換算すると次のとおりです（当サイト計算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">合計所得金額</th>
              <th className="p-3 text-right">給与だけの場合の年収</th>
              <th className="p-3 text-right">所得税の基礎控除</th>
              <th className="p-3 text-right rounded-tr-lg">住民税の基礎控除</th>
            </tr>
          </thead>
          <tbody>
            {[
              { a: "2,350万円以下", b: "2,545万円以下", c: "62万円", d: "43万円" },
              { a: "2,350万円超2,400万円以下", b: "2,545万円超2,595万円以下", c: "48万円", d: "43万円" },
              { a: "2,400万円超2,450万円以下", b: "2,595万円超2,645万円以下", c: "32万円", d: "29万円" },
              { a: "2,450万円超2,500万円以下", b: "2,645万円超2,695万円以下", c: "16万円", d: "15万円" },
              { a: "2,500万円超", b: "2,695万円超", c: "0円", d: "0円" },
            ].map((x) => (
              <tr key={x.a} className={`border-b border-gray-100 ${x.a === "2,500万円超" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{x.a}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.c}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※所得税の基礎控除は国税庁 No.1199（令和8年分）、住民税の基礎控除は地方税法 第314条の2、調整控除は同法 第314条の6によります。年収の列は、給与所得控除195万円を加えて当サイトで換算した目安です。
      </p>
      <p className="text-xs text-text-muted mb-4">
        出典（このページで追加した資料・{"2026年11月17日"}確認）：
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1199 基礎控除</a>／
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1900 給与所得者で確定申告が必要な人</a>／
        <a href="https://laws.e-gov.go.jp/law/325AC0000000226" target="_blank" rel="noopener noreferrer" className="hover:underline">e-Gov法令検索 地方税法</a>
      </p>
      <p className="mb-4">
        年収3000万円の試算では、所得税・住民税とも基礎控除0円で計算しています。年収2,500万円（合計所得金額2,305万円）の方が年収3000万円になると、
        年収の増加500万円に対して手取りの増加は{man(steps[2].net - steps[1].net)}です（当サイト試算）。
      </p>
      <h2>社会保険料は上限に達している</h2>
      <p className="mb-10">
        健康保険の標準報酬月額は139万円が上限（健康保険法 第40条）、厚生年金は65万円が上限です。年収3000万円（月給250万円）ではいずれも上限に当たるため、
        社会保険料は年{yen(r.social)}で、年収に対する割合は{pct(r.social / 30000000)}にとどまります。雇用保険料には上限がなく、賃金の0.5%がかかります。
        年収1000万円以上の求人を扱う転職エージェントは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
