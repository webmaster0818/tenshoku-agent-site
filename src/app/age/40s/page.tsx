import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "40代におすすめの転職エージェント｜管理職・マネジメント経験を活かす",
  description:
    "40代におすすめの転職エージェントを厳選紹介。JACリクルートメント、ビズリーチ、リクルートエージェントなど、管理職・マネジメント経験を活かせるエージェントの特徴と活用法を解説します。",
  openGraph: {
    title: "40代におすすめの転職エージェント｜管理職・マネジメント経験を活かす",
    description: "40代の転職市場と管理職経験を活かせるエージェントを厳選紹介。",
  },
};

const faqData = [
  { q: "40代の転職は難しいですか？", a: "40代の転職は20代・30代と比べると求人数は限られますが、管理職経験や高い専門スキルを持つ方であれば十分にチャンスがあります。ハイクラス向けエージェントを活用することで、好条件の求人に出会える可能性が高まります。" },
  { q: "40代で年収アップは可能ですか？", a: "はい、管理職やマネジメント経験、高い専門性を持つ方であれば年収アップの可能性は十分にあります。特にエージェントを通じた年収交渉により、現年収を上回るオファーを得るケースは少なくありません。" },
  { q: "40代で未経験の業界に転職できますか？", a: "完全な異業種転職は難しくなりますが、これまでの経験やスキルが活かせる関連業界への転職は可能です。マネジメントスキルやビジネススキルは業界を超えて評価されることがあります。" },
  { q: "転職活動の期間はどのくらいかかりますか？", a: "40代の転職は3〜6ヶ月程度かかるケースが一般的です。ポジションや条件によってはさらに長期化する場合もあるため、余裕を持って活動を始めることをおすすめします。" },
  { q: "スカウト型サービスは40代に向いていますか？", a: "はい、40代はスカウト型サービスとの相性が良い年代です。豊富な経験やスキルが企業の目に留まりやすく、自分では見つけられないポジションのオファーを受けることがあります。ビズリーチなどの活用がおすすめです。" },
  { q: "転職先で適応できるか不安です。どうすればいいですか？", a: "エージェントに企業の社風や組織文化について詳しく聞きましょう。面接の段階で上司や同僚との相性を確認し、入社前の不安を軽減することが大切です。40代の経験豊富な方は適応力も高い傾向にあります。" },
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

export default function Age40sPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "年代別", href: "/" },
          { name: "40代" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            40代におすすめの転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            40代の転職では、管理職・マネジメント経験や専門スキルを最大限に活かすことが重要です。
            ハイクラス向けのエージェントを活用し、経験に見合った好条件のポジションを見つけましょう。
          </p>
        </div>

        {/* おすすめランキング */}
        <h2>40代におすすめの転職エージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "JACリクルートメント",
              desc: "ハイクラス・外資系に特化し、40代の管理職・専門職転職に強い。コンサルタントの質が高く、年収交渉のサポートも手厚いのが特徴です。",
              href: "/review/jac/",
            },
            {
              rank: 2,
              name: "ビズリーチ",
              desc: "スカウト型で40代のハイキャリア人材に企業から直接オファーが届きます。年収600万円以上のポジションが中心です。",
              href: "/review/bizreach/",
            },
            {
              rank: 3,
              name: "リクルートエージェント",
              desc: "業界最大級の求人数で、40代向けの管理職・幹部候補求人もカバー。全国対応で地方の転職にも対応しています。",
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

        {/* 40代の転職市場 */}
        <h2>40代の転職市場</h2>
        <p>
          40代の転職市場は、即戦力やマネジメント人材の需要が高まっています。
          企業が求めるのは、チームを率いた経験、業務改善の実績、業界の深い知見を持つ人材です。
          一般的な求人サイトでは見つかりにくいポジションも多いため、エージェントやスカウト型サービスの活用が効果的です。
        </p>

        {/* 管理職・マネジメント経験の活かし方 */}
        <h2>管理職・マネジメント経験の活かし方</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "マネジメント実績を具体化する", desc: "チーム人数、予算規模、達成した目標、改善した数値など、具体的なデータを整理しましょう。定量的な実績は面接で強いアピールになります。" },
            { step: 2, title: "業界を超えて通用するスキルを整理する", desc: "組織運営、人材育成、プロジェクト管理、コスト管理などのポータブルスキルを明確にし、異業界でも活かせることをアピールしましょう。" },
            { step: 3, title: "経営視点での貢献を語れるようにする", desc: "事業戦略への関与、P/L管理、新規事業立ち上げなど、経営に近い視点での経験は40代の転職で高く評価されます。" },
            { step: 4, title: "ハイクラスエージェントを活用する", desc: "管理職クラスの求人は非公開が多いため、JACリクルートメントやビズリーチなど、ハイクラスに強いエージェントの利用がおすすめです。" },
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
        <h2>40代の転職エージェント よくある質問</h2>
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
            40代の経験を活かしたキャリアアップを
          </h2>
          <p className="text-white/70 text-sm mb-6">
            管理職・専門職に強いエージェントがあなたの転職をサポートします。登録は完全無料です。
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
            <Link href="/age/30s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              30代向けエージェント
            </Link>
            <Link href="/age/50s/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              50代向けエージェント
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
