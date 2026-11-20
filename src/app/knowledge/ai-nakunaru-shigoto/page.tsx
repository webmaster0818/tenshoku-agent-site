import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/ai-nakunaru-shigoto/" },
  title: "AIでなくなる仕事｜野村総研「労働人口の49%が代替可能」の職業と平均年収【令和7年 賃金構造基本統計調査で比較】",
  description:
    "AIやロボットで代替される可能性が高い仕事・低い仕事を、野村総合研究所の共同研究（2015年・国内601職業）の公表資料で確認しました。該当する職業の平均年収を「令和7年 賃金構造基本統計調査」から当サイトで算出し、代替されにくい職業が必ずしも高年収ではないことを示しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "AIでなくなる仕事｜野村総研「労働人口の49%が代替可能」の職業と平均年収",
    description: "野村総研の試算で代替可能性が高い・低いとされた職業を、令和7年の賃金統計の年収と並べて比較しています。",
  },
};

const CHECKED = "2026年11月20日";
const annual = (m: number, b: number) => Math.round(m * 12 + b) / 10;
const f1 = (v: number) => `約${v.toFixed(1)}万円`;

// 野村総合研究所 ニュースリリース（2015年12月2日）【ご参考】の職業名 → 賃金構造基本統計調査（職種）第1表の職種
// 数値：令和7年 所定内給与額（千円）・年間賞与その他特別給与額（千円）・労働者数（十人）
const high = [
  { nri: "一般事務員", w: "総合事務員", m: 331.9, b: 1135.9, n: 127703 },
  { nri: "経理事務員", w: "会計事務従事者", m: 321.3, b: 1012.4, n: 46603 },
  { nri: "受付係", w: "受付・案内事務員", m: 240.9, b: 486.5, n: 10154 },
  { nri: "スーパー店員・レジ係", w: "販売店員", m: 265.2, b: 463.6, n: 122447 },
  { nri: "自動車組立工", w: "自動車組立従事者", m: 328.4, b: 1170.2, n: 30765 },
  { nri: "金属プレス工", w: "金属プレス従事者", m: 276.3, b: 777.7, n: 9848 },
  { nri: "タクシー運転者", w: "タクシー運転者", m: 306.4, b: 197.8, n: 17021 },
  { nri: "路線バス運転者", w: "バス運転者", m: 262.8, b: 590.1, n: 9628 },
  { nri: "警備員", w: "警備員", m: 240.6, b: 339.8, n: 24625 },
  { nri: "ビル清掃員", w: "ビル・建物清掃員", m: 217.0, b: 210.5, n: 14490 },
  { nri: "包装作業員", w: "包装従事者", m: 230.4, b: 387.7, n: 7378 },
];
const low = [
  { nri: "外科医・精神科医・小児科医", w: "医師", m: 1027.7, b: 1164.1, n: 14517 },
  { nri: "小学校教員・中学校教員", w: "小・中学校教員", m: 447.1, b: 1814.9, n: 2514 },
  { nri: "獣医師", w: "獣医師", m: 453.1, b: 838.7, n: 450 },
  { nri: "グラフィックデザイナーなど", w: "デザイナー", m: 353.4, b: 888.6, n: 9145 },
  { nri: "助産師", w: "助産師", m: 343.9, b: 988.2, n: 2041 },
  { nri: "言語聴覚士", w: "理学療法士，作業療法士，言語聴覚士，視能訓練士", m: 298.2, b: 717.2, n: 27965 },
  { nri: "ケアマネージャー", w: "介護支援専門員（ケアマネージャー）", m: 298.8, b: 704.2, n: 9415 },
  { nri: "保育士", w: "保育士", m: 279.2, b: 847.9, n: 29151 },
  { nri: "美容師", w: "理容・美容師", m: 303.1, b: 106.4, n: 4967 },
  { nri: "社会福祉施設介護職員", w: "介護職員（医療・福祉施設等）", m: 262.9, b: 547.8, n: 116593 },
];
const sortA = <T extends { m: number; b: number }>(a: T[]) => [...a].sort((x, y) => annual(y.m, y.b) - annual(x.m, x.b));
const wavg = (a: { m: number; b: number; n: number }[]) => {
  const n = a.reduce((s, x) => s + x.n, 0);
  return a.reduce((s, x) => s + annual(x.m, x.b) * x.n, 0) / n;
};
const lowNoDoc = low.filter((x) => x.w !== "医師");

const faq = [
  {
    q: "AIでなくなる仕事にはどのようなものがありますか？",
    a: "野村総合研究所が2015年12月に公表したオックスフォード大学との共同研究では、一般事務員・経理事務員・受付係・レジ係・自動車組立工・タクシー運転者・警備員・ビル清掃員などが、人工知能やロボット等による代替可能性が高い100種の職業に挙げられています。特別な知識・スキルが求められない職業や、データの分析・秩序的・体系的操作が求められる職業で代替可能性が高い傾向があるとされています。",
  },
  {
    q: "日本の仕事の何%がAIに代替されるのですか？",
    a: "同研究では、10〜20年後に日本の労働人口の約49%が就いている職業で、技術的には人工知能やロボット等による代替が可能になると推計されています。同じ手法による英国は35%、米国は47%です。ただし、これは技術的な代替可能性の試算で、労働需給などの社会環境要因は考慮されていません。実際に職業がなくなる割合を示したものではありません。",
  },
  {
    q: "AIに代替されにくい仕事は何ですか？",
    a: "同研究では、芸術・歴史学・哲学など抽象的な概念を整理・創出する知識が必要な職業や、他者との協調・理解・説得・交渉・サービス志向性が求められる職業は代替が難しい傾向があるとされています。代替可能性が低い100種には、医師・教員・保育士・介護職員・ケアマネージャー・美容師・デザイナーなどが含まれています。",
  },
  {
    q: "AIに代替されにくい仕事は年収が高いのですか？",
    a: `必ずしも高くありません。令和7年 賃金構造基本統計調査から当サイトで計算すると、医師（${f1(annual(1027.7, 1164.1))}）は高い一方、保育士は${f1(annual(279.2, 847.9))}、介護職員（医療・福祉施設等）は${f1(annual(262.9, 547.8))}です。代替可能性が高い職業でも、総合事務員は${f1(annual(331.9, 1135.9))}、自動車組立従事者は${f1(annual(328.4, 1170.2))}です。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "野村総合研究所 ニュースリリース「日本の労働人口の49％が人工知能やロボット等で代替可能に」（2015年12月2日・PDF）", url: "https://www.nri.com/content/900037164.pdf" },
  { label: "労働政策研究・研修機構「職務構造に関する研究」（2012年・601職業の定量データ）", url: "https://www.jil.go.jp/institute/reports/2012/0146.html" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査（職種）第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116" },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 調査の概要」", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/gaiyo.html" },
];

function JobTable({ rows, label }: { rows: typeof high; label: string }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3 text-left rounded-tl-lg">{label}（野村総研の職業名）</th>
            <th className="p-3 text-left">賃金統計の職種</th>
            <th className="p-3 text-right">労働者数</th>
            <th className="p-3 text-right rounded-tr-lg">平均年収（当サイト計算）</th>
          </tr>
        </thead>
        <tbody>
          {sortA(rows).map((x) => (
            <tr key={x.nri} className="border-b border-gray-100">
              <td className="p-3">{x.nri}</td>
              <td className="p-3 text-xs">{x.w}</td>
              <td className="p-3 text-right whitespace-nowrap">約{(x.n / 100).toFixed(1)}万人</td>
              <td className="p-3 text-right font-bold whitespace-nowrap">{f1(annual(x.m, x.b))}</td>
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
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "AIでなくなる仕事" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            AIでなくなる仕事｜野村総研「労働人口の49%が代替可能」の職業と平均年収【令和7年 賃金構造基本統計調査で比較】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "49%", l: "技術的に代替可能とされた日本の労働人口の割合（2015年試算）" },
              { v: "601職業", l: "試算の対象とした国内の職業数" },
              { v: f1(wavg(high)), l: "代替可能性が高い11職種の平均年収（労働者数で加重）" },
              { v: f1(wavg(lowNoDoc)), l: "代替可能性が低い職種の平均年収（医師を除く9職種）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            野村総合研究所は2015年12月、英オックスフォード大学のオズボーン准教授・フレイ博士との共同研究で、10〜20年後に<strong>日本の労働人口の約49%</strong>が就いている職業について、技術的には人工知能やロボット等で代替可能になると推計しました。
            一般事務員・経理事務員・レジ係・タクシー運転者などが代替可能性の高い職業に、医師・教員・保育士・介護職員などが低い職業に挙げられています。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            当サイトで該当する職業の令和7年の平均年収を比べたところ、医師を除くと、代替可能性が低い職業の平均年収（{f1(wavg(lowNoDoc))}）は、代替可能性が高い職業（{f1(wavg(high))}）よりむしろ低い水準でした。
          </p>
          <p className="text-xs text-text-muted mt-3">
            野村総研の試算は技術的な代替可能性で、実際に代替されるかどうかは労働需給などの社会環境要因の影響も大きいとされています（同リリース）。年収は所定内給与額×12＋年間賞与その他特別給与額で当サイトが計算し、統計値は{CHECKED}にe-Statで確認しています。
          </p>
        </div>

        <h2>野村総研の試算の内容</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "対象と方法", d: "労働政策研究・研修機構が2012年に公表した「職務構造に関する研究」の601職業の定量データを使い、オズボーン准教授が米国・英国で行った分析と同じ手法で試算しています。" },
            { t: "「代替可能」の定義", d: "従事する1人の業務のすべてを、高い確率（66%以上）でコンピューターが代わりに遂行できる職種に就業している人数を推計し、就業者全体に占める割合を算出しています。業務の一部だけを代替する可能性は検討されていません。" },
            { t: "国際比較", d: "同じ手法の結果は、日本49%・英国35%・米国47%です（米国は2013年、英国は2014年の報告から）。" },
            { t: "代替が難しい傾向の職業", d: "抽象的な概念を整理・創出する知識が要求される職業、他者との協調・理解・説得・交渉・サービス志向性が求められる職業は、代替が難しい傾向があるとされています。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>代替可能性が高いとされた職業と平均年収</h2>
        <p>
          野村総研が挙げた「代替可能性が高い100種の職業」のうち、賃金構造基本統計調査の職種と対応がとれる11職業を、年収の高い順に並べました。
        </p>
        <JobTable rows={high} label="代替可能性が高い職業" />
        <p className="text-xs text-text-muted mb-4">
          ※職業名は野村総研のリリース（労働政策研究・研修機構の職業名）、年収・労働者数はe-Stat 令和7年 賃金構造基本統計調査（職種）第1表（男女計・企業規模10人以上）。両者の職業分類は同一ではないため、対応は当サイトの判断です。
        </p>
        <p className="mb-10">
          代替可能性が高い職業の中でも、総合事務員（{f1(annual(331.9, 1135.9))}）・自動車組立従事者（{f1(annual(328.4, 1170.2))}）は年間賞与が100万円を超え、全体の平均的な水準です。
          一方、ビル・建物清掃員（{f1(annual(217.0, 210.5))}）や包装従事者（{f1(annual(230.4, 387.7))}）は300万円前後です。
          総合事務員と販売店員は、いずれも労働者数が120万人を超える大きな職種です。
        </p>

        <h2>代替可能性が低いとされた職業と平均年収</h2>
        <JobTable rows={low} label="代替可能性が低い職業" />
        <p className="text-xs text-text-muted mb-4">
          ※同上。賃金構造基本統計調査は民営事業所が対象のため、小・中学校教員は私立学校の教員の値です。言語聴覚士は理学療法士・作業療法士・視能訓練士と合わせた職種の値です。
        </p>
        <p className="mb-10">
          代替可能性が低い職業では、医師（{f1(annual(1027.7, 1164.1))}）が突出して高い一方、介護職員（医療・福祉施設等）は{f1(annual(262.9, 547.8))}、美容師を含む理容・美容師は{f1(annual(303.1, 106.4))}です。
          医師を除いた9職種の平均年収（労働者数で加重）は{f1(wavg(lowNoDoc))}で、代替可能性が高い11職種の{f1(wavg(high))}より約{Math.round(wavg(high) - wavg(lowNoDoc))}万円低くなっています（当サイト計算）。介護職員（医療・福祉施設等）の労働者数が約116.6万人と多く、平均を引き下げています。
          「AIに代替されにくい職業」と「年収が高い職業」は一致しないため、職業を選ぶときは両方を分けて確認することが大切です。
        </p>

        <h2>AIによる仕事の変化に備えて転職を考えるときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "業務の一部が自動化される可能性も考える", d: "野村総研の試算は、業務のすべてを代替できる職業を対象にしたもので、業務の一部が自動化される場合は検討されていません。現在の職種がなくならなくても、担当する業務の中身が変わることを前提に、身につけるスキルを選ぶことが考えられます。" },
            { t: "代替されにくい職業の年収と働き方を確認する", d: "上の表のとおり、代替可能性が低い職業でも年収は職種によって大きく異なります。求人票で月給・賞与・夜勤や休日の条件を確認してください。" },
            { t: "資格が必要な職業は取得までの期間を確認する", d: "医師・助産師・保育士・介護支援専門員など、代替可能性が低いとされた職業には国家資格や実務経験が必要なものが多くあります。転職を考える場合は、資格の取得に必要な期間と費用を先に確認してください。" },
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
          <li><Link href="/knowledge/programmer-nenshu/" className="text-teal font-bold hover:underline">プログラマーの平均年収</Link></li>
          <li><Link href="/type/inexperienced/" className="text-teal font-bold hover:underline">未経験職種への転職に強い転職エージェント</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/salary-50sai/" className="text-teal font-bold hover:underline">50歳の平均年収</Link></li>
          <li><Link href="/knowledge/shigoto-yasumitai/" className="text-teal font-bold hover:underline">仕事を休みたいときに使える制度</Link></li>
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
