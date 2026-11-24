import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/annual-holidays-115/" },
  title: "年間休日115日は平均並み？企業平均112.4日と労働者平均116.6日の間【厚労省調査・2026年】",
  description:
    "年間休日115日の水準を厚生労働省「令和7年 就労条件総合調査」で確認しました。1企業平均112.4日より2.6日多く、労働者1人平均116.6日より1.6日少ない日数です。2026年のカレンダーでの内訳と、1日の所定労働時間別の年間労働時間も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年間休日115日は平均並み？企業平均112.4日・労働者平均116.6日の間【厚労省調査】",
    description: "厚生労働省の調査と内閣府の祝日データから、年間休日115日の水準を確認しています。",
  },
};

const CHECKED = "2026年11月24日";

// 厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表（令和6年1年間・常用労働者30人以上の民営企業）
const dist = [
  { s: "全企業", low: 39.0, mid: 21.4, high: 39.3, avgCo: 112.4, avgW: 116.6 },
  { s: "1,000人以上", low: 18.0, mid: 24.0, high: 57.8, avgCo: 117.7, avgW: 118.9 },
  { s: "300〜999人", low: 25.9, mid: 22.2, high: 51.1, avgCo: 116.2, avgW: 118.1 },
  { s: "100〜299人", low: 30.7, mid: 22.9, high: 45.9, avgCo: 114.5, avgW: 115.8 },
  { s: "30〜99人", low: 43.5, mid: 20.8, high: 35.4, avgCo: 111.2, avgW: 112.4 },
];

// 1日の所定労働時間別の年間所定労働時間（365日の年・当サイト計算）
const DAYS = 115;
const WORK = 365 - DAYS;
const hours = [
  { h: "7時間30分", v: 7.5 },
  { h: "7時間45分", v: 7.75 },
  { h: "8時間", v: 8 },
].map((x) => ({ ...x, total: WORK * x.v }));
const fmtH = (v: number) => `${v.toLocaleString("ja-JP", { maximumFractionDigits: 2 })}時間`;

const faq = [
  {
    q: "年間休日115日は多いですか、少ないですか？",
    a: "厚生労働省「令和7年 就労条件総合調査」では、令和6年の1企業平均の年間休日は112.4日、労働者1人平均は116.6日です。年間休日115日は企業平均より2.6日多く、労働者平均より1.6日少ない、平均並みの水準です。",
  },
  {
    q: "年間休日115日の会社は全体のどのあたりですか？",
    a: "同調査 第4表では、年間休日109日以下の企業が39.0%、110〜119日が21.4%、120日以上が39.3%です（109日以下は5階級を当サイトで合算）。少ない順に企業を並べると、39.0%から60.4%までが110〜119日の階級にあたり、真ん中（50%）の企業はこの階級に入ります。同調査の階級は10日刻みのため、115日ちょうどの企業の割合は公表されていません。",
  },
  {
    q: "年間休日115日は土日祝休みですか？",
    a: "内閣府の「国民の祝日」データから当サイトで数えると、2026年の土曜・日曜は104日、平日にあたる祝日・休日は17日で、合計121日です。年間休日115日は、土日をすべて休む場合、平日の祝日・休日のうち11日が休み、6日が出勤日になる計算です。",
  },
  {
    q: "年間休日115日で1日8時間勤務の年間労働時間は？",
    a: `365日の年で労働日は${WORK}日となり、1日8時間勤務の年間所定労働時間は${fmtH(WORK * 8)}です（当サイト計算）。労働基準法第32条の週40時間から計算した年間の上限の目安（約2,085.7時間）を約86時間下回ります。`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表・第5表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaikyou.pdf" },
  { label: "e-Gov法令検索 労働基準法（第32条・第39条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "内閣府「国民の祝日について」（昭和30年〜令和9年 国民の祝日 CSV）", url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年間休日115日の水準" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年間休日115日は平均並み？企業平均112.4日と労働者平均116.6日の間【厚労省調査・2026年】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "112.4日", l: "1企業平均の年間休日（令和6年）" },
              { v: "116.6日", l: "労働者1人平均の年間休日（令和6年）" },
              { v: "21.4%", l: "年間休日110〜119日の企業" },
              { v: "11日", l: "2026年に土日以外で休める日数（115日の場合）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            年間休日115日は、<strong>平均並みの日数</strong>です。厚生労働省の調査では、1企業平均の年間休日は112.4日、労働者1人平均は116.6日で、115日はその間にあたります。
            企業を年間休日の少ない順に並べると、真ん中の企業は110〜119日の階級に入ります。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            2026年の土日は104日のため、年間休日115日は「土日休み＋11日」です。平日の祝日・休日は17日あるため、祝日のうち6日程度が出勤日になる計算です。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省・e-Gov法令検索・内閣府の公表資料（{CHECKED}に当サイトで確認）。割合の合算と日数・時間の計算は当サイトで行っています。</p>
        </div>

        <h2>企業平均と労働者平均の違い</h2>
        <p>
          同じ調査で「1企業平均」と「労働者1人平均」の2つの平均が公表されています。1企業平均は各企業の年間休日をそのまま平均した値、労働者1人平均は、その年間休日が適用される労働者の数で重み付けした値です（第4表の注）。
          労働者の多い大企業ほど年間休日が多いため、労働者1人平均のほうが4.2日多くなります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">1企業平均</th>
                <th className="p-3 text-right">労働者1人平均</th>
                <th className="p-3 text-right rounded-tr-lg">115日との差（1企業平均）</th>
              </tr>
            </thead>
            <tbody>
              {dist.map((x) => (
                <tr key={x.s} className={`border-b border-gray-100 ${x.s === "全企業" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3 whitespace-nowrap">{x.s}</td>
                  <td className="p-3 text-right">{x.avgCo}日</td>
                  <td className="p-3 text-right">{x.avgW}日</td>
                  <td className="p-3 text-right">{(DAYS - x.avgCo > 0 ? "+" : "") + (Math.round((DAYS - x.avgCo) * 10) / 10).toFixed(1)}日</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表（令和6年1年間・常用労働者30人以上の民営企業）。差は当サイト計算。</p>
        <p className="mb-10">
          年間休日115日は、従業員100〜299人の企業の平均（114.5日）とほぼ同じで、30〜99人の企業の平均（111.2日）より3.8日多く、1,000人以上の企業の平均（117.7日）より2.7日少ない日数です。
          求人を比べる際は、応募先の企業規模の平均と比べると、休日が多いか少ないかを判断しやすくなります。
        </p>

        <h2>年間休日の階級別の企業割合</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">109日以下</th>
                <th className="p-3 text-right">110〜119日</th>
                <th className="p-3 text-right rounded-tr-lg">120日以上</th>
              </tr>
            </thead>
            <tbody>
              {dist.map((x) => (
                <tr key={x.s} className={`border-b border-gray-100 ${x.s === "全企業" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3 whitespace-nowrap">{x.s}</td>
                  <td className="p-3 text-right">{x.low.toFixed(1)}%</td>
                  <td className="p-3 text-right">{x.mid.toFixed(1)}%</td>
                  <td className="p-3 text-right">{x.high.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同表。「109日以下」は69日以下〜100〜109日の5階級、「120日以上」は120〜129日と130日以上の2階級を当サイトで合算した値です。「全企業」には年間休日総数が不明の企業を含みます。
        </p>
        <p className="mb-10">
          全企業では、109日以下が39.0%、120日以上が39.3%とほぼ同じ割合で、110〜119日の企業は21.4%です。少ない順に並べると、39.0%から60.4%までの企業が110〜119日の階級に入るため、
          企業全体の真ん中はこの階級にあります（当サイト計算）。ただし、従業員1,000人以上の企業では120日以上が57.8%を占め、大企業の中では115日は少ない部類です。
        </p>

        <h2>2026年のカレンダーで見る年間休日115日</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { l: "土曜・日曜", v: "104日" },
                { l: "平日にあたる祝日・休日", v: "17日" },
                { l: "土日＋平日の祝日・休日", v: "121日" },
                { l: "年間休日115日で土日以外に休める日", v: "11日" },
                { l: "土日をすべて休む場合に出勤となる祝日・休日", v: "6日" },
              ].map((x) => (
                <tr key={x.l} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/2">{x.l}</th>
                  <td className="py-3 px-4 text-text-secondary">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※内閣府「国民の祝日」CSVから当サイトで集計（2026年1月1日〜12月31日）。振替休日・国民の休日を含みます。</p>
        <p className="mb-10">
          土日以外の11日の使い方は会社によって異なります。たとえば年末年始休暇と夏季休暇を設ける会社では、祝日の一部が出勤日になります。
          求人票に「年間休日115日」とある場合は、土日・祝日・年末年始・夏季休暇の内訳と、完全週休2日制かどうかを確認すると、実際の休みの取り方が分かります。
        </p>

        <h2>1日の所定労働時間別の年間労働時間</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">1日の所定労働時間</th>
                <th className="p-3 text-right">年間の労働日</th>
                <th className="p-3 text-right rounded-tr-lg">年間の所定労働時間</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((x) => (
                <tr key={x.h} className={`border-b border-gray-100 ${x.v === 8 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.h}</td>
                  <td className="p-3 text-right">{WORK}日</td>
                  <td className="p-3 text-right">{fmtH(x.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※年間休日115日・365日の年で当サイト計算。残業時間は含みません。</p>
        <p className="mb-10">
          1日7時間45分勤務の場合、年間休日115日の年間所定労働時間は{fmtH(WORK * 7.75)}です。これは年間休日120日・1日8時間勤務（1,960時間）より短くなります。
          年間休日の日数だけでなく、1日の所定労働時間もあわせて比べると、実際に働く時間の差が分かります。年間休日105日・110日・120日の水準は
          <Link href="/knowledge/annual-holidays-110/" className="text-teal font-bold hover:underline">年間休日110日</Link>・
          <Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日</Link>のページで比較しています。
          年次有給休暇は年間休日とは別に付与され、同調査では令和6年の労働者1人平均の取得日数は12.1日です（第5表）。平均どおり取得すると、年間の休みは約127日になります（当サイト計算）。
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
          <li><Link href="/knowledge/annual-holidays-105/" className="text-teal font-bold hover:underline">年間休日105日の水準</Link></li>
          <li><Link href="/knowledge/annual-holidays-110/" className="text-teal font-bold hover:underline">年間休日110日の水準</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均（毎月勤労統計調査）</Link></li>
          <li><Link href="/knowledge/agent-briefing/" className="text-teal font-bold hover:underline">エージェントへの希望条件の伝え方</Link></li>
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
