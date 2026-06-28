import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "JACリクルートメントの評判・口コミは？就職難易度とメリット・デメリットを徹底解説",
  description:
    "JACリクルートメントの評判・口コミを徹底調査。ハイクラス・外資系転職に強い理由、登録の「就職難易度」や審査の実態、コンサルタント一気通貫型の強み、メリット・デメリット、向いている人をまとめました。登録は完全無料。",
  openGraph: {
    title: "JACリクルートメントの評判・口コミは？就職難易度とメリット・デメリットを徹底解説",
    description:
      "ハイクラス・外資系転職に強いJACリクルートメントの評判・口コミ、就職難易度の実態、メリット・デメリット、向いている人を解説。",
  },
};

const faqData = [
  {
    q: "JACリクルートメントの評判は実際どうですか？",
    a: "「コンサルタントの質が高い」「企業の内部情報まで教えてくれる」といった肯定的な評判が多く見られます。一方で「30代以上・ハイクラス向けで、20代や年収が高くない求人は紹介されにくい」という声もあります。評判の良し悪しは希望条件とJACのターゲット層が合うかどうかに左右されやすいのが共通見解です。",
  },
  {
    q: "JACリクルートメントの「就職難易度」「審査」は厳しいですか？",
    a: "登録自体に学歴・年収の明確な合格ラインが公表されているわけではありません。ただしJACはミドル・ハイクラス層をメインターゲットにしているため、経歴やスキルによっては紹介できる求人が限られる場合があります。これは「審査に落ちる」というより、得意領域とのマッチングの問題です。紹介求人が少ないと感じた場合は、総合型エージェントを併用すると選択肢を広げられます。",
  },
  {
    q: "JACリクルートメントの利用に費用はかかりますか？",
    a: "いいえ、JACリクルートメントの登録・利用は完全無料です。求職者に費用が発生することは一切ありません。サービスは採用企業からの成功報酬で運営されています。",
  },
  {
    q: "JACリクルートメントの「コンサルタント一気通貫型」とは何ですか？",
    a: "一般的な転職エージェントでは求職者担当（キャリアアドバイザー）と企業担当（リクルーティングアドバイザー）が分かれていますが、JACリクルートメントでは一人のコンサルタントが両方を担当します。これにより、企業の社風・選考のポイント・求める人物像といった内部情報を直接聞ける点がメリットです。",
  },
  {
    q: "20代でもJACリクルートメントを利用できますか？",
    a: "登録は可能ですが、JACリクルートメントは30代以上のミドル・ハイクラス層をメインターゲットとしています。20代で管理職経験や高い専門スキルをお持ちでない場合は、紹介求人が限られる可能性があります。20代・第二新卒の方は、マイナビエージェントなど若手に強いサービスの併用がおすすめです。",
  },
  {
    q: "外資系企業の求人はどのくらいありますか？",
    a: "JACリクルートメントは外資系企業との強いネットワークを持ち、外資系・グローバル企業の求人を多数取り扱っています。具体的な求人数は時期により変動しますが、外資系転職に強いエージェントとして定評があります（最新の求人状況は公式サイトでご確認ください）。",
  },
  {
    q: "JACリクルートメントの面談はオンラインでも可能ですか？",
    a: "はい、電話やオンライン（Web面談）での面談に対応しています。全国どこからでも利用可能で、海外在住の方の転職相談にも対応しています。",
  },
  {
    q: "JACリクルートメントを退会するにはどうすればいいですか？",
    a: "担当コンサルタントに連絡するか、マイページから退会手続きが可能です。退会後にペナルティが発生することはありません。",
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

export default function JacReview() {
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
          { name: "JACリクルートメントの評判・口コミ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="rank-badge rank-badge--1">5</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              JACリクルートメントの評判・口コミは？就職難易度の実態を徹底解説
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed">
            JACリクルートメントは、ハイクラス・外資系転職に特化した転職エージェントです。
            一人のコンサルタントが求職者と企業の両方を担当する「一気通貫型」のサポートにより、
            企業の内部情報や選考ポイントに精通した質の高い転職支援が受けられます。
            この記事では、JACリクルートメントの評判・口コミの傾向、「就職難易度」と言われる実態、
            メリット・デメリット、向いている人を整理します。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>ハイクラス・外資系・年収アップ転職に強い</strong>のがJAC最大の特徴。コンサルタントの質が高く、企業の内部情報まで聞けるのが好評です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「就職難易度が高い」の正体はターゲット層とのミスマッチ</strong>。登録に明確な合格ラインがあるわけではなく、ミドル・ハイクラス向けのため経歴次第で紹介求人が変わります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録・利用は完全無料</strong>。30代以上で年収アップやキャリアアップを目指すなら、まず登録して市場価値を確認する価値があります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span>求人の網羅性を高めたい人は、求人数が豊富な<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>との<strong>併用</strong>がおすすめです。</span>
            </li>
          </ul>
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

        {/* 基本データ */}
        <h2>JACリクルートメントの基本データ【2026年6月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ジェイ エイ シー リクルートメント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サービス形態</th><td className="px-3 py-2 border-b">コンサルタント一気通貫型の転職エージェント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">得意領域</th><td className="px-3 py-2 border-b">ハイクラス・管理職・専門職・外資系・グローバル企業</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">ハイクラス特化として豊富（具体的件数は時期で変動するため公式の最新表示を要確認）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は完全無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">メイン対象</th><td className="px-3 py-2 border-b">30代以上のミドル・ハイクラス層（20代も登録可）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対応エリア</th><td className="px-3 py-2 border-b">全国＋海外（海外在住者の相談にも対応）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：JACリクルートメント公式、会社概要、2026年6月確認。求人数は時期により変動するため、最新値は公式サイトの表示をご確認ください（要確認）。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* 評判・口コミ（メイン検索意図 jacリクルートメント 評判 / 口コミ） */}
        <h2>JACリクルートメントの評判・口コミの傾向</h2>
        <p>
          「JACリクルートメント 評判」「JACリクルートメント 口コミ」で語られる内容を、良い評判・気になる評判に分けて整理しました。
          JACの評判は、<strong>利用者の経歴・年代とJACの得意領域（ハイクラス・外資系）が合っているか</strong>で大きく分かれる傾向があります。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5">
            <p className="font-bold text-teal mb-2">良い評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>コンサルタントの業界知識が深く、的確なアドバイスがもらえた</li>
              <li>企業の社風・選考ポイントなど内部情報を直接教えてくれた</li>
              <li>外資系・グローバル企業の求人が豊富だった</li>
              <li>年収交渉を積極的にサポートしてもらえた</li>
            </ul>
          </div>
          <div className="glass-card p-5">
            <p className="font-bold text-amber-700 mb-2">気になる評判の傾向</p>
            <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
              <li>ハイクラス向けで、希望に合う求人が紹介されないことがある</li>
              <li>20代・若手向けの求人は限定的</li>
              <li>年収が高くない求人は少ない傾向</li>
              <li>コンサルタントによって対応に差を感じることがある</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：口コミサイトに見られる評判の傾向（2026年6月確認）。具体的な口コミ件数・評点は時期で変動するため引用していません（要確認）。良し悪しは利用者の経歴・希望条件とJACの得意領域が合うかに左右されやすいのが共通見解です。</p>

        {/* 就職難易度の実態（検索意図 jacリクルートメント 就職難易度） */}
        <h2>「JACリクルートメントは就職難易度が高い」と言われる理由と実態</h2>
        <p>
          「JACリクルートメント 就職難易度」と検索されることがありますが、これは
          <strong>登録の合否や審査の厳しさ</strong>というより、
          <strong>JACが得意とするハイクラス・外資系求人にマッチするかどうか</strong>の話に整理できます。
          以下のように理解しておくと、ミスマッチを防げます。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              fear: "登録審査に落ちるのでは？",
              truth: "登録自体に明確な合格ラインが公表されているわけではありません。ただしミドル・ハイクラス向けのため、経歴やスキルによっては紹介できる求人が限られる場合があります。",
            },
            {
              fear: "20代・若手だと相手にされない？",
              truth: "登録は可能ですが、メインターゲットは30代以上です。若手で紹介求人が少ない場合は、20代に強い総合型エージェントを併用すると選択肢が広がります。",
            },
            {
              fear: "年収が高くないと使えない？",
              truth: "JACは年収アップ・キャリアアップを狙う層に強みがあり、年収が高くない求人は少なめです。希望年収帯によっては他社の方が合うこともあります。",
            },
            {
              fear: "求人を紹介してもらえなかった",
              truth: "得意領域とのミスマッチが主因です。これは「審査に落ちた」のではなく、JACのカバー範囲外だったと捉え、総合型・専門型を組み合わせるのが現実的です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <p className="font-bold text-amber-700 mb-1 text-sm">噂：{item.fear}</p>
              <p className="text-sm text-text-secondary leading-relaxed">実態：{item.truth}</p>
            </div>
          ))}
        </div>

        {/* 一気通貫型の解説 */}
        <h2>JACリクルートメントの「一気通貫型」とは？他社との違い</h2>
        <p>
          多くの転職エージェントでは、求職者をサポートする担当と、企業側を担当する人が分かれています。
          一方JACリクルートメントは、<strong>一人のコンサルタントが求職者と企業の双方を担当する「一気通貫型」</strong>を採用しています。
        </p>
        <p>
          このため、企業が求める人物像・社風・選考で重視するポイントといった<strong>内部情報を直接共有してもらえる</strong>のが大きな強みです。
          結果として、応募書類の精度や面接対策の的確さにつながり、ハイクラス・外資系転職での通過率を高めやすくなります。
        </p>

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
        <h2>JACリクルートメントのメリット・デメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">メリット</h3>
            <ul className="space-y-2">
              {[
                "コンサルタントの質が高く、業界知識が豊富",
                "一気通貫型で企業の内部情報を直接聞ける",
                "外資系・グローバル企業の求人に強い",
                "ハイクラス・管理職求人が充実している",
                "年収交渉のサポートが手厚い",
                "海外転職・海外在住者の相談にも対応",
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
                "求人数は大手総合型エージェントより少ない",
                "20代・若手向けの求人は限定的",
                "年収が高くない求人は少ない傾向",
                "地方の求人は都市部と比べて少ない場合がある",
                "コンサルタントによって対応に差を感じることがある",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 向いている人・向いていない人 */}
        <h2>JACリクルートメントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">JACが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>外資系・グローバル企業への転職を希望する人</li>
              <li>30代以上で管理職・専門職のキャリアアップを目指す人</li>
              <li>質の高いコンサルタントによる手厚いサポートを求める人</li>
              <li>年収アップを実現したい人</li>
              <li>海外での就業を視野に入れている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>とにかく求人数の網羅性を最優先する人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link></li>
              <li>20代・第二新卒で丁寧な伴走を求める人 →<Link href="/review/mynavi/" className="text-teal underline">マイナビエージェント</Link></li>
              <li>サイト・エージェント・スカウトを使い分けたい人 →<Link href="/review/doda/" className="text-teal underline">doda</Link></li>
              <li>年収が高くない求人を中心に探したい人</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは1社に絞る必要はなく、<strong>2〜3社の併用が一般的</strong>です。
          ハイクラス・外資系に強いJACリクルートメントを軸に、求人網羅性の高い大手総合型を組み合わせると、
          求人の取りこぼしとミスマッチの両方を減らせます。
        </p>

        {/* FAQ */}
        <h2>JACリクルートメント よくある質問（評判・就職難易度）</h2>
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
          <h3 className="font-bold text-navy mb-4">JACを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/bizreach/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ビズリーチの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
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
