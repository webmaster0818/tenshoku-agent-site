import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PIT(ピット)の評判は？若手エンジニア専門の転職アプリ・エージェントを解説【2026年】",
  description: "PIT(ピット)は株式会社ラストデータが運営する若手エンジニア専門の転職アプリ・転職エージェント。自社開発・上流工程の求人が豊富で、履歴書なしでカジュアル面談に進める設計が特徴。公式情報ベースで特徴・向いている人を解説します。利用は無料。",
  alternates: { canonical: "/review/pit-career/" },
};

const faqData = [
  {
    "q": "PITの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。人材紹介の標準的な仕組みとして、採用企業側が報酬を負担するモデルです。"
  },
  {
    "q": "PITとPITキャリアの違いは何ですか？",
    "a": "いずれも株式会社ラストデータが運営する若手エンジニア向け転職支援で、PITは転職アプリ、PITキャリアはエージェント型の転職支援として展開されています(2026年8月22日確認)。詳細は公式サイトでご確認ください。"
  },
  {
    "q": "経験が浅くても使えますか？",
    "a": "PITは「若手エンジニア専門」を掲げており、未経験からIT業界を目指す人向けの訴求も公式プログラム上で行われています。紹介可能な求人は経歴により変わるため、カジュアル面談でご確認ください。"
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
          { name: "PIT(ピット)の評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            PIT(ピット)の評判は？若手エンジニア専門の転職アプリ・エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">PIT(ピット)は、株式会社ラストデータが運営する若手エンジニア専門の転職サービスです。アプリを起点に、自社開発・上流工程の求人紹介やカジュアル面談への接続を行う設計で、エージェント型の転職支援(PITキャリア)も展開しています。この記事では公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>若手エンジニアに特化した転職アプリ・エージェント</strong>。自社開発/上流工程の求人が豊富と公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>履歴書・職務経歴書なしでカジュアル面談に進める</strong>設計が公式サイトで紹介されています。SESから自社開発へ移りたい層を意識した構成です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>App Storeレビュー4.8</strong>(公式サイト掲載値・2026年8月22日確認)。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>PIT(ピット)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">PIT(ピット)/PITキャリア(若手エンジニア専門の転職アプリ・転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ラストデータ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">若手ITエンジニアの転職(自社開発・上流工程の求人)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">書類なしでカジュアル面談へ進める/面談後のレポートで報酬がもらえる仕組みの紹介あり(公式サイト掲載の利用者の声より)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">pit-job.net</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：PIT公式サイト(pit-job.net)、2026年8月22日確認。App Storeレビュー値・実績表記は公式サイト掲載値(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>PIT(ピット)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">自社開発・上流工程の求人に強み</h3><p className="text-sm text-text-secondary leading-relaxed">SES・客先常駐からの脱出や、リモートワーク志向の若手エンジニア向けに、自社開発/上流工程の求人が豊富と公式に掲げています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">書類不要のカジュアル面談起点</h3><p className="text-sm text-text-secondary leading-relaxed">履歴書や職務経歴書がなくても面談に進める気軽さが公式サイトの利用者の声で紹介されています。転職意思が固まる前の情報収集にも使いやすい設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">アプリ完結型の転職体験</h3><p className="text-sm text-text-secondary leading-relaxed">求人チェックから面談調整までアプリで進められる、若手向けのモバイルファースト設計です。</p></div>
        </div>

        <h2>PIT(ピット)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>SES・客先常駐から自社開発企業へ移りたい若手エンジニア</li>
              <li>履歴書を作り込む前にカジュアル面談から始めたい人</li>
              <li>リモートワーク可の求人を探している20代エンジニア</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ミドル〜シニア層のエンジニア →総合型やハイクラス型が向きます</li>
              <li>IT以外の職種を検討している人 →<a href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</a>等の総合型へ</li>
            </ul>
          </div>
        </div>

        <h2>PIT(ピット) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>PIT(ピット)は、自社開発・上流工程の求人に強みを持つ若手エンジニア専門の転職アプリ・エージェントです。書類不要でカジュアル面談から始められる手軽さが特徴で、利用は無料。SESからのステップアップを考えている若手エンジニアは、IT特化の他エージェントと併用しつつ選択肢に加える価値があります。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/unison-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ユニゾンキャリア(IT特化)の詳細
            </Link>
            <Link href="/review/techclips/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              TechClipsエージェントの詳細
            </Link>
            <Link href="/type/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ITエンジニア向けエージェントまとめ
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
