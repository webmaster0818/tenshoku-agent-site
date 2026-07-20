import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "デジレカの評判は？マーケティング職特化の転職エージェントを徹底解説【2026年】",
  description:
    "デジレカ（株式会社マルニ運営）はマーケティング領域特化型の転職エージェント。スタッフ全員がデジタルマーケティング経験者で、面談後決定率40%（公称）、未経験者向け無料講座も提供。特徴・料金・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "デジレカの評判は？マーケティング職特化の転職エージェントを徹底解説【2026年】",
    description:
      "マーケティング領域特化型の転職エージェント「デジレカ」の特徴・料金・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "デジレカの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "デジレカで紹介してもらえる職種は何ですか？",
    a: "広告運用、デジタルマーケティング、デジタルプランナー、コンサルタント、ディレクターなど、マーケティング領域の職種が対象です。ポジションはチームリーダー〜マネージャー、事業部長、役員クラスまで幅広く扱っています。マーケティング職以外を希望する場合は、リクルートエージェントやdodaなどの総合型エージェントの利用が向いています。",
  },
  {
    q: "マーケティング業界未経験でも利用できますか？",
    a: "公式サイトでは、業界未経験者向けの無料講座を提供していることが公表されています。未経験からデジタルマーケティング職を目指したい人も、キャリア相談から始められます。ただし紹介可能な求人は経歴・スキルによって変わるため、詳細は面談時に確認してください。",
  },
  {
    q: "面談はオンラインでできますか？",
    a: "面談形式（オンライン／対面）の詳細は公式LPに明記されていません。最新の面談方法は、申し込み時に公式サイトで直接ご確認ください（要確認）。キャリア相談・求人紹介・模擬面接を含む選考対策・条件交渉支援・入社後フォローまで一貫して対応することは公表されています。",
  },
  {
    q: "「面談後決定率40%」とはどういう意味ですか？",
    a: "デジレカが公式に公表している数値（公称）で、面談を行った求職者のうち転職先決定に至った割合が40%であることを示すものです。集計期間・分母の定義などの詳細条件は公表されていないため、参考値として捉え、最新の実績は公式サイトでご確認ください。",
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

export default function DigirekaReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "デジレカの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            デジレカの評判は？マーケティング職特化の転職エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            デジレカは、株式会社マルニが運営するマーケティング領域特化型の転職エージェントです。
            広告運用・デジタルマーケティング・デジタルプランナー・コンサルタント・ディレクターといった職種を対象に、
            スタッフ全員がデジタルマーケティング経験者としてキャリア相談から入社後フォローまで伴走するのが特徴です。
            この記事では、デジレカの特徴・料金・サポート内容・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>マーケティング職に特化した転職エージェント</strong>。広告運用・デジタルマーケティング・プランナー・コンサルタント・ディレクターなど、対象をマーケティング領域に絞っています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>担当スタッフ全員がデジタルマーケティング経験者</strong>で、現在もマーケティング業務に従事していると公式に公表されています。実務を知る担当者に職種の話が通じやすいのが強みです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>業界未経験者向けの無料講座あり</strong>。転職ありきではないキャリア相談を重視しており、未経験からマーケティング職を目指す人の入口にもなります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料</strong>。キャリア相談・求人紹介・選考対策・条件交渉支援・入社後フォローまで費用はかかりません。</span>
            </li>
          </ul>
        </div>

        {/* CTA 1 */}
        <FelmatCta slug="digireka" heading="デジレカ公式サイトで無料キャリア相談を予約する" note="マーケティング職のキャリア相談は無料です。" />

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "マーケ職" },
            { label: "面談後決定率（公称）", value: "40%" },
            { label: "料金", value: "無料" },
            { label: "選考対策", value: "複数回無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>デジレカの基本データ【2026年7月20日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">デジレカ（マーケティング領域特化型の転職エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社マルニ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都世田谷区三宿1-14-8 三宿バドスクエア101号室</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">若林 一平</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">公式サイトに記載なし</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-312608</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象職種</th><td className="px-3 py-2 border-b">広告運用・デジタルマーケティング・デジタルプランナー・コンサルタント・ディレクター（チームリーダー〜マネージャー・事業部長・役員クラスまで）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／面接対策・模擬面接／条件交渉支援／入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：デジレカ公式LP（digireka.jp/lp002/）および運営会社ページ（digireka.jp/company/）、2026年7月20日確認。設立年月日は公式サイトに記載がないため掲載していません。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* 特徴解説 */}
        <h2>デジレカの特徴（公式公表ベース）</h2>
        <p>
          デジレカが公式サイトで公表している特徴は以下のとおりです。いずれも2026年7月20日時点の公式LPで確認できる内容で、
          当サイト独自の評価・推測は含めていません。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "スタッフ全員がデジタルマーケティング経験者",
              desc: "担当スタッフ全員がデジタルマーケティングの実務経験者で、現在もマーケティング業務に従事していると公表されています。広告運用の指標やマーケティング組織の実情など、職種特有の話が通じやすい体制です。",
            },
            {
              title: "転職ありきではないキャリア相談重視",
              desc: "「まず転職させる」のではなく、キャリア相談を起点にした支援を掲げています。現職にとどまる選択肢も含めて相談したい人でも利用しやすい方針です。",
            },
            {
              title: "面談後決定率40%（公称）",
              desc: "面談を実施した求職者のうち40%が転職先決定に至ったと公式に公表されています（公称値。集計条件の詳細は非公表のため参考値としてご覧ください）。",
            },
            {
              title: "クローズド案件の保有",
              desc: "一般公開されていないクローズド案件を保有していると公表されています。マーケティング職の非公開ポジションに出会える可能性があります。",
            },
            {
              title: "無料の選考対策（複数回）",
              desc: "面接対策・模擬面接を含む選考対策を複数回、無料で受けられます。マーケティング職の選考で問われやすいポイントを実務経験者の視点で対策できます。",
            },
            {
              title: "業界未経験者向けの無料講座",
              desc: "マーケティング業界が未経験の人向けに無料講座を提供しています。未経験からデジタルマーケティング職を目指すための入口として利用できます。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 向いている人・向いていない人 */}
        <h2>デジレカが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">デジレカが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>広告運用・デジタルマーケティング職で転職を考えている人</li>
              <li>マーケティング実務が分かる担当者に相談したい人</li>
              <li>マネージャー・事業部長・役員クラスのポジションを狙う人</li>
              <li>転職するか迷っている段階でキャリア相談から始めたい人</li>
              <li>未経験からマーケティング業界を目指したい人（無料講座あり）</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>マーケティング職以外への転職を考えている人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>幅広い業界・職種の求人を横断的に比較したい人 →総合型エージェントの併用がおすすめ</li>
              <li>20〜30代でマーケ以外も含めた成長企業・ハイエンド志向の人 →<Link href="/review/assign/" className="text-teal underline">ASSIGN（アサイン）</Link>も選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          デジレカはマーケティング領域に対象を絞ったサービスです。マーケティング職以外の求人を求める場合は、
          正直なところ総合型エージェントの方が適しています。転職エージェントは<strong>2〜3社の併用が一般的</strong>なので、
          マーケティング職はデジレカ、それ以外の選択肢は総合型で確認する使い分けが現実的です。
        </p>

        {/* FAQ */}
        <h2>デジレカ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* まとめ */}
        <h2>まとめ：マーケティング職の転職・キャリア相談ならまず候補に</h2>
        <p>
          デジレカは、株式会社マルニが運営するマーケティング領域特化型の転職エージェントです。
          スタッフ全員がデジタルマーケティング経験者で、転職ありきではないキャリア相談を重視し、
          面談後決定率40%（公称）・クローズド案件の保有・複数回の無料選考対策・未経験者向け無料講座を公表しています。
          求職者の利用は無料なので、マーケティング職でのキャリアを考えている人は、
          まず無料のキャリア相談から始めてみるのが良いでしょう。
          マーケティング職以外も視野に入れる場合は、総合型エージェントとの併用をおすすめします。
        </p>

        {/* CTA 2 */}
        <FelmatCta slug="digireka" heading="デジレカ公式サイトで無料キャリア相談を予約する" note="マーケティング職のキャリア相談は無料です。" />

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">デジレカを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/assign/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ASSIGN（アサイン）の詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
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
