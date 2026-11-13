import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import {
  calcTakeHome, yen, man, pct, marginalRate, TAKE_HOME_CHECKED, TAKE_HOME_SOURCES, RATES,
} from "@/data/take-home";

type Faq = { q: string; a: string };

type Props = {
  path: string;
  annual: number; // 円
  crumb: string;
  h1: string;
  lead: ReactNode;
  compareHeading: string;
  compare: number[]; // 比較する年収（円）
  compareNote: ReactNode;
  children?: ReactNode; // そのページだけの解説
  faq: Faq[];
  related: { href: string; label: string }[];
};

function Row({ label, a, b, strong }: { label: string; a: string; b: string; strong?: boolean }) {
  return (
    <tr className={`border-b border-gray-100 ${strong ? "bg-teal/5 font-bold text-navy" : ""}`}>
      <td className="p-3">{label}</td>
      <td className="p-3 text-right whitespace-nowrap">{a}</td>
      <td className="p-3 text-right whitespace-nowrap">{b}</td>
    </tr>
  );
}

export default function TakeHomePage(p: Props) {
  const u = calcTakeHome(p.annual, false);
  const o = calcTakeHome(p.annual, true);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: p.crumb }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">{p.h1}</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: man(u.net), l: "手取り（年額・40歳未満）" },
              { v: man(u.netMonthly), l: "手取り（月額の目安）" },
              { v: pct(u.rate), l: "年収に対する手取りの割合" },
              { v: man(p.annual - u.net), l: "税金・社会保険料の合計" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <div className="text-text-secondary leading-relaxed">{p.lead}</div>
          <p className="text-xs text-text-muted mt-3">
            試算の前提：東京都在住・協会けんぽ加入・独身で扶養なし・賞与なし（年収を12等分した月給）・一般の事業。
            令和8年の制度値を{TAKE_HOME_CHECKED}に国税庁・協会けんぽ・日本年金機構・厚生労働省・総務省の公表資料で確認し、当サイトで計算しています。
          </p>
        </div>

        <h2>年収{(p.annual / 10000).toLocaleString("ja-JP")}万円の手取りの内訳</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目（年額）</th>
                <th className="p-3 text-right">40歳未満</th>
                <th className="p-3 text-right rounded-tr-lg">40〜64歳（介護保険あり）</th>
              </tr>
            </thead>
            <tbody>
              <Row label="額面年収" a={yen(p.annual)} b={yen(p.annual)} />
              <Row label={`健康保険料（標準報酬月額 ${yen(u.grade)}）`} a={yen(u.health)} b={yen(o.health)} />
              <Row label={`厚生年金保険料（標準報酬月額 ${yen(Math.min(u.grade, RATES.pensionCap))}）`} a={yen(u.pension)} b={yen(o.pension)} />
              <Row label="雇用保険料" a={yen(u.employment)} b={yen(o.employment)} />
              <Row label="社会保険料の合計" a={yen(u.social)} b={yen(o.social)} />
              <Row label="所得税（復興特別所得税を含む）" a={yen(u.incomeTax)} b={yen(o.incomeTax)} />
              <Row label="住民税（同じ年収が翌年も続いた場合）" a={yen(u.residentTax)} b={yen(o.residentTax)} />
              <Row label="手取り（年額）" a={yen(u.net)} b={yen(o.net)} strong />
              <Row label="手取り（月額の目安）" a={yen(u.netMonthly)} b={yen(o.netMonthly)} strong />
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※健康保険料は協会けんぽ東京支部の令和8年度料率（9.85%）と子ども・子育て支援金率（0.23%）、40〜64歳は介護保険料率（1.62%）を加えた率の折半額です。
          厚生年金は18.3%の折半、雇用保険は年収の0.5%です。所得税は令和8年分の給与所得控除・基礎控除（{yen(u.basic)}）で計算し、
          課税所得は{yen(u.taxable)}、適用される最高税率は{marginalRate(u.taxable)}%です。住民税は所得割10%・基礎控除43万円・調整控除2,500円・均等割4,000円・森林環境税1,000円で計算しています。
          月ごとの端数処理や、お住まいの自治体・加入する健康保険組合によって実際の金額は変わります。目安としてご覧ください。
        </p>

        <h2>{p.compareHeading}</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">額面年収</th>
                <th className="p-3 text-right">社会保険料</th>
                <th className="p-3 text-right">所得税＋住民税</th>
                <th className="p-3 text-right">手取り（年額）</th>
                <th className="p-3 text-right rounded-tr-lg">手取りの割合</th>
              </tr>
            </thead>
            <tbody>
              {p.compare.map((y) => {
                const r = calcTakeHome(y, false);
                return (
                  <tr key={y} className={`border-b border-gray-100 ${y === p.annual ? "bg-teal/5 font-bold text-navy" : ""}`}>
                    <td className="p-3">{(y / 10000).toLocaleString("ja-JP")}万円</td>
                    <td className="p-3 text-right whitespace-nowrap">{man(r.social)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{man(r.incomeTax + r.residentTax)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{man(r.net)}</td>
                    <td className="p-3 text-right whitespace-nowrap">{pct(r.rate)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-text-secondary mb-10">{p.compareNote}</div>

        {p.children}

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {p.faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          {p.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-teal font-bold hover:underline">{r.label}</Link>
            </li>
          ))}
        </ul>

        <h2>出典・計算に使用した資料</h2>
        <p className="text-sm text-text-secondary">いずれも{TAKE_HOME_CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1 mb-4">
          {TAKE_HOME_SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-text-muted">
          令和8年分の所得税は、11月までの給与からは改正前の税額表で源泉徴収され、12月の年末調整で改正後の基礎控除・給与所得控除により精算されます（国税庁「令和8年分 年末調整のしかた」）。
          当ページの所得税は、年末調整後の年額の目安です。税額の確定には、源泉徴収票または税務署・お住まいの自治体の案内をご確認ください。
        </p>
      </article>
    </>
  );
}
