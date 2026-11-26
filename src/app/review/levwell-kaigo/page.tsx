import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const TITLE = "レバウェル介護（旧きらケア）の評判は？厚労省の就職者数・離職者数と公式情報で確認【2026年11月】";

export const metadata: Metadata = {
  alternates: { canonical: "/review/levwell-kaigo/" },
  title: TITLE,
  description:
    "レバウェル介護（レバウェル株式会社運営・旧きらケア）の評判を、厚生労働省「人材サービス総合サイト」に登録された就職者数と6か月以内の離職者数、公式サイトの求人数・No.1表記の注記、App Storeの評価で確認しています（2026年11月27日確認）。当サイトでは出典を確認できない口コミの集計は掲載していません。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: TITLE,
    description:
      "レバウェル介護の運営会社・許可番号・求人数・就職者数・早期離職者数を、公式サイトと厚生労働省の登録情報で整理しています。",
  },
};

const CHECKED = "2026年11月27日";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/levwell-kaigo/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "レバウェル介護の評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、運営会社レバウェル株式会社（許可番号13-ユ-309623）の令和6年度の就職者数は25,141人、無期雇用で就職した人のうち6か月以内の離職者は3,118人（当サイト算出で12.4%）と厚生労働省に登録されています。ただし、この値は同じ許可番号で運営されているレバウェル看護などを含む全体の数値で、介護分野だけの内訳は公表されていません（2026年11月27日確認）。",
  },
  {
    q: "レバウェル介護の利用に費用はかかりますか？",
    a: "求職者の費用はかかりません。公式サイトには「完全無料にてご利用いただけます」と記載されており、公式のよくある質問では、採用した企業から報酬を受け取る仕組みのため求職者は無料で利用できると説明されています（2026年11月27日確認）。",
  },
  {
    q: "レバウェル介護はどの会社が運営していますか？",
    a: "レバウェル株式会社（東京都渋谷区渋谷二丁目24番12号、2017年10月6日設立、代表取締役 岩槻 知秀氏）が運営しています。有料職業紹介事業の許可番号は13-ユ-309623、労働者派遣事業の許可番号は派13-310987です。旧サービス名は「きらケア」で、現在の公式サイトのページタイトルにも「旧 きらケア」と表記されています（2026年11月27日確認）。",
  },
  {
    q: "レバウェル介護の求人数はどのくらいですか？",
    a: "公式トップページでは「求人総数 184,911件（2026年11月26日更新）」と表示されており、注記に「サイト未掲載の求人を含む」と記載されています。公開されている求人だけの件数ではない点にご注意ください（2026年11月27日確認）。",
  },
  {
    q: "「満足度No.1」の表記にはどのような根拠がありますか？",
    a: "公式トップページの注記は「※1 2025年 GMO 顧客満足度ランキング 介護転職 第1位」のみで、調査方法・調査期間・回答者数は同ページに記載されていません。また、レバウェルの総合サイト（levwell.jp）の「口コミ総合評価No.1」は、2022年9月時点の介護転職サービスのGoogleの口コミ平均点を比較したものと注記されています。いずれも、当サイトでは調査の原本を確認できていません。",
  },
  {
    q: "電話ではなくLINEやメールだけで利用できますか？",
    a: "公式のよくある質問によると、初回のみ電話でのヒアリング（15〜20分程度）をお願いしているとのことです。2回目以降はLINEやメールでも担当のキャリアアドバイザーと連絡を取ることができます。電話の時間帯は、登録フォームの備考欄で指定できると案内されています（2026年11月27日確認）。",
  },
  {
    q: "担当者の変更や連絡の停止、退会はできますか？",
    a: "公式のよくある質問では、担当アドバイザーの変更、アドバイザーからの連絡停止、メールマガジンの配信停止、退会のいずれも、公式サイトのお問い合わせフォームから申請できると案内されています（2026年11月27日確認）。",
  },
  {
    q: "無資格・未経験でも利用できますか？",
    a: "公式サイトでは「未経験・無資格でもOK」と案内しており、資格取得支援制度のある求人も紹介できると記載されています。ただし、紹介を受けられる求人の数や条件は地域や希望によって異なるため、登録後のヒアリングでご確認ください。",
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

// 厚生労働省「人材サービス総合サイト」レバウェル株式会社（13-ユ-309623）令和8年11月1日現在の掲載
const placements: { year: string; total: number; muki: number; leave: number | null; unknown: number | null }[] = [
  { year: "令和2年度", total: 6690, muki: 6690, leave: 831, unknown: 279 },
  { year: "令和3年度", total: 9402, muki: 9377, leave: 1149, unknown: 322 },
  { year: "令和4年度", total: 11918, muki: 11918, leave: 1767, unknown: 212 },
  { year: "令和5年度", total: 19941, muki: 19941, leave: 3042, unknown: 25 },
  { year: "令和6年度", total: 25141, muki: 25141, leave: 3118, unknown: 21 },
  { year: "令和7年度", total: 28161, muki: 28161, leave: null, unknown: null },
];

const MHLW_URL =
  "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB102030.do?screenId=GICB102030&action=detail&detkey_Detail=13-%E3%83%A6-309623%2C1+++++";
const MHLW_SMS_URL =
  "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB102030.do?screenId=GICB102030&action=detail&detkey_Detail=13-%E3%83%A6-190019%2C0+++++";

const sources = [
  { label: "レバウェル介護 公式サイト（トップページ）", url: "https://job.kiracare.jp/" },
  { label: "レバウェル介護「レバウェル介護とは」", url: "https://job.kiracare.jp/info/about/" },
  { label: "レバウェル介護「ヘルプ・よくあるご質問」", url: "https://job.kiracare.jp/info/faq/" },
  { label: "レバウェル株式会社「私たちについて」（会社情報）", url: "https://corp.levwell.jp/about" },
  { label: "レバウェル 総合サイト（No.1表記・求人数の注記）", url: "https://levwell.jp/" },
  { label: "厚生労働省「人材サービス総合サイト」職業紹介事業詳細（レバウェル株式会社 13-ユ-309623）", url: MHLW_URL },
  { label: "厚生労働省「人材サービス総合サイト」職業紹介事業詳細（株式会社エス・エム・エス 13-ユ-190019）", url: MHLW_SMS_URL },
  { label: "App Store「レバウェル介護 介護職・介護福祉士の求人・転職・派遣」", url: "https://apps.apple.com/jp/app/id6803833603" },
];

const th = "bg-gray-50 text-left px-3 py-2 border-b w-36 whitespace-nowrap";
const td = "px-3 py-2 border-b";

export default function LevwellKaigoReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "レバウェル介護の評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            レバウェル介護（旧きらケア）の評判は？厚労省の就職者数・離職者数と公式情報で確認【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: {CHECKED}（公式サイト・厚生労働省「人材サービス総合サイト」・App Storeを{CHECKED}に確認）</p>
          <p className="text-text-secondary leading-relaxed">
            レバウェル介護は、東京都渋谷区のレバウェル株式会社が運営する介護職専門の転職支援サービスです（旧サービス名「きらケア」）。
            求人紹介に加えて、応募書類の添削、面接対策、面接への同行、条件交渉を無料で行うと案内しており、派遣の仕事も扱っています。
            本ページでは、評判を判断する材料として、厚生労働省に登録された就職者数と6か月以内の離職者数、公式サイトの求人数とNo.1表記の注記、App Storeの評価を整理しています。
            当サイトでは、出典を確認できない口コミの集計や創作は行っていません。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">レバウェル介護の評判を判断する材料（{CHECKED}確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>厚生労働大臣の許可を受けた有料職業紹介事業者です</strong>。許可番号13-ユ-309623（許可年月日 平成30年8月1日）で、厚生労働省の「介護分野適正有料職業紹介事業者」の認定も受けています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>令和6年度の就職者数は25,141人、6か月以内の離職者は3,118人（12.4%）です</strong>。いずれもレバウェル看護などを含む同社全体の値で、介護分野だけの数値ではありません。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>公式の求人総数は184,911件です</strong>（2026年11月26日更新）。注記のとおり、サイトに掲載していない求人を含みます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「満足度No.1」の調査条件は公式トップページに記載されていません</strong>。注記は「2025年 GMO 顧客満足度ランキング 介護転職 第1位」のみです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の費用はかかりません</strong>。公式サイトに「完全無料にてご利用いただけます」と記載されています。</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "求人総数（未掲載含む・11/26更新）", value: "184,911件" },
            { label: "許可年月日", value: "2018年8月" },
            { label: "令和6年度 就職者（同社全体）", value: "25,141人" },
            { label: "求職者の費用", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 id="reviews">レバウェル介護の口コミ・評判の掲載について</h2>
        <p>
          当サイトでは、Googleマップや口コミサイトの投稿を集計した評判の平均や傾向は掲載していません。
          投稿の原本と取得日を当サイトで確認できていないためです。代わりに、第三者が登録・公表している数値として、次の3点を掲載しています。
        </p>
        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li><strong>厚生労働省の登録情報：</strong>就職者数と、無期雇用で就職した人のうち6か月以内に離職した人数です。<a href="#placements" className="underline">下の項目</a>に年度別に掲載しています。</li>
          <li><strong>App Storeの評価：</strong>公式アプリ「レバウェル介護 介護職・介護福祉士の求人・転職・派遣」（提供元 leverages Inc.）は、5点満点中4.8（11件）です。2026年8月27日に公開されたアプリで評価件数が少ないため、評判の目安としての信頼性は高くありません。</li>
          <li><strong>公式サイトのNo.1表記：</strong>運営会社が公表しているもので、調査条件が示されていない表記もあります。<a href="#no1" className="underline">No.1表記の項目</a>で注記の内容を整理しています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>・
          <a href="https://apps.apple.com/jp/app/id6803833603" rel="nofollow noopener" target="_blank" className="underline">App Store</a>（iTunes Search APIで取得）・
          <a href="https://job.kiracare.jp/" className="underline">レバウェル介護 公式サイト</a>。いずれも{CHECKED}確認。
        </p>

        <h2>レバウェル介護の基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>サービス名</th><td className={td}>レバウェル介護（旧 きらケア）。正社員などの紹介は「レバウェル介護求人」、派遣は「レバウェル介護派遣」として案内</td></tr>
              <tr><th className={th}>運営会社</th><td className={td}>レバウェル株式会社（2017年10月6日設立・資本金5,000万円・従業員数1,123名（2026年3月時点））</td></tr>
              <tr><th className={th}>代表者</th><td className={td}>代表取締役 岩槻 知秀／取締役社長 小西 東</td></tr>
              <tr><th className={th}>所在地（会社情報）</th><td className={td}>東京都渋谷区渋谷二丁目24番12号</td></tr>
              <tr><th className={th}>許可番号</th><td className={td}>有料職業紹介事業 13-ユ-309623（許可年月日 平成30年8月1日）／労働者派遣事業 派13-310987</td></tr>
              <tr><th className={th}>認定・加盟</th><td className={td}>厚生労働省「医療・介護・保育分野における適正な有料職業紹介事業者の認定制度」の介護分野認定事業者（認定番号02008(2)）／一般社団法人日本人材紹介事業協会に所属</td></tr>
              <tr><th className={th}>取扱職種・地域</th><td className={td}>全職種／国内（法令上の取扱範囲）。公式サイトの求人検索は47都道府県に対応</td></tr>
              <tr><th className={th}>主な職種</th><td className={td}>ヘルパー・介護職、生活相談員、サービス提供責任者、ケアマネジャー、看護助手、サービス管理責任者、生活支援員など</td></tr>
              <tr><th className={th}>雇用形態</th><td className={td}>正社員／契約社員／パート・アルバイト／派遣／紹介予定派遣</td></tr>
              <tr><th className={th}>求人総数（公式表記）</th><td className={td}>184,911件（2026年11月26日更新・サイト未掲載の求人を含む）</td></tr>
              <tr><th className={th}>求職者の費用</th><td className={td}>無料（「完全無料にてご利用いただけます」）</td></tr>
              <tr><th className={th}>電話窓口</th><td className={td}>0120-295-888（受付 9:00〜21:00・土日祝除く）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://job.kiracare.jp/" className="underline">レバウェル介護 公式トップページ</a>・
          <a href="https://job.kiracare.jp/info/about/" className="underline">「レバウェル介護とは」</a>・
          <a href="https://corp.levwell.jp/about" className="underline">レバウェル株式会社「私たちについて」</a>、
          認定番号・取扱範囲は<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>。いずれも{CHECKED}確認。
        </p>

        <h2 id="placements">厚生労働省の登録情報で見る就職者数と6か月以内の離職者数</h2>
        <p className="text-sm text-text-secondary mb-4">
          有料職業紹介事業者は、就職者数と、無期雇用で就職した人のうち6か月以内に離職した人数を、厚生労働省「人材サービス総合サイト」に毎年登録しています。
          レバウェル株式会社（許可番号13-ユ-309623）の登録内容は次のとおりです。離職者の割合は当サイトが算出しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">情報登録年度</th>
                <th className="text-right px-3 py-2 border-b">就職者数（4か月以上の有期・無期）</th>
                <th className="text-right px-3 py-2 border-b">うち無期雇用</th>
                <th className="text-right px-3 py-2 border-b">6か月以内の離職者</th>
                <th className="text-right px-3 py-2 border-b">離職が判明せず</th>
                <th className="text-right px-3 py-2 border-b">離職者の割合（当サイト算出）</th>
              </tr>
            </thead>
            <tbody>
              {placements.map((p) => (
                <tr key={p.year}>
                  <td className="px-3 py-2 border-b">{p.year}</td>
                  <td className="text-right px-3 py-2 border-b">{p.total.toLocaleString()}人</td>
                  <td className="text-right px-3 py-2 border-b">{p.muki.toLocaleString()}人</td>
                  <td className="text-right px-3 py-2 border-b">{p.leave === null ? "未登録（-）" : `${p.leave.toLocaleString()}人`}</td>
                  <td className="text-right px-3 py-2 border-b">{p.unknown === null ? "未登録（-）" : `${p.unknown.toLocaleString()}人`}</td>
                  <td className="text-right px-3 py-2 border-b">{p.leave === null ? "-" : `${((p.leave / p.muki) * 100).toFixed(1)}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li><strong>就職者の推移：</strong>令和2年度の6,690人から令和7年度の28,161人へ、約4.2倍に増えています。</li>
          <li><strong>6か月以内の離職：</strong>令和2年度〜令和6年度は12.3%〜15.3%の範囲で推移しており、令和6年度は12.4%です。令和7年度の離職者数は「-」と表示されており、登録されていません。</li>
          <li><strong>介護分野の内訳について：</strong>この許可番号ではレバウェル看護など医療・介護・保育の各サービスも運営されており、上の数値は同社全体の値と考えられます。介護分野だけの就職者数・離職者数は公表されていません。</li>
          <li><strong>手数料実績率（令和7年度）：</strong>「施設介護の職業」は25.5%と登録されています（看護師・准看護師22.2%、保育士30.2%）。手数料実績率は、求人企業が支払った紹介手数料の、就職者の年収に対する割合の実績です。</li>
          <li><strong>登録上の事業所：</strong>「レバウェル株式会社 渋谷桜丘支店」（東京都渋谷区桜丘町1番1号 渋谷サクラステージSHIBUYAタワー26階）として登録されており、会社情報の所在地（渋谷区渋谷二丁目）とは異なります。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」職業紹介事業詳細（レバウェル株式会社）</a>（令和8年11月1日現在の掲載情報を{CHECKED}に確認）。
          「情報登録年度」は同サイトの表記どおりで、対象となる集計期間は同サイトでご確認ください。離職者の割合は「6か月以内の離職者÷うち無期雇用」で当サイトが算出した値です。
        </p>

        <h2>介護分野の大手事業者との登録情報の比較</h2>
        <p className="text-sm text-text-secondary mb-3">
          介護職の紹介を行う大手事業者として、「カイゴジョブエージェント」などを運営する株式会社エス・エム・エスの登録情報と並べると、次のとおりです。
          両社とも看護・保育など複数のサービスを同じ許可番号で運営しているため、いずれも介護分野だけの値ではありません。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">項目</th>
                <th className="text-left px-3 py-2 border-b">レバウェル株式会社</th>
                <th className="text-left px-3 py-2 border-b">株式会社エス・エム・エス</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">許可番号・許可年月日</td><td className="px-3 py-2 border-b">13-ユ-309623（2018年8月1日）</td><td className="px-3 py-2 border-b">13-ユ-190019（2003年7月1日）</td></tr>
              <tr><td className="px-3 py-2 border-b">令和6年度の就職者数</td><td className="px-3 py-2 border-b">25,141人</td><td className="px-3 py-2 border-b">49,960人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和6年度の6か月以内離職者（割合）</td><td className="px-3 py-2 border-b">3,118人（12.4%）</td><td className="px-3 py-2 border-b">6,337人（12.7%）</td></tr>
              <tr><td className="px-3 py-2 border-b">令和5年度の6か月以内離職者（割合）</td><td className="px-3 py-2 border-b">3,042人（15.3%）</td><td className="px-3 py-2 border-b">5,895人（12.9%）</td></tr>
              <tr><td className="px-3 py-2 border-b">令和7年度の就職者数</td><td className="px-3 py-2 border-b">28,161人</td><td className="px-3 py-2 border-b">50,641人</td></tr>
              <tr><td className="px-3 py-2 border-b">「施設介護の職業」の手数料実績率（令和7年度）</td><td className="px-3 py-2 border-b">25.5%</td><td className="px-3 py-2 border-b">26.3%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          就職者数の規模はエス・エム・エスが約2倍ですが、令和6年度の6か月以内の離職者の割合はほぼ同じ水準です。
          レバウェル株式会社は令和5年度に15.3%と高くなっており、年度によって差があります。早期離職の理由は登録されていないため、この数値だけでサービスの良し悪しは判断できません。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：厚生労働省「人材サービス総合サイト」（<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">レバウェル株式会社</a>・<a href={MHLW_SMS_URL} rel="nofollow noopener" target="_blank" className="underline">株式会社エス・エム・エス</a>、令和8年11月1日現在の掲載情報を{CHECKED}に確認）。割合は当サイト算出。
        </p>

        <h2 id="no1">公式サイトに掲載されている「No.1」表記と根拠</h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">掲載箇所</th>
                <th className="text-left px-3 py-2 border-b">表記</th>
                <th className="text-left px-3 py-2 border-b">公式サイトの注記</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">レバウェル介護 公式トップページ</td><td className="px-3 py-2 border-b">介護職の転職サービス 満足度総合評価No.1</td><td className="px-3 py-2 border-b">「※1 2025年 GMO 顧客満足度ランキング 介護転職 第1位」。調査方法・調査期間・回答者数の記載なし</td></tr>
              <tr><td className="px-3 py-2 border-b">レバウェル 総合サイト（levwell.jp）</td><td className="px-3 py-2 border-b">口コミ総合評価No.1</td><td className="px-3 py-2 border-b">介護転職サービスのGoogle検索ボリューム上位10件のうち、Googleマイビジネスの口コミが5件以上のサービスの口コミ平均点を比較（2022年9月）</td></tr>
              <tr><td className="px-3 py-2 border-b">レバウェル介護 公式トップページ</td><td className="px-3 py-2 border-b">平均1ヶ月で内定まで</td><td className="px-3 py-2 border-b">集計期間・集計方法の記載なし</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          「満足度総合評価No.1」は、公式トップページに調査の主体・時期・方法が示されておらず、当サイトでは調査の原本を確認できていません。
          「口コミ総合評価No.1」は2022年9月時点の比較で、現在の評価を示すものではありません。いずれも、求人数や就職実績を比べた順位ではない点にご注意ください。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://job.kiracare.jp/" className="underline">レバウェル介護 公式トップページ</a>・<a href="https://levwell.jp/" className="underline">レバウェル 総合サイト</a>の注記（{CHECKED}確認）。
        </p>

        <h2>公式サイトで確認できるサポート内容と利用の流れ</h2>
        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 mb-3">
          <li><strong>サポート内容：</strong>求人紹介、履歴書・職務経歴書の添削、面接対策、面接の日程調整、応募先との条件交渉の代行、面接への同行を行うと案内しています。</li>
          <li><strong>職場の情報：</strong>紹介の際に職場の雰囲気や有休消化率などを事前に伝えるとしています。レバウェルの総合サイトでは「施設取材数」を17,000件以上（当社による対面またはオンラインのヒアリング調査を実施し、取材記事を求人上に公開している件数）と案内しています。</li>
          <li><strong>担当者：</strong>担当地域制のキャリアアドバイザーが対応すると記載されています。担当者は利用途中でも変更を申し込めます。</li>
          <li><strong>連絡方法：</strong>初回のみ電話でのヒアリング（15〜20分程度）を行い、2回目以降はLINEやメールでも連絡できます。折り返しの電話は平日9〜21時、土日祝9〜19時に対応しています。</li>
          <li><strong>派遣：</strong>派遣と紹介予定派遣も扱っており、派遣では2か月ごとに契約更新の意思を確認すると案内しています。</li>
          <li><strong>連絡の停止・退会：</strong>アドバイザーからの連絡停止、メールマガジンの配信停止、退会は、いずれもお問い合わせフォームから申請します。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://job.kiracare.jp/info/about/" className="underline">「レバウェル介護とは」</a>・<a href="https://job.kiracare.jp/info/faq/" className="underline">「ヘルプ・よくあるご質問」</a>・<a href="https://levwell.jp/" className="underline">レバウェル 総合サイト</a>（{CHECKED}確認）。上記は公式の案内であり、当サイトがサービスを利用して確かめた内容ではありません。
        </p>

        <h2>レバウェル介護の評判をご自身で確かめる方法</h2>
        <ol className="space-y-2 text-sm text-text-secondary list-decimal pl-5 mb-3">
          <li><strong>厚生労働省の登録情報を見る：</strong>「人材サービス総合サイト」で許可番号13-ユ-309623を検索すると、最新年度の就職者数・離職者数を確認できます。他社の許可番号と並べると比較しやすくなります。</li>
          <li><strong>口コミは投稿日と件数を確認する：</strong>Googleマップやアプリストアの評価は、件数が少ない場合や投稿が古い場合は参考程度にとどめることをおすすめします。</li>
          <li><strong>No.1表記は注記を読む：</strong>調査時期・調査方法・回答者数が示されているかを確認してください。</li>
          <li><strong>初回の電話で確認する：</strong>希望地域の求人の数、担当者の担当地域、連絡手段（LINE・メール）の希望を、初回のヒアリングで伝えて確認すると、合わない場合も早めに判断できます。</li>
          <li><strong>公的な窓口と併用する：</strong>公式サイトでも、民間の転職支援サービスのほかに、福祉人材センター・バンクやハローワークを介護の求人の探し方として紹介しています。</li>
        </ol>
        <p className="text-sm text-text-secondary mb-8">
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <h2>レバウェル介護が向いている人・他サービスと併用したい人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>介護職の求人を担当者から紹介してもらいたい人</li>
              <li>面接対策や条件交渉を任せたい人</li>
              <li>正社員だけでなく派遣・紹介予定派遣も比較したい人</li>
              <li>2回目以降の連絡をLINEやメールで行いたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスとの併用を検討したい人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>既卒・フリーターで介護以外の正社員就職も検討したい人 →<Link href="/review/dym-shushoku/" className="text-teal underline">DYM就職（現ミーツカンパニー）</Link></li>
              <li>自分で求人を検索して応募したい人 →<Link href="/review/jobsoelu/" className="text-teal underline">ジョブソエル</Link>のような求人サイトも比較対象になります</li>
              <li>看護師資格をお持ちの人 →<Link href="/industry/nurse/" className="text-teal underline">看護師向けの転職支援サービスの比較</Link>をご覧ください</li>
              <li>介護以外の職種も検討したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などの総合型が候補です</li>
            </ul>
          </div>
        </div>

        <h2>レバウェル介護 よくある質問</h2>
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
          レバウェル介護は、レバウェル株式会社が運営する介護職専門の転職支援サービスで、厚生労働大臣の許可（13-ユ-309623）と介護分野の適正事業者の認定を受けています。
          同社全体の令和6年度の就職者数は25,141人、6か月以内の離職者の割合は12.4%（当サイト算出）で、介護分野の大手事業者とほぼ同じ水準です。
          公式トップページの「満足度No.1」は調査条件が示されていないため、評判は厚生労働省の登録情報や初回のヒアリングでの対応もあわせてご判断ください。求職者の費用はかかりません。
        </p>
        <p className="text-sm text-text-secondary mb-8">
          公式サイト：<a href="https://job.kiracare.jp/" className="text-teal underline">レバウェル介護（job.kiracare.jp）</a>
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <h2>出典一覧</h2>
        <ul className="space-y-1 text-xs text-text-muted list-disc pl-5 mb-8">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="nofollow noopener" target="_blank" className="underline">{s.label}</a>（{CHECKED}確認）
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">レバウェル介護を他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/jobsoelu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ジョブソエルの詳細
            </Link>
            <Link href="/industry/nurse/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              看護師向け転職支援サービスの比較
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
