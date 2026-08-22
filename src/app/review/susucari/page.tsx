import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "サスキャリの評判は？サステナビリティ・ESG特化の転職エージェントを解説【2026年】",
  description: "サスキャリ(株式会社リバースネット運営)はサステナビリティ・ESG領域特化の求人・転職支援サービス。転職後平均年収は20代730万/30代860万/40代1030万(公式表記)。コンサル・事業会社・省庁まで幅広い職種に対応。公式情報ベースで解説します。",
  alternates: { canonical: "/review/susucari/" },
};

const faqData = [
  {
    "q": "サスキャリの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担するモデルです。"
  },
  {
    "q": "どんな職種の求人がありますか？",
    "a": "サステナビリティ推進・コンサルタント・事業開発・アナリスト・金融専門職から中央省庁・国際機関・NPOまで、幅広い職種区分が公式サイトに用意されています(2026年8月22日確認)。"
  },
  {
    "q": "サステナビリティ領域の経験がなくても使えますか？",
    "a": "コンサル・金融・事業開発などの経験を活かしてサステナ領域に転身するルートが想定されています。個別の紹介可否は面談予約時にご確認ください。"
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
          { name: "サスキャリの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            サスキャリの評判は？サステナビリティ・ESG特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">サスキャリは、株式会社リバースネットが運営するサステナビリティ領域特化の求人・転職支援サービスです。ESG・SX(サステナビリティ・トランスフォーメーション)領域のハイクラス転職を掲げ、コンサルファームから事業会社のサステナビリティ推進、中央省庁・国際機関・NPOまで幅広い職種区分に対応しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>サステナビリティ・ESG領域特化</strong>の転職支援サービス。SXコンサル・事業会社の両方をカバーします。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>転職後の平均年収: 20代730万/30代860万/40代1030万円</strong>(公式表記・2023〜2024年の外資系SXコンサル・事業会社複数社における実績)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>職種区分が広い</strong>(サステナ推進/コンサル/事業開発/アナリスト/金融専門職/省庁・国際機関/NPO等)。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>サスキャリの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">サスキャリ(サステナビリティ特化の求人・転職支援)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社リバースネット</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">サステナビリティ・ESG・SX領域の転職</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">転職後平均年収 20代730万/30代860万/40代1030万円・内定率/支援数No.1(いずれも公式表記・2023〜2024年実績・注記条件は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">サステナビリティ推進/コンサルタント/法人営業・CS/事業開発/企画・PM/アナリスト/金融専門職/中央省庁・国際機関/NPO・NGO等</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">sus-career.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：サスキャリ公式サイト(sus-career.com)、2026年8月22日確認。年収・No.1表記は公式サイト掲載値(2023〜2024年・外資系SXコンサルファーム/事業会社の複数社における実績と注記)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>サスキャリの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ESG・サステナ領域という成長ニッチへの特化</h3><p className="text-sm text-text-secondary leading-relaxed">脱炭素・人的資本開示などで需要が拡大するサステナビリティ人材市場に絞った、希少な特化型サービスです。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">コンサルと事業会社の横断比較</h3><p className="text-sm text-text-secondary leading-relaxed">外資系SXコンサルファームと事業会社のサステナ推進部門の両方をカバーし、キャリアパスを横断して比較できます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">セクターを超えた職種区分</h3><p className="text-sm text-text-secondary leading-relaxed">民間だけでなく中央省庁・国際機関・地方自治体・NPO/NGOまで職種区分に含まれており、公共セクターも視野に入れられます。</p></div>
        </div>

        <h2>サスキャリが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ESG・サステナビリティ領域でキャリアを築きたい人</li>
              <li>SXコンサルと事業会社を比較して選びたい人</li>
              <li>環境・社会課題に関わる仕事へ専門性を活かして移りたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>サステナ領域未経験で年収も上げたい人 →まず総合型で市場価値確認を</li>
              <li>コンサル全般を見たい人 →<a href="/review/myvision/" className="text-teal underline">MyVision</a>等コンサル特化と併用を</li>
            </ul>
          </div>
        </div>

        <h2>サスキャリ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>サスキャリは、拡大するESG・サステナビリティ人材市場に特化した希少な転職支援サービスです。コンサル・事業会社・公共セクターを横断できるのが特徴で、利用は無料。コンサル特化型やハイクラス型と併用してキャリアの選択肢を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/myvision/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              MyVision(コンサル特化)の詳細
            </Link>
            <Link href="/review/newma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              NewMAの詳細
            </Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェントまとめ
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
