import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";

const TITLE = "Be Marketer Career（ビーマーケターキャリア）とは？特徴・料金・対応職種を公式情報で確認【2026年11月】";

export const metadata: Metadata = {
  alternates: { canonical: "/review/be-marketer-career/" },
  title: TITLE,
  description:
    "Be Marketer Career（ビーマーケターキャリア）は、リフリード株式会社が2026年10月に開始したマーケティング職専門の転職エージェントです。運営会社・許可番号・費用・対応職種と、公式の求人例10件の年収・勤務地を公式情報と厚生労働省の登録情報で整理しています（2026年11月27日確認）。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: TITLE,
    description:
      "マーケター専門の転職エージェントBe Marketer Careerについて、運営会社・許可番号・費用・求人例を公式情報と厚生労働省の登録情報で整理しています。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/be-marketer-career/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "Be Marketer Career（ビーマーケターキャリア）とはどのようなサービスですか？",
    a: "マーケティング職に特化した転職エージェント（有料職業紹介）です。リフリード株式会社が、マーケター育成スクール「Be Marketer School」、副業・フリーランス向けの案件紹介「Be Marketer Works」に続くBe Marketerブランドの3つ目のサービスとして、2026年10月6日に提供を開始しました（運営会社の2026年10月7日の発表、2026年11月27日確認）。",
  },
  {
    q: "Be Marketer Careerの利用に費用はかかりますか？",
    a: "求職者の費用はかかりません。公式サイトでは「求職者の方は、会員登録から入社まですべて無料です」と案内しています（2026年11月27日確認）。",
  },
  {
    q: "Be Marketer Careerはどの会社が運営していますか？",
    a: "リフリード株式会社（東京都渋谷区千駄ヶ谷5-16-5 DOUBLE COURT 1B、代表取締役 田村 貴弘氏、2019年4月4日設立）が運営しています。有料職業紹介事業の許可番号は13-ユ-320110で、厚生労働省「人材サービス総合サイト」では許可年月日が令和8年（2026年）10月1日と登録されています（2026年11月27日確認）。",
  },
  {
    q: "どのような職種の求人を扱っていますか？",
    a: "公式サイトと運営会社の発表では、広告運用、SEO、SNS運用、Webディレクターなど、マーケティング職の求人を職種ごとに整理して紹介すると案内しています。登録時の質問では、広告運用、SEO・コンテンツ、SNS・インフルエンサー、CRM・MA・データ分析、マーケティング企画・ブランド、EC・D2Cなどの職種区分が用意されています。求人は事業会社と広告代理店の両方を扱っています（2026年11月27日確認）。",
  },
  {
    q: "求人数はどのくらいですか？",
    a: "公式サイトでは、事業会社・広告代理店のマーケティング職の求人票を1,800件保有している（2026年10月現在）と表記しています。これは運営会社の自社表記で、当サイトでは第三者の資料で件数を確かめることはできていません。",
  },
  {
    q: "マーケティング職が未経験でも登録できますか？",
    a: "登録時の質問「マーケティングの実務経験は？」には「未経験」の選択肢があり、未経験でも登録はできます。ただし、公式サイトに掲載されている求人例10件のうち、応募条件に職種・業界不問と記載されたものは1件で、他はマーケティングや関連業務の実務経験を求めています。未経験の方が紹介を受けられる求人がどの程度あるかは、面談でご確認ください（2026年11月27日確認）。",
  },
  {
    q: "厚生労働省に登録された就職実績はありますか？",
    a: "2026年11月27日時点で、厚生労働省「人材サービス総合サイト」のリフリード株式会社の就職者数・離職者数の欄は、令和2年度から令和7年度まですべて「-」で、数値は登録されていません。許可を受けたのが2026年10月1日のため、実績が登録される前の段階です。",
  },
  {
    q: "登録から内定までどのくらいかかりますか？",
    a: "公式サイトでは、登録から内定までの目安を1〜3か月としています。利用者は在職中の方が大半で、ペースは希望に合わせると案内しています（2026年11月27日確認）。",
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

// 公式 /career に掲載の求人例10件（2026-11-27確認）。年収は万円
const jobs = [
  { type: "事業会社", company: "化粧品・美容機器メーカー（EC）", role: "ECモール運営・企画・販促", min: 460, max: 550, holidays: 124 },
  { type: "支援会社", company: "マーケティング支援会社（2025年上場）", role: "デジタルマーケター・CRM・コンサルタント", min: 450, max: 600, holidays: 125 },
  { type: "事業会社", company: "不動産・投資関連企業", role: "Webマーケター（広告運用・分析・企画）", min: 600, max: 750, holidays: 126 },
  { type: "支援会社", company: "上場デジタルマーケティング支援会社", role: "デジタルマーケティングコンサルタント", min: 600, max: 800, holidays: 125 },
  { type: "事業会社", company: "リユース×ITプラットフォーム企業（名証ネクスト上場）", role: "SEOマーケター・責任者候補", min: 600, max: 900, holidays: 127 },
  { type: "事業会社", company: "リユース×ITプラットフォーム企業（名証ネクスト上場）", role: "マーケティング部長候補", min: 600, max: 900, holidays: 127 },
  { type: "事業会社", company: "予約システムSaaS企業", role: "マーケティング（リーダー候補）", min: 650, max: 1050, holidays: 125 },
  { type: "事業会社", company: "IT・エンタメ企業（東証グロース上場）", role: "SNSマーケティング責任者", min: 750, max: 800, holidays: 125 },
  { type: "事業会社", company: "不動産投資サービス企業（IPO準備中）", role: "Webマーケター／広告チームリーダー候補", min: 800, max: 1200, holidays: 122 },
  { type: "事業会社", company: "店舗向けSaaS企業", role: "マーケティング専任1人目", min: 630, max: 1022, holidays: 126 },
];
const median = (arr: number[]) => {
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const jigyoCount = jobs.filter((j) => j.type === "事業会社").length;
const shienCount = jobs.length - jigyoCount;
const minMedian = median(jobs.map((j) => j.min));
const maxMedian = median(jobs.map((j) => j.max));
const minLow = Math.min(...jobs.map((j) => j.min));
const maxHigh = Math.max(...jobs.map((j) => j.max));

const MHLW_URL =
  "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB102030.do?screenId=GICB102030&action=detail&detkey_Detail=13-%E3%83%A6-320110%2C1+++++";
const OFFICIAL_URL = "https://be-marketer.com/career";
const NEWS_URL =
  "https://lifreed.com/%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E8%81%B7%E7%89%B9%E5%8C%96%E3%81%AE%E8%BB%A2%E8%81%B7%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%93";

export default function BeMarketerCareerReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "Be Marketer Career" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            Be Marketer Career（ビーマーケターキャリア）とは？特徴・料金・対応職種を公式情報で確認【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年11月27日（公式サイト・運営会社の会社概要と発表・厚生労働省「人材サービス総合サイト」を11月27日に確認）</p>
          <p className="text-text-secondary leading-relaxed">
            Be Marketer Career（ビーマーケターキャリア）は、東京都渋谷区のリフリード株式会社が運営するマーケティング職専門の転職エージェントです。
            2026年10月にサービスを開始しました。
            本ページでは、運営会社・許可番号・求職者の費用・対応職種を公式サイトで確認し、公式サイトに掲載されている求人例10件の年収・勤務地を当サイトで集計しています。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">Be Marketer Careerの概要</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>マーケティング職に特化した転職エージェントです</strong>。事業会社と広告代理店の両方の求人を扱っています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>2026年10月6日に開始した新しいサービスです</strong>。有料職業紹介事業の許可（13-ユ-320110）は2026年10月1日付けです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>運営会社は、マーケター向けのスクールと副業・フリーランスの案件紹介も運営しています</strong>。転職支援はその3つ目のサービスです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>公式サイトの求人例10件は、すべて東京の求人です</strong>。年収の下限の中央値は{minMedian}万円、上限の中央値は{maxMedian}万円でした（当サイト集計）。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の費用はかかりません</strong>。会員登録から入社まで無料と公式サイトに記載されています。</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "対象職種", value: "マーケ職" },
            { label: "サービス開始", value: "2026年10月" },
            { label: "内定までの目安（公式）", value: "1〜3か月" },
            { label: "求職者の費用", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="be-marketer-career" heading="Be Marketer Careerの公式サイトで無料登録する" note="会員登録から入社まで無料です（公式サイトより）。" />

        <h2>Be Marketer Careerの基本データ【2026年11月27日確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">Be Marketer Career（ビーマーケターキャリア）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">リフリード株式会社（Lifreed, Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役 田村 貴弘</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2019年4月4日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">〒151-0051 東京都渋谷区千駄ヶ谷5-16-5 DOUBLE COURT 1B</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-320110（許可年月日 令和8年10月1日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">取扱職種・地域</th><td className="px-3 py-2 border-b">全職種／国内（法令上の取扱範囲）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス開始日</th><td className="px-3 py-2 border-b">2026年10月6日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">公式が案内する対象職種</th><td className="px-3 py-2 border-b">広告運用／SEO・コンテンツ／SNS／CRM・MA・データ分析／マーケティング企画・ブランド／EC・D2C／Webディレクター など</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人の種類</th><td className="px-3 py-2 border-b">事業会社（インハウス）と広告代理店・マーケティング支援会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数（公式表記）</th><td className="px-3 py-2 border-b">マーケティング職の求人票 1,800件（2026年10月現在、自社表記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求職者の費用</th><td className="px-3 py-2 border-b">無料（会員登録から入社まで）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">問い合わせ先</th><td className="px-3 py-2 border-b">03-4455-4758</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">Be Marketer Career 公式サイト</a>・
          <a href="https://be-marketer.com/law" className="underline">Be Marketer「特定商取引法に基づく表記」</a>・
          <a href="https://lifreed.com/company" className="underline">リフリード株式会社「会社概要」</a>・
          <a href={NEWS_URL} className="underline">同社のお知らせ（2026年10月7日）</a>、
          許可年月日・取扱範囲は<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>。いずれも2026年11月27日確認。
        </p>

        <h2>公式サイトの求人例10件の集計（当サイト調べ）</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式サイトには「実際の求人をもとに、企業名を伏せて掲載」した求人例が10件掲載されています。当サイトで年収・勤務地・企業の種類を集計しました。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">種類</th>
                <th className="text-left px-3 py-2 border-b">企業（公式の表記）</th>
                <th className="text-left px-3 py-2 border-b">ポジション</th>
                <th className="text-right px-3 py-2 border-b">年収</th>
                <th className="text-right px-3 py-2 border-b">年間休日</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((j, i) => (
                <tr key={i}>
                  <td className="px-3 py-2 border-b whitespace-nowrap">{j.type}</td>
                  <td className="px-3 py-2 border-b">{j.company}</td>
                  <td className="px-3 py-2 border-b">{j.role}</td>
                  <td className="text-right px-3 py-2 border-b whitespace-nowrap">{j.min.toLocaleString()}〜{j.max.toLocaleString()}万円</td>
                  <td className="text-right px-3 py-2 border-b">{j.holidays}日</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-3">
          <li><strong>企業の種類：</strong>事業会社{jigyoCount}件、支援会社{shienCount}件です。公式サイトは保有求人全体について「事業会社と広告代理店をほぼ半々」としているため、この10件の比率は全体の比率とは異なります。</li>
          <li><strong>年収：</strong>下限は{minLow}万円から、上限は最大{maxHigh.toLocaleString()}万円です。下限の中央値は{minMedian}万円、上限の中央値は{maxMedian}万円でした。</li>
          <li><strong>勤務地：</strong>10件すべてが東京です。「リモート可」「リモート相談可」と記載された求人が3件、「ハイブリッド」と記載された求人が1件ありました。</li>
          <li><strong>応募条件：</strong>「社会人経験1年以上（業界・職種不問）」とする求人が1件あり、他の9件はマーケティングや関連業務の実務経験を求めています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">Be Marketer Career 公式サイト「ご紹介している求人の例」</a>（2026年11月27日確認）。集計は当サイトによるもので、10件は公式が選んで掲載した例です。保有求人全体の傾向を示すものではありません。
        </p>

        <h2>公式サイトに掲載されている数値の読み方</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式サイトには次の3つの数値が掲載されています。いずれも運営会社の自社表記で、当サイトでは第三者の資料で確かめることはできていません。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">公式の表記</th>
                <th className="text-left px-3 py-2 border-b">対象範囲（公式の注記）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">サービス登録者 7,130名</td><td className="px-3 py-2 border-b">Be Marketer全体（スクール・副業支援を含む）、2026年10月現在</td></tr>
              <tr><td className="px-3 py-2 border-b">マーケティング職の求人票 1,800件</td><td className="px-3 py-2 border-b">事業会社・広告代理店、2026年10月現在</td></tr>
              <tr><td className="px-3 py-2 border-b">お会いしたマーケター 1,800人以上</td><td className="px-3 py-2 border-b">Be Marketerサービス全体の累計（運営会社の発表ではスクールと副業支援の2事業で延べ1,815名）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          登録者数と面談人数は、転職エージェントを開始する前のスクール・副業支援の実績を含む数値で、転職支援の実績ではありません。
          転職支援の実績を示す公的な数値として、厚生労働省「人材サービス総合サイト」には就職者数と6か月以内の離職者数が登録されますが、
          2026年11月27日時点でリフリード株式会社の欄は令和2年度から令和7年度まですべて「-」で、手数料・返戻金制度の欄も「未」表示です。許可から日が浅いため、実績が登録される前の段階です。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">Be Marketer Career 公式サイト</a>・<a href={NEWS_URL} className="underline">リフリード株式会社のお知らせ（2026年10月7日）</a>・<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>（令和8年11月1日現在の掲載情報）。いずれも2026年11月27日確認。
        </p>

        <h2>登録から入社までの流れ</h2>
        <ol className="space-y-2 text-sm text-text-secondary list-decimal pl-5 mb-3">
          <li><strong>会員登録：</strong>氏名・生年月日・電話番号・メールアドレスを登録し、マーケティングの実務経験・現在の職種・希望年収・転職の時期・希望する転職先（事業会社か支援会社か）の5つの質問に答えます。</li>
          <li><strong>無料カウンセリング：</strong>これまでの経歴や希望条件、キャリアプランを確認し、職務経歴書の添削も行うと案内しています。</li>
          <li><strong>求人の提案：</strong>希望に合う求人を、企業から聞き取った採用の背景・課題とあわせて紹介するとしています。</li>
          <li><strong>面接の調整・対策：</strong>面接日程の調整と、面接ごとの対策を行うと案内しています。</li>
          <li><strong>内定・入社：</strong>年収の交渉や入社時期の調整を行うとしています。</li>
        </ol>
        <p className="text-sm text-text-secondary mb-3">
          公式サイトでは、利用者は在職中の方が大半で、登録から内定までの目安は1〜3か月としています。
          また、「合わない求人は紹介しない」「転職を急かさない」方針を掲げ、面談の結果「今は動かない方がいい」と伝えることもあると記載しています。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">Be Marketer Career 公式サイト「ご登録から入社までの流れ」</a>（2026年11月27日確認）。上記は公式の案内であり、当サイトがサービスを利用して確かめた内容ではありません。
        </p>

        <h2>同じマーケティング職特化のデジレカとの比較</h2>
        <p className="text-sm text-text-secondary mb-3">
          当サイトで解説しているマーケティング職特化の転職エージェント<Link href="/review/digireka/" className="text-teal underline">デジレカ</Link>と、公開情報を並べると次のとおりです。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">項目</th>
                <th className="text-left px-3 py-2 border-b">Be Marketer Career</th>
                <th className="text-left px-3 py-2 border-b">デジレカ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">運営会社</td><td className="px-3 py-2 border-b">リフリード株式会社（東京都渋谷区）</td><td className="px-3 py-2 border-b">株式会社マルニ（東京都世田谷区）</td></tr>
              <tr><td className="px-3 py-2 border-b">許可年月日</td><td className="px-3 py-2 border-b">2026年10月1日</td><td className="px-3 py-2 border-b">2020年11月1日</td></tr>
              <tr><td className="px-3 py-2 border-b">求人数の公式表記</td><td className="px-3 py-2 border-b">求人票1,800件（2026年10月現在）</td><td className="px-3 py-2 border-b">公式サイトに記載なし</td></tr>
              <tr><td className="px-3 py-2 border-b">厚生労働省の就職者数</td><td className="px-3 py-2 border-b">登録なし（全年度「-」）</td><td className="px-3 py-2 border-b">登録なし（全年度「-」）</td></tr>
              <tr><td className="px-3 py-2 border-b">関連事業</td><td className="px-3 py-2 border-b">マーケター育成スクール／副業・フリーランスの案件紹介</td><td className="px-3 py-2 border-b">未経験者向けの無料講座</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：Be Marketer Careerは本ページ記載の各出典（2026年11月27日確認）。デジレカは当サイトの<Link href="/review/digireka/" className="underline">デジレカの解説ページ</Link>（公式サイト・厚生労働省「人材サービス総合サイト」を2026年11月14日に確認）。
        </p>

        <h2>Be Marketer Careerが向いている人・他サービスと併用したい人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>広告運用・SEO・SNS・CRMなどの実務経験があり、マーケティング職で転職したい人</li>
              <li>事業会社（インハウス）と広告代理店・支援会社の求人を比べたい人</li>
              <li>東京の求人を中心に転職先を探している人（公式の求人例10件はすべて東京です）</li>
              <li>副業・業務委託も含めて働き方を相談したい人（同じBe Marketerの案件紹介サービスがあります）</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスとの併用を検討したい人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>実績のあるマーケティング職特化のエージェントも比べたい人 →<Link href="/review/digireka/" className="text-teal underline">デジレカ</Link>が候補です</li>
              <li>Web・クリエイティブ職も含めて探したい人 →<Link href="/review/mynavi-creator/" className="text-teal underline">マイナビクリエイター</Link>や<Link href="/review/highfive/" className="text-teal underline">HIGH-FIVE</Link>が候補です</li>
              <li>東京以外の求人や、マーケティング職以外も比べたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向いています</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントの選び方は<Link href="/knowledge/how-to-choose/" className="text-teal underline">転職エージェントの選び方</Link>でも解説しています。
        </p>

        <h2>Be Marketer Career よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>
          Be Marketer Careerは、マーケター向けのスクールと副業・フリーランスの案件紹介を運営するリフリード株式会社が、2026年10月に開始したマーケティング職専門の転職エージェントです。
          有料職業紹介事業の許可（13-ユ-320110）を受けており、求職者の費用はかかりません。
          開始から日が浅く、厚生労働省に登録された就職実績はまだないため、公式の求人数表記とあわせて、希望する職種・勤務地の求人があるかを面談で直接ご確認ください。
        </p>
        <p className="text-sm text-text-secondary mb-8">
          公式サイト：<a href={OFFICIAL_URL} className="text-teal underline">Be Marketer Career（be-marketer.com/career）</a>
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <FelmatCta slug="be-marketer-career" heading="Be Marketer Careerの公式サイトで無料登録する" note="会員登録から入社まで無料です（公式サイトより）。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">Be Marketer Careerを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/digireka/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              デジレカの詳細
            </Link>
            <Link href="/review/mynavi-creator/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビクリエイターの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェント一覧へ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
