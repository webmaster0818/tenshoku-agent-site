import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/seiho-lady-nenshu/" },
  title: "生保レディの年収は平均約446万円【令和7年 賃金構造基本統計調査】保険営業の女性・男性・企業規模別の比較",
  description:
    "生命保険の営業職員（生保レディ）を含む「保険営業職業従事者」の女性の平均年収は約446万円です（厚生労働省 令和7年 賃金構造基本統計調査から当サイト計算）。男性との差、企業規模別の値、女性の他の営業職・事務職との比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "生保レディの年収は平均約446万円【令和7年 賃金構造基本統計調査】",
    description: "保険営業職業従事者の女性の所定内給与・賞与・年収を、男性・企業規模・他の職種と比較しています。",
  },
};

const CHECKED = "2026年11月29日";
const T1_URL = "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116";

// 厚生労働省「令和7年 賃金構造基本統計調査」（職種）第1表（産業計・一般労働者）から転記
// age＝平均年齢（歳）、ten＝平均勤続年数（年）、ot＝超過実労働時間数（時間・令和7年6月）、
// m＝所定内給与額（千円・令和7年6月分）、b＝年間賞与その他特別給与額（千円・令和6年1年間）、w＝労働者数（十人）
type Row = { k: string; age: number; ten: number; ot: number; m: number; b: number; w: number };
const nen = (x: { m: number; b: number }) => (x.m * 12 + x.b) / 10; // 万円

const FEMALE: Row = { k: "女性", age: 47.4, ten: 10.5, ot: 0, m: 326.7, b: 539.9, w: 19476 };
const MALE: Row = { k: "男性", age: 44.7, ten: 11.8, ot: 3, m: 632.8, b: 1197.9, w: 5285 };
const ALL: Row = { k: "男女計", age: 46.8, ten: 10.8, ot: 1, m: 392.0, b: 680.3, w: 24761 };

// 女性・保険営業職業従事者の企業規模別（所定内給与額・年間賞与その他特別給与額・労働者数）
const SIZE = [
  { k: "1,000人以上", m: 325.9, b: 536.8, w: 18489 },
  { k: "100〜999人", m: 290.8, b: 801.4, w: 437 },
  { k: "10〜99人", m: 380.1, b: 437.1, w: 550 },
];

// 女性の他の職種（同表・女性）
const OTHERS = [
  { k: "保険営業職業従事者", m: 326.7, b: 539.9, age: 47.4 },
  { k: "金融営業職業従事者", m: 330.2, b: 1377.9, age: 37.7 },
  { k: "その他の営業職業従事者", m: 339.1, b: 1156.9, age: 38.0 },
  { k: "機械器具・通信・システム営業職業従事者（自動車を除く）", m: 334.6, b: 1254.7, age: 36.8 },
  { k: "看護師", m: 331.8, b: 851.6, age: 42.5 },
  { k: "総合事務員", m: 284.5, b: 842.1, age: 44.2 },
  { k: "営業・販売事務従事者", m: 284.5, b: 831.3, age: 41.7 },
  { k: "その他の一般事務従事者", m: 280.9, b: 768.8, age: 43.1 },
  { k: "介護職員（医療・福祉施設等）", m: 253.5, b: 512.4, age: 46.5 },
  { k: "販売店員", m: 231.8, b: 273.1, age: 44.1 },
].map((x) => ({ ...x, n: nen(x) })).sort((a, b) => b.n - a.n);

const femaleShare = (FEMALE.w / ALL.w) * 100;
const f1 = (v: number) => v.toFixed(1);
const link = "text-teal font-bold hover:underline";

const faq = [
  {
    q: "生保レディの平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の「保険営業職業従事者」の女性は、所定内給与額が月${f1(FEMALE.m)}千円、年間賞与その他特別給与額が${f1(FEMALE.b)}千円です。所定内給与額×12＋年間賞与で計算すると、年収は約${f1(nen(FEMALE))}万円です（当サイト計算・残業代を含まない）。`,
  },
  {
    q: "生保レディの年収は男性の保険営業と比べてどうですか？",
    a: `同じ統計で男性の保険営業職業従事者は年収約${f1(nen(MALE))}万円（所定内給与額 月${f1(MALE.m)}千円）で、女性の約${(nen(MALE) / nen(FEMALE)).toFixed(1)}倍です。ただし、この職種には営業職員の指導を行う生命保険外務指導員なども含まれ、男女で担う仕事の構成が同じとは限らないため、同じ仕事内容どうしの比較ではありません。`,
  },
  {
    q: "保険営業職業従事者に占める女性の割合はどのくらいですか？",
    a: `同調査の推計労働者数は、男女計${(ALL.w * 10).toLocaleString("ja-JP")}人のうち女性が${(FEMALE.w * 10).toLocaleString("ja-JP")}人で、約${f1(femaleShare)}%が女性です（当サイト計算）。女性の約${f1((SIZE[0].w / FEMALE.w) * 100)}%は従業員1,000人以上の企業で働いています。`,
  },
  {
    q: "統計の「保険営業職業従事者」は生保レディだけですか？",
    a: "いいえ。厚生労働省の賃金構造基本統計調査「職種一覧と解説」では、保険営業職業従事者に含まれる職種の例として、保険外交員・保険セールス員・損害保険契約外交員・生命保険外務指導員・火災保険外務員が挙げられています。保険代理業務員は別の職種です。生命保険会社の営業職員だけの年収を示す公的統計は、当サイトでは確認できていません。そのため、この値は「生保レディを含む保険営業の女性」の目安としてご覧ください。",
  },
];
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};
const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査（職種）第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: T1_URL },
  { label: "厚生労働省 賃金構造基本統計調査 主な用語の定義", url: "https://www.mhlw.go.jp/toukei/list/dl/chingin_yougo.pdf" },
  { label: "厚生労働省 賃金構造基本統計調査「職種一覧と解説」（1347 保険営業職業従事者）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20210622-detail-08.pdf" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "生保レディの年収" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            生保レディの年収は平均約446万円【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `${f1(nen(FEMALE))}万円`, l: "保険営業の女性の年収（当サイト計算）" },
              { v: `${f1(FEMALE.m)}千円`, l: "所定内給与額（月額）" },
              { v: `${f1(FEMALE.b)}千円`, l: "年間賞与その他特別給与額" },
              { v: `${f1(femaleShare)}%`, l: "保険営業に占める女性の割合" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            生命保険の営業職員（いわゆる生保レディ）を含む「保険営業職業従事者」の女性は、所定内給与額が<strong>月{f1(FEMALE.m)}千円</strong>、年間賞与その他特別給与額が{f1(FEMALE.b)}千円で、
            年収に換算すると<strong>約{f1(nen(FEMALE))}万円</strong>です（平均年齢{FEMALE.age}歳・平均勤続{FEMALE.ten}年）。
            男性の保険営業（約{f1(nen(MALE))}万円）とは大きな差があり、女性の他の営業職と比べると、月給はほぼ同じで賞与が少ない点が特徴です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：厚生労働省「令和7年 賃金構造基本統計調査」（職種）第1表（一般労働者・産業計・企業規模10人以上）。所定内給与額は令和7年6月分、賞与は令和6年1年間の値です。年収は所定内給与額×12＋年間賞与その他特別給与額で当サイトが計算した目安で、残業代は含みません。{CHECKED}にe-Statで取得。
          </p>
        </div>

        <h2>保険営業の年収：女性・男性・男女計の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">勤続年数</th>
                <th className="p-3 text-right">所定内給与額</th>
                <th className="p-3 text-right">年間賞与等</th>
                <th className="p-3 text-right rounded-tr-lg">年収（計算）</th>
              </tr>
            </thead>
            <tbody>
              {[FEMALE, MALE, ALL].map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x === FEMALE ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.ten}年</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.m)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.b)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(nen(x))}万円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          保険営業職業従事者の推計労働者数は{(ALL.w * 10).toLocaleString("ja-JP")}人で、そのうち約{f1(femaleShare)}%（{(FEMALE.w * 10).toLocaleString("ja-JP")}人）が女性です。
          女性の超過実労働時間数（令和7年6月）は{FEMALE.ot}時間で、残業がほとんど計上されていません。
          この職種には営業職員の指導を行う生命保険外務指導員なども含まれ、男女で担う仕事の構成が同じとは限らないため、男女の差をそのまま「同じ仕事の賃金差」と読むことはできません。
        </p>

        <h2>企業規模別の年収（保険営業の女性）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">所定内給与額</th>
                <th className="p-3 text-right">年間賞与等</th>
                <th className="p-3 text-right">年収（計算）</th>
                <th className="p-3 text-right rounded-tr-lg">労働者数</th>
              </tr>
            </thead>
            <tbody>
              {SIZE.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.m)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.b)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(nen(x))}万円</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.w * 10).toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          保険営業の女性の約{f1((SIZE[0].w / FEMALE.w) * 100)}%は従業員1,000人以上の企業で働いており、全体の平均はほぼこの区分の値で決まっています。
          100〜999人と10〜99人の区分は労働者数が少ないため、値のぶれが大きい点にご注意ください。
        </p>

        <h2>女性の他の職種との年収の比較</h2>
        <p>同じ統計の女性の値で、営業職・事務職・医療福祉職などと並べました（年収の高い順）。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（女性）</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">所定内給与額</th>
                <th className="p-3 text-right">年間賞与等</th>
                <th className="p-3 text-right rounded-tr-lg">年収（計算）</th>
              </tr>
            </thead>
            <tbody>
              {OTHERS.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "保険営業職業従事者" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.m)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.b)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.n)}万円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          保険営業の女性の所定内給与額（月{f1(FEMALE.m)}千円）は、金融営業（{f1(OTHERS.find((x) => x.k === "金融営業職業従事者")!.m)}千円）や看護師（{f1(OTHERS.find((x) => x.k === "看護師")!.m)}千円）とほぼ同じ水準で、事務職より月4万円以上高くなっています。
          一方で年間賞与等は{f1(FEMALE.b)}千円と、他の営業職の半分以下です。年収で見ると、総合事務員（約425.6万円）を約20万円上回る程度にとどまります。
          保険営業は平均年齢が{FEMALE.age}歳と、他の営業職（36〜38歳）より約10歳高い点も特徴です。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "生保レディだけの値ではない", d: "保険営業職業従事者には、生命保険の営業職員のほか、損害保険契約外交員や生命保険外務指導員なども含まれます（保険代理業務員は含みません）。" },
            { t: "平均値であり、個人差がある", d: "統計は職種全体の平均値で、個人の年収を示すものではありません。具体的な給与体系は各社の募集要項で確認してください。" },
            { t: "一般労働者だけの値", d: "短時間労働者（パートタイム）は含みません。営業職員の雇用形態は会社によって異なります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          保険営業から別の職種への転職を考える場合は、職種ごとの年収を<Link href="/knowledge/shokugyo-nenshu-ranking/" className={link}>職業別の年収ランキング</Link>で比べ、
          女性の転職支援に力を入れているサービスは<Link href="/type/women/" className={link}>女性向けの転職エージェント</Link>にまとめています。
          保険営業は残業が少ない職種でもあり、残業時間で比べる場合は<Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link>も参考にしてください。
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
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className={link}>職業別の年収ランキング</Link></li>
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link></li>
          <li><Link href="/knowledge/zangyo-70jikan/" className={link}>残業70時間は違法か</Link></li>
          <li><Link href="/type/women/" className={link}>女性におすすめの転職エージェント</Link></li>
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
