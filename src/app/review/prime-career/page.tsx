import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライムキャリアの評判は？不動産・設備・建設専門の転職支援サイトを解説【2026年】",
  description: "プライムキャリア(Prime Career)はジャパニアス株式会社が運営する不動産・設備・建設専門の転職支援サイト。売買仲介からPM・AM・FM・ビルメンテナンスまで業界職種を網羅。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/prime-career/" },
};

const faqData = [
  {
    "q": "プライムキャリアの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。会員登録すると求人への応募や転職支援サービスを利用できます。"
  },
  {
    "q": "どんな職種の求人がありますか？",
    "a": "仕入・開発・売買/賃貸仲介・住宅営業・リフォーム営業・リーシング・マンション管理・PM・AM・FM・設備点検・ビル清掃/設備管理など、不動産・設備・建設領域の職種が細かく分類されています(2026年8月22日確認)。"
  },
  {
    "q": "宅建がなくても転職できますか？",
    "a": "職種により要件は異なります。資格要件・優遇条件は各求人・転職支援サービスの面談でご確認ください。"
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
          { name: "プライムキャリアの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            プライムキャリアの評判は？不動産・設備・建設専門の転職支援サイトを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">プライムキャリア(Prime Career)は、ジャパニアス株式会社が運営する不動産・設備・建設専門の転職支援サイトです。仕入・開発から売買/賃貸仲介、PM(プロパティマネジメント)・AM・FM、マンション設備点検・ビルメンテナンスまで、不動産・建物管理領域の職種を細かく網羅しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>不動産・設備・建設の3領域専門</strong>の転職支援サイト。業界職種を細分化して求人検索できます。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>PM・AM・FM・設備管理などの管理系職種まで網羅</strong>。営業系だけでない不動産キャリアを探せます。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>会員登録・転職支援サービスは無料</strong>です。</span></li>
          </ul>
        </div>

        <h2>プライムキャリアの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">プライムキャリア(Prime Career・不動産/設備/建設専門の転職支援サイト)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">ジャパニアス株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">仕入・買取/開発・企画/売買仲介・賃貸仲介/住宅営業/リフォーム営業/リーシング/マンション管理/PM(賃貸・オフィス・商業施設)/AM/FM/設備点検・修繕/ビル清掃・設備管理等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">機能</th><td className="px-3 py-2 border-b">求人検索・気になるリスト・転職支援サービス(エージェント型)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">prime-career.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：プライムキャリア公式サイト(prime-career.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>プライムキャリアの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">不動産職種の細分化された検索軸</h3><p className="text-sm text-text-secondary leading-relaxed">売買仲介・賃貸仲介から、PM(賃貸/オフィスビル/商業施設)・AM・FMまで、不動産・建物管理の職種を細かく分類しており、専門キャリアの求人を探しやすい構成です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">営業以外の不動産キャリアに強い</h3><p className="text-sm text-text-secondary leading-relaxed">設備点検・大規模修繕コンサル・ビルメンテナンスなど、営業系以外の技術・管理系職種もカバーしているのが総合型との違いです。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">サイト検索とエージェント支援の併用</h3><p className="text-sm text-text-secondary leading-relaxed">自分での求人検索と転職支援サービス(エージェント型)を併用できる構成です。</p></div>
        </div>

        <h2>プライムキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>不動産業界内でキャリアアップ転職したい人</li>
              <li>PM・AM・FMなど管理系専門職を目指す人</li>
              <li>設備管理・ビルメンテナンス系の転職を考えている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>未経験で不動産営業に挑戦したい人 →<a href="/company/ebisu-fudousan/" className="text-teal underline">恵比寿不動産</a>の採用など直接応募も選択肢</li>
              <li>建設技術者(施工管理等)中心の人 →<a href="/review/rsg-fudosan/" className="text-teal underline">RSG</a>も比較を</li>
            </ul>
          </div>
        </div>

        <h2>プライムキャリア よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>プライムキャリアは、不動産・設備・建設領域の職種を細かく網羅した業界特化の転職支援サイトです。管理系・技術系職種までカバーする検索性が特徴で、利用は無料。同じ業界特化のRSG等と併用し、求人の重なりと違いを比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/rsg-fudosan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              RSG(建設・不動産)の詳細
            </Link>
            <Link href="/company/ebisu-fudousan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              恵比寿不動産の採用解説
            </Link>
            <Link href="/area/tokyo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              東京の転職エージェントまとめ
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
