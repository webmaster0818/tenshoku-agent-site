import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/kyoin-yametai/" },
  title: "教員を辞めたいときに確認すること｜精神疾患の休職7,087人・離職理由・退職手当【文部科学省・総務省の統計】",
  description:
    "教員を辞めたいときに確認したい統計と制度を、文部科学省・総務省の資料と法令で整理しました。精神疾患による病気休職者は7,087人（令和6年度）、定年以外で離職した公立小中高の教員は15,540人です。休職中の収入、辞職の手続き、退職手当、教員免許の扱いも掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "教員を辞めたいときに確認すること｜精神疾患の休職7,087人・離職理由・退職手当",
    description: "人事行政状況調査・学校教員統計調査・教員勤務実態調査・地方公務員給与実態調査と法令から、教員の休職・離職・退職手続きを整理しています。",
  },
};

const CHECKED = "2026年11月22日";
const JINJI_URL = "https://www.mext.go.jp/a_menu/shotou/jinji/1411820_00009.htm";
const TOUKEI_URL = "https://www.mext.go.jp/content/20260722-mxt_chousa01-000050797_1.pdf";
const KINMU_URL = "https://www.mext.go.jp/content/20240404-mxt_zaimu01-100003067-1.pdf";
const TAISHOKU_URL = "https://www.soumu.go.jp/main_sosiki/jichi_gyousei/c-gyousei/kyuuyo/pdf/R7_kyuyo_1_03-7.pdf";

// 文部科学省「令和6年度 公立学校教職員の人事行政状況調査」1-1-4（精神疾患による病気休職者・教育職員）
const leaveTrend = [
  { y: "令和2年度", n: 5203, r: 0.57 },
  { y: "令和3年度", n: 5897, r: 0.64 },
  { y: "令和4年度", n: 6571, r: 0.72 },
  { y: "令和5年度", n: 7119, r: 0.77 },
  { y: "令和6年度", n: 7087, r: 0.77 },
];

// 同 1-1-4（4）年代別（令和6年度）
const leaveAge = [
  { k: "20代", n: 1310, r: 0.86 },
  { k: "30代", n: 2118, r: 0.95 },
  { k: "40代", n: 1767, r: 0.94 },
  { k: "50代以上", n: 1892, r: 0.64 },
];

// 同 1-1-19 精神疾患による病気休職者の要因に関する教育委員会の認識（全校種・全体）
const causes = [
  { k: "業務内容（児童・生徒に対する指導そのものに関すること）", v: 26.5 },
  { k: "職場の対人関係（上司、同僚、部下等）", v: 23.2 },
  { k: "業務内容（校務分掌や調査対応等、事務的な業務に関すること）", v: 12.7 },
  { k: "元々の精神疾患の悪化", v: 11.8 },
  { k: "個人的な対人関係（家族、プライベート関係）", v: 8.9 },
  { k: "職場外の者との対人関係（地域住民、保護者等）", v: 6.1 },
];

// 文部科学省「令和7年度 学校教員統計（中間報告）」離職の理由別 離職教員数（公立小学校・中学校・高等学校の合計。当サイトで3校種を合算）
const reasons = [
  { k: "定年（勧奨を含む）", r3: 16427, r6: 11996 },
  { k: "転職のため", r3: 4037, r6: 5080 },
  { k: "家庭の事情のため", r3: 2908, r6: 3569 },
  { k: "病気のため", r3: 1351, r6: 1757 },
  { k: "　うち精神疾患", r3: 950, r6: 1319 },
  { k: "職務上の問題のため", r3: 217, r6: 310 },
  { k: "死亡", r3: 329, r6: 303 },
  { k: "大学等入学のため", r3: 85, r6: 85 },
  { k: "その他", r3: 3754, r6: 4436 },
  { k: "計", r3: 29108, r6: 27536 },
];

// 校種別の内訳（令和6年度間）
const reasonsBySchool = [
  { k: "小学校", total: 13840, teinen: 5506, tenshoku: 2552, katei: 2269, byoki: 1040, seishin: 801 },
  { k: "中学校", total: 8371, teinen: 3620, tenshoku: 1745, katei: 974, byoki: 489, seishin: 365 },
  { k: "高等学校", total: 5325, teinen: 2870, tenshoku: 783, katei: 326, byoki: 228, seishin: 153 },
];

// 給特法 第3条第1項・附則第2項（e-Gov法令検索の現行条文）
const chosei = [
  { y: "2025年12月まで", v: "4%" },
  { y: "2026年（令和8年）1月〜12月", v: "5%" },
  { y: "2027年（令和9年）1月〜12月", v: "6%" },
  { y: "2028年（令和10年）1月〜12月", v: "7%" },
  { y: "2029年（令和11年）1月〜12月", v: "8%" },
  { y: "2030年（令和12年）1月〜12月", v: "9%" },
  { y: "2031年（令和13年）1月以降", v: "10%" },
];

// 総務省「令和7年4月1日 地方公務員給与実態調査」第9表の1（都道府県・教育公務員・令和6年度の退職者）
// 自己都合退職：人員と手当総額（千円）から当サイトで1人あたり平均を計算
const selfQuit = [
  { k: "25〜29歳", n: 2388, sum: 1464539 },
  { k: "30〜34歳", n: 1662, sum: 2072300 },
  { k: "35〜39歳", n: 1322, sum: 3515439 },
  { k: "40〜44歳", n: 959, sum: 4047098 },
  { k: "45〜49歳", n: 677, sum: 3637892 },
  { k: "50〜51歳", n: 222, sum: 1640749 },
  { k: "52〜53歳", n: 222, sum: 1811576 },
  { k: "全年齢計", n: 9909, sum: 31556330 },
];
const man = (sumThousand: number, n: number) => `約${Math.round(sumThousand / n / 10).toLocaleString("ja-JP")}万円`;
const num = (n: number) => n.toLocaleString("ja-JP");

const faq = [
  {
    q: "公立学校の教員は、年度の途中でも辞められますか？",
    a: "地方公務員法には辞職の時期を制限する条文はなく、年度の途中でも辞職願を提出して任命権者の承認を受ければ退職できます。ただし、学級担任や授業の引き継ぎがあるため、提出時期や退職日の目安は教育委員会ごとに運用が異なります。新潟県教育委員会の辞職願の様式では、年度途中の正規職員の辞職について、辞職願の日付を校長の意見具申以前の日とするよう注記されています。まず校長に相談し、勤務先の教育委員会の様式と手順を確認してください。",
  },
  {
    q: "教員を辞めると失業保険（雇用保険の基本手当）はもらえますか？",
    a: "公立学校の教員は地方公務員であり、雇用保険法第6条第6号により原則として雇用保険の適用が除外されています。そのため、退職後に雇用保険の基本手当は支給されません。国家公務員には、退職手当が雇用保険の基本手当に相当する額に満たない場合に差額を支給する「失業者の退職手当」の規定があります（国家公務員退職手当法第10条）。地方公務員の扱いは各自治体の退職手当条例によるため、教育委員会の人事・給与担当に確認してください。",
  },
  {
    q: "精神疾患で休職した教員は、その後どうなっていますか？",
    a: "文部科学省「令和6年度 公立学校教職員の人事行政状況調査」では、精神疾患による病気休職者7,087人の令和7年4月1日時点の状況は、復職が2,857人（40.3%）、引き続き休職が2,772人（39.1%）、退職が1,458人（20.6%）です。休職者の約6割は復職または休職を継続しており、休職がそのまま退職につながるとは限りません。",
  },
  {
    q: "教員免許は、教員を辞めると使えなくなりますか？",
    a: "2022年7月1日に教員免許更新制が廃止され、その時点で有効だった免許状（休眠状態のものを含む）は、手続きなしで有効期限のない免許状になりました（文部科学省）。退職後も免許状は失効しないため、私立学校や他の自治体の採用選考を受ける際にも使えます。2022年6月30日までに期限切れで失効した免許状は、都道府県教育委員会への再授与申請で有効期限のない免許状を受けられます。",
  },
  {
    q: "教職調整額が10%に上がるなら、辞めずに待つべきですか？",
    a: "給特法の改正により、教職調整額の基準は2026年1月に4%から5%となり、2031年1月に10%となるまで毎年1%ずつ引き上げられます。給料月額に対する割合のため、引き上げ幅は人によって異なります。一方で、時間外勤務手当を支給しない仕組み（給特法第3条第2項）は維持されています。収入面だけでなく、心身の状態や勤務時間の見通しも含めて判断することをおすすめします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "文部科学省「令和6年度 公立学校教職員の人事行政状況調査について」（概要・1-1-2・1-1-4・1-1-9・1-1-11・1-1-19）", url: JINJI_URL },
  { label: "文部科学省 同調査 1-1-4 精神疾患による病気休職者の学校種別・性別・職種別・年代別状況（過去5年間）", url: "https://www.mext.go.jp/content/20251217-mxt_syoto01-000046407_5.pdf" },
  { label: "文部科学省 同調査 1-1-9 精神疾患による休職者の状況（休職発令後の状況）", url: "https://www.mext.go.jp/content/20251217-mxt_syoto01-000046407_10.pdf" },
  { label: "文部科学省 同調査 1-1-19 精神疾患による病気休職者の要因に関する教育委員会の認識", url: "https://www.mext.go.jp/content/20251217-mxt_syoto01-000046407_20.pdf" },
  { label: "文部科学省「令和7年度 学校教員統計（学校教員統計調査の結果）中間報告」（令和8年7月22日公表）", url: TOUKEI_URL },
  { label: "文部科学省「教員勤務実態調査（令和4年度）集計【確定値】」", url: KINMU_URL },
  { label: "e-Gov法令検索 公立の義務教育諸学校等の教育職員の給与等に関する特別措置法（第3条・附則第2項）", url: "https://laws.e-gov.go.jp/law/346AC0000000077" },
  { label: "文部科学省 給特法等改正法の概要（教師を取り巻く環境整備特別部会 参考資料）", url: "https://www.mext.go.jp/content/20251015-mext_zaimu-00030_9.pdf" },
  { label: "e-Gov法令検索 地方公務員法（第28条 降任、免職、休職等）", url: "https://laws.e-gov.go.jp/law/325AC0000000261" },
  { label: "e-Gov法令検索 教育公務員特例法（第14条 休職の期間及び効果）", url: "https://laws.e-gov.go.jp/law/324AC0000000001" },
  { label: "e-Gov法令検索 一般職の職員の給与に関する法律（第23条 休職者の給与）", url: "https://laws.e-gov.go.jp/law/325AC0000000095" },
  { label: "e-Gov法令検索 地方教育行政の組織及び運営に関する法律（第37条 任命権者）", url: "https://laws.e-gov.go.jp/law/331AC0000000162" },
  { label: "e-Gov法令検索 教育職員免許法（第9条 効力）", url: "https://laws.e-gov.go.jp/law/324AC0000000147" },
  { label: "e-Gov法令検索 雇用保険法（第6条 適用除外）", url: "https://laws.e-gov.go.jp/law/349AC0000000116" },
  { label: "e-Gov法令検索 国家公務員退職手当法（第10条 失業者の退職手当）", url: "https://laws.e-gov.go.jp/law/328AC0000000182" },
  { label: "公立学校共済組合 傷病手当金/傷病手当金附加金", url: "https://www.kouritu.or.jp/kumiai/tanki/kyugyo/shobyo/index.html" },
  { label: "公立学校共済組合 心と体の健康情報（健康相談事業のご案内）", url: "https://www.kouritu.or.jp/kokoro/index.html" },
  { label: "総務省「令和7年4月1日 地方公務員給与実態調査結果」第9表の1 団体区分別、職員区分別、退職事由別、年齢別退職者数及び退職手当額", url: TAISHOKU_URL },
  { label: "新潟県教育委員会 辞職願の様式（勧奨退職・普通退職）", url: "https://www.pref.niigata.lg.jp/uploaded/attachment/288532.pdf" },
  { label: "文部科学省 教員免許更新制（アーカイブ）", url: "https://www.mext.go.jp/a_menu/shotou/koushin/index.htm" },
  { label: "文部科学省「令和4年7月1日以降の教員免許状の扱いについて」", url: "https://www.mext.go.jp/content/20221028-mxt_kyoikujinzai02-100002420_3.pdf" },
  { label: "厚生労働省 こころの耳電話相談", url: "https://kokoro.mhlw.go.jp/tel-soudan/" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "教員を辞めたいときに確認すること" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            教員を辞めたいときに確認すること｜精神疾患の休職7,087人・離職理由・退職手当【文部科学省・総務省の統計】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "7,087人", l: "精神疾患による病気休職者（令和6年度・在職者の0.77%）" },
              { v: "15,540人", l: "定年以外の理由で離職した公立小中高の教員（令和6年度間）" },
              { v: "5,080人", l: "うち「転職のため」の離職（定年以外の32.7%）" },
              { v: "11時間01分", l: "中学校教諭の平日1日あたり在校等時間（令和4年度）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            教員を辞めたいと感じたときは、すぐに退職を決める前に、<strong>病気休暇・病気休職</strong>と<strong>休職中の収入（給与・傷病手当金）</strong>、<strong>公的な相談窓口</strong>を確認することをおすすめします。
            文部科学省の調査では、令和6年度に精神疾患で病気休職した公立学校の教育職員は7,087人で、その後の状況は復職40.3%・休職継続39.1%・退職20.6%です。
            退職する場合は、辞職願の提出時期や様式が教育委員会ごとに異なるため、まず校長に相談します。公立学校の教員は雇用保険の適用が除外されており、退職後に失業給付を受けられない点にも注意が必要です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            本ページは、文部科学省・総務省・公立学校共済組合の公表資料と法令を{CHECKED}に確認してまとめたものです。数値は公立学校の教員を対象としています。私立学校の教員の制度は勤務先の就業規則をご確認ください。
          </p>
        </div>

        <h2>辞めたいと感じたときの選択肢</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">選択肢</th>
                <th className="p-3 text-left">根拠・手続き</th>
                <th className="p-3 text-left">収入の扱い</th>
                <th className="p-3 text-left rounded-tr-lg">検討する場面</th>
              </tr>
            </thead>
            <tbody>
              {[
                { a: "病気休暇", b: "各自治体の条例・規則（日数は自治体による）", c: "条例・規則による", d: "医師の診断があり、短期間の療養で回復が見込める" },
                { a: "病気休職", b: "地方公務員法 第28条第2項第1号（心身の故障のため長期の休養を要する場合）", c: "期間と給与は条例で定める。給与が減額・不支給の期間は共済組合の傷病手当金", d: "長期間の療養が必要" },
                { a: "異動・校種の変更", b: "人事異動の希望（教育委員会の人事の手続き）", c: "教員としての給与が続く", d: "職場の対人関係や担当業務が主な負担になっている" },
                { a: "辞職（自己都合退職）", b: "辞職願を提出し、任命権者が承認", c: "退職手当（自己都合の支給率）。雇用保険の基本手当は対象外", d: "教員以外の仕事に移る、または家庭の事情などで続けられない" },
                { a: "私立学校・他の自治体の教員", b: "各学校・各自治体の採用選考", c: "採用先の給与体系による", d: "教員の仕事は続けたいが、勤務先を変えたい" },
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
          ※公立学校の校長・教員が結核性疾患で休職する場合は、期間が満2年（最長満3年まで延長可）で、給与の全額が支給されます（教育公務員特例法第14条）。それ以外の病気休職の期間・給与は各自治体の条例で定められています。
        </p>

        <h2>精神疾患による病気休職者の推移（文部科学省 人事行政状況調査）</h2>
        <p>
          公立の小学校・中学校・義務教育学校・高等学校・中等教育学校・特別支援学校の教育職員（総計922,776人・令和6年5月1日現在）のうち、令和6年度に精神疾患で病気休職した人は7,087人です。令和5年度の7,119人から32人減少しましたが、在職者に占める割合は0.77%で横ばいです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年度</th>
                <th className="p-3 text-right">精神疾患による病気休職者</th>
                <th className="p-3 text-right rounded-tr-lg">在職者に占める割合</th>
              </tr>
            </thead>
            <tbody>
              {leaveTrend.map((x) => (
                <tr key={x.y} className={`border-b border-gray-100 ${x.y === "令和6年度" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right">{num(x.n)}人</td>
                  <td className="p-3 text-right">{x.r.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同調査 1-1-4。令和2年度から令和6年度の5年間で1,884人（36.2%）増加しています（当サイト計算）。</p>
        <p className="mb-4">
          病気休職者全体（精神疾患以外を含む）は9,260人（1.00%）です。1か月以上の病気休暇を取得した人を含めると、精神疾患による休職・休暇の取得者は13,310人（1.44%）となります（同調査 1-1-2・1-1-11）。
          学校種別の割合は、特別支援学校0.99%、小学校0.83%、中学校0.71%、高等学校0.58%です。
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">年代（令和6年度）</th>
                  <th className="p-3 text-right">休職者</th>
                  <th className="p-3 text-right rounded-tr-lg">割合</th>
                </tr>
              </thead>
              <tbody>
                {leaveAge.map((x) => (
                  <tr key={x.k} className="border-b border-gray-100">
                    <td className="p-3">{x.k}</td>
                    <td className="p-3 text-right">{num(x.n)}人</td>
                    <td className="p-3 text-right">{x.r.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left rounded-tl-lg">休職発令後の状況（令和7年4月1日）</th>
                  <th className="p-3 text-right rounded-tr-lg">人数・割合</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { k: "復職", v: "2,857人（40.3%）" },
                  { k: "引き続き休職", v: "2,772人（39.1%）" },
                  { k: "退職", v: "1,458人（20.6%）" },
                ].map((x) => (
                  <tr key={x.k} className="border-b border-gray-100">
                    <td className="p-3">{x.k}</td>
                    <td className="p-3 text-right font-bold">{x.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※年代別の割合は同調査 1-1-4（4）の値です。休職発令後の状況は同調査 1-1-9 で、令和6年度に精神疾患で休職していた7,087人（令和6年度中の新規発令4,239人と、前年度以前からの継続2,848人の合計）が対象です。
        </p>
        <p className="mb-4">
          休職の要因について教育委員会に尋ねた結果では、児童・生徒への指導そのものに関する業務と、職場の対人関係が上位です。20代では「指導そのもの」が33.5%、「職場の対人関係」が27.1%で、全体より高くなっています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">精神疾患による病気休職の要因（教育委員会の認識・上位6項目）</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {causes.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right font-bold">{x.v}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※同調査 1-1-19。教育委員会が把握した要因の回答の構成比で、「その他」「教育委員会として把握していない」を除いて算出されています。休職者本人への調査ではありません。
        </p>

        <h2>教員の離職理由（文部科学省 学校教員統計調査）</h2>
        <p>
          学校教員統計調査は3年ごとに実施される悉皆調査です。令和7年度調査の中間報告（令和8年7月22日公表）では、令和6年度間に公立の小学校・中学校・高等学校を離職した教員は27,536人で、このうち定年（勧奨を含む）以外の理由による離職は15,540人です。
          前回調査（令和3年度間）の12,681人から2,859人増えており、定年以外の理由では「転職のため」が最も多くなっています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">離職の理由（公立小中高の合計）</th>
                <th className="p-3 text-right">令和3年度間</th>
                <th className="p-3 text-right rounded-tr-lg">令和6年度間</th>
              </tr>
            </thead>
            <tbody>
              {reasons.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "計" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3 whitespace-pre">{x.k}</td>
                  <td className="p-3 text-right">{num(x.r3)}人</td>
                  <td className="p-3 text-right">{num(x.r6)}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同調査 中間報告の「離職の理由別 離職教員数」の公立小学校・公立中学校・公立高等学校の値を当サイトで合算しました。確定値は令和9年3月に公表される予定のため、数値が改定される場合があります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">校種（令和6年度間）</th>
                <th className="p-3 text-right">離職者計</th>
                <th className="p-3 text-right">定年</th>
                <th className="p-3 text-right">転職</th>
                <th className="p-3 text-right">家庭の事情</th>
                <th className="p-3 text-right">病気</th>
                <th className="p-3 text-right rounded-tr-lg">うち精神疾患</th>
              </tr>
            </thead>
            <tbody>
              {reasonsBySchool.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{x.k}</td>
                  <td className="p-3 text-right">{num(x.total)}人</td>
                  <td className="p-3 text-right">{num(x.teinen)}人</td>
                  <td className="p-3 text-right">{num(x.tenshoku)}人</td>
                  <td className="p-3 text-right">{num(x.katei)}人</td>
                  <td className="p-3 text-right">{num(x.byoki)}人</td>
                  <td className="p-3 text-right">{num(x.seishin)}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          定年以外の離職15,540人の内訳は、転職32.7%、家庭の事情23.0%、病気11.3%（うち精神疾患8.5%）、その他28.5%です（当サイト計算）。精神疾患による離職は1,319人で、前回調査の950人から369人増えています。
          なお、本調査では「転職のため」の離職者がどのような職業に移ったかは公表されていません。転職先の業種・職種について統計で示すことはできないため、当ページでは推測による転職先の順位付けは行っていません。
        </p>

        <h2>教員の勤務時間（教員勤務実態調査 令和4年度）</h2>
        <p>
          文部科学省が令和4年度に実施した教員勤務実態調査（10・11月の連続する7日間）では、教諭の1日あたりの在校等時間は、平日で小学校10時間45分、中学校11時間01分です。平成28年度と比べて約30分短くなりましたが、同省は「依然として長時間勤務の教師が多い状況」としています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">教諭の1日あたり在校等時間</th>
                <th className="p-3 text-right">平成28年度</th>
                <th className="p-3 text-right">令和4年度</th>
                <th className="p-3 text-right rounded-tr-lg">1週間の目安（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "小学校・平日", a: "11時間15分", b: "10時間45分", c: "約55時間" },
                { k: "小学校・土日", a: "1時間07分", b: "36分", c: "（平日5日＋土日2日で計算）" },
                { k: "中学校・平日", a: "11時間32分", b: "11時間01分", c: "約60時間" },
                { k: "中学校・土日", a: "3時間22分", b: "2時間18分", c: "（平日5日＋土日2日で計算）" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.a}</td>
                  <td className="p-3 text-right font-bold">{x.b}</td>
                  <td className="p-3 text-right">{x.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※「教諭」には主幹教諭・指導教諭を含みます。1週間の目安は、令和4年度の平日の値×5日＋土日の値×2日で当サイトが計算した概算です（小学校54時間57分、中学校59時間41分）。1週間あたりの正規の勤務時間は38時間45分です（同調査）。
        </p>
        <p className="mb-10">
          給特法等の改正法の附則では、政府は令和11年度までに教育職員の1か月の時間外在校等時間を平均30時間程度に削減することを目標とし、授業時数の削減や教職員定数の改定などの措置を講ずるとされています（文部科学省 改正法の概要）。
        </p>

        <h2>教職調整額の引き上げ（2025年 給特法改正）</h2>
        <p>
          公立学校の教員には時間外勤務手当・休日勤務手当が支給されず（給特法第3条第2項）、代わりに給料月額の一定割合の教職調整額が支給されます。2025年の給特法改正により、教職調整額の基準は4%から10%まで段階的に引き上げられることになりました。処遇改善に関する規定は2026年1月1日に施行されています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">期間</th>
                <th className="p-3 text-right rounded-tr-lg">教職調整額の基準（給料月額に対する割合）</th>
              </tr>
            </thead>
            <tbody>
              {chosei.map((x) => (
                <tr key={x.y} className={`border-b border-gray-100 ${x.y.startsWith("2026") ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※給特法第3条第1項・附則第2項（e-Gov法令検索で{CHECKED}に確認した現行条文）。実際の支給額は、この基準をもとに各自治体の条例で定められます。幼稚園の教育職員は4%のまま据え置かれ、校長・副校長・教頭は支給対象外です。
          退職手当や期末・勤勉手当を給料をもとに算定する場合は、給料に教職調整額を加えた額を算定の基礎とするよう条例で定めることとされています（同条第3項）。
        </p>

        <h2>休職中の収入（給与と傷病手当金）</h2>
        <p>
          病気休職中の給与の扱いは各自治体の条例で定められています。参考として、国家公務員の場合は、結核性疾患以外の心身の故障による休職では、休職期間が満1年に達するまで俸給・扶養手当・地域手当・期末手当などの100分の80を支給できると定められています（一般職の職員の給与に関する法律第23条第3項）。
        </p>
        <p className="mb-4">
          給与が減額または支給されない期間は、公立学校共済組合の<strong>傷病手当金</strong>の対象になります。公立学校共済組合の案内では、内容は次のとおりです。
        </p>
        <div className="space-y-4 mb-4">
          {[
            { t: "支給される期間", d: "病気やけがの療養のため勤務できなくなった日から起算して4日目から1年6か月（結核性の病気は3年）に、附加給付の6か月を加えた期間です。" },
            { t: "1日あたりの額", d: "支給開始日の属する月以前の直近12か月の標準報酬月額の平均額の22分の1の、3分の2に相当する額です（組合員期間が12か月以上の場合）。協会けんぽなどの健康保険（30分の1）とは計算の基礎が異なります。" },
            { t: "給与との調整", d: "休職・休業期間中であっても給与が支給されている場合は、その額が控除されます。" },
            { t: "退職後の継続", d: "引き続き1年以上組合員であった人が退職した場合で、在職中に傷病手当金を受けていたか受けられる状況にあったときは、資格喪失後も傷病手当金を受けられます（附加給付はありません）。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※計算例（目安）：標準報酬月額の平均が30万円の場合、30万円÷22×2/3で1日あたり約9,090円です（当サイト計算。端数処理により実際の額は異なります）。正確な額は所属する共済組合の支部で確認してください。
        </p>

        <h2>公立学校の教員が辞めるときの手続き</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "1. 校長（管理職）に相談する", d: "退職の意向と希望する退職日を伝えます。学級担任・授業・校務分掌の引き継ぎがあるため、退職日の目安や提出時期は教育委員会・学校ごとの運用を確認します。" },
            { t: "2. 辞職願を提出する", d: "様式は教育委員会が定めています。例として新潟県教育委員会の普通退職の辞職願は、県教育委員会あてに理由と退職日を記入し、氏名を自筆とする様式です。年度途中の正規職員の辞職については、辞職願の日付を校長の意見具申以前の日とするよう注記されています。" },
            { t: "3. 任命権者が承認し、辞令が交付される", d: "市町村立の小・中学校などの県費負担教職員の任命権は都道府県教育委員会にあります（地方教育行政の組織及び運営に関する法律第37条）。都道府県立学校は都道府県教育委員会、政令指定都市の市立学校はその市の教育委員会が人事を担当しています。" },
            { t: "4. 退職後の手続きを確認する", d: "退職手当の請求、公立学校共済組合の資格喪失後の医療保険（任意継続組合員・国民健康保険など）、年金の手続きを確認します。公立学校の教員は雇用保険の適用が除外されているため（雇用保険法第6条第6号）、ハローワークの基本手当は受けられません。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※地方公務員法には、辞職の手続きや時期を定めた条文はありません。民間企業の労働者に適用される民法第627条（期間の定めのない雇用は、解約の申入れから2週間で終了する規定）とは扱いが異なります。退職日は任命権者の承認によって確定するため、希望日がある場合は早めに相談してください。民間企業の退職手続きは<Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link>で解説しています。
        </p>

        <h2>退職手当の平均額（総務省 地方公務員給与実態調査）</h2>
        <p>
          総務省「令和7年4月1日 地方公務員給与実態調査」の第9表の1から、都道府県の教育公務員が令和6年度に退職した際の退職手当を、当サイトで1人あたりの平均額に計算しました。自己都合退職の退職手当は、勤続年数が長いほど高くなる仕組みのため、年齢が上がるにつれて平均額も大きくなります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">退職時の年齢（自己都合退職）</th>
                <th className="p-3 text-right">退職者数</th>
                <th className="p-3 text-right rounded-tr-lg">1人あたり平均（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {selfQuit.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "全年齢計" ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{num(x.n)}人</td>
                  <td className="p-3 text-right">{man(x.sum, x.n)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※同表の「自己都合の退職等（条例（案）第3条）」のうち「自己都合」の人員と手当総額（千円）から、手当総額÷人員で計算しました。年齢別の集計のため、同じ年齢でも勤続年数によって支給額は大きく異なります。都道府県の教育公務員（都道府県立学校の教員と県費負担教職員）が対象で、政令指定都市・市町村の職員は含みません。
        </p>
        <p className="mb-10">
          比較として、同じ表で25年以上勤続して定年で退職した都道府県の教育公務員（60歳・61歳）は20,367人で、1人あたりの平均は約2,286万円です（当サイト計算）。退職手当の具体的な額は、勤続年数・退職理由・退職時の給料月額によって決まるため、教育委員会の給与担当で試算を確認してください。
        </p>

        <h2>教員免許の扱い（2022年7月の更新制廃止）</h2>
        <p className="mb-4">
          2022年5月11日に成立した改正教育職員免許法により、教員免許更新制は2022年7月1日から廃止されました（文部科学省は「発展的に解消」と表現しています）。施行日時点で有効だった教員免許状は、休眠状態のものを含め、手続きなしで有効期限のない免許状になりました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">2022年6月30日以前に有効期限を過ぎた免許状</th>
                <th className="p-3 text-left">期限満了時点で現職の教師</th>
                <th className="p-3 text-left rounded-tr-lg">期限満了時点で現職でない人</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3">新免許状（2009年4月1日以降に初めて授与）</td>
                <td className="p-3">失効</td>
                <td className="p-3">失効</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">旧免許状（2009年3月31日以前に初めて授与）</td>
                <td className="p-3">失効</td>
                <td className="p-3">休眠（2022年7月1日に有効期限のない免許状へ）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※文部科学省「令和4年7月1日以降の教員免許状の扱いについて」。失効した免許状は、都道府県教育委員会に再授与申請を行うことで、有効期限のない免許状の授与を受けられます（一部の経過措置で授与された免許状を除く）。現在教員として勤務している人が退職しても、免許状が失効することはありません。
        </p>

        <h2>教員を辞めた後の進路について</h2>
        <p className="mb-4">
          前述のとおり、学校教員統計調査では「転職のため」の離職が令和6年度間に5,080人ですが、転職先の内訳は公表されていません。そのため当サイトでは、特定の職種を「教員からの転職に有利」と断定する記載は控えています。統計と制度から確認できる点は次のとおりです。
        </p>
        <div className="space-y-4 mb-10">
          {[
            { t: "教員として再び採用される道がある", d: `同調査の中間報告では、令和6年度間に公立中学校に採用された${num(10821)}人のうち、非常勤講師等からが${num(2678)}人、民間企業からが${num(196)}人、公立高等学校では${num(5426)}人のうち民間企業からが${num(135)}人です。免許状に有効期限がなくなったため、民間企業などで働いた後に教員に戻る選択も制度上可能です。` },
            { t: "私立学校・他の自治体の教員", d: "普通免許状は全ての都道府県で効力を有します（教育職員免許法第9条）。勤務地や学校の方針が合わないことが主な理由であれば、私立学校や他の都道府県・政令指定都市の採用選考を受ける方法があります。採用選考の時期や年齢要件は各自治体・各学校の募集要項で確認してください。" },
            { t: "民間企業への転職", d: "公務員から民間企業に移る場合は、職務経歴書で授業・学級経営・校務分掌などの業務を企業の採用担当者に伝わる言葉で整理する必要があります。書き方は職務経歴書のページで解説しています。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>教員が利用できる公的な相談窓口</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "公立学校共済組合の健康相談事業", d: "組合員とその被扶養者を対象に、LINEを使ったメンタルヘルス相談（心ほっとサポート@公立学校共済）、電話・面談メンタルヘルス相談、Web相談（こころの相談）、教職員電話健康相談24などを実施しています。利用方法は公立学校共済組合の「組合員専用ページ」と、メンタルヘルスサイト「ここりんく」に掲載されています。" },
            { t: "勤務先の教育委員会の相談窓口", d: "教育委員会によっては、教職員向けのメンタルヘルス相談や復職支援の窓口を設けています。設置状況・受付時間は自治体によって異なるため、勤務先の教育委員会の福利厚生・健康管理の担当ページで確認してください。人事行政状況調査では、復職支援プログラムの利活用状況（1-1-18）も公表されています。" },
            { t: "こころの耳（厚生労働省）", d: "働く人のメンタルヘルスの相談窓口です。電話相談は0120-565-455（平日17時〜22時、土日10時〜16時。祝日・振替休日・年末年始を除く）で、教員も利用できます。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>教員・公務員向けのキャリア支援サービス</h2>
        <p className="mb-10">
          続けるか辞めるかを決める前にキャリアを整理したい場合は、教員・公務員を対象とするキャリア支援サービスもあります。
          当サイトで紹介している<Link href="/review/kujilabo/" className="text-teal font-bold hover:underline">クジラボ</Link>は、教員・自治体職員・公安職員・看護師・介護福祉職員向けのキャリアプログラムを提供するサービスで、求人紹介型の転職エージェントではなく、キャリアプログラム・コーチング型のサービスです。教員向けにはメンタルスキルプログラムも用意されており、公式サイトに無料相談予約の導線があります（2026年8月22日に当サイトで公式サイトを確認した内容です）。
          プログラムの料金体系は公式サイトでご確認ください。民間企業への転職の意思が固まっている場合は、求人紹介型の転職エージェントとの比較を<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>で解説しています。
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
          <li><Link href="/review/kujilabo/" className="text-teal font-bold hover:underline">クジラボの特徴と公式データ（教員・公務員向けキャリア支援）</Link></li>
          <li><Link href="/knowledge/komuin-yametai/" className="text-teal font-bold hover:underline">公務員を辞めたいときに確認すること（退職手当・失業時の給付）</Link></li>
          <li><Link href="/knowledge/shigoto-yasumitai/" className="text-teal font-bold hover:underline">仕事を休みたいときに使える制度</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方</Link></li>
          <li><Link href="/knowledge/resume/" className="text-teal font-bold hover:underline">職務経歴書の書き方</Link></li>
          <li><Link href="/knowledge/when-to-start/" className="text-teal font-bold hover:underline">転職エージェントに登録するタイミング</Link></li>
          <li><Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link></li>
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
