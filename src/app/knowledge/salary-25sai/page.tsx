import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-25sai/" },
  title: "25歳の平均年収は425万円（25〜29歳）・20〜24歳は280万円【国税庁 令和7年分】",
  description:
    "25歳前後の平均年収を国税庁「令和7年分 民間給与実態統計調査」と厚生労働省「令和7年 賃金構造基本統計調査」で確認しました。25〜29歳の平均給与は425万円（男性460万円・女性383万円）、20〜24歳は280万円です。大学卒の初任給との比較、手取りの試算も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "25歳の平均年収は425万円（25〜29歳）【国税庁 令和7年分】",
    description: "国税庁と厚生労働省の統計で、25歳前後の平均年収と初任給からの伸びを確認しています。",
  },
};

const CHECKED = "2026年11月16日";

// 国税庁「令和7年分 民間給与実態統計調査」第14図（1年を通じて勤務した給与所得者・万円）
const nta = [
  { age: "20〜24歳", m: 294, f: 265, t: 280 },
  { age: "25〜29歳", m: 460, f: 383, t: 425 },
  { age: "30〜34歳", m: 529, f: 376, t: 462 },
  { age: "全年齢平均", m: 597, f: 342, t: 487 },
];

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第10表（新規学卒者・男女計・千円）
const starting = [
  { e: "高校", v: 207.3 },
  { e: "専門学校", v: 230.7 },
  { e: "高専・短大", v: 235.5 },
  { e: "大学", v: 262.3 },
  { e: "大学院", v: 299.0 },
];

const r = calcTakeHome(4250000);

const faq = [
  {
    q: "25歳の平均年収はいくらですか？",
    a: "国税庁「令和7年分 民間給与実態統計調査」では、25〜29歳の1年を通じて勤務した給与所得者の平均給与は425万円（男性460万円・女性383万円）です。同調査は5歳刻みの公表のため、25歳ちょうどの平均は公表されていません。",
  },
  {
    q: "20〜24歳の平均年収が低いのはなぜですか？",
    a: "国税庁の同調査の20〜24歳の平均給与は280万円です。この年齢層は勤続年数が短い人が中心で、在学中に働く人なども含まれます。また、同調査は1年を通じて勤務した人が対象のため、その年の4月に入社した新卒者は含まれません。",
  },
  {
    q: "25歳で年収425万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、年収425万円の手取りは年${man(r.net)}、月${man(r.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
  {
    q: "大学卒の初任給はいくらですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」では、令和7年の新規学卒者（大学）の賃金は月26.2万円（男女計262.3千円・対前年5.6%増）です。同調査の25〜29歳の一般労働者の賃金は月27.9万円で、大学卒の初任給との差は月1.7万円です（当サイト計算）。",
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
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(10) 新規学卒者の学歴別にみた賃金 第10表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/10.pdf" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "25歳の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            25歳の平均年収は425万円（25〜29歳）・20〜24歳は280万円【国税庁 令和7年分】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "425万円", l: "25〜29歳の平均給与（男女計）" },
              { v: "280万円", l: "20〜24歳の平均給与（男女計）" },
              { v: "26.2万円", l: "大学卒の初任給（令和7年）" },
              { v: "27.9万円", l: "25〜29歳の月額賃金（一般労働者）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            25歳前後の平均年収は、国税庁「令和7年分 民間給与実態統計調査」によると<strong>25〜29歳で425万円</strong>です。男性は460万円、女性は383万円です。
            1つ下の20〜24歳は280万円で、25〜29歳とは145万円の差があります。統計は5歳刻みのため、25歳ちょうどの値は公表されていません。
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
                <tr key={x.age} className={`border-b border-gray-100 ${x.age === "25〜29歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
          ※国税庁「令和7年分 民間給与実態統計調査」第14図。1年を通じて勤務した給与所得者の平均給与（賞与を含む）です。正社員以外の方も含みます。
        </p>
        <p className="mb-10">
          男女の差は、20〜24歳では29万円ですが、25〜29歳では77万円に広がります（当サイト計算）。25〜29歳の平均給与は全年齢の平均（487万円）より62万円低い水準です。
          30歳前後の詳しい比較は<Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link>に掲載しています。
        </p>

        <h2>初任給から25〜29歳までの月額賃金の伸び（厚労省）</h2>
        <p>
          厚生労働省「令和7年 賃金構造基本統計調査」は、毎年6月分の所定内給与額（残業代・賞与を含まない月額）を調べています。新規学卒者の学歴別の賃金と、年齢階級別の一般労働者の賃金は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">新規学卒者の学歴</th>
                <th className="p-3 text-right rounded-tr-lg">賃金（月額・男女計）</th>
              </tr>
            </thead>
            <tbody>
              {starting.map((x) => (
                <tr key={x.e} className={`border-b border-gray-100 ${x.e === "大学" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.e}</td>
                  <td className="p-3 text-right">{x.v.toFixed(1)}千円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢階級（一般労働者）</th>
                <th className="p-3 text-right">男女計</th>
                <th className="p-3 text-right">男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {[
                { a: "20〜24歳", t: 242.8, m: 245.7, f: 239.6 },
                { a: "25〜29歳", t: 279.4, m: 288.0, f: 268.8 },
                { a: "30〜34歳", t: 312.3, m: 330.4, f: 283.2 },
              ].map((x) => (
                <tr key={x.a} className={`border-b border-gray-100 ${x.a === "25〜29歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.a}</td>
                  <td className="p-3 text-right">{x.t.toFixed(1)}千円</td>
                  <td className="p-3 text-right">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right">{x.f.toFixed(1)}千円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第10表（新規学卒者）・第2表（性、年齢階級別賃金）。令和7年6月分の所定内給与額です。
        </p>
        <p className="mb-10">
          令和7年の大学卒の初任給は262.3千円で、25〜29歳の一般労働者の279.4千円との差は17.1千円です（当サイト計算）。ただし、初任給は令和7年に入社した人の値、年齢階級別の賃金はその年齢の在職者全体の値で、同じ人の数年間の伸びを追ったものではありません。
        </p>

        <h2>25歳前後の年収と転職</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "年収425万円の手取りは月約28万円", d: `東京都・協会けんぽ・独身・賞与なしの前提で、年収425万円の手取りは年${man(r.net)}、月${man(r.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。` },
            { t: "大学卒の25歳は「卒業後3年以内」にあたる", d: "厚生労働省の青少年雇用機会確保指針は、新卒採用枠に卒業後少なくとも3年間は応募できるようにすることを事業主に求めています。22歳で大学を卒業した方は、25歳の3月末で卒業後3年を迎えます。" },
            { t: "平均との比較は職種・業種・雇用形態をそろえる", d: "国税庁の平均給与は正社員以外も含む全体の平均です。自分の年収と比べる場合は、同じ業種・職種の求人の提示額も確認すると、差の理由が分かりやすくなります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          卒業後3年以内の転職は<Link href="/knowledge/dai2-shinsotsu-itsumade/" className="text-teal font-bold hover:underline">第二新卒はいつまで</Link>、
          20代向けの転職エージェントは<Link href="/age/20s/" className="text-teal font-bold hover:underline">20代におすすめの転職エージェント</Link>にまとめています。
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
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-400man/" className="text-teal font-bold hover:underline">年収400万円の手取り</Link></li>
          <li><Link href="/knowledge/dai2-shinsotsu-itsumade/" className="text-teal font-bold hover:underline">第二新卒はいつまで</Link></li>
          <li><Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒におすすめの転職エージェント</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
          <li><a href="https://www.mhlw.go.jp/web/t_doc?dataId=00009730&dataType=0&pageNo=1" target="_blank" rel="noopener noreferrer" className="hover:underline">厚生労働省 青少年雇用機会確保指針（平成27年厚生労働省告示第406号）</a></li>
        </ul>
      </article>
    </>
  );
}
