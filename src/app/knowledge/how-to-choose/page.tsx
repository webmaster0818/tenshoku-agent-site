import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントの選び方｜失敗しない7つのポイント",
  description:
    "転職エージェントの選び方を7つのポイントで解説。求人数、得意分野、サポート体制、口コミなど、自分に合ったエージェントを見つけるための判断基準を紹介します。",
  openGraph: {
    title: "転職エージェントの選び方｜失敗しない7つのポイント",
    description: "転職エージェントの選び方を7つのポイントで解説。",
  },
};

const faqData = [
  { q: "転職エージェントは何社に登録すべきですか？", a: "2〜3社に登録するのがおすすめです。1社だけだと比較ができず、多すぎると管理が大変になります。大手総合型1〜2社＋特化型1社の組み合わせが効率的です。" },
  { q: "大手と中小のエージェントはどう使い分けるべき？", a: "大手は求人数の多さと安定したサポート体制が強み。中小・特化型は特定の業界や職種に深い知識を持つアドバイザーが在籍していることが多いです。メインで大手を使い、サブで特化型を使うのがおすすめです。" },
  { q: "担当者と合わない場合はどうすれば？", a: "担当者の変更は可能です。合わないと感じたら、遠慮せずにエージェントに申し出ましょう。多くのエージェントが担当変更に対応しています。" },
  { q: "転職エージェントの口コミは信用できますか？", a: "口コミは参考になりますが、担当者によって対応が異なるため、鵜呑みにしないことが大切です。実際に登録して面談を受け、自分で判断するのが最も確実です。" },
  { q: "ハイクラス転職向けのエージェントの見分け方は？", a: "年収600万円以上の求人の割合、スカウト機能の有無、業界別専門アドバイザーの在籍状況などを確認しましょう。ビズリーチやJACリクルートメントはハイクラス向けの代表的なサービスです。" },
  { q: "転職エージェントの登録に必要なものは？", a: "基本的には氏名、連絡先、職務経歴（簡単な内容でOK）があれば登録できます。詳細な職務経歴書は面談後に作成しても問題ありません。所要時間は5分程度です。" },
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

export default function HowToChoosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "転職知識", href: "/" },
          { name: "選び方" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントの選び方｜失敗しない7つのポイント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            数ある転職エージェントの中から、自分に合ったサービスを選ぶための7つのポイントを解説します。
            選び方を間違えると、ミスマッチな求人ばかり紹介される原因にもなります。
          </p>
        </div>

        {/* 7つのポイント */}
        <h2>転職エージェントを選ぶ7つのポイント</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "求人数の多さを確認する", desc: "求人数が多いエージェントほど、あなたの希望に合った求人が見つかる可能性が高まります。リクルートエージェント（約60万件）やdoda（約20万件以上）など、大手エージェントは圧倒的な求人数を持っています。" },
            { step: 2, title: "得意な業界・職種を確認する", desc: "エージェントによって得意分野が異なります。ITエンジニアならIT特化型、外資系ならJACリクルートメントなど、自分の希望する業界に強いエージェントを選びましょう。" },
            { step: 3, title: "対応エリアを確認する", desc: "全国対応の大手エージェントは地方の求人も保有していますが、特定地域に強い地域密着型エージェントも存在します。希望する勤務地に合わせて選びましょう。" },
            { step: 4, title: "サポート内容を比較する", desc: "書類添削、面接対策、年収交渉など、基本的なサポートはほとんどのエージェントで受けられますが、その質や手厚さはエージェントによって異なります。" },
            { step: 5, title: "対応年代や経験レベルを確認する", desc: "第二新卒向け、ミドル・シニア向け、ハイクラス向けなど、対象層が異なります。自分の年代や経験レベルに合ったエージェントを選ぶことが重要です。" },
            { step: 6, title: "複数のエージェントに登録して比較する", desc: "1社だけでは判断できないため、2〜3社に登録して面談を受けてみましょう。担当者との相性やサービスの質を実際に体験して比較することが大切です。" },
            { step: 7, title: "担当者との相性を重視する", desc: "最終的には担当のキャリアアドバイザーとの相性が転職成功の鍵を握ります。話しやすさ、提案の的確さ、レスポンスの速さなどを総合的に判断しましょう。" },
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

        {/* おすすめエージェント */}
        <h2>おすすめの転職エージェント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", feature: "求人数業界最大級・全業界対応" },
            { name: "doda", href: "/review/doda/", feature: "エージェント＋サイト一体型" },
            { name: "マイナビエージェント", href: "/review/mynavi/", feature: "20代・30代の転職に強い" },
            { name: "ビズリーチ", href: "/review/bizreach/", feature: "ハイクラス・スカウト型" },
          ].map((agent) => (
            <Link key={agent.name} href={agent.href} className="card-hover p-4 block no-underline">
              <h3 className="font-bold text-navy text-base">{agent.name}</h3>
              <p className="text-sm text-text-muted mt-1">{agent.feature}</p>
            </Link>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            自分に合ったエージェントを見つけよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            まずは大手エージェントに無料登録して、プロのサポートを体験しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent px-8 py-3">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary px-8 py-3 bg-navy-light">
              dodaの詳細
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              複数エージェントの活用法
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
