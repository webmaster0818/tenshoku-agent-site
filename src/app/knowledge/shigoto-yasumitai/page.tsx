import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/shigoto-yasumitai/" },
  title: "仕事を休みたいときに使える制度｜年次有給休暇は理由不要・取得率66.9%【労働基準法39条・厚労省 令和7年調査】",
  description:
    "仕事を休みたいときに使える制度を、労働基準法・健康保険法と厚生労働省の公表資料で整理しました。年次有給休暇は取得の目的を問われず、令和7年 就労条件総合調査では平均付与18.1日・取得12.1日・取得率66.9%です。勤続年数別の付与日数、病気で長く休む場合の傷病手当金、休職制度、公的な相談窓口も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "仕事を休みたいときに使える制度｜有給は理由不要・取得率66.9%",
    description: "年次有給休暇・傷病手当金・休職制度と、厚生労働省の統計・相談窓口を一次情報で整理しています。",
  },
};

const CHECKED = "2026年11月20日";

// 労働基準法 第39条 第1項・第2項（週5日以上勤務などの通常の労働者）
const grant = [
  { k: "6か月", d: 10 },
  { k: "1年6か月", d: 11 },
  { k: "2年6か月", d: 12 },
  { k: "3年6か月", d: 14 },
  { k: "4年6か月", d: 16 },
  { k: "5年6か月", d: 18 },
  { k: "6年6か月以上", d: 20 },
];

// 厚生労働省「令和7年 就労条件総合調査」第5表（令和6年の1年間・労働者1人平均）
const bySize = [
  { k: "1,000人以上", g: 18.5, t: 12.8, r: 69.0 },
  { k: "300〜999人", g: 18.4, t: 12.3, r: 66.8 },
  { k: "100〜299人", g: 17.8, t: 11.7, r: 65.5 },
  { k: "30〜99人", g: 17.4, t: 11.3, r: 64.9 },
  { k: "計", g: 18.1, t: 12.1, r: 66.9 },
];

// 厚生労働省「令和7年 労働安全衛生調査（実態調査）」第17表（強いストレスの内容・主なもの3つ以内）
const stress = [
  { k: "仕事の量", v: 39.5 },
  { k: "仕事の失敗、責任の発生等", v: 39.5 },
  { k: "対人関係（セクハラ・パワハラを含む）", v: 32.9 },
  { k: "仕事の質", v: 30.7 },
  { k: "顧客、取引先等からのクレーム", v: 22.1 },
  { k: "会社の将来性", v: 20.5 },
];

// 傷病手当金の1日あたりの額の目安（健康保険法 第99条：標準報酬月額の平均÷30×2/3）
const sick = [200000, 260000, 300000, 360000, 440000].map((m) => {
  const daily = Math.round(m / 30 / 10) * 10;
  return { m, day: Math.round((daily * 2) / 3) };
});
const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;

const faq = [
  {
    q: "有給休暇を取るときに理由を伝える必要はありますか？",
    a: "法律上、理由を伝える義務はありません。厚生労働省「確かめよう労働条件」のQ&Aでは、年次有給休暇をどのような目的で取るかは労働者の自由であり、使用者は目的によって取得を拒むことはできないと説明されています（最高裁 昭和48年3月2日判決）。社内の申請書に理由欄がある場合は「私用のため」と記載する方法があります。",
  },
  {
    q: "会社は有給休暇の取得を断れますか？",
    a: "使用者は、労働者が請求した時季に年次有給休暇を与える必要があります。請求された時季に与えると事業の正常な運営を妨げる場合に限り、別の時季に変更できます（労働基準法第39条第5項・時季変更権）。取得そのものを拒むことはできません。",
  },
  {
    q: "有給休暇は年に何日もらえますか？",
    a: "週5日以上勤務する人の場合、入社から6か月継続して勤務し、全労働日の8割以上出勤すると10日が付与されます。その後1年ごとに増え、6年6か月以上で年20日です（労働基準法第39条）。年次有給休暇の請求権の時効は2年のため、前年の残りは翌年に繰り越せます。",
  },
  {
    q: "体調不良で長く休む場合、給与はどうなりますか？",
    a: "健康保険（協会けんぽ・健康保険組合）の加入者は、業務外の病気やけがで働けず給与が支払われない場合、連続3日間の待期の後、4日目から傷病手当金を受けられます。1日あたりの額は、直近12か月の標準報酬月額の平均の30分の1の3分の2で、支給期間は通算1年6か月です（健康保険法第99条）。",
  },
  {
    q: "休職制度は法律で決まっていますか？",
    a: "決まっていません。厚生労働省のモデル就業規則の解説では、休職の定義・休職期間の制限・復職などについて労働基準法に定めはないとされています。休職できる期間や休職中の賃金の扱いは、勤務先の就業規則で確認してください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "e-Gov法令検索 労働基準法（第39条 年次有給休暇・第120条 罰則・附則第136条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "厚生労働省「確かめよう労働条件」Q&A 年次有給休暇の取得目的", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/yukyu/q1.html" },
  { label: "厚生労働省「確かめよう労働条件」Q&A 年次有給休暇の取得と不利益な取扱い", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/yukyu/q2.html" },
  { label: "厚生労働省「確かめよう労働条件」Q&A 年5日の年次有給休暇の確実な取得", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/yukyu/q4.html" },
  { label: "厚生労働省「令和7年 就労条件総合調査 結果の概況」第5表 労働者1人平均年次有給休暇の取得状況", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaiyou01.pdf" },
  { label: "厚生労働省「令和7年 労働安全衛生調査（実態調査）結果の概況」個人調査 第17表", url: "https://www.mhlw.go.jp/toukei/list/dl/r07-46-50_kekka-gaiyo02.pdf" },
  { label: "厚生労働省「令和7年 労働安全衛生調査（実態調査）結果の概況」事業所調査 第1表", url: "https://www.mhlw.go.jp/toukei/list/dl/r07-46-50_kekka-gaiyo01.pdf" },
  { label: "厚生労働省「確かめよう労働条件」Q&A 年次有給休暇の時効", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/yukyu/q6.html" },
  { label: "e-Gov法令検索 労働者災害補償保険法（第14条 休業補償給付）", url: "https://laws.e-gov.go.jp/law/322AC0000000050" },
  { label: "e-Gov法令検索 労働安全衛生法（第13条 産業医）・労働安全衛生法施行令（第5条）", url: "https://laws.e-gov.go.jp/law/347AC0000000057" },
  { label: "e-Gov法令検索 健康保険法（第99条 傷病手当金）", url: "https://laws.e-gov.go.jp/law/211AC0000000070" },
  { label: "協会けんぽ 病気やケガで会社を休んだとき（傷病手当金）", url: "https://www.kyoukaikenpo.or.jp/benefit/injury_and_sickness_allowance/" },
  { label: "厚生労働省 モデル就業規則（令和7年12月版）第9条 休職と解説", url: "https://www.mhlw.go.jp/content/001620507.pdf" },
  { label: "厚生労働省 こころの耳 相談窓口案内", url: "https://kokoro.mhlw.go.jp/agency/" },
  { label: "厚生労働省 こころの耳電話相談", url: "https://kokoro.mhlw.go.jp/tel-soudan/" },
  { label: "厚生労働省 総合労働相談コーナーのご案内", url: "https://www.mhlw.go.jp/general/seido/chihou/kaiketu/soudan.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "仕事を休みたいときに使える制度" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            仕事を休みたいときに使える制度｜年次有給休暇は理由不要・取得率66.9%【労働基準法39条・厚労省 令和7年調査】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "66.9%", l: "年次有給休暇の取得率（令和7年 就労条件総合調査）" },
              { v: "12.1日", l: "1年間の平均取得日数（付与18.1日）" },
              { v: "67.5%", l: "仕事で強い不安・悩み・ストレスがある労働者" },
              { v: "4日目から", l: "傷病手当金の支給開始（連続3日の待期の後）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            仕事を休みたいときは、まず<strong>年次有給休暇</strong>を使えます。取得の目的は労働者の自由であり、会社は理由によって取得を拒めません（厚生労働省Q&A）。
            体調不良で長く休む場合は、健康保険の<strong>傷病手当金</strong>と、勤務先の就業規則にある<strong>休職制度</strong>を確認します。
            厚生労働省の令和7年の調査では、年次有給休暇の取得率は66.9%で、仕事で強い不安・悩み・ストレスを感じている労働者は67.5%です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            本ページは法令と厚生労働省・協会けんぽの公表資料を{CHECKED}に確認してまとめたものです。個別の事情による判断は、勤務先の就業規則や下記の公的な相談窓口で確認してください。
          </p>
        </div>

        <h2>休み方の選択肢と使える場面</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">制度</th>
                <th className="p-3 text-left">根拠</th>
                <th className="p-3 text-left">給与の扱い</th>
                <th className="p-3 text-left rounded-tr-lg">向いている場面</th>
              </tr>
            </thead>
            <tbody>
              {[
                { a: "年次有給休暇", b: "労働基準法 第39条", c: "有給（通常の賃金など）", d: "1日〜数日休みたい。理由は問われない" },
                { a: "欠勤", b: "就業規則", c: "就業規則・賃金規程の定めによる", d: "有給休暇が残っていない" },
                { a: "傷病手当金", b: "健康保険法 第99条", c: "給与の代わりに標準報酬日額の3分の2", d: "業務外の病気・けがで4日以上働けない" },
                { a: "休職", b: "就業規則（法定ではない）", c: "就業規則による（モデル就業規則は原則無給）", d: "長期間の療養が必要" },
                { a: "労災保険の休業補償給付", b: "労働者災害補償保険法 第14条", c: "賃金を受けない日の4日目から給付基礎日額の60%", d: "仕事が原因の病気・けが" },
              ].map((x) => (
                <tr key={x.a} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{x.a}</td>
                  <td className="p-3">{x.b}</td>
                  <td className="p-3">{x.c}</td>
                  <td className="p-3">{x.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※業務上・通勤による病気やけがは傷病手当金の対象外で、労災保険の対象です（協会けんぽ）。会社独自の病気休暇・特別休暇がある企業もあります（令和7年 就労条件総合調査では、病気休暇制度がある企業は28.4%）。
        </p>

        <h2>年次有給休暇の付与日数（勤続年数別）</h2>
        <p>
          週5日以上勤務する人は、入社から6か月継続して勤務し、全労働日の8割以上出勤すると年次有給休暇が付与されます（労働基準法第39条第1項・第2項）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">継続勤務期間</th>
                <th className="p-3 text-right rounded-tr-lg">付与日数</th>
              </tr>
            </thead>
            <tbody>
              {grant.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right font-bold">{x.d}日</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※週の所定労働日数が4日以下かつ週30時間未満の人は、所定労働日数に応じて比例付与されます（同条第3項）。</p>
        <div className="space-y-4 mb-10">
          {[
            { t: "取得の目的は問われない", d: "年次有給休暇をどのような目的で取るかは労働者の自由で、使用者は目的によって取得を拒めません（厚生労働省Q&A・最高裁 昭和48年3月2日判決）。" },
            { t: "会社ができるのは時季の変更だけ", d: "請求された時季に与えると事業の正常な運営を妨げる場合に限り、会社は別の時季に変更できます（同条第5項）。" },
            { t: "年5日は会社に取得させる義務がある", d: "付与日数が10日以上の人には、会社が年5日を時季を指定して取得させる義務があります（同条第7項・2019年4月施行）。違反した場合の罰則は30万円以下の罰金です（同法第120条）。" },
            { t: "取得を理由とする不利益な扱いは禁止", d: "年次有給休暇を取った人の賃金を減らすなどの不利益な取扱いをしないよう定められています（同法附則第136条）。精皆勤手当や賞与の算定で有給休暇を欠勤扱いにすることも該当します（厚生労働省Q&A）。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>年次有給休暇の取得状況（企業規模別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">付与日数</th>
                <th className="p-3 text-right">取得日数</th>
                <th className="p-3 text-right rounded-tr-lg">取得率</th>
              </tr>
            </thead>
            <tbody>
              {bySize.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "計" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.g}日</td>
                  <td className="p-3 text-right">{x.t}日</td>
                  <td className="p-3 text-right">{x.r}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※厚生労働省「令和7年 就労条件総合調査」第5表。令和6年（または令和5会計年度）1年間の労働者1人平均。繰越日数を除きます。</p>
        <p className="mb-10">
          取得日数12.1日・取得率66.9%は、いずれも昭和59年以降で最も高い値です（同調査）。企業規模が大きいほど取得率が高く、1,000人以上（69.0%）と30〜99人（64.9%）では4.1ポイントの差があります。
          産業別では、電気・ガス・熱供給・水道業が75.2%と最も高く、宿泊業，飲食サービス業が50.7%と最も低くなっています。
          有給休暇を取りにくい職場かどうかは、転職先を選ぶときに求人票や面接で「前年の平均取得日数」を確認すると比べやすくなります。
        </p>

        <h2>仕事で強いストレスを感じている人の割合と内容</h2>
        <p>
          厚生労働省「令和7年 労働安全衛生調査（実態調査）」では、現在の仕事や職業生活に関して強い不安・悩み・ストレスとなっていると感じる事柄がある労働者は67.5%です。年代別では20代が72.0%、40代が71.5%です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">強いストレスの内容（主なもの3つ以内）</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {stress.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right font-bold">{x.v}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同調査 個人調査 第17表。強い不安・悩み・ストレスがある労働者を100とした割合（上位6項目）。</p>
        <p className="mb-10">
          同調査の事業所調査では、過去1年間にメンタルヘルス不調で連続1か月以上休業した労働者または退職した労働者がいた事業所は13.5%です。
          休みたい気持ちが続く場合や、眠れない・食欲がないなどの体調の変化がある場合は、早めに医療機関や下記の相談窓口を利用してください。
        </p>

        <h2>病気で長く休むときの傷病手当金</h2>
        <p>
          健康保険の加入者が業務外の病気やけがで働けず、給与が支払われない場合は、傷病手当金を受けられます（健康保険法第99条）。連続3日間の待期の後、4日目から支給され、待期には有給休暇や公休日も含まれます（協会けんぽ）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">標準報酬月額の平均</th>
                <th className="p-3 text-right">1日あたりの額（目安）</th>
                <th className="p-3 text-right rounded-tr-lg">30日分（目安）</th>
              </tr>
            </thead>
            <tbody>
              {sick.map((x) => (
                <tr key={x.m} className="border-b border-gray-100">
                  <td className="p-3">{yen(x.m)}</td>
                  <td className="p-3 text-right">{yen(x.day)}</td>
                  <td className="p-3 text-right">{yen(x.day * 30)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※標準報酬月額の平均÷30（10円未満四捨五入）×2/3（1円未満四捨五入）で当サイトが計算した目安です。協会けんぽの計算例（平均17万円→日額3,780円）と同じ方法です。実際の額は加入する健康保険で確認してください。
        </p>
        <p className="mb-10">
          支給期間は、支給を始めた日から通算して1年6か月です。給与の一部が支払われている場合は、傷病手当金の額との差額が支給されます。
          休職中の賃金の扱いは就業規則によって異なり、厚生労働省のモデル就業規則では「原則として賃金を支給しない」とする規定例が示されています。
        </p>

        <h2>休みたい気持ちが続くときの相談先</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "こころの耳（厚生労働省）", d: "働く人のメンタルヘルスの相談窓口です。電話相談は0120-565-455（平日17時〜22時、土日10時〜16時。祝日・年末年始を除く）で、SNS・メールでも匿名・無料で相談できます。" },
            { t: "総合労働相談コーナー（都道府県労働局）", d: "有給休暇を取らせてもらえない、休んだことを理由に不利益な扱いを受けたなどの労働問題を、予約不要・無料で相談できます。労働基準法違反の疑いがある場合は、労働基準監督署などの担当部署に取り次がれます。" },
            { t: "医療機関・産業医", d: "体調の変化がある場合は医療機関を受診してください。常時50人以上の労働者を使用する事業場には産業医の選任義務があるため（労働安全衛生法第13条・同法施行令第5条）、社内の窓口から相談できる場合があります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>休みたい状態が続く場合は職場環境の見直しも</h2>
        <p className="mb-10">
          強いストレスの内容の上位は「仕事の量」「仕事の失敗、責任の発生等」「対人関係」です。休暇で回復しない場合は、部署異動の相談や、労働時間・有給休暇の取得状況が異なる職場への転職も選択肢になります。
          退職の手続きは<Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link>、職場の見分け方は<Link href="/knowledge/black-kigyo-tokucho/" className="text-teal font-bold hover:underline">ブラック企業の特徴</Link>のページにまとめています。
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
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
          <li><Link href="/knowledge/black-kigyo-tokucho/" className="text-teal font-bold hover:underline">ブラック企業の特徴</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日</Link></li>
          <li><Link href="/knowledge/when-to-start/" className="text-teal font-bold hover:underline">転職活動を始めるタイミング</Link></li>
          <li><Link href="/knowledge/dai2-shinsotsu-ote/" className="text-teal font-bold hover:underline">第二新卒で大手企業に転職できるか</Link></li>
          <li><Link href="/knowledge/ai-nakunaru-shigoto/" className="text-teal font-bold hover:underline">AIでなくなる仕事と平均年収</Link></li>
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
