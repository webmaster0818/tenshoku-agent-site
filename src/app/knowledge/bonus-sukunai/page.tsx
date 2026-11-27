import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/bonus-sukunai/" },
  title: "ボーナスが少ないかを統計で確認｜2026年夏の平均44.9万円・支給事業所74.0%・業種別と規模別の差【毎月勤労統計・民間給与実態統計】",
  description:
    "ボーナスが少ないかを公的統計で比べました。2026年夏季賞与は支給事業所の1人平均448,765円、支給した事業所は74.0%です。業種別の差と事業所規模別の年間賞与、法律上の位置づけも確認しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ボーナスが少ないかを統計で確認｜2026年夏の平均44.9万円・業種別と規模別の差",
    description: "毎月勤労統計調査と民間給与実態統計調査から、賞与の平均・支給割合・業種別と規模別の差を整理しています。",
  },
};

const CHECKED = "2026年11月28日";
const MAIKIN_SUMMER = "https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r08/2609p/2609p.html";
const MAIKIN_WINTER = "https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r08/2602p/xls/2025nenmatsushoyo.xlsx";
const NTA = "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf";
const LSA = "https://laws.e-gov.go.jp/law/322AC0000000049";

// 毎月勤労統計調査 2026年夏季賞与 表2（事業所規模5人以上・支給事業所の1人平均）
const INDUSTRY = [
  { k: "電気・ガス業", v: 973325, m: "1.82" },
  { k: "情報通信業", v: 793224, m: null },
  { k: "学術研究等", v: 764161, m: null },
  { k: "金融業，保険業", v: 763612, m: null },
  { k: "建設業", v: 680218, m: null },
  { k: "製造業", v: 622575, m: null },
  { k: "調査産業計", v: 448765, m: "1.04" },
  { k: "卸売業，小売業", v: 390438, m: null },
  { k: "運輸業，郵便業", v: 387712, m: null },
  { k: "医療，福祉", v: 298773, m: null },
  { k: "その他のサービス業", v: 259534, m: null },
  { k: "生活関連サービス等", v: 218172, m: null },
  { k: "飲食サービス業等", v: 81647, m: "0.39" },
];

// 国税庁 令和7年分 民間給与実態統計調査 第11表（1年を通じて勤務した給与所得者・事業所規模別の平均賞与）
const SIZE = [
  ["1〜4人", "20.4万円", "5.7%"],
  ["5〜9人", "32.0万円", "8.4%"],
  ["10〜29人", "45.0万円", "11.0%"],
  ["30〜99人", "61.1万円", "15.5%"],
  ["100〜499人", "76.4万円", "19.1%"],
  ["500〜999人", "85.8万円", "20.2%"],
  ["1,000〜4,999人", "106.2万円", "23.6%"],
  ["5,000人以上", "111.6万円", "25.6%"],
];

const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;

const faq = [
  {
    q: "ボーナスの平均はいくらですか？",
    a: "厚生労働省の毎月勤労統計調査では、2026年夏季賞与は事業所規模5人以上で支給事業所の1人平均448,765円（前年比5.3%増・所定内給与の1.04か月分）、2025年末賞与は424,889円（1.08か月分）です。国税庁の令和7年分 民間給与実態統計調査では、1年を通じて勤務した人の年間の平均賞与は約75万円です。",
  },
  {
    q: "ボーナスが出ない会社はどのくらいありますか？",
    a: "2026年夏季賞与では、事業所規模5人以上で賞与を支給した事業所の割合は74.0%で、約26%の事業所は支給していません。30人以上の事業所では支給割合が91.3%です。業種別では飲食サービス業等の支給割合が51.2%と低くなっています（毎月勤労統計調査 表2）。",
  },
  {
    q: "ボーナスは法律で支払いが義務づけられていますか？",
    a: "義務づけられていません。労働基準法 第89条第4号は、臨時の賃金等の定めをする場合に就業規則へ記載することを求めているもので、賞与の支給そのものを義務づける規定ではありません。支給の有無や計算方法は、就業規則・賃金規程・雇用契約で確認する必要があります。",
  },
  {
    q: "会社の規模でボーナスはどのくらい違いますか？",
    a: "国税庁の令和7年分 民間給与実態統計調査 第11表では、年間の平均賞与は事業所規模1〜4人で20.4万円、30〜99人で61.1万円、5,000人以上で111.6万円です。給料・手当に対する賞与の割合も5.7%から25.6%まで差があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省 毎月勤労統計調査 令和8年9月分結果速報（2026年夏季賞与の支給状況 表2）", url: MAIKIN_SUMMER },
  { label: "厚生労働省 毎月勤労統計調査 令和8年2月分結果速報（2025年年末賞与の支給状況 表2・Excel）", url: MAIKIN_WINTER },
  { label: "国税庁「令和7年分 民間給与実態統計調査」（第10表・第11表）", url: NTA },
  { label: "e-Gov法令検索 労働基準法（第89条）", url: LSA },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "ボーナスが少ないかを統計で確認" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ボーナスが少ないかを統計で確認｜2026年夏の平均44.9万円・支給事業所74.0%・業種別と規模別の差
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "448,765円", l: "2026年夏季賞与 支給事業所の1人平均（5人以上）" },
              { v: "74.0%", l: "2026年夏に賞与を支給した事業所の割合" },
              { v: "1.04か月", l: "2026年夏季賞与の支給月数" },
              { v: "約75万円", l: "令和7年分の年間平均賞与（国税庁）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>2026年夏季賞与の平均は、事業所規模5人以上で支給事業所の1人あたり448,765円、所定内給与の1.04か月分です。</strong>
            ただし、賞与を支給した事業所は74.0%で、業種別では飲食サービス業等の81,647円から電気・ガス業の973,325円まで約12倍の差があります。
            自分のボーナスが少ないかどうかは、全体の平均よりも、同じ業種・同じ規模の会社の水準と、支給月数で比べると判断しやすくなります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：{a(MAIKIN_SUMMER, "厚生労働省 毎月勤労統計調査（2026年夏季賞与）")}・{a(NTA, "国税庁 令和7年分 民間給与実態統計調査")}。{CHECKED}に確認しています。
          </p>
        </div>

        <h2>業種別の夏季賞与（2026年夏・事業所規模5人以上）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">業種</th>
                <th className="p-3 text-right">支給事業所の1人平均</th>
                <th className="p-3 text-right rounded-tr-lg">支給月数</th>
              </tr>
            </thead>
            <tbody>
              {INDUSTRY.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "調査産業計" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{yen(x.v)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m ? `${x.m}か月` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※出典：{a(MAIKIN_SUMMER, "毎月勤労統計調査 2026年夏季賞与 表2")}。上位6業種・下位6業種と調査産業計を掲載しています。支給月数は当サイトで確認した業種のみ記載しています。
        </p>
        <p className="mb-10">
          支給した事業所の割合も業種で大きく異なり、飲食サービス業等は51.2%、生活関連サービス等は58.0%です。
          2025年末賞与（{a(MAIKIN_WINTER, "毎月勤労統計調査 表2")}）でも、調査産業計424,889円（1.08か月分・支給事業所割合76.5%）に対し、飲食サービス業等は90,551円（0.46か月分・51.3%）で、同じ傾向が続いています。
        </p>

        <h2>事業所規模別の年間平均賞与（令和7年分）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">事業所規模</th>
                <th className="p-3 text-right">平均賞与（年間）</th>
                <th className="p-3 text-right rounded-tr-lg">給料・手当に対する割合</th>
              </tr>
            </thead>
            <tbody>
              {SIZE.map(([k, v, r]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{v}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※出典：{a(NTA, "国税庁 令和7年分 民間給与実態統計調査 第11表")}（1年を通じて勤務した給与所得者・千円単位の値を万円に換算）。</p>
        <p className="mb-10">
          1年を通じて勤務した人の平均給与は約487万円で、そのうち賞与は約75万円（男性約96万円・女性約47万円）です（第10表）。
          事業所の規模が大きいほど賞与の額も、給与全体に占める割合も高くなります。年収を比べる際に、月給が同じでも賞与の割合が違えば年収に大きな差が出るのはこのためです。
        </p>

        <h2>ボーナスの法律上の位置づけと確認すること</h2>
        <p className="mb-4">
          労働基準法には、賞与の支給を義務づける規定はありません。第89条第4号は「臨時の賃金等（退職手当を除く。）及び最低賃金額の定めをする場合においては、これに関する事項」を就業規則に記載するよう求めているもので、
          支給の有無・算定方法・支給日に在籍している必要があるかどうかは、各社の就業規則や賃金規程で決まります。
        </p>
        <p className="mb-10">
          ボーナスが少ないと感じたときは、まず就業規則・賃金規程で算定方法（基本給の何か月分か、業績や評価との連動）を確認し、統計の同じ業種・規模の水準と比べる方法があります。
          転職を考える場合は、求人票の「賞与 年◯回・前年度実績◯か月」の記載を確認し、月給だけでなく年収で比べることが重要です。
          賞与の手取り額は<Link href="/knowledge/bonus-40man-tedori/" className={link}>ボーナス40万円の手取り</Link>などで試算できます。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/bonus-30man-tedori/" className={link}>ボーナス30万円の手取り</Link></li>
          <li><Link href="/knowledge/bonus-40man-tedori/" className={link}>ボーナス40万円の手取り</Link></li>
          <li><Link href="/knowledge/bonus-60man-tedori/" className={link}>ボーナス60万円の手取り</Link></li>
          <li><Link href="/knowledge/tedori-360man/" className={link}>年収360万円の手取り</Link></li>
          <li><Link href="/knowledge/shigoto-yamedoki/" className={link}>仕事の辞めどき</Link></li>
          <li><Link href="/knowledge/4shu6kyu/" className={link}>4週6休とは</Link></li>
          <li><Link href="/company/nesic/" className={link}>NECネッツエスアイの平均年収</Link></li>
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
