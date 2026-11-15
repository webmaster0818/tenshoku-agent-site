import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/annual-holidays-105/" },
  title: "年間休日105日は少ない？1日8時間勤務で法律上ほぼ下限の日数・2026年の土日は104日【労働基準法・厚労省調査】",
  description:
    "年間休日105日の水準を、労働基準法の労働時間の上限と厚生労働省「令和7年 就労条件総合調査」で確認しました。1日8時間勤務では週40時間の上限からおおむね105日が下限の目安です。2026年の土日は104日、100〜109日の企業は27.9%です。120日との差や変形労働時間制の扱いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年間休日105日は少ない？法律上ほぼ下限の日数【労働基準法・厚労省調査】",
    description: "労働基準法と厚生労働省の調査、内閣府の祝日データから年間休日105日の水準を確認しています。",
  },
};

const CHECKED = "2026年11月15日";

const faq = [
  {
    q: "年間休日105日は違法ではありませんか？",
    a: "労働基準法は、労働時間を1週40時間・1日8時間以内（第32条）、休日を毎週少なくとも1回（第35条）と定めており、年間休日の日数そのものの下限は定めていません。1日8時間勤務の場合、週40時間に収めると年間の労働日はおおむね260日、休日は105日程度になるため、年間休日105日は1日8時間勤務での法律上ほぼ下限の日数です（当サイト計算）。1日の所定労働時間が8時間より短い会社や、変形労働時間制を採る会社では、105日より少なくても違法とは限りません。",
  },
  {
    q: "年間休日105日は土日休みと同じですか？",
    a: "内閣府の「国民の祝日」データから当サイトで数えると、2026年の土曜・日曜は104日です。年間休日105日は、土日休みに1日を加えた日数にあたり、平日にあたる祝日・休日（2026年は17日）や年末年始・夏季休暇の多くは出勤日になる計算です。",
  },
  {
    q: "年間休日105日の会社はどのくらいありますか？",
    a: "厚生労働省「令和7年 就労条件総合調査」では、令和6年の年間休日総数が100〜109日の企業は27.9%です。同調査の階級は10日刻みのため、105日ちょうどの企業の割合は公表されていません。109日以下の企業は合計で39.0%です（同調査 第4表の階級を当サイトで合算）。",
  },
  {
    q: "年間休日105日と120日では、どのくらい違いますか？",
    a: "差は年間15日です。1日8時間勤務の場合、年間の所定労働時間は105日の会社が2,080時間（260日×8時間）、120日の会社が1,960時間（245日×8時間）となり、120時間の差があります（当サイト計算）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Gov法令検索 労働基準法（第32条・第32条の4・第35条・第39条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "e-Gov法令検索 労働基準法施行規則（第12条の4 第3項：労働日数の限度）", url: "https://laws.e-gov.go.jp/law/322M40000100023" },
  { label: "厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaikyou.pdf" },
  { label: "内閣府「国民の祝日について」（昭和30年〜令和9年 国民の祝日 CSV）", url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" },
];

const hours = [
  { h: "8時間", work: "260日", off: "105日", note: "週40時間÷8時間＝週5日" },
  { h: "7時間45分", work: "269日", off: "96日", note: "週40時間÷7.75時間≒週5.16日" },
  { h: "7時間30分", work: "278日", off: "87日", note: "週40時間÷7.5時間≒週5.33日" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年間休日105日の水準" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年間休日105日は少ない？1日8時間勤務で法律上ほぼ下限の日数【労働基準法・厚労省調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "104日", l: "2026年の土曜・日曜の日数" },
              { v: "約105日", l: "1日8時間勤務で週40時間に収まる休日の目安" },
              { v: "27.9%", l: "年間休日100〜109日の企業" },
              { v: "112.4日", l: "1企業平均の年間休日" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            年間休日105日は、平均より少ない日数です。労働基準法の「1週40時間・1日8時間」の上限から計算すると、1日8時間勤務の会社では年間休日おおむね105日が下限の目安になり、
            <strong>105日は法律の範囲内でほぼ最も少ない水準</strong>にあたります。厚生労働省の調査では、1企業平均の年間休日は112.4日です。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            2026年の土日は104日のため、年間休日105日は「土日休み＋1日」にあたり、祝日や年末年始の多くが出勤日になる日数です。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：e-Gov法令検索・厚生労働省・内閣府の公表資料（{CHECKED}に当サイトで確認）。日数・時間の計算は当サイトで行っています。</p>
        </div>

        <h2>105日が「下限の目安」になる理由</h2>
        <p>
          労働基準法第32条は、休憩時間を除いて1週40時間、1日8時間を超えて労働させてはならないと定めています。1日8時間働く会社では週5日が上限となり、
          1年（365日÷7日≒52.14週）の労働日は52.14週×5日≒260.7日、休日は365日−260日＝105日となります（当サイト計算）。
        </p>
        <p>1日の所定労働時間が短い会社では、同じ週40時間の上限でも労働日を増やせるため、必要な休日は少なくなります。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">1日の所定労働時間</th>
                <th className="p-3 text-right">年間の労働日の上限（目安）</th>
                <th className="p-3 text-right">年間休日の下限（目安）</th>
                <th className="p-3 text-left rounded-tr-lg">計算</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((x) => (
                <tr key={x.h} className={`border-b border-gray-100 ${x.h === "8時間" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3 whitespace-nowrap">{x.h}</td>
                  <td className="p-3 text-right">{x.work}</td>
                  <td className="p-3 text-right">{x.off}</td>
                  <td className="p-3 text-xs">{x.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※当サイト計算。365日の年で、週40時間×52.14週＝2,085.7時間を1日の所定労働時間で割り、端数を切り捨てた日数を労働日の上限としました。週1回の法定休日（第35条）も満たす必要があります。
        </p>
        <p className="mb-10">
          なお、1年単位の変形労働時間制（第32条の4）を採る会社では、対象期間の平均で週40時間以内に収めれば、特定の時期に週40時間を超える働き方ができます。
          この場合の労働日数の限度は、対象期間が3か月を超えるときは1年あたり280日です（労働基準法施行規則 第12条の4 第3項）。年間休日が105日より少ない求人では、変形労働時間制の有無と1日の所定労働時間を確認すると、法律との関係が分かります。
        </p>

        <h2>年間休日105日の会社の割合（厚労省調査）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">99日以下</th>
                <th className="p-3 text-right">100〜109日</th>
                <th className="p-3 text-right">110日以上</th>
                <th className="p-3 text-right rounded-tr-lg">1企業平均</th>
              </tr>
            </thead>
            <tbody>
              {[
                { s: "全企業", a: "11.1%", b: "27.9%", c: "60.7%", d: "112.4日" },
                { s: "1,000人以上", a: "1.8%", b: "16.2%", c: "81.8%", d: "117.7日" },
                { s: "300〜999人", a: "4.2%", b: "21.7%", c: "73.3%", d: "116.2日" },
                { s: "100〜299人", a: "6.9%", b: "23.8%", c: "68.8%", d: "114.5日" },
                { s: "30〜99人", a: "13.3%", b: "30.2%", c: "56.2%", d: "111.2日" },
              ].map((x) => (
                <tr key={x.s} className={`border-b border-gray-100 ${x.s === "全企業" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3 whitespace-nowrap">{x.s}</td>
                  <td className="p-3 text-right">{x.a}</td>
                  <td className="p-3 text-right">{x.b}</td>
                  <td className="p-3 text-right">{x.c}</td>
                  <td className="p-3 text-right">{x.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表（令和6年1年間・常用労働者30人以上の民営企業）。「99日以下」と「110日以上」は同表の階級の割合を当サイトで合算した値です。「全企業」には年間休日総数が不明の企業を含みます。
        </p>
        <p className="mb-10">
          年間休日100〜109日の企業は全体の27.9%で、従業員30〜99人の企業では30.2%と、規模が小さい企業ほど多くなっています。105日ちょうどの割合は公表されていませんが、
          100〜109日の層は、週休2日でも祝日が出勤日になる会社や、隔週で土曜出勤がある会社などが含まれると考えられます。120日以上の企業の割合は
          <Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link>のページに掲載しています。
        </p>

        <h2>年間休日105日の働き方の目安</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "月あたりの休みは約8.75日", d: "105日÷12か月＝8.75日です（当サイト計算）。1か月の土日はおおむね8〜10日のため、土日以外の休みはほとんどなく、月によっては土曜日が出勤日になる場合もあります。" },
            { t: "祝日・年末年始・夏季休暇の扱いを確認する", d: "2026年は土日が104日、平日にあたる祝日・休日が17日です（内閣府の祝日データから当サイトで集計）。年間休日105日で年末年始や夏季休暇がある会社では、その分だけ土曜出勤日や祝日の出勤日が設けられている計算になります。" },
            { t: "有給休暇は年間休日とは別に付与される", d: "年次有給休暇は年間休日に含まれません。労働基準法第39条により、6か月継続勤務し全労働日の8割以上出勤した労働者には10日の年次有給休暇が付与されます。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          休日数や1日の所定労働時間は、転職エージェントを通じて応募前に確認できる場合があります。希望条件の伝え方は
          <Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">エージェントへの伝え方</Link>にまとめています。
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
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均（毎月勤労統計調査）</Link></li>
          <li><Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link></li>
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
