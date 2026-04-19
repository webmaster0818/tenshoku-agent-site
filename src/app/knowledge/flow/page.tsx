import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントの使い方・流れ｜登録から内定まで8ステップ",
  description:
    "転職エージェントの利用の流れを登録から内定まで8ステップで解説。各ステップで準備すべきことや注意点、効果的な活用法をわかりやすく紹介します。",
  openGraph: {
    title: "転職エージェントの使い方・流れ｜登録から内定まで8ステップ",
    description: "転職エージェントの利用の流れを8ステップで解説。",
  },
};

const faqData = [
  { q: "転職エージェントの登録に何が必要ですか？", a: "基本的には氏名、連絡先（電話番号・メールアドレス）、直近の職歴（会社名・職種・経験年数）があれば登録できます。詳細な職務経歴書は面談後に作成しても問題ありません。" },
  { q: "面談ではどんなことを聞かれますか？", a: "これまでの職歴、転職理由、希望条件（業界・職種・年収・勤務地・勤務時間）、キャリアの方向性などを聞かれます。素直に伝えることで、より適切な求人を紹介してもらえます。" },
  { q: "紹介された求人は必ず応募しなければなりませんか？", a: "いいえ、応募するかどうかは自分で判断できます。興味がない求人は断っても問題ありません。ただし、断る際は理由を伝えることで、次回以降の紹介精度が上がります。" },
  { q: "在職中でも転職エージェントは利用できますか？", a: "はい、利用できます。多くの転職者が在職中にエージェントを利用しています。面談や連絡は就業時間外やオンラインで対応可能です。" },
  { q: "内定後に辞退することはできますか？", a: "法的には可能ですが、企業やエージェントとの信頼関係に影響します。内定辞退する場合は、できるだけ早くエージェント経由で丁寧に伝えましょう。" },
  { q: "転職活動全体でどのくらいの期間がかかりますか？", a: "一般的に登録から内定まで2〜3ヶ月程度です。在職中の場合は退職交渉を含めて3〜4ヶ月、退職後の場合は1〜2ヶ月で決まるケースもあります。" },
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

export default function FlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "転職知識", href: "/" },
          { name: "使い方・流れ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントの使い方・流れ｜登録から内定まで8ステップ
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントを利用する流れを、登録から内定・入社まで8つのステップでわかりやすく解説します。
            各ステップで何をすべきか、どう準備すればよいかを具体的に紹介します。
          </p>
        </div>

        {/* 8ステップ */}
        <h2>登録から内定まで8ステップ</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "公式サイトから無料登録", desc: "エージェントの公式サイトで基本情報を入力します。所要時間は約5分。氏名、連絡先、直近の職歴、希望条件（大まかでOK）を入力するだけです。転職時期が未定でも登録可能です。" },
            { step: 2, title: "面談日程の調整", desc: "登録後、エージェントから電話またはメールで面談日程の連絡が届きます。通常、登録から1〜7日以内に連絡があります。対面、オンライン、電話から面談方法を選べます。" },
            { step: 3, title: "キャリアアドバイザーとの面談", desc: "専任のアドバイザーが、あなたの職歴、転職理由、希望条件、キャリアプランを丁寧にヒアリングします。面談時間は通常60〜90分程度。転職市場の動向や、あなたの市場価値についてもアドバイスを受けられます。" },
            { step: 4, title: "求人の紹介", desc: "面談内容をもとに、あなたに合った求人を紹介してもらえます。非公開求人を含め、複数の求人を比較検討できます。各求人の詳細な情報（社風、残業時間、離職率など）もアドバイザーに確認可能です。" },
            { step: 5, title: "応募書類の作成・添削", desc: "履歴書・職務経歴書の作成をサポートしてもらえます。アドバイザーが添削し、応募先企業に合わせた内容にブラッシュアップ。書類選考の通過率を高めるためのアドバイスを受けられます。" },
            { step: 6, title: "応募・書類選考", desc: "アドバイザーが応募手続きを代行します。推薦状を添えて応募してくれるため、書類選考の通過率が上がるケースもあります。複数社に同時に応募することも可能です。" },
            { step: 7, title: "面接対策・面接", desc: "応募先企業に合わせた面接対策を受けられます。過去の面接で聞かれた質問の情報や、企業が重視するポイントなどの情報も提供してもらえます。面接日程の調整もアドバイザーが代行します。" },
            { step: 8, title: "内定・年収交渉・入社", desc: "内定が出たら、年収交渉や入社日の調整をアドバイザーが代行します。現職の退職交渉のアドバイスも受けられます。入社後もフォローアップを行うエージェントもあります。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* タイムライン目安 */}
        <h2>転職活動の期間の目安</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "登録〜面談", value: "1〜7日" },
            { label: "求人紹介〜応募", value: "1〜2週間" },
            { label: "書類選考〜面接", value: "2〜4週間" },
            { label: "内定〜入社", value: "1〜2ヶ月" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            転職エージェントに無料登録しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            まずは登録から。5分の登録で、プロのサポートが受けられます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent px-8 py-3">
              リクルートエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary px-8 py-3 bg-navy-light">
              dodaの詳細
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              複数エージェントの活用法
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
