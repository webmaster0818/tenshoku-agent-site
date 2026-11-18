import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/programmer-nenshu/" },
  title: "プログラマーの平均年収は約538万円【令和7年 賃金構造基本統計調査】年齢別・企業規模別",
  description:
    "プログラマーの平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の職種「ソフトウェア作成者」の所定内給与額と年間賞与から算出しました。男女計で約538万円（平均年齢37.1歳）です。年齢別・企業規模別・男女別と、システムコンサルタント・設計者との比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "プログラマーの平均年収は約538万円【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省の賃金構造基本統計調査（職種：ソフトウェア作成者）から、プログラマーの平均年収を年齢・企業規模・男女別に算出しています。",
  },
};

const CHECKED = "2026年11月18日";

// 厚生労働省「令和7年 賃金構造基本統計調査」一般労働者・産業計
// （職種）第1表・第5表 職種（小分類）「ソフトウェア作成者」（千円）
// m＝所定内給与額（6月分）、b＝年間賞与その他特別給与額（前年1年間）
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

const PG = { m: 356.8, b: 1095.1, kimatte: 390.8, age: 37.1, tenure: 9.9, overtime: 12, workers: 81786 };
const PG_MALE = { m: 366.7, b: 1145.4 };
const PG_FEM = { m: 321.0, b: 912.1 };

const ages = [
  { k: "20〜24歳", m: 257.7, b: 358.8 },
  { k: "25〜29歳", m: 299.6, b: 861.9 },
  { k: "30〜34歳", m: 347.7, b: 981.2 },
  { k: "35〜39歳", m: 391.2, b: 1217.9 },
  { k: "40〜44歳", m: 407.1, b: 1459.3 },
  { k: "45〜49歳", m: 433.0, b: 1608.9 },
  { k: "50〜54歳", m: 436.9, b: 1531.3 },
  { k: "55〜59歳", m: 426.8, b: 1622.6 },
  { k: "60〜64歳", m: 399.8, b: 1298.8 },
];

const sizes = [
  { k: "1,000人以上", m: 370.4, b: 1385.9 },
  { k: "100〜999人", m: 350.7, b: 950.3 },
  { k: "10〜99人", m: 344.8, b: 855.1 },
];

const jobs = [
  { k: "ソフトウェア作成者（プログラマー）", m: 356.8, b: 1095.1, age: 37.1 },
  { k: "システムコンサルタント・設計者", m: 506.8, b: 2385.2, age: 38.3 },
  { k: "その他の情報処理・通信技術者", m: 379.1, b: 1108.0, age: 42.2 },
];
// 同調査 一般労働者・産業計・学歴計（結果の概況 第1表の賃金340.6千円）と産業大分類 第2表の年間賞与
const ALL = { m: 340.6, b: 1009.6 };

const P = annual(PG.m, PG.b);

const faq = [
  {
    q: "プログラマーの平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種「ソフトウェア作成者」（一般労働者・男女計）の所定内給与額は月35.68万円、年間賞与その他特別給与額は109.51万円です。所定内給与額の12か月分と賞与を合計すると${f1(P)}です（当サイト計算）。残業代を含む「きまって支給する現金給与額」（月39.08万円）で計算すると${f1(annual(PG.kimatte, PG.b))}です。`,
  },
  {
    q: "統計の「ソフトウェア作成者」はプログラマーのことですか？",
    a: "厚生労働省が調査対象の事業所向けに公表している「業種別主な職種早見表」では、情報サービス業の「社内システムエンジニア、プログラマー、CGプログラマー」を職種番号1104「ソフトウェア作成者」に分類するよう案内しています。システムアナリストやシステムコンサルタントは別の職種「システムコンサルタント・設計者」に分類されます。",
  },
  {
    q: "プログラマーの年収は何歳まで上がりますか？",
    a: `同調査の年齢階級別では、45〜49歳が${f1(annual(433.0, 1608.9))}、55〜59歳が${f1(annual(426.8, 1622.6))}で、40代後半以降はほぼ横ばいです（当サイト計算）。同じ人を追跡した数値ではなく、各年齢階級に在職している人の平均です。`,
  },
  {
    q: "プログラマーとシステムエンジニアの年収の差はどのくらいですか？",
    a: `同調査では「システムコンサルタント・設計者」が${f1(annual(506.8, 2385.2))}で、ソフトウェア作成者との差は${f1(annual(506.8, 2385.2) - P)}です（当サイト計算）。差の多くは年間賞与（238.52万円と109.51万円）によるものです。ただし、事業所ごとに職種の呼び方が異なるため、求人の「SE」がどちらの区分にあたるかは仕事内容で判断する必要があります。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第5表「職種（小分類）、年齢階級別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421120" },
  { label: "厚生労働省「令和8年 賃金構造基本統計調査 業種別主な職種早見表」（プログラマー→1104 ソフトウェア作成者）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" },
  { label: "厚生労働省「賃金構造基本統計調査 主な用語の定義」（集計職種区分一覧表）", url: "https://www.mhlw.go.jp/toukei/list/dl/chingin_yougo.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・学歴計の年間賞与その他特別給与額）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "プログラマーの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            プログラマーの平均年収は約538万円【令和7年 賃金構造基本統計調査】年齢別・企業規模別
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(P), l: "平均年収（男女計・残業代を除く）" },
              { v: f1(annual(PG.kimatte, PG.b)), l: "残業代を含めた場合" },
              { v: `${PG.age}歳`, l: "平均年齢" },
              { v: `${PG.tenure}年`, l: "平均勤続年数" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、プログラマー（統計上の職種名は「ソフトウェア作成者」）の平均年収は<strong>{f1(P)}</strong>です（一般労働者・男女計）。
            男性は{f1(annual(PG_MALE.m, PG_MALE.b))}、女性は{f1(annual(PG_FEM.m, PG_FEM.b))}で、一般労働者全体（{f1(annual(ALL.m, ALL.b))}）を{f1(P - annual(ALL.m, ALL.b))}上回ります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。「残業代を含めた場合」は、所定内給与額の代わりに超過労働給与を含む「きまって支給する現金給与額」を使っています。
            統計値は{CHECKED}に厚生労働省・e-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>統計上の「プログラマー」の範囲</h2>
        <p>
          賃金構造基本統計調査には「プログラマー」という名称の職種区分はありません。
          厚生労働省が調査対象の事業所向けに公表している「業種別主な職種早見表」では、情報サービス業の「社内システムエンジニア、プログラマー、CGプログラマー」を職種番号1104「ソフトウェア作成者」に記入するよう案内しています（
          <a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業種別主な職種早見表</a>：{CHECKED}確認）。
        </p>
        <p className="mb-10">
          一方、システムアナリスト・システムコンサルタント・情報処理プロジェクトマネージャーは「1101 システムコンサルタント・設計者」に分類されます。
          当ページでは「ソフトウェア作成者」の数値をプログラマーの年収として扱っています。社内SEが含まれる点、事業所の判断で分類される点に留意してください。
        </p>

        <h2>年齢階級別のプログラマーの平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {ages.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第5表（ソフトウェア作成者・男女計・産業計・企業規模10人以上）。19歳以下と65歳以上は人数が少ないため省略しています。20〜24歳は前年の在籍期間が短く、賞与が少なめに出ます。
        </p>
        <p className="mb-10">
          年収は20代後半の{f1(annual(299.6, 861.9))}から40代前半の{f1(annual(407.1, 1459.3))}まで上がり、45〜59歳は{f1(annual(436.9, 1531.3))}前後で横ばいになります（当サイト計算）。
          年齢階級別の人数は25〜29歳（約18.8万人）が最も多く、20代と30代前半で全体の半数を超えます。
        </p>

        <h2>企業規模別・男女別の平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {[...sizes.map((s) => ({ ...s, k: `企業規模 ${s.k}` })), { k: "男性（企業規模計）", ...PG_MALE }, { k: "女性（企業規模計）", ...PG_FEM }].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表（ソフトウェア作成者・産業計）。</p>
        <p className="mb-10">
          従業員1,000人以上の企業は{f1(annual(370.4, 1385.9))}、10〜99人の企業は{f1(annual(344.8, 855.1))}で、差は{f1(annual(370.4, 1385.9) - annual(344.8, 855.1))}です（当サイト計算）。
          月給の差は2.6万円ですが、年間賞与の差が53.08万円あり、企業規模による差の大部分は賞与から生じています。
        </p>

        <h2>IT関連の職種との比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((x, i) => (
                <tr key={x.k} className={`border-b border-gray-100 ${i === 0 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100">
                <td className="p-3">一般労働者全体（参考）</td>
                <td className="p-3 text-right whitespace-nowrap">－</td>
                <td className="p-3 text-right whitespace-nowrap">{f1(annual(ALL.m, ALL.b))}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※職種3区分は職種 第1表、一般労働者全体は結果の概況 第1表（賃金340.6千円）と産業大分類 第2表の年間賞与（1,009.6千円）から算出。一般労働者全体の平均年齢は同じ表に掲載がないため省略しています。
        </p>
        <p className="mb-10">
          要件定義や設計を担う「システムコンサルタント・設計者」は{f1(annual(506.8, 2385.2))}で、プログラマーより{f1(annual(506.8, 2385.2) - P)}高くなっています（当サイト計算）。
          プログラマーからの年収アップの道筋としては、設計・上流工程の経験を積む方法が統計上の区分からも読み取れます。
          IT業界の企業別の平均年収は<Link href="/company/it-consultant-salary/" className="text-teal font-bold hover:underline">ITコンサル・SIerの年収ランキング</Link>にまとめています。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "フリーランスは含まれない", d: "賃金構造基本統計調査は、常用労働者10人以上の事業所に雇用されている労働者が対象です。業務委託で働くフリーランスのプログラマーの報酬は含まれません。" },
            { t: "残業時間はやや多い", d: `ソフトウェア作成者の超過実労働時間数は月${PG.overtime}時間で、残業代を含む月給（きまって支給する現金給与額）は所定内給与額より3.4万円高くなっています。求人の提示年収に固定残業代が含まれているかは、求人票で確認してください。` },
            { t: "言語・業界による差は統計から分からない", d: "同調査は使用言語や担当分野別の集計を行っていません。Web系・組込み系・業務系などの違いによる年収差は、求人票の年収レンジで比較する必要があります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          年収ごとの手取りは<Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link>・
          <Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link>で試算しています。35〜39歳の所定内給与額（月39.12万円）に近い<Link href="/knowledge/gesshu-40man-tedori/" className="text-teal font-bold hover:underline">月収40万円の手取り</Link>も参考にしてください。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link></li>
          <li><Link href="/company/it-consultant-salary/" className="text-teal font-bold hover:underline">ITコンサル・SIerの年収ランキング</Link></li>
          <li><Link href="/industry/it-engineer/" className="text-teal font-bold hover:underline">ITエンジニアの転職エージェント</Link></li>
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
