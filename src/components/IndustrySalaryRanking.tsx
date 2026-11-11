import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// 業種別の年収ランキング（有価証券報告書の原本で確認した値）の共通表示部品。
// 数値は各ページの rows に原本の表記のまま記載し、順位と万円表示はここで計算する（万円未満切り捨て）。

export type SalaryRow = {
  name: string; // 会社名（表示名）
  slug?: string; // 当サイトに企業ページがある場合のみ
  code: string; // 証券コード
  market: string; // 上場市場（JPX 上場銘柄一覧）
  sector: string; // 東証33業種（同）
  yen: number; // 平均年間給与（円換算・順位計算用）
  yenText: string; // 原本の表記
  age: string; // 平均年齢（原本の表記）
  tenure: string; // 平均勤続年数（原本の表記）
  employees: string; // 従業員数（原本の表記・臨時従業員を除く）
  term: string; // 決算期
  period: string; // 期（例：第114期）
  filed: string; // 提出日
  docId: string; // EDINET 書類管理番号
  hd?: boolean; // 持株会社単体の値
  change?: string; // 平均年間給与の対前事業年度増減率（原本に記載がある場合のみ）
  scope?: string; // 算定範囲・算出方法に関する原本の注記（要約）
};

export type SubRow = {
  parent: string;
  name: string;
  employees: string;
  age: string;
  tenure: string;
  yenText: string;
  change: string;
};

export type Faq = { q: string; a: string };
export type AgentLink = { name: string; href: string; desc: string };

const comma = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const man = (yen: number) => `約${comma(Math.floor(yen / 10000))}万円`;
export const edinetPdf = (docId: string) => `https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/${docId}.pdf`;
export const ranked = (rows: SalaryRow[]) => [...rows].sort((a, b) => b.yen - a.yen);

const th = "text-left py-3 px-3 bg-warm-gray font-bold text-navy whitespace-nowrap";
const td = "py-3 px-3 text-text-secondary";

export function SubsidiaryTable({ rows, note }: { rows: SubRow[]; note: ReactNode }) {
  return (
    <>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className={th}>グループ（提出会社）</th>
              <th className={th}>会社</th>
              <th className={th}>平均年間給与</th>
              <th className={th}>平均年齢</th>
              <th className={th}>平均勤続年数</th>
              <th className={th}>従業員数</th>
              <th className={th}>対前事業年度増減率</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-border">
                <td className={td}>{r.parent}</td>
                <th className="text-left py-3 px-3 font-bold text-navy">{r.name}</th>
                <td className="py-3 px-3 font-bold text-navy whitespace-nowrap">{r.yenText}</td>
                <td className={td}>{r.age}</td>
                <td className={td}>{r.tenure}</td>
                <td className={td}>{r.employees}</td>
                <td className={td}>{r.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-text-muted mb-8">{note}</p>
    </>
  );
}

type Props = {
  path: string; // 例: /company/jinzai-salary/
  crumb: string;
  h1: string;
  lead: ReactNode;
  rankingHeading: string;
  rows: SalaryRow[];
  rankingNote: ReactNode;
  selection: ReactNode;
  children?: ReactNode; // 業種ごとの独自の節
  cautions: { title: string; body: string }[];
  agentHeading: string;
  agentLead: string;
  agents: AgentLink[];
  faq: Faq[];
  ctaHeading: string;
  related: { href: string; label: string }[];
  headline: string;
  checked: string; // 確認日（表示用）
  dateModified: string; // ISO
};

export default function IndustrySalaryRanking(p: Props) {
  const rows = ranked(p.rows);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.headline,
    dateModified: p.dateModified,
    author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
    publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://tenshoku-agent-lab.com${p.path}` },
    inLanguage: "ja",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: p.crumb }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">{p.h1}</h1>
          <div className="text-text-secondary leading-relaxed">{p.lead}</div>
        </div>

        <h2>{p.rankingHeading}</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className={th}>順位</th>
                <th className={th}>会社</th>
                <th className={th}>平均年間給与</th>
                <th className={th}>平均年齢</th>
                <th className={th}>平均勤続年数</th>
                <th className={th}>従業員数</th>
                <th className={th}>決算期</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.code} className="border-b border-border">
                  <td className="py-3 px-3 font-bold text-navy whitespace-nowrap">{i + 1}位</td>
                  <td className="py-3 px-3">
                    {r.slug ? (
                      <Link href={`/company/${r.slug}/`} className="text-teal font-bold hover:underline">{r.name}</Link>
                    ) : (
                      <span className="font-bold text-navy">{r.name}</span>
                    )}
                    {r.hd && <span className="ml-2 text-xs bg-warm-gray rounded-full px-2 py-0.5 text-text-muted whitespace-nowrap">持株会社単体</span>}
                    {r.scope && <span className="block text-xs text-text-muted mt-0.5">※算定範囲</span>}
                  </td>
                  <td className="py-3 px-3 font-bold text-navy whitespace-nowrap">{man(r.yen)}</td>
                  <td className={td}>{r.age}</td>
                  <td className={td}>{r.tenure}</td>
                  <td className={td}>{r.employees}</td>
                  <td className={`${td} whitespace-nowrap`}>{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">{p.rankingNote}</p>

        {p.children}

        <h2>出典と算定範囲（各社の有価証券報告書）</h2>
        <p className="text-sm text-text-secondary mb-4">
          各社の数値は、EDINETに提出された有価証券報告書の原本（PDF）の「従業員の状況」のうち「提出会社の状況」から転記しています（{p.checked}に確認）。会社ごとの算定範囲・算出方法は、原本の注記を要約して記載しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className={th}>会社</th>
                <th className={th}>原本の平均年間給与</th>
                <th className={th}>出典</th>
                <th className={th}>対前事業年度増減率</th>
                <th className={th}>算定範囲・注記</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.code} className="border-b border-border align-top">
                  <th className="text-left py-3 px-3 font-bold text-navy">
                    {r.name}
                    <span className="block text-xs font-normal text-text-muted">{r.code}・{r.market}・{r.sector}</span>
                  </th>
                  <td className="py-3 px-3 text-navy whitespace-nowrap">{r.yenText}</td>
                  <td className={`${td} text-xs`}>
                    <a href={edinetPdf(r.docId)} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書 {r.period}（{r.term}）</a>
                    <span className="block">{r.filed}提出・EDINET {r.docId}</span>
                  </td>
                  <td className={`${td} text-xs`}>{r.change ?? "記載なし"}</td>
                  <td className={`${td} text-xs`}>
                    {r.hd && <span className="block">持株会社単体の平均です。事業会社の平均ではありません。</span>}
                    {r.scope ?? (r.hd ? "" : "特記事項なし")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※市場区分・東証33業種は、日本取引所グループ「東証上場銘柄一覧」（2026年10月末時点）によります。従業員数は臨時従業員（外数）を含みません。平均年齢・平均勤続年数は原本の表記のまま掲載しています。最新の数値は各社の公式IR・EDINETでご確認ください。
        </p>

        <h2>掲載企業の選定基準</h2>
        <div className="text-sm text-text-secondary leading-relaxed mb-8">{p.selection}</div>

        <h2>ランキングを見るときの注意点</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {p.cautions.map((c) => (
            <div key={c.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2 text-sm">{c.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <h2>{p.agentHeading}</h2>
        <p className="text-sm text-text-muted mb-4">{p.agentLead}</p>
        <div className="space-y-4 mb-8">
          {p.agents.map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="mb-8">
          {p.faq.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">{p.ctaHeading}</h2>
          <p className="text-white/70 text-sm mb-6">有価証券報告書の数値で各社の水準を確認したうえで、ポジションごとの条件は求人票や転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {p.related.map((r) => (
              <Link key={r.href} href={r.href} className="btn-outline px-8 py-3">{r.label}</Link>
            ))}
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
