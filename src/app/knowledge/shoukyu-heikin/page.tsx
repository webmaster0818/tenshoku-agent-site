import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/shoukyu-heikin/" },
  title: "昇給の平均は月13,601円・4.4%【厚労省 令和7年賃金引上げ等の実態に関する調査】",
  description:
    "昇給（賃金改定）の平均額を、厚生労働省「令和7年賃金引上げ等の実態に関する調査」で確認しました。1人平均賃金の改定額は月13,601円、改定率は4.4%で、従業員5,000人以上は16,784円、100〜299人は10,264円です。産業別の一覧、定期昇給・ベースアップを行った企業の割合も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "昇給の平均は月13,601円・4.4%【厚労省 令和7年調査】",
    description: "厚生労働省の調査で、企業規模別・産業別の昇給額と、定期昇給・ベースアップの実施割合を確認しています。",
  },
};

const CHECKED = "2026年11月17日";

// 厚生労働省「令和7年賃金引上げ等の実態に関する調査」第2表（1人平均賃金の改定額・改定率）
const bySize = [
  { k: "全体（100人以上）", a7: 13601, a6: 11961, r7: 4.4, r6: 4.1 },
  { k: "5,000人以上", a7: 16784, a6: 15121, r7: 5.1, r6: 4.8 },
  { k: "1,000〜4,999人", a7: 15859, a6: 12317, r7: 5.0, r6: 4.1 },
  { k: "300〜999人", a7: 12308, a6: 10618, r7: 4.0, r6: 3.8 },
  { k: "100〜299人", a7: 10264, a6: 10228, r7: 3.6, r6: 3.7 },
];

const byIndustry = [
  { k: "建設業", a: 20724, r: 5.9 },
  { k: "電気・ガス・熱供給・水道業", a: 19611, r: 5.3 },
  { k: "鉱業，採石業，砂利採取業", a: 18020, r: 6.1 },
  { k: "金融業，保険業", a: 17567, r: 4.1 },
  { k: "製造業", a: 15952, r: 5.2 },
  { k: "学術研究，専門・技術サービス業", a: 14911, r: 3.8 },
  { k: "不動産業，物品賃貸業", a: 14368, r: 4.5 },
  { k: "情報通信業", a: 14096, r: 3.9 },
  { k: "卸売業，小売業", a: 12183, r: 4.2 },
  { k: "運輸業，郵便業", a: 10545, r: 3.6 },
  { k: "宿泊業，飲食サービス業", a: 10177, r: 3.6 },
  { k: "教育，学習支援業", a: 9300, r: 3.2 },
  { k: "サービス業（他に分類されないもの）", a: 8621, r: 3.4 },
  { k: "生活関連サービス業，娯楽業", a: 7744, r: 2.9 },
  { k: "医療，福祉", a: 5589, r: 2.3 },
];

const n = (v: number) => v.toLocaleString("ja-JP");

const faq = [
  {
    q: "昇給の平均はいくらですか？",
    a: "厚生労働省「令和7年賃金引上げ等の実態に関する調査」では、令和7年の1人平均賃金の改定額は月13,601円、改定率は4.4%です（前年は11,961円・4.1%）。常用労働者100人以上の民営企業が対象で、定期昇給・ベースアップ・諸手当の改定をすべて含んだ1人あたりの平均額です。",
  },
  {
    q: "この金額は自分の昇給額と同じと考えてよいですか？",
    a: "そのまま比べることはできません。調査の改定額は、企業ごとの改定後と改定前の1人平均賃金（所定内賃金）の差を、常用労働者数で加重平均した値です。個人ごとの昇給額は年齢・評価・役職によって異なり、従業員100人未満の企業は調査の対象外です。",
  },
  {
    q: "定期昇給とベースアップの違いは何ですか？",
    a: "同調査の定義では、定期昇給は労働協約・就業規則などで定められた制度に従って一定の時期に毎年行う昇給で、年齢・勤続年数による自動昇給のほか、能力・業績評価にもとづく昇給も含みます。ベースアップは賃金表の改定によって賃金水準を引き上げることです。",
  },
  {
    q: "昇給がない会社はどのくらいありますか？",
    a: "同調査では、令和7年に「1人平均賃金を引き上げた・引き上げる」企業は91.5%で、「賃金の改定を実施しない」企業は2.4%、「1人平均賃金を引き下げた・引き下げる」企業は1.1%です。定期昇給制度がない企業は17.7%で、従業員100〜299人では20.0%です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const BASE = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/jittai/25/";
const sources = [
  { label: "厚生労働省「令和7年賃金引上げ等の実態に関する調査の概況」", url: `${BASE}index.html` },
  { label: "同 結果の概要 1 賃金の改定の実施状況（第1表）", url: `${BASE}dl/01.pdf` },
  { label: "同 結果の概要 2 賃金の改定額及び改定率（第2表）", url: `${BASE}dl/02.pdf` },
  { label: "同 結果の概要 3 定期昇給制度、ベースアップ等の実施状況（第3表〜第5表）", url: `${BASE}dl/03.pdf` },
  { label: "同 調査の概要（調査対象・実施時期・有効回答数）", url: `${BASE}dl/10.pdf` },
  { label: "同 付表（付表1〜4・Excel）", url: `${BASE}xls/fuhyou.xlsx` },
  { label: "同 主な用語の定義", url: "https://www.mhlw.go.jp/toukei/list/dl/12-23-03-r07.pdf" },
];

export default function Page() {
  const gap7 = bySize[1].a7 - bySize[4].a7;
  const gap6 = bySize[1].a6 - bySize[4].a6;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "昇給の平均" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            昇給の平均は月13,601円・4.4%【厚労省 令和7年賃金引上げ等の実態に関する調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "13,601円", l: "1人平均賃金の改定額（月額）" },
              { v: "4.4%", l: "1人平均賃金の改定率" },
              { v: "91.5%", l: "賃金を引き上げた・引き上げる企業" },
              { v: "57.8%", l: "ベースアップを行った・行う企業（定昇制度あり企業のうち）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年賃金引上げ等の実態に関する調査」によると、令和7年の<strong>1人平均賃金の改定額は月13,601円、改定率は4.4%</strong>です。
            前年（11,961円・4.1%）から増え、同調査の付表2で平成11年以降の推移を当サイトで確認すると、改定額・改定率ともに最も高い値です。
            この値は定期昇給・ベースアップ・諸手当の改定を合わせた所定内賃金の増加額で、常用労働者100人以上の民営企業が対象です。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省の公表資料（{CHECKED}に当サイトで確認）。差額・年額換算は当サイトで計算しています。</p>
        </div>

        <h2>企業規模別の昇給額</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模（常用労働者数）</th>
                <th className="p-3 text-right">改定額 令和7年</th>
                <th className="p-3 text-right">改定額 令和6年</th>
                <th className="p-3 text-right">改定率 令和7年</th>
                <th className="p-3 text-right rounded-tr-lg">改定率 令和6年</th>
              </tr>
            </thead>
            <tbody>
              {bySize.map((x, i) => (
                <tr key={x.k} className={`border-b border-gray-100 ${i === 0 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.a7)}円</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.a6)}円</td>
                  <td className="p-3 text-right">{x.r7.toFixed(1)}%</td>
                  <td className="p-3 text-right">{x.r6.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年賃金引上げ等の実態に関する調査」第2表。賃金の改定を実施した又は予定していて額も決定している企業と、賃金の改定を実施しない企業の数値で、常用労働者数による加重平均です。
        </p>
        <p className="mb-10">
          従業員5,000人以上と100〜299人の改定額の差は、令和6年の{n(gap6)}円から令和7年は{n(gap7)}円に広がりました（当サイト計算）。
          月13,601円の昇給を12か月分に換算すると年{n(13601 * 12)}円です。所定内賃金の増加分のため、賞与や残業代の増減は含みません。
        </p>

        <h2>産業別の昇給額（令和7年）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">産業</th>
                <th className="p-3 text-right">改定額</th>
                <th className="p-3 text-right rounded-tr-lg">改定率</th>
              </tr>
            </thead>
            <tbody>
              {byIndustry.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.a)}円</td>
                  <td className="p-3 text-right">{x.r.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同調査 第2表。改定額の多い順に当サイトで並べ替えています。</p>
        <p className="mb-10">
          改定額が最も多いのは建設業の20,724円、最も少ないのは医療，福祉の5,589円で、約3.7倍の差があります（当サイト計算）。
          医療，福祉と情報通信業、生活関連サービス業，娯楽業は、令和7年の改定額が前年を下回りました（医療，福祉は前年6,876円、情報通信業は14,989円）。
          企業ごとの平均年収は<Link href="/company/" className="text-teal font-bold hover:underline">企業別の平均年収（有価証券報告書）</Link>にまとめています。
        </p>

        <h2>昇給額の推移（令和元年〜7年）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">調査年</th>
                <th className="p-3 text-right">1人平均賃金の改定額</th>
                <th className="p-3 text-right rounded-tr-lg">改定率</th>
              </tr>
            </thead>
            <tbody>
              {[
                { y: "令和元年（2019年）", a: 5592, r: 2.0 },
                { y: "令和2年（2020年）", a: 4940, r: 1.7 },
                { y: "令和3年（2021年）", a: 4694, r: 1.6 },
                { y: "令和4年（2022年）", a: 5534, r: 1.9 },
                { y: "令和5年（2023年）", a: 9437, r: 3.2 },
                { y: "令和6年（2024年）", a: 11961, r: 4.1 },
                { y: "令和7年（2025年）", a: 13601, r: 4.4 },
              ].map((x) => (
                <tr key={x.y} className={`border-b border-gray-100 ${x.a === 13601 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{n(x.a)}円</td>
                  <td className="p-3 text-right">{x.r.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同調査 付表2「1人平均賃金の改定額及び改定率の推移」。</p>
        <p className="mb-10">
          令和4年の5,534円から令和7年の13,601円まで、3年間で約2.5倍になりました（当サイト計算）。
          賃金の改定に当たり最も重視した要素は、令和7年は「企業の業績」が41.7%で最も多く、「労働力の確保・定着」が17.0%で続きます（同調査 付表3）。
        </p>

        <h2>定期昇給・ベースアップを行った企業の割合</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目（令和7年）</th>
                <th className="p-3 text-right">全体</th>
                <th className="p-3 text-right">5,000人以上</th>
                <th className="p-3 text-right rounded-tr-lg">100〜299人</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "定期昇給制度がある", a: "81.2%", b: "88.7%", c: "78.7%" },
                { k: "定期昇給を行った・行う", a: "76.8%", b: "86.8%", c: "73.4%" },
                { k: "ベースアップを行った・行う（定昇制度あり企業のうち）", a: "57.8%", b: "85.2%", c: "53.3%" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.a}</td>
                  <td className="p-3 text-right">{x.b}</td>
                  <td className="p-3 text-right">{x.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同調査 第3表〜第5表。定期昇給制度の有無・実施状況は、賃金の改定を実施した又は予定している企業及び実施しない企業に占める割合です。
          ベースアップは、定期昇給制度がある企業に占める割合です。
        </p>
        <p className="mb-10">
          定期昇給制度がある企業のうち、制度の内容が「自動昇給」の企業は27.5%、「その他（業績評価など）」は72.4%です（複数回答）。
          労働組合がある企業ではベースアップの実施が82.1%、ない企業では49.4%で、改定額も組合ありが15,229円、なしが11,980円です。
        </p>

        <h2>昇給の平均を転職の判断に使うときの注意</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "100人未満の企業は含まれていない", d: "同調査の対象は常用労働者100人以上の民営企業です（調査対象3,643社・有効回答1,847社）。小規模企業の昇給の水準は、この調査からは分かりません。" },
            { t: "個人の昇給額ではなく1人平均賃金の差", d: "改定額は企業の1人平均賃金の改定前後の差です。昇格による大きな昇給と、昇給のない人が混ざった平均として読む必要があります。" },
            { t: "応募先の昇給は求人票と面接で確認する", d: "昇給の有無・時期・前年実績は、求人票の「昇給」欄や面接で確認できます。転職エージェントを利用する場合は、担当者に応募先の昇給実績の確認を依頼する方法もあります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          転職による年収の変化については<Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">転職エージェント各社の年収アップ実績の比較</Link>、
          年収ごとの手取りは<Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link>などに掲載しています。
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
          <li><Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link></li>
          <li><Link href="/knowledge/daisotsu-nenshu/" className="text-teal font-bold hover:underline">大卒の平均年収</Link></li>
          <li><Link href="/knowledge/tedori-450man/" className="text-teal font-bold hover:underline">年収450万円の手取り</Link></li>
          <li><Link href="/compare/salary-up/" className="text-teal font-bold hover:underline">転職エージェント各社の年収アップ実績の比較</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。調査の実施時期は令和7年7月20日〜8月10日です。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
