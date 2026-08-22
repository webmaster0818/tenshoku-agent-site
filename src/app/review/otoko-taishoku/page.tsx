import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "男の退職代行の評判は？男性専門の退職代行サービスを解説【2026年】",
  description: "男の退職代行(労働組合toNEXTユニオン運営)は日本初を掲げる男性専門の退職代行サービス。成功率100%・男性退職代行サービス3冠(いずれも公式表記)。労働組合運営で交渉可能・即日退職対応。仕組みと注意点を公式情報ベースで解説します。",
  alternates: { canonical: "/review/otoko-taishoku/" },
};

const faqData = [
  {
    "q": "男の退職代行の料金はいくらですか？",
    "a": "雇用形態別の料金区分が公式サイトに掲載されています(2026年8月22日確認)。申し込み前に公式サイトで最新料金をご確認ください。"
  },
  {
    "q": "本当に即日で退職できますか？",
    "a": "公式サイトは即日退職への対応と成功率100%(注記条件は公式参照)を表記しています。個別の状況(雇用形態・契約内容)による対応可否は無料相談でご確認ください。"
  },
  {
    "q": "退職後の転職活動はどう進めればいいですか？",
    "a": "退職代行の利用後は、無料の転職エージェントで次の職場探しを進めるのが現実的です。20代なら第二新卒特化型、経験者なら総合型など、当サイトの各解説を参考に2〜3社併用しましょう。"
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
          { name: "男の退職代行の評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            男の退職代行の評判は？男性専門の退職代行サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">男の退職代行は、労働組合toNEXTユニオンが運営する男性専門の退職代行サービスです。「日本初！男性専門の退職代行サービス」を掲げ、成功率100%・男性退職代行サービス3冠(対応スピード・20代30代男性が選ぶ・顧客満足度)を公式に表記しています。女性向けの「わたしNEXT」と同じ労働組合の運営です。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>男性専門の退職代行サービス</strong>(日本初を公式に掲げる)。労働組合運営のため会社との交渉が可能な形態です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>成功率100%・男性退職代行サービス3冠</strong>(いずれも公式サイト表記・注記条件は公式参照)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>スマホ・LINEで24時間相談でき、即日退職に対応</strong>。姉妹サービスに女性専門の「わたしNEXT」があります。</span></li>
          </ul>
        </div>

        <h2>男の退職代行の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">男の退職代行(男性専門の退職代行サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営</th><td className="px-3 py-2 border-b">労働組合toNEXTユニオン</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">男性(女性は姉妹サービス「わたしNEXT」)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">成功率100%・男性退職代行3冠[対応スピード/20代30代男性が選ぶ/顧客満足度](公式表記・注記条件は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">即日退職対応・LINE無料相談・退職届自動作成テンプレート(アプリ)の提供</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">雇用形態別の料金区分(公式サイト参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">otoko-next.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：男の退職代行公式サイト(otoko-next.jp)、2026年8月22日確認。成功率・No.1表記は公式サイト掲載(調査注記は公式参照)。料金は公式サイトでご確認ください。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>男の退職代行の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">労働組合運営の交渉力</h3><p className="text-sm text-text-secondary leading-relaxed">団体交渉権を持つ労働組合の運営のため、退職意思の伝達に加えて退職日・有給などの条件調整を交渉できる形態です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">男性特有の退職事情に特化</h3><p className="text-sm text-text-secondary leading-relaxed">「男だから辞めづらい」「引き止めが強い」といった男性が直面しやすい状況を前提にした専門サービス設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">退職届テンプレート等の実務支援</h3><p className="text-sm text-text-secondary leading-relaxed">退職届・退職願の自動作成テンプレート(アプリ)を提供しており、書類面の実務もサポートしています。</p></div>
        </div>

        <h2>男の退職代行が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>強い引き止めにあって退職を言い出せない男性</li>
              <li>即日で職場と距離を置きたい状況の人</li>
              <li>退職条件(有給等)の調整も任せたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>女性 →姉妹サービスの<a href="/review/watashi-next/" className="text-teal underline">わたしNEXT</a>へ</li>
              <li>訴訟・損害賠償請求など法的対応が必要な人 →弁護士運営サービスへ</li>
            </ul>
          </div>
        </div>

        <h2>男の退職代行 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>男の退職代行は、労働組合運営の交渉力を持つ男性専門の退職代行サービスです。即日対応と実務支援ツールが特徴です。退職後のキャリアは無料の転職エージェントで仕切り直すのがおすすめで、20代なら第二新卒特化型が受け皿になります。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/watashi-next/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              わたしNEXTの詳細
            </Link>
            <Link href="/review/yamedoki/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              退職代行ヤメドキの詳細
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
