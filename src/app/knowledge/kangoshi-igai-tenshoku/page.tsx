import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SHOKUSHU, SHOKUSHU_CHECKED, SHOKUSHU_SOURCES, shokushuAnnual } from "@/data/shokushu-r7";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/kangoshi-igai-tenshoku/" },
  title: "看護師から看護師以外への転職｜病院以外で働く看護師は34.3%・職種別の年収比較【厚生労働省の統計】",
  description:
    "看護師から看護師以外の仕事や病院以外の職場へ転職するときに確認したい点を、厚生労働省の統計と法令でまとめました。就業看護師136.3万人のうち病院以外で働く人は34.3%です。就業場所の内訳、事務職・介護職などとの平均年収の比較、ナースセンターへの届出も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "看護師から看護師以外への転職【厚生労働省の統計】",
    description: "看護師の就業場所の内訳と、看護師以外の職種との年収比較を厚生労働省の統計で確認しています。",
  },
};

const CHECKED = "2026年11月27日";
const EISEI = "https://www.mhlw.go.jp/toukei/saikin/hw/eisei/24/dl/kekka1.pdf";
const LAW_HOJOKAN = "https://laws.e-gov.go.jp/law/323AC0000000203";
const LAW_JINZAI = "https://laws.e-gov.go.jp/law/404AC0000000086";

// 厚生労働省「令和6年衛生行政報告例（就業医療関係者）の概況」表2 就業場所別にみた就業看護師（実人員・令和6年末現在）
const PLACE_TOTAL = 1363142;
const PLACE = [
  { k: "病院", n: 895944 },
  { k: "診療所", n: 194665 },
  { k: "介護保険施設等", n: 107984 },
  { k: "訪問看護ステーション", n: 91022 },
  { k: "社会福祉施設", n: 28093 },
  { k: "看護師等学校養成所又は研究機関", n: 16790 },
  { k: "市区町村", n: 8035 },
  { k: "事業所", n: 5879 },
  { k: "保健所", n: 1555 },
  { k: "都道府県", n: 1205 },
  { k: "助産所", n: 220 },
  { k: "その他", n: 11750 },
];
const NOT_HOSPITAL = PLACE_TOTAL - PLACE[0].n;
const p = (n: number) => `${((n / PLACE_TOTAL) * 100).toFixed(1)}%`;

// 比較する職種（令和7年 賃金構造基本統計調査 職種 第1表・第5表）
const COMPARE = [
  { k: "看護師", note: "比較の基準" },
  { k: "保健師", note: "保健師国家試験の合格が必要" },
  { k: "助産師", note: "助産師国家試験の合格が必要（女性のみ）" },
  { k: "総合事務員", note: "事務職" },
  { k: "会計事務従事者", note: "事務職" },
  { k: "受付・案内事務員", note: "事務職" },
  { k: "その他の社会福祉専門職業従事者", note: "相談員など" },
  { k: "保育士", note: "保育士資格が必要" },
  { k: "介護職員（医療・福祉施設等）", note: "介護職" },
];
const ROWS = COMPARE.map((c) => {
  const s = SHOKUSHU.find((x) => x.k === c.k);
  if (!s) throw new Error(`shokushu not found: ${c.k}`);
  return {
    ...c,
    age: s.age,
    y: shokushuAnnual(s.t[0], s.t[1]),
    y2529: s.a2529 ? shokushuAnnual(s.a2529[0], s.a2529[1]) : null,
    y4549: s.a4549 ? shokushuAnnual(s.a4549[0], s.a4549[1]) : null,
  };
});
const NURSE = ROWS[0];
const f1 = (v: number) => `約${v.toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;
const diff = (v: number) => `${v - NURSE.y >= 0 ? "+" : "−"}${Math.abs(v - NURSE.y).toFixed(1)}万円`;
const JIMU = ROWS.find((x) => x.k === "総合事務員")!;

const faq = [
  {
    q: "看護師から看護師以外の仕事に転職すると年収は下がりますか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種別の平均（所定内給与額×12か月＋年間賞与・当サイト計算）では、看護師は${f1(NURSE.y)}、総合事務員は${f1(JIMU.y)}で、全年齢の平均では総合事務員のほうが高くなっています。一方、25〜29歳では看護師${f1(NURSE.y2529 ?? 0)}に対し総合事務員${f1(JIMU.y2529 ?? 0)}で、看護師のほうが高くなります。年齢と勤務先によって結果が変わるため、一律に下がるとはいえません。`,
  },
  {
    q: "看護師で病院以外で働いている人はどのくらいいますか？",
    a: `厚生労働省「令和6年衛生行政報告例」では、令和6年末現在の就業看護師1,363,142人のうち、病院以外で働く人は${NOT_HOSPITAL.toLocaleString("ja-JP")}人（${p(NOT_HOSPITAL)}）です。診療所${p(PLACE[1].n)}、介護保険施設等${p(PLACE[2].n)}、訪問看護ステーション${p(PLACE[3].n)}の順に多くなっています。`,
  },
  {
    q: "看護師の資格で保健師として働けますか？",
    a: "保健師助産師看護師法7条により、保健師になるには保健師国家試験と看護師国家試験の両方に合格し、免許を受ける必要があります。看護師免許だけでは保健師として働けません。",
  },
  {
    q: "看護師を辞めたら届出は必要ですか？",
    a: "看護師等の人材確保の促進に関する法律16条の3により、看護師等は病院等を離職した場合などに、住所・氏名などを都道府県ナースセンターに届け出るよう努めなければならないとされています（努力義務）。看護師以外の仕事に転職する場合も対象になります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和6年衛生行政報告例（就業医療関係者）の概況」結果の概要（表2 就業場所別にみた就業保健師等）", url: EISEI },
  ...SHOKUSHU_SOURCES,
  { label: "e-Gov法令検索 保健師助産師看護師法（7条）", url: LAW_HOJOKAN },
  { label: "e-Gov法令検索 看護師等の人材確保の促進に関する法律（16条の3）", url: LAW_JINZAI },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);
const th = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "看護師から看護師以外への転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            看護師から看護師以外への転職｜病院以外の職場と職種別の年収比較
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "136.3万人", l: "就業看護師（令和6年末）" },
              { v: p(NOT_HOSPITAL), l: "病院以外で働く看護師" },
              { v: f1(NURSE.y), l: "看護師の平均年収（当サイト計算）" },
              { v: f1(JIMU.y), l: "総合事務員の平均年収（当サイト計算）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            看護師から離れる転職には、<strong>看護師資格を使って病院以外の職場に移る方法</strong>と、<strong>看護師以外の職種に移る方法</strong>があります。
            厚生労働省の統計では、就業看護師の{p(NOT_HOSPITAL)}がすでに病院以外（診療所・介護保険施設等・訪問看護ステーション・企業など）で働いています。
            職種を変える場合、全年齢の平均年収は総合事務員のほうが看護師より高い一方、25〜29歳では看護師のほうが高くなっています。年齢によって有利・不利が変わる点に注意が必要です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：厚生労働省の統計・e-Gov法令検索（{CHECKED}に当サイトで確認）。賃金構造基本統計調査の値は{SHOKUSHU_CHECKED}にe-Statで取得し、年収は当サイトで計算しています。
          </p>
        </div>

        <h2>看護師が働いている場所（病院以外は{p(NOT_HOSPITAL)}）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">就業場所</th>
                <th className={th}>就業看護師（実人員）</th>
                <th className="p-3 text-right rounded-tr-lg">構成割合</th>
              </tr>
            </thead>
            <tbody>
              {PLACE.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{p(x.n)}</td>
                </tr>
              ))}
              <tr className="border-b border-gray-100 font-bold">
                <td className="p-3">総数</td>
                <td className="p-3 text-right whitespace-nowrap">{PLACE_TOTAL.toLocaleString("ja-JP")}人</td>
                <td className="p-3 text-right whitespace-nowrap">100.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和6年衛生行政報告例（就業医療関係者）の概況」表2（令和6年末現在）。介護保険施設等は介護老人保健施設・介護医療院・指定介護老人福祉施設・居宅サービス事業所・居宅介護支援事業所等です。構成割合は当サイトで計算しています。
        </p>
        <p className="mb-10">
          病院以外では、診療所が{PLACE[1].n.toLocaleString("ja-JP")}人、介護保険施設等が{PLACE[2].n.toLocaleString("ja-JP")}人、訪問看護ステーションが{PLACE[3].n.toLocaleString("ja-JP")}人です。
          一般企業などの「事業所」で働く看護師は{PLACE[7].n.toLocaleString("ja-JP")}人（{p(PLACE[7].n)}）、看護師等学校養成所・研究機関は{PLACE[5].n.toLocaleString("ja-JP")}人です。
          診療所・訪問看護ステーション・事業所など病院以外の職場も、看護師資格を活かせる転職先の候補です。夜勤やオンコールの有無は職場ごとに異なるため、求人票で確認が必要です。
        </p>

        <h2>看護師と看護師以外の職種の平均年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職種（統計上の名称）</th>
                <th className={th}>平均年収</th>
                <th className={th}>看護師との差</th>
                <th className={th}>25〜29歳</th>
                <th className={th}>45〜49歳</th>
                <th className="p-3 text-left rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "看護師" ? "bg-warm-gray font-bold" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{f1(x.y)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.k === "看護師" ? "－" : diff(x.y)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.y2529 !== null ? f1(x.y2529) : "－"}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.y4549 !== null ? f1(x.y4549) : "－"}</td>
                  <td className="p-3 text-xs">{x.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表・第5表（男女計・産業計・企業規模10人以上）。年収＝所定内給与額×12か月＋年間賞与その他特別給与額（当サイト計算）。残業代は含みません。
        </p>
        <p className="mb-10">
          全年齢の平均では、総合事務員（{f1(JIMU.y)}）が看護師（{f1(NURSE.y)}）を{(JIMU.y - NURSE.y).toFixed(1)}万円上回ります。45〜49歳でも総合事務員のほうが高い一方、
          25〜29歳で比べると看護師のほうが{((NURSE.y2529 ?? 0) - (JIMU.y2529 ?? 0)).toFixed(1)}万円高くなります。20代の看護師が事務職に移る場合は、当面の年収が下がる可能性を考えておく必要があります。
          事務職のうち医療事務への転職は<Link href="/knowledge/iryojimu-tenshoku/" className={link}>医療事務の転職</Link>に掲載しています。
        </p>

        <h2>看護師以外の仕事に転職する前に確認すること</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "資格が別に必要な職種か", d: `保健師・助産師は、看護師国家試験に加えてそれぞれの国家試験に合格し、免許を受ける必要があります（保健師助産師看護師法7条）。看護師免許だけで就ける職種かを求人票で確認します。` },
            { t: "夜勤手当がなくなったときの年収", d: "現在の給与明細で夜勤手当の額を確認し、夜勤のない職場に移った場合の年収を試算しておくと、求人の給与と比べやすくなります。" },
            { t: "看護師に戻るときの相談先", d: "都道府県ナースセンターは、看護師等に対する研修や、看護の知識・技能に関する情報提供・相談などの援助を行うこととされています（看護師等の人材確保の促進に関する法律15条）。看護師以外の仕事に移った後に看護職へ戻る場合の相談先になります。" },
            { t: "ナースセンターへの届出", d: "病院等を離職した場合などは、住所・氏名などを都道府県ナースセンターに届け出るよう努めることとされています（同法16条の3・努力義務）。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10 text-sm text-text-secondary">
          条文は{a(LAW_HOJOKAN, "保健師助産師看護師法")}・{a(LAW_JINZAI, "看護師等の人材確保の促進に関する法律")}（e-Gov法令検索）で{CHECKED}に確認しています。
          看護師資格を活かした転職先を探す場合の転職サイトの比較は<Link href="/industry/nurse/" className={link}>看護師の転職サイト</Link>に掲載しています。
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
          <li><Link href="/industry/nurse/" className={link}>看護師の転職サイトの比較</Link></li>
          <li><Link href="/knowledge/iryojimu-tenshoku/" className={link}>医療事務の転職</Link></li>
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link></li>
          <li><Link href="/knowledge/shigoto-muitenai/" className={link}>仕事が向いてないと感じて辞めたいとき</Link></li>
          <li><Link href="/knowledge/keiyakushain-nattehaikenai/" className={link}>契約社員になる前に確認すること</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">衛生行政報告例と法令は{CHECKED}、賃金構造基本統計調査は{SHOKUSHU_CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
