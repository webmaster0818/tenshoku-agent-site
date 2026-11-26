import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const TITLE = "リクルートダイレクトスカウトの評判は？公式データとApp Storeの評価で確認【2026年11月】";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "リクルートダイレクトスカウトの評判を、App Storeの評価（4.4・1,235件）、会員規約・公式ヘルプ、厚生労働省の人材サービス総合サイト、公式の求人検索の件数で確認しました。運営会社・許可番号・費用・年収帯別の求人件数・スカウトの仕組みと注意点をまとめています（2026年11月27日確認）。",
  alternates: { canonical: "/review/recruit-direct-scout/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: TITLE,
    description:
      "App Storeの評価、会員規約・公式ヘルプ、厚生労働省の登録情報、公式の求人検索の件数にもとづいて、リクルートダイレクトスカウトの特徴と注意点を整理しています。",
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
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/recruit-direct-scout/" },
  inLanguage: "ja",
};

// 公式の求人検索（年収別の求人一覧）に表示された件数。2026年11月27日に当サイトが確認
const TOTAL_200 = 642023;
const incomeBands = [
  { label: "200万円以上", v: 642023 },
  { label: "400万円以上", v: 597999 },
  { label: "600万円以上", v: 413301 },
  { label: "800万円以上", v: 255046 },
  { label: "1,000万円以上", v: 124270 },
  { label: "1,400万円以上", v: 49543 },
  { label: "2,000万円以上", v: 9448 },
];

// 公式ヘルプのトップに表示された「よくあるご質問」のビュー数（2026年11月27日確認）
const helpViews = [
  { t: "退会したい", v: 214880 },
  { t: "企業ブロック設定・エージェントブロック設定とは何か", v: 99757 },
  { t: "退会したはずなのにメールが来る", v: 45567 },
  { t: "応募依頼を取り消し（キャンセル）したい", v: 39972 },
  { t: "メール通知の配信を解除したい", v: 38052 },
  { t: "スカウトを辞退したい", v: 33306 },
  { t: "登録情報を変更したい", v: 31628 },
];

const faqData = [
  {
    q: "リクルートダイレクトスカウトの評判は良いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、App Storeの公式アプリの評価は5点満点中4.4（4.40648・評価件数1,235件、2026年11月27日にiTunes Search APIで取得）です。これはアプリへの評価であり、紹介される求人や転職エージェントの対応への評価ではありません。",
  },
  {
    q: "リクルートダイレクトスカウトは無料ですか？有料プランはありますか？",
    a: "公式ヘルプに「完全無料のサービスとなります。ご利用いただく上で、料金は一切発生いたしません。」と記載されています（2026年11月27日確認）。運営会社の手数料表では、職業紹介が成功した場合の紹介手数料は求人者が負担し、標準は求職者の年間賃金の35%と定められています。",
  },
  {
    q: "運営会社はリクルートですか？",
    a: "会員規約第1条では、運営会社を株式会社インディードリクルートパートナーズとしています。同社の会社概要では、2025年4月1日に株式会社リクルートより分割して創業したと記載されています。厚生労働省の人材サービス総合サイトでの有料職業紹介事業の許可番号は13-ユ-317880（許可年月日 令和7年4月1日）です。",
  },
  {
    q: "スカウトを止めることはできますか？",
    a: "会員規約第1条に「本サービスの利用中は、スカウトの受信を停止することはできません。」とあり、公式ヘルプでも停止はできないと案内されています。新着スカウトの通知メールは、マイページの「メール受信設定」で停止できます。特定の企業・エージェントに対しては、ブロック設定でレジュメを非公開にできます。",
  },
  {
    q: "現在の勤務先に登録が知られることはありませんか？",
    a: "公式ヘルプでは、スカウトに返信するまで氏名・生年月日・住所などは企業やエージェントに表示されないと案内されています。勤務先をブロック設定すると、その企業からはレジュメを検索・閲覧できなくなります。ただし会員規約第6条では、社名変更・組織再編などの場合や設定直後は、ブロックした企業にレジュメが公開されることがあると定めています。法人番号のない個人事業主はブロックの対象に指定できません。",
  },
  {
    q: "求人に自分から応募できますか？",
    a: "公式ヘルプでは、応募依頼ができるのはスカウトを受けた求人のみで、求人検索から応募依頼することはできないと案内されています。求人に「気になる」を送ると、企業・エージェントからスカウトが届く可能性があります。会員規約第10条では、「気になる」は一度押すと取り消せないと定めています。",
  },
  {
    q: "退会するにはどうすればよいですか？",
    a: "公式ヘルプでは、ログイン後に「マイページ」タブの[リクルートダイレクトスカウトを退会する]から手続きできると案内されています。退会してもレジュメは削除されないため、削除する場合は退会完了画面の案内から手続きします。退会後にリクルートIDでログインすると、新規会員として再登録される点にもご注意ください。",
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
  { label: "リクルートダイレクトスカウト 公式サイト", url: "https://directscout.recruit.co.jp/" },
  { label: "リクルートダイレクトスカウト サービス紹介", url: "https://about.directscout.recruit.co.jp/" },
  { label: "リクルートダイレクトスカウト 会員規約（2025年4月1日改定）", url: "https://cdn.p.recruit.co.jp/terms/rds-t-1003/index.html" },
  { label: "リクルートダイレクトスカウト 求人検索（200万円以上の求人一覧）", url: "https://directscout.recruit.co.jp/job_search/inc_002" },
  { label: "公式ヘルプ トップ（よくあるご質問）", url: "https://help.directscout.recruit.co.jp/s" },
  { label: "公式ヘルプ「無料で利用できますか？」", url: "https://help.directscout.recruit.co.jp/s/article/000026962" },
  { label: "公式ヘルプ「スカウト受信を停止したい」", url: "https://help.directscout.recruit.co.jp/s/article/000026903" },
  { label: "公式ヘルプ「スカウトとは？」", url: "https://help.directscout.recruit.co.jp/s/article/000027003" },
  { label: "公式ヘルプ「スカウトが届いた後の対応と流れ」", url: "https://help.directscout.recruit.co.jp/s/article/000031040" },
  { label: "公式ヘルプ「スカウトが届かない」", url: "https://help.directscout.recruit.co.jp/s/article/000026977" },
  { label: "公式ヘルプ「求人情報への応募を依頼したい」", url: "https://help.directscout.recruit.co.jp/s/article/000026979" },
  { label: "公式ヘルプ「企業ブロック設定・エージェントブロック設定とは何か」", url: "https://help.directscout.recruit.co.jp/s/article/000030152" },
  { label: "公式ヘルプ「退会したい」", url: "https://help.directscout.recruit.co.jp/s/article/000026946" },
  { label: "公式ヘルプ「退会したはずなのにメールが来る」", url: "https://help.directscout.recruit.co.jp/s/article/000031042" },
  { label: "株式会社インディードリクルートパートナーズ 会社概要", url: "https://www.indeedrecruit-partners.co.jp/about/profile/" },
  { label: "株式会社インディードリクルートパートナーズ 事業許可内容について（手数料表）", url: "https://www.indeedrecruit-partners.co.jp/license-epb/" },
  { label: "App Store「リクルートのハイクラス転職ならリクルートダイレクトスカウト」", url: "https://apps.apple.com/jp/app/id6479983775" },
  { label: "厚生労働省 人材サービス総合サイト（職業紹介事業者の検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
];

const th = "bg-gray-50 text-left px-3 py-2 border-b w-36 whitespace-nowrap";
const td = "px-3 py-2 border-b";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "リクルートダイレクトスカウトの評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">{TITLE}</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "4.4", l: "App Storeの評価（5点満点・1,235件）" },
              { v: "完全無料", l: "求職者の料金なし（公式ヘルプ）" },
              { v: "64.4%", l: "公開求人のうち年収600万円以上の割合（当サイト集計）" },
              { v: "13-ユ-317880", l: "有料職業紹介事業の許可番号（厚生労働省）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            リクルートダイレクトスカウトは、レジュメを登録すると<strong>企業や転職エージェントからスカウトが届く会員制の転職スカウトサービス</strong>です。
            App Storeの公式アプリの評価は5点満点中4.4（1,235件）で、求職者の利用は完全無料です。
            一方で、会員規約上<strong>スカウトの受信は停止できない</strong>こと、<strong>応募できるのはスカウトを受けた求人のみ</strong>であることなど、登録前に確認しておきたい仕様があります。
            当サイトでは、公式の求人検索で年収帯別の件数を数え、掲載求人の年収の分布も確認しました。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に公式サイト・会員規約・公式ヘルプ・運営会社のサイト・App Store・厚生労働省の人材サービス総合サイトで当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>App Storeの評価は<strong>4.4（1,235件）</strong>です。アプリへの評価であり、求人やエージェントの対応への評価ではありません。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>求職者の費用は<strong>かかりません</strong>。紹介手数料は求人者が負担します（運営会社の手数料表）。有料プランがある<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>とはこの点が異なります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>公開求人のうち年収600万円以上は<strong>64.4%</strong>、1,000万円以上は<strong>19.4%</strong>でした（当サイトが公式の求人検索で集計）。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>スカウトの受信は停止できず、求人検索から直接は応募できません。担当者から求人を紹介してほしい場合は、<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などの転職エージェントが向いています。</span>
            </li>
          </ul>
        </div>

        <h2>リクルートダイレクトスカウトの基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>サービスの種類</th><td className={td}>会員制の転職スカウトサービス。会員規約第1条では「職業紹介事業として運営するサービス」と定めています</td></tr>
              <tr><th className={th}>運営会社</th><td className={td}>株式会社インディードリクルートパートナーズ（東京都千代田区丸の内・資本金2億円・従業員5,283人（2026年4月1日現在））。2025年4月1日に株式会社リクルートより分割して創業</td></tr>
              <tr><th className={th}>許可番号</th><td className={td}>有料職業紹介事業 13-ユ-317880（許可年月日 令和7年4月1日・取扱職種 全職種・取扱地域 国内・職業紹介優良事業者）</td></tr>
              <tr><th className={th}>料金</th><td className={td}>求職者は完全無料（公式ヘルプ）。紹介手数料は求人者の負担で、標準は求職者の年間賃金の35%（運営会社の手数料表）</td></tr>
              <tr><th className={th}>主な機能</th><td className={td}>企業・転職エージェントからのスカウト受信、求人検索、チャットでのやりとり（会員規約第3条）</td></tr>
              <tr><th className={th}>公開求人数</th><td className={td}>年収200万円以上で検索した件数は642,023件（当サイトが公式の求人検索で確認）</td></tr>
              <tr><th className={th}>会員数</th><td className={td}>公式サイト・サービス紹介・公式ヘルプに会員数やヘッドハンター数の記載は確認できませんでした</td></tr>
              <tr><th className={th}>利用できない人</th><td className={td}>日本以外に居住している人（長期の海外出張を含む）、年齢の基準に満たない人（会員規約第8条）</td></tr>
              <tr><th className={th}>アプリ</th><td className={td}>iOS版は2024年4月公開・最新バージョン1.21.0（2026年11月16日公開）。Android版もあります</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：リクルートダイレクトスカウト 公式サイト・会員規約・公式ヘルプ、株式会社インディードリクルートパートナーズ 会社概要・事業許可内容について、厚生労働省 人材サービス総合サイト（令和8年11月1日現在の表示）、App Store。
        </p>

        <h2>App Storeでの評価</h2>
        <p>
          App Storeの公式アプリ「リクルートのハイクラス転職ならリクルートダイレクトスカウト」（販売元 INDEED RECRUIT PARTNERS, CO., LTD.）の評価は、5点満点中4.4（4.40648・評価件数1,235件）です（{CHECKED}にiTunes Search APIで取得）。
        </p>
        <p className="text-xs text-text-muted mb-10">
          ※これはアプリの使い勝手などへの評価で、届くスカウトの質や転職エージェントの対応、転職の結果を評価したものではありません。口コミサイト・比較サイトの独自アンケートは回答者数や集計方法を確認できないため、当サイトでは根拠にしていません。
        </p>

        <h2>公開求人の年収の分布（当サイト集計）</h2>
        <p>
          公式の求人検索で、年収の条件だけを指定して表示された件数を当サイトで確認しました。「200万円以上」の件数を全体とみなし、各年収帯の割合を計算しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年収の条件</th>
                <th className="p-3 text-right">表示件数</th>
                <th className="p-3 text-right rounded-tr-lg">200万円以上に占める割合</th>
              </tr>
            </thead>
            <tbody>
              {incomeBands.map((x) => (
                <tr key={x.label} className="border-b border-gray-100">
                  <td className="p-3">{x.label}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v.toLocaleString()}件</td>
                  <td className="p-3 text-right whitespace-nowrap">{((x.v / TOTAL_200) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-2">
          年収600万円以上の求人が6割強を占める一方、600万円未満の求人も約23万件（200万円以上の件数から600万円以上の件数を差し引いた値）あります。1,000万円以上は約5件に1件です。
        </p>
        <p className="text-xs text-text-muted mb-10">
          ※{CHECKED}に当サイトが確認した値で、件数は日々変動します。公開求人の件数であり、非公開求人やスカウトで届く求人は含みません。年収は求人に記載された想定年収の範囲によって判定されているとみられ、検索条件の判定方法は公式に説明されていないため、割合は目安としてご覧ください。
        </p>

        <h2>公式ヘルプで多く読まれている質問</h2>
        <p>
          公式ヘルプのトップに掲載されている「よくあるご質問」には、記事ごとのビュー数が表示されています。利用者が気にしている点を知る手がかりとして、ビュー数の多い順に並べました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">質問</th>
                <th className="p-3 text-right rounded-tr-lg">ビュー数</th>
              </tr>
            </thead>
            <tbody>
              {helpViews.map((x) => (
                <tr key={x.t} className="border-b border-gray-100">
                  <td className="p-3">{x.t}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※{CHECKED}に公式ヘルプのトップで確認した値です。ビュー数は記事の公開期間の長さにも左右されるため、利用者の不満の多さを直接示すものではありません。
        </p>

        <h2>スカウトの仕組み</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "返信するまで個人を特定できる情報は表示されない", d: "公式ヘルプでは、企業やエージェントには職歴・スキル・希望条件などが表示され、氏名・生年月日・住所など個人を特定できる情報は、スカウトに返信した時点で初めて公開されると案内されています。会員規約第2条では、性別・メールアドレス・電話番号なども非公開の項目に挙げています（年齢と都道府県は表示されます）。" },
            { t: "返信すると面談が設定される", d: "公式ヘルプでは、スカウトに応募希望の旨を返信すると、企業担当者またはエージェントとの面談が必ず設定されると案内されています。ただし会員規約第8条では、スカウトの受信や面談、推薦などを保証するものではないと定めており、求人が充足した場合などは面談を受け付けられないことがあるとされています。" },
            { t: "返信後のやりとりは企業・エージェントと直接行う", d: "公式ヘルプでは、面談日程の調整や応募書類の提出、選考状況の確認、応募の取り消しなどは、企業またはエージェントの担当者と直接行うと案内されています。内定後にサイト上での手続きは必要ありません。" },
            { t: "スカウトが届くかどうかはレジュメの内容による", d: "公式ヘルプでは、現在の年収・職歴・学歴が未登録の場合はスカウトが届かないと案内されています。経験業界・業務経験・役職・スキル・資格・語学力をタグで詳しく登録すると、スカウトが届く可能性が高まるとされています。" },
            { t: "リクルートエージェントの情報もおすすめに使われる", d: "公式ヘルプ「スカウトとは？」では、企業・エージェントへの候補者のおすすめに、レジュメや行動履歴に加え、リクルートエージェントも利用している場合はその行動履歴・選考状況、リクルートエージェントでの選考履歴の統計データなどを用いると説明しています。性別や年齢など経験・スキルと関係のない情報は判断材料に用いないとしています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>会員規約・公式ヘルプで確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "スカウトの受信は停止できない", d: "会員規約第1条に「本サービスの利用中は、スカウトの受信を停止することはできません。」とあります。新着スカウトの通知メールは、マイページの「メール受信設定」で停止できます。公式ヘルプでは、レジュメは匿名のため、反応しなくても企業・エージェントからの心象が悪くなることはないと案内されています。" },
            { t: "辞退しても同じ相手から別のスカウトが届くことがある", d: "公式ヘルプでは、辞退機能は辞退の理由を相手に伝える機能ではないため、辞退した企業・エージェントから別の職種のスカウトが届く可能性があると案内されています。届かないようにするには、ブロック設定を利用します。エージェント企業をすべて一括でブロックすることはできません。" },
            { t: "ブロック設定にも例外がある", d: "会員規約第6条では、ブロックした企業に社名変更や組織再編があった場合や、設定の直後には、レジュメが公開されてスカウトが届く場合があると定めています。公式ヘルプでは、関連会社や取引先もあわせて確認するよう案内されています。" },
            { t: "応募できるのはスカウトを受けた求人のみ", d: "求人検索から直接は応募できず、「気になる」を送ってスカウトを待つ仕組みです。「気になる」は一度押すと取り消せません（会員規約第10条）。" },
            { t: "退会後もメールが届く場合がある", d: "公式ヘルプでは、退会後にリクルートIDでログインすると再登録になること、リクルートIDやリクルートエージェントの転職支援サービスは別に退会が必要なことが案内されています。1年以上ログインしない場合、アカウントが削除されることがあるとも定められています（会員規約第5条）。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>運営会社の職業紹介の実績（厚生労働省の公表値）</h2>
        <p className="mb-2">
          厚生労働省の人材サービス総合サイトでは、株式会社インディードリクルートパートナーズ（許可番号13-ユ-317880）の令和7年度の情報登録として、職業紹介による就職者数（4か月以上の有期雇用と無期雇用の合計）は87,754人、うち無期雇用は83,999人です。
          無期雇用で就職後6か月以内に離職した人は5,144人で、無期雇用の就職者に占める割合は約6.1%（当サイトで計算）です（令和8年11月1日現在の表示）。
        </p>
        <p className="text-xs text-text-muted mb-10">
          ※この値は同社の職業紹介事業全体のもので、リクルートダイレクトスカウト経由の転職者数ではありません。同サイトには、営業の職業31.4%、一般事務・秘書・受付の職業32.0%など、職種別の手数料実績率も登録されています。
        </p>

        <h2>ビズリーチ・リクルートエージェントとの違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-left">リクルートダイレクトスカウト</th>
                <th className="p-3 text-left">ビズリーチ</th>
                <th className="p-3 text-left rounded-tr-lg">リクルートエージェント</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">形態</td><td className="p-3">スカウト型</td><td className="p-3">スカウト型</td><td className="p-3">転職エージェント（担当者が紹介）</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">求職者の費用</td><td className="p-3">完全無料</td><td className="p-3">無料プランと有料プラン</td><td className="p-3">無料</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">求人への応募</td><td className="p-3">スカウトを受けた求人のみ</td><td className="p-3">プランにより異なる</td><td className="p-3">紹介を受けた求人に応募</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※ビズリーチ・リクルートエージェントの内容は、当サイトの<Link href="/review/bizreach/" className="text-teal underline">ビズリーチの解説</Link>・<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェントの解説</Link>にもとづきます。料金・提供範囲は変更される場合があるため、ご利用前に各公式サイトにて最新情報をご確認ください。
        </p>

        <h2>リクルートダイレクトスカウトが向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>費用をかけずに、企業・エージェントからのスカウトで自分の市場価値を確かめたい人</li>
              <li>在職中で、匿名のレジュメを登録してスカウトを待ちながら転職活動を進めたい人</li>
              <li>年収600万円以上の求人を中心に探したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>既卒・フリーター・第二新卒で正社員就職の支援を受けたい人 →<Link href="/review/dym-shushoku/" className="text-teal underline">DYM就職（現ミーツカンパニー）</Link></li>
              <li>担当者に求人を紹介してほしい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>・<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link></li>
              <li>他のスカウト型と比べたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>・<Link href="/review/miidas/" className="text-teal underline">ミイダス</Link></li>
              <li>ハイクラス向けのサービスを一覧で比べたい人 →<Link href="/type/high-class/" className="text-teal underline">ハイクラス向けエージェント</Link></li>
            </ul>
          </div>
        </div>

        <h2>リクルートダイレクトスカウト よくある質問</h2>
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
          リクルートダイレクトスカウトは、インディードリクルートパートナーズが運営する完全無料の転職スカウトサービスで、App Storeの評価は4.4（1,235件）です。公開求人の64.4%が年収600万円以上でした。
          スカウトの受信を停止できないこと、応募できるのはスカウトを受けた求人のみであること、ブロック設定に例外があることを確認したうえでご利用ください。担当者からの紹介も受けたい場合は、<Link href="/compare/agent-vs-site/" className="text-teal underline">エージェントと転職サイトの比較</Link>もあわせてご覧ください。
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
