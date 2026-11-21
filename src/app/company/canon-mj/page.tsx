import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "キヤノンマーケティングジャパンの平均年収は約849万円【2025年12月期・有価証券報告書】3期推移・部門別の人員",
  description:
    "キヤノンマーケティングジャパン株式会社の平均年間給与は8,494,208円（約849万円・2025年12月期・提出会社）です。第56期〜第58期の有価証券報告書から、平均年齢・勤続年数・従業員数の推移、セグメント別の人員、親会社キヤノンとの比較、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/canon-mj/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "キヤノンマーケティングジャパンの平均年収は約849万円【2025年12月期】",
    description: "キヤノンマーケティングジャパンの有価証券報告書から、平均年収・平均年齢・勤続年数の3期推移とセグメント別の人員を整理しています。",
  },
};

const CHECKED = "2026年11月22日";
const Y2025 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XS8C.pdf";
const Y2024 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100VG7L.pdf";
const Y2023 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100T53R.pdf";

// 有価証券報告書「従業員の状況 (2) 提出会社の状況」（各年12月31日現在）
const years = [
  { term: "2023年12月期（第56期）", n: 4528, age: "48.8歳", tenure: "25.2年", pay: 8352637, url: Y2023 },
  { term: "2024年12月期（第57期）", n: 4510, age: "48.7歳", tenure: "25.0年", pay: 8274236, url: Y2024 },
  { term: "2025年12月期（第58期）", n: 4563, age: "48.4歳", tenure: "24.6年", pay: 8494208, url: Y2025 },
];
const latest = years[2];
const g = (a: number, b: number) => {
  const v = ((b - a) / a) * 100;
  return `${v >= 0 ? "+" : ""}${v.toFixed(1)}%`;
};
const manYen = (v: number) => `約${Math.round(v / 10000).toLocaleString("ja-JP")}万円`;

// 提出会社のセグメント別従業員数（第56期・第57期・第58期）
const segs = [
  { k: "全社（共通）", a: 1937, b: 1942, c: 2028 },
  { k: "エンタープライズ", a: 919, b: 958, c: 1001 },
  { k: "エリア", a: 886, b: 833, c: 769 },
  { k: "コンスーマ", a: 563, b: 546, c: 533 },
  { k: "プロフェッショナル", a: 162, b: 161, c: 162 },
  { k: "その他", a: 61, b: 70, c: 70 },
];

// 親会社キヤノン株式会社 2025年12月期 有価証券報告書（当サイト /company/canon/ 掲載値）
const CANON = 8817253;
// 一般労働者全体（令和7年 賃金構造基本統計調査：所定内給与額340.6千円×12＋年間賞与1,009.6千円）
const ALL = (340.6 * 12 + 1009.6) * 1000;

const faqData = [
  {
    q: "キヤノンマーケティングジャパンの平均年収はいくらですか？",
    a: `2025年12月期の有価証券報告書（第58期）によると、キヤノンマーケティングジャパン株式会社の平均年間給与は8,494,208円（約849万円）です。賞与と基準外賃金を含む金額で、対象は提出会社の従業員4,563人です（${CHECKED}にEDINET掲載の有価証券報告書で確認）。`,
  },
  {
    q: "キヤノンマーケティングジャパンとキヤノンではどちらの年収が高いですか？",
    a: `2025年12月期の有価証券報告書の平均年間給与は、親会社のキヤノン株式会社が8,817,253円、キヤノンマーケティングジャパンが8,494,208円で、キヤノンが約${Math.round((CANON - latest.pay) / 10000)}万円高くなっています（当サイト計算）。キヤノンマーケティングジャパンは日本市場でキヤノン製品の販売・サービス・マーケティングを担う会社で、キヤノン株式会社が議決権の52.1%を所有する親会社です。`,
  },
  {
    q: "キヤノンITソリューションズなどのグループ会社の年収も含まれますか？",
    a: "含まれません。平均年間給与は提出会社であるキヤノンマーケティングジャパン株式会社単体の従業員の数値です。連結の従業員数は18,425人（2025年12月31日現在）で、キヤノンITソリューションズやキヤノンシステムアンドサポートなどの子会社の平均年収は有価証券報告書に記載されていません。",
  },
  {
    q: "キヤノンマーケティングジャパンの男女の賃金の差異はどのくらいですか？",
    a: "第58期の有価証券報告書では、男性労働者の賃金に対する女性労働者の賃金の割合は、全労働者で84.0%、正規雇用労働者で78.8%、パート・有期労働者で86.8%です。管理職に占める女性労働者の割合は6.6%、男性労働者の育児休業取得率は64.2%です。",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "キヤノンマーケティングジャパンの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            キヤノンマーケティングジャパンの平均年収は約849万円【2025年12月期・有価証券報告書】3期推移・部門別の人員
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: manYen(latest.pay), l: "平均年間給与（2025年12月期）" },
              { v: latest.age, l: "平均年齢" },
              { v: latest.tenure, l: "平均勤続年数" },
              { v: `${latest.n.toLocaleString("ja-JP")}人`, l: "従業員数（提出会社）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            キヤノンマーケティングジャパン株式会社の平均年間給与は<strong>8,494,208円（約849万円）</strong>です（2025年12月期・提出会社の従業員4,563人・賞与と基準外賃金を含む）。
            前期の8,274,236円から{g(years[1].pay, latest.pay)}で、親会社のキヤノン株式会社（8,817,253円）より約{Math.round((CANON - latest.pay) / 10000)}万円低い水準です（当サイト計算）。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：キヤノンマーケティングジャパン株式会社 <a href={Y2025} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第58期）</a>「従業員の状況」ほか。{CHECKED}にEDINET掲載の有価証券報告書で確認しています。
          </p>
        </div>

        <h2>平均年収・平均年齢・勤続年数の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">前期比（当サイト計算）</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数</th>
              </tr>
            </thead>
            <tbody>
              {years.map((y, i) => (
                <tr key={y.term} className={`border-b border-gray-100 ${y === latest ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">
                    <a href={y.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{y.term}</a>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{y.pay.toLocaleString("ja-JP")}円</td>
                  <td className="p-3 text-right whitespace-nowrap">{i === 0 ? "－" : g(years[i - 1].pay, y.pay)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.n.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書「提出会社の状況」（各年12月31日現在）。従業員数は就業人員です。平均年間給与は賞与及び基準外賃金を含みます。
        </p>
        <p className="mb-10">
          平均年間給与は第57期に前期比{g(years[0].pay, years[1].pay)}と下がり、第58期に{g(years[1].pay, latest.pay)}と上がりました。3期とも平均年齢は48歳台、平均勤続年数は25年前後で、長く勤める社員が多い構成です。
          参考として、厚生労働省「令和7年 賃金構造基本統計調査」から算出した一般労働者全体の平均年収は{manYen(ALL)}で、キヤノンマーケティングジャパンはその約{(latest.pay / ALL).toFixed(1)}倍です（当サイト計算・<Link href="/knowledge/salary-50sai/" className="text-teal font-bold hover:underline">50歳の平均年収</Link>も参照）。
        </p>

        <h2>親会社キヤノン・同業他社との比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社（有価証券報告書の提出会社）</th>
                <th className="p-3 text-right rounded-tr-lg">平均年間給与</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3"><Link href="/company/canon/" className="text-teal hover:underline">キヤノン株式会社</Link>（2025年12月期）</td>
                <td className="p-3 text-right whitespace-nowrap">8,817,253円</td>
              </tr>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">キヤノンマーケティングジャパン株式会社（2025年12月期）</td>
                <td className="p-3 text-right whitespace-nowrap">{latest.pay.toLocaleString("ja-JP")}円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          キヤノン株式会社は、キヤノンマーケティングジャパンの議決権の52.1%を所有する親会社です（第58期 有価証券報告書「関係会社の状況」）。同社は、日本市場でキヤノン製品の販売・サービス・マーケティングを担っています（同「事業の内容」）。
          事務機器の他社の平均年収は<Link href="/company/ricoh/" className="text-teal font-bold hover:underline">リコー</Link>・<Link href="/company/fujifilm-bi/" className="text-teal font-bold hover:underline">富士フイルムビジネスイノベーション</Link>・<Link href="/company/konica-minolta/" className="text-teal font-bold hover:underline">コニカミノルタ</Link>のページで、各社の有価証券報告書から整理しています。決算期や対象範囲（持株会社・事業会社）が異なるため、比べるときはご注意ください。
        </p>

        <h2>提出会社のセグメント別の人員</h2>
        <p>
          キヤノンマーケティングジャパンの連結従業員数は18,425人（2025年12月31日現在・臨時雇用者2,510人は外数）で、平均年間給与の対象となる提出会社の従業員はその約{((latest.n / 18425) * 100).toFixed(1)}%です（当サイト計算）。
          提出会社の従業員をセグメント別に見ると、次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">セグメント</th>
                <th className="p-3 text-right">2023年12月期</th>
                <th className="p-3 text-right">2024年12月期</th>
                <th className="p-3 text-right rounded-tr-lg">2025年12月期</th>
              </tr>
            </thead>
            <tbody>
              {segs.map((s) => (
                <tr key={s.k} className="border-b border-gray-100">
                  <td className="p-3">{s.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.a.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.b.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.c.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第56期〜第58期の有価証券報告書「提出会社の状況」。全社（共通）は、マーケティング統括部門・本社管理部門に所属する従業員です。</p>
        <p className="mb-10">
          2期で、大手・準大手・中堅企業向けのエンタープライズは919人から1,001人へ82人増え、全国の中小企業向けのエリアは886人から769人へ117人減りました（当サイト計算）。
          連結ではエンタープライズ8,101人・エリア5,148人と子会社の人員が多く、提出会社の平均年間給与はこのうち親会社に所属する社員だけの数値です。応募先が本体か子会社かで、この数値が当てはまるかが変わります。
        </p>

        <h2>男女の賃金の差異・女性管理職比率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">指標（第58期・提出会社）</th>
                <th className="p-3 text-right rounded-tr-lg">値</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "男女の賃金の差異（全労働者）", v: "84.0%" },
                { k: "うち正規雇用労働者", v: "78.8%" },
                { k: "うちパート・有期労働者", v: "86.8%" },
                { k: "管理職に占める女性労働者の割合", v: "6.6%" },
                { k: "男性労働者の育児休業取得率", v: "64.2%" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第58期の有価証券報告書「管理職に占める女性労働者の割合、男性労働者の育児休業取得率及び労働者の男女の賃金の差異」。女性活躍推進法・育児介護休業法の規定に基づく算出値です。</p>
        <p className="mb-10">
          同じ有価証券報告書には、連結子会社9社の指標も掲載されています。たとえば、キヤノンITソリューションズの男女の賃金の差異は全労働者で86.1%、管理職に占める女性労働者の割合は7.0%です。
        </p>

        <h2>よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/company/canon/" className="text-teal font-bold hover:underline">キヤノンの平均年収・中途採用</Link></li>
          <li><Link href="/company/ricoh/" className="text-teal font-bold hover:underline">リコーの平均年収</Link></li>
          <li><Link href="/company/otsuka-shokai/" className="text-teal font-bold hover:underline">大塚商会の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-800man/" className="text-teal font-bold hover:underline">年収800万円の手取り</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          <li><a href={Y2025} target="_blank" rel="noopener noreferrer" className="hover:underline">キヤノンマーケティングジャパン株式会社 有価証券報告書 第58期（2025年1月1日〜2025年12月31日）</a></li>
          <li><a href={Y2024} target="_blank" rel="noopener noreferrer" className="hover:underline">キヤノンマーケティングジャパン株式会社 有価証券報告書 第57期（2024年1月1日〜2024年12月31日）</a></li>
          <li><a href={Y2023} target="_blank" rel="noopener noreferrer" className="hover:underline">キヤノンマーケティングジャパン株式会社 有価証券報告書 第56期（2023年1月1日〜2023年12月31日）</a></li>
          <li><a href="https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" target="_blank" rel="noopener noreferrer" className="hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表</a></li>
          <li><a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金</a></li>
        </ul>
      </article>
    </>
  );
}
