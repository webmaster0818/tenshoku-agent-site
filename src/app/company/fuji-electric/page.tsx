import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "富士電機の転職・中途採用の難易度｜平均年収840万円・選考は面接2回が基本【2026年】",
  description:
    "富士電機の平均年収は約840万円（2026年3月期・有価証券報告書）です。キャリア採用の求人数（公式採用ページで正社員62件）、学歴・年齢の制限がないこと、選考フロー（書類選考・一次面接・最終面接）を公式情報で確認して解説します。",
  alternates: { canonical: "/company/fuji-electric/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "富士電機の転職・中途採用の難易度｜平均年収840万円・選考は面接2回が基本【2026年】",
    description: "富士電機（6504）の平均年収・キャリア採用の求人・選考フローを、有価証券報告書と公式採用ページで確認して解説します。",
  },
};

const faqData = [
  {
    q: "富士電機の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月19日提出、EDINETで2026年10月19日確認）によると、平均年間給与は8,409,855円（約840万円・提出会社）で、対前事業年度増減率は3.8%です。786万円（2024年3月期）→810万円（2025年3月期）→840万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年8月29日確認）。提出会社の就業人員10,901人（出向者を除く）の平均で、賞与及び基準外賃金を含みます。職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "富士電機は中途採用を行っていますか？",
    a: "行っています。公式のキャリア採用ページ（採用管理サービスHRMOS上の富士電機株式会社 採用情報）には、2026年10月29日時点で正社員の求人が62件掲載されています。事業本部別ではインダストリー事業本部26件、エネルギー事業本部21件、パワエレ営業6件、技術開発本部4件、コーポレート2件などです。",
  },
  {
    q: "富士電機の中途採用の難易度はどのくらいですか？",
    a: "富士電機は中途採用の倍率や採用人数を公式採用ページで公表していないため、当サイトでは難易度を数値では示していません。公式採用ページのよくある質問では、学歴・年齢の制限はなく、応募者の経歴（キャリア）やスキル、人物を重視して選考すると記載されています。選考はエントリー→書類選考→一次面接→最終面接→内定の流れで、面接の回数は職種によって異なる場合があります（2026年10月29日確認）。求人の多くはプラント技術・設計技術・研究開発などの技術職のため、応募職種の実務経験が求人の要件に合っているかを先に確認することをおすすめします。",
  },
  {
    q: "富士電機はどんな会社ですか？",
    a: "重電システム・パワーエレクトロニクス・パワー半導体・自動販売機などのエネルギー・環境技術メーカーです。有価証券報告書では、登記上の本店所在地は川崎市川崎区田辺新田1番1号、実際の業務を行う本社事務所は東京都品川区大崎一丁目11番2号（ゲートシティ大崎イーストタワー）と記載されています。",
  },
  {
    q: "富士電機の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は20.3年、平均年齢は44.9歳（提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "富士電機への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-10-29",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/fuji-electric/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "富士電機" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            富士電機の転職・中途採用の難易度｜平均年収840万円・選考は面接2回が基本【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/fuji-electric.jpg" alt="富士電機の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">富士電機 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            富士電機の平均年間給与は<strong>8,409,855円（約840万円）</strong>です（2026年3月期・有価証券報告書、提出会社の就業人員10,901人）。公式のキャリア採用ページには2026年10月29日時点で正社員の求人が62件掲載されており、学歴・年齢の制限はなく、選考はエントリー→書類選考→一次面接→最終面接→内定の流れと案内されています。中途採用の倍率や採用人数は公表されていないため、当サイトでは難易度を数値では示していません。
            富士電機（証券コード6504）は、重電システム・パワーエレクトロニクス・パワー半導体・自動販売機などのエネルギー・環境技術メーカーです。本記事では、有価証券報告書と公式採用ページの記載をもとに、年収・中途採用・選考を整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">富士電機転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">富士電機の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">富士電機の中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">富士電機で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">富士電機の選考フロー（公式採用ページ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">富士電機の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">富士電機転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">富士電機転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">富士電機転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約840万円（8,409,855円、2026年3月期・有価証券報告書、EDINETで2026年10月29日再確認）で、提出会社の就業人員10,901人（出向者を除く）の平均値です。</li>
            <li>786万円（2024年3月期）→810万円（2025年3月期）→840万円（2026年3月期）と推移しています（直近2年で計54万円上昇）。</li>
            <li>公式のキャリア採用ページには正社員の求人が62件掲載されています。勤務地別では東京都が27件で最も多く、神奈川県6件、愛知県3件、大阪府3件などです（2026年10月29日確認）。</li>
            <li>公式のよくある質問では、学歴・年齢の制限はないと記載されています。選考は書類選考と一次面接・最終面接が基本で、面接の回数は職種によって異なる場合があります。</li>
            <li>平均勤続20.3年・平均年齢44.9歳の長期勤続型の構成での平均値です。</li>
          </ul>
        </div>

        <h2 id="s2">富士電機の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "富士電機株式会社" },
                { label: "証券コード", value: "6504" },
                { label: "本店所在地", value: "川崎市川崎区田辺新田1番1号（登記上の本店。本社事務所は東京都品川区大崎一丁目11番2号）" },
                { label: "事業内容", value: "重電システム・パワーエレクトロニクス・パワー半導体・自動販売機などのエネルギー・環境技術メーカー" },
                { label: "平均年間給与", value: "約840万円（8,409,855円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "786万円（2024年3月期）→810万円（2025年3月期）→840万円（2026年3月期）" },
                { label: "従業員数（提出会社）", value: "10,901人（就業人員。ほかに臨時従業員1,291人）" },
                { label: "平均年齢", value: "44.9歳（同・提出会社）" },
                { label: "平均勤続年数", value: "20.3年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YEEB.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月19日提出、EDINETで2026年10月19日確認・10月29日再確認）、それ以前の推移はIR BANK掲載値（2026年8月29日確認）に基づく提出会社の平均です。有価証券報告書の注記により、従業員数は就業人員数で出向者を除き、平均年間給与は賞与及び基準外賃金を含みます。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">富士電機の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">富士電機の<a href="https://hrmos.co/pages/fujielectric" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用ページ</a>（公式サイトの<a href="https://www.fujielectric.co.jp/recruit/career/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用情報</a>から移動する採用管理サービスHRMOS上のページ）の掲載状況は次のとおりです（2026年10月29日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-warm-gray"><th className="text-left py-2 px-3">事業本部</th><th className="text-left py-2 px-3">掲載求人数</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3">インダストリー事業本部</td><td className="py-2 px-3">26件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">エネルギー事業本部</td><td className="py-2 px-3">21件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">パワエレ営業</td><td className="py-2 px-3">6件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">技術開発本部</td><td className="py-2 px-3">4件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">コーポレート</td><td className="py-2 px-3">2件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold">正社員の求人の合計</td><td className="py-2 px-3 font-bold">62件</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>職種の分類では、プラント技術10件、設計技術6件、研究開発6件、営業6件、システム技術5件、品質保証2件、財務経理2件、人事総務1件などが掲載されています。</li>
            <li>公式のよくある質問では、学歴・年齢の制限はなく、応募者の経歴（キャリア）やスキル、人物を重視して選考すると記載されています。キャリア採用者向けの研修や、各事業所に通勤可能な立地の独身寮・社宅も案内されています。</li>
            <li>有価証券報告書の事業等のリスクには、優秀な人財の確保に向けてキャリア採用の拡大等に取り組んでいると記載されています。</li>
            <li>※求人数・募集職種は随時変わるため、最新の情報は公式採用ページでご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で富士電機のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化型の転職エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">富士電機で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "パワエレ・重電分野の専門性", desc: "受配電・パワーエレクトロニクス・回転機などの電機技術の経験は同社の中核領域に直結します。" },
            { title: "パワー半導体の成長領域", desc: "電動化需要を背景にパワー半導体事業への投資が続いており、半導体関連の実務経験が活きます。" },
            { title: "プラント・インフラ案件の経験", desc: "エネルギー・産業インフラ向けの大型案件が多く、プラントエンジニアリングや現場対応の経験が評価されやすい領域です。" },
            { title: "長期就業を前提とした姿勢", desc: "平均勤続20.3年と長期就業型の会社であり、腰を据えたキャリア形成志向が適合します。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">富士電機の選考フロー（公式採用ページ）</h2>
        <p className="text-sm text-text-muted mb-4">公式のキャリア採用ページでは、選考プロセスが「エントリー → 書類選考 → 一次面接 → 最終面接 → 内定」と案内されています。面接の回数は職種によって異なる場合があると記載されています（2026年10月29日確認）。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "エントリー", desc: "キャリア採用ページで求人を選び、応募します。" },
            { step: 2, title: "書類選考", desc: "提出した経歴とスキルをもとに書類選考が行われます。" },
            { step: 3, title: "一次面接", desc: "公式の選考プロセスでは、面接は一次面接と最終面接の2回が基本です。" },
            { step: 4, title: "最終面接・内定", desc: "最終面接を経て内定となります。職種によって面接の回数が異なる場合があります。" },
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

        <h2 id="s6">富士電機の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約840万円（2026年3月期）は提出会社の就業人員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>平均勤続20.3年・平均年齢44.9歳の長期勤続型の構成での平均値です。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">富士電機転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、転職エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
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

        <h2 id="s8">富士電機転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">富士電機転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/yokogawa/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">横河電機転職ガイド</Link>
            <Link href="/company/azbil/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">アズビル転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
