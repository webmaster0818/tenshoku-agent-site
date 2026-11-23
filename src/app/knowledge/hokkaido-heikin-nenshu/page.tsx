import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/hokkaido-heikin-nenshu/" },
  title: "北海道の平均年収は約466.6万円｜47都道府県中30位・男女別・年齢別・産業別【令和7年 賃金構造基本統計調査】",
  description:
    "北海道の平均年収の目安は約466.6万円で、全国（約545.6万円）の85.5%、47都道府県中30位です（厚生労働省「令和7年 賃金構造基本統計調査」から当サイトが算出）。男女別・年齢別・産業別の年収、47都道府県の順位、最低賃金1,131円、有効求人倍率0.98倍も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "北海道の平均年収は約466.6万円｜47都道府県中30位・男女別・年齢別・産業別",
    description: "令和7年 賃金構造基本統計調査の都道府県別の表から、北海道の年収を全国・男女・年齢・産業別に算出しています。",
  },
};

const CHECKED = "2026年11月23日";
const PREF_URL = "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040421202&fileKind=4";
const HKD_URL = "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040421167&fileKind=4";
const MW_URL = "https://www.mhlw.go.jp/content/11200000/001753404.pdf";
const JOB_URL = "https://jsite.mhlw.go.jp/hokkaido-roudoukyoku/content/contents/002872735.pdf";
const OFFICE_URL = "https://jsite.mhlw.go.jp/hokkaido-roudoukyoku/content/contents/002872719.pdf";

// 年収の目安 = きまって支給する現金給与額 × 12 + 年間賞与その他特別給与額（千円・当サイト算出）
const annual = (m: number, b: number) => m * 12 + b;
const man = (k: number) => `${(k / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

// 令和7年 賃金構造基本統計調査 参考表1（一般労働者・男女計・企業規模計10人以上）m=きまって支給する現金給与額 b=年間賞与その他特別給与額（千円）
const NATION = { m: 370.5, b: 1009.6, s: 340.6, age: 44.4, yrs: 12.7 };
const HKD = { m: 322.8, b: 792, s: 297.1, age: 45.8, yrs: 12.0 };
const prefs = [
  { p: "北海道", m: 322.8, b: 792 },
  { p: "青森", m: 282.4, b: 619 },
  { p: "岩手", m: 301.1, b: 651.8 },
  { p: "宮城", m: 342.3, b: 885.6 },
  { p: "秋田", m: 294.8, b: 726.2 },
  { p: "山形", m: 293.5, b: 715.8 },
  { p: "福島", m: 318.4, b: 731.3 },
  { p: "茨城", m: 362.3, b: 986.3 },
  { p: "栃木", m: 350.8, b: 963.9 },
  { p: "群馬", m: 338.6, b: 882 },
  { p: "埼玉", m: 357, b: 851.7 },
  { p: "千葉", m: 371.4, b: 892.5 },
  { p: "東京", m: 448.5, b: 1397.8 },
  { p: "神奈川", m: 402.9, b: 1086.3 },
  { p: "新潟", m: 316.7, b: 826.1 },
  { p: "富山", m: 329.7, b: 877.7 },
  { p: "石川", m: 331.7, b: 877.6 },
  { p: "福井", m: 326.4, b: 888.5 },
  { p: "山梨", m: 348.2, b: 924.2 },
  { p: "長野", m: 334.8, b: 899.3 },
  { p: "岐阜", m: 340.1, b: 879.9 },
  { p: "静岡", m: 345.8, b: 911.9 },
  { p: "愛知", m: 380.4, b: 1138.9 },
  { p: "三重", m: 356.9, b: 883 },
  { p: "滋賀", m: 362.1, b: 991.6 },
  { p: "京都", m: 366.8, b: 935 },
  { p: "大阪", m: 376.5, b: 986.4 },
  { p: "兵庫", m: 369.1, b: 1026 },
  { p: "奈良", m: 350.6, b: 803.2 },
  { p: "和歌山", m: 329.5, b: 814 },
  { p: "鳥取", m: 299.1, b: 706.4 },
  { p: "島根", m: 311.7, b: 724.7 },
  { p: "岡山", m: 332.2, b: 852.9 },
  { p: "広島", m: 351.9, b: 910.5 },
  { p: "山口", m: 338.9, b: 914.9 },
  { p: "徳島", m: 327.9, b: 775.8 },
  { p: "香川", m: 340.2, b: 899.7 },
  { p: "愛媛", m: 316.8, b: 806.9 },
  { p: "高知", m: 306.7, b: 629.8 },
  { p: "福岡", m: 342.7, b: 890.9 },
  { p: "佐賀", m: 305.8, b: 790.9 },
  { p: "長崎", m: 308.1, b: 770.8 },
  { p: "熊本", m: 317.1, b: 802.4 },
  { p: "大分", m: 318.5, b: 751.2 },
  { p: "宮崎", m: 287.6, b: 664.7 },
  { p: "鹿児島", m: 313.1, b: 771.7 },
  { p: "沖縄", m: 294.8, b: 576.8 },
];

// 都道府県別第1表（北海道）男女別・企業規模別（千円）
const sexRows = [
  { k: "男性", m: 357.6, b: 936.5, nm: 410.0, nb: 1187.0, age: 47.0, yrs: 13.7 },
  { k: "女性", m: 271.5, b: 579.5, nm: 304.7, nb: 714.3, age: 44.1, yrs: 9.5 },
];
const sizeRows = [
  { k: "1,000人以上", m: 349.7, b: 946.7 },
  { k: "10〜99人", m: 302.6, b: 621.0 },
];

// 都道府県別第1表（北海道）年齢階級別・男女計（千円）
const ageRows = [
  { k: "20〜24歳", m: 245.1, b: 400.5 },
  { k: "25〜29歳", m: 279.8, b: 631.6 },
  { k: "30〜34歳", m: 303.8, b: 678.4 },
  { k: "35〜39歳", m: 327.2, b: 822.8 },
  { k: "40〜44歳", m: 345.7, b: 920.8 },
  { k: "45〜49歳", m: 350.0, b: 951.7 },
  { k: "50〜54歳", m: 362.9, b: 1030.4 },
  { k: "55〜59歳", m: 355.2, b: 994.0 },
  { k: "60〜64歳", m: 311.2, b: 633.1 },
];

// 都道府県別第1表（北海道）産業別・男女計（千円）
const indRows = [
  { k: "電気・ガス・熱供給・水道業", m: 434.5, b: 1562.0, age: 44.2 },
  { k: "金融業，保険業", m: 417.4, b: 1424.1, age: 45.2 },
  { k: "情報通信業", m: 421.6, b: 1220.4, age: 43.2 },
  { k: "学術研究，専門・技術サービス業", m: 377.0, b: 1336.7, age: 43.8 },
  { k: "教育，学習支援業", m: 372.1, b: 1183.6, age: 45.2 },
  { k: "複合サービス事業", m: 335.3, b: 1484.3, age: 45.4 },
  { k: "建設業", m: 364.5, b: 860.0, age: 50.4 },
  { k: "卸売業，小売業", m: 321.9, b: 933.4, age: 45.1 },
  { k: "医療，福祉", m: 321.8, b: 798.7, age: 43.7 },
  { k: "製造業", m: 300.0, b: 774.2, age: 45.8 },
  { k: "運輸業，郵便業", m: 307.5, b: 559.0, age: 48.9 },
  { k: "宿泊業，飲食サービス業", m: 291.9, b: 501.1, age: 43.4 },
  { k: "サービス業（他に分類されないもの）", m: 269.5, b: 308.4, age: 45.9 },
].sort((a, z) => annual(z.m, z.b) - annual(a.m, a.b));

const ranked = prefs.map((x) => ({ ...x, a: annual(x.m, x.b) })).sort((a, z) => z.a - a.a);
const hkdRank = ranked.findIndex((x) => x.p === "北海道") + 1;
const HKD_A = annual(HKD.m, HKD.b);
const NATION_A = annual(NATION.m, NATION.b);

const faqData = [
  {
    q: "北海道の平均年収はいくらですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の都道府県別の結果から当サイトが算出した年収の目安は、約466.6万円です（きまって支給する現金給与額32.28万円×12か月＋年間賞与79.2万円）。全国の約545.6万円より約79.0万円低く、47都道府県中30位です。",
  },
  {
    q: "この年収はどのような人を対象にした値ですか？",
    a: "常用労働者10人以上の民営事業所などで働く一般労働者（短時間労働者を除く）の平均です。きまって支給する現金給与額には残業代などの超過労働給与が含まれ、所得税・社会保険料を引く前の額面です。パートタイムの方や従業員9人以下の事業所の方は含まれていません。",
  },
  {
    q: "北海道で年収が高い産業はどこですか？",
    a: "同じ調査の北海道の産業別の値から算出すると、電気・ガス・熱供給・水道業（約677.6万円）、金融業，保険業（約643.3万円）、情報通信業（約628.0万円）が上位です。低いのはサービス業（他に分類されないもの）の約354.2万円、宿泊業，飲食サービス業の約400.4万円です。",
  },
  {
    q: "北海道の最低賃金はいくらですか？",
    a: "令和8年10月1日から時間額1,131円です（厚生労働省 地域別最低賃金の全国一覧）。全国加重平均は1,177円です。",
  },
  {
    q: "北海道の求人は多いですか？",
    a: "厚生労働省「一般職業紹介状況（令和8年9月分）」では、北海道の有効求人倍率（就業地別・季節調整値）は0.98倍で、全国の1.19倍を下回っています。求職者1人あたりの求人が1件を下回る水準です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const sources = [
  { label: "厚生労働省「令和7年 賃金構造基本統計調査」都道府県別 参考表1（e-Stat・2026年3月24日公開）", url: PREF_URL },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査」都道府県別 第1表（北海道）", url: HKD_URL },
  { label: "厚生労働省 令和8年度 地域別最低賃金 全国一覧", url: MW_URL },
  { label: "北海道労働局 一般職業紹介状況（令和8年9月分）第6表", url: JOB_URL },
  { label: "北海道労働局 安定所別月間有効求人倍率（令和8年9月分）", url: OFFICE_URL },
];

const thc = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "北海道の平均年収" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            北海道の平均年収は約466.6万円｜47都道府県中30位【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: man(HKD_A), l: "北海道の年収の目安（当サイト算出）" },
              { v: `${hkdRank}位`, l: "47都道府県中の順位（当サイト算出）" },
              { v: `${((HKD_A / NATION_A) * 100).toFixed(1)}%`, l: `全国（${man(NATION_A)}）に対する割合` },
              { v: "0.98倍", l: "有効求人倍率（令和8年9月・全国1.19倍）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」によると、北海道の一般労働者のきまって支給する現金給与額は月32.28万円、年間賞与その他特別給与額は79.2万円です。
            これをもとに当サイトが算出した<strong>年収の目安は約466.6万円</strong>で、全国より約79.0万円低く、47都道府県中30位です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            年収の目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出した値で、調査の公表値ではありません。所得税・社会保険料を引く前の額面です。{CHECKED}に統計表で確認しています。
          </p>
        </div>

        <h2>北海道と全国の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className={thc}>北海道</th>
                <th className="p-3 text-right rounded-tr-lg">全国</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy"><td className="p-3">年収の目安（当サイト算出）</td><td className={thc}>{man(HKD_A)}</td><td className={thc}>{man(NATION_A)}</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">きまって支給する現金給与額（月）</td><td className={thc}>{man(HKD.m)}</td><td className={thc}>{man(NATION.m)}</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">うち所定内給与額（月）</td><td className={thc}>{man(HKD.s)}</td><td className={thc}>{man(NATION.s)}</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">年間賞与その他特別給与額</td><td className={thc}>{man(HKD.b)}</td><td className={thc}>{man(NATION.b)}</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">平均年齢</td><td className={thc}>{HKD.age}歳</td><td className={thc}>{NATION.age}歳</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">平均勤続年数</td><td className={thc}>{HKD.yrs.toFixed(1)}年</td><td className={thc}>{NATION.yrs}年</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          月給（きまって支給する現金給与額）は全国の87.1%、賞与は78.4%で、賞与の差のほうが大きくなっています（当サイト計算）。年収の差約79.0万円のうち、約21.8万円が賞与の差によるものです。
          平均年齢は全国より1.4歳高く、平均勤続年数は0.7年短い結果です。
        </p>

        <h2>男女別の年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className={thc}>北海道の年収の目安</th>
                <th className={thc}>全国の年収の目安</th>
                <th className={thc}>平均年齢</th>
                <th className="p-3 text-right rounded-tr-lg">平均勤続年数</th>
              </tr>
            </thead>
            <tbody>
              {sexRows.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={thc}>{man(annual(x.m, x.b))}</td>
                  <td className={thc}>{man(annual(x.nm, x.nb))}</td>
                  <td className={thc}>{x.age}歳</td>
                  <td className={thc}>{x.yrs}年</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          北海道の女性の年収の目安は男性の73.4%です（当サイト計算）。全国の女性（約437.1万円）と比べると約53.3万円低く、男性どうしの差（約87.9万円）より小さくなっています。
        </p>

        <h2>年齢別の年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={thc}>月給（きまって支給）</th>
                <th className={thc}>年間賞与</th>
                <th className="p-3 text-right rounded-tr-lg">年収の目安（当サイト算出）</th>
              </tr>
            </thead>
            <tbody>
              {ageRows.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={thc}>{man(x.m)}</td>
                  <td className={thc}>{man(x.b)}</td>
                  <td className={thc}>{man(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          北海道（男女計）では、年収の目安は50〜54歳の約538.5万円が最も高く、25〜29歳の約398.9万円から約1.35倍になります。60〜64歳では約437万円に下がります。
          全国の年齢別の水準は<Link href="/knowledge/salary-30sai/" className="text-teal underline">30歳の平均年収</Link>・<Link href="/knowledge/salary-40sai/" className="text-teal underline">40歳の平均年収</Link>のページで確認できます。
        </p>

        <h2>企業規模別の年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模（常用労働者数）</th>
                <th className={thc}>月給（きまって支給）</th>
                <th className={thc}>年間賞与</th>
                <th className="p-3 text-right rounded-tr-lg">年収の目安（当サイト算出）</th>
              </tr>
            </thead>
            <tbody>
              {sizeRows.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={thc}>{man(x.m)}</td>
                  <td className={thc}>{man(x.b)}</td>
                  <td className={thc}>{man(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">北海道では、従業員1,000人以上の企業と10〜99人の企業で、年収の目安に約89.1万円の差があります。差のうち約32.6万円は賞与の差です（当サイト計算）。</p>

        <h2>産業別の年収（北海道）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">産業</th>
                <th className={thc}>月給（きまって支給）</th>
                <th className={thc}>年間賞与</th>
                <th className={thc}>平均年齢</th>
                <th className="p-3 text-right rounded-tr-lg">年収の目安（当サイト算出）</th>
              </tr>
            </thead>
            <tbody>
              {indRows.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className={thc}>{man(x.m)}</td>
                  <td className={thc}>{man(x.b)}</td>
                  <td className={thc}>{x.age}歳</td>
                  <td className={thc}>{man(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※調査の産業大分類のうち、北海道の値が公表されている主な産業を掲載しています。並び順は年収の目安の高い順です。</p>
        <p className="mb-10">
          最も高い電気・ガス・熱供給・水道業と、最も低いサービス業（他に分類されないもの）では、年収の目安に約2倍の差があります。差が大きいのは賞与で、複合サービス事業（郵便局・農協など）は月給が北海道の平均に近い一方、賞与は148.4万円と高くなっています。
          北海道で年収を上げる転職を考える場合は、職種だけでなく産業ごとの賞与の水準も比べる方法が有効です。
        </p>

        <h2>47都道府県の年収の目安と順位</h2>
        <p>参考表1の47都道府県の値から、同じ計算方法で当サイトが算出した順位です。</p>
        <div className="overflow-x-auto mb-4 max-h-[32rem] overflow-y-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0">
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">都道府県</th>
                <th className={thc}>月給（きまって支給）</th>
                <th className={thc}>年間賞与</th>
                <th className="p-3 text-right rounded-tr-lg">年収の目安</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((x, i) => (
                <tr key={x.p} className={`border-b border-gray-100 ${x.p === "北海道" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{i + 1}位</td>
                  <td className="p-3">{x.p}</td>
                  <td className={thc}>{man(x.m)}</td>
                  <td className={thc}>{man(x.b)}</td>
                  <td className={thc}>{man(x.a)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          1位は東京都（約678.0万円）、47位は青森県（約400.8万円）です。北海道は29位の徳島県と31位の新潟県の間で、東北6県の中で最も高い宮城県（約499.3万円）より約32.8万円低い水準です。
        </p>

        <h2>北海道の最低賃金と求人の状況</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "最低賃金は時間額1,131円（令和8年10月1日から）", d: "前年度の1,075円から56円の引上げで、全国加重平均の1,177円を下回っています。北海道の一般労働者の平均の所定内実労働時間（月162時間）で働いた場合、月額は約18.3万円です（当サイト計算）。" },
            { t: "有効求人倍率は0.98倍（令和8年9月・就業地別・季節調整値）", d: "全国の1.19倍を下回っています。安定所別の原数値（季節調整前）では、札幌0.81倍、函館0.78倍、旭川0.89倍、帯広0.98倍、釧路1.07倍で、地域による差があります。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-10">※安定所別の値は季節調整前の原数値のため、北海道全体の季節調整値（0.98倍）とは直接比べられません。</p>

        <h2>北海道の年収を見るときの注意点</h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-sm">
          <li>賃金構造基本統計調査には市町村別の表がないため、札幌市と道内の他の地域の年収の差は、この調査からは分かりません。</li>
          <li>平均値は一部の高い賃金に引き上げられるため、多くの人の実感より高めに出ることがあります。</li>
          <li>年収の目安は額面です。手取りの目安は<Link href="/knowledge/tedori-450man/" className="text-teal underline">年収450万円の手取り</Link>・<Link href="/knowledge/tedori-480man/" className="text-teal underline">年収480万円の手取り</Link>のページで確認できます。</li>
        </ul>

        <h2>北海道の平均年収 よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p className="mb-10">
          令和7年 賃金構造基本統計調査から算出した北海道の年収の目安は約466.6万円で、全国の85.5%、47都道府県中30位です。全国との差は賞与で大きく、産業別では電気・ガス、金融・保険、情報通信が高い水準です。
          転職で年収を上げたい場合は、産業や企業規模による差を確認したうえで、<Link href="/review/" className="text-teal underline">転職エージェント</Link>に地域の求人の状況を相談する方法もあります。
        </p>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
