import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/rework/" },
  title: "Re:WORK(リワーク)エージェントの口コミ・評判は？未経験転職専門の実態を公式データで解説【2026年10月】",
  description:
    "Re:WORK(リワーク)エージェントの口コミ・評判を出典を明記して整理しています。株式会社Nexly運営の未経験転職専門エージェントの求人数、厚生労働省の登録情報、利用規約、利用の流れと注意点を2026年10月26日に確認しています。復職支援のリワークとは別サービスです。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "Re:WORK(リワーク)エージェントの口コミ・評判は？未経験転職専門の実態を公式データで解説【2026年10月】",
    description:
      "Re:WORK(リワーク)エージェントの口コミ・評判と注意点を、公式データにもとづき確認日を明記して整理しています。利用は無料です。",
  },
};

const faqData = [
  {
    q: "Re:WORKエージェントの利用に費用はかかりますか？",
    a: "無料です。公式の「Re:WORKとは」ページに「相談・求人の紹介・面談の調整まで、求職者の方に費用はかかりません」と記載されています（2026年10月26日確認）。人材紹介の標準的な仕組みとして、採用企業側が成功報酬を支払うモデルです。",
  },
  {
    q: "本当に未経験でも求人を紹介してもらえますか？",
    a: "Re:WORKは「未経験からの転職専門エージェント」を掲げており、未経験応募OKの求人を多数掲載しています。公式トップページの紹介可能求人数は21,247件以上、「Re:WORKとは」ページの公開求人数は14,607件（2026年10月時点）で、そのうち約6割が未経験歓迎の求人と記載されています（2026年10月26日確認。紹介可能求人数の表記は8月22日に39,652件以上、10月14日に16,432件以上で、変動します）。接客業からIT業界、工場勤務から一般事務など、異業種への挑戦をサポートすると記載されています。",
  },
  {
    q: "運営会社はどんな会社ですか？",
    a: "株式会社Nexly（本社：兵庫県伊丹市、創業2021年11月・設立2024年5月、代表：大林諒）です。有料職業紹介事業許可番号（28-ユ-301343、許可年月日2024年9月1日）を公式サイトの運営者情報で公開しており、厚生労働省「人材サービス総合サイト」にも登録されています（2026年10月26日確認）。設立から日が浅い会社のため、大手総合型エージェントと併用しながら利用することをおすすめします。",
  },
  {
    q: "Re:WORKエージェントは「やばい」「怪しい」会社ではありませんか？",
    a: "運営会社の株式会社Nexlyは、公式サイトの運営者情報で所在地（兵庫県伊丹市）・代表者・設立日・有料職業紹介事業許可番号（28-ユ-301343）を公開しています。厚生労働省「人材サービス総合サイト」でも同じ許可番号で登録を確認できますが、就職者数の欄はまだ登録がありません（2026年10月26日確認）。設立は2024年5月と新しく、第三者の口コミサイトで確認できる利用者の声はまだほとんどありません。面談で担当者の説明や紹介求人の内容を確かめ、大手と併用しながら判断することをおすすめします。",
  },
  {
    q: "精神科などの「リワーク（復職支援）」と関係はありますか？",
    a: "関係ありません。「リワーク」は休職者の職場復帰を支援するプログラム（医療機関・地域障害者職業センター等）の名称として広く使われていますが、Re:WORKエージェントは株式会社Nexlyが運営する、未経験からの転職を支援する有料職業紹介サービスです。",
  },
  {
    q: "何社くらい応募することになりますか？",
    a: "公式サイトでは、未経験転職の場合は平均10〜15社への応募を想定しており、選考に落ちた後もコンサルタントが最後まで支援すると記載されています。応募・面接の期間の目安は1〜3か月と案内されています（2026年10月26日確認）。",
  },
  {
    q: "キャリアの方向性が決まっていなくても相談できますか？",
    a: "できます。公式サイトには「方向性がはっきり決まっていなくても大丈夫。『その業界が自分に合っているか？』『転職した後に後悔しないか？』など、悩みや不安も含めてサポート」と記載されており、適職診断のコンテンツも提供されています。",
  },
  {
    q: "相談だけで、応募しなくても利用できますか？",
    a: "できます。公式の「Re:WORKとは」ページのよくある質問に「相談だけでも利用できます。応募するかどうかは相談のうえで決めていただけます」と記載されています。面談はオンラインで、全国どこからでも参加できると案内されています（2026年10月26日確認）。",
  },
  {
    q: "登録した情報は他の会社にも共有されますか？",
    a: "利用規約（2024年10月16日制定）では、サービスの一つとして、登録情報の一部や転職活動状況を求人企業・職業紹介事業者に開示してスカウトを受け取る「Re:WORKスカウトサービス」と、業務提携した職業紹介事業者（パートナーエージェント）に登録情報を提供する「Re:WORKパートナーエージェントサービス」が定められています。他社からの連絡を望まない場合は、面談時に担当者へ確認することをおすすめします（2026年10月26日確認）。",
  },
  {
    q: "退会や個人情報の削除はどうすればよいですか？",
    a: "利用規約には契約期間を「ユーザーが退会するまで」とする定めがありますが、退会の具体的な手続きは記載されていません。プライバシーポリシーでは、個人情報の開示・訂正・削除・利用停止の請求は本人確認のうえ対応するとしており、窓口のメールアドレスとしてinfo@nexly.co.jpが記載されています（2026年10月26日確認）。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Re:WORK(リワーク)エージェントの口コミ・評判は？未経験転職専門の実態を公式データで解説【2026年10月】",
  dateModified: "2026-10-26",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/review/rework/" },
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

export default function ReworkReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/review/" },
          { name: "Re:WORK(リワーク)エージェントの口コミ・評判" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            Re:WORK(リワーク)エージェントの口コミ・評判は？未経験転職専門の実態を公式データで解説【2026年10月】
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月26日（公式サイト・運営者情報・利用規約・厚生労働省「人材サービス総合サイト」を確認）</p>
          <p className="text-text-secondary leading-relaxed">
            Re:WORK（リワーク）エージェントは、株式会社Nexlyが運営する「未経験からの転職専門」を掲げる転職エージェントです。
            「経験ゼロから、可能性∞へ。」をキャッチコピーに、接客業からIT業界へ、工場勤務から一般事務へといった
            未経験分野への転職を専門にサポートしています。
            なお、休職者の職場復帰を支援する医療機関などの「リワーク（復職支援プログラム）」とは別のサービスです。
            この記事では、口コミ・評判の傾向、特徴・運営会社情報・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <AgentHero slug="rework" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>未経験からの転職に特化した専門エージェントです</strong>。紹介可能求人数21,247件以上（2026年10月26日の公式トップページ表記）で、公開求人14,607件のうち約6割が未経験歓迎と公式に記載されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>専属キャリアアドバイザーが業界分析から面接対策まで伴走します</strong>。方向性が固まっていない段階の相談も歓迎と明記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>有料職業紹介事業許可番号（28-ユ-301343）を公式に公開しています</strong>。一方で運営の株式会社Nexlyは設立2024年の若い会社のため、大手総合型との併用をおすすめします。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用は無料です</strong>。適職診断コンテンツも提供されています。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="rework" heading="Re:WORKエージェントに無料で転職相談する" note="未経験からの転職相談は完全無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "未経験転職" },
            { label: "紹介可能求人数（公式表記）", value: "2.1万件超" },
            { label: "料金", value: "無料" },
            { label: "職業紹介許可", value: "取得済み" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>Re:WORKエージェントの基本データ【2026年10月26日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">Re:WORK エージェント（未経験からの転職専門エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社Nexly（Nexly Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">兵庫県伊丹市野間8丁目4-11-2</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">大林 諒</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">創業・設立</th><td className="px-3 py-2 border-b">創業2021年11月6日／設立2024年5月27日（資本金500万円）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">28-ユ-301343（許可年月日 2024年9月1日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">紹介可能求人数</th><td className="px-3 py-2 border-b">紹介可能求人数21,247件以上（公式トップページ表記）／公開求人14,607件・うち約6割が未経験歓迎（「Re:WORKとは」ページ、2026年10月時点）。紹介可能求人数の表記は8月22日に39,652件以上、10月14日に16,432件以上</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">面談方法</th><td className="px-3 py-2 border-b">オンライン（全国どこからでも参加可能）。申し込み後、担当アドバイザーから登録の電話番号またはメールに連絡</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">問い合わせ</th><td className="px-3 py-2 border-b">公式サイトの問い合わせフォーム／電話 080-3845-2052（運営者情報ページ表記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／業界分析／応募書類の添削／オンライン模擬面接（希望者）／適職診断</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人の検索条件</th><td className="px-3 py-2 border-b">全都道府県・20代〜50代・「未経験歓迎」「フリーターOK」「第二新卒歓迎」などで検索可能</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://rework.nexly.co.jp/" rel="nofollow noopener" target="_blank" className="underline">Re:WORKエージェント公式サイト</a>、<a href="https://rework.nexly.co.jp/service/" rel="nofollow noopener" target="_blank" className="underline">「Re:WORKとは」ページ</a>、<a href="https://rework.nexly.co.jp/about/" rel="nofollow noopener" target="_blank" className="underline">運営者情報ページ</a>、2026年10月26日確認。紹介可能求人数と公開求人数は公式サイト内でページごとに異なる値が掲載されており、紹介可能求人数の集計時点は記載がありません。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>Re:WORK(リワーク)エージェントの口コミ・評判の傾向（出典明記）</h2>
        <p className="text-sm text-text-secondary mb-4">
          2026年10月26日に「Re:WORKエージェント 口コミ」「Re:WORKエージェント 評判」「リワークエージェント Nexly 評判」などでWeb検索した範囲では、第三者の口コミサイトにRe:WORKエージェント（株式会社Nexly）の利用者の声は<strong>見つかりませんでした</strong>。
          10月14日の確認時と同様です。検索では名前の近い別サービス（「Re就活」、フルリモート求人サイトの「ReWorks」など）の口コミが表示されやすいため、読む際は運営会社名（Nexly）で見分けてください。
          以下は公式サイトに掲載された情報からわかる傾向です。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判につながりやすい点（公式掲載情報より）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>公式の「転職体験記」は3ページに分けて掲載され、1ページ目には12件が並んでいます。歯科助手→医療事務、塾講師→プログラマー、看護師→医療機器営業、フリーター→倉庫管理など<strong>異業種への転職例</strong>が並びます（年代・性別のみの匿名、同社サイト内の掲載）</li>
              <li>応募書類の添削・オンライン模擬面接（希望者）・落選後も最後まで支援する、と伴走型のサポートを明記しています</li>
              <li>相談は無料で、方向性が決まっていない段階でも受け付けています</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点になりうる点</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>運営会社は2024年5月設立と新しく、<strong>第三者の口コミはまだ少ない状況です</strong></li>
              <li>未経験転職は平均10〜15社への応募を想定していると公式に記載されています。<strong>応募数が多くなる</strong>前提で計画することをおすすめします</li>
              <li>紹介可能求人数の表記は8月の39,652件以上から10月14日は16,432件以上、10月26日は21,247件以上と変動しており、集計時点の記載はありません</li>
              <li>利用規約では、登録情報を提携する他の職業紹介事業者に提供するサービスも定められています。他社からの連絡が増える可能性があります</li>
              <li>体験記は自社サイト掲載で、収集方法の記載はありません</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          <strong>当サイトの見方：</strong>未経験特化の相談先として使う価値はありますが、評判を判断できる第三者情報がまだ少ない段階です。
          実績の多い<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などの総合型や、IT志望なら<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>と併用し、紹介求人の質を見比べることをおすすめします。
        </p>

        <h2>厚生労働省の登録情報と利用規約で確認できること</h2>
        <p className="text-sm text-text-secondary mb-3">
          第三者の口コミが見つからないため、当サイトでは公的な登録情報と公式の利用規約・プライバシーポリシーを確認しました（2026年10月26日確認）。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-40">許可番号・許可年月日</th><td className="px-3 py-2 border-b">28-ユ-301343／2024年9月1日（令和6年9月1日）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">登録上の事業所</th><td className="px-3 py-2 border-b">株式会社Nexly（兵庫県伊丹市野間八丁目4番11号-2号 1F）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">就職者数・早期離職者数</th><td className="px-3 py-2 border-b">登録なし（令和2〜7年度の欄はすべて「-」）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">手数料・返戻金制度の欄</th><td className="px-3 py-2 border-b">いずれも「未」と表示</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">利用規約の制定日</th><td className="px-3 py-2 border-b">2024年10月16日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">規約上のサービス</th><td className="px-3 py-2 border-b">求人情報サービス／エージェントサービス（求人紹介・キャリア相談）／スカウトサービス（登録情報の一部や転職活動状況を求人企業・職業紹介事業者に開示）／パートナーエージェントサービス（業務提携した職業紹介事業者に登録情報を提供）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">退会</th><td className="px-3 py-2 border-b">規約に具体的な手続きの記載なし。個人情報の開示・訂正・削除・利用停止はプライバシーポリシー記載の窓口（info@nexly.co.jp）で受け付け</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-secondary mb-2">
          許可の取得から約2年のため、厚生労働省のサイトで就職者数を確認できる段階には至っていません。
          また、登録情報が提携先の職業紹介事業者に提供される仕組みが規約に定められているため、連絡を受ける会社を限定したい場合は、面談時に提供の範囲を確認することをおすすめします。
        </p>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do?action=initDisp&screenId=GICB101010" rel="nofollow noopener" target="_blank" className="underline">厚生労働省「人材サービス総合サイト」</a>の職業紹介事業詳細（許可番号28-ユ-301343で検索、令和8年10月1日現在の掲載情報）、<a href="https://rework.nexly.co.jp/terms/" rel="nofollow noopener" target="_blank" className="underline">Re:WORK利用規約</a>、<a href="https://rework.nexly.co.jp/privacy-policy/" rel="nofollow noopener" target="_blank" className="underline">プライバシーポリシー</a>（いずれも2026年10月26日確認）。</p>

        <h2>Re:WORKエージェントの利用の流れ</h2>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2 border-b whitespace-nowrap">ステップ</th>
                <th className="text-left px-3 py-2 border-b">内容</th>
                <th className="text-left px-3 py-2 border-b whitespace-nowrap">目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">1. フォームに入力</td><td className="px-3 py-2 border-b">居住地域・就業状況・希望職種などを入力します</td><td className="px-3 py-2 border-b">約1分</td></tr>
              <tr><td className="px-3 py-2 border-b">2. アドバイザーから連絡</td><td className="px-3 py-2 border-b">登録した電話番号またはメールに連絡が届きます</td><td className="px-3 py-2 border-b">フォーム送信後</td></tr>
              <tr><td className="px-3 py-2 border-b">3. 面談・求人の紹介</td><td className="px-3 py-2 border-b">オンライン面談で希望や不安を伝え、未経験から応募できる求人の提案を受けます</td><td className="px-3 py-2 border-b">初回面談</td></tr>
              <tr><td className="px-3 py-2 border-b">4. 応募書類・面接の準備</td><td className="px-3 py-2 border-b">職務経歴書・履歴書の作成支援と面接対策（希望者はオンライン模擬面接）</td><td className="px-3 py-2 border-b">応募前</td></tr>
              <tr><td className="px-3 py-2 border-b">5. 応募・面接</td><td className="px-3 py-2 border-b">未経験からの転職では平均10〜15社に応募すると案内されています</td><td className="px-3 py-2 border-b">1〜3か月</td></tr>
              <tr><td className="px-3 py-2 border-b">6. 内定・入社</td><td className="px-3 py-2 border-b">条件の確認と入社日の調整。在職中の場合は退職の進め方も相談できます</td><td className="px-3 py-2 border-b">内定後</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://rework.nexly.co.jp/service/" rel="nofollow noopener" target="_blank" className="underline">Re:WORK「Re:WORKとは」</a>（2026年10月26日確認）。目安の期間は公式の案内で、個人の状況により異なります。</p>

        <h2>Re:WORKエージェントの特徴（公式の公表情報より）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "「未経験からの転職」だけに絞った専門設計",
              desc: "総合型エージェントが経験者向け求人を中心に扱うのに対し、Re:WORKは未経験応募OKの求人に特化しています。接客業からIT業界、工場勤務から一般事務といった異業種チャレンジの支援を公式に掲げています。",
            },
            {
              title: "専属キャリアアドバイザーの伴走サポート",
              desc: "経歴・希望・性格をもとに、業界分析から面接対策まで専属アドバイザーがサポートすると公表されています。「はじめての転職でも安心して進められます」と初回転職者を意識した設計です。",
            },
            {
              title: "方向性が決まっていなくても相談できる",
              desc: "「その業界が自分に合っているか」「転職した後に後悔しないか」といった悩み・不安も含めてサポートすると明記しています。適職診断コンテンツも提供しており、キャリアの棚卸しから始められます。",
            },
            {
              title: "許認可情報の公開",
              desc: "有料職業紹介事業許可番号（28-ユ-301343）を運営者情報ページで公開しています。当サイトでは、許認可番号を確認できるサービスのみ紹介しています。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Re:WORKエージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>未経験の業界・職種に挑戦したい人（接客→IT、工場→事務など）</li>
              <li>はじめての転職で、何から始めればよいか分からない人</li>
              <li>キャリアの方向性を相談しながら決めたい人</li>
              <li>経歴に自信がなく、大手エージェントで求人紹介を断られた経験がある人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>経験を活かした同業界でのキャリアアップ →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が候補です</li>
              <li>未経験からIT業界に絞って転職したい人 →IT特化の<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>との比較もおすすめします</li>
              <li>ハイクラス・管理職志向 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>などが候補です</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          運営会社は設立2024年の若い会社で、大手と比べると実績の蓄積はこれからの段階です。
          未経験特化の相談窓口として使いつつ、<strong>大手総合型エージェントと2〜3社併用</strong>して求人の幅を確保することをおすすめします。
          未経験転職の基本戦略は<Link href="/type/inexperienced/" className="text-teal underline">未経験向け転職エージェントまとめ</Link>で解説しています。
        </p>

        <h2>Re:WORK(リワーク)エージェントの口コミ・評判に関するよくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：未経験分野への転職の相談窓口として</h2>
        <p>
          Re:WORKエージェントは、未経験からの転職に特化した専門エージェントです。
          未経験応募OKの求人紹介と専属アドバイザーの伴走サポートを無料で受けられ、
          方向性が固まっていない段階の相談も歓迎されています。
          異業種への挑戦を考えている人は、総合型エージェントと併用しながら、
          未経験特化の視点を取り入れる使い方をおすすめします。
        </p>

        <FelmatCta slug="rework" heading="Re:WORKエージェントに無料で転職相談する" note="未経験からの転職相談は完全無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のエージェントと比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向けエージェントまとめ
            </Link>
            <Link href="/review/unison-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ユニゾンキャリアの詳細
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
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
