import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マイナビエージェントの評判・口コミ｜20代・第二新卒向けサポートを徹底解説",
  description:
    "マイナビエージェントを徹底解説。20代・第二新卒に強い手厚いサポートが特徴の転職エージェント。利用の流れ、メリット・デメリット、よくある質問をわかりやすくまとめました。",
  openGraph: {
    title: "マイナビエージェントの評判・口コミ｜20代・第二新卒向けサポートを徹底解説",
    description: "20代に強いマイナビエージェントの特徴を徹底レビュー。",
  },
};

const faqData = [
  { q: "マイナビエージェントの登録に費用はかかりますか？", a: "いいえ、完全無料で利用できます。登録から内定まで、費用は一切かかりません。" },
  { q: "第二新卒でも利用できますか？", a: "はい、マイナビエージェントは第二新卒の転職支援に特に力を入れています。社会人経験が浅くても、丁寧にキャリア相談に乗ってもらえます。" },
  { q: "マイナビエージェントとマイナビ転職の違いは何ですか？", a: "マイナビ転職は自分で求人を検索して応募する転職サイトです。マイナビエージェントは専任のキャリアアドバイザーがつき、求人紹介から面接対策まで一貫してサポートする転職エージェントサービスです。" },
  { q: "30代以降でも利用できますか？", a: "はい、30代の方も利用可能です。ただし、マイナビエージェントは20代〜30代前半の求人に特に強みがあります。30代後半以降のハイクラス転職には、ビズリーチやJACリクルートメントとの併用をおすすめします。" },
  { q: "面談はオンラインでも受けられますか？", a: "はい、電話面談・オンライン面談に対応しています。平日夜や土曜日の面談にも対応しているため、在職中でも利用しやすい環境が整っています。" },
  { q: "マイナビエージェントの非公開求人とは？", a: "マイナビエージェントが独自に保有している、一般には公開されていない求人です。企業が非公開で募集する理由は、競合に知られたくないケースや、重要ポジションの採用などがあります。登録することで紹介を受けられます。" },
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

export default function MynaviReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "マイナビエージェント" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--3">3</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              マイナビエージェントの評判・特徴を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            マイナビエージェントは、株式会社マイナビが運営する転職エージェントです。
            20代・第二新卒の転職支援に特に強く、手厚いサポート体制が最大の特徴です。
            非公開求人を多数保有しており、IT・メーカー・営業職の転職に定評があります。
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "非公開求人", value: "多数" },
            { label: "得意年代", value: "20代〜30代" },
            { label: "対応エリア", value: "全国" },
            { label: "サポート", value: "手厚い" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>マイナビエージェントの基本データ【2026年6月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社マイナビ（1973年設立）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は完全無料（公式明記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応年代</th><td className="px-3 py-2 border-b">20代〜30代前半が中心（第二新卒・初めての転職に強い）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">IT・エンジニア</th><td className="px-3 py-2 border-b">専門部門「マイナビ転職ITエージェント」あり。SE職で約3万件規模、3か月以内入社決定率84.6%（公式）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応エリア</th><td className="px-3 py-2 border-b">全国</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：マイナビエージェント公式（mynavi-agent.jp）、マイナビ会社概要（2026年6月21日確認）。求人数は時期により変動します。</p>

        {/* 年齢層（検索意図対応） */}
        <h2>マイナビエージェントの年齢層は？何歳まで使える？</h2>
        <p>
          マイナビエージェントの利用者ボリュームは<strong>20代〜30代前半が中心</strong>です。第二新卒・初めての転職・ポテンシャル採用への強さが最大の特徴で、書類添削や面接対策の手厚さが評価されています。
          一方で<strong>35歳以降やハイクラス（年収800万円超）の求人は相対的に少なくなる傾向</strong>があり、その場合はリクルートエージェントやdoda、ハイクラス特化（ビズリーチ・JAC）との併用がおすすめです。年齢制限の明記はありません。
        </p>

        {/* 口コミ傾向（出典付き） */}
        <h2>マイナビエージェントの評判・口コミの傾向</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-teal mb-2">良い評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>親身で丁寧なカウンセリング</li>
              <li>書類添削・面接対策が手厚い</li>
              <li>20代・第二新卒向けの求人が豊富で、ミスマッチが少ない</li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-amber-700 mb-2">気になる評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>ハイクラス・高年収の求人は相対的に少なめ</li>
              <li>求人総数はリクルート・dodaに劣る</li>
              <li>担当者の質・相性にばらつきがある／連絡が多いと感じる場合も</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：みん評・各比較メディアの口コミ傾向（2026年6月21日確認）。評価は個人の体験に基づくもので、当サイトでは口コミの創作は行っていません。</p>

        {/* マイナビエージェントの強み */}
        <h2>マイナビエージェントが20代に選ばれる理由</h2>
        <p>
          マイナビエージェントが20代・第二新卒の転職者に高い支持を受けている理由は、
          キャリアアドバイザーの丁寧なサポート体制にあります。
          転職活動が初めての方でも安心して進められるよう、一人ひとりに寄り添った対応を行っています。
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { title: "丁寧なカウンセリング", desc: "あなたの強み・適性を丁寧に分析し、最適なキャリアプランを一緒に考えてくれます。" },
            { title: "充実した書類添削", desc: "履歴書・職務経歴書の添削を何度でもサポート。書類選考の通過率を高めます。" },
            { title: "手厚い面接対策", desc: "企業ごとの面接傾向を踏まえた対策。模擬面接も実施し、本番に備えます。" },
          ].map((f) => (
            <div key={f.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* 利用の流れ */}
        <h2>マイナビエージェント 利用の流れ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "無料登録", desc: "公式サイトから約3分で登録完了。基本情報と簡単な職務経歴を入力するだけです。" },
            { step: 2, title: "キャリアアドバイザーとの面談", desc: "専任のアドバイザーが、あなたの経歴・希望・キャリアプランを丁寧にヒアリング。電話・オンラインにも対応しています。" },
            { step: 3, title: "求人紹介・書類準備", desc: "ヒアリング内容をもとに、マッチする求人を紹介。非公開求人も含めた幅広い候補の中から選べます。書類添削も徹底サポート。" },
            { step: 4, title: "面接・内定・入社", desc: "面接日程の調整、面接対策を実施。内定後の年収交渉や入社日の調整もアドバイザーが代行します。" },
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
                "20代・第二新卒向けの求人が豊富",
                "キャリアアドバイザーの対応が丁寧",
                "書類添削・面接対策のサポートが充実",
                "IT・メーカー・営業職に強い",
                "マイナビグループのネットワークを活かした独自求人がある",
                "初めての転職でも安心のサポート体制",
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
                "30代後半以降の求人は大手に比べると少なめ",
                "求人総数はリクルートエージェントやdodaに劣る",
                "ハイクラス・管理職向けの求人は少ない",
                "地方の求人は都市部と比べると限定的",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* こんな方におすすめ */}
        <h2>マイナビエージェントはこんな方におすすめ</h2>
        <ul>
          <li>20代で初めての転職を考えている方</li>
          <li>第二新卒として転職活動をしたい方</li>
          <li>手厚いサポートを受けたい方</li>
          <li>IT・メーカー・営業職への転職を考えている方</li>
          <li>書類作成や面接に不安がある方</li>
        </ul>

        {/* FAQ */}
        <h2>マイナビエージェント よくある質問</h2>
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
            マイナビエージェントで転職活動を始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            20代・第二新卒に特化した手厚いサポートで、あなたの転職を成功に導きます。登録は完全無料です。
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
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              doda（デューダ）の詳細
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
