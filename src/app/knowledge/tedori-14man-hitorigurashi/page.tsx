import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { calcTakeHome, yen } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tedori-14man-hitorigurashi/" },
  title: "手取り14万円で一人暮らしはできる？単身の会社員の平均生活費17.9万円と比較【家計調査 2025年】",
  description:
    "手取り14万円の一人暮らしを、総務省「家計調査 2025年」の単身世帯・勤労者・34歳以下の支出と比べました。平均の消費支出179,225円は手取り14万円を39,225円上回ります。費目別の平均、家賃別に残るお金、必要な額面（月170,000円）と最低賃金との比較も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "手取り14万円で一人暮らしはできる？単身の会社員の平均生活費17.9万円と比較【家計調査 2025年】",
    description: "家計調査の単身勤労者の支出と、手取り14万円の家計を費目別に比べています。",
  },
};

const CHECKED = "2026年11月26日";
const TAKE = 140000;

// 手取り14万円に必要な額面（東京都・協会けんぽ・独身・40歳未満・賞与なし。月給1,000円刻みで手取り14万円以上になる最小額）
const MONTHLY = 170000;
const r = calcTakeHome(MONTHLY * 12);

// 総務省「家計調査（家計収支編）2025年」単身世帯 第2表 勤労者世帯・34歳以下（1か月平均・円）
const KAKEI_AGE = 27.2;
const ITEMS = [
  { k: "食料", v: 41938 },
  { k: "住居", v: 34489 },
  { k: "光熱・水道", v: 8147 },
  { k: "家具・家事用品", v: 5806 },
  { k: "被服及び履物", v: 6360 },
  { k: "保健医療", v: 6956 },
  { k: "交通・通信", v: 21172 },
  { k: "教育", v: 162 },
  { k: "教養娯楽", v: 24659 },
  { k: "その他の消費支出", v: 29535 },
];
const CONSUMPTION = 179225;
const HOUSING = 34489;
const RENT_PAY_SHARE = 77.4; // 家賃・地代を支払っている世帯の割合（%）
const OWN_SHARE = 8.2; // 持家率（%）
const nonHousing = CONSUMPTION - HOUSING;
// 費目のうち、家賃以外で毎月ほぼ必ずかかる「食料」「光熱・水道」「交通・通信」「保健医療」の合計（当サイトでの区分）
const BASIC = 41938 + 8147 + 21172 + 6956;

// 総務省「令和5年 住宅・土地統計調査」第123-1表 1人世帯の1か月当たり家賃（借家全体・円）
const SINGLE_ALL = 52510;
const SINGLE_TOKYO = 73684;

// 厚生労働省「令和8年度 地域別最低賃金 全国一覧」（答申された改定額・円）
const MW = { avg: 1177, tokyo: 1280, min: 1085 };
const monthlyAtMw = (mw: number, holidays: number) => Math.ceil((mw * 8 * (365 - holidays)) / 12);
const hourlyOf = (m: number, holidays: number) => m / ((8 * (365 - holidays)) / 12);

const pctOf = (v: number) => `約${Math.round((v / TAKE) * 100)}%`;
const RENTS = [30000, 40000, 45000, 50000, SINGLE_ALL];

const faq = [
  {
    q: "手取り14万円で一人暮らしはできますか？",
    a: `総務省「家計調査 2025年」の単身世帯・勤労者・34歳以下の消費支出は月${yen(CONSUMPTION)}で、手取り14万円を${yen(CONSUMPTION - TAKE)}上回ります。家賃などの住居費を除いた支出でも${yen(nonHousing)}で、手取り14万円より多くなります。平均と同じ支出では赤字になるため、家賃と食費・娯楽費などを平均より抑える必要があります（当サイト計算）。`,
  },
  {
    q: "手取り14万円の家賃はいくらまでが目安ですか？",
    a: `家賃の割合について公的機関が示した基準は見当たりませんでした。同調査の食料・光熱水道・交通通信・保健医療の平均の合計は${yen(BASIC)}で、これを払うと手取り14万円から家賃に回せるのは${yen(TAKE - BASIC)}です。全国の1人世帯の平均家賃${yen(SINGLE_ALL)}は、手取り14万円の${pctOf(SINGLE_ALL)}にあたります（当サイト計算）。`,
  },
  {
    q: "手取り14万円の額面はいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、額面の月給${yen(MONTHLY)}（年収${yen(MONTHLY * 12)}）のとき、手取りは月${yen(r.netMonthly)}です（令和8年の税制・保険料率で当サイト試算）。この年収では令和8年分の所得税はかかりません。`,
  },
  {
    q: "手取り14万円は最低賃金より低いですか？",
    a: `1日8時間・年間休日120日で働いた場合、額面${yen(MONTHLY)}を時給に換算すると約${Math.floor(hourlyOf(MONTHLY, 120))}円です。令和8年度の改定後の最低賃金は最も低い宮崎県でも${MW.min.toLocaleString("ja-JP")}円のため、基本給と諸手当（通勤手当・残業代などを除く）で月${yen(MONTHLY)}の場合は最低賃金を下回る可能性があります（当サイト計算）。勤務時間が短い場合や、発効日前の県では結果が変わります。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 家計調査（家計収支編）2025年 単身世帯 第2表「年齢階級別１世帯当たり１か月間の収入と支出（単身世帯）」", url: "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040424656&fileKind=4" },
  { label: "e-Stat 令和5年住宅・土地統計調査 第123-1表「住宅の建て方(5区分)、世帯人員(6区分)別住宅の１か月当たり家賃(19区分)別借家に居住する主世帯数及び１か月当たり家賃－全国、都道府県、21大都市」", url: "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040210064&fileKind=0" },
  { label: "厚生労働省「令和8年度 地域別最低賃金 全国一覧」", url: "https://www.mhlw.go.jp/content/11200000/001753404.pdf" },
  { label: "厚生労働省「最低賃金に関するセルフチェックシート」（月給の時給換算の方法）", url: "https://www.mhlw.go.jp/content/11200000/001753408.xlsx" },
  { label: "厚生労働省「最低賃金の対象となる賃金」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/chingin/newpage_43898.html" },
];

const th = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "手取り14万円の一人暮らし" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            手取り14万円で一人暮らしはできる？単身の会社員の平均生活費17.9万円と比較【家計調査 2025年】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: yen(CONSUMPTION), l: "単身・勤労者・34歳以下の消費支出（月平均）" },
              { v: `−${yen(CONSUMPTION - TAKE)}`, l: "手取り14万円との差（平均どおりに支出した場合）" },
              { v: yen(SINGLE_ALL), l: `1人世帯の平均家賃（全国）＝手取りの${pctOf(SINGLE_ALL)}` },
              { v: yen(MONTHLY), l: "手取り14万円に必要な額面月給（当サイト試算）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            手取り14万円の一人暮らしは、<strong>統計上の平均的な支出よりも月約3.9万円少ない金額でやりくりする必要があります</strong>。
            総務省「家計調査 2025年」の単身世帯・勤労者・34歳以下（平均{KAKEI_AGE}歳）の消費支出は月{yen(CONSUMPTION)}で、住居費を除いても{yen(nonHousing)}です。
            家賃を全国の1人世帯の平均{yen(SINGLE_ALL)}とした場合、食費・光熱費・通信費などに使えるのは{yen(TAKE - SINGLE_ALL)}で、同じ年齢層の住居以外の支出の約{Math.round(((TAKE - SINGLE_ALL) / nonHousing) * 100)}%です（当サイト計算）。
          </p>
          <p className="text-xs text-text-muted mt-3">
            支出は総務省「家計調査 2025年」の公表値を{CHECKED}に、家賃は「令和5年 住宅・土地統計調査」の公表値を2026年11月25日に、いずれもe-Statで確認しました。差額・割合は当サイトで計算しています。
          </p>
        </div>

        <h2>単身の会社員の平均支出と手取り14万円の比較（費目別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">費目</th>
                <th className={th}>平均支出（月額）</th>
                <th className="p-3 text-right rounded-tr-lg">手取り14万円に占める割合</th>
              </tr>
            </thead>
            <tbody>
              {ITEMS.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{pctOf(x.v)}</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">消費支出の合計</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(CONSUMPTION)}</td>
                <td className="p-3 text-right whitespace-nowrap">{pctOf(CONSUMPTION)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 家計調査（家計収支編）2025年 単身世帯 第2表（勤労者世帯・34歳以下・1か月平均）。費目の合計は四捨五入の関係で消費支出と一致しない場合があります。割合は当サイト計算です。
        </p>
        <p className="mb-10">
          最も大きい費目は食料（{yen(41938)}）で、手取り14万円の{pctOf(41938)}にあたります。次いで住居（{yen(HOUSING)}）、その他の消費支出（{yen(29535)}・交際費や理美容など）、教養娯楽（{yen(24659)}）、交通・通信（{yen(21172)}）の順です。
          住居が{yen(HOUSING)}と低めなのは、この平均に実家暮らしや社宅の人が含まれるためです。同調査でこの年齢層の家賃・地代を払っている世帯は{RENT_PAY_SHARE}%、持家率は{OWN_SHARE}%です。
          手取り14万円で家賃を払う場合、教養娯楽・その他の消費支出・食料の3つが、平均から削る余地の大きい費目になります。
        </p>

        <h2>家賃別に見た手取り14万円の残り</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">家賃（月額）</th>
                <th className={th}>手取りに占める割合</th>
                <th className={th}>家賃を払った後の残り</th>
                <th className="p-3 text-right rounded-tr-lg">食料・光熱・交通通信・保健医療の平均を払った後</th>
              </tr>
            </thead>
            <tbody>
              {RENTS.map((v) => (
                <tr key={v} className={`border-b border-gray-100 ${v === SINGLE_ALL ? "bg-gray-50" : ""}`}>
                  <td className="p-3">{yen(v)}{v === SINGLE_ALL ? "（1人世帯の平均）" : ""}</td>
                  <td className="p-3 text-right whitespace-nowrap">{pctOf(v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(TAKE - v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(TAKE - v - BASIC)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※当サイト計算。右端の列は、家計調査の単身・勤労者・34歳以下の「食料」「光熱・水道」「交通・通信」「保健医療」の平均の合計（{yen(BASIC)}）を差し引いた残りで、被服・日用品・娯楽・交際費・貯蓄はここから払うことになります。共益費・管理費は含みません。
        </p>
        <p className="mb-10">
          家賃4万円なら、食料・光熱水道・交通通信・保健医療を平均どおりに払っても{yen(TAKE - 40000 - BASIC)}が残ります。家賃が全国の1人世帯の平均{yen(SINGLE_ALL)}だと残りは{yen(TAKE - SINGLE_ALL - BASIC)}です。
          東京都の1人世帯の平均家賃は{yen(SINGLE_TOKYO)}で、手取り14万円の{pctOf(SINGLE_TOKYO)}にあたり、この場合は4つの費目を平均どおりに払うと{yen(SINGLE_TOKYO + BASIC - TAKE)}不足します（令和5年 住宅・土地統計調査 第123-1表・公営住宅や社宅を含む借家全体の平均）。
          手取り19万円の場合の家賃の目安は<Link href="/knowledge/tedori-19man-yachin/" className="text-teal font-bold hover:underline">手取り19万円の家賃の目安</Link>にまとめています。
        </p>

        <h2>手取り14万円に必要な額面は月{yen(MONTHLY)}</h2>
        <p className="mb-4">
          東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、手取りが14万円以上になる最小の額面月給は{yen(MONTHLY)}（年収{yen(MONTHLY * 12)}）です（令和8年の税制・保険料率で当サイト試算）。
          毎月差し引かれるのは、健康保険料{yen(r.health / 12)}、厚生年金保険料{yen(r.pension / 12)}、雇用保険料{yen(r.employment / 12)}、住民税{yen(r.residentTax / 12)}で、手取りは{yen(r.netMonthly)}です。
          令和8年分の所得税は、給与所得控除74万円と基礎控除104万円により課税所得が0円となるため、かかりません。
        </p>
        <p className="mb-10">
          入社1年目など前年の所得が少ない場合は住民税がかからず、同じ額面17万円でも手取りは月{yen(r.netMonthly + r.residentTax / 12)}程度になります。2年目の6月から住民税の天引きが始まると、手取りが月{yen(r.residentTax / 12)}ほど減る点に注意が必要です（当サイト試算）。
        </p>

        <h2>額面17万円を最低賃金と比べると</h2>
        <p className="mb-4">
          月給制の場合、最低賃金を満たしているかは「月給÷1か月の所定労働時間数」で求めた時給で判断し、1か月の所定労働時間数は「1日の所定労働時間数×年間総労働日数÷12」で計算します（厚生労働省「最低賃金に関するセルフチェックシート」）。
          比べる月給からは、通勤手当・精皆勤手当・家族手当・残業代・賞与などを除きます（厚生労働省「最低賃金の対象となる賃金」）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">最低賃金（令和8年度の改定額）</th>
                <th className={th}>1日8時間・年間休日120日の月給</th>
                <th className="p-3 text-right rounded-tr-lg">その月給の手取り（試算）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: `東京都 ${MW.tokyo.toLocaleString("ja-JP")}円`, v: MW.tokyo },
                { k: `全国加重平均 ${MW.avg.toLocaleString("ja-JP")}円`, v: MW.avg },
                { k: `宮崎県 ${MW.min.toLocaleString("ja-JP")}円（最も低い県）`, v: MW.min },
              ].map((x) => {
                const m = monthlyAtMw(x.v, 120);
                return (
                  <tr key={x.k} className="border-b border-gray-100">
                    <td className="p-3">{x.k}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(m)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{yen(calcTakeHome(m * 12).netMonthly)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※最低賃金は厚生労働省「令和8年度 地域別最低賃金 全国一覧」の答申された改定額（{CHECKED}確認）。月給と手取りは当サイト計算（手取りは東京都・協会けんぽ・独身・40歳未満の前提）。
          岩手県・熊本県（12月1日）、沖縄県（12月2日）など、発効日が{CHECKED}より後の県では、発効日までは改定前の額が適用されます。
        </p>
        <p className="mb-10">
          1日8時間・年間休日120日の場合、額面{yen(MONTHLY)}の時給換算は約{Math.floor(hourlyOf(MONTHLY, 120)).toLocaleString("ja-JP")}円で、改定後の最低賃金で最も低い宮崎県の{MW.min.toLocaleString("ja-JP")}円も下回ります（当サイト計算）。
          フルタイムで手取り14万円の場合は、基本給と対象となる手当の合計を時給に換算し、勤務地の最低賃金を下回っていないか確認することをおすすめします。
          最低賃金どおりに働いた場合でも、全国加重平均では月{yen(monthlyAtMw(MW.avg, 120))}・手取り{yen(calcTakeHome(monthlyAtMw(MW.avg, 120) * 12).netMonthly)}となり、手取り14万円を上回ります。
          収入を上げる方法としては、昇給のほか、未経験から応募できる求人を扱う
          <Link href="/age/20s/" className="text-teal font-bold hover:underline">20代向けの転職エージェント</Link>を使って職種・勤務先を変える方法があります。
        </p>

        <h2>手取り14万円の生活費を考えるときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "家計調査の平均には実家暮らしも含まれる", d: `単身世帯・勤労者・34歳以下で家賃・地代を払っている世帯は${RENT_PAY_SHARE}%です。住居費の平均${yen(HOUSING)}は家賃を払っていない人も含めた平均のため、賃貸で一人暮らしをする場合の実際の住居費はこれより高くなります。` },
            { t: "平均は年齢層全体の値", d: `家計調査の34歳以下の平均年齢は${KAKEI_AGE}歳で、可処分所得の平均は手取り14万円を大きく上回ります。収入が多い人の支出も含む平均のため、手取り14万円の家計の目標値としては高めに出ます。` },
            { t: "入居時の初期費用は別にかかる", d: "敷金・礼金・仲介手数料・引っ越し代などは毎月の生活費とは別に必要です。手取り14万円で一人暮らしを始める場合は、初期費用を先に貯めておく必要があります。" },
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
          <li><Link href="/knowledge/tedori-19man-yachin/" className="text-teal font-bold hover:underline">手取り19万円の家賃の目安</Link></li>
          <li><Link href="/knowledge/tedori-gesshu-17man/" className="text-teal font-bold hover:underline">手取り17万円の額面</Link></li>
          <li><Link href="/knowledge/gesshu-19man-tedori/" className="text-teal font-bold hover:underline">月給19万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-hayamihyo/" className="text-teal font-bold hover:underline">手取りの早見表</Link></li>
          <li><Link href="/knowledge/tedori-430man/" className="text-teal font-bold hover:underline">年収430万円の手取り</Link></li>
          <li><Link href="/knowledge/7renkin-ihou/" className="text-teal font-bold hover:underline">7連勤は違法か（休日と労働時間のルール）</Link></li>
          <li><Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link></li>
          <li><Link href="/age/20s/" className="text-teal font-bold hover:underline">20代の転職エージェント比較</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">住宅・土地統計調査は2026年11月25日、その他は{CHECKED}に当サイトで内容を確認しています。手取りの試算に使った税率・保険料率は<Link href="/knowledge/tedori-hayamihyo/" className="text-teal hover:underline">手取りの早見表</Link>の出典欄に掲載しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
