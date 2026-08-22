import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "クジラボの評判は？教員・公務員特化のキャリア支援サービスを解説【2026年】",
  description: "クジラボは教員・自治体職員・公安職・看護師・介護福祉職員向けのキャリアプログラムを提供するキャリア支援サービス。「誰かの正解より自分の納得を」を掲げ、公共系専門職のキャリアの棚卸しを支援。特徴を公式情報ベースで解説します。",
  alternates: { canonical: "/review/kujilabo/" },
};

const faqData = [
  {
    "q": "クジラボは転職エージェントですか？",
    "a": "求人紹介を主軸とする転職エージェントではなく、職種別キャリアプログラム・コーチングを提供するキャリア支援サービスです(2026年8月22日確認)。キャリアの棚卸しや進退の整理をしたい段階に向いています。"
  },
  {
    "q": "利用は無料ですか？",
    "a": "無料相談予約の導線が公式サイトにあります。プログラム自体の料金体系は公式サイト・無料相談でご確認ください。"
  },
  {
    "q": "教員以外でも利用できますか？",
    "a": "自治体職員向け・公安職員向け・看護師向け・介護福祉職員向けのプログラムが公式サイトに用意されています(2026年8月22日確認)。"
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
          { name: "クジラボの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            クジラボの評判は？教員・公務員特化のキャリア支援サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">クジラボ(株式会社クジラボ)は、教員をはじめとする公共系専門職向けのキャリア支援サービスです。教員向け・自治体職員向け・公安職員向け・看護師向け・介護福祉職員向けのキャリアプログラムを展開し、「誰かの正解より、自分の納得を。」を掲げています。一般的な転職エージェント(求人紹介型)ではなく、キャリアプログラム・コーチング型のサービスである点が特徴です。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>教員・自治体職員・公安職・看護師・介護福祉職員向けのキャリアプログラム</strong>を提供する専門サービスです。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>求人紹介型エージェントではなくキャリア支援・コーチング型</strong>。転職ありきでなくキャリアの棚卸しから始める設計です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>無料相談予約の導線あり</strong>。教員向けにはメンタルスキルプログラムも用意されています。</span></li>
          </ul>
        </div>

        <h2>クジラボの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">クジラボ(公共系専門職向けキャリア支援サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社クジラボ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象</th><td className="px-3 py-2 border-b">教員/自治体職員/公安職員/看護師/介護福祉職員</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">プログラム</th><td className="px-3 py-2 border-b">職種別キャリアプログラム/教員向けメンタルスキルプログラム/キャリアコーチングスクール</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス型</th><td className="px-3 py-2 border-b">キャリアプログラム・コーチング型(求人紹介型エージェントとは異なる)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">相談</th><td className="px-3 py-2 border-b">無料相談予約の導線あり(プログラム自体の料金体系は公式サイトで要確認)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">kujilabo.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：クジラボ公式サイト(kujilabo.jp)、2026年8月22日確認。プログラムの料金体系・内容の詳細は公式サイト・無料相談でご確認ください。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>クジラボの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">公共系専門職に特化した希少な支援</h3><p className="text-sm text-text-secondary leading-relaxed">教員・公務員・公安職など、一般の転職エージェントではキャリア相談の受け皿が少ない職種を明確な対象としています。「先生を、やめるのも、つづけるのも。」という進退両にらみの相談ができる設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">コーチング型のキャリア棚卸し</h3><p className="text-sm text-text-secondary leading-relaxed">求人を紹介して終わりではなく、キャリアコーチによるプログラム形式で自己理解・キャリアの言語化を進める構成です。卒業生の声・コーチ紹介も公式サイトで公開されています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">職種別に設計されたプログラム</h3><p className="text-sm text-text-secondary leading-relaxed">教員向け・看護師向け・介護福祉職員向けなど、職種ごとの事情(異動・資格・現場負荷)を前提にした個別プログラムが用意されています。</p></div>
        </div>

        <h2>クジラボが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>教員を続けるか辞めるか迷っている人</li>
              <li>公務員・公安職からの転身を考え始めた人</li>
              <li>看護師・介護職でキャリアの方向性を整理したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>すぐに求人を紹介してほしい人 →求人紹介型のエージェントへ</li>
              <li>民間企業間の転職 →総合型エージェントへ</li>
            </ul>
          </div>
        </div>

        <h2>クジラボ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>クジラボは、教員・公務員・看護師など公共系専門職のキャリアを専門に扱う支援サービスです。求人紹介型ではなくコーチング型のため、転職を決める前の棚卸し段階に向いています。転職の意思が固まったら、求人紹介型のエージェントと組み合わせて使うのが現実的です。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/type/women/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              女性向けエージェントまとめ
            </Link>
            <Link href="/knowledge/when-to-start/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職活動はいつ始める？
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
