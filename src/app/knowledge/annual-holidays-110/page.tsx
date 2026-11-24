import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/annual-holidays-110/" },
  title: "年間休日110日は少ない？平均112.4日より2日少なく企業の39.0%が109日以下【厚労省調査・2026年】",
  description:
    "年間休日110日の水準を厚生労働省「令和7年 就労条件総合調査」と労働基準法で確認しました。1企業平均は112.4日で、109日以下の企業は39.0%です。2026年の土日104日との差、1日8時間勤務の年間労働時間、有給休暇の平均取得日数を加えた休みも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "年間休日110日は少ない？平均112.4日より2日少ない水準【厚労省調査】",
    description: "厚生労働省の調査と労働基準法、内閣府の祝日データから年間休日110日の水準を確認しています。",
  },
};

const CHECKED = "2026年11月21日";

const faq = [
  {
    q: "年間休日110日は少ないですか？",
    a: "厚生労働省「令和7年 就労条件総合調査」では、令和6年の1企業平均の年間休日は112.4日、労働者1人平均は116.6日です。年間休日110日は、企業平均より2.4日、労働者平均より6.6日少ない水準です。一方、年間休日109日以下の企業は39.0%あり（同調査 第4表の階級を当サイトで合算）、110日は少ない方から約4割の位置にあたります。",
  },
  {
    q: "年間休日110日は土日休みと同じですか？",
    a: "内閣府の「国民の祝日」データから当サイトで数えると、2026年の土曜・日曜は104日、平日にあたる祝日・休日は17日です。年間休日110日は土日休みに6日を加えた日数で、祝日の多くや年末年始・夏季休暇の一部が出勤日になる計算です。土日と平日の祝日をすべて休むと121日になります。",
  },
  {
    q: "年間休日110日で1日8時間勤務は違法ですか？",
    a: "労働基準法第32条の上限は1週40時間・1日8時間です。365日の年では週40時間×約52.14週＝約2,085.7時間が上限の目安となり、1日8時間勤務の場合は年間休日がおおむね105日以上必要です（当サイト計算）。年間休日110日・1日8時間勤務の年間労働時間は2,040時間で、この目安の範囲内です。",
  },
  {
    q: "年間休日110日と120日では、どのくらい違いますか？",
    a: "差は年間10日です。1日8時間勤務の場合、年間の所定労働時間は110日の会社が2,040時間（255日×8時間）、120日の会社が1,960時間（245日×8時間）となり、80時間の差があります（当サイト計算）。",
  },
  {
    q: "有給休暇を使うと、年間の休みは何日になりますか？",
    a: "年次有給休暇は年間休日に含まれません。同調査では、令和6年に労働者1人が取得した有給休暇は平均12.1日（付与日数は平均18.1日、取得率66.9%）です。年間休日110日の会社で平均どおり取得すると、年間の休みは約122日になります（当サイト計算）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "厚生労働省「令和7年 就労条件総合調査 結果の概況」第2表・第4表・第5表", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaikyou.pdf" },
  { label: "e-Gov法令検索 労働基準法（第32条・第35条・第39条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "内閣府「国民の祝日について」（昭和30年〜令和9年 国民の祝日 CSV）", url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" },
];

const dist = [
  { s: "全企業", a: "39.0%", b: "21.4%", c: "39.3%", d: "112.4日" },
  { s: "1,000人以上", a: "18.0%", b: "24.0%", c: "57.8%", d: "117.7日" },
  { s: "300〜999人", a: "25.9%", b: "22.2%", c: "51.1%", d: "116.2日" },
  { s: "100〜299人", a: "30.7%", b: "22.9%", c: "45.9%", d: "114.5日" },
  { s: "30〜99人", a: "43.5%", b: "20.8%", c: "35.4%", d: "111.2日" },
];

const compare = [
  { d: 105, work: 260, hours: "2,080時間", href: "/knowledge/annual-holidays-105/" },
  { d: 110, work: 255, hours: "2,040時間", href: "" },
  { d: 120, work: 245, hours: "1,960時間", href: "/knowledge/annual-holidays-120/" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "年間休日110日の水準" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            年間休日110日は少ない？平均112.4日より2日少なく企業の39.0%が109日以下【厚労省調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "112.4日", l: "1企業平均の年間休日（令和6年）" },
              { v: "39.0%", l: "年間休日109日以下の企業" },
              { v: "21.4%", l: "年間休日110〜119日の企業" },
              { v: "104日", l: "2026年の土曜・日曜の日数" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            年間休日110日は、<strong>平均よりやや少ない日数</strong>です。厚生労働省の調査では1企業平均の年間休日は112.4日で、110日はこれより2.4日少なくなります。
            ただし、年間休日109日以下の企業は全体の39.0%あり、110日の会社は少ない方から約4割の位置にあたります。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            2026年の土日は104日のため、年間休日110日は「土日休み＋6日」です。1日8時間勤務の場合、年間の所定労働時間は2,040時間で、労働基準法の週40時間の範囲に収まります。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省・e-Gov法令検索・内閣府の公表資料（{CHECKED}に当サイトで確認）。割合の合算と日数・時間の計算は当サイトで行っています。</p>
        </div>

        <h2>年間休日110日の会社の割合（企業規模別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">109日以下</th>
                <th className="p-3 text-right">110〜119日</th>
                <th className="p-3 text-right">120日以上</th>
                <th className="p-3 text-right rounded-tr-lg">1企業平均</th>
              </tr>
            </thead>
            <tbody>
              {dist.map((x) => (
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
          ※厚生労働省「令和7年 就労条件総合調査 結果の概況」第4表（令和6年1年間・常用労働者30人以上の民営企業）。「109日以下」は69日以下〜100〜109日の5階級、「120日以上」は120〜129日と130日以上の2階級を当サイトで合算した値です。「全企業」には年間休日総数が不明の企業を含みます。
        </p>
        <p className="mb-10">
          110〜119日の企業は全体の21.4%です。同調査の階級は10日刻みのため、110日ちょうどの企業の割合は公表されていません。
          企業規模別に見ると、従業員1,000人以上の企業では109日以下が18.0%にとどまる一方、30〜99人の企業では43.5%です。規模の大きい企業ほど年間休日が多い傾向があり、
          従業員1,000人以上の企業では1企業平均が117.7日です。大企業の求人と比べる場合、年間休日110日は少ない部類に入ります。
        </p>

        <h2>2026年のカレンダーで見る年間休日110日</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { l: "土曜・日曜", v: "104日" },
                { l: "平日にあたる祝日・休日", v: "17日" },
                { l: "土日＋平日の祝日・休日", v: "121日" },
                { l: "年間休日110日との差", v: "11日（祝日・休日のうち11日が出勤日になる計算）" },
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
          年間休日110日の会社で土日をすべて休む場合、土日以外の休みは6日です。年末年始（例：3日）と夏季休暇（例：3日）を設けると、平日の祝日はほぼすべて出勤日になります。
          反対に、平日の祝日・休日17日をすべて休みにする場合は、土曜・日曜のうち11日が出勤日になる計算です（当サイト計算）。
          厚生労働省の同調査では、完全週休2日制の企業は65.5%、隔週や月2回などの「完全週休2日制より休日日数が実質的に少ない制度」の企業は27.1%です（第2表）。
          求人票の「週休2日制」は毎週2日の休みを意味しないため、年間休日110日の内訳とあわせて「完全週休2日制」かどうかを確認すると、休みの取り方が分かります。
        </p>

        <h2>105日・110日・120日の年間労働時間の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年間休日</th>
                <th className="p-3 text-right">年間の労働日</th>
                <th className="p-3 text-right">1日8時間の年間労働時間</th>
                <th className="p-3 text-right rounded-tr-lg">1か月あたりの休み</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((x) => (
                <tr key={x.d} className={`border-b border-gray-100 ${x.d === 110 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">
                    {x.href ? <Link href={x.href} className="text-teal hover:underline">{x.d}日</Link> : `${x.d}日`}
                  </td>
                  <td className="p-3 text-right">{x.work}日</td>
                  <td className="p-3 text-right">{x.hours}</td>
                  <td className="p-3 text-right">約{(x.d / 12).toFixed(1)}日</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※365日の年で当サイト計算。所定労働時間のみで、残業時間は含みません。</p>
        <p className="mb-10">
          年間休日110日の会社は、105日の会社より年40時間、120日の会社より年80時間所定労働時間が変わります。1日8時間勤務で週40時間に収めるには年間休日がおおむね105日以上必要なため（労働基準法第32条から当サイト計算）、
          110日は法律上の目安を5日上回る日数です。1日の所定労働時間が7時間45分の会社では、同じ110日でも年間の所定労働時間は1,976.25時間となり、120日・8時間勤務の会社に近くなります。
          年間休日を比べるときは、1日の所定労働時間もあわせて確認すると実際の働く時間を比べやすくなります。
        </p>

        <h2>有給休暇を加えた年間の休み</h2>
        <p className="mb-4">
          年次有給休暇は年間休日とは別に付与されます。労働基準法第39条により、6か月継続勤務し全労働日の8割以上出勤した労働者には10日の有給休暇が付与されます。
          厚生労働省の同調査（第5表）では、令和6年に企業が付与した有給休暇は労働者1人平均18.1日、取得日数は12.1日、取得率は66.9%で、取得率は昭和59年以降で最も高い水準です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年間休日</th>
                <th className="p-3 text-right">有給休暇の平均取得日数</th>
                <th className="p-3 text-right rounded-tr-lg">合計の休み（目安）</th>
              </tr>
            </thead>
            <tbody>
              {[105, 110, 120].map((d) => (
                <tr key={d} className={`border-b border-gray-100 ${d === 110 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{d}日</td>
                  <td className="p-3 text-right">12.1日</td>
                  <td className="p-3 text-right">約{Math.round((d + 12.1) * 10) / 10}日</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          年間休日110日の会社で有給休暇を平均どおり取得すると、年間の休みは約122日です（当サイト計算）。有給休暇の取得率は業種による差が大きく、同調査では電気・ガス・熱供給・水道業が75.2%、宿泊業・飲食サービス業が50.7%です。
          休日数に加えて有給休暇の取得状況も、転職エージェントを通じて応募前に確認できる場合があります。希望条件の伝え方は
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
          <li><Link href="/knowledge/annual-holidays-105/" className="text-teal font-bold hover:underline">年間休日105日の水準</Link></li>
          <li><Link href="/knowledge/annual-holidays-115/" className="text-teal font-bold hover:underline">年間休日115日の水準</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日の水準</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均（毎月勤労統計調査）</Link></li>
          <li><Link href="/knowledge/tedori-750man/" className="text-teal font-bold hover:underline">年収750万円の手取り</Link></li>
          <li><Link href="/knowledge/shigoto-yasumitai/" className="text-teal font-bold hover:underline">仕事を休みたいときに使える制度</Link></li>
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
