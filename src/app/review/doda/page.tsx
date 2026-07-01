import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "doda（デューダ）の評判・口コミは？やばい噂の真相とメリット・デメリット",
  description:
    "doda（デューダ）の評判・口コミを徹底調査。「dodaはやばい」「電話がしつこい」と言われる理由と実態、エージェント／転職サイト／スカウト一体型の強み、メリット・デメリット、向いている人をまとめました。登録は完全無料。",
  openGraph: {
    title: "doda（デューダ）の評判・口コミは？やばい噂の真相とメリット・デメリット",
    description:
      "dodaの評判・口コミ、エージェントの実態、メリット・デメリット、向いている人を実データで解説。",
  },
};

const faqData = [
  {
    q: "dodaの評判は実際どうですか？「やばい」って本当？",
    a: "「やばい」と検索されるのは、登録直後にメール・電話が多い、希望と違う求人が届くことがある、といった不満の声が一因です。これはdoda特有ではなく大手総合型エージェント共通の傾向で、面談時に連絡手段・頻度・希望条件を細かく伝えることで大きく改善します。一方で「求人数が多い」「サポートが手厚い」という肯定的な評判も多く、致命的なトラブルが多いサービスではありません。",
  },
  {
    q: "dodaエージェントの評判・口コミの傾向は？",
    a: "dodaエージェント（エージェントサービス）は、書類添削・面接対策・年収交渉まで対応してくれる点が好評です。一方でアドバイザーの質や返信スピードには当たり外れがあるという声もあります。相性が合わないと感じた場合は担当者の変更を申し出ることができます。",
  },
  {
    q: "dodaの登録は無料ですか？",
    a: "はい、求職者の登録・利用は完全無料です（公式明記）。転職サイト機能、エージェントサービス、スカウト機能のすべてを無料で利用できます。サービスは採用企業からの報酬で運営されています。",
  },
  {
    q: "dodaは電話・メールがしつこいと聞きましたが対処法は？",
    a: "登録直後は連絡が集中しやすいですが、面談やマイページで「連絡はメール中心」「連絡可能な時間帯」を指定すれば調整できます。スカウトメールの量はメール配信設定で減らせます。",
  },
  {
    q: "dodaの転職サイトとエージェントの違いは何ですか？",
    a: "転職サイトは自分で求人を検索・応募する機能、エージェントサービスは専任のキャリアアドバイザーが求人紹介から面接対策・年収交渉までサポートする機能です。dodaでは両方を1つのアカウントで併用できるのが最大の特徴です。",
  },
  {
    q: "dodaのスカウト機能とは何ですか？",
    a: "登録した職務経歴書を見た企業やヘッドハンターから直接オファーが届く機能です。書類選考なしで面接に進める「面接確約オファー」が届くこともあります。在籍企業に経歴を見られない非公開設定も可能です。",
  },
  {
    q: "dodaはどんな人に向いていますか？",
    a: "自分でも求人を探しつつプロのサポートも受けたい方に最適です。20代〜40代の幅広い年代に対応し、IT・Web業界（dodaエンジニアIT）にも強みがあります。まだ転職するか迷っている段階の方も、まずはサイト機能だけの利用から始められます。",
  },
  {
    q: "dodaのエージェントサービスだけ利用できますか？",
    a: "はい、エージェントサービスのみの利用も可能です。ただしdodaの強みは転職サイト・スカウトとの一体型なので、併用することでより効率的に転職活動を進められます。",
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

export default function DodaReview() {
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
          { name: "doda（デューダ）の評判・口コミ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--2">2</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              doda（デューダ）の評判・口コミは？「やばい」噂の真相を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            doda（デューダ）は、パーソルキャリア株式会社が運営する転職サービスです。
            転職サイト・エージェント・スカウトの3機能を1つのサービスで併用できる「一体型」が最大の特徴で、
            20代〜40代の幅広い年代に対応しています。この記事では、dodaの評判・口コミの傾向、
            「やばい」と言われる理由の実態、メリット・デメリット、向いている人を実データに基づき整理します。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「やばい」の正体は連絡量の多さと求人ミスマッチ</strong>。dodaに限らず大手総合型に共通する傾向で、希望条件・連絡方法を最初に伝えれば改善できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求人数が豊富＆サイト・エージェント・スカウトを使い分けられる</strong>のが他社にない強み。自分のペースと手厚いサポートを両立したい人に向きます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録・利用は完全無料</strong>。迷ったらまず登録し、サイト機能で求人を眺めるところから始めても損はありません。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>求人数No.1級の<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>と<strong>併用</strong>すると、求人網羅性とミスマッチ回避の両面で有利です。</span>
            </li>
          </ul>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "公開求人数", value: "豊富" },
            { label: "サービス形態", value: "一体型" },
            { label: "対応エリア", value: "全国" },
            { label: "対応年代", value: "20〜40代" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>dodaの基本データ【2026年6月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">パーソルキャリア株式会社（パーソルグループ）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス形態</th><td className="px-3 py-2 border-b">転職サイト＋エージェント＋スカウトの一体型</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">大手総合型として豊富（具体的件数は時期で変動するため公式トップの最新表示を要確認）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は完全無料（公式明記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応年代</th><td className="px-3 py-2 border-b">全年代対応。中心は20代〜30代前半。IT専門「dodaエンジニアIT」あり</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応エリア</th><td className="px-3 py-2 border-b">全国（求人数はエリアにより差あり）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：doda公式（doda.jp）、パーソルキャリア会社概要、2026年6月確認。求人数は時期により変動するため、最新値は公式トップ表示をご確認ください（要確認）。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* dodaの評判・口コミ（メイン検索意図） */}
        <h2>dodaの評判・口コミの傾向</h2>
        <p>
          「doda 評判」「doda 口コミ」で多く語られる内容を、良い評判・気になる評判に分けて整理しました。
          dodaの評判は、<strong>担当アドバイザーとの相性</strong>に左右されやすいのが共通見解です。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-teal mb-2">良い評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>求人数が多く、優良企業の求人も見つかる</li>
              <li>書類添削・面接対策・日程調整・選考後フォローが手厚い</li>
              <li>スカウト経由で思わぬ企業と出会えた</li>
              <li>年収査定・キャリアタイプ診断など無料の自己分析ツールが便利</li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-amber-700 mb-2">気になる評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>メール・電話が多すぎると感じる場合がある</li>
              <li>希望と合わない求人・重複求人の紹介</li>
              <li>アドバイザーの質・返信速度に当たり外れ</li>
              <li>スカウトメールの量が多いと感じることがある</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：みん評・イーデス等の口コミサイトに見られる評判の傾向（2026年6月確認）。具体的な口コミ件数・評点は時期で変動するため引用していません（要確認）。良し悪しは担当アドバイザーの相性に左右されやすいのが共通見解です。</p>

        {/* やばい噂の真相（検索意図 doda やばい） */}
        <h2>「dodaはやばい」と言われる理由と実態</h2>
        <p>
          「doda やばい」と検索されることがありますが、内容を分解すると、サービスそのものの危険性ではなく
          <strong>「連絡量が多い」「希望と違う求人が届く」</strong>といった運用上の不満が中心です。
          以下のように対処すれば、多くは解消できます。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              fear: "電話・メールがしつこい",
              truth: "登録直後はアクティブ層として連絡が集中しがち。面談で「連絡はメール中心」「対応可能な時間帯」を伝え、メール配信設定を調整すれば改善します。",
            },
            {
              fear: "希望と違う求人が紹介される",
              truth: "希望条件の登録が曖昧だと精度が下がります。年収・職種・勤務地・NG条件を具体的に伝えると、紹介の質が上がります。",
            },
            {
              fear: "担当者と合わない",
              truth: "相性が合わない場合は担当者の変更を申し出られます。エージェント全般に共通する対処法です。",
            },
            {
              fear: "求人を急かされる感じがする",
              truth: "転職時期が未定なら「情報収集段階」と最初に伝えればOK。サイト機能だけの利用も可能で、無理に応募する必要はありません。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <p className="font-bold text-amber-700 mb-1 text-sm">噂：{item.fear}</p>
              <p className="text-sm text-text-secondary leading-relaxed">実態：{item.truth}</p>
            </div>
          ))}
        </div>

        {/* dodaエージェントの評判（検索意図 dodaエージェント 評判 / doda エージェント 口コミ） */}
        <h2>dodaエージェントの評判は？転職サイトとの違い</h2>
        <p>
          「dodaエージェント 評判」「doda エージェント 口コミ」で気になるのは、専任のキャリアアドバイザーがつく
          <strong>エージェントサービス</strong>の質です。dodaエージェントは、求人紹介に加えて
          <strong>書類添削・面接対策・面接日程の調整・年収交渉</strong>までサポートしてくれる点が評価されています。
          自分で求人を探す転職サイト機能と違い、非公開求人の紹介やプロ視点のアドバイスを受けられるのが強みです。
        </p>
        <p>
          一方で、アドバイザーの経験・専門性・返信スピードには個人差があり、
          「対応が手厚かった」という声と「連絡が遅かった」という声の両方が見られます。
          相性が合わない場合は担当変更を申し出る、専門領域に強い他社と併用する、といった工夫で質を担保できます。
        </p>

        {/* dodaの3つの機能 */}
        <h2>dodaの3つの機能（サイト・エージェント・スカウト）</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { title: "転職サイト", desc: "自分のペースで求人を検索・閲覧。気になる求人にはサイトから直接応募できます。" },
            { title: "エージェント", desc: "専任のキャリアアドバイザーが求人紹介、書類添削、面接対策、年収交渉までサポート。" },
            { title: "スカウト", desc: "職務経歴書を登録するだけで、企業やヘッドハンターから直接オファーが届きます。面接確約オファーが届くことも。" },
          ].map((f) => (
            <div key={f.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* スカウト */}
        <h2>dodaのスカウトサービスの評判は？</h2>
        <p>
          dodaのスカウトは、登録した経歴・資格に興味を持った企業からオファーが届く仕組みで<strong>利用は無料</strong>です。
          書類選考なしで面接に進める<strong>「面接確約オファー」</strong>や、在籍企業に知られない非公開設定が特徴で、
          「待つだけで思わぬ企業と接点が持てる」と評価されています。
          一方で「的外れな求人が届く」「マッチング精度にムラがある」という声もあるため、
          希望条件を細かく登録しておくのがコツです。
        </p>

        {/* 利用の流れ */}
        <h2>doda 利用の流れ</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "無料会員登録", desc: "公式サイトから基本情報を入力して登録。約3分で完了します。登録後すぐに転職サイト機能が利用可能になります。" },
            { step: 2, title: "エージェントサービスの申し込み", desc: "エージェントサービスを希望する場合は、マイページから別途申し込みます。後からでも申し込み可能です。" },
            { step: 3, title: "キャリアアドバイザーとの面談", desc: "電話・オンライン・対面から選べます。経歴・希望・キャリアプランを丁寧にヒアリング。ここで連絡方法や希望条件を具体的に伝えると、その後の精度が上がります。" },
            { step: 4, title: "求人紹介・応募・選考", desc: "アドバイザーから求人を紹介されるほか、自分でもサイトから検索可能。応募書類の添削、面接対策、年収交渉もサポートします。" },
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
        <h2>dodaのメリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "転職サイトとエージェントを1つで併用できる",
                "スカウト機能で自分では見つけられない求人に出会える",
                "転職フェアなど独自イベントが充実",
                "IT・Web業界（dodaエンジニアIT）の求人が豊富",
                "年収査定やキャリアタイプ診断など無料ツールが充実",
                "求人数が豊富で幅広い選択肢がある",
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
                "メール・スカウトの配信量が多くなりがち",
                "ハイクラス求人は専門エージェントに比べると少なめ",
                "スカウトメールに質のばらつきがある場合も",
                "アドバイザーの質・返信速度に当たり外れがある",
                "エリアによっては求人数に差がある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 属性別 向いている人 */}
        <h2>dodaが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">dodaが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>自分でも求人を探しつつ、サポートも受けたい20〜40代</li>
              <li>IT・Web業界への転職を考えている人</li>
              <li>スカウトで自分の市場価値を知りたい人</li>
              <li>まだ転職するか迷っている情報収集段階の人</li>
              <li>転職フェアやイベントに参加したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>とにかく求人数の網羅性を最優先する人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link></li>
              <li>20代・第二新卒で丁寧な伴走を求める人 →<Link href="/review/mynavi/" className="text-teal underline">マイナビエージェント</Link></li>
              <li>年収800万円以上のハイクラス転職を狙う人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>等</li>
              <li>連絡量を最小限にしたい人（サイト型中心の利用がおすすめ）</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは1社に絞る必要はなく、<strong>2〜3社の併用が一般的</strong>です。
          dodaの一体型の使いやすさを軸に、求人網羅性の高い大手や、年代・領域に特化したサービスを組み合わせると、
          求人の取りこぼしとミスマッチの両方を減らせます。
        </p>

        {/* FAQ */}
        <h2>doda よくある質問（評判・口コミ）</h2>
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
          <h3 className="font-bold text-navy mb-4">dodaを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/compare/recruit-vs-doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェント vs doda 徹底比較
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビエージェントの詳細
            </Link>
            <Link href="/review/levtech/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              レバテックキャリアの詳細
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
