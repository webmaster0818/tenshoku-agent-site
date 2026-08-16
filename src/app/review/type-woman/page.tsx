import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "type女性の転職エージェントの評判は？女性特化の老舗エージェントを徹底解説【2026年】",
  description:
    "type女性の転職エージェント（株式会社キャリアデザインセンター運営・東証プライム上場）は女性の転職に特化したエージェント。年間登録者数15,000名以上、年収UP希望者の約79%が年収アップ（公称）。特徴・料金・向いている人を公式情報ベースで解説します。利用は無料。",
  openGraph: {
    title: "type女性の転職エージェントの評判は？女性特化の老舗エージェントを徹底解説【2026年】",
    description:
      "女性の転職に特化した「type女性の転職エージェント」の特徴・実績・向いている人を公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
  {
    q: "type女性の転職エージェントの利用に費用はかかりますか？",
    a: "求職者の利用は無料です。人材紹介サービスの標準的なビジネスモデルとして、採用が決まった際に企業側が成功報酬を支払う仕組みのため、求職者がキャリアカウンセリング・求人紹介・面接対策などの費用を負担することはありません。",
  },
  {
    q: "男性でも利用できますか？",
    a: "サービス名のとおり女性の転職支援に特化したエージェントです。運営元の株式会社キャリアデザインセンターは総合型の「type転職エージェント」も運営しているため、男性やサービス対象に合わない場合はそちらや他の総合型エージェントが選択肢になります。",
  },
  {
    q: "未経験の職種にも転職できますか？",
    a: "公式LPでは未経験可の求人にも対応していることが案内されています。デザイナー・マーケティング・営業・ITエンジニア・コンサルティングなど複数職種を扱っており、紹介可能な求人は経歴・希望条件によって変わるため、詳細はカウンセリングで確認してください。",
  },
  {
    q: "「約79%が年収アップ」とはどういう意味ですか？",
    a: "公式サイトが公表している数値で、年収アップを希望した利用者のうち約79%が年収アップを実現したというものです(対象期間: 2021年10月〜2025年3月・公称)。全利用者の79%ではない点、集計条件の詳細は公式の注記に従う点に注意し、参考値として捉えてください。",
  },
  {
    q: "面談は対面が必要ですか？",
    a: "電話面談によるキャリアカウンセリングに対応していることが公式サイトで案内されています。仕事や育児で来社が難しい場合も相談しやすい体制です。最新の面談方法は申し込み時に公式サイトでご確認ください。",
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

export default function TypeWomanReview() {
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
          { name: "type女性の転職エージェントの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            type女性の転職エージェントの評判は？女性特化の老舗エージェントを徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            type女性の転職エージェントは、東証プライム上場の株式会社キャリアデザインセンターが運営する、女性の転職に特化した転職エージェントです。
            転職経験や子育て経験を生かしたキャリアアドバイザーによるサポートを掲げ、年間登録者数15,000名以上(2024年実績・公称)の規模で運営されています。
            この記事では、特徴・実績・向いている人を、公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>女性の転職に特化した老舗エージェント</strong>。運営は1993年設立・東証プライム上場の株式会社キャリアデザインセンターで、運営基盤の安心感があります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>年間登録者数15,000名以上(2024年実績・公称)</strong>。求人総数38,301件・非公開求人約7割(2026年8月16日時点の公式表記)と、女性特化型として大きな求人規模です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>年収UP希望者の約79%が年収アップ(公称)</strong>。カウンセリング満足度89.4%も公表されています(いずれも公式の集計条件に基づく参考値)。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>求職者の利用は無料</strong>。電話でのキャリアカウンセリング・応募企業ごとの面接対策・条件交渉の代行・入社後フォローまで費用はかかりません。</span>
            </li>
          </ul>
        </div>

        <FelmatCta slug="type-woman" heading="type女性の転職エージェント公式サイトで無料カウンセリングを予約する" note="登録・キャリアカウンセリングは無料です。" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "特化領域", value: "女性の転職" },
            { label: "年間登録者数（公称）", value: "1.5万名+" },
            { label: "年収UP実績（公称）", value: "約79%" },
            { label: "料金", value: "無料" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>type女性の転職エージェントの基本データ【2026年8月16日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">type女性の転職エージェント</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社キャリアデザインセンター(東証プライム上場・証券コード2410)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都港区赤坂3-21-20 赤坂ロングビーチビル</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">1993年7月8日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-040429</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">求人数</th><td className="px-3 py-2 border-b">求人総数38,301件・非公開求人約7割(23,379件)【2026年8月16日時点の公式表記】</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象</th><td className="px-3 py-2 border-b">転職を考える女性(デザイナー・マーケティング・営業・ITエンジニア・コンサルティング等の複数職種)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">電話面談によるキャリアカウンセリング／求人紹介／応募企業ごとの面接対策／条件交渉の代行／入社後フォロー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：type女性の転職エージェント公式サイト(type.woman-agent.jp)および株式会社キャリアデザインセンター会社概要、2026年8月16日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>type女性の転職エージェントの特徴（公式公表ベース）</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: "女性の気持ちに寄り添うキャリアアドバイザー",
              desc: "転職経験や子育て経験を生かした相談対応を公式に掲げています。ライフイベントを見据えた働き方の相談がしやすい体制です。",
            },
            {
              title: "東証プライム上場企業の運営",
              desc: "運営の株式会社キャリアデザインセンターは1993年設立、「type」ブランドの転職メディアを長年運営してきた上場企業です。",
            },
            {
              title: "非公開求人が約7割",
              desc: "求人総数38,301件のうち約7割(23,379件)が非公開求人と公表されています(2026年8月16日時点)。登録することで一般公開されていない求人に出会えます。",
            },
            {
              title: "年収UP希望者の約79%が年収アップ(公称)",
              desc: "年収アップを希望した利用者の約79%が年収アップを実現(2021年10月〜2025年3月)と公表されています。集計条件は公式の注記に基づく参考値です。",
            },
            {
              title: "未経験可・リモート可の求人にも対応",
              desc: "公式LPでは未経験可の求人やリモート勤務可能な職種の紹介が案内されています。職種転換を考える人の相談先にもなります。",
            },
            {
              title: "電話カウンセリング対応",
              desc: "来社不要の電話面談によるキャリアカウンセリングに対応しています。在職中・育児中でも利用しやすい形式です。",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>type女性の転職エージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>結婚・出産などライフイベントを見据えた転職を相談したい女性</li>
              <li>女性のキャリア支援に慣れた担当者に相談したい人</li>
              <li>年収アップを目的に転職したい人</li>
              <li>未経験職種やリモート可求人も含めて検討したい人</li>
              <li>上場企業運営の安心感を重視する人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>男性・より幅広い求人を横断したい人 →<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>や<Link href="/review/doda/" className="text-teal underline">doda</Link>などの総合型が向きます</li>
              <li>ITエンジニア職に深く特化したい人 →<Link href="/review/levtech/" className="text-teal underline">レバテックキャリア</Link>や<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア" />も選択肢です</li>
              <li>ハイクラス・エグゼクティブ志向の人 →<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>や<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link>が候補です</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは<strong>2〜3社の併用が一般的</strong>です。女性のキャリア相談はtype女性の転職エージェント、
          求人の横断比較は総合型で、という使い分けが現実的です。
        </p>

        <h2>type女性の転職エージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ：女性のキャリア相談の定番候補</h2>
        <p>
          type女性の転職エージェントは、東証プライム上場の株式会社キャリアデザインセンターが運営する女性特化型エージェントです。
          年間登録者数15,000名以上・非公開求人約7割・年収UP希望者の約79%が年収アップ(いずれも公称)という実績を公表しており、
          利用は無料です。女性のキャリアに理解のある担当者に相談したい人は、まず無料カウンセリングから始めてみるのが良いでしょう。
          <FelmatTextLink slug="type-woman" text="type女性の転職エージェントの無料カウンセリングはこちら" />(PR)。
        </p>

        <FelmatCta slug="type-woman" heading="type女性の転職エージェント公式サイトで無料カウンセリングを予約する" note="登録・キャリアカウンセリングは無料です。" />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">type女性の転職エージェントを他社と比較・併用する</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              dodaの詳細
            </Link>
            <Link href="/review/mynavi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              マイナビエージェントの詳細
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
