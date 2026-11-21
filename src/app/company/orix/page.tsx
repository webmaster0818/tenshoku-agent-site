import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "オリックスの平均年収は約1,040万円【2026年3月期・有価証券報告書】2期で13.0%増・部門別の人員",
  description:
    "オリックス株式会社の平均年間給与は10,396,546円（約1,040万円・2026年3月期）で、有価証券報告書では前期比6.5%増と記載されています。第61期〜第63期の有価証券報告書から、平均年齢・勤続年数・従業員数の推移、提出会社の部門別の人員、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/orix/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "オリックスの平均年収は約1,040万円【2026年3月期・有価証券報告書】",
    description: "オリックスの有価証券報告書から、平均年収・平均年齢・勤続年数の3期推移と部門別の人員を整理しています。",
  },
};

const CHECKED = "2026年11月22日";
const Y2026 = "https://www.orix.co.jp/grp/pdf/company/ir/library/securities_report/2026_4QJ.pdf";
const Y2025 = "https://www.orix.co.jp/grp/pdf/company/ir/library/securities_report/2025_4QJ.pdf";
const Y2024 = "https://www.orix.co.jp/grp/pdf/company/ir/library/securities_report/2024_4QJ.pdf";

// 有価証券報告書「従業員の状況 ②提出会社の状況」（各年3月31日現在）
const years = [
  { term: "2024年3月期（第61期）", n: 2929, age: "44.1歳", tenure: "16.1年", pay: 9203700, url: Y2024 },
  { term: "2025年3月期（第62期）", n: 2927, age: "44.2歳", tenure: "16.2年", pay: 9761606, url: Y2025 },
  { term: "2026年3月期（第63期）", n: 3016, age: "44.2歳", tenure: "15.8年", pay: 10396546, url: Y2026 },
];
const latest = years[2];
const g = (a: number, b: number) => `${(((b - a) / a) * 100).toFixed(1)}%`;
const manYen = (v: number) => `約${Math.round(v / 10000).toLocaleString("ja-JP")}万円`;

// 第63期 提出会社の事業の種類別セグメントの従業員数（2026年3月31日現在）と第62期
const segs = [
  { k: "法人営業・メンテナンスリース", n: 1370, p: 1413 },
  { k: "全社（共通）", n: 1052, p: 1024 },
  { k: "環境エネルギー", n: 267, p: 257 },
  { k: "事業投資・コンセッション", n: 105, p: 102 },
  { k: "不動産", n: 104, p: 26 },
  { k: "輸送機器", n: 66, p: 63 },
  { k: "アジア・豪州", n: 52, p: 42 },
];

// 一般労働者全体（令和7年 賃金構造基本統計調査：所定内給与額340.6千円×12＋年間賞与1,009.6千円）
const ALL = (340.6 * 12 + 1009.6) * 1000;

const faqData = [
  {
    q: "オリックスの平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（第63期）によると、オリックス株式会社の平均年間給与は10,396,546円（約1,040万円）です。対前事業年度増減率は6.5%と記載されています。従業員3,016人のうち、休職者・期中の途中入社者・受入出向者を除いた平均です（${CHECKED}に同社IRサイトの有価証券報告書で確認）。`,
  },
  {
    q: "オリックスの平均年収はグループ全体の数字ですか？",
    a: "いいえ。有価証券報告書の平均年間給与は、提出会社であるオリックス株式会社単体の従業員（2026年3月31日現在 3,016人）の数値です。連結の従業員数は37,286人で、オリックス自動車・オリックス生命保険・オリックス銀行などのグループ会社の平均年収は、同社の有価証券報告書には記載されていません。",
  },
  {
    q: "オリックスの年収はなぜ上がっているのですか？",
    a: "第63期の有価証券報告書では、物価上昇による社員への影響も考慮し、当期に初任給を含む基本給の引き上げを実施したと説明しています。平均年間給与は第61期の9,203,700円から第63期の10,396,546円まで、2期で13.0%増えています（当サイト計算）。",
  },
  {
    q: "オリックスの男女の賃金の差異はどのくらいですか？",
    a: "第63期の有価証券報告書では、男性社員の年間平均賃金に対する女性社員の割合は、全社員で64.2%、正規雇用社員で63.6%、有期雇用社員・アルバイトで78.6%です。同社は主な要因として、男女間で職種構成が大きく異なることを挙げています。管理的地位にある労働者に占める女性の割合は34.1%です。",
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "オリックスの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            オリックスの平均年収は約1,040万円【2026年3月期・有価証券報告書】2期で13.0%増・部門別の人員
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
            オリックス株式会社の平均年間給与は<strong>10,396,546円（約1,040万円）</strong>です（2026年3月期・提出会社の従業員・有価証券報告書の記載で前期比6.5%増）。
            2024年3月期の9,203,700円から2期で{g(years[0].pay, latest.pay)}増えており、同社は当期に初任給を含む基本給の引き上げを実施したと説明しています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：オリックス株式会社 <a href={Y2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第63期）</a>「従業員の状況」ほか。{CHECKED}に同社IRサイト掲載の有価証券報告書で確認しています。
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
                  <td className="p-3 text-right whitespace-nowrap">{i === 0 ? "－" : `+${g(years[i - 1].pay, y.pay)}`}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.n.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書「提出会社の状況」。従業員数は就業人員数です。平均年間給与は、従業員のうち休職者・会計年度内の途中入社者および受入出向者を除いた金額です。第63期の有価証券報告書には対前事業年度増減率6.5%が記載されています。
        </p>
        <p className="mb-10">
          平均年間給与は2期連続で6%台の増加となり、第63期に1,000万円を超えました。平均年齢は44歳台でほぼ変わらず、平均勤続年数は第63期に0.4年短くなっています。従業員数は第63期に89人増えました。
          参考として、厚生労働省「令和7年 賃金構造基本統計調査」から算出した一般労働者全体の平均年収は{manYen(ALL)}で、オリックスはその約{(latest.pay / ALL).toFixed(1)}倍です（当サイト計算・<Link href="/knowledge/salary-40sai/" className="text-teal font-bold hover:underline">40歳の平均年収</Link>も参照）。
        </p>

        <h2>提出会社の部門別の人員</h2>
        <p>
          オリックスの連結従業員数は37,286人（2026年3月31日現在）で、平均年間給与の対象となる提出会社（オリックス株式会社）の従業員はその約{((3016 / 37286) * 100).toFixed(1)}%です（当サイト計算）。
          提出会社の従業員を事業の種類別セグメントで見ると、次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">セグメント</th>
                <th className="p-3 text-right">2025年3月期</th>
                <th className="p-3 text-right rounded-tr-lg">2026年3月期</th>
              </tr>
            </thead>
            <tbody>
              {segs.map((s) => (
                <tr key={s.k} className="border-b border-gray-100">
                  <td className="p-3">{s.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.p.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.n.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第62期・第63期の有価証券報告書「提出会社の状況」。保険・銀行・クレジット・ORIX USA・ORIX Europe は提出会社の従業員がいないため省略しています。</p>
        <p className="mb-10">
          提出会社の従業員の約45%（1,370人）が法人営業・メンテナンスリース、約35%（1,052人）が全社（共通）の部門に所属しています（当サイト計算）。不動産セグメントは1年で26人から104人に増えました。
          保険（オリックス生命保険）や銀行（オリックス銀行）などは別会社のため、提出会社の平均年間給与には含まれません。転職先の会社がオリックス株式会社かグループ会社かで、この数値が当てはまるかが変わります。
        </p>

        <h2>男女の賃金の差異・女性管理職比率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">指標（2026年3月31日時点・当社）</th>
                <th className="p-3 text-right rounded-tr-lg">値</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "男女の賃金の差異（全社員）", v: "64.2%" },
                { k: "うち正規雇用社員", v: "63.6%" },
                { k: "うち有期雇用社員・アルバイト", v: "78.6%" },
                { k: "管理的地位にある労働者に占める女性の割合", v: "34.1%" },
                { k: "男性社員の育児休業等取得率", v: "98.4%" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第63期の有価証券報告書「多様性に関する指標」。男女の賃金の差異は、男性社員の年間平均賃金に対する女性社員の年間平均賃金の割合です。</p>
        <p className="mb-10">
          同社は、男女の賃金の差異の主な要因として、男女間で職種構成が大きく異なることを挙げています。同じ有価証券報告書には、オリックス自動車・オリックス生命保険・オリックス銀行など国内グループ8社の合計値（全社員65.0%）も掲載されています。
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
          <li><Link href="/company/kinyu-salary/" className="text-teal font-bold hover:underline">金融業界の年収ランキング</Link></li>
          <li><Link href="/company/mitsubishi-corp/" className="text-teal font-bold hover:underline">三菱商事の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1,000万円の手取り</Link></li>
          <li><Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link></li>
          <li><Link href="/review/randstad/" className="text-teal font-bold hover:underline">ランスタッドの評判（ハイクラス向け転職）</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          <li><a href={Y2026} target="_blank" rel="noopener noreferrer" className="hover:underline">オリックス株式会社 有価証券報告書 第63期（2025年4月1日〜2026年3月31日）</a></li>
          <li><a href={Y2025} target="_blank" rel="noopener noreferrer" className="hover:underline">オリックス株式会社 有価証券報告書 第62期（2024年4月1日〜2025年3月31日）</a></li>
          <li><a href={Y2024} target="_blank" rel="noopener noreferrer" className="hover:underline">オリックス株式会社 有価証券報告書 第61期（2023年4月1日〜2024年3月31日）</a></li>
          <li><a href="https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" target="_blank" rel="noopener noreferrer" className="hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表</a></li>
          <li><a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金</a></li>
        </ul>
      </article>
    </>
  );
}
