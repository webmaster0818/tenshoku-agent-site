import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "キャリコンの評判は？20代専門の転職エージェント紹介サービスを解説【2026年】",
  description: "キャリコン(Crown_Cat株式会社運営)は、20代の転職者にぴったりの転職エージェントを複数紹介する無料のエージェント紹介サービス。自分に合うエージェント選びを支援する珍しい形態。仕組み・使い方を公式情報ベースで解説します。",
  alternates: { canonical: "/review/caricon/" },
};

const faqData = [
  {
    "q": "キャリコンの利用に費用はかかりますか？",
    "a": "無料で利用できます。紹介先の転職エージェントの利用も求職者は無料です。"
  },
  {
    "q": "キャリコン自体が求人を紹介してくれるのですか？",
    "a": "キャリコンは求人ではなく「あなたに合った転職エージェント」を複数紹介するサービスです(2026年8月22日確認)。実際の求人紹介・選考支援は紹介されたエージェントが行います。"
  },
  {
    "q": "紹介されたエージェントは断ってもいいですか？",
    "a": "紹介後にどのエージェントを使うかは自由です。面談してみて相性が合わなければ、他の紹介先や自分で選んだエージェントを使って問題ありません。"
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
          { name: "キャリコンの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            キャリコンの評判は？20代専門の転職エージェント紹介サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">キャリコンは、Crown_Cat株式会社が運営する20代専門の「転職エージェント紹介サービス」です。求人を直接紹介するのではなく、20代の転職者一人ひとりに合った転職エージェントを無料で複数紹介するという、エージェント選びを支援する形態のサービスです。公式情報をもとに仕組みを整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>20代専門の「転職エージェント紹介」サービス</strong>。求人でなく、あなたに合うエージェントを複数紹介する形態です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>無料で最適な転職エージェントを紹介</strong>と公式に掲げています。エージェント選びで迷う20代の入口になります。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>紹介後は各エージェントの無料サポートを利用</strong>する流れです。</span></li>
          </ul>
        </div>

        <h2>キャリコンの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">キャリコン(20代専門の転職エージェント紹介サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">Crown_Cat株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">20代の転職希望者</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">形態</th><td className="px-3 py-2 border-b">転職エージェント紹介(求人紹介ではなく、合うエージェントを複数マッチング)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">careecon.online</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：キャリコン公式サイト(careecon.online)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>キャリコンの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">「エージェント選び」を支援する珍しい形態</h3><p className="text-sm text-text-secondary leading-relaxed">転職エージェントは数が多く相性の差も大きいため、選ぶ段階から支援するという切り口のサービスです。20代の状況(経歴・希望)に合わせて複数のエージェントを紹介します。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">20代に絞った専門対応</h3><p className="text-sm text-text-secondary leading-relaxed">対象を20代に絞ることで、第二新卒・未経験・キャリアアップなど20代特有の転職パターンに沿った紹介が期待できる設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">複数紹介による比較のしやすさ</h3><p className="text-sm text-text-secondary leading-relaxed">1社に絞らず複数のエージェントを紹介する形態のため、担当者との相性を比較して選べます。</p></div>
        </div>

        <h2>キャリコンが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>どの転職エージェントに登録すべきか迷っている20代</li>
              <li>自分の経歴に合う支援サービスを客観的に知りたい人</li>
              <li>複数エージェントを効率よく比較したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>自分でエージェントを選びたい人 →当サイトの<a href="/knowledge/how-to-choose/" className="text-teal underline">選び方ガイド</a>で直接比較を</li>
              <li>30代以上の人 →総合型エージェントへ</li>
            </ul>
          </div>
        </div>

        <h2>キャリコン よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>キャリコンは、20代向けに「合う転職エージェント」を複数紹介するマッチング型サービスです。エージェント選びの入口として使え、無料です。並行して当サイトの選び方ガイドやランキングで直接比較すると、より納得感のある選択ができます。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェントまとめ
            </Link>
            <Link href="/review/mynavi-job20s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビジョブ20'sの詳細
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
