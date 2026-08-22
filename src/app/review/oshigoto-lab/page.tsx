import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "お仕事ラボの評判は？薬剤師特化の転職・派遣サービスを解説【2026年】",
  description: "お仕事ラボは株式会社AXISが運営する薬剤師専門の転職・派遣サービス。公開求人12,524件(2026年8月確認)・非公開求人多数・正社員/パート/派遣に対応。有料職業紹介事業許可番号13-ユ-307575。公式情報ベースで解説します。",
  alternates: { canonical: "/review/oshigoto-lab/" },
};

const faqData = [
  {
    "q": "お仕事ラボの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。3ステップで無料転職サポートに申し込めると公式に案内されています。"
  },
  {
    "q": "派遣薬剤師としても働けますか？",
    "a": "お仕事ラボは正社員・パート・派遣の3形態に対応しており、派遣のお仕事専用ページも公式サイトに用意されています(2026年8月22日確認)。"
  },
  {
    "q": "求人はどのくらいありますか？",
    "a": "公開求人12,524件(公式サイト2026年8月21日更新表示)に加え、非公開求人も多数と公式に記載されています。希望エリアの求人量は検索画面でご確認ください。"
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
          { name: "お仕事ラボの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            お仕事ラボの評判は？薬剤師特化の転職・派遣サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">お仕事ラボは、株式会社AXISが運営する薬剤師専門の転職・派遣サービスです。正社員・パート・派遣と雇用形態を横断して薬剤師の職場探しを支援し、公開求人は12,524件(2026年8月21日更新時点・当サイト8月22日確認)、非公開求人も多数と公式に掲げています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>薬剤師専門の転職・派遣サービス</strong>。正社員・パート・派遣の3形態に対応しています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>公開求人12,524件</strong>(公式サイト2026年8月21日更新表示・当サイト8月22日確認)+非公開求人多数。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>有料職業紹介事業許可番号(13-ユ-307575)を公式サイトで確認</strong>。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>お仕事ラボの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">お仕事ラボ(薬剤師専門の転職・派遣サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社AXIS</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">薬剤師(正社員・パート・派遣)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公開求人数</th><td className="px-3 py-2 border-b">12,524件(公式サイト2026年8月21日更新表示)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-307575</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">検索軸</th><td className="px-3 py-2 border-b">エリア/沿線/勤務形態/業種/詳細条件</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">oshigoto-lab.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：お仕事ラボ公式サイト(oshigoto-lab.com)、2026年8月22日確認。求人数は変動します。満足度等の表記は公式サイト掲載(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>お仕事ラボの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">薬剤師の3つの働き方に対応</h3><p className="text-sm text-text-secondary leading-relaxed">正社員・パート・派遣を横断して探せるため、ライフステージに合わせた働き方の変更(常勤→パート等)も同じサービス内で相談できます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">エリア・沿線からの求人検索</h3><p className="text-sm text-text-secondary leading-relaxed">全国の求人をエリア・沿線・駅から検索でき、生活圏ベースで職場を探せる実用的な設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">非公開求人の保有</h3><p className="text-sm text-text-secondary leading-relaxed">公開12,000件超に加えて非公開求人多数と公式に掲げており、条件の良い薬局・病院求人へのアクセスが期待できます。</p></div>
        </div>

        <h2>お仕事ラボが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>調剤薬局・病院・ドラッグストアへの転職を考えている薬剤師</li>
              <li>派遣・パートなど働き方を柔軟に変えたい薬剤師</li>
              <li>沿線・駅ベースで通いやすい職場を探したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>薬剤師以外の医療職 →<a href="/review/nishima-pharma/" className="text-teal underline">にしまファーマ</a>等の医療系サービスへ</li>
              <li>登録販売者など隣接職種の人 →対象可否を事前確認</li>
            </ul>
          </div>
        </div>

        <h2>お仕事ラボ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>お仕事ラボは、正社員・パート・派遣を横断できる薬剤師専門の転職サービスです。1.2万件超の公開求人と許可番号の公開が確認でき、利用は無料。薬剤師の転職では特化型を2社併用して求人の重なりと担当者の質を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/nishima-pharma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              にしまファーマの詳細
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェント複数利用のコツ
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
