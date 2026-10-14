import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/cyberagent/" },
  title: "サイバーエージェントに転職するには？年収・面接対策・おすすめエージェント",
  description:
    "サイバーエージェントへの転職を解説。平均年収913万円・平均年齢33.8歳（2025年9月期・有報）、新規採用に占める中途採用51.9%（公式データ）、キャリア採用の応募方法、面接対策、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "サイバーエージェントに転職するには？年収・面接対策・おすすめエージェント",
    description:
      "サイバーエージェント転職の年収・中途採用データ・応募方法・面接対策・おすすめエージェントを、有価証券報告書と公式データをもとに解説。",
  },
};

const faqData = [
  {
    q: "サイバーエージェントの中途採用比率はどのくらいですか？",
    a: "公式サイトの「データで見るサイバーエージェント」では、2025年9月末時点（連結）の新規採用比率を新卒採用48.1%・中途採用51.9%と公表しています。新卒採用を競争力と位置付けて毎年積極的に行う一方、事業の成長に合わせてキャリア採用も強化していると説明されています（2026年10月14日確認）。",
  },
  {
    q: "サイバーエージェントの面接は何回ありますか？",
    a: "公式のキャリア採用ページ・HRMOSの採用ページには、選考プロセスの共通の記載がありません。面接の回数や内容は求人・部門によって異なるため、応募前に各求人票で確認しましょう。",
  },
  {
    q: "サイバーエージェントの年収は高いですか？",
    a: "有価証券報告書（2025年9月期）によると、提出会社の平均年間給与は913万円、平均年齢は33.8歳、平均勤続年数は6.5年です。平均年間給与は2023年9月期806万円、2024年9月期882万円から2期連続で上昇しています（全社員平均で、職種別の数値ではありません）。",
  },
  {
    q: "エンジニアやクリエイターの採用はありますか？",
    a: "公式データによると、従業員の職種別割合はビジネス職59%、エンジニア職22%、クリエイター職19%（2025年9月末時点・連結）で、2006年から技術職の採用を強化してきたと説明されています。キャリア採用の募集職種はHRMOSの公式採用ページで事業部門ごとに確認できます。",
  },
  {
    q: "サイバーエージェントの社風はどのような感じですか？",
    a: "「21世紀を代表する会社を創る」をビジョンに掲げています。公式のMission Statementには「能力の高さより一緒に働きたい人を集める。」「若手の台頭を喜ぶ組織で、年功序列は禁止。」「挑戦した敗者にはセカンドチャンスを。」といった項目が並んでおり、社風を知る手がかりになります。",
  },
  {
    q: "サイバーエージェントの勤務地はどこですか？",
    a: "本社所在地は東京都渋谷区宇田川町40番1号 Abema Towersです（公式会社概要）。キャリア採用ページに勤務地の共通記載はないため、実際の勤務地は各求人票で確認してください。",
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

export default function CyberAgentCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "サイバーエージェント" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              サイバーエージェントに転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/cyberagent.jpg" alt="サイバーエージェントの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">サイバーエージェント 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            サイバーエージェントは、メディア&amp;IP事業（「ABEMA」など）・インターネット広告事業・ゲーム事業・投資育成事業を展開するIT企業です。
            「21世紀を代表する会社を創る」をビジョンに掲げ、公式のトップメッセージでは創業以来28期増収を続けていると説明されています。
            本記事では、有価証券報告書と公式データをもとに、サイバーエージェントの年収・中途採用データ・応募方法・面接対策・おすすめエージェントを解説します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">サイバーエージェントの会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">サイバーエージェントの転職難易度</a></li>
            <li><a href="#s3" className="text-teal hover:underline">サイバーエージェントの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">サイバーエージェントの選考フロー</a></li>
            <li><a href="#s5" className="text-teal hover:underline">サイバーエージェント転職の面接対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">サイバーエージェント転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">サイバーエージェント転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">サイバーエージェントの会社概要</h2>
        <p className="text-sm text-text-secondary mb-4">IT・Web系の求人を非公開分まで含めて効率よく比較するなら、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />のような転職エージェントを併用すると、応募先の候補を広げやすくなります。</p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社サイバーエージェント（CyberAgent, Inc.）" },
                { label: "本社", value: "東京都渋谷区宇田川町40-1 Abema Towers" },
                { label: "設立", value: "1998年3月18日" },
                { label: "従業員数", value: "8,150人（連結、2025年9月末時点）" },
                { label: "平均年収", value: "913万円（2025年9月期 有価証券報告書・提出会社）" },
                { label: "事業内容", value: "メディア&IP事業、インターネット広告事業、ゲーム事業、投資育成事業" },
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
          <a href="https://www.cyberagent.co.jp/corporate/overview/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式会社概要</a>
          、従業員数は
          <a href="https://www.cyberagent.co.jp/sustainability/cadata/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">データで見るサイバーエージェント</a>
          、平均年収は有価証券報告書（
          <a href="https://irbank.net/4751/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK掲載値</a>
          ）による。2026年10月14日確認。最新情報は公式サイトでご確認ください。
        </p>

        {/* 転職難易度 */}
        <h2 id="s2">サイバーエージェントの転職難易度</h2>
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
                  { fy: "2023年9月期", pay: "806万円", age: "33.3歳", tenure: "5.9年", emp: "2,225名" },
                  { fy: "2024年9月期", pay: "882万円", age: "33.7歳", tenure: "6.4年", emp: "2,364名" },
                  { fy: "2025年9月期", pay: "913万円", age: "33.8歳", tenure: "6.5年", emp: "2,588名" },
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
            <li>平均年間給与は2期連続で上昇し、提出会社の従業員数も3期で2,225名から2,588名へ増えています（有価証券報告書）</li>
            <li>連結従業員数は7,251人（2023年）→7,720人（2024年）→8,150人（2025年）と増加（各年9月末・公式データ）</li>
            <li>新規採用比率は新卒採用48.1%・中途採用51.9%で、採用の半数超が中途採用（2025年9月末時点・連結・公式データ）</li>
            <li>職種別の従業員割合はビジネス職59%・エンジニア職22%・クリエイター職19%、事業別ではゲーム事業37%・インターネット広告事業32%・メディア&amp;IP事業25%（2025年9月末時点・連結・公式データ）</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            出典：有価証券報告書（
            <a href="https://irbank.net/4751/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK掲載値</a>
            ）、
            <a href="https://www.cyberagent.co.jp/sustainability/cadata/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">データで見るサイバーエージェント</a>
            （公式）。平均年間給与・平均年齢・平均勤続年数は提出会社（単体）の全社員平均で、職種別の数値ではありません。2026年10月14日確認。
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">サイバーエージェントの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            サイバーエージェントは「キャリア採用」の名称で中途採用を実施しており、
            <a
              href="https://www.cyberagent.co.jp/careers/professional/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              公式のキャリア採用ページ
            </a>
            から案内されています。募集職種の一覧は
            <a
              href="https://hrmos.co/pages/cyberagent-group"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              HRMOSの公式採用ページ
            </a>
            に集約されており、応募はHRMOS掲載の各求人からのWebエントリーです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式採用サイト上には職種カテゴリの列挙はなく、HRMOSでは事業部門単位で募集が掲載されています（公式表記のまま・2026年7月31日確認時点）: 「インターネット広告事業本部」「メディア事業部」「ゲーム事業部」「AI事業本部」「アニメIP事業本部」「マンガIP事業本部」「グループIT推進本部」「CA Creative Center」ほか、株式会社AbemaTV・株式会社CyberZなどのグループ会社</li>
            <li>選考プロセスの共通記載は、公式採用サイト・HRMOSトップのいずれでも確認できませんでした。求人・部門により選考の流れは異なる可能性があるため、各求人票でご確認ください</li>
            <li>キャリア採用ページに勤務地の共通記載はなく、勤務地は各求人票に依存します（HRMOSの会社情報には本社所在地「東京都渋谷区宇田川町40番1号 Abema Towers」の記載があります）</li>
            <li>グループ13社の個別キャリア採用ページへのリンク一覧が採用総合ページに用意されています</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s4">サイバーエージェントの選考フロー</h2>
        <p className="text-sm text-text-secondary mb-4">
          サイバーエージェントの公式キャリア採用ページ・HRMOSの採用ページには、選考プロセスの共通の記載がありません。以下は中途採用の一般的な進み方を整理したものです。面接の回数や課題の有無は求人・部門ごとに異なるため、応募前に各求人票で確認しましょう。
        </p>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "求人を探して応募",
              desc: "募集職種はHRMOSの公式採用ページに事業部門単位で掲載されており、各求人からWebエントリーします。グループ会社の募集は、採用総合ページにある各社のキャリア採用ページから確認できます。",
            },
            {
              step: 2,
              title: "書類選考",
              desc: "提出書類は求人票の案内に従って準備します。担当した事業・役割・成果を数字で示せるように整理しておくと、職務経歴が伝わりやすくなります。",
            },
            {
              step: 3,
              title: "面接・課題",
              desc: "面接の回数や面接官、技術課題などの有無は求人によって異なります。求人票に記載がない場合は、応募時や面談の場で確認しておくと安心です。",
            },
            {
              step: 4,
              title: "内定・条件確認",
              desc: "内定後に提示される給与・勤務地・入社時期などの条件を確認し、入社の意思を決めます。",
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

        {/* 面接対策ポイント */}
        <h2 id="s5">サイバーエージェント転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "Mission Statementを読み込む",
              desc: "公式のMission Statementには「能力の高さより一緒に働きたい人を集める。」「若手の台頭を喜ぶ組織で、年功序列は禁止。」「挑戦した敗者にはセカンドチャンスを。」などが掲げられています。共感できる項目と、それを裏づける自分の経験をセットで話せるよう準備しましょう。",
            },
            {
              title: "事業理解の深さ",
              desc: "事業はメディア&IP・インターネット広告・ゲーム・投資育成の4つで、従業員の約7割がゲーム事業と広告事業に所属しています（公式データ）。志望する事業部門で自分がどう貢献できるかを具体的に語れるようにしましょう。",
            },
            {
              title: "職種ごとの専門性を具体的に",
              desc: "従業員の職種別割合はビジネス職59%・エンジニア職22%・クリエイター職19%です（公式データ）。担当したプロジェクトの役割・成果を数字や成果物で示せるようにしておくと、専門性が伝わりやすくなります。",
            },
            {
              title: "スピード感への対応力",
              desc: "IT業界は環境の変化が速い業界です。短期間で成果を出した経験や、環境変化に柔軟に適応した経験を具体的なエピソードで準備しておきましょう。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">サイバーエージェント転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "幅広い業界・職種を扱う大手総合型の転職エージェント。IT・Web業界の求人を同業他社とあわせて比較しながら、職務経歴書の作成や面接準備のサポートを受けられます。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービス。職務経歴を登録しておくと企業やヘッドハンターからスカウトが届く仕組みで、管理職・専門職のポジションを探したい方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "ミドル・ハイクラス層の転職支援に強みを持つ転職エージェント。マネジメント経験や専門性を活かしたキャリアアップを考えている方に向いています。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "大手総合型の転職サービス。転職サイトとエージェントサービスを併用できるため、IT・Web業界の各社を自分でも検索しながら効率よく情報収集できます。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援を得意とする総合型の転職エージェント。初めての転職で、書類作成や面接対策を丁寧に進めたい方に向いています。",
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
        <h2 id="s7">サイバーエージェント転職 よくある質問</h2>
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
            サイバーエージェント転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントを活用して、万全の準備で選考に臨みましょう。
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
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トヨタ転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
