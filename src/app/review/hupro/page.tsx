import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヒュープロの評判は？士業・管理部門特化の転職エージェントを解説【2026年】",
  description: "ヒュープロ(Hupro)は士業・管理部門に特化した転職エージェント。税理士・公認会計士・社労士・弁護士から経理・財務・人事・法務まで対応し、税理士・会計業界専門求人サイトとして公開求人数No.1(公式表記)。公式情報ベースで解説します。",
  alternates: { canonical: "/review/hupro/" },
};

const faqData = [
  {
    "q": "ヒュープロの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "資格の勉強中でも利用できますか？",
    "a": "公式サイトには資格試験に関する情報コンテンツ(HUPRO MAGAZINE)が用意されています。科目合格段階などでの求人紹介可否は面談時にご確認ください。"
  },
  {
    "q": "どんな求人領域に対応していますか？",
    "a": "士業(税理士・会計士・社労士・弁護士)、管理部門(経理・財務・人事・労務・法務・知財・CFO)、M&A・FAS・コンサルティング領域の求人区分が公式サイトに用意されています(2026年8月22日確認)。"
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
          { name: "ヒュープロの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ヒュープロの評判は？士業・管理部門特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">ヒュープロは、株式会社ヒュープロが運営する士業・管理部門特化の転職エージェントです。税理士・税務スタッフ・公認会計士・社会保険労務士・弁護士といった士業から、経理・財務・人事・労務・法務・知財などの管理部門、M&A・FAS領域までをカバーします。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>士業・管理部門に特化した転職エージェント</strong>。税理士・会計士・社労士・弁護士や経理・財務・人事・法務が対象です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>税理士・会計業界専門求人サイトとして公開求人数No.1</strong>(公式サイト表記・調査概要は公式参照)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>M&A・FAS・コンサル領域の求人</strong>もカバーし、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>ヒュープロの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ヒュープロ(士業・管理部門特化型転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ヒュープロ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">税理士・税務スタッフ/公認会計士/社会保険労務士/弁護士/経理/財務/人事/労務/法務/知財/CFO/M&A・FAS/各種コンサルティング</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">税理士・会計業界専門求人サイト 公開求人数No.1(公式表記・調査概要は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">コンテンツ</th><td className="px-3 py-2 border-b">HUPRO MAGAZINE(用語解説・キャリア・資格試験情報)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">hupro-job.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ヒュープロ公式サイト(hupro-job.com)、2026年8月22日確認。No.1表記は公式サイト掲載(調査概要・調査方法の注記は公式参照)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>ヒュープロの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">士業×管理部門の広いカバー範囲</h3><p className="text-sm text-text-secondary leading-relaxed">税理士・会計士などの士業と、経理・財務・人事・法務などの管理部門を一つのサービスでカバーし、資格を活かすキャリアと事業会社キャリアを横断して比較できます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">税理士・会計業界の求人ボリューム</h3><p className="text-sm text-text-secondary leading-relaxed">税理士・会計業界専門求人サイトとして公開求人数No.1を公式に掲げており、会計事務所・税理士法人の求人を探す起点になります。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">専門メディアHUPRO MAGAZINE</h3><p className="text-sm text-text-secondary leading-relaxed">用語解説・資格試験・キャリアインタビューなど士業・管理部門特化の情報メディアを併設しており、情報収集にも使えます。</p></div>
        </div>

        <h2>ヒュープロが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>税理士・会計士・社労士など資格を活かして転職したい人</li>
              <li>経理・財務・人事・法務などの管理部門でキャリアを積みたい人</li>
              <li>会計事務所から事業会社(またはその逆)への転身を考えている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>士業・管理部門以外の職種 →総合型エージェントへ</li>
              <li>経理特化でじっくり比較したい人 →<a href="/review/keiri-jobs/" className="text-teal underline">経理Jobs</a>とも併用を</li>
            </ul>
          </div>
        </div>

        <h2>ヒュープロ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>ヒュープロは、士業と管理部門を横断してカバーする特化型エージェントです。税理士・会計業界の求人ボリュームと専門メディアの情報力が特徴で、利用は無料。士業・管理部門の転職では、領域特化型を2社併用して求人の重なりと違いを見るのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/keiri-jobs/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              経理Jobsの詳細
            </Link>
            <Link href="/industry/consulting/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              コンサル業界の転職ガイド
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
