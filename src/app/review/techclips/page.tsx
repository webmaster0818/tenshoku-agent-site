import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "TechClipsエージェントの評判は？ITエンジニア専門の転職エージェントを解説【2026年】",
  description: "TechClipsエージェント(notari株式会社運営)はITエンジニア専門の転職エージェント。SIer/SESから自社サービス・ITコンサルタントへの転職実績を公式に掲げています。特徴・向いている人を公式情報ベースで解説。利用は無料。",
  alternates: { canonical: "/review/techclips/" },
};

const faqData = [
  {
    "q": "TechClipsエージェントの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が成功報酬を支払う人材紹介の標準モデルです。"
  },
  {
    "q": "どんな転職先が多いですか？",
    "a": "公式サイトでは「SIer/SESから自社サービス、ITコンサルタントへの転職実績多数」と掲げられています(2026年8月22日確認)。紹介企業例は公式サイトで公開されています。"
  },
  {
    "q": "地方在住でも利用できますか？",
    "a": "求人の中心エリアや対応範囲は公式サイト・面談時にご確認ください。リモート面談の可否も申し込み時に確認するのが確実です。"
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
          { name: "TechClipsエージェントの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            TechClipsエージェントの評判は？ITエンジニア専門の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">TechClipsエージェント(テッククリップスエージェント)は、notari株式会社が運営するITエンジニア専門の転職エージェントです。SIer/SESから自社サービス企業・ITコンサルタントへの転職実績を掲げ、20代〜40代まで年代別の転職ガイドを公式に用意しています。公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>ITエンジニア専門の転職エージェント</strong>。SIer/SESから自社サービス・ITコンサルタントへの転職実績多数と公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>高マッチング率を強みとして訴求</strong>(公式サイト表記)。エンジニア経験者のキャリアアップ転職向けの設計です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>利用は無料</strong>。公開求人の検索や紹介企業例も公式サイトで確認できます。</span></li>
          </ul>
        </div>

        <h2>TechClipsエージェントの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">TechClipsエージェント(ITエンジニア専門の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">notari株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">ITエンジニアの転職(SIer/SESから自社サービス・ITコンサルタントへ等)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象年代</th><td className="px-3 py-2 border-b">20代〜40代(公式サイトに年代別転職ガイドあり)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">agent.tech-clips.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：TechClipsエージェント公式サイト(agent.tech-clips.com)、2026年8月22日確認。マッチング率等の表記は公式サイト掲載値(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>TechClipsエージェントの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">SIer/SESからの脱出に強い訴求</h3><p className="text-sm text-text-secondary leading-relaxed">「SIerからの脱出」を公式サイトの主要コンテンツに掲げ、自社サービス企業やITコンサルタントへのキャリアチェンジを支援しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">エンジニア経験者向けの専門設計</h3><p className="text-sm text-text-secondary leading-relaxed">コンサルタント紹介・転職ノウハウ(履歴書/職務経歴書の書き方)・公開求人検索など、経験者の転職活動に必要な情報を公式サイトに集約しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">年代別の転職ガイド</h3><p className="text-sm text-text-secondary leading-relaxed">20代・30代・40代それぞれの転職成功ガイドを用意しており、年代に応じた戦略を確認してから相談できます。</p></div>
        </div>

        <h2>TechClipsエージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>SIer・SESから自社サービス企業へ移りたいエンジニア</li>
              <li>年収・待遇を上げたい経験者エンジニア</li>
              <li>ITコンサルタントへのキャリアチェンジを考えている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>IT未経験の人 →<a href="/review/rework/" className="text-teal underline">Re:WORKエージェント</a>や<a href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア(未経験窓口)</a>が向きます</li>
              <li>IT以外も含めて幅広く見たい人 →総合型との併用を</li>
            </ul>
          </div>
        </div>

        <h2>TechClipsエージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>TechClipsエージェントは、SIer/SESからのキャリアチェンジに強みを掲げるITエンジニア専門エージェントです。経験者向けの専門設計と年代別ガイドが特徴で、利用は無料。IT特化型は複数併用して求人の幅を確保するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/unison-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ユニゾンキャリアの詳細
            </Link>
            <Link href="/review/pit-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              PIT(ピット)の詳細
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
