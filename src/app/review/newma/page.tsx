import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "NewMA(ニューマ)の評判は？コンサル・M&A特化の転職エージェントを徹底解説【2026年】",
  description:
    "NewMA(NewMA株式会社運営)はDX・戦略・AIコンサルやM&A仲介・FAS・PEファンドなどに特化した転職エージェント。業界経験者による書類・面接対策と内定後までのフォローが特徴。特徴・料金・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "NewMA(ニューマ)の評判は？コンサル・M&A特化の転職エージェントを徹底解説【2026年】",
    description:
      "コンサル・M&A領域特化の転職エージェント「NewMA」の特徴・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "NewMAの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "NewMAはどんな職種を扱っていますか？",
    a: "M&A仲介・FAS(財務アドバイザリー)・戦略コンサル・DXコンサル・AIコンサル・人事組織コンサル・経営企画・PEファンドなど、コンサルティングとM&A関連の領域を中心に扱っていると公式に案内されています。これらの領域以外を希望する場合は総合型エージェントの利用が向いています。",
  },
  {
    q: "コンサル未経験でも利用できますか？",
    a: "公式LPでは未経験者から経験者まで対応と案内されています。ただし紹介可能な求人は経歴・スキルによって変わるため、自分の経歴でどんなポジションが狙えるかは面談で確認してください。",
  },
  {
    q: "NewMAの強みは何ですか？",
    a: "公式サイトでは①業界・業務・各求人のリアルな情報提供(魅力だけでなく大変さも伝える)②スキルの活かし方を踏まえた書類・面接対策③内定前だけでなく内定後・入社後まで手厚いフォロー——の3点を強みとして掲げています。",
  },
  {
    q: "どこの会社が運営していますか？",
    a: "NewMA株式会社(大阪市北区中之島3-6-32 ダイビル本館16階)が運営しています。有料職業紹介事業許可番号は27-ユ-304092です(2026年8月16日に公式サイトで確認)。",
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

export default function NewmaReview() {
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
          { name: "NewMAの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            NewMA(ニューマ)の評判は？コンサル・M&amp;A特化の転職エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            NewMAは、NewMA株式会社が運営するコンサルティング・M&amp;A領域特化型の転職エージェントです。
            DX・戦略・AIコンサルタントに加え、M&amp;A仲介・FAS・経営企画・PEファンドといったハイエンド領域の求人を対象に、
            業界のリアルを踏まえた選考対策と内定後までのフォローを掲げています。
            この記事では、特徴・扱う職種・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル・M&amp;A領域に特化した転職エージェント</strong>。DX・戦略・AIコンサル、M&amp;A仲介、FAS、人事組織コンサル、経営企画、PEファンドなどを対象としています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>業界のリアルな情報提供を掲げる</strong>。求人の魅力だけでなく大変さ・企業ごとの特徴まで伝える方針を公式に打ち出しています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>内定後・入社後までのフォローを明言</strong>。条件交渉に加え、内定前だけで終わらない継続フォローを強みとしています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料</strong>。未経験者から経験者まで、キャリア相談から始められます。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="newma" heading="NewMA公式サイトで無料キャリア相談を予約する" note="コンサル・M&A領域のキャリア相談は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "コンサル・M&A" },
            { label: "対象", value: "未経験〜経験者" },
            { label: "料金", value: "無料" },
            { label: "フォロー", value: "入社後まで" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>NewMAの基本データ【2026年8月16日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">NewMA(コンサル・M&amp;A領域特化型の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">NewMA株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">大阪市北区中之島3-6-32 ダイビル本館16階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">林 健太郎</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">27-ユ-304092</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象領域</th><td className="px-3 py-2 border-b">DX・戦略・AIコンサル／M&amp;A仲介／FAS／人事組織コンサル／経営企画／PEファンド 等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／書類・面接対策／条件交渉／内定後・入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：NewMA公式サイト(newma.co.jp)および同社コンサル転職LP、2026年8月16日確認。支援実績数・決定率などの数値は公式サイトに記載がないため掲載していません。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>NewMAの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "業界知見に基づくリアルな情報提供",
              desc: "業界・業務・各求人の「リアル」を提供すると公式に掲げています。表面的な求人票の情報だけでなく、魅力や大変さ、企業ごとの特徴まで伝える方針です。",
            },
            {
              title: "スキルの活かし方を踏まえた書類・面接対策",
              desc: "求職者の経歴のどこがコンサル・M&A業界で評価されるかを踏まえた書類添削・面接対策を行うとしています。ケース面接など業界特有の選考にも対応する体制です。",
            },
            {
              title: "内定後・入社後まで続くフォロー",
              desc: "「交渉力に自信」を掲げ、条件交渉に加えて内定後・入社後の継続フォローを明言しています。ハイエンド領域の転職で重要な入社前後のギャップ対策になります。",
            },
            {
              title: "未経験からのコンサル転職にも対応",
              desc: "対象は未経験者から経験者まで。事業会社からコンサル・M&A業界への転身を考える人もキャリア相談から始められます。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>NewMAが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>DX・戦略・AIコンサルタントへの転職を考えている人</li>
              <li>M&amp;A仲介・FAS・PEファンドなど金融ハイエンド領域を狙う人</li>
              <li>未経験からコンサル業界に挑戦したい人</li>
              <li>業界の実情(激務度・企業ごとの違い)まで踏み込んで聞きたい人</li>
              <li>内定後の条件交渉や入社後フォローまで任せたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>コンサル・M&amp;A以外の職種も幅広く見たい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>スカウト型でハイクラス求人を待ちたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が候補です</li>
              <li>20〜30代の成長企業志向でコンサル以外も比較したい人 →<Link href="/review/assign/" className="text-teal underline">ASSIGN（アサイン）</Link>も選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          NewMAはコンサル・M&amp;A領域に対象を絞ったサービスです。転職エージェントは<strong>2〜3社の併用が一般的</strong>なので、
          この領域はNewMA、他の選択肢は総合型・スカウト型で確認する使い分けが現実的です。
        </p>

        <h2>NewMA よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：コンサル・M&amp;A転職の専門相談先として候補に</h2>
        <p>
          NewMAは、コンサルティング・M&amp;A領域に特化した転職エージェントです。
          業界のリアルな情報提供・選考対策・入社後まで続くフォローを掲げ、未経験者から経験者まで無料で利用できます。
          コンサルやM&amp;A業界への転職を具体的に考え始めた人は、
          <FelmatTextLink slug="newma" text="NewMAの無料キャリア相談" />(PR)から始めてみるのが良いでしょう。
        </p>

        <FelmatCta slug="newma" heading="NewMA公式サイトで無料キャリア相談を予約する" note="コンサル・M&A領域のキャリア相談は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">NewMAを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/assign/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ASSIGN（アサイン）の詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
            </Link>
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
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
