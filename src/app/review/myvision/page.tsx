import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Cta from "@/components/A8Cta";

export const metadata: Metadata = {
  title: "MyVision(マイビジョン)の評判は？コンサル特化転職エージェントを徹底解説【2026年】",
  description:
    "MyVision(株式会社MyVision運営)はコンサル業界特化の転職エージェント。利用者の8割がコンサル業界未経験、厚労省人材サービス総合サイトに基づく支援実績数比較でコンサル特化No.1(公称・出典明記)。特徴・会社情報・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "MyVision(マイビジョン)の評判は？コンサル特化転職エージェントを徹底解説【2026年】",
    description: "コンサル特化転職エージェント「MyVision」の特徴・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "MyVisionの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "コンサル業界未経験でも利用できますか？",
    a: "利用できます。公式サイトでは「ご支援する求職者様の8割はコンサル業界未経験の方」と明記されており(2026年8月16日確認)、業界・個社の説明から選考対策までを未経験者前提で支援する体制が特徴です。事業会社からコンサルへの転身を考える人が主要な利用者層です。",
  },
  {
    q: "「コンサル転職No.1」とはどういう意味ですか？",
    a: "MyVisionが公式サイトで掲げている表記で、出典は「厚生労働省職業安定局 人材サービス総合サイト」の2025年度(2025年4月〜2026年3月)におけるコンサル特化転職エージェントの支援実績数比較と脚注に明記されています(2026年8月16日確認)。公的データに基づく比較ですが、対象の切り方による公称値のため、参考情報として捉えてください。",
  },
  {
    q: "MyVisionの選考対策はどんな内容ですか？",
    a: "コンサル転職で特有のケース面接・Webテストを含む選考対策のコンテンツ・支援を提供しています(公式サイトにケース面接対策・Webテスト対策等の情報ページあり)。詳細な支援内容は無料相談で確認してください。",
  },
  {
    q: "どこの会社が運営していますか？",
    a: "株式会社MyVision(東京都港区虎ノ門4-1-1 神谷町トラストタワー24階)が運営しています。有料職業紹介事業許可番号は13-ユ-314719、資本金1億円・従業員388名です(2026年8月16日に公式会社概要で確認)。",
  },
  {
    q: "「今は転職しない」相談でも大丈夫ですか？",
    a: "公式サイトでは「『今は転職しない』という選択肢も含めたキャリア提案」「中長期での支援を前提としたキャリアのパートナー」を掲げています(2026年8月16日確認)。情報収集段階の相談から始められる方針です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MyVision(マイビジョン)の評判は？コンサル特化転職エージェントを徹底解説",
  dateModified: "2026-08-16",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/myvision/" },
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

export default function MyvisionReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "MyVisionの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            MyVision(マイビジョン)の評判は？コンサル特化転職エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            MyVisionは、株式会社MyVisionが運営するコンサルティング業界特化の転職エージェントです。
            利用者の8割がコンサル業界未経験と公表しており、業界説明からケース面接対策までを未経験者前提で支援するのが特徴です。
            この記事では、特徴・会社情報・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル業界特化の転職エージェント</strong>。戦略・総合・IT・シンクタンクなどコンサルファームへの転職支援に対象を絞っています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用者の8割がコンサル業界未経験(公称)</strong>。業界・個社の説明から選考対策までを未経験前提で組み立てる支援体制です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル特化の支援実績数No.1(公称)</strong>。出典は厚生労働省 人材サービス総合サイトの2025年度実績数比較と公式に脚注明記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料</strong>。「今は転職しない」選択肢も含めた中立的なキャリア相談を掲げており、情報収集段階から相談できます。</span>
            </li>
          </ul>
        </div>

        <A8Cta slug="myvision" heading="MyVision公式サイトで無料転職相談を予約する" note="コンサル業界のキャリア相談は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "コンサル" },
            { label: "未経験比率（公称）", value: "8割" },
            { label: "従業員数", value: "388名" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>MyVisionの基本データ【2026年8月16日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">MyVision(コンサル業界特化の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社MyVision</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都港区虎ノ門4-1-1 神谷町トラストタワー24階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役社長 山口 翔平／代表取締役CEO 岡﨑 健斗</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">資本金・従業員</th><td className="px-3 py-2 border-b">資本金1億円・従業員388名</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-314719</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象領域</th><td className="px-3 py-2 border-b">戦略コンサル／総合コンサル／ITコンサル／シンクタンク等のコンサルティングファーム</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／業界・個社説明／求人紹介／選考対策(ケース面接・Webテスト対策等)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：MyVision公式サイト(my-vision.co.jp)の会社概要・トップページ、2026年8月16日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>MyVisionの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "利用者の8割がコンサル業界未経験",
              desc: "「ご支援する求職者様の8割はコンサル業界未経験の方」と公式に明記。わかりやすい業界・個社説明から始まり、選考対策までのノウハウが未経験者前提で蓄積されています。",
            },
            {
              title: "公的データ出典つきの支援実績数No.1(公称)",
              desc: "「コンサル転職No.1エージェント」の表記の出典として、厚生労働省職業安定局 人材サービス総合サイトの2025年度(2025年4月〜2026年3月)コンサル特化転職エージェント支援実績数比較が脚注明記されています。",
            },
            {
              title: "「今は転職しない」も含めた中立的キャリア相談",
              desc: "一人ひとりの経験・志向・事情に沿い、転職しない選択肢も含めて提案する方針を公式に掲げています。中長期での支援を前提としたパートナー型の支援です。",
            },
            {
              title: "ケース面接・Webテスト対策のコンテンツ",
              desc: "コンサル選考特有のケース面接対策・Webテスト対策の情報を公式サイトで公開しており、選考対策の専門性を打ち出しています。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>MyVisionが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>未経験からコンサル業界への転身を考えている人</li>
              <li>戦略・総合・IT・シンクタンクの違いから教えてほしい人</li>
              <li>ケース面接・Webテストの対策を専門的に受けたい人</li>
              <li>転職するか決めていない段階でキャリア相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>M&amp;A仲介・FAS・PEファンドなど金融系も見たい人 →<Link href="/review/newma/" className="text-teal underline">NewMA</Link>との併用が候補です</li>
              <li>コンサル以外の職種も幅広く見たい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>スカウトを待ちながら市場価値を測りたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは<strong>2〜3社の併用が一般的</strong>です。コンサル特化はMyVision(+NewMA)、視野を広げるときは総合型、という組み合わせが現実的です。
          コンサル業界全体の転職事情は<Link href="/industry/consulting/" className="text-teal underline">コンサル業界の転職ガイド</Link>もご覧ください。
        </p>

        <h2>MyVision よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：未経験からのコンサル転職の有力な相談先</h2>
        <p>
          MyVisionは、コンサル業界特化で「未経験8割」という利用者構成を公表する転職エージェントです。
          公的データ出典つきの支援実績数No.1(公称)を掲げ、ケース面接・Webテスト対策まで専門的に支援します。利用は無料なので、
          コンサル業界が気になり始めた段階の人は、まず無料の転職相談から始めてみるのが良いでしょう。
        </p>

        <A8Cta slug="myvision" heading="MyVision公式サイトで無料転職相談を予約する" note="コンサル業界のキャリア相談は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">MyVisionを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/newma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              NewMA（コンサル・M&A特化）の詳細
            </Link>
            <Link href="/review/assign/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ASSIGN（アサイン）の詳細
            </Link>
            <Link href="/industry/consulting/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              コンサル業界の転職ガイド
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
