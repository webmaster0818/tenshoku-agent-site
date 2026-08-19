import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "さくらインターネットへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "さくらインターネット（証券コード3778）への転職を有価証券報告書などの一次データで解説。平均年間給与は約741万円（2026年3月期・有報）で2年で120万円超の上昇。国産クラウド・GPUインフラを支える技術職の中途採用状況までまとめました。",
  alternates: { canonical: "/company/sakura-internet/" },
  openGraph: {
    title: "さくらインターネットへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "さくらインターネット（3778）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "さくらインターネットの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約741万円（2026年3月期・全社員平均）です。2024年3月期614万円→2025年3月期700万円→2026年3月期741万円と、2年間で120万円を超える上昇が続いています。技術職に限らない全社員平均であり、職種・グレードにより実際の年収は異なります。",
  },
  {
    q: "さくらインターネットの年収はなぜ上がっているのですか？",
    a: "有報ベースで2年間に120万円超の増加です（IR BANK・日経会社情報掲載値・2026年8月19日確認）。平均年間給与には賞与等の変動要素が含まれ、増加の内訳は有価証券報告書の記載範囲では特定できないため、当サイトでは理由を断定しません。従業員数も677名（2024年3月期）→934名（2026年3月期）と拡大しており、成長投資期にあることは公開データから読み取れます。",
  },
  {
    q: "さくらインターネットは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトの採用ページ（www.sakura.ad.jp/recruit/）に集約されており、エンジニア・ビジネス等の職種でキャリア採用が行われています（2026年8月19日確認）。最新の募集ポジションは同ページでご確認ください。",
  },
  {
    q: "さくらインターネットの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は40.3歳、従業員数は934名（いずれも2026年3月期・単体）です。データセンター・クラウドの長期運用を担う、年齢層に幅のある組織です。",
  },
  {
    q: "さくらインターネットの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は大阪市北区大深町6-38 グラングリーン大阪 北館 JAM BASEです。設立は1999年8月17日。東京支社・石狩データセンター（北海道）など拠点は複数あり、勤務地・働き方はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "さくらインターネットへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/sakura-internet/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "さくらインターネット" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            さくらインターネットへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            さくらインターネット（証券コード3778）は、自社データセンターと国産クラウド・GPUインフラを運営するインフラ企業です。
            生成AI需要を背景にGPUクラウドへの投資が注目され、平均年収も2年間で120万円超上昇しています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：さくらインターネット転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約741万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月19日確認）。全社員934名の平均。</li>
            <li>614万円（2024年3月期）→700万円（2025年3月期）→741万円（2026年3月期）と2年で120万円超の上昇。</li>
            <li>従業員数も677名→934名と拡大中で、採用・処遇に投資しているフェーズであることが公開データから読める。</li>
            <li>採用はwww.sakura.ad.jp/recruit/から（2026年8月19日確認）。</li>
            <li>本社は大阪（グラングリーン大阪）。国産クラウド・GPU基盤という希少な技術ドメインが最大の特徴。</li>
          </ul>
        </div>

        <h2>さくらインターネットの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "さくらインターネット株式会社" },
                { label: "証券コード", value: "3778" },
                { label: "本社", value: "大阪市北区大深町6-38 グラングリーン大阪 北館 JAM BASE" },
                { label: "設立", value: "1999年8月17日" },
                { label: "事業内容", value: "データセンター運営、クラウドサービス（さくらのクラウド等）、GPUクラウド等のインターネットインフラ" },
                { label: "平均年間給与", value: "約741万円（2026年3月期・有価証券報告書・全社員平均。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "614万円（2024年3月期）→700万円（2025年3月期）→741万円（2026年3月期）" },
                { label: "平均年齢", value: "40.3歳" },
                { label: "従業員数", value: "934名（単体。2024年3月期677名から拡大）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく全社員平均です。職種・グレードにより実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>さくらインターネットの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報は公式サイトの採用ページ（www.sakura.ad.jp/recruit/）に集約（2026年8月19日確認）。</li>
            <li>データセンター・ネットワーク・クラウド基盤・SRE・GPUインフラなど、インフラ領域の技術職が中心。</li>
            <li>従業員数が2年で1.4倍近くに拡大しており、採用拡大フェーズにあることが有報の従業員数推移から読み取れる。</li>
            <li>最新の募集職種・勤務条件（リモート可否等）は公式採用ページで要確認。</li>
          </ul>
        </div>

        <h2>さくらインターネットで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "インフラ領域の専門性", desc: "データセンター運用・ネットワーク・仮想化・大規模クラウド基盤・SREの実務経験は、事業のコアと直接適合します。" },
            { title: "GPU・AI基盤への関心", desc: "生成AI需要を背景としたGPUクラウドが成長領域で、GPU基盤・HPC・大規模計算資源の運用経験は希少価値があります。" },
            { title: "長期運用への責任感", desc: "インフラは止めないことが価値のため、安定運用・障害対応・改善を粘り強く続けられることが適性につながります。" },
            { title: "自律的な働き方", desc: "拠点が分散した組織のため、リモート環境でも自律的にタスクを進め、テキストで的確にコミュニケーションできる力が活きます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>さくらインターネットの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属予定チームとの面接。インフラ運用の実務経験・障害対応の考え方などの深掘りが中心です。" },
            { step: 4, title: "内定・条件提示", desc: "グレード・役割に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>さくらインターネットの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約741万円（2026年3月期）は全社員934名の平均であり、技術職に限らない数値です。</li>
            <li>2年間で120万円超の上昇傾向は事実ですが、平均年間給与には賞与等の変動要素が含まれます（増加の内訳は有報の記載範囲では特定できません）。</li>
            <li>専門性の高いインフラ・SRE・GPU基盤ポジションでは、全社平均と異なる水準が提示される場合があります。</li>
            <li>実額は個別求人・面談で確認するのが確実です。</li>
          </ul>
        </div>

        <h2>さくらインターネット転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。インフラ・SRE系ポジションの要件読み解きと選考対策に強みがあります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。クラウド・インフラ系の同業比較がしやすいのが強みです。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大阪・関西圏の勤務地条件でも探しやすいです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。インフラ専門職・マネジメント職の市場価値の把握に向いています。" },
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

        <h2>さくらインターネット転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">さくらインターネット転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/fujitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士通転職ガイド</Link>
            <Link href="/company/kddi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">KDDI転職ガイド</Link>
            <Link href="/company/line-yahoo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">LINEヤフー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
