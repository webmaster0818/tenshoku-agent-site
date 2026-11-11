import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Cta from "@/components/A8Cta";
import AgentHero from "@/components/AgentHero";
import AgentClients from "@/components/AgentClients";

export const metadata: Metadata = {
  alternates: { canonical: "/review/myvision/" },
  title: "MyVision(マイビジョン)の評判・口コミ｜悪い評判と公式データで見る年収・転職期間【2026年11月】",
  description:
    "MyVision(マイビジョン)の評判・口コミを出典を明記して整理します。悪い評判(担当者差・求人のミスマッチ)の傾向、公式データページ(2026年8月時点)の年齢分布・年収帯別の年収アップ率・転職期間の中央値、利用規約で確認しておきたい点、NewMA・ASSIGNとの比較を掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "MyVision(マイビジョン)の評判・口コミ｜悪い評判と公式データで見る年収・転職期間【2026年11月】",
    description: "MyVision(マイビジョン)の口コミ・評判を出典を明記して整理します。良い評判・悪い評判の傾向と公式データは2026年11月11日に確認しています。",
  },
};

const faqData = [
  {
    q: "MyVisionの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "コンサル業界未経験でも利用できますか？",
    a: "利用できます。公式サイトでは「ご支援する求職者様の8割はコンサル業界未経験の方」と明記されており(2026年8月16日確認)、業界・個社の説明から選考対策までを未経験者前提で支援する体制が特徴です。事業会社からコンサルへの転身を考える人が主要な利用者層です。",
  },
  {
    q: "「コンサル転職No.1」とはどういう意味ですか？",
    a: "MyVisionが公式サイトで掲げている表記で、出典は「厚生労働省職業安定局 人材サービス総合サイト」の2025年度(2025年4月〜2026年3月)におけるコンサル特化転職エージェントの支援実績数比較と脚注に明記されています(2026年8月16日確認)。公的データに基づく比較ですが、対象の切り方による公称値のため、参考情報として捉えてください。",
  },
  {
    q: "MyVisionの選考対策はどんな内容ですか？",
    a: "コンサル転職で特有のケース面接・Webテストを含む選考対策のコンテンツ・支援を提供しています(公式サイトにケース面接対策・Webテスト対策等の情報ページあり)。詳細な支援内容は無料相談でご確認ください。",
  },
  {
    q: "どこの会社が運営していますか？",
    a: "株式会社MyVision(2022年6月設立、東京都港区虎ノ門4-1-1 神谷町トラストタワー24階)が運営しています。有料職業紹介事業許可番号は13-ユ-314719、資本金1億円です。従業員数は公式サイトの会社概要で446名と掲載されています(2026年11月11日確認。10月14日時点の採用ページでは423名)。",
  },
  {
    q: "MyVisionは「やばい」「断られる」という評判は本当ですか？",
    a: "公式サイトの評判ページ(2026年9月3日更新)では、Google口コミの中に「担当者によって対応に差がある」「希望と合わない求人を勧められた」といった否定的な声もあることを自ら紹介しています。また「経験とかけ離れた求人を希望している人」「希望条件が多く現実的なバランスが取れていない人」には合わない可能性があると明記しています。コンサルファームの選考は職歴・論理力が問われるため、経歴によっては紹介できる求人が限られる点にご留意ください。",
  },
  {
    q: "Google口コミ★4.8は信頼できますか？",
    a: "★4.8は公式サイトが「2025年9月16日時点」として掲げる公称値です。Googleの口コミは誰でも投稿でき、件数・時期で変動します。当サイトでは数値をそのまま評価に使わず、公式ページで紹介されている口コミの内容(良い点・悪い点)の傾向を要約して掲載しています。",
  },
  {
    q: "MyVisionで転職すると年収は上がりますか？",
    a: "公式データページ(2026年8月時点)では、2023〜2026年のコンサル入社者の約68%が年収アップしたと公表しています。現在の年収が400万円以下の方は96.1%が上がった一方、800万円台では39.4%で、年収が高い方ほど上がる割合は下がります。いずれも同社経由の転職者の統計で、個人の結果を保証するものではありません。",
  },
  {
    q: "MyVisionを退会するにはどうすればよいですか？",
    a: "利用規約・公式サイトには退会手続きの具体的な記載が見当たりませんでした(2026年11月11日確認)。利用規約第16条では、利用契約は登録が取り消された日まで続くと定めています。退会やメール配信の停止を希望する場合は、担当者または公式サイトのお問い合わせ窓口に申し出てください。",
  },
  {
    q: "「今は転職しない」という段階でも相談できますか？",
    a: "公式サイトでは「『今は転職しない』という選択肢も含めたキャリア提案」「中長期での支援を前提としたキャリアのパートナー」を掲げています(2026年8月16日確認)。情報収集段階の相談から始められる方針です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MyVision(マイビジョン)の評判・口コミ｜悪い評判と公式データで見る年収・転職期間【2026年11月】",
  dateModified: "2026-11-11",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/myvision/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function MyvisionReview() {
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
          { name: "MyVisionの口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            MyVision(マイビジョン)の評判・口コミ｜悪い評判と公式データで見る年収・転職期間【2026年11月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年11月11日（公式データページの年齢分布・年収帯別の年収アップ率・転職期間、利用規約の確認点、従業員数を更新）</p>
          <p className="text-text-secondary leading-relaxed">
            MyVisionは、株式会社MyVisionが運営するコンサルティング業界特化の転職エージェントです。
            利用者の8割がコンサル業界未経験と公表しており、業界説明からケース面接対策までを未経験者前提で支援するのが特徴です。
            この記事では、特徴・会社情報・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="myvision" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル業界特化の転職エージェント</strong>です。戦略・総合・IT・シンクタンクなどコンサルファームへの転職支援に対象を絞っています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用者の8割がコンサル業界未経験(公称)</strong>です。業界・個社の説明から選考対策までを未経験前提で組み立てる支援体制です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>コンサル特化の支援実績数No.1(公称)</strong>を掲げています。出典は厚生労働省 人材サービス総合サイトの2025年度実績数比較と公式に脚注明記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料</strong>です。「今は転職しない」選択肢も含めた中立的なキャリア相談を掲げており、情報収集段階から相談できます。</span>
            </li>
          </ul>
        </div>

        <A8Cta slug="myvision" heading="MyVision公式サイトで無料転職相談を予約する" note="コンサル業界のキャリア相談は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "コンサル" },
            { label: "未経験比率（公称）", value: "8割" },
            { label: "Google口コミ（公称）", value: "★4.8" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>MyVisionの基本データ【2026年11月11日更新】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">MyVision(コンサル業界特化の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社MyVision</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都港区虎ノ門4-1-1 神谷町トラストタワー24階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役社長 山口 翔平／代表取締役CEO 岡﨑 健斗</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">資本金・従業員</th><td className="px-3 py-2 border-b">資本金1億円・従業員446名(公式サイト会社概要、2026年11月11日確認)／設立2022年6月</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-314719</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象領域</th><td className="px-3 py-2 border-b">戦略コンサル／総合コンサル／ITコンサル／シンクタンク等のコンサルティングファーム</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／業界・個社説明／求人紹介／選考対策(ケース面接・Webテスト対策等)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：MyVision公式サイト(my-vision.co.jp)のトップページ・評判ページ・会社概要(2026年11月11日確認)、同社採用ページ(HRMOS)の会社情報(2026年10月14日確認)。公式サイトではサービス名を「MyVisionコンサルティング」とも表記しています。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>MyVision(マイビジョン)の口コミ・評判（出典を明記した傾向）</h2>
        <p className="text-sm text-text-secondary mb-4">
          公式サイトはトップで「Google口コミ★4.8」(2025年9月16日時点・公称)を掲げ、評判ページ(2026年9月3日更新)でGoogle口コミを良い声・悪い声の両方とも引用しています。
          当サイトがその引用25件(良い声18件・否定的な声7件)をテーマ別に数えると、次の傾向でした。本文の転載ではなく要約です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">テーマ</th><th className="bg-gray-50 text-left px-3 py-2 border-b">良い声</th><th className="bg-gray-50 text-left px-3 py-2 border-b">否定的な声</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">面接・ケース面接対策</td><td className="px-3 py-2 border-b">7件</td><td className="px-3 py-2 border-b">2件</td></tr>
              <tr><td className="px-3 py-2 border-b">担当者の対応・伴走</td><td className="px-3 py-2 border-b">5件</td><td className="px-3 py-2 border-b">3件</td></tr>
              <tr><td className="px-3 py-2 border-b">求人提案・マッチング</td><td className="px-3 py-2 border-b">3件</td><td className="px-3 py-2 border-b">2件</td></tr>
              <tr><td className="px-3 py-2 border-b">未経験からの転職</td><td className="px-3 py-2 border-b">4件</td><td className="px-3 py-2 border-b">0件</td></tr>
              <tr><td className="px-3 py-2 border-b">年収アップ</td><td className="px-3 py-2 border-b">3件</td><td className="px-3 py-2 border-b">0件</td></tr>
              <tr><td className="px-3 py-2 border-b">スケジュール調整</td><td className="px-3 py-2 border-b">2件</td><td className="px-3 py-2 border-b">1件</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※1件が複数テーマにまたがる場合は重複して数えています。出典：MyVision公式「評判」ページ(my-vision.co.jp/myvision-reputation、2026年9月3日更新)に引用されたGoogle口コミ、2026年10月14日に当サイトが集計。</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判で多い指摘</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>ケース面接・面接対策が具体的で役に立った</li>
              <li>コンサル未経験でも業界の説明から丁寧に伴走してくれた</li>
              <li>年収アップにつながった(公式は平均年収UP額156万円と公称。2026年1月の内定承諾者が対象)</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点で多い指摘</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>担当者によって対応に差がある</li>
              <li>希望と合わない求人を勧められた</li>
              <li>面接対策が十分でないと感じた／人気の担当者は日程調整が難しいことがある</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          <strong>当サイトの見方：</strong>否定的な声も公式が自ら掲載している点は透明性があります。一方で、公式ページに載る口コミは同社が選んだものなので、全体の比率を表すものではありません。
          「担当者差」はどのエージェントでも起きうるため、合わないと感じたら担当変更を申し出るか、<Link href="/review/newma/" className="text-teal underline">NewMA</Link>など別のコンサル特化エージェントと併用して比較することをおすすめします。
          なお、検索上位の比較記事には「経歴がないと断られる」という声の紹介もありますが、出典が自社アンケート等で確認できないため、当サイトでは採用していません。
        </p>

        <h3 className="font-bold text-navy mb-2">公式サイト以外に掲載されている口コミ</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">掲載先</th><th className="bg-gray-50 text-left px-3 py-2 border-b">件数</th><th className="bg-gray-50 text-left px-3 py-2 border-b">内容の傾向（当サイトの要約）</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">Googleマップ（公式が引用）</td><td className="px-3 py-2 border-b">総件数は公式に記載なし</td><td className="px-3 py-2 border-b">上の表のとおりです。公式は「★4.8（2025年9月16日時点）」と表示していますが、件数は示していません。</td></tr>
              <tr><td className="px-3 py-2 border-b">コエテコキャリア（coeteco.jp）</td><td className="px-3 py-2 border-b">4件</td><td className="px-3 py-2 border-b">4件ともアドバイザーの親身な対応・転職までの伴走を評価しています。うち2件に「連絡が取りにくい時期があった」など連絡面の指摘があります。</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：各掲載先、2026年10月21日確認。当サイトでは掲載先の点数を転記せず、件数と内容の傾向のみを記載しています。件数が少ないため、全体の評価を表すものではありません。</p>

        <h2>MyVisionの公表数値と、その定義【2026年10月21日確認】</h2>
        <p className="text-sm text-text-secondary mb-4">
          比較記事で引用されることの多い数値を、公式サイトの脚注どおりに整理しました。数値の大きさだけでなく、「誰を対象にした値か」を確認したうえで参考にしてください。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">公表数値</th><th className="bg-gray-50 text-left px-3 py-2 border-b">公式の定義・時点</th><th className="bg-gray-50 text-left px-3 py-2 border-b">当サイトの読み方</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">平均年収UP額 156万円</td><td className="px-3 py-2 border-b">2026年1月に内定を承諾し、同社経由で年収アップを実現した方の平均値</td><td className="px-3 py-2 border-b">1か月分の実績で、年収が上がらなかった方は含まれていません。利用者全体の平均ではありません。</td></tr>
              <tr><td className="px-3 py-2 border-b">書類選考通過率 83%</td><td className="px-3 py-2 border-b">脚注なし（対象期間・母数の記載なし）</td><td className="px-3 py-2 border-b">算出方法が公開されていないため、他社の通過率とは比べられません。</td></tr>
              <tr><td className="px-3 py-2 border-b">コンサル未経験 82%</td><td className="px-3 py-2 border-b">同社の支援実績における2025年1月〜12月の統計</td><td className="px-3 py-2 border-b">未経験者の利用が多いことを示す値です。内定者に占める割合ではありません。</td></tr>
              <tr><td className="px-3 py-2 border-b">コンサル転職支援実績 No.1</td><td className="px-3 py-2 border-b">厚生労働省 人材サービス総合サイトの2025年度（2025年4月〜2026年3月）コンサル特化転職エージェント支援実績数の比較</td><td className="px-3 py-2 border-b">比較した社の範囲と件数は、公式ページに記載がありません。</td></tr>
              <tr><td className="px-3 py-2 border-b">取引ファーム200社以上・ポジション1,000超</td><td className="px-3 py-2 border-b">時点の記載なし。「国内に展開するほぼ全てのコンサルティングファームとネットワークを構築」と説明</td><td className="px-3 py-2 border-b">紹介できる求人は経歴によって変わります。自分が応募できる件数は面談で確認する必要があります。</td></tr>
              <tr><td className="px-3 py-2 border-b">Google口コミ ★4.8</td><td className="px-3 py-2 border-b">2025年9月16日時点</td><td className="px-3 py-2 border-b">1年以上前の値で、件数の記載もありません。</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：MyVision公式サイト トップページ（my-vision.co.jp）の表示と脚注、2026年10月21日確認。</p>

        <h2>公式データページで分かること（2026年8月時点）</h2>
        <p className="text-sm text-text-secondary mb-4">
          MyVisionは公式サイトに「データで見るMyVisionコンサルティング」というページを設け、同社経由でコンサルティングファームに入社した方(入社予定を含む)の統計を公開しています。
          検索上位の比較記事ではほとんど取り上げられていないため、当サイトで主な数値と脚注の定義を整理しました。いずれも同社が集計した値で、第三者の検証を受けたものではありません。
        </p>
        <h3 className="font-bold text-navy mb-2">どんな人がコンサルに転職しているか（2023〜2026年入社者）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">項目</th><th className="bg-gray-50 text-left px-3 py-2 border-b">公式の数値</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">年齢</td><td className="px-3 py-2 border-b">24歳以下3%／25〜29歳53%／30〜34歳32%／35〜39歳8%／40歳以上4%</td></tr>
              <tr><td className="px-3 py-2 border-b">転職回数</td><td className="px-3 py-2 border-b">初めての転職58%／2回目27%／3回目10%／4回以上6%</td></tr>
              <tr><td className="px-3 py-2 border-b">前職の職種</td><td className="px-3 py-2 border-b">IT・エンジニア35.3%／営業19.3%／企画・経営企画8.2%／管理(経理・人事)4.8%／マーケティング3.8%／公務員・教育3.1%／製造・技術1.6%／その他6.0%／コンサル経験者18.0%</td></tr>
              <tr><td className="px-3 py-2 border-b">大手6社への入社割合</td><td className="px-3 py-2 border-b">36%（2026年入社者のうち、アクセンチュア・ベイカレント・デロイト・PwC・EY・KPMGへの入社）</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="font-bold text-navy mb-2">現在の年収帯別の年収アップ率（2023〜2026年入社者）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">現在の年収</th><th className="bg-gray-50 text-left px-3 py-2 border-b">年収が上がった方の割合</th><th className="bg-gray-50 text-left px-3 py-2 border-b">上がった方の平均アップ額</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">400万円以下</td><td className="px-3 py-2 border-b">96.1%</td><td className="px-3 py-2 border-b">+135.8万円</td></tr>
              <tr><td className="px-3 py-2 border-b">400万円台</td><td className="px-3 py-2 border-b">89.4%</td><td className="px-3 py-2 border-b">+97.6万円</td></tr>
              <tr><td className="px-3 py-2 border-b">500万円台</td><td className="px-3 py-2 border-b">73.5%</td><td className="px-3 py-2 border-b">+126.7万円</td></tr>
              <tr><td className="px-3 py-2 border-b">600万円台</td><td className="px-3 py-2 border-b">59.4%</td><td className="px-3 py-2 border-b">+136.4万円</td></tr>
              <tr><td className="px-3 py-2 border-b">700万円台</td><td className="px-3 py-2 border-b">50.0%</td><td className="px-3 py-2 border-b">+125.7万円</td></tr>
              <tr><td className="px-3 py-2 border-b">800万円台</td><td className="px-3 py-2 border-b">39.4%</td><td className="px-3 py-2 border-b">+143.7万円</td></tr>
              <tr><td className="px-3 py-2 border-b">1,000万円以上</td><td className="px-3 py-2 border-b">41.2%</td><td className="px-3 py-2 border-b">+144.2万円</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="font-bold text-navy mb-2">転職にかかる期間（応募開始からの中央値）</h3>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li>応募から面接開始まで約15日、面接開始から内定まで約26日（内定まで約1.5か月）</li>
          <li>応募から入社まで127日（約4か月）</li>
          <li>初回面談から90日以内にコンサル企業の内定を得た方は75%、内定者のうち2社以上から内定を得た方は32%</li>
          <li>入社後180日以上たった方のうち、離職していない方は98%（早期定着率）</li>
        </ul>
        <p className="text-sm text-text-secondary mb-4">
          <strong>当サイトの見方：</strong>年収が上がった方の割合は、現在の年収が低いほど高く、800万円台では39.4%です。すでに年収が高い方は、コンサル転職で年収が下がる、または横ばいになる場合も多いことが公式の数値から読み取れます。
          また、応募から入社まで中央値で約4か月かかるため、在職中に始める場合は退職時期から逆算して相談するとよいでしょう。
        </p>
        <p className="text-sm text-text-secondary mb-4">
          なお、トップページの「平均年収UP額156万円」は2026年1月に内定を承諾した方、データページの「+141万円」は2026年入社者が対象で、どちらも年収が上がった方だけの平均です。
          紹介可能なファームもトップページは「200社以上」、データページは「440社以上（関連企業を含む、2026年8月時点）」と、対象の範囲によって数値が異なります。比較記事でこれらの数値を見るときは、どちらの定義かを確認してください。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：MyVision公式「データで見るMyVisionコンサルティング」(my-vision.co.jp/data、2026年8月時点・入社予定を含む)、2026年11月11日に当サイトが確認。</p>

        <h2>登録から入社までの流れと、利用規約で確認しておきたい点</h2>
        <p className="text-sm text-text-secondary mb-4">
          公式サイトのトップページでは、支援の内容を「経験・強みの言語化 → コンサル市場での現在地の把握 → 求人の提案 → ケース面接を含む選考対策 → 企業との日程調整・選考の進行管理 → 条件交渉・現職の円満退社に向けた助言・入社後のフォロー」の6段階で説明しています。
          あわせて、利用規約（2025年5月9日制定・2025年12月1日改定）には、登録前に知っておきたい次の定めがあります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">条文</th><th className="bg-gray-50 text-left px-3 py-2 border-b">内容（当サイトの要約）</th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">第3条</td><td className="px-3 py-2 border-b">同社や求人企業などの広告・宣伝のメールを送ることに、登録時点で同意したものとされます。</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">第6条</td><td className="px-3 py-2 border-b">応募した求人企業には登録情報が提供されます。応募前でも、本人の同意を得て企業に情報を提供する場合があります。オンラインのカウンセリング・面接対策は、品質向上のため録音・録画し、議事録を作成することがあります。</td></tr>
              <tr><td className="px-3 py-2 border-b whitespace-nowrap">第16条</td><td className="px-3 py-2 border-b">利用契約は、登録が取り消された日かサービスが終了した日まで続きます。</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          退会(登録の取り消し)の具体的な手続きは、利用規約・公式サイトのいずれにも記載が見当たりませんでした（2026年11月11日確認）。利用をやめたい場合や、メールの配信を止めたい場合は、担当者または公式サイトのお問い合わせ窓口に申し出る形になります。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：MyVision公式サイトのトップページ、利用規約(my-vision.co.jp/terms)、2026年11月11日確認。</p>

        <h2>コンサル特化の転職エージェント3社の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">項目</th><th className="bg-gray-50 text-left px-3 py-2 border-b">MyVision</th><th className="bg-gray-50 text-left px-3 py-2 border-b"><Link href="/review/newma/" className="text-teal underline">NewMA</Link></th><th className="bg-gray-50 text-left px-3 py-2 border-b"><Link href="/review/assign/" className="text-teal underline">ASSIGN</Link></th></tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">主な対象</td><td className="px-3 py-2 border-b">コンサルファーム（戦略・総合・IT・シンクタンク）。利用者の82%がコンサル未経験</td><td className="px-3 py-2 border-b">コンサルに加え、M&amp;A仲介・FAS・経営企画・PEファンド</td><td className="px-3 py-2 border-b">20代〜30代前半の若手ハイエンド層（コンサルに限らない）</td></tr>
              <tr><td className="px-3 py-2 border-b">求人数の公開</td><td className="px-3 py-2 border-b">ポジション1,000超（時点の記載なし）</td><td className="px-3 py-2 border-b">求人総数は非公開</td><td className="px-3 py-2 border-b">当サイトでは確認できていません</td></tr>
              <tr><td className="px-3 py-2 border-b">支援の特徴</td><td className="px-3 py-2 border-b">業界・個社の説明から、ケース面接・Webテスト対策まで</td><td className="px-3 py-2 border-b">業界の実情（大変さを含む）の情報提供、入社後までのフォロー</td><td className="px-3 py-2 border-b">初回面談では求人を紹介せず、キャリアプランの提案から始める</td></tr>
              <tr><td className="px-3 py-2 border-b">有料職業紹介事業許可番号</td><td className="px-3 py-2 border-b">13-ユ-314719</td><td className="px-3 py-2 border-b">27-ユ-304092</td><td className="px-3 py-2 border-b">13-ユ-308560</td></tr>
              <tr><td className="px-3 py-2 border-b">利用料金</td><td className="px-3 py-2 border-b">無料</td><td className="px-3 py-2 border-b">無料</td><td className="px-3 py-2 border-b">無料</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：各社公式サイト。確認日はMyVision 2026年10月21日、NewMA 2026年10月14日、ASSIGN 2026年7月20日です。詳細は各社のレビューページをご覧ください。</p>

        <h2>MyVisionの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "利用者の8割がコンサル業界未経験",
              desc: "「ご支援する求職者様の8割はコンサル業界未経験の方」と公式に明記されています(トップページでは82%、2025年1〜12月の支援実績の統計と脚注に記載)。わかりやすい業界・個社説明から始まり、選考対策までのノウハウが未経験者前提で蓄積されています。",
            },
            {
              title: "公的データを出典とする支援実績数No.1(公称)",
              desc: "「コンサル転職No.1エージェント」の表記の出典として、厚生労働省職業安定局 人材サービス総合サイトの2025年度(2025年4月〜2026年3月)コンサル特化転職エージェント支援実績数比較が脚注明記されています。",
            },
            {
              title: "「今は転職しない」も含めた中立的キャリア相談",
              desc: "一人ひとりの経験・志向・事情に沿い、転職しない選択肢も含めて提案する方針を公式に掲げています。中長期での支援を前提としたパートナー型の支援です。",
            },
            {
              title: "ケース面接・Webテスト対策のコンテンツ",
              desc: "コンサル選考特有のケース面接対策・Webテスト対策の情報を公式サイトで公開しており、選考対策の専門性を打ち出しています。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>MyVisionが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>未経験からコンサル業界への転身を考えている人</li>
              <li>戦略・総合・IT・シンクタンクの違いから教えてほしい人</li>
              <li>ケース面接・Webテストの対策を専門的に受けたい人</li>
              <li>転職するか決めていない段階でキャリア相談したい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>M&amp;A仲介・FAS・PEファンドなど金融系も見たい人 →<Link href="/review/newma/" className="text-teal underline">NewMA</Link>との併用が候補です</li>
              <li>コンサル以外の職種も幅広く見たい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>スカウトを待ちながら市場価値を測りたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が選択肢になります</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは<strong>2〜3社の併用が一般的</strong>です。コンサル特化はMyVision(+NewMA)、視野を広げるときは総合型という組み合わせをおすすめします。
          コンサル業界全体の転職事情は<Link href="/industry/consulting/" className="text-teal underline">コンサル業界の転職ガイド</Link>もご覧ください。
        </p>

        <h2>MyVision(マイビジョン)の口コミ・評判に関するよくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：未経験からのコンサル転職の有力な相談先</h2>
        <p>
          MyVisionは、コンサル業界特化で「未経験8割」という利用者構成を公表する転職エージェントです。
          公的データを出典とする支援実績数No.1(公称)を掲げ、ケース面接・Webテスト対策まで専門的に支援します。利用は無料なので、
          コンサル業界が気になり始めた段階の人は、まず無料の転職相談を利用することをおすすめします。
        </p>

        <A8Cta slug="myvision" heading="MyVision公式サイトで無料転職相談を予約する" note="コンサル業界のキャリア相談は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">MyVisionを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/newma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              NewMA（コンサル・M&A特化）の詳細
            </Link>
            <Link href="/review/assign/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ASSIGN（アサイン）の詳細
            </Link>
            <Link href="/industry/consulting/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              コンサル業界の転職ガイド
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
        <AgentClients slug="myvision" agentName="MyVision(マイビジョン)" />

      </article>
    </>
  );
}
