import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "20代におすすめの転職エージェント｜第二新卒・若手向けランキング",
  description:
    "20代・第二新卒におすすめの転職エージェントを厳選紹介。マイナビエージェント、doda、リクルートエージェントなど、若手に強いエージェントの特徴と選び方、失敗しないポイントを解説します。",
  openGraph: {
    title: "20代におすすめの転職エージェント｜第二新卒・若手向けランキング",
    description: "20代・第二新卒向けの転職エージェントおすすめランキング。",
  },
};

const faqData = [
  { q: "20代で転職エージェントを使うメリットは何ですか？", a: "20代は未経験歓迎やポテンシャル採用の求人が多く、転職エージェントを活用することで自分では見つけられない求人に出会えます。また、初めての転職でも書類添削や面接対策などの手厚いサポートを受けられます。" },
  { q: "第二新卒とは何ですか？", a: "一般的に、新卒入社後おおむね3年以内に転職を検討する方を第二新卒と呼びます。社会人としての基礎があり、かつ柔軟性が高いため、多くの企業がポテンシャル採用として積極的に受け入れています。" },
  { q: "20代の転職に最適な時期はありますか？", a: "求人が増える1〜3月と9〜11月が一般的に転職しやすい時期と言われています。ただし、転職は個人の状況によって最適な時期が異なるため、エージェントに相談して判断することをおすすめします。" },
  { q: "転職回数が多いと不利になりますか？", a: "20代で3回以上の転職はやや多い印象を持たれることがありますが、転職理由が明確であれば大きな不利にはなりません。エージェントと一緒に転職理由の伝え方を整理しましょう。" },
  { q: "未経験の業界・職種に転職できますか？", a: "20代は未経験歓迎の求人が多く、異業界・異職種への転職がしやすい年代です。ポテンシャル採用を行う企業は多いため、エージェントに相談してチャレンジしてみましょう。" },
  { q: "複数のエージェントを併用しても大丈夫ですか？", a: "はい、複数のエージェントを併用することは一般的です。各エージェントが持つ独自の求人にアクセスでき、比較検討の幅が広がります。2〜3社の併用がおすすめです。" },
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

export default function Age20sPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "年代別", href: "/" },
          { name: "20代" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            20代におすすめの転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            20代・第二新卒の転職活動では、若手に強いエージェント選びが成功のカギです。
            未経験歓迎の求人やポテンシャル採用に力を入れているエージェントを厳選し、
            それぞれの特徴と選び方のポイントを解説します。
          </p>
        </div>

        {/* おすすめランキング */}
        <h2>20代におすすめの転職エージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "マイナビエージェント",
              desc: "20代・第二新卒の転職支援に特に力を入れており、若手向けの求人が豊富です。初めての転職でも安心できる丁寧なサポートが特徴です。",
              href: "/review/mynavi/",
            },
            {
              rank: 2,
              name: "doda",
              desc: "転職サイトとエージェントの一体型サービスで、スカウト機能も活用できます。幅広い業界の求人があり、自分のペースで転職活動を進められます。",
              href: "/review/doda/",
            },
            {
              rank: 3,
              name: "リクルートエージェント",
              desc: "業界最大級の求人数を誇り、選択肢の広さが魅力です。全国対応で地方の20代にもおすすめです。",
              href: "/review/recruit-agent/",
            },
          ].map((agent) => (
            <div key={agent.rank} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="rank-badge rank-badge--1">{agent.rank}</span>
                <h3 className="font-bold text-navy text-lg">{agent.name}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-3">{agent.desc}</p>
              <Link href={agent.href} className="text-teal text-sm font-medium hover:underline">
                詳細レビューを見る &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* 20代の転職事情 */}
        <h2>20代の転職事情</h2>
        <p>
          20代の転職市場は活況で、多くの企業が若手人材の採用に積極的です。
          特にIT・Web業界、営業職、サービス業などでは未経験歓迎の求人も多く、
          キャリアチェンジのチャンスが豊富にあります。
        </p>
        <p>
          一方で、20代前半と後半では求められるスキルや経験が異なります。
          20代前半はポテンシャル重視の採用が多いですが、20代後半になると
          一定の実務経験やスキルが求められるようになります。
        </p>

        {/* 第二新卒の活用法 */}
        <h2>第二新卒のエージェント活用法</h2>
        <div className="card-hover p-5 mb-8">
          <ul className="space-y-2">
            {[
              "「なぜ転職するのか」を明確にしてからエージェントに相談する",
              "前職での経験・学びをポジティブに伝えられるよう準備する",
              "未経験OKの求人を積極的に紹介してもらう",
              "面接対策では「短期離職の理由」の伝え方を練習する",
              "入社後のキャリアプランも一緒に考えてもらう",
            ].map((tip, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{tip}
              </li>
            ))}
          </ul>
        </div>

        {/* 失敗しないポイント */}
        <h2>20代の転職で失敗しないためのポイント</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "自己分析を徹底する", desc: "自分の強み・弱み・価値観を明確にし、どんな仕事が向いているかを理解しましょう。エージェントのキャリア面談を活用するのも効果的です。" },
            { step: 2, title: "複数のエージェントを比較する", desc: "エージェントごとに保有する求人や強みが異なります。2〜3社に登録して比較検討することで、より良い選択肢が見つかります。" },
            { step: 3, title: "年収だけで判断しない", desc: "20代では目先の年収よりも、成長できる環境やキャリアパスを重視することが長期的な年収アップにつながります。" },
            { step: 4, title: "焦らず情報を集める", desc: "転職は人生の大きな決断です。現職を続けながら情報収集し、納得できる求人が見つかってから動くことが大切です。" },
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

        {/* FAQ */}
        <h2>20代の転職エージェント よくある質問</h2>
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
            まずは無料相談から始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            20代の転職に強いエージェントに相談して、あなたに合ったキャリアを見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              マイナビエージェントに無料登録
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の年代のおすすめも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/age/30s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              30代向けエージェント
            </Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェント
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
