import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "コニカミノルタへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "コニカミノルタ（証券コード4902）への転職について、有価証券報告書などの一次データにもとづいて解説します。平均年間給与は約844万円（2026年3月期・有価証券報告書／提出会社）です。キャリア採用の直接応募・キャリア登録・ジョブ・リターンの3ルート、SPI試験・英語試験を含む選考フローまでまとめました。",
  alternates: { canonical: "/company/konica-minolta/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "コニカミノルタへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "コニカミノルタ（4902）の平均年収・中途採用・選考フローを有価証券報告書と公式採用情報で解説します。",
  },
};

const faqData = [
  {
    q: "コニカミノルタの平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月12日提出、EDINETで2026年10月19日確認）によると、平均年間給与は8,441,281円（約844万円・提出会社単体）で、対前事業年度増減率は2.7%です。799万円（2024年3月期）→821万円→844万円と3年連続で上昇しています（2025年3月期以前はIR BANK掲載値・2026年8月16日確認）。提出会社の就業人員3,888名の平均で、賞与及び基準外賃金を含みます（有価証券報告書の注記。2026年10月31日に原本を再確認）。職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "コニカミノルタは中途採用を行っていますか？",
    a: "はい。公式サイトのキャリア採用ページに、①募集中ポジションへの直接応募（採用ポータル: hrmos.co/pages/kmi-career）②今すぐ応募しない人向けの「キャリア登録」③退職者向けの「ジョブ・リターン」——の3ルートが用意されています。採用ポータルの正社員求人は131件（キャリア登録・ジョブ・リターン・関係会社の枠を含む）で、勤務地別では八王子（東京）が43件と最も多くなっています（2026年10月31日確認）。キャリア登録は各部門が経歴を閲覧し、合う職種がある場合に連絡を受けられる仕組みです。",
  },
  {
    q: "コニカミノルタの選考プロセスはどうなっていますか？",
    a: "公式案内では、応募→書類選考→SPI試験（言語・非言語・性格検査）→一次面接→英語試験→最終面接→内定という流れです。英語試験は全員が受験しますが、合否を出すものではなく、入社後のキャリア形成に向けて実力値を確認するためのプロセスと説明されています。選考期間は日程調整の進み具合により約1カ月で、面接は原則リモート（求人により対面）、土日祝日は面接を行っていないと公式FAQに記載されています（いずれも2026年10月31日確認。応募ポジションにより面接回数は変わる場合があります）。",
  },
  {
    q: "コニカミノルタの平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は20.7年、平均年齢は46.4歳（提出会社）です。",
  },
  {
    q: "コニカミノルタはどんな事業をしていますか？",
    a: "公式会社概要によると、デジタルワークプレイス（オフィス機器・ITソリューション）、プロフェッショナルプリント（商用・産業印刷）、インダストリー（センシング・機能材料・光学コンポーネント等）、イメージングソリューションズ（ヘルスケア等）の4事業を展開しています。連結従業員は34,363名（2026年3月時点）です。",
  },
  {
    q: "コニカミノルタの本社はどこですか？",
    a: "公式サイトの会社概要によると、本社は東京都千代田区丸の内2-7-2 JPタワーです。応募ポジションにより勤務地は異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "コニカミノルタへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-10-31",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/konica-minolta/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "コニカミノルタ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            コニカミノルタへの転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/konica-minolta.jpg" alt="コニカミノルタの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">コニカミノルタ 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            コニカミノルタ（証券コード4902）は、オフィス機器から商用印刷・センシング・ヘルスケアまで4事業を展開する精密機器メーカーです。
            平均年間給与は約844万円（2026年3月期・有価証券報告書／提出会社）です。キャリア採用は採用ポータルに正社員求人131件が掲載されており（2026年10月31日確認）、直接応募・キャリア登録・ジョブ・リターンの3ルートがあります。選考はSPI試験と英語試験を含み、期間は約1カ月と公式に案内されています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">コニカミノルタ転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">コニカミノルタの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">コニカミノルタの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">コニカミノルタで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">コニカミノルタの選考フロー（公式公開）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">コニカミノルタの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">コニカミノルタ転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">コニカミノルタ転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">コニカミノルタ転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約844万円です（8,441,281円、2026年3月期・有価証券報告書、EDINETで2026年10月19日確認）。提出会社の就業人員3,888名の平均で、3年連続で上昇しています（799→821→844万円）。</li>
            <li>採用ポータルの正社員求人は131件で、事業・機能別ではデジタルワークプレイス24件・センシング19件・プロフェッショナルプリント18件の順に多くなっています（2026年10月31日確認）。応募ルートは①直接応募②キャリア登録③退職者向けジョブ・リターンの3つです。</li>
            <li>選考は書類選考→SPI試験→一次面接→英語試験→最終面接の順に進みます。英語試験は合否を出すものではないと公式に説明されています。</li>
            <li>平均年齢は46.4歳、平均勤続年数は20.7年です。年間休日125日・有給休暇（次年度以降20日）・確定拠出年金（401k）等の制度も公式に公開されています。</li>
            <li>単体従業員は3年で4,269名→3,888名と減少傾向にあるため、数値を読む際の前提としてご留意ください。</li>
          </ul>
        </div>

        <h2 id="s2">コニカミノルタの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "コニカミノルタ株式会社" },
                { label: "証券コード", value: "4902" },
                { label: "本社", value: "東京都千代田区丸の内2-7-2 JPタワー" },
                { label: "設立", value: "1936年12月22日（創業1873年）" },
                { label: "事業内容", value: "デジタルワークプレイス、プロフェッショナルプリント、インダストリー（センシング・機能材料等）、画像ソリューション（有価証券報告書の報告セグメント）" },
                { label: "平均年間給与", value: "約844万円（8,441,281円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "799万円（2024年3月期）→821万円（2025年3月期）→844万円（2026年3月期）" },
                { label: "平均年齢", value: "46.4歳（同・提出会社）" },
                { label: "平均勤続年数", value: "20.7年（同・提出会社）" },
                { label: "従業員数", value: "3,888名（提出会社単体・就業人員）。うちデジタルワークプレイス／プロフェッショナルプリント1,656名、インダストリー988名、画像ソリューション480名、全社（共通）764名。連結34,363名（2026年3月時点・公式会社概要）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YB93.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月12日提出、EDINETで2026年10月19日確認・10月31日再確認）、それ以前の推移はIR BANK掲載値（2026年8月16日確認）に基づく提出会社単体の平均です。有価証券報告書の注記により、従業員数は就業人員数で、平均年間給与は賞与及び基準外賃金を含みます。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">コニカミノルタの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.konicaminolta.com/jp-ja/recruit/job/career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトのキャリア採用ページ</a>には3つの応募ルートが用意されています。<a href="https://hrmos.co/pages/kmi-career/jobs" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">採用ポータルの求人一覧</a>に掲載されている正社員求人は131件です（2026年10月31日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-warm-gray"><th className="text-left py-2 px-3">区分</th><th className="text-left py-2 px-3">求人件数の多い項目（2026年10月31日確認）</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3">事業・機能別</td><td className="py-2 px-3">デジタルワークプレイス24件、センシング19件、プロフェッショナルプリント18件、情報機器事業11件、コーポレート11件、関係会社11件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">勤務地別</td><td className="py-2 px-3">八王子（東京）43件、瑞穂（愛知）15件、高槻（大阪）11件、浜松町大門（東京）10件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">職種別</td><td className="py-2 px-3">品質管理／品質保証19件、生産技術13件、機械設計11件、組込みソフトウェア開発9件、事業企画・事業開発9件</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-4">※件数は採用ポータルの絞り込み表示の値です。131件にはキャリア登録・ジョブ・リターン（各1件）と関係会社の求人（11件）が含まれます。複数の勤務地をまとめた求人は別項目として数えられています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong>① 直接応募</strong> — 採用ポータル（hrmos.co/pages/kmi-career）で募集中ポジションを確認して応募します。</li>
            <li><strong>② キャリア登録</strong> — 職種を絞らずに応募したい方や、希望する職種の募集がない方向けのルートです。登録した経歴を各部門の担当者が確認し、合う職種がある場合に紹介を受け、意思確認の上で面接に進みます。</li>
            <li><strong>③ ジョブ・リターン制度（2017年12月導入）</strong> — 育児・介護・配偶者転勤帯同、または転職・留学などのキャリアアップを事由として退職した元社員向けの再入社制度です。</li>
            <li>給与はスキル、経験、面接評価を考慮して当社規定に基づき個別に決定すると記載されています。昇給は年1回（4月）、賞与は年2回（6月・12月）、年間休日125日、所定労働時間7時間40分です。</li>
            <li>住宅補助はありませんが、転居を伴う転職では特定条件下で借上げ社宅（家賃の約75%を会社が負担・最大7年間）の提供や支度金の支給を行っていると公式FAQに記載されています。入社日は毎月1日または16日付です。</li>
            <li>※2026年10月31日に公式サイト・採用ポータルで確認しました。募集状況は変動するため、最新の情報は採用ポータルにてご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒でコニカミノルタのような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">コニカミノルタで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "事業転換を担う専門性", desc: "オフィス機器から産業・ヘルスケア領域への転換を進めており、センシング・材料・光学・画像処理・ITサービスの経験が事業方向と合致します。" },
            { title: "SPI・英語試験への準備", desc: "選考にSPI試験（言語・非言語・性格検査）と英語試験が組み込まれています。英語試験は全社的な英語力向上の取り組みとして全員が受験するもので、合否を出すものではないと公式に説明されています。" },
            { title: "職種に対応した実務経験", desc: "ポジション別採用のため、募集要件と自分の経験の対応を職務経歴書で具体的に示すことが書類選考の前提になります。" },
            { title: "多様な働き方への適応", desc: "キャリア登録・ジョブ・リターンなど柔軟な入社ルートを整備する会社であり、自律的にキャリアを設計する姿勢が文化と合致します。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">コニカミノルタの選考フロー（公式公開）</h2>
        <p className="text-sm text-text-muted mb-4">公式キャリア採用ページで案内されている流れです（2026年10月31日確認）。応募ポジションにより面接の回数が変更になる場合があると明記されています。選考期間は約1カ月で、面接は原則リモートで行われます（公式FAQ）。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募〜書類選考", desc: "採用ポータルから応募します。履歴書・職務経歴書による書類選考が行われます。" },
            { step: 2, title: "SPI試験", desc: "言語・非言語・性格検査を受検します。" },
            { step: 3, title: "一次面接・英語試験", desc: "一次面接の後に英語試験を受験します。英語試験は合否を出すものではなく、入社後のキャリア形成に向けて実力値を確認するためのプロセスです。" },
            { step: 4, title: "最終面接→内定", desc: "最終面接の通過後に内定となります。入社時期は内定承諾後に調整し、入社日は毎月1日または16日付です。" },
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

        <h2 id="s6">コニカミノルタの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約844万円（2026年3月期）は提出会社単体・就業人員3,888名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>3年連続で上昇していますが、同期間に単体従業員数は4,269名→3,888名と減少しており、母集団の変化も平均値に影響し得ます（要因は有価証券報告書の記載範囲では特定できないため当サイトでは断定しません）。</li>
            <li>平均年齢46.4歳・平均勤続20.7年という長期勤続の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>公式の募集要項では給与はスキル、経験、面接評価を考慮した個別決定と明記されており、中途入社時の提示額はポジション次第です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジをご確認いただくことをおすすめします。</p>
        </div>

        <h2 id="s7">コニカミノルタ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式の3ルート（直接応募・キャリア登録・ジョブ・リターン）に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。精密機器・電機メーカーの求人も幅広く扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。英語選考のある企業への転職支援にも慣れています。" },
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

        <h2 id="s8">コニカミノルタ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">コニカミノルタ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ポータル(キャリア登録含む)と転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/ricoh/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">リコー転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/citizen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">シチズン転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
