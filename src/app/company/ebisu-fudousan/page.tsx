import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "恵比寿不動産の口コミ・評判（採用・働き方）は？年収・残業・研修を公式情報で解説【2026年10月】",
  description:
    "恵比寿不動産（株式会社ライフアドバンス）の口コミ・評判を採用・働き方の観点で整理しています。エン カイシャの評判（17人・スコア3.7・平均残業32時間）と、完全反響営業・みなし残業45時間分込みなど公式採用情報から注意点を解説します。",
  alternates: { canonical: "/company/ebisu-fudousan/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "恵比寿不動産の口コミ・評判（採用・働き方）は？年収・残業・研修を公式情報で解説【2026年10月】",
    description: "恵比寿不動産の口コミ・評判を採用・働き方の観点で、公式情報をもとに整理しています。完全反響営業・みなし残業・休日・研修の内容を解説します。",
  },
};

const faqData = [
  {
    q: "恵比寿不動産は「やばい」「ブラック」という評判は本当ですか？",
    a: "社員口コミサイト「エン カイシャの評判」では、社員・元社員17人の回答による評判スコアが3.7、掲載口コミは5件で、社員同士の協力やコミュニケーションの活発さを評価する声がある一方、成果が出ない人は苦しむという指摘もあります（2026年10月14日確認）。件数が少ないため、これだけで判断するのは難しい状況です。公式採用ページでは、飛び込み営業なしの完全反響営業、残業月20時間以内、年間休日115日以上、育児休暇取得実績100%（2025年度）と記載される一方、月給にはみなし残業45時間分が含まれ、休日はローテーション制です。条件はカジュアル面談で職種ごとに確認することをおすすめします。",
  },
  {
    q: "恵比寿不動産の残業は本当に月20時間以内ですか？",
    a: "公式採用ページは「残業月20時間以内」と記載していますが、エン カイシャの評判では回答者17人の平均残業時間が32時間（納得度85%）でした。同サイトは「回答者の平均値になるため、実際の平均値とは異なります」と注記しています（2026年10月14日確認）。月給にはみなし残業45時間分が含まれるため、希望職種の実際の残業時間はカジュアル面談でご確認ください。",
  },
  {
    q: "恵比寿不動産の休日・勤務時間はどうなっていますか？",
    a: "公式募集要項（2026年10月14日確認）では、勤務時間は9:30〜19:00（実働8時間・休憩1時間30分）、休日は月8日（水曜・その他ローテーション制）、年間休日115日以上、5日以上の連続休暇可です。賃貸管理（営業・リーシングチーム）は完全週休二日制と記載されています。",
  },
  {
    q: "恵比寿不動産の営業は飛び込み営業がありますか？",
    a: "公式採用ページには「飛び込み営業や、お客様に迷惑がかかる様な無理な営業は一切いたしません」と明記されています（2026年8月22日確認）。自社サイト（月120万PV・40万人と公式記載）やInstagram等からの問い合わせに対応する完全反響営業で、賃貸部署は1人月60件以上、売買部署は1人月20件以上の問い合わせがあると記載されています。",
  },
  {
    q: "恵比寿不動産の給与・年収はどのくらいですか？",
    a: "公式採用ページの記載（2026年8月22日確認）によると、売買仲介は物件単価平均1億円で、売上の20%前後を賞与とインセンティブの合計として還元し、多い人では年収2,000万円以上とされています。賃貸仲介は平均年収600万円で、1年目から月70万円以上を稼ぐ社員もいるとされています。管理部門の提案営業は月給30万円スタート＋成約インセンティブです。募集要項上の月給は30万〜100万円＋歩合＋賞与で、みなし残業45時間分（7.4万円）を含みます（2026年10月14日確認）。いずれも公式採用ページ掲載値であり、個人の成果により変動します。",
  },
  {
    q: "不動産業界未経験でも応募できますか？",
    a: "公式採用ページでは、動画教育ツールやレベル別研修・先輩とのロープレ・マンツーマンのサポート体制を整えており、「研修でほっとかれる、とりあえずやってみな等は行いません」と記載されています（2026年8月22日確認）。研修体制を前提にした採用設計です。応募資格の詳細は募集要項・カジュアル面談でご確認ください。",
  },
  {
    q: "選考には履歴書が必要ですか？",
    a: "公式採用ページには「履歴書・職務経歴書不要 カジュアル面談を申し込む」と記載されており（2026年8月22日確認）、書類を用意せずカジュアル面談から始められる選考入口が用意されています。",
  },
  {
    q: "恵比寿不動産の会社概要を教えてください。",
    a: "運営会社は株式会社ライフアドバンス（屋号：恵比寿不動産）です。代表者は檜垣知宏氏、設立2014年8月29日、資本金800万円、所在地は東京都渋谷区東3-25-11 TOKYU REIT恵比寿ビル4階・7階、宅建業免許は東京都知事（3）第97301号です（公式会社概要・2026年10月14日確認）。都心8区の賃貸・売買仲介を中心に、リフォームや投資物件も扱っています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "恵比寿不動産の口コミ・評判（採用・働き方）は？年収・残業・研修を公式情報で解説【2026年10月】",
  dateModified: "2026-10-14",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/ebisu-fudousan/" },
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

export default function EbisuFudousanCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "恵比寿不動産の口コミ・評判（採用・働き方）" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            恵比寿不動産の口コミ・評判（採用・働き方）は？年収・残業・研修を公式情報で解説【2026年10月】
          </h1>
        <p className="text-xs text-text-muted mb-4">最終更新: 2026年10月14日（公式採用ページ・会社概要を再確認）</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            恵比寿不動産（運営：株式会社ライフアドバンス）は、恵比寿を拠点に都心8区の賃貸・売買仲介を手がける不動産会社です。
            不動産営業といえば「飛び込み・テレアポ・激務」のイメージがありますが、同社は自社集客による完全反響営業と
            残業月20時間以内を公式採用ページで掲げており、営業スタイルが従来型と大きく異なります。
            本記事では、公式採用ページ・会社概要で確認できる一次情報をもとに、求人内容・給与体系・選考の入口を整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">恵比寿不動産の採用のポイント</a></li>
            <li><a href="#reviews" className="text-teal hover:underline">恵比寿不動産の口コミ・評判（出典を明記した傾向）</a></li>
            <li><a href="#caution" className="text-teal hover:underline">入社前に確認したい注意点（公式条件から）</a></li>
            <li><a href="#s2" className="text-teal hover:underline">恵比寿不動産の基本データ【2026年10月14日確認】</a></li>
            <li><a href="#s3" className="text-teal hover:underline">募集職種と給与体系（公式採用ページより）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">未経験者向けの研修体制</a></li>
            <li><a href="#s5" className="text-teal hover:underline">向いている人・向いていない人</a></li>
            <li><a href="#s6" className="text-teal hover:underline">恵比寿不動産の口コミ・評判と採用 よくある質問</a></li>
            <li><a href="#s7" className="text-teal hover:underline">まとめ：反響営業×都心特化の不動産転職</a></li>
          </ol>
        </nav>

        <h2 id="s1">恵比寿不動産の採用のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>完全反響営業で、飛び込み営業はありません</strong>。自社サイト（月120万PV・40万人と公式記載）等からの問い合わせ対応が中心で、賃貸は1人月60件以上・売買は月20件以上の反響と公式に記載されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>成果報酬の還元方法が明確です</strong>。売買仲介は物件単価平均1億円で、売上の20%前後を賞与＋インセンティブとして還元しており（年収2,000万円超の社員もいます）、賃貸は平均年収600万円と公式採用ページに掲載されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>残業月20時間以内・事務作業なし</strong>の環境と研修体制（動画教育・ロープレ・マンツーマン指導）が公式採用ページに明記されています。未経験からの不動産営業挑戦を前提にした設計です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>履歴書・職務経歴書不要のカジュアル面談</strong>から始められます。転職を決めていない情報収集段階でも話を聞きやすい入口です。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="ebisu-fudousan" heading="恵比寿不動産のカジュアル面談を申し込む" note="履歴書・職務経歴書不要と公式採用ページに記載されています。" />

        <h2 id="reviews">恵比寿不動産の口コミ・評判（出典を明記した傾向）</h2>
        <p className="mb-4">
          「恵比寿不動産 口コミ」「恵比寿不動産 評判」で調べる人の関心は、大きく<strong>(1) 社員として働く環境の評判</strong>と
          <strong>(2) 部屋探し・売買を依頼する不動産会社としての評判</strong>の2つに分かれます。本ページは主に(1)採用・働き方の観点で整理しています。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">社員口コミ（働き方）：エン カイシャの評判</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              エン・ジャパンの社員口コミサイト「エン カイシャの評判」の株式会社ライフアドバンス（恵比寿不動産）ページでは、社員・元社員<strong>17人の回答による評判スコアが3.7</strong>、
              回答者の平均年収642万円（17人・平均30歳、納得度81%）、平均残業時間32時間（納得度85%）と表示されています（2026年10月14日確認）。
              同サイトは「回答者の平均値になるため、実際の平均値とは異なります」と注記しています。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">顧客口コミ（不動産会社として）の確認状況</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              公式サイトには「お客様の声」「売買の声」「オーナー様の声」のページがあり、トップページに「口コミ投稿」の導線があります（いずれも公式運営のため第三者評価ではありません）。
              公式サイトのGoogle口コミ平均点などの公称値は、2026年10月14日の確認時点で見当たりませんでした。
              第三者の評価はGoogleマップで店舗名を検索し、最新の投稿を中心に確認することをおすすめします。
            </p>
          </div>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <caption className="text-left text-sm font-bold text-navy mb-2">エン カイシャの評判：項目別スコア（17人の回答）</caption>
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">会社の成長性・将来性</th><td className="px-3 py-2 border-b">3.8</td><th className="bg-gray-50 text-left px-3 py-2 border-b">事業の優位性・独自性</th><td className="px-3 py-2 border-b">3.6</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">実力主義</th><td className="px-3 py-2 border-b">3.9</td><th className="bg-gray-50 text-left px-3 py-2 border-b">活気のある風土</th><td className="px-3 py-2 border-b">3.7</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">20代成長環境</th><td className="px-3 py-2 border-b">3.8</td><th className="bg-gray-50 text-left px-3 py-2 border-b">仕事を通じた社会貢献</th><td className="px-3 py-2 border-b">3.6</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">イノベーションへの挑戦</th><td className="px-3 py-2 border-b">3.7</td><th className="bg-gray-50 text-left px-3 py-2 border-b">経営陣の手腕</th><td className="px-3 py-2 border-b">3.6</td></tr>
            </tbody>
          </table>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判の傾向（掲載口コミ5件から）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>社員同士が協力し合い、日々のコミュニケーションが活発（2026年時点の情報・20代女性・現職・中途入社）</li>
              <li>事業拡大中で、会社とともに成長できる環境に魅力（同上）</li>
              <li>都心特化でエリアに詳しくなれ、高単価の顧客が多い。部署を超えて相談しやすい（2017年時点の情報・30代・退職済み・中途入社）</li>
              <li>男女で待遇・働きやすさの差はなく、休日の希望が通らないことはほぼない。有給を取りにくい圧力も特にない（同上）</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点の傾向（掲載口コミ5件から）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>都心は競合も多く強いため、自分の武器が必要。成果が出ない人はずっと苦しむ（ただし圧力や見捨てる雰囲気はないとも記載）（2017年時点の情報・退職者）</li>
              <li>社員数がまだ多くなく、組織の基盤はこれから整う段階（2026年時点の情報・現職）</li>
              <li>回答者の平均残業時間は32時間で、公式の「残業月20時間以内」より長くなっています（回答者平均のため、実際とは異なる場合があります）</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mb-4">
          出典：<a href="https://employment.en-japan.com/comp-85058/" rel="nofollow noopener" target="_blank" className="text-teal underline">エン転職「株式会社ライフアドバンス（恵比寿不動産）」企業ページ</a>内の「エン カイシャの評判」掲載データ・口コミ（口コミ投稿日2026年3月19日・5月20日、2026年10月14日確認）を当サイトが要約しています。
          掲載口コミは5件と少なく、うち2件は2017年時点の情報です。同ページには採用担当者からの回答（2026年3月30日）も掲載されていますが、企業側のコメントのため傾向には含めていません。
          OpenWork・転職会議・キャリコネは、2026年10月14日のWeb検索では同社の口コミページを確認できませんでした。
        </p>
        <div className="glass-card p-5 mb-4">
          <h3 className="font-bold text-navy mb-2 text-sm">当サイトの見方</h3>
          <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
            <li>公開口コミが少ない会社では、数件の極端な投稿が印象を左右しやすいため、<strong>公式の募集要項の数字</strong>（給与・残業・休日）を軸に判断することをおすすめします。</li>
            <li>公式採用ページでは社員64名（20代36名・30代26名・40代2名）、未経験入社37名と公表されており、若手・未経験者中心の組織であることは事実ベースで読み取れます（エン転職の会社概要では54名・2026年3月時点。時点の違いとみられます）。口コミ回答者の平均年齢30歳とも整合します。</li>
            <li>「評判が良い／悪い」よりも、自分が希望する職種（賃貸・売買・管理）の休日・歩合・残業の条件をカジュアル面談で具体的に確認することが重要です。</li>
          </ul>
        </div>
        <p className="text-xs text-text-muted mb-4">
          出典：エン カイシャの評判・Web検索による公開口コミの確認・恵比寿不動産公式サイト（2026年10月14日確認）。当サイトは口コミ本文の転載・創作、独自の点数付けは行っていません。
        </p>
        <div className="rounded-xl border border-border p-4 mb-8 text-sm text-text-secondary">
          <strong>同名・類似名の会社についてのご注意：</strong>「恵比寿」を冠する不動産会社・店舗は複数存在しうるため、口コミを調べる際は
          運営会社「株式会社ライフアドバンス」、所在地「渋谷区東3-25-11 TOKYU REIT恵比寿ビル」、免許番号「東京都知事（3）第97301号」が一致するかを確認してください。
          また「恵比寿 不動産 口コミ」で検索すると、恵比寿エリアのマンション口コミや周辺不動産会社のランキングが多く表示され、本社の評判とは無関係な情報が混ざりやすい点にも注意が必要です。
        </div>

        <h2 id="caution">入社前に確認したい注意点（公式条件から）</h2>
        <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5 mb-4">
          <li><strong>みなし残業代込みの月給</strong>：月給30万円〜100万円には、みなし残業代 月45時間分（一律7.4万円）が含まれると募集要項に記載されています（超過分は全額支給）。「残業月20時間以内」の記載とあわせて、実際の残業時間は面談でご確認ください。</li>
          <li><strong>休日はシフト制</strong>：休日は月8日（水曜＋ローテーション制）、年間休日115日以上です。土日休みではない職種がある一方、賃貸管理は完全週休二日制と記載されています。</li>
          <li><strong>試用期間</strong>：6ヵ月の試用期間があります（期間中は契約社員・月給28万円）。</li>
          <li><strong>歩合比重</strong>：年収例は売買で600万〜2,000万円、賃貸で480万〜950万円と幅があり、成果による差が大きい給与設計です。</li>
          <li><strong>車の免許</strong>：賃貸仲介営業は普通自動車運転免許（AT限定可）が必須です。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">出典：恵比寿不動産 公式採用ページ（ebisu-fudousan.com/recruit/）募集要項、2026年10月14日確認。</p>

        <h2 id="s2">恵比寿不動産の基本データ【2026年10月14日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">会社名</th><td className="px-3 py-2 border-b">株式会社ライフアドバンス（屋号：恵比寿不動産）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">檜垣 知宏</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2014年8月29日（資本金800万円）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">宅建業免許</th><td className="px-3 py-2 border-b">宅地建物取引業 東京都知事（3）第97301号（全日本不動産協会 加盟）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">社員数</th><td className="px-3 py-2 border-b">64名（男性44名・女性20名、うち未経験入社37名）と公式採用ページに記載</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都渋谷区東3-25-11 TOKYU REIT恵比寿ビル4階・7階</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">事業内容</th><td className="px-3 py-2 border-b">都心8区（千代田・中央・港・新宿・渋谷・世田谷・品川・目黒）中心の賃貸仲介・売買仲介・リフォーム・投資物件</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">営業スタイル</th><td className="px-3 py-2 border-b">完全反響営業（自社サイト・SNS集客／飛び込み営業なしと公式明記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">働き方</th><td className="px-3 py-2 border-b">残業月20時間以内と記載／勤務 9:30〜19:00（休憩1.5時間）／休日 月8日（水曜＋ローテーション）・年間休日115日以上</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">給与</th><td className="px-3 py-2 border-b">月給30万〜100万円＋歩合＋賞与年2回（みなし残業45時間分・7.4万円含む）、宅建手当月2万円、住宅手当（条件付き月2万円まで）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">勤務地</th><td className="px-3 py-2 border-b">恵比寿駅 徒歩2〜3分</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">選考入口</th><td className="px-3 py-2 border-b">履歴書・職務経歴書不要のカジュアル面談</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：<a href="https://ebisu-fudousan.com/recruit/" rel="nofollow noopener" target="_blank" className="text-teal underline">恵比寿不動産公式採用ページ</a>・<a href="https://ebisu-fudousan.com/company/" rel="nofollow noopener" target="_blank" className="text-teal underline">会社概要</a>、2026年10月14日確認。
          「物件数No.1」等の表記は日本マーケティングリサーチ機構による2024年1月期の市場調査（都心8区対象）にもとづく公式サイト記載です。
          給与・年収はすべて公式採用ページ掲載値で、個人の成果・職種により変動します。当サイトでは口コミ・数値の創作は行っていません。
        </p>

        <h2 id="s3">募集職種と給与体系（公式採用ページより）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "売買仲介営業（富裕層向け）",
              desc: "都心の物件単価平均1億円の売買仲介です。売上の20%前後を賞与とインセンティブの合計として還元する仕組みで、多い人では年収2,000万円以上と公式に記載されています。経営者・医師などハイクラス顧客が中心で、マーケティング部門の集客による反響営業です。",
            },
            {
              title: "賃貸仲介営業",
              desc: "家賃相場20万円超の都心エリアが中心で成約単価が高く、平均年収600万円・1年目から月70万円以上を稼ぐ社員もいると公式に記載されています。1人月60件以上の反響があり、集客はプロに任せて接客に集中できる体制です。",
            },
            {
              title: "管理物件の提案営業",
              desc: "オーナーへの提案営業・電話対応を担う100%反響営業です。月給30万円スタート＋成約ごとのインセンティブで、残業は月15時間程度と公式に記載されています。高収入よりワークライフバランス重視の設計です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 id="s4">未経験者向けの研修体制</h2>
        <p className="mb-4">
          公式採用ページによると、動画教育ツールの導入、レベル別研修、状況設定ランダムのロープレ、先輩への同行、
          専属の先輩によるマンツーマン指導が用意されており、「本番に近い状態のロープレにより多くの先輩が1ヶ月以内に成約」と記載されています。
          不動産営業が初めての人でも、研修とサポートを前提にした受け入れ体制です。
          未経験からの転職全般の進め方は<Link href="/type/inexperienced/" className="text-teal underline">未経験向け転職ガイド</Link>も参考にしてください。
        </p>

        <h2 id="s5">向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>営業成果を給与に直結させたい人（売買のインセンティブ設計）</li>
              <li>飛び込み・テレアポなしの反響営業で不動産業界に挑戦したい人</li>
              <li>残業を抑えて接客に集中したい人</li>
              <li>東京都心で働きたい人（勤務地は恵比寿）</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他の選択肢が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>不動産以外も含めて比較検討したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>等の総合型の転職エージェントで求人の幅を確保できます</li>
              <li>固定給の安定性を最優先する人 →インセンティブ比重の高い給与設計のため、条件はカジュアル面談でのご確認をおすすめします</li>
              <li>東京以外での勤務を希望する人には、勤務地が恵比寿のため、他社の求人もあわせて確認することをおすすめします</li>
            </ul>
          </div>
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s6">恵比寿不動産の口コミ・評判と採用 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2 id="s7">まとめ：反響営業×都心特化の不動産転職</h2>
        <p>
          恵比寿不動産（株式会社ライフアドバンス）は、都心8区特化の集客力を土台にした完全反響営業と、
          成果の還元が明確な給与設計を公式に掲げる不動産会社です。
          興味がある場合は、履歴書不要のカジュアル面談で職場の雰囲気や条件の詳細を確認するところから始められます。
          企業への直接応募と並行して、<Link href="/knowledge/multiple/" className="text-teal underline">転職エージェントの併用</Link>で選択肢を広げておくこともおすすめします。
        </p>

        <FelmatCta slug="ebisu-fudousan" heading="恵比寿不動産のカジュアル面談を申し込む" note="履歴書・職務経歴書不要と公式採用ページに記載されています。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/area/tokyo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              東京の転職エージェント
            </Link>
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向け転職ガイド
            </Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              企業別転職ガイド一覧
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
