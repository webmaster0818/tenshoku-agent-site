import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "出会えるエージェント診断とは？自分に合う転職エージェントを診断するサービスを解説【2026年】",
  description: "出会えるエージェント診断(株式会社Winova運営)は、1000人以上の中からあなたに合う転職エージェント(キャリアアドバイザー)を診断・紹介するサービス。転職サポートのプロに出会える診断型マッチング。仕組みを公式情報ベースで解説します。",
  alternates: { canonical: "/review/deaeru-agent/" },
};

const faqData = [
  {
    "q": "出会えるエージェント診断の利用に費用はかかりますか？",
    "a": "無料で利用できます。紹介先エージェントの利用も求職者は無料です。"
  },
  {
    "q": "誰でも利用できますか？",
    "a": "申込画面の同意事項に、通院中でないこと・学生でないこと・リモート勤務/時短勤務希望でないことが条件として明示されています(2026年8月22日確認)。条件に合わない場合は他のサービスをご利用ください。"
  },
  {
    "q": "診断後はどうなりますか？",
    "a": "診断結果をもとに、あなたに合うとされる転職エージェント(キャリアアドバイザー)が紹介され、以降は紹介先の無料転職支援を利用する流れです。"
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
          { name: "出会えるエージェント診断の特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            出会えるエージェント診断とは？自分に合う転職エージェントを診断するサービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">出会えるエージェント診断は、株式会社Winovaが運営する診断型の転職エージェント紹介サービスです。「1000人以上の中からあなたに合うエージェントをご紹介」を掲げ、診断を通じて転職サポートのプロ(キャリアアドバイザー)とマッチングする形態です。公式情報をもとに仕組みを整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>診断型のエージェント紹介サービス</strong>。1000人以上の中から合うエージェントを紹介と公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>会社単位でなく「アドバイザー個人」との出会い</strong>を軸にした珍しい設計です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>利用は無料</strong>。利用条件(通院中でない・学生でない・リモート/時短希望でない等)が申込画面に明示されています。</span></li>
          </ul>
        </div>

        <h2>出会えるエージェント診断の基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">出会えるエージェント診断(診断型の転職エージェント紹介サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社Winova</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">形態</th><td className="px-3 py-2 border-b">診断→合う転職エージェント(キャリアアドバイザー)の紹介</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">規模表記</th><td className="px-3 py-2 border-b">1000人以上の中から紹介(公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">利用条件</th><td className="px-3 py-2 border-b">健康問題で通院中でない/学生でない/リモート勤務・時短勤務希望でない(申込画面の同意事項・2026年8月22日確認)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">deaeru-agent.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：出会えるエージェント診断公式LP(deaeru-agent.jp)、2026年8月22日確認。利用条件は申込画面の同意事項に基づく記載です。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>出会えるエージェント診断の特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">担当者個人単位のマッチング</h3><p className="text-sm text-text-secondary leading-relaxed">転職の満足度は担当アドバイザー個人の力量・相性に大きく左右されます。会社単位でなくアドバイザー単位で探すという切り口が特徴です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">診断による効率的な絞り込み</h3><p className="text-sm text-text-secondary leading-relaxed">簡単な診断で希望・状況を整理し、それに合うプロを紹介する流れのため、複数エージェントに片っ端から登録する手間を減らせます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">利用条件の事前明示</h3><p className="text-sm text-text-secondary leading-relaxed">リモート・時短希望者や学生は対象外といった条件が申込前に明示されており、ミスマッチを事前に避けられます。</p></div>
        </div>

        <h2>出会えるエージェント診断が向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>担当者の質・相性を重視してエージェントを選びたい人</li>
              <li>どのエージェントが合うか診断から入りたい人</li>
              <li>フルタイム勤務前提で転職活動できる人(利用条件に合致する人)</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>リモート勤務・時短勤務を希望する人 →利用条件対象外のため<a href="/review/realme-career/" className="text-teal underline">リアルミーキャリア</a>や<a href="/review/libz/" className="text-teal underline">LIBZ</a>へ</li>
              <li>自分で直接エージェントを選びたい人 →当サイトの比較記事で直接選択を</li>
            </ul>
          </div>
        </div>

        <h2>出会えるエージェント診断 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>出会えるエージェント診断は、アドバイザー個人との相性を軸にした診断型マッチングサービスです。担当者ガチャを避けたい人の入口として使え、無料です。利用条件(リモート・時短希望は対象外)があるため、条件に合わない人は特化型サービスを直接選びましょう。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/caricon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              キャリコンの詳細
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェント複数利用のコツ
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
