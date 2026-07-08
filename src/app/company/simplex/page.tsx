import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: 'シンプレクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】',
  description:
    'シンプレクス・ホールディングス（証券コード4373）への転職を有価証券報告書などの一次データで解説。平均年間給与は約938万円（2026年3月期・有報／提出会社）。中途採用・求められる人材・年収の考え方をまとめました。',
  openGraph: {
    title: 'シンプレクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】',
    description: "シンプレクスの平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": 'シンプレクスの平均年収はいくらですか？',
    "a": '有価証券報告書によると平均年間給与は約938万円（2026年3月期・提出会社単体（持株会社本体））です。持株会社単体の値のため、事業会社の技術者の水準とは異なります。'
  },
  {
    "q": 'シンプレクスは中途採用を行っていますか？',
    "a": 'はい。コンサルタント・エンジニア等の職種でキャリア採用が活発です。募集状況は時期により変動するため、公式採用サイトでご確認ください。'
  },
  {
    "q": 'シンプレクスの転職難易度は高いですか？',
    "a": '人気企業のため選考の競争はありますが、コンサル/IT/特定ドメインの実務経験があれば十分にチャンスがあります。等級ごとに求められる水準が異なります。'
  },
  {
    "q": 'シンプレクスの平均年齢・勤続年数は？',
    "a": '有報では平均年齢約33.6歳・平均勤続約4.4年（2026年3月期）です。'
  },
  {
    "q": '未経験から転職できますか？',
    "a": '職種によります。ポテンシャル採用や育成前提の枠がある場合もありますが、多くは実務経験者が中心です。まずはエージェントで想定レンジと可能性を確認するのが確実です。'
  }
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

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: 'シンプレクス' }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            シンプレクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            シンプレクス・ホールディングス（証券コード4373（東証プライム））は、金融（証券・銀行・資産運用）領域のフロントシステムに強みを持つITコンサルティング／開発企業の持株会社です。最先端技術×金融ドメインが特徴です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：シンプレクス転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約938万円（2026年3月期・有報／持株会社単体146名）。</li>
            <li>※持株会社単体（本社機能）の値で、開発の中核はシンプレクス株式会社等の事業会社。</li>
            <li>金融フロント領域のコンサルタント・エンジニアを事業会社で中途採用。</li>
            <li>金融知識×技術力（低レイテンシ・トレーディング等）の掛け算が高く評価される。</li>
          </ul>
        </div>

        <h2>シンプレクスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: 'シンプレクス・ホールディングス' },
                { label: "証券コード", value: '4373（東証プライム）' },
                { label: "本社", value: '東京都港区' },
                { label: "事業内容", value: '金融領域に強いITコンサルティング／システム開発（持株会社）' },
                { label: "平均年間給与", value: "約938万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約33.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約4.4年（同・提出会社）" },
                { label: "従業員数", value: "146名（同・提出会社単体）／連結は要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。持株会社単体は本社機能中心の平均で、事業会社の水準とは異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>シンプレクスの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">シンプレクスはコンサルタント・エンジニア等の職種でキャリア採用を行っています（募集の有無・職種は時期により変動）。ITコンサル/SIの経験や、特定業界のドメイン知識が活かしやすい採用構造です。</p>
        </div>

        <h2>シンプレクスで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
          {
            title: '金融×ITの専門性', desc: '証券・銀行・運用のフロント業務知識やトレーディングシステムの経験が強みに。',
          },
          {
            title: '技術力の高さ', desc: '要件定義から実装まで担う文化のため、手を動かせる技術力が求められます。',
          },
          {
            title: '成果志向', desc: '裁量と成果を重視する文化との相性が問われます。',
          },
          {
            title: 'キャッチアップ力', desc: '最先端技術を取り入れるため、学習意欲が重要。',
          },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>シンプレクスの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "職務経歴書で、コンサル/IT/ドメインの経験と応募職種の適合性が確認されます。" },
            { step: 2, title: "一次面接・ケース", desc: "現場マネージャー等との面接。論理的思考や実務経験、ケース面接が課される場合もあります。" },
            { step: 3, title: "二次・最終面接", desc: "部門責任者・役員クラスとの面接。カルチャーフィットとキャリアビジョンを確認。" },
            { step: 4, title: "内定・条件提示", desc: "等級・オファー年収の提示。条件確認を経て入社となります。" },
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

        <h2>シンプレクスの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約938万円（2026年3月期）は持株会社単体（本社機能中心）の平均。等級・役職で水準は大きく異なる。</li>
            <li>ITコンサル/SIは年齢より等級・案件責任で年収が決まるため、昇格が年収アップの鍵。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
        </div>

        <h2>シンプレクス転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: 'レバテックキャリア', href: '/review/levtech/', desc: 'IT・エンジニア特化。ITコンサル・SIの専門性を評価してもらいやすく、非公開求人も豊富。' },
            { name: 'リクルートエージェント', href: '/review/recruit-agent/', desc: '求人数業界最大級。大手IT・コンサルから幅広くカバー。' },
            { name: 'doda', href: '/review/doda/', desc: 'エージェントと求人サイトの両方。同業比較・年収レンジの把握がしやすい。' },
            { name: 'ビズリーチ', href: '/review/bizreach/', desc: 'スカウト型。ハイクラスのコンサル・IT求人が集まる。' },
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

        <h2>シンプレクス転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">シンプレクス転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/it-consultant-salary/" className="btn-outline px-8 py-3">ITコンサル年収ランキングを見る</Link>
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキング</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/baycurrent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ベイカレント転職ガイド</Link>
            <Link href="/company/future/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">フューチャー転職ガイド</Link>
            <Link href="/company/it-consultant-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ITコンサル年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
