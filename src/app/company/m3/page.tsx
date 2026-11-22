import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エムスリーの平均年収は約976万円【2026年3月期・有価証券報告書】3期推移・中途比率90%",
  description:
    "エムスリー株式会社の平均年間給与は9,759千円（約976万円・2026年3月期・提出会社）で、有価証券報告書では前期比4.9%増と記載されています。第24期〜第26期の有価証券報告書から、平均年齢・勤続年数・従業員数の推移、セグメント別の人員、男女の賃金の差異、同社が公表する中途比率を整理しています。",
  alternates: { canonical: "/company/m3/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "エムスリーの平均年収は約976万円【2026年3月期・有価証券報告書】",
    description: "エムスリーの有価証券報告書から、平均年収・平均年齢・勤続年数の3期推移と中途比率を整理しています。",
  },
};

const CHECKED = "2026年11月22日";
const Y2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YJ25.pdf";
const Y2025 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100W3NK.pdf";
const Y2024 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100TVWH.pdf";
const ESG = "https://corporate.m3.com/esg/";
const RECRUIT = "https://corporate.m3.com/recruit/";

// 有価証券報告書「従業員の状況 (2) 提出会社の状況」（各年3月31日現在）。平均年間給与は千円単位の記載を円に換算
const years = [
  { term: "2024年3月期（第24期）", n: 649, temp: 271, age: "34.6歳", tenure: "4年", pay: 9360000, url: Y2024 },
  { term: "2025年3月期（第25期）", n: 704, temp: 211, age: "34.7歳", tenure: "4年2ヶ月", pay: 9307000, url: Y2025 },
  { term: "2026年3月期（第26期）", n: 750, temp: 188, age: "34.8歳", tenure: "4年6ヶ月", pay: 9759000, url: Y2026 },
];
const latest = years[2];
const g = (a: number, b: number) => {
  const v = ((b - a) / a) * 100;
  return `${v >= 0 ? "+" : ""}${v.toFixed(1)}%`;
};
const manYen = (v: number) => `約${Math.round(v / 10000).toLocaleString("ja-JP")}万円`;

// 提出会社のセグメント別従業員数（第24期・第25期・第26期）
const segs = [
  { k: "メディカルプラットフォーム", a: 566, b: 612, c: 658 },
  { k: "全社（共通）", a: 83, b: 92, c: 92 },
];
// 連結従業員数（2026年3月31日現在・臨時従業員は外数）
const CONSOLIDATED = 17010;

// 男女の賃金の差異など（各期の有価証券報告書・提出会社）
const diversity = [
  { k: "男女の賃金の差異（全労働者）", a: "71.5%", b: "72.8%", c: "73.7%" },
  { k: "うち正規雇用労働者", a: "77.1%", b: "77.0%", c: "78.1%" },
  { k: "うち非正規雇用労働者", a: "46.0%", b: "52.6%", c: "50.6%" },
  { k: "管理職に占める女性労働者の割合", a: "16.7%", b: "16.7%", c: "14.6%" },
  { k: "男性労働者の育児休業取得率（正規雇用労働者）", a: "50.0%", b: "46.4%", c: "81.5%" },
];

// 同社ESGページ「中途比率」（エムスリー単体・派遣社員およびパートタイマーを除く）
const midCareer = [
  { term: "2024年3月期", mid: "92%", grad: "8%" },
  { term: "2025年3月期", mid: "92%", grad: "8%" },
  { term: "2026年3月期", mid: "90%", grad: "10%" },
];

// 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・企業規模計・民営事業所）千円：所定内給与額×12＋年間賞与その他特別給与額
const annual = (m: number, b: number) => (m * 12 + b) * 1000;
const ALL = annual(340.6, 1009.6);
const stats = [
  { k: "一般労働者全体（男女計・学歴計）", v: ALL },
  { k: "30〜34歳（男女計・学歴計）", v: annual(312.3, 894.4) },
  { k: "35〜39歳（男女計・学歴計）", v: annual(340.6, 1046.7) },
  { k: "30〜34歳（男女計・大学卒）", v: annual(340.3, 1092.0) },
  { k: "35〜39歳（男女計・大学卒）", v: annual(382.2, 1309.6) },
];

const faqData = [
  {
    q: "エムスリーの平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（第26期）によると、エムスリー株式会社の平均年間給与は9,759千円（約976万円）で、対前事業年度増減率は4.9%と記載されています。賞与・ライフプラン支援金等を含む金額で、対象は提出会社の従業員750人です（${CHECKED}にEDINET掲載の有価証券報告書で確認）。`,
  },
  {
    q: "エムスリーの平均年収はグループ全体の数字ですか？",
    a: `いいえ。有価証券報告書の平均年間給与は、提出会社であるエムスリー株式会社単体の従業員（2026年3月31日現在 750人）の数値です。連結の従業員数は${CONSOLIDATED.toLocaleString("ja-JP")}人で、エムスリーキャリアやエムスリーマーケティングなどのグループ会社の平均年収は、同社の有価証券報告書には記載されていません。提出会社の従業員は連結の約${((latest.n / CONSOLIDATED) * 100).toFixed(1)}%です（当サイト計算）。`,
  },
  {
    q: "エムスリーは中途採用が多い会社ですか？",
    a: "同社ESGページの「中途比率」（エムスリー単体・派遣社員およびパートタイマーを除く）は、2024年3月期と2025年3月期が92%、2026年3月期が90%です。採用情報ページでは、新卒採用と並んで中途採用の募集職種（メディカルマーケティング支援、エンジニアリング、データ分析など）を掲載しています。",
  },
  {
    q: "エムスリーの給与はどのように決まりますか？",
    a: "第26期の有価証券報告書では、原則として全社一律の等級に基づく算定式による給与決定は行わず、個々の社員の専門性に応じた目標の達成度を「絶対評価」で確認し、報酬を決めると説明しています。業績貢献度の高い社員にはストック・オプションを付与しているとも記載されています。",
  },
  {
    q: "エムスリーの男女の賃金の差異はどのくらいですか？",
    a: "第26期の有価証券報告書では、男性労働者の賃金に対する女性労働者の賃金の割合は、全労働者で73.7%、正規雇用労働者で78.1%、非正規雇用労働者で50.6%です。管理職に占める女性労働者の割合は14.6%、正規雇用の男性労働者の育児休業取得率は81.5%です。",
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "エムスリーの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            エムスリーの平均年収は約976万円【2026年3月期・有価証券報告書】3期推移・中途比率90%
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
            エムスリー株式会社の平均年間給与は<strong>9,759千円（約976万円）</strong>です（2026年3月期・提出会社の従業員750人・賞与やライフプラン支援金等を含む・有価証券報告書の記載で前期比4.9%増）。
            平均年齢は34.8歳、平均勤続年数は4年6ヶ月で、同社が公表する中途比率は90%（エムスリー単体・2026年3月期）です。
            この数値は提出会社単体のもので、連結従業員{CONSOLIDATED.toLocaleString("ja-JP")}人のグループ全体の平均ではありません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：エムスリー株式会社 <a href={Y2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第26期）</a>「従業員の状況」ほか、同社 <a href={ESG} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ESGページ</a>。{CHECKED}に内容を確認しています。
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
                  <td className="p-3 text-right whitespace-nowrap">{(y.pay / 1000).toLocaleString("ja-JP")}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{i === 0 ? "－" : g(years[i - 1].pay, y.pay)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.n.toLocaleString("ja-JP")}人（{y.temp}）</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書「提出会社の状況」（各年3月31日現在）。平均年間給与は賞与、ライフプラン支援金等を含みます。従業員数には社外から当社への出向者を含み、（ ）内は臨時従業員の年間平均雇用人員数（外数）です。第26期の有価証券報告書には平均年間給与の対前事業年度増減率4.9%が記載されています。
        </p>
        <p className="mb-10">
          平均年間給与は第25期に前期比{g(years[0].pay, years[1].pay)}とわずかに下がり、第26期に{g(years[1].pay, latest.pay)}と上がりました。2期では{g(years[0].pay, latest.pay)}です（当サイト計算）。
          平均年齢は3期とも34歳台、平均勤続年数は4年から4年6ヶ月で、中途入社の社員が多い構成と整合します。従業員数は2期で649人から750人へ101人増えています。
        </p>

        <h2>一般労働者・同年代との比較</h2>
        <p>
          厚生労働省「令和7年 賃金構造基本統計調査」の所定内給与額と年間賞与その他特別給与額から、比較用の年収を当サイトで算出しました（所定内給与額×12＋年間賞与その他特別給与額）。エムスリー（提出会社）の平均年齢34.8歳に近い30〜34歳・35〜39歳の値も並べています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-right">年収（当サイト計算）</th>
                <th className="p-3 text-right rounded-tr-lg">エムスリーとの比（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">エムスリー株式会社（2026年3月期・提出会社）</td>
                <td className="p-3 text-right whitespace-nowrap">{manYen(latest.pay)}</td>
                <td className="p-3 text-right whitespace-nowrap">－</td>
              </tr>
              {stats.map((s) => (
                <tr key={s.k} className="border-b border-gray-100">
                  <td className="p-3">{s.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{manYen(s.v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">約{(latest.pay / s.v).toFixed(1)}倍</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計・企業規模計（10人以上）・民営事業所・勤続年数計）。一般労働者全体は所定内給与額340.6千円×12＋年間賞与1,009.6千円です。調査の対象や集計方法が有価証券報告書と異なるため、目安としてご覧ください。</p>
        <p className="mb-10">
          エムスリーの平均年間給与は、一般労働者全体の約{(latest.pay / ALL).toFixed(1)}倍、平均年齢が近い35〜39歳の大学卒と比べても約{(latest.pay / stats[4].v).toFixed(1)}倍の水準です（当サイト計算）。
          ただし、提出会社の平均は職種や役割の異なる社員をまとめた値で、同社は個人ごとに報酬を決める方針をとっているため、応募するポジションの提示額は求人票や選考で個別に確認する必要があります。
          年代別の平均は<Link href="/knowledge/salary-35sai/" className="text-teal font-bold hover:underline">35歳の平均年収</Link>のページでも整理しています。
        </p>

        <h2>中途比率と採用ページの公式情報</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">中途</th>
                <th className="p-3 text-right rounded-tr-lg">新卒</th>
              </tr>
            </thead>
            <tbody>
              {midCareer.map((m) => (
                <tr key={m.term} className="border-b border-gray-100">
                  <td className="p-3">{m.term}</td>
                  <td className="p-3 text-right whitespace-nowrap">{m.mid}</td>
                  <td className="p-3 text-right whitespace-nowrap">{m.grad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※エムスリー株式会社 <a href={ESG} target="_blank" rel="noopener noreferrer" className="hover:underline">ESGページ</a>「中途比率」。対象はエムスリー単体で、派遣社員およびパートタイマーを含みません。</p>
        <p className="mb-4">
          同社のESGページでは、エムスリー単体の中途比率を3期分公表しており、2026年3月期は90%です。同じページの「その他データ」には、2026年3月期の有給休暇取得率79.2%、在籍年数4.49年が記載されています。
        </p>
        <p className="mb-10">
          <a href={RECRUIT} target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:underline">採用情報ページ</a>では、中途採用の募集職種をメディカルマーケティング支援、製薬企業向けデータ・リサーチビジネス、医療機関／医療関連企業向けビジネス、一般企業向けビジネス、コンシューマ向けビジネス、m3.com関連、エンジニアリング、デザイン、データ分析の区分で掲載しています（{CHECKED}確認）。
          第26期の有価証券報告書では、給与について「原則的に全社一律の等級に基づく算定式を用いた給与決定は行わず」、個々の社員の目標達成度を絶対評価で確認して報酬を決めると説明しています。エンジニア職の転職先を探す場合は<Link href="/type/it-engineer/" className="text-teal font-bold hover:underline">ITエンジニア向けの転職エージェント</Link>も参考になります。
        </p>

        <h2>提出会社のセグメント別の人員</h2>
        <p>
          エムスリーの連結従業員数は{CONSOLIDATED.toLocaleString("ja-JP")}人（2026年3月31日現在・臨時従業員3,413人は外数）で、平均年間給与の対象となる提出会社の従業員はその約{((latest.n / CONSOLIDATED) * 100).toFixed(1)}%です（当サイト計算）。
          提出会社の従業員をセグメント別に見ると、次のとおりです。
        </p>
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
                  <td className="p-3 text-right whitespace-nowrap">{s.a.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.b.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{s.c.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※第24期〜第26期の有価証券報告書「提出会社の状況」。全社（共通）は、主に管理部門に所属する従業員です。</p>
        <p className="mb-10">
          提出会社の従業員は、m3.comを基盤とする製薬企業向けマーケティング支援や医療現場DXなどを含むメディカルプラットフォームと、全社（共通）の2区分だけです。
          連結ではサイトソリューション5,740人、メディカルプラットフォーム3,407人、海外3,065人、エビデンスソリューション2,361人などの人員がおり、その大半は子会社に所属しています。応募先がエムスリー本体かグループ会社かで、この平均年収が当てはまるかが変わります。
          なお、ソニーグループ株式会社が議決権の34.5%を所有する筆頭株主ですが、エムスリーは同社の持分法適用関連会社で、子会社ではありません（第26期 有価証券報告書「関係会社の状況」、同社ESGページ）。
        </p>

        <h2>男女の賃金の差異・女性管理職比率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">指標（提出会社）</th>
                <th className="p-3 text-right">第24期</th>
                <th className="p-3 text-right">第25期</th>
                <th className="p-3 text-right rounded-tr-lg">第26期</th>
              </tr>
            </thead>
            <tbody>
              {diversity.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※各期の有価証券報告書「管理職に占める女性労働者の割合、男性労働者の育児休業取得率及び労働者の男女の賃金の差異」。女性活躍推進法・育児介護休業法の規定に基づく算出値です。男女の賃金の差異は、男性労働者の賃金に対する女性労働者の賃金の割合です。</p>
        <p className="mb-10">
          正規雇用労働者の男女の賃金の差異は3期とも77〜78%台で推移しています。同社ESGページでは、2026年3月期のエムスリー単体の女性管理職比率を15%（82名中12名）、女性従業員比率を34%（750名中258名）と公表しています。
          グループ全体（エムスリー単体及び連結子会社）では女性管理職比率38%で、2030年までに40%とする目標を掲げています（第26期 有価証券報告書「人的資本に関する戦略並びに指標及び目標」）。
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
          <li><Link href="/company/saas-salary/" className="text-teal font-bold hover:underline">SaaS企業の年収ランキング</Link></li>
          <li><Link href="/company/seiyaku-salary/" className="text-teal font-bold hover:underline">製薬業界の年収ランキング</Link></li>
          <li><Link href="/company/iryokiki-salary/" className="text-teal font-bold hover:underline">医療機器メーカーの年収ランキング</Link></li>
          <li><Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1,000万円の手取り</Link></li>
          <li><Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          <li><a href={Y2026} target="_blank" rel="noopener noreferrer" className="hover:underline">エムスリー株式会社 有価証券報告書 第26期（2025年4月1日〜2026年3月31日）</a></li>
          <li><a href={Y2025} target="_blank" rel="noopener noreferrer" className="hover:underline">エムスリー株式会社 有価証券報告書 第25期（2024年4月1日〜2025年3月31日）</a></li>
          <li><a href={Y2024} target="_blank" rel="noopener noreferrer" className="hover:underline">エムスリー株式会社 有価証券報告書 第24期（2023年4月1日〜2024年3月31日）</a></li>
          <li><a href={ESG} target="_blank" rel="noopener noreferrer" className="hover:underline">エムスリー株式会社 ESGページ（中途比率・女性管理職比率・その他データ）</a></li>
          <li><a href={RECRUIT} target="_blank" rel="noopener noreferrer" className="hover:underline">エムスリー株式会社 採用情報</a></li>
          <li><a href="https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844" target="_blank" rel="noopener noreferrer" className="hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 産業大分類 第2表</a></li>
          <li><a href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/01.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(1) 一般労働者の賃金</a></li>
        </ul>
      </article>
    </>
  );
}
