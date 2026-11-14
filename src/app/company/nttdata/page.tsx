import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";
import { calcTakeHome, man } from "@/data/take-home";

const YUHO = "https://www.nttdata.com/global/ja/-/media/nttdataglobal-ja/files/investors/library/asr/2025/yuho2025_all.pdf?rev=fdcd8d6dec834f61b5141b58f76c0f81";
const CHECKED = "2026年11月14日";

export const metadata: Metadata = {
  title: "NTTデータの年収は平均923万円｜推移と持株会社化後の数値の見方【有価証券報告書】",
  description:
    "NTTデータグループの平均年間給与は923.4万円です（2025年3月期・有価証券報告書／提出会社＝持株会社1,592名）。2023年7月の持株会社化で開示対象が約1.2万人から約1,600人に変わった点、推移、国内事業会社の男女賃金差異、手取り試算をまとめています。",
  alternates: { canonical: "/company/nttdata/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "NTTデータの年収は平均923万円｜推移と持株会社化後の数値の見方",
    description: "NTTデータグループの平均年間給与を有価証券報告書の原本で確認し、推移と数値の範囲を解説しています。",
  },
};

const th = calcTakeHome(9234000);

const history = [
  { y: "2021年3月期", s: "841万円", n: "11,955名", note: "事業会社として一体の時期" },
  { y: "2022年3月期", s: "852万円", n: "12,351名", note: "" },
  { y: "2023年3月期", s: "867万円", n: "12,714名", note: "" },
  { y: "2024年3月期", s: "905万円", n: "1,702名", note: "2023年7月に持株会社体制へ移行" },
  { y: "2025年3月期", s: "923万円", n: "1,592名", note: "最新（有価証券報告書の原本で確認）" },
];

const gap = [
  { name: "NTTデータグループ（持株会社）", mgr: "19.2%", all: "85.3%" },
  { name: "NTTデータ（国内事業会社）", mgr: "11.6%", all: "73.7%" },
  { name: "NTT DATA, Inc.（海外事業会社）", mgr: "14.0%", all: "70.4%" },
  { name: "NTTデータ・フィナンシャルテクノロジー", mgr: "5.2%", all: "76.7%" },
  { name: "NTTデータ先端技術", mgr: "7.5%", all: "81.1%" },
];

const faqData = [
  {
    q: "NTTデータの平均年収はいくらですか？",
    a: `2025年3月期の有価証券報告書（2025年6月20日提出・${CHECKED}に原本で確認）によると、提出会社である株式会社NTTデータグループの平均年間給与は9,234千円（約923万円）です。平均年齢39.7歳、平均勤続年数14.1年、従業員1,592名の平均で、賞与と時間外手当などの基準外給与を含みます。`,
  },
  {
    q: "国内事業会社の株式会社NTTデータの平均年収は公表されていますか？",
    a: "公表されていません。有価証券報告書の「提出会社の状況」は持株会社のNTTデータグループ単体の数値です。国内事業会社のNTTデータは2023年7月に設立された子会社で、平均年間給与の開示はありません（2025年3月期有価証券報告書・当サイト確認）。",
  },
  {
    q: "2024年3月期に従業員数が大きく減ったのはなぜですか？",
    a: "NTTデータグループは2023年7月に国内事業会社の株式会社NTTデータを設立し、持株会社体制に移行しました（有価証券報告書「沿革」）。国内事業に携わる社員の多くが事業会社に移ったため、提出会社の従業員数は12,714名（2023年3月期）から1,702名（2024年3月期）になりました。平均年間給与の比較は、対象となる社員の構成が変わっている点を踏まえてご覧ください。",
  },
  {
    q: "NTTデータの2026年3月期の平均年収はわかりますか？",
    a: `NTTデータグループの株式は2025年9月26日に上場廃止となりました（同社IR情報）。${CHECKED}時点で、同社IRページの有価証券報告書の一覧には2026年3月期の報告書は掲載されていないため、当サイトでは2025年3月期を最新値として掲載しています。`,
  },
  {
    q: "平均年収923万円の手取りはいくらですか？",
    a: `東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で、年収923.4万円の手取りは年${man(th.net)}（月${man(th.netMonthly)}）です（当サイトの令和8年の税制による試算）。実際の健康保険料率は、加入する健康保険によって異なります。`,
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NTTデータの年収は平均923万円｜推移と持株会社化後の数値の見方【有価証券報告書】",
  dateModified: "2026-11-14",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/nttdata/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "NTTデータの年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
          NTTデータの年収は平均923万円｜推移と持株会社化後の数値の見方【有価証券報告書】
        </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            NTTデータグループの平均年間給与は<strong>923.4万円（9,234千円）</strong>です（2025年3月期・有価証券報告書）。
            ただし、この数値は持株会社である株式会社NTTデータグループの社員1,592名の平均です。2023年7月の持株会社体制への移行以降、国内のシステム開発を担う株式会社NTTデータの社員は含まれていません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            数値は同社IRページに掲載された2025年3月期有価証券報告書（2025年6月20日提出）の原本で{CHECKED}に確認しました。2024年3月期以前の推移はIR BANKの掲載値（同日確認）です。
          </p>
        </div>

        <h2>NTTデータグループの平均年収（2025年3月期）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "会社名", value: "株式会社NTTデータグループ（NTT DATA GROUP CORPORATION）" },
                { label: "本店", value: "東京都江東区豊洲三丁目3番3号" },
                { label: "平均年間給与", value: "9,234千円（約923万円）" },
                { label: "平均年齢", value: "39.7歳" },
                { label: "平均勤続年数", value: "14.1年（NTT・NTT東西・NTTコミュニケーションズ等からの転籍者は前の会社の勤続年数を加算）" },
                { label: "従業員数（提出会社）", value: "1,592名（男性1,185名・女性407名）・臨時従業員79名" },
                { label: "従業員数（連結）", value: "197,777名（日本48,828名・海外145,553名・その他3,396名）" },
                { label: "定年", value: "60歳" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※出典：
          <a href={YUHO} target="_blank" rel="noopener noreferrer" className="hover:underline">株式会社NTTデータグループ 2025年3月期 有価証券報告書</a>
          「第1 企業の状況 5 従業員の状況」。平均年間給与は基準内給与に時間外手当等の基準外給与と賞与を含みます。いずれも2025年3月31日現在です。
        </p>

        <h2>平均年収の推移（2021年3月期〜2025年3月期）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">従業員数（提出会社）</th>
                <th className="p-3 text-left rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h) => (
                <tr key={h.y} className="border-b border-gray-100">
                  <td className="p-3">{h.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{h.s}</td>
                  <td className="p-3 text-right whitespace-nowrap">{h.n}</td>
                  <td className="p-3 text-xs text-text-muted">{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※出典：
          <a href="https://irbank.net/9613/salary" target="_blank" rel="noopener noreferrer" className="hover:underline">IR BANK NTTデータグループ（9613）の平均年収</a>
          （有価証券報告書の掲載値・{CHECKED}確認）。2025年3月期は有価証券報告書の原本と一致することを確認しています。
        </p>
        <p className="mb-8">
          2021年3月期から2025年3月期までの4年間で、平均年間給与は82万円増えています。ただし、2024年3月期からは持株会社の社員だけの平均に変わっています。
          2023年3月期までの約1.2万人の平均と、2024年3月期以降の約1,600〜1,700人の平均は対象が異なるため、単純な比較はできません。
          持株会社は人事制度の整備や経営幹部の選任・育成など、グループ全体の管理を担っています（有価証券報告書「人的資本」）。
        </p>

        <h2>国内事業会社NTTデータの数値で確認できること</h2>
        <p>
          国内事業会社の株式会社NTTデータは平均年間給与を開示していませんが、有価証券報告書には次の数値が記載されています。
        </p>
        <ul className="mb-4">
          <li>売上高（日本基準）は1兆3,452億円で、グループの連結売上高4兆6,387億円（2025年3月期）の10%を超える主要な子会社です。</li>
          <li>グループの日本セグメントの従業員は48,828名です（2025年3月31日現在・連結）。</li>
        </ul>
        <p>主要な会社の、管理職に占める女性の割合と、男女の賃金の差異（男性の賃金に対する女性の賃金の割合・全労働者）は次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社</th>
                <th className="p-3 text-right">管理職に占める女性の割合</th>
                <th className="p-3 text-right rounded-tr-lg">男女の賃金の差異（全労働者）</th>
              </tr>
            </thead>
            <tbody>
              {gap.map((g) => (
                <tr key={g.name} className="border-b border-gray-100">
                  <td className="p-3">{g.name}</td>
                  <td className="p-3 text-right whitespace-nowrap">{g.mgr}</td>
                  <td className="p-3 text-right whitespace-nowrap">{g.all}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※出典：同有価証券報告書「5 従業員の状況（4）」（2025年3月期）。男女の賃金の差異は、男性の平均賃金を100としたときの女性の平均賃金の割合です。
        </p>

        <h2>平均年収923万円の手取り（当サイト試算）</h2>
        <p className="mb-8">
          年収923.4万円を、東京都・協会けんぽ・独身・40歳未満・賞与なしの前提で令和8年の税制により試算すると、手取りは年{man(th.net)}（月{man(th.netMonthly)}）です。
          健康保険の料率は加入する健康保険組合によって異なるため、目安としてご覧ください。試算の方法は
          <Link href="/knowledge/tedori-1000man/" className="text-teal font-bold hover:underline">年収1000万円の手取り</Link>・
          <Link href="/knowledge/tedori-800man/" className="text-teal font-bold hover:underline">年収800万円の手取り</Link>に掲載しています。
        </p>

        <h2>採用情報の確認先</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>NTTデータグループの採用情報は、公式サイトの<a href="https://www.nttdata.com/global/ja/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">採用情報ページ</a>にまとめられています（{CHECKED}確認）。</li>
            <li>持株会社・国内事業会社・グループ各社は採用と処遇が別です。募集要項の給与は、応募先の会社と職種ごとにご確認ください。</li>
            <li>同社株式は、2025年8月29日の臨時株主総会で承認された株式併合により、2025年9月26日に上場廃止となりました（同社IR情報「当社株式の上場廃止のお知らせ」）。NTT持株会社の平均年収は<Link href="/company/ntt/" className="text-teal hover:underline">NTT（持株会社）転職ガイド</Link>に掲載しています。</li>
          </ul>
        </div>

        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2>NTTデータの年収 よくある質問</h2>
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
            <Link href="/company/ntt/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">NTT（持株会社）転職ガイド</Link>
            <Link href="/company/fujitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士通転職ガイド</Link>
            <Link href="/company/nri/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">野村総合研究所転職ガイド</Link>
            <Link href="/company/it-consultant-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ITコンサル・SIerの年収</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
