import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-35sai/" },
  title: "35歳の平均年収は約513万円（35〜39歳）・男性約560万円・女性約427万円【令和7年 賃金構造基本統計調査】",
  description:
    "35歳前後の平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額と年間賞与から当サイトで算出しました。35〜39歳は約513万円（男性約560万円・女性約427万円）です。学歴別、勤続年数別（転職して間もない人と長く勤めている人の差）、30代前半・40代前半との比較、手取りの試算も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "35歳の平均年収は約513万円（35〜39歳）【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省の統計から、35歳前後の平均年収を性別・学歴別・勤続年数別に算出しています。",
  },
};

const CHECKED = "2026年11月20日";

// 年収（万円）＝ 所定内給与額（千円）×12 ＋ 年間賞与その他特別給与額（千円）
const annual = (m: number, b: number) => Math.round(m * 12 + b) / 10;
const f1 = (v: number) => `約${v.toFixed(1)}万円`;

// e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・企業規模計・民営事業所）千円
const ages = [
  { age: "25〜29歳", t: [279.4, 727.2], m: [288.0, 791.6], f: [268.8, 647.3] },
  { age: "30〜34歳", t: [312.3, 894.4], m: [330.4, 1012.8], f: [283.2, 703.5] },
  { age: "35〜39歳", t: [340.6, 1046.7], m: [366.2, 1200.8], f: [292.4, 756.9] },
  { age: "40〜44歳", t: [364.3, 1167.2], m: [398.2, 1359.4], f: [303.6, 822.2] },
  { age: "45〜49歳", t: [377.9, 1223.4], m: [420.7, 1456.8], f: [305.7, 829.7] },
];

// 同表 35〜39歳・男女計の学歴別
const edu = [
  { k: "高校卒", v: [296.6, 829.1] },
  { k: "専門学校卒", v: [302.7, 802.7] },
  { k: "高専・短大卒", v: [313.4, 953.8] },
  { k: "大学卒", v: [382.2, 1309.6] },
  { k: "大学院卒", v: [466.6, 1901.8] },
];

// 同表 35〜39歳・男女計の勤続年数別
const tenure = [
  { k: "0年", v: [301.7, 92.7], n: 17983 },
  { k: "1〜2年", v: [321.0, 647.4], n: 36650 },
  { k: "3〜4年", v: [317.9, 783.6], n: 26175 },
  { k: "5〜9年", v: [324.8, 919.4], n: 65693 },
  { k: "10〜14年", v: [361.6, 1304.7], n: 70498 },
  { k: "15〜19年", v: [365.5, 1480.6], n: 60675 },
  { k: "20〜24年", v: [350.3, 1412.7], n: 6932 },
];

const T = annual(340.6, 1046.7);
const M = annual(366.2, 1200.8);
const F = annual(292.4, 756.9);
const r = calcTakeHome(Math.round(T * 10000));

const faq = [
  {
    q: "35歳の平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の35〜39歳（一般労働者・男女計）は、所定内給与額が月34.06万円、年間賞与その他特別給与額が104.67万円です。所定内給与額の12か月分と賞与を合計すると${f1(T)}です（当サイト計算）。同調査は5歳刻みのため、35歳ちょうどの値は公表されていません。`,
  },
  {
    q: "35歳の男性・女性の平均年収はいくらですか？",
    a: `同じ方法で計算すると、35〜39歳の男性は${f1(M)}、女性は${f1(F)}で、差は${f1(M - F)}です（当サイト計算）。30〜34歳の男女差（${f1(annual(330.4, 1012.8) - annual(283.2, 703.5))}）より広がっています。`,
  },
  {
    q: "国税庁の統計では35歳の平均年収はいくらですか？",
    a: "国税庁「民間給与実態統計調査」でも年齢階層別の平均給与が公表されています。当サイトの「30歳の平均年収」のページに35〜39歳の値を掲載しています。国税庁の統計は正社員以外を含む1年を通じて勤務した給与所得者が対象で、残業代も含むため、本ページの値（一般労働者・所定内給与と賞与）とは定義が異なります。",
  },
  {
    q: "35歳で年収513万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なしの前提で、年収${T.toFixed(1)}万円の手取りは年${man(r.net)}、月${man(r.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
  {
    q: "35歳で転職すると年収は下がりますか？",
    a: "同調査で35〜39歳を勤続年数別に見ると、勤続0年の人の所定内給与額は月30.17万円で、勤続10〜14年の人（月36.16万円）より低くなっています。ただし、これは同じ人の転職前後を比べたものではなく、各勤続年数に在籍している人の平均です。転職後の年収は職種・企業によって異なるため、求人ごとの提示額で確認してください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表「学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額」（産業計）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(2) 性別にみた賃金 第2表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/02.pdf" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 調査の概要」（調査の時期：令和7年6月分の賃金、賞与は令和6年1年間）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/gaiyo.html" },
];

const yen = (v: number) => `${v.toFixed(1)}千円`;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "35歳の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            35歳の平均年収は約513万円（35〜39歳）・男性約560万円・女性約427万円【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(T), l: "35〜39歳の年収（男女計・当サイト計算）" },
              { v: f1(M), l: "35〜39歳の男性" },
              { v: f1(F), l: "35〜39歳の女性" },
              { v: "34.06万円", l: "35〜39歳の所定内給与額（月額）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、35歳前後（35〜39歳）の平均年収は<strong>{f1(T)}</strong>です。
            男性は{f1(M)}、女性は{f1(F)}です。30〜34歳（{f1(annual(312.3, 894.4))}）から約49万円高く、40〜44歳（{f1(annual(364.3, 1167.2))}）より約40万円低い水準です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代・休日出勤手当などの所定外給与は含みません。
            統計値は{CHECKED}に厚生労働省・e-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>年齢階級別の平均年収（男女別）</h2>
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
              {ages.map((x) => (
                <tr key={x.age} className={`border-b border-gray-100 ${x.age === "35〜39歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.age}</td>
                  <td className="p-3 text-right">{f1(annual(x.t[0], x.t[1]))}</td>
                  <td className="p-3 text-right">{f1(annual(x.m[0], x.m[1]))}</td>
                  <td className="p-3 text-right">{f1(annual(x.f[0], x.f[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・企業規模10人以上・民営事業所）の所定内給与額×12＋年間賞与その他特別給与額（当サイト計算）。短時間労働者は含みません。
        </p>
        <p className="mb-10">
          男性は30代前半から30代後半にかけて約62万円増える一方、女性の増加は約16万円にとどまります。
          同調査は同じ人を追跡したものではなく、各年齢階級に在職している人の平均であるため、働き方や職種の構成の違いも差に表れていると考えられます。
        </p>

        <h2>35〜39歳の学歴別の平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">学歴</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {edu.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{yen(x.v[0])}</td>
                  <td className="p-3 text-right">{yen(x.v[1])}</td>
                  <td className="p-3 text-right font-bold">{f1(annual(x.v[0], x.v[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※同表の35〜39歳・男女計。学歴別の年収全体の比較は<Link href="/knowledge/daisotsu-nenshu/" className="text-teal hover:underline">大卒の平均年収</Link>のページにまとめています。
        </p>

        <h2>35〜39歳の勤続年数別の給与（転職者と在籍が長い人の差）</h2>
        <p>
          35歳前後で転職を考える方に向けて、同じ35〜39歳の中で勤続年数ごとの給与を並べました。勤続0年には、その年に入社した転職者などが含まれます。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">勤続年数</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {tenure.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{yen(x.v[0])}</td>
                  <td className="p-3 text-right">{yen(x.v[1])}</td>
                  <td className="p-3 text-right">{f1(annual(x.v[0], x.v[1]))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同表の35〜39歳・男女計。年間賞与は前年（令和6年）1年間の支給額のため、勤続0年・1〜2年の人は在籍期間が短く賞与が少なく出ます。
        </p>
        <p className="mb-10">
          賞与の影響を除いて月額の所定内給与額で比べると、勤続0年は301.7千円、1〜9年は317.9〜324.8千円、10〜14年は361.6千円です。
          35〜39歳で勤続10年以上の人は、新卒または20代で入社して同じ会社に勤めている人が中心と考えられ、勤続1〜9年の人との差は月4万円前後、勤続0年の人との差は月約6万円です（当サイト計算）。
          転職の初年度は賞与の算定期間が短くなることが多いため、年収で比べるときは求人票の「想定年収」の内訳（賞与の月数・初年度の扱い）を確認してください。
        </p>

        <h2>手取りの目安</h2>
        <p className="mb-10">
          年収{T.toFixed(1)}万円の手取りは、東京都・協会けんぽ・独身・賞与なしの前提で年{man(r.net)}、月{man(r.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。
          扶養家族の有無や住んでいる市区町村によって変わります。年収別の手取りは<Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">年収別の手取り早見表</Link>で確認できます。
        </p>

        <h2>35歳前後で転職を考えるときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "比べる年収の定義をそろえる", d: "本ページの年収は残業代を含みません。求人票の想定年収は固定残業代や賞与の見込みを含むことが多いため、月給・賞与・残業代を分けて比べてください。" },
            { t: "初年度の賞与を確認する", d: "上の勤続年数別の表のとおり、入社1年目は賞与の算定期間が短く、年収が低く出やすくなります。初年度の賞与の扱いは内定時の条件通知書で確認できます。" },
            { t: "30代向けの求人を扱う転職エージェントを比べる", d: "提示される年収の幅は、エージェントが扱う求人によって異なります。複数のエージェントで同じ職種の提示額を比べると相場がつかめます。" },
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
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/age/30s/" className="text-teal font-bold hover:underline">30代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
          <li><Link href="/company/mizuho-bank/" className="text-teal font-bold hover:underline">みずほ銀行の平均年収（平均年齢40.7歳）</Link></li>
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
