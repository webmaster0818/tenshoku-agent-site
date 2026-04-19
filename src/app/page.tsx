import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "転職エージェント比較ラボ【2026年最新】厳選5社を徹底解説",
  description:
    "2026年最新の転職エージェントおすすめランキング。リクルートエージェント・doda・マイナビエージェント・ビズリーチ・JACリクルートメントの5社を徹底比較。求人数・特徴・年代別の選び方まで詳しく解説。",
  openGraph: {
    title: "転職エージェント比較ラボ【2026年最新】",
    description: "人気転職エージェント5社を徹底比較。あなたに最適なエージェントが見つかります。",
  },
};

const agents = [
  {
    rank: 1,
    name: "リクルートエージェント",
    jobs: "公開約60万件＋非公開約30万件",
    strength: "全業界・全職種",
    age: "全年代",
    feature: "業界最大級の求人数。幅広い業界・職種をカバーし、転職支援実績も豊富。",
    pros: ["求人数が圧倒的に多い", "全国に拠点があり地方転職にも対応", "転職支援実績が業界トップクラス"],
    cons: ["担当者の質にばらつきがある", "求人数が多く情報の取捨選択が必要"],
    recommend: "できるだけ多くの求人から選びたい方、初めて転職エージェントを利用する方",
    href: "/review/recruit-agent/",
  },
  {
    rank: 2,
    name: "doda（デューダ）",
    jobs: "公開約25万件",
    strength: "全業界・ITに強い",
    age: "20代〜40代",
    feature: "転職サイトとエージェントの一体型。スカウト機能で企業から直接オファーが届く。",
    pros: ["転職サイトとエージェントを併用できる", "スカウト機能で思わぬ求人に出会える", "転職フェアなどイベントが充実"],
    cons: ["メールの量が多くなりがち", "ハイクラス求人はやや少ない"],
    recommend: "自分でも求人を探しつつエージェントのサポートも受けたい方",
    href: "/review/doda/",
  },
  {
    rank: 3,
    name: "マイナビエージェント",
    jobs: "非公開求人多数",
    strength: "IT・メーカー・営業",
    age: "20代〜30代前半",
    feature: "20代・第二新卒に強く、手厚いサポートが特徴。初めての転職に最適。",
    pros: ["20代・第二新卒への求人が豊富", "キャリアアドバイザーのサポートが丁寧", "書類添削・面接対策が充実"],
    cons: ["30代後半以降の求人は少なめ", "大手と比べると求人総数はやや少ない"],
    recommend: "20代で初めて転職する方、手厚いサポートを求める方",
    href: "/review/mynavi/",
  },
  {
    rank: 4,
    name: "ビズリーチ",
    jobs: "公開約12万件",
    strength: "ハイクラス・管理職",
    age: "30代〜50代",
    feature: "年収600万円以上のハイクラス求人に特化。ヘッドハンターからのスカウト型。",
    pros: ["ハイクラス・高年収求人が豊富", "ヘッドハンターの質が高い", "自分の市場価値を把握できる"],
    cons: ["一部有料プランがある", "年収が低いとスカウトが少ない場合がある"],
    recommend: "年収600万円以上でキャリアアップを目指す方",
    href: "#",
  },
  {
    rank: 5,
    name: "JACリクルートメント",
    jobs: "約1.5万件",
    strength: "ハイクラス・外資系",
    age: "30代〜50代",
    feature: "ハイクラス・外資系転職に特化。コンサルタントの専門性と質が高い。",
    pros: ["外資系・グローバル企業の求人が豊富", "コンサルタントが業界に精通している", "年収交渉力が高い"],
    cons: ["求人数は大手総合型より少ない", "経験が浅いと紹介が少ない場合がある"],
    recommend: "外資系企業やグローバル企業への転職を考えている方",
    href: "#",
  },
];

const faqData = [
  { q: "転職エージェントとは何ですか？", a: "転職エージェントとは、求職者と企業の間に立ち、転職活動をサポートする人材紹介サービスです。キャリアカウンセリング、求人紹介、書類添削、面接対策、年収交渉など、転職活動全般を無料でサポートしてくれます。" },
  { q: "転職エージェントは本当に無料ですか？", a: "はい、転職エージェントのサービスは求職者にとって完全無料です。転職エージェントは、求職者の入社が決まった際に企業から成功報酬を受け取るビジネスモデルのため、求職者に費用が発生することはありません。" },
  { q: "複数の転職エージェントに登録しても大丈夫ですか？", a: "はい、複数の転職エージェントに登録することは一般的です。むしろ2〜3社に登録して比較することをおすすめします。エージェントごとに保有求人や得意分野が異なるため、複数登録することで選択肢が広がります。" },
  { q: "転職エージェントと転職サイトの違いは何ですか？", a: "転職サイトは自分で求人を検索して応募するサービスです。一方、転職エージェントは担当のキャリアアドバイザーがつき、求人紹介から面接対策、年収交渉まで一貫してサポートしてくれます。dodaのように両方の機能を持つサービスもあります。" },
  { q: "転職エージェントの利用の流れを教えてください", a: "一般的な流れは以下の通りです。(1) 登録・申し込み (2) キャリアアドバイザーとの面談 (3) 求人紹介・書類添削 (4) 応募・面接対策 (5) 内定・年収交渉 (6) 入社。登録から内定まで平均2〜3ヶ月程度です。" },
  { q: "20代におすすめの転職エージェントはどこですか？", a: "20代にはマイナビエージェントとリクルートエージェントがおすすめです。マイナビエージェントは20代・第二新卒向けの求人が豊富で手厚いサポートが特徴です。リクルートエージェントは求人数が圧倒的に多く、幅広い選択肢から選べます。" },
  { q: "ハイクラス転職におすすめのエージェントは？", a: "ハイクラス転職にはビズリーチとJACリクルートメントがおすすめです。ビズリーチは年収600万円以上の求人に特化したスカウト型サービス、JACリクルートメントは外資系・グローバル企業に強く、コンサルタントの質が高いことで知られています。" },
  { q: "転職エージェントに断られることはありますか？", a: "経歴やスキル、希望条件によっては、紹介できる求人がないと判断された場合にサポートを断られることがあります。その場合は、別のエージェントに登録するか、転職サイトを併用することをおすすめします。" },
  { q: "転職エージェントの担当者は変更できますか？", a: "はい、担当者の変更は可能です。多くの転職エージェントでは、担当者との相性が合わない場合、問い合わせ窓口やマイページから変更を依頼できます。遠慮せずに申し出ることが大切です。" },
  { q: "在職中でも転職エージェントは利用できますか？", a: "はい、在職中でも利用できます。むしろ転職エージェント利用者の多くは在職中です。面談や面接の日程は、平日夜や土曜日にも対応しているエージェントが多いため、仕事を続けながら転職活動を進められます。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-teal-light font-bold text-sm tracking-widest mb-4">TENSHOKU AGENT NAVI 2026</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            あなたのキャリアに最適な<br className="hidden sm:block" />
            転職エージェントが見つかる
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            業界のプロが厳選した転職エージェント5社を徹底比較。<br className="hidden sm:block" />
            求人数・サポート内容・得意分野から、あなたに最適な1社が見つかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#ranking" className="btn-accent text-lg px-8 py-4">ランキングを見る</a>
            <a href="#comparison" className="btn-primary bg-white/10 border border-white/20 text-lg px-8 py-4">比較表を見る</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-gray border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "5社", label: "厳選エージェント" },
              { num: "60万件+", label: "最大求人数" },
              { num: "全年代", label: "対応" },
              { num: "完全無料", label: "利用料金" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal">{stat.num}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="section-title section-title--center">転職エージェント5社 比較表</h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="comparison-table min-w-[700px]">
            <thead>
              <tr>
                <th>順位</th>
                <th>エージェント名</th>
                <th>求人数</th>
                <th>得意分野</th>
                <th>対応年代</th>
                <th>特徴</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((a) => (
                <tr key={a.rank}>
                  <td>
                    <span className={`rank-badge rank-badge--${a.rank}`}>{a.rank}</span>
                  </td>
                  <td className="font-bold text-navy whitespace-nowrap">{a.name}</td>
                  <td className="text-sm">{a.jobs}</td>
                  <td className="text-sm">{a.strength}</td>
                  <td className="text-sm whitespace-nowrap">{a.age}</td>
                  <td className="text-sm">{a.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ranking Detail */}
      <section id="ranking" className="bg-warm-gray py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-title section-title--center">転職エージェント おすすめTOP5 詳細ランキング</h2>
          <div className="space-y-8">
            {agents.map((a) => (
              <article key={a.rank} className="card-hover p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <span className={`rank-badge rank-badge--${a.rank}`}>{a.rank}</span>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy">{a.name}</h3>
                    <p className="text-sm text-text-muted mt-1">求人数：{a.jobs} ／ 対応年代：{a.age}</p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-5">{a.feature}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-teal/5 rounded-xl p-4">
                    <p className="font-bold text-teal text-sm mb-2">メリット</p>
                    <ul className="space-y-1.5">
                      {a.pros.map((p, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="font-bold text-red-500 text-sm mb-2">デメリット</p>
                    <ul className="space-y-1.5">
                      {a.cons.map((c, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">&#9651;</span>{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-4">
                  <span className="font-bold text-navy">こんな方におすすめ：</span>{a.recommend}
                </p>

                {a.href !== "#" ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={a.href} className="btn-primary text-sm px-6 py-3">
                      詳細レビューを読む
                    </Link>
                    <a
                      href="#"
                      className="btn-accent text-sm px-6 py-3"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      公式サイトへ
                    </a>
                  </div>
                ) : (
                  <a
                    href="#"
                    className="btn-accent text-sm px-6 py-3"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    公式サイトへ
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Quick Guide */}
      <section id="purpose-guide" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="section-title section-title--center" id="age-guide">目的別クイックガイド</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { label: "20代・第二新卒", desc: "マイナビエージェント＋リクルートエージェントの2社登録がおすすめ。手厚いサポートと豊富な求人で初めての転職も安心。", color: "bg-teal/10 border-teal/20" },
            { label: "30代・キャリアアップ", desc: "リクルートエージェント＋dodaの2社登録がおすすめ。豊富な求人とスカウト機能でキャリアアップの可能性を広げる。", color: "bg-blue-50 border-blue-200" },
            { label: "ハイクラス転職", desc: "ビズリーチ＋JACリクルートメントがおすすめ。年収600万円以上の方はスカウト型で自分の市場価値を確認。", color: "bg-amber-50 border-amber-200" },
            { label: "IT・エンジニア", desc: "doda＋リクルートエージェントがおすすめ。IT業界に精通したアドバイザーが多く、技術職の転職に強い。", color: "bg-purple-50 border-purple-200" },
            { label: "未経験からの転職", desc: "リクルートエージェント＋マイナビエージェントがおすすめ。未経験歓迎の求人が豊富で、キャリアチェンジをサポート。", color: "bg-green-50 border-green-200" },
          ].map((g) => (
            <div key={g.label} className={`rounded-2xl border p-6 ${g.color}`}>
              <h3 className="font-extrabold text-navy text-lg mb-2">{g.label}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Steps */}
      <section className="bg-warm-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title section-title--center">転職エージェントの選び方 5ステップ</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "転職の目的を明確にする", desc: "年収アップ、キャリアチェンジ、ワークライフバランス改善など、転職の目的を明確にしましょう。目的によって最適なエージェントが変わります。" },
              { step: 2, title: "2〜3社のエージェントに登録する", desc: "1社だけでなく複数のエージェントに登録することで、求人の選択肢が広がり、担当者の比較もできます。" },
              { step: 3, title: "キャリアアドバイザーとの面談", desc: "各エージェントのキャリアアドバイザーと面談し、自分の希望や経歴を伝えましょう。相性の良いアドバイザーを見つけることが重要です。" },
              { step: 4, title: "求人を比較検討する", desc: "紹介された求人を比較し、自分の条件に合うものを厳選しましょう。疑問点はアドバイザーに積極的に質問してください。" },
              { step: 5, title: "メインのエージェントを決める", desc: "面談や求人の質を比較した上で、メインで利用するエージェントを1〜2社に絞りましょう。サブとして他社も並行利用するのが効果的です。" },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <span className="step-number">{s.step}</span>
                <div>
                  <h3 className="font-bold text-navy text-lg">{s.title}</h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="section-title section-title--center">よくある質問</h2>
        <div>
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            まずは無料登録から始めよう
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            転職エージェントの利用は完全無料。まずは気になるエージェントに登録して、<br className="hidden sm:block" />
            キャリアアドバイザーに相談してみましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent text-lg px-8 py-4">
              リクルートエージェント詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary bg-white/10 border border-white/20 text-lg px-8 py-4">
              doda 詳細
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
