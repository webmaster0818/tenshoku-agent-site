import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "経理Jobs(経理ジョブズ)の評判は?経理特化の転職エージェントを解説【2026年】",
  description: "経理Jobs(経理ジョブズ)は株式会社ミツカルプロフェッショナルが運営する経理特化の転職エージェント。経理・財務領域の求人紹介と転職支援を専門に扱います。特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/keiri-jobs/" },
};

const faqData = [
  {
    "q": "経理Jobsの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "未経験から経理になりたい場合も相談できますか？",
    "a": "経理特化のエージェントとして経理キャリア全般の相談に対応しています。未経験可求人の有無・応募可能性は面談時にご確認ください。"
  },
  {
    "q": "ヒュープロとの違いは何ですか？",
    "a": "ヒュープロは士業(税理士・会計士等)から管理部門全体までを広くカバーするのに対し、経理Jobsは経理・財務領域への特化を掲げています。経理職志望なら両方に登録して求人と担当者を比較するのが効率的です。"
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
          { name: "経理Jobsの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            経理Jobs(経理ジョブズ)の評判は？経理特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">経理Jobs(経理ジョブズ)は、株式会社ミツカルプロフェッショナルが運営する経理特化の転職エージェントです。経理・財務領域に対象を絞った専門特化型として、経理人材の転職支援を行っています。公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>経理領域に特化した転職エージェント</strong>。経理・財務のキャリアを専門に扱います。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>2026年開始の新しいサービス</strong>(A8プログラム開始日2026年6月・当サイト確認)。特化領域を絞った専門支援が特徴です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>利用は無料</strong>。経理のキャリアパス相談から求人紹介まで対応します。</span></li>
          </ul>
        </div>

        <h2>経理Jobs(経理ジョブズ)の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">経理Jobs(経理ジョブズ・経理特化の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ミツカルプロフェッショナル</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">経理・財務の転職</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">keiri-jobs.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：経理Jobs公式サイト(keiri-jobs.com)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>経理Jobs(経理ジョブズ)の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">経理一本に絞った専門性</h3><p className="text-sm text-text-secondary leading-relaxed">士業全般や管理部門全体を扱うサービスと異なり、経理・財務領域に対象を絞っています。経理実務のキャリアパス(月次・決算・連結・開示・マネジメント)に沿った相談がしやすい設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">経理人材の市場価値の言語化</h3><p className="text-sm text-text-secondary leading-relaxed">簿記資格・決算経験・使用会計ソフトなど、経理特有のスキルセットを前提にしたマッチングを行う特化型です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">新興特化型ならではの個別対応</h3><p className="text-sm text-text-secondary leading-relaxed">大手総合型に比べ、特化領域での個別サポートを打ち出す新しいサービスです。求人の量は総合型との併用で補完するのが現実的です。</p></div>
        </div>

        <h2>経理Jobs(経理ジョブズ)が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>経理・財務としてキャリアアップ転職したい人</li>
              <li>決算・連結・開示など専門経験を正しく評価してほしい人</li>
              <li>未経験から経理を目指すルートを相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>管理部門を幅広く見たい人 →<a href="/review/hupro/" className="text-teal underline">ヒュープロ</a>と併用を</li>
              <li>経理以外の職種も検討中の人 →総合型エージェントへ</li>
            </ul>
          </div>
        </div>

        <h2>経理Jobs(経理ジョブズ) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>経理Jobsは、経理・財務領域だけに絞った特化型転職エージェントです。経理特有のスキルセットを前提にした専門支援が特徴で、利用は無料。求人の幅はヒュープロや総合型との併用で確保しつつ、専門的な相談窓口として活用するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/hupro/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ヒュープロの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
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
