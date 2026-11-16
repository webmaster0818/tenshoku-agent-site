import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/dai2-shinsotsu-itsumade/" },
  title: "第二新卒はいつまで？卒業後3年以内が目安・大卒なら25歳前後【厚労省の指針・離職率統計】",
  description:
    "第二新卒がいつまでを指すかを、厚生労働省の青少年雇用機会確保指針と「新規学卒就職者の離職状況」で確認しました。法令上の定義はなく、指針が新卒枠への応募を求める「卒業後少なくとも3年間」が目安です。大学卒の3年以内離職率は33.8%（令和4年3月卒）です。学歴別の年齢の目安も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "第二新卒はいつまで？卒業後3年以内が目安【厚労省の指針・離職率統計】",
    description: "厚生労働省の指針と統計から、第二新卒の期間の目安と卒業後3年以内の離職の実態を確認しています。",
  },
};

const CHECKED = "2026年11月16日";

const faq = [
  {
    q: "第二新卒は何年目までですか？",
    a: "第二新卒には法令上の定義はなく、企業や転職サービスによって使い方が異なります。目安になるのは、厚生労働省の青少年雇用機会確保指針が、新卒採用枠に「卒業後少なくとも三年間は応募できるものとすること」としている点です。当サイトでは、学校を卒業してからおおむね3年以内を第二新卒の目安としています。",
  },
  {
    q: "第二新卒は何歳までですか？",
    a: "卒業後3年以内を目安とすると、浪人や留年がない場合、大学卒は25歳前後、高校卒は21歳前後、大学院（修士）卒は27歳前後までにあたります（当サイト計算）。年齢ではなく卒業からの年数で考えるため、浪人・留年・大学院進学の有無によって変わります。",
  },
  {
    q: "卒業後3年以内に辞める人はどのくらいいますか？",
    a: "厚生労働省「新規学卒就職者の離職状況（令和4年3月卒業者）」では、就職後3年以内の離職率は大学卒33.8%、短大等卒44.5%、高校卒37.9%、中学卒54.1%です。大学卒では就職した人のおよそ3人に1人が3年以内に離職しています。",
  },
  {
    q: "既卒3年以内なら新卒枠で応募できますか？",
    a: "青少年雇用機会確保指針は、学校等の卒業者も新卒採用枠に応募できる募集条件を設定し、卒業後少なくとも3年間は応募できるようにすることを事業主に求めています。ただし指針は事業主が適切に対処するための指針で、すべての企業が既卒者を新卒枠で受け付けているわけではありません。応募する企業の募集要項でご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "厚生労働省 青少年雇用機会確保指針（平成27年厚生労働省告示第406号・最終改正 令和8年厚生労働省告示第53号）第二の三(一)", url: "https://www.mhlw.go.jp/web/t_doc?dataId=00009730&dataType=0&pageNo=1" },
  { label: "厚生労働省「新規学卒就職者の離職状況（令和4年3月卒業者）を公表します」（令和7年10月24日）", url: "https://www.mhlw.go.jp/stf/houdou/0000177553_00010.html" },
  { label: "同 別紙1 学歴別就職後3年以内離職率の推移", url: "https://www.mhlw.go.jp/content/11805001/001318971.pdf" },
  { label: "同 別紙3 新規大卒就職者の離職状況", url: "https://www.mhlw.go.jp/content/11805001/001318973.pdf" },
];

const ages = [
  { e: "高校卒", grad: "18歳", until: "21歳前後" },
  { e: "短大・専門学校卒（2年制）", grad: "20歳", until: "23歳前後" },
  { e: "大学卒", grad: "22歳", until: "25歳前後" },
  { e: "大学院（修士）卒", grad: "24歳", until: "27歳前後" },
];

const rates = [
  { e: "中学卒", y1: "32.9%", y2: "13.0%", y3: "8.1%", t: "54.1%" },
  { e: "高校卒", y1: "17.9%", y2: "11.5%", y3: "8.5%", t: "37.9%" },
  { e: "短大等卒", y1: "19.3%", y2: "13.7%", y3: "11.5%", t: "44.5%" },
  { e: "大学卒", y1: "12.1%", y2: "11.9%", y3: "9.9%", t: "33.8%" },
];

const bySize = [
  { s: "5人未満", v: "57.5%" },
  { s: "5〜29人", v: "52.0%" },
  { s: "30〜99人", v: "41.9%" },
  { s: "100〜499人", v: "33.9%" },
  { s: "500〜999人", v: "31.5%" },
  { s: "1,000人以上", v: "27.0%" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "第二新卒はいつまで" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            第二新卒はいつまで？卒業後3年以内が目安・大卒なら25歳前後【厚労省の指針・離職率統計】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "3年", l: "指針が新卒枠への応募を求める卒業後の期間" },
              { v: "25歳前後", l: "大学卒の場合の卒業後3年の年齢" },
              { v: "33.8%", l: "大学卒の就職後3年以内の離職率" },
              { v: "12.1%", l: "大学卒の1年目の離職率" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            第二新卒には法令上の定義はありません。目安になるのは、厚生労働省の青少年雇用機会確保指針が新卒採用枠について
            <strong>「卒業後少なくとも三年間は応募できるものとすること」</strong>としている点で、当サイトでは<strong>卒業後おおむね3年以内</strong>を第二新卒の目安としています。
            浪人・留年がない大学卒であれば25歳前後までにあたります。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            厚生労働省の統計では、令和4年3月に大学を卒業して就職した人の33.8%が3年以内に離職しています。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省の告示・公表資料（{CHECKED}に当サイトで確認）。年齢の目安は当サイトで計算しています。</p>
        </div>

        <h2>「卒業後3年」が目安になる理由</h2>
        <p>
          青少年雇用機会確保指針（平成27年厚生労働省告示第406号）は、事業主が青少年の募集・採用にあたって講ずべき措置として、次のように定めています（第二の三(一)）。
        </p>
        <blockquote className="border-l-4 border-teal pl-4 text-sm text-text-secondary my-4">
          学校等の卒業者についても、学校等の新規卒業予定者の採用枠に応募できるような募集条件を設定すること。当該条件の設定に当たっては、学校等の卒業者が卒業後少なくとも三年間は応募できるものとすること。
        </blockquote>
        <p className="mb-4">
          同じ項では、新規卒業予定者を募集する際に、できる限り年齢の上限を設けないようにすることも求めています。指針は「第二新卒」という言葉を使っていませんが、卒業後3年以内の人を新卒と同じ枠で扱う考え方が示されており、
          第二新卒の範囲を「卒業後3年以内」とする目安の根拠になっています。
        </p>
        <p className="mb-10">
          なお、この指針は事業主等が適切に対処するための指針で、既卒者の応募を受け付けるかどうかは企業ごとに異なります。卒業後3年を超えると第二新卒として応募できなくなる、という決まりもありません。
        </p>

        <h2>学歴別の年齢の目安</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">最終学歴</th>
                <th className="p-3 text-right">卒業時の年齢</th>
                <th className="p-3 text-right rounded-tr-lg">卒業後3年の年齢（目安）</th>
              </tr>
            </thead>
            <tbody>
              {ages.map((x) => (
                <tr key={x.e} className={`border-b border-gray-100 ${x.e === "大学卒" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.e}</td>
                  <td className="p-3 text-right">{x.grad}</td>
                  <td className="p-3 text-right">{x.until}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※当サイト計算。浪人・留年・休学がなく、3月に卒業した場合の満年齢です。誕生日によって1歳前後します。
        </p>

        <h2>卒業後3年以内の離職率（厚労省）</h2>
        <p>
          厚生労働省「新規学卒就職者の離職状況」は、新規学卒就職者が就職後3年以内に離職した割合を学歴別に集計しています。最新の令和4年3月卒業者の結果は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">学歴</th>
                <th className="p-3 text-right">1年目</th>
                <th className="p-3 text-right">2年目</th>
                <th className="p-3 text-right">3年目</th>
                <th className="p-3 text-right rounded-tr-lg">3年以内の合計</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((x) => (
                <tr key={x.e} className={`border-b border-gray-100 ${x.e === "大学卒" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.e}</td>
                  <td className="p-3 text-right">{x.y1}</td>
                  <td className="p-3 text-right">{x.y2}</td>
                  <td className="p-3 text-right">{x.y3}</td>
                  <td className="p-3 text-right">{x.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「新規学卒就職者の離職状況（令和4年3月卒業者）」別紙3の学歴別離職率のグラフの値。1〜3年目の値の合計は、四捨五入の関係で合計欄と一致しない場合があります。
        </p>
        <p className="mb-4">大学卒の3年以内離職率は、就職した事業所の規模によって大きく異なります。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">事業所規模</th>
                <th className="p-3 text-right rounded-tr-lg">大学卒の3年以内離職率</th>
              </tr>
            </thead>
            <tbody>
              {bySize.map((x) => (
                <tr key={x.s} className="border-b border-gray-100">
                  <td className="p-3">{x.s}</td>
                  <td className="p-3 text-right">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※厚生労働省「新規学卒就職者の離職状況（令和4年3月卒業者）」（令和7年10月24日公表）。</p>
        <p className="mb-10">
          大学卒では、1年目に12.1%、2年目に11.9%、3年目に9.9%が離職しており、1年目と2年目の離職はほぼ同じ水準です。従業員1,000人以上の事業所では27.0%、5人未満では57.5%で、規模が小さいほど3年以内の離職率が高くなっています。
        </p>

        <h2>第二新卒で転職する際の確認点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "募集要項の「既卒可」「卒業後○年以内」を確認する", d: "新卒採用枠で既卒者を受け付けるかどうか、受け付ける場合の期間は企業ごとに異なります。指針は少なくとも3年間を求めていますが、実際の条件は募集要項で確認する必要があります。" },
            { t: "新卒枠と中途枠のどちらで応募するかを決める", d: "新卒枠は入社時期が4月とされている場合があり、中途枠は入社時期を相談できる場合があります。在職中かどうか、入社時期の希望に合わせて応募する枠を選ぶことをおすすめします。" },
            { t: "前職を短期間で辞めた理由を整理する", d: "卒業後3年以内の転職では、前職を辞めた理由と次の職場で実現したいことを、面接で一貫して説明できるように準備することが大切です。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          第二新卒の求人を扱う転職エージェントは<Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒におすすめの転職エージェント</Link>、
          25歳前後の年収の水準は<Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link>にまとめています。
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
          <li><Link href="/type/second-new-grad/" className="text-teal font-bold hover:underline">第二新卒におすすめの転職エージェント</Link></li>
          <li><Link href="/age/20s/" className="text-teal font-bold hover:underline">20代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/salary-25sai/" className="text-teal font-bold hover:underline">25歳の平均年収</Link></li>
          <li><Link href="/knowledge/job-history/" className="text-teal font-bold hover:underline">転職回数と職歴の見られ方</Link></li>
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
