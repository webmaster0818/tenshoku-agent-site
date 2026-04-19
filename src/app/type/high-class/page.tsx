import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ハイクラス向け転職エージェントおすすめ｜年収600万円以上のキャリアアップ",
  description:
    "ハイクラス転職におすすめのエージェントを厳選紹介。ビズリーチ、JACリクルートメント、リクルートエージェントなど、年収600万円以上のハイクラス求人に強いエージェントの特徴とスカウト活用法を解説します。",
  openGraph: {
    title: "ハイクラス向け転職エージェントおすすめ｜年収600万円以上のキャリアアップ",
    description: "年収600万円以上のハイクラス転職に強いエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "ハイクラス転職とは何ですか？", a: "一般的に年収600万円以上の求人や、管理職・経営幹部・専門職などのポジションを指します。明確な定義はありませんが、現在の年収や経験・スキルが一定水準以上の方を対象とした転職を意味します。" },
  { q: "ハイクラス転職エージェントと一般のエージェントの違いは？", a: "ハイクラスエージェントは年収の高い求人やエグゼクティブポジションに特化しており、コンサルタントの質が高い傾向にあります。企業の経営層と直接つながっている場合も多く、一般には公開されない求人を紹介してもらえます。" },
  { q: "年収600万円未満でもハイクラスエージェントを使えますか？", a: "サービスによりますが、現在の年収が600万円未満でも登録できるエージェントもあります。ただし、紹介される求人が限られる場合があるため、総合型エージェントとの併用がおすすめです。" },
  { q: "スカウト型サービスのメリットは何ですか？", a: "自分から応募する手間がなく、企業やヘッドハンターから直接オファーが届きます。自分では見つけられないポジションに出会えるほか、自分の市場価値を客観的に把握する機会にもなります。" },
  { q: "ヘッドハンターとは何ですか？", a: "ヘッドハンターは、企業から依頼を受けて優秀な人材をスカウトする専門家です。ビズリーチなどのプラットフォームに登録しており、あなたの経歴に合ったポジションを紹介してくれます。" },
  { q: "ハイクラス転職で年収交渉のポイントは？", a: "現在の年収だけでなく、市場価値やスキルに基づいた根拠ある希望額を提示することが重要です。エージェントに年収交渉を任せることで、直接交渉よりも好条件を引き出しやすくなります。" },
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

export default function HighClassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "ハイクラス" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ハイクラス向けおすすめ転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            年収600万円以上のハイクラス転職では、専門性の高いエージェントの活用が成功のカギです。
            管理職・経営幹部・専門職など、ハイクラス求人に強いエージェントを厳選し、
            スカウト活用法や年収交渉のポイントを解説します。
          </p>
        </div>

        {/* ハイクラス転職の定義 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "対象年収", value: "600万円以上" },
            { label: "主なポジション", value: "管理職・幹部" },
            { label: "主な手法", value: "スカウト型" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* おすすめランキング */}
        <h2>ハイクラスにおすすめの転職エージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "ビズリーチ",
              desc: "ハイクラス転職の代名詞とも言えるスカウト型サービス。年収600万円以上の求人に特化し、企業やヘッドハンターから直接オファーが届きます。",
              href: "/review/bizreach/",
            },
            {
              rank: 2,
              name: "JACリクルートメント",
              desc: "ハイクラス・外資系に特化し、コンサルタントの質の高さに定評。一気通貫型のサポートで企業の内部情報も把握できます。",
              href: "/review/jac/",
            },
            {
              rank: 3,
              name: "リクルートエージェント",
              desc: "業界最大級の求人数を活かし、ハイクラスポジションも幅広くカバー。管理職・幹部候補の求人も多数保有しています。",
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

        {/* ハイクラス転職とは */}
        <h2>ハイクラス転職とは</h2>
        <p>
          ハイクラス転職とは、一般的に年収600万円以上の求人や、管理職・経営幹部・高度な専門職のポジションへの転職を指します。
          ハイクラス向けの求人は、一般の転職サイトには掲載されない非公開求人や、
          エグゼクティブサーチによる独占案件が多いのが特徴です。
        </p>
        <p>
          そのため、ハイクラス転職では専門のエージェントやスカウト型サービスの活用が非常に重要です。
          自分のスキルや経験を適切にアピールし、市場価値に見合った好条件のポジションを見つけましょう。
        </p>

        {/* スカウト活用法 */}
        <h2>スカウト活用法</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "職務経歴書を充実させる", desc: "スカウトの質と量は職務経歴書の内容で決まります。実績を具体的な数字で記載し、専門スキルやマネジメント経験を明確にアピールしましょう。" },
            { step: 2, title: "複数のスカウト型サービスに登録する", desc: "ビズリーチなどのスカウト型サービスに登録し、幅広いスカウトを受けましょう。サービスごとに届くスカウトの種類が異なるため、比較検討が可能です。" },
            { step: 3, title: "スカウトの質を見極める", desc: "一括送信のスカウトと、あなたの経歴を読んだ上での個別スカウトでは質が異なります。職務経歴への具体的な言及があるスカウトを優先的に検討しましょう。" },
            { step: 4, title: "ヘッドハンターとの関係を築く", desc: "信頼できるヘッドハンターを見つけたら、長期的な関係を築きましょう。すぐに転職しなくても、キャリア相談を通じて良い求人が出た際に声をかけてもらえます。" },
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

        {/* ハイクラス転職のメリデメ */}
        <h2>ハイクラスエージェントのメリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "年収600万円以上の好条件求人に特化",
                "非公開求人・独占求人へのアクセス",
                "コンサルタントの質が高い",
                "年収交渉のサポートが手厚い",
                "経営層とのネットワークがある",
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
                "一定のスキル・経験がないと利用しにくい",
                "求人数は総合型エージェントより少ない",
                "有料プランが必要なサービスもある",
                "選考の難易度が高い求人が多い",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2>ハイクラス転職 よくある質問</h2>
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
            ハイクラス転職でキャリアの可能性を広げよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            あなたの経験とスキルに見合った好条件のポジションを見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              ビズリーチに無料登録
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のカテゴリも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/age/40s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              40代向けエージェント
            </Link>
            <Link href="/industry/consulting/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              コンサル向けエージェント
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
