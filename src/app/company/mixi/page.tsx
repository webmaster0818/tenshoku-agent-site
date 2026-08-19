import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "MIXI（ミクシィ）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "MIXI（証券コード2121）への転職を有価証券報告書などの一次データで解説。平均年間給与は約847万円（2026年3月期・有報／単体）で3年連続上昇。モンスト・家族アルバム みてね等を支える技術職の中途採用状況までまとめました。",
  alternates: { canonical: "/company/mixi/" },
  openGraph: {
    title: "MIXI（ミクシィ）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "MIXI（2121）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "MIXIの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約847万円（2026年3月期・提出会社単体）です。2024年3月期746万円→2025年3月期791万円→2026年3月期847万円と3年連続で上昇しています。全社員平均であり、職種・等級により実際の年収は異なります。",
  },
  {
    q: "MIXIは中途採用を行っていますか？",
    a: "はい。採用情報はグループ採用サイト（mixigroup-recruit.mixi.co.jp）に集約されており、新卒・中途の両方の募集が掲載されています（2026年8月19日確認）。エンジニア・企画・デザイナー等の職種別に、事業部門ごとのポジションが公開されています。",
  },
  {
    q: "MIXIの主な事業は何ですか？",
    a: "モンスターストライクをはじめとするゲーム事業、「家族アルバム みてね」等のライフスタイル事業、スポーツ事業（プロチーム運営・公営競技等）を展開しています。プロダクトごとに技術スタックを選ぶ文化があり、モバイル・サーバーサイド・データ基盤まで技術職の活躍領域は広めです。",
  },
  {
    q: "MIXIの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は38.1歳、従業員数は1,316名（いずれも2026年3月期・提出会社単体）です。長期運用タイトルと新規プロダクトの両方を抱える、年齢層に幅のある組織です。",
  },
  {
    q: "MIXIの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエアです。設立は2000年10月25日です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MIXI（ミクシィ）への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/mixi/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "MIXI" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            MIXI（ミクシィ）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            MIXI（証券コード2121）は、モンスターストライク・家族アルバム みてね・スポーツ事業などを展開するエンタメ・ライフスタイル企業です。
            平均年収は3年連続で上昇しており、プロダクトごとに技術を選ぶ文化で技術職の活躍領域が広いのが特徴です。
            本記事では、有価証券報告書などの公開一次データをもとに客観的に整理します。
          </p>
        </div>

        <h2>結論：MIXI転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約847万円（2026年3月期・有価証券報告書／単体。IR BANK・日経会社情報掲載値・2026年8月19日確認）。</li>
            <li>746万円→791万円→847万円と3年連続で上昇（有報ベース・単体）。</li>
            <li>採用はグループ採用サイト（mixigroup-recruit.mixi.co.jp）に集約（2026年8月19日確認）。</li>
            <li>ゲーム・ライフスタイル・スポーツと事業の柱が複数あり、モバイル・サーバー・データ基盤など技術職の募集領域が広い。</li>
            <li>平均年齢38.1歳。長期運用タイトルの改善経験・スケール経験を持つミドルエンジニアの強みが活きやすい。</li>
          </ul>
        </div>

        <h2>MIXIの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社MIXI" },
                { label: "証券コード", value: "2121" },
                { label: "本社", value: "東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア" },
                { label: "設立", value: "2000年10月25日" },
                { label: "事業内容", value: "ゲーム（モンスターストライク等）・ライフスタイル（家族アルバム みてね等）・スポーツ事業" },
                { label: "平均年間給与", value: "約847万円（2026年3月期・有価証券報告書／提出会社単体。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "746万円（2024年3月期）→791万円（2025年3月期）→847万円（2026年3月期）" },
                { label: "平均年齢", value: "38.1歳（同・提出会社）" },
                { label: "従業員数", value: "1,316名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく提出会社単体・全従業員の平均です。職種・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>MIXIの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報はグループ採用サイト（mixigroup-recruit.mixi.co.jp）に集約され、新卒・中途の募集が職種別に掲載（2026年8月19日確認）。</li>
            <li>エンジニアはサーバーサイド・モバイル（iOS/Android）・データ・SRE・ゲームクライアント等、プロダクト単位のポジションが中心。</li>
            <li>プロダクトごとに最適な技術を選ぶ文化のため、応募ポジションの技術スタックと自分の経験の対応を確認して応募するのが基本。</li>
            <li>最新の募集状況は公式採用サイトで要確認。</li>
          </ul>
        </div>

        <h2>MIXIで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "大規模・長期運用の経験", desc: "モンストのような長期運用タイトルでは、スケール対応・技術的負債との向き合い・安定運用の経験がそのまま強みになります。" },
            { title: "プロダクト志向", desc: "「友人や家族とのコミュニケーション」を軸にしたプロダクトづくりへの共感が、企画・開発の意思決定と噛み合います。" },
            { title: "技術選定の柔軟性", desc: "プロダクトごとに技術を選ぶ文化のため、特定言語に固執せず適切な技術を選び学べる姿勢が評価されやすい環境です。" },
            { title: "成長プロダクトを伸ばす力", desc: "みてね等の成長プロダクトでは、グロース施策・データ活用・品質改善を回した経験が直接活きます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>MIXIの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用サイトから応募", desc: "グループ採用サイトでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属予定チームとの面接。技術職は開発経験・設計思想の深掘りが中心です。" },
            { step: 4, title: "内定・条件提示", desc: "等級・職種に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>MIXIの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約847万円（2026年3月期）は提出会社単体・全従業員1,316名の平均であり、職種・等級で実際の水準は異なります。</li>
            <li>3年連続の上昇傾向ですが、平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>エンジニア職限定の公式な提示レンジは非公表のため、提示額は個別求人・オファー面談での確認が確実です。</li>
            <li>Web系の中では標準的〜やや高めの水準で、事業の複数柱による安定性も特徴です。</li>
          </ul>
        </div>

        <h2>MIXI転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用サイトへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。Web・ゲーム系ポジションの技術要件の読み解きに強みがあります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。エンタメ・ゲーム業界の同業比較がしやすいのが強みです。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。Web・エンタメ系の求人も幅広く扱っています。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。専門職・マネジメント職の市場価値の把握に向いています。" },
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

        <h2>MIXI転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">MIXI転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用サイトとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/dena/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">DeNA転職ガイド</Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">サイバーエージェント転職ガイド</Link>
            <Link href="/company/game-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ゲーム業界の年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
