import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Re就活の評判は？会員300万人・アプリ評価4.2・「8年連続No.1」の調査条件・規約を公式データで確認【2026年11月】",
  description:
    "20代向け転職サイト「Re就活」の評判を、運営会社 学情の決算説明資料・IR、会員規約・公式FAQ、App Store、厚生労働省の人材サービス総合サイトで確認しました。会員数は300万人（2026年9月）、アプリ評価は4.2です。No.1表記の調査条件も整理しています。",
  alternates: { canonical: "/review/re-shukatsu/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "Re就活の評判は？会員300万人・アプリ評価・No.1表記の調査条件・規約を公式データで確認",
    description: "学情の決算説明資料・IR・会員規約・公式FAQ・アプリストアにもとづいて、Re就活の特徴と注意点をまとめています。",
  },
};

const CHECKED = "2026年11月25日";

// 学情 決算説明資料（2025年10月期 通期・2026年10月期 第3四半期）の「Ｒｅ就活」売上高（百万円）
const sales = [
  { y: "2024年10月期", v: 2526, note: "" },
  { y: "2025年10月期", v: 3243, note: "前期比+28.4%" },
  { y: "2026年10月期 第3四半期累計（11〜7月）", v: 1800, note: "前年同期比+0.6%" },
];

const faqData = [
  {
    q: "Re就活の評判は良いですか、悪いですか？",
    a: "当サイトでは、出典を確認できない口コミの集計は掲載していません。客観的に確認できる数値として、App Storeの公式アプリの評価は5点満点中4.2（4.16・1,997件、2026年11月25日確認）です。運営会社は「20代が選ぶ20代向け転職サイト」8年連続No.1と公表していますが、これは東京商工リサーチのWebアンケートで「20代向けという印象」を尋ねた結果で、求人数や転職実績の順位ではありません。",
  },
  {
    q: "Re就活は転職エージェントですか？",
    a: "Re就活は、利用者が自分で求人を探して応募する転職サイト（求人サイト）です。厚生労働省の人材サービス総合サイトでは、株式会社学情の特定募集情報等提供事業（届出受理番号51-募-000166）のサービスとして登録されています。担当者が求人を紹介する転職エージェントは、同社の職業紹介事業（許可番号13-ユ-314210）として「Re就活エージェント」が別に運営されています。",
  },
  {
    q: "Re就活は30代でも使えますか？",
    a: "公式FAQでは「サイト利用に年齢制限は設けておらず」と案内されており、公式サイトにも「20代以外の方もご利用頂けます」と記載されています。ただし、運営会社の公表では会員の93.3%が20代です。",
  },
  {
    q: "Re就活は無料で使えますか？",
    a: "会員規約第3条に「会員は本サービスを無料で受けられるものとします。」とあり、公式FAQでも登録料・年会費・月会費などの料金は一切かからないと案内されています。",
  },
  {
    q: "Re就活を退会するにはどうすればよいですか？",
    a: "公式FAQでは、ログイン後に【設定変更】内の最下部【退会の手続き】から手続きできると案内されています。退会後も1週間〜3週間ほどメールや郵送物が届く可能性があるとされています。また会員規約第2条では、退会時に自分で応募した掲載企業へ退会ステータスが連携されると定められています。",
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
  { label: "Re就活 公式サイト", url: "https://re-katsu.jp/career/" },
  { label: "Re就活 会員規約（2024年1月17日一部改訂）", url: "https://re-katsu.jp/career/contents/kiyaku/index.html" },
  { label: "Re就活 よくある質問「料金はかかりますか」", url: "https://gakujo.tayori.com/q/rekatsufaq/detail/1422638/" },
  { label: "Re就活 よくある質問「退会したい」", url: "https://gakujo.tayori.com/q/rekatsufaq/detail/1122502/" },
  { label: "Re就活 よくある質問「スカウトとは」", url: "https://gakujo.tayori.com/q/rekatsufaq/detail/1127779/" },
  { label: "Re就活 よくある質問「スカウトを停止したい」", url: "https://gakujo.tayori.com/q/rekatsufaq/detail/1127780/" },
  { label: "Re就活 よくある質問（年齢制限）", url: "https://gakujo.tayori.com/q/rekatsufaq/detail/1121948/" },
  { label: "Re就活エージェント 公式サイト", url: "https://re-katsu.jp/career/agent/" },
  { label: "株式会社学情 会社概要", url: "https://company.gakujo.ne.jp/company/outline/" },
  { label: "株式会社学情「Ｒｅ就活」会員数300万人突破のお知らせ（2026年10月1日）", url: "https://ssl4.eir-parts.net/doc/2301/tdnet/2889912/00.pdf" },
  { label: "株式会社学情 2025年10月期 決算説明資料（2025年12月8日）", url: "https://ssl4.eir-parts.net/doc/2301/tdnet/2728833/00.pdf" },
  { label: "株式会社学情 2026年10月期 第3四半期 決算説明資料（2026年9月14日）", url: "https://ssl4.eir-parts.net/doc/2301/tdnet/2884438/00.pdf" },
  { label: "株式会社学情 月次の会員登録数・応募数のお知らせ（2026年11月17日）", url: "https://ssl4.eir-parts.net/doc/2301/tdnet/2919383/00.pdf" },
  { label: "株式会社学情「Ｒｅ就活エージェント」20代登録比率No.1のお知らせ（2026年3月24日）", url: "https://ssl4.eir-parts.net/doc/2301/tdnet/2779365/00.pdf" },
  { label: "株式会社学情 第48期 有価証券報告書（2025年10月期・EDINET）", url: "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XGG2.pdf" },
  { label: "App Store「転職ならＲｅ就活 - 20代・第二新卒の求人・仕事が豊富」", url: "https://apps.apple.com/jp/app/id1237443068" },
  { label: "厚生労働省 人材サービス総合サイト（職業紹介事業者・特定募集情報等提供事業者の検索）", url: "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do" },
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
      <Breadcrumb items={[{ name: "エージェント一覧", href: "/review/" }, { name: "Re就活の評判" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            Re就活の評判は？会員300万人・アプリ評価4.2・「8年連続No.1」の調査条件・規約を公式データで確認【2026年11月】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "300万人", l: "会員数（2026年9月30日に突破・学情発表）" },
              { v: "93.3%", l: "会員に占める20代の割合（学情発表）" },
              { v: "4.2", l: "App Storeの評価（5点満点・1,997件）" },
              { v: "無料", l: "登録料・年会費・月会費なし（会員規約第3条）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            Re就活は、東証プライム上場の株式会社学情が2004年11月から運営している<strong>20代・第二新卒・既卒向けの転職サイト</strong>です。担当者が求人を紹介する転職エージェントではなく、利用者が自分で求人を探して応募し、匿名のWeb履歴書で企業からスカウトを受ける仕組みです。
            会員数は2026年9月30日に<strong>300万人</strong>を超えた一方、2026年10月期は第3四半期累計の売上高が前年同期比+0.6%、2026年10月の月間会員登録数は前年同月比88.5%と、伸びは落ち着いています（学情の決算説明資料・月次のお知らせ）。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に公式サイト・会員規約・公式FAQ・学情のIR資料・App Store・厚生労働省の人材サービス総合サイトで当サイトが確認した値です。当サイトでは口コミ・数値の創作は行っていません。</p>
        </div>

        <h2>Re就活の基本データ【{CHECKED}確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>サービスの種類</th><td className={td}>転職サイト（求人サイト）。厚生労働省の人材サービス総合サイトでは、学情の特定募集情報等提供事業（届出受理番号 51-募-000166）のサービスとして登録</td></tr>
              <tr><th className={th}>運営会社</th><td className={td}>株式会社学情（1977年11月設立・東京都中央区銀座・資本金15億円・東証プライム 2301）</td></tr>
              <tr><th className={th}>開始</th><td className={td}>2004年11月（有価証券報告書の沿革「20代の若手人材専門インターネット転職情報サイト「Ｒｅ就活」発信開始」）</td></tr>
              <tr><th className={th}>会員数</th><td className={td}>300万人（2026年9月30日に突破）。2025年10月末は280万人（有価証券報告書）</td></tr>
              <tr><th className={th}>会員の属性</th><td className={td}>20代が93.3%、「はじめての転職」が75.2%（学情のニュースリリース）</td></tr>
              <tr><th className={th}>対象年齢</th><td className={td}>年齢制限なし（公式FAQ）。公式サイトは「20代専門転職サイト」と案内</td></tr>
              <tr><th className={th}>料金</th><td className={td}>無料（会員規約第3条・公式FAQ）</td></tr>
              <tr><th className={th}>掲載求人数</th><td className={td}>公式サイト・決算説明資料に合計件数の公表はありません（決算説明資料は求人件数の前年比のみ）</td></tr>
              <tr><th className={th}>関連サービス</th><td className={td}>Re就活エージェント（学情の有料職業紹介・許可番号 13-ユ-314210）、Re就活30、Re就活キャンパス</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典：Re就活 公式サイト・会員規約・公式FAQ、株式会社学情 会社概要・有価証券報告書・決算説明資料・ニュースリリース、厚生労働省 人材サービス総合サイト（令和8年11月1日現在の表示）。
        </p>

        <h2>Re就活の売上と会員登録の推移</h2>
        <p>学情の決算説明資料では、Re就活の売上高が次のとおり記載されています。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">期間</th>
                <th className="p-3 text-right">Re就活の売上高</th>
                <th className="p-3 text-right rounded-tr-lg">前年比</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.v / 100).toFixed(2)}億円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.note || "－"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          2025年10月期は売上高32.43億円（前期比+28.4%）で過去最高を更新し、マッチング数（応募数）は+14.3%、求人件数（期中平均）は+11.1%でした。
          2026年10月期は第3四半期累計で18.00億円（前年同期比+0.6%）、マッチング数+9.8%、求人件数+3.6%と伸びが小さくなっています。2026年10月の月間会員登録数は前年同月比88.5%、月間応募数は89.8%です（2026年11月17日のお知らせ）。
          会員数・求人件数の推移は利用しやすさを直接示すものではないため、希望する職種・地域の求人は登録前に検索して確かめることをおすすめします。
        </p>

        <h2>「8年連続No.1」の調査条件</h2>
        <p>
          学情は、Re就活が「20代が選ぶ20代向け転職サイト」で8年連続No.1と公表しています。2026年10月1日の発表に記載された調査の概要は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className={th}>調査機関</th><td className={td}>東京商工リサーチ</td></tr>
              <tr><th className={th}>調査期間</th><td className={td}>2026年7月24日〜8月14日</td></tr>
              <tr><th className={th}>対象</th><td className={td}>20代の転職検討者（各サイトの利用者ベース）</td></tr>
              <tr><th className={th}>方法</th><td className={td}>Webアンケート調査</td></tr>
              <tr><th className={th}>No.1の内容</th><td className={td}>「20代向け（自分たち向け）」という印象に「あてはまる」＋「ややあてはまる」と感じた割合</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          この調査は「20代向けという印象」を尋ねたもので、求人数・転職成功率・満足度の順位ではありません。また、Re就活エージェントの「転職エージェント20代登録比率 6年連続No.1」は、転職サイト運営企業が展開する転職エージェントを対象に、各サービスの登録者に占める20代の比率を調査員のヒアリングで調べた結果です（東京商工リサーチ・2025年1〜12月）。
          公式サイトの説明文にある「20代専門実績No.1」は、確認時点でページ上に根拠の注記が見当たらなかったため、当サイトでは根拠として扱っていません。
        </p>

        <h2>アプリのストア評価</h2>
        <p>
          App Storeの公式アプリ「転職ならＲｅ就活 - 20代・第二新卒の求人・仕事が豊富」（販売元 GAKUJO Co.,Ltd.）の評価は、5点満点中4.2（4.16・評価件数1,997件）です（{CHECKED}にiTunes Search APIで取得）。
        </p>
        <p className="text-xs text-text-muted mb-10">
          ※これはアプリへの評価で、Re就活の求人や応募先企業への評価ではありません。口コミサイト・比較サイトの独自アンケートは回答者数や集計方法を確認できないため、根拠にしていません。
        </p>

        <h2>スカウトの仕組み</h2>
        <p className="mb-10">
          公式FAQでは、企業は匿名のWeb履歴書をもとにスカウトを送信すると案内されています。スカウトは「選考通過を保証するものではございません」とされ、停止は「すべてのスカウトを停止する」と「企業ごとに停止する」の2種類から選べます。
          特定の企業だけにWeb履歴書の閲覧制限をかけることはできず、鍵マークの付いた項目は未応募の企業からは見えない仕組みです。
        </p>

        <h2>会員規約・FAQで確認しておきたい点</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "退会すると応募済みの企業に伝わる", d: "会員規約第2条では、退会は専用画面から自由に行えるとしたうえで、「退会時、会員が自ら応募を行った掲載企業には退会ステータスが連携されます」と定めています。" },
            { t: "退会後もしばらく連絡が届く場合がある", d: "公式FAQでは、退会後も1週間〜3週間ほどメールや郵送物が届く可能性があると案内されています。Re就活30やRe就活キャンパスにも登録している場合は、それぞれで退会しないとRe就活IDの登録が残るとされています。" },
            { t: "Re就活エージェントは規約上の「本サービス」に含まれる", d: "会員規約第1条では、Re就活エージェントも規約の対象となるサービスに含まれています。エージェントの公式ページでは、エージェントに登録するとRe就活にも同時に登録されると案内されています。" },
            { t: "エージェントの求人数表記は時点が古い", d: "Re就活エージェントの公式ページにある「非公開求人12万件」は、注記上「2024年2月時点で保有している求人数」です。現在の件数は面談などで確かめる必要があります。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>学情の職業紹介事業の実績（厚生労働省の公表値）</h2>
        <p className="mb-10">
          厚生労働省の人材サービス総合サイトでは、株式会社学情 東京本社（許可番号13-ユ-314210）の職業紹介による無期雇用の就職者数は1,129人、うち就職後6か月以内の離職者は15人です（令和7年度の情報登録・令和8年11月1日現在の表示）。
          この値はRe就活エージェントを含む学情の職業紹介全体の値で、転職サイトのRe就活経由の転職者数ではありません。
        </p>

        <h2>Re就活が向いている人・他のサービスが合う人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>20代・第二新卒で、自分のペースで求人を探して応募したい人</li>
              <li>はじめての転職で、匿名のWeb履歴書で企業からのスカウトを受けたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他のサービスが合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>20代向けで担当者に求人を紹介してほしい人 →<Link href="/review/mynavi-job20s/" className="text-teal underline">マイナビジョブ20&apos;s</Link>・<Link href="/review/daini-agent-neo/" className="text-teal underline">第二新卒エージェントneo</Link></li>
              <li>取材型の求人サイトと比べたい人 →<Link href="/review/en-tenshoku/" className="text-teal underline">エン転職</Link></li>
              <li>サイトとエージェントの違いを先に知りたい人 →<Link href="/compare/agent-vs-site/" className="text-teal underline">エージェントと転職サイトの比較</Link></li>
            </ul>
          </div>
        </div>

        <h2>Re就活 よくある質問</h2>
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
          Re就活は、学情が運営する20代向けの転職サイトで、会員数は300万人、会員の93.3%が20代です。利用は無料で、匿名のWeb履歴書によるスカウトも受けられます。
          「8年連続No.1」は20代向けという印象を尋ねた調査の結果であるため、求人の量や支援の手厚さは、希望条件での求人検索や、<Link href="/age/20s/" className="text-teal underline">20代向け転職エージェントの比較</Link>とあわせて確認してください。
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
