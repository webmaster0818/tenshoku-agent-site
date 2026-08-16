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
    href: "/review/bizreach/",
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
    href: "/review/jac/",
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
        <h2 className="section-title section-title--center" id="age-guide">年代別・目的別ガイド</h2>
        <p className="text-center text-text-secondary text-sm mb-8 -mt-4">あなたの状況に合わせた選び方と詳細ガイドへ進めます。</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { label: "20代・第二新卒", desc: "マイナビ＋リクルートの2社登録が定番。手厚いサポートと豊富な求人で初めての転職も安心。", color: "bg-teal/10 border-teal/20", href: "/age/20s/", links: [{ t: "第二新卒ガイド", h: "/type/second-new-grad/" }] },
            { label: "30代・キャリアアップ", desc: "リクルート＋dodaの2社登録がおすすめ。豊富な求人とスカウトで可能性を広げる。", color: "bg-blue-50 border-blue-200", href: "/age/30s/", links: [{ t: "40代はこちら", h: "/age/40s/" }, { t: "50代はこちら", h: "/age/50s/" }] },
            { label: "ハイクラス転職", desc: "ビズリーチ＋JACがおすすめ。年収600万円以上の方はスカウト型で市場価値を確認。", color: "bg-amber-50 border-amber-200", href: "/type/high-class/", links: [{ t: "ビズリーチの評判", h: "/review/bizreach/" }, { t: "JACの評判", h: "/review/jac/" }] },
            { label: "IT・エンジニア", desc: "IT特化型の併用が近道。レバテック・ユニゾンキャリアなど専門エージェントの比較へ。", color: "bg-purple-50 border-purple-200", href: "/type/it-engineer/", links: [{ t: "レバテックの評判", h: "/review/levtech/" }, { t: "ユニゾンキャリアの評判", h: "/review/unison-career/" }] },
            { label: "未経験からの転職", desc: "未経験歓迎求人の多い総合型＋対象特化型の組み合わせでキャリアチェンジを支援。", color: "bg-green-50 border-green-200", href: "/type/inexperienced/", links: [{ t: "20代の入口: 転職AGENT Navi", h: "/review/agent-navi/" }] },
            { label: "女性の転職", desc: "ライフイベントを見据えた相談は女性特化型が強い。女性向けエージェントの選び方へ。", color: "bg-rose-50 border-rose-200", href: "/type/women/", links: [{ t: "type女性の転職エージェント", h: "/review/type-woman/" }] },
          ].map((g) => (
            <div key={g.label} className={`rounded-2xl border p-6 ${g.color}`}>
              <Link href={g.href} className="group">
                <h3 className="font-extrabold text-navy text-lg mb-2 group-hover:underline">{g.label} →</h3>
              </Link>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">{g.desc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {g.links.map((l) => (
                  <Link key={l.h} href={l.h} className="text-xs font-semibold text-teal underline">{l.t}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-text-secondary">
          エリアから探す:
          <Link href="/area/tokyo/" className="text-teal underline mx-2">東京</Link>
          <Link href="/area/osaka/" className="text-teal underline mx-2">大阪</Link>
          <Link href="/area/nagoya/" className="text-teal underline mx-2">名古屋</Link>
          <Link href="/area/fukuoka/" className="text-teal underline mx-2">福岡</Link>
          <span className="mx-2 text-black/20">|</span>
          <Link href="/type/freelance/" className="text-teal underline mx-2">フリーランス</Link>
        </div>
      </section>

      {/* Company Salary DB */}
      <section id="company-db" className="bg-warm-gray py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-title section-title--center">企業年収データベース【有価証券報告書ベース】</h2>
          <p className="text-center text-text-secondary text-sm mb-8 -mt-4">
            上場企業の平均年収を有価証券報告書の一次データで整理。業界ランキングと企業別の転職ガイドを公開しています。
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              { href: "/company/maker-salary/", title: "メーカー年収ランキング", desc: "キーエンス・ディスコなど大手39社を一次データで比較" },
              { href: "/company/semiconductor-salary/", title: "半導体業界の年収ランキング", desc: "装置メーカー中心に8社を比較" },
              { href: "/company/it-consultant-salary/", title: "ITコンサル・SIer年収ランキング", desc: "NRI・ベイカレントなど大手7社を比較" },
              { href: "/company/game-salary/", title: "ゲーム会社の年収ランキング", desc: "任天堂系からセガサミーまで6社を比較" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card-hover p-5 block bg-white">
                <h3 className="font-bold text-navy mb-1 text-sm">{c.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/company/" className="btn-primary text-sm px-8 py-3">全57社の企業別ガイド一覧を見る</Link>
          </div>
        </div>
      </section>

      {/* Specialized Agents */}
      <section id="specialized" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="section-title section-title--center">特化型エージェントを探す</h2>
        <p className="text-center text-text-secondary text-sm mb-8 -mt-4">
          職種・業界が決まっているなら、専門特化型エージェントの併用が近道です。
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { href: "/review/levtech/", title: "レバテックキャリア", tag: "ITエンジニア", desc: "IT・Web業界の大手特化型" },
            { href: "/review/unison-career/", title: "ユニゾンキャリア", tag: "ITエンジニア", desc: "厳選紹介型。経験者・未経験の両窓口" },
            { href: "/review/digireka/", title: "デジレカ", tag: "マーケティング", desc: "マーケ職特化。全員がマーケ経験者" },
            { href: "/review/newma/", title: "NewMA", tag: "コンサル・M&A", desc: "DX・戦略・AIコンサルとM&A領域特化" },
            { href: "/review/type-woman/", title: "type女性の転職エージェント", tag: "女性", desc: "東証プライム上場CDC運営の女性特化型" },
            { href: "/review/assign/", title: "ASSIGN（アサイン）", tag: "20-30代ハイエンド", desc: "価値観からキャリアプランを設計" },
            { href: "/review/agent-navi/", title: "転職AGENT Navi", tag: "20代・既卒", desc: "相性でエージェントを紹介するマッチング型" },
            { href: "/review/bizreach/", title: "ビズリーチ", tag: "ハイクラス", desc: "スカウト型。年収600万円以上向け" },
            { href: "/review/jac/", title: "JACリクルートメント", tag: "外資・グローバル", desc: "外資系・海外転職に強い" },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="card-hover p-5 block">
              <span className="inline-block text-[11px] font-bold text-teal bg-teal/10 rounded-full px-2.5 py-0.5 mb-2">{a.tag}</span>
              <h3 className="font-bold text-navy mb-1 text-sm">{a.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5 Steps */}
      <section className="bg-warm-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="section-title section-title--center">転職エージェントの選び方 5ステップ</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "転職の目的を明確にする", desc: "キャリアチェンジ、ワークライフバランス改善、待遇の見直しなど、転職の目的を明確にしましょう。目的によって最適なエージェントが変わります。" },
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

      {/* Guides */}
      <section id="guides" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="section-title section-title--center">転職エージェント活用ガイド</h2>
        <p className="text-center text-text-secondary text-sm mb-8 -mt-4">
          登録から内定までの実務は、ステップ別ガイドにまとめています。
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { href: "/knowledge/how-to-choose/", title: "選び方 7つのポイント" },
            { href: "/knowledge/flow/", title: "使い方・流れ 8ステップ" },
            { href: "/knowledge/interview-prep/", title: "面談の準備・服装・流れ" },
            { href: "/knowledge/email-template/", title: "お礼メール例文13選" },
            { href: "/knowledge/resume/", title: "職務経歴書の書き方" },
            { href: "/knowledge/multiple/", title: "複数利用・掛け持ちのコツ" },
            { href: "/compare/agent-vs-site/", title: "エージェントvs転職サイト" },
            { href: "/compare/recruit-vs-doda/", title: "リクルートvs doda比較" },
          ].map((g) => (
            <Link key={g.href} href={g.href} className="card-hover p-4 block text-center">
              <span className="text-sm font-bold text-navy">{g.title}</span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/knowledge/" className="btn-primary text-sm px-8 py-3">ガイド一覧を見る</Link>
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
