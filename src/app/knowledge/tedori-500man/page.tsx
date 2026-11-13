import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, shareAbove, shareBand, NTA_R7 } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-500man/" },
  title: "年収500万円の手取りは約394万円・月約32.8万円【2026年・令和8年の税制で試算】",
  description:
    "年収500万円の手取りを、令和8年分の基礎控除・給与所得控除と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約394万円（約78.8%）、月約32.8万円です。40歳以上の場合、令和7年の制度との差、国税庁統計での位置づけも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収500万円の手取りは約394万円・月約32.8万円【2026年】",
    description: "令和8年の税制・保険料率で年収500万円の手取りを試算し、内訳と根拠を掲載しています。",
  },
};

const r = calcTakeHome(5000000);
const o = calcTakeHome(5000000, true);

const faq = [
  {
    q: "年収500万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与がある場合は月給が下がるため、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収500万円は平均より高いですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者の平均給与は${NTA_R7.average}です。年収500万円はこれをやや上回り、500万円を超える人の割合は${shareAbove(500)}です（同調査 第16表から当サイトで集計）。`,
  },
  {
    q: "2026年（令和8年）の税制改正で手取りは増えますか？",
    a: "増えます。令和8年分から所得税の基礎控除が引き上げられ、年収500万円（合計所得金額356万円）の基礎控除は令和7年分の68万円から104万円になります。当サイトの試算では、所得税は年約2.9万円少なくなります。住民税の基礎控除（43万円）は変わりません。",
  },
  {
    q: "扶養家族がいる場合の手取りはどうなりますか？",
    a: "配偶者控除や扶養控除を受けられる場合は、所得税・住民税が少なくなるため、手取りは当ページの試算より多くなります。控除額は配偶者・扶養親族の所得や年齢によって異なるため、国税庁の各控除の案内でご確認ください。",
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-500man/"
      annual={5000000}
      crumb="年収500万円の手取り"
      h1="年収500万円の手取りは約394万円・月約32.8万円【2026年】"
      lead={
        <>
          <p>
            年収500万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            介護保険料がかかる40〜64歳で年{man(o.net)}です。年収の{pct(r.rate)}が手元に残り、
            残りの{man(5000000 - r.net)}は社会保険料（{man(r.social)}）と所得税・住民税（{man(r.incomeTax + r.residentTax)}）です。
          </p>
          <p className="mt-2">
            令和8年分は所得税の基礎控除が引き上げられたため、令和7年の制度で計算した場合より所得税が年約2.9万円少なくなります。
          </p>
        </>
      }
      compareHeading="年収450万〜600万円の手取り比較"
      compare={[4500000, 5000000, 5500000, 6000000]}
      compareNote={
        <p>
          年収が50万円増えるごとに、手取りはおおむね34万〜39万円増えます。年収500万円から550万円では、月給が41.6万円から45.8万円になり、
          標準報酬月額が41万円から47万円へ2段階上がるため、社会保険料の増え方が大きくなります（健康保険法 第40条の等級区分による）。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-400man/", label: "年収400万円の手取り" },
        { href: "/knowledge/tedori-600man/", label: "年収600万円の手取り" },
        { href: "/knowledge/tedori-1000man/", label: "年収1000万円の手取り" },
        { href: "/compare/salary-up/", label: "転職エージェント各社の年収アップ実績の比較" },
        { href: "/company/", label: "企業別の平均年収（有価証券報告書）" },
        { href: "/knowledge/annual-holidays-120/", label: "年間休日120日は多い？厚労省調査の分布" },
      ]}
    >
      <h2>国税庁の統計で見る年収500万円の位置</h2>
      <p>
        国税庁「令和7年分 民間給与実態統計調査」によると、1年を通じて勤務した給与所得者5,163万人の平均給与は{NTA_R7.average}です。
        給与階級別では、400万円超500万円以下が{shareBand(4)}、500万円超600万円以下が{shareBand(5)}で、
        <strong>500万円を超える人は全体の{shareAbove(500)}</strong>です（第16表の人数から当サイトで集計）。
      </p>
      <p className="mb-10">
        この統計の給与には賞与が含まれ、通勤手当の非課税分は含まれません。転職で年収500万円以上を目指す場合は、
        求人票の年収に賞与・残業代・固定残業代が含まれているかを確認したうえで比較することをおすすめします。
        業界ごとの平均年収は<Link href="/company/maker-salary/" className="text-teal font-bold hover:underline">メーカーの年収ランキング</Link>などに掲載しています。
      </p>
    </TakeHomePage>
  );
}
