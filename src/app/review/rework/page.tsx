import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "Re:WORKエージェントの評判は？未経験からの転職専門エージェントを徹底解説【2026年】",
  description:
    "Re:WORK（リワーク）エージェントは、株式会社Nexlyが運営する未経験からの転職専門エージェント。紹介可能求人数39,652件以上（公式表記）、適職診断や専属キャリアアドバイザーの伴走サポートが特徴。運営会社情報・特徴・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "Re:WORKエージェントの評判は？未経験からの転職専門エージェントを徹底解説【2026年】",
    description:
      "未経験からの転職専門エージェント「Re:WORK」の特徴・運営会社・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "Re:WORKエージェントの利用に費用はかかりますか？",
    a: "無料です。公式サイトに「プロのコンサルタントのサポートを完全無料でご利用いただけます」と明記されています（2026年8月22日確認）。人材紹介の標準的な仕組みとして、採用企業側が成功報酬を支払うモデルです。",
  },
  {
    q: "本当に未経験でも求人を紹介してもらえますか？",
    a: "Re:WORKは「未経験からの転職専門エージェント」を掲げており、未経験応募OKの求人を多数掲載、紹介可能求人数は39,652件以上と公式サイトに表記されています（2026年8月22日確認時点の公式表記）。接客業からIT業界、工場勤務から一般事務など、異業種への挑戦をサポートすると記載されています。",
  },
  {
    q: "運営会社はどんな会社ですか？",
    a: "株式会社Nexly（本社：兵庫県伊丹市、創業2021年11月・設立2024年5月、代表：大林諒）です。有料職業紹介事業許可番号（28-ユ-301343）を公式サイトの運営者情報で公開しています。設立から日が浅い会社のため、大手総合型エージェントと併用しながら使うのが現実的です。",
  },
  {
    q: "キャリアの方向性が決まっていなくても相談できますか？",
    a: "できます。公式サイトには「方向性がはっきり決まっていなくても大丈夫。『その業界が自分に合っているか？』『転職した後に後悔しないか？』など、悩みや不安も含めてサポート」と記載されており、適職診断のコンテンツも提供されています。",
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

export default function ReworkReview() {
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
          { name: "Re:WORKエージェントの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            Re:WORKエージェントの評判は？未経験からの転職専門エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Re:WORK（リワーク）エージェントは、株式会社Nexlyが運営する「未経験からの転職専門」を掲げる転職エージェントです。
            「経験ゼロから、可能性∞へ。」をキャッチコピーに、接客業からIT業界へ、工場勤務から一般事務へといった
            未経験分野への転職を専門にサポートしています。
            この記事では、特徴・運営会社情報・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>未経験からの転職に特化した専門エージェント</strong>。紹介可能求人数39,652件以上・未経験応募OK求人多数と公式に表記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>専属キャリアアドバイザーが業界分析から面接対策まで伴走</strong>。方向性が固まっていない段階の相談も歓迎と明記されています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>有料職業紹介事業許可番号（28-ユ-301343）を公式に公開</strong>。一方で運営の株式会社Nexlyは設立2024年の若い会社のため、大手総合型との併用が現実的です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用は完全無料</strong>。適職診断コンテンツも提供されています。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="rework" heading="Re:WORKエージェントに無料で転職相談する" note="未経験からの転職相談は完全無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "未経験転職" },
            { label: "紹介可能求人数（公式表記）", value: "3.9万件超" },
            { label: "料金", value: "無料" },
            { label: "職業紹介許可", value: "取得済み" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>Re:WORKエージェントの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">Re:WORK エージェント（未経験からの転職専門エージェント）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社Nexly（Nexly Inc.）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">兵庫県伊丹市野間8丁目4-11-2</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">大林 諒</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">創業・設立</th><td className="px-3 py-2 border-b">創業2021年11月6日／設立2024年5月27日（資本金500万円）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">28-ユ-301343</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">紹介可能求人数</th><td className="px-3 py-2 border-b">39,652件以上（公式サイト表記・2026年8月22日確認時点）</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／求人紹介／業界分析／履歴書・職務経歴書サポート／面接対策／適職診断</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料（企業側の成功報酬モデル）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：Re:WORKエージェント公式サイト（rework.nexly.co.jp）および同運営者情報ページ、2026年8月22日確認。求人数は変動します。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>Re:WORKエージェントの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "「未経験からの転職」だけに絞った専門設計",
              desc: "総合型エージェントが経験者向け求人を中心に扱うのに対し、Re:WORKは未経験応募OKの求人に特化。接客業からIT業界、工場勤務から一般事務といった異業種チャレンジの支援を公式に掲げています。",
            },
            {
              title: "専属キャリアアドバイザーの伴走サポート",
              desc: "経歴・希望・性格をもとに、業界分析から面接対策まで専属アドバイザーがサポートすると公表されています。「はじめての転職でも安心して進められます」と初回転職者を意識した設計です。",
            },
            {
              title: "方向性が決まっていなくても相談できる",
              desc: "「その業界が自分に合っているか」「転職した後に後悔しないか」といった悩み・不安も含めてサポートすると明記。適職診断コンテンツも提供しており、キャリアの棚卸しから始められます。",
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
              <li>はじめての転職で、何から始めればいいか分からない人</li>
              <li>キャリアの方向性を相談しながら決めたい人</li>
              <li>経歴に自信がなく、大手エージェントで求人紹介を断られた経験がある人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>経験を活かした同業界でのキャリアアップ →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型</li>
              <li>未経験からIT業界に絞って転職したい人 →IT特化の<Link href="/review/unison-career/" className="text-teal underline">ユニゾンキャリア</Link>も比較を</li>
              <li>ハイクラス・管理職志向 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>など</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          運営会社は設立2024年の若い会社で、大手と比べると実績の蓄積はこれからの段階です。
          未経験特化の相談窓口として使いつつ、<strong>大手総合型エージェントと2〜3社併用</strong>して求人の幅を確保するのがおすすめです。
          未経験転職の基本戦略は<Link href="/type/inexperienced/" className="text-teal underline">未経験向け転職エージェントまとめ</Link>で解説しています。
        </p>

        <h2>Re:WORKエージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：未経験チャレンジの相談窓口として</h2>
        <p>
          Re:WORKエージェントは、未経験からの転職に特化した専門エージェントです。
          未経験応募OKの求人紹介と専属アドバイザーの伴走サポートを無料で受けられ、
          方向性が固まっていない段階の相談も歓迎されています。
          異業種への挑戦を考えている人は、総合型エージェントと併用しながら、
          未経験特化の視点を取り入れる使い方が良いでしょう。
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
