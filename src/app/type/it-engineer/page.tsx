import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ITエンジニアにおすすめの転職エージェント5選｜年収アップ・キャリア別の選び方【2026年】",
  description:
    "ITエンジニアの転職に強い転職エージェントを厳選紹介。リクルートエージェント・doda・マイナビエージェント・ビズリーチ・JACリクルートメントのIT求人の強みと、年収アップ・キャリアチェンジを成功させる選び方を解説します。",
  openGraph: {
    title: "ITエンジニアにおすすめの転職エージェント5選｜選び方も解説【2026年】",
    description: "ITエンジニアの転職に強い転職エージェントを厳選紹介。年収アップの選び方も解説。",
  },
};

const faqData = [
  { q: "ITエンジニアは転職エージェントと特化型のどちらを使うべき？", a: "両方の併用がおすすめです。リクルートエージェントやdodaなど総合型は求人数が圧倒的に多く、幅広い選択肢が得られます。これにIT・エンジニア専門のサポートを組み合わせると、求人網羅性と専門性の両方をカバーできます。まず総合型2社に登録し、必要に応じて特化型を足すのが効率的です。" },
  { q: "未経験からITエンジニアに転職できますか？", a: "可能です。20代を中心にポテンシャル採用の求人があり、未経験歓迎のインフラ・開発職などが対象になります。ただし求人は経験者向けが中心のため、未経験の場合はポートフォリオや基礎学習の実績を用意し、未経験歓迎求人を多く持つエージェントを選ぶことが重要です。" },
  { q: "ITエンジニアの転職で年収は上がりますか？", a: "スキルと市場価値次第ですが、需要の高い言語・クラウド・上流工程の経験があれば年収アップは十分狙えます。エージェントは非公開求人や提示年収の交渉を代行してくれるため、複数社で想定年収レンジを把握してから動くのがおすすめです。" },
  { q: "ハイクラス・高年収を狙うエンジニアにおすすめは？", a: "ビズリーチやJACリクルートメントが向いています。ビズリーチは企業・ヘッドハンターからのスカウト型で、スキルの高いエンジニアに好条件のオファーが届きやすく、JACは外資・グローバル企業の高年収求人に強みがあります。" },
  { q: "在職中でも転職活動はできますか？", a: "できます。多くのエンジニアが在職中に活動しています。エージェントは面接日程の調整や企業とのやり取りを代行してくれるため、忙しい在職中でも進めやすいです。退職交渉を含めて3ヶ月程度を見ておくと安心です。" },
  { q: "転職エージェントの利用は無料ですか？", a: "はい、求職者は原則すべて無料で利用できます。エージェントは採用が決まった企業から報酬を受け取る仕組みのため、相談・求人紹介・書類添削・面接対策・年収交渉まで費用はかかりません。" },
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

export default function ItEngineerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "ITエンジニア" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ITエンジニアにおすすめの転職エージェント5選
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ITエンジニアの転職は需要が高く、スキル次第で年収アップやキャリアチェンジのチャンスが広がります。
            ここでは、IT・エンジニア求人に強い転職エージェントを厳選し、年収アップ・キャリア別の選び方とあわせて紹介します。
          </p>
        </div>

        <h2>ITエンジニアにおすすめの転職エージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "公開・非公開を合わせ業界最大級の求人数を保有し、IT・エンジニア求人も豊富。リモート案件や幅広い言語・職種をカバーでき、まず登録して選択肢を広げるのに最適です。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "転職サイトとエージェントの両機能を持ち、自分で求人を探しつつスカウトも受けられます。IT・Web系の求人が充実し、エンジニア向けの特集や年収査定も利用できます。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "20代・第二新卒のIT転職に強く、丁寧なサポートが特徴。未経験からエンジニアを目指す若手や、初めての転職に寄り添う支援を求める方に向いています。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型で、スキルの高いエンジニアに企業・ヘッドハンターから直接オファーが届きます。年収アップ・ハイクラス転職を狙うエンジニアにおすすめです。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "外資系・グローバル企業のIT求人に強み。語学力を活かしたい、高年収の上流ポジションを狙うエンジニアに向いています。" },
          ].map((agent) => (
            <div key={agent.rank} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className={`rank-badge rank-badge--${agent.rank}`}>{agent.rank}</span>
                <h3 className="font-bold text-navy text-lg">{agent.name}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-3">{agent.desc}</p>
              <Link href={agent.href} className="text-teal text-sm font-medium hover:underline">
                詳細を見る →
              </Link>
            </div>
          ))}
        </div>

        <h2>ITエンジニアがエージェントを選ぶときのポイント</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "総合型＋特化型を併用する", desc: "求人数の多い総合型（リクルート・doda）で網羅性を確保しつつ、IT専門のサポートを組み合わせると、求人の幅と専門性の両方をカバーできます。" },
            { step: 2, title: "目的で使い分ける", desc: "年収アップ・ハイクラス志向ならビズリーチやJAC、未経験・若手ならマイナビ、というように目的に合うエージェントを選びましょう。" },
            { step: 3, title: "想定年収レンジを複数社で把握する", desc: "同じスキルでも提示年収はエージェント・企業で差が出ます。2〜3社で想定レンジを把握してから交渉に臨むのが有利です。" },
            { step: 4, title: "技術スタックを具体的に伝える", desc: "使用言語・フレームワーク・クラウド・担当工程を具体的に伝えると、ミスマッチの少ない求人紹介を受けられます。" },
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

        <h2>ITエンジニアの転職エージェント よくある質問</h2>
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
            ITエンジニアの転職を成功させよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            まずは求人数の多い総合型エージェントに無料登録し、選択肢を広げましょう。
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
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/levtech/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              レバテックキャリアの評判
            </Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェント
            </Link>
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェント
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
