import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sky株式会社の評判｜公式公表値で見る平均年収832万円・残業月16時間・定着率95%【2026年11月確認】",
  description:
    "Sky株式会社の評判を、口コミではなく同社と厚生労働省のデータベースの公表値で整理しています。平均年収は832万円（2025年度・残業代含む）、平均残業時間は月16.0時間、定着率は95%（2026年3月期）です。新卒3年以内の退職率、役職別モデル年収、テレワーク制度がない点も掲載しています。",
  alternates: { canonical: "/company/sky/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "Sky株式会社の評判｜公式公表値で見る平均年収・残業・定着率【2026年11月確認】",
    description: "Sky株式会社の働き方を、同社と厚生労働省のデータベースの公表値で整理しています。",
  },
};

const CHECKED = "2026年11月24日";
const COMPANY = "https://www.skygroup.jp/company/";
const DATA = "https://www.skygroup.jp/company/data/";
const MODEL = "https://www.sky-career.jp/system/model.html";
const GUIDE = "https://www.sky-recruit.jp/recruit/guideline/";
const BENEFIT = "https://www.skygroup.jp/recruit/benefit.html";
const POSITIVE = "https://positive-ryouritsu.mhlw.go.jp/positivedb/detail?id=4680";
const COMMEND = "https://www.skygroup.jp/company/commendation/";

// 企業データ（売上高・従業員数）。2026は2026年11月1日現在の従業員数
const growth = [
  { y: "2020年度", sales: "1,303.5億円", n: "3,148名" },
  { y: "2021年度", sales: "829.3億円", n: "3,339名" },
  { y: "2022年度", sales: "929.7億円", n: "3,492名" },
  { y: "2023年度", sales: "1,049.3億円", n: "3,577名" },
  { y: "2024年度", sales: "1,243.0億円", n: "3,867名" },
  { y: "2025年度（2026年3月期）", sales: "1,768.0億円", n: "4,329名" },
];

// 社員定着率＝（1－当期間内退職者数÷前期末社員数）×100（同社 企業データ）
const retention = [
  { term: "2022年3月期（38期）", hire: "348名（新卒160名／キャリア188名）", out: "149名", n: "3,213名", r: "95%" },
  { term: "2023年3月期（39期）", hire: "371名（新卒185名／キャリア186名）", out: "238名", n: "3,355名", r: "93%" },
  { term: "2024年3月期（40期）", hire: "385名（新卒178名／キャリア207名）", out: "267名", n: "3,490名", r: "92%" },
  { term: "2025年3月期（41期）", hire: "478名（新卒188名／キャリア290名）", out: "191名", n: "3,522名", r: "95%" },
  { term: "2026年3月期（42期）", hire: "635名（新卒296名／キャリア339名）", out: "174名", n: "3,801名", r: "95%" },
];

// 新卒3年以内の退職率（同社 企業データ）。2024年4月以降の入社は3年を経過していない
const fresh = [
  { y: "2020年4月", n: "188名", out: "20名", r: "10.6%", done: true },
  { y: "2021年4月", n: "160名", out: "21名", r: "13.1%", done: true },
  { y: "2022年4月", n: "185名", out: "24名", r: "13.0%", done: true },
  { y: "2023年4月", n: "178名", out: "15名", r: "8.4%", done: true },
  { y: "2024年4月", n: "188名", out: "9名", r: "4.8%", done: false },
  { y: "2025年4月", n: "296名", out: "15名", r: "5.1%", done: false },
];

// 役職別モデル年収（2025年度・残業代を含まない）
const model = [
  { k: "一般", v: "485万〜600万円" },
  { k: "リーダー", v: "540万〜660万円" },
  { k: "サブチーフ", v: "610万〜770万円" },
  { k: "チーフ", v: "730万〜860万円" },
  { k: "係長", v: "800万〜925万円" },
  { k: "課長代理", v: "940万〜1,100万円" },
  { k: "課長", v: "1,280万〜1,380万円" },
  { k: "次長", v: "1,400万〜1,580万円" },
  { k: "部長代理", v: "1,710万〜1,825万円" },
  { k: "部長", v: "2,010万〜2,130万円" },
];

const faqData = [
  {
    q: "Sky株式会社の評判は良いですか？",
    a: "当サイトでは社員口コミを掲載せず、同社と厚生労働省のデータベースの公表値で働き方を確認しています。同社の公表では、平均残業時間が月16.0時間（2025年度）、有給休暇取得率が76%（2025年度）、社員定着率が95%（2026年3月期）で、くるみん（2021年）・プラチナくるみん（2025年）の認定を受けています。一方で全社員出社が原則で、テレワークとフレックスタイム制度は採用していません。働き方の合う・合わないは、こうした制度の条件で判断することをおすすめします。",
  },
  {
    q: "Sky株式会社の平均年収はいくらですか？",
    a: "キャリア採用サイトの公表では、全社員の平均年収は2025年度が832万円（平均年齢34.2歳）、2024年度が798万円、2023年度が753万円です。取締役・執行役員・顧問等と当年度入社の新卒を除いた従業員の支給実績で、残業代を含みます。非上場のため有価証券報告書の平均年間給与はありません。",
  },
  {
    q: "Sky株式会社の残業は多いですか？",
    a: "新卒募集要項によると、2025年度の平均残業時間は月16.0時間です。開発職は月0〜9時間が26%、40時間以上が14%で、評価・検証職は40時間以上が10%です。女性の活躍推進企業データベースでは、開発職（社員）が月18.3時間、非開発職（社員）が月9.5時間と公表されています。",
  },
  {
    q: "Sky株式会社はテレワークができますか？",
    a: "同社の福利厚生ページでは、コミュニケーション密度を重視して全社員出社を原則とし、テレワークやフレックスタイム制度は採用していないと明記しています（顧客先に常駐する場合は常駐先の規定に従います）。在宅勤務を前提に転職先を探している場合は、応募前に確認が必要です。",
  },
  {
    q: "Sky株式会社の新卒の離職率はどのくらいですか？",
    a: "同社の企業データでは、新卒3年以内の退職率は2020年4月入社が10.6%、2021年4月入社が13.1%、2022年4月入社が13.0%、2023年4月入社が8.4%です。2024年4月以降の入社は3年を経過していないため、途中の値です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{children}</a>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "Sky株式会社の評判" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            Sky株式会社の評判｜公式公表値で見る平均年収832万円・残業月16時間・定着率95%
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "832万円", l: "全社員の平均年収（2025年度・残業代含む）" },
              { v: "16.0時間", l: "月の平均残業時間（2025年度）" },
              { v: "95%", l: "社員定着率（2026年3月期）" },
              { v: "76%", l: "有給休暇取得率（2025年度）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <div className="text-text-secondary leading-relaxed">
            <p>
              Sky株式会社は、クライアント運用管理ソフト「SKYSEA Client View」などの自社パッケージ商品と、受託のシステム開発・ソフトウェア評価を手がける東京・大阪2本社の会社です。
              同社の公表では、<strong>全社員の平均年収は832万円（2025年度）、平均残業時間は月16.0時間、社員定着率は95%</strong>です。
            </p>
            <p className="mt-2">
              当サイトでは出典を確認できない社員口コミは掲載せず、同社の公式サイト・採用サイトと、厚生労働省「女性の活躍推進企業データベース」の公表値で働き方を整理しています。
              公表値は会社が自ら示す数字のため、配属先の部署やプロジェクトによって実態が異なる場合があります。目安としてご覧ください。
            </p>
          </div>
          <p className="text-xs text-text-muted mt-3">
            出典：Sky株式会社 <A href={COMPANY}>会社概要</A>・<A href={DATA}>企業データ</A>・<A href={MODEL}>平均年収と役職別モデル年収</A>・<A href={GUIDE}>新卒募集要項</A>・<A href={BENEFIT}>福利厚生</A>、
            厚生労働省 <A href={POSITIVE}>女性の活躍推進企業データベース（Sky株式会社）</A>。いずれも{CHECKED}確認。
          </p>
        </div>

        <h2>会社概要と売上高・従業員数の推移</h2>
        <p>
          設立は1985年3月2日、資本金は15億円、従業員数は4,640名（2026年11月1日現在）、平均年齢は33.7歳（2026年4月1日現在）です（同社 会社概要）。
          支社は大阪・名古屋・札幌・仙台・大宮・横浜・静岡・三島・神戸・広島・松山・福岡・沖縄にあります。企業データに掲載されている売上高と従業員数は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年度</th>
                <th className="p-3 text-right">売上高</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数</th>
              </tr>
            </thead>
            <tbody>
              {growth.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.sales}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※出典：<A href={DATA}>Sky株式会社 企業データ</A>（{CHECKED}確認）。従業員数は2026年11月1日現在で4,640名です。2020年度から2021年度の売上高の減少について、同ページに理由の記載はありません。
        </p>

        <h2>年収：全社員の平均は832万円、役職別モデル年収も公表</h2>
        <p>
          キャリア採用サイトでは、全社員の平均年収を2025年度832万円（平均年齢34.2歳）、2024年度798万円（同35.2歳）、2023年度753万円（同35.2歳）と公表しています。
          取締役・執行役員・顧問等と当年度入社の新卒を除いた従業員の支給実績で、残業代を含みます。2023年度から2025年度にかけて79万円（約10.5%）増えています（当サイト計算）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">役職</th>
                <th className="p-3 text-right rounded-tr-lg">モデル年収（2025年度・残業代を含まない）</th>
              </tr>
            </thead>
            <tbody>
              {model.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※出典：<A href={MODEL}>Sky株式会社 平均年収と役職別モデル年収</A>（{CHECKED}確認）。同ページには副事業部長・事業部長のモデル年収も掲載されています。
        </p>
        <p className="mb-10">
          新卒の初任給は、2027年卒予定で大学卒（4年制）月給325,000円、大学院卒（修士課程）月給343,000円です（住宅手当25,000円を含む・<A href={GUIDE}>新卒募集要項</A>）。
          賞与は年2回（6月・12月）と決算賞与（3月）で、決算賞与は29年連続で支給したと記載されています。昇給は年1回（4月）です。
          ほかのIT企業の年収は<Link href="/company/" className="text-teal font-bold hover:underline">企業別転職ガイド</Link>で比較できます。
        </p>

        <h2>働き方：残業・休日・有給休暇・出社の方針</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-left">公表値</th>
                <th className="p-3 text-left rounded-tr-lg">出典</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "平均残業時間（全体）", v: "月16.0時間（2025年度）", s: "新卒募集要項" },
                { k: "平均残業時間（職種別）", v: "開発職（社員）月18.3時間／非開発職（社員）月9.5時間", s: "女性の活躍推進企業DB（2026年3月集計）" },
                { k: "残業の分布（開発職）", v: "0〜9時間 26%／10〜19時間 22%／20〜29時間 21%／30〜39時間 17%／40時間以上 14%", s: "新卒募集要項" },
                { k: "年間休日", v: "124日（2025年度実績・有給休暇を除く）", s: "新卒募集要項" },
                { k: "有給休暇取得率", v: "76%（2025年度）", s: "福利厚生ページ" },
                { k: "テレワーク・フレックスタイム", v: "採用していない（全社員出社が原則）", s: "福利厚生ページ" },
                { k: "定時退社日", v: "毎週水曜日と第1・第3金曜日", s: "福利厚生ページ" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 whitespace-nowrap">{x.k}</td>
                  <td className="p-3">{x.v}</td>
                  <td className="p-3 text-xs text-text-muted">{x.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          平均残業時間は全体で月16.0時間ですが、開発職では月40時間以上の人が14%いると公表されています。
          また、同社は全社員出社を原則とし、テレワークやフレックスタイム制度を採用していないと明記しています（顧客先に常駐する場合を除く）。
          残業の少なさと出社の方針はどちらも評判に影響しやすい点のため、在宅勤務を希望する方は応募前に確認してください。
          平均的な残業時間との比較は<Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link>にまとめています。
        </p>

        <h2>定着率と新卒3年以内の退職率</h2>
        <p>
          同社は社員定着率を「（1－当期間内退職者数÷前期末社員数）×100」と定義し、5期分を公表しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">入社数</th>
                <th className="p-3 text-right">退職者数</th>
                <th className="p-3 text-right">在籍者数</th>
                <th className="p-3 text-right rounded-tr-lg">定着率</th>
              </tr>
            </thead>
            <tbody>
              {retention.map((x) => (
                <tr key={x.term} className="border-b border-gray-100">
                  <td className="p-3 whitespace-nowrap">{x.term}</td>
                  <td className="p-3 text-right">{x.hire}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.out}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">新卒の入社年月</th>
                <th className="p-3 text-right">入社数</th>
                <th className="p-3 text-right">3年以内の退職者数</th>
                <th className="p-3 text-right rounded-tr-lg">退職率</th>
              </tr>
            </thead>
            <tbody>
              {fresh.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}{x.done ? "" : "（3年未経過）"}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.out}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※出典：<A href={DATA}>Sky株式会社 企業データ</A>（{CHECKED}確認）。</p>
        <p className="mb-10">
          3年を経過した2020〜2023年4月入社の新卒3年以内の退職率は8.4%〜13.1%です。
          キャリア採用の比率（労働施策総合推進法に基づく公表）は2023年度53.8%、2024年度61.0%、2025年度53.0%で、正規雇用の採用の半数以上が中途採用です。
        </p>

        <h2>両立支援・女性活躍の公表値と外部認定</h2>
        <p className="mb-4">
          女性の活躍推進企業データベースでは、管理職に占める女性の割合は7.0%（2026年4月1日現在・管理職201人中14人）、労働者に占める女性の割合は22.5%、男性の育児休業取得率は87.6%、女性は100%と公表されています。
          男女の平均継続勤務年数は男性9.2年、女性5.4年です。男女の賃金の差異（男性の賃金に対する女性の賃金の割合）は、全労働者で71.3%です。
        </p>
        <p className="mb-10">
          外部の認定では、厚生労働省の子育てサポート企業の認定「くるみん」（2021年）と「プラチナくるみん」（2025年）、女性活躍推進法の「えるぼし」2段階目（2026年4月に同社が発表）、経済産業省の健康経営優良法人2026（大規模法人部門）を受けています。
          製品面では、日経コンピュータ「顧客満足度調査2026-2027」の運用管理・仮想化ソフト/サービス部門【クライアント】で3年連続1位と同社が公表しています（<A href={COMMEND}>表彰・認定</A>）。
        </p>

        <h2>Sky株式会社への転職を考えるときの確認ポイント</h2>
        <ul className="mb-10">
          <li>配属：自社パッケージ商品の開発か、受託開発・評価／検証か。開発職は残業の分布が広いため、配属予定の部署の残業時間を面接で確認する。</li>
          <li>勤務地と常駐：全社員出社が原則のため、勤務する拠点と、顧客先に常駐する可能性の有無を確認する。</li>
          <li>年収：中途採用の募集要項ではサブチーフ610万円〜部長2,130万円の想定年収が示されています。提示の役職と、残業代を含むかどうかを確認する。</li>
        </ul>
        <p className="mb-10">
          IT業界の求人に強い転職エージェントは<Link href="/review/geekly/" className="text-teal font-bold hover:underline">ギークリーの評判</Link>や<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>で比較できます。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faqData.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1 mb-4">
          {[
            { label: "Sky株式会社 会社概要", url: COMPANY },
            { label: "Sky株式会社 企業データ（売上高・従業員数・定着率・新卒3年以内の退職率・採用比率）", url: DATA },
            { label: "Sky株式会社 キャリア採用 平均年収と役職別モデル年収", url: MODEL },
            { label: "Sky株式会社 新卒採用 募集要項", url: GUIDE },
            { label: "Sky株式会社 福利厚生", url: BENEFIT },
            { label: "Sky株式会社 表彰・認定", url: COMMEND },
            { label: "Sky株式会社 えるぼし認定取得のお知らせ（2026年4月2日）", url: "https://www.skygroup.jp/news/260402_02/" },
            { label: "厚生労働省 女性の活躍推進企業データベース（Sky株式会社）", url: POSITIVE },
            { label: "厚生労働省 両立支援のひろば（Sky株式会社・くるみん／プラチナくるみん）", url: "https://ryouritsu.mhlw.go.jp/hiroba/search_dtl.php?cn=43390" },
            { label: "経済産業省・日本健康会議 健康経営優良法人2026 認定法人一覧（大規模法人部門）", url: "https://kenko-keiei.jp/wp-content/uploads/2026/05/nintei2026_daikibo20260512.xlsx" },
          ].map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
