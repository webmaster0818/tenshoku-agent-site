import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京海上日動の平均年収は約906万円【2026年3月期・有価証券報告書】持株会社との違いと推移",
  description:
    "東京海上日動火災保険の平均年間給与は9,059,913円（約906万円・2026年3月期・提出会社）です。同社がEDINETに提出した有価証券報告書から、平均年齢・平均勤続年数・従業員数と3年間の推移、持株会社の東京海上ホールディングスとの違い、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/tokio-marine-nichido/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "東京海上日動の平均年収は約906万円【2026年3月期・有価証券報告書】",
    description: "東京海上日動火災保険の有価証券報告書から、平均年収・平均年齢・勤続年数の推移を整理しています。",
  },
};

const CHECKED = "2026年11月18日";
const YUHO_2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YLTM.pdf";
const YUHO_2025 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100VZU6.pdf";
const YUHO_2024 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100TP1B.pdf";

// 有価証券報告書「従業員の状況」提出会社の状況（各年3月31日現在）
const years = [
  { term: "2024年3月期", n: 16296, age: 42.5, tenure: 12.9, pay: 8554103, url: YUHO_2024, filed: "2024年6月21日" },
  { term: "2025年3月期", n: 16304, age: 42.5, tenure: 12.8, pay: 9037578, url: YUHO_2025, filed: "2025年6月19日" },
  { term: "2026年3月期", n: 16064, age: 42.6, tenure: 13.1, pay: 9059913, url: YUHO_2026, filed: "2026年6月26日" },
];
const latest = years[2];
const manYen = (v: number) => `約${Math.round(v / 10000).toLocaleString("ja-JP")}万円`;

const faqData = [
  {
    q: "東京海上日動の平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（2026年6月26日提出）によると、東京海上日動火災保険の平均年間給与は9,059,913円（約906万円）です。提出会社の従業員16,064人の平均で、賞与および基準外賃金を含みます。2024年3月期の約855万円から2年で約51万円増えています（${CHECKED}にEDINETで確認）。`,
  },
  {
    q: "東京海上ホールディングスの平均年収（約1,487万円）とはなぜ違うのですか？",
    a: "東京海上ホールディングスの平均年間給与（2026年3月期 14,871,103円）は、持株会社単体の従業員1,339人の平均です。同社の有価証券報告書の注記では、従業員の大部分が子会社からの出向者とされています。損害保険の営業・損害サポートなどを担う事業会社の東京海上日動とは対象者が異なるため、東京海上日動で働く人の水準を知りたい場合は、東京海上日動の有価証券報告書の数値を見るのが適切です。",
  },
  {
    q: "東京海上日動の平均年齢・平均勤続年数はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均年齢は42.6歳、平均勤続年数は13.1年です（提出会社）。",
  },
  {
    q: "東京海上日動は中途採用を行っていますか？",
    a: `はい。東京海上日動はキャリア採用の専用サイト（www.tokiomarine-nichido-careers.com/）を公開しています（${CHECKED}確認）。募集職種や条件は時期によって変わるため、最新の募集要項をご確認ください。`,
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "東京海上日動の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            東京海上日動の平均年収は約906万円【2026年3月期・有価証券報告書】持株会社との違いと推移
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: manYen(latest.pay), l: "平均年間給与（2026年3月期）" },
              { v: `${latest.age}歳`, l: "平均年齢" },
              { v: `${latest.tenure}年`, l: "平均勤続年数" },
              { v: `${latest.n.toLocaleString("ja-JP")}人`, l: "従業員数（提出会社）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            東京海上日動火災保険の平均年間給与は<strong>9,059,913円（約906万円）</strong>です（2026年3月期・提出会社・前期比0.2%増）。
            同社は上場していませんが、金融商品取引法第24条第1項に基づく有価証券報告書をEDINETに提出しており、事業会社としての給与水準を一次資料で確認できます。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：東京海上日動火災保険株式会社 <a href={YUHO_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第83期・2026年6月26日提出）</a>「従業員の状況」。{CHECKED}にEDINETで確認しています。
          </p>
        </div>

        <h2>平均年収・平均年齢・勤続年数の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数</th>
              </tr>
            </thead>
            <tbody>
              {years.map((y) => (
                <tr key={y.term} className={`border-b border-gray-100 ${y === latest ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">
                    <a href={y.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{y.term}</a>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{y.pay.toLocaleString("ja-JP")}円</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.tenure}年</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.n.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書（提出日：{years.map((y) => `${y.term} ${y.filed}`).join("、")}）の「提出会社の状況」。従業員数は就業人員数、平均年間給与は賞与および基準外賃金を含みます。
        </p>
        <p className="mb-10">
          平均年間給与は2024年3月期から2025年3月期に約48万円（5.7%）増え、2026年3月期はほぼ横ばいでした。
          平均年齢・平均勤続年数は3期とも大きく変わっていないため、増加は年齢構成の変化ではなく給与水準の上昇によるものと読み取れます。
          なお、平均値は総合職・総合職（エリア限定）などの区分や役職を合わせた全従業員の平均であり、個人の年収は職種・勤務地区分・年次によって異なります。
        </p>

        <h2>持株会社（東京海上HD）の平均年収との違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社（提出会社単体）</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">従業員数</th>
                <th className="p-3 text-right rounded-tr-lg">平均年齢</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">東京海上日動火災保険（事業会社）</td>
                <td className="p-3 text-right whitespace-nowrap">9,059,913円</td>
                <td className="p-3 text-right whitespace-nowrap">16,064人</td>
                <td className="p-3 text-right whitespace-nowrap">42.6歳</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">東京海上ホールディングス（持株会社）</td>
                <td className="p-3 text-right whitespace-nowrap">14,871,103円</td>
                <td className="p-3 text-right whitespace-nowrap">1,339人</td>
                <td className="p-3 text-right whitespace-nowrap">42.4歳</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※いずれも2026年3月期の有価証券報告書（東京海上HDは<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YLS8.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2026年6月26日提出分</a>）。
        </p>
        <p className="mb-10">
          「東京海上」の平均年収として約1,487万円という数値を見かけた場合、それは上場している持株会社の数値です。
          持株会社は本社機能を担う少人数の組織で、有価証券報告書の注記によれば従業員の大部分が子会社からの出向者です。
          東京海上日動の従業員数は持株会社の約12倍で、損害保険の実務を担う社員の水準としては約906万円が実態に近い数値です。
          詳しくは<Link href="/company/tokio-marine/" className="text-teal font-bold hover:underline">東京海上ホールディングスへの転職ガイド</Link>をご覧ください。
        </p>

        <h2>男女の賃金の差異と勤務地区分</h2>
        <p>
          同じ有価証券報告書では、女性活躍推進法に基づく指標として、男性の賃金に対する女性の賃金の割合を全労働者57.2%（正規雇用労働者54.4%・非正規雇用労働者67.9%）と開示しています。
          管理職に占める女性の割合は30.5%、男性の育児休業取得率は101.5%です。
        </p>
        <p className="mb-10">
          同社は差異の主な要因を、転居を伴う転勤がある「総合職」に男性が多く、転居転勤が原則ない「総合職（エリア限定）」に女性が多いことと、男性の平均勤続年数が長いことと説明しています。
          中途採用で応募する際は、職種名だけでなく勤務地区分によって給与水準が異なる点を募集要項で確認してください。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "東京海上日動火災保険株式会社（非上場・東京海上ホールディングスの子会社）" },
                { label: "本店", value: "東京都千代田区大手町二丁目6番4号" },
                { label: "正味収入保険料（単体）", value: "2兆5,963億円（2026年3月期）" },
                { label: "当期純利益（単体）", value: "7,311億円（2026年3月期）" },
                { label: "労働組合", value: "東京海上日動火災保険労働組合（組合員14,628名）" },
                { label: "キャリア採用", value: "公式キャリア採用サイトで募集職種を公開" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※2026年3月期の有価証券報告書「主要な経営指標等の推移（提出会社）」「従業員の状況」から転記。キャリア採用サイト（<a href="https://www.tokiomarine-nichido-careers.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">www.tokiomarine-nichido-careers.com</a>）は{CHECKED}に表示を確認しています。
        </p>

        <h2>東京海上日動への転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約906万円は全従業員の平均で、中途入社時の提示額はポジションと経験により個別に決まります。</li>
            <li>勤務地区分（転居転勤の有無）で給与水準が異なると有価証券報告書に記載されています。</li>
            <li>損害保険会社の比較には、同業他社の事業会社の有価証券報告書の数値を使うと条件がそろいます。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            金融業界の求人を比較する場合は、<Link href="/review/recruit-agent/" className="text-teal font-bold hover:underline">リクルートエージェント</Link>や
            <Link href="/review/jac/" className="text-teal font-bold hover:underline">JACリクルートメント</Link>など、大手企業の求人を扱う転職エージェントで想定年収のレンジを確認する方法があります。
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
            <Link href="/company/tokio-marine/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京海上HD転職ガイド</Link>
            <Link href="/company/smbc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三井住友銀行の平均年収</Link>
            <Link href="/company/kinyu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">金融 年収ランキング</Link>
            <Link href="/company/prudential/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">プルデンシャル生命の年収</Link>
            <Link href="/company/ms-ad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">MS&AD転職ガイド</Link>
            <Link href="/company/sompo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">SOMPO HD転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
