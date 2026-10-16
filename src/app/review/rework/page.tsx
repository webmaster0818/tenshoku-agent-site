import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  alternates: { canonical: "/review/rework/" },
  title: "Re:WORK(リワーク)エージェントの口コミ・評判は？未経験転職専門の実態を公式データで解説【2026年10月】",
  description:
    "Re:WORK(リワーク)エージェントの口コミ・評判を出典を明記して整理しています。株式会社Nexly運営の未経験転職専門エージェントの求人数・利用の流れ・注意点は2026年10月14日に公式サイトで確認しています。復職支援のリワークとは別サービスです。",
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
    a: "無料です。公式サイトに「プロのコンサルタントのサポートを完全無料でご利用いただけます」と明記されています（2026年8月22日確認）。人材紹介の標準的な仕組みとして、採用企業側が成功報酬を支払うモデルです。",
  },
  {
    q: "本当に未経験でも求人を紹介してもらえますか？",
    a: "Re:WORKは「未経験からの転職専門エージェント」を掲げており、未経験応募OKの求人を多数掲載しています。紹介可能求人数は公式サイトで16,432件以上と表記されています（2026年10月14日確認。8月22日の確認時は39,652件以上で、表記は変動します）。接客業からIT業界、工場勤務から一般事務など、異業種への挑戦をサポートすると記載されています。",
  },
  {
    q: "運営会社はどんな会社ですか？",
    a: "株式会社Nexly（本社：兵庫県伊丹市、創業2021年11月・設立2024年5月、代表：大林諒）です。有料職業紹介事業許可番号（28-ユ-301343）を公式サイトの運営者情報で公開しています。設立から日が浅い会社のため、大手総合型エージェントと併用しながら利用することをおすすめします。",
  },
  {
    q: "Re:WORKエージェントは「やばい」「怪しい」会社ではありませんか？",
    a: "運営会社の株式会社Nexlyは、公式サイトの運営者情報で所在地（兵庫県伊丹市）・代表者・設立日・有料職業紹介事業許可番号（28-ユ-301343）を公開しています（2026年10月14日確認）。一方で設立は2024年5月と新しく、第三者の口コミサイトで確認できる利用者の声はまだほとんどありません。面談で担当者の説明や紹介求人の内容を確かめ、大手と併用しながら判断することをおすすめします。",
  },
  {
    q: "精神科などの「リワーク（復職支援）」と関係はありますか？",
    a: "関係ありません。「リワーク」は休職者の職場復帰を支援するプログラム（医療機関・地域障害者職業センター等）の名称として広く使われていますが、Re:WORKエージェントは株式会社Nexlyが運営する、未経験からの転職を支援する有料職業紹介サービスです。",
  },
  {
    q: "何社くらい応募することになりますか？",
    a: "公式サイトでは、未経験転職の場合は平均10〜15社への応募を想定しており、選考に落ちた後もコンサルタントが最後まで支援すると記載されています（2026年10月14日確認）。",
  },
  {
    q: "キャリアの方向性が決まっていなくても相談できますか？",
    a: "できます。公式サイトには「方向性がはっきり決まっていなくても大丈夫。『その業界が自分に合っているか？』『転職した後に後悔しないか？』など、悩みや不安も含めてサポート」と記載されており、適職診断のコンテンツも提供されています。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Re:WORK(リワーク)エージェントの口コミ・評判は？未経験転職専門の実態を公式データで解説【2026年10月】",
  dateModified: "2026-10-14",
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
          <p className="text-xs text-text-muted mb-3">最終更新: 2026年10月14日（公式サイト・運営者情報を再確認）</p>
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
              <span><strong>未経験からの転職に特化した専門エージェントです</strong>。紹介可能求人数16,432件以上（2026年10月14日の公式表記）・未経験応募OK求人多数と公式に表記されています。</span>
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
            { label: "紹介可能求人数（公式表記）", value: "1.6万件超" },
            { label: "料金", value: "無料" },
            { label: "職業紹介許可", value: "取得済み" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>Re:WORKエージェントの基本データ【2026年10月14日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">Re:WORK エージェント（未経験からの転職専門エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社Nexly（Nexly Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">兵庫県伊丹市野間8丁目4-11-2</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">大林 諒</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">創業・設立</th><td className="px-3 py-2 border-b">創業2021年11月6日／設立2024年5月27日（資本金500万円）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">28-ユ-301343</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">紹介可能求人数</th><td className="px-3 py-2 border-b">16,432件以上（公式サイト表記・2026年10月14日確認。8月22日は39,652件以上と表記）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／業界分析／応募書類の添削／オンライン模擬面接（希望者）／適職診断</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人の検索条件</th><td className="px-3 py-2 border-b">全都道府県・20代〜50代・「未経験歓迎」「フリーターOK」「第二新卒歓迎」などで検索可能</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：Re:WORKエージェント公式サイト（rework.nexly.co.jp）および同運営者情報ページ（/about/）、2026年10月14日確認。求人数は変動し、集計時点は公式に記載がありません。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>Re:WORK(リワーク)エージェントの口コミ・評判の傾向（出典明記）</h2>
        <p className="text-sm text-text-secondary mb-4">
          2026年10月14日に「Re:WORK 口コミ」「リワークエージェント 評判」などでWeb検索した範囲では、第三者の口コミサイトにRe:WORKエージェント（株式会社Nexly）の利用者の声は<strong>見つかりませんでした</strong>。
          検索では名前の近い別サービス（「Re就活」「Re Works」）の口コミが表示されやすいため、読む際は運営会社名（Nexly）で見分けてください。
          以下は公式サイトに掲載された情報からわかる傾向です。
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">良い評判につながりやすい点（公式掲載情報より）</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>公式の「転職体験記」は1ページ目に12件掲載されています。歯科助手→医療事務、塾講師→プログラマー、看護師→医療機器営業、フリーター→倉庫管理など<strong>異業種への転職例</strong>が並びます（年代・性別のみの匿名、同社サイト内の掲載）</li>
              <li>応募書類の添削・オンライン模擬面接（希望者）・落選後も最後まで支援する、と伴走型のサポートを明記しています</li>
              <li>相談は無料で、方向性が決まっていない段階でも受け付けています</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">悪い評判・注意点になりうる点</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>運営会社は2024年5月設立と新しく、<strong>第三者の口コミはまだ少ない状況です</strong></li>
              <li>未経験転職は平均10〜15社への応募を想定していると公式に記載されています。<strong>応募数が多くなる</strong>前提で計画することをおすすめします</li>
              <li>紹介可能求人数の表記は8月の39,652件以上から10月は16,432件以上に変わっており、集計時点の記載はありません</li>
              <li>体験記は自社サイト掲載で、収集方法の記載はありません</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          <strong>当サイトの見方：</strong>未経験特化の相談先として使う価値はありますが、評判を判断できる第三者情報がまだ少ない段階です。
          実績の多い<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>などの総合型や、IT志望なら<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>と併用し、紹介求人の質を見比べることをおすすめします。
        </p>

        <h2>Re:WORKエージェントの利用の流れ</h2>
        <ol className="list-decimal pl-6 space-y-1 text-sm text-text-secondary mb-8">
          <li>専属コンサルタントへ転職相談（無料）</li>
          <li>希望職種の情報・求人を検討</li>
          <li>応募書類・面接の準備（添削・希望者はオンライン模擬面接）</li>
          <li>求人応募・面接</li>
        </ol>

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
              <li>経験を活かした同業界でのキャリアアップ →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型</li>
              <li>未経験からIT業界に絞って転職したい人 →IT特化の<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>との比較もおすすめします</li>
              <li>ハイクラス・管理職志向 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>など</li>
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
