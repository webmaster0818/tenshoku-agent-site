import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "アサイン(ASSIGN)の評判は？価値観からキャリアプランを描く若手ハイエンド向けキャリア支援【2026年】",
  description:
    "ASSIGN AGENT(アサイン)の特徴を徹底解説。初回面談では求人紹介をせず、経験・価値観・目指す将来像からキャリアプランを提案する「転職支援ではなくキャリア支援」が核。創業メンバー全員がコンサルファーム出身、DiSC認定資格に基づくオーダーメイド選考対策も。対象は20代〜30代前半の若手ハイエンド層、利用は無料。",
  openGraph: {
    title:
      "アサイン(ASSIGN)の評判は？価値観からキャリアプランを描く若手ハイエンド向けキャリア支援【2026年】",
    description:
      "初回面談では求人を紹介せず、価値観を軸にキャリアプランを設計するASSIGN AGENT(アサイン)。若手ハイエンド向けキャリア支援の特徴・向いている人を解説。",
  },
};

const faqData = [
  {
    q: "アサイン(ASSIGN AGENT)の初回面談では何をしますか？求人は紹介されますか？",
    a: "ASSIGN AGENTの初回面談では求人紹介は行われません。これまでの経験・大切にしたい価値観・目指す将来像のヒアリングに時間を使い、そのうえでキャリアプランを提案し、本人が納得してから案件選定に進む流れです。「まず求人ありき」ではなく「まずキャリアプランありき」で進めたい方に合った設計になっています。",
  },
  {
    q: "アサインの利用に費用はかかりますか？",
    a: "求職者は無料で利用できます。ASSIGN AGENTは有料職業紹介事業(許可番号 13-ユ-308560)として運営されており、企業側の成功報酬モデルが標準です。職業安定法により、求職者から手数料を徴収することは原則禁止されています。",
  },
  {
    q: "アサインはどんな人が対象ですか？",
    a: "20代〜30代前半の若手ハイエンド層が中心です。職種としてはITエンジニア・営業・経理・コンサルティング経験者などが中心とされています。35歳を超える方や、社会人経験の浅い未経験からの転職を希望する方は、求人数の多い総合型エージェントの併用が現実的です。",
  },
  {
    q: "コンサル業界志望でなくても利用できますか？",
    a: "利用できます。創業メンバーは全員コンサルティングファーム出身ですが、他のメンバーにはIBM・リクルート・野村證券・グローバルメーカー出身者などもおり、コンサル業界に限らずキャリア支援を行っています。ただし対象は若手ハイエンド層が中心のため、経歴によっては他エージェントとの併用が有効です。",
  },
  {
    q: "選考対策はどのように行われますか？",
    a: "DiSC認定資格に基づく行動特性分析をもとに、一人ひとりに合わせたオーダーメイドの選考対策資料を作成し、模擬面接を複数回実施するとされています。テンプレート的な対策ではなく、本人の行動特性に沿った準備を重ねたい方に向いた進め方です。",
  },
  {
    q: "アサインはどんな人に向いていますか？",
    a: "「求人を紹介されるより先に、自分の価値観やキャリアの方向性を整理したい」という20代〜30代前半の方に向いています。転職ありきではなくキャリア支援として伴走してもらえるため、転職すべきかどうかの段階から相談したい方にも適しています。逆に、今すぐ大量の求人を比較したい方や未経験転職の方は、リクルートエージェントやdodaなど総合型の併用が現実的です。",
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

export default function AssignReview() {
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
          { name: "アサイン(ASSIGN)の評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            アサイン(ASSIGN)の評判は？価値観からキャリアプランを描く若手ハイエンド向けキャリア支援
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ASSIGN AGENT(アサイン)は、株式会社アサインが運営する20代〜30代前半の若手ハイエンド層向け転職エージェントです。
            最大の特徴は、<strong>初回面談で求人紹介をしない</strong>こと。経験・価値観・目指す将来像を丁寧にヒアリングし、
            価値観を軸にしたキャリアプランを提案したうえで、本人が納得してから案件選定に進みます。
            「転職支援ではなくキャリア支援」を掲げるサービスの特徴・向いている人・向いていない人を、
            公式公表情報にもとづいて整理します。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>初回面談で求人を出さない伴走型</strong>。まず経験・価値観・将来像を聞き、納得してから案件選定に進む「キャリア支援」スタイルです。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>価値観を軸にしたキャリアプラン設計が核</strong>。転職ありきではなく、キャリアの方向性を描くことから支援が始まります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>対象は20代〜30代前半の経験者</strong>(若手ハイエンド層)。ITエンジニア・営業・経理・コンサル経験者が中心です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料</strong>。有料職業紹介(企業側成功報酬モデル)の許可を受けた正規事業者です。</span>
            </li>
          </ul>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "対象年代", value: "20代〜30代前半" },
            { label: "サービス形態", value: "エージェント型" },
            { label: "料金", value: "無料" },
            { label: "支援スタイル", value: "キャリア支援型" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 基本データ */}
        <h2>アサイン(ASSIGN AGENT)の基本データ【2026年7月時点】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ASSIGN AGENT(アサイン)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社アサイン(代表：小瀬村卓実)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2016年12月27日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都千代田区霞が関3-2-5(大阪支社あり)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">許可番号</th><td className="px-3 py-2 border-b">有料職業紹介事業 13-ユ-308560</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象</th><td className="px-3 py-2 border-b">20代〜30代前半の若手ハイエンド層(ITエンジニア・営業・経理・コンサル経験者が中心)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側成功報酬モデルが標準)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">特徴</th><td className="px-3 py-2 border-b">初回面談は求人紹介なし・価値観を軸としたキャリアプラン提案・DiSC認定資格に基づくオーダーメイド選考対策</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">関連事業</th><td className="px-3 py-2 border-b">ASSIGN(転職サイト)／ASSIGN AGENT／ASSIGN新卒／ASSIGN ACADEMY(コーチング)／ASSIGN MEDIA</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談形式</th><td className="px-3 py-2 border-b">最新の実施形式(オンライン対応の可否・拠点)は公式サイトを要確認</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：株式会社アサイン公式会社概要・公式サービス案内、2026年7月20日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* 3大特徴 */}
        <h2>アサインの3大特徴「転職支援ではなくキャリア支援」</h2>
        <p>
          ASSIGN AGENTが多くの転職エージェントと異なるのは、支援の起点が「求人」ではなく<strong>「キャリアプラン」</strong>にあることです。
          公式・提携プログラム資料で示されている特徴は次の3点です。
        </p>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-1">1. 初回面談では求人を紹介しない</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              初回面談は求人票を並べる場ではなく、これまでの経験・大切にしたい価値観・目指す将来像を聞く時間に充てられます。
              そのうえで<strong>価値観を軸にしたキャリアプランを提案</strong>し、本人が納得してから初めて案件選定に進みます。
              「転職すべきかどうか」から相談できる、キャリア支援としての設計です。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-1">2. 創業メンバー全員がコンサルティングファーム出身</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              創業メンバーは全員がコンサルティングファーム出身。その他のメンバーにも
              IBM・リクルート・野村證券・グローバルメーカー出身者などが在籍しています。
              構造的に物事を整理するコンサル的な思考法が、キャリアプランのアドバイスに活きているのが特徴です。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-1">3. DiSC認定資格に基づくオーダーメイド選考対策</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              DiSC認定資格に基づく行動特性分析を用いて、一人ひとりに合わせた<strong>オーダーメイドの選考対策資料</strong>を作成。
              模擬面接も複数回実施されます。汎用的な面接テクニックではなく、
              自分の行動特性を踏まえた選考準備を重ねられる点が強みです。
            </p>
          </div>
        </div>

        {/* 受賞歴 */}
        <h2>アサインの受賞歴(いずれも同社公称)</h2>
        <p>
          株式会社アサインは、以下の受賞歴・実績を公称しています。
          第三者口コミサイトの評点等は当サイトで検証していないため掲載せず、同社の公表情報の範囲で紹介します。
        </p>
        <ul className="mb-8">
          <li>2021年 Bizreach 全部門総合MVP(公称)</li>
          <li>2020年 Bizreach コンサルティング部門MVP(公称)</li>
          <li>外資系転職Liiga 転職支援実績No.1(公称)</li>
          <li>マイナビ Matching of The Year 2019(公称)</li>
        </ul>

        {/* 向いている人・向いていない人 */}
        <h2>アサインが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">アサインが向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>20代〜30代前半で、ITエンジニア・営業・経理・コンサルなどの実務経験がある方</li>
              <li>求人を見る前に、自分の価値観やキャリアの方向性を整理したい方</li>
              <li>「転職すべきかどうか」の段階から伴走してほしい方</li>
              <li>行動特性分析に基づく個別の選考対策・模擬面接を重ねたい方</li>
              <li>コンサル的な思考でキャリアプランのアドバイスを受けたい方</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>35歳を超える方(対象は20代〜30代前半が中心のため)</li>
              <li>未経験からの転職を希望する方</li>
              <li>とにかく多くの求人を比較検討したい方 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>の併用が現実的</li>
              <li>マーケティング職特化の支援を受けたい方 →<Link href="/review/digireka/" className="text-teal underline">デジレカ</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは1社に絞る必要はなく、<strong>2〜3社の併用が一般的</strong>です。
          アサインでキャリアプランを整理しつつ、求人数の多い総合型エージェントを組み合わせると、
          方向性の納得感と求人の網羅性を両立しやすくなります。
          コンサル業界を検討している方は<Link href="/company/it-consultant-salary/" className="text-teal underline">ITコンサルタントの年収・キャリアの解説記事</Link>も参考にしてください。
        </p>

        {/* FAQ */}
        <h2>アサイン(ASSIGN) よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* まとめ */}
        <h2>まとめ：求人ありきではなく、キャリアプランありきで相談したい人へ</h2>
        <p>
          ASSIGN AGENT(アサイン)は、初回面談で求人を紹介せず、経験・価値観・目指す将来像から
          キャリアプランを描くことを起点にした<strong>「転職支援ではなくキャリア支援」</strong>のサービスです。
          創業メンバー全員がコンサルティングファーム出身で、DiSC認定資格に基づくオーダーメイドの選考対策も受けられます。
          対象は20代〜30代前半の若手ハイエンド層が中心のため、該当する方は無料相談から、
          該当しない方は総合型エージェントとの併用から始めるのが現実的です。
        </p>

        {/* CTA */}
        {/* ※アフィリエイト提携承認後に計測リンクへ差し替え予定。現在は公式サイトへの通常リンク */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            価値観からキャリアプランを描くならアサイン
          </h2>
          <p className="text-white/70 text-sm mb-6">
            初回面談は求人紹介ではなく、あなたの経験・価値観・将来像のヒアリングから。利用は無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://assign-inc.com/"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              無料で相談する（公式サイト）
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">アサインを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/digireka/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              デジレカ(マーケ特化)の詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
            </Link>
            <Link href="/company/it-consultant-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ITコンサルタントの年収解説
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
