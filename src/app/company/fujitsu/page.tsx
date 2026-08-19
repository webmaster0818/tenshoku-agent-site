import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "富士通への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "富士通（証券コード6702）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,012万円（2026年3月期・有報）で、前期929万円から80万円超増えて1,000万円台に到達。ジョブ型人材マネジメント下のキャリア採用、直近3年の年収推移までまとめました。",
  alternates: { canonical: "/company/fujitsu/" },
  openGraph: {
    title: "富士通への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "富士通（6702）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "富士通の平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約1,012万円（2026年3月期・提出会社単体）です。前期（2025年3月期）の929万円から80万円超増加し、全社員平均で1,000万円台に到達しました。従業員32,224名（提出会社）の全従業員平均であり、ジョブ型のため職務・等級により実際の年収は異なります。",
  },
  {
    q: "富士通の年収は上がっているのですか？",
    a: "有価証券報告書ベースの推移では、2024年3月期965万円→2025年3月期929万円→2026年3月期1,012万円です（IR BANK掲載値・2026年8月19日確認）。直近期に大きく増加していますが、平均年間給与には賞与等の変動要素が含まれます。中途入社時の提示額はジョブディスクリプションと等級により個別に決まります。",
  },
  {
    q: "富士通は中途採用を行っていますか？",
    a: "はい。富士通はジョブ型人材マネジメントを導入しており、キャリア採用はポジション（ジョブディスクリプション）単位で行われています。採用情報は公式サイトの採用ページから確認できます（2026年8月19日時点。公式サイトはglobal.fujitsuドメインへの再編が進んでおり、ページ構成は変更される場合があります）。",
  },
  {
    q: "富士通の平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は42.7歳、従業員数は32,224名（いずれも2026年3月期・提出会社単体）です。国内最大級の規模のIT企業であり、ミドル層が中核の年齢構成です。",
  },
  {
    q: "富士通の本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は神奈川県川崎市中原区上小田中4-1-1です。設立は1935年6月20日。ジョブ型のため勤務地・働き方はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "富士通への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/fujitsu/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "富士通" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            富士通への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            富士通（証券コード6702）は、システムインテグレーション・クラウド・先端コンピューティングを手がける国内最大級のITサービス企業です。
            ジョブ型人材マネジメントを導入しており、キャリア採用はポジション単位で行われます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：富士通転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,012万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月19日確認）。提出会社単体32,224名の全従業員平均。</li>
            <li>前期929万円から80万円超の増加で、全社員平均が1,000万円台に到達したのが今期の最大トピック。</li>
            <li>直近3年は965万円→929万円→1,012万円と推移（有報ベース）。</li>
            <li>ジョブ型人材マネジメントのため、提示年収はポジション（ジョブディスクリプション）と等級で個別に決まる。</li>
            <li>平均年齢42.7歳とミドル層が中核。専門性が職務要件に合致すれば年齢より職務適合で評価されやすい制度設計。</li>
          </ul>
        </div>

        <h2>富士通の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "富士通株式会社" },
                { label: "証券コード", value: "6702" },
                { label: "本社", value: "神奈川県川崎市中原区上小田中4-1-1" },
                { label: "設立", value: "1935年6月20日" },
                { label: "事業内容", value: "システムインテグレーション、クラウド、ネットワーク、コンピューティングなどのITサービス" },
                { label: "平均年間給与", value: "約1,012万円（2026年3月期・有価証券報告書／提出会社。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "965万円（2024年3月期）→929万円（2025年3月期）→1,012万円（2026年3月期）" },
                { label: "平均年齢", value: "42.7歳（同・提出会社）" },
                { label: "従業員数", value: "32,224名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく提出会社単体・全従業員の平均です。職務・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>富士通の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>ジョブ型人材マネジメントを導入済みで、キャリア採用は「ポジションに人を当てる」方式。募集要項にはジョブディスクリプション（職務内容・要件）が明示される。</li>
            <li>採用情報は公式サイトの採用ページに集約（2026年8月19日時点。公式サイトはglobal.fujitsuドメインへ再編が進行中で、ページ構成は変更される場合がある）。</li>
            <li>クラウド・AI・セキュリティ・コンサルティング等のデジタル領域で経験者採用が継続的に行われている。</li>
            <li>応募時は「自分の経験がどのジョブディスクリプションに適合するか」を職務経歴書で具体的に示すことが重要。</li>
          </ul>
        </div>

        <h2>富士通で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "職務要件に対応する専門性", desc: "ジョブ型のため、クラウド・AI・セキュリティ・上流コンサル等、応募ポジションの要件と自分の実務経験の対応を具体的に示せることが選考の土台になります。" },
            { title: "大規模プロジェクトの推進力", desc: "官公庁・金融・製造など大規模顧客のシステムを支えるため、規模の大きい案件でのプロジェクト推進・調整経験が評価されやすい環境です。" },
            { title: "変革フェーズへの適応力", desc: "ITサービス企業への構造転換が進行中で、従来型SIとモダン技術の両方を橋渡しできる人材に活躍の場が広がっています。" },
            { title: "ミドル層のマネジメント経験", desc: "平均年齢42.7歳とミドル中核の組織で、リーダー・管理職クラスのキャリア採用も行われており、マネジメント経験は武器になります。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>富士通の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用情報でポジションを検索し、ジョブディスクリプションを確認のうえ応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ジョブの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属部門のマネージャー等との面接。職務要件への適合と専門性の深掘りが中心です。" },
            { step: 4, title: "内定・条件提示", desc: "ジョブと等級に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>富士通の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,012万円（2026年3月期）は提出会社単体・全従業員32,224名の平均であり、管理職・上位等級を含む数値です。</li>
            <li>前期比+83万円の増加で1,000万円台に到達しましたが、平均年間給与には賞与等の変動要素が含まれます（増加の内訳は有報の記載範囲では特定できないため、当サイトでは理由を断定しません）。</li>
            <li>ジョブ型のため、実際の提示額は応募ジョブの等級・職責で決まります。全社平均をそのまま自分の提示額の目安にはできません。</li>
            <li>中途入社時は求人票（ジョブディスクリプション）に等級・レンジの記載がある場合が多く、エージェント経由でポジション別の実勢を確認するのが確実です。</li>
          </ul>
        </div>

        <h2>富士通転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手SIer・ITサービスの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。NEC・日立など同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。クラウド・開発系ポジションの要件読み解きと職務経歴書の添削に強みがあります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。管理職・専門職クラスの市場価値の把握と、ジョブ型企業の等級レンジの情報収集に向いています。" },
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

        <h2>富士通転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">富士通転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式のジョブディスクリプションとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/ntt/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">NTT転職ガイド</Link>
            <Link href="/company/kddi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">KDDI転職ガイド</Link>
            <Link href="/company/nri/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">野村総合研究所転職ガイド</Link>
            <Link href="/company/it-consultant-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ITコンサル業界の年収</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
