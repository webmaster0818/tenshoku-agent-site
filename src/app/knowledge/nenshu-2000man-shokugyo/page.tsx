import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { COMPANIES } from "@/data/company-list";
import { NTA_R7, shareAbove } from "@/data/take-home";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/nenshu-2000man-shokugyo/" },
  title: "年収2000万円の職業は？平均で超えるのは航空機操縦士の40〜59歳のみ【令和7年 賃金構造基本統計調査】",
  description:
    "厚生労働省「令和7年 賃金構造基本統計調査」の職種・年齢階級別の給与から、平均年収が2,000万円を超える職業を算出しました。職種全体の平均で超える職業はなく、年齢別では航空機操縦士の40〜59歳だけが超えます。大企業の経営・金融・保険専門職、医師の年齢別年収、年収2,000万円超の人の割合も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年収2000万円の職業は？平均で超えるのは航空機操縦士の40〜59歳のみ【令和7年】",
    description: "賃金構造基本統計調査の職種・年齢階級別データから、平均年収2,000万円を超える職業を算出しています。",
  },
};

const CHECKED = "2026年11月25日";

// 厚生労働省「令和7年 賃金構造基本統計調査」（職種）第5表 職種（小分類）・年齢階級別・男女計・産業計（千円・十人）
// all＝企業規模計（10人以上）、big＝企業規模1,000人以上 の [所定内給与額（6月分）, 年間賞与その他特別給与額（令和6年1年間）, 労働者数（十人）]
type Row = { age: string; all: [number, number, number]; big: [number, number, number] };
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;
const ppl = (w: number) => `${(w * 10).toLocaleString("ja-JP")}人`;

const PILOT: Row[] = [
  { age: "35〜39歳", all: [1236.0, 1507.5, 84], big: [1270.0, 1472.9, 60] },
  { age: "40〜44歳", all: [1528.9, 1807.9, 98], big: [1609.7, 1951.5, 73] },
  { age: "45〜49歳", all: [1774.0, 2390.7, 67], big: [1851.9, 2711.7, 54] },
  { age: "50〜54歳", all: [1729.5, 2294.5, 69], big: [1807.9, 2462.0, 59] },
  { age: "55〜59歳", all: [1966.0, 2995.8, 122], big: [2020.5, 3102.6, 115] },
  { age: "60〜64歳", all: [896.4, 1582.2, 12], big: [1748.1, 4035.0, 1] },
];
const PILOT_TOTAL = { m: 1179.5, b: 1604.3, w: 835 };

// その他の経営・金融・保険専門職業従事者（同じ表）
const KEIEI: Row[] = [
  { age: "45〜49歳", all: [1128.8, 6300.7, 708], big: [2081.1, 13799.1, 273] },
  { age: "50〜54歳", all: [836.1, 3649.4, 511], big: [2019.0, 13519.2, 90] },
  { age: "55〜59歳", all: [1039.7, 4992.4, 407], big: [2180.0, 15055.8, 95] },
];
const KEIEI_TOTAL = { all: [714.3, 2435.2] as [number, number], big: [958.6, 3416.7] as [number, number] };

// 医師（同じ表・企業規模計）
const DOCTOR: Row[] = [
  { age: "45〜49歳", all: [1134.4, 1593.6, 1455], big: [1031.6, 1812.8, 868] },
  { age: "50〜54歳", all: [1235.7, 1577.6, 1598], big: [1151.3, 2315.0, 807] },
  { age: "55〜59歳", all: [1309.2, 1704.0, 1760], big: [1335.4, 1955.7, 954] },
  { age: "60〜64歳", all: [1392.1, 1923.8, 1284], big: [1173.3, 2810.7, 663] },
];

// 管理的職業従事者 50〜54歳・企業規模1,000人以上（同じ表）
const MGR_5054_BIG = { m: 699.6, b: 3819.7 };

// 国税庁 第16表：年収2,000万円超の人数（千人）
const OVER_2000_THOUSAND = NTA_R7.bands[12].n + NTA_R7.bands[13].n;

// 当サイト掲載企業のうち、有価証券報告書の平均年間給与が2,000万円以上の企業（企業一覧の掲載値から自動算出）
const OVER_2000_COMPANIES = COMPANIES.filter((c) => {
  if (!c.salary.includes("有価証券報告書")) return false;
  const v = c.salary.match(/([\d,]+)万円/);
  return v ? Number(v[1].replace(/,/g, "")) >= 2000 : false;
}).length;

const pilotOver = PILOT.filter((x) => x.all[2] >= 50 && annual(x.all[0], x.all[1]) >= 2000);

const faq = [
  {
    q: "平均年収が2,000万円を超える職業はありますか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の平均では、2,000万円を超える職業はありません。最も高い航空機操縦士でも${f1(annual(PILOT_TOTAL.m, PILOT_TOTAL.b))}です。年齢階級別に見ると、航空機操縦士の40〜44歳・45〜49歳・50〜54歳・55〜59歳の4区分が2,000万円を超えます（所定内給与額×12か月＋年間賞与・男女計・当サイト計算）。`,
  },
  {
    q: "会社員で年収2,000万円を超える人はどのくらいいますか？",
    a: `国税庁「令和7年分 民間給与実態統計調査」では、1年を通じて勤務した給与所得者${(NTA_R7.total / 10).toLocaleString("ja-JP")}万人のうち、年収2,000万円超の人は約${Math.round(OVER_2000_THOUSAND / 10)}万人（${shareAbove(2000)}）です。`,
  },
  {
    q: "医師の年収は2,000万円に届きますか？",
    a: `同調査の医師（雇用されている医師）の平均は${f1(annual(1027.7, 1164.1))}で、年齢階級別で最も高い60〜64歳でも${f1(annual(DOCTOR[3].all[0], DOCTOR[3].all[1]))}です。開業医の所得はこの調査に含まれません。`,
  },
  {
    q: "管理職になれば年収2,000万円に届きますか？",
    a: `同調査の管理的職業従事者は、企業規模1,000人以上・50〜54歳でも${f1(annual(MGR_5054_BIG.m, MGR_5054_BIG.b))}です（当サイト計算）。統計上の平均では2,000万円に届きません。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第5表「職種（小分類）、年齢階級別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421120" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116" },
  { label: "厚生労働省「令和8年 賃金構造基本統計調査 業種別主な職種早見表」（1189・1624 の記入例）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" },
  { label: "国税庁 令和7年分 民間給与実態統計調査（第16表 給与階級別給与所得者数・構成割合）", url: "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf" },
];

const th = "p-3 text-right";

function AgeTable({ rows, label }: { rows: Row[]; label: string }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3 text-left rounded-tl-lg">{label}</th>
            <th className={th}>年収（企業規模計）</th>
            <th className={th}>労働者数</th>
            <th className={th}>年収（1,000人以上）</th>
            <th className="p-3 text-right rounded-tr-lg">労働者数</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((x) => {
            const a = annual(x.all[0], x.all[1]);
            const b = annual(x.big[0], x.big[1]);
            return (
              <tr key={x.age} className="border-b border-gray-100">
                <td className="p-3">{x.age}</td>
                <td className={`p-3 text-right whitespace-nowrap ${a >= 2000 ? "font-bold text-navy" : ""}`}>{f1(a)}</td>
                <td className="p-3 text-right whitespace-nowrap">{ppl(x.all[2])}</td>
                <td className={`p-3 text-right whitespace-nowrap ${b >= 2000 ? "font-bold text-navy" : ""}`}>{f1(b)}</td>
                <td className="p-3 text-right whitespace-nowrap">{ppl(x.big[2])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年収2000万円の職業" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年収2000万円の職業は？平均で超えるのは航空機操縦士の40〜59歳のみ【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "0職種", l: "職種全体の平均で2,000万円超（144職種中）" },
              { v: `${pilotOver.length}区分`, l: "年齢階級別で2,000万円超（すべて航空機操縦士）" },
              { v: f1(annual(PILOT[4].all[0], PILOT[4].all[1])), l: "最高 航空機操縦士 55〜59歳" },
              { v: shareAbove(2000), l: "年収2,000万円超の給与所得者の割合" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 賃金構造基本統計調査」の職種（小分類）別の平均で、年収が2,000万円を超える職業はありません。最も高い航空機操縦士でも{f1(annual(PILOT_TOTAL.m, PILOT_TOTAL.b))}です。
            年齢階級別に分けると、<strong>航空機操縦士の40〜44歳・45〜49歳・50〜54歳・55〜59歳の4区分だけが平均2,000万円を超えます</strong>（一般労働者・男女計・当サイト計算）。
            給与所得者全体で見ても、年収2,000万円超の人は{shareAbove(2000)}です（国税庁 民間給与実態統計調査）。
          </p>
          <p className="text-xs text-text-muted mt-3">
            算出方法：所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年の1年間）。残業代などの超過労働給与は含みません。
            統計値は{CHECKED}にe-Statの公表資料で確認し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>平均年収2,000万円を超えるのは航空機操縦士の40〜59歳</h2>
        <AgeTable rows={PILOT} label="航空機操縦士の年齢" />
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第5表（男女計・産業計）。労働者数は調査結果から推計された人数（十人単位の公表値を10倍）です。60〜64歳の1,000人以上は推計10人のため参考値です。
        </p>
        <p className="mb-4">
          航空機操縦士（パイロット・ヘリコプター操縦士）は、職種全体の平均{f1(annual(PILOT_TOTAL.m, PILOT_TOTAL.b))}が144職種の中で最も高く、40歳以降は年齢階級ごとの平均が2,000万円を超えます。
          55〜59歳は所定内給与額が月{(PILOT[4].all[0] / 10).toFixed(2)}万円、年間賞与が{(PILOT[4].all[1] / 10).toFixed(1)}万円で、年収は{f1(annual(PILOT[4].all[0], PILOT[4].all[1]))}です（当サイト計算）。
        </p>
        <p className="mb-10">
          一方、30代までは2,000万円に届かず、35〜39歳は{f1(annual(PILOT[0].all[0], PILOT[0].all[1]))}です。航空機操縦士の推計労働者数は全年齢で{ppl(PILOT_TOTAL.w)}と少なく、年齢階級ごとの値は数百人規模の平均である点にご注意ください。
        </p>

        <h2>大企業の経営・金融・保険専門職は45〜59歳で3,000万円超</h2>
        <AgeTable rows={KEIEI} label="経営・金融・保険専門職の年齢" />
        <p className="text-xs text-text-muted mb-4">
          ※職種名は「その他の経営・金融・保険専門職業従事者」。e-Stat 令和7年 賃金構造基本統計調査 職種 第5表（男女計・産業計）。
        </p>
        <p className="mb-4">
          「その他の経営・金融・保険専門職業従事者」は、企業規模1,000人以上に限ると45〜49歳・50〜54歳・55〜59歳のいずれも年収が3,000万円を超えます。年間賞与が約1,352万〜1,506万円と大きいことが理由です（当サイト計算）。
          企業規模計では45〜49歳の{f1(annual(KEIEI[0].all[0], KEIEI[0].all[1]))}が最も高く、2,000万円にわずかに届きません。職種全体の平均は{f1(annual(...KEIEI_TOTAL.all))}（1,000人以上は{f1(annual(...KEIEI_TOTAL.big))}）です。
        </p>
        <p className="mb-10">
          厚生労働省の「業種別主な職種早見表」では、この職種番号1189に社会保険労務士・中小企業診断士・経営コンサルタントなどを記入するよう案内しています（
          <a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業種別主な職種早見表</a>）。
          どの業種のどの職務がこの区分に記入されているかは統計から分からないため、特定の職業名に置き換えて読まないことをおすすめします。1,000人以上の50〜59歳は推計900〜950人と少ない点にもご注意ください。
        </p>

        <h2>医師は60〜64歳で約1,860万円</h2>
        <AgeTable rows={DOCTOR} label="医師の年齢" />
        <p className="text-xs text-text-muted mb-4">※e-Stat 令和7年 賃金構造基本統計調査 職種 第5表（男女計・産業計）。</p>
        <p className="mb-10">
          雇用されている医師の年収は年齢とともに上がり、60〜64歳の{f1(annual(DOCTOR[3].all[0], DOCTOR[3].all[1]))}が最も高くなりますが、平均で2,000万円には届きません。
          所定内給与額には含まれない残業代（超過労働給与）を加えると年収はさらに高くなりますが、本ページでは他の職種と同じ算出方法でそろえています。
        </p>

        <h2>年収2,000万円超の人の割合は{shareAbove(2000)}</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">給与階級</th>
                <th className={th}>人数</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {NTA_R7.bands.slice(10).map((x) => (
                <tr key={x.label} className="border-b border-gray-100">
                  <td className="p-3">{x.label}</td>
                  <td className="p-3 text-right whitespace-nowrap">約{Math.round(x.n / 10).toLocaleString("ja-JP")}万人</td>
                  <td className="p-3 text-right whitespace-nowrap">{((x.n / NTA_R7.total) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※国税庁 令和7年分 民間給与実態統計調査 第16表（1年を通じて勤務した給与所得者・男女計）。人数は千人単位の公表値を万人に換算しています。
        </p>
        <p className="mb-10">
          1年を通じて勤務した給与所得者{(NTA_R7.total / 10).toLocaleString("ja-JP")}万人のうち、年収2,000万円超は約{Math.round(OVER_2000_THOUSAND / 10)}万人です。
          職業の平均で2,000万円を超えるのは一部の年齢層に限られるため、実際に年収2,000万円を超える人の多くは、職業の平均ではなく勤務先・役職・成果報酬などの個別の事情で超えていると考えられます。
          企業ごとの平均では、当サイトの<Link href="/company/" className="text-teal font-bold hover:underline">企業一覧</Link>に掲載している企業のうち{OVER_2000_COMPANIES}社が、有価証券報告書の平均年間給与で2,000万円以上です（提出会社単体の値）。
        </p>

        <h2>統計を読むときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "役員・開業医・個人事業主は含まれない", d: "賃金構造基本統計調査は、常用労働者10人以上の事業所に雇用されている労働者が対象です。会社役員の報酬、開業医や独立した士業、フリーランスの所得は含まれません。" },
            { t: "年齢階級別の値は人数が少ない区分がある", d: "航空機操縦士は年齢階級ごとの推計労働者数が数百人で、年によって値が大きく変わる可能性があります。複数年の推移で確かめることをおすすめします。" },
            { t: "年間賞与は前年1年間の実績", d: "年間賞与その他特別給与額は令和6年1年間の支給額で、6月分の月給と時点が異なります。成果連動の賞与が大きい職種ほど、年による振れも大きくなります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          年収2,000万円の手取りは<Link href="/knowledge/tedori-2000man/" className="text-teal font-bold hover:underline">年収2000万円の手取り</Link>で試算しています。
          平均年収1,000万円を超える職業の一覧は<Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal font-bold hover:underline">平均年収1000万円を超える職業</Link>、
          144職種の順位は<Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link>に掲載しています。
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
          <li><Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal font-bold hover:underline">平均年収1000万円を超える職業</Link></li>
          <li><Link href="/knowledge/shokugyo-nenshu-ranking/" className="text-teal font-bold hover:underline">職業別の年収ランキング</Link></li>
          <li><Link href="/knowledge/tedori-2000man/" className="text-teal font-bold hover:underline">年収2000万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-1500man/" className="text-teal font-bold hover:underline">年収1500万円の手取り</Link></li>
          <li><Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向け転職エージェントの比較</Link></li>
          <li><Link href="/company/" className="text-teal font-bold hover:underline">企業一覧（有価証券報告書の平均年収）</Link></li>
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
