import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const TITLE = "リメディはどんな転職エージェント？M&A・コンサル・FASのハイクラス転職を厚労省データで解説【2026年11月】";

export const metadata: Metadata = {
  alternates: { canonical: "/review/remedy/" },
  title: TITLE,
  description:
    "リメディ株式会社が運営するハイクラス転職エージェント「リメディ」の運営会社・有料職業紹介事業の許可番号・扱う職種・公開求人数・求職者の費用を、公式サイトと厚生労働省「人材サービス総合サイト」で確認して整理しています。就職者数と早期離職者数の推移も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: TITLE,
    description:
      "リメディ株式会社のハイクラス転職エージェントについて、運営会社・許可番号・求人数・就職者数を公式情報と厚生労働省の登録情報で整理しています。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  dateModified: "2026-11-25",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/remedy/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "リメディの利用に費用はかかりますか？",
    a: "求職者の費用はかかりません。リメディ株式会社の「取扱職種の範囲等の明示」には「求職者から徴収する手数料はありません」と記載されており、トップページでも転職支援を「完全無料」と案内しています（2026年11月25日確認）。",
  },
  {
    q: "リメディはどの会社が運営していますか？",
    a: "リメディ株式会社（東京都千代田区神田神保町三丁目27番7号 Takebashi7 6階、代表取締役 大野 紘也氏）が運営しています。事業内容はヘッドハンティング事業とエージェント事業です。有料職業紹介事業の許可番号は13-ユ-312160で、厚生労働省「人材サービス総合サイト」では許可年月日が令和元年（2019年）8月1日と登録されています（2026年11月25日確認）。",
  },
  {
    q: "リメディはどんな職種・業界の転職を扱っていますか？",
    a: "法令上の取扱職種は全職種ですが、公式サイトでは戦略・総合コンサルティングファーム、M&A仲介会社、FAS、PEファンド・不動産ファンド、ベンチャー企業のCXO案件などを中心に支援していると案内しています。厚生労働省の登録情報でも、令和7年度の手数料実績が登録されている職種は「経営・金融・保険の専門的職業」と「営業の職業」の2つです。",
  },
  {
    q: "対象となる年代や年収の条件はありますか？",
    a: "2026年11月25日時点で、公式サイトに対象年代や年収の利用条件は明記されていません。トップページの調査表記では「ハイクラス＝想定年収1,000万円以上」と定義していますが、これは調査上の定義であり、利用条件ではありません。ご自身の経歴で紹介を受けられるかは、キャリア相談でご確認ください。",
  },
  {
    q: "リメディの求人数はどのくらいですか？",
    a: "公式トップページでは「2万件以上の最新ハイクラス・人気求人を保有」と案内しています。一方、公式の求人検索ページ（条件指定なし）の表示件数は8,570件でした（いずれも2026年11月25日確認）。公式コラムの運営会社欄には「保有求人数15,000件以上」との表記もあり、ページによって数値が異なります。保有求人数には非公開求人が含まれると考えられるため、検索で見られる件数とは一致しません。",
  },
  {
    q: "「No.1」の表記にはどのような根拠がありますか？",
    a: "公式トップページの「ハイクラス求人が豊富そうな転職エージェントNo.1」など3つのNo.1表記は、日本マーケティングリサーチ機構による2024年5月期のブランドのイメージ調査（調査期間2024年3月4日〜5月21日、Webアンケート、回答数146・96・138）にもとづくと記載されています。公式の注記のとおり、ブランドの利用有無は聴取しておらず、効果や優位性を保証するものではありません。",
  },
  {
    q: "苦情や個人情報の相談はどこにすればよいですか？",
    a: "「取扱職種の範囲等の明示」では、苦情の申出先をリメディ株式会社 管理部（info@remedy-tokyo.co.jp）としています。個人情報は同社の個人情報保護方針にもとづいて取り扱うと記載されています（2026年11月25日確認）。",
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
  { year: "令和2年度", total: 24, muki: 24, leave: 1 },
  { year: "令和3年度", total: 57, muki: 57, leave: 1 },
  { year: "令和4年度", total: 190, muki: 190, leave: 1 },
  { year: "令和5年度", total: 227, muki: 227, leave: 1 },
  { year: "令和6年度", total: 206, muki: 206, leave: 11 },
  { year: "令和7年度", total: 285, muki: 285, leave: 20 },
];
const placementTotal = placements.reduce((s, p) => s + p.total, 0);

const MHLW_URL =
  "https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB102030.do?screenId=GICB102030&action=detail&detkey_Detail=13-%E3%83%A6-312160%2C1+++++";

export default function RemedyReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "リメディ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            リメディはどんな転職エージェント？M&amp;A・コンサル・FASのハイクラス転職を厚労省データで解説【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年11月25日（公式サイトと厚生労働省「人材サービス総合サイト」を同日に確認）</p>
          <p className="text-text-secondary leading-relaxed">
            リメディは、東京都千代田区のリメディ株式会社が運営するハイクラス向けの転職エージェントです。
            コンサルティングファーム、M&amp;A仲介会社、FAS、PEファンド・不動産ファンドなどへの転職支援を中心としています。
            本ページでは、運営会社・許可番号・扱う職種・求人数・費用を公式サイトで確認し、厚生労働省に登録された就職者数とあわせて整理しています。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">リメディの概要</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>厚生労働大臣の許可を受けた有料職業紹介事業者です</strong>。許可番号13-ユ-312160、許可年月日は令和元年（2019年）8月1日です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル・M&amp;A・FAS・ファンド領域が中心です</strong>。法令上の取扱職種は全職種ですが、公式の案内はこれらの領域に重点を置いています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>厚生労働省に登録された令和7年度の就職者数は285人です</strong>。令和2年度の24人から増えています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の手数料はかかりません</strong>。公式の「取扱職種の範囲等の明示」に記載があります。</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "中心領域", value: "コンサル・M&A" },
            { label: "許可年月日", value: "2019年8月" },
            { label: "令和7年度 就職者", value: "285人" },
            { label: "求職者の費用", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>リメディの基本データ【2026年11月25日確認】</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">リメディ株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役CEO 大野 紘也（三菱UFJモルガン・スタンレー証券、TMAC（現 デロイト トーマツ ファイナンシャルアドバイザリー合同会社）を経て同社を創業。証券アナリスト）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">〒101-0051 東京都千代田区神田神保町三丁目27番7号 Takebashi7 6階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">事業内容</th><td className="px-3 py-2 border-b">ヘッドハンティング事業／エージェント事業</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-312160（許可年月日 令和元年8月1日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">取扱職種・地域</th><td className="px-3 py-2 border-b">全職種／国内・英国（法令上の取扱範囲）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">公式が案内する支援領域</th><td className="px-3 py-2 border-b">戦略・総合コンサルティングファーム／M&amp;A仲介会社／FAS／PEファンド・不動産ファンド／ベンチャー企業（CXO案件を含む）／日系大企業・メガベンチャー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象年代</th><td className="px-3 py-2 border-b">公式サイトに明記なし</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数（公式表記）</th><td className="px-3 py-2 border-b">保有求人「2万件以上」（トップページ）／求人検索ページの表示件数 8,570件（条件指定なし）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求職者の費用</th><td className="px-3 py-2 border-b">無料（求職者から徴収する手数料はなし）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">返戻金制度</th><td className="px-3 py-2 border-b">なし（求人企業向けの制度）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">苦情の申出先</th><td className="px-3 py-2 border-b">リメディ株式会社 管理部（info@remedy-tokyo.co.jp）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://remedy-tokyo.co.jp/company/" className="underline">リメディ株式会社「会社概要」</a>・
          <a href="https://remedy-tokyo.co.jp/management/" className="underline">「マネジメント一覧」</a>・
          <a href="https://remedy-tokyo.co.jp/job-placement-disclosure/" className="underline">「取扱職種の範囲等の明示」</a>・
          <a href="https://remedy-tokyo.co.jp/" className="underline">公式トップページ</a>・
          <a href="https://remedy-tokyo.co.jp/xross/jobs" className="underline">公式求人検索ページ</a>・
          <a href="https://remedy-tokyo.co.jp/media/503/" className="underline">公式コラム「リメディのご紹介」</a>、
          許可年月日は<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>。いずれも2026年11月25日確認。
        </p>

        <h2>求人数の表記について</h2>
        <p className="text-sm text-text-secondary mb-3">
          リメディの求人数は、公式サイト内でも掲載箇所によって数値が異なります。当サイトが2026年11月25日に確認した表記は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">掲載箇所</th>
                <th className="text-left px-3 py-2 border-b">表記</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">公式トップページ「リメディが選ばれる３つの理由」</td><td className="px-3 py-2 border-b">2万件以上の最新ハイクラス・人気求人を保有</td></tr>
              <tr><td className="px-3 py-2 border-b">公式求人検索ページ（条件指定なし）</td><td className="px-3 py-2 border-b">8,570件を表示</td></tr>
              <tr><td className="px-3 py-2 border-b">公式コラム（2026年8月3日更新）の運営会社欄</td><td className="px-3 py-2 border-b">保有求人数15,000件以上</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          求人検索ページには「無料登録で非公開求人を含む」求人を閲覧できるとの案内があるため、保有求人数と検索で表示される件数の差は、非公開求人の有無によるものと考えられます。
          保有求人数の表記が2種類ある理由は公式サイトに説明がないため、当サイトではトップページの「2万件以上」を公式表記として扱い、検索ページの件数を併記しています。
        </p>

        <h2>厚生労働省の登録情報で見るリメディの就職実績</h2>
        <p className="text-sm text-text-secondary mb-4">
          有料職業紹介事業者は、就職者数と、無期雇用で就職した人のうち6か月以内に離職した人数を、厚生労働省「人材サービス総合サイト」に毎年登録しています。
          リメディ株式会社（許可番号13-ユ-312160）の登録内容は次のとおりです。早期離職の割合は当サイトが算出しました。
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
          <li><strong>就職者の推移：</strong>令和2年度の24人から令和7年度の285人へ増えており、6年度分の合計は{placementTotal}人です。いずれの年度も就職者全員が無期雇用として登録されています。</li>
          <li><strong>早期離職：</strong>令和5年度までは各年度1人でしたが、令和6年度は11人（5.3%）、令和7年度は20人（7.0%）と、人数・割合ともに増えています。</li>
          <li><strong>手数料実績が登録された職種（令和7年度）：</strong>「経営・金融・保険の専門的職業」（手数料実績率53.8%）と「営業の職業」（同40.5%）の2職種です。コンサル・M&amp;A・金融領域を中心とする公式の案内と整合します。</li>
          <li><strong>登録上の所在地：</strong>東京都千代田区神田神保町三丁目27番7号 Takebashi7 6階で、公式サイトの会社概要と一致しています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href={MHLW_URL} rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」職業紹介事業詳細（リメディ株式会社）</a>（令和8年11月1日現在の掲載情報を2026年11月25日に確認）。
          「情報登録年度」は同サイトの表記どおりで、対象となる集計期間は同サイトでご確認ください。離職者の割合は「無期雇用のうち6か月以内の離職者÷うち無期雇用」で当サイトが算出した値です。
        </p>

        <h2>同じ領域の転職エージェントとの登録情報の比較</h2>
        <p className="text-sm text-text-secondary mb-3">
          当サイトで解説しているコンサル・M&amp;A領域の転職エージェント<Link href="/review/newma/" className="text-teal underline">NewMA</Link>と、厚生労働省の登録情報を並べると次のとおりです。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">項目</th>
                <th className="text-left px-3 py-2 border-b">リメディ</th>
                <th className="text-left px-3 py-2 border-b">NewMA</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">許可年月日</td><td className="px-3 py-2 border-b">2019年8月1日</td><td className="px-3 py-2 border-b">2023年8月1日</td></tr>
              <tr><td className="px-3 py-2 border-b">所在地</td><td className="px-3 py-2 border-b">東京都千代田区</td><td className="px-3 py-2 border-b">大阪市北区（登録上。公式サイトの表記は中央区）</td></tr>
              <tr><td className="px-3 py-2 border-b">令和7年度の就職者数</td><td className="px-3 py-2 border-b">285人</td><td className="px-3 py-2 border-b">14人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和7年度の6か月以内離職者</td><td className="px-3 py-2 border-b">20人</td><td className="px-3 py-2 border-b">0人</td></tr>
              <tr><td className="px-3 py-2 border-b">求人数の公式表記</td><td className="px-3 py-2 border-b">保有2万件以上（検索表示8,570件）</td><td className="px-3 py-2 border-b">公式サイトでは非公開</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          リメディは許可取得から6年以上が経過しており、就職者数の規模はNewMAの約20倍です。
          一方で、令和6年度以降は6か月以内の離職者も増えています。担当者によって得意領域が異なるため、面談で担当者の経歴や得意領域を確認することをおすすめします。
        </p>
        <p className="text-xs text-text-muted mb-8">
          出典：厚生労働省「人材サービス総合サイト」。リメディは2026年11月25日、NewMAは2026年10月26日に確認した掲載情報です。
        </p>

        <h2>公式サイトに掲載されている「No.1」表記と根拠</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式トップページには次の3つのNo.1表記があり、調査の主体・時期・方法が併記されています。
        </p>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-3">
          <li>ハイクラス求人が豊富そうな転職エージェントNo.1（ハイクラス＝想定年収1,000万円以上、回答数146）</li>
          <li>難関大学卒が利用したい転職エージェントNo.1（難関大学卒＝東大・京大・旧帝大・早慶上理卒、回答数96）</li>
          <li>年収1,000万円以上の方が利用したいと思う転職エージェントNo.1（回答数138）</li>
        </ul>
        <p className="text-sm text-text-secondary mb-2">
          根拠として、日本マーケティングリサーチ機構「2024年5月期 ブランドのイメージ調査」（調査期間2024年3月4日〜5月21日、Webアンケート）が示されています。
          公式の注記には「個人のブランドに対するイメージを元にアンケートを実施」「本ブランドの利用有無は聴取しておりません」「効果効能等や優位性を保証するものではございません」と記載されています。
          利用者の満足度や実績を比べた調査ではない点にご注意ください。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://remedy-tokyo.co.jp/" className="underline">リメディ公式トップページ</a>の調査注記（2026年11月25日確認）。</p>

        <h2>公式サイトで確認できる支援体制</h2>
        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 mb-3">
          <li><strong>ヘッドハンターの出身業界：</strong>トップページでは、外資系コンサルティングファーム（BCG、Kearney、Deloitte、KPMG等）、不動産ファンド（みずほ不動産投資顧問）、M&amp;A仲介会社などの出身者が支援すると案内しています。</li>
          <li><strong>企業への直接ヒアリング：</strong>ヘッドハンターが経営者に直接ヒアリングを行い、採用を強化しているポジションの詳細情報を提供するとしています。</li>
          <li><strong>選考対策：</strong>公式コラムでは、M&amp;A出身者による選考サポートや、ケース面接対策シートの提供を案内しています。</li>
          <li><strong>キャリア設計：</strong>目先の転職先だけでなく、将来の仕事や適性を含めてキャリア設計の相談を受けると記載されています。</li>
          <li><strong>領域別のチーム：</strong>マネジメント一覧では、取締役がコンサル・金融・M&amp;A・人材・IT・ヘルスケア等の領域特化チームを統括していると紹介されています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://remedy-tokyo.co.jp/" className="underline">公式トップページ</a>・<a href="https://remedy-tokyo.co.jp/management/" className="underline">マネジメント一覧</a>・<a href="https://remedy-tokyo.co.jp/media/503/" className="underline">公式コラム「リメディのご紹介」</a>（2026年11月25日確認）。上記は公式の案内であり、当サイトがサービスを利用して確かめた内容ではありません。
        </p>

        <h2>リメディが向いている人・他サービスと併用したい人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>戦略・総合コンサルティングファームへの転職を考えている人</li>
              <li>M&amp;A仲介会社・FAS・PEファンド・不動産ファンドを志望する人</li>
              <li>業界出身のヘッドハンターに企業ごとの選考情報を聞きたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスとの併用を検討したい人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>コンサル未経験で業界研究から始めたい人 →<Link href="/review/myvision/" className="text-teal underline">MyVision</Link>も比較対象になります</li>
              <li>スカウトを受けながら市場価値を確かめたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が候補です</li>
              <li>外資系・管理職のハイクラス求人も幅広く見たい人 →<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link>が候補です</li>
              <li>コンサル・金融以外の職種も比較したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などの総合型が向いています</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          業界・職種別の選び方は<Link href="/industry/consulting/" className="text-teal underline">コンサル業界の転職エージェント</Link>と<Link href="/type/high-class/" className="text-teal underline">ハイクラス向け転職エージェント</Link>でも解説しています。
        </p>

        <h2>リメディ よくある質問</h2>
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
          リメディは、コンサルティングファーム・M&amp;A仲介・FAS・ファンド領域を中心とするハイクラス向けの転職エージェントです。
          厚生労働大臣の許可（13-ユ-312160）を受けており、厚生労働省に登録された令和7年度の就職者数は285人です。求職者の費用はかかりません。
          求人数の表記は掲載箇所によって異なるため、希望する領域の求人がどの程度あるかは、キャリア相談で直接ご確認ください。
        </p>
        <p className="text-sm text-text-secondary mb-8">
          公式サイト：<a href="https://remedy-tokyo.co.jp/" className="text-teal underline">リメディ株式会社（remedy-tokyo.co.jp）</a>
          ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">リメディを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/newma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              NewMA(ニューマ)の詳細
            </Link>
            <Link href="/review/myvision/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              MyVisionの詳細
            </Link>
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
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
