import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "レバテックキャリアの評判・口コミは？「ひどい」噂の真相とIT転職での実力を徹底解説",
  description:
    "レバテックキャリアの評判・口コミを徹底調査。「ひどい」「電話がしつこい」と言われる理由と実態、IT・Webエンジニア／クリエイターに特化した強み、メリット・デメリット、向いている人をまとめました。登録は完全無料。",
  openGraph: {
    title: "レバテックキャリアの評判・口コミは？「ひどい」噂の真相とIT転職での実力を徹底解説",
    description:
      "レバテックキャリアの評判・口コミ、IT特化エージェントの実態、メリット・デメリット、向いている人を解説。",
  },
};

const faqData = [
  {
    q: "レバテックキャリアの評判は実際どうですか？「ひどい」って本当？",
    a: "「ひどい」「やばい」と検索されるのは、登録直後に電話・連絡が多い、実務経験が浅い人には紹介求人が少ない、といった声が一因です。これはIT特化エージェント共通の傾向で、面談時に連絡手段・頻度・希望条件を伝えれば改善します。一方で「IT業界に詳しいアドバイザーが多い」「技術を理解した上で提案してくれる」という肯定的な評判が多く、致命的なトラブルが多いサービスではありません。",
  },
  {
    q: "レバテックキャリアはITエンジニア転職に強いですか？",
    a: "はい。レバテックキャリアはIT・Webエンジニアとクリエイターに特化した転職エージェントで、業界知見の豊富なアドバイザーが対応します。使用言語・フレームワーク・開発工程といった技術的な要件を踏まえた求人紹介や、年収交渉のサポートが評価されています。",
  },
  {
    q: "レバテックキャリアの登録は無料ですか？",
    a: "はい、求職者の登録・利用は完全無料です（公式明記）。カウンセリング、求人紹介、書類添削、面接対策、年収交渉まですべて無料で利用できます。サービスは採用企業からの報酬で運営されています。",
  },
  {
    q: "レバテックキャリアは電話・連絡がしつこいと聞きましたが対処法は？",
    a: "登録直後は連絡が集中しやすいですが、面談やマイページで「連絡はメール中心」「連絡可能な時間帯」を指定すれば調整できます。IT特化エージェントは提案スピードを重視する傾向があるため、希望を最初に伝えておくとスムーズです。",
  },
  {
    q: "実務経験がない未経験でもレバテックキャリアは使えますか？",
    a: "レバテックキャリアは実務経験のあるエンジニア・クリエイター向けの求人が中心のため、未経験からのIT転職には紹介求人が限られる場合があります。未経験・第二新卒の場合は総合型エージェントの併用が現実的です。まずは自分の市場価値を知る目的で相談してみるのも有効です。",
  },
  {
    q: "レバテックキャリアはどんな地域に対応していますか？",
    a: "全国に対応しています。求人はエリアにより差があり、首都圏・関西・東海・福岡などの都市部で求人が多い傾向です。リモート案件を扱う企業も増えているため、地方在住でも相談する価値があります。",
  },
  {
    q: "レバテックキャリアはどんな人に向いていますか？",
    a: "IT・Web業界で実務経験があり、技術を理解したアドバイザーの支援を受けたいエンジニア・クリエイターに向いています。年収アップやキャリアアップを狙う方、専門性の高い提案を求める方に特に適しています。",
  },
  {
    q: "レバテックキャリアとレバテックフリーランスの違いは何ですか？",
    a: "レバテックキャリアは正社員転職を支援するサービス、レバテックフリーランスはフリーランスエンジニア向けに案件を紹介するサービスです。同じレバテック株式会社が運営しており、働き方に合わせて使い分けられます。",
  },
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

export default function LevtechReview() {
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
          { name: "レバテックキャリアの評判・口コミ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center rounded-full bg-teal/10 text-teal text-xs font-bold px-3 py-1 whitespace-nowrap">IT特化</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              レバテックキャリアの評判・口コミは？「ひどい」噂の真相を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            レバテックキャリアは、レバテック株式会社が運営するIT・Webエンジニア／クリエイターに特化した転職エージェントです。
            技術に精通したアドバイザーが多く、使用言語や開発工程まで踏まえた求人紹介が受けられるのが最大の特徴です。
            この記事では、レバテックキャリアの評判・口コミの傾向、「ひどい」「やばい」と言われる理由の実態、
            メリット・デメリット、向いている人を整理します。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「ひどい」の正体は連絡量の多さと、経験の浅い人へのミスマッチ</strong>。IT特化エージェント共通の傾向で、希望条件・連絡方法を最初に伝えれば改善できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>技術を理解したアドバイザーによる提案力</strong>が他社にない強み。IT・Web業界で経験を活かして年収アップ・キャリアアップを狙う人に向きます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録・利用は完全無料</strong>。実務経験があるエンジニア／クリエイターなら、まず市場価値を知る目的でも相談する価値があります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>求人網羅性の高い<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や一体型の<Link href="/review/doda/" className="text-teal underline">doda</Link>と<strong>併用</strong>すると、IT専門性と選択肢の広さを両立できます。</span>
            </li>
          </ul>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "専門領域", value: "IT・Web" },
            { label: "サービス形態", value: "特化型" },
            { label: "対応エリア", value: "全国" },
            { label: "対象", value: "経験者" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>レバテックキャリアの基本データ【2026年6月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">レバテック株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス形態</th><td className="px-3 py-2 border-b">IT・Webエンジニア／クリエイターに特化した転職エージェント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">IT特化型として業界最大級（具体的件数は時期で変動するため公式の最新表示を要確認）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は完全無料（公式明記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象</th><td className="px-3 py-2 border-b">実務経験のあるITエンジニア・Webクリエイターが中心</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応エリア</th><td className="px-3 py-2 border-b">全国（求人数は都市部で多い傾向。リモート案件もあり）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：レバテックキャリア公式（career.levtech.jp）、レバテック株式会社会社概要、2026年6月確認。求人数は時期により変動するため、最新値は公式の表示をご確認ください（要確認）。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* 評判・口コミ（メイン検索意図） */}
        <h2>レバテックキャリアの評判・口コミの傾向</h2>
        <p>
          「レバテックキャリア 評判」「レバテックキャリア 口コミ」で多く語られる内容を、良い評判・気になる評判に分けて整理しました。
          レバテックキャリアの評判は、<strong>アドバイザーの技術理解度</strong>と<strong>自分の経験レベルとの相性</strong>に左右されやすいのが共通見解です。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-teal mb-2">良い評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>アドバイザーがIT業界・技術に詳しく、話が早い</li>
              <li>使用言語・開発環境を踏まえた求人を紹介してくれる</li>
              <li>年収交渉・条件交渉のサポートが的確</li>
              <li>企業の内部事情や技術スタックまで詳しく教えてくれる</li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-amber-700 mb-2">気になる評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>登録直後の電話・連絡が多いと感じる場合がある</li>
              <li>実務経験が浅いと紹介求人が少ないことがある</li>
              <li>提案スピードが速く、急かされると感じる人も</li>
              <li>担当アドバイザーの当たり外れがある</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：みん評・オリコン顧客満足度ランキング等の口コミサイトに見られる評判の傾向（2026年6月確認）。具体的な口コミ件数・評点は時期で変動するため引用していません（要確認）。良し悪しは担当アドバイザーの相性や自身の経験レベルに左右されやすいのが共通見解です。</p>

        {/* ひどい・やばい噂の真相 */}
        <h2>「レバテックキャリアはひどい・やばい」と言われる理由と実態</h2>
        <p>
          「レバテックキャリア ひどい」「レバテックキャリア やばい」と検索されることがありますが、内容を分解すると、サービスそのものの危険性ではなく
          <strong>「連絡量が多い」「経験が浅いと求人が少ない」</strong>といった運用上・相性の問題が中心です。
          以下のように対処すれば、多くは解消できます。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              fear: "電話・連絡がしつこい",
              truth: "登録直後は連絡が集中しがち。面談で「連絡はメール中心」「対応可能な時間帯」を伝えれば改善します。IT特化は提案スピードが速い傾向があるため、希望を最初に共有するのがコツです。",
            },
            {
              fear: "紹介できる求人がないと言われた",
              truth: "レバテックキャリアは実務経験者向けの求人が中心のため、経験が浅い場合は紹介が限られます。未経験・第二新卒の場合は総合型エージェントの併用が現実的です。",
            },
            {
              fear: "担当者と合わない",
              truth: "相性が合わない場合は担当者の変更を申し出られます。エージェント全般に共通する対処法です。",
            },
            {
              fear: "転職を急かされる感じがする",
              truth: "転職時期が未定なら「情報収集段階」と最初に伝えればOK。まずは市場価値やキャリアの選択肢を知る相談から始めても問題ありません。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <p className="font-bold text-amber-700 mb-1 text-sm">噂：{item.fear}</p>
              <p className="text-sm text-text-secondary leading-relaxed">実態：{item.truth}</p>
            </div>
          ))}
        </div>

        {/* IT特化の強み */}
        <h2>レバテックキャリアがIT・エンジニア転職に強い理由</h2>
        <p>
          レバテックキャリア最大の特徴は、<strong>IT・Web業界に特化している</strong>点です。
          アドバイザーが技術トレンドや開発現場を理解しているため、使用言語・フレームワーク・開発工程・チーム体制といった
          エンジニアが本当に知りたい情報を踏まえた求人紹介が受けられます。総合型エージェントでは踏み込みにくい
          <strong>技術要件のマッチングや、専門性を評価した年収交渉</strong>が期待できるのが強みです。
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { title: "技術に強いアドバイザー", desc: "IT・Web業界の知見を持つアドバイザーが、技術背景を理解した上で提案してくれます。" },
            { title: "専門性を活かせる求人", desc: "エンジニア・クリエイターの経験やスキルを評価する求人が中心。年収アップも狙えます。" },
            { title: "企業情報の解像度が高い", desc: "技術スタックや開発体制など、入社後のミスマッチを防ぐ情報を得やすいのが特徴です。" },
          ].map((f) => (
            <div key={f.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* 利用の流れ */}
        <h2>レバテックキャリア 利用の流れ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "無料会員登録", desc: "公式サイトから基本情報を入力して登録。数分で完了します。実務経験やスキルを入力しておくと、その後の提案精度が上がります。" },
            { step: 2, title: "アドバイザーとのカウンセリング", desc: "電話・オンラインでのカウンセリングに対応。経歴・技術・希望条件・キャリアプランを丁寧にヒアリング。ここで連絡方法や希望を具体的に伝えると精度が上がります。" },
            { step: 3, title: "求人紹介・応募・選考", desc: "技術要件を踏まえた求人を紹介。応募書類の添削、面接対策、企業ごとの傾向共有までサポートします。" },
            { step: 4, title: "内定・年収交渉・入社", desc: "内定後の年収交渉や入社日の調整もサポート。専門性を踏まえた交渉が期待できます。" },
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
        <h2>レバテックキャリアのメリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "IT・Web業界に精通したアドバイザーが対応",
                "使用言語・開発環境を踏まえた求人紹介",
                "専門性を評価した年収交渉が期待できる",
                "企業の技術スタック・開発体制まで詳しく知れる",
                "IT特化型として業界最大級の求人を保有",
                "求職者は完全無料で利用できる",
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
                "実務経験が浅い・未経験には紹介求人が限られる",
                "IT・Web業界以外の求人は扱っていない",
                "登録直後は連絡量が多くなりがち",
                "提案スピードが速く、急かされると感じる場合も",
                "エリアによっては求人数に差がある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 向いている人・向いていない人 */}
        <h2>レバテックキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">レバテックキャリアが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>IT・Web業界で実務経験のあるエンジニア・クリエイター</li>
              <li>技術を理解したアドバイザーの支援を受けたい人</li>
              <li>専門性を活かして年収アップ・キャリアアップを狙う人</li>
              <li>入社後の技術環境・開発体制まで見極めたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>未経験からIT転職を目指す人 →<Link href="/type/it-engineer/" className="text-teal underline">ITエンジニア向けの選び方</Link>も参照</li>
              <li>IT以外も含め幅広く比較したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link></li>
              <li>自分でも求人を探しつつ支援も受けたい人 →<Link href="/review/doda/" className="text-teal underline">doda</Link></li>
              <li>20代・第二新卒で丁寧な伴走を求める人 →<Link href="/review/mynavi/" className="text-teal underline">マイナビエージェント</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは1社に絞る必要はなく、<strong>2〜3社の併用が一般的</strong>です。
          IT専門性の高いレバテックキャリアを軸に、求人網羅性の高い総合型を組み合わせると、
          技術マッチングと選択肢の広さの両方を確保できます。
        </p>

        {/* FAQ */}
        <h2>レバテックキャリア よくある質問（評判・口コミ）</h2>
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
            レバテックキャリアで転職活動を始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            IT・Web業界に精通したアドバイザーが、あなたの専門性を活かした転職をサポート。登録は完全無料です。
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
          <h3 className="font-bold text-navy mb-4">IT転職で比較・併用したいサービス</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/type/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ITエンジニア向けエージェントの選び方
            </Link>
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
