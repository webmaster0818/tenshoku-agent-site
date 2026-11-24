import type { Metadata } from "next";
import Link from "next/link";
import TakeHomePage from "@/components/TakeHomePage";
import { calcTakeHome, man, pct, yen, shareAbove, shareBand, marginalRate } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES, shokushuAnnual } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-1600man/" },
  title: "年収1600万円の手取りは約1,077.9万円・月約89.8万円【2026年・令和8年の税制で試算】職種別の平均年収との比較",
  description:
    "年収1600万円の手取りを令和8年分の税制と協会けんぽ東京支部の令和8年度料率で試算しました。独身・40歳未満で年約1,077.9万円（約67.4%）、月約89.8万円です。健康保険料の上限との関係、年収1500万円からの増加分の手取り、職種別の平均年収との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収1600万円の手取りは約1,077.9万円・月約89.8万円【2026年】",
    description: "令和8年の税制・保険料率で年収1600万円の手取りを試算し、保険料の上限、職種別の平均年収との比較を整理しています。",
  },
};

const ANNUAL = 16000000;
const r = calcTakeHome(ANNUAL);
const o = calcTakeHome(ANNUAL, true);
const steps = [14000000, 15000000, 16000000, 16260000, 17000000, 18000000].map((y) => calcTakeHome(y));
const r1500 = calcTakeHome(15000000);

// 職種別の平均年収（当サイト計算＝所定内給与額×12＋年間賞与その他特別給与額）
const top = SHOKUSHU.map((x) => ({ k: x.k, a: shokushuAnnual(x.t[0], x.t[1]) })).sort((p, q) => q.a - p.a).slice(0, 5);
const top4549 = SHOKUSHU.filter((x) => x.a4549)
  .map((x) => ({ k: x.k, a: shokushuAnnual(x.a4549![0], x.a4549![1]) }))
  .sort((p, q) => q.a - p.a)
  .slice(0, 6);
const nAll = SHOKUSHU.filter((x) => shokushuAnnual(x.t[0], x.t[1]) >= 1600).length;
const n4549 = SHOKUSHU.filter((x) => x.a4549 && shokushuAnnual(x.a4549[0], x.a4549[1]) >= 1600).length;
const fmtMan = (v: number) => `${v.toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

const faq = [
  {
    q: "年収1600万円の手取りは月いくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、40歳未満は月${man(r.netMonthly)}、40〜64歳は月${man(o.netMonthly)}が目安です（当サイト試算）。賞与の比率が高い給与体系では、毎月の手取りはこれより少なくなります。`,
  },
  {
    q: "年収1600万円の所得税率は何%ですか？",
    a: `課税所得は${r.taxable.toLocaleString("ja-JP")}円で、所得税の速算表では${marginalRate(r.taxable)}%の区分（900万円以上1,800万円未満）です。所得税（復興特別所得税を含む）は年${yen(r.incomeTax)}、住民税は年${yen(r.residentTax)}です（国税庁 No.2260・当サイト試算）。`,
  },
  {
    q: "年収1500万円から1600万円に上がると手取りはいくら増えますか？",
    a: `この試算の前提では、年収1500万円の手取り${man(r1500.net)}に対し、年収1600万円は${man(r.net)}で、増えた100万円のうち${man(r.net - r1500.net)}が手元に残ります（当サイト試算）。所得税33%・住民税10%に加えて、健康保険料もまだ上限に達していないため、増加分の半分近くが税金と社会保険料になります。`,
  },
  {
    q: "年収1600万円の人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」第16表では、1年を通じて勤務した給与所得者のうち、年収1,500万円超2,000万円以下は${shareBand(11)}、1,500万円を超える人は${shareAbove(1500)}です（当サイトで構成割合を計算）。`,
  },
];

export default function Page() {
  return (
    <TakeHomePage
      path="/knowledge/tedori-1600man/"
      annual={ANNUAL}
      crumb="年収1600万円の手取り"
      h1="年収1600万円の手取りは約1,077.9万円・月約89.8万円【2026年】"
      lead={
        <>
          <p>
            年収1600万円の手取りは、<strong>40歳未満で年{man(r.net)}（月{man(r.netMonthly)}）</strong>、
            40〜64歳で年{man(o.net)}です。手取りの割合は{pct(r.rate)}で、{man(ANNUAL - r.net)}が税金と社会保険料として差し引かれます。
          </p>
          <p className="mt-2">
            内訳は社会保険料{man(r.social)}、所得税{man(r.incomeTax)}、住民税{man(r.residentTax)}です。年収1600万円（月約133.3万円）の健康保険料は標準報酬月額133万円で計算され、上限の139万円に達するのは年収約1,626万円からです（当サイト試算）。
          </p>
        </>
      }
      compareHeading="年収1400万〜1800万円の手取り比較"
      compare={[14000000, 15000000, 16000000, 17000000, 18000000]}
      compareNote={
        <p>
          年収1400万円から1600万円までは、100万円増えるごとに手取りは{man(steps[1].net - steps[0].net)}・{man(steps[2].net - steps[1].net)}増えます（当サイト試算）。
          年収1500万円から1600万円では、所得税33%・住民税10%の区分に加えて健康保険料も増えるため、増えた100万円のおよそ46%が税金と社会保険料として差し引かれます。
        </p>
      }
      faq={faq}
      related={[
        { href: "/knowledge/tedori-1500man/", label: "年収1500万円の手取り" },
        { href: "/knowledge/tedori-1800man/", label: "年収1800万円の手取り" },
        { href: "/knowledge/tedori-2000man/", label: "年収2000万円の手取り" },
        { href: "/knowledge/gesshu-80man-tedori/", label: "月収80万円の手取り" },
        { href: "/knowledge/gesshu-100man-tedori/", label: "月収100万円の手取り" },
        { href: "/knowledge/shokugyo-nenshu-ranking/", label: "職業別の年収ランキング" },
        { href: "/type/high-class/", label: "ハイクラス向けの転職エージェント" },
      ]}
    >
      <h2>年収1600万円は健康保険料が上限に達する直前</h2>
      <p>
        健康保険の標準報酬月額は、報酬月額129.5万円以上135.5万円未満が133万円、135.5万円以上が上限の139万円です（健康保険法 第40条）。
        年収1600万円を12等分した月約133.3万円は133万円の区分にあたり、上限まであと1区分です。厚生年金は標準報酬月額65万円が上限のため（日本年金機構 厚生年金保険料額表）、年収約762万円で上限に達しています。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-3 text-left rounded-tl-lg">年収</th>
              <th className="p-3 text-right">健康保険の標準報酬月額</th>
              <th className="p-3 text-right">社会保険料（年額）</th>
              <th className="p-3 text-right">所得税率の区分</th>
              <th className="p-3 text-right rounded-tr-lg">手取り（年額）</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s) => (
              <tr key={s.annual} className={`border-b border-gray-100 ${s.annual === ANNUAL ? "bg-teal/5 font-bold text-navy" : ""}`}>
                <td className="p-3">{(s.annual / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{(s.grade / 10000).toLocaleString("ja-JP")}万円</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(s.social)}</td>
                <td className="p-3 text-right whitespace-nowrap">{marginalRate(s.taxable)}%</td>
                <td className="p-3 text-right whitespace-nowrap">{man(s.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-10">
        当サイトの試算（40歳未満・賞与なし）では、年収約1,626万円以上で健康保険料が年{yen(steps[3].health)}となり、それ以上は変わりません。上限に達した後の考え方は<Link href="/knowledge/tedori-1800man/" className="text-teal font-bold hover:underline">年収1800万円の手取り</Link>で解説しています。
        実際の保険料は4月〜6月の報酬の平均で決まる標準報酬月額と、賞与ごとの標準賞与額で計算されるため、賞与の比率が高い場合は上の試算と異なります。
      </p>

      <h2>職種別の平均年収と比べた年収1600万円の水準</h2>
      <p>
        厚生労働省「令和7年 賃金構造基本統計調査」の職種別集計（144職種）から、所定内給与額の12か月分と年間賞与その他特別給与額を足して平均年収を計算し、高い順に並べました（当サイト計算）。
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（全年齢）</th>
                <th className="p-3 text-right rounded-tr-lg">平均年収</th>
              </tr>
            </thead>
            <tbody>
              {top.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${x.a >= 1600 ? "bg-teal/10 font-bold text-navy" : ""}`}>{fmtMan(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（45〜49歳）</th>
                <th className="p-3 text-right rounded-tr-lg">平均年収</th>
              </tr>
            </thead>
            <tbody>
              {top4549.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${x.a >= 1600 ? "bg-teal/10 font-bold text-navy" : ""}`}>{fmtMan(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-text-muted mb-4">
        ※出典：
        {SHOKUSHU_SOURCES.map((s, i) => (
          <span key={s.url}>
            {i > 0 && "、"}
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{s.label}</a>
          </span>
        ))}
        （一般労働者・産業計・企業規模10人以上・男女計）。{SHOKUSHU_CHECKED}にe-Statで取得。所定内給与額は令和7年6月分、年間賞与その他特別給与額は令和6年1年間の値で、年収は当サイトの計算です。1,600万円以上の欄を色付けしています。
      </p>
      <p className="mb-10">
        全年齢の平均では、年収1600万円を超える職種は{nAll === 0 ? "なく" : `${nAll}職種で`}、最も高い航空機操縦士でも{fmtMan(top[0].a)}です。45〜49歳に限ると、平均で1600万円を超えるのは{n4549}職種（航空機操縦士・その他の経営・金融・保険専門職業従事者）です。
        職種別の平均で見る限り、年収1600万円はどの職種でも上位の水準です。なお、管理的職業従事者（課長相当以上の管理職や役員など）の全年齢の平均年収は当サイト計算で約956.3万円です。
        年収1500万円以上の求人を扱う転職サービスは<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link>にまとめています。
      </p>
    </TakeHomePage>
  );
}
