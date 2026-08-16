import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コニカミノルタへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "コニカミノルタ（証券コード4902）への転職を有価証券報告書などの一次データで解説。平均年間給与は約844万円（2026年3月期・有報／提出会社）。キャリア採用の直接応募・キャリア登録・ジョブリターンの3ルート、SPI・英語力確認を含む選考フローまでまとめました。",
  alternates: { canonical: "/company/konica-minolta/" },
  openGraph: {
    title: "コニカミノルタへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "コニカミノルタ（4902）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "コニカミノルタの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均年間給与は約844万円（2026年3月期・提出会社単体）です。799万円（2024年3月期）→821万円→844万円と3年連続で上昇しています。従業員3,888名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "コニカミノルタは中途採用を行っていますか？",
    a: "はい。公式サイトのキャリア採用ページに、①募集中ポジションへの直接応募（採用ポータル: hrmos.co/pages/kmi-career）②今すぐ応募しない人向けの「キャリア登録」③退職者向けの「ジョブリターン」——の3ルートが用意されています（2026年8月16日確認）。キャリア登録は各部門が経歴を閲覧し、合うポジションが出た際に連絡が来る仕組みです。",
  },
  {
    q: "コニカミノルタの選考プロセスはどうなっていますか？",
    a: "公式案内では、応募→書類選考→SPI（言語・非言語・性格）→一次面接→英語力確認→最終面接→内定という流れです（2026年8月16日確認・応募ポジションにより面接回数は変動と明記）。中途でもSPIと英語力確認が組み込まれている点は事前に準備しておくとよいでしょう。",
  },
  {
    q: "コニカミノルタの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均勤続年数は20.7年、平均年齢は46.4歳（2026年3月期・提出会社）です。",
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
  dateModified: "2026-08-16",
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
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            コニカミノルタへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            コニカミノルタ（証券コード4902）は、オフィス機器から商用印刷・センシング・ヘルスケアまで4事業を展開する精密機器メーカーです。
            キャリア採用は直接応募・キャリア登録・ジョブリターンの3ルートがあり、選考にはSPIと英語力確認が組み込まれています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：コニカミノルタ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約844万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年8月16日確認）。提出会社単体3,888名の全従業員平均で、3年連続上昇（799→821→844万円）。</li>
            <li>キャリア採用は①直接応募（hrmos採用ポータル）②キャリア登録③退職者向けジョブリターンの3ルート（2026年8月16日確認）。</li>
            <li>選考は書類→SPI→一次面接→英語力確認→最終面接。中途でもSPI・英語の準備が必要。</li>
            <li>平均年齢46.4歳・平均勤続20.7年。年間休日125日・有給20日（入社1年後）・401k等の制度も公式公開。</li>
            <li>単体従業員は3年で4,269名→3,888名と減少傾向にある点は数値を読む際の前提。</li>
          </ul>
        </div>

        <h2>コニカミノルタの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "コニカミノルタ株式会社" },
                { label: "証券コード", value: "4902" },
                { label: "本社", value: "東京都千代田区丸の内2-7-2 JPタワー" },
                { label: "設立", value: "1936年12月22日（創業1873年）" },
                { label: "事業内容", value: "デジタルワークプレイス、プロフェッショナルプリント、インダストリー（センシング・機能材料等）、イメージングソリューションズ" },
                { label: "平均年間給与", value: "約844万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月16日確認）" },
                { label: "直近3年の推移", value: "799万円（2024年3月期）→821万円（2025年3月期）→844万円（2026年3月期）" },
                { label: "平均年齢", value: "46.4歳（同・提出会社）" },
                { label: "平均勤続年数", value: "20.7年（同・提出会社）" },
                { label: "従業員数", value: "3,888名（提出会社単体）。連結34,363名（2026年3月時点・公式会社概要）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年8月16日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>コニカミノルタの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月16日時点で、<a href="https://www.konicaminolta.com/jp-ja/recruit/job/career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトのキャリア採用ページ</a>に3つの応募ルートが用意されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong>① 直接応募</strong> — 採用ポータル（hrmos.co/pages/kmi-career）で募集中ポジションを確認して応募。</li>
            <li><strong>② キャリア登録</strong> — 今すぐ応募しない人向け。経歴を登録すると各部門が閲覧し、合うポジションが出た際に連絡が来る仕組み。</li>
            <li><strong>③ ジョブリターン（退職者の再入社）</strong> — 育児・介護・配偶者転勤等で退職した人やキャリアアップ目的で転職した元社員向けの再雇用ルート。</li>
            <li>待遇面は、給与はスキル・経験による個別決定、年間休日125日、有給20日（入社1年後）、所定労働7時間40分、住宅補助・育児手当・401k等が公式に案内されている。</li>
            <li>※2026年8月16日に公式サイトで確認。募集状況は変動するため最新は採用ポータルでご確認ください。</li>
          </ul>
        </div>

        <h2>コニカミノルタで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "事業転換を担う専門性", desc: "オフィス機器から産業・ヘルスケア領域への転換を進めており、センシング・材料・光学・画像処理・ITサービスの経験が事業方向と合致します。" },
            { title: "SPI・英語への準備", desc: "選考にSPI（言語・非言語・性格）と英語力確認が組み込まれています。グローバル事業比率が高く、英語での業務に前向きであることが重視されます。" },
            { title: "職種に対応した実務経験", desc: "ポジション別採用のため、募集要件と自分の経験の対応を職務経歴書で具体的に示すことが書類選考の前提になります。" },
            { title: "多様な働き方への適応", desc: "キャリア登録・ジョブリターンなど柔軟な入社ルートを整備する会社であり、自律的にキャリアを設計する姿勢が文化と合致します。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>コニカミノルタの選考フロー（公式公開）</h2>
        <p className="text-sm text-text-muted mb-4">公式キャリア採用ページで案内されている流れです（2026年8月16日確認）。応募ポジションにより面接回数は変動すると明記されています。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募〜書類選考", desc: "採用ポータルから応募。履歴書・職務経歴書による書類選考が行われます。" },
            { step: 2, title: "SPI受検", desc: "言語・非言語・性格のSPIテストを受検します。" },
            { step: 3, title: "一次面接・英語力確認", desc: "現場との面接に加え、英語力の確認が行われます。" },
            { step: 4, title: "最終面接→内定", desc: "最終面接の通過後に内定・条件提示。入社時期の調整を経て入社となります。" },
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

        <h2>コニカミノルタの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約844万円（2026年3月期）は提出会社単体・全従業員3,888名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>3年連続で上昇していますが、同期間に単体従業員数は4,269名→3,888名と減少しており、母集団の変化も平均値に影響し得ます（要因は有報の記載範囲では特定できないため当サイトでは断定しません）。</li>
            <li>平均年齢46.4歳・平均勤続20.7年という長期勤続の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>公式の募集要項では給与はスキル・経験による個別決定と明記されており、中途入社時の提示額はポジション次第です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>コニカミノルタ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式の3ルート（直接応募・キャリア登録・ジョブリターン）に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。精密機器・電機メーカーの求人も幅広く扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。英語選考のある企業への転職支援にも慣れています。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職の情報収集に向いています。" },
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

        <h2>コニカミノルタ転職 よくある質問</h2>
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
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ポータル(キャリア登録含む)とエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
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
