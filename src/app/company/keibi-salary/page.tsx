import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "警備会社の年収ランキング【2026年】セコム約672万円ほか上場6社を有価証券報告書で比較",
  description:
    "警備を主な事業とする上場6社の平均年収を、有価証券報告書の原本でランキングしています。セコム約672万円・ALSOK約622万円・東洋テック約542万円・セントラル警備保障約508万円・共栄セキュリティーサービス約308万円・トスネット約302万円。平均年齢・勤続年数・臨時従業員の人数も比較しています。",
  alternates: { canonical: "/company/keibi-salary/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "警備会社の年収ランキング【2026年・有価証券報告書】上場6社",
    description: "警備を主な事業とする上場6社の平均年収を、有価証券報告書の記載値でランキングしています。",
  },
};

const CHECKED = "2026年11月20日";
const PDF = (id: string) => `https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/${id}.pdf`;

// 各社の有価証券報告書「従業員の状況」提出会社の状況（原本を2026-11-20にEDINETで確認）
const ranking = [
  { rank: 1, name: "セコム", code: "9735", pay: "6,729,386円", man: "約672万円", term: "2026年3月期（第65期）", filed: "2026年6月24日", n: "15,991人", temp: "記載なし", age: "44.5歳", tenure: "18.0年", diff: "+2.7%", doc: "S100YICV" },
  { rank: 2, name: "ALSOK", code: "2331", pay: "6,221,418円", man: "約622万円", term: "2026年3月期（第61期）", filed: "2026年6月19日", n: "11,741人", temp: "記載なし", age: "41.8歳", tenure: "18.3年", diff: "+3.2%", doc: "S100Y7EC" },
  { rank: 3, name: "東洋テック", code: "9686", pay: "5,423千円", man: "約542万円", term: "2026年3月期（第62期）", filed: "2026年6月18日", n: "1,154人", temp: "252人", age: "45.1歳", tenure: "12.4年", diff: "+4.7%", doc: "S100YCTH" },
  { rank: 4, name: "セントラル警備保障", code: "9740", pay: "5,086,949円", man: "約508万円", term: "2026年2月期（第54期）", filed: "2026年5月26日", n: "3,995人", temp: "記載なし", age: "45.6歳", tenure: "15.3年", diff: "記載なし", doc: "S100Y6FE" },
  { rank: 5, name: "共栄セキュリティーサービス", code: "7058", pay: "3,084千円", man: "約308万円", term: "2026年7月期（第42期・16か月）", filed: "2026年10月23日", n: "431人", temp: "910人", age: "53.9歳", tenure: "6.8年", diff: "+6.9%", doc: "S100Z9Q4" },
  { rank: 6, name: "トスネット", code: "4754", pay: "3,021,141円", man: "約302万円", term: "2025年9月期（第49期）", filed: "2025年12月18日", n: "140人", temp: "245人", age: "41.58歳", tenure: "10.02年", diff: "記載なし", doc: "S100XBF5" },
];

const faqData = [
  {
    q: "警備会社で平均年収が一番高いのはどこですか？",
    a: `警備を主な事業とする上場6社の有価証券報告書（${CHECKED}に原本をEDINETで確認）では、セコムの平均年間給与6,729,386円（約672万円・2026年3月期）が最も高く、ALSOKの6,221,418円（約622万円）が続きます。3位の東洋テックは5,423千円（約542万円）です。`,
  },
  {
    q: "大手2社と中小の警備会社で年収の差が大きいのはなぜですか？",
    a: "有価証券報告書の数値は提出会社の従業員（正社員など）の平均で、事業の内容や年齢構成が会社ごとに異なります。セコム・ALSOKは平均勤続年数が18年を超えています。一方、共栄セキュリティーサービスは平均年齢53.9歳・平均勤続6.8年で、構成が大きく異なります。差の理由は有価証券報告書に記載されていないため、上記は当サイトの見方です。",
  },
  {
    q: "平均年間給与にアルバイトや契約社員の警備員は含まれますか？",
    a: "各社とも臨時従業員は従業員数の外数として記載しており、平均年間給与の対象ではありません。臨時従業員を記載している3社では、共栄セキュリティーサービスが910人（従業員431人の約2.1倍）、トスネットが245人（同140人の約1.8倍）、東洋テックが252人です。施設警備・交通誘導などを臨時従業員が多く担う会社では、平均年間給与が現場で働く人全体の水準を表していない点にご注意ください。",
  },
  {
    q: "共栄セキュリティーサービスの数値は他社と比べられますか？",
    a: "同社の第42期は決算期変更により2025年4月1日〜2026年7月31日の16か月で、有価証券報告書では平均年間給与を12か月分に換算して記載しています。他社の12か月の数値とは算定期間が異なるため、目安として比べてください。また、トスネットの最新の有価証券報告書は2025年9月期で、他社より1年前の数値です。",
  },
  {
    q: "警備会社の中途採用はどこに応募すればよいですか？",
    a: "各社の公式サイトの採用ページのほか、警備職に特化した求人サイトもあります。警備員の求人サイトの特徴は当サイトのセキュリティーワークのページでまとめています。応募条件や待遇は会社・職種・勤務地で異なるため、募集要項で確認してください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "警備会社の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-11-20",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/keibi-salary/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "警備会社の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            警備会社の年収ランキング【2026年・有価証券報告書】上場6社
          </h1>
          <p className="text-text-secondary leading-relaxed">
            警備を主な事業とする上場6社の平均年間給与は、<strong>1位 セコム 約672万円、2位 ALSOK 約622万円、3位 東洋テック 約542万円、4位 セントラル警備保障 約508万円、5位 共栄セキュリティーサービス 約308万円、6位 トスネット 約302万円</strong>です。
            各社がEDINETに提出した有価証券報告書の原本の記載値だけで並べています（{CHECKED}確認・万円未満切り捨て）。6社とも提出会社が警備事業を自ら行う事業会社で、持株会社の数値ではありません。
          </p>
        </div>

        <h2>有価証券報告書準拠 警備会社の年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">会社（証券コード）</th>
                <th className="p-3 text-right">平均年間給与</th>
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
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.man}<span className="block text-[11px] text-text-muted font-normal">{r.pay}</span></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.diff}</td>
                  <td className="p-3 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各社の有価証券報告書「従業員の状況」の提出会社の平均年間給与（賞与及び基準外賃金を含む）。社名のリンクは有価証券報告書の原本PDF（EDINET）です。前期比は有価証券報告書に記載がある会社のみ掲載しています。
          提出日：{ranking.map((r) => `${r.name} ${r.filed}`).join("、")}。
        </p>
        <p className="mb-10">
          上位2社とそれ以外の差が大きく、1位のセコムと6位のトスネットの差は約370万円です。記載のある4社は、いずれも前期より平均年間給与が上がっています（+2.7%〜+6.9%）。
          掲載の対象は、東京証券取引所に上場し、有価証券報告書のセグメントで警備（セキュリティ）事業が主な事業と確認できた会社です。建物管理（清掃・設備管理）が中心の会社と、警備事業の売上の割合を有価証券報告書で確認できなかったアール・エス・シーは含めていません。
        </p>

        <h2>平均年齢・勤続年数・従業員数の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right">従業員数</th>
                <th className="p-3 text-right rounded-tr-lg">臨時従業員（外数）</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r) => (
                <tr key={r.code} className="border-b border-gray-100">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同じ有価証券報告書の提出会社の状況。従業員数は就業人員。臨時従業員は年間の平均人員で、「記載なし」は提出会社の状況の表に臨時従業員の人数が記載されていない会社です。
        </p>
        <p className="mb-10">
          平均年間給与が高い上位2社は、平均勤続年数がいずれも18年を超えています。共栄セキュリティーサービスは平均年齢が53.9歳と6社で最も高い一方、平均勤続年数は6.8年と最も短く、中途入社の人が多い構成と考えられます（当サイトの見方）。
          臨時従業員を記載している会社では、共栄セキュリティーサービス（910人）とトスネット（245人）で臨時従業員が従業員数を上回っています。
        </p>

        <h2>数値を比べるときの注意点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>共栄セキュリティーサービスの第42期は決算期変更による16か月決算で、平均年間給与は12か月分に換算した値です。</li>
            <li>トスネットの最新の有価証券報告書は2025年9月期で、他社より約1年前の数値です。同社の提出会社の従業員は140人で、グループ全体（864人）の一部です。</li>
            <li>平均年間給与は正社員など従業員の平均で、臨時従業員（アルバイト・パートなど）の給与は含みません。施設警備・交通誘導の求人の時給・日給とは別の指標です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            警備職の求人を探す場合は、警備員専門の求人サイトの特徴をまとめた<Link href="/review/security-work/" className="text-teal font-bold hover:underline">セキュリティーワークの解説ページ</Link>や、
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
            <Link href="/review/security-work/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">セキュリティーワークの特徴</Link>
            <Link href="/company/nitori/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ニトリの平均年収</Link>
            <Link href="/knowledge/salary-40sai/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">40歳の平均年収</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
