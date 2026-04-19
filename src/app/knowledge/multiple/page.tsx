import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントの複数利用・掛け持ち｜メリデメとおすすめ組み合わせ",
  description:
    "転職エージェントを複数掛け持ちで利用するメリット・デメリット、おすすめの組み合わせ、注意点を解説。効率的に転職活動を進める方法を紹介します。",
  openGraph: {
    title: "転職エージェントの複数利用・掛け持ち｜メリデメとおすすめ組み合わせ",
    description: "転職エージェントの複数利用のメリデメとおすすめ組み合わせを解説。",
  },
};

const faqData = [
  { q: "転職エージェントを複数利用してもよいですか？", a: "はい、複数利用は一般的で、多くのエージェントも複数利用を前提としたサービスを提供しています。2〜3社の併用がおすすめです。" },
  { q: "複数利用していることは伝えるべきですか？", a: "はい、他のエージェントも利用していることを伝えましょう。同じ企業に重複応募するリスクを防げますし、担当者がより積極的にサポートしてくれる場合もあります。" },
  { q: "何社くらいが適切ですか？", a: "2〜3社が最も効率的です。4社以上になると、連絡の管理やスケジュール調整が大変になり、かえって転職活動の質が下がる可能性があります。" },
  { q: "同じ求人に複数のエージェントから応募してしまったらどうなりますか？", a: "重複応募は企業側に悪い印象を与える可能性があります。応募済みの企業を各エージェントに伝えて、重複を防ぎましょう。" },
  { q: "途中で1社に絞っても問題ないですか？", a: "はい、問題ありません。面談や求人紹介を受けた結果、自分に合わないと感じたエージェントは利用を中止して構いません。担当者に一言伝えるとよいでしょう。" },
  { q: "複数利用する場合のスケジュール管理のコツは？", a: "スプレッドシートなどで、各エージェントからの求人、応募状況、面接日程を一元管理しましょう。エージェント名、企業名、選考状況、面接日を記録しておくと混乱を防げます。" },
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

export default function MultiplePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "転職知識", href: "/" },
          { name: "複数利用・掛け持ち" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントの複数利用・掛け持ち
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントは複数利用するのが一般的です。
            メリット・デメリット、おすすめの組み合わせ、注意点を解説します。
          </p>
        </div>

        {/* メリット・デメリット */}
        <h2>複数利用のメリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "より多くの求人にアクセスできる",
                "異なる視点のアドバイスを受けられる",
                "非公開求人の幅が広がる",
                "担当者の比較ができる",
                "特定のエージェントへの依存を避けられる",
                "複数の面接対策で準備が充実する",
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
                "連絡の管理が大変になる",
                "スケジュール調整が複雑になる",
                "同じ企業への重複応募のリスク",
                "各エージェントへの対応に時間がかかる",
                "情報が多すぎて判断に迷うことがある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* おすすめ組み合わせ */}
        <h2>おすすめの組み合わせパターン</h2>
        <div className="space-y-4 mb-10">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">パターン1：幅広く求人を探したい方</h3>
            <p className="text-sm text-text-secondary">
              <strong>リクルートエージェント</strong>（求人数最大級）＋ <strong>doda</strong>（サイト機能も活用）の組み合わせ。
              両方に登録することで、公開・非公開合わせて最大級の求人にアクセスできます。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">パターン2：20代・第二新卒の方</h3>
            <p className="text-sm text-text-secondary">
              <strong>マイナビエージェント</strong>（20代の支援に強い）＋ <strong>リクルートエージェント</strong>（求人数の幅）の組み合わせ。
              若手向けのサポートと豊富な選択肢を両立できます。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">パターン3：年収アップ・キャリアアップ狙い</h3>
            <p className="text-sm text-text-secondary">
              <strong>ビズリーチ</strong>（ハイクラス・スカウト型）＋ <strong>JACリクルートメント</strong>（外資系・管理職に強い）の組み合わせ。
              高年収の求人と専門性の高いサポートを受けられます。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">パターン4：バランス重視の方</h3>
            <p className="text-sm text-text-secondary">
              <strong>リクルートエージェント</strong>＋ <strong>doda</strong>＋ <strong>マイナビエージェント</strong>の3社併用。
              大手3社の強みを組み合わせることで、求人の網羅性とサポートの質を最大化できます。
            </p>
          </div>
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
            複数のエージェントに無料登録しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            2〜3社に登録して比較することで、最適な転職活動が実現します。
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
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/compare/recruit-vs-doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェント vs doda
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
