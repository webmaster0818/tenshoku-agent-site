import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ドラッグストアの売上高ランキング【有価証券報告書】上場11社の売上高・平均年収",
  description:
    "ドラッグストアを主な事業とする上場11社の連結売上高を、有価証券報告書の原本でランキングしました。1位はツルハHD 1兆4,505億円、2位マツキヨココカラ 1兆1,174億円、3位コスモス薬品 1兆995億円です。各社の平均年間給与とウエルシアとの経営統合の状況も掲載しています。",
  alternates: { canonical: "/company/drugstore-salary/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ドラッグストアの売上高ランキング【有価証券報告書】上場11社",
    description: "ドラッグストアを主な事業とする上場11社の連結売上高と平均年間給与を、有価証券報告書の記載値で比較しています。",
  },
};

const CHECKED = "2026年11月22日";
const PDF = (id: string) => `https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/${id}.pdf`;
const JACDS_190 = "https://jacds.gr.jp/wp-content/uploads/2025/12/newsrelease_190.pdf";

// 各社の有価証券報告書「主要な経営指標等の推移」連結経営指標等の売上高（原本を2026-11-22にEDINETで確認）
// growth は当サイト計算（当期売上高÷前期売上高−1）。カワチ薬品・コスモス薬品・薬王堂HD・サツドラHDは有報本文の記載値と一致
const ranking = [
  { rank: 1, name: "ツルハホールディングス", code: "3391", sales: "1兆4,505億円", raw: "1,450,585百万円", growth: "比較不可", term: "2026年2月期（第64期）", filed: "2026年5月21日", doc: "S100Y5EY" },
  { rank: 2, name: "マツキヨココカラ＆カンパニー", code: "3088", sales: "1兆1,174億円", raw: "1,117,440百万円", growth: "+5.3%", term: "2026年3月期（第19期）", filed: "2026年6月18日", doc: "S100YD1I" },
  { rank: 3, name: "コスモス薬品", code: "3349", sales: "1兆995億円", raw: "1,099,583百万円", growth: "+8.7%", term: "2026年5月期（第44期）", filed: "2026年8月26日", doc: "S100YYDI" },
  { rank: 4, name: "スギホールディングス", code: "7649", sales: "1兆103億円", raw: "1,010,336百万円", growth: "+15.1%", term: "2026年2月期（第44期）", filed: "2026年5月20日", doc: "S100Y3QN" },
  { rank: 5, name: "サンドラッグ", code: "9989", sales: "8,425億円", raw: "842,512百万円", growth: "+5.1%", term: "2026年3月期（第63期）", filed: "2026年6月26日", doc: "S100YL7Q" },
  { rank: 6, name: "クスリのアオキホールディングス", code: "3549", sales: "5,668億円", raw: "566,865百万円", growth: "+13.0%", term: "2026年5月期（第28期・5月20日決算）", filed: "2026年8月19日", doc: "S100YXF5" },
  { rank: 7, name: "クリエイトSDホールディングス", code: "3148", sales: "4,971億円", raw: "497,128百万円", growth: "+8.8%", term: "2026年5月期（第29期）", filed: "2026年8月20日", doc: "S100YXNS" },
  { rank: 8, name: "カワチ薬品", code: "2664", sales: "2,844億円", raw: "284,492百万円", growth: "-1.2%", term: "2026年3月期（第59期・3月15日決算）", filed: "2026年6月10日", doc: "S100Y9UW" },
  { rank: 9, name: "Genky DrugStores", code: "9267", sales: "2,206億円", raw: "220,638百万円", growth: "+9.9%", term: "2026年6月期（第9期・6月20日決算）", filed: "2026年9月9日", doc: "S100Z0OS" },
  { rank: 10, name: "薬王堂ホールディングス", code: "7679", sales: "1,638億円", raw: "163,808百万円", growth: "+7.8%", term: "2026年2月期（第7期）", filed: "2026年5月21日", doc: "S100Y4K3" },
  { rank: 11, name: "サツドラホールディングス", code: "3544", sales: "1,005億円", raw: "100,571百万円", growth: "+0.4%", term: "2026年5月期（第10期・5月15日決算）", filed: "2026年8月6日", doc: "S100YUHC" },
];

// 同じ有価証券報告書「従業員の状況」提出会社の状況
const parent = [
  { name: "ツルハホールディングス", type: "持株会社", pay: "7,439,918円", man: "約743万円", age: "44歳3か月", tenure: "18年7か月", n: "245人（1人）" },
  { name: "マツキヨココカラ＆カンパニー", type: "持株会社", pay: "7,460千円", man: "約746万円", age: "48.3歳", tenure: "10.7年", n: "74人（-）" },
  { name: "コスモス薬品", type: "事業会社", pay: "5,100,432円", man: "約510万円", age: "32.1歳", tenure: "7.4年", n: "5,977人（24,444人）" },
  { name: "スギホールディングス", type: "持株会社", pay: "8,277,511円", man: "約827万円", age: "44.5歳", tenure: "10.9年", n: "147人（35人）" },
  { name: "サンドラッグ", type: "事業会社", pay: "5,895,373円", man: "約589万円", age: "34歳6か月", tenure: "8年9か月", n: "4,622人（3,532人）" },
  { name: "クスリのアオキホールディングス", type: "持株会社", pay: "5,362,541円", man: "約536万円", age: "35.6歳", tenure: "9.6年", n: "63人（3人）" },
  { name: "クリエイトSDホールディングス", type: "持株会社", pay: "11,085,553円", man: "約1,108万円", age: "50.4歳", tenure: "22.6年", n: "10人" },
  { name: "カワチ薬品", type: "事業会社", pay: "5,560,435円", man: "約556万円", age: "37.0歳", tenure: "13.8年", n: "2,564人（4,003人）" },
  { name: "Genky DrugStores", type: "持株会社", pay: "記載省略", man: "-", age: "-", tenure: "-", n: "-" },
  { name: "薬王堂ホールディングス", type: "持株会社", pay: "記載省略", man: "-", age: "-", tenure: "-", n: "-" },
  { name: "サツドラホールディングス", type: "持株会社", pay: "記載省略", man: "-", age: "-", tenure: "-", n: "-" },
];

// 店舗を運営する会社の値（事業会社が提出会社の3社は提出会社の状況、持株会社5社は「最大人員会社の状況」）。平均年間給与の高い順（当サイトで並べ替え）
const stores = [
  { name: "サンドラッグ", src: "提出会社", pay: "5,895,373円", man: "約589万円", age: "34歳6か月", tenure: "8年9か月", n: "4,622人（3,532人）" },
  { name: "カワチ薬品", src: "提出会社", pay: "5,560,435円", man: "約556万円", age: "37.0歳", tenure: "13.8年", n: "2,564人（4,003人）" },
  { name: "クリエイトエス・ディー", src: "クリエイトSDHDの最大人員会社", pay: "5,433,120円", man: "約543万円", age: "34.0歳", tenure: "8.1年", n: "5,213人（3,856人）" },
  { name: "マツモトキヨシ", src: "マツキヨココカラの最大人員会社", pay: "5,432千円", man: "約543万円", age: "37.5歳", tenure: "11.4年", n: "4,063人（5,864人）" },
  { name: "サッポロドラッグストアー", src: "サツドラHDの最大人員会社", pay: "5,208千円", man: "約520万円", age: "37.7歳", tenure: "11.1年", n: "998人（1,686人）" },
  { name: "コスモス薬品", src: "提出会社", pay: "5,100,432円", man: "約510万円", age: "32.1歳", tenure: "7.4年", n: "5,977人（24,444人）" },
  { name: "クスリのアオキ", src: "クスリのアオキHDの最大人員会社", pay: "4,810,462円", man: "約481万円", age: "31.6歳", tenure: "4.3年", n: "5,852人（8,405人）" },
  { name: "ココカラファインヘルスケア", src: "マツキヨココカラの最大人員会社（2番目）", pay: "4,799千円", man: "約479万円", age: "39.6歳", tenure: "9.1年", n: "4,922人（4,244人）" },
  { name: "ゲンキー", src: "Genky DrugStoresの最大人員会社", pay: "4百万円", man: "百万円単位の記載", age: "29.3歳", tenure: "4.6年", n: "1,887人（2,308人）" },
];

const faqData = [
  {
    q: "ドラッグストアで売上高が一番多い会社はどこですか？",
    a: `ドラッグストアを主な事業とする上場11社の有価証券報告書（${CHECKED}に原本をEDINETで確認）では、ツルハホールディングスの連結売上高1兆4,505億円（2026年2月期）が最も多く、マツキヨココカラ＆カンパニーの1兆1,174億円（2026年3月期）、コスモス薬品の1兆995億円（2026年5月期）が続きます。ツルハHDの売上高には、2025年12月1日に子会社化したウエルシアホールディングスの2025年12月1日〜2026年2月28日の3か月分のみが含まれています。`,
  },
  {
    q: "ウエルシアホールディングスがランキングにないのはなぜですか？",
    a: "ツルハホールディングスの有価証券報告書によると、ウエルシアホールディングスの普通株式は2025年11月27日に東京証券取引所プライム市場で上場廃止となり、2025年12月1日の株式交換によりツルハHDの完全子会社となりました。当サイトでは上場会社を対象としているため、単独では掲載していません。参考として、ウエルシアHDの最後の有価証券報告書（2025年2月期）の連結売上高は1兆2,850億円です。",
  },
  {
    q: "ドラッグストアの平均年収が高いのはどこですか？",
    a: "提出会社の平均年間給与はクリエイトSDホールディングス約1,108万円、スギホールディングス約827万円が高く見えますが、いずれも持株会社単体の従業員（それぞれ10人・147人）の値で、店舗の従業員は含みません。店舗を運営する会社どうしで比べると、サンドラッグ約589万円、カワチ薬品約556万円、クリエイトエス・ディー約543万円、マツモトキヨシ約543万円の順です（各社の有価証券報告書の記載値を当サイトで並べ替え）。",
  },
  {
    q: "決算期が違う会社の売上高を比べてよいのですか？",
    a: "11社の決算期末は2月末・3月・5月・6月と分かれており、最も早いツルハHD・スギHD・薬王堂HD（2026年2月期）と最も遅いGenky DrugStores（2026年6月20日決算）では、対象期間が約4か月ずれています。それぞれ12か月分の売上高ですが、同じ期間の比較ではないため、規模の目安としてご覧ください。ツルハHDの前期（2025年2月期）は決算期変更による9.5か月決算のため、前期比は算出していません。",
  },
  {
    q: "ドラッグストア業界全体の市場規模はどのくらいですか？",
    a: "日本チェーンドラッグストア協会のニュースリリース（第190号・2025年12月5日）では、ドラッグストア業界の店舗数は23,000店舗、売上高は10兆円と記載されており、2030年に業界売上高13兆円・店舗数35,000店を目標としています。協会の数値は業界全体の推計で、上場11社の連結売上高（決算期が異なり、ドラッグストア以外の事業も含みます）とは範囲が異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ドラッグストアの売上高ランキング【有価証券報告書】上場11社の売上高・平均年収",
  dateModified: "2026-11-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/drugstore-salary/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ドラッグストアの売上高ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ドラッグストアの売上高ランキング【有価証券報告書】上場11社の売上高・平均年収
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ドラッグストアを主な事業とする上場11社の連結売上高は、<strong>1位 ツルハホールディングス 1兆4,505億円、2位 マツキヨココカラ＆カンパニー 1兆1,174億円、3位 コスモス薬品 1兆995億円、4位 スギホールディングス 1兆103億円、5位 サンドラッグ 8,425億円</strong>です。
            各社がEDINETに提出した直近期の有価証券報告書の原本の記載値だけで並べています（{CHECKED}確認・億円未満切り捨て）。
            ツルハHDの売上高には、2025年12月に子会社化したウエルシアホールディングスの3か月分のみが含まれています。平均年間給与は、持株会社の値と店舗を運営する会社の値を分けて掲載しています。
          </p>
        </div>

        <h2>有価証券報告書準拠 ドラッグストアの売上高ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">会社（証券コード）</th>
                <th className="p-3 text-right">連結売上高</th>
                <th className="p-3 text-right">前期比</th>
                <th className="p-3 text-left rounded-tr-lg">決算期</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r) => (
                <tr key={r.code} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{r.rank}位</td>
                  <td className="p-3">
                    <a href={PDF(r.doc)} target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:underline">{r.name}</a>（{r.code}）
                  </td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.sales}<span className="block text-[11px] text-text-muted font-normal">{r.raw}</span></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.growth}</td>
                  <td className="p-3 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各社の有価証券報告書「主要な経営指標等の推移」の連結経営指標等の売上高（サンドラッグは「その他の営業収益」を含む）。社名のリンクは有価証券報告書の原本PDF（EDINET）です。前期比は同じ表の前期の売上高から当サイトで計算しました。ツルハHDの前期（2025年2月期）は決算期変更に伴う9.5か月決算（2024年5月16日〜2025年2月28日）のため、前期比は算出していません。
          提出日：{ranking.map((r) => `${r.name} ${r.filed}`).join("、")}。
        </p>
        <p className="mb-4">
          売上高1兆円を超えるのはツルハHD・マツキヨココカラ・コスモス薬品・スギHDの4社です。前期比を算出できる10社では、スギHD（+15.1%）とクスリのアオキHD（+13.0%）の伸びが大きく、前期を下回ったのはカワチ薬品（-1.2%）のみです。
          11社の売上高の単純合計は約7兆3,539億円です（当サイト計算。決算期が異なる数値の合計のため目安です）。
        </p>
        <p className="mb-10">
          掲載の対象は、{CHECKED}時点でEDINETの提出者情報が「上場」の小売業のうち、有価証券報告書の事業の内容でドラッグストアの運営が主な事業と確認できた会社です。
          保険調剤薬局が主な事業の会社（アインホールディングスはファーマシー事業、クオールホールディングスは保険薬局の経営が主な事業）、スーパーマーケットなどを主な事業とし子会社でドラッグストアを運営する会社、上場廃止となったウエルシアホールディングスは含めていません。
          サンドラッグはディスカウントストア事業（ダイレックス）、クリエイトSDHDとサツドラHDはドラッグストア以外の事業の売上高も連結売上高に含みます。
        </p>

        <h2>ツルハHDとウエルシアHDの経営統合</h2>
        <div className="glass-card p-6 mb-10">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>ウエルシアホールディングスの普通株式は、2025年11月27日に東京証券取引所プライム市場で上場廃止となりました（最終売買日は2025年11月26日）。</li>
            <li>2025年12月1日、ツルハHDを株式交換完全親会社、ウエルシアHDを株式交換完全子会社とする株式交換が効力を発生しました（ウエルシアHD株式1株に対しツルハHD株式1.15株を割当。2025年9月1日の株式分割を考慮した比率）。</li>
            <li>ツルハHDの2026年2月期の連結売上高に含まれるウエルシアHDの業績は、2025年12月1日〜2026年2月28日の3か月分です。</li>
            <li>ツルハHDは、統合が期首（2025年3月1日）に完了していたと仮定した場合の売上高への影響の概算額を1兆394億円と開示しています（監査証明なし）。単純に足すと約2兆4,609億円ですが、これは当サイトの計算による参考値で、実績値ではありません。</li>
            <li>ウエルシアHDの最後の有価証券報告書（2025年2月期・第17期）の連結売上高は1兆2,850億円（1,285,005百万円）です。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">
            出典：<a href={PDF("S100Y5EY")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ツルハHD 有価証券報告書（第64期）</a>の沿革・重要な契約等・企業結合等関係、
            <a href={PDF("S100VTBM")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ウエルシアHD 有価証券報告書（第17期・2025年5月28日提出）</a>（{CHECKED}確認）
          </p>
        </div>

        <h2>提出会社の平均年間給与・平均年齢・従業員数</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社</th>
                <th className="p-3 text-left">提出会社</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数（臨時・外数）</th>
              </tr>
            </thead>
            <tbody>
              {parent.map((r) => (
                <tr key={r.name} className="border-b border-gray-100">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3 whitespace-nowrap">{r.type}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.man}<span className="block text-[11px] text-text-muted font-normal">{r.pay}</span></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※売上高ランキングと同じ有価証券報告書の「従業員の状況」提出会社の状況（賞与及び基準外賃金を含む・万円未満切り捨て）。臨時従業員は8時間換算の年間平均人員です。
          Genky DrugStores・薬王堂HD・サツドラHDは「純粋持株会社であるため記載を省略」と記載しています。
        </p>
        <p className="mb-10">
          持株会社の値は、本社機能に勤める少人数の従業員の平均で、店舗の薬剤師・登録販売者・店長などは含みません。
          クリエイトSDHDの10人はすべて子会社のクリエイトエス・ディーからの出向者で、同社は「年間給与のうち当社負担額は10％」と記載しています。マツキヨココカラの74人も主に連結子会社からの出向者、ツルハHDの245人には当社グループからの出向者124名が含まれます。
          このため、持株会社の値は店舗で働く人の給与水準を表すものではありません。
        </p>

        <h2>店舗を運営する会社の平均年間給与の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社</th>
                <th className="p-3 text-left">記載箇所</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数（臨時・外数）</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((r) => (
                <tr key={r.name} className="border-b border-gray-100">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3 text-text-secondary">{r.src}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.man}<span className="block text-[11px] text-text-muted font-normal">{r.pay}</span></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※事業会社が有価証券報告書を提出しているサンドラッグ・カワチ薬品・コスモス薬品は提出会社の状況、持株会社の5社は同じ有価証券報告書の「最大人員会社の状況」の値です。平均年間給与の高い順に当サイトで並べました。
          ゲンキーは平均年間給与を百万円単位（4百万円）で記載しているため、順位の比較には含めていません。ツルハHD・スギHD・薬王堂HDの有価証券報告書には、店舗を運営する子会社の平均年間給与の記載がありません。
        </p>
        <p className="mb-10">
          店舗を運営する会社の平均年間給与は約479万〜約589万円の範囲で、提出会社の値（持株会社では約536万〜約1,108万円）よりも差が小さくなっています。
          平均年齢は29.3歳（ゲンキー）〜39.6歳（ココカラファインヘルスケア）で、平均勤続年数が13.8年と最も長いカワチ薬品は、平均年間給与も2番目に高い水準です。
          コスモス薬品は臨時従業員（24,444人）が従業員（5,977人）の約4.1倍で、平均年間給与の対象に含まれない人が多い点にご注意ください（倍率は当サイト計算）。
        </p>

        <h2>数値を比べるときの注意点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>決算期末は、ツルハHD・スギHD・薬王堂HDが2月末、マツキヨココカラ・サンドラッグが3月31日、カワチ薬品が3月15日、サツドラHDが5月15日、クスリのアオキHDが5月20日、コスモス薬品・クリエイトSDHDが5月31日、Genky DrugStoresが6月20日です。いずれも12か月決算ですが、対象期間は最大で約4か月ずれています。</li>
            <li>ツルハHDの2026年2月期はウエルシアHDの業績を3か月分のみ含み、前期は9.5か月決算です。統合後の通期の規模は、2027年2月期の有価証券報告書で確認できる見込みです。</li>
            <li>平均年間給与は正社員など従業員の平均で、パート・アルバイトなど臨時従業員の給与は含みません。また、薬剤師と販売職など職種別の内訳は有価証券報告書に記載されていません。</li>
            <li>
              業界全体の規模について、日本チェーンドラッグストア協会は
              <a href={JACDS_190} target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:underline">ニュースリリース第190号（2025年12月5日）</a>
              で、店舗数23,000店舗・売上高10兆円とし、2030年に業界売上高13兆円・店舗数35,000店を目標に掲げています（{CHECKED}確認）。上場11社の合計とは集計の範囲と期間が異なるため、当サイトではシェアを算出していません。
            </li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            薬剤師としてドラッグストアへの転職を検討する場合は、薬剤師専門のサービスをまとめた<Link href="/review/oshigoto-lab/" className="text-teal font-bold hover:underline">お仕事ラボの解説ページ</Link>や、
            未経験からの転職に向いたサービスをまとめた<Link href="/type/inexperienced/" className="text-teal font-bold hover:underline">未経験の転職に強い転職エージェント</Link>も参考にしてください。
          </p>
        </div>

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/seiyaku-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">製薬業界の年収ランキング</Link>
            <Link href="/company/keshohin-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">化粧品・日用品メーカーの年収ランキング</Link>
            <Link href="/review/oshigoto-lab/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">お仕事ラボの特徴</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
