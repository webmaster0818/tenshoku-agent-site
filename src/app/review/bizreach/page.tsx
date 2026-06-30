import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ビズリーチの評判・口コミは？「やばい」噂の真相とメリット・デメリット",
  description:
    "ビズリーチの評判・口コミを徹底調査。「ビズリーチはやばい」と言われる理由の実態、年収600万円以上のハイクラス向けスカウト型サービスの強み、無料・有料プランの違い、メリット・デメリット、向いている人をまとめました。登録は無料。",
  openGraph: {
    title: "ビズリーチの評判・口コミは？「やばい」噂の真相とメリット・デメリット",
    description:
      "ビズリーチの評判・口コミ、スカウトの実態、無料／有料プランの違い、メリット・デメリット、向いている人を解説。",
  },
};

const faqData = [
  {
    q: "ビズリーチの評判は実際どうですか？「やばい」って本当？",
    a: "「やばい」と検索されるのは、登録後にヘッドハンターやスカウトのメールが多い、年収600万円未満だと十分なスカウトが届きにくい、有料プランの料金がかかる、といった声が一因です。これはハイクラス向けスカウト型サービスの性質によるもので、希望条件や経歴を細かく登録し、配信設定を調整すれば多くは改善します。市場価値を客観的に把握できる点や、優良企業・ヘッドハンターから直接オファーが届く点は高く評価されています。",
  },
  {
    q: "ビズリーチの利用に費用はかかりますか？料金体系は？",
    a: "登録は無料で、無料のスタンダードプランと有料のプレミアムプランがあります。スタンダードプランでも一部のスカウトの閲覧・返信が可能ですが、プレミアムプランではすべてのスカウトへの返信や求人への応募が可能になります。なお、ヘッドハンター・企業から届く「プラチナスカウト」は無料会員でも返信できます。料金や提供範囲は変更される場合があるため、最新の内容は公式サイトでご確認ください。",
  },
  {
    q: "ビズリーチのスカウトとは何ですか？",
    a: "ビズリーチに登録した職務経歴書をもとに、企業やヘッドハンターから直接オファーが届く仕組みです。自分では見つけられない求人に出会える可能性があり、市場価値の確認にも役立ちます。特に企業・ヘッドハンターが厳選して送る「プラチナスカウト」は、面接や面談につながりやすいのが特徴です。",
  },
  {
    q: "年収600万円未満でも登録できますか？",
    a: "登録自体は可能です。ただしビズリーチはハイクラス向けサービスのため、現在の年収や経歴によっては届くスカウトが少なくなる場合があります。年収600万円未満の方や手厚い伴走サポートを求める方は、リクルートエージェントやdodaなど総合型エージェントの併用がおすすめです。",
  },
  {
    q: "ビズリーチの審査基準はどのようなものですか？",
    a: "具体的な審査基準は公開されていません。一般的には、現在の年収・職務経歴・スキル・経験年数などが総合的に判断されると言われています。職務経歴書を具体的かつ充実させることで、審査通過後のスカウトの質・量も高まりやすくなります。",
  },
  {
    q: "ヘッドハンターとは何ですか？スカウトは信頼できますか？",
    a: "ビズリーチに登録している転職エージェントや人材紹介会社の担当者のことです。ヘッドハンター経由で非公開求人や独占求人の紹介を受けられます。ヘッドハンターには実績や得意領域が表示されるため、プロフィールや評価を確認したうえで返信するかを判断できます。",
  },
  {
    q: "ビズリーチは在職中でも利用できますか？現職に知られませんか？",
    a: "在職中でも利用できます。特定の企業に職務経歴を公開しない「ブロック設定」が用意されており、現職や関連企業に経歴を見られないようにできます。スカウトは自分のペースで確認・返信できるため、働きながらでも転職活動を進めやすいサービスです。",
  },
  {
    q: "ビズリーチを退会するにはどうすればいいですか？",
    a: "マイページの設定画面から退会手続きが可能です。有料プランを利用している場合は、退会前にプランの解約手続きが必要です。退会後にペナルティが発生することはありません。",
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

export default function BizreachReview() {
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
          { name: "ビズリーチの評判・口コミ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">4</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              ビズリーチの評判・口コミは？「やばい」噂の真相を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            ビズリーチは、株式会社ビズリーチが運営する、ハイクラス・エグゼクティブ層に特化したスカウト型の転職サービスです。
            年収600万円以上の求人を中心に取り扱い、企業やヘッドハンターから直接スカウトが届く仕組みが最大の特徴です。
            この記事では、ビズリーチの評判・口コミの傾向、「やばい」と言われる理由の実態、無料・有料プランの違い、
            メリット・デメリット、向いている人を整理します。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「やばい」の正体はスカウト量の多さと年収帯のミスマッチ</strong>。ハイクラス向けスカウト型の性質によるもので、希望条件・配信設定を整えれば改善できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>年収600万円以上・管理職経験がある人に最適</strong>。企業・ヘッドハンターから直接オファーが届き、自分の市場価値を客観的に把握できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録は無料</strong>。無料プランでもプラチナスカウトの返信は可能で、まずは登録して届くスカウトで市場価値を確かめるところから始められます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>手厚い伴走を求める人は、外資・グローバルに強い<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link>や求人数No.1級の<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>との<strong>併用</strong>が有効です。</span>
            </li>
          </ul>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "ターゲット年収", value: "600万円〜" },
            { label: "サービス形態", value: "スカウト型" },
            { label: "料金体系", value: "無料+有料" },
            { label: "対応年代", value: "30〜50代中心" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>ビズリーチの基本データ【2026年6月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ビズリーチ（Visionalグループ）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス形態</th><td className="px-3 py-2 border-b">ハイクラス向けスカウト型転職サービス（審査制）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">ハイクラス領域として業界最大級（具体的件数は時期で変動するため公式トップの最新表示を要確認）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">登録無料。無料のスタンダードプランと有料のプレミアムプランあり（最新の料金・提供範囲は公式を要確認）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応年代</th><td className="px-3 py-2 border-b">30代〜50代が中心。年収600万円以上のミドル〜ハイクラス層向け</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応エリア</th><td className="px-3 py-2 border-b">全国（求人数はエリアにより差あり）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ビズリーチ公式（bizreach.jp）、Visional会社概要、2026年6月確認。求人数・料金は時期により変動するため、最新値は公式サイトの表示をご確認ください（要確認）。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* 評判・口コミの傾向（メイン検索意図） */}
        <h2>ビズリーチの評判・口コミの傾向</h2>
        <p>
          「ビズリーチ 評判」「ビズリーチ 口コミ」で多く語られる内容を、良い評判・気になる評判に分けて整理しました。
          ビズリーチの評判は、<strong>自分の年収帯・経歴とサービスのターゲットが合っているか</strong>で印象が大きく変わるのが共通見解です。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-teal mb-2">良い評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>企業・ヘッドハンターから直接スカウトが届く</li>
              <li>年収600万円以上の優良・非公開求人に出会える</li>
              <li>自分の市場価値を客観的に把握できる</li>
              <li>在職中でも自分のペースで活動できる</li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-amber-700 mb-2">気になる評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>スカウトメールの量が多いと感じる場合がある</li>
              <li>年収600万円未満だとスカウトが届きにくい</li>
              <li>全機能を使うには有料プランが必要</li>
              <li>ヘッドハンターの質・対応に差がある</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：みん評・イーデス等の口コミサイトに見られる評判の傾向（2026年6月確認）。具体的な口コミ件数・評点は時期で変動するため引用していません（要確認）。印象はターゲット年収帯との適合度に左右されやすいのが共通見解です。</p>

        {/* やばい噂の真相 */}
        <h2>「ビズリーチはやばい」と言われる理由と実態</h2>
        <p>
          「ビズリーチ やばい」と検索されることがありますが、内容を分解すると、サービスそのものの危険性ではなく
          <strong>「スカウトが多い」「年収帯が合わない」「有料プランが必要」</strong>といった性質への戸惑いが中心です。
          以下のように対処すれば、多くは解消できます。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              fear: "スカウト・メールが多すぎる",
              truth: "登録直後はアクティブ層として配信が集中しがち。希望条件を絞り込み、メール配信設定を調整すれば必要なスカウトだけ受け取れます。ヘッドハンターのプロフィールを見て返信先を選ぶのもコツです。",
            },
            {
              fear: "年収が低いとスカウトが来ない",
              truth: "ビズリーチはハイクラス向けの設計です。年収600万円未満や経験が浅い場合は、総合型エージェント（リクルートエージェント・doda）と併用すると求人の取りこぼしを防げます。",
            },
            {
              fear: "有料じゃないと使えない",
              truth: "登録は無料で、無料プランでもプラチナスカウトへの返信は可能です。まず無料で届くスカウトの質を確かめ、本格活用したい場合のみ有料プランを検討すれば無駄がありません。",
            },
            {
              fear: "現職にバレないか不安",
              truth: "特定企業に経歴を非公開にできるブロック設定があります。現職や関連企業を指定しておけば、経歴を見られずに活動できます。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <p className="font-bold text-amber-700 mb-1 text-sm">噂：{item.fear}</p>
              <p className="text-sm text-text-secondary leading-relaxed">実態：{item.truth}</p>
            </div>
          ))}
        </div>

        {/* 無料・有料プランの違い */}
        <h2>ビズリーチの無料プラン・有料プランの違い</h2>
        <p>
          ビズリーチは<strong>登録無料</strong>で、無料の「スタンダードプラン」と有料の「プレミアムプラン」があります。
          無料プランでも、企業・ヘッドハンターが厳選して送る<strong>プラチナスカウトには返信できる</strong>ため、
          まずは無料登録で届くスカウトの内容から市場価値を確認するのがおすすめです。
          すべての通常スカウトへの返信や、自分から求人へ応募する機能をフル活用したい場合に有料プランが選択肢になります。
          料金や各プランの提供範囲は変更される場合があるため、最新の内容は公式サイトでご確認ください（要確認）。
        </p>

        {/* 利用の流れ */}
        <h2>ビズリーチ 利用の流れ 4ステップ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "会員登録・審査", desc: "公式サイトから基本情報と職務経歴を入力して登録。審査を経てサービス利用が可能になります。登録は無料です。" },
            { step: 2, title: "職務経歴書の充実", desc: "詳細な職務経歴書を作成することで、企業やヘッドハンターからのスカウトの質と量が向上します。経歴・スキル・実績を具体的に記載しましょう。" },
            { step: 3, title: "スカウト受信・求人検索", desc: "登録した経歴をもとに、企業やヘッドハンターからスカウトが届きます。気になる求人を自分で検索することも可能です。" },
            { step: 4, title: "面談・選考・内定", desc: "興味のあるスカウトに返信し、面談・選考に進みます。ヘッドハンター経由の場合は面接対策や条件交渉のサポートも受けられます。" },
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
        <h2>ビズリーチのメリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "年収600万円以上のハイクラス求人に特化",
                "企業やヘッドハンターから直接スカウトが届く",
                "自分の市場価値を客観的に把握できる",
                "非公開求人や独占求人にアクセスできる",
                "管理職・経営幹部クラスの求人が豊富",
                "在職中でも自分のペースで活動できる",
                "登録は無料、無料プランでもプラチナスカウトに返信可能",
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
                "全機能を使うには有料プランが必要な場合がある",
                "年収600万円未満の求人は少なめ",
                "審査制のため経歴によっては利用しにくい",
                "スカウトメールが多く届くことがある",
                "総合型と比べると伴走サポートは手薄",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 向いている人・向いていない人 */}
        <h2>ビズリーチが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">ビズリーチが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>現在の年収が600万円以上の方</li>
              <li>管理職・マネジメント経験がある方</li>
              <li>自分の市場価値を確認したい方</li>
              <li>スカウトを待ちながら在職中に活動したい方</li>
              <li>外資系・グローバル企業を狙いたい方</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>社会人経験が浅い第二新卒・20代の人 →<Link href="/review/mynavi/" className="text-teal underline">マイナビエージェント</Link></li>
              <li>とにかく求人数の網羅性を最優先する人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link></li>
              <li>外資・年収アップで手厚い伴走を求める人 →<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link></li>
              <li>手厚いサポートを受けながら進めたい人（総合型エージェントが向きます）</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは1社に絞る必要はなく、<strong>2〜3社の併用が一般的</strong>です。
          ビズリーチのスカウトで市場価値を確かめつつ、伴走サポートに強い総合型・特化型エージェントを組み合わせると、
          求人の取りこぼしとサポート不足の両方を減らせます。
        </p>

        {/* FAQ */}
        <h2>ビズリーチ よくある質問（評判・口コミ）</h2>
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
            ビズリーチでハイクラス転職を始めよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            企業・ヘッドハンターからのスカウトであなたの市場価値を確認し、キャリアアップの可能性を広げましょう。登録は無料です。
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
          <h3 className="font-bold text-navy mb-4">ビズリーチを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              JACリクルートメントの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
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
