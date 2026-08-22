import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "R4CAREERの評判は？名古屋・東海3県特化の転職エージェントを解説【2026年】",
  description: "R4CAREER(アールフォーキャリア)は名古屋を拠点に東海3県(愛知・岐阜・三重)特化の転職支援を行う転職エージェント。書類合格率43.7%(公式表記)・職業紹介許可番号23-ユ-300807。特徴・向いている人を公式情報ベースで解説します。",
  alternates: { canonical: "/review/r4career/" },
};

const faqData = [
  {
    "q": "R4CAREERの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "東海エリア以外の求人もありますか？",
    "a": "公式サイトでは東海三県(愛知・岐阜・三重)に特化した求人での転職支援を明記しています(2026年8月22日確認)。他エリア希望の場合は全国系エージェントとの併用が現実的です。"
  },
  {
    "q": "県外からのUターン転職でも利用できますか？",
    "a": "電話・WEBでの登録面談を実施しているため、県外在住のままでも相談を始められます。詳細は公式サイトからのエントリー時にご確認ください。"
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
          { name: "R4CAREERの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            R4CAREERの評判は？名古屋・東海3県特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">R4CAREERは、株式会社R4CAREERが運営する名古屋拠点の転職エージェントです。東海三県(愛知・岐阜・三重)に特化した求人で転職支援を行い、「ぴったり転職」の実現を掲げています。書類合格率43.7%と公式に表記しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>名古屋を拠点に東海3県(愛知・岐阜・三重)特化</strong>の転職エージェント。地域密着の求人で支援します。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>書類合格率43.7%</strong>(公式サイト表記・2026年8月22日確認)。求人条件の提案と面接準備アドバイスを強みに掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>有料職業紹介事業許可番号(23-ユ-300807)を公式サイトで確認</strong>。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>R4CAREERの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">R4CAREER(名古屋・東海3県特化の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社R4CAREER</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対応エリア</th><td className="px-3 py-2 border-b">東海三県(愛知・岐阜・三重)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">書類合格率43.7%(公式サイト表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">23-ユ-300807</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">面談</th><td className="px-3 py-2 border-b">電話またはWEBによる登録面談を実施(公式記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">r4career.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：R4CAREER公式サイト(r4career.co.jp)、2026年8月22日確認。書類合格率は公式サイト掲載値。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>R4CAREERの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">東海3県への地域特化</h3><p className="text-sm text-text-secondary leading-relaxed">全国系エージェントと異なり、愛知・岐阜・三重の求人に絞った地域密着型です。地元企業の情報や地域の転職市場に根差した提案が期待できる設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">書類合格率の公開</h3><p className="text-sm text-text-secondary leading-relaxed">要望・状況を受け止めた求人条件の提案と面接準備アドバイスにより書類合格率43.7%を実現と公式に説明しており、選考プロセスの支援を重視しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">リモート面談対応</h3><p className="text-sm text-text-secondary leading-relaxed">電話・WEBによる登録面談を実施しており、在職中でも相談しやすい体制です。</p></div>
        </div>

        <h2>R4CAREERが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>名古屋・愛知・岐阜・三重で転職したい人</li>
              <li>Uターン・Iターンで東海エリアに移りたい人</li>
              <li>地域の転職市場に詳しい担当者に相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>東海3県以外での転職 →全国系の総合型へ</li>
              <li>大手メーカーの求人網羅性を最優先する人 →<a href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</a>等と併用を</li>
            </ul>
          </div>
        </div>

        <h2>R4CAREER よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>R4CAREERは、東海3県に絞った地域密着型の転職エージェントです。書類合格率の公開と選考支援の手厚さが特徴で、利用は無料。名古屋圏での転職では、全国系エージェントと併用して地域求人の深さと網羅性を両取りするのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/area/nagoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              名古屋の転職エージェントまとめ
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
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
