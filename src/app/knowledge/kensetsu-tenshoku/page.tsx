import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/kensetsu-tenshoku/" },
  title: "建設業の転職を統計で確認【2026年】求人倍率5.13倍・平均年収の目安約556万円・離職率8.7%",
  description:
    "建設業への転職と建設業からの転職を、厚労省・国交省の統計で整理しました。建設・採掘の職業の有効求人倍率は5.13倍（令和8年9月）、建設業の平均年収の目安は約556万円（産業計約510万円）、離職率は8.7%（産業計13.7%）です。年齢別の年収、残業の上限規制、施工管理技士の受検資格の見直しも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "建設業の転職を統計で確認【2026年】求人倍率・平均年収・離職率",
    description: "厚生労働省・国土交通省の統計で、建設業の求人倍率・年収・入職率と離職率、働き方の制度変更を整理しています。",
  },
};

const CHECKED = "2026年11月27日";
const link = "text-teal font-bold hover:underline";
const ext = "text-teal hover:underline";
const S = {
  doukou: "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/index.html",
  doukouInd: "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/dl/kekka_gaiyo-02.pdf",
  doukouTbl: "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/dl/kekka_gaiyo-05.pdf",
  chingin: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/dl/05.pdf",
  estatAll: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420844",
  estatKen: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040420865",
  shokai: "https://www.mhlw.go.jp/stf/newpage_76960.html",
  shokaiTbl: "https://www.mhlw.go.jp/content/11602000/001763944.pdf",
  joseigen: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/gyosyu/topics/01.html",
  roki: "https://laws.e-gov.go.jp/law/322AC0000000049",
  mlitRef: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/content/001994097.pdf",
  ccus: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/content/ccus_data_tourokusu.pdf",
  shiken: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/content/001707687.pdf",
};

// 令和7年 賃金構造基本統計調査 一般労働者 第2表（e-Stat）。[所定内給与額（千円）, 年間賞与その他特別給与額（千円）] から 年収＝所定内×12＋賞与（当サイト計算）
const man = (m: number, b: number) => `約${Math.round((m * 12 + b) / 10).toLocaleString("ja-JP")}万円`;
const wage = [
  { k: "建設業（男女計）", m: 366.3, b: 1163.4, age: "45.5歳" },
  { k: "産業計（男女計）", m: 340.6, b: 1009.6, age: "－" },
  { k: "総合工事業", m: 375.4, b: 1148.0, age: "－" },
  { k: "職別工事業（設備工事業を除く）", m: 336.8, b: 699.2, age: "－" },
  { k: "設備工事業", m: 368.7, b: 1441.2, age: "－" },
];
// 同 第2表 年齢階級別（男女計・年収 千円・当サイト計算）
const ages = [
  { a: "20〜24歳", ken: 3495.1, all: 3325.7 },
  { a: "25〜29歳", ken: 4384.4, all: 4080.0 },
  { a: "30〜34歳", ken: 4980.6, all: 4642.0 },
  { a: "35〜39歳", ken: 5560.4, all: 5133.9 },
  { a: "40〜44歳", ken: 5856.3, all: 5538.8 },
  { a: "45〜49歳", ken: 6141.1, all: 5758.2 },
  { a: "50〜54歳", ken: 6708.3, all: 5982.1 },
  { a: "55〜59歳", ken: 7012.1, all: 6084.7 },
  { a: "60〜64歳", ken: 5844.5, all: 4813.1 },
];
const k = (v: number) => `約${Math.round(v / 10).toLocaleString("ja-JP")}万円`;

const faq = [
  {
    q: "建設業は転職しやすい業界ですか？",
    a: "求人の多さで見ると、転職先の選択肢は多い業界です。厚生労働省「一般職業紹介状況（令和8年9月分）」では、建設・採掘従事者の有効求人倍率は5.13倍（パートタイムを含む・原数値）、建築・土木・測量技術者は5.77倍で、職業計の1.08倍を大きく上回っています。ただし求人倍率は職種や地域で異なり、未経験の場合は資格・経験を求める求人に応募できないこともあります。",
  },
  {
    q: "建設業の平均年収はいくらですか？",
    a: "厚生労働省「令和7年 賃金構造基本統計調査」の建設業（一般労働者・男女計）は、所定内給与額36万6,300円、年間賞与116万3,400円で、年収に換算すると約556万円です（所定内給与額×12＋賞与・残業代を含まない当サイト計算）。産業計の約510万円より約46万円高い水準です。",
  },
  {
    q: "建設業の離職率は高いのですか？",
    a: "全産業と比べると低い水準です。厚生労働省「令和7年 雇用動向調査」では、建設業の離職率は8.7%で、産業計（13.7%）を5.0ポイント下回ります。主要な産業で建設業より離職率が低いのは、金融業，保険業（6.6%）と複合サービス事業（8.6%）だけです。",
  },
  {
    q: "建設業の残業規制はどう変わりましたか？",
    a: "2024年4月1日から、建設業にも時間外労働の上限規制が適用されています。原則は月45時間・年360時間で、特別条項を結んでも年720時間以内、休日労働を含めて単月100時間未満・2〜6か月平均80時間以内です。災害時の復旧・復興の事業に限り、単月100時間未満・2〜6か月平均80時間以内の規制は適用されません（労働基準法第139条）。",
  },
  {
    q: "未経験から施工管理を目指す場合、資格はいつ取れますか？",
    a: "令和6年度から施工管理技術検定の受検資格が見直され、1級の第一次検定は19歳以上（受検年度末時点）、2級の第一次検定は17歳以上であれば、実務経験がなくても受検できます。第二次検定は、第一次検定の合格後に一定期間の実務経験を積んでから受検します（国土交通省資料）。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和7年 雇用動向調査結果の概要」", url: S.doukou },
  { label: "同 産業別の入職と離職（表4-1・表4-2）", url: S.doukouInd },
  { label: "同 付属統計表（付属統計表2-1・2-2 転職入職者）", url: S.doukouTbl },
  { label: "厚生労働省「令和7年 賃金構造基本統計調査 結果の概況」産業別にみた賃金（第5-1表）", url: S.chingin },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（産業計）", url: S.estatAll },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（D建設業）", url: S.estatKen },
  { label: "厚生労働省「一般職業紹介状況（令和8年9月分）について」", url: S.shokai },
  { label: "同 参考統計表（参考統計表6・7-2 職業別労働市場関係指標）", url: S.shokaiTbl },
  { label: "厚生労働省「建設業 時間外労働の上限規制」", url: S.joseigen },
  { label: "e-Gov法令検索 労働基準法（第36条・第139条）", url: S.roki },
  { label: "国土交通省「参考資料集」（令和8年4月3日）建設業就業者の現状", url: S.mlitRef },
  { label: "国土交通省「建設キャリアアップシステムの利用状況」", url: S.ccus },
  { label: "国土交通省「技術検定制度の見直し（受検資格の見直し）」", url: S.shiken },
];

const th = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "建設業の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            建設業の転職を統計で確認【2026年】求人倍率・平均年収・離職率
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "5.13倍", l: "建設・採掘従事者の有効求人倍率（令和8年9月）" },
              { v: "約556万円", l: "建設業の平均年収の目安（産業計 約510万円）" },
              { v: "8.7%", l: "建設業の離職率（産業計 13.7%）" },
              { v: "36.6%", l: "建設業就業者のうち55歳以上の割合" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            建設業は、<strong>求人が多く、全産業より年収が高く、離職率が低い</strong>業界です。建設・採掘の職業の有効求人倍率は5.13倍で職業計（1.08倍）の約4.8倍、平均年収の目安は約556万円で産業計を約46万円上回り、離職率は8.7%で産業計より5.0ポイント低くなっています。
            一方で、就業者の36.6%が55歳以上と高齢化が進んでおり、若手・未経験者の採用ニーズが高い状況です。2024年4月からは時間外労働の上限規制が建設業にも適用されています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            厚生労働省・国土交通省の公表資料を{CHECKED}に確認しています。年収は所定内給与額×12か月＋年間賞与で当サイトが計算した目安で、残業代は含みません。
          </p>
        </div>

        <h2>建設業の求人倍率：建設・採掘は5.13倍</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職業（令和8年9月）</th>
                <th className={th}>パートを含む</th>
                <th className="p-3 text-right rounded-tr-lg">パートを除く</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "職業計", a: "1.08倍", b: "1.18倍" },
                { k: "建設・採掘従事者", a: "5.13倍", b: "5.76倍" },
                { k: "　建設躯体工事従事者", a: "8.41倍", b: "9.09倍" },
                { k: "　土木作業従事者", a: "6.81倍", b: "7.62倍" },
                { k: "　建設従事者（建設躯体工事従事者を除く）", a: "4.42倍", b: "5.06倍" },
                { k: "建築・土木・測量技術者", a: "5.77倍", b: "6.90倍" },
              ].map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "建設・採掘従事者" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「<a href={S.shokai} target="_blank" rel="noopener noreferrer" className={ext}>一般職業紹介状況（令和8年9月分）</a>」<a href={S.shokaiTbl} target="_blank" rel="noopener noreferrer" className={ext}>参考統計表</a>6・7-2（原数値・令和8年10月30日公表）。季節調整値の全体の有効求人倍率（1.19倍）とは基準が異なります。
        </p>
        <p className="mb-10">
          求人倍率5.13倍は、求職者1人に対して約5件の求人がある状態です。特に建設躯体工事（型枠・鉄筋・とびなど）は8.41倍と高く、施工管理などの技術者（建築・土木・測量技術者）も5.77倍です。
          ハローワークの統計のため民間の転職サービスの求人は含みませんが、職種別に見て人手不足が大きい分野であることが分かります。
        </p>

        <h2>建設業の平均年収：産業計より約46万円高い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分（一般労働者・男女計）</th>
                <th className={th}>所定内給与額（月）</th>
                <th className={th}>年間賞与</th>
                <th className="p-3 text-right rounded-tr-lg">年収の目安</th>
              </tr>
            </thead>
            <tbody>
              {wage.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k.startsWith("建設業") ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.m * 1000).toLocaleString("ja-JP")}円</td>
                  <td className="p-3 text-right whitespace-nowrap">{Math.round(x.b * 1000).toLocaleString("ja-JP")}円</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(x.m, x.b)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 一般労働者 第2表（<a href={S.estatKen} target="_blank" rel="noopener noreferrer" className={ext}>D建設業</a>・<a href={S.estatAll} target="_blank" rel="noopener noreferrer" className={ext}>産業計</a>・中分類は000040420862）。所定内給与額は令和7年6月分、年間賞与は令和6年1年間。年収の目安＝所定内給与額×12＋年間賞与（当サイト計算・万円未満四捨五入）。
        </p>
        <p className="mb-10">
          建設業（男女計）の所定内給与額は36万6,300円で、前年から3.9%増えています（<a href={S.chingin} target="_blank" rel="noopener noreferrer" className={ext}>賃金構造基本統計調査 結果の概況</a>）。平均年齢は45.5歳、勤続年数は13.7年です。
          中分類では設備工事業（電気・管工事など）の賞与が年144万円と高く、年収の目安は約587万円です。一方、型枠・鉄筋・内装などの職別工事業は賞与が少なく、約474万円にとどまります。同じ建設業でも、どの工事を担う会社に転職するかで年収の水準が変わります。
        </p>

        <h2>年齢別の年収：50代で産業計との差が広がる</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={th}>建設業</th>
                <th className={th}>産業計</th>
                <th className="p-3 text-right rounded-tr-lg">差</th>
              </tr>
            </thead>
            <tbody>
              {ages.map((x) => (
                <tr key={x.a} className="border-b border-gray-100">
                  <td className="p-3">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{k(x.ken)}</td>
                  <td className="p-3 text-right whitespace-nowrap">{k(x.all)}</td>
                  <td className="p-3 text-right whitespace-nowrap">+{Math.round((x.ken - x.all) / 10).toLocaleString("ja-JP")}万円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同 第2表の年齢階級別（男女計）から当サイトで計算。残業代は含みません。</p>
        <p className="mb-10">
          建設業の年収の目安は、20代前半から産業計を上回り、55〜59歳で約701万円とピークになります。産業計との差は20代では約17万〜30万円ですが、50〜54歳で約73万円、55〜59歳で約93万円、60〜64歳では約103万円に広がります。
          経験年数や資格に応じて給与が上がりやすい業界といえ、30代以降に異業種から転職する場合は、入社時点の年収だけでなく資格取得後の昇給の仕組みも確認しておくことが大切です。
        </p>

        <h2>入職率と離職率：人の出入りは全産業より少ない</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分（令和7年）</th>
                <th className={th}>入職率</th>
                <th className={th}>うち転職入職率</th>
                <th className="p-3 text-right rounded-tr-lg">離職率</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "建設業", a: "10.4%", b: "7.2%", c: "8.7%" },
                { k: "産業計", a: "14.7%", b: "9.9%", c: "13.7%" },
                { k: "建設業（令和6年）", a: "11.7%", b: "8.4%", c: "10.0%" },
              ].map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "建設業" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「<a href={S.doukou} target="_blank" rel="noopener noreferrer" className={ext}>令和7年 雇用動向調査結果の概要</a>」表4-2（<a href={S.doukouInd} target="_blank" rel="noopener noreferrer" className={ext}>産業別</a>）。転職入職率は<a href={S.doukouTbl} target="_blank" rel="noopener noreferrer" className={ext}>付属統計表</a>2-1の転職入職者数（18万2,900人）÷1月1日現在の常用労働者数（255万3,000人）から当サイトで計算しました。
        </p>
        <p className="mb-10">
          令和7年1年間に建設業へ転職して入った人は約18万3,000人で、入職者全体（26万5,300人）の約7割を占めます。入職率（10.4%）が離職率（8.7%）を1.7ポイント上回っており、働く人の数は差し引きで増えています。
          離職率が全産業より低いことから、一度入った人が同じ業界にとどまる傾向がうかがえます。
        </p>

        <h2>働き方の制度変更：2024年4月から残業の上限規制</h2>
        <div className="glass-card p-6 mb-4">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>原則：時間外労働は月45時間・年360時間まで（労働基準法第36条）</li>
            <li>特別条項を結んだ場合も、年720時間以内、休日労働を含めて単月100時間未満・2〜6か月平均80時間以内、月45時間を超えられるのは年6か月まで</li>
            <li>建設業は2024年3月31日まで適用が猶予されていましたが、2024年4月1日から原則どおり適用</li>
            <li>例外：災害時の復旧・復興の事業には、単月100時間未満・2〜6か月平均80時間以内の規制は適用されない（労働基準法第139条第1項）</li>
          </ul>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※<a href={S.joseigen} target="_blank" rel="noopener noreferrer" className={ext}>厚生労働省「建設業 時間外労働の上限規制」</a>、<a href={S.roki} target="_blank" rel="noopener noreferrer" className={ext}>e-Gov法令検索 労働基準法</a>（{CHECKED}確認）
        </p>
        <p className="mb-10">
          上限規制は法律上の上限で、実際の残業時間は会社や現場によって異なります。転職先を選ぶ際は、36協定の内容（特別条項の有無と上限時間）や、週休2日（4週8休）の現場の割合を面接で確認すると、入社後の働き方を見通しやすくなります。
        </p>

        <h2>未経験から建設業に転職する人向けの制度</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              t: "施工管理技士は19歳から第一次検定を受検できる",
              d: "令和6年度から受検資格が見直され、1級の第一次検定は19歳以上（受検年度末時点）、2級の第一次検定は17歳以上であれば受検できます。第二次検定は、第一次検定の合格後の一定期間の実務経験（1級は原則5年以上など）を経て受検します。令和10年度までは、制度改正前の受検資格での第二次検定の受検も可能です。",
            },
            {
              t: "建設キャリアアップシステム（CCUS）で経験が記録される",
              d: "技能者の資格や現場での就業履歴を業界共通で記録する仕組みで、2026年9月末時点で技能者192万人、事業者31.7万社が登録しています。転職しても経験の記録が引き継がれるため、職人として働く場合は登録の有無を確認しておくとよいでしょう。",
            },
            {
              t: "就業者の高齢化で若手の採用ニーズが高い",
              d: "国土交通省の資料では、建設業就業者は478万人（令和7年）で、55歳以上が36.6%、29歳以下が11.9%と高齢化が進んでおり、次世代への技術承継が課題とされています。",
            },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>建設業から他業界へ転職する場合</h2>
        <p className="mb-4">
          建設業から異業種へ移る場合は、建設業の年収水準が産業計より高い点に注意が必要です。年齢別の表のとおり、特に50代では産業計の平均との差が約73万〜93万円あり、異業種の平均的な求人では年収が下がる可能性があります。
        </p>
        <p className="mb-10">
          施工管理の経験は、不動産の開発・管理、設備メンテナンス、建材・住宅設備メーカーの技術営業など、建設に関わる周辺業界で評価されやすい経験です。業界をまたぐ場合は、<Link href="/review/rsg-fudosan/" className={link}>建設・不動産専門のRSG</Link>や<Link href="/review/prime-career/" className={link}>不動産・設備・建設専門のプライムキャリア</Link>のような特化型サービスで、経験が生かせる求人の年収レンジを確認する方法があります。
          大手ゼネコンの年収は<Link href="/company/kensetsu-salary/" className={link}>建設ゼネコンの年収ランキング</Link>にまとめています。
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
          <li><Link href="/company/kensetsu-salary/" className={link}>建設ゼネコンの年収ランキング</Link></li>
          <li><Link href="/review/rsg-fudosan/" className={link}>RSGの特徴と公式データ</Link></li>
          <li><Link href="/review/prime-career/" className={link}>プライムキャリアの特徴と公式データ</Link></li>
          <li><Link href="/knowledge/nenshu-700man-shokugyo/" className={link}>年収700万円の職業</Link></li>
          <li><Link href="/company/openhouse/" className={link}>オープンハウスの中途採用（不動産営業）</Link></li>
          <li><Link href="/type/inexperienced/" className={link}>未経験の転職に強い転職エージェント</Link></li>
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
