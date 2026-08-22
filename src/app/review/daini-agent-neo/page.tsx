import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "第二新卒エージェントneoの評判は？20代・既卒・高卒対応の転職エージェントを解説【2026年】",
  description: "第二新卒エージェントneo(ネオキャリア運営)は、第二新卒・既卒・フリーター・高卒など20代の就活・転職支援サービス。学歴・就業状況を問わない幅広い受け入れが特徴。公式情報ベースで特徴・向いている人を解説します。利用は無料。",
  alternates: { canonical: "/review/daini-agent-neo/" },
};

const faqData = [
  {
    "q": "第二新卒エージェントneoの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "高卒・中退でも利用できますか？",
    "a": "公式サイトの学歴区分に「大学中退・高卒・高校中退・中卒」が明示されており(2026年8月22日確認)、学歴を問わず支援対象としています。"
  },
  {
    "q": "他の20代特化エージェントとどう使い分ければいいですか？",
    "a": "学歴・経歴に不安がある場合の幅広い受け入れが第二新卒エージェントneoの特徴です。大手グループ基盤のマイナビジョブ20's、オーダーメイド型のUZUZと2〜3社併用して、求人と担当者の相性を比較するのがおすすめです。"
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
          { name: "第二新卒エージェントneoの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            第二新卒エージェントneoの評判は？20代・既卒・高卒対応の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">第二新卒エージェントneoは、株式会社ネオキャリアが運営する20代向けの就活・転職支援サービスです。第二新卒だけでなく、既卒・フリーター・高卒・中退など、学歴や就業状況を問わない幅広い受け入れを明確に打ち出しているのが特徴です。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>第二新卒・既卒・フリーター・高卒など20代を幅広く支援</strong>。学歴選択肢に「大学中退・高卒・高校中退・中卒」まで用意されています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>就業状況を問わず登録可能</strong>(正社員・未就業・就業経験無し・派遣・アルバイト・契約社員)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>電話相談窓口(平日9:00-19:00)</strong>があり、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>第二新卒エージェントneoの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">第二新卒エージェントneo(20代の就活・転職支援サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ネオキャリア</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">20代(第二新卒・既卒・フリーター・高卒・中退者を含む)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象学歴</th><td className="px-3 py-2 border-b">大学・大学院卒/大学中退/高卒/高校中退/中卒(公式サイトの検索区分)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">受付</th><td className="px-3 py-2 border-b">電話受付 平日9:00〜19:00</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">daini-agent.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：第二新卒エージェントneo公式サイト(daini-agent.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>第二新卒エージェントneoの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">学歴不問の明確な受け入れ設計</h3><p className="text-sm text-text-secondary leading-relaxed">学歴選択肢に中卒・高校中退まで含まれており、学歴に不安がある人でも申し込みやすい構成が公式サイト上で明示されています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">就業状況を問わない登録導線</h3><p className="text-sm text-text-secondary leading-relaxed">正社員・未就業・就業経験なし・派遣・アルバイト・契約社員と、あらゆる就業状況からの検索・登録に対応しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">人材大手ネオキャリアの運営</h3><p className="text-sm text-text-secondary leading-relaxed">運営のネオキャリアは人材サービスを幅広く展開する企業で、20代若手領域の支援ノウハウを持ちます。</p></div>
        </div>

        <h2>第二新卒エージェントneoが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>高卒・中退など学歴に不安があり正社員を目指したい20代</li>
              <li>フリーター・ニートから就職活動を始めたい人</li>
              <li>電話で相談しながら進めたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>大卒でキャリアアップ転職をしたい20代 →<a href="/review/mynavi-job20s/" className="text-teal underline">マイナビジョブ20's</a>等と併用を</li>
              <li>30代以上 →総合型エージェントへ</li>
            </ul>
          </div>
        </div>

        <h2>第二新卒エージェントneo よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>第二新卒エージェントneoは、学歴・就業状況を問わない幅広い受け入れを掲げる20代特化の就職・転職支援サービスです。高卒・中退・フリーターからの正社員就職の相談先として選択肢になり、利用は無料。20代特化型の複数併用で相性を比較しましょう。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/uzuz/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              UZUZ(第二の就活)の詳細
            </Link>
            <Link href="/review/mynavi-job20s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビジョブ20'sの詳細
            </Link>
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェントまとめ
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
