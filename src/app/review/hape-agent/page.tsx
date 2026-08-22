import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "hape Agent(エイプエージェント)の評判は？営業職特化の転職エージェントを解説【2026年】",
  description: "hape Agent(エイプエージェント)は株式会社hapeが運営する営業職特化型の転職エージェント。顧客満足度98%(公式表記)を掲げ、営業職特有のキャリアの悩みに専門対応。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/hape-agent/" },
};

const faqData = [
  {
    "q": "hape Agentの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "営業未経験でも利用できますか？",
    "a": "hape Agentは営業職特化のエージェントです。未経験から営業職を目指す場合の紹介可否は、申し込み時の面談でご確認ください。"
  },
  {
    "q": "どんな業界の営業求人がありますか？",
    "a": "公式サイトには営業の業界・職種・働き方に関するナレッジが幅広く用意されています。具体的な求人の業界構成は面談時に確認するのが確実です。"
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
          { name: "hape Agentの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            hape Agent(エイプエージェント)の評判は？営業職特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">hape Agent(エイプエージェント)は、株式会社hapeが運営する営業職特化型の転職エージェントです。「業種による営業の違いがわからない」「自分の営業職としての強みがわからない」といった営業特有の悩みへの専門対応を掲げ、顧客満足度98%と公式に表記しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>営業職に特化した転職エージェント</strong>。業種・職種・働き方など営業のキャリアを専門に扱います。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>顧客満足度98%</strong>(公式サイト表記・2026年8月22日確認)。初回サポートの手厚さを公式に強調しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>履歴書・職務経歴書テンプレートや営業転職ナレッジ</strong>を公式サイトで公開。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>hape Agentの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">hape Agent(エイプエージェント・営業職特化型人材紹介)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社hape</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">営業職の転職(業界・職種・働き方・キャリアプラン)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">顧客満足度</th><td className="px-3 py-2 border-b">98%(公式サイト表記・注記条件は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">コンテンツ</th><td className="px-3 py-2 border-b">営業転職成功ナレッジ/転職者インタビュー/キャリアコンサルタント紹介/履歴書・職務経歴書テンプレート/転職相談会・セミナー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">agent.hape.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：hape Agent公式サイト(agent.hape.co.jp)、2026年8月22日確認。顧客満足度は公式サイト掲載値(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>hape Agentの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">営業職特有の悩みへの専門対応</h3><p className="text-sm text-text-secondary leading-relaxed">「業種による営業の違いがわからない」「異業種への転職がしたいがどうすればいいかわからない」など、営業職ならではの悩みを起点にした支援設計を公式に掲げています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">営業キャリアの言語化支援</h3><p className="text-sm text-text-secondary leading-relaxed">営業としての強みの言語化、キャリアプランの設計、自分に合った営業の働き方探しまで、営業軸でのキャリア相談に対応します。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">実務的な転職ナレッジの公開</h3><p className="text-sm text-text-secondary leading-relaxed">営業職向けの履歴書・職務経歴書テンプレートや転職成功ナレッジを公式サイトで公開しており、登録前から活用できます。</p></div>
        </div>

        <h2>hape Agentが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>営業職としてキャリアアップ・年収アップしたい人</li>
              <li>業界を変えて営業を続けたい人(異業種×営業)</li>
              <li>営業の強みをうまく言語化できず選考で苦戦している人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>営業以外の職種への転職 →総合型エージェントへ</li>
              <li>20代で職種未定の人 →<a href="/type/second-new-grad/" className="text-teal underline">第二新卒向けエージェント</a>も検討を</li>
            </ul>
          </div>
        </div>

        <h2>hape Agent よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>hape Agentは、営業職のキャリアだけを専門に扱う特化型エージェントです。営業特有の悩みの言語化支援と実務的なナレッジ公開が特徴で、利用は無料。営業職の転職では総合型と1社ずつ併用し、提案される求人の質を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
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
