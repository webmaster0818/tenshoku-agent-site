import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/iryojimu-tenshoku/" },
  title: "医療事務の転職｜一般事務の有効求人倍率は0.29倍・統計上の職種区分と資格の現状【2026年 公的統計で確認】",
  description:
    "医療事務への転職・医療事務からの転職を、厚生労働省の一般職業紹介状況・賃金構造基本統計調査・雇用動向調査で確認しました。医療事務員は統計上「その他の一般事務従事者」に分類され、一般事務従事者の有効求人倍率は0.29倍（2026年9月）です。終了した認定試験の実績も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "医療事務の転職｜一般事務の有効求人倍率は0.29倍・統計上の職種区分と資格の現状【2026年】",
    description: "公的統計で、医療事務の求人倍率・賃金・医療福祉の離職率と、資格試験の現状を確認しています。",
  },
};

const CHECKED = "2026年11月25日";
const annual = (m: number, b: number) => (m * 12 + b) / 10;
const f1 = (v: number) => `約${(Math.round(v * 10) / 10).toLocaleString("ja-JP", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}万円`;

// 厚生労働省「一般職業紹介状況」第21表-14 有効求人倍率（パートタイムを除く常用・実数）
const RATIO = [
  { k: "職業計", s2609: 1.18, s2608: 1.17, s2509: 1.18, y2025: 1.21 },
  { k: "事務従事者", s2609: 0.38, s2608: 0.37, s2509: 0.40, y2025: 0.42 },
  { k: "一般事務従事者", s2609: 0.29, s2608: 0.29, s2509: 0.31, y2025: 0.32 },
];

// 厚生労働省「令和7年 賃金構造基本統計調査」（職種）第1表・第5表「その他の一般事務従事者」一般労働者・産業計（千円・十人）
const JIMU = {
  all: { age: 44.0, ten: 12.6, ot: 9, m: 331.8, b: 1001.5, w: 95067 },
  male: { age: 45.6, m: 418.3, b: 1397.6, w: 35174 },
  female: { age: 43.1, ten: 10.6, m: 280.9, b: 768.8, w: 59893 },
  small: { m: 269.6, b: 619.0, w: 16628 }, // 企業規模10〜99人・男女計
};
const JIMU_AGE = [
  { age: "20〜24歳", m: 239.2, b: 414.6 },
  { age: "25〜29歳", m: 279.8, b: 793.7 },
  { age: "30〜34歳", m: 304.3, b: 912.3 },
  { age: "35〜39歳", m: 341.3, b: 1155.5 },
  { age: "40〜44歳", m: 366.9, b: 1117.4 },
  { age: "45〜49歳", m: 346.9, b: 1093.9 },
  { age: "50〜54歳", m: 357.7, b: 1149.6 },
];

// 厚生労働省「令和7年 雇用動向調査結果の概要」表4-2（%）
const TURNOVER = [
  { k: "医療，福祉", inAll: 14.5, outAll: 14.3, inReg: 13.1, outReg: 13.6 },
  { k: "産業計", inAll: 14.7, outAll: 13.7, inReg: 12.0, outReg: 11.4 },
];

// 公益財団法人 日本医療保険事務協会「診療報酬請求事務能力認定試験」試験実績（医科）
const EXAM = [
  { n: "第63回（2025年12月・最終回）", ex: 2056, pass: 861, rate: 41.9 },
  { n: "第62回（2025年7月）", ex: 1482, pass: 514, rate: 34.7 },
  { n: "第61回（2024年12月）", ex: 2594, pass: 1069, rate: 41.2 },
  { n: "第60回（2024年7月）", ex: 1665, pass: 553, rate: 33.2 },
];

const faq = [
  {
    q: "医療事務の求人倍率はどのくらいですか？",
    a: "厚生労働省の一般職業紹介状況では医療事務だけの倍率は公表されていません。医療事務員が分類される「一般事務従事者」の有効求人倍率（パートタイムを除く常用）は2026年9月で0.29倍、職業計は1.18倍です。ハローワークの求人・求職にもとづく値で、求職者1人あたりの求人が0.3件に満たない状態です。",
  },
  {
    q: "医療事務の年収はどのくらいですか？",
    a: `医療事務だけの賃金統計はありません。医療事務員が分類される「その他の一般事務従事者」（産業計）の平均は、所定内給与額×12か月＋年間賞与で${f1(annual(JIMU.all.m, JIMU.all.b))}、女性は${f1(annual(JIMU.female.m, JIMU.female.b))}です（令和7年 賃金構造基本統計調査・当サイト計算）。広報・法務など医療以外の事務も含む区分のため、医療機関の事務の水準とは異なる可能性があります。`,
  },
  {
    q: "医療事務に転職するのに資格は必要ですか？",
    a: "厚生労働省の職業訓練の案内では「特別な資格がなくても、医療事務分野で働くことはできます」と説明されています。民間団体の資格試験は複数ありますが、そのうち診療報酬請求事務能力認定試験は2025年12月の第63回で終了し、実施団体の日本医療保険事務協会は2026年3月31日に解散しました。",
  },
  {
    q: "医療・福祉業界は離職率が高いのですか？",
    a: "令和7年雇用動向調査の「医療，福祉」の離職率は14.3%で、産業計の13.7%を0.6ポイント上回ります。一般労働者に限ると医療，福祉13.6%・産業計11.4%です。医療事務に限った離職率は公表されていません。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和8年 賃金構造基本統計調査 業種別主な職種早見表」（医療，福祉：医療事務員→1259 その他の一般事務従事者）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/detail/dl/20260626-detail-03.pdf" },
  { label: "総務省「日本標準職業分類（平成21年12月統計基準設定）分類項目名、説明及び内容例示」（259 その他の一般事務従事者の内容例示）", url: "https://www.soumu.go.jp/main_content/000661290.pdf" },
  { label: "e-Stat 一般職業紹介状況 令和8年9月分 第21表 職業別労働市場関係指標（実数）", url: "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000040519001&fileKind=0" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116" },
  { label: "e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第5表「職種（小分類）、年齢階級別…（産業計）」", url: "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421120" },
  { label: "厚生労働省「令和7年 雇用動向調査結果の概要」入職と離職の状況（表4-2 産業、就業形態別入職率・離職率）", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/dl/kekka_gaiyo-02.pdf" },
  { label: "公益財団法人 日本医療保険事務協会（令和8年3月31日解散の告知）", url: "https://www.iryojimu.or.jp/" },
  { label: "日本医療保険事務協会「試験実績」（2026年3月20日時点のアーカイブ・元URL https://www.iryojimu.or.jp/exam/records.php）", url: "https://web.archive.org/web/20260320190430/https://www.iryojimu.or.jp/exam/records.php" },
  { label: "日本医療保険事務協会「試験概要」（2026年1月25日時点のアーカイブ・元URL https://www.iryojimu.or.jp/exam/）", url: "https://web.archive.org/web/20260125065731/https://www.iryojimu.or.jp/exam/" },
  { label: "厚生労働省 求職者支援訓練 医療事務分野の案内（チラシ）", url: "https://www.mhlw.go.jp/content/000875081.pdf" },
];

const th = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "医療事務の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            医療事務の転職｜一般事務の有効求人倍率は0.29倍・統計上の職種区分と資格の現状【2026年】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "0.29倍", l: "一般事務従事者の有効求人倍率（2026年9月・パート除く）" },
              { v: "1.18倍", l: "職業計の有効求人倍率（同）" },
              { v: f1(annual(JIMU.female.m, JIMU.female.b)), l: "その他の一般事務従事者・女性の年収（当サイト計算）" },
              { v: "14.3%", l: "医療，福祉の離職率（令和7年）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            医療事務員は、国の統計上は<strong>「その他の一般事務従事者」に分類される事務職</strong>です（厚生労働省 業種別主な職種早見表）。
            医療事務員を含む「一般事務従事者」の有効求人倍率は<strong>2026年9月で0.29倍</strong>（パートタイムを除く常用）で、職業計の1.18倍を大きく下回り、求職者が求人より多い職種です。
            資格がなくても働けると国の職業訓練の案内で説明されていますが、民間資格の一つである診療報酬請求事務能力認定試験は2025年12月で終了しています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            統計値・公表内容は{CHECKED}に厚生労働省・総務省・e-Stat・実施団体の公表資料（終了した試験は保存されたページ）で確認しました。医療事務だけを取り出した求人倍率・賃金・離職率は公表されていないため、医療事務を含む区分の値で示しています。
          </p>
        </div>

        <h2>医療事務は統計上どの職種に入るか</h2>
        <p className="mb-4">
          厚生労働省「業種別主な職種早見表」（令和8年 賃金構造基本統計調査）の【医療，福祉】の欄では、「医療事務員、介護保険事務員 →［1259 その他の一般事務従事者］」と記入するよう案内しています。
          同じ欄の看護助手・看護補助者は「1371 看護助手」、業種共通の欄の受付・案内係事務員は「1254 受付・案内事務員」と、別の職種として案内されています。
        </p>
        <p className="mb-10">
          総務省の日本標準職業分類でも、小分類「259 その他の一般事務従事者」の内容例示に「医療事務員」「介護保険事務員」が含まれています。この小分類には広報係・法務係などの事務も含まれるため、統計の値は医療事務だけの値ではありません。
        </p>

        <h2>一般事務の有効求人倍率は0.29倍</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">職業</th>
                <th className={th}>2026年9月</th>
                <th className={th}>2026年8月</th>
                <th className={th}>2025年9月</th>
                <th className="p-3 text-right rounded-tr-lg">2025年平均</th>
              </tr>
            </thead>
            <tbody>
              {RATIO.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right font-bold text-navy">{x.s2609.toFixed(2)}倍</td>
                  <td className="p-3 text-right">{x.s2608.toFixed(2)}倍</td>
                  <td className="p-3 text-right">{x.s2509.toFixed(2)}倍</td>
                  <td className="p-3 text-right">{x.y2025.toFixed(2)}倍</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 一般職業紹介状況 第21表-14 有効求人倍率（パートタイムを除く常用・実数、季節調整なし）。職業区分は平成21年改定の日本標準職業分類にもとづきます。
        </p>
        <p className="mb-10">
          一般事務従事者の有効求人倍率0.29倍は、ハローワークで仕事を探す人1人に対して求人が0.29件という意味です。医療事務員が含まれる区分の値であり、医療事務だけの倍率は公表されていません。
          前年同月（0.31倍）・2025年平均（0.32倍）と比べても低下しており、事務職の中でも応募が集まりやすい状況です。転職エージェントや求人サイトの求人は、この統計に含まれません。
        </p>

        <h2>その他の一般事務従事者の年収</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className={th}>所定内給与額（月）</th>
                <th className={th}>年間賞与など</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: `男女計（平均${JIMU.all.age}歳）`, m: JIMU.all.m, b: JIMU.all.b },
                { k: `女性（平均${JIMU.female.age}歳）`, m: JIMU.female.m, b: JIMU.female.b },
                { k: `男性（平均${JIMU.male.age}歳）`, m: JIMU.male.m, b: JIMU.male.b },
                { k: "企業規模10〜99人（男女計）", m: JIMU.small.m, b: JIMU.small.b },
                ...JIMU_AGE.map((x) => ({ k: `${x.age}（男女計）`, m: x.m, b: x.b })),
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{f1(annual(x.m, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※e-Stat 令和7年 賃金構造基本統計調査 職種 第1表・第5表（一般労働者・産業計）。年収は所定内給与額（令和7年6月分）×12か月＋年間賞与その他特別給与額（令和6年1年間）で、残業代を含みません。
        </p>
        <p className="mb-10">
          この区分の労働者は推計{(JIMU.all.w * 10).toLocaleString("ja-JP")}人で、うち女性が{(JIMU.female.w * 10).toLocaleString("ja-JP")}人です。女性の平均は{f1(annual(JIMU.female.m, JIMU.female.b))}、企業規模10〜99人では{f1(annual(JIMU.small.m, JIMU.small.b))}です（当サイト計算）。
          この統計は全産業の一般事務を含むため、医療機関の事務の賃金はこれと異なる可能性があります。応募先の求人票で、基本給・賞与の実績・資格手当の有無を確かめることをおすすめします。
          なお、同じ区分の超過実労働時間数は月{JIMU.all.ot}時間（令和7年6月・男女計）です。
        </p>

        <h2>医療，福祉の入職率・離職率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">産業</th>
                <th className={th}>入職率（計）</th>
                <th className={th}>離職率（計）</th>
                <th className={th}>入職率（一般労働者）</th>
                <th className="p-3 text-right rounded-tr-lg">離職率（一般労働者）</th>
              </tr>
            </thead>
            <tbody>
              {TURNOVER.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.inAll}%</td>
                  <td className="p-3 text-right">{x.outAll}%</td>
                  <td className="p-3 text-right">{x.inReg}%</td>
                  <td className="p-3 text-right">{x.outReg}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※厚生労働省「令和7年 雇用動向調査結果の概要」表4-2（2025年の年計）。</p>
        <p className="mb-10">
          医療，福祉の離職者数は令和7年に120.0万人で、産業別で最も多くなっています。離職率は14.3%で産業計（13.7%）をやや上回り、一般労働者に限ると13.6%（産業計11.4%）です。
          入職と離職がともに多い業界のため、欠員補充の求人が出やすい一方、医療事務に限った離職率は公表されていません。
        </p>

        <h2>医療事務の資格の現状</h2>
        <p className="mb-4">
          厚生労働省の求職者支援訓練（医療事務分野）の案内では、「特別な資格がなくても、医療事務分野で働くことはできますが、より良いサービスを提供するため、医療事務の知識や技術を身に付けた人を希望する病院や歯科医院が増えています」と説明されています。
          医療事務の資格は民間団体が実施する試験で、国家試験として実施されているものは確認できませんでした。
        </p>
        <p className="mb-4">
          民間資格の一つである「診療報酬請求事務能力認定試験」は、2025年12月14日の第63回が最終回となり、実施団体の公益財団法人 日本医療保険事務協会は2026年3月31日に解散しました（同協会の告知）。受験資格は問わず、年2回（7月・12月）実施されていました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">回（医科）</th>
                <th className={th}>受験者</th>
                <th className={th}>合格者</th>
                <th className="p-3 text-right rounded-tr-lg">合格率</th>
              </tr>
            </thead>
            <tbody>
              {EXAM.map((x) => (
                <tr key={x.n} className="border-b border-gray-100">
                  <td className="p-3">{x.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.ex.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.pass.toLocaleString("ja-JP")}人</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.rate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※日本医療保険事務協会「試験実績」（協会の解散でページが閉鎖されたため、2026年3月20日時点の保存ページで確認）。第1〜63回の医科の累計は受験者423,389人・合格者130,272人・合格率30.8%です。
        </p>
        <p className="mb-10">
          すでにこの資格を持っている場合、試験の終了後も履歴書に記載できるかどうかは、応募先の判断によります。これから資格の取得を考える場合は、現在も実施されている試験の実施団体の公式情報を確認してください。
        </p>

        <h2>医療事務の転職を進めるときのポイント</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "求人倍率が低い職種として準備する", d: "一般事務従事者の有効求人倍率は0.29倍で、応募が集まりやすい職種です。レセプト業務・受付・会計など、経験した業務を職務経歴書に具体的に書くことが重要です。" },
            { t: "医療事務から他職種へ移る場合は区分の違いを確認する", d: "統計上、医療事務は一般事務の一つです。一般企業の事務へ移る場合は、会計事務（会計事務従事者）や営業事務（営業・販売事務従事者）など、区分ごとの賃金・残業時間の違いも参考になります。" },
            { t: "統計にない情報は応募先に確かめる", d: "医療事務だけの賃金・離職率は公表されていません。シフト制の有無、土曜診療、資格手当、賞与の実績は、求人票や面接で個別に確認する必要があります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          事務職ごとの残業時間は<Link href="/knowledge/teiji-kaereru-shigoto/" className="text-teal font-bold hover:underline">定時で帰れる仕事</Link>、
          職務経歴書の書き方は<Link href="/knowledge/resume/" className="text-teal font-bold hover:underline">職務経歴書の書き方</Link>に掲載しています。
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
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className="text-teal font-bold hover:underline">定時で帰れる仕事（事務職の残業時間）</Link></li>
          <li><Link href="/industry/nurse/" className="text-teal font-bold hover:underline">看護師の転職</Link></li>
          <li><Link href="/knowledge/resume/" className="text-teal font-bold hover:underline">職務経歴書の書き方</Link></li>
          <li><Link href="/knowledge/30dai-josei-tenshoku/" className="text-teal font-bold hover:underline">30代女性の転職</Link></li>
          <li><Link href="/type/women/" className="text-teal font-bold hover:underline">女性向け転職エージェントの比較</Link></li>
          <li><Link href="/type/inexperienced/" className="text-teal font-bold hover:underline">未経験の転職に強いエージェント</Link></li>
          <li><Link href="/knowledge/tedori-19man-yachin/" className="text-teal font-bold hover:underline">手取り19万円の家賃の目安</Link></li>
          <li><Link href="/review/re-shukatsu/" className="text-teal font-bold hover:underline">Re就活の評判（20代向け転職サイト）</Link></li>
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
