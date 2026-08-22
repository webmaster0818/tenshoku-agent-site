import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Hiraku agentの評判は？ゲーム業界経験者向け転職エージェントを解説【2026年】",
  description: "Hiraku agent(ヒラクエージェント)はゲーム業界経験者向けの転職エージェント・人材サービス。ゲームクリエイターの転職支援・キャリア相談を専門に扱います。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/hiraku-agent/" },
};

const faqData = [
  {
    "q": "Hiraku agentの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "ゲーム業界未経験でも相談できますか？",
    "a": "公式サイトは「ゲーム業界経験者向け」を掲げています(2026年8月22日確認)。未経験の場合は、ゲーム業界の求人を広く扱うサービスと併用しながら可能性を確認するのが現実的です。"
  },
  {
    "q": "業務委託やフリーランスの相談もできますか？",
    "a": "Hiraku agentは転職支援に加えて人材派遣サービス・業務委託支援サービスを公式に展開しています。働き方を迷っている段階での相談も可能な体制です。"
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
          { name: "Hiraku agentの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            Hiraku agentの評判は？ゲーム業界経験者向け転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">Hiraku agentは、株式会社Hiraku agentが運営するゲーム業界経験者向けの転職エージェントです。転職支援に加えて人材派遣・業務委託支援も展開しており、「“真剣”にゲームへ向き合う人たちを支えたい」を掲げています。公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>ゲーム業界経験者に特化した転職エージェント</strong>。ゲームクリエイターの転職支援・キャリア相談を専門としています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>転職だけでなく派遣・業務委託の支援も展開</strong>。正社員転職以外の働き方も相談できる体制です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>最短15秒でオンライン相談を申し込める</strong>と公式に案内。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>Hiraku agentの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">Hiraku agent(ゲーム業界経験者向け転職エージェント・人材派遣・業務委託支援)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社Hiraku agent</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">ゲーム業界(クリエイター経験者の転職・キャリア相談)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">コンテンツ</th><td className="px-3 py-2 border-b">紹介企業一例・転職支援事例・公開求人情報・エージェント紹介を公式サイトで公開</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">hiraku-agent.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：Hiraku agent公式サイト(hiraku-agent.com)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>Hiraku agentの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ゲーム業界経験者専門の支援</h3><p className="text-sm text-text-secondary leading-relaxed">対象をゲーム業界経験者に絞り、転職支援事例や紹介企業一例を公式サイトで公開しています。経験者のキャリアの言語化に強い設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">正社員以外の選択肢も相談可能</h3><p className="text-sm text-text-secondary leading-relaxed">人材派遣・業務委託支援サービスも運営しており、フリーランス的な働き方も含めてキャリア相談ができます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">手軽な相談導線</h3><p className="text-sm text-text-secondary leading-relaxed">最短15秒でオンライン相談を申し込めると公式に案内されており、情報収集段階でも使いやすい設計です。</p></div>
        </div>

        <h2>Hiraku agentが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ゲーム業界での経験を活かしてステップアップしたいクリエイター</li>
              <li>正社員転職と業務委託・派遣を比較しながら考えたい人</li>
              <li>まずカジュアルにキャリア相談したいゲーム業界経験者</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ゲーム業界未経験の人 →未経験可求人の多い<a href="/review/famicari/" className="text-teal underline">ファミキャリ!</a>等で可能性を確認</li>
              <li>ゲーム以外の業界も見たい人 →総合型との併用を</li>
            </ul>
          </div>
        </div>

        <h2>Hiraku agent よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>Hiraku agentは、ゲーム業界経験者専門の転職エージェントです。転職・派遣・業務委託を横断してキャリア相談できるのが特徴で、利用は無料。ゲーム業界の転職では、求人ボリュームの大きいファミキャリ!等と併用して選択肢を確保するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/famicari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ファミキャリ!の詳細
            </Link>
            <Link href="/review/highfive/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              HIGH-FIVEの詳細
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
