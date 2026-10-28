import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/digireka/" },
  title: "デジレカの口コミ・評判は？マーケティング職特化の転職エージェントを解説【2026年10月】",
  description:
    "デジレカ（株式会社マルニ運営）の口コミ・評判を出典とともに整理しています。マーケ経験者の担当、面談後決定率40%（公称）、面接対策5〜10回以上、未経験者向け無料講座、利用の流れ・退会方法・注意点まで公式情報にもとづいて解説します（2026年10月確認）。利用は無料です。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "デジレカの口コミ・評判は？マーケティング職特化の転職エージェントを解説【2026年10月】",
    description:
      "マーケティング職特化の転職エージェント「デジレカ」の口コミ・評判の傾向、特徴、利用の流れ、注意点を公式情報にもとづいて解説します。利用は無料です。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "デジレカの口コミ・評判は？マーケティング職特化の転職エージェントを解説【2026年10月】",
  dateModified: "2026-10-28",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/digireka/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "デジレカの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "デジレカで紹介してもらえる職種は何ですか？",
    a: "広告運用、デジタルマーケティング、デジタルプランナー、コンサルタント、ディレクターなど、マーケティング領域の職種が対象です。ポジションはチームリーダー〜マネージャー、事業部長、役員クラスまで幅広く扱っています。マーケティング職以外を希望する場合は、リクルートエージェントやdodaなどの総合型エージェントの利用が向いています。",
  },
  {
    q: "マーケティング業界未経験でも利用できますか？",
    a: "利用できます。公式サイトのQ&Aでは、未経験の人をマーケティング職に多数紹介してきたこと、業界未経験者には業界構造・職種・キャリアパスについて1時間半ほどの無料講座を実施していることが公表されています。一方で同じQ&Aで「職歴やスキル、年齢などにより少なからず制約があり、すべての方が望みどおりの企業・ポジションに内定したわけではない」とも明記されています。",
  },
  {
    q: "面談はオンラインでできますか？",
    a: "できます。公式サイトのQ&Aでは、対面のほか、電話や各種オンライン会議ツール（Zoom、Google Meetなど）での面談が可能と案内されています（2026年10月14日確認）。相談者の都合に合わせて面談方法やツールを提案するとしています。",
  },
  {
    q: "デジレカに悪い口コミはありますか？",
    a: "2026年10月28日に当サイトで確認した範囲では、利用者本人の投稿と判別できる悪い口コミは見つかりませんでした。ただし、第三者サイトの公開口コミ自体がごく少数で、検索上位の口コミ記事4本に掲載された口コミも、すべて公式サイト掲載の転職事例と同じ内容でした。悪い口コミがないことは評判が良いことの裏付けにはならないため、対象職種が限られる点や求人数が非公表である点を踏まえて判断することをおすすめします。",
  },
  {
    q: "デジレカはやばい？怪しい？",
    a: "公式サイトの会社概要で、運営会社（株式会社マルニ、代表取締役 若林一平、東京都世田谷区）と厚生労働大臣許可番号「13-ユ-312608」が公表されています。転職エージェント（有料職業紹介）は厚生労働大臣の許可が必要な事業で、許可番号を公表して運営しているサービスです。ただし特化型のため、マーケティング職以外を探す人には合わない点を理解したうえでの利用をおすすめします。",
  },
  {
    q: "デジレカに断られることはありますか？",
    a: "公式Q&Aでは、未経験者も相談可能としつつ「職歴やスキル、年齢などにより少なからず制約がある」と明記しています。また利用規約（第3条）では、規約違反やそのおそれがある場合などにサービス利用の停止・会員登録の解除ができると定めています。希望どおりの求人が必ず紹介されるわけではない前提で、総合型エージェントとの併用をおすすめします。",
  },
  {
    q: "紹介された企業に応募しないといけない？しつこく勧められる？",
    a: "公式Q&Aでは、紹介された企業に「応募する必要はまったくありません」と明記されており、納得できる企業・ポジションにだけ応募すればよいとしています。登録後はメールまたは電話で連絡が来る流れです。不要になった場合は、利用規約（第8条）に基づき所定の退会手続きで退会でき、退会すると会員情報は削除されると定められています。",
  },
  {
    q: "「面談後決定率40%」とはどういう意味ですか？",
    a: "デジレカが公式に公表している数値（公称）で、面談を行った求職者のうち転職先決定に至った割合が40%であることを示すものです。集計期間・分母の定義などの詳細条件は公表されていないため、参考値として捉え、最新の実績は公式サイトでご確認ください。",
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

export default function DigirekaReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "デジレカの口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            デジレカの口コミ・評判は？マーケティング職特化の転職エージェントを解説【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月28日（口コミの掲載状況・公式サイトの転職事例・会社概要を再確認）</p>
          <p className="text-text-secondary leading-relaxed">
            デジレカは、株式会社マルニが運営するマーケティング領域特化型の転職エージェントです。
            広告運用・デジタルマーケティング・デジタルプランナー・コンサルタント・ディレクターといった職種を対象に、
            スタッフ全員がデジタルマーケティング経験者としてキャリア相談から入社後フォローまで伴走するのが特徴です。
            この記事では、デジレカの口コミ・評判の傾向（出典を明記）と、特徴・料金・利用の流れ・注意点・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 mb-8 border-2 border-teal/30">
          <p className="font-bold text-navy text-lg mb-3">デジレカの口コミ・評判の調査結果（2026年10月28日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>第三者の公開口コミはごく少数です。</strong>口コミサイトやSNSで利用者本人の投稿と判別できる口コミは少なく、件数・平均点を示せる量はありません。</li>
            <li><strong>検索上位の口コミ記事4本に掲載された口コミは、すべて公式サイト掲載の転職事例と同じ内容でした。</strong>悪い口コミを掲載した記事は0本です（当サイトで集計）。</li>
            <li><strong>公式掲載の転職事例3件で評価されている点</strong>は、キャリアの選択肢を広げる提案、一貫したキャリア戦略の提示、未経験者への業界構造の説明の3点です。</li>
            <li><strong>注意点</strong>は、対象がマーケティング職に限られること、求人数が非公表であること、未経験者は職歴・年齢などにより制約があると公式Q&Aに明記されていることです。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">
            詳しくは<a href="#reviews" className="underline">口コミ・評判の出典と内訳</a>をご覧ください。運営会社・許可番号は2026年10月28日に公式の会社概要で確認しています。
          </p>
        </div>

        <AgentHero slug="digireka" />


        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>マーケティング職に特化した転職エージェントです</strong>。広告運用・デジタルマーケティング・プランナー・コンサルタント・ディレクターなど、対象をマーケティング領域に絞っています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>担当スタッフ全員がデジタルマーケティング経験者</strong>で、現在もマーケティング業務に従事していると公式に公表されています。実務を知る担当者に職種の話が通じやすいのが強みです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>業界未経験者向けの無料講座があります</strong>。転職ありきではないキャリア相談を重視しており、未経験からマーケティング職を目指す人の入口にもなります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料です</strong>。キャリア相談・求人紹介・選考対策・条件交渉支援・入社後フォローまで費用はかかりません。</span>
            </li>
          </ul>
        </div>

        {/* CTA 1 */}
        <FelmatCta slug="digireka" heading="デジレカ公式サイトで無料キャリア相談を予約する" note="マーケティング職のキャリア相談は無料です。" />

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "マーケ職" },
            { label: "面談後決定率（公称）", value: "40%" },
            { label: "料金", value: "無料" },
            { label: "面接対策（場合により）", value: "5〜10回以上" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>デジレカの基本データ・運営会社【2026年10月28日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">デジレカ（マーケティング領域特化型の転職エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社マルニ</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都世田谷区三宿1-14-8 三宿バドスクエア101号室</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">若林 一平</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">公式サイトに記載なし</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">資本金</th><td className="px-3 py-2 border-b">500万円</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">事業内容</th><td className="px-3 py-2 border-b">webメディア運営・HRコンサルティング・デジタルマーケティング業界専門中途人材紹介事業</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">厚生労働大臣許可 13-ユ-312608</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象職種</th><td className="px-3 py-2 border-b">広告運用・デジタルマーケティング・デジタルプランナー・コンサルタント・ディレクター（チームリーダー〜マネージャー・事業部長・役員クラスまで）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象者</th><td className="px-3 py-2 border-b">マーケティング職の経験者・未経験者（年齢・地域の条件は公式サイトに明記なし）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談方法</th><td className="px-3 py-2 border-b">対面／電話／オンライン（Zoom、Google Meetなど）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">公式サイトに記載なし（クローズド案件の保有は公表）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／面接対策・模擬面接／条件交渉支援／入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：デジレカ公式サイト（<a href="https://digireka.jp/" rel="nofollow noopener" target="_blank" className="underline">digireka.jp</a>）・会社概要（<a href="https://digireka.jp/company/" rel="nofollow noopener" target="_blank" className="underline">digireka.jp/company/</a>）・利用規約（digireka.jp/terms/）。会社概要（運営会社・所在地・代表者・資本金・事業内容・許可番号）は2026年10月28日、面談方法・サポート内容・利用規約は2026年10月14日に確認しました。設立年月日・求人数は公式サイトに記載がないため掲載していません。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* 特徴解説 */}
        <h2>デジレカの特徴（公式の公表情報より）</h2>
        <p>
          デジレカが公式サイトで公表している特徴は以下のとおりです。いずれも2026年10月14日時点の公式サイトで確認できる内容で、
          当サイト独自の評価・推測は含めていません。
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "スタッフ全員がデジタルマーケティング経験者",
              desc: "担当スタッフ全員がデジタルマーケティングの実務経験者で、現在もマーケティング業務に従事していると公表されています。広告運用の指標やマーケティング組織の実情など、職種特有の話が通じやすい体制です。",
            },
            {
              title: "転職ありきではないキャリア相談重視",
              desc: "「まず転職させる」のではなく、キャリア相談を起点にした支援を掲げています。現職にとどまる選択肢も含めて相談したい人でも利用しやすい方針です。",
            },
            {
              title: "面談後決定率40%（公称）",
              desc: "面談を実施した求職者のうち40%が転職先決定に至ったと公式に公表されています（公称値。集計条件の詳細は非公表のため参考値としてご覧ください）。",
            },
            {
              title: "クローズド案件の保有",
              desc: "一般公開されていないクローズド案件を保有していると公表されています。マーケティング職の非公開ポジションに出会える可能性があります。",
            },
            {
              title: "無料の選考対策（複数回）",
              desc: "面接対策・模擬面接を含む選考対策を無料で受けられます。公式サイトでは「場合によっては、面接対策を5回～10回以上実施する事もある」と案内されています。マーケティング職の選考で問われやすいポイントを実務経験者の視点で対策できます。",
            },
            {
              title: "業界未経験者向けの無料講座",
              desc: "マーケティング業界が未経験の人向けに、業界構造・職種・その後のキャリアパスについて1時間半ほどの無料講座を実施していると公表されています。未経験からデジタルマーケティング職を目指すための入口として利用できます。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 口コミ・評判 */}
        <h2 id="reviews">デジレカの口コミ・評判の傾向（出典あり）</h2>
        <p>
          デジレカの口コミ・評判を、口コミサイト（みん評・転職会議・OpenWorkなど）やX（旧Twitter）の公開投稿を対象にWeb検索で調べました（2026年10月14日・10月28日確認）。
          その結果、<strong>利用者本人の投稿と判別できる公開口コミは確認できた範囲ではごく少数</strong>で、件数や平均点を示せるほどの量はありませんでした。
          マーケティング職に絞った比較的小規模な特化型サービスのため、大手総合型エージェントのように口コミが大量に集まる状況ではありません。
          当サイトでは架空の体験談や独自の点数は掲載せず、以下は「公式に公表された事実から読める評価ポイント」として整理しています。
        </p>
        <h3 className="font-bold text-navy mb-2">公式サイトに掲載されている転職事例3件</h3>
        <p className="text-sm text-text-secondary mb-3">
          デジレカ公式サイトのトップページには、利用者の転職事例（CASE）が3件掲載されています（2026年10月28日確認）。
          運営会社が掲載している事例のため、第三者の口コミではない点にご注意ください。コメントの内容は当サイトで要約しています。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-50 text-left px-3 py-2 border-b whitespace-nowrap">事例</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b">転職前</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b">転職後（掲載時の社名）</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b">評価している点（当サイト要約）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">松本さん（29歳）</td><td className="px-3 py-2 border-b">デジタルマーケティング会社の広告運用職</td><td className="px-3 py-2 border-b">株式会社アラテ（ディレクター兼広告運用）</td><td className="px-3 py-2 border-b">広告運用の実績だけでなく、キャリアの幅を広げる選択肢まで提案を受けられた点</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">太田さん</td><td className="px-3 py-2 border-b">EC専門の広告運用会社のコンサルタント（前職は公務員8年）</td><td className="px-3 py-2 border-b">株式会社CARTA MARKETING FIRM（コンサルタント）</td><td className="px-3 py-2 border-b">幅広いマーケティング経験を積むためのキャリア戦略を示され、提案に一貫性があった点</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">照井さん（28歳）</td><td className="px-3 py-2 border-b">スキーショップの販売員（業界未経験）</td><td className="px-3 py-2 border-b">株式会社VOYAGE GROUP（デジタルマーケティング職）</td><td className="px-3 py-2 border-b">未経験でも業界構造・企業の特徴・キャリアの積み方まで説明を受けられた点</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-6">
          同じトップページには、紹介先企業の声として株式会社東急エージェンシーと株式会社アラテの担当者のコメントも掲載されており、紹介の精度や選考通過率・決定率の高さが評価されています。
          また「面談後決定率40%」「年間2000人以上に選ばれる」との表記がありますが、いずれも公称値で、集計期間や算出方法は公表されていません。
        </p>

        <h3 className="font-bold text-navy mb-2">口コミ記事4本の出典を当サイトで確認した結果</h3>
        <p className="text-sm text-text-secondary mb-3">
          「デジレカ 口コミ」「デジレカ 評判」の検索結果に表示された口コミ記事4本について、掲載されている口コミの件数と出典を当サイトで確認しました（2026年10月28日確認）。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-50 text-left px-3 py-2 border-b">記事</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b whitespace-nowrap">表示日付</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b">掲載口コミ</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b">口コミの出典表示</th>
                <th className="bg-gray-50 text-left px-3 py-2 border-b whitespace-nowrap">悪い口コミ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">キャリアチャンス</td><td className="px-3 py-2 border-b">2025年4月12日</td><td className="px-3 py-2 border-b">3件（公式の転職事例と同じ内容）</td><td className="px-3 py-2 border-b">「公式サイトより」</td><td className="px-3 py-2 border-b">0件</td></tr>
              <tr><td className="px-3 py-2 border-b">志望動機.com</td><td className="px-3 py-2 border-b">2025年8月18日</td><td className="px-3 py-2 border-b">3件（公式の転職事例と同じ内容）</td><td className="px-3 py-2 border-b">「公式サイトより」</td><td className="px-3 py-2 border-b">0件</td></tr>
              <tr><td className="px-3 py-2 border-b">個人サービス・法人サービスの利用・使用についてまとめました</td><td className="px-3 py-2 border-b">2025年4月28日</td><td className="px-3 py-2 border-b">3件（公式の転職事例と同じ内容）</td><td className="px-3 py-2 border-b">公式サイトの転職事例</td><td className="px-3 py-2 border-b">0件</td></tr>
              <tr><td className="px-3 py-2 border-b">pharmacistagent.com</td><td className="px-3 py-2 border-b">2026年7月2日</td><td className="px-3 py-2 border-b">件数の記載なし（傾向の要約。成功事例は公式サイトの事例）</td><td className="px-3 py-2 border-b">媒体名の記載なし</td><td className="px-3 py-2 border-b">記事側の注意点のみ</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-6">
          4本とも、利用者本人による第三者サイトへの投稿は示されていませんでした。
          当サイトでは、公式掲載の事例を第三者の口コミとしては扱わず、公式の公表情報から読み取れる評価ポイントとして以下のとおり整理しています。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判につながりやすい点（公式の公表情報より）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>担当者がマーケティング企業・広告代理店などの出身で、現役でマーケティング業務に関わっています（職種の話が通じやすい体制です）。</li>
              <li>求職者と企業の両方を同一担当者が担当しています（企業側の実情を聞きやすい体制です）。</li>
              <li>紹介企業への応募は不要と明言しており、X公式アカウントでも「無理に転職をすすめたりはしません」と発信しています。</li>
              <li>場合により面接対策を5回〜10回以上実施しており、未経験者向けに約1時間半の無料講座も設けています。</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点になりうる点（公式仕様から）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>対象はマーケティング領域のみです。営業・エンジニアなど他職種の求人は期待しにくい状況です。</li>
              <li>求人数は公式に非公表です。大手総合型と比べて求人の母数は少ない可能性があります。</li>
              <li>公式Q&Aで「職歴やスキル、年齢などにより少なからず制約がある」と明記されています（未経験の場合、希望どおりにならないことがあります）。</li>
              <li>面談後決定率40%は公称値で、集計期間・分母の定義は非公表です。</li>
              <li>公開口コミが少なく、利用前に第三者の評判で判断しにくい状況です。</li>
            </ul>
          </div>
        </div>
        <div className="bg-teal/5 rounded-2xl p-5 mb-3 border border-teal/15">
          <p className="font-bold text-teal mb-1">当サイトの見方</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            口コミの量で判断できるサービスではないため、「マーケティング職に絞った相談相手として合うか」を無料面談で確認することをおすすめします。
            厚生労働大臣許可（13-ユ-312608）と運営会社情報は公開されており、応募の強制もないと公式に明記されています。
            一方で求人の幅は限られるため、総合型エージェント1社との併用で求人の取りこぼしを防ぐことをおすすめします。
          </p>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：みん評・転職会議・OpenWork・X（旧Twitter）の公開口コミを当サイトが2026年10月14日・10月28日にWeb検索で確認しました（利用者本人の投稿と判別できる口コミはごく少数のため、件数・平均点は掲載していません）。
          転職事例・紹介先企業の声はデジレカ公式サイトのトップページ（2026年10月28日確認）、その他の事実情報は会社概要・利用規約・公式Xアカウントです（2026年10月14日確認）。他社の口コミ記事は掲載状況の集計にのみ使用し、口コミの出典にはしていません。
        </p>

        {/* 利用の流れ */}
        <h2>デジレカの利用の流れ・退会方法</h2>
        <p>公式サイトで案内されている利用の流れは次の5ステップです（2026年10月14日確認）。</p>
        <ol className="space-y-2 text-sm text-text-secondary list-decimal pl-5 mb-4">
          <li><strong>無料相談の登録</strong>：公式サイトのフォームから登録します。担当者からメールまたは電話で連絡が来ます。</li>
          <li><strong>キャリア相談</strong>：状況やキャリアビジョンを伝え、適した業界・企業の提案と求人紹介を受けます（対面・電話・Zoom/Google Meetなどで可能）。</li>
          <li><strong>面接</strong>：応募企業への推薦後、日程調整と企業ごとの対策・模擬面接が行われます。</li>
          <li><strong>内定と条件交渉</strong>：オファー内容を確認し、給与などの条件交渉が可能です。</li>
          <li><strong>入社後フォロー</strong>：入社後もスキルアップや業界トレンドに関する情報提供を受けられます。</li>
        </ol>
        <p className="text-sm text-text-secondary mb-8">
          <strong>退会方法</strong>：利用規約第8条で「所定の退会手続きを行うことによって退会することができ」、退会すると会員情報・提供データはすべて削除されると定められています。
          具体的な手続き窓口は公式サイトのお問い合わせ、または担当者にご確認ください。
        </p>

        {/* 向いている人・向いていない人 */}
        <h2>デジレカが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">デジレカが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>広告運用・デジタルマーケティング職で転職を考えている人</li>
              <li>マーケティング実務が分かる担当者に相談したい人</li>
              <li>マネージャー・事業部長・役員クラスのポジションを狙う人</li>
              <li>転職するか迷っている段階でキャリア相談から始めたい人</li>
              <li>未経験からマーケティング業界を目指したい人（無料講座あり）</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>マーケティング職以外への転職を考えている人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>幅広い業界・職種の求人を横断的に比較したい人 →総合型エージェントの併用をおすすめします</li>
              <li>20〜30代でマーケ以外も含めた成長企業・ハイエンド志向の人 →<Link href="/review/assign/" className="text-teal underline">ASSIGN（アサイン）</Link>も選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          デジレカはマーケティング領域に対象を絞ったサービスです。マーケティング職以外の求人を求める場合は、
          総合型エージェントの方が適しています。転職エージェントは<strong>2〜3社の併用が一般的</strong>なので、
          マーケティング職はデジレカ、それ以外の選択肢は総合型で確認する使い分けが現実的です。
        </p>

        {/* FAQ */}
        <h2>デジレカ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* まとめ */}
        <h2>まとめ：マーケティング職の転職・キャリア相談における有力な選択肢</h2>
        <p>
          デジレカは、株式会社マルニが運営するマーケティング領域特化型の転職エージェントです。
          スタッフ全員がデジタルマーケティング経験者で、転職ありきではないキャリア相談を重視し、
          面談後決定率40%（公称）・クローズド案件の保有・複数回の無料選考対策・未経験者向け無料講座を公表しています。
          求職者の利用は無料なので、マーケティング職でのキャリアを考えている人は、
          まず無料のキャリア相談から始めることをおすすめします。
          マーケティング職以外も視野に入れる場合は、総合型エージェントとの併用をおすすめします。
        </p>

        {/* CTA 2 */}
        <FelmatCta slug="digireka" heading="デジレカ公式サイトで無料キャリア相談を予約する" note="マーケティング職のキャリア相談は無料です。" />

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">デジレカを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/assign/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ASSIGN（アサイン）の詳細
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
