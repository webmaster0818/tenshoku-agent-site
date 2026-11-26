import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/keiyakushain-nattehaikenai/" },
  title: "契約社員になってはいけない？なる前に確認すること｜正社員との月給差は40代前半で約14.8万円【令和7年 賃金構造基本統計調査】",
  description:
    "契約社員になる前に確認したい点を、厚生労働省の統計と法令でまとめました。正社員・正職員以外の月額賃金は年齢が上がってもほぼ23万円台で、40〜44歳では正社員より約14.8万円低くなります。契約期間の上限、5年を超えたときの無期転換、雇止めのルール、不合理な待遇差の禁止も条文で確認しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "契約社員になってはいけない？なる前に確認すること【令和7年 賃金構造基本統計調査】",
    description: "正社員との賃金差を年齢別に比較し、無期転換・雇止め・待遇差のルールを法令で確認しています。",
  },
};

const CHECKED = "2026年11月27日";
const WAGE_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/06.pdf";
const NTA_URL = "https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan2025/pdf/2025_001.pdf";
const TENSHOKU_R07 = "https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-gaikyo.pdf";
const LAW_KEIYAKU = "https://laws.e-gov.go.jp/law/419AC0000000128";
const LAW_KIJUN = "https://laws.e-gov.go.jp/law/322AC0000000049";
const LAW_KIJUN_RULE = "https://laws.e-gov.go.jp/law/322M40000100023";
const LAW_PART = "https://laws.e-gov.go.jp/law/405AC0000000076";

// 厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第6-1表 雇用形態、年齢階級別賃金（男女計・千円・令和7年6月分の所定内給与額）
const WAGE = [
  { k: "20〜24歳", sei: 247.5, hi: 203.5 },
  { k: "25〜29歳", sei: 285.0, hi: 227.9 },
  { k: "30〜34歳", sei: 321.1, hi: 233.8 },
  { k: "35〜39歳", sei: 352.6, hi: 230.3 },
  { k: "40〜44歳", sei: 379.0, hi: 230.6 },
  { k: "45〜49歳", sei: 395.6, hi: 233.4 },
  { k: "50〜54歳", sei: 412.7, hi: 229.7 },
  { k: "55〜59歳", sei: 424.2, hi: 232.5 },
  { k: "年齢計", sei: 358.8, hi: 241.7 },
];
const gap = (x: (typeof WAGE)[number]) => x.sei - x.hi;
const idx = (x: (typeof WAGE)[number]) => ((x.hi / x.sei) * 100).toFixed(1);
const senYen = (v: number) => `${v.toFixed(1)}千円`;
const manYen = (v: number) => `約${(Math.round(v) / 10).toFixed(1)}万円`;
const W4044 = WAGE[4];

const faq = [
  {
    q: "契約社員になってはいけないのですか？",
    a: "契約社員になるべきかどうかは、目的と契約の内容によります。統計上は、正社員・正職員以外の月額賃金は年齢が上がってもほぼ横ばいで、正社員との差は40代以降に大きくなります。一方、契約期間中は原則として解雇されない（労働契約法17条）、通算5年を超えると無期転換を申し込める（同法18条）など、法律上の保護もあります。契約期間・更新の上限・正社員登用の実績を確認してから判断する方法をおすすめします。",
  },
  {
    q: "契約社員と正社員の給料の差はどのくらいですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」では、正社員・正職員の月額賃金（所定内給与額）は358.8千円、正社員・正職員以外は241.7千円で、正社員を100とすると67.4です。40〜44歳では正社員${senYen(W4044.sei)}に対し正社員以外${senYen(W4044.hi)}で、差は${manYen(gap(W4044))}です（当サイト計算）。正社員以外には契約社員のほか嘱託・派遣などが含まれます。`,
  },
  {
    q: "契約社員を5年続けると正社員になれますか？",
    a: "労働契約法18条では、同じ使用者との有期労働契約の通算期間が5年を超えた労働者が申し込めば、期間の定めのない労働契約（無期労働契約）に転換されます。ただし、無期転換後の労働条件は、別段の定めがない限り直前の有期労働契約と同じであり、正社員になることとは異なります。",
  },
  {
    q: "契約社員は途中で辞められますか？",
    a: "労働基準法137条により、契約期間が1年を超える有期労働契約を結んだ労働者は、契約の初日から1年を経過した日以後は、使用者に申し出ていつでも退職できます（一定の事業の完了に必要な期間を定めた契約や、高度な専門知識を持つ人などを除く）。1年未満の時点では、やむを得ない事由がない限り契約期間の途中で辞めることは原則としてできません（民法628条）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」(6) 雇用形態別にみた賃金（第6-1表）", url: WAGE_URL },
  { label: "国税庁「令和7年分 民間給与実態統計調査」（第8表 平均給与）", url: NTA_URL },
  { label: "厚生労働省「令和7（2025）年転職者実態調査の概況」（令和8年9月25日公表）", url: TENSHOKU_R07 },
  { label: "e-Gov法令検索 労働契約法（17条・18条・19条）", url: LAW_KEIYAKU },
  { label: "e-Gov法令検索 労働基準法（14条・137条）", url: LAW_KIJUN },
  { label: "e-Gov法令検索 労働基準法施行規則（5条）", url: LAW_KIJUN_RULE },
  { label: "e-Gov法令検索 短時間労働者及び有期雇用労働者の雇用管理の改善等に関する法律（8条・9条）", url: LAW_PART },
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
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "契約社員になる前に確認すること" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            契約社員になってはいけない？なる前に確認すること【令和7年 賃金構造基本統計調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "67.4", l: "正社員以外の月額賃金（正社員＝100）" },
              { v: manYen(gap(W4044)), l: "40〜44歳の正社員との月額差" },
              { v: "5年超", l: "無期転換を申し込める通算期間" },
              { v: "3年", l: "有期労働契約の期間の上限（原則）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            契約社員になってはいけないと一律にはいえませんが、<strong>長く続けるほど正社員との賃金差が広がる</strong>点は統計で確認できます。
            正社員・正職員以外の月額賃金は20代後半から50代までほぼ23万円台で推移し、40〜44歳では正社員より{manYen(gap(W4044))}低くなります。
            契約社員を選ぶ場合は、契約期間・更新の上限・無期転換・正社員登用の有無を事前に確認することが重要です。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省・国税庁の統計、e-Gov法令検索（{CHECKED}に当サイトで確認）。差額は当サイトで計算しています。</p>
        </div>

        <h2>正社員と正社員以外の賃金を年齢別に比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={th}>正社員・正職員</th>
                <th className={th}>正社員・正職員以外</th>
                <th className={th}>差（月額）</th>
                <th className="p-3 text-right rounded-tr-lg">正社員＝100</th>
              </tr>
            </thead>
            <tbody>
              {WAGE.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{senYen(x.sei)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{senYen(x.hi)}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{manYen(gap(x))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{idx(x)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」第6-1表（男女計・短時間労働者以外の一般労働者・令和7年6月分の所定内給与額）。「正社員・正職員以外」には契約社員のほか嘱託・派遣などが含まれ、契約社員だけの値ではありません。差と指数は当サイトで計算しています。
        </p>
        <p className="mb-4">
          正社員は年齢とともに月額賃金が上がり、55〜59歳で424.2千円になります。正社員以外は20代後半の227.9千円から55〜59歳の232.5千円まで、ほとんど変わりません。
          そのため、20〜24歳では差が{manYen(gap(WAGE[0]))}ですが、50〜54歳では{manYen(gap(WAGE[6]))}に広がります。
        </p>
        <p className="mb-10">
          年収で見ると、国税庁「令和7年分 民間給与実態統計調査」の平均給与は、正社員（正職員）559万円、正社員（正職員）以外210万円です（第8表・パートタイムを含む）。
        </p>

        <h2>契約社員になる前に確認する法律上のルール</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              t: "契約期間の上限は原則3年（労働基準法14条）",
              d: "期間の定めのある労働契約は、一定の事業の完了に必要な期間を定める場合を除き、3年（高度な専門的知識を持つ人や満60歳以上の人は5年）を超えて結ぶことはできません。",
            },
            {
              t: "契約期間中は原則として解雇されない（労働契約法17条）",
              d: "使用者は、やむを得ない事由がある場合でなければ、契約期間が満了するまでの間に有期契約の労働者を解雇できません。",
            },
            {
              t: "通算5年を超えると無期転換を申し込める（労働契約法18条）",
              d: "同じ使用者との有期労働契約の通算期間が5年を超えた労働者が申し込むと、期間の定めのない労働契約に転換されます。転換後の労働条件は、別段の定めがない限り直前の契約と同じです。",
            },
            {
              t: "雇止めには制限がある（労働契約法19条）",
              d: "反復更新されて無期契約と同視できる場合や、更新を期待する合理的な理由がある場合に、客観的に合理的な理由なく更新を拒むと、従前と同じ条件で更新を承諾したものとみなされます。",
            },
            {
              t: "更新の上限は契約時に明示される（労働基準法施行規則5条）",
              d: "有期労働契約の通算契約期間または更新回数に上限を定める場合は、その上限を労働条件として明示することが定められています。労働条件通知書で確認できます。",
            },
            {
              t: "正社員との不合理な待遇差は禁止（パートタイム・有期雇用労働法8条・9条）",
              d: "基本給・賞与などの待遇のそれぞれについて、職務の内容、配置の変更の範囲などに照らして不合理な差を設けることは禁止されています。職務内容と配置の変更の範囲が正社員と同じ場合は、差別的取扱いが禁止されます。",
            },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10 text-sm text-text-secondary">
          条文は{a(LAW_KIJUN, "労働基準法")}・{a(LAW_KEIYAKU, "労働契約法")}・{a(LAW_KIJUN_RULE, "労働基準法施行規則")}・{a(LAW_PART, "パートタイム・有期雇用労働法")}（e-Gov法令検索）で{CHECKED}に確認しています。
        </p>

        <h2>契約社員の求人で確認すること</h2>
        <ul className="mb-4">
          <li>契約期間と更新の有無・更新の判断基準</li>
          <li>通算契約期間または更新回数の上限の有無</li>
          <li>正社員登用制度の有無と、過去の登用実績</li>
          <li>賞与・退職金・各種手当が正社員と同じかどうか（違う場合はその理由）</li>
          <li>無期転換後の労働条件（職務・勤務地・賃金）</li>
        </ul>
        <p className="mb-10">
          厚生労働省「令和7年 転職者実態調査」では、直前の勤め先で正社員以外だった転職者のうち47.9%が、転職後に正社員になっています（{a(TENSHOKU_R07, "転職者実態調査")}）。
          契約社員から正社員を目指す場合は、登用を待つ方法と、転職で正社員の求人に応募する方法を比べて判断できます。
          詳しくは<Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link>に掲載しています。
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
          <li><Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link></li>
          <li><Link href="/knowledge/josei-nenshu-300man/" className={link}>年収300万円を超える女性の割合</Link></li>
          <li><Link href="/knowledge/58sai-tenshoku/" className={link}>58歳の転職</Link></li>
          <li><Link href="/knowledge/kangoshi-igai-tenshoku/" className={link}>看護師から看護師以外への転職</Link></li>
          <li><Link href="/knowledge/black-kigyo-tokucho/" className={link}>ブラック企業の特徴</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className={link}>会社の辞め方</Link></li>
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
