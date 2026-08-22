import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "キャリアチケット転職(転職エージェント)の評判は？レバレジーズの20代向け転職支援を解説【2026年】",
  description: "キャリアチケット転職は、レバレジーズ株式会社が展開する20代・30代向けの転職支援サービス。「成長したい！」を叶える仕事探しプラットフォームを掲げ、新卒向け「キャリアチケット就職」の転職版として運営されています。公式情報ベースで解説します。",
  alternates: { canonical: "/review/career-ticket-tenshoku/" },
};

const faqData = [
  {
    "q": "キャリアチケット転職の利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "キャリアチケット就職との違いは何ですか？",
    "a": "キャリアチケット就職は新卒(大学生)向けの就活支援、キャリアチケット転職は20代・30代の社会人向け転職支援です。いずれもレバレジーズ株式会社の運営です(2026年8月22日確認)。"
  },
  {
    "q": "どんな求人がありますか？",
    "a": "20代・30代の「成長したい」に応える仕事探しプラットフォームを掲げています。具体的な求人構成・紹介内容は登録後にご確認ください。"
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
          { name: "キャリアチケット転職の評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            キャリアチケット転職(転職エージェント)の評判は？レバレジーズの20代向け転職支援を解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">キャリアチケット転職は、レバレジーズ株式会社が展開する20代・30代向けの転職支援サービスです。「成長したい！」を叶える仕事探しプラットフォームを掲げており、量より質の就活支援で知られる新卒向け「キャリアチケット就職」の系譜にある転職版サービスです。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>20代・30代向けの転職支援サービス</strong>。「成長したい！」を叶える仕事探しプラットフォームを掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>運営はレバレジーズ</strong>。IT特化のレバテックや新卒向けキャリアチケット就職を展開する人材大手グループです。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>「量より質」の支援方針</strong>が同ブランドの特徴で、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>キャリアチケット転職の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">キャリアチケット転職(20代・30代向け転職支援サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">レバレジーズ株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">20代・30代の転職希望者</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">ブランド</th><td className="px-3 py-2 border-b">キャリアチケット(新卒就職支援)の転職版・「量より質」の支援方針</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">グループサービス</th><td className="px-3 py-2 border-b">レバテックキャリア(IT特化)等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">career-ticket.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：キャリアチケット転職公式サイト(career-ticket.jp)・キャリアチケット就職(careerticket.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>キャリアチケット転職の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">「成長」を軸にした20代・30代向け設計</h3><p className="text-sm text-text-secondary leading-relaxed">単なる条件マッチングではなく「成長したい」という志向を軸にした仕事探しを掲げており、キャリアの伸びしろを重視する若手向けの設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">量より質のキャリアチケットブランド</h3><p className="text-sm text-text-secondary leading-relaxed">新卒領域で「量より質の就活支援」を掲げてきたキャリアチケットブランドの転職版で、大量応募型と異なるスタイルが期待できます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">人材大手レバレジーズの基盤</h3><p className="text-sm text-text-secondary leading-relaxed">IT特化のレバテックなどを展開するレバレジーズグループの運営で、若手×成長企業の求人接点を持ちます。</p></div>
        </div>

        <h2>キャリアチケット転職が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>成長環境を軸に転職先を選びたい20代・30代</li>
              <li>大量応募より質重視の支援を受けたい人</li>
              <li>レバレジーズ系サービスの若手支援ノウハウを活用したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ITエンジニア職に絞る人 →同グループの<a href="/review/levtech/" className="text-teal underline">レバテックキャリア</a>へ</li>
              <li>40代以上 →総合型エージェントへ</li>
            </ul>
          </div>
        </div>

        <h2>キャリアチケット転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>キャリアチケット転職は、レバレジーズが展開する成長軸の20代・30代向け転職支援サービスです。量より質のブランド方針が特徴で、利用は無料。同世代特化のマイナビジョブ20's・UZUZ等と併用し、支援スタイルの相性で選ぶのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/levtech/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              レバテックキャリアの詳細
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
