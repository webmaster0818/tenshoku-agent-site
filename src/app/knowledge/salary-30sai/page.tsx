import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-30sai/" },
  title: "30歳の平均年収は462万円（30〜34歳）・男性529万円・女性376万円【国税庁 令和7年分】",
  description:
    "30歳前後の平均年収を、国税庁「令和7年分 民間給与実態統計調査」と厚生労働省「令和7年 賃金構造基本統計調査」で確認しました。30〜34歳の平均給与は462万円（男性529万円・女性376万円）、一般労働者の月額賃金は31.2万円です。25〜29歳・35〜39歳との比較、年収462万円の手取りの試算も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "30歳の平均年収は462万円（30〜34歳）【国税庁 令和7年分】",
    description: "国税庁と厚生労働省の統計で、30歳前後の平均年収と男女差、前後の年齢との比較を確認しています。",
  },
};

const CHECKED = "2026年11月15日";

// 国税庁「令和7年分 民間給与実態統計調査」第14図（1年を通じて勤務した給与所得者・万円）
const nta = [
  { age: "25〜29歳", m: 460, f: 383, t: 425 },
  { age: "30〜34歳", m: 529, f: 376, t: 462 },
  { age: "35〜39歳", m: 598, f: 362, t: 503 },
  { age: "全年齢平均", m: 597, f: 342, t: 487 },
];

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表（一般労働者・令和7年6月分・千円）
const wage = [
  { age: "25〜29歳", t: 279.4, m: 288.0, f: 268.8 },
  { age: "30〜34歳", t: 312.3, m: 330.4, f: 283.2 },
  { age: "35〜39歳", t: 340.6, m: 366.2, f: 292.4 },
];

const r = calcTakeHome(4620000);

const faq = [
  {
    q: "30歳の平均年収はいくらですか？",
    a: "国税庁「令和7年分 民間給与実態統計調査」では、30〜34歳の1年を通じて勤務した給与所得者の平均給与は462万円（男性529万円・女性376万円）です。同調査は5歳刻みの公表のため、30歳ちょうどの平均は公表されていません。",
  },
  {
    q: "30歳の平均年収の中央値はいくらですか？",
    a: "国税庁・厚生労働省の公表資料（結果の概要）では、年齢階層別の年収の中央値は公表されていません。平均値は一部の高収入の人に引き上げられるため、中央値は平均より低くなるのが一般的ですが、具体的な値は当サイトでは確認できていません。",
  },
  {
    q: "30歳で年収462万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、年収462万円の手取りは年${man(r.net)}、月${man(r.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
  {
    q: "30代前半で男女の年収差はどのくらいですか？",
    a: "国税庁の同調査では、30〜34歳の平均給与は男性529万円、女性376万円で、差は153万円です。25〜29歳の差（77万円）から広がっています（当サイト計算）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "国税庁「令和7年分 民間給与実態統計調査」第14図 年齢階層別の平均給与", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(2) 性別にみた賃金 第2表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 調査の概要」（調査の時期：令和7年6月分の賃金）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/gaiyo.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "30歳の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            30歳の平均年収は462万円（30〜34歳）・男性529万円・女性376万円【国税庁 令和7年分】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "462万円", l: "30〜34歳の平均給与（男女計）" },
              { v: "529万円", l: "30〜34歳の男性" },
              { v: "376万円", l: "30〜34歳の女性" },
              { v: "31.2万円", l: "30〜34歳の月額賃金（一般労働者）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            30歳前後の平均年収は、国税庁「令和7年分 民間給与実態統計調査」によると<strong>30〜34歳で462万円</strong>です。男性は529万円、女性は376万円で、
            全年齢の平均（487万円）より25万円低い水準です。統計は5歳刻みのため、30歳ちょうどの値は公表されていません。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：国税庁・厚生労働省の公表資料（{CHECKED}に当サイトで確認）。差額・手取りは当サイトで計算しています。</p>
        </div>

        <h2>年齢階層別の平均年収（国税庁）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">男女計</th>
                <th className="p-3 text-right">男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {nta.map((x) => (
                <tr key={x.age} className={`border-b border-gray-100 ${x.age === "30〜34歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.age}</td>
                  <td className="p-3 text-right">{x.t}万円</td>
                  <td className="p-3 text-right">{x.m}万円</td>
                  <td className="p-3 text-right">{x.f}万円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※国税庁「令和7年分 民間給与実態統計調査」第14図。1年を通じて勤務した給与所得者（正社員以外を含む）の1人当たりの平均給与（給料・手当と賞与の合計）です。
        </p>
        <p className="mb-10">
          男女計では、25〜29歳の425万円から30〜34歳で37万円、35〜39歳でさらに41万円増えます。男性は年齢とともに上がり続ける一方、女性は25〜29歳の383万円が30代前半で376万円、
          30代後半で362万円と緩やかに下がっています。同調査は正社員以外も含む平均のため、働き方の違いが男女差に影響していると考えられます。
        </p>

        <h2>月額の賃金で見た30代前半（厚生労働省）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">男女計</th>
                <th className="p-3 text-right">男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {wage.map((x) => (
                <tr key={x.age} className={`border-b border-gray-100 ${x.age === "30〜34歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.age}</td>
                  <td className="p-3 text-right">{x.t.toFixed(1)}千円</td>
                  <td className="p-3 text-right">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right">{x.f.toFixed(1)}千円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第2表。短時間労働者以外の一般労働者の、令和7年6月分の月額の賃金です。残業代や賞与は含まれないため、上の国税庁の年収とは定義が異なります。
        </p>
        <p className="mb-10">
          30〜34歳の一般労働者の月額賃金は312.3千円（男性330.4千円・女性283.2千円）で、前年より4.3%増えています。
          月額賃金を12倍すると約375万円になり、国税庁の平均給与（462万円）との差には、賞与や残業代などが含まれると考えられます（当サイト計算）。
        </p>

        <h2>30歳前後で転職を考えるときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "比べる年収の定義をそろえる", d: "求人票の「想定年収」は賞与や固定残業代を含むことが多く、月給だけの比較とは異なります。国税庁の平均給与は賞与込み、賃金構造基本統計調査の月額賃金は賞与・残業代を含まない値です。" },
            { t: "手取りで比べる", d: `年収462万円の手取りは年${man(r.net)}（月${man(r.netMonthly)}）です（当サイト試算）。年収別の手取りは年収400万円・500万円のページにまとめています。` },
            { t: "年代に合った転職エージェントを選ぶ", d: "30代向けの求人を多く扱う転職エージェントを比べると、提示される年収の幅が分かります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          30代向けの転職エージェントは<Link href="/age/30s/" className="text-teal font-bold hover:underline">30代におすすめの転職エージェント</Link>で比較しています。
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
          <li><Link href="/age/30s/" className="text-teal font-bold hover:underline">30代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/tedori-400man/" className="text-teal font-bold hover:underline">年収400万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
          <li><Link href="/company/" className="text-teal font-bold hover:underline">企業別の平均年収（有価証券報告書）</Link></li>
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
