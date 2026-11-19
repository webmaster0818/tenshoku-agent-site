import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { COMPANIES } from "@/data/company-list";
import { shareAbove } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/nenshu-1000man-shokugyo/" },
  title: "平均年収1000万円を超える職業は5つ【令和7年 賃金構造基本統計調査】145職種の一覧から算出",
  description:
    "厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）145区分の所定内給与額と年間賞与から、平均年収が1,000万円を超える職業を算出しました。航空機操縦士・医師・その他の経営・金融・保険専門職業従事者・大学教授・歯科医師の5職種です。企業規模別・男女別の年収と、1,000万円に近い職種も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "平均年収1000万円を超える職業は5つ【令和7年 賃金構造基本統計調査】",
    description: "賃金構造基本統計調査の職種（小分類）145区分から、平均年収1,000万円超の職業を算出しています。",
  },
};

const CHECKED = "2026年11月19日";

// 厚生労働省「令和7年 賃金構造基本統計調査」一般労働者・産業計 （職種）第1表 職種（小分類）・男女計（千円・十人）
// m＝所定内給与額（6月分）、k＝きまって支給する現金給与額、b＝年間賞与その他特別給与額、w＝労働者数（十人）
// s1000＝企業規模1,000人以上、s10＝10〜99人 の [所定内給与額, 年間賞与]
type Job = { k: string; age: number; m: number; kk: number; b: number; w: number; s1000: [number, number]; s10: [number, number]; male: [number, number]; fem: [number, number] };
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

const JOBS: Job[] = [
  { k: "航空機操縦士", age: 39.7, m: 1179.5, kk: 1226.1, b: 1604.3, w: 835, s1000: [1207.9, 1686.8], s10: [578.0, 1072.3], male: [1198.4, 1620.2], fem: [492.4, 1025.0] },
  { k: "医師", age: 45.7, m: 1027.7, kk: 1163.2, b: 1164.1, w: 14517, s1000: [885.0, 1336.4], s10: [1494.7, 230.3], male: [1076.9, 1236.8], fem: [884.8, 952.9] },
  { k: "その他の経営・金融・保険専門職業従事者", age: 39.4, m: 714.3, kk: 742.6, b: 2435.2, w: 6315, s1000: [958.6, 3416.7], s10: [593.9, 2374.0], male: [775.3, 2851.3], fem: [557.9, 1368.8] },
  { k: "大学教授（高専含む）", age: 57.5, m: 664.9, kk: 667.8, b: 2812.8, w: 6937, s1000: [693.2, 3085.0], s10: [559.8, 1470.3], male: [680.8, 2898.5], fem: [606.4, 2497.5] },
  { k: "歯科医師", age: 39.6, m: 824.2, kk: 849.9, b: 428.1, w: 1124, s1000: [532.5, 889.0], s10: [942.2, 239.2], male: [862.1, 429.6], fem: [781.2, 426.4] },
];
// 1,000万円に届かない上位の職種（同じ表・男女計）
const NEAR = [
  { k: "法務従事者", age: 46.5, m: 614.5, b: 2265.5 },
  { k: "管理的職業従事者", age: 51.5, m: 591.0, b: 2471.2 },
  { k: "大学准教授（高専含む）", age: 49.3, m: 547.9, b: 2093.5 },
  { k: "システムコンサルタント・設計者", age: 38.3, m: 506.8, b: 2385.2 },
  { k: "研究者", age: 42.5, m: 491.5, b: 1816.1 },
  { k: "公認会計士，税理士", age: 42.2, m: 533.7, b: 1252.5 },
];
// 管理的職業従事者の企業規模1,000人以上（同じ表）
const MGR_1000 = { m: 689.7, b: 3432.0 };
// 同調査 一般労働者・産業計・学歴計（結果の概況 第1表の賃金340.6千円）と産業大分類 第2表の年間賞与
const ALL = { m: 340.6, b: 1009.6 };

// 当サイト掲載企業のうち、有価証券報告書の平均年間給与が1,000万円以上の企業数（企業一覧の掲載値から自動算出）
const OVER_1000_COMPANIES = COMPANIES.filter((c) => {
  if (!c.salary.includes("有価証券報告書")) return false;
  const v = c.salary.match(/([\d,]+)万円/);
  return v ? Number(v[1].replace(/,/g, "")) >= 1000 : false;
}).length;

const faq = [
  {
    q: "平均年収が1,000万円を超える職業は何ですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の所定内給与額×12か月と年間賞与その他特別給与額を合計すると、1,000万円を超えるのは航空機操縦士（${f1(annual(1179.5, 1604.3))}）、医師（${f1(annual(1027.7, 1164.1))}）、その他の経営・金融・保険専門職業従事者（${f1(annual(714.3, 2435.2))}）、大学教授（${f1(annual(664.9, 2812.8))}）、歯科医師（${f1(annual(824.2, 428.1))}）の5職種です（男女計・当サイト計算）。`,
  },
  {
    q: "「その他の経営・金融・保険専門職業従事者」とはどのような職業ですか？",
    a: "厚生労働省「業種別主な職種早見表」では、学術研究・専門・技術サービス業の社会保険労務士・中小企業診断士・経営コンサルタントを職種番号1189「その他の経営・金融・保険専門職業従事者」に記入するよう案内しています。公認会計士・税理士（1181）や弁護士・弁理士・司法書士（1173 法務従事者）は別の区分です。",
  },
  {
    q: "会社員で年収1,000万円を超える人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者のうち年収1,000万円超の人は${shareAbove(1000)}です。職業の平均ではなく、個人の年収の分布です。`,
  },
  {
    q: "管理職になれば年収1,000万円に届きますか？",
    a: `同調査の「管理的職業従事者」の平均は男女計で${f1(annual(591.0, 2471.2))}で、1,000万円にわずかに届きません。企業規模1,000人以上に限ると${f1(annual(MGR_1000.m, MGR_1000.b))}です（当サイト計算）。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116" },
  { label: "厚生労働省「令和8年 賃金構造基本統計調査 業種別主な職種早見表」（1189・1173・1181・1624 の記入例）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" },
  { label: "厚生労働省「賃金構造基本統計調査 主な用語の定義」（集計職種区分一覧表）", url: "https://www.mhlw.go.jp/toukei/list/dl/chingin_yougo.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・学歴計の年間賞与その他特別給与額）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  { label: "国税庁 令和7年分 民間給与実態統計調査（第16表 給与階級別給与所得者数・構成割合）", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
];

const th = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "平均年収1000万円を超える職業" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            平均年収1000万円を超える職業は5つ【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "5職種", l: "平均年収1,000万円超（145職種中）" },
              { v: f1(annual(1179.5, 1604.3)), l: "1位 航空機操縦士" },
              { v: f1(annual(ALL.m, ALL.b)), l: "一般労働者全体の平均" },
              { v: shareAbove(1000), l: "年収1,000万円超の給与所得者の割合" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）145区分のうち、平均年収が1,000万円を超える職業は
            <strong>航空機操縦士・医師・その他の経営・金融・保険専門職業従事者・大学教授・歯科医師の5つ</strong>です（一般労働者・男女計・当サイト計算）。
            いずれも資格や長期の経験が必要な職業で、管理的職業従事者（{f1(annual(591.0, 2471.2))}）は1,000万円にわずかに届きません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代などの超過労働給与は含みません。
            統計値は{CHECKED}に厚生労働省・e-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>平均年収1,000万円を超える5つの職業</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
                <th className={th}>平均年齢</th>
                <th className={th}>所定内給与額（月）</th>
                <th className={th}>年間賞与など</th>
                <th className={th}>労働者数</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {JOBS.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.w * 10).toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表（男女計・産業計・企業規模10人以上）。労働者数は調査結果から推計された人数（十人単位の公表値を10倍）です。
        </p>
        <p className="mb-4">
          航空機操縦士は所定内給与額が月117.95万円と最も高く、医師がこれに続きます。一方、その他の経営・金融・保険専門職業従事者と大学教授は、月給は60万〜70万円台ですが年間賞与が240万〜280万円台と大きく、合計で1,000万円を超えます。
        </p>
        <p className="mb-10">
          残業代を含む「きまって支給する現金給与額」で計算すると、医師は{f1(annual(1163.2, 1164.1))}になります（当サイト計算）。医師の超過労働給与は月13.55万円で、5職種の中で最も大きくなっています。
        </p>

        <h2>統計上の職種に含まれる職業</h2>
        <p>
          賃金構造基本統計調査の職種は、事業所が「業種別主な職種早見表」などをもとに記入します（
          <a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業種別主な職種早見表</a>：{CHECKED}確認）。
        </p>
        <ul className="mb-10">
          <li>航空機操縦士（1624）：パイロット、ヘリコプター操縦士</li>
          <li>その他の経営・金融・保険専門職業従事者（1189）：社会保険労務士、中小企業診断士、経営コンサルタントなど</li>
          <li>法務従事者（1173）：弁護士、弁理士、司法書士、土地家屋調査士</li>
          <li>公認会計士，税理士（1181）：税理士、公認会計士、会計士補</li>
        </ul>

        <h2>企業規模別・男女別の年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種</th>
                <th className={th}>1,000人以上</th>
                <th className={th}>10〜99人</th>
                <th className={th}>男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {JOBS.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(...x.s1000))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(...x.s10))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(...x.male))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(annual(...x.fem))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表（産業計）。女性の航空機操縦士は推計人数が220人と少ないため、数値の振れが大きい点にご注意ください。
        </p>
        <p className="mb-10">
          航空機操縦士と大学教授は企業規模が大きいほど年収が高くなりますが、医師と歯科医師は逆で、従業員10〜99人の事業所のほうが高くなっています（医師 {f1(annual(1494.7, 230.3))}、歯科医師 {f1(annual(942.2, 239.2))}）。
          経営・金融・保険の専門職は、1,000人以上の企業で{f1(annual(958.6, 3416.7))}、10〜99人の企業で{f1(annual(593.9, 2374.0))}です（当サイト計算）。
        </p>

        <h2>年収1,000万円に近い職種</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
                <th className={th}>平均年齢</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {NEAR.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
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
          ※職種は職種 第1表（男女計）。一般労働者全体は結果の概況 第1表（賃金340.6千円）と産業大分類 第2表の年間賞与（1,009.6千円）から算出しています。
        </p>
        <p className="mb-10">
          会社員として転職で目指しやすい職種では、管理的職業従事者（企業規模1,000人以上で{f1(annual(MGR_1000.m, MGR_1000.b))}）とシステムコンサルタント・設計者（{f1(annual(506.8, 2385.2))}）が上位にあります。
          IT職種の詳しい比較は<Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link>に掲載しています。
          企業ごとの平均年収では、当サイトの<Link href="/company/" className="text-teal font-bold hover:underline">企業一覧</Link>に掲載している企業のうち{OVER_1000_COMPANIES}社が、有価証券報告書の平均年間給与で1,000万円以上です（提出会社単体の値）。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "開業医・個人事業主は含まれない", d: "賃金構造基本統計調査は、常用労働者10人以上の事業所に雇用されている労働者が対象です。開業医、独立した士業、フリーランスのコンサルタントなどの所得は含まれません。" },
            { t: "職業の平均であり、個人の年収ではない", d: "同じ職種でも年齢・経験・勤務先で年収は大きく異なります。平均が1,000万円を超える職種でも、全員が1,000万円を超えるわけではありません。" },
            { t: "年間賞与は前年1年間の実績", d: "年間賞与その他特別給与額は令和6年1年間の支給額で、6月分の月給と時点が異なります。前年に在籍していなかった人は賞与が少なく出ます。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          年収1,000万円の手取りは<Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1000万円の手取り</Link>で試算しています（約727万円・令和8年の税制）。
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
          <li><Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1000万円の手取り</Link></li>
          <li><Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-gesshu-50man/" className="text-teal font-bold hover:underline">手取り50万円の額面</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className="text-teal font-bold hover:underline">30代女性の転職</Link></li>
          <li><Link href="/company/maker-salary/" className="text-teal font-bold hover:underline">メーカー年収ランキング</Link></li>
          <li><Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">転職エージェント各社の年収アップ実績の比較</Link></li>
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
