import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントが使えないと感じたら？対処法と上手な活用術",
  description:
    "転職エージェントが使えない・役に立たないと感じる原因と対処法を解説。担当変更の方法、複数社の併用戦略、希望条件の伝え方など、エージェントを上手に活用するための具体的なテクニックを紹介します。",
  openGraph: {
    title: "転職エージェントが使えないと感じたら？対処法と上手な活用術",
    description: "転職エージェントが使えないと感じる原因5つと具体的な対処法を解説。",
  },
};

const faqData = [
  { q: "転職エージェントの担当者を変更してもらえますか？", a: "はい、ほとんどのエージェントで担当者の変更が可能です。電話やマイページの問い合わせフォームから「別の担当者に変更してほしい」と伝えるだけでOKです。理由を聞かれた場合は「違う視点からのアドバイスも聞きたい」と伝えると角が立ちません。" },
  { q: "エージェントから希望と違う求人ばかり紹介されます。どうすれば？", a: "希望条件を具体的に伝え直しましょう。「年収500万円以上」「リモートワーク可」「マネジメント経験が活かせる」など、優先順位をつけて3つ程度に絞って伝えると、マッチ度が上がります。また、紹介された求人に対して「なぜ合わないか」をフィードバックすることも効果的です。" },
  { q: "転職エージェントを途中で退会しても問題ないですか？", a: "全く問題ありません。転職エージェントは無料で利用でき、途中で退会してもペナルティはありません。メールや電話で退会の旨を伝えるだけで手続きできます。" },
  { q: "エージェントからの連絡がしつこい場合の対処法は？", a: "連絡の頻度や時間帯について希望を伝えましょう。「平日19時以降にメールでの連絡を希望」など具体的に伝えると改善されます。それでも改善しない場合は担当変更を依頼するか、別のエージェントに切り替えましょう。" },
  { q: "転職エージェントを使わずに転職する方法はありますか？", a: "転職サイト（リクナビNEXT、エン転職など）での直接応募、企業の採用ページからの応募、LinkedInなどのビジネスSNS、知人の紹介（リファラル採用）などの方法があります。ただし、年収交渉や面接対策のサポートが受けられないため、自分で準備する必要があります。" },
  { q: "複数のエージェントに同時登録しても大丈夫ですか？", a: "大丈夫です。むしろ2〜3社の併用が推奨されます。エージェントによって保有求人や得意分野が異なるため、複数登録することで選択肢が広がります。ただし、同じ企業に複数のエージェントから応募しないよう注意が必要です。" },
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

export default function UselessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "お役立ち", href: "/" },
          { name: "使えないと感じたら" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントが使えないと感じたら？対処法と上手な活用術
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントを利用してみたものの「使えない」「役に立たない」と感じている方は少なくありません。
            その原因を理解し、適切に対処することで、転職活動を大きく改善できます。
          </p>
        </div>

        {/* 使えないと感じる原因5つ */}
        <h2>転職エージェントが使えないと感じる5つの原因</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "担当アドバイザーとの相性が悪い", desc: "キャリアアドバイザーも人間です。コミュニケーションスタイルや価値観が合わないと、的確なアドバイスが得られません。経験の浅いアドバイザーが担当になるケースもあり、業界知識が不十分に感じることがあります。" },
            { step: 2, title: "希望と違う求人ばかり紹介される", desc: "希望条件が曖昧だったり、エージェント側のノルマの影響で、ミスマッチな求人が紹介されることがあります。特に「とりあえず数を出す」スタイルのアドバイザーに当たると不満が溜まりやすいです。" },
            { step: 3, title: "連絡の頻度が合わない", desc: "連絡が多すぎて煩わしい、逆に連絡が少なく放置されていると感じるケースがあります。特に在職中の転職活動では、日中の電話連絡がストレスになりがちです。" },
            { step: 4, title: "押しが強すぎる・急かされる", desc: "内定を急がせたり、あまり興味のない企業への応募を強く勧められることがあります。エージェント側の成果報酬の仕組み上、決定を急ぐ傾向があるアドバイザーもいます。" },
            { step: 5, title: "業界・職種の専門知識が不足している", desc: "総合型エージェントでは、担当アドバイザーが特定の業界に詳しくない場合があります。技術職やクリエイティブ職など、専門性の高い職種では特にこの問題が起きやすいです。" },
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

        {/* 対処法 */}
        <h2>エージェントが使えないときの対処法</h2>
        <div className="space-y-6 mb-10">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">1. 担当者の変更を依頼する</h3>
            <p className="text-sm text-text-secondary mb-2">
              担当変更は珍しいことではなく、多くのエージェントが対応しています。以下の方法で依頼しましょう。
            </p>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>マイページの問い合わせフォームから申請する（最も角が立たない方法）</li>
              <li>カスタマーサポートに電話で相談する</li>
              <li>「異なる業界経験のあるアドバイザーに相談したい」と伝える</li>
            </ul>
          </div>

          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">2. 複数のエージェントを併用する</h3>
            <p className="text-sm text-text-secondary mb-2">
              1社だけに頼らず、2〜3社を併用することで比較・選択肢が広がります。
            </p>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>大手総合型（リクルートエージェント、dodaなど）を1〜2社</li>
              <li>業界特化型やハイクラス向け（JACリクルートメント、ビズリーチなど）を1社</li>
              <li>それぞれの強みを活かし、弱点を補い合う使い方が効果的</li>
            </ul>
          </div>

          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">3. 希望条件を明確に伝え直す</h3>
            <p className="text-sm text-text-secondary mb-2">
              ミスマッチ求人を減らすために、以下のポイントを整理して担当者に伝えましょう。
            </p>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>「絶対に譲れない条件」と「あれば嬉しい条件」を分ける</li>
              <li>希望年収は具体的な金額とレンジを伝える（例: 最低500万、希望600万）</li>
              <li>NGな業界・企業規模・勤務地も明確にする</li>
              <li>紹介された求人が合わない場合、「なぜ合わないか」をフィードバックする</li>
            </ul>
          </div>
        </div>

        {/* エージェント別特徴比較 */}
        <h2>エージェント別の特徴比較</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">エージェント</th>
                <th className="p-3 text-left">求人数</th>
                <th className="p-3 text-left">強み</th>
                <th className="p-3 text-left rounded-tr-lg">こんな人向け</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "リクルートエージェント", count: "約60万件", strength: "求人数No.1、全業界対応", target: "幅広く求人を見たい人" },
                { name: "doda", count: "約20万件以上", strength: "サイト＋エージェント一体型", target: "自分でも求人を探したい人" },
                { name: "マイナビエージェント", count: "約4万件", strength: "20代・30代の初転職サポート", target: "初めての転職の人" },
                { name: "ビズリーチ", count: "約12万件", strength: "スカウト型・ハイクラス特化", target: "年収600万以上の人" },
                { name: "JACリクルートメント", count: "約1.5万件", strength: "外資系・管理職に強い", target: "キャリアアップを目指す人" },
              ].map((agent, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray" : ""}>
                  <td className="p-3 font-bold text-navy">{agent.name}</td>
                  <td className="p-3 text-text-secondary">{agent.count}</td>
                  <td className="p-3 text-text-secondary">{agent.strength}</td>
                  <td className="p-3 text-text-secondary">{agent.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 代替手段 */}
        <h2>それでもダメな場合の代替手段</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "転職サイトを活用する", desc: "リクナビNEXTやエン転職など、自分で求人を検索・応募できるサービスを利用する方法です。自分のペースで進められるメリットがあります。" },
            { title: "企業の採用ページから直接応募", desc: "気になる企業のコーポレートサイトから直接応募する方法です。エージェントを介さないため、企業とダイレクトにやり取りできます。" },
            { title: "ビジネスSNSを活用する", desc: "LinkedInやWantedlyなど、ビジネス特化のSNSで企業と直接つながる方法です。IT・スタートアップ系の求人が多い傾向にあります。" },
            { title: "リファラル採用（知人紹介）", desc: "知人や元同僚の紹介で選考に進む方法です。企業の内部情報を事前に知れるメリットがあり、採用率も高い傾向にあります。" },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy text-base mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめエージェント */}
        <h2>おすすめの転職エージェント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", feature: "求人数業界最大級・全業界対応" },
            { name: "ビズリーチ", href: "/review/bizreach/", feature: "ハイクラス・スカウト型" },
            { name: "doda", href: "/review/doda/", feature: "エージェント＋サイト一体型" },
            { name: "マイナビエージェント", href: "/review/mynavi/", feature: "20代・30代の転職に強い" },
            { name: "JACリクルートメント", href: "/review/jac/", feature: "外資系・管理職に強い" },
          ].map((agent) => (
            <Link key={agent.name} href={agent.href} className="card-hover p-4 block no-underline">
              <h3 className="font-bold text-navy text-base">{agent.name}</h3>
              <p className="text-sm text-text-muted mt-1">{agent.feature}</p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            自分に合ったエージェントを見つけよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            1社で満足できなくても大丈夫。複数のエージェントを試して、相性の良い担当者を見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキング
            </Link>
          </div>
        </div>

        {/* 関連記事 */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              複数エージェントの活用法
            </Link>
            <Link href="/knowledge/interview-prep/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              面談の準備と流れ
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
