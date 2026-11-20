import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/dai2-shinsotsu-ote/" },
  title: "第二新卒で大手企業に転職できる？20〜24歳の転職者の34.6%が従業員1,000人以上の企業へ【令和7年 雇用動向調査】",
  description:
    "厚生労働省「令和7年 雇用動向調査」から、20〜24歳の転職入職者の34.6%、25〜29歳の33.2%が企業規模1,000人以上の企業に入職していることを当サイトで集計しました。前職より規模の大きい企業へ移った人の割合と、大卒の事業所規模別の3年以内離職率も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "第二新卒で大手企業に転職できる？20〜24歳の転職者の34.6%が1,000人以上の企業へ",
    description: "厚生労働省の雇用動向調査と新規学卒者の離職状況から、若手の転職先の企業規模を集計しています。",
  },
};

const CHECKED = "2026年11月20日";
const p1 = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;

// 厚生労働省「令和7年 雇用動向調査」第9-1表 転職入職者（性・産業計）千人
const bySize = [
  { k: "1,000人以上", a: 230.2, b: 233.6, ga: 124.0, gb: 198.4 },
  { k: "300〜999人", a: 93.0, b: 137.1, ga: 71.7, gb: 110.8 },
  { k: "100〜299人", a: 108.5, b: 102.7, ga: 80.7, gb: 84.6 },
  { k: "30〜99人", a: 116.2, b: 117.0, ga: 66.9, gb: 96.1 },
  { k: "5〜29人", a: 106.7, b: 93.8, ga: 50.1, gb: 66.2 },
];
const totA = 666.0; // 20〜24歳 計
const totB = 704.2; // 25〜29歳 計
const gTotA = 401.2; // 20〜24歳 一般労働者 計
const gTotB = 573.5; // 25〜29歳 一般労働者 計

// 同調査 第11-3表 企業規模間移動区分別 構成比（%）
const moves = [
  { k: "20〜24歳", up: 50.4, flat: 25.5, down: 24.1, n: 500.4 },
  { k: "25〜29歳", up: 43.8, flat: 33.5, down: 22.7, n: 615.2 },
  { k: "30〜34歳", up: 44.5, flat: 29.4, down: 26.1, n: 470.4 },
  { k: "35〜39歳", up: 47.2, flat: 31.5, down: 21.3, n: 325.9 },
  { k: "40〜44歳", up: 41.7, flat: 28.5, down: 29.7, n: 397.7 },
  { k: "全年齢", up: 44.4, flat: 32.1, down: 23.5, n: 4097.5 },
];

// 厚生労働省「新規大卒就職者の事業所規模別離職状況」令和5年3月卒（3年目まで）
const quit = [
  { k: "1,000人以上", r: 24.2, n: 39397 },
  { k: "500〜999人", r: 29.0, n: 20332 },
  { k: "100〜499人", r: 31.7, n: 41887 },
  { k: "30〜99人", r: 39.7, n: 21878 },
  { k: "5〜29人", r: 50.6, n: 15435 },
  { k: "5人未満", r: 58.2, n: 3486 },
  { k: "規模計", r: 31.2, n: 142415 },
];

const faq = [
  {
    q: "第二新卒で大手企業に転職することはできますか？",
    a: `統計上、20代の転職者の約3分の1は大企業に入職しています。厚生労働省「令和7年 雇用動向調査」第9-1表では、20〜24歳の転職入職者66.6万人のうち23.0万人（${p1(230.2, totA)}）、25〜29歳の70.4万人のうち23.4万人（${p1(233.6, totB)}）が企業規模1,000人以上の企業に入職しています（当サイト計算）。ただし、個々の企業の採用枠や選考基準は企業ごとに異なります。`,
  },
  {
    q: "前職より規模の大きい会社へ転職する人はどのくらいいますか？",
    a: "同調査の第11-3表では、前職も雇用者だった転職入職者のうち、前職より規模の大きい企業へ移った「上向移動」の割合は、20〜24歳で50.4%、25〜29歳で43.8%です。20〜24歳は全年齢（44.4%）より6.0ポイント高くなっています。",
  },
  {
    q: "大手企業に入社した人の3年以内離職率は何%ですか？",
    a: "厚生労働省「新規学卒者の離職状況」では、令和5年3月に大学を卒業して事業所規模1,000人以上の事業所に就職した人の3年以内離職率は24.2%で、規模計（31.2%）より7.0ポイント低くなっています。人数では約3.9万人が3年以内に離職しています。",
  },
  {
    q: "第二新卒はいつまでを指しますか？",
    a: "法令上の定義はありません。厚生労働省の指針では、卒業後少なくとも3年間は新卒枠で応募できるようにすることが求められています。詳しくは当サイトの「第二新卒はいつまで」のページで解説しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Stat 令和7年 雇用動向調査 第9-1表「企業規模、年齢階級、性、産業(大分類）、職歴、就業形態、雇用形態別入職者数」（年計）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040489928" },
  { label: "e-Stat 令和7年 雇用動向調査 第11-3表「性、年齢階級、企業規模間移動区分別 入職者数 及び 構成比」（年計）", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040489951" },
  { label: "厚生労働省「新規大卒就職者の事業所規模別離職状況」（令和5年3月卒の3年目までの離職率）", url: "https://www.mhlw.go.jp/content/11800000/001319018.pdf" },
  { label: "厚生労働省 青少年雇用機会確保指針（平成27年厚生労働省告示第406号）第二の三(一)", url: "https://www.mhlw.go.jp/web/t_doc?dataId=00009730&dataType=0&pageNo=1" },
  { label: "厚生労働省 新規学卒就職者の離職状況（資料一覧）", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000137940.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "第二新卒で大手企業に転職できるか" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            第二新卒で大手企業に転職できる？20〜24歳の転職者の34.6%が従業員1,000人以上の企業へ【令和7年 雇用動向調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: p1(230.2, totA), l: "20〜24歳の転職入職者のうち1,000人以上の企業へ" },
              { v: p1(233.6, totB), l: "25〜29歳の転職入職者のうち1,000人以上の企業へ" },
              { v: "50.4%", l: "20〜24歳で前職より規模の大きい企業へ移った人" },
              { v: "24.2%", l: "1,000人以上の事業所に入った大卒の3年以内離職率" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和7年 雇用動向調査」によると、20〜24歳で転職した人の<strong>{p1(230.2, totA)}</strong>、25〜29歳の<strong>{p1(233.6, totB)}</strong>が企業規模1,000人以上の企業に入職しています。
            また、前職も雇用者だった20〜24歳の転職者の50.4%は、前職より規模の大きい企業へ移っています。統計上、第二新卒にあたる年代で大企業へ転職する人は少なくありません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            雇用動向調査に「第二新卒」という区分はないため、本ページでは20〜24歳・25〜29歳の転職入職者（入職前1年間に就業経験がある人）の値を使っています。割合は公表された人数から当サイトで計算し、統計値は{CHECKED}に公表資料で確認しています。
          </p>
        </div>

        <h2>20代の転職入職者の入職先（企業規模別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">入職先の企業規模</th>
                <th className="p-3 text-right">20〜24歳</th>
                <th className="p-3 text-right">割合</th>
                <th className="p-3 text-right">25〜29歳</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {bySize.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "1,000人以上" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.a.toFixed(1)}千人</td>
                  <td className="p-3 text-right">{p1(x.a, totA)}</td>
                  <td className="p-3 text-right">{x.b.toFixed(1)}千人</td>
                  <td className="p-3 text-right">{p1(x.b, totB)}</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100">
                <td className="p-3">総数</td>
                <td className="p-3 text-right">{totA.toFixed(1)}千人</td>
                <td className="p-3 text-right">—</td>
                <td className="p-3 text-right">{totB.toFixed(1)}千人</td>
                <td className="p-3 text-right">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 雇用動向調査」第9-1表（職歴：転職入職者・男女計・産業計）。パートタイム労働者を含みます。5区分の合計は総数と一致しないため、割合は総数に対する当サイト計算です。
        </p>
        <p className="mb-10">
          20〜24歳では、1,000人以上の企業への入職が23.0万人で、2番目に多い30〜99人（11.6万人）の約2倍です。
          パートタイム労働者を除いた一般労働者に限ると、1,000人以上の企業への入職は20〜24歳で{p1(124.0, gTotA)}、25〜29歳で{p1(198.4, gTotB)}です（当サイト計算）。
          大企業は従業員数が多く、欠員補充を含めた採用の総数も多いため、転職入職者に占める割合が高くなると考えられます。
        </p>

        <h2>前職より規模の大きい企業へ移った人の割合（年齢別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">上向移動（規模が大きい企業へ）</th>
                <th className="p-3 text-right">平行移動</th>
                <th className="p-3 text-right rounded-tr-lg">下向移動（規模が小さい企業へ）</th>
              </tr>
            </thead>
            <tbody>
              {moves.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "20〜24歳" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.up}%</td>
                  <td className="p-3 text-right">{x.flat}%</td>
                  <td className="p-3 text-right">{x.down}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同調査 第11-3表（前職・現職とも官公営を除き、入職前1年以内に就業経験があり、前職が雇用者だった調査時在籍者）。企業規模の区分間の移動で、同じ区分内の移動は平行移動です。
        </p>
        <p className="mb-10">
          20〜24歳は、上向移動（50.4%）が下向移動（24.1%）の約2倍で、表に掲げた年齢の中で最も高い割合です。
          25〜29歳の上向移動は43.8%で、全年齢（44.4%）とほぼ同じ水準です。男女別では、20〜24歳の男性が49.8%、女性が51.0%です。
        </p>

        <h2>大企業に入社した大卒の3年以内離職率</h2>
        <p>
          第二新卒の転職市場には、大企業を早期に離職した人も含まれます。大学卒業後に就職した事業所の規模別に、3年以内の離職率を並べました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">就職した事業所の規模</th>
                <th className="p-3 text-right">3年以内の離職者数</th>
                <th className="p-3 text-right rounded-tr-lg">3年以内離職率</th>
              </tr>
            </thead>
            <tbody>
              {quit.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "規模計" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.n.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right">{x.r}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※厚生労働省「新規大卒就職者の事業所規模別離職状況」令和5年3月卒の3年目まで。事業所単位の規模で、企業規模とは異なります。</p>
        <p className="mb-10">
          事業所規模1,000人以上の3年以内離職率は24.2%で、5〜29人（50.6%）の半分以下です。それでも人数では約3.9万人が3年以内に離職しており、大企業出身の第二新卒も一定数います。
          大企業への転職を目指す場合は、同じ年代の応募者の中に大企業での勤務経験がある人も含まれる点を踏まえて、職務経歴書で担当業務と成果を具体的に示すことが重要です。
        </p>

        <h2>第二新卒で大手企業を目指すときの確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "応募先の募集区分を確認する", d: "大企業でも、新卒採用の枠で既卒者を受け付ける場合と、中途採用（経験者採用）の枠で募集する場合があります。応募資格の「卒業後○年以内」「社会人経験○年以上」の記載を確認してください。" },
            { t: "企業規模だけでなく職種と勤務地を確認する", d: "企業規模1,000人以上にはグループ会社や地域限定の職種も含まれます。求人票で雇用形態・職種・勤務地・転勤の有無を確認してください。" },
            { t: "20代向けの転職エージェントを比べる", d: "第二新卒・20代を主な対象とする転職エージェントもあります。紹介される求人の企業規模の傾向は事業者によって異なるため、複数を比べると選択肢が広がります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

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
          <li><Link href="/knowledge/dai2-shinsotsu-itsumade/" className="text-teal font-bold hover:underline">第二新卒はいつまで</Link></li>
          <li><Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒におすすめの転職エージェント</Link></li>
          <li><Link href="/age/20s/" className="text-teal font-bold hover:underline">20代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link></li>
          <li><Link href="/knowledge/resume/" className="text-teal font-bold hover:underline">職務経歴書の書き方</Link></li>
          <li><Link href="/knowledge/shigoto-yasumitai/" className="text-teal font-bold hover:underline">仕事を休みたいときに使える制度</Link></li>
          <li><Link href="/knowledge/nenshu-500man-josei/" className="text-teal font-bold hover:underline">年収500万円を超える女性の割合</Link></li>
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
