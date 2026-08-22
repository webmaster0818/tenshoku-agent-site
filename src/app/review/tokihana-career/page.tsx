import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "トキハナキャリアの評判は？結婚・ライフステージ特化の転職支援サービスを解説【2026年】",
  description: "トキハナキャリアは株式会社トキハナが運営する、結婚やライフステージの変化に合わせた転職支援サービス。女性が活躍しやすい業界の求人に強みを持ち、土日勤務からの転換や家庭との両立転職を支援。公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/tokihana-career/" },
};

const faqData = [
  {
    "q": "トキハナキャリアの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "ブライダル業界への転職にも対応していますか？",
    "a": "トキハナキャリアはブライダル業界特化の転職エージェントとしても紹介されており(当サイト確認)、業界内転職・業界からの転身の両方の相談に対応する設計です。詳細は無料相談でご確認ください。"
  },
  {
    "q": "在職中でも相談できますか？",
    "a": "電話相談は10:00〜20:00で土日・祝日も受け付けており(2026年8月22日確認)、サービス業で平日休みの人でも相談しやすい体制です。"
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
          { name: "トキハナキャリアの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            トキハナキャリアの評判は？結婚・ライフステージ特化の転職支援サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">トキハナキャリアは、株式会社トキハナが運営する「結婚やライフステージの変化に合わせた」転職支援サービスです。「結婚後も今と同じように働けるか不安」「土日勤務が辛い」「ブランクがあるから転職できないかも」といった悩みを起点に、女性が活躍しやすい業界の求人で支援します。ブライダル業界特化の転職支援(A8プログラム紹介文)としても展開されています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>結婚・ライフステージの変化を起点にした転職支援サービス</strong>。ブライダル業界特化の転職エージェントとしても紹介されています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>女性が活躍しやすい業界に強み</strong>と公式に掲げ、土日勤務からの転換・家庭との両立転職を支援します。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>電話相談(10:00〜20:00・土日祝も受付)</strong>に対応し、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>トキハナキャリアの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">トキハナキャリア(結婚・ライフステージ変化に合わせた転職支援サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社トキハナ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">結婚・ライフステージ変化を機にした転職/ブライダル業界関連の転職</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">強み</th><td className="px-3 py-2 border-b">女性が活躍しやすい業界の求人(公式サイト記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">受付</th><td className="px-3 py-2 border-b">電話相談10:00〜20:00(土日・祝日も受付)/1分で申し込める転職相談</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">career.tokihana.co.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：トキハナキャリア公式サイト(career.tokihana.co.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>トキハナキャリアの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">ライフステージ起点の転職設計</h3><p className="text-sm text-text-secondary leading-relaxed">「結婚後も働けるか」「家庭と両立しやすい仕事に変えたい」といった人生の転機を起点にした相談を前提としており、条件面(勤務時間・休日)の見直しから入れます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">土日勤務職種からの転換支援</h3><p className="text-sm text-text-secondary leading-relaxed">ブライダル・サービス業など土日勤務の職種から、働き方を変えたい人の受け皿となる設計です。ウェディングプランナー経験者のキャリアチェンジ相談にも適しています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">土日祝も使える相談窓口</h3><p className="text-sm text-text-secondary leading-relaxed">電話相談が土日祝も受付(10:00〜20:00)のため、現職がサービス業でも相談しやすい体制です。</p></div>
        </div>

        <h2>トキハナキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>結婚・引越し等を機に働き方を見直したい人</li>
              <li>ブライダル・サービス業界から土日休みの仕事に移りたい人</li>
              <li>ブランクからの再就職に不安がある人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>時短正社員での転職が最優先の人 →<a href="/review/realme-career/" className="text-teal underline">リアルミーキャリア</a>へ</li>
              <li>キャリアアップ軸の女性 →<a href="/review/type-woman/" className="text-teal underline">type女性の転職エージェント</a>と併用を</li>
            </ul>
          </div>
        </div>

        <h2>トキハナキャリア よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>トキハナキャリアは、結婚・ライフステージの変化を起点にした転職支援サービスです。土日勤務からの転換や両立転職の相談に向いた設計で、利用は無料。時短特化のリアルミーキャリアや女性特化のtype女性と目的別に使い分けるのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/realme-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リアルミーキャリアの詳細
            </Link>
            <Link href="/review/type-woman/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              type女性の転職エージェントの詳細
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
