import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tenshoku-kowai/" },
  title: "転職が怖いときに確認すること｜転職後に賃金が増えた人40.5%・職業生活に満足54.7%【厚生労働省の統計】",
  description:
    "転職が怖いと感じる理由ごとに、厚生労働省の統計で転職した人の実際を確認しました。転職後に賃金が増加した人は40.5%、減少した人は29.4%です。転職者の54.7%が職業生活に満足し、不満は10.7%でした。年齢別の賃金の変化と項目別の満足度も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "転職が怖いときに確認すること｜転職した人の賃金・満足度を統計で確認",
    description: "雇用動向調査と転職者実態調査から、転職後の賃金の変化と満足度を確認しています。",
  },
};

const CHECKED = "2026年11月26日";
const DOUKOU = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/dl/kekka_gaiyo-03.pdf";
const TENSHOKU_R07 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-gaikyo.pdf";

// 厚生労働省「令和6年 雇用動向調査結果の概況」表6 転職入職者の賃金変動状況別割合（%）
const WAGE = [
  { k: "20〜24歳", up: 50.5, same: 31.5, down: 16.8 },
  { k: "25〜29歳", up: 46.3, same: 23.1, down: 29.2 },
  { k: "30〜34歳", up: 46.1, same: 29.1, down: 24.2 },
  { k: "35〜39歳", up: 45.5, same: 28.0, down: 24.3 },
  { k: "40〜44歳", up: 45.9, same: 23.7, down: 29.0 },
  { k: "45〜49歳", up: 46.4, same: 26.9, down: 23.8 },
  { k: "50〜54歳", up: 39.0, same: 31.7, down: 28.2 },
  { k: "55〜59歳", up: 27.4, same: 33.6, down: 36.6 },
  { k: "60〜64歳", up: 13.6, same: 24.2, down: 60.9 },
];
const WAGE_ALL = { up: 40.5, up10: 29.4, same: 28.4, down: 29.4, down10: 21.7 };

// 厚生労働省「令和7年 転職者実態調査の概況」表14 現在の勤め先での満足度（転職者計・%）
// sat＝「満足」又は「やや満足」、dis＝「不満」又は「やや不満」、di＝満足度D.I.（sat−dis・ポイント）
const SAT = [
  { k: "職業生活全体", sat: 54.7, dis: 10.7, di: 44.0 },
  { k: "仕事内容・職種", sat: 68.7, dis: 10.9, di: 57.8 },
  { k: "賃金", sat: 49.8, dis: 27.6, di: 22.2 },
  { k: "労働時間・休日・休暇", sat: 65.6, dis: 17.7, di: 47.9 },
  { k: "人間関係", sat: 62.1, dis: 13.4, di: 48.7 },
  { k: "通勤の便", sat: 70.0, dis: 12.0, di: 58.0 },
];

const faq = [
  {
    q: "転職すると給料は下がりますか？",
    a: "厚生労働省「令和6年 雇用動向調査」では、転職入職者のうち前職より賃金が「増加」した人は40.5%、「変わらない」は28.4%、「減少」は29.4%です。増加した人の割合が減少した人を11.1ポイント上回っています。ただし、55歳以上では減少した人の割合が増加した人を上回ります。",
  },
  {
    q: "転職して後悔する人は多いですか？",
    a: "「後悔」を直接尋ねた公的統計はありません。令和7年 転職者実態調査では、転職者の現在の職業生活全体について「満足」又は「やや満足」が54.7%、「不満」又は「やや不満」が10.7%です。今後について「今の職場で今後も働きたい」が55.1%、「機会があれば転職したい」が20.6%となっています。",
  },
  {
    q: "正社員から転職すると正社員でなくなることはありますか？",
    a: "令和7年 転職者実態調査では、直前の勤め先で正社員だった転職者のうち、現在も正社員である人は89.2%、正社員以外は9.8%です。直前が正社員以外だった人のうち47.9%は、転職後に正社員になっています。",
  },
  {
    q: "転職が怖いときは、まず何をすればよいですか？",
    a: "怖さの中身を「収入」「雇用形態」「職場になじめるか」などに分け、それぞれ統計や求人票で確かめられることから確認する方法をおすすめします。在職中に情報収集と応募を進めれば、内定が出るまで今の収入を保ったまま判断できます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和6年 雇用動向調査結果の概況」転職入職者の状況（表6・表7）", url: DOUKOU },
  { label: "厚生労働省「令和7（2025）年転職者実態調査の概況」（令和8年9月25日公表）表8・表10・表14・表15", url: TENSHOKU_R07 },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "転職が怖いとき" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職が怖いときに確認すること｜転職した人の賃金の変化と満足度を統計で確認
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: `${WAGE_ALL.up}%`, l: "転職後に賃金が増加した人（令和6年 雇用動向調査）" },
              { v: `${WAGE_ALL.down}%`, l: "転職後に賃金が減少した人（同）" },
              { v: "54.7%", l: "現在の職業生活に満足・やや満足（令和7年 転職者実態調査）" },
              { v: "89.2%", l: "正社員から転職して正社員を続けている人（同）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>転職した人のうち、賃金が増えた人は40.5%、減った人は29.4%です。</strong>
            厚生労働省の統計では、転職後に職業生活全体に満足している人は54.7%で、不満の人（10.7%）を大きく上回ります。
            一方で、55歳以上では賃金が減った人の方が多く、転職後も賃金に不満を持つ人は27.6%います。
            転職が怖いと感じるときは、怖さの中身を分けて、統計で確かめられることから確認すると判断しやすくなります。
          </p>
          <p className="text-xs text-text-muted mt-3">
            統計は{CHECKED}に厚生労働省の公表資料で確認しました。いずれも転職した人全体の集計で、個人の結果を保証するものではありません。
          </p>
        </div>

        <h2>転職が怖い理由別に、統計で確かめられること</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">怖いと感じること</th>
                <th className="p-3 text-left">統計で見た転職者の実際</th>
                <th className="p-3 text-left rounded-tr-lg">出典</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["給料が下がるのではないか", "賃金が増加40.5%・変わらない28.4%・減少29.4%。1割以上減った人は21.7%", "雇用動向調査 表6"],
                ["正社員でなくなるのではないか", "直前が正社員の人のうち、転職後も正社員が89.2%", "転職者実態調査 表8"],
                ["新しい職場になじめるか", "人間関係に満足・やや満足62.1%、不満・やや不満13.4%", "転職者実態調査 表14"],
                ["転職して後悔しないか", "職業生活全体に満足・やや満足54.7%、不満・やや不満10.7%", "転職者実態調査 表14"],
                ["また転職したくなるのではないか", "今の職場で今後も働きたい55.1%、機会があれば転職したい20.6%", "転職者実態調査 表15"],
              ].map(([k, v, s]) => (
                <tr key={k} className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-navy">{k}</td>
                  <td className="p-3">{v}</td>
                  <td className="p-3 text-xs whitespace-nowrap">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※雇用動向調査は令和6年1年間の転職入職者（前職が雇用者で調査時に在籍している人）、転職者実態調査は令和6年10月〜令和7年9月に採用された一般労働者の転職者（有効回答7,310人）が対象です。
        </p>

        <h2>年齢別：転職後に賃金が増えた人・減った人</h2>
        <p className="mb-4">
          賃金の変化は年齢によって大きく異なります。20〜54歳では、どの年齢階級でも賃金が「増加」した人の割合が「減少」した人を上回っています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className="p-3 text-right">増加</th>
                <th className="p-3 text-right">変わらない</th>
                <th className="p-3 text-right rounded-tr-lg">減少</th>
              </tr>
            </thead>
            <tbody>
              {WAGE.map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className={`p-3 text-right whitespace-nowrap ${r.up > r.down ? "font-bold text-navy" : ""}`}>{r.up}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.same}%</td>
                  <td className={`p-3 text-right whitespace-nowrap ${r.down > r.up ? "font-bold text-navy" : ""}`}>{r.down}%</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 font-bold">
                <td className="p-3">全年齢（計）</td>
                <td className="p-3 text-right">{WAGE_ALL.up}%</td>
                <td className="p-3 text-right">{WAGE_ALL.same}%</td>
                <td className="p-3 text-right">{WAGE_ALL.down}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※{a(DOUKOU, "厚生労働省「令和6年 雇用動向調査結果の概況」表6")}。計には賃金変動状況の不詳を含むため、3つの合計は100%になりません。</p>
        <p className="mb-10">
          雇用期間の定めがない一般労働者（いわゆる正社員）同士の転職に限ると、賃金が増加した人は42.0%、減少した人は25.7%です（同 表7）。
          前年の令和5年と比べると、全体で増加した人の割合は3.3ポイント上がっています。
          55〜59歳は減少36.6%、60〜64歳は減少60.9%で、定年前後の転職では賃金が下がる人が多くなります。
        </p>

        <h2>転職した人の満足度（項目別）</h2>
        <p className="mb-4">
          令和7年 転職者実態調査は、転職者に現在の勤め先での満足度を項目別に尋ねています。満足度D.I.は「満足」「やや満足」の割合から「不満」「やや不満」の割合を引いた値です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-right">満足・やや満足</th>
                <th className="p-3 text-right">不満・やや不満</th>
                <th className="p-3 text-right rounded-tr-lg">満足度D.I.</th>
              </tr>
            </thead>
            <tbody>
              {SAT.map((r) => (
                <tr key={r.k} className="border-b border-gray-100">
                  <td className="p-3">{r.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.sat}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.dis}%</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.di}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※{a(TENSHOKU_R07, "厚生労働省「令和7年転職者実態調査の概況」表14")}。満足・不満のどちらでもない回答と不明を除いて掲載しています。</p>
        <p className="mb-10">
          満足度が最も低い項目は賃金（D.I. 22.2）で、転職者の27.6%が賃金に不満・やや不満と回答しています。賃金以外の仕事内容・労働時間・人間関係は、満足の割合が6割を超えます。
          収入面の不安が大きい場合は、応募の段階で想定年収と賞与の実績、昇給の仕組みを確認しておくことが、転職後の不満を減らす準備になります。
        </p>

        <h2>転職の怖さを小さくする準備</h2>
        <ul className="mb-10 space-y-2">
          <li><strong>在職中に始める：</strong>内定が出るまで今の収入を保てます。転職者実態調査では、転職者の81.3%が自己都合で直前の勤め先を離職しています。辞める時期は自分で選べることが多いといえます。</li>
          <li><strong>怖さを分けて確認する：</strong>収入なら求人票の年収と賞与、雇用形態なら雇用期間の定めの有無、職場になじめるかは面接での質問や職場見学で確かめます。</li>
          <li><strong>年齢による違いを知っておく：</strong>55歳以上は賃金が減る人の割合が高いため、年収以外の条件（勤務地・労働時間・継続雇用）も含めて比べます。</li>
          <li><strong>相談先を使う：</strong>転職エージェントでは、求人の年収の目安や選考の進め方を相談できます。登録の時期は<Link href="/knowledge/when-to-start/" className="text-teal font-bold hover:underline">転職エージェントに登録するタイミング</Link>で解説しています。</li>
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

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/tenshoku-umakuikanai/" className="text-teal font-bold hover:underline">転職がうまくいかないときに見直すこと</Link></li>
          <li><Link href="/knowledge/tenshoku-kaisu-gyokai/" className="text-teal font-bold hover:underline">転職回数を気にしない業界</Link></li>
          <li><Link href="/knowledge/shigoto-muitenai/" className="text-teal font-bold hover:underline">仕事が向いてないと感じたとき</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className="text-teal font-bold hover:underline">30代女性の転職</Link></li>
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
