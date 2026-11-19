import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/30dai-josei-tenshoku/" },
  title: "30代女性の転職【令和6年 雇用動向調査】前職を辞めた理由・転職後の賃金の変化を公的統計で確認",
  description:
    "30代女性の転職を、厚生労働省「令和6年 雇用動向調査」の転職入職者のデータで確認しました。30〜34歳の女性が前職を辞めた理由は「労働時間、休日等の労働条件が悪かった」13.3%、「職場の人間関係が好ましくなかった」11.8%などです。30代の転職で賃金が増えた人の割合、入社1年未満の育児休業の扱いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "30代女性の転職【令和6年 雇用動向調査】前職を辞めた理由・転職後の賃金の変化",
    description: "厚生労働省の雇用動向調査から、30代女性の転職理由と転職後の賃金の変化を確認しています。",
  },
};

const CHECKED = "2026年11月19日";
const GAIKYO = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/dl/kekka_gaiyo-03.pdf";
const IKUJI = "https://www.mhlw.go.jp/content/11900000/001403414.pdf";

// 厚生労働省「令和6年 雇用動向調査結果の概況」表5 転職入職者が前職を辞めた理由別割合（%）
// 前職雇用者で調査時在籍者（一般労働者・パートタイム労働者の計）
const REASONS = [
  "仕事の内容に興味を持てなかった",
  "能力・個性・資格を生かせなかった",
  "職場の人間関係が好ましくなかった",
  "会社の将来が不安だった",
  "給料等収入が少なかった",
  "労働時間、休日等の労働条件が悪かった",
  "結婚",
  "出産・育児",
  "介護・看護",
  "その他の個人的理由",
  "定年・契約期間の満了",
  "会社都合",
  "その他の理由（出向等を含む）",
];
const F30 = [4.1, 3.8, 11.8, 6.4, 7.6, 13.3, 2.8, 3.4, 0.5, 25.9, 5.4, 4.6, 10.2];
const F35 = [3.7, 4.9, 12.7, 5.0, 7.7, 15.0, 2.9, 4.0, 1.8, 16.6, 7.9, 8.9, 8.7];
const M30 = [5.7, 3.6, 9.6, 14.9, 11.7, 10.9, 0.9, 1.5, 0.6, 22.6, 4.2, 2.7, 10.2];
const M35 = [3.8, 7.9, 8.7, 10.5, 11.8, 13.5, 0.3, 2.5, 0.3, 15.6, 3.5, 4.5, 12.8];

// 同 表6 転職入職者の賃金変動状況別割合（男女計・%）
const WAGE = [
  { k: "30〜34歳", up: 46.1, up10: 36.0, same: 29.1, down: 24.2, down10: 16.3 },
  { k: "35〜39歳", up: 45.5, up10: 35.3, same: 28.0, down: 24.3, down10: 16.3 },
  { k: "全年齢（計）", up: 40.5, up10: 29.4, same: 28.4, down: 29.4, down10: 21.7 },
];

const faq = [
  {
    q: "30代女性が転職する理由で多いものは何ですか？",
    a: "厚生労働省「令和6年 雇用動向調査」で転職入職者が前職を辞めた理由を見ると、30〜34歳の女性は「その他の個人的理由」25.9%を除くと「労働時間、休日等の労働条件が悪かった」13.3%、「職場の人間関係が好ましくなかった」11.8%の順です。35〜39歳の女性も同じ2つが15.0%・12.7%で上位です。",
  },
  {
    q: "30代で転職すると給料は上がりますか？",
    a: "同調査では、30〜34歳の転職入職者のうち前職より賃金が「増加」した人は46.1%、「減少」した人は24.2%です（男女計）。35〜39歳も「増加」45.5%・「減少」24.3%で、全年齢の計（増加40.5%・減少29.4%）より増加した人の割合が高くなっています。男女別の賃金変動は概況に掲載されていません。",
  },
  {
    q: "転職してすぐに育児休業は取れますか？",
    a: "育児・介護休業法 第6条では、労使協定で「当該事業主に引き続き雇用された期間が一年に満たない労働者」を育児休業の対象から除くことができると定めています。協定があるかどうかは会社によって異なるため、入社後1年以内に育児休業を取る可能性がある場合は、内定前に就業規則や労使協定の内容を確認してください。",
  },
  {
    q: "30代女性の転職で男性と違う点はありますか？",
    a: "30〜34歳で比べると、男性は「会社の将来が不安だった」が14.9%と女性（6.4%）の2倍以上、「給料等収入が少なかった」も11.7%と女性（7.6%）より高くなっています。女性は「職場の人間関係が好ましくなかった」「出産・育児」「結婚」の割合が男性より高くなっています（令和6年 雇用動向調査 表5）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和6年 雇用動向調査結果の概況」3 転職入職者の状況（表5 前職を辞めた理由別割合・表6 賃金変動状況別割合）", url: GAIKYO },
  { label: "厚生労働省「令和6年 雇用動向調査結果の概況」目次", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/index.html" },
  { label: "厚生労働省 育児休業、介護休業等育児又は家族介護を行う労働者の福祉に関する法律（令和7年10月1日施行の全文）第6条", url: IKUJI },
];

const th = "p-3 text-right";
const order = REASONS.map((_, i) => i).filter((i) => i !== 9).sort((a, b) => F30[b] - F30[a]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "30代女性の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            30代女性の転職【令和6年 雇用動向調査】前職を辞めた理由・転職後の賃金の変化
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "13.3%", l: "労働条件を理由に辞めた30〜34歳女性" },
              { v: "11.8%", l: "人間関係を理由に辞めた30〜34歳女性" },
              { v: "46.1%", l: "転職で賃金が増えた30〜34歳（男女計）" },
              { v: "1年", l: "労使協定で育休の対象外にできる勤続期間" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            厚生労働省「令和6年 雇用動向調査」によると、30〜34歳の女性が前職を辞めた理由は、「その他の個人的理由」を除くと
            <strong>「労働時間、休日等の労働条件が悪かった」13.3%、「職場の人間関係が好ましくなかった」11.8%</strong>が上位です。
            30代前半で転職した人のうち、前職より賃金が増えた人は46.1%で、減った人（24.2%）を上回っています（男女計）。
          </p>
          <p className="text-xs text-text-muted mt-3">
            数値はいずれも厚生労働省の公表資料から転記しています（{CHECKED}確認）。雇用動向調査は、常用労働者5人以上の事業所を対象に令和6年1年間の入職・離職を調べた統計です。
          </p>
        </div>

        <h2>30代女性が前職を辞めた理由</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">前職を辞めた理由</th>
                <th className={th}>女性 30〜34歳</th>
                <th className={th}>女性 35〜39歳</th>
                <th className={th}>男性 30〜34歳</th>
                <th className="p-3 text-right rounded-tr-lg">男性 35〜39歳</th>
              </tr>
            </thead>
            <tbody>
              {order.map((i) => (
                <tr key={REASONS[i]} className="border-b border-gray-100">
                  <td className="p-3">{REASONS[i]}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{F30[i].toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{F35[i].toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{M30[i].toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{M35[i].toFixed(1)}%</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 text-text-muted">
                <td className="p-3">その他の個人的理由</td>
                <td className="p-3 text-right whitespace-nowrap">{F30[9].toFixed(1)}%</td>
                <td className="p-3 text-right whitespace-nowrap">{F35[9].toFixed(1)}%</td>
                <td className="p-3 text-right whitespace-nowrap">{M30[9].toFixed(1)}%</td>
                <td className="p-3 text-right whitespace-nowrap">{M35[9].toFixed(1)}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和6年 雇用動向調査結果の概況」表5。転職入職者のうち前職が雇用者で調査時に在籍している人が対象で、一般労働者とパートタイム労働者を合わせた割合です。理由不詳を含むため、合計は100%になりません。並び順は女性30〜34歳の割合が高い順です。
        </p>
        <p className="mb-4">
          30代の女性は、前半・後半とも「労働時間、休日等の労働条件」と「職場の人間関係」が上位2つです。35〜39歳では労働条件を理由とする人が15.0%に増え、「会社都合」も8.9%と30代前半（4.6%）より高くなります。
        </p>
        <p className="mb-10">
          同じ年代の男性と比べると、30〜34歳の男性は「会社の将来が不安だった」14.9%、「給料等収入が少なかった」11.7%が上位で、女性とは理由の構成が異なります。
          「出産・育児」は女性30〜34歳で3.4%、35〜39歳で4.0%です。統計上は「その他の個人的理由」が最も多く、上の選択肢だけでは転職理由を説明しきれない点にも留意が必要です。
        </p>

        <h2>30代で転職した人の賃金の変化</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={th}>増加</th>
                <th className={th}>うち1割以上の増加</th>
                <th className={th}>変わらない</th>
                <th className={th}>減少</th>
                <th className="p-3 text-right rounded-tr-lg">うち1割以上の減少</th>
              </tr>
            </thead>
            <tbody>
              {WAGE.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.up.toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.up10.toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.same.toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.down.toFixed(1)}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.down10.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和6年 雇用動向調査結果の概況」表6（男女計）。概況には年齢階級別・男女別の賃金変動の表は掲載されていないため、男女計の値を掲載しています。
        </p>
        <p className="mb-10">
          30代前半・後半とも、転職で賃金が増えた人は4割台半ばで、全年齢の計（40.5%）を上回ります。一方で、1割以上減った人も16.3%います。
          転職で賃金が下がる理由はこの統計からは分かりませんが、労働時間や働き方を優先して転職する場合は、提示年収が前職を下回ることがある点を想定しておくとよいでしょう。
          同年代の年収の水準は<Link href="/knowledge/salary-30sai/" className="text-teal font-bold hover:underline">30歳の平均年収</Link>（国税庁 民間給与実態統計調査の男女別）にまとめています。
        </p>

        <h2>転職前に確認したい育児休業の勤続要件</h2>
        <p>
          育児・介護休業法 第6条第1項では、事業主は労働者からの育児休業の申出を拒めないとする一方、労使協定で定めた場合は
          「当該事業主に引き続き雇用された期間が一年に満たない労働者」からの申出を拒むことができるとしています（
          <a href={IKUJI} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">育児・介護休業法 全文</a>：{CHECKED}確認）。
        </p>
        <p className="mb-10">
          つまり、転職先にこの労使協定がある場合、入社から1年未満の時期は育児休業を取れない可能性があります。労使協定の有無は会社ごとに異なり、求人票には書かれていないことが多いため、面接や内定後の条件確認の場で人事担当者に確認してください。
          転職エージェントを利用する場合は、担当者を通じて確認を依頼することもできます。
        </p>

        <h2>30代女性の転職で使える当サイトのページ</h2>
        <ul className="mb-10">
          <li><Link href="/type/women/" className="text-teal font-bold hover:underline">女性におすすめの転職エージェント</Link>：女性向けのサービスを公式データで比較</li>
          <li><Link href="/age/30s/" className="text-teal font-bold hover:underline">30代におすすめの転職エージェント</Link>：30代向けのサービスの比較</li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日</Link>：休日数を条件に求人を比べるときの目安</li>
          <li><Link href="/knowledge/tedori-gesshu-30man/" className="text-teal font-bold hover:underline">手取り30万円の額面</Link>：転職先の提示月給から手取りを逆算するときの目安</li>
          <li><Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal font-bold hover:underline">平均年収1000万円を超える職業</Link>：職種別の年収（賃金構造基本統計調査）</li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link>：労働時間の水準を確認するときの統計</li>
        </ul>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

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
