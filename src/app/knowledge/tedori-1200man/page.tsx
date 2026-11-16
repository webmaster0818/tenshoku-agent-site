import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, marginalRate } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-1200man/" },
  title: "年収1200万円の手取りは約856.1万円・月約71.3万円【2026年・令和8年の税制で試算】",
  description:
    "年収1200万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約856.1万円（約71.3%）、月約71.3万円です。年収1,195万円を超えると配偶者控除・配偶者特別控除が受けられなくなる点、年収1000万〜1400万円の比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収1200万円の手取りは約856.1万円・月約71.3万円【2026年】",
    description: "令和8年の税制・保険料率で年収1200万円の手取りを試算し、配偶者控除の所得制限との関係を解説しています。",
  },
};

const r = calcTakeHome(12000000);
const o = calcTakeHome(12000000, true);
const steps = [10000000, 11000000, 12000000, 13000000, 14000000].map((y) => calcTakeHome(y));

const faq = [
  {
    q: "年収1200万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与を含む年収1200万円の場合、毎月の手取りはこれより少なく、賞与月に多くなります。`,
  },
  {
    q: "年収1200万円だと配偶者控除は受けられますか？",
    a: "受けられません。配偶者控除・配偶者特別控除は、控除を受ける本人の合計所得金額が1,000万円以下であることが要件です（国税庁 No.1191・No.1195）。給与だけの場合、令和8年分の給与所得控除（年収850万円超は195万円）を差し引くと、年収1,195万円を超えたところで合計所得金額が1,000万円を超えます（当サイト計算）。",
  },
  {
    q: "年収1200万円の所得税率は何%ですか？",
    a: `給与所得控除195万円・基礎控除62万円・社会保険料控除を差し引いた課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税の速算表では${marginalRate(r.taxable)}%の区分（695万円以上900万円未満）です。所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}、住民税は年${yen(r.residentTax)}です（当サイト試算）。`,
  },
  {
    q: "年収1000万円を超える人の割合は？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表から当サイトで集計すると、年収1,000万円を超える給与所得者は全体の${shareAbove(1000)}です。同調査の階級は「1,000万円超1,500万円以下」のため、1,200万円前後に限った割合は公表されていません。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-1200man/"
      annual={12000000}
      crumb="年収1200万円の手取り"
      h1="年収1200万円の手取りは約856.1万円・月約71.3万円【2026年】"
      lead={
        <>
          <p>
            年収1200万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、{man(12000000 - r.net)}が税金と社会保険料として差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。年収1000万円と比べると、年収が200万円増えても手取りの増加は{man(r.net - steps[0].net)}にとどまります。
          </p>
        </>
      }
      compareHeading="年収1000万〜1400万円の手取り比較"
      compare={[10000000, 11000000, 12000000, 13000000, 14000000]}
      compareNote={
        <p>
          この範囲では、年収が100万円増えるごとに手取りは
          {steps.slice(1).map((s, i) => `${man(s.net - steps[i].net)}`).join("・")}増えます（1000万→1100万円から1300万→1400万円の順・当サイト試算）。
          年収約1,301万円を超えると課税所得が900万円以上となり、所得税率が33%の区分に入るため、1300万→1400万円の増加幅が小さくなります。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/knowledge/tedori-1500man/", label: "年収1500万円の手取り" },
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/tedori-gesshu-40man/", label: "手取り40万円の額面（月額から逆算）" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
        { href: "/review/jac/", label: "JACリクルートメントの評判と公表データ" },
      ]}
    >
      <h2>年収1,195万円を超えると配偶者控除・配偶者特別控除がなくなる</h2>
      <p>
        配偶者控除と配偶者特別控除は、控除を受ける本人の合計所得金額が1,000万円以下の場合に限られます（国税庁 No.1191・No.1195）。
        給与だけの方の合計所得金額は「年収－給与所得控除（年収850万円超は195万円）」のため、<strong>年収1,195万円が境目</strong>になります（当サイト計算）。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">本人の合計所得金額</th>
              <th className="p-3 text-right">給与だけの場合の年収</th>
              <th className="p-3 text-right rounded-tr-lg">配偶者控除（一般の控除対象配偶者）</th>
            </tr>
          </thead>
          <tbody>
            {[
              { a: "900万円以下", b: "1,095万円以下", c: "38万円" },
              { a: "900万円超950万円以下", b: "1,095万円超1,145万円以下", c: "26万円" },
              { a: "950万円超1,000万円以下", b: "1,145万円超1,195万円以下", c: "13万円" },
              { a: "1,000万円超", b: "1,195万円超", c: "受けられない" },
            ].map((x) => (
              <tr key={x.a} className={`border-b border-gray-100 ${x.a === "1,000万円超" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{x.a}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                <td className="p-3 text-right whitespace-nowrap">{x.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※控除額は国税庁 No.1191（令和8年分）の表によります。年収の列は、給与所得控除195万円を加えて当サイトで換算した目安です。配偶者の合計所得金額が62万円以下（給与だけの場合は年収136万円以下）であることなど、配偶者側の要件もあります。
      </p>
      <p className="text-xs text-text-muted mb-4">
        出典（このページで追加した資料・{"2026年11月16日"}確認）：
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1191 配偶者控除</a>／
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm" target="_blank" rel="noopener noreferrer" className="hover:underline">国税庁 No.1195 配偶者特別控除</a>
      </p>
      <p className="mb-10">
        上の手取り試算は独身の前提のため、配偶者控除の影響は含んでいません。配偶者控除を受けている方が年収1,195万円を超える会社に転職すると、控除がなくなる分だけ税金が増えます。
        年収1000万円以上の求人を扱う転職エージェントは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>に掲載しています。
      </p>
    </TakeHomePage>
  );
}
