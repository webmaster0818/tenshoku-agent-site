import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "50代におすすめの転職エージェント｜シニア求人の探し方と成功の秘訣",
  description:
    "50代におすすめの転職エージェントを厳選紹介。JACリクルートメント、ビズリーチ、リクルートエージェントなど、シニア層の転職に強いエージェントの活用法と成功のポイントを解説します。",
  openGraph: {
    title: "50代におすすめの転職エージェント｜シニア求人の探し方と成功の秘訣",
    description: "50代のシニア転職に強いエージェントの選び方と活用法を解説。",
  },
};

const faqData = [
  { q: "50代でも転職エージェントに登録できますか？", a: "はい、多くの転職エージェントは年齢制限なく登録できます。特にハイクラス向けエージェントでは、50代の豊富な経験を持つ人材の需要があります。ただし、紹介できる求人の数は20〜30代と比較すると限られる場合があります。" },
  { q: "50代の転職で年収は下がりますか？", a: "一概には言えませんが、ポジションや条件によっては年収が維持または上がるケースもあります。特に経営幹部や高い専門性を持つ方は好条件のオファーを得ることも可能です。エージェントと相談して現実的な期待値を設定しましょう。" },
  { q: "50代の転職で求められるスキルは何ですか？", a: "マネジメント経験、業界の深い知見、人脈、経営視点、問題解決能力などが重要視されます。特に若手を育成できる能力や、組織を変革できるリーダーシップは高く評価されます。" },
  { q: "転職活動にどのくらいの期間がかかりますか？", a: "50代の転職は3〜6ヶ月以上かかることが一般的です。焦らず、現職を続けながら長期的な視点で活動することをおすすめします。エージェントと定期的に連絡を取り、新しい求人情報を逃さないようにしましょう。" },
  { q: "顧問や業務委託という選択肢もありますか？", a: "はい、50代では正社員だけでなく、顧問、業務委託、フリーランスなどの働き方も選択肢として広がっています。エージェントに希望する働き方を伝えて、多様な選択肢を検討しましょう。" },
  { q: "50代で転職に成功するコツは何ですか？", a: "謙虚さと柔軟性を持つこと、これまでの実績を具体的にアピールすること、条件に固執しすぎないこと、複数のエージェントを活用することがポイントです。また、人脈を通じた紹介も積極的に活用しましょう。" },
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

export default function Age50sPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "年代別", href: "/" },
          { name: "50代" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            50代におすすめの転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            50代の転職は、豊富な経験と実績を武器にキャリアの新たなステージを切り拓くチャンスです。
            シニア層の転職に実績のあるエージェントを活用し、あなたの経験が正当に評価される環境を見つけましょう。
          </p>
        </div>

        {/* おすすめランキング */}
        <h2>50代におすすめの転職エージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "JACリクルートメント",
              desc: "ハイクラス・外資系に特化し、経営幹部や専門職のポジションに強い。50代のキャリアを深く理解したコンサルタントが在籍しています。",
              href: "/review/jac/",
            },
            {
              rank: 2,
              name: "ビズリーチ",
              desc: "スカウト型で、経営経験や高い専門性を持つ50代に企業から直接オファーが届きます。自分の市場価値を確認する機会にもなります。",
              href: "/review/bizreach/",
            },
            {
              rank: 3,
              name: "リクルートエージェント",
              desc: "業界最大級の求人数で、50代でも応募できる求人を幅広くカバー。全国対応で地方の求人も豊富です。",
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

        {/* 50代の転職の現実 */}
        <h2>50代の転職の現実</h2>
        <p>
          50代の転職市場は、若手と比較すると求人数が限られることは事実です。
          しかし、深刻な人材不足を背景に、シニア人材を積極的に採用する企業は増加傾向にあります。
          特に経営幹部、技術顧問、事業責任者などのポジションでは、50代の豊富な経験が求められています。
        </p>
        <p>
          大切なのは、年齢をハンデと捉えるのではなく、経験値の高さを強みとしてアピールすることです。
          ハイクラスに特化したエージェントを活用し、あなたの経験が活きるポジションを効率的に探しましょう。
        </p>

        {/* シニア求人の探し方 */}
        <h2>シニア求人の効果的な探し方</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "ハイクラス向けエージェントに登録する", desc: "JACリクルートメントやビズリーチなど、ハイクラスに強いエージェントは50代向けの求人も多く保有しています。複数のエージェントに登録して情報収集しましょう。" },
            { step: 2, title: "スカウトを待つだけでなく自ら動く", desc: "職務経歴書を充実させてスカウトを待ちつつ、エージェントにも積極的に希望を伝えましょう。人脈を通じた紹介も有効な手段です。" },
            { step: 3, title: "働き方の選択肢を広げる", desc: "正社員だけでなく、顧問、業務委託、契約社員、パートタイムなど多様な働き方を検討しましょう。柔軟な姿勢が転職の可能性を広げます。" },
            { step: 4, title: "長期戦を覚悟する", desc: "50代の転職は時間がかかる傾向にあります。焦らず、現職を続けながら理想のポジションを探す姿勢が成功への近道です。" },
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
        <h2>50代の転職エージェント よくある質問</h2>
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
            50代の豊富な経験を活かした転職を
          </h2>
          <p className="text-white/70 text-sm mb-6">
            シニア転職に強いエージェントがあなたのキャリアをサポートします。登録は完全無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              JACリクルートメントに無料登録
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の年代のおすすめも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/age/40s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              40代向けエージェント
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
