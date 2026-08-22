import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "恵比寿不動産の求人・採用は？完全反響営業の不動産転職を徹底解説【2026年】",
  description:
    "恵比寿不動産（株式会社ライフアドバンス）の採用・求人情報を公式採用ページの一次情報で解説。都心8区特化の完全反響営業（飛び込みなし）、残業月20時間以内、売買は売上の20%前後を賞与・インセンティブ還元と公式記載。履歴書不要のカジュアル面談から始められます。",
  alternates: { canonical: "/company/ebisu-fudousan/" },
  openGraph: {
    title: "恵比寿不動産の求人・採用は？完全反響営業の不動産転職を徹底解説【2026年】",
    description: "恵比寿不動産の採用・求人を公式採用ページベースで解説。完全反響営業・履歴書不要のカジュアル面談。",
  },
};

const faqData = [
  {
    q: "恵比寿不動産の営業は飛び込み営業がありますか？",
    a: "公式採用ページには「飛び込み営業や、お客様に迷惑がかかる様な無理な営業は一切いたしません」と明記されています（2026年8月22日確認）。自社サイト（月120万PV・40万人と公式記載）やInstagram等からの問い合わせに対応する完全反響営業で、賃貸部署は1人月60件以上、売買部署は1人月20件以上の問い合わせがあると記載されています。",
  },
  {
    q: "恵比寿不動産の給与・年収はどのくらいですか？",
    a: "公式採用ページの記載（2026年8月22日確認）によると、売買仲介は物件単価平均1億円で、売上の20%前後を賞与とインセンティブの合計として還元し、多い人だと年収2,000万円以上。賃貸仲介は平均年収600万円で、1年目から月70万円以上を稼ぐ社員もいるとされています。管理部門の提案営業は月給30万円スタート＋成約インセンティブです。いずれも公式採用ページ掲載値であり、個人の成果により変動します。",
  },
  {
    q: "不動産業界未経験でも応募できますか？",
    a: "公式採用ページでは、動画教育ツールやレベル別研修・先輩とのロープレ・マンツーマンのサポート体制を整えており、「研修でほっとかれる、とりあえずやってみな等は行いません」と記載されています（2026年8月22日確認）。研修体制を前提にした採用設計です。応募資格の詳細は募集要項・カジュアル面談でご確認ください。",
  },
  {
    q: "選考には履歴書が必要ですか？",
    a: "公式採用ページには「履歴書・職務経歴書不要 カジュアル面談を申し込む」と記載されており（2026年8月22日確認）、書類を用意せずカジュアル面談から始められる選考入口が用意されています。",
  },
  {
    q: "恵比寿不動産の会社概要を教えてください。",
    a: "運営会社は株式会社ライフアドバンス（屋号：恵比寿不動産）。代表者は檜垣知宏氏、設立2014年8月29日、資本金800万円、所在地は東京都渋谷区東3-25-11 TOKYU REIT恵比寿ビル4階・7階です（公式会社概要・2026年8月22日確認）。都心8区の賃貸・売買仲介を中心に、リフォームや投資物件も扱っています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "恵比寿不動産の求人・採用は？完全反響営業の不動産転職【公式採用ページ準拠】",
  dateModified: "2026-08-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/ebisu-fudousan/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function EbisuFudousanCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "恵比寿不動産" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            恵比寿不動産の求人・採用は？完全反響営業の不動産転職を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            恵比寿不動産（運営：株式会社ライフアドバンス）は、恵比寿を拠点に都心8区の賃貸・売買仲介を手がける不動産会社です。
            不動産営業といえば「飛び込み・テレアポ・激務」のイメージがありますが、同社は自社集客による完全反響営業と
            残業月20時間以内を公式採用ページで掲げており、営業スタイルが従来型と大きく異なります。
            本記事では、公式採用ページ・会社概要で確認できる一次情報をもとに、求人内容・給与体系・選考の入口を整理します。
          </p>
        </div>

        <h2>結論：恵比寿不動産の採用のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>完全反響営業で飛び込みなし</strong>。自社サイト（月120万PV・40万人と公式記載）等からの問い合わせ対応が中心で、賃貸は1人月60件以上・売買は月20件以上の反響と公式に記載されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>成果報酬の還元が明確</strong>。売買仲介は物件単価平均1億円・売上の20%前後を賞与＋インセンティブとして還元（年収2,000万円超の社員も）、賃貸は平均年収600万円と公式採用ページに掲載されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>残業月20時間以内・事務作業なし</strong>の環境と研修体制（動画教育・ロープレ・マンツーマン指導）を公式が明記。未経験からの不動産営業挑戦を前提にした設計です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>履歴書・職務経歴書不要のカジュアル面談</strong>から始められます。転職を決めていない情報収集段階でも話を聞きやすい入口です。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="ebisu-fudousan" heading="恵比寿不動産のカジュアル面談を申し込む" note="履歴書・職務経歴書不要と公式採用ページに記載されています。" />

        <h2>恵比寿不動産の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">会社名</th><td className="px-3 py-2 border-b">株式会社ライフアドバンス（屋号：恵比寿不動産）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">檜垣 知宏</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2014年8月29日（資本金800万円）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都渋谷区東3-25-11 TOKYU REIT恵比寿ビル4階・7階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">事業内容</th><td className="px-3 py-2 border-b">都心8区（千代田・中央・港・新宿・渋谷・世田谷・品川・目黒）中心の賃貸仲介・売買仲介・リフォーム・投資物件</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">営業スタイル</th><td className="px-3 py-2 border-b">完全反響営業（自社サイト・SNS集客／飛び込み営業なしと公式明記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">働き方</th><td className="px-3 py-2 border-b">残業月20時間以内（賃貸）・物件打ち込み等の事務作業なしと公式採用ページに記載</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">選考入口</th><td className="px-3 py-2 border-b">履歴書・職務経歴書不要のカジュアル面談</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：恵比寿不動産公式採用ページ（ebisu-fudousan.com/recruit/）・会社概要（同/company/）、2026年8月22日確認。
          「物件数No.1」等の表記は日本マーケティングリサーチ機構による2024年1月期の市場調査（都心8区対象）にもとづく公式サイト記載です。
          給与・年収はすべて公式採用ページ掲載値で、個人の成果・職種により変動します。当サイトでは口コミ・数値の創作は行っていません。
        </p>

        <h2>募集職種と給与体系（公式採用ページより）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "売買仲介営業（富裕層向け）",
              desc: "都心の物件単価平均1億円の売買仲介。売上の20%前後を賞与とインセンティブの合計として還元する仕組みで、多い人だと年収2,000万円以上と公式記載。経営者・医師などハイクラス顧客が中心で、マーケティング部門の集客による反響営業です。",
            },
            {
              title: "賃貸仲介営業",
              desc: "家賃相場20万円超の都心エリアが中心で成約単価が高く、平均年収600万円・1年目から月70万円以上を稼ぐ社員もいると公式記載。1人月60件以上の反響があり、集客はプロに任せて接客に集中できる体制です。",
            },
            {
              title: "管理物件の提案営業",
              desc: "オーナーへの提案営業・電話対応を担う100%反響営業。月給30万円スタート＋成約ごとのインセンティブで、残業は月15時間程度と公式記載。高収入よりワークライフバランス重視の設計です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>未経験でも大丈夫？研修体制</h2>
        <p className="mb-4">
          公式採用ページによると、動画教育ツールの導入、レベル別研修、状況設定ランダムのロープレ、先輩への同行、
          専属の先輩によるマンツーマン指導が用意されており、「本番に近い状態のロープレにより多くの先輩が1ヶ月以内に成約」と記載されています。
          不動産営業が初めての人でも、研修とサポートを前提にした受け入れ体制です。
          未経験からの転職全般の進め方は<Link href="/type/inexperienced/" className="text-teal underline">未経験向け転職ガイド</Link>も参考にしてください。
        </p>

        <h2>向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>営業成果を給与に直結させたい人（売買のインセンティブ設計）</li>
              <li>飛び込み・テレアポなしの反響営業で不動産業界に挑戦したい人</li>
              <li>残業を抑えて接客に集中したい人</li>
              <li>東京都心で働きたい人（勤務地は恵比寿）</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他の選択肢が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>不動産以外も含めて比較検討したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>等の総合型エージェントで求人の幅を確保</li>
              <li>固定給の安定性を最優先する人 →インセンティブ比重の高い給与設計のため、条件はカジュアル面談で要確認</li>
              <li>東京以外での勤務を希望する人</li>
            </ul>
          </div>
        </div>

        <h2>恵比寿不動産の採用 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：反響営業×都心特化の不動産転職</h2>
        <p>
          恵比寿不動産（株式会社ライフアドバンス）は、都心8区特化の集客力を土台にした完全反響営業と、
          成果の還元が明確な給与設計を公式に掲げる不動産会社です。
          興味がある場合は、履歴書不要のカジュアル面談で職場の雰囲気や条件の詳細を確認するところから始められます。
          企業への直接応募と並行して、<Link href="/knowledge/multiple/" className="text-teal underline">エージェントの併用</Link>で選択肢を広げておくのもおすすめです。
        </p>

        <FelmatCta slug="ebisu-fudousan" heading="恵比寿不動産のカジュアル面談を申し込む" note="履歴書・職務経歴書不要と公式採用ページに記載されています。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/area/tokyo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              東京の転職エージェント
            </Link>
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向け転職ガイド
            </Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              企業別転職ガイド一覧
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
