import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ビズリーチの評判・口コミ｜ハイクラス転職スカウト型サービスを徹底解説",
  description:
    "ビズリーチを徹底解説。年収600万円以上のハイクラス求人に特化したスカウト型転職サービス。有料プレミアムプランの特徴、利用の流れ、メリット・デメリット、よくある質問をわかりやすくまとめました。",
  openGraph: {
    title: "ビズリーチの評判・口コミ｜ハイクラス転職スカウト型サービスを徹底解説",
    description: "年収600万円以上のハイクラス転職に特化したビズリーチを徹底レビュー。",
  },
};

const faqData = [
  { q: "ビズリーチの利用に費用はかかりますか？", a: "ビズリーチには無料のスタンダードプランと有料のプレミアムプランがあります。スタンダードプランでも一部のスカウトの閲覧・返信が可能ですが、プレミアムプランではすべてのスカウトへの返信や求人への応募が可能になります。" },
  { q: "ビズリーチのスカウトとは何ですか？", a: "ビズリーチに登録した職務経歴書をもとに、企業やヘッドハンターから直接オファーが届く仕組みです。自分では見つけられない求人に出会える可能性があり、市場価値の確認にも役立ちます。" },
  { q: "年収600万円未満でも登録できますか？", a: "登録自体は可能ですが、ビズリーチはハイクラス向けサービスのため、審査制となっています。現在の年収や経歴によっては、十分なスカウトが届かない場合もあります。" },
  { q: "ビズリーチの審査基準はどのようなものですか？", a: "具体的な審査基準は公開されていませんが、一般的に現在の年収、職務経歴、スキル、経験年数などが総合的に判断されると言われています。" },
  { q: "ヘッドハンターとは何ですか？", a: "ビズリーチに登録している転職エージェントや人材紹介会社の担当者のことです。ヘッドハンターからのスカウトを通じて、非公開求人や独占求人の紹介を受けることができます。" },
  { q: "ビズリーチを退会するにはどうすればいいですか？", a: "マイページの設定画面から退会手続きが可能です。有料プランの場合は、退会前にプランの解約手続きが必要です。退会後にペナルティが発生することはありません。" },
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

export default function BizreachReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "レビュー", href: "/" },
          { name: "ビズリーチ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">4</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              ビズリーチの評判・特徴を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            ビズリーチは、ハイクラス・エグゼクティブ層に特化したスカウト型の転職サービスです。
            年収600万円以上の求人を中心に取り扱い、企業やヘッドハンターから直接スカウトが届く仕組みが特徴です。
            有料のプレミアムプランを利用することで、すべてのスカウトへの返信や求人閲覧が可能になります。
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "ターゲット年収", value: "600万円以上" },
            { label: "サービス形式", value: "スカウト型" },
            { label: "料金体系", value: "無料+有料プラン" },
            { label: "対応年代", value: "30代〜50代中心" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 利用の流れ */}
        <h2>ビズリーチ 利用の流れ 4ステップ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "会員登録・審査", desc: "公式サイトから基本情報と職務経歴を入力して登録。審査を経てサービス利用が可能になります。" },
            { step: 2, title: "職務経歴書の充実", desc: "詳細な職務経歴書を作成することで、企業やヘッドハンターからのスカウトの質と量が向上します。経歴・スキル・実績を具体的に記載しましょう。" },
            { step: 3, title: "スカウト受信・求人検索", desc: "登録した経歴をもとに、企業やヘッドハンターからスカウトが届きます。自分で求人を検索して応募することも可能です。" },
            { step: 4, title: "面談・選考・内定", desc: "興味のあるスカウトに返信し、面談・選考に進みます。ヘッドハンター経由の場合は面接対策や条件交渉のサポートも受けられます。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* メリット・デメリット */}
        <h2>メリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "年収600万円以上のハイクラス求人に特化",
                "企業やヘッドハンターから直接スカウトが届く",
                "自分の市場価値を客観的に把握できる",
                "非公開求人や独占求人にアクセスできる",
                "管理職・経営幹部クラスの求人が豊富",
                "自分のペースで転職活動を進められる",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <h3 className="font-bold text-red-500 mb-3">デメリット</h3>
            <ul className="space-y-2">
              {[
                "有料プランでないと全機能を利用できない",
                "年収600万円未満の求人は少ない",
                "審査制のため登録できない場合がある",
                "スカウトメールが多く届くことがある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 向いている人・不向きな人 */}
        <h2>ビズリーチが向いている人・不向きな人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>現在の年収が600万円以上の方</li>
              <li>管理職・マネジメント経験がある方</li>
              <li>自分の市場価値を確認したい方</li>
              <li>スカウトを待ちながら転職活動したい方</li>
              <li>外資系・グローバル企業を狙いたい方</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">不向きな人</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>社会人経験が浅い第二新卒の方</li>
              <li>年収600万円未満で転職を考えている方</li>
              <li>手厚いサポートを求める方</li>
              <li>無料で全機能を使いたい方</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2>ビズリーチ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            ビズリーチでハイクラス転職を始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            あなたの市場価値を確認し、キャリアアップの可能性を広げましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              無料で登録する（公式サイト）
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のエージェントも比較する</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
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
