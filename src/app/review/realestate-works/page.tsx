import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リアルエステートWORKSの評判は？不動産業界特化の転職エージェントを解説【2026年】",
  description: "リアルエステートWORKSは不動産業界特化の転職エージェント。転職成功者の3人に2人が上場企業へ・面倒な書類作成が一切不要(いずれも公式表記)。不動産営業からPM・BM・AM、建築・設計まで対応。公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/realestate-works/" },
};

const faqData = [
  {
    "q": "リアルエステートWORKSの利用に費用はかかりますか？",
    "a": "利用無料の転職エージェントと公式に明記されています。採用企業側が報酬を負担するモデルです。"
  },
  {
    "q": "未経験でも不動産業界に転職できますか？",
    "a": "不動産業界特化のエージェントとして、業界内転職が中心の設計です。未経験可求人の有無は面談時にご確認ください。未経験の場合は研修体制を公開している企業への直接応募(例: 恵比寿不動産)も選択肢です。"
  },
  {
    "q": "どんな流れで進みますか？",
    "a": "公式サイトには登録(30秒)→面談→書類選考→面接対策→企業面接→内定→入社の7ステップが明示されています。最短で登録から11日で内定が出た事例も公式に紹介されています(2026年8月22日確認)。"
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
          { name: "リアルエステートWORKSの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            リアルエステートWORKSの評判は？不動産業界特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">リアルエステートWORKSは、不動産業界に特化した利用無料の転職エージェントです。求人紹介から内定まで不動産業界を熟知したキャリアパートナーが一貫サポートすることを掲げ、「転職成功者の3人に2人が上場企業へ」「面倒な書類作成が一切不要」という強みを公式に表記しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>不動産業界特化の転職エージェント</strong>。不動産営業・管理(PM/BM/AM)・事務・建築設計まで対応します。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>転職成功者の3人に2人が上場企業へ</strong>(公式サイト表記)。独自資料での面接対策・書類作成不要も掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>登録30秒・7ステップの明確な支援フロー</strong>(登録→面談→書類選考→面接対策→企業面接→内定→入社)。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>リアルエステートWORKSの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">リアルエステートWORKS(不動産業界特化型転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">不動産業界の転職</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">不動産営業職/不動産管理(PM・BM・AM)/管理・事務職/建築・設計職ほか</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">転職成功者の3人に2人が上場企業へ(公式表記)/最短で登録から11日で内定の事例</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">独自資料での面接対策/書類作成が一切不要/非公開求人あり</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">realestateworks.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：リアルエステートWORKS公式サイト(realestateworks.jp)、2026年8月22日確認。実績表記は公式サイト掲載値(注記条件は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>リアルエステートWORKSの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">上場企業への転職実績の訴求</h3><p className="text-sm text-text-secondary leading-relaxed">転職成功者の3人に2人が上場企業へという実績を公式に掲げており、不動産業界内でのキャリアアップ・待遇改善を狙う人向けの設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">書類作成不要の負担軽減</h3><p className="text-sm text-text-secondary leading-relaxed">面倒な書類作成が一切不要と公式に明記。働きながらの転職活動で書類がボトルネックになる人に合う仕組みです。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">営業から管理・設計まで職種カバー</h3><p className="text-sm text-text-secondary leading-relaxed">営業職だけでなくPM・BM・AMなどの管理系、事務、建築・設計まで、不動産業界の職種を横断して扱います。</p></div>
        </div>

        <h2>リアルエステートWORKSが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>不動産業界内で上場企業・大手へステップアップしたい人</li>
              <li>書類作成の負担なく転職活動を進めたい人</li>
              <li>営業から管理系(PM等)への職種転換を考えている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>業界特化の年収アップ訴求を比較したい人 →<a href="/review/rsg-fudosan/" className="text-teal underline">RSG</a>と併用を</li>
              <li>職種検索型でじっくり選びたい人 →<a href="/review/prime-career/" className="text-teal underline">プライムキャリア</a>も比較を</li>
            </ul>
          </div>
        </div>

        <h2>リアルエステートWORKS よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>リアルエステートWORKSは、上場企業への転職実績と書類作成不要の負担軽減を掲げる不動産特化エージェントです。営業から管理系まで職種カバーが広く、利用は無料。RSG・プライムキャリアなど同業界の特化型と併用し、提案求人を比較するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/rsg-fudosan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              RSGの詳細
            </Link>
            <Link href="/review/prime-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              プライムキャリアの詳細
            </Link>
            <Link href="/company/ebisu-fudousan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              恵比寿不動産の採用解説
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
