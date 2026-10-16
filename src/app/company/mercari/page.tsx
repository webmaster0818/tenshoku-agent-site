import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/mercari/" },
  title: "メルカリに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "メルカリへの転職を解説。平均年収1,232万円・平均年齢37.2歳（2026年6月期・有価証券報告書）、2026年度の中途採用比率86.8%（公式採用サイト）、公式に記載された選考フローと面接のポイント、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "メルカリに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "メルカリ転職の年収・中途採用比率・公式の選考フロー・面接対策・おすすめエージェントを、有価証券報告書と公式採用サイトをもとに解説。",
  },
};

const faqData = [
  {
    q: "メルカリの中途採用は未経験でも応募できますか？",
    a: "公式採用サイトの募集要項では、応募要件は「各採用ポジションによる」とされています。求められる経験は求人ごとに異なるため、募集職種一覧でご確認ください。なお、新卒採用者と中途採用者の比率は2026年度で新卒13.2%・中途86.8%と公表されています（公式採用サイトFAQ・2026年7月1日更新）。",
  },
  {
    q: "メルカリの面接は何回ありますか？",
    a: "公式採用サイトでは、選考は「応募→書類選考→技術課題（一部職種のみ）→面接（複数回）→オファー」の順と案内されており、具体的な回数の記載はありません。面接の所要時間は30分〜60分程度（通訳を入れる場合やケース面接は90分程度）で、選考は原則オンラインで実施されます。面接では「ミッションへの共感」「バリューの体現」「カルチャーフィット」の3点が見られます。",
  },
  {
    q: "メルカリの面接で英語は必要ですか？",
    a: "公式採用サイトによると、メルカリは社内公用語を制定しておらず、業務では日本語と英語が使われています。面接は日本語・英語、もしくは日英両言語で受けることができ、応募書類も日本語または英語で作成できます。ただし業務上必要な言語が決まっているチーム・職種もあり、その場合は言語が指定されます。",
  },
  {
    q: "メルカリの年収はどのくらいですか？",
    a: "有価証券報告書（2026年6月期）によると、提出会社の平均年間給与は1,232万円、平均年齢は37.2歳、平均勤続年数は4.5年です（全社員平均で、職種別の数値ではありません）。公式採用サイトの正社員募集要項には、昇給年2回（4月・10月）、賞与年2回（3月・9月）、ストックオプション制度（一定職位以上）が記載されています。",
  },
  {
    q: "過去に選考を受けていても再応募できますか？",
    a: "公式採用サイトのFAQによると、前回のエントリーから1年以上（インターンシップ選考は半年以上）経過していれば、同じポジションに再応募できます。他のポジションへの応募には期間の制限はありません。",
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

export default function MercariCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "メルカリ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              メルカリに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/mercari.jpg" alt="メルカリの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">メルカリ 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            メルカリは、フリマアプリ「メルカリ」を運営するテック企業です。グループにはスマホ決済サービス「メルペイ」を運営する株式会社メルペイ、株式会社メルコイン、米国のMercari, Inc.などがあります。
            2026年度の採用者に占める中途採用の比率は86.8%と公表されており（公式採用サイト）、中途入社者が多く活躍している会社です。
            本記事では、有価証券報告書と公式採用サイトをもとに、メルカリ転職の選考フロー・年収・面接対策・おすすめエージェントを解説します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">メルカリの会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">メルカリの転職難易度</a></li>
            <li><a href="#s3" className="text-teal hover:underline">メルカリの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">メルカリの選考フロー（公式記載）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">メルカリ転職の面接対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">メルカリ転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">メルカリ転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">メルカリの会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社メルカリ（Mercari, Inc.）" },
                { label: "本社", value: "東京都港区六本木6-10-1 六本木ヒルズ森タワー" },
                { label: "設立", value: "2013年2月1日" },
                { label: "従業員数", value: "2,065人（連結社員数、2026年6月期）" },
                { label: "平均年収", value: "1,232万円（2026年6月期 有価証券報告書・提出会社）" },
                { label: "事業内容", value: "フリマアプリ「メルカリ」の企画・開発・運用（グループに株式会社メルペイ、株式会社メルコイン、Mercari, Inc.（US）など）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※社名・本社・設立・事業内容は
          <a href="https://about.mercari.com/about/company/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式会社概要</a>
          、従業員数は
          <a href="https://about.mercari.com/sustainability/esg/esgdata/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式ESGデータ</a>
          、平均年収は有価証券報告書（
          <a href="https://irbank.net/4385/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK掲載値</a>
          ）によります。2026年10月14日に確認しました。最新情報は公式サイトでご確認ください。
        </p>

        {/* 転職難易度 */}
        <h2 id="s2">メルカリの転職難易度</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-text-secondary text-sm mb-4">
            転職の難しさを一律に格付けできる公的な指標はありません。ここでは、応募先を判断する材料として、有価証券報告書と公式データで確認できる数値を整理します。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">決算期</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">平均年間給与</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">平均年齢</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">平均勤続年数</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">従業員数（提出会社）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fy: "2024年6月期", pay: "1,166万円", age: "36.0歳", tenure: "3.5年", emp: "1,417名" },
                  { fy: "2025年6月期", pay: "1,176万円", age: "36.3歳", tenure: "3.8年", emp: "1,543名" },
                  { fy: "2026年6月期", pay: "1,232万円", age: "37.2歳", tenure: "4.5年", emp: "1,345名" },
                ].map((r) => (
                  <tr key={r.fy} className="border-b border-border">
                    <td className="py-2 px-3 text-text-secondary">{r.fy}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.pay}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.age}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.tenure}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.emp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は2024年6月期の1,166万円から2026年6月期の1,232万円へ2期連続で上昇しています（有価証券報告書）。</li>
            <li>全社員に占めるエンジニア職社員の割合は42.2%、外国籍社員の割合は32.0%、東京オフィスで働く社員の国籍数は52ヶ国です（2026年6月期・公式ESGデータ）。</li>
            <li>年次有給休暇の取得率は83.4%、男性の育児休業等の取得割合は86.4%です（2026年6月期・公式ESGデータ）。</li>
            <li>バリューは「Go Bold（大胆にやろう）」「All for One（全ては成功のために）」「Be a Pro（プロフェッショナルであれ）」「Move Fast（はやく動く）」の4つです（公式サイト）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            出典：有価証券報告書（
            <a href="https://irbank.net/4385/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK掲載値</a>
            ）、
            <a href="https://about.mercari.com/sustainability/esg/esgdata/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">メルカリ ESGデータ</a>
            、
            <a href="https://about.mercari.com/about/about-us/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">私たちについて</a>
            （公式）。平均年間給与・平均年齢・平均勤続年数は提出会社（単体）の全社員平均で、職種別の数値ではありません。2026年10月14日に確認しました。
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">メルカリの中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">IT・Web系の求人を非公開求人も含めて比較する場合は、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />のような転職エージェントを併用すると、応募先の候補を広げやすくなります。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            メルカリは
            <a
              href="https://careers.mercari.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              公式採用サイト（Mercari Careers）
            </a>
            で通年の職種別採用を行っています（新卒採用は別ページ）。応募は公式採用サイトの求人検索ページに掲載された各求人からのWebエントリーで、履歴書・職務経歴書の書式は自由（日本語/英語可）とされています。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>
              新卒採用者と中途採用者の比率（公式採用サイトFAQ・2026年7月1日更新）: 2024年度 中途90.0%、2025年度 中途85.6%、2026年度 中途86.8%。直近3年度とも採用の8割超が中途採用です（出典：
              <a href="https://careers.mercari.com/faq/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">メルカリ採用情報 FAQ</a>
              、2026年10月14日確認）
            </li>
            <li>募集職種カテゴリ（公式カテゴリ表記のまま・2026年7月31日確認時点）: 「エンジニアリング（Engineering Positions）」「プロダクト・ビジネス（Product &amp; Business Positions）」「コーポレート（Corporate Positions）」の3大カテゴリです。</li>
            <li>勤務地: 東京本社（Mercari Base Tokyo）、大阪、福岡オフィスです。働き方は「Hybrid Workstyle」（週2日以上のオフィス出社が基本ポリシー）・フルフレックス（コアタイムなし）で、海外からのリモートワークは原則不可とされています。</li>
            <li>選考では一部職種で技術課題があり、面接はミッション共感・バリュー体現・カルチャーフィットをSTAR形式で評価すると公式に記載されています。選考途中でリファレンスチェックが実施される場合があります。</li>
            <li>社内公用語は制定しておらず、業務では日本語と英語が使われています。日本語・英語の学習プログラムや通訳・翻訳チームによるサポートも用意されています（公式採用サイト「言語」）。</li>
            <li>正社員の試用期間は3カ月です。社員インタビューは公式採用サイトや、メルカリの人を伝えるメディア「メルカン」で発信されています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年10月14日に公式採用サイトで確認しました。募集状況は変動するため、最新情報は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">メルカリの選考フロー（公式記載）</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "応募",
              desc: "公式採用サイトの各求人からWebエントリーします。履歴書・職務経歴書の書式は自由で、日本語・英語のいずれでも提出可能とされています。",
            },
            {
              step: 2,
              title: "書類選考",
              desc: "提出書類をもとに選考が行われます。",
            },
            {
              step: 3,
              title: "技術課題（一部職種）",
              desc: "一部の職種では技術課題が実施されるとされています。",
            },
            {
              step: 4,
              title: "面接（複数回）",
              desc: "面接ではミッションへの共感・バリューの体現・カルチャーフィットをSTAR形式で評価すると公式に記載されています。選考途中でリファレンスチェックや、メンバーとカジュアルに話す場が設けられる場合があります。面接の所要時間は30分〜60分程度で、選考は原則オンラインで実施されます。",
            },
            {
              step: 5,
              title: "オファー",
              desc: "選考通過後、オファー（条件提示）となります。正社員の試用期間は3カ月とされています。",
            },
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
        <p className="text-xs text-text-muted mb-8">
          ※公式採用ページに記載された流れです（2026年10月14日確認）。
        </p>

        {/* 面接対策ポイント */}
        <h2 id="s5">メルカリ転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "4つのバリューの体現エピソード",
              desc: "公式採用サイトでは、面接で「Go Bold（大胆にやろう）」「All for One（全ては成功のために）」「Be a Pro（プロフェッショナルであれ）」「Move Fast（はやく動く）」の4つのバリューに沿って、どれだけ大胆に挑戦したか、ステークホルダーをどう巻き込んだか、専門性をどう発揮したかを聞くと説明されています。自分の経験と紐づけて、具体的に語れるよう準備しておくことをおすすめします。",
            },
            {
              title: "「循環型社会」への共感",
              desc: "メルカリのミッションは「あらゆる価値を循環させ、あらゆる人の可能性を広げる」です。サステナビリティや循環型経済への関心・ビジョンを語れるよう準備しておくことをおすすめします。",
            },
            {
              title: "STAR形式で成果を定量的に",
              desc: "メルカリの面接では、状況（Situation）・課題（Task）・行動（Action）・結果（Result）を掘り下げる「STAR」の手法が使われ、結果については「できる限り成果を定量化して」話すよう公式に案内されています。主要なプロジェクトごとにSTARの4要素と数字を整理しておくことをおすすめします。",
            },
            {
              title: "多様な環境での協働経験",
              desc: "東京オフィスで働く社員の国籍数は52ヶ国、外国籍社員の割合は32.0%です（2026年6月期・公式ESGデータ）。多様なバックグラウンドのメンバーと協働した経験を準備しておくと、働く姿を具体的にイメージしてもらいやすくなります。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">メルカリ転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "幅広い業界・職種を扱う大手総合型の転職エージェントです。IT・Web業界の求人を同業他社とあわせて比較しながら、職務経歴書の作成や面接準備のサポートを受けられます。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録しておくと企業やヘッドハンターからスカウトが届く仕組みで、管理職・専門職のポジションを探したい方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "ミドル・ハイクラス層の転職支援に強みを持つ転職エージェントです。外資系・グローバル企業も含めて、専門性を活かしたキャリアアップを考えている方に向いています。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "大手総合型の転職サービスです。転職サイトとエージェントサービスを併用できるため、IT・Web業界の各社を自分でも検索しながら効率よく情報収集できます。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援を得意とする総合型の転職エージェントです。初めての転職で、書類作成や面接対策を丁寧に進めたい方に向いています。",
            },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link
                  href={agent.href}
                  className="text-teal text-sm hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="s7">メルカリ転職 よくある質問</h2>
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
            メルカリ転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントを活用し、十分に準備したうえで選考に臨むことをおすすめします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連企業ガイド */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の企業の転職ガイド</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Google転職ガイド
            </Link>
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Amazon転職ガイド
            </Link>
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              任天堂転職ガイド
            </Link>
            <Link href="/company/accenture/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              アクセンチュア転職ガイド
            </Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サイバーエージェント転職ガイド
            </Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トヨタ転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
