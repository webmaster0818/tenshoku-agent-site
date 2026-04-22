import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントとの面談｜準備・服装・当日の流れを完全解説",
  description:
    "転職エージェントとの面談を徹底解説。事前に準備すべき5つのこと、服装ガイド、当日60〜90分の流れ、聞かれる質問と回答例、オンライン面談の注意点まで完全網羅。初めての面談でも安心です。",
  openGraph: {
    title: "転職エージェントとの面談｜準備・服装・当日の流れを完全解説",
    description: "転職エージェントとの面談で必要な準備・服装・当日の流れを完全解説。",
  },
};

const faqData = [
  { q: "転職エージェントとの面談は何分くらいですか？", a: "一般的に60〜90分程度です。初回面談ではヒアリング、求人紹介、今後のスケジュール確認を行います。時間に余裕がない場合は事前に伝えると、30分程度に短縮してもらえることもあります。" },
  { q: "面談にはスーツで行くべきですか？", a: "スーツである必要はありません。オフィスカジュアル（きれいめの私服）が一般的です。ただし、あまりにラフな服装（短パン、サンダルなど）は避けましょう。清潔感のある服装を心がければ問題ありません。" },
  { q: "面談前に職務経歴書は必須ですか？", a: "必須ではありませんが、事前に簡単な職務経歴をまとめておくと面談がスムーズに進みます。完成度が低くても大丈夫です。面談時にアドバイザーと一緒にブラッシュアップできます。" },
  { q: "転職を決めていなくても面談できますか？", a: "はい、「転職するか迷っている」「市場価値を知りたい」という段階でも面談可能です。多くのエージェントが情報収集目的の面談を歓迎しています。面談を受けたからといって、必ず転職する必要はありません。" },
  { q: "オンライン面談と対面面談、どちらがおすすめですか？", a: "どちらでも面談の質に大きな差はありません。移動時間を省きたい方や在職中で時間が限られている方はオンラインが便利です。対面は細かいニュアンスが伝わりやすく、初めての転職で不安がある方に向いています。" },
  { q: "面談で正直に話しても大丈夫ですか？", a: "はい、むしろ正直に話すことが重要です。転職理由（人間関係、給与不満など）をそのまま伝えることで、アドバイザーがあなたに合った求人を提案しやすくなります。面接ではないので、本音で話して問題ありません。" },
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

export default function InterviewPrepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "お役立ち", href: "/" },
          { name: "面談の準備と流れ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントとの面談｜準備・服装・当日の流れを完全解説
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントとの初回面談は、転職成功への第一歩です。
            面談前に準備すべきこと、当日の服装、面談の流れ、聞かれる質問まで、初めての方でも安心できるよう詳しく解説します。
          </p>
        </div>

        {/* 面談前に準備すべき5つ */}
        <h2>面談前に準備すべき5つのこと</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "職務経歴の棚卸し", desc: "これまでの経歴を時系列で整理しましょう。会社名、在籍期間、部署、担当業務、実績（数値で表現できるもの）をメモしておくと面談がスムーズに進みます。完璧でなくて構いません。" },
            { step: 2, title: "希望条件の整理", desc: "年収、勤務地、業界・職種、働き方（リモート可否）、企業規模など、希望条件を「絶対譲れない条件」「できれば叶えたい条件」の2段階で整理しておきましょう。" },
            { step: 3, title: "転職理由の整理", desc: "なぜ転職したいのかを自分の言葉でまとめましょう。面接ではないので本音でOKですが、「現状の不満」だけでなく「次にどうなりたいか」というポジティブな面も考えておくと、より的確な求人提案を受けられます。" },
            { step: 4, title: "質問リストの準備", desc: "「この業界の転職市場は？」「自分の市場価値は？」「どのくらいの期間で転職できそうか？」など、聞きたいことをリストにしておきましょう。面談時間を有効に使えます。" },
            { step: 5, title: "職務経歴書の下書き（あれば）", desc: "すでに職務経歴書がある場合は事前に送付しておきましょう。面談時に添削アドバイスがもらえます。なくても面談は可能で、面談後に一緒に作成することもできます。" },
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

        {/* 服装ガイド */}
        <h2>面談時の服装ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">おすすめの服装</h3>
            <ul className="space-y-2">
              {[
                "オフィスカジュアル（きれいめの私服）",
                "襟付きシャツ＋チノパン・スラックス",
                "ジャケットがあればベター",
                "清潔感のある靴（スニーカーも可）",
                "オンライン面談は上半身のみ見えるので、トップスだけでもきちんとする",
              ].map((m, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <h3 className="font-bold text-red-500 mb-3">避けたほうがいい服装</h3>
            <ul className="space-y-2">
              {[
                "短パン、サンダル、ダメージジーンズ",
                "派手すぎるアクセサリー",
                "露出の多い服装",
                "シワだらけの服、汚れた靴",
              ].map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 当日の流れ */}
        <h2>面談当日の流れ（60〜90分）</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "自己紹介・アイスブレイク（5分）", desc: "担当アドバイザーの自己紹介と、簡単な雑談でリラックスした雰囲気を作ります。面接ではないので構える必要はありません。" },
            { step: 2, title: "職務経歴のヒアリング（20〜30分）", desc: "これまでの経歴、担当業務、実績、身につけたスキルなどを詳しくヒアリングされます。アドバイザーが質問してくれるので、答えていく形で進みます。" },
            { step: 3, title: "転職理由・希望条件の確認（15〜20分）", desc: "転職を考えた理由、次に求める条件（年収、勤務地、業界、働き方など）を確認します。ここで正直に話すことが、良い求人紹介につながります。" },
            { step: 4, title: "求人紹介・キャリア提案（15〜20分）", desc: "ヒアリング内容をもとに、マッチしそうな求人を紹介してもらえます。初回で紹介が難しい場合は、後日メールで送られてきます。" },
            { step: 5, title: "今後のスケジュール確認（5〜10分）", desc: "今後の転職活動のスケジュール、連絡方法（メール・電話・LINE）、次回の面談日程などを確認します。" },
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

        {/* オンライン面談の注意点 */}
        <h2>オンライン面談の注意点</h2>
        <div className="card-hover p-5 mb-10">
          <ul className="space-y-3">
            {[
              { title: "通信環境の確認", desc: "安定したWi-Fi環境で接続しましょう。事前にZoomやTeamsのテスト通話をしておくと安心です。" },
              { title: "背景の整理", desc: "散らかった部屋が映らないよう、壁を背にするかバーチャル背景を設定しましょう。" },
              { title: "マイク・カメラの確認", desc: "面談開始5分前にはアプリを立ち上げ、音声とカメラの動作確認をしておきましょう。" },
              { title: "静かな環境を確保", desc: "カフェなど周囲の音が入る場所は避け、自宅の個室や貸し会議室を利用しましょう。" },
              { title: "メモを取りやすい準備", desc: "画面の横にメモ帳を置くか、PCでメモを取れるようにしておきましょう。" },
            ].map((item, i) => (
              <li key={i} className="text-sm text-text-secondary">
                <span className="font-bold text-navy">{item.title}：</span>{item.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* 聞かれる質問と回答例 */}
        <h2>面談で聞かれる質問と回答例</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">質問</th>
                <th className="p-3 text-left rounded-tr-lg">回答例</th>
              </tr>
            </thead>
            <tbody>
              {[
                { q: "転職理由は？", a: "現在の会社では挑戦できる領域が限られており、より成長できる環境を求めています。" },
                { q: "希望年収は？", a: "現在450万円で、500〜550万円を希望しています。ただし業務内容次第では柔軟に考えます。" },
                { q: "いつ頃転職したいですか？", a: "3ヶ月以内を目標にしていますが、良い求人があれば早めに動きたいです。" },
                { q: "どんな企業が希望ですか？", a: "社員数100〜500名程度の成長企業で、裁量を持って働ける環境が理想です。" },
                { q: "転職で譲れない条件は？", a: "リモートワークが週2日以上可能なことと、年収が現在より下がらないことです。" },
              ].map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray" : ""}>
                  <td className="p-3 font-bold text-navy">{item.q}</td>
                  <td className="p-3 text-text-secondary">{item.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            まずはエージェントに相談してみよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            面談は無料。転職を決めていなくても、キャリア相談だけでもOKです。
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
            <Link href="/knowledge/resume/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              職務経歴書の書き方・添削
            </Link>
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
            </Link>
            <Link href="/knowledge/when-to-start/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              登録のベストタイミング
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
