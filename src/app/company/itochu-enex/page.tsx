import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "伊藤忠エネクスの平均年収は約1,001万円【2026年3月期・有価証券報告書】3期推移・職位別の男女の賃金の差異",
  description:
    "伊藤忠エネクス株式会社の平均年間給与は10,009,720円（約1,001万円・2026年3月期・提出会社）で、前期比1.0%増です。第64期〜第66期の有価証券報告書から、平均年齢・勤続年数・従業員数の推移、セグメント別の人員、給与制度、職位別の男女の賃金の差異を整理しています。",

  alternates: { canonical: "/company/itochu-enex/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "伊藤忠エネクスの平均年収は約1,001万円【2026年3月期・有価証券報告書】",
    description: "伊藤忠エネクスの有価証券報告書から、平均年収・平均年齢・勤続年数の3期推移とセグメント別の人員を整理しています。",
  },
};

const CHECKED = "2026年11月22日";
const Y2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YC4K.pdf";
const Y2025 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100VYGF.pdf";
const Y2024 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100TNEQ.pdf";

// 有価証券報告書「従業員の状況 提出会社の状況」（各年3月31日現在・臨時従業員は外数）
const years = [
  { term: "2024年3月期（第64期）", n: 505, temp: 89, age: "41.8歳", tenure: "16.0年", pay: 9938661, url: Y2024 },
  { term: "2025年3月期（第65期）", n: 449, temp: 85, age: "41.0歳", tenure: "14.8年", pay: 9906586, url: Y2025 },
  { term: "2026年3月期（第66期）", n: 421, temp: 83, age: "41.3歳", tenure: "15.7年", pay: 10009720, url: Y2026 },
];
const latest = years[2];
const g = (a: number, b: number) => {
  const v = ((b - a) / a) * 100;
  return `${v >= 0 ? "+" : ""}${v.toFixed(1)}%`;
};
const manYen = (v: number) => `約${Math.round(v / 10000).toLocaleString("ja-JP")}万円`;

// 提出会社のセグメント別従業員数（第64期・第65期・第66期）。null は記載なし
const segs: { k: string; a: number; b: number | null; c: number | null }[] = [
  { k: "全社（共通）", a: 119, b: 158, c: 136 },
  { k: "産業ビジネス事業", a: 149, b: 124, c: 121 },
  { k: "カーライフ事業", a: 130, b: 104, c: 99 },
  { k: "電力・ユーティリティ事業", a: 75, b: 63, c: 65 },
  { k: "ホームライフ事業", a: 32, b: null, c: null },
];

// 第66期 ゼネラル職の役職別 男女間賃金格差（エリア職を除く）
const grades = [
  { k: "次長職（管理職）", v: "91.1%" },
  { k: "課長職（管理職）", v: "95.4%" },
  { k: "4等級（非管理職）", v: "99.5%" },
  { k: "3等級（非管理職）", v: "97.5%" },
  { k: "2等級（非管理職）", v: "95.6%" },
  { k: "1等級（非管理職）", v: "98.5%" },
];

// 親会社 伊藤忠商事 有価証券報告書（当サイト /company/itochu/ 掲載値）
// 一般労働者全体（令和7年 賃金構造基本統計調査：所定内給与額340.6千円×12＋年間賞与1,009.6千円）
const ALL = (340.6 * 12 + 1009.6) * 1000;

const faqData = [
  {
    q: "伊藤忠エネクスの平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（第66期）によると、伊藤忠エネクス株式会社の平均年間給与は10,009,720円（約1,001万円）で、対前事業年度増減率は1.0%と記載されています。税込支払給与額で、時間外給与と賞与を含みます。対象は提出会社の従業員421人です（${CHECKED}にEDINET掲載の有価証券報告書で確認）。`,
  },
  {
    q: "伊藤忠エネクスの平均年収はグループ全体の数字ですか？",
    a: "いいえ。有価証券報告書の平均年間給与は、提出会社である伊藤忠エネクス株式会社単体の従業員（2026年3月31日現在 421人）の数値です。連結の従業員数は5,193人で、カーライフ事業（3,087人）やホームライフ事業（1,068人）の子会社の社員の平均年収は有価証券報告書に記載されていません。",
  },
  {
    q: "伊藤忠エネクスと伊藤忠商事の関係は？",
    a: "伊藤忠商事株式会社が議決権の55.8%を所有する親会社です（第66期 有価証券報告書「関係会社の状況」）。伊藤忠エネクスは1961年1月に、伊藤忠商事の子会社として石油製品の販売を目的に設立されました。伊藤忠商事の平均年収は、当サイトの伊藤忠商事のページで同社の有価証券報告書から整理しています。",
  },
  {
    q: "伊藤忠エネクスの給与制度はどのような仕組みですか？",
    a: "第66期の有価証券報告書によると、給与は資格役割制度を導入し、マネジメント能力・経験値等に応じて設定された資格と、職位に応じて設定された役割の足し算方式で構成されています。賞与は会社の成果と個人の成果で構成され、管理監督者ほど業績に対する結果責任が多く反映される仕組みです。",
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "伊藤忠エネクスの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            伊藤忠エネクスの平均年収は約1,001万円【2026年3月期・有価証券報告書】3期推移・職位別の男女の賃金の差異
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: manYen(latest.pay), l: "平均年間給与（2026年3月期）" },
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
            伊藤忠エネクス株式会社の平均年間給与は<strong>10,009,720円（約1,001万円）</strong>です（2026年3月期・提出会社の従業員421人・有価証券報告書の記載で前期比1.0%増）。
            3期とも約991万円〜約1,001万円の範囲で、ほぼ横ばいです。平均年間給与の対象は提出会社の社員で、連結従業員5,193人の約{((latest.n / 5193) * 100).toFixed(1)}%にあたります（当サイト計算）。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：伊藤忠エネクス株式会社 <a href={Y2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第66期）</a>「従業員の状況」ほか。{CHECKED}にEDINET掲載の有価証券報告書で確認しています。
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
                <th className="p-3 text-right rounded-tr-lg">従業員数［臨時］</th>
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
                  <td className="p-3 text-right whitespace-nowrap">{y.n.toLocaleString("ja-JP")}人［{y.temp}人］</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書「提出会社の状況」（各年3月31日現在）。従業員数は就業人員数で、臨時従業員数は［ ］内に年間の平均人員を外数で記載しています。平均年間給与は税込支払給与額で、時間外給与及び賞与を含みます。第66期の有価証券報告書には対前事業年度増減率1.0%が記載されています。
        </p>
        <p className="mb-10">
          提出会社の従業員数は2期で505人から421人へ84人減りました（当サイト計算）。平均年間給与は第65期に{g(years[0].pay, years[1].pay)}、第66期に{g(years[1].pay, latest.pay)}で、第66期は1,000万円を上回りました。
          参考として、厚生労働省「令和7年 賃金構造基本統計調査」から算出した一般労働者全体の平均年収は{manYen(ALL)}で、伊藤忠エネクスはその約{(latest.pay / ALL).toFixed(1)}倍です（当サイト計算・<Link href="/knowledge/salary-40sai/" className="text-teal font-bold hover:underline">40歳の平均年収</Link>も参照）。
        </p>

        <h2>提出会社のセグメント別の人員</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">セグメント</th>
                <th className="p-3 text-right">2024年3月期</th>
                <th className="p-3 text-right">2025年3月期</th>
                <th className="p-3 text-right rounded-tr-lg">2026年3月期</th>
              </tr>
            </thead>
            <tbody>
              {segs.map((s) => (
                <tr key={s.k} className="border-b border-gray-100">
                  <td className="p-3">{s.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.a}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.b === null ? "記載なし" : `${s.b}人`}</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.c === null ? "記載なし" : `${s.c}人`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第64期〜第66期の有価証券報告書「提出会社の状況」（臨時従業員を除く）。全社（共通）は、特定のセグメントに区分できない管理部門に所属する従業員です。</p>
        <p className="mb-10">
          第65期以降、提出会社のセグメント別の人員にホームライフ事業の記載はありません。連結ではホームライフ事業に1,068人、カーライフ事業に3,087人（いずれも2026年3月31日現在）が所属しており、多くは子会社の社員です。
          同じ有価証券報告書では、伊藤忠エネクスホームライフ・日産大阪販売・エネクスフリートなどの子会社の多様性に関する指標も開示されていますが、子会社の平均年収は記載されていません。応募先が本体か子会社かで、この数値が当てはまるかが変わります。
        </p>

        <h2>ゼネラル職の職位別の男女の賃金の差異</h2>
        <p>
          第66期の提出会社の男女間賃金格差（男性の賃金に対する女性の賃金の割合）は、全労働者で61.1%、正規労働者で60.6%、非正規労働者で56.7%です。女性管理職比率は3.0%、男性育児休業取得率は100%です。
          同社は補足として、エリア職を除いたゼネラル職の職位別の格差も開示しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">役職（ゼネラル職）</th>
                <th className="p-3 text-right rounded-tr-lg">男女間賃金格差</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第66期の有価証券報告書「多様性に関する指標の補足」。部長職は記載なし（－）。エリア職を除いた年収で算出された値です。</p>
        <p className="mb-10">
          同じ職位どうしでは91.1%〜99.5%です。同社は、職掌ごとに資格役割制度を導入して資格と役割に応じて賃金を決定しており、同一労働の賃金に差はないと説明しています。ゼネラル職は転居を伴う全事業所への異動・全職種への配属がある職掌、エリア職は転居を伴わない範囲での配属がある職掌です。
          同社は2014年から女性採用を強化しており、長期的に格差が是正される見込みとしています。女性管理職比率の目標は2030年10%、2035年30%です。
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
          <li><Link href="/company/itochu/" className="text-teal font-bold hover:underline">伊藤忠商事の平均年収</Link></li>
          <li><Link href="/company/denryoku-gas-salary/" className="text-teal font-bold hover:underline">電力・ガス業界の年収ランキング</Link></li>
          <li><Link href="/company/shosha-salary/" className="text-teal font-bold hover:underline">商社の年収ランキング</Link></li>
          <li><Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1,000万円の手取り</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          <li><a href={Y2026} target="_blank" rel="noopener noreferrer" className="hover:underline">伊藤忠エネクス株式会社 有価証券報告書 第66期（2025年4月1日〜2026年3月31日）</a></li>
          <li><a href={Y2025} target="_blank" rel="noopener noreferrer" className="hover:underline">伊藤忠エネクス株式会社 有価証券報告書 第65期（2024年4月1日〜2025年3月31日）</a></li>
          <li><a href={Y2024} target="_blank" rel="noopener noreferrer" className="hover:underline">伊藤忠エネクス株式会社 有価証券報告書 第64期（2023年4月1日〜2024年3月31日）</a></li>
          <li><a href="https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" target="_blank" rel="noopener noreferrer" className="hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表</a></li>
          <li><a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金</a></li>
        </ul>
      </article>
    </>
  );
}
