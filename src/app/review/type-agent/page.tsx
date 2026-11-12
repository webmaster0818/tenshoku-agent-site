import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AgentHero from "@/components/AgentHero";
import AgentClients from "@/components/AgentClients";

export const metadata: Metadata = {
  title: "type転職エージェントの評判は？老舗キャリアデザインセンターの総合型エージェントを解説【2026年】",
  description: "type転職エージェントは、東証プライム上場の株式会社キャリアデザインセンターが運営する総合型転職エージェントです。20代・IT・ハイキャリア・営業の4領域を軸に、首都圏の転職支援に強みがあります。特徴・向いている人を公式情報ベースで解説します。",
  alternates: { canonical: "/review/type-agent/" },
};

const faqData = [
  {
    "q": "type転職エージェントの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "type女性の転職エージェントとの違いは何ですか？",
    "a": "いずれも株式会社キャリアデザインセンターの運営です。type転職エージェントは総合型、type女性の転職エージェントは女性のキャリア支援に特化した専門サービスという住み分けです(2026年8月22日確認)。"
  },
  {
    "q": "地方の求人もありますか？",
    "a": "typeブランドは首都圏の転職に強みを持つとされています。希望勤務地の求人量は登録時の面談でご確認ください。地方中心の場合は全国系総合型との併用をおすすめします。"
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
          { name: "エージェント一覧", href: "/review/" },
          { name: "type転職エージェントの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            type転職エージェントの評判は？老舗キャリアデザインセンターの総合型エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">type転職エージェントは、株式会社キャリアデザインセンター(東証プライム上場)が運営する総合型の転職エージェントです。転職サイト「type」ブランドの老舗で、20代の転職・ITの転職・ハイキャリアの転職・営業の転職を主要領域として掲げています。女性専門の「type女性の転職エージェント」も同社の運営です。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <AgentHero slug="type-agent" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>東証プライム上場キャリアデザインセンター運営の総合型エージェント</strong>です。転職サイト「type」ブランドの老舗です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>20代・IT・ハイキャリア・営業の4領域</strong>を主要軸として公式に掲げています。首都圏の転職に強い体制です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>女性専門の姉妹サービス(type女性の転職エージェント)</strong>もあり、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>type転職エージェントの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">type転職エージェント(総合型転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社キャリアデザインセンター(東証プライム上場)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">主要領域</th><td className="px-3 py-2 border-b">20代の転職/ITの転職/ハイキャリアの転職/営業の転職(公式サイトの区分)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">姉妹サービス</th><td className="px-3 py-2 border-b">type女性の転職エージェント(女性専門)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">コンテンツ</th><td className="px-3 py-2 border-b">転職相談会・セミナー/キャリアアドバイザー紹介/履歴書・職務経歴書/面接対策等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">type.career-agent.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：type転職エージェント公式サイト(type.career-agent.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>type転職エージェントの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">4領域特化の専門チーム</h3><p className="text-sm text-text-secondary leading-relaxed">20代・IT・ハイキャリア・営業の4領域を明確に打ち出し、それぞれ専用ページ・専門アドバイザー体制を敷いています。総合型でありながら領域軸の専門性を持つ設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">老舗「type」ブランドの企業接点</h3><p className="text-sm text-text-secondary leading-relaxed">1990年代から続く転職メディア「type」の運営会社として、首都圏を中心とした企業との長い接点を持ちます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">転職相談会・セミナーの開催</h3><p className="text-sm text-text-secondary leading-relaxed">対面・オンラインの転職相談会やセミナーを定期開催しており、情報収集段階から接点を持てます。</p></div>
        </div>

        <h2>第三者の口コミサイトでのtype転職エージェントの評判</h2>

        <div className="glass-card p-6 mb-4">

          <ul className="space-y-2 text-sm text-text-secondary">
            <li>みん評の「type転職エージェント」のページには口コミが84件あり、同ページに表示されている評価は5点満点中2.80です(項目別では求人数2.94・担当者2.83・サポート2.79・紹介内容2.89。カテゴリ平均は2.78)。当サイトで評点別に数えると、5点が2件、4点が3件、3点が2件、2点が6件、1点が67件、評点なしが4件でした。</li>
            <li>みん評の低評価の投稿では、担当者の態度や連絡が途中で途絶えた、希望と異なるポジションで選考を進められた、担当者間の情報共有が不十分だったという趣旨の内容が多く見られます。4点以上の投稿では、カウンセリングが丁寧だった、自分のアピールポイントを引き出してもらえたという評価があります。</li>
            <li>コエテコキャリアのtype転職エージェントのページでは、口コミは3件、総合評価は5点満点中3.2です(★4・★3・★2が各1件。同ページの運営会社欄に株式会社キャリアデザインセンターと記載)。担当者の対応やIT・Web業界の求人の多さを評価する内容と、求人の質・量や面接前のサポートが期待に届かなかったという内容があります。</li>
            <li>2つのサイトで評価の水準は大きく異なります。みん評は、同サイトの性質上厳しい声が多くなり、低評価が多いことが必ずしも問題を示すものではないと注記しています。コエテコキャリアは、無料登録・面談後の口コミ投稿にAmazonギフトカード（最大3,000円分）を進呈するキャンペーンを案内しています。いずれも個人の体験にもとづく投稿です。</li>

          </ul>

        </div>

        <p className="text-xs text-text-muted mb-8">出典：<a href="https://minhyo.jp/type" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">みん評「type転職エージェントの口コミ・評判」</a>(株式会社マイスタースタジオ運営)、<a href="https://coeteco.jp/career/job_change/type-career-agent" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">コエテコキャリア「type転職エージェントの評判・口コミ」</a>(GMOメディア株式会社運営)、いずれも2026年11月12日取得。件数・評価は取得日時点の値です。評点別の件数は、当サイトがみん評の全84件を数えたものです。口コミ本文は転載せず、当サイトで傾向を要約しています。</p>


        <h2>type転職エージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>首都圏でIT・営業・20代・ハイキャリア領域の転職を考えている人</li>
              <li>老舗ブランドの安定した支援を受けたい人</li>
              <li>相談会・セミナーから情報収集を始めたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>地方での転職が中心の人 →全国系の総合型との併用をおすすめします</li>
              <li>女性のキャリア特化サポートを求める人 →<a href="/review/type-woman/" className="text-teal underline">type女性の転職エージェント</a>が候補です</li>
            </ul>
          </div>
        </div>

        <h2>type転職エージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>type転職エージェントは、20代・IT・ハイキャリア・営業の4領域を軸にした老舗の総合型エージェントです。首都圏での転職に強く、利用は無料です。リクルートエージェント・doda等の全国系と併用し、提案の質を比較することをおすすめします。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/type-woman/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              type女性の転職エージェントの詳細
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
        <AgentClients slug="type-agent" agentName="type転職エージェント" />

      </article>
    </>
  );
}
