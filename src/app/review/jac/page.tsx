import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "JACリクルートメントの評判・口コミ｜ハイクラス・外資系転職に強い理由を徹底解説",
  description:
    "JACリクルートメントを徹底解説。ハイクラス・外資系転職に特化し、コンサルタント一気通貫型のサポートが特徴。利用の流れ、メリット・デメリット、よくある質問をわかりやすくまとめました。",
  openGraph: {
    title: "JACリクルートメントの評判・口コミ｜ハイクラス・外資系転職に強い理由を徹底解説",
    description: "ハイクラス・外資系転職に強いJACリクルートメントを徹底レビュー。",
  },
};

const faqData = [
  { q: "JACリクルートメントの利用に費用はかかりますか？", a: "いいえ、JACリクルートメントの登録・利用は完全無料です。求職者に費用が発生することは一切ありません。企業からの成功報酬でサービスが運営されています。" },
  { q: "JACリクルートメントの「コンサルタント一気通貫型」とは何ですか？", a: "一般的な転職エージェントでは求職者担当と企業担当が分かれていますが、JACリクルートメントでは一人のコンサルタントが両方を担当します。これにより、企業の内部情報や選考のポイントを直接聞けるメリットがあります。" },
  { q: "20代でも利用できますか？", a: "登録は可能ですが、JACリクルートメントは30代以上のミドル・ハイクラス層をメインターゲットとしています。20代の方で管理職経験や高い専門スキルをお持ちでない場合は、紹介求人が限られる可能性があります。" },
  { q: "外資系企業の求人はどのくらいありますか？", a: "JACリクルートメントは外資系企業との強いネットワークを持っており、外資系・グローバル企業の求人を多数取り扱っています。具体的な求人数は時期により変動しますが、外資系転職に強いエージェントとして定評があります。" },
  { q: "JACリクルートメントの面談はオンラインでも可能ですか？", a: "はい、電話やオンライン（Web面談）での面談に対応しています。全国どこからでも利用可能で、海外在住の方の転職相談にも対応しています。" },
  { q: "JACリクルートメントを退会するにはどうすればいいですか？", a: "担当コンサルタントに連絡するか、マイページから退会手続きが可能です。退会後にペナルティが発生することはありません。" },
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

export default function JacReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "レビュー", href: "/" },
          { name: "JACリクルートメント" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">5</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              JACリクルートメントの評判・特徴を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            JACリクルートメントは、ハイクラス・外資系転職に特化した転職エージェントです。
            コンサルタント一気通貫型のサポート体制により、企業の内部情報や選考ポイントに精通した質の高い転職支援が受けられます。
            30代以上の管理職・専門職を中心に、年収アップやキャリアアップを目指す方に適したサービスです。
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "得意領域", value: "外資系・ハイクラス" },
            { label: "サポート形式", value: "一気通貫型" },
            { label: "対応エリア", value: "全国+海外" },
            { label: "メイン対象", value: "30代以上" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 利用の流れ */}
        <h2>JACリクルートメント 利用の流れ 4ステップ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "無料登録", desc: "公式サイトから基本情報と職務経歴を入力して登録。所要時間は約5分です。" },
            { step: 2, title: "コンサルタントとの面談", desc: "業界・職種に精通した専任コンサルタントが、キャリアの方向性や希望条件を丁寧にヒアリング。一気通貫型のため、企業側の情報も直接共有されます。" },
            { step: 3, title: "求人紹介・応募", desc: "面談内容をもとに、厳選された求人を紹介。非公開求人も多数あり、職務経歴書の添削や推薦状の作成もサポートします。" },
            { step: 4, title: "面接・内定・入社", desc: "面接対策、条件交渉、入社日調整まで一貫してサポート。入社後のフォローも行っています。" },
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
                "コンサルタントの質が高く、業界知識が豊富",
                "一気通貫型で企業の内部情報を直接聞ける",
                "外資系・グローバル企業の求人に強い",
                "ハイクラス求人が充実している",
                "年収交渉のサポートが手厚い",
                "海外転職にも対応している",
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
                "求人数は大手総合型エージェントより少ない",
                "20代・若手向けの求人は限定的",
                "年収500万円未満の求人は少ない傾向",
                "地方の求人は都市部と比べて少ない場合がある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* こんな方におすすめ */}
        <h2>JACリクルートメントはこんな方におすすめ</h2>
        <ul>
          <li>外資系企業・グローバル企業への転職を希望する方</li>
          <li>30代以上で管理職・専門職のキャリアアップを目指す方</li>
          <li>質の高いコンサルタントによる手厚いサポートを求める方</li>
          <li>年収600万円以上の求人を探している方</li>
          <li>海外での就業を視野に入れている方</li>
        </ul>

        {/* FAQ */}
        <h2>JACリクルートメント よくある質問</h2>
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
            JACリクルートメントでキャリアアップを実現しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            ハイクラス・外資系転職に精通したコンサルタントがあなたの転職を支援します。登録は完全無料です。
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
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
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
