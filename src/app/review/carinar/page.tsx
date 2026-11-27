import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const TITLE = "CARINAR（キャリナー）とは？特徴・料金・対応領域を公式情報で確認【2026年11月】";

export const metadata: Metadata = {
  alternates: { canonical: "/review/carinar/" },
  title: TITLE,
  description:
    "CARINAR（キャリナー）は、相談したい転職エージェントを経歴・支援事例・動画から自分で選び、相談をリクエストできる転職サービスです。運営会社・許可番号・求職者の費用・対応領域・相談までの流れを、公式サイト・利用規約・厚生労働省の登録情報で確認して整理しています（2026年11月27日確認）。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: TITLE,
    description:
      "エージェント指名型の転職サービスCARINAR（キャリナー）について、運営会社・許可番号・費用・対応領域を公式情報と厚生労働省の登録情報で整理しています。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/carinar/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "CARINAR（キャリナー）とはどのようなサービスですか？",
    a: "相談したい転職エージェントを、アプリ上で経歴・支援事例・本人の動画を見て自分で選び、相談をリクエストする転職サービスです。エージェント本人がリクエストを承諾すると、チャットで日程を調整してオンラインで相談します。公式サイトは、一般的な転職エージェントでは担当者を選べない点との違いとして「経歴・実績・動画を見て、あなたが指名する」と案内しています（2026年11月27日確認）。",
  },
  {
    q: "CARINARの利用に費用はかかりますか？",
    a: "求職者の費用はかかりません。公式サイトのよくある質問では「登録・利用は無料です。エージェントへの相談、メッセージのやり取りにも費用はかかりません」と案内しています。利用規約第5条でも、個人ユーザーは本サービスを無償で利用でき、運営会社は採用企業やヘッドハンター（法人等ユーザー）から成功報酬を受け取ると定めています（2026年11月27日確認）。",
  },
  {
    q: "CARINARはどの会社が運営していますか？",
    a: "ヤマトヒューマンキャピタル株式会社（東京都千代田区平河町2-5-3 MIDORI.so NAGATACHO、代表取締役 堀江 大介氏）が運営しています。同社は有料職業紹介事業の許可（許可番号13-ユ-309116）を受けており、厚生労働省「人材サービス総合サイト」では許可年月日が平成30年（2018年）1月1日と登録されています（2026年11月27日確認）。",
  },
  {
    q: "どのような領域のエージェントに相談できますか？",
    a: "公式サイトのよくある質問では、M&A・投資銀行・PEファンド・VC・戦略/総合コンサル・スタートアップ経営幹部・ハイクラスセールス・AI/テックなどの領域を得意とするエージェントがいると案内しています。どのエージェントが在籍しているかは、アプリで確認する仕組みです（2026年11月27日確認）。",
  },
  {
    q: "相談をリクエストすれば必ず相談できますか？",
    a: "必ずとは限りません。公式サイトの「相談までの流れ」には「エージェントの状況やタイミングにより、すべてのリクエストにお応えできない場合があります」と記載されています。複数のエージェントに同時にリクエストを送ることはできます。また、利用規約では、会員登録は運営会社の審査・承認をもって完了すると定めています（2026年11月27日確認）。",
  },
  {
    q: "今の勤務先に知られずに利用できますか？",
    a: "公式サイトでは、特定の企業を指定してプロフィールを表示させない機能があり、会員登録後に設定できると案内しています（2026年11月27日確認）。",
  },
  {
    q: "すぐに転職するつもりがなくても相談できますか？",
    a: "公式サイトのよくある質問では、中長期でキャリアを考えるための相談や、市場価値を知るための相談でも構わないと案内しています（2026年11月27日確認）。",
  },
  {
    q: "CARINARの求人数や登録者数は公開されていますか？",
    a: "2026年11月27日時点で、公式サイトに求人数・登録者数・在籍エージェント数の記載は見当たりません。当サイトでは、確認できない数値は掲載していません。客観的な指標として、運営会社が厚生労働省に登録している就職者数を本ページに掲載しています。",
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

const placements = [
  { year: "令和2年度", total: 62, muki: 62, leave: 1 },
  { year: "令和3年度", total: 71, muki: 71, leave: 1 },
  { year: "令和4年度", total: 83, muki: 83, leave: 2 },
  { year: "令和5年度", total: 145, muki: 145, leave: 6 },
  { year: "令和6年度", total: 248, muki: 248, leave: 14 },
  { year: "令和7年度", total: 478, muki: 478, leave: 42 },
];
const placementTotal = placements.reduce((s, p) => s + p.total, 0);

const MHLW_URL =
  "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB102030.do?screenId=GICB102030&action=detail&detkey_Detail=13-%E3%83%A6-309116%2C1+++++";
const OFFICIAL_URL = "https://carinar.com/";

export default function CarinarReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "CARINAR（キャリナー）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            CARINAR（キャリナー）とは？特徴・料金・対応領域を公式情報で確認【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年11月27日（公式サイト・利用規約・運営会社の会社概要・厚生労働省「人材サービス総合サイト」・App Storeを11月27日に確認）</p>
          <p className="text-text-secondary leading-relaxed">
            CARINAR（キャリナー）は、ヤマトヒューマンキャピタル株式会社が運営する転職サービスです。
            相談したい転職エージェントを、アプリ上で経歴・支援事例・本人の動画を見て自分で選び、相談をリクエストする仕組みです。
            本ページでは、運営会社・許可番号・求職者の費用・対応領域・相談までの流れを公式サイトと利用規約で確認し、厚生労働省に登録された運営会社の就職者数とあわせて整理しています。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">CARINARの概要</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>相談するエージェントを自分で選ぶ仕組みです</strong>。担当者が割り当てられる一般的な転職エージェントと異なり、経歴・支援事例・動画を見てリクエストを送ります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>M&amp;A・投資銀行・PEファンド・VC・コンサル・スタートアップ経営幹部などが対象領域です</strong>。公式のよくある質問に記載があります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>運営会社は厚生労働大臣の許可を受けた有料職業紹介事業者です</strong>。許可番号13-ユ-309116、許可年月日は平成30年（2018年）1月1日です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の費用はかかりません</strong>。利用規約第5条で、個人ユーザーは無償で利用できると定めています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求人数・登録者数は公式サイトで公表されていません</strong>。当サイトでは、確認できない数値は掲載していません。</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "相談の方式", value: "エージェント指名" },
            { label: "運営会社の許可年月日", value: "2018年1月" },
            { label: "相談の方法", value: "オンライン" },
            { label: "求職者の費用", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>CARINARの基本データ【2026年11月27日確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">CARINAR（キャリナー）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">ヤマトヒューマンキャピタル株式会社（Yamato Human Capital, Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役 堀江 大介</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">本社：〒102-0093 東京都千代田区平河町2-5-3 MIDORI.so NAGATACHO／福岡支社：福岡県福岡市博多区祇園町8-13 第一プリンスビル1F</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">資本金</th><td className="px-3 py-2 border-b">5,000万円</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">事業内容</th><td className="px-3 py-2 border-b">人材紹介業、転職エージェント業／ビジネス＆キャリア動画メディア「CARINAR」の運営</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-309116（許可年月日 平成30年1月1日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">取扱職種・地域</th><td className="px-3 py-2 border-b">全職種／国内（法令上の取扱範囲）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">公式が案内する対象領域</th><td className="px-3 py-2 border-b">M&amp;A／投資銀行／PEファンド／VC／戦略・総合コンサル／スタートアップ経営幹部／ハイクラスセールス／AI・テック など</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">相談の方法</th><td className="px-3 py-2 border-b">アプリでエージェントを選んでリクエスト → 承諾後にチャットで日程調整 → オンラインで相談</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求職者の費用</th><td className="px-3 py-2 border-b">無料（登録・相談・メッセージのやり取りを含む）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">アプリ</th><td className="px-3 py-2 border-b">iOS（App Store）／Android（Google Play）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数・登録者数</th><td className="px-3 py-2 border-b">公式サイトに記載なし</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">問い合わせ先</th><td className="px-3 py-2 border-b">03-6820-4702（代表）／contact@yamatohc.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">CARINAR公式サイト</a>・
          <a href="https://carinar.com/terms" className="underline">CARINAR利用規約</a>（2025年2月17日施行）・
          <a href="https://yamatohc.co.jp/company" className="underline">ヤマトヒューマンキャピタル株式会社「会社概要」</a>、
          許可年月日・取扱範囲は<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>。いずれも2026年11月27日確認。
        </p>

        <h2>CARINARの仕組み：一般的な転職エージェントとの違い</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式サイトでは、既存の転職サービスとの違いを次の3点で説明しています。当サイトが公式の記載を整理したものです。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">比べる項目</th>
                <th className="text-left px-3 py-2 border-b">一般的なサービス（公式の説明）</th>
                <th className="text-left px-3 py-2 border-b">CARINAR（公式の説明）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">担当者の決まり方</td><td className="px-3 py-2 border-b">転職エージェントに申し込むと、誰が担当になるかは選べない</td><td className="px-3 py-2 border-b">経歴・実績・動画を見て、求職者がエージェントを指名する</td></tr>
              <tr><td className="px-3 py-2 border-b">キャリア相談の中身</td><td className="px-3 py-2 border-b">一般論と求人票の説明で終わることがある</td><td className="px-3 py-2 border-b">志望する業界で働いていたエージェント本人に相談できる</td></tr>
              <tr><td className="px-3 py-2 border-b">スカウト</td><td className="px-3 py-2 border-b">スカウトサイトでは定型のスカウトが大量に届く</td><td className="px-3 py-2 border-b">経歴に合ったスカウトだけが届く</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-3">
          利用規約では、CARINARに登録する「ヘッドハンター」を「人材を紹介または求職者に企業を紹介することを業としている、本サービスに登録を行う法人もしくは個人」と定義しています。
          つまり、CARINARで相談する相手は運営会社の社員とは限らず、外部の人材紹介会社やヘッドハンターである場合があります。
          相談するエージェントが決まったら、そのエージェントの所属会社と有料職業紹介事業の許可番号を、厚生労働省「人材サービス総合サイト」で確認することをおすすめします。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">CARINAR公式サイト「WHY CARINAR」</a>・<a href="https://carinar.com/terms" className="underline">利用規約 第1条</a>（2026年11月27日確認）。
        </p>

        <h2>相談までの流れ</h2>
        <ol className="space-y-2 text-sm text-text-secondary list-decimal pl-5 mb-3">
          <li><strong>会員登録：</strong>利用規約では、登録情報をもとに運営会社が審査を行い、承認をもって利用登録が完了すると定めています。</li>
          <li><strong>アプリで相談したいエージェントを選ぶ：</strong>全エージェントの経歴・支援事例・動画を見て、リクエストを送ります。複数のエージェントに同時に送ることができます。</li>
          <li><strong>エージェント本人が承諾する：</strong>承諾後はチャットで直接やり取りし、日程を調整します。エージェントの状況やタイミングにより、すべてのリクエストに応じられない場合があると記載されています。</li>
          <li><strong>オンラインで相談する：</strong>費用はかかりません。転職の時期が決まっていない段階や、市場価値を知るための相談でも構わないと案内しています。</li>
        </ol>
        <p className="text-sm text-text-secondary mb-3">
          勤務先を指定してプロフィールを非表示にする機能があり、会員登録後に設定できます。
          エージェントからの承諾や返信は、アプリのプッシュ通知で届くと案内されています。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={OFFICIAL_URL} className="underline">CARINAR公式サイト「相談までの流れ」「よくある質問」</a>・<a href="https://carinar.com/terms" className="underline">利用規約 第3条</a>（2026年11月27日確認）。上記は公式の案内であり、当サイトがサービスを利用して確かめた内容ではありません。
        </p>

        <h2>公式サイトに掲載されているエージェントの例</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式トップページには、次の4名が「トップ転職エージェント」として紹介されています。経歴と得意領域は、いずれも公式サイトの紹介文にもとづきます。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">氏名</th>
                <th className="text-left px-3 py-2 border-b">公式サイトに掲載されている主な経歴</th>
                <th className="text-left px-3 py-2 border-b">得意領域（公式表記）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">森本 千賀子</td><td className="px-3 py-2 border-b">リクルートエージェント、リクルートエグゼクティブエージェントを経て、morich 代表取締役</td><td className="px-3 py-2 border-b">CxO・経営幹部／ファンド投資先社長</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">高野 秀敏</td><td className="px-3 py-2 border-b">インテリジェンス（現パーソルキャリア）、エージェントセブン創業を経て、キープレイヤーズ 代表取締役</td><td className="px-3 py-2 border-b">CxO・経営幹部／ファンド投資先社長／CTO・VPoE候補</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">佐藤 鉄平</td><td className="px-3 py-2 border-b">監査法人トーマツ、リクルートエグゼクティブエージェント、KPMGコンサルティングを経て、バッテリー・コンサルティング</td><td className="px-3 py-2 border-b">戦略コンサル／総合コンサル／投資銀行・M&amp;A</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">三原 卓也</td><td className="px-3 py-2 border-b">三井物産、ゴールドマン・サックス、ベイン・アンド・カンパニーを経て、ANDONE 代表取締役</td><td className="px-3 py-2 border-b">戦略コンサル／総合コンサル／PEファンド</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          掲載されている4名の所属先は、いずれも運営会社のヤマトヒューマンキャピタル株式会社とは別の会社です。
          この点からも、CARINARは運営会社の社員だけでなく、外部のエージェントに相談するための場であることが分かります。
          掲載内容は随時変わる可能性があるため、最新の在籍状況はアプリでご確認ください。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：<a href={OFFICIAL_URL} className="underline">CARINAR公式トップページ</a>（2026年11月27日確認）。</p>

        <h2 id="placements">運営会社の就職実績（厚生労働省の登録情報）</h2>
        <p className="text-sm text-text-secondary mb-4">
          有料職業紹介事業者は、就職者数と、無期雇用で就職した人のうち6か月以内に離職した人数を、厚生労働省「人材サービス総合サイト」に毎年登録しています。
          運営会社のヤマトヒューマンキャピタル株式会社（許可番号13-ユ-309116）の登録内容は次のとおりです。早期離職の割合は当サイトが算出しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">情報登録年度</th>
                <th className="text-right px-3 py-2 border-b">就職者数（4か月以上の有期・無期）</th>
                <th className="text-right px-3 py-2 border-b">うち無期雇用</th>
                <th className="text-right px-3 py-2 border-b">無期雇用のうち6か月以内の離職者</th>
                <th className="text-right px-3 py-2 border-b">離職者の割合（当サイト算出）</th>
              </tr>
            </thead>
            <tbody>
              {placements.map((p) => (
                <tr key={p.year}>
                  <td className="px-3 py-2 border-b">{p.year}</td>
                  <td className="text-right px-3 py-2 border-b">{p.total}人</td>
                  <td className="text-right px-3 py-2 border-b">{p.muki}人</td>
                  <td className="text-right px-3 py-2 border-b">{p.leave}人</td>
                  <td className="text-right px-3 py-2 border-b">{((p.leave / p.muki) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li><strong>就職者の推移：</strong>令和2年度の62人から令和7年度の478人へ増えており、6年度分の合計は{placementTotal}人です。いずれの年度も就職者全員が無期雇用として登録されています。</li>
          <li><strong>早期離職：</strong>令和7年度は42人（8.8%）で、令和4年度までの各年度1〜2人から、人数・割合ともに増えています。</li>
          <li><strong>数値の範囲について：</strong>この数値は運営会社全体の登録内容で、運営会社の転職エージェント事業による就職者を含みます。CARINAR経由の就職者だけを切り出した数値ではありません。また、外部のエージェントが紹介した就職者は、そのエージェントが所属する事業者の数値として登録されると考えられます。</li>
          <li><strong>登録上の所在地：</strong>東京都千代田区平河町2-5-3 MIDORI.so NAGATACHO 4Fで、公式サイトの会社概要と一致しています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」職業紹介事業詳細（ヤマトヒューマンキャピタル株式会社）</a>（令和8年11月1日現在の掲載情報を2026年11月27日に確認）。
          「情報登録年度」は同サイトの表記どおりです。離職者の割合は「無期雇用のうち6か月以内の離職者÷うち無期雇用」で当サイトが算出した値です。
        </p>

        <h2>アプリストアの評価</h2>
        <p className="text-sm text-text-secondary mb-2">
          App Storeのアプリ「転職 キャリナー | エージェント指名 スカウト転職アプリ」（提供元 YAMATO HUMAN CAPITAL, Inc.）の評価は、2026年11月27日時点で平均4.6（5段階）・評価数9件です。
          評価数が少ないため、利用者全体の傾向を示すものとしては参考程度にとどめることをおすすめします。投稿の内容は当サイトでは確認していないため、掲載していません。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://apps.apple.com/jp/app/id6760984116" className="underline">App Store「転職 キャリナー」</a>（Appleの公開API〈iTunes Search API〉で2026年11月27日に取得。平均評価は小数第2位を四捨五入）。
        </p>

        <h2>CARINARが向いている人・他サービスと併用したい人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>担当者の経歴や得意領域を確かめてから相談したい人</li>
              <li>投資銀行・PEファンド・VC・M&amp;A・戦略コンサルを志望し、その業界の出身者に相談したい人</li>
              <li>スタートアップの経営幹部・CxO候補のポジションを検討している人</li>
              <li>複数のエージェントに相談して比べたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスとの併用を検討したい人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>求人を自分で検索して数多く比べたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>や<Link href="/review/recruit-direct-scout/" className="text-teal underline">リクルートダイレクトスカウト</Link>が候補です</li>
              <li>コンサル・M&amp;A・FASの求人を1社のエージェントでまとめて相談したい人 →<Link href="/review/remedy/" className="text-teal underline">リメディ</Link>や<Link href="/review/newma/" className="text-teal underline">NewMA</Link>も比較対象になります</li>
              <li>コンサル未経験で業界研究から始めたい人 →<Link href="/review/myvision/" className="text-teal underline">MyVision</Link>が候補です</li>
              <li>外資系・管理職の求人も幅広く見たい人 →<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link>が候補です</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          業界・職種別の選び方は<Link href="/industry/consulting/" className="text-teal underline">コンサル業界の転職エージェント</Link>と<Link href="/type/high-class/" className="text-teal underline">ハイクラス向け転職エージェント</Link>でも解説しています。
        </p>

        <h2>CARINAR よくある質問</h2>
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
          CARINAR（キャリナー）は、相談する転職エージェントを経歴・支援事例・動画から自分で選べる転職サービスです。
          M&amp;A・投資銀行・PEファンド・VC・コンサル・スタートアップ経営幹部などの領域を対象としており、求職者の費用はかかりません。
          運営会社のヤマトヒューマンキャピタル株式会社は有料職業紹介事業の許可（13-ユ-309116）を受けています。
          求人数・登録者数は公表されていないため、希望する領域のエージェントが在籍しているかは、アプリでご確認ください。
        </p>
        <p className="text-sm text-text-secondary mb-8">
          公式サイト：<a href={OFFICIAL_URL} className="text-teal underline">CARINAR（carinar.com）</a>
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">CARINARを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/remedy/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リメディの詳細
            </Link>
            <Link href="/review/newma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              NewMA(ニューマ)の詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
            </Link>
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
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
