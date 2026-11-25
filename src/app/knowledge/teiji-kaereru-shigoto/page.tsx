import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/teiji-kaereru-shigoto/" },
  title: "定時で帰れる仕事は？残業が月5時間以下の18職種【令和7年 賃金構造基本統計調査】事務職の残業時間も掲載",
  description:
    "厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の超過実労働時間数（令和7年6月）から、残業が少ない職業を一覧にしました。労働者数1万人以上の職種のうち、月5時間以下は保険営業・保育士・介護職員・理学療法士など18職種です。事務職11職種の残業時間、残業が多い職種、年収との関係も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "定時で帰れる仕事は？残業が月5時間以下の18職種【令和7年 賃金構造基本統計調査】",
    description: "賃金構造基本統計調査の職種別の超過実労働時間数から、残業が少ない職業を一覧にしています。",
  },
};

const CHECKED = "2026年11月25日";

// 厚生労働省「令和7年 賃金構造基本統計調査」（職種）第1表 一般労働者・産業計・企業規模計（10人以上）・男女計
// hrs＝所定内実労働時間数、ot＝超過実労働時間数（いずれも令和7年6月・時間）、w＝労働者数（十人）
// m＝所定内給与額（千円・6月分）、b＝年間賞与その他特別給与額（千円・令和6年1年間）
type Job = { k: string; age: number; hrs: number; ot: number; w: number; m: number; b: number };
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;
const ppl = (w: number) => `${(w * 10).toLocaleString("ja-JP")}人`;

// 労働者数1万人以上（公表値1,000十人以上）で超過実労働時間数が5時間以下の職種（管理的職業従事者を除く）
const LOW: Job[] = [
  { k: "保険営業職業従事者", age: 46.8, hrs: 145, ot: 1, w: 24761, m: 392.0, b: 680.3 },
  { k: "大学教授（高専含む）", age: 57.5, hrs: 161, ot: 1, w: 6937, m: 664.9, b: 2812.8 },
  { k: "航空機客室乗務員", age: 32.7, hrs: 150, ot: 2, w: 1130, m: 384.2, b: 935.6 },
  { k: "看護助手", age: 48.7, hrs: 155, ot: 2, w: 10862, m: 224.2, b: 481.2 },
  { k: "大学准教授（高専含む）", age: 49.3, hrs: 162, ot: 2, w: 4145, m: 547.9, b: 2093.5 },
  { k: "保育士", age: 40.3, hrs: 163, ot: 3, w: 29151, m: 279.2, b: 847.9 },
  { k: "幼稚園教員，保育教諭", age: 39.1, hrs: 166, ot: 3, w: 18537, m: 285.9, b: 928.2 },
  { k: "美容サービス・浴場従事者（美容師を除く）", age: 37.9, hrs: 168, ot: 3, w: 2524, m: 268.9, b: 224.3 },
  { k: "准看護師", age: 51.8, hrs: 159, ot: 4, w: 12292, m: 279.4, b: 636.8 },
  { k: "介護支援専門員（ケアマネージャー）", age: 53.1, hrs: 161, ot: 4, w: 9415, m: 298.8, b: 704.2 },
  { k: "介護職員（医療・福祉施設等）", age: 45.3, hrs: 162, ot: 4, w: 116593, m: 262.9, b: 547.8 },
  { k: "高等学校教員", age: 43.9, hrs: 167, ot: 4, w: 7905, m: 421.5, b: 1489.0 },
  { k: "理学療法士，作業療法士，言語聴覚士，視能訓練士", age: 36.2, hrs: 157, ot: 5, w: 27965, m: 298.2, b: 717.2 },
  { k: "外勤事務従事者", age: 49.4, hrs: 160, ot: 5, w: 1281, m: 337.5, b: 1239.1 },
  { k: "その他の社会福祉専門職業従事者", age: 46.0, hrs: 161, ot: 5, w: 22915, m: 292.0, b: 765.0 },
  { k: "歯科医師", age: 39.6, hrs: 161, ot: 5, w: 1124, m: 824.2, b: 428.1 },
  { k: "歯科衛生士", age: 36.4, hrs: 162, ot: 5, w: 5451, m: 281.6, b: 450.3 },
  { k: "小・中学校教員", age: 42.2, hrs: 171, ot: 5, w: 2514, m: 447.1, b: 1814.9 },
];

// 事務職（職種名に「事務」を含む職種。外勤事務従事者は上の表に掲載）
const JIMU: Job[] = [
  { k: "受付・案内事務員", age: 42.8, hrs: 161, ot: 6, w: 10154, m: 240.9, b: 486.5 },
  { k: "会計事務従事者", age: 44.0, hrs: 159, ot: 8, w: 46603, m: 321.3, b: 1012.4 },
  { k: "事務用機器操作員", age: 43.4, hrs: 160, ot: 8, w: 5516, m: 279.5, b: 698.9 },
  { k: "その他の一般事務従事者", age: 44.0, hrs: 155, ot: 9, w: 95067, m: 331.8, b: 1001.5 },
  { k: "総合事務員", age: 44.6, hrs: 157, ot: 9, w: 127703, m: 331.9, b: 1135.9 },
  { k: "庶務・人事事務員", age: 44.9, hrs: 159, ot: 9, w: 78791, m: 326.1, b: 1061.8 },
  { k: "電話応接事務員", age: 43.6, hrs: 154, ot: 10, w: 20669, m: 278.1, b: 410.2 },
  { k: "営業・販売事務従事者", age: 43.3, hrs: 158, ot: 10, w: 93100, m: 327.8, b: 1017.8 },
  { k: "企画事務員", age: 43.0, hrs: 158, ot: 11, w: 49293, m: 430.5, b: 1794.1 },
  { k: "生産関連事務従事者", age: 45.7, hrs: 162, ot: 11, w: 47882, m: 325.7, b: 1174.8 },
  { k: "運輸・郵便事務従事者", age: 48.6, hrs: 163, ot: 14, w: 23210, m: 346.5, b: 1205.8 },
];

// 超過実労働時間数が多い職種（労働者数1万人以上の上位6職種）
const HIGH: Job[] = [
  { k: "営業用大型貨物自動車運転者", age: 51.5, hrs: 175, ot: 33, w: 47157, m: 306.3, b: 429.6 },
  { k: "船内・沿岸荷役従事者", age: 42.9, hrs: 159, ot: 31, w: 3234, m: 330.6, b: 945.9 },
  { k: "バス運転者", age: 56.0, hrs: 168, ot: 30, w: 9628, m: 262.8, b: 590.1 },
  { k: "営業用貨物自動車運転者（大型車を除く）", age: 50.3, hrs: 173, ot: 26, w: 45164, m: 287.3, b: 385.1 },
  { k: "警備員", age: 53.8, hrs: 167, ot: 23, w: 24625, m: 240.6, b: 339.8 },
  { k: "タクシー運転者", age: 56.8, hrs: 169, ot: 23, w: 17021, m: 306.4, b: 197.8 },
];

// 144職種（「不詳」を除く）の超過実労働時間数を労働者数で加重平均した値（当サイト計算）
const AVG_OT = 11.0;
const LOW_OVER_500 = LOW.filter((x) => annual(x.m, x.b) >= 500);

const faq = [
  {
    q: "残業が少ない職業は何ですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」で、労働者数1万人以上の職種のうち令和7年6月の超過実労働時間数が最も短いのは、保険営業職業従事者と大学教授（いずれも月1時間）です。月5時間以下の職種は、保育士・介護職員・理学療法士などを含めて${LOW.length}職種あります（管理的職業従事者を除く）。`,
  },
  {
    q: "事務職は定時で帰れますか？",
    a: `同調査の事務職11職種の超過実労働時間数は月6〜14時間です。受付・案内事務員が6時間と最も短く、総合事務員・庶務・人事事務員は9時間、運輸・郵便事務従事者は14時間です。職種の平均であり、勤務先によって異なります。`,
  },
  {
    q: "残業が少なく年収も高い職業はありますか？",
    a: `月5時間以下の${LOW.length}職種のうち、年収（所定内給与額×12か月＋年間賞与・当サイト計算）が500万円以上なのは${LOW_OVER_500.map((x) => x.k).join("・")}の${LOW_OVER_500.length}職種です。いずれも資格や学位が必要な職種、または営業成績で報酬が変わる職種です。`,
  },
  {
    q: "残業時間を転職前に確かめる方法はありますか？",
    a: "求人票に記載される固定残業代の有無と時間数を確認し、面接や転職エージェントを通じて配属予定部署の平均残業時間を確かめる方法が基本です。職種の平均は目安にとどまるため、応募先ごとの確認をおすすめします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116" },
  { label: "厚生労働省「賃金構造基本統計調査 主な用語の定義」（所定内実労働時間数・超過実労働時間数）", url: "https://www.mhlw.go.jp/toukei/list/dl/chingin_yougo.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金（一般労働者全体の賃金340.6千円）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・学歴計の年間賞与その他特別給与額1,009.6千円）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
];

const th = "p-3 text-right";

function JobTable({ rows }: { rows: Job[] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
            <th className={th}>超過実労働時間</th>
            <th className={th}>所定内実労働時間</th>
            <th className={th}>労働者数</th>
            <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((x) => (
            <tr key={x.k} className="border-b border-gray-100">
              <td className="p-3">{x.k}</td>
              <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.ot}時間</td>
              <td className="p-3 text-right whitespace-nowrap">{x.hrs}時間</td>
              <td className="p-3 text-right whitespace-nowrap">{ppl(x.w)}</td>
              <td className="p-3 text-right whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "定時で帰れる仕事" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            定時で帰れる仕事は？残業が月5時間以下の{LOW.length}職種【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `${LOW.length}職種`, l: "残業が月5時間以下（労働者数1万人以上）" },
              { v: "1時間", l: "最短 保険営業・大学教授" },
              { v: `約${AVG_OT}時間`, l: "144職種の加重平均（当サイト計算）" },
              { v: "6〜14時間", l: "事務職11職種の残業時間" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」で、労働者数1万人以上の職種のうち、令和7年6月の超過実労働時間数（残業・休日出勤の時間）が月5時間以下だったのは
            <strong>保険営業・大学教授・保育士・介護職員・理学療法士など{LOW.length}職種</strong>です（一般労働者・男女計、管理的職業従事者を除く）。
            残業が少ない職種は、医療・福祉・教育の専門職に多く見られます。事務職は月6〜14時間で、144職種の加重平均（約{AVG_OT}時間）と同じか、やや短い水準です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            統計値は{CHECKED}にe-Statの公表資料で確認しています。超過実労働時間数は1か月（令和7年6月）の値で、職種ごとの平均です。勤務先・時期によって大きく異なります。
          </p>
        </div>

        <h2>残業が月5時間以下の{LOW.length}職種</h2>
        <JobTable rows={LOW} />
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表（男女計・産業計・企業規模10人以上）。労働者数1万人以上（十人単位の公表値1,000以上）の職種を、超過実労働時間数の短い順に並べています。同じ時間数の職種は所定内実労働時間数の短い順です。
          年収は所定内給与額×12か月＋年間賞与その他特別給与額で、残業代を含みません。
        </p>
        <p className="mb-4">
          最も短いのは保険営業職業従事者と大学教授（高専含む）で、いずれも月1時間です。保険営業は所定内実労働時間数も月{LOW[0].hrs}時間と、{LOW.length}職種の中で最も短くなっています。
          人数が多い職種では、介護職員（医療・福祉施設等）が推計{ppl(116593)}で月4時間、保育士が推計{ppl(29151)}で月3時間です。
        </p>
        <p className="mb-10">
          なお、労働者数1万人以上の職種で超過実労働時間数が最も短い区分には、管理的職業従事者（月2時間）も含まれます。ただし、労働基準法第41条の管理監督者には労働時間・休日の規定が適用されないため、残業時間が記録されにくい点に注意が必要です。このため本ページの一覧からは除いています。
        </p>

        <h2>統計上の「超過実労働時間数」とは</h2>
        <p className="mb-10">
          厚生労働省「主な用語の定義」では、超過実労働時間数を「事業所の就業規則などで定められた所定労働日における始業時刻から終業時刻までの時間以外に実際に労働した時間数及び所定休日において実際に労働した時間数」としています（
          <a href="https://www.mhlw.go.jp/toukei/list/dl/chingin_yougo.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">主な用語の定義</a>：{CHECKED}確認）。
          つまり、平日の残業と休日出勤の合計です。事業所が記録した時間をもとにしているため、記録されていない時間外の作業は含まれません。
        </p>

        <h2>事務職の残業時間は月6〜14時間</h2>
        <JobTable rows={JIMU} />
        <p className="text-xs text-text-muted mb-4">※同じ表。職種名に「事務」を含む職種（外勤事務従事者は上の表に掲載）を、超過実労働時間数の短い順に並べています。</p>
        <p className="mb-10">
          事務職の中では受付・案内事務員が月6時間と最も短く、会計事務従事者と事務用機器操作員が8時間、総合事務員・庶務・人事事務員・その他の一般事務従事者が9時間です。
          企画事務員は月11時間とやや長い一方、年収は{f1(annual(430.5, 1794.1))}と事務職の中で最も高くなっています。運輸・郵便事務従事者は月14時間で、事務職の中で最も長くなっています。
        </p>

        <h2>残業が多い職種は運輸・警備</h2>
        <JobTable rows={HIGH} />
        <p className="text-xs text-text-muted mb-4">※同じ表。労働者数1万人以上の職種のうち、超過実労働時間数が長い順に6職種を掲載しています。</p>
        <p className="mb-10">
          最も長いのは営業用大型貨物自動車運転者の月33時間で、残業が月5時間以下の職種とは30時間前後の差があります。上位6職種のうち4職種が自動車の運転、残る2職種が荷役と警備です。
          業種ごとの残業時間は<Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link>（毎月勤労統計調査）に掲載しています。
        </p>

        <h2>残業が少ない職種と年収の関係</h2>
        <p className="mb-4">
          月5時間以下の{LOW.length}職種のうち、年収が500万円以上なのは{LOW_OVER_500.map((x) => x.k).join("・")}の{LOW_OVER_500.length}職種です（当サイト計算）。
          多くは教員免許・歯科医師免許などの資格や学位が必要な職種、または営業成績で報酬が変わる職種です。
        </p>
        <p className="mb-10">
          一方、保育士（{f1(annual(279.2, 847.9))}）・介護職員（{f1(annual(262.9, 547.8))}）・看護助手（{f1(annual(224.2, 481.2))}）など人数の多い職種は、残業が少ない反面、年収は一般労働者全体（同じ方法で{f1(annual(340.6, 1009.6))}）を下回ります。残業の少なさと年収のどちらを優先するかで、選ぶ職種は変わります。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "1か月（6月）の値である", d: "超過実労働時間数は令和7年6月の1か月の値です。決算期や繁忙期が6月以外にある職種では、年間の平均と異なる可能性があります。" },
            { t: "職種の平均であり、勤務先ごとの値ではない", d: "同じ職種でも、勤務先・部署・雇用形態によって残業時間は大きく異なります。平均が短い職種でも、残業が多い職場はあります。" },
            { t: "記録されていない労働時間は含まれない", d: "事業所が把握した労働時間をもとにした統計です。持ち帰りの仕事や、記録されていない始業前・終業後の作業は含まれません。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

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
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均（業種別）</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link></li>
          <li><Link href="/knowledge/black-kigyo-tokucho/" className="text-teal font-bold hover:underline">ブラック企業の特徴</Link></li>
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link></li>
          <li><Link href="/knowledge/nenshu-2000man-shokugyo/" className="text-teal font-bold hover:underline">年収2000万円の職業</Link></li>
          <li><Link href="/knowledge/iryojimu-tenshoku/" className="text-teal font-bold hover:underline">医療事務の転職</Link></li>
          <li><Link href="/industry/nurse/" className="text-teal font-bold hover:underline">看護師の転職</Link></li>
          <li><Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">転職エージェントへの希望条件の伝え方</Link></li>
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
