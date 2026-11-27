import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "NECネッツエスアイの平均年収は854万円（採用サイト・2026年3月）・有価証券報告書では約745万円【中途採用の条件も掲載】",
  description:
    "NECネッツエスアイの平均年収を、採用サイトの854万円（2026年3月31日）と有価証券報告書の7,452千円（2024年3月期）で整理しました。上場廃止の経緯、残業時間・離職率、キャリア採用の選考の流れも掲載しています。",
  alternates: { canonical: "/company/nesic/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "NECネッツエスアイの平均年収は854万円（採用サイト）・有報では約745万円",
    description: "NECネッツエスアイの採用サイトと有価証券報告書から、平均年収・平均年齢・残業時間・キャリア採用の条件を整理しています。",
  },
};

const CHECKED = "2026年11月28日";
const YUHO_92 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100TOKC.pdf";
const YUHO_91 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100R011.pdf";
const YUHO_90 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100OCVC.pdf";
const NEC_YUHO = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YBFV.pdf";
const JPX = "https://www.jpx.co.jp/news/1023/20250304-11.html";
const DATA = "https://www.nesic.co.jp/recruit/candidate/environment/company-data/";
const CAREER = "https://www.nesic.co.jp/recruit/candidate/career/recruit/";
const POSITION = "https://www.nesic.co.jp/recruit/candidate/career/position/";
const FAQ_URL = "https://www.nesic.co.jp/recruit/candidate/career/faq/";
const CORP = "https://www.nesic.co.jp/corporate/company.html";
const link = "text-teal font-bold hover:underline";
const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

const YUHO = [
  { t: "2022年3月31日（第90期）", n: "5,090名", age: "44.3歳", y: "16.8年", s: "8,051千円", url: YUHO_90 },
  { t: "2023年3月31日（第91期）", n: "5,176名", age: "44.4歳", y: "16.9年", s: "7,636千円", url: YUHO_91 },
  { t: "2024年3月31日（第92期）", n: "5,225名", age: "44.5歳", y: "17.0年", s: "7,452千円", url: YUHO_92 },
];

const faqData = [
  {
    q: "NECネッツエスアイの平均年収はいくらですか？",
    a: "NECネッツエスアイの採用サイト「データで見る」では、平均年収854万円（2026年3月31日）と記載されています。単体・連結のどちらを対象とした値かは記載がありません。最後に提出された有価証券報告書（第92期）では、提出会社の平均年間給与は7,452千円（約745万円・2024年3月31日現在・従業員5,225名・平均44.5歳）です。",
  },
  {
    q: "NECネッツエスアイは上場していますか？",
    a: "現在は上場していません。日本電気（NEC）の公開買付けとその後の株式併合により、2025年3月21日に東京証券取引所プライム市場の上場が廃止されました（日本取引所グループの公表）。NECの有価証券報告書には、2025年7月1日付でNESICホールディングス㈱の傘下に入ったと記載されています。",
  },
  {
    q: "NECネッツエスアイの残業時間と離職率はどのくらいですか？",
    a: "採用サイトでは、平均残業時間25.0時間（2025年度）、年間離職率3.4%、平均勤続年数16.7年、年間休日126日（2025年度）と記載されています。キャリア採用の募集要項では、全社平均の時間外労働は月23.6時間（2024年度実績）とされています。",
  },
  {
    q: "NECネッツエスアイの中途採用の選考はどのように進みますか？",
    a: "募集要項のモデルケースでは「応募→書類選考・適性検査→面接（1〜2回・WEBまたは対面）→内定→入社」です。最終面接に進む人にはコンプライアンスチェックがあり、一部のポジションではリファレンスチェックも行われます。FAQでは、選考は原則オンラインとされています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const sources = [
  { label: "NECネッツエスアイ 採用サイト「データで見る」", url: DATA },
  { label: "NECネッツエスアイ キャリア採用 募集要項・選考フロー", url: CAREER },
  { label: "NECネッツエスアイ キャリア採用 募集ポジション", url: POSITION },
  { label: "NECネッツエスアイ キャリア採用 FAQ", url: FAQ_URL },
  { label: "NECネッツエスアイ 会社概要", url: CORP },
  { label: "NECネッツエスアイ 有価証券報告書（第92期・2024年6月24日提出）", url: YUHO_92 },
  { label: "NECネッツエスアイ 有価証券報告書（第91期）", url: YUHO_91 },
  { label: "NECネッツエスアイ 有価証券報告書（第90期）", url: YUHO_90 },
  { label: "日本電気 有価証券報告書（第188期・2026年6月18日提出）", url: NEC_YUHO },
  { label: "日本取引所グループ 上場廃止等の決定（NECネッツエスアイ）", url: JPX },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "NECネッツエスアイの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            NECネッツエスアイの平均年収は854万円（採用サイト・2026年3月）・有価証券報告書では約745万円
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "854万円", l: "平均年収（採用サイト・2026年3月31日）" },
              { v: "約745万円", l: "提出会社の平均年間給与（有報・2024年3月期）" },
              { v: "25.0時間", l: "平均残業時間（採用サイト・2025年度）" },
              { v: "3.4%", l: "年間離職率（採用サイト）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            NECネッツエスアイの平均年収は、採用サイトで<strong>854万円（2026年3月31日）</strong>と公表されています。
            同社は2025年3月にNECの完全子会社となって上場を廃止したため、有価証券報告書は第92期（2024年3月期）が最後で、そこでの提出会社の平均年間給与は7,452千円（約745万円）です。
            両者は時点が異なり、採用サイトの値は単体・連結のどちらが対象かの記載がないため、そのまま比べることはできません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：{a(DATA, "NECネッツエスアイ 採用サイト「データで見る」")}・{a(YUHO_92, "有価証券報告書（第92期）")}「従業員の状況」。{CHECKED}に確認しています。
          </p>
        </div>

        <h2>有価証券報告書の平均年間給与の推移（提出会社）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">時点</th>
                <th className="p-3 text-right">従業員数</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">平均年間給与</th>
              </tr>
            </thead>
            <tbody>
              {YUHO.map((x) => (
                <tr key={x.t} className="border-b border-gray-100">
                  <td className="p-3">{a(x.url, x.t)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.y}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※平均年間給与は賞与および基準外賃金を含みます。従業員数にパートタイマー・嘱託は含みません（各期の有価証券報告書の注記）。
        </p>
        <p className="mb-10">
          有価証券報告書の平均年間給与は、第90期の8,051千円から第92期の7,452千円へ、2期続けて下がっています。報告書に減少の理由は記載されていません。
          第92期の連結従業員数は7,774名で、提出会社の女性管理職比率は7.0%、男性の育児休業取得率は58.8%、男女の賃金の差異（全労働者）は75.7%です。
          上場廃止後の2026年3月期の指標は、親会社の{a(NEC_YUHO, "日本電気の有価証券報告書（第188期）")}に連結子会社として掲載されており、女性管理職比率8.5%、男性の育児休業取得率64.6%、男女の賃金の差異（全労働者）78.8%です。
        </p>

        <h2>採用サイトで公表されている働き方のデータ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-right rounded-tr-lg">値</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["平均年収", "854万円（2026年3月31日）"],
                ["平均残業時間", "25.0時間（2025年度）"],
                ["年間離職率", "3.4%"],
                ["平均勤続年数", "16.7年（男性19.0年・女性13.8年）"],
                ["年間休日", "126日（2025年度）"],
                ["平均有給休暇取得日数", "14.0日（2025年度）"],
                ["男性の育児休業取得率", "64.6%（2025年度）"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※出典：{a(DATA, "NECネッツエスアイ 採用サイト「データで見る」")}。算出の対象範囲（単体・連結）は記載されていません。</p>

        <h2>キャリア採用（中途採用）の条件と選考の流れ</h2>
        <p className="mb-4">
          {a(POSITION, "募集ポジション")}は、営業（セールス）、営業推進／マーケティング、コンサルタント、ビジネスデザイン（事業開発／企画）、プリセールス／セールスエンジニア、開発エンジニア、インフラエンジニア、施工エンジニア、サービスエンジニア、スタッフ職（総合事務職）の10区分です。
        </p>
        <p className="mb-4">
          {a(CAREER, "募集要項")}では、勤務時間は8:30〜17:15（標準7時間45分）で、コアタイムのないフレックスタイム制（5:00〜22:00）とテレワーク制度があります。休日は完全週休2日制（土日）と祝日、賞与は年2回（6月・12月）、昇給は年1回（4月）で、固定残業代はありません。月給・年収の提示額はページに掲載されていません。
        </p>
        <p className="mb-10">
          選考はモデルケースとして「応募→書類選考・適性検査→面接（1〜2回）→内定→入社」と示されており、最終面接に進む人にはコンプライアンスチェック、一部のポジションではリファレンスチェックがあります。
          {a(FAQ_URL, "FAQ")}では、選考は原則オンライン、副業は事前の許可があれば可能（雇用型は不可）とされています。退職した社員の再入社（キャリアリターン）や社員紹介（リファラル）の制度もあります。
          親会社の水準は<Link href="/company/nec/" className={link}>NECへの転職と平均年収</Link>で確認できます。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faqData.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/company/nec/" className={link}>NECへの転職は難しい？</Link></li>
          <li><Link href="/knowledge/bonus-sukunai/" className={link}>ボーナスが少ないかを統計で確認</Link></li>
          <li><Link href="/knowledge/tedori-360man/" className={link}>年収360万円の手取り</Link></li>
          <li><Link href="/knowledge/shigoto-yamedoki/" className={link}>仕事の辞めどき</Link></li>
          <li><Link href="/company/" className={link}>企業別転職ガイド一覧</Link></li>
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
