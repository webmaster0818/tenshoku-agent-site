import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "わたしNEXTの評判は？女性専門の退職代行サービスを解説【2026年】",
  description: "わたしNEXT(労働組合toNEXTユニオン運営)は女性専門の退職代行サービス。アルバイト・パート18,800円/正社員等29,800円(税込・公式掲載)。労働組合運営で交渉が可能。女性退職代行サービス5冠(公式表記)。公式情報ベースで解説します。",
  alternates: { canonical: "/review/watashi-next/" },
};

const faqData = [
  {
    "q": "わたしNEXTの料金はいくらですか？",
    "a": "公式サイトにはアルバイト・パート18,800円(税込)の料金が掲載されています(2026年8月22日確認)。正社員・契約・派遣・内定辞退・休職代行などの料金区分は公式サイトでご確認ください。"
  },
  {
    "q": "労働組合運営だと何が違うのですか？",
    "a": "労働組合には団体交渉権があるため、単なる退職意思の伝達だけでなく、退職日や有給消化などの条件について会社と交渉できる形態とされています。"
  },
  {
    "q": "退職後の転職はどうすればいいですか？",
    "a": "退職代行はあくまで退職までの支援です。次の職場探しは無料で使える転職エージェントを活用しましょう。女性のキャリアなら当サイトの女性向けエージェントまとめも参考にしてください。"
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
          { name: "わたしNEXTの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            わたしNEXTの評判は？女性専門の退職代行サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">わたしNEXT〈女性の退職代行〉は、労働組合toNEXTユニオンが運営する女性専門の退職代行サービスです。労働組合が運営するため会社との交渉(退職日・有給消化等の調整)が可能な形態で、「女性退職代行サービス5冠達成」を公式に表記しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>女性専門の退職代行サービス</strong>。労働組合(toNEXTユニオン)運営のため、会社との交渉が可能な形態です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>料金はアルバイト・パート18,800円(税込)〜</strong>(公式サイト掲載・正社員等の料金区分は公式参照)。業界最安値&低価格を掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>対応スピード・顧客満足度・女性が選ぶ・リピート率でNo.1等の5冠</strong>(公式サイト表記・注記条件は公式参照)。</span></li>
          </ul>
        </div>

        <h2>わたしNEXTの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">わたしNEXT〈女性の退職代行〉</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営</th><td className="px-3 py-2 border-b">労働組合toNEXTユニオン(労働組合運営=会社との交渉が可能な形態)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">女性(男性向けは姉妹サービス「男の退職代行」)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">アルバイト・パート18,800円(税込)/正社員・契約・派遣・内定辞退・休職代行など別区分(公式サイト参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">実績表記</th><td className="px-3 py-2 border-b">女性退職代行サービス5冠・口コミランキング6年連続1位(公式表記・注記条件は公式参照)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">即日退職対応・相談無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">taishoku.to-next.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：わたしNEXT公式サイト(taishoku.to-next.jp)、2026年8月22日確認。No.1・5冠等は公式サイト表記(調査注記は公式参照)。料金は変更される場合があります。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>わたしNEXTの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">労働組合運営による交渉力</h3><p className="text-sm text-text-secondary leading-relaxed">民間企業運営の退職代行は「伝達」までが限界とされる一方、労働組合運営のわたしNEXTは団体交渉権を背景に退職条件の交渉が可能な形態です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">女性専門の設計</h3><p className="text-sm text-text-secondary leading-relaxed">女性の利用を前提としたサービス設計・相談体制で、女性が選ぶNo.1等の表記(公式)を掲げています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">雇用形態別の明朗な料金</h3><p className="text-sm text-text-secondary leading-relaxed">アルバイト・パートと正社員等で料金が区分されており、公式サイトで事前に確認できます。</p></div>
        </div>

        <h2>わたしNEXTが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>自分から言い出せない状況で退職したい女性</li>
              <li>有給消化・退職日などの調整も任せたい人(組合の交渉力)</li>
              <li>退職後に転職活動を仕切り直したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>男性 →姉妹サービスの<a href="/review/otoko-taishoku/" className="text-teal underline">男の退職代行</a>へ</li>
              <li>訴訟等の法的対応が必要なケース →弁護士運営サービスへ</li>
            </ul>
          </div>
        </div>

        <h2>わたしNEXT よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>わたしNEXTは、労働組合運営の交渉力を持つ女性専門の退職代行サービスです。雇用形態別の明朗な料金と豊富な実績表記が特徴です。退職はキャリアの通過点なので、退職後はtype女性の転職エージェントやリアルミーキャリアなど無料の転職支援で次を探すのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/otoko-taishoku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              男の退職代行の詳細
            </Link>
            <Link href="/review/yamedoki/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              退職代行ヤメドキの詳細
            </Link>
            <Link href="/type/women/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              女性向けエージェントまとめ
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
