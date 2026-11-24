import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man } from "@/data/take-home";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES, shokushuAnnual } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/20dai-nenshu-500man/" },
  title: "20代で年収500万円は平均より約75万円高い水準・25〜29歳の平均が500万円を超える職種は10【令和7年 統計から算出】",
  description:
    "20代で年収500万円の水準を国税庁と厚生労働省の令和7年の統計で確認しました。25〜29歳の平均給与は425万円で、500万円は約75万円上回ります。25〜29歳の平均年収が500万円以上の10職種、学歴別・企業規模別の値、手取りも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "20代で年収500万円は平均より約75万円高い水準【令和7年 統計から算出】",
    description: "国税庁・厚生労働省の統計から、20代の年収500万円の水準と、平均が500万円を超える職種を算出しています。",
  },
};

const CHECKED = SHOKUSHU_CHECKED;

// 国税庁「令和7年分 民間給与実態統計調査」年齢階層別の平均給与（1年を通じて勤務した給与所得者・万円）
const NTA = { a2024: 280, a2529: 425, m2529: 460, f2529: 383 };

// e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・民営事業所）25〜29歳・男女計の [所定内給与額, 年間賞与]（千円）
const EDU = [
  { k: "高校卒", v: [251.7, 610.7] },
  { k: "専門学校卒", v: [266.8, 589.6] },
  { k: "高専・短大卒", v: [277.2, 797.7] },
  { k: "大学卒", v: [296.4, 853.0] },
  { k: "大学院卒", v: [335.0, 1085.5] },
];
const SIZE = [
  { k: "1,000人以上", v: [301.7, 917.0] },
  { k: "100〜999人", v: [270.6, 678.7] },
  { k: "10〜99人", v: [258.2, 505.6] },
];
const ALL2529 = shokushuAnnual(279.4, 727.2);

const job2529 = SHOKUSHU.filter((x) => x.a2529)
  .map((x) => ({ k: x.k, a: shokushuAnnual(x.a2529![0], x.a2529![1]), w: x.a2529![2] }))
  .sort((p, q) => q.a - p.a);
const over500 = job2529.filter((x) => x.a >= 500);
const job2024 = SHOKUSHU.filter((x) => x.a2024)
  .map((x) => ({ k: x.k, a: shokushuAnnual(x.a2024![0], x.a2024![1]) }))
  .sort((p, q) => q.a - p.a);
const over500_2024 = job2024.filter((x) => x.a >= 500);

const th = calcTakeHome(5000000);
const f1 = (v: number) => `約${v.toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

const faq = [
  {
    q: "20代で年収500万円はすごいですか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、25〜29歳の平均給与は${NTA.a2529}万円、20〜24歳は${NTA.a2024}万円です。年収500万円は25〜29歳の平均を${500 - NTA.a2529}万円、20〜24歳の平均を${500 - NTA.a2024}万円上回る水準です。いずれも残業代や賞与を含む1年間の給与の平均です。`,
  },
  {
    q: "20代で平均年収が500万円を超える職種は何ですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別・年齢階級別の値から当サイトで算出すると、25〜29歳の平均年収が500万円以上の職種は144職種中${over500.length}職種です。上位は${over500.slice(0, 3).map((x) => `${x.k}（${f1(x.a)}）`).join("、")}です。20〜24歳で500万円以上は${over500_2024.map((x) => x.k).join("・")}の${over500_2024.length}職種です。`,
  },
  {
    q: "大企業に勤める20代の平均年収は500万円を超えますか？",
    a: `同調査で企業規模1,000人以上の25〜29歳（男女計・学歴計）は${f1(shokushuAnnual(301.7, 917.0))}で、500万円には届きません。学歴別では、25〜29歳の大学院卒が${f1(shokushuAnnual(335.0, 1085.5))}で、500万円を上回る唯一の区分です（当サイト計算・残業代を含まない）。`,
  },
  {
    q: "年収500万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、年収500万円の手取りは年${man(th.net)}、月${man(th.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "国税庁「令和7年分 民間給与実態統計調査」第14図 年齢階層別の平均給与", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（学歴、年齢階級、勤続年数階級別・企業規模別）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  ...SHOKUSHU_SOURCES,
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "20代で年収500万円の水準" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            20代で年収500万円は平均より約75万円高い水準・25〜29歳の平均が500万円を超える職種は10【令和7年 統計から算出】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `${NTA.a2529}万円`, l: "25〜29歳の平均給与（国税庁）" },
              { v: `${NTA.a2024}万円`, l: "20〜24歳の平均給与（国税庁）" },
              { v: `${over500.length}職種`, l: "25〜29歳の平均年収が500万円以上の職種（144職種中）" },
              { v: f1(shokushuAnnual(301.7, 917.0)), l: "1,000人以上の企業の25〜29歳（当サイト計算）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            20代で年収500万円は、<strong>25〜29歳の平均給与（425万円）を約75万円上回る水準</strong>です。20〜24歳の平均（280万円）と比べると220万円高くなります。
            厚生労働省の統計で職種別に見ると、25〜29歳の平均年収が500万円以上の職種は144職種中{over500.length}職種にとどまり、企業規模1,000人以上の25〜29歳の平均（{f1(shokushuAnnual(301.7, 917.0))}）も500万円に届きません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：国税庁・厚生労働省の公表統計（{CHECKED}に当サイトで確認）。賃金構造基本統計調査の年収は「所定内給与額×12＋年間賞与その他特別給与額」で当サイトが計算した値で、残業代を含みません。
            国税庁の平均給与は残業代を含む1年間の給与総額のため、2つの統計の値は一致しません。
          </p>
        </div>

        <h2>25〜29歳の平均年収が500万円以上の職種</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">職種（25〜29歳）</th>
                <th className="p-3 text-right">労働者数（推計）</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {over500.map((x, i) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.w * 10).toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold">{f1(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査（職種）第5表（一般労働者・産業計・企業規模計・男女計）の25〜29歳から当サイト計算。労働者数は十人単位の推計値を人に換算したもので、
          大学准教授のように推計が数十人の職種は、標本が少なく値の振れが大きい点にご注意ください。
        </p>
        <p className="mb-10">
          25〜29歳で500万円以上の職種は、航空機操縦士・医師・公認会計士などの資格職と、管理的職業従事者、システムコンサルタント・設計者が中心です。資格を必要としない職種では、
          システムコンサルタント・設計者（推計{((over500.find((x) => x.k === "システムコンサルタント・設計者")?.w ?? 0) * 10).toLocaleString("ja-JP")}人）が最も人数が多く、{f1(over500.find((x) => x.k === "システムコンサルタント・設計者")?.a ?? 0)}です。
          次点は{job2529[over500.length].k}（{f1(job2529[over500.length].a)}）、{job2529[over500.length + 1].k}（{f1(job2529[over500.length + 1].a)}）で、500万円まであと数万円の水準です。
          職種別の平均年収の全体は<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>にまとめています。
        </p>

        <h2>25〜29歳の学歴別・企業規模別の平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分（25〜29歳・男女計）</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">全体（学歴計・企業規模計）</td>
                <td className="p-3 text-right">279.4千円</td>
                <td className="p-3 text-right">727.2千円</td>
                <td className="p-3 text-right">{f1(ALL2529)}</td>
              </tr>
              {[...EDU, ...SIZE].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.v[0].toFixed(1)}千円</td>
                  <td className="p-3 text-right">{x.v[1].toFixed(1)}千円</td>
                  <td className={`p-3 text-right ${shokushuAnnual(x.v[0], x.v[1]) >= 500 ? "font-bold text-teal" : ""}`}>{f1(shokushuAnnual(x.v[0], x.v[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・民営事業所）。学歴別は企業規模計、企業規模別は学歴計の値です。</p>
        <p className="mb-10">
          学歴別・企業規模別の区分で、25〜29歳の平均年収が500万円を上回るのは大学院卒（{f1(shokushuAnnual(335.0, 1085.5))}）だけです。大学卒は{f1(shokushuAnnual(296.4, 853.0))}、企業規模1,000人以上は{f1(shokushuAnnual(301.7, 917.0))}で、
          500万円との差はそれぞれ約59万円・約46万円です。賞与を除いた所定内給与額で比べると、500万円を賞与なしで受け取るには月約41.7万円が必要で、25〜29歳の平均（月27.9万円）の約1.5倍です（当サイト計算）。
        </p>

        <h2>年収500万円の手取り</h2>
        <p className="mb-10">
          東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、年収500万円の手取りは年{man(th.net)}、月{man(th.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。
          社会保険料・所得税・住民税の内訳と、扶養の有無による違いは<Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link>で解説しています。
          20代で年収を上げる転職を検討する場合は、<Link href="/age/20s/" className="text-teal font-bold hover:underline">20代におすすめの転職エージェント</Link>と
          <Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">年収アップ実績の比較</Link>もご覧ください。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link></li>
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link></li>
          <li><Link href="/knowledge/tedori-gesshu-22man/" className="text-teal font-bold hover:underline">手取り22万円の額面</Link></li>
          <li><Link href="/knowledge/nenshu-500man-josei/" className="text-teal font-bold hover:underline">年収500万円を超える女性の割合</Link></li>
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
          <li><Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒向けの転職エージェント</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
