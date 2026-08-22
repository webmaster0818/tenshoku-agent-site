import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "退職代行ヤメドキの評判は？後払い対応の退職代行サービスを解説【2026年】",
  description: "退職代行ヤメドキ(株式会社25H運営)は、後払いOK・24,000円(税込)・追加料金なしの退職代行サービス。退職率100%(公式表記・2024年3月〜2026年4月の3,972名対象)。仕組み・注意点を公式情報ベースで解説します。",
  alternates: { canonical: "/review/yamedoki/" },
};

const faqData = [
  {
    "q": "退職代行ヤメドキの料金はいくらですか？",
    "a": "24,000円(税込)で、全てコミコミ・追加料金なしと公式に明示されています。支払いは退職日決定後7日以内の後払いに対応しています(2026年8月22日確認)。"
  },
  {
    "q": "本当に退職できますか？",
    "a": "公式サイトは退職率100%(2024年3月1日〜2026年4月27日・対象3,972名)と表記しています。ただし対象は正社員・パート・アルバイトで、業務委託・契約社員などは実績に含まれないと注記されています。自身の雇用形態での対応可否は相談時にご確認ください。"
  },
  {
    "q": "退職代行を使った後の転職に不利になりませんか？",
    "a": "退職代行の利用自体が転職先に自動的に伝わる仕組みはありません。退職後の転職活動は、転職エージェントの無料サポートを活用して仕切り直すのが現実的です。当サイトの各エージェント解説も参考にしてください。"
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
          { name: "退職代行ヤメドキの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            退職代行ヤメドキの評判は？後払い対応の退職代行サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">退職代行ヤメドキは、株式会社25Hが運営する退職代行サービスです。料金24,000円(税込)の全部コミコミ・追加料金なしで、退職日決定後7日以内に支払う「後払いOK」方式を採用しています。転職の前段階である「辞められない」を解決するサービスとして、公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>後払いOKの退職代行サービス</strong>。24,000円(税込)・追加料金なしで、支払いは退職日決定後7日以内です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>退職率100%</strong>(公式表記・対象期間2024年3月1日〜2026年4月27日・対象者3,972名[正社員・パート・アルバイト])。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>24時間対応・LINE相談し放題・電話回数無制限・有給サポート</strong>を公式に掲げています。</span></li>
          </ul>
        </div>

        <h2>退職代行ヤメドキの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">退職代行ヤメドキ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社25H</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">24,000円(税込・全部コミコミ・追加料金なし)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">支払い</th><td className="px-3 py-2 border-b">後払いOK(退職日決定後7日以内)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">退職率100%(2024/3/1〜2026/4/27・対象3,972名[正社員・パート・アルバイト]・公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対応</th><td className="px-3 py-2 border-b">24時間対応/LINE相談し放題/電話回数無制限/即日退職/有給サポート</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">yamedoki.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：退職代行ヤメドキ公式サイト(yamedoki.co.jp)、2026年8月22日確認。退職率の対象条件は公式注記(業務委託・契約社員などの雇用形態は実績に含まれない)を参照。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>退職代行ヤメドキの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">後払い方式の安心設計</h3><p className="text-sm text-text-secondary leading-relaxed">退職日が決まってから7日以内に支払う後払い方式のため、「お金を払ったのに退職できなかったら」という不安を構造的に回避できます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">追加料金なしの明朗会計</h3><p className="text-sm text-text-secondary leading-relaxed">24,000円(税込)に全て含まれる料金設計で、オプション課金がない点を公式に明示しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">実績数値の対象条件を明示</h3><p className="text-sm text-text-secondary leading-relaxed">退職率100%の対象期間・対象者数・雇用形態を公式サイトが注記付きで開示しており、実績表記の透明性が比較的高いサービスです。</p></div>
        </div>

        <h2>退職代行ヤメドキが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>自分から退職を言い出せず心身が限界の人</li>
              <li>料金を払ってから退職できないリスクを避けたい人(後払い希望)</li>
              <li>退職後に転職活動を仕切り直したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>公務員・業務委託の人 →対応可否を事前確認(実績対象外の雇用形態あり)</li>
              <li>未払い残業代の請求など法的交渉が必要な人 →弁護士運営の退職代行へ</li>
            </ul>
          </div>
        </div>

        <h2>退職代行ヤメドキ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>退職代行ヤメドキは、後払い方式と明朗会計が特徴の退職代行サービスです。実績表記の対象条件を注記付きで開示している透明性も確認できます。退職はゴールではなくキャリアの仕切り直しの始まりなので、退職後は無料の転職エージェントで次の職場探しを進めましょう。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/watashi-next/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              わたしNEXT(女性の退職代行)の詳細
            </Link>
            <Link href="/review/otoko-taishoku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              男の退職代行の詳細
            </Link>
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
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
