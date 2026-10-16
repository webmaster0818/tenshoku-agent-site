import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/unison-career/" },
  title: "ユニゾンキャリアの口コミ・評判は？「やばい」は本当か、IT特化エージェントを経験者/未経験別に解説【2026年10月】",
  description:
    "ユニゾンキャリアの口コミ・評判を、コエテコキャリアの公開口コミの傾向と公式情報(Google口コミ4.8・470件公称、許可番号13-ユ-313348)から整理しています。IT・Web特化の特徴、デメリット、経験者/未経験の窓口を解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ユニゾンキャリアの口コミ・評判は？「やばい」は本当か、IT特化エージェントを経験者/未経験別に解説【2026年10月】",
    description:
      "ユニゾンキャリアの口コミ・評判の傾向と、運営会社・許可番号・利用の流れなどの公式情報を、経験者/未経験者別に整理しています。利用は無料です。",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ユニゾンキャリアの口コミ・評判は？「やばい」は本当か、IT特化エージェントを経験者/未経験別に解説【2026年10月】",
  dateModified: "2026-10-14",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/unison-career/" },
  inLanguage: "ja",
};

const faqData = [
  {
    q: "ユニゾンキャリアは「やばい」「怪しい」サービスではありませんか？",
    a: "運営は株式会社ユニゾン・テクノロジー(2021年1月6日設立、東京都渋谷区、従業員112名・アルバイト等含む)で、厚生労働大臣の有料職業紹介事業許可(13-ユ-313348)を受けて人材紹介を行っています(運営会社公式の会社概要、2026年10月14日確認)。口コミサイト「コエテコキャリア」上の口コミは17件(2026年10月14日確認)と公開口コミの件数が多くないため判断材料が見つけにくい面はありますが、許可を受けた正規の転職エージェントです。",
  },
  {
    q: "学歴・経歴に自信がなくても利用できますか？",
    a: "公式FAQでは、前職を短期で離職した人や専門学校・大学を中退した人でも利用して内定を得ている人は多い、と回答しています。また文系・未経験についても「問題ございません」としています(公式FAQ、2026年10月14日確認)。ただし紹介できる求人の有無は個別の経歴・希望によります。",
  },
  {
    q: "オンラインや電話で相談できますか？",
    a: "公式FAQで、オンライン・電話のどちらでも相談可能と回答しています。市場価値(年収)の確認だけの相談も可能としており、リモートワーク(在宅)の求人も扱っているとしています(公式FAQ、2026年10月14日確認)。",
  },
  {
    q: "ユニゾンキャリアの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリア相談・求人紹介・選考対策などの費用を負担することはありません。",
  },
  {
    q: "IT未経験でも利用できますか？",
    a: "利用できます。ユニゾンキャリアは未経験からエンジニアを目指す人向けの相談窓口を設けており、経験者向けとは別の入口になっています。未経験の場合はキャリアの方向性(インフラ/開発など)の相談から始められます。",
  },
  {
    q: "「Google口コミ4.8」はどのような数値ですか？",
    a: "ユニゾンキャリアが公式LPに掲げている、Google上の口コミ評価です。2026年10月14日の当サイト確認時点で、公式LPの表記は「Google口コミ(470件)から抜粋」「2025年12月23日時点での口コミ参照」で評価4.8でした(別のLPには2025年10月20日時点・435件の表記も残っています)。公式トップページは件数を示さず4.8のみの表示です。第三者プラットフォーム上の利用者投稿に基づく数値ですが、公式による抜粋・公称値であり、投稿時期・母集団は変動するため参考値として捉えてください。",
  },
  {
    q: "他の大手エージェントとの違いは何ですか？",
    a: "公式サイトでは「大量応募＆同意なしの応募はしません」という方針を明示しています。機械的に多数の企業へ応募させるのではなく、市場価値・適性年収の提示と求人の厳選紹介を掲げている点が特徴です。求人数の規模ではリクルートエージェントやdodaなどの総合型が上回るため、併用をおすすめします。",
  },
  {
    q: "在職中でも相談できますか？",
    a: "在職中・離職中どちらの相談にも対応しています(公式LPに両方の入口が明示されています)。IT業界は在職中の転職活動が一般的なので、情報収集段階での相談も可能です。",
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

export default function UnisonCareerReview() {
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
          { name: "ユニゾンキャリアの口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ユニゾンキャリアの口コミ・評判は？「やばい」は本当か、IT特化エージェントを経験者/未経験別に解説【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月14日（公式サイト・運営会社ページ・公開口コミを同日確認）</p>
          <p className="text-text-secondary leading-relaxed">
            ユニゾンキャリアは、株式会社ユニゾン・テクノロジーが運営するIT・Web業界専門の転職エージェントです。
            「大量応募＆同意なしの応募はしません」という厳選紹介の方針と、Google口コミ4.8(470件・2025年12月23日時点の公称)を掲げています。
            エンジニア経験者と未経験者で相談の入口が分かれているのが特徴で、この記事では公開口コミの傾向(出典を明記)と、
            運営会社・許可番号・利用の流れなど公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="unison-career" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>IT・Web業界専門の転職エージェント</strong>です。エンジニアの転職支援に対象を絞り、業界を知るアドバイザーが担当します。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「大量応募・同意なし応募をしない」方針を明示</strong>しています。市場価値・適性年収の提示と求人の厳選紹介を掲げています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>Google口コミ4.8(470件・公称)</strong>を掲げています。公式LPの表記は「2025年12月23日時点での口コミ参照」です(2026年10月14日確認)。口コミサイトのコエテコキャリアでは17件・平均4.7でした。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>経験者と未経験者で入口が分かれています</strong>。どちらも利用は無料で、自分に合う窓口から相談を始められます(下のボタンで分けています)。</span>
            </li>
          </ul>
        </div>

        {/* CTA: 経験者向け */}
        <FelmatCta slug="unison-ex" heading="【エンジニア経験者の方】ユニゾンキャリアの無料相談はこちら" note="在職中・離職中どちらでも相談できます。" />
        {/* CTA: 未経験向け */}
        <FelmatCta slug="unison-entry" heading="【IT未経験の方】未経験からのIT転職相談はこちら" note="未経験からエンジニアを目指す相談窓口です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "IT・Web" },
            { label: "Google口コミ（公称）", value: "4.8" },
            { label: "口コミ件数（公称）", value: "470件" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>ユニゾンキャリアの口コミ・評判（出典を明記した傾向）</h2>
        <p className="text-sm text-text-secondary mb-4">
          ユニゾンキャリアの公開口コミは、大手総合型エージェントと比べると件数が多くありません。ここでは、利用者が投稿する口コミサイト
          「コエテコキャリア」のユニゾンキャリア(転職)ページに掲載された口コミ(17件・平均4.7、星5が11件・星4が5件・星2台が1件)と、
          公式が公表している第三者評価を出典として、傾向を当サイトが要約しています。口コミ本文の転載や、当サイトによる独自の点数付けは行っていません。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>アドバイザーの対応が丁寧で、IT業界未経験でも最初の相談から準備まで伴走してもらえた、という指摘が多く見られます</li>
              <li>書類添削・面接対策への評価が高くなっています(同サイトの項目別平均は書類4.8・面接4.7・アドバイザー4.9)</li>
              <li>面接前の不安を言語化して整理してもらえた、転職後のキャリアや資格についても助言があった、という声があります</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点の傾向</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>低評価は1件で、「紹介される企業が期待したほどではなかった」「未経験の1社目向き」という趣旨です</li>
              <li>項目別平均で最も低いのは「求人の幅」(4.5)です。IT・Web特化のため、職種・業界の幅は総合型より狭くなります</li>
              <li>公式サイトで求人数・対応エリアは公表されていないため、地方求人の量は面談でご確認ください</li>
            </ul>
          </div>
        </div>
        <div className="bg-teal/5 rounded-xl p-5 mb-3 border border-teal/15">
          <p className="font-bold text-navy mb-2 text-sm">当サイトの見方</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            公開口コミの評価は高めですが、件数が少なく、口コミサイト側も広告掲載・投稿特典を設けているため、点数だけで判断せず、口コミの内容もあわせて確認することをおすすめします。
            「サポートの丁寧さ」は複数の口コミで一致している一方、「求人の幅」はIT特化という性質上、一定の制約があります。
            総合型エージェントを1社併用し、紹介求人の質と量を比較することをおすすめします。
            Google口コミ4.8(470件)は公式の抜粋表記で、件数・評価は時期により変わります。
          </p>
        </div>
        <p className="text-xs text-text-muted mb-10">
          出典: コエテコキャリア「ユニゾンキャリア」口コミページ(2026年10月14日確認)の公開口コミの傾向を当サイトが要約しています。Google口コミの数値はユニゾンキャリア公式LP
          (「Google口コミ(470件)から抜粋」「2025年12月23日時点での口コミ参照」、2026年10月14日確認)の公称値です。他社の転職比較記事は出典にしていません。
        </p>

        <h2>ユニゾンキャリアの基本データ【2026年10月14日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ユニゾンキャリア(IT・Web業界専門の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社ユニゾン・テクノロジー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都渋谷区渋谷3-15-6 並木橋ビル4F</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">代表取締役 土肥 将司</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2021年1月6日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">資本金</th><td className="px-3 py-2 border-b">1,000万円</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">従業員数</th><td className="px-3 py-2 border-b">112名(アルバイト、契約社員含む)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">事業内容</th><td className="px-3 py-2 border-b">システム・アプリケーション設計開発、情報インフラ設計開発、IT領域における人材紹介</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">電話番号</th><td className="px-3 py-2 border-b">03-6450-5980(運営会社)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-313348</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象</th><td className="px-3 py-2 border-b">ITエンジニア(経験者・未経験者とも窓口あり)・在職中/離職中どちらも可</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">相談方法</th><td className="px-3 py-2 border-b">Web面談・電話(公式FAQ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／市場価値・適性年収の提示／求人の厳選紹介／書類添削／面接対策／年収交渉／入社前・入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">公表実績</th><td className="px-3 py-2 border-b">年収UP率 約93%(2025年1月〜8月の内定承諾者のうち応募時より転職後年収が上がった割合・エンジニア経験者のみ)／入社後定着率 約97%(2025年1月〜8月入社者の3ヶ月以上継続率)※いずれも公称</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数・対応エリア</th><td className="px-3 py-2 border-b">公式サイトでは公表なし</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          出典：ユニゾンキャリア公式サイト(<a href="https://unison-career.jp/" rel="nofollow noopener" target="_blank" className="underline">unison-career.jp</a>)・公式FAQおよび運営会社の
          <a href="https://www.unison-tech.jp/company/" rel="nofollow noopener" target="_blank" className="underline">会社概要</a>、2026年10月14日確認。
          求人数・対応エリアは公式に公表されていないため掲載していません。当サイトでは口コミ・数値の創作は行っていません。
        </p>

        <h2>ユニゾンキャリアの利用の流れ</h2>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-text-secondary mb-3">
          <li>Web面談(電話での相談も可能です)</li>
          <li>求人紹介(市場価値・適性年収の提示と厳選紹介)</li>
          <li>書類添削</li>
          <li>面接対策</li>
          <li>内定・年収交渉</li>
          <li>入社前・入社後フォロー</li>
        </ol>
        <p className="text-xs text-text-muted mb-8">出典：ユニゾンキャリア公式サイトの利用の流れ・公式FAQ(2026年10月14日確認)。公式FAQでは、就業状況によるものの早い人で10日間〜2週間で内定獲得が可能としています。</p>

        <h2>ユニゾンキャリアの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "大量応募・同意なし応募をしない厳選紹介",
              desc: "「大量応募＆同意なしの応募はしません」と公式に明言しています。数十社への一括応募を前提とする進め方が合わなかった人に向く方針です。",
            },
            {
              title: "市場価値と適性年収の提示",
              desc: "面談で現在の市場価値・適性年収を提示した上で、求人を厳選して紹介する流れを公表しています。年収交渉も対応範囲です。",
            },
            {
              title: "Google口コミ4.8(470件・公称)",
              desc: "公式LPで「Google口コミ(470件)から抜粋」「2025年12月23日時点での口コミ参照」として評価4.8を掲げています(2026年10月14日確認)。また「口コミ評価No.1」(2025年11月18日時点、エンジニア専門の転職エージェントを対象にGoogleとコエテコキャリアの口コミ数と評価をもとに算出／自社調べ)とも表記しています。",
            },
            {
              title: "経験者/未経験者で分かれた相談窓口",
              desc: "エンジニア経験者向けと、未経験からIT業界を目指す人向けで入口が分かれています。未経験者は職種選び(インフラ/開発等)の段階から相談できます。",
            },
            {
              title: "入社後の定着も実績として公表",
              desc: "「入社後定着率 約97%」を掲げています。ただし定義は「2025年1月〜8月の間に入社した方の3ヶ月以上継続率」(公式注記)で、長期の定着率ではない点にご留意ください。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>ユニゾンキャリアが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>IT・Web業界内での転職を考えているエンジニア</li>
              <li>未経験からエンジニアを目指したい人(専用窓口あり)</li>
              <li>大量応募ではなく厳選紹介で進めたい人</li>
              <li>自分の市場価値・適性年収を知ってから動きたい人</li>
              <li>第三者口コミの評価を重視する人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>大手の求人数・実績データを重視する人 →<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>との比較・併用が向きます</li>
              <li>IT以外の職種も幅広く見たい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が候補です</li>
              <li>ハイクラスのスカウトを待ちたい人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>が選択肢になります</li>
              <li>求人数の多さや地方求人の量を最優先したい人は、面談での確認が必要です(求人数・対応エリアは公式非公表のため)</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは<strong>2〜3社の併用が一般的</strong>です。IT特化はユニゾンキャリア+レバテックキャリアのように特化型同士を並行し、
          視野を広げたいときに総合型を加える組み合わせをおすすめします。
        </p>

        <h2>ユニゾンキャリア よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：厳選紹介型のIT特化エージェント</h2>
        <p>
          ユニゾンキャリアは、IT・Web業界専門で「大量応募をしない」方針を明確に打ち出した転職エージェントです。
          Google口コミ4.8(470件・公称)という第三者評価を掲げ、経験者・未経験者それぞれに窓口があります。利用は無料です。
          エンジニア経験者は<FelmatTextLink slug="unison-ex" text="経験者向けの無料相談" />(PR)から、
          未経験からIT業界を目指す人は<FelmatTextLink slug="unison-entry" text="未経験者向けの相談窓口" />(PR)から始めてみてください。
        </p>

        <FelmatCta slug="unison-ex" heading="【エンジニア経験者の方】ユニゾンキャリアの無料相談はこちら" note="在職中・離職中どちらでも相談できます。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">ユニゾンキャリアを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/levtech/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              レバテックキャリアの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/industry/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              IT業界の転職ガイド
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
