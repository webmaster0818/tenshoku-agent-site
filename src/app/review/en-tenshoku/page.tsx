import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エン転職の評判は？会員数1,298万人・アプリ評価・オリコン調査の条件・利用規約を公式データで確認【2026年11月】",
  description:
    "求人サイト「エン転職」の評判を、運営会社エン株式会社の決算説明資料・有価証券報告書、App Storeの評価、オリコン調査の調査概要、利用規約で確認しました。会員数は1,298万人、利用企業数は4,335社（前年同期比15.9%減）です。転職エージェントとの違いやスカウト・退会の仕組みも整理しています。",
  alternates: { canonical: "/review/en-tenshoku/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "エン転職の評判は？会員数1,298万人・アプリ評価・オリコン調査の条件・利用規約を公式データで確認",
    description: "決算説明資料・有価証券報告書・アプリストア・利用規約にもとづいて、エン転職の特徴と注意点をまとめています。",
  },
};

const CHECKED = "2026年11月23日";

// エン株式会社 有価証券報告書（2026年3月期）セグメント内のサービス別売上高（管理会計ベース・百万円）
const sales = [
  { y: "2025年3月期", v: 17391 },
  { y: "2026年3月期", v: 15306 },
];

const faqData = [
  {
    q: "エン転職の評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、App Storeの公式アプリの評価は5点満点中4.4（7,913件・2026年11月23日確認）です。また、運営会社はオリコン顧客満足度調査の「転職サイト」で2018年〜2025年に第1位と公表しています。いずれも調査・評価の対象や条件があるため、本文で内容を説明しています。",
  },
  {
    q: "エン転職は転職エージェントですか？",
    a: "エン転職は、利用者が自分で求人を探して応募する求人サイト（転職サイト）です。厚生労働省の人材サービス総合サイトでは、エン株式会社の特定募集情報等提供事業（届出受理番号51-募-000096）のサービスとして登録されています。担当者が求人を紹介する転職エージェントは、同社では「エン エージェント」として別に運営されています。",
  },
  {
    q: "エン転職は無料で使えますか？",
    a: "公式ヘルプでは「当サイトはご登録から各種サービスのご利用についても料金は一切かかりません。」と案内されています。エン転職から応募した企業への入社が決まった場合も、利用者が料金を支払う必要はないとされています。",
  },
  {
    q: "エン転職の求人情報の特徴は何ですか？",
    a: "公式サイトでは「エン転職の担当者が直接企業を取材し、詳細な求人情報を作成」と説明されています。決算説明資料でも、一般企業が直接募集する原稿は1社1社独自に取材・撮影していると記載されています。なお、求人内容の問い合わせは取材担当者ではなく、求人情報の連絡先に直接行うよう案内されています。",
  },
  {
    q: "エン転職を退会するにはどうすればよいですか？",
    a: "公式ヘルプでは、ログイン後に「各種設定」の画面の最下部にある「退会の手続き」から手続きできると案内されています（PC・スマートフォン・アプリ共通）。退会すると個人情報や応募履歴はすべて削除され、復旧できません。また、利用規約第12条では、1年以上ログインがない場合は自動的に登録が抹消される場合があると定められています。",
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

const sources = [
  { label: "エン転職 公式サイト", url: "https://employment.en-japan.com/" },
  { label: "エン転職 転職支援サービス利用規約（2015年8月24日制定）", url: "https://employment.en-japan.com/info/membership/" },
  { label: "エン転職 ヘルプ「利用料金はかかりますか？」", url: "https://help-employment.en-japan.com/利用料金はかかりますか？-6a0cfd106f883ffbc2c76a45" },
  { label: "エン転職 ヘルプ「スカウト」", url: "https://help-employment.en-japan.com/スカウト-6a0cfd0ec4d96220123cd0c5" },
  { label: "エン転職 ヘルプ「エン転職の退会方法」", url: "https://help-employment.en-japan.com/エン転職の退会方法-6a0cfd0e7ff343fd575b755f" },
  { label: "エン株式会社 会社概要", url: "https://corp.en-japan.com/profile/outline.html" },
  { label: "エン株式会社 沿革（2025年10月 商号変更）", url: "https://corp.en-japan.com/profile/history.html" },
  { label: "エン株式会社 受賞歴", url: "https://corp.en-japan.com/profile/awards.html" },
  { label: "エン株式会社 ニュースリリース「オリコン顧客満足度調査『転職サイト』ランキング8年連続第1位」（2025年6月2日）", url: "https://corp.en-japan.com/newsrelease/2025/41786.html" },
  { label: "エン株式会社 2026年3月期 有価証券報告書", url: "https://s3-ap-northeast-1.amazonaws.com/enjapanhp/wp-content/uploads/20260622161514/2026%E5%B9%B43%E6%9C%88%E6%9C%9F%E6%9C%89%E4%BE%A1%E8%A8%BC%E5%88%B8%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf" },
  { label: "エン株式会社 2027年3月期 第2四半期 決算説明資料（2026年11月12日）", url: "https://corp.en-japan.com/company/ir/2027.3_2Q_presentation_h.pdf" },
  { label: "App Store「転職 ならエン転職 求人・仕事探しのアプリ」", url: "https://apps.apple.com/jp/app/id990968756" },
  { label: "厚生労働省 人材サービス総合サイト（特定募集情報等提供事業者・職業紹介事業者の検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
];

const th = "bg-gray-50 text-left px-3 py-2 border-b w-36 whitespace-nowrap";
const td = "px-3 py-2 border-b";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "エン転職の評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            エン転職の評判は？会員数1,298万人・アプリ評価・オリコン調査の条件・利用規約を公式データで確認【2026年11月】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "1,298万人", l: "求職者会員数（決算説明資料・前年同期比4.9%増）" },
              { v: "4,335社", l: "利用企業数（同・前年同期比15.9%減）" },
              { v: "4.4", l: "App Storeの評価（5点満点・7,913件）" },
              { v: "無料", l: "登録・応募・入社まで利用者の料金負担なし（公式ヘルプ）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            エン転職は、エン株式会社（2025年10月に エン・ジャパン株式会社 から商号変更・東証プライム）が運営する求人サイトです。担当者が求人を紹介する転職エージェントではなく、利用者が自分で求人を探して応募する仕組みです。
            2026年11月12日の決算説明資料では、<strong>求職者会員数は1,298万人</strong>と前年同期より増えた一方、<strong>求人を掲載する利用企業数は4,335社</strong>と15.9%減っています。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に公式サイト・決算説明資料・有価証券報告書・App Storeで当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <h2>エン転職の基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>サービスの種類</th><td className={td}>求人サイト（転職サイト）。厚生労働省の人材サービス総合サイトでは、特定募集情報等提供事業（届出受理番号 51-募-000096）のサービスとして登録</td></tr>
              <tr><th className={th}>運営会社</th><td className={td}>エン株式会社（2000年1月設立・東京都新宿区西新宿・東証プライム 4849）。2025年10月に エン・ジャパン株式会社 から商号変更</td></tr>
              <tr><th className={th}>開始</th><td className={td}>2000年1月（「[en]社会人の就職情報」として開設。有価証券報告書の沿革）</td></tr>
              <tr><th className={th}>求職者会員数</th><td className={td}>1,298万人（2027年3月期 第2四半期 決算説明資料・前年同期比4.9%増）</td></tr>
              <tr><th className={th}>利用企業数</th><td className={td}>4,335社（同・前年同期比15.9%減）</td></tr>
              <tr><th className={th}>求人情報の作り方</th><td className={td}>「エン転職の担当者が直接企業を取材し、詳細な求人情報を作成」（公式サイト）</td></tr>
              <tr><th className={th}>料金</th><td className={td}>利用者は無料（公式ヘルプ）</td></tr>
              <tr><th className={th}>掲載求人数</th><td className={td}>公式サイトに全国の合計件数の表示はありません（職種または勤務地を選ぶと件数が表示される仕組み）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：エン転職 公式サイト・ヘルプ、エン株式会社 会社概要・沿革・有価証券報告書・決算説明資料、厚生労働省 人材サービス総合サイト（令和8年11月1日現在の表示）。
        </p>

        <h2>エン転職の売上と利用企業数の推移</h2>
        <p>エン株式会社の有価証券報告書では、エン転職の売上高（管理会計ベース）が次のとおり記載されています。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right rounded-tr-lg">エン転職の売上高</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right">{(x.v / 100).toFixed(1)}億円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          2026年3月期の売上高は前期から12.0%減少しています。2027年3月期の上期（4〜9月）も76.1億円から71.8億円へ5.7%減っており（決算説明資料）、利用企業数の減少（前年同期比15.9%減）と合わせて、求人を出す企業が減っている状況がうかがえます。
          一方で求職者会員数は4.9%増えているため、希望する職種・地域で十分な件数があるかは、登録前に求人検索で確認すると安心です。
        </p>

        <h2>オリコン顧客満足度調査の第1位について</h2>
        <p>
          エン株式会社は、エン転職がオリコン顧客満足度調査の「転職サイト」で2018年から2025年まで8年連続第1位と公表しています。2025年の発表に記載された調査の概要は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>調査主体</th><td className={td}>株式会社oricon ME（インターネット調査）</td></tr>
              <tr><th className={th}>回答者数</th><td className={td}>5,267人（調査対象企業14社）</td></tr>
              <tr><th className={th}>調査期間</th><td className={td}>2025年1月16日〜31日、2024年1月5日〜24日、2023年1月5日〜2月1日（3年分）</td></tr>
              <tr><th className={th}>対象者</th><td className={td}>20〜59歳で、過去5年以内に転職サイトを使って転職し、正社員として就業した経験のある人</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          回答者は転職に成功した人に限られており、転職できなかった人の評価は含まれていません。また、確認時点で同社の受賞歴ページには、2026年の「転職サイト」部門の受賞の記載はありません（2026年の記載は転職エージェント部門の「エン エージェント」のみ）。
        </p>

        <h2>アプリのストア評価</h2>
        <p>
          App Storeの公式アプリ「転職 ならエン転職 求人・仕事探しのアプリ」（販売元 en Inc.）の評価は、5点満点中4.4（評価件数7,913件）です（{CHECKED}にiTunes Search APIで取得）。
        </p>
        <p className="text-xs text-text-muted mb-10">
          ※これはアプリへの評価で、エン転職の求人や応募先企業への評価ではありません。口コミサイト・比較サイトの独自アンケートは回答者数や集計方法を確認できないため、根拠にしていません。
        </p>

        <h2>スカウトの仕組み</h2>
        <p className="mb-10">
          公式ヘルプでは、WEB履歴書を登録すると「エン転職の求人企業」や「転職エージェント」などからスカウト・オファーを受けられると案内されています。WEB履歴書は匿名で公開され、個人を特定する情報は参照されません。
          スカウトの種類は「企業からのスカウト」「企業からのシークレットスカウト」「転職エージェントからのスカウト」の3つで、「前給保証」「一次面接免除」などの特典が付く場合もあるとされています。
        </p>

        <h2>利用規約で確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "規約はエン エージェントなどと共通", d: "「転職支援サービス利用規約」は、エン転職・ミドルの転職と、エン エージェントなどの人材紹介サービスに共通の規約です。" },
            { t: "コンサルタントが担当する案件は直接連絡できない", d: "第6条では、エンのコンサルタントが応募受付や面接日時の調整を行っている案件について、利用者から求人企業へ直接連絡することはできないとされています（面接当日などの緊急連絡を除く）。通常の求人広告への応募は、利用者が企業と直接やり取りする前提です。" },
            { t: "1年以上ログインしないと登録が抹消される場合がある", d: "第12条では、会員はいつでも退会できるほか、会員画面に1年以上ログインがない場合は自動的に登録を抹消される場合があると定められています。" },
            { t: "面接の無断欠席などは登録取り消しの対象", d: "第5条では、虚偽の登録、正当な理由のない面接の無断欠席や内定受諾後の辞退などを、登録を取り消す事由として挙げています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>エン転職が向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>自分のペースで求人を探して応募したい人</li>
              <li>取材にもとづく詳しい求人情報を読んで比べたい人</li>
              <li>匿名の履歴書で企業やエージェントからのスカウトを受けたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>担当者に求人を紹介してほしい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>・<Link href="/review/doda/" className="text-teal underline">doda</Link></li>
              <li>スカウト中心で探したい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>・<Link href="/review/miidas/" className="text-teal underline">ミイダス</Link></li>
              <li>サイトとエージェントの違いを先に知りたい人 →<Link href="/compare/agent-vs-site/" className="text-teal underline">エージェントと転職サイトの比較</Link></li>
            </ul>
          </div>
        </div>

        <h2>エン転職 よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p className="mb-10">
          エン転職は、取材にもとづく求人情報が特徴の求人サイトで、求職者会員数は1,298万人です。一方で利用企業数は前年同期から15.9%減っており、希望条件での求人件数は登録前に確認しておくと安心です。
          オリコン調査の第1位は転職に成功した人を対象とした調査の結果であるため、担当者の支援を受けたい場合は転職エージェントとの併用も検討してください。
        </p>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
