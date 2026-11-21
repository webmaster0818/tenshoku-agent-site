import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/infra-engineer-nenshu/" },
  title: "インフラエンジニアの平均年収は約566万円【令和7年 賃金構造基本統計調査】年齢別・企業規模別",
  description:
    "インフラエンジニア（サーバー管理者・ネットワーク技術者）の平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の職種「その他の情報処理・通信技術者」から算出しました。男女計で約566万円（平均年齢42.2歳）です。年齢別・企業規模別・男女別と、プログラマーとの比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "インフラエンジニアの平均年収は約566万円【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省の賃金構造基本統計調査（職種：その他の情報処理・通信技術者）から、インフラエンジニアの平均年収を年齢・企業規模・男女別に算出しています。",
  },
};

const CHECKED = "2026年11月22日";

// 厚生労働省「令和7年 賃金構造基本統計調査」一般労働者・産業計
// （職種）第1表・第5表 職種（小分類）「その他の情報処理・通信技術者」（千円）
// m＝所定内給与額（6月分）、b＝年間賞与その他特別給与額（前年1年間）
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

const IF = { m: 379.1, b: 1108.0, kimatte: 415.8, age: 42.2, tenure: 12.1, overtime: 12, workers: 21482 };
const IF_MALE = { m: 393.6, b: 1169.7 };
const IF_FEM = { m: 323.3, b: 870.3 };

// w＝労働者数（十人）
const ages = [
  { k: "20〜24歳", m: 260.9, b: 521.9, w: 1544 },
  { k: "25〜29歳", m: 283.9, b: 763.4, w: 2925 },
  { k: "30〜34歳", m: 332.1, b: 1013.4, w: 2792 },
  { k: "35〜39歳", m: 359.3, b: 1172.9, w: 2105 },
  { k: "40〜44歳", m: 405.9, b: 1326.6, w: 2483 },
  { k: "45〜49歳", m: 437.5, b: 1271.1, w: 2778 },
  { k: "50〜54歳", m: 461.3, b: 1261.9, w: 3342 },
  { k: "55〜59歳", m: 484.6, b: 1559.7, w: 2020 },
  { k: "60〜64歳", m: 340.7, b: 993.8, w: 1200 },
];

const sizes = [
  { k: "1,000人以上", m: 369.5, b: 1420.3 },
  { k: "100〜999人", m: 399.7, b: 1012.4 },
  { k: "10〜99人", m: 345.6, b: 745.5 },
];

const jobs = [
  { k: "その他の情報処理・通信技術者（インフラエンジニア）", m: 379.1, b: 1108.0, age: 42.2 },
  { k: "ソフトウェア作成者（プログラマー）", m: 356.8, b: 1095.1, age: 37.1 },
  { k: "システムコンサルタント・設計者", m: 506.8, b: 2385.2, age: 38.3 },
];
// 40歳以上の人数には65〜69歳(221)・70歳以上(23)を含む
// 同調査 一般労働者・産業計・学歴計（結果の概況 第1表の賃金340.6千円）と産業大分類 第2表の年間賞与
const ALL = { m: 340.6, b: 1009.6 };

const P = annual(IF.m, IF.b);
const share5054 = Math.round((3342 / IF.workers) * 1000) / 10;
const over40 = Math.round(((2483 + 2778 + 3342 + 2020 + 1200 + 221 + 23) / IF.workers) * 1000) / 10;

const faq = [
  {
    q: "インフラエンジニアの平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種「その他の情報処理・通信技術者」（一般労働者・男女計）の所定内給与額は月37.91万円、年間賞与その他特別給与額は110.80万円です。所定内給与額の12か月分と賞与を合計すると${f1(P)}です（当サイト計算）。残業代を含む「きまって支給する現金給与額」（月41.58万円）で計算すると${f1(annual(IF.kimatte, IF.b))}です。`,
  },
  {
    q: "統計のどの職種がインフラエンジニアにあたりますか？",
    a: "賃金構造基本統計調査に「インフラエンジニア」という職種区分はありません。厚生労働省が調査対象の事業所向けに公表している「業種別主な職種早見表」では、情報サービス業の「サーバー管理者、情報セキュリティ技術者、電気通信技術者、通信ネットワーク技術者」を職種番号1109「その他の情報処理・通信技術者」に分類するよう案内しています。当ページはこの区分の数値をインフラエンジニアの年収として扱っています。",
  },
  {
    q: "インフラエンジニアの年収は何歳まで上がりますか？",
    a: `同調査の年齢階級別では、55〜59歳が${f1(annual(484.6, 1559.7))}で最も高く、60〜64歳は${f1(annual(340.7, 993.8))}に下がります（当サイト計算）。同じ人を追跡した数値ではなく、各年齢階級に在職している人の平均です。`,
  },
  {
    q: "インフラエンジニアとプログラマーではどちらが年収が高いですか？",
    a: `同調査では、その他の情報処理・通信技術者が${f1(P)}、ソフトウェア作成者が${f1(annual(356.8, 1095.1))}で、差は${f1(P - annual(356.8, 1095.1))}です（当サイト計算）。ただし平均年齢がそれぞれ42.2歳と37.1歳で5.1歳違うため、年齢の差が年収の差に含まれています。`,
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
  { label: "厚生労働省「令和8年 賃金構造基本統計調査 業種別主な職種早見表」（サーバー管理者・通信ネットワーク技術者→1109 その他の情報処理・通信技術者）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・学歴計の年間賞与その他特別給与額）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "インフラエンジニアの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            インフラエンジニアの平均年収は約566万円【令和7年 賃金構造基本統計調査】年齢別・企業規模別
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(P), l: "平均年収（男女計・残業代を除く）" },
              { v: f1(annual(IF.kimatte, IF.b)), l: "残業代を含めた場合" },
              { v: `${IF.age}歳`, l: "平均年齢" },
              { v: `${IF.tenure}年`, l: "平均勤続年数" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、インフラエンジニア（統計上の職種名は「その他の情報処理・通信技術者」）の平均年収は<strong>{f1(P)}</strong>です（一般労働者・男女計）。
            男性は{f1(annual(IF_MALE.m, IF_MALE.b))}、女性は{f1(annual(IF_FEM.m, IF_FEM.b))}で、一般労働者全体（{f1(annual(ALL.m, ALL.b))}）を{f1(P - annual(ALL.m, ALL.b))}上回ります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。「残業代を含めた場合」は、所定内給与額の代わりに超過労働給与を含む「きまって支給する現金給与額」を使っています。
            統計値は{CHECKED}に厚生労働省・e-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>統計上の「インフラエンジニア」の範囲</h2>
        <p>
          賃金構造基本統計調査には「インフラエンジニア」という名称の職種区分はありません。
          厚生労働省が調査対象の事業所向けに公表している「業種別主な職種早見表」では、情報サービス業の「サーバー管理者、情報セキュリティ技術者、電気通信技術者、通信ネットワーク技術者」を職種番号1109「その他の情報処理・通信技術者」に記入するよう案内しています（
          <a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業種別主な職種早見表</a>：{CHECKED}確認）。
        </p>
        <p className="mb-10">
          当ページでは、サーバーやネットワークの構築・運用を担う職種が含まれるこの区分の数値を、インフラエンジニアの年収として扱っています。
          情報セキュリティ技術者や電気通信技術者も同じ区分に含まれる点、インフラの設計を主に担う人は事業所の判断で「1101 システムコンサルタント・設計者」に分類されることがある点に留意してください。
        </p>

        <h2>年齢階級別のインフラエンジニアの平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right">労働者数</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {ages.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.w * 10).toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第5表（その他の情報処理・通信技術者・男女計・産業計・企業規模10人以上）。労働者数は調査結果から推計された人数（十人単位の表章値を10倍）です。19歳以下と65歳以上は人数が少ないため省略しています。
        </p>
        <p className="mb-10">
          年収は20代後半の{f1(annual(283.9, 763.4))}から50代後半の{f1(annual(484.6, 1559.7))}まで上がり続け、60〜64歳で{f1(annual(340.7, 993.8))}に下がります（当サイト計算）。
          年齢階級別の人数は50〜54歳が最も多く（全体の{share5054}%）、40歳以上が{over40}%を占めます。平均年齢はプログラマー（ソフトウェア作成者・37.1歳）より5.1歳高く、経験者の比率が高い職種です。
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
              {[...sizes.map((s) => ({ ...s, k: `企業規模 ${s.k}` })), { k: "男性（企業規模計）", ...IF_MALE }, { k: "女性（企業規模計）", ...IF_FEM }].map((x) => (
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
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表（その他の情報処理・通信技術者・産業計）。</p>
        <p className="mb-10">
          従業員1,000人以上の企業は{f1(annual(369.5, 1420.3))}、100〜999人の企業は{f1(annual(399.7, 1012.4))}で、差は{f1(annual(369.5, 1420.3) - annual(399.7, 1012.4))}にとどまります（当サイト計算）。
          月給は100〜999人の企業のほうが3.02万円高く、1,000人以上の企業は年間賞与が40.79万円多いという構成の違いがあります。10〜99人の企業は{f1(annual(345.6, 745.5))}で、1,000人以上の企業より{f1(annual(369.5, 1420.3) - annual(345.6, 745.5))}低くなっています。
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
          要件定義や設計を担う「システムコンサルタント・設計者」は{f1(annual(506.8, 2385.2))}で、インフラエンジニアより{f1(annual(506.8, 2385.2) - P)}高くなっています（当サイト計算）。差の多くは年間賞与（238.52万円と110.80万円）によるものです。
          プログラマーの年収は<Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link>、IT業界の企業別の平均年収は<Link href="/company/it-consultant-salary/" className="text-teal font-bold hover:underline">ITコンサル・SIerの年収ランキング</Link>にまとめています。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "フリーランスは含まれない", d: "賃金構造基本統計調査は、常用労働者10人以上の事業所に雇用されている労働者が対象です。業務委託で働くフリーランスのインフラエンジニアの報酬は含まれません。" },
            { t: "夜間・休日対応の手当は月給に含まれる", d: `その他の情報処理・通信技術者の超過実労働時間数は月${IF.overtime}時間で、残業代を含む月給（きまって支給する現金給与額）は所定内給与額より3.67万円高くなっています。夜勤手当や待機手当の扱いは企業ごとに異なるため、求人票で確認してください。` },
            { t: "クラウド・オンプレミスなど分野別の差は統計から分からない", d: "同調査は担当分野や保有資格別の集計を行っていません。クラウド・ネットワーク・セキュリティなどの違いによる年収差は、求人票の年収レンジで比較する必要があります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          年収ごとの手取りは<Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link>・
          <Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link>で試算しています。40〜44歳の所定内給与額（月40.59万円）に近い<Link href="/knowledge/gesshu-40man-tedori/" className="text-teal font-bold hover:underline">月収40万円の手取り</Link>も参考にしてください。
          20〜24歳の所定内給与額は月26.09万円です。若手の月給水準の手取りは<Link href="/knowledge/gesshu-21man-tedori/" className="text-teal font-bold hover:underline">月給21万円の手取り</Link>・<Link href="/knowledge/gesshu-30man-tedori/" className="text-teal font-bold hover:underline">月収30万円の手取り</Link>で試算しています。
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
          <li><Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link></li>
          <li><Link href="/knowledge/salary-40sai/" className="text-teal font-bold hover:underline">40歳の平均年収</Link></li>
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
