import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, man, yen as yenFmt } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-40sai/" },
  title: "40歳の平均年収は約554万円（40〜44歳）・男性約614万円・女性約447万円【令和7年 賃金構造基本統計調査】",
  description:
    "40歳前後の平均年収を、厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額と年間賞与から当サイトで算出しました。40〜44歳は約554万円（男性約614万円・女性約447万円）です。学歴別・勤続年数別の比較と、40歳から加わる介護保険料を反映した手取りの試算も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "40歳の平均年収は約554万円（40〜44歳）【令和7年 賃金構造基本統計調査】",
    description: "厚生労働省の統計から、40歳前後の平均年収を性別・学歴別・勤続年数別に算出しています。",
  },
};

const CHECKED = "2026年11月20日";

// 年収（万円）＝ 所定内給与額（千円）×12 ＋ 年間賞与その他特別給与額（千円）
const annual = (m: number, b: number) => Math.round(m * 12 + b) / 10;
const f1 = (v: number) => `約${v.toFixed(1)}万円`;

// e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表（産業計・企業規模計・民営事業所）千円
const ages = [
  { age: "35〜39歳", t: [340.6, 1046.7], m: [366.2, 1200.8], f: [292.4, 756.9] },
  { age: "40〜44歳", t: [364.3, 1167.2], m: [398.2, 1359.4], f: [303.6, 822.2] },
  { age: "45〜49歳", t: [377.9, 1223.4], m: [420.7, 1456.8], f: [305.7, 829.7] },
  { age: "50〜54歳", t: [388.8, 1316.5], m: [437.5, 1580.7], f: [305.4, 863.5] },
];

// 同表 40〜44歳・男女計の学歴別
const edu = [
  { k: "中学卒", v: [301.2, 684.7] },
  { k: "高校卒", v: [309.0, 848.3] },
  { k: "専門学校卒", v: [321.6, 880.3] },
  { k: "高専・短大卒", v: [336.9, 1069.8] },
  { k: "大学卒", v: [425.3, 1557.1] },
  { k: "大学院卒", v: [553.7, 2528.7] },
];

// 同表 40〜44歳・男女計の勤続年数別（労働者数は十人単位）
const tenure = [
  { k: "0年", v: [317.6, 67.6] },
  { k: "1〜2年", v: [321.9, 600.4] },
  { k: "3〜4年", v: [329.4, 768.5] },
  { k: "5〜9年", v: [333.8, 903.4] },
  { k: "10〜14年", v: [349.0, 1046.9] },
  { k: "15〜19年", v: [410.0, 1698.0] },
  { k: "20〜24年", v: [403.4, 1657.4] },
];

const T = annual(364.3, 1167.2);
const M = annual(398.2, 1359.4);
const F = annual(303.6, 822.2);
const T35 = annual(340.6, 1046.7);
const T45 = annual(377.9, 1223.4);
const u40 = calcTakeHome(Math.round(T * 10000));
const o40 = calcTakeHome(Math.round(T * 10000), true);

const faq = [
  {
    q: "40歳の平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の40〜44歳（一般労働者・男女計）は、所定内給与額が月36.43万円、年間賞与その他特別給与額が116.72万円です。所定内給与額の12か月分と賞与を合計すると${f1(T)}です（当サイト計算）。同調査は5歳刻みのため、40歳ちょうどの値は公表されていません。`,
  },
  {
    q: "40歳の男性・女性の平均年収はいくらですか？",
    a: `同じ方法で計算すると、40〜44歳の男性は${f1(M)}、女性は${f1(F)}で、差は${f1(M - F)}です（当サイト計算）。35〜39歳の男女差（${f1(annual(366.2, 1200.8) - annual(292.4, 756.9))}）より広がっています。`,
  },
  {
    q: "40歳になると手取りが減るのはなぜですか？",
    a: `40歳から64歳までの人は、健康保険料と一緒に介護保険料（第2号被保険者）を納めます。年収${T.toFixed(1)}万円の場合、東京都・協会けんぽ・独身・賞与なしの前提で、手取りは39歳以下の年${man(u40.net)}から40歳以上は年${man(o40.net)}になり、年${yenFmt(u40.net - o40.net)}少なくなります（令和8年度の料率による当サイト試算）。`,
  },
  {
    q: "40歳で年収554万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・賞与なし・介護保険料ありの前提で、年収${T.toFixed(1)}万円の手取りは年${man(o40.net)}、月${man(o40.netMonthly)}です（令和8年分の税制・保険料率による当サイト試算）。`,
  },
  {
    q: "40代前半で転職した人の給与はどのくらいですか？",
    a: "同調査で40〜44歳を勤続年数別に見ると、勤続0年の人の所定内給与額は月31.76万円で、勤続15〜19年の人（月41.00万円）より月9.24万円低くなっています。これは同じ人の転職前後を比べたものではなく、各勤続年数に在籍している人の平均です。転職後の年収は職種・企業によって異なるため、求人ごとの提示額で確認してください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表「学歴、年齢階級、勤続年数階級別所定内給与額及び年間賞与その他特別給与額」（産業計）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 調査の概要」（調査の時期：令和7年6月分の賃金、賞与は令和6年1年間）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/gaiyo.html" },
  { label: "協会けんぽ 令和8年度保険料率のお知らせ（介護保険料率 1.62%）", url: "https://www.kyoukaikenpo.or.jp/g7/cat330/sb3130/r08/" },
  { label: "協会けんぽ 令和8年度 都道府県単位保険料率（東京都 9.85%）", url: "https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/rate_prefectures/r08" },
];

const yen = (v: number) => `${v.toFixed(1)}千円`;

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "40歳の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            40歳の平均年収は約554万円（40〜44歳）・男性約614万円・女性約447万円【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: f1(T), l: "40〜44歳の年収（男女計・当サイト計算）" },
              { v: f1(M), l: "40〜44歳の男性" },
              { v: f1(F), l: "40〜44歳の女性" },
              { v: "36.43万円", l: "40〜44歳の所定内給与額（月額）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」から算出すると、40歳前後（40〜44歳）の平均年収は<strong>{f1(T)}</strong>です。
            男性は{f1(M)}、女性は{f1(F)}です。35〜39歳（{f1(T35)}）より約{Math.round(T - T35)}万円高く、45〜49歳（{f1(T45)}）より約{Math.round(T45 - T)}万円低い水準です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代・休日出勤手当などの所定外給与は含みません。
            統計値は{CHECKED}にe-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>35〜54歳の平均年収（男女別）</h2>
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
                <tr key={x.age} className={`border-b border-gray-100 ${x.age === "40〜44歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
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
          35〜39歳から40〜44歳にかけて、男性は約54万円増える一方、女性の増加は約20万円です。女性は40代以降の年収の伸びが小さく、50〜54歳でも{f1(annual(305.4, 863.5))}にとどまります。
          同調査は同じ人を追跡したものではなく、各年齢階級に在職している人の平均であるため、役職・職種・雇用形態の構成の違いも差に表れていると考えられます。
        </p>

        <h2>40〜44歳の学歴別の平均年収</h2>
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
        <p className="text-xs text-text-muted mb-4">
          ※同表の40〜44歳・男女計。学歴別の年収全体の比較は<Link href="/knowledge/daisotsu-nenshu/" className="text-teal hover:underline">大卒の平均年収</Link>のページにまとめています。
        </p>
        <p className="mb-10">
          40〜44歳では、大学卒（{f1(annual(425.3, 1557.1))}）と高校卒（{f1(annual(309.0, 848.3))}）の差が約{Math.round(annual(425.3, 1557.1) - annual(309.0, 848.3))}万円あり、差の約3分の1は年間賞与の違いによるものです（当サイト計算）。
        </p>

        <h2>40〜44歳の勤続年数別の給与（転職者と在籍が長い人の差）</h2>
        <p>
          40歳前後で転職を考える方に向けて、同じ40〜44歳の中で勤続年数ごとの給与を並べました。勤続0年には、その年に入社した転職者などが含まれます。
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
          ※同表の40〜44歳・男女計。年間賞与は前年（令和6年）1年間の支給額のため、勤続0年・1〜2年の人は在籍期間が短く賞与が少なく出ます。
        </p>
        <p className="mb-10">
          賞与の影響を除いて月額の所定内給与額で比べると、勤続0〜9年は317.6〜333.8千円と大きな差がない一方、勤続15〜19年は410.0千円で、勤続10〜14年（349.0千円）から月6.1万円高くなっています。
          40〜44歳で勤続15年以上の人は、新卒または20代で入社して同じ会社に勤めている人が中心と考えられます（当サイトの推測）。
          転職の初年度は賞与の算定期間が短くなることが多いため、年収で比べるときは求人票の「想定年収」の内訳（賞与の月数・初年度の扱い）を確認してください。
        </p>

        <h2>40歳からの手取り（介護保険料の影響）</h2>
        <p>
          40歳になると、健康保険料に介護保険料が加わります（介護保険の第2号被保険者）。協会けんぽ東京支部の令和8年度料率で、年収{T.toFixed(1)}万円の手取りを試算すると次のとおりです（独身・賞与なし）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-right">社会保険料（年）</th>
                <th className="p-3 text-right">手取り（年）</th>
                <th className="p-3 text-right rounded-tr-lg">手取り（月）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3">39歳以下（介護保険料なし）</td>
                <td className="p-3 text-right">{yenFmt(u40.social)}</td>
                <td className="p-3 text-right">{man(u40.net)}</td>
                <td className="p-3 text-right">{man(u40.netMonthly)}</td>
              </tr>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">40〜64歳（介護保険料あり）</td>
                <td className="p-3 text-right">{yenFmt(o40.social)}</td>
                <td className="p-3 text-right">{man(o40.net)}</td>
                <td className="p-3 text-right">{man(o40.netMonthly)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          この試算では、介護保険料の負担で手取りが年{yenFmt(u40.net - o40.net)}少なくなります（社会保険料控除が増えるため、所得税・住民税は少し下がった後の差額です）。
          扶養家族の有無や加入する健康保険によって変わります。年収別の手取りは<Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">年収別の手取り早見表</Link>で確認できます。
        </p>

        <h2>40歳前後で転職を考えるときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "比べる年収の定義をそろえる", d: "本ページの年収は残業代を含みません。求人票の想定年収は固定残業代や賞与の見込みを含むことが多いため、月給・賞与・残業代を分けて比べてください。" },
            { t: "勤続年数による給与の差を把握する", d: "上の表のとおり、40〜44歳では勤続15年以上の人の所定内給与額が高くなっています。現職で長く勤めている方は、転職先の提示額が現在の給与を下回らないか、役職・等級の扱いとあわせて確認してください。" },
            { t: "40代向けの求人を扱う転職エージェントを比べる", d: "管理職や専門職の求人は、扱う転職エージェントによって件数が異なります。複数のエージェントで同じ職種の提示額を比べると相場がつかめます。" },
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
          <li><Link href="/knowledge/salary-35sai/" className="text-teal font-bold hover:underline">35歳の平均年収</Link></li>
          <li><Link href="/knowledge/salary-45sai/" className="text-teal font-bold hover:underline">45歳の平均年収</Link></li>
          <li><Link href="/age/40s/" className="text-teal font-bold hover:underline">40代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-600man/" className="text-teal font-bold hover:underline">年収600万円の手取り</Link></li>
          <li><Link href="/company/nitori/" className="text-teal font-bold hover:underline">ニトリの平均年収（持株会社の平均年齢39.6歳）</Link></li>
          <li><Link href="/knowledge/tedori-350man/" className="text-teal font-bold hover:underline">年収350万円の手取り</Link></li>
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
