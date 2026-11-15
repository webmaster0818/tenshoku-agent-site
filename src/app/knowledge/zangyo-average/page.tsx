import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/zangyo-average/" },
  title: "残業時間の平均は月13.2時間（フルタイム）・業種別一覧と36協定の上限【2025年 毎月勤労統計調査】",
  description:
    "残業時間（所定外労働時間）の平均を、厚生労働省「毎月勤労統計調査 2025年分結果確報」で確認しました。一般労働者（フルタイム）は月13.2時間、パートタイムを含む全体は月9.8時間です。業種別の一覧（最多は運輸業・郵便業の24.1時間）と、労働基準法の36協定の上限（月45時間・年360時間など）も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "残業時間の平均は月13.2時間（フルタイム）【2025年 毎月勤労統計調査】",
    description: "厚生労働省の統計で残業時間の平均と業種別の差、36協定の上限を確認しています。",
  },
};

const CHECKED = "2026年11月15日";

// 厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」第2表（事業所規模5人以上・一般労働者・月間）
const industries = [
  { n: "運輸業，郵便業", total: 175.3, ot: 24.1 },
  { n: "電気・ガス業", total: 156.9, ot: 16.9 },
  { n: "情報通信業", total: 160.5, ot: 16.5 },
  { n: "飲食サービス業等", total: 172.6, ot: 15.6 },
  { n: "教育，学習支援業", total: 157.2, ot: 14.8 },
  { n: "製造業", total: 162.3, ot: 14.7 },
  { n: "不動産・物品賃貸業", total: 162.9, ot: 14.5 },
  { n: "学術研究等", total: 158.5, ot: 14.2 },
  { n: "金融業，保険業", total: 151.0, ot: 13.6 },
  { n: "建設業", total: 164.3, ot: 13.5 },
  { n: "その他のサービス業", total: 157.1, ot: 13.0 },
  { n: "鉱業，採石業等", total: 166.8, ot: 12.4 },
  { n: "卸売業，小売業", total: 161.3, ot: 11.3 },
  { n: "生活関連サービス等", total: 163.3, ot: 10.5 },
  { n: "複合サービス事業", total: 154.3, ot: 8.3 },
  { n: "医療，福祉", total: 153.6, ot: 6.7 },
];

const faq = [
  {
    q: "残業時間の平均は月何時間ですか？",
    a: "厚生労働省「毎月勤労統計調査 2025年分結果確報」では、事業所規模5人以上の一般労働者（パートタイム以外）の所定外労働時間は月13.2時間です。パートタイム労働者を含む全体では月9.8時間、事業所規模30人以上の一般労働者では月14.4時間です。",
  },
  {
    q: "残業時間の平均は年間で何時間ですか？",
    a: "一般労働者の月13.2時間を12か月分に換算すると、年間約158時間です（当サイト計算）。36協定の原則の上限である年360時間の半分以下にあたります。",
  },
  {
    q: "残業が多い業種・少ない業種はどこですか？",
    a: "同調査の一般労働者では、所定外労働時間が最も多いのは運輸業，郵便業の月24.1時間、次いで電気・ガス業の16.9時間、情報通信業の16.5時間です。最も少ないのは医療，福祉の6.7時間です。",
  },
  {
    q: "残業は月何時間まで認められていますか？",
    a: "労働基準法第36条により、36協定を結んだ場合の残業の上限は、原則として月45時間・年360時間です。臨時的な特別の事情がある場合（特別条項）でも、年720時間以内、休日労働を含めて月100時間未満、2〜6か月の平均80時間以内とする必要があり、月45時間を超えられるのは年6か月までです。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」（2026年2月25日公表）第2表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r07/25cr/25cr.html" },
  { label: "e-Gov法令検索 労働基準法（第32条・第36条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "残業時間の平均" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            残業時間の平均は月13.2時間（フルタイム）【2025年 毎月勤労統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "13.2時間", l: "一般労働者の月間残業時間" },
              { v: "9.8時間", l: "パートタイムを含む全体" },
              { v: "24.1時間", l: "最も多い業種（運輸業，郵便業）" },
              { v: "45時間", l: "36協定の原則の上限（月）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「毎月勤労統計調査 2025年分結果確報」によると、フルタイムで働く一般労働者の残業時間（所定外労働時間）の平均は<strong>月13.2時間</strong>です。
            1日あたりに直すと、出勤日数19.2日で割って約41分です（当サイト計算）。パートタイム労働者を含む全体の平均は月9.8時間で、前年より2.5%減っています。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省「毎月勤労統計調査」・e-Gov法令検索（{CHECKED}に当サイトで確認）。1日あたり・年間の換算は当サイトで計算しています。</p>
        </div>

        <h2>働き方・事業所規模別の残業時間</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-right">総実労働時間</th>
                <th className="p-3 text-right">所定外労働時間（残業）</th>
                <th className="p-3 text-right rounded-tr-lg">出勤日数</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "一般労働者（規模5人以上）", a: "160.5時間", b: "13.2時間", c: "19.2日", hl: true },
                { k: "パートタイム労働者（規模5人以上）", a: "79.1時間", b: "2.3時間", c: "13.5日" },
                { k: "就業形態計（規模5人以上）", a: "135.1時間", b: "9.8時間", c: "17.4日" },
                { k: "一般労働者（規模30人以上）", a: "159.7時間", b: "14.4時間", c: "19.0日" },
              ].map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.hl ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」第2表。月間の平均値です。所定外労働時間は、早出・残業・臨時の呼出・休日出勤などの実労働時間数です（同調査の用語の定義）。
        </p>
        <p className="mb-10">
          この統計は事業所を対象とした調査で、事業所が把握している労働時間の平均です。個人の働き方や職種によって残業時間は大きく異なるため、あくまで全体の目安としてご覧ください。
          規模30人以上の事業所に限ると、一般労働者の残業は月14.4時間と、規模5人以上の平均より1.2時間多くなっています。
        </p>

        <h2>業種別の残業時間（一般労働者）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">順位</th>
                <th className="p-3 text-left">業種</th>
                <th className="p-3 text-right">所定外労働時間（月）</th>
                <th className="p-3 text-right rounded-tr-lg">総実労働時間（月）</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((x, i) => (
                <tr key={x.n} className="border-b border-gray-100">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{x.n}</td>
                  <td className="p-3 text-right font-bold">{x.ot}時間</td>
                  <td className="p-3 text-right">{x.total}時間</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同調査 第2表（事業所規模5人以上・一般労働者）を所定外労働時間の多い順に当サイトで並べ替えました。業種名は同調査の表記（略称）です。
        </p>
        <p className="mb-10">
          運輸業，郵便業の月24.1時間は、全業種平均（13.2時間）の約1.8倍です。一方、医療，福祉は6.7時間で、平均の約半分です。
          IT業界への転職を考えている場合、情報通信業は月16.5時間と平均より3.3時間多い水準です。IT職向けの転職エージェントは
          <Link href="/type/it-engineer/" className="text-teal font-bold hover:underline">ITエンジニア向けの転職エージェント</Link>で比較しています。
        </p>

        <h2>36協定による残業時間の上限</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-left rounded-tr-lg">上限（労働基準法 第36条）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">原則（限度時間）</td><td className="p-3">月45時間・年360時間</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">特別条項（臨時的な特別の事情がある場合）</td><td className="p-3">年720時間以内／月45時間を超えられるのは年6か月まで</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">特別条項でも守る必要がある上限</td><td className="p-3">時間外労働と休日労働の合計が月100時間未満、2〜6か月の平均がいずれも80時間以内</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          会社が法定労働時間（1日8時間・1週40時間、第32条）を超えて働かせるには、労使で36協定を結んで届け出る必要があります。
          求人票に「固定残業代（みなし残業）月○時間分」と書かれている場合は、その時間数が統計の平均（月13.2時間）や原則の上限（月45時間）と比べてどの程度かを確認すると、想定される働き方の目安になります。
          休日数の目安は<Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link>と
          <Link href="/knowledge/annual-holidays-105/" className="text-teal font-bold hover:underline">年間休日105日の水準</Link>にまとめています。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">エージェントへの希望条件の伝え方</Link></li>
          <li><Link href="/knowledge/annual-holidays-105/" className="text-teal font-bold hover:underline">年間休日105日の水準</Link></li>
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収（国税庁統計）</Link></li>
          <li><Link href="/company/" className="text-teal font-bold hover:underline">企業別の平均年収（有価証券報告書）</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
