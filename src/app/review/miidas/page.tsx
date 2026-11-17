import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ミイダスの評判・口コミは？アプリ評価と面接確約オファーの仕組み・注意点【2026年11月】",
  description:
    "ミイダスの評判を、App Store・Google Playの評価と公開レビュー、利用規約・ヘルプセンター・厚生労働省の登録情報で確認しました。パーソルグループのミイダス株式会社が運営するスカウト型の転職サービスです。面接確約オファーの条件、退会時の注意点を解説します。",
  alternates: { canonical: "/review/miidas/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ミイダスの評判・口コミは？アプリ評価と面接確約オファーの仕組み【2026年11月】",
    description: "アプリストアの評価、厚生労働省に登録された就職者数、利用規約にもとづく注意点をまとめています。",
  },
};

const CHECKED = "2026年11月17日";

const faqData = [
  {
    q: "ミイダスの評判は良いですか、悪いですか？",
    a: "2026年11月17日時点で、App Storeの評価は5点満点中3.6（959件）、Google Playは2.6（555件）です。表示される公開レビューでは、条件を設定して不要な企業からの連絡を減らせる点や適性診断を評価する声がある一方、市場価値の診断額が実感と離れている、操作が不安定といった声もあります。いずれも表示されたレビューは数件で投稿時期も古いため、参考程度にご覧ください。",
  },
  {
    q: "ミイダスの「面接確約」オファーなら必ず面接を受けられますか？",
    a: "利用規約では、企業が設定した面接確約期間内に応募した場合に面接を前提としたオファーとされ、期間を過ぎると確約は適用されません。ヘルプセンターでは、応募後にプロフィールを変更した場合や、過去にその企業の選考で不合格になっている場合は面接に進めないことがあると案内されています。",
  },
  {
    q: "ミイダスは誰が運営していますか？",
    a: "ミイダス株式会社（東京都品川区、2018年12月28日設立）です。同社はプレスリリースで「パーソルグループのミイダス株式会社」と名乗っており、パーソルグループの公式サイトのグループ会社一覧にも掲載されています。有料職業紹介事業の許可番号は13-ユ-311262です。",
  },
  {
    q: "ミイダスを退会するとどうなりますか？",
    a: "ヘルプセンターでは、退会すると入力したすべてのデータが消えると案内されています。休止機能はなく、連絡を止めたい場合は通知をオフにする方法が案内されています。退会前に応募先企業へ提供した個人情報は各企業が管理するため、訂正や利用停止は企業に直接依頼します（利用規約）。",
  },
  {
    q: "ミイダスで応募を取り消すことはできますか？",
    a: "ヘルプセンターによると、ミイダス上で応募を取り消すことはできず、応募先の企業に直接連絡する必要があります。",
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
  { label: "ミイダス株式会社 会社概要", url: "https://miidas.co.jp/company" },
  { label: "ミイダス 公式サイト（求職者向け）", url: "https://miidas.jp/" },
  { label: "ミイダス 利用規約", url: "https://miidas.jp/agreement" },
  { label: "ミイダス ヘルプセンター", url: "https://support.miidas.jp/" },
  { label: "ミイダス ヘルプセンター「現在の市場価値はどう決めている？（求職者向け）」", url: "https://support.miidas.jp/%E7%8F%BE%E5%9C%A8%E3%81%AE%E5%B8%82%E5%A0%B4%E4%BE%A1%E5%80%A4%E3%81%AF%E3%81%A9%E3%81%86%E6%B1%BA%E3%82%81%E3%81%A6%E3%81%84%E3%82%8B%EF%BC%9F%EF%BC%88%E6%B1%82%E8%81%B7%E8%80%85%E5%90%91%E3%81%91%EF%BC%89-62d9538157f31b001d0338c6" },
  { label: "ミイダス ヘルプセンター「ミイダスを退会したい（求職者向け）」", url: "https://support.miidas.jp/%E3%83%9F%E3%82%A4%E3%83%80%E3%82%B9%E3%82%92%E9%80%80%E4%BC%9A%E3%81%97%E3%81%9F%E3%81%84%EF%BC%88%E6%B1%82%E8%81%B7%E8%80%85%E5%90%91%E3%81%91%EF%BC%89-62d9538157f31b001d0338f0" },
  { label: "ミイダス 法人向けサイト", url: "https://corp.miidas.jp/" },
  { label: "パーソルグループ グループ会社一覧", url: "https://www.persol-group.co.jp/corporate/group/" },
  { label: "ミイダス株式会社 ニュースリリース（2026年11月16日）", url: "https://miidas.co.jp/newsrelease/20261116/" },
  { label: "PR TIMES ミイダス株式会社「登録ユーザー数が100万人を突破」（2023年6月21日）", url: "https://prtimes.jp/main/html/rd/p/000000024.000099622.html" },
  { label: "App Store「ミイダス」", url: "https://apps.apple.com/jp/app/id982879965" },
  { label: "Google Play「ミイダス」", url: "https://play.google.com/store/apps/details?id=jp.co.inte.miidas" },
  { label: "厚生労働省 人材サービス総合サイト（許可番号13-ユ-311262で検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
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
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "ミイダスの評判・口コミ" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ミイダスの評判・口コミは？アプリ評価と面接確約オファーの仕組み・注意点【2026年11月】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "3.6", l: "App Storeの評価（959件）" },
              { v: "2.6", l: "Google Playの評価（555件）" },
              { v: "680人", l: "厚労省に登録された就職者数（令和7年度）" },
              { v: "447,743社", l: "利用企業数（公式表記・2025年3月時点の累計）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            ミイダスは、パーソルグループのミイダス株式会社が運営する転職サービスです。求職者がプロフィールと診断結果を登録し、企業から届くオファー（スカウト）に応じる仕組みで、担当者が求人を紹介する転職エージェントとは使い方が異なります。
            アプリの評価は<strong>App Storeで3.6、Google Playで2.6</strong>で、ストアによって評価が分かれています。
          </p>
          <p className="text-xs text-text-muted mt-3">評価・件数は{CHECKED}に当サイトで確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <h2>ミイダスの基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>運営会社</th><td className={td}>ミイダス株式会社（パーソルグループ）</td></tr>
              <tr><th className={th}>設立・所在地</th><td className={td}>2018年12月28日設立／東京都品川区北品川5丁目1番18号 住友不動産大崎ツインビル東館17階・18階</td></tr>
              <tr><th className={th}>代表者</th><td className={td}>代表取締役社長 後藤 喜悦</td></tr>
              <tr><th className={th}>有料職業紹介事業</th><td className={td}>許可番号 13-ユ-311262（令和元年10月1日許可・取扱職種は全職種）</td></tr>
              <tr><th className={th}>サービスの型</th><td className={td}>オファー（スカウト）型。企業からの「いいね」に求職者が応じるとマッチングし、応募または「話を聞いてみたい」を押すと氏名・連絡先が企業に開示されます</td></tr>
              <tr><th className={th}>主な機能</th><td className={td}>市場価値診断・コンピテンシー診断（約12分・1年後から再受験可）・バイアス診断ゲームなど</td></tr>
              <tr><th className={th}>料金</th><td className={td}>診断は無料と公式サイト・ヘルプセンターに記載。求職者向けの有料プランの記載は確認できませんでした</td></tr>
              <tr><th className={th}>利用企業数</th><td className={td}>447,743社（公式サイトの表記「2025年3月時点での累計実績」）</td></tr>
              <tr><th className={th}>登録ユーザー数</th><td className={td}>100万人突破（2023年6月21日のプレスリリース。これより新しい日付つきの公表値は確認できませんでした）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：ミイダス株式会社 会社概要（同ページ記載の2025年4月1日時点の情報）・ミイダス公式サイト・利用規約・ヘルプセンター・厚生労働省 人材サービス総合サイト。いずれも{CHECKED}確認。
        </p>

        <h2>アプリストアの評価と公開レビューの傾向</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">掲載先</th>
                <th className="p-3 text-right">評価（5点満点）</th>
                <th className="p-3 text-right rounded-tr-lg">評価・レビュー件数</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">App Store</td><td className="p-3 text-right">3.6</td><td className="p-3 text-right">959件</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">Google Play</td><td className="p-3 text-right">2.6</td><td className="p-3 text-right">555件（ダウンロード数10万以上）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※{CHECKED}確認。App Storeの値はAppleの公開データ（平均3.55）を小数第1位で表示したものです。</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評価で見られた内容</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>条件を設定して、希望しない企業からの連絡を減らせる（在職中の利用に向く）</li>
              <li>面接につながり、短期間で入社が決まった</li>
              <li>企業とのメッセージのやり取りがスムーズで、適性診断が参考になった</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">低い評価で見られた内容</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>プロフィールを書き換えた後、面接確約のオファーで面接を断られた</li>
              <li>市場価値の診断額が実感と離れている</li>
              <li>登録中に画面が止まる・コピー＆ペーストができないなど操作面の不満</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：App Store（表示された4件・2017〜2025年の投稿）とGoogle Play（表示された3件・2018〜2020年の投稿）の公開レビューを当サイトが要約。表示件数が少なく投稿時期も古いため、傾向は限定的です。
          口コミサイト「みん評」は当サイトからページを閲覧できなかったため、件数・評価点とも掲載していません。比較サイトの独自アンケートは回答者数を確認できないため根拠にしていません。
        </p>

        <h2>厚生労働省に登録された就職者数</h2>
        <p>
          有料職業紹介事業者は、職業紹介の実績を厚生労働省の「人材サービス総合サイト」に公開しています。ミイダス株式会社（許可番号13-ユ-311262）の登録内容は次のとおりです（令和8年11月1日現在の表示）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年度</th>
                <th className="p-3 text-right">就職者数（4か月以上の雇用）</th>
                <th className="p-3 text-right rounded-tr-lg">うち無期雇用</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">令和6年度</td><td className="p-3 text-right">304人</td><td className="p-3 text-right">289人</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">令和7年度</td><td className="p-3 text-right">680人</td><td className="p-3 text-right">641人</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          令和7年度の就職者数は令和6年度の約2.2倍です（当サイト計算）。令和2〜5年度はいずれも0人と表示されています。これは職業紹介事業として報告された人数で、求職者が企業のオファーに直接応募して入社した人数がすべて含まれるかどうかは、同サイトの表示からは分かりません。
        </p>

        <h2>面接確約オファーとプロフィール公開の仕組み</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "面接確約は「期間内の応募」が条件", d: "利用規約では、面接確約のオファーは企業が設定した面接確約期間内に応募した場合に面接を前提とするもので、期間を過ぎると確約は適用されません。書類選考欄が「なし（通過済み）」のオファーは面接から始まりますが、応募後のプロフィール変更や、過去にその企業で不合格になっている場合は面接に進めないことがあります（ヘルプセンター）。" },
            { t: "氏名・連絡先以外は企業から見える", d: "利用規約では、企業は氏名・フリガナ・電話番号・メールアドレス・履歴書を除くプロフィールを閲覧できます。ヘルプセンターでは、職務経歴書とポートフォリオはそのまま企業に公開されると案内されています。特定の企業に公開しない設定もできます。" },
            { t: "診断結果も企業に共有される", d: "利用規約では、コンピテンシー診断・バイアス診断ゲームの結果は、求職者がブロックした企業を除く利用企業に開示されます。市場価値の診断結果は企業に表示されません（ヘルプセンター）。" },
            { t: "ミイダスから電話が来ることがある", d: "法人向けサイトでは、企業がオファーを送った求職者にミイダスが電話でフォローすると案内されています。利用規約でも、事前に同意した求職者には応募を促す連絡をすることがあると定められています。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>2026年11月の情報流出の可能性に関する発表</h2>
        <p className="mb-10">
          ミイダス株式会社は2026年11月16日、業務で利用しているクラウドサービスNotionのAI機能「Notion AI」に入力した情報の一部が外部に流出した可能性があると発表しました。同社は、ミイダスをはじめとする同社サービスのシステムは本件の影響を受けておらず、不正利用は確認されていないとしています。
          最新の状況は同社のニュースリリースでご確認ください。
        </p>

        <h2>ミイダスが向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>在職中で、企業からの連絡を待ちながら転職先を探したい人</li>
              <li>診断を使って自分の強みや適性を整理したい人</li>
              <li>公開範囲を設定したうえで、職務経歴を企業に見てもらいたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>書類添削や面接対策を担当者に頼みたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などの転職エージェント</li>
              <li>年収600万円以上のハイクラス向けスカウトを受けたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link></li>
              <li>エージェントとサイトの違いを先に知りたい人 →<Link href="/compare/agent-vs-site/" className="text-teal underline">エージェントと転職サイトの比較</Link></li>
            </ul>
          </div>
        </div>

        <h2>ミイダス よくある質問</h2>
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
          ミイダスは、診断とプロフィールをもとに企業からのオファーを受けるパーソルグループの転職サービスです。アプリの評価はApp Storeで3.6、Google Playで2.6と分かれています。
          面接確約オファーには期間などの条件があり、職務経歴書は企業にそのまま公開されるため、登録前に公開範囲の設定と利用規約を確認しておくと安心です。応募書類の準備や面接対策の支援を受けたい場合は、転職エージェントとの併用をおすすめします。
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
