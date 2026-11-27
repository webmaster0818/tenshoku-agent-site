import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/4shu6kyu/" },
  title: "4週6休とは？年間休日は約78日・週40時間との関係と年間休日の分布【労働基準法・令和7年就労条件総合調査】",
  description:
    "4週6休の年間休日は約78日です（当サイト試算）。労働基準法の休日の最低限（4週4日）は満たしますが、1日8時間なら4週で176時間となり週40時間を超えます。年間休日79日以下の企業は2.9%です。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "4週6休とは？年間休日は約78日・週40時間との関係【労働基準法・就労条件総合調査】",
    description: "4週6休の年間休日・労働時間を労働基準法の条文と厚生労働省の調査で確認しています。",
  },
};

const CHECKED = "2026年11月28日";
const LSA = "https://laws.e-gov.go.jp/law/322AC0000000049";
const LSA_RULE = "https://laws.e-gov.go.jp/law/322M40000100023";
const SYURO = "https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaikyou.pdf";

// 4週N休の年間休日・4週の労働日数・1日8時間の場合の4週の労働時間（当サイト計算）
const PLANS = [4, 6, 8].map((n) => {
  const days = Math.round((365 / 28) * n * 10) / 10;
  const work = 28 - n;
  return { n, days, work, hours: work * 8, over: Math.max(0, work * 8 - 160), perDay: 160 / work };
});
const hm = (h: number) => `${Math.floor(h)}時間${Math.floor((h - Math.floor(h)) * 60)}分`;

const DIST = [
  ["69日以下", "1.1%"],
  ["70〜79日", "1.8%"],
  ["80〜89日", "3.0%"],
  ["90〜99日", "5.2%"],
  ["100〜109日", "27.9%"],
  ["110〜119日", "21.4%"],
  ["120〜129日", "37.3%"],
  ["130日以上", "2.0%"],
];

const faq = [
  {
    q: "4週6休の年間休日は何日ですか？",
    a: "1年を通じて4週6休の場合、365日÷28日×6日で約78日です（当サイト試算）。実際の日数は、年末年始や夏季休暇を別に設けているかどうかで変わるため、求人票の「年間休日」の欄で確認する必要があります。",
  },
  {
    q: "4週6休は違法ですか？",
    a: "休日の日数としては違法ではありません。労働基準法 第35条は休日を「毎週少くとも一回」、または「四週間を通じ四日以上」と定めており、4週6休はこの最低限を上回ります。ただし、1日8時間で働くと4週間の労働時間は176時間となり、週40時間（4週160時間）を超えるため、36協定の締結・届出と割増賃金の支払いが必要になります。",
  },
  {
    q: "4週6休と週休2日制の違いは何ですか？",
    a: "4週6休は4週間に6日の休日で、週休2日（4週8休）より4週間で2日少ない制度です。年間に換算すると約78日と約104日で、約26日の差があります（当サイト試算）。令和7年就労条件総合調査では、完全週休2日制の企業は65.5%、週休1日制または週休1日半制の企業は5.6%です。",
  },
  {
    q: "4週6休で1年単位の変形労働時間制は使えますか？",
    a: "1年を通じて4週6休のままでは、使えないと考えられます。労働基準法施行規則 第12条の4は、対象期間が3か月を超える1年単位の変形労働時間制の労働日数の上限を1年280日と定めています。4週6休の年間労働日数は約287日で、この上限を超えます（当サイト試算）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "e-Gov法令検索 労働基準法（第32条・第35条）", url: LSA },
  { label: "e-Gov法令検索 労働基準法施行規則（第12条の4）", url: LSA_RULE },
  { label: "厚生労働省「令和7年就労条件総合調査の概況」（第2表 週休制の形態別企業割合・第4表 年間休日総数）", url: SYURO },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "4週6休とは" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            4週6休とは？年間休日は約78日・週40時間との関係と年間休日の分布
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約78日", l: "4週6休の年間休日（当サイト試算）" },
              { v: "4週4日", l: "労働基準法の休日の最低限（第35条第2項）" },
              { v: "176時間", l: "1日8時間で4週6休の4週間の労働時間（当サイト計算）" },
              { v: "2.9%", l: "年間休日79日以下の企業の割合（令和7年調査）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>4週6休は、4週間（28日）のうち6日が休日の勤務形態で、1年を通じると年間休日は約78日です。</strong>
            労働基準法の休日の最低限（4週4日）は満たしますが、1日8時間で働くと4週間の労働時間は176時間となり、週40時間（4週160時間）を16時間超えます。
            厚生労働省の令和7年就労条件総合調査では、年間休日が79日以下の企業は2.9%で、少数の勤務形態です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            条文はe-Gov法令検索、統計は厚生労働省の公表資料で{CHECKED}に確認しました。日数・時間の計算は当サイトによるもので、個別の勤務形態が適法かどうかは労働基準監督署などの判断によります。
          </p>
        </div>

        <h2>4週6休・4週4休・4週8休の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">勤務形態</th>
                <th className="p-3 text-right">年間休日の目安</th>
                <th className="p-3 text-right">4週の労働日数</th>
                <th className="p-3 text-right">1日8時間の4週の労働時間</th>
                <th className="p-3 text-right rounded-tr-lg">週40時間に収まる1日の時間</th>
              </tr>
            </thead>
            <tbody>
              {PLANS.map((x) => (
                <tr key={x.n} className={`border-b border-gray-100 ${x.n === 6 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">4週{x.n}休{x.n === 4 ? "（法律の最低限）" : x.n === 8 ? "（週休2日相当）" : ""}</td>
                  <td className="p-3 text-right whitespace-nowrap">約{Math.round(x.days)}日</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.work}日</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.hours}時間{x.over > 0 ? `（${x.over}時間超過）` : ""}</td>
                  <td className="p-3 text-right whitespace-nowrap">{hm(x.perDay)}以内</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※年間休日は365日÷28日×休日数、4週の上限は週40時間×4週＝160時間で当サイトが計算。年末年始・夏季休暇などの特別休暇は含めていません。
        </p>
        <p className="mb-10">
          労働基準法 第32条は、労働時間を「一週間について四十時間」「一日について八時間」までと定めています。4週6休で週40時間に収めるには、1日の労働時間を約7時間16分以内にする必要があります。
          所定労働時間が8時間の求人で4週6休の場合は、4週間で16時間程度の時間外労働が前提になる計算です。時間外労働には36協定の締結・届出と、25%以上の割増賃金が必要です（
          <Link href="/knowledge/7renkin-ihou/" className={link}>7連勤は違法か</Link>で条文を整理しています）。
        </p>

        <h2>1年単位の変形労働時間制との関係</h2>
        <p className="mb-10">
          1年単位の変形労働時間制（第32条の4）では、対象期間が3か月を超える場合、労働日数の上限は1年280日、1日の上限は10時間、1週の上限は52時間、連続して労働させる日数は原則6日までです（労働基準法施行規則 第12条の4）。
          1年280日の労働日数は、年間休日に直すと85日（365日−280日）です。1年を通じて4週6休（年間休日約78日・労働日約287日）の場合はこの上限を超えるため、繁忙期だけ4週6休にして他の時期に休日を増やすなど、年間で調整する必要があります。
        </p>

        <h2>年間休日の分布（令和7年就労条件総合調査）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">1企業平均の年間休日総数</th>
                <th className="p-3 text-right rounded-tr-lg">企業の割合</th>
              </tr>
            </thead>
            <tbody>
              {DIST.map(([k, v]) => (
                <tr key={k} className={`border-b border-gray-100 ${k === "70〜79日" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※出典：{a(SYURO, "厚生労働省「令和7年就労条件総合調査の概況」第4表")}（2024年の年間休日総数）。</p>
        <p className="mb-4">
          同調査では、年間休日総数の平均は1企業あたり112.4日、労働者1人あたり116.6日です。4週6休にあたる70〜79日の企業は1.8%、79日以下の企業は合計2.9%です。
          企業規模別の平均は、1,000人以上が117.7日、30〜99人が111.2日で、規模が小さいほど少なくなります。
        </p>
        <p className="mb-10">
          週休制の形態では、完全週休2日制の企業が65.5%、何らかの週休2日制が92.6%、週休1日制または週休1日半制が5.6%です（第2表）。
          4週6休の求人を比べる際は、年間休日の合計（特別休暇を含むか）、1日の所定労働時間、固定残業代の有無を確認すると、ほかの求人との違いがわかりやすくなります。
          休日の多い職場を探す場合は、<Link href="/knowledge/annual-holidays-105/" className={link}>年間休日105日</Link>・<Link href="/knowledge/annual-holidays-120/" className={link}>年間休日120日</Link>の水準も参考になります。
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
          <li><Link href="/knowledge/7renkin-ihou/" className={link}>7連勤は違法か</Link></li>
          <li><Link href="/knowledge/annual-holidays-105/" className={link}>年間休日105日の水準</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className={link}>年間休日120日の水準</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className={link}>残業時間の平均</Link></li>
          <li><Link href="/knowledge/shigoto-yamedoki/" className={link}>仕事の辞めどき</Link></li>
          <li><Link href="/knowledge/bonus-sukunai/" className={link}>ボーナスが少ないと感じたときに確認すること</Link></li>
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
