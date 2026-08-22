import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "歯科医師求人ナビ(PECORI)の評判は？歯科医師専門の転職エージェントを解説【2026年】",
  description: "歯科医師求人ナビは株式会社PECORIが運営する歯科医師専門の転職サイト・エージェント。歯科業界専門で7年の実績を掲げ、歯科衛生士向け「歯科転職ナビ」・介護向けサービスも展開。特徴を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/shika-agent/" },
};

const faqData = [
  {
    "q": "歯科医師求人ナビの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用側(歯科医院等)が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "歯科衛生士でも利用できますか？",
    "a": "歯科衛生士の方には、同じPECORIが運営する歯科衛生士専門の「歯科転職ナビ」が用意されています(2026年8月22日確認)。"
  },
  {
    "q": "どんな相談ができますか？",
    "a": "歯科医師専門のサービスとして、勤務条件・診療方針・症例など歯科特有の観点での職場探しに対応しています。詳細は電話面談等でご確認ください。"
  }
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "歯科医師求人ナビの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            歯科医師求人ナビ(PECORI)の評判は？歯科医師専門の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">歯科医師求人ナビは、株式会社PECORIが運営する歯科医師専門の転職サービスです。PECORIは「医療人材不足、待機児童問題」の解決を掲げる医療人材ベンチャーで、歯科衛生士専門の「歯科転職ナビ」、介護専門の「介護求人pecori」も展開しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>歯科医師専門の転職サービス</strong>。急成長している歯科医師専門の転職サイトと公式に紹介されています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>歯科業界で7年の運営実績</strong>(A8プログラム上の紹介文・当サイト確認)。歯科衛生士向け・介護向けの姉妹サービスも展開しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>Webや人工知能などの技術を積極活用</strong>する医療人材ベンチャーの運営で、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>歯科医師求人ナビ(PECORI)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">歯科医師求人ナビ(歯科医師専門の転職サイト・エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社PECORI</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">歯科医師の転職・求人</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">姉妹サービス</th><td className="px-3 py-2 border-b">歯科転職ナビ(歯科衛生士専門)/介護求人pecori(介護専門)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営方針</th><td className="px-3 py-2 border-b">医療福祉業界特化の人材紹介・Web/AI技術の積極活用(公式サイト記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">pecori.co.jp(会社)ほか各サービスサイト</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：株式会社PECORI公式サイト(pecori.co.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>歯科医師求人ナビ(PECORI)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">歯科医師に絞った専門マッチング</h3><p className="text-sm text-text-secondary leading-relaxed">歯科医師という専門職に対象を絞った転職支援で、医院の診療方針・症例・待遇など歯科特有の条件を前提に相談できます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">歯科業界の人材サービス群</h3><p className="text-sm text-text-secondary leading-relaxed">歯科衛生士専門の「歯科転職ナビ」は業界トップクラスの集客力と公式に紹介されており、歯科業界全体の採用動向に接点を持つ運営体制です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">医療人材ベンチャーの技術活用</h3><p className="text-sm text-text-secondary leading-relaxed">WebやAI技術を積極活用する方針を公式に掲げており、効率的な求人マッチングを志向しています。</p></div>
        </div>

        <h2>歯科医師求人ナビ(PECORI)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>勤務医としてより良い条件の医院に移りたい歯科医師</li>
              <li>開業前に経験を積む医院を探している歯科医師</li>
              <li>診療方針・症例の合う職場を専門的に探したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>歯科衛生士の人 →同社の「歯科転職ナビ」へ</li>
              <li>医科・他の医療職 →<a href="/review/nishima-pharma/" className="text-teal underline">にしまファーマ</a>等の医療系サービスへ</li>
            </ul>
          </div>
        </div>

        <h2>歯科医師求人ナビ(PECORI) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>歯科医師求人ナビは、歯科業界の人材サービスを複数展開するPECORIによる歯科医師専門の転職サービスです。専門職特化のマッチングが特徴で、利用は無料。歯科医師の転職は求人の地域偏在が大きいため、希望エリアの求人量を最初の相談で確認するのがポイントです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/nishima-pharma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              にしまファーマの詳細
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
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
