import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES, shokushuAnnual } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/shokugyo-nenshu-ranking/" },
  title: "職業別の年収ランキング144職種【令和7年 賃金構造基本統計調査】1位は航空機操縦士の約1,575.8万円",
  description:
    "厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の所定内給与額と年間賞与から、144職種の平均年収を当サイトで算出し、高い順に並べました。1位は航空機操縦士（約1,575.8万円）、2位は医師（約1,349.7万円）です。全職種の一覧、働く人の多い職種の順位、算出方法と注意点も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "職業別の年収ランキング144職種【令和7年 賃金構造基本統計調査】",
    description: "賃金構造基本統計調査の職種（小分類）144区分の平均年収を、高い順に一覧にしています。",
  },
};

const ALL = { m: 340.6, b: 1009.6 }; // 同調査 一般労働者・産業計・学歴計（第2表 規模計・男女計）
const ALL_ANNUAL = shokushuAnnual(ALL.m, ALL.b);

const rows = SHOKUSHU.map((x) => ({ ...x, a: shokushuAnnual(x.t[0], x.t[1]) })).sort((p, q) => q.a - p.a);
const ranked = rows.map((x, i) => ({ ...x, rank: i + 1 }));
const sortedA = ranked.map((x) => x.a).sort((p, q) => p - q);
const median = (sortedA[71] + sortedA[72]) / 2;
const over500 = ranked.filter((x) => x.a >= 500).length;
const overAll = ranked.filter((x) => x.a >= ALL_ANNUAL).length;
const big = [...ranked].sort((p, q) => q.w - p.w).slice(0, 10);
const totalW = ranked.reduce((s, x) => s + x.w, 0);
const top = ranked[0];
const second = ranked[1];
const last = ranked[ranked.length - 1];
const f1 = (v: number) => `約${v.toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;
const ppl = (w: number) => `約${Math.round(w / 100).toLocaleString("ja-JP")}千人`;

const faq = [
  {
    q: "平均年収が最も高い職業は何ですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の値から当サイトで算出すると、1位は${top.k}（${f1(top.a)}）、2位は${second.k}（${f1(second.a)}）、3位は${ranked[2].k}（${f1(ranked[2].a)}）です（男女計・企業規模10人以上）。`,
  },
  {
    q: "平均年収が全体の平均を上回る職業はいくつありますか？",
    a: `同調査の一般労働者全体（産業計・学歴計・男女計）の年収は同じ方法で${f1(ALL_ANNUAL)}です。144職種のうち、これ以上の職種は${overAll}職種、500万円以上の職種は${over500}職種です。144職種の平均年収の中央値は${f1(median)}です（当サイト計算）。`,
  },
  {
    q: "働いている人が多い職業の年収はどのくらいですか？",
    a: `労働者数（推計）が最も多いのは${big[0].k}（${ppl(big[0].w)}・${f1(big[0].a)}・${big[0].rank}位）、次いで${big[1].k}（${ppl(big[1].w)}・${f1(big[1].a)}・${big[1].rank}位）、${big[2].k}（${ppl(big[2].w)}・${f1(big[2].a)}・${big[2].rank}位）です。`,
  },
  {
    q: "このランキングに公務員は含まれますか？",
    a: "賃金構造基本統計調査の対象は、日本標準産業分類の16大産業に属する、常用労働者5人以上の民営事業所と10人以上の公営事業所です。16大産業に「公務」は含まれないため、国・地方公共団体の行政機関で働く公務員は対象外です（厚生労働省「調査の概要」）。本ページの値は、このうち企業規模10人以上の集計です。",
  },
  {
    q: "年収はどのように計算していますか？",
    a: "所定内給与額（令和7年6月分の月額）を12倍し、年間賞与その他特別給与額（令和6年1年間）を加えています。残業代・休日出勤手当などの所定外給与は含みません。統計の値は平均であり、同じ職種でも企業規模・年齢・経験によって大きく異なります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  ...SHOKUSHU_SOURCES,
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・全体の平均の算出に使用）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 調査の概要」（調査の対象・調査の時期）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/gaiyo.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "職業別の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            職業別の年収ランキング144職種【令和7年 賃金構造基本統計調査】1位は航空機操縦士の約1,575.8万円
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(top.a), l: `1位 ${top.k}` },
              { v: f1(ALL_ANNUAL), l: "一般労働者全体の年収（同じ算出方法）" },
              { v: `${over500}職種`, l: "平均年収500万円以上の職種（144職種中）" },
              { v: f1(median), l: "144職種の平均年収の中央値" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の統計から算出すると、平均年収が最も高い職業は<strong>{top.k}（{f1(top.a)}）</strong>、
            次いで{second.k}（{f1(second.a)}）です。最も低いのは{last.k}（{f1(last.a)}）で、1位との差は約{Math.round(top.a / last.a * 10) / 10}倍です。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            144職種のうち、一般労働者全体の年収（{f1(ALL_ANNUAL)}）を上回るのは{overAll}職種です。働く人が最も多い{big[0].k}は{big[0].rank}位、2番目に多い{big[1].k}は{big[1].rank}位です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年1年間）。一般労働者・産業計・企業規模10人以上・男女計。残業代などの所定外給与は含みません。
            統計値は{SHOKUSHU_CHECKED}にe-Statの公表資料で確認し、年収と順位は当サイトで計算しています。職種（小分類）145区分のうち「不詳」を除いた144職種です。
          </p>
        </div>

        <h2>年収ランキング上位20職種</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">職種</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {ranked.slice(0, 20).map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.rank}</td>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.t[0].toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.t[1].toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold">{f1(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査（職種）第1表（一般労働者・産業計・企業規模計・男女計）から当サイト計算。</p>
        <p className="mb-10">
          上位には、医師・歯科医師・公認会計士などの資格職と、大学教員・研究者が多く入っています。資格職以外では、管理的職業従事者（{ranked.find((x) => x.k === "管理的職業従事者")?.rank}位）、
          システムコンサルタント・設計者（{ranked.find((x) => x.k === "システムコンサルタント・設計者")?.rank}位）、企画事務員（{ranked.find((x) => x.k === "企画事務員")?.rank}位）が上位20に入っています。
          上位の職種は年間賞与の金額が大きく、たとえば大学教授は所定内給与額が月664.9千円で航空機操縦士（1,179.5千円）の約56%ですが、年間賞与が2,812.8千円あり年収では4位です。
          平均年収1,000万円を超える5職種の企業規模別・男女別の値は
          <Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal font-bold hover:underline">平均年収1000万円を超える職業</Link>にまとめています。
        </p>

        <h2>働く人が多い職種10の年収と順位</h2>
        <p>
          ランキングの上位は労働者数の少ない職種が多いため、働く人が多い職種の年収も並べました。下の10職種で、144職種の労働者数（推計）の
          {Math.round((big.reduce((s, x) => s + x.w, 0) / totalW) * 1000) / 10}%を占めます（当サイト計算）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種</th>
                <th className="p-3 text-right">労働者数（推計）</th>
                <th className="p-3 text-right">年収（当サイト計算）</th>
                <th className="p-3 text-right rounded-tr-lg">144職種中の順位</th>
              </tr>
            </thead>
            <tbody>
              {big.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{ppl(x.w)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.a)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.rank}位</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※労働者数は同表の「労働者数」（十人単位の推計値）を千人単位に換算して表示しています。</p>
        <p className="mb-10">
          働く人の多い10職種のうち、一般労働者全体の年収（{f1(ALL_ANNUAL)}）を上回るのは{big.filter((x) => x.a >= ALL_ANNUAL).map((x) => x.k).join("・")}です。
          販売店員と介護職員は、いずれも年収が全体を100万円以上下回っています。同じ事務職でも、企画事務員（{f1(ranked.find((x) => x.k === "企画事務員")?.a ?? 0)}）と総合事務員（{f1(ranked.find((x) => x.k === "総合事務員")?.a ?? 0)}）では差があります。
          職種を変える転職を検討する際は、
          <Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>もあわせてご覧ください。
        </p>

        <h2>全144職種の年収一覧</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">職種</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.a >= ALL_ANNUAL ? "" : "text-text-secondary"}`}>
                  <td className="p-3">{x.rank}</td>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※e-Stat 令和7年 賃金構造基本統計調査（職種）第1表から当サイト計算。職種名は同調査の職種（小分類）の名称です。労働者数が少ない職種は、標本の少なさから値の振れが大きい場合があります。
        </p>

        <h2>ランキングを見るときの注意点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "平均年齢が職種によって異なる", d: `大学教授の平均年齢は57.5歳、システムコンサルタント・設計者は38.3歳です。年齢の高い職種ほど年収が高く出やすいため、年代別の水準は年齢階級別の統計で確認してください。` },
            { t: "行政機関の公務員は含まれない", d: "賃金構造基本統計調査の対象は16大産業の民営事業所と公営事業所で、産業分類の「公務」は対象外です。行政職の国家公務員・地方公務員の給与は、人事院・総務省の公表資料で確認する必要があります。" },
            { t: "残業代を含まない", d: "所定内給与額は残業代・休日出勤手当などを除いた額です。残業の多い職種では、実際の年収はこの値より高くなります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

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
          <li><Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal font-bold hover:underline">平均年収1000万円を超える職業</Link></li>
          <li><Link href="/knowledge/20dai-nenshu-500man/" className="text-teal font-bold hover:underline">20代で年収500万円の水準</Link></li>
          <li><Link href="/knowledge/salary-45sai/" className="text-teal font-bold hover:underline">45歳の平均年収</Link></li>
          <li><Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/ai-nakunaru-shigoto/" className="text-teal font-bold hover:underline">AIでなくなる仕事</Link></li>
          <li><Link href="/company/" className="text-teal font-bold hover:underline">企業別の平均年収（有価証券報告書）</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{SHOKUSHU_CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
