import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "セキュリティーワークの評判は？警備員専門の求人・転職サイトを解説【2026年】",
  description: "セキュリティーワーク(株式会社ミライユ運営)は警備員・警備スタッフ専門の求人・転職サイト。施設警備・交通誘導・機械警備の求人を全国掲載し、60歳以上活躍中・日払い週払い可などの条件検索に対応。電話無料相談あり。公式情報ベースで解説します。",
  alternates: { canonical: "/review/security-work/" },
};

const faqData = [
  {
    "q": "セキュリティーワークの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。求人掲載側(警備会社)が費用を負担するモデルです。"
  },
  {
    "q": "60歳以上でも求人はありますか？",
    "a": "「60歳以上活躍中」のこだわり条件検索が公式サイトに用意されており(2026年8月22日確認)、シニア歓迎求人を絞り込んで探せます。"
  },
  {
    "q": "未経験でも警備員になれますか？",
    "a": "警備業界は入職時の法定研修(新任教育)が義務付けられており、未経験歓迎の求人が多い業界です。「ブランクOK」等の条件検索で該当求人をご確認ください。"
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
          { name: "セキュリティーワークの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            セキュリティーワークの評判は？警備員専門の求人・転職サイトを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">セキュリティーワークは、株式会社ミライユが運営する警備員・警備スタッフ専門の求人・転職サイトです。施設警備・交通誘導警備・機械警備の業務内容別、「60歳以上活躍中」「日払い・週払い可」「正社員登用制度あり」などのこだわり条件別に全国の警備求人を検索できます。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>警備員専門の求人・転職サイト</strong>。施設警備・交通誘導・機械警備の業務内容別に探せます。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>60歳以上活躍中・ブランクOK・日払い週払い可</strong>などシニア・未経験にも開かれた条件検索が特徴です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>電話での無料相談(0120-753-053・平日9:30〜18:30)</strong>に対応し、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>セキュリティーワークの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">セキュリティーワーク(警備員・警備スタッフ専門の求人転職サイト)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ミライユ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">警備員・警備スタッフ(施設警備/交通誘導警備/機械警備)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">こだわり条件</th><td className="px-3 py-2 border-b">60歳以上活躍中/ブランクOK/土日祝休み/大手企業/日払い・週払い可/正社員登用制度あり</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対応エリア</th><td className="px-3 py-2 border-b">全国(都道府県・市区別検索)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">相談窓口</th><td className="px-3 py-2 border-b">電話無料相談 0120-753-053(平日9:30〜18:30)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">securityguard-work.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：セキュリティーワーク公式サイト(securityguard-work.com)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>セキュリティーワークの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">警備職種に絞った専門検索</h3><p className="text-sm text-text-secondary leading-relaxed">施設警備・交通誘導・機械警備という警備業界の主要3業務で求人を分類しており、業務内容の違いを理解した職場選びができます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">シニア・未経験に開かれた設計</h3><p className="text-sm text-text-secondary leading-relaxed">「60歳以上活躍中」「ブランクOK」の条件検索があり、定年後の再就職やミドル・シニアの転職の受け皿になる構成です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">電話相談と会員機能</h3><p className="text-sm text-text-secondary leading-relaxed">フリーダイヤルの無料相談に加え、気になるリスト・閲覧履歴などの会員機能で複数求人を比較しながら進められます。</p></div>
        </div>

        <h2>セキュリティーワークが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>警備業界で職場を変えたい現役警備員</li>
              <li>60歳以上・定年後の再就職先を探している人</li>
              <li>未経験から警備の仕事を始めたい人(履歴書不要求人の例も)</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>警備以外の職種も含めて探したい人 →総合型サービスへ</li>
              <li>管制・営業などの警備会社内勤職 →求人有無を電話相談で確認を</li>
            </ul>
          </div>
        </div>

        <h2>セキュリティーワーク よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>セキュリティーワークは、警備員に特化した全国対応の求人・転職サイトです。業務内容別・条件別の検索とシニアへの開かれた設計が特徴で、利用は無料。警備業界内での転職・定年後の再就職の起点として使いやすいサービスです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職サービス解説一覧
            </Link>
            <Link href="/age/50s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              50代の転職ガイド
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
