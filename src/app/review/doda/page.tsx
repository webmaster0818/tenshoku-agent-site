import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "doda（デューダ）の評判・口コミ｜転職サイト一体型の強みを徹底解説",
  description:
    "doda（デューダ）を徹底解説。パーソナルキャリアが運営する転職サイト一体型サービス。エージェント＋サイト＋スカウトの3機能を使い分けられる強みやメリット・デメリット、よくある質問をまとめました。",
  openGraph: {
    title: "doda（デューダ）の評判・口コミ｜転職サイト一体型の強みを徹底解説",
    description: "dodaの転職サイト一体型サービスの特徴を徹底レビュー。",
  },
};

const faqData = [
  { q: "dodaの登録は無料ですか？", a: "はい、dodaの登録・利用は完全無料です。転職サイト機能、エージェントサービス、スカウト機能すべて無料で利用できます。" },
  { q: "dodaの転職サイトとエージェントの違いは何ですか？", a: "転職サイトは自分で求人を検索して応募する機能です。エージェントサービスは専任のキャリアアドバイザーがつき、求人紹介から面接対策、年収交渉までサポートしてくれます。dodaでは両方を1つのアカウントで併用できます。" },
  { q: "dodaのスカウト機能とは何ですか？", a: "スカウト機能は、あなたの職務経歴書を見た企業やヘッドハンターから直接オファーが届くサービスです。自分では見つけられなかった求人に出会えるチャンスがあります。プレミアムオファーは書類選考免除の場合もあります。" },
  { q: "dodaはどんな人に向いていますか？", a: "自分でも求人を探しつつ、プロのサポートも受けたい方に最適です。特に20代〜40代の幅広い年代に対応しており、IT・Web業界への転職にも強みがあります。" },
  { q: "dodaの転職フェアとは何ですか？", a: "dodaが定期的に開催する大型転職イベントです。多数の企業ブースが出展し、人事担当者と直接話ができます。履歴書不要で参加でき、企業の雰囲気を直接感じられる貴重な機会です。" },
  { q: "dodaのエージェントサービスだけ利用することはできますか？", a: "はい、エージェントサービスのみの利用も可能です。ただし、dodaの強みは転職サイトとの一体型なので、併用することでより効率的な転職活動が可能になります。" },
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

export default function DodaReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "doda（デューダ）" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--2">2</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              doda（デューダ）の評判・特徴を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            doda（デューダ）は、パーソナルキャリア株式会社が運営する転職サービスです。
            転職サイト・エージェント・スカウトの3つの機能を1つのサービスで利用できる一体型が最大の特徴です。
            公開求人数は約25万件で、幅広い業界・職種に対応しています。
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "公開求人数", value: "約25万件" },
            { label: "サービス形態", value: "一体型" },
            { label: "対応エリア", value: "全国" },
            { label: "対応年代", value: "20代〜40代" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* dodaの3つの機能 */}
        <h2>dodaの3つの機能</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { title: "転職サイト", desc: "自分のペースで求人を検索・閲覧。気になる求人にはサイトから直接応募できます。" },
            { title: "エージェント", desc: "専任のキャリアアドバイザーが求人紹介、書類添削、面接対策、年収交渉までサポート。" },
            { title: "スカウト", desc: "職務経歴書を登録するだけで、企業やヘッドハンターから直接オファーが届きます。" },
          ].map((f) => (
            <div key={f.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* 利用の流れ */}
        <h2>doda 利用の流れ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "無料会員登録", desc: "公式サイトから基本情報を入力して登録。約3分で完了します。登録後すぐに転職サイト機能が利用可能になります。" },
            { step: 2, title: "エージェントサービスの申し込み", desc: "エージェントサービスを希望する場合は、マイページから別途申し込みます。後からでも申し込み可能です。" },
            { step: 3, title: "キャリアアドバイザーとの面談", desc: "電話・オンライン・対面から選べます。あなたの経歴、希望、キャリアプランを丁寧にヒアリング。" },
            { step: 4, title: "求人紹介・応募・選考", desc: "アドバイザーから求人を紹介されるほか、自分でもサイトから検索可能。応募書類の添削、面接対策もサポートします。" },
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
                "転職サイトとエージェントを1つで併用できる",
                "スカウト機能で自分では見つけられない求人に出会える",
                "転職フェアなど独自イベントが充実",
                "IT・Web業界の求人が豊富",
                "年収査定やキャリアタイプ診断など無料ツールが充実",
                "求人数が豊富で幅広い選択肢がある",
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
                "メールの配信量が多くなりがち",
                "ハイクラス求人は専門エージェントに比べると少なめ",
                "スカウトメールに質のばらつきがある場合も",
                "エリアによっては求人数に差がある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* こんな方におすすめ */}
        <h2>dodaはこんな方におすすめ</h2>
        <ul>
          <li>自分でも求人を探しつつ、エージェントのサポートも受けたい方</li>
          <li>スカウト機能で自分の市場価値を知りたい方</li>
          <li>IT・Web業界への転職を考えている方</li>
          <li>転職フェアやイベントに参加したい方</li>
          <li>まだ転職するか迷っている段階の方（サイト機能だけでもOK）</li>
        </ul>

        {/* FAQ */}
        <h2>doda よくある質問</h2>
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
            dodaで転職活動を始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職サイト・エージェント・スカウトの3機能で、あなたの転職をトータルサポート。登録は完全無料です。
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
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビエージェントの詳細
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
