import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リクルートエージェントの評判・口コミは？ITエンジニア転職での実力も徹底解説",
  description:
    "リクルートエージェントの評判・口コミを徹底調査。業界最大級の求人数を保有し、IT・エンジニア転職にも強い。ITでの評判の実態、利用の流れ、メリット・デメリット、よくある質問をまとめました。登録は完全無料。",
  openGraph: {
    title: "リクルートエージェントの評判・口コミは？ITエンジニア転職での実力も徹底解説",
    description: "業界最大級の求人数とIT転職での評判を徹底レビュー。",
  },
};

const faqData = [
  { q: "リクルートエージェントの評判は実際どうですか？口コミの傾向は？", a: "「圧倒的な求人数で選択肢が広い」「書類添削・面接対策が役立つ」「年収交渉がスムーズ」という良い評判が多く見られます。一方で「希望と異なる求人も紹介される」「担当者の対応にばらつきがある」「連絡が多いと感じる」という声もあります。サポート期間の目安は約3か月で、評価は担当者との相性に左右されやすいのが共通見解です。" },
  { q: "リクルートエージェントはITエンジニア転職に使えますか？ITの評判は？", a: "はい、IT専門部門「リクルートエージェントIT」を持ち、IT業界出身のアドバイザーが対応します。テック企業・SIer・社内SEまで求人が幅広く、リモート案件の多さや年収交渉のスムーズさが評価されています。一方で深い技術相談やエンジニア特化の交渉を重視するなら、レバテックキャリア等のIT特化エージェントとの併用が定石です。" },
  { q: "リクルートエージェントの登録に費用はかかりますか？", a: "いいえ、リクルートエージェントの登録・利用は完全無料です（公式明記）。求職者に費用が発生することは一切ありません。企業からの成功報酬でサービスが運営されています。" },
  { q: "リクルートエージェントの面談はオンラインでも可能ですか？", a: "はい、電話やオンライン（Web面談）での面談に対応しています。全国どこからでも利用でき、忙しい方でも気軽にキャリア相談が可能です。" },
  { q: "「電話・メールがしつこい」という評判は本当ですか？", a: "登録直後はアクティブ層として連絡が集中するため、多いと感じる場合があります。面談時に「連絡はメール中心」「連絡可能な時間帯」を伝えれば調整でき、多くは改善します。これはリクルート特有ではなく大手総合型エージェント共通の傾向です。" },
  { q: "非公開求人とは何ですか？", a: "非公開求人とは、一般の転職サイトには掲載されない求人のことです。企業が競合に採用情報を知られたくない場合や、重要ポジションの採用時に非公開で募集することがあります。リクルートエージェントでは多数の非公開求人を保有しています（件数は時期により変動、最新値は公式参照）。" },
  { q: "リクルートエージェントはどんな業界・職種に強いですか？", a: "IT・通信、メーカー、商社、金融、コンサルティング、医療、建設など、幅広い業界の求人を取り扱っています。職種も営業、エンジニア、事務、企画、管理職など多岐にわたります。" },
  { q: "転職活動にどのくらいの期間がかかりますか？", a: "一般的に登録から内定まで2〜3ヶ月程度です。ただし、希望条件や市場状況によって変動します。急ぎの場合はその旨をアドバイザーに伝えることで、スピーディに進めることも可能です。" },
  { q: "リクルートエージェントを途中で退会できますか？", a: "はい、いつでも退会可能です。退会を希望する場合は、担当アドバイザーに連絡するか、マイページから退会手続きができます。退会後にペナルティが発生することはありません。" },
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

export default function RecruitAgentReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "リクルートエージェント" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">1</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              リクルートエージェントの評判・特徴を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            リクルートエージェントは、株式会社リクルートが運営する業界最大級の転職エージェントです。
            公開・非公開を合わせた業界最大級の求人数を保有し、全国の幅広い業界・職種の転職をサポートしています。
            転職支援実績も豊富で、初めての転職から経験者のキャリアアップまで対応可能です。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求人数は業界最大級。まず登録すべき総合型の定番</strong>です。公開・非公開ともに豊富で、全年代・全国・幅広い業界をカバーします。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>IT・エンジニア転職にも強い</strong>。IT専門部門があり、リモート案件や年収交渉に定評。技術特化の相談はIT特化エージェント併用が定石です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>気になる評判は「希望と違う求人」「連絡量」「サポート約3か月」</strong>。希望条件と連絡方法を最初に伝えれば改善できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録・利用は完全無料</strong>。一体型の<Link href="/review/doda/" className="text-teal underline">doda</Link>や20代に強い<Link href="/review/mynavi/" className="text-teal underline">マイナビエージェント</Link>と併用すると取りこぼしを減らせます。</span>
            </li>
          </ul>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "求人数", value: "業界最大級" },
            { label: "サポート期間", value: "約3か月" },
            { label: "対応エリア", value: "全国" },
            { label: "対応年代", value: "全年代" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>リクルートエージェントの基本データ【2026年6月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社リクルート</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">公開 約76万件／非公開 約27万件（公式・2026年5月30日時点）＝業界最大級</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は完全無料（公式明記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応年代</th><td className="px-3 py-2 border-b">全年代対応の総合型（現スキル・経験を活かす転職に強い）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">IT・エンジニア</th><td className="px-3 py-2 border-b">専門部門「リクルートエージェントIT」あり。IT出身アドバイザーが対応・リモート案件が豊富</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：リクルートエージェント公式（r-agent.com・公開76万/非公開27万件は2026年5月30日時点表示）、2026年6月21日確認。求人数は時期により変動します。</p>

        {/* IT・口コミ（検索意図対応） */}
        <h2>リクルートエージェントはITエンジニア転職に使える？評判は？</h2>
        <p>
          リクルートエージェントはIT専門部門「<strong>リクルートエージェントIT</strong>」を持ち、IT業界出身のアドバイザーが対応します。テック企業・SIer・社内SEまで求人が幅広く、<strong>リモート案件の多さ・年収交渉のスムーズさ</strong>が高く評価されています。
          一方で「希望と異なる求人も紹介される」「サポートが定型的になる場合がある」という声もあり、深い技術相談やエンジニア特化の交渉を重視するなら、<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>等のIT特化エージェントとの併用が定石です。
        </p>
        <h2>リクルートエージェントの評判・口コミの傾向</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-teal mb-2">良い評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>圧倒的な求人数で選択肢が広い</li>
              <li>書類添削・面接対策・セミナーが役立つ</li>
              <li>年収・条件交渉がスムーズ</li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-amber-700 mb-2">気になる評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>希望と異なる求人が紹介されることがある</li>
              <li>担当者の対応にばらつき・サポート期限が約3か月</li>
              <li>「電話・メールがしつこい」と感じる人も（面談時に連絡手段・頻度を指定すれば調整可能）</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：みん評・イーデス等の口コミ傾向（2026年6月21日確認）。「電話が多い」は登録直後にアクティブ層として連絡が集中するためで、メール中心・時間帯指定の希望を伝えると改善します。当サイトでは口コミの創作は行っていません。</p>

        {/* 利用の流れ */}
        <h2>リクルートエージェント 利用の流れ 4ステップ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "無料登録", desc: "公式サイトから基本情報を入力して登録。所要時間は約5分です。転職時期が未定でも登録可能です。" },
            { step: 2, title: "キャリアアドバイザーとの面談", desc: "専任のキャリアアドバイザーが、あなたの経歴・希望条件・キャリアプランをヒアリング。電話・オンライン面談にも対応しています。" },
            { step: 3, title: "求人紹介・応募", desc: "面談内容をもとに、あなたに合った求人を紹介。非公開求人も含め、幅広い選択肢の中から応募先を決められます。履歴書・職務経歴書の添削もサポート。" },
            { step: 4, title: "面接・内定・入社", desc: "面接日程の調整、面接対策、年収交渉まで一貫サポート。入社後のフォローアップも行っています。" },
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

        {/* 得意な業界・職種 */}
        <h2>得意な業界・職種</h2>
        <p>
          リクルートエージェントは、ほぼすべての業界・職種の求人を網羅しています。
          特に以下の分野の求人数が多く、専門のアドバイザーが在籍しています。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">得意な業界</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>IT・通信業界</li>
              <li>メーカー（機械・電気・化学）</li>
              <li>商社・流通</li>
              <li>金融・保険</li>
              <li>コンサルティング</li>
              <li>医療・ヘルスケア</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">得意な職種</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>営業・セールス</li>
              <li>ITエンジニア・Webエンジニア</li>
              <li>経理・財務・人事</li>
              <li>企画・マーケティング</li>
              <li>管理職・マネージャー</li>
              <li>事務・アシスタント</li>
            </ul>
          </div>
        </div>

        {/* メリット・デメリット */}
        <h2>メリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "業界最大級の求人数で選択肢が豊富",
                "多数の非公開求人にアクセスできる",
                "全国に拠点があり、地方転職にも対応",
                "転職支援実績が豊富で安心感がある",
                "業界・職種別の専門アドバイザーが在籍",
                "書類添削・面接対策などサポートが充実",
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
                "担当者の質にばらつきがある場合がある",
                "求人数が多すぎて取捨選択が大変なことも",
                "メールや連絡の頻度が高いと感じる場合がある",
                "ハイクラス特化ではないため、年収800万円以上の求人は専門エージェントに劣る場合も",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* こんな方におすすめ */}
        <h2>リクルートエージェントはこんな方におすすめ</h2>
        <ul>
          <li>できるだけ多くの求人から比較検討したい方</li>
          <li>初めて転職エージェントを利用する方</li>
          <li>地方での転職を考えている方</li>
          <li>幅広い業界・職種を検討している方</li>
          <li>非公開求人にアクセスしたい方</li>
        </ul>

        {/* FAQ */}
        <h2>リクルートエージェント よくある質問</h2>
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
            リクルートエージェントで転職活動を始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            業界最大級の求人数であなたのキャリアの可能性を広げましょう。登録は完全無料です。
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
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              doda（デューダ）の詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビエージェントの詳細
            </Link>
            <Link href="/review/levtech/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              レバテックキャリアの詳細
            </Link>
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
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
