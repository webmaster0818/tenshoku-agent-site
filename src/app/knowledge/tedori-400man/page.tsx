import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, shareBand, NTA_R7 } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-400man/" },
  title: "年収400万円の手取りは約316万円・月約26.4万円【2026年・令和8年の税制で試算】",
  description:
    "年収400万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約316万円（約79.2%）、月約26.4万円です。年収300万〜500万円との比較、国税庁統計での位置づけも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収400万円の手取りは約316万円・月約26.4万円【2026年】",
    description: "令和8年の税制・保険料率で年収400万円の手取りを試算し、内訳と根拠を掲載しています。",
  },
};

const r = calcTakeHome(4000000);
const o = calcTakeHome(4000000, true);

const faq = [
  {
    q: "年収400万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与が年2回ある会社では月給が低くなるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収400万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、300万円超400万円以下が${shareBand(3)}で最も多い階級です。400万円を超える人の割合は${shareAbove(400)}で、年収400万円は給与所得者のほぼ中ほどに位置します（人数から当サイトで集計）。`,
  },
  {
    q: "年収400万円の所得税はいくらですか？",
    a: `令和8年分の制度では、給与所得控除124万円・基礎控除104万円・社会保険料控除を差し引いた課税所得が${r.taxable.toLocaleString("ja-JP")}円となり、所得税（復興特別所得税を含む）は年${r.incomeTax.toLocaleString("ja-JP")}円です（当サイト試算）。令和7年分の基礎控除（88万円）で計算した場合より約8千円少なくなります。`,
  },
  {
    q: "住民税は1年目からかかりますか？",
    a: "住民税は前年1〜12月の所得に対して、翌年6月から課税されます。新卒1年目は前年の所得がないため原則としてかからず、転職した年は前年の所得にもとづく住民税を納めます。当ページの住民税は、同じ年収が翌年も続いた場合の年額です。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-400man/"
      annual={4000000}
      crumb="年収400万円の手取り"
      h1="年収400万円の手取りは約316万円・月約26.4万円【2026年】"
      lead={
        <>
          <p>
            年収400万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残ります。
          </p>
          <p className="mt-2">
            差し引かれる{man(4000000 - r.net)}のうち、約{Math.round((r.social / (4000000 - r.net)) * 100)}%が社会保険料（{man(r.social)}）です。
            この年収帯では所得税（年{man(r.incomeTax)}）より住民税（年{man(r.residentTax)}）のほうが多くなります。
          </p>
        </>
      }
      compareHeading="年収300万〜500万円の手取り比較"
      compare={[3000000, 3500000, 4000000, 4500000, 5000000]}
      compareNote={
        <p>
          年収300万円から500万円の範囲では、手取りの割合は80.0%から78.8%へ緩やかに下がります。
          この範囲は所得税の税率が5%の区分（課税所得195万円未満）に収まるため、税負担の増え方が小さく、
          年収が50万円増えると手取りはおおむね38万〜39万円増えます（当サイト試算）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-500man/", label: "年収500万円の手取り" },
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/age/20s/", label: "20代向けの転職エージェント" },
        { href: "/type/second-new-grad/", label: "第二新卒向けの転職エージェント" },
        { href: "/knowledge/annual-holidays-120/", label: "年間休日120日は多い？厚労省調査の分布" },
      ]}
    >
      <h2>社会保険料が手取りに与える影響</h2>
      <p>
        年収400万円（月給約33.3万円）の標準報酬月額は34万円です（健康保険法 第40条・報酬月額33万円以上35万円未満）。
        健康保険・厚生年金の保険料はこの34万円に料率を掛けて決まるため、月給が33万円台であれば、33万円ちょうどでも34.9万円でも保険料は同じです。
      </p>
      <p className="mb-10">
        健康保険料は加入先によって異なります。協会けんぽの令和8年度料率は都道府県ごとに9.21%（新潟県）から10.55%（佐賀県）まで差があり、
        健康保険組合に加入している会社では料率がさらに異なります。転職先を比べる際は、求人票の年収に加えて加入する健康保険も確認することをおすすめします。
        国税庁の統計による平均給与（{NTA_R7.average}）との比較は<Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link>のページに掲載しています。
      </p>
    </TakeHomePage>
  );
}
