import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "九州電力の中途採用・年収【2026年10月】キャリア採用の応募資格・選考ステップ・平均年収842万円",
  description:
    "九州電力の平均年収は約842万円（2026年3月期・有価証券報告書）、2年で+90万円。経験者採用（キャリア）は原則45歳未満・前職不問、選考はES→基礎能力検査→一次面接→最終面接（公式・2026年10月15日確認）。高度専門採用との違いも整理。",
  alternates: { canonical: "/company/kyuden/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "九州電力の中途採用・年収【2026年10月】キャリア採用の応募資格・選考ステップ・平均年収842万円",
    description: "九州電力の平均年収約842万円（有価証券報告書）とキャリア採用の応募資格・選考ステップ（公式・10/15確認）。",
  },
};

const faqData = [
  {
    q: "九州電力の平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月14日確認）によると、平均年間給与は約842万円（2026年3月期・提出会社単体）です。752万円（2024年3月期）→806万円（2025年3月期）→842万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "九州電力は中途採用を行っていますか？",
    a: "はい。公式採用サイトに「経験者採用（キャリア）」「経験者採用（高度専門）」「ジョブ・リターン採用」などの窓口があります。キャリア採用は2027年4月入社向けの選考を2026年7月28日から募集しており、職種は事務職（エリア指定コース／エリア指定なし／都市開発事業／エネルギーコンサルティング）と技術職です（2026年10月15日確認）。",
  },
  {
    q: "九州電力はどんな会社ですか？",
    a: "九州を基盤とする電力大手で、再エネ・海外事業も展開しています。本社は福岡県福岡市にあります。",
  },
  {
    q: "九州電力の中途採用の難易度・倍率は？",
    a: "倍率は公表されていません。公式の募集要項では、キャリア採用は原則として2026年4月1日時点で45歳未満の既卒者が対象で、「専攻学部・学科、前職の経験は問いません」と明記されています（大学等卒は卒業後3年超なら職務経験不問）。選考はエントリーシート→基礎能力検査→一次面接→最終面接です（2026年10月15日確認）。",
  },
  {
    q: "キャリア採用と高度専門採用の違いは？",
    a: "公式FAQによると、高度専門採用は特定の職種・業務の専門人材を不定期で募集するもので、キャリア採用は毎年4月1日入社を基本に各職種で広く募集するものです。キャリア採用には長期勤続によるキャリア形成の観点から年齢制限があり、その他の労働条件や処遇に違いはないとされています（2026年10月15日確認）。",
  },
  {
    q: "九州電力の平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月14日確認）によると、平均勤続年数は20.8年、平均年齢は42.1歳（2026年3月期・提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "九州電力の中途採用・年収【2026年10月】キャリア採用の応募資格・選考ステップ・平均年収842万円",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kyuden/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "九州電力" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            九州電力の中途採用・年収【2026年10月】キャリア採用の応募資格・選考ステップ・平均年収842万円
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/kyuden.jpg" alt="九州電力の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">九州電力 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            九州電力（証券コード9508）は、九州を基盤とする電力大手で、再エネ・海外事業も展開しています。
            本記事では、有価証券報告書と公式採用サイトの募集要項をもとに、平均年収・中途採用（キャリア採用）の応募資格・選考を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">九州電力の年収と中途採用の要約（2026年10月15日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>平均年収：</strong>約842万円（2026年3月期・有価証券報告書／提出会社）です。752万円→806万円→842万円と2年で+90万円上昇しています。平均年齢は42.1歳、平均勤続年数は20.8年です。</li>
            <li><strong>キャリア採用の応募資格：</strong>原則として2026年4月1日時点で45歳未満の既卒者が対象です。専攻・前職の経験は問いません（大学等卒は卒業後3年超なら職務経験不問）。</li>
            <li><strong>職種：</strong>事務職（エリア指定コース／エリア指定なし／都市開発事業／エネルギーコンサルティング〈技術提案営業〉）、技術職があります。入社日は2027年4月1日です（相談可）。</li>
            <li><strong>選考：</strong>エントリーシート → 基礎能力検査 → 一次面接 → 最終面接 → 内定の順です（2027年4月入社向けは11月中旬の内定予定）。倍率は公表されていません。</li>
            <li><strong>高度専門採用：</strong>特定職種の専門人材を不定期で募集しています（年齢制限なし）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.kyuden.co.jp/recruit/information/career/?tab=1" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">九州電力 経験者採用情報</a>／有価証券報告書（IR BANK掲載値）。募集時期・内容は変更される場合があるため、応募前に公式サイトにて最新情報をご確認ください。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">九州電力転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">九州電力の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">九州電力の中途採用（キャリア採用の応募資格）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">九州電力で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">九州電力のキャリア採用の選考ステップ（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">九州電力の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">九州電力転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">九州電力転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">九州電力転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約842万円です（2026年3月期・有価証券報告書。IR BANK掲載値・2026年9月14日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>752万円（2024年3月期）→806万円（2025年3月期）→842万円（2026年3月期）と推移しており、2年連続で上昇しています（計90万円）。</li>
            <li>キャリア採用の対象は原則45歳未満で、前職の経験は問いません。選考はES→基礎能力検査→一次面接→最終面接の順です（公式・2026年10月15日確認）。</li>
            <li>全従業員平均であり、発電所・支社・本店で水準は異なります。</li>
          </ul>
        </div>

        <h2 id="s2">九州電力の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "九州電力株式会社" },
                { label: "証券コード", value: "9508" },
                { label: "本社", value: "福岡県福岡市" },
                { label: "事業内容", value: "九州を基盤とする電力大手。原子力の再稼働率が高く、再エネ・海外事業も展開" },
                { label: "平均年間給与", value: "約842万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月14日確認）" },
                { label: "直近3年の推移", value: "752万円（2024年3月期）→806万円（2025年3月期）→842万円（2026年3月期）" },
                { label: "平均年齢", value: "42.1歳（同・提出会社）" },
                { label: "平均勤続年数", value: "20.8年（同・提出会社）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月14日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">九州電力の中途採用（キャリア採用の応募資格）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.kyuden.co.jp/recruit/information/career/?tab=1" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイトの経験者採用情報</a>の内容です（2026年10月15日確認）。2027年4月入社向けの選考は2026年7月28日から募集されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong>応募資格：</strong>原則として2026年4月1日時点で45歳未満の既卒者が対象です。大学（院）・短大・専門学校卒は卒業後3年を超えていれば職務経験は問わず、卒業後3年以内の場合は正社員経験が必要です（ない場合は定期採用の対象）。高専・高校卒等は、既卒であれば職務経験を問われません。専攻学部・学科、前職の経験は問いません。</li>
            <li><strong>職種：</strong>事務職（エリア指定コース）、事務職（エリア指定なし）、事務職（都市開発事業）、事務職（エネルギーコンサルティング〈技術提案営業〉）、技術職があります。事務職には障がい者特別選考もあります。海外事業の採用は株式会社キューデン・インターナショナルが募集主体です。</li>
            <li><strong>勤務地：</strong>九州管内の事業所および東京支社ほか。入社後は転居を伴う異動があります。</li>
            <li><strong>勤務・待遇：</strong>勤務時間は8時50分〜17時30分です（職種・勤務箇所によりスーパーフレックス・三交替あり）。給与は実務経験に応じ当社規定により決定されます。賞与年2回（6月・12月）、有給休暇20日（4月1日入社の場合）、リフレッシュ休日（年5日連続）、住宅手当・世帯手当、寮・社宅・家賃補助（地域による）があります。</li>
            <li><strong>その他の窓口：</strong>経験者採用（高度専門）、カムバック制度、ジョブ・リターン採用があります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で九州電力のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />で「どのエージェントに登録すべきか」から相談する方法もあります（特徴は<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で確認できます）。</p>
        </div>

        <h2 id="s4">九州電力で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "原子力再稼働の先行", desc: "川内・玄海の稼働により電源構成上の特徴を持つ会社です。" },
            { title: "2年で+90万円", desc: "752→842万円と着実に上昇しています。" },
            { title: "福岡基盤", desc: "九州経済圏のインフラ中核で、地域キャリアの有力候補です。" },
            { title: "勤続20.8年の高定着", desc: "収録9社でも長い平均勤続年数です。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">九州電力のキャリア採用の選考ステップ（公式）</h2>
        <p className="text-sm text-text-muted mb-4">2027年4月入社向けキャリア採用の公式スケジュールです（2026年10月15日確認・公式は「現時点でのスケジュール予定」と記載）。エントリーシートの入力期限（9月27日）は確認時点で過ぎています。次回の募集は公式でご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "エントリーシート入力", desc: "マイページに登録のうえ入力します。入力期限は2026年9月27日（日）でした。" },
            { step: 2, title: "基礎能力検査", desc: "エントリーシート提出者から順次案内されます。受験期限は2026年10月7日（水）です。" },
            { step: 3, title: "一次面接", desc: "受験期限は2026年10月24日（土）です。" },
            { step: 4, title: "最終面接", desc: "受験期限は2026年11月7日（土）です。内定通知は2026年11月中旬の予定です。" },
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

        <h2 id="s6">九州電力の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約842万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>全従業員平均であり、発電所・支社・本店で水準は異なります。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">九州電力転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や、管理職・専門職の情報収集に適しています。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2 id="s8">九州電力転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">九州電力転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/denryoku-gas-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">電力・ガス 年収ランキング</Link>
            <Link href="/company/tohoku-electric/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東北電力転職ガイド</Link>
            <Link href="/company/chubu-electric/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">中部電力転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
