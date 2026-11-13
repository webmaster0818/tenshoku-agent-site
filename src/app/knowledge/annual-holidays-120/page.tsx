import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/annual-holidays-120/" },
  title: "年間休日120日は多い？企業の39.3%が120日以上・2026年の土日祝は121日【厚労省調査】",
  description:
    "年間休日120日の水準を、厚生労働省「令和7年 就労条件総合調査」と内閣府の祝日データで確認しました。年間休日120日以上の企業は39.3%（1,000人以上は57.8%）、1企業平均は112.4日です。2026年・2027年の土日祝の日数、法定の最低ラインとの比較、求人票での確認点も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年間休日120日は多い？企業の39.3%が120日以上【厚労省調査】",
    description: "厚生労働省の調査と内閣府の祝日データから、年間休日120日の水準と土日祝の日数を確認しています。",
  },
};

const CHECKED = "2026年11月13日";

// 厚生労働省「令和7年 就労条件総合調査」第4表（令和6年1年間・企業割合%）
const dist = [
  { size: "全企業", d: [1.1, 1.8, 3.0, 5.2, 27.9, 21.4, 37.3, 2.0], avg: 112.4, worker: 116.6 },
  { size: "1,000人以上", d: [0, 0.6, 0.2, 1.0, 16.2, 24.0, 56.3, 1.5], avg: 117.7, worker: 118.9 },
  { size: "300〜999人", d: [0.1, 0.4, 0.3, 3.4, 21.7, 22.2, 49.7, 1.4], avg: 116.2, worker: 118.1 },
  { size: "100〜299人", d: [0.4, 1.2, 1.5, 3.8, 23.8, 22.9, 43.8, 2.1], avg: 114.5, worker: 115.8 },
  { size: "30〜99人", d: [1.4, 2.2, 3.8, 5.9, 30.2, 20.8, 33.3, 2.1], avg: 111.2, worker: 112.4 },
];
const over120 = (d: number[]) => (d[6] + d[7]).toFixed(1);

const faq = [
  {
    q: "年間休日120日は多いほうですか？",
    a: "厚生労働省「令和7年 就労条件総合調査」では、令和6年の年間休日総数が120日以上の企業は39.3%（120〜129日 37.3%、130日以上 2.0%）です。1企業平均は112.4日、労働者1人平均は116.6日のため、120日は平均を上回る水準です。",
  },
  {
    q: "年間休日120日は土日祝休みと同じですか？",
    a: "内閣府の「国民の祝日」データから当サイトで数えると、2026年の土曜・日曜は104日、平日にあたる祝日・休日は17日で、合計121日です。2027年は合計120日です。年間休日120日の会社は、土日祝がおおむね休みになる日数ですが、年末年始や夏季休暇を別に設ける場合は、祝日の一部が出勤日になることもあります。",
  },
  {
    q: "年間休日に有給休暇は含まれますか？",
    a: "含まれません。同調査の定義では、年間休日総数は就業規則などで労働義務がないとされた週休日と、祝日・年末年始・夏季休暇などの会社の休日の合計で、年次有給休暇は含みません。同調査では、労働者1人平均の有給休暇の取得日数は12.1日（令和6年）です。",
  },
  {
    q: "年間休日の最低ラインは何日ですか？",
    a: "労働基準法は、休日を毎週少なくとも1回（第35条）、労働時間を1週40時間・1日8時間以内（第32条）と定めています。1日8時間勤務の場合、週40時間に収めるには年間の労働日を約260日以内にする必要があり、休日はおおむね105日以上になります（当サイト計算：365日÷7日×5日≒260.7日）。所定労働時間が短い会社では、これより少ない休日でも法律の範囲内になる場合があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表・第5表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaikyou.pdf" },
  { label: "内閣府「国民の祝日について」（昭和30年〜令和9年 国民の祝日 CSV）", url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" },
  { label: "e-Gov法令検索 労働基準法（第32条・第35条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年間休日120日の水準" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年間休日120日は多い？企業の39.3%が120日以上【厚労省調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "39.3%", l: "年間休日120日以上の企業" },
              { v: "112.4日", l: "1企業平均の年間休日" },
              { v: "116.6日", l: "労働者1人平均の年間休日" },
              { v: "121日", l: "2026年の土日祝の日数" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            年間休日120日は、平均を上回る水準です。厚生労働省「令和7年 就労条件総合調査」によると、令和6年の年間休日総数は1企業平均112.4日、
            労働者1人平均116.6日で、<strong>120日以上の企業は39.3%</strong>です。従業員1,000人以上の企業に限ると57.8%が120日以上となります。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            また、内閣府の祝日データから数えると、2026年の土日と祝日・休日の合計は121日です。年間休日120日は、土日祝がおおむね休みになる日数にあたります。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省・内閣府の公表資料（{CHECKED}に当サイトで確認）。土日祝の日数は当サイトで集計しています。</p>
        </div>

        <h2>企業規模別の年間休日の分布</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">99日以下</th>
                <th className="p-3 text-right">100〜109日</th>
                <th className="p-3 text-right">110〜119日</th>
                <th className="p-3 text-right">120〜129日</th>
                <th className="p-3 text-right">130日以上</th>
                <th className="p-3 text-right">120日以上（計）</th>
                <th className="p-3 text-right rounded-tr-lg">1企業平均</th>
              </tr>
            </thead>
            <tbody>
              {dist.map((r) => (
                <tr key={r.size} className={`border-b border-gray-100 ${r.size === "全企業" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3 whitespace-nowrap">{r.size}</td>
                  <td className="p-3 text-right">{(r.d[0] + r.d[1] + r.d[2] + r.d[3]).toFixed(1)}%</td>
                  <td className="p-3 text-right">{r.d[4]}%</td>
                  <td className="p-3 text-right">{r.d[5]}%</td>
                  <td className="p-3 text-right">{r.d[6]}%</td>
                  <td className="p-3 text-right">{r.d[7]}%</td>
                  <td className="p-3 text-right font-bold">{over120(r.d)}%</td>
                  <td className="p-3 text-right">{r.avg}日</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表。常用労働者30人以上の民営企業が対象で、令和6年1年間に最も多くの労働者に適用される年間休日総数です。
          「99日以下」と「120日以上（計）」は、同表の階級の割合を当サイトで合算した値です。「全企業」には年間休日総数が不明の企業を含みます。
        </p>
        <p className="mb-10">
          企業規模が大きいほど年間休日は多く、120日以上の割合は30〜99人の企業で35.4%、1,000人以上の企業で57.8%です。
          一方、100〜109日の企業も全体の27.9%あり、週休2日でも祝日が出勤日となる会社や、隔週で土曜出勤がある会社がこの層に含まれると考えられます。
        </p>

        <h2>2026年・2027年の土日祝の日数</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年</th>
                <th className="p-3 text-right">土曜・日曜</th>
                <th className="p-3 text-right">平日の祝日・休日</th>
                <th className="p-3 text-right rounded-tr-lg">土日祝の合計</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">2026年</td><td className="p-3 text-right">104日</td><td className="p-3 text-right">17日</td><td className="p-3 text-right font-bold">121日</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">2027年</td><td className="p-3 text-right">104日</td><td className="p-3 text-right">16日</td><td className="p-3 text-right font-bold">120日</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※内閣府「国民の祝日」CSV（{CHECKED}取得）から当サイトで集計しました。2026年は祝日・休日18日のうち5月3日（憲法記念日）が日曜日のため、平日にあたるのは17日です。2027年は17日のうち1日が土日に重なり、平日は16日です。
        </p>
        <p className="mb-10">
          年間休日120日の会社で、年末年始（例：12月29日〜1月3日）や夏季休暇を別に休日としている場合は、その日数分、祝日の一部が出勤日になります。
          2026年の暦では、12月29日〜1月3日のうち平日にあたる日を加えると、土日祝と合わせて125日になります。求人票の「年間休日120日」と「完全週休2日制・土日祝休み」は同じ意味ではないため、両方の記載を確認することをおすすめします。
        </p>

        <h2>求人票で年間休日を確認するときのポイント</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "「週休2日制」と「完全週休2日制」を区別する", d: "同調査では、何らかの週休2日制を採用している企業は92.6%ですが、完全週休2日制は65.5%です。残りには、月3回・隔週・月2回・月1回の週休2日制など、完全週休2日制より休日が実質的に少ない制度が含まれます（同調査 第2表の注）。年間休日の日数とあわせて確認すると、実際の休みの取り方が分かります。" },
            { t: "有給休暇は年間休日に含まれない", d: "年間休日は会社が定める休日の合計で、年次有給休暇は含みません。厚生労働省の同調査では、令和6年の有給休暇の平均付与日数は18.1日、平均取得日数は12.1日（取得率66.9%）です。" },
            { t: "業界による違いを確認する", d: "同調査の有給休暇の取得率は、電気・ガス・熱供給・水道業の75.2%が最も高く、宿泊業・飲食サービス業の50.7%が最も低くなっています。休日数とあわせて、志望する業界の傾向も確認することをおすすめします。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          年間休日や残業時間などの条件は、転職エージェントを通じて応募前に確認できる場合があります。エージェントへの条件の伝え方は
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
          <li><Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link></li>
          <li><Link href="/knowledge/tedori-500man/" className="text-teal font-bold hover:underline">年収500万円の手取り</Link></li>
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
