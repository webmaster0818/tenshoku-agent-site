import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マイナビクリエイターの評判は？Web・ゲーム・IT特化の転職エージェントを解説【2026年】",
  description: "マイナビクリエイター(マイナビ転職クリエイターエージェント)は、マイナビワークスが運営するWeb・ゲーム・IT業界のクリエイター専門転職エージェント。ポートフォリオ作成サービスMATCHBOXが無料で使えるのが特徴。公式情報ベースで解説します。",
  alternates: { canonical: "/review/mynavi-creator/" },
};

const faqData = [
  {
    "q": "マイナビクリエイターの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。ポートフォリオ作成サービスMATCHBOXも無料で利用できます。"
  },
  {
    "q": "ポートフォリオがなくても相談できますか？",
    "a": "ポートフォリオ作成サービスMATCHBOXの提供や、ポートフォリオ関連の転職ノウハウが公式サイトに用意されており、作成段階からの相談を前提とした設計です(2026年8月22日確認)。"
  },
  {
    "q": "どんな職種が対象ですか？",
    "a": "公式サイトにはWebディレクター・Webデザイナー・マークアップエンジニア・ゲームプランナー・ゲームディレクターなどの職種が掲げられています。Web・ゲーム・IT業界のクリエイティブ職が中心です。"
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
          { name: "マイナビクリエイターの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            マイナビクリエイターの評判は？Web・ゲーム・IT特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">マイナビクリエイター(現名称: マイナビ転職クリエイターエージェント)は、株式会社マイナビワークスが運営するWeb・ゲーム・IT業界のクリエイター専門転職エージェントです。ポートフォリオ作成サービス「MATCHBOX」を提供しているのが大きな特徴です。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>Web・ゲーム・IT業界のクリエイター専門</strong>。Webディレクター・Webデザイナー・ゲームプランナー・ゲームディレクター等が対象です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>ポートフォリオ作成サービス「MATCHBOX」を提供</strong>。クリエイター転職で最大の関門であるポートフォリオを支援ツール付きで作れます。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>マイナビグループの運営基盤</strong>。セミナー・説明会・相談会などイベントも豊富で、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>マイナビクリエイターの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">マイナビ転職クリエイターエージェント(旧称マイナビクリエイター)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社マイナビワークス(マイナビグループ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">Webディレクター/Webデザイナー/マークアップエンジニア/ゲームプランナー/ゲームディレクター等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">独自ツール</th><td className="px-3 py-2 border-b">ポートフォリオ作成サービス「MATCHBOX」</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">コンテンツ</th><td className="px-3 py-2 border-b">求人情報・イベント(セミナー/説明会/相談会)・転職ノウハウ(自己PR/ポートフォリオ/面接対策等)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">mynavi-creator.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：マイナビ転職クリエイターエージェント公式サイト(mynavi-creator.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>マイナビクリエイターの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ポートフォリオ支援「MATCHBOX」</h3><p className="text-sm text-text-secondary leading-relaxed">クリエイター転職の要となるポートフォリオを、専用サービスMATCHBOXで作成できます。作品整理から見せ方まで、選考通過に直結する部分をツールで支援します。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">Web・ゲーム両業界をカバー</h3><p className="text-sm text-text-secondary leading-relaxed">Web系(ディレクター・デザイナー・マークアップ)とゲーム系(プランナー・ディレクター)の両方の職種を扱い、業界をまたいだ比較検討ができます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">イベント・セミナーの豊富さ</h3><p className="text-sm text-text-secondary leading-relaxed">座談会イベントをきっかけにした転職事例が公式サイトで紹介されるなど、企業との接点づくりの場が多いのが大手運営の強みです。</p></div>
        </div>

        <h2>マイナビクリエイターが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>Web・ゲーム業界のクリエイター職で転職したい人</li>
              <li>ポートフォリオの作り方から支援してほしい人</li>
              <li>大手グループの安心感とイベントの豊富さを重視する人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>より厳選型の提案を求める人 →<a href="/review/highfive/" className="text-teal underline">HIGH-FIVE</a>と併用して比較を</li>
              <li>ゲーム業界だけに絞りたい経験者 →<a href="/review/hiraku-agent/" className="text-teal underline">Hiraku agent</a>も選択肢</li>
            </ul>
          </div>
        </div>

        <h2>マイナビクリエイター よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>マイナビクリエイターは、ポートフォリオ支援ツールMATCHBOXを備えたWeb・ゲーム・IT特化の転職エージェントです。大手グループの基盤とイベントの豊富さが特徴で、利用は無料。クリエイター転職ではHIGH-FIVE等との2社併用で提案を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/highfive/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              HIGH-FIVEの詳細
            </Link>
            <Link href="/review/famicari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ファミキャリ!の詳細
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
