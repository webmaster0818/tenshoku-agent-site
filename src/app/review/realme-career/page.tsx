import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/realme-career/" },
  title: "リアルミーキャリアの口コミ・評判は？時短正社員ワーママ向け転職エージェントを解説【2026年10月】",
  description:
    "リアルミーキャリアの口コミ・評判を、みん評の傾向と公式口コミ70件の当サイト集計で整理しています。厚生労働省に登録された就職者数、公開求人100件の勤務地・リモート可否、対象エリア、利用の流れ、注意点を解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "リアルミーキャリアの口コミ・評判は？時短正社員ワーママ向け転職エージェントを解説【2026年10月】",
    description:
      "リアルミーキャリアの口コミ・評判の傾向と、時短正社員特化の特徴・対象エリア・注意点を公式情報にもとづいて解説します。利用は無料です。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "リアルミーキャリアの口コミ・評判は？時短正社員ワーママ向け転職エージェントを解説【2026年10月】",
  dateModified: "2026-10-26",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/realme-career/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "リアルミーキャリアの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的な仕組みとして、採用が決まった際に企業側が報酬を支払うモデルのため、求職者が面談・求人紹介・条件交渉支援などの費用を負担することはありません。",
  },
  {
    q: "本当に転職直後から時短勤務できますか？",
    a: "公式FAQでは、紹介求人は基本的に入社時から時短勤務（週5日・1日6〜7時間）が可能な正社員求人と説明されています（2026年10月26日確認）。ただし入社時期・経験・既存メンバーとの業務バランスによっては、企業側が時短勤務者の配置は難しいと判断する場合もあると明記されています。個別の求人条件は面談時にご確認ください。",
  },
  {
    q: "どんな職種の求人がありますか？",
    a: "公式サイトの求人カテゴリには、フルリモートOK・営業・エンジニア・デザイナー・WEBマーケティング・経理・労務・採用・事務・管理部門その他が並んでいます（2026年10月26日確認）。公式FAQではIT・WEB・人材系の中小企業が多めと説明されています。なお週5日フルリモートの求人は営業・エンジニア・WEBマーケティングの一部職種に限られるとされています。",
  },
  {
    q: "パパ（男性）や子どもがいない人でも利用できますか？",
    a: "利用できます。公式FAQで男性の利用が可能で成約実績もあること、子どもがいない人でも介護との両立を目指す方や将来の出産・育児を見据えて働き方を考える方は利用できることが明記されています（2026年10月26日確認）。",
  },
  {
    q: "育休中でも相談できますか？",
    a: "公式FAQでは、子どもの預け先が決まっている（またはほぼ決まる見込みがある）うえで半年以内に入社できる場合は面談可能とされています。預け先が未確定の場合は、転職活動を始めるまでLINEで相談できると案内されています（2026年10月26日確認）。",
  },
  {
    q: "リアルミーキャリアはやばいのですか？評判が悪いというのは本当ですか？",
    a: "厚生労働大臣の有料職業紹介許可（許可番号13-ユ-308876、2017年10月1日許可）を得て運営されている転職エージェントで、厚生労働省「人材サービス総合サイト」には令和6年度の就職者数284人が登録されています。公開口コミでは時短に理解のある求人を紹介してもらえたという声がある一方、選考連絡の遅さを指摘する声や低評価の投稿もあり、評価は分かれています。対象エリアが東京23区・大阪市内中心で、未経験職種への応募はほとんどないと公式FAQに明記されているため、条件が合わないと満足度が下がりやすい点にご留意ください。",
  },
  {
    q: "リアルミーキャリアで断られることはありますか？",
    a: "あり得ます。公式FAQには、状況や求人の状況によっては面談や求人の提供が難しい場合があると記載されています。入社直後から時短で働く即戦力採用のため未経験から応募できる求人はほとんどないこと、育休中は預け先と半年以内の入社見込みが面談の条件になることも明記されています。",
  },
  {
    q: "希望に合う求人がないと言われたらどうなりますか？",
    a: "公式FAQには、状況や求人の状況によっては面談や求人の提供が難しい場合があると記載されています（2026年10月26日確認）。対象エリア（東京23区・大阪市内中心）や経験職種が合わないと紹介が止まることもあり得るため、総合型エージェントと併用して選択肢を確保しておくことをおすすめします。",
  },
  {
    q: "新卒向けの「REALME（リアルミー）」と同じサービスですか？",
    a: "別のサービスです。就活生向けのAI面接サービス「REALME（リアルミー）」は株式会社ABABAが運営しており、時短正社員向け転職エージェントのリアルミーキャリア（株式会社リアルミー運営）とは運営会社が異なります。口コミを調べるときは名前の似たサービスと混同しないよう注意してください。",
  },
  {
    q: "リアルミーキャリア経由の就職者数はどのくらいですか？",
    a: "厚生労働省「人材サービス総合サイト」に登録された株式会社リアルミーの就職者数（4か月以上の有期・無期雇用）は、情報登録年度ベースで令和2年度117人、令和3年度160人、令和4年度183人、令和5年度194人、令和6年度284人です。令和6年度の無期雇用230人のうち、就職後6か月以内の離職者は9人と登録されています（令和8年10月1日現在の掲載情報を2026年10月26日に確認）。",
  },
  {
    q: "時短ではなくフルタイムで働く求人もありますか？",
    a: "あります。公式FAQでは、時短勤務が可能な求人にフルタイム勤務で応募することもできると案内されています。すぐに転職する予定がない場合も登録でき、LINEまたはメールで相談できます（2026年10月26日確認）。",
  },
  {
    q: "連絡がしつこくないですか？退会・配信停止はできますか？",
    a: "公式FAQによると、連絡手段はLINEかメールのみで、マイページはありません。メール配信は専用フォームから停止でき、退会はLINEまたはメールで希望を伝えると個人情報が削除されると案内されています（2026年10月26日確認）。",
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

export default function RealmeCareerReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "リアルミーキャリアの口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            リアルミーキャリアの口コミ・評判は？時短正社員ワーママ向け転職エージェントを解説【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月26日（公式サイト・会社概要・厚生労働省「人材サービス総合サイト」を確認）</p>
          <p className="text-text-secondary leading-relaxed">
            リアルミーキャリアは、株式会社リアルミーが運営する「時短正社員のワーママ向け転職エージェント」です。
            マミートラック・時短期限切れ・小1の壁といった育児と仕事の両立の悩みに対して、
            入社直後から時短勤務・フレックス・リモートで働ける正社員求人の紹介に特化しています。
            この記事では、公開口コミで見られる評判の傾向と、特徴・対象エリア・注意点・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="realme-career" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「転職後すぐに時短正社員」に特化した珍しいエージェントです</strong>。時短勤務・フレックス・リモートなど柔軟に働ける正社員求人が対象です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>登録者は毎月2,000名以上・時短正社員の転職支援実績No.1</strong>と公式サイトに表記されています。育児中のアドバイザーが面談から条件交渉までサポートすると公表されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>ワーママだけでなく育児中のパパ、これから出産・育児を見据える人も対象</strong>と公式FAQに明記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用は無料です</strong>。年収キープ・アップを掲げており、パート切り替えではなく正社員のまま働き方を変えたい人向けです。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="realme-career" heading="リアルミーキャリアに無料で転職相談する" note="時短正社員の転職相談は無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "時短正社員" },
            { label: "登録者数（公式表記）", value: "月2,000名超" },
            { label: "料金", value: "無料" },
            { label: "対象", value: "ワーママ・パパ" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>リアルミーキャリアの基本データ【2026年10月26日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">リアルミーキャリア（時短正社員のワーママ向け転職エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社リアルミー（Real Me Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立・資本金</th><td className="px-3 py-2 border-b">2017年7月設立／資本金780万円（会社概要表記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">増山 祥紘（エス・エム・エスで薬剤師紹介・介護事業者向けSaaS・シンガポールでの事業開発を経て2017年に創業）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都港区西新橋2-2-7 マリソルビル3階（公式サイト表記。会社概要では社員は原則フルリモート勤務と記載）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介許可番号</th><td className="px-3 py-2 border-b">13-ユ-308876（許可年月日 2017年10月1日。公式サイト・厚生労働省「人材サービス総合サイト」で確認）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象者</th><td className="px-3 py-2 border-b">育児中のワーママ・パパ／介護と仕事の両立を目指す人／今後の出産・育児を見据えて働き方を考える人（子どもがいなくても利用可）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象エリア</th><td className="px-3 py-2 border-b">東京23区・大阪市内の求人が中心（それ以外の地域は拡大を目指していると公式FAQに記載）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">取り扱い求人</th><td className="px-3 py-2 border-b">正社員の時短勤務・フレックス・リモートなど柔軟な働き方ができる求人。基本は入社時から週5日・1日6〜7時間の時短勤務が可能な求人（フルリモートOK／営業／エンジニア／デザイナー／WEBマーケティング／経理／労務／採用／事務／管理部門）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">面談／求人紹介／書類作成（職務経歴書の作成代行あり）／オンライン面接対策／条件交渉（育児中のアドバイザーが担当と公式表記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談・連絡方法</th><td className="px-3 py-2 border-b">面談は電話またはGoogle Meetで約30分（平日9時〜18時30分開始まで、土日祝・19時以降は対応なし）。連絡はLINEまたはメール（LINEは平日9時〜16時に順次返信と公式FAQに記載）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">コンテンツ</th><td className="px-3 py-2 border-b">時短勤務の給与シミュレーター／ワーママ転職ノウハウ記事／時短転職の体験談</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://www.realme-career.com/" rel="nofollow noopener" target="_blank" className="underline">リアルミーキャリア公式サイト</a>・<a href="https://www.realme-career.com/faq" rel="nofollow noopener" target="_blank" className="underline">公式よくある質問</a>・<a href="https://realme.co.jp/about" rel="nofollow noopener" target="_blank" className="underline">株式会社リアルミー会社概要</a>、2026年10月26日確認。「時短正社員の転職支援実績No.1」「登録者数毎月2,000名以上」は公式サイト表記（No.1は「時短正社員向けに職業紹介業を営む事業者の転職支援実績を厚労省が運営する人材サービス総合サイトから収集（当社調べ）」と注記）。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>リアルミーキャリアの口コミ・評判の傾向（出典明記）</h2>
        <p className="text-sm text-text-secondary mb-4">
          口コミサイト「みん評」に掲載されている公開口コミを中心に、良い評判・悪い評判で見られる傾向を当サイトが要約しました。口コミ本文の転載や、当サイト独自の点数付けは行っていません。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>時短勤務が可能で、子育てに理解のある企業の求人を紹介してもらえた</li>
              <li>聞きたいことに答えてもらえた、というアドバイザー対応への好意的な声</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>選考結果などの連絡が遅い、問い合わせへの返答が簡素だったという不満が見られます</li>
              <li>「おすすめしない」とする低評価もあり、評価は分かれています</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-4">
          出典：みん評「リアルミーキャリア」の公開口コミ（2026年10月14日、検索結果に表示された投稿の範囲で確認。確認できた投稿は一部のため、傾向は限定的な要約です）を当サイトが要約。2026年10月26日の検索結果では、同ページのタイトルに「口コミ・評判（25件）」「（27件）」と表示されており、件数は取得時期によって異なります。当サイトからは同ページを直接閲覧できなかったため、評価点は掲載していません。最新の件数・評価点は同ページでご確認ください。転職サービスの口コミサイト「コエテコキャリア」の同サービスページには利用者投稿の口コミが掲載されていませんでした（2026年10月14日確認）。Googleマップ等その他の口コミは、確認できた公開口コミが少数のため要約対象にしていません。比較サイトに載っている自社アンケート形式の口コミは、回答者数などを確認できないため根拠にしていません。
        </p>
        <div className="bg-teal/5 rounded-2xl p-5 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2">当サイトの見方</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            評価が分かれる背景は、公式FAQに書かれているサービス仕様からある程度説明できます。求人は<strong>東京23区・大阪市内が中心</strong>で、<strong>IT・WEB・人材系の中小企業が多め</strong>、入社直後から時短で働く即戦力採用のため<strong>未経験から応募できる求人はほとんどない</strong>とされています。
            また、LINEの返信は平日9時〜16時に順次行われる仕組みと公式FAQに記載されています。都市部在住で実務経験があり、時短正社員という条件を最優先にしたい人には合いやすい一方、地方在住・未経験職種への挑戦・求人数重視の人は満足しにくい可能性があります。
            求人の幅を確保したい場合は、総合型エージェントとの併用をおすすめします。
          </p>
        </div>

        <h2>公式口コミページ70件を当サイトが集計した結果</h2>
        <p className="text-sm text-text-secondary mb-3">
          リアルミーキャリアは公式サイトに「口コミ・評判」ページ（2026年10月15日公開）を設け、転職した利用者の声を掲載しています。
          当サイトでは、2026年10月26日時点で同ページに掲載されていた<strong>70件</strong>（2025年10月〜2026年10月の投稿）の属性を集計しました。運営会社が選んで掲載した声であり、第三者の口コミとは性質が異なる点にご留意ください。
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">都道府県（掲載表記）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>東京都 24件</li>
              <li>神奈川県 18件</li>
              <li>千葉県 12件</li>
              <li>埼玉県 10件</li>
              <li>大阪府 5件</li>
              <li>兵庫県 1件</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">年代</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>20代 6件</li>
              <li>30代 50件</li>
              <li>40代 14件</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">転職後の職種（当サイトで分類）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>営業・営業アシスタント・営業事務 27件</li>
              <li>カスタマーサポート・サクセス等 10件</li>
              <li>経理・税務 7件</li>
              <li>マーケティング・Web・広報 7件</li>
              <li>人事・採用 5件</li>
              <li>エンジニア・デザイナー 5件</li>
              <li>事務・アシスタント・その他 9件</li>
            </ul>
          </div>
        </div>
        <ul className="space-y-1 text-sm text-text-secondary list-disc pl-5 mb-3">
          <li>掲載された声の約6割（41件）は東京都・大阪府以外の表記で、神奈川県・千葉県・埼玉県が40件を占めます。都道府県が居住地か勤務地かは記載がありません。公開求人の勤務地が東京23区に集中していること（後述）とあわせると、首都圏から東京23区の企業に転職した例が多い可能性があります。</li>
          <li>同ページでは「リアルミーキャリアをご利用された95％の方が『ママ友に勧めたい』と回答」と掲げており、注記はアンケート実施時期2020〜2024年・有効回答数762です。</li>
          <li>「改善してほしい点」として、紹介される求人が一度に多い、LINEだけのやり取りで選考の進捗を管理しにくい、書類選考対策を受けたかった、東京23区以外の関東圏の求人も扱ってほしい、という声が掲載されています。運営会社は、書類作成代行・面接対策は希望者に実施していること、取扱い地域の拡大を準備中であることを回答しています。</li>
        </ul>
        <p className="text-xs text-text-muted mb-10">出典：<a href="https://www.realme-career.com/articles/5711" rel="nofollow noopener" target="_blank" className="underline">リアルミーキャリア公式「口コミ・評判」ページ</a>（2026年10月26日確認）の掲載内容を当サイトが集計。職種の分類は当サイトによるものです。口コミ本文の転載は行っていません。</p>

        <h2>厚生労働省に登録された就職者数</h2>
        <p className="text-sm text-text-secondary mb-3">
          有料職業紹介事業者は、就職者数と早期離職者数を厚生労働省「人材サービス総合サイト」に毎年登録しています。株式会社リアルミーの掲載内容は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b">情報登録年度</th>
                <th className="text-right px-3 py-2 border-b">就職者数（4か月以上の有期・無期）</th>
                <th className="text-right px-3 py-2 border-b">うち無期雇用</th>
                <th className="text-right px-3 py-2 border-b">無期雇用のうち6か月以内の離職者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">令和2年度</td><td className="text-right px-3 py-2 border-b">117人</td><td className="text-right px-3 py-2 border-b">117人</td><td className="text-right px-3 py-2 border-b">3人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和3年度</td><td className="text-right px-3 py-2 border-b">160人</td><td className="text-right px-3 py-2 border-b">157人</td><td className="text-right px-3 py-2 border-b">4人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和4年度</td><td className="text-right px-3 py-2 border-b">183人</td><td className="text-right px-3 py-2 border-b">174人</td><td className="text-right px-3 py-2 border-b">7人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和5年度</td><td className="text-right px-3 py-2 border-b">194人</td><td className="text-right px-3 py-2 border-b">194人</td><td className="text-right px-3 py-2 border-b">8人</td></tr>
              <tr><td className="px-3 py-2 border-b">令和6年度</td><td className="text-right px-3 py-2 border-b">284人</td><td className="text-right px-3 py-2 border-b">230人</td><td className="text-right px-3 py-2 border-b">9人</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          就職者数は5年度で117人から284人に増えています。令和6年度の無期雇用230人に対する6か月以内の離職者9人は、当サイトの計算で約3.9%です。
          なお、令和7年度の欄は2026年10月26日時点で未登録です。
        </p>
        <p className="text-xs text-text-muted mb-10">出典：<a href="https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do?action=initDisp&screenId=GICB101010" rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>の職業紹介事業詳細（許可番号13-ユ-308876で検索、令和8年10月1日現在の掲載情報）を2026年10月26日に確認。「情報登録年度」は同サイトの表記どおりで、対象となる集計期間は同サイトでご確認ください。</p>

        <h2>公式サイトの公開求人100件を当サイトが集計した結果</h2>
        <p className="text-sm text-text-secondary mb-3">
          公式サイトの求人一覧と職種別ページ（営業・エンジニア・デザイナー・WEBマーケティング・経理・労務・採用・管理部門その他・事務・フルリモートOK）に掲載された求人を重複を除いて数えると、<strong>100件</strong>でした（2026年10月26日確認）。面談後に紹介される非公開の求人は含みません。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-40">時短勤務</th><td className="px-3 py-2 border-b">100件すべてが「OK」</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">最寄駅の所在地</th><td className="px-3 py-2 border-b">東京23区内の駅 99件／神奈川県（辻堂駅）1件。大阪市内の公開求人は0件</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">リモート勤務</th><td className="px-3 py-2 border-b">フルリモート可と明記 11件／週の一部などリモート可 47件／相談可・案件による 10件／不可 32件（うち18件は緊急時のみ相談可）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">フレックス</th><td className="px-3 py-2 border-b">可 55件／相談可 2件／不可・その他 43件</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">年収の表示</th><td className="px-3 py-2 border-b">下限の中央値400万円（98件）・上限の中央値600万円（99件）。時短勤務時の額かフルタイム換算の額かは一覧に記載がありません</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          公開求人で見る限り、勤務地はほぼ東京23区に集中しており、公式FAQの「東京23区・大阪市内が中心」という案内のうち大阪市内の求人は公開分には見当たりませんでした。
          リモート勤務ができない求人も約3割あるため、在宅勤務を重視する場合は、面談の最初に条件として伝えることをおすすめします。
        </p>
        <p className="text-xs text-text-muted mb-10">出典：<a href="https://www.realme-career.com/jobs" rel="nofollow noopener" target="_blank" className="underline">リアルミーキャリア公式「時短ワーママ歓迎のおすすめ求人情報」</a>および職種別の求人ページ（2026年10月26日確認）を当サイトが集計。公開求人は随時入れ替わります。</p>

        <h2>リアルミーキャリアの利用の流れと退会方法</h2>
        <ol className="space-y-2 text-sm text-text-secondary list-decimal pl-5 mb-4">
          <li>公式サイトで会員登録（約1分）</li>
          <li>LINE登録とアンケート回答</li>
          <li>アドバイザーとの面談（電話またはGoogle Meetで約30分）</li>
          <li>LINEで1対1のやり取りをしながら求人紹介 → 応募（リアルミーから企業へ推薦）</li>
          <li>オンライン面接対策 → 内定・条件交渉 → 入社</li>
        </ol>
        <p className="text-sm text-text-secondary mb-2">
          公式FAQによると求人の検索機能はなく、面談で希望をヒアリングしたうえで求人が案内される仕組みです（公式サイトには一部の求人が職種別に公開されています）。ログイン用のマイページもなく、やり取りはLINEかメールで行います。
        </p>
        <p className="text-sm text-text-secondary mb-2">
          <strong>退会方法：</strong>LINEまたはメールで退会希望を伝えると個人情報が削除されます。メール配信のみ止めたい場合は専用フォームから配信停止できます。
        </p>
        <p className="text-xs text-text-muted mb-10">出典：リアルミーキャリア公式「よくある質問」（2026年10月26日確認）。</p>

        <div className="rounded-xl border border-border p-4 mb-10 text-sm text-text-secondary">
          <strong>同名サービスに注意：</strong>「リアルミー 口コミ」で検索すると、就活生向けAI面接サービス「REALME（リアルミー）」（株式会社ABABA運営）の口コミが表示されることがあります。転職エージェントのリアルミーキャリア（株式会社リアルミー運営）とは別サービスです。
        </div>

        <h2>評判を踏まえたリアルミーキャリアの効果的な使い方</h2>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-text-secondary mb-3">
          <li><strong>面談前に「預け先」と「入社可能時期」を整理する</strong>：育休中は、預け先が決まっている（見込みがある）ことと半年以内に入社できることが面談の条件と公式FAQに記載されています。</li>
          <li><strong>経験のある職種で探す</strong>：入社直後から時短で働く即戦力採用のため、未経験から応募できる求人はほとんどないと公式FAQに明記されています。これまでの経験を活かせる職種を軸にすると紹介を受けやすくなります。</li>
          <li><strong>時短の時間・リモート可否など条件の優先順位を伝える</strong>：求人は基本的に週5日・1日6〜7時間の時短勤務です。週5日フルリモートは一部職種に限られるため、何を譲れないかを最初に伝えておくとミスマッチを防げます。</li>
          <li><strong>総合型エージェントと併用する</strong>：求人は東京23区・大阪市内が中心です。地域や求人数の不足を補うため、<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型と並行して利用することをおすすめします。</li>
          <li><strong>連絡はLINEで、面談は平日日中に</strong>：面談は平日9時〜18時30分開始までです。昼休みなどに枠を取れるよう、予定を確保しておくことをおすすめします。</li>
        </ol>
        <p className="text-xs text-text-muted mb-10">出典：リアルミーキャリア公式「よくある質問」（2026年10月26日確認）。</p>

        <h2>リアルミーキャリアのデメリット・注意点（公式情報から）</h2>
        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 mb-10">
          <li><strong>対象エリアが限られる：</strong>東京23区・大阪市内の求人が中心です。</li>
          <li><strong>未経験職種への転職は難しい：</strong>即戦力採用のため、未経験から応募できる求人はほとんどないと公式FAQに明記されています。</li>
          <li><strong>週2〜4日勤務は基本対象外：</strong>求人は基本的に週5日勤務です。週2〜4日の求人はまれで、その場合もパート・アルバイト等の雇用形態がほとんどです。</li>
          <li><strong>フルリモートは一部職種のみ：</strong>週5日フルリモートは営業・エンジニア・WEBマーケティングの一部に限られます。</li>
          <li><strong>時短でも配置が難しいと判断される場合がある：</strong>入社時期・経験・既存メンバーとの業務バランス次第で企業が時短配置を難しいと判断するケースもあります。</li>
          <li><strong>面談は平日日中のみ：</strong>平日9時〜18時30分開始までで、土日祝・19時以降は対応していません。</li>
        </ul>

        <h2>リアルミーキャリアの特徴（公式の公表情報より）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "「入社直後から時短」の正社員求人に特化",
              desc: "一般的なエージェントでは「時短はフルタイム勤務で実績を作ってから」となりがちですが、リアルミーキャリアは転職後すぐに時短正社員として勤務できる求人を扱うことを掲げています。時短のまま年収キープ・アップを目指せる点が特徴です。",
            },
            {
              title: "マミートラック・時短期限・小1の壁への対応",
              desc: "「マミートラックにはまってしまった」「時短勤務できる期限が切れそう」「小1の壁で両立が不安」といった育児中特有の悩みを入口にしたサービス設計で、公式サイトにはワーママ転職ノウハウ・体験談コンテンツが多数用意されています。",
            },
            {
              title: "育児中のアドバイザーがサポート",
              desc: "面談から選考対策、条件交渉まで、育児中のアドバイザーがサポートすると公表されています。保育園のお迎え時間や急な発熱対応など、当事者でないと分かりにくい条件面の交渉を相談しやすい体制です。",
            },
            {
              title: "都市部オフィスワーク系の職種構成",
              desc: "求人カテゴリは営業・エンジニア・デザイナー・WEBマーケティング・経理・労務・採用・事務などです。フルリモートOK求人のカテゴリもあり、通勤時間を削減したい人の選択肢にもなります。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>リアルミーキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>育児と両立しながら正社員のまま転職したいワーママ・パパ</li>
              <li>今の会社の時短勤務の期限が切れそうで悩んでいる人</li>
              <li>マミートラックから抜け出してキャリアを再構築したい人</li>
              <li>時短・フレックス・リモートなど柔軟な働き方を最優先にしたい人</li>
              <li>育休明け・育休中の転職を考えている人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>フルタイムで女性のキャリアアップ転職を目指す人 →<Link href="/review/type-woman/" className="text-teal underline">type女性の転職エージェント</Link>など女性特化型が候補です</li>
              <li>幅広い求人から選びたい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>との併用をおすすめします</li>
              <li>東京23区・大阪市内以外で通勤勤務を希望する人 →求人が都市部中心のため、総合型で選択肢を確保することをおすすめします</li>
              <li>未経験職種に挑戦したい人 →即戦力採用中心のため、総合型・未経験向けサービスの検討をおすすめします</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          「時短正社員」という切り口は他の大手にはない特化領域です。働き方の条件を最優先にするならリアルミーキャリア、
          キャリアアップ軸なら女性特化・総合型と、<strong>目的別に2〜3社を併用</strong>することをおすすめします。
          女性向けエージェントの全体像は<Link href="/type/women/" className="text-teal underline">女性向け転職エージェントまとめ</Link>で解説しています。
        </p>

        <h2>リアルミーキャリア よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：育児と両立する転職の第一候補</h2>
        <p>
          リアルミーキャリアは、入社直後から時短勤務できる正社員求人に特化した、対象を明確に絞った転職エージェントです。
          時短のまま年収キープ・アップを目指す設計、育児中アドバイザーのサポート、育休中・育休明けへの対応が特徴で、利用は無料です。
          育児と仕事の両立に悩んでいる人、時短期限や小1の壁を前に働き方を見直したい人は、
          まず無料の転職相談で紹介可能な求人を確認することをおすすめします。
        </p>

        <FelmatCta slug="realme-career" heading="リアルミーキャリアに無料で転職相談する" note="時短正社員の転職相談は無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のエージェントと比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/type/women/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              女性向けエージェントまとめ
            </Link>
            <Link href="/review/type-woman/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              type女性の転職エージェントの詳細
            </Link>
            <Link href="/review/tokihana-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トキハナキャリアの詳細
            </Link>
            <Link href="/review/hoiku-musubi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ほいくのむすびの詳細
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
