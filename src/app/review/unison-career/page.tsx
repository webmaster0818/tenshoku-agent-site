import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "ユニゾンキャリアの評判は？IT・Web業界特化エージェントを経験者/未経験別に解説【2026年】",
  description:
    "ユニゾンキャリア(株式会社ユニゾン・テクノロジー運営)はIT・Web業界専門の転職エージェント。Google口コミ4.8(470件・公称)、大量応募をしない厳選紹介が特徴。エンジニア経験者と未経験者で入口が分かれており、それぞれの窓口・特徴・向いている人を公式情報ベースで解説します。",
  openGraph: {
    title: "ユニゾンキャリアの評判は？IT・Web業界特化エージェントを経験者/未経験別に解説【2026年】",
    description:
      "IT・Web業界専門の転職エージェント「ユニゾンキャリア」の特徴・向いている人を経験者/未経験者別に公式情報ベースで解説。利用は無料です。",
  },
};

const faqData = [
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
    a: "ユニゾンキャリアが公式に掲げている、Googleビジネスプロフィール上の口コミ評価です(4.8・470件、当サイト2026年8月16日確認時点の公式表記)。第三者プラットフォーム上の実際の利用者投稿に基づく数値ですが、投稿時期・母集団は変動するため参考値として捉えてください。",
  },
  {
    q: "他の大手エージェントとの違いは何ですか？",
    a: "公式サイトでは「大量応募＆同意なしの応募はしません」という方針を明示しています。機械的に多数の企業へ応募させるのではなく、市場価値・適性年収の提示と求人の厳選紹介を掲げている点が特徴です。求人数の規模ではリクルートエージェントやdodaなどの総合型が上回るため、併用が現実的です。",
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

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "ユニゾンキャリアの評判・特徴" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ユニゾンキャリアの評判は？IT・Web業界特化エージェントを経験者/未経験別に解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ユニゾンキャリアは、株式会社ユニゾン・テクノロジーが運営するIT・Web業界専門の転職エージェントです。
            「大量応募＆同意なしの応募はしません」という厳選紹介の方針と、Google口コミ4.8(470件・公称)を掲げています。
            エンジニア経験者と未経験者で相談の入口が分かれているのが特徴で、この記事では両方の窓口を含めて、
            特徴・向いている人を公式サイトで確認できる情報をもとに整理します。
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>IT・Web業界専門の転職エージェント</strong>。エンジニアの転職支援に対象を絞り、業界を知るアドバイザーが担当します。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>「大量応募・同意なし応募をしない」方針を明示</strong>。市場価値・適性年収の提示と求人の厳選紹介を掲げています。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>Google口コミ4.8(470件・公称)</strong>。第三者プラットフォーム上の利用者評価を公式に打ち出しています(2026年8月16日確認時点)。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>経験者と未経験者で入口が別</strong>。どちらも利用無料で、自分に合う窓口から相談を始められます(下のボタンで分けています)。</span>
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

        <h2>ユニゾンキャリアの基本データ【2026年8月16日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ユニゾンキャリア(IT・Web業界専門の転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">運営会社</th><td className="px-3 py-2 border-b">株式会社ユニゾン・テクノロジー</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">所在地</th><td className="px-3 py-2 border-b">東京都渋谷区渋谷3-15-6 並木橋ビル4F</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">代表者</th><td className="px-3 py-2 border-b">土肥 将司</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">設立</th><td className="px-3 py-2 border-b">2021年1月6日</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-313348</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">対象</th><td className="px-3 py-2 border-b">ITエンジニア(経験者・未経験者とも窓口あり)・在職中/離職中どちらも可</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">サポート内容</th><td className="px-3 py-2 border-b">キャリア相談／市場価値・適性年収の提示／求人の厳選紹介／選考対策／年収交渉</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b">料金</th><td className="px-3 py-2 border-b">求職者は無料(企業側の成功報酬モデル)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ユニゾンキャリア公式サイト(unison-career.jp)および運営会社ページ、2026年8月16日確認。求人数は公式に公表されていないため掲載していません。当サイトでは口コミ・数値の創作は行っていません。</p>

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
              desc: "Googleビジネスプロフィール上の口コミ評価4.8(470件)を公式に掲げています(2026年8月16日確認時点)。エンジニア専門エージェントを対象とした口コミ比較で第1位(2025年11月18日時点・公称)ともしています。",
            },
            {
              title: "経験者/未経験者で分かれた相談窓口",
              desc: "エンジニア経験者向けと、未経験からIT業界を目指す人向けで入口が分かれています。未経験者は職種選び(インフラ/開発等)の段階から相談できます。",
            },
            {
              title: "入社後の定着も実績として公表",
              desc: "入社した利用者の3ヶ月以上継続率を実績として掲げています(集計条件は公式表記に基づく)。紹介して終わりではない支援方針の表れです。",
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
            </ul>
          </div>
        </div>
        <p className="text-sm text-text-secondary mb-8">
          転職エージェントは<strong>2〜3社の併用が一般的</strong>です。IT特化はユニゾンキャリア+レバテックキャリアのように特化型同士を並行し、
          視野を広げたいときに総合型を足す組み合わせが現実的です。
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
