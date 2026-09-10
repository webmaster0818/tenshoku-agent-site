import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "三菱ケミカルグループへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "三菱ケミカルグループ（証券コード4188）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,188万円（2026年3月期・有報／提出会社）。国内最大の総合化学グループの持株会社のキャリア採用窓口・選考の考え方をまとめました。",
  alternates: { canonical: "/company/mitsubishi-chemical/" },
  openGraph: {
    title: "三菱ケミカルグループへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "三菱ケミカルグループ（4188）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "三菱ケミカルグループの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月10日確認）によると、平均年間給与は約1,188万円（2026年3月期・提出会社単体）です。973万円（2024年3月期）→1,059万円（2025年3月期）→1,188万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "三菱ケミカルグループは中途採用を行っていますか？",
    a: "はい。公式サイトの三菱ケミカルの公式採用ページ（www.m-chemical.co.jp/saiyo/）でキャリア採用の情報を確認できます（2026年9月10日確認）。",
  },
  {
    q: "三菱ケミカルグループはどんな会社ですか？",
    a: "国内最大の総合化学グループの持株会社。機能材料・MMA・ヘルスケア(田辺三菱製薬)まで幅広く展開です。本社は東京都千代田区(丸の内)にあります。",
  },
  {
    q: "三菱ケミカルグループの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月10日確認）によると、平均勤続年数は24.3年、平均年齢は50.2歳（2026年3月期・提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "三菱ケミカルグループへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/mitsubishi-chemical/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "三菱ケミカルG" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            三菱ケミカルグループへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            三菱ケミカルグループ（証券コード4188）は、国内最大の総合化学グループの持株会社。機能材料・MMA・ヘルスケア(田辺三菱製薬)まで幅広く展開です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：三菱ケミカルG転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,188万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年9月10日確認）。提出会社単体の全従業員平均。</li>
            <li>973万円（2024年3月期）→1,059万円（2025年3月期）→1,188万円（2026年3月期）と推移（2年で計215万円上昇し化学収録9社トップ）。</li>
            <li>キャリア採用は三菱ケミカルの公式採用ページで確認可能（2026年9月10日確認）。</li>
            <li>提出会社は持株会社単体(平均年齢50.2歳・勤続24.3年)であり、三菱ケミカルなど事業会社の平均とは別の数値です。年齢構成が高い分、平均給与は上振れしやすい点にご注意ください。</li>
          </ul>
        </div>

        <h2>三菱ケミカルGの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "三菱ケミカルグループ株式会社" },
                { label: "証券コード", value: "4188" },
                { label: "本社", value: "東京都千代田区(丸の内)" },
                { label: "事業内容", value: "国内最大の総合化学グループの持株会社。機能材料・MMA・ヘルスケア(田辺三菱製薬)まで幅広く展開" },
                { label: "平均年間給与", value: "約1,188万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月10日確認）" },
                { label: "直近3年の推移", value: "973万円（2024年3月期）→1,059万円（2025年3月期）→1,188万円（2026年3月期）" },
                { label: "平均年齢", value: "50.2歳（同・提出会社）" },
                { label: "平均勤続年数", value: "24.3年（同・提出会社）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月10日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>三菱ケミカルGの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年9月10日時点で、<a href="https://www.m-chemical.co.jp/saiyo/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三菱ケミカルの公式採用ページ</a>を確認できます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>事業会社の三菱ケミカルが公式採用ページでキャリア採用を公開しています。</li>
            <li>研究開発・生産技術・コーポレートなど職種別の採用です。</li>
            <li>※募集状況は変動するため最新は公式採用ページでご確認ください。</li>
          </ul>
        </div>

        <h2>三菱ケミカルGで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "国内最大の総合化学", desc: "素材からヘルスケアまで、化学系キャリアの受け皿が最も広いグループの一つです。" },
            { title: "持株会社の少数精鋭", desc: "提出会社はHD単体(平均50.2歳・勤続24.3年)で、本社機能中心の構成です。" },
            { title: "研究開発・生産技術", desc: "事業会社側では化学・材料系の研究職、プラントエンジニアの採用が継続的にあります。" },
            { title: "構造改革の変化期", desc: "事業ポートフォリオの再編が進む局面で、変化を前提としたキャリア観が合います。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>三菱ケミカルGの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページからエントリー", desc: "公式採用ページで求人を確認し、希望ポジションにエントリーします。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等との面接。実務経験と応募職種の適合が中心です。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。経験・能力を考慮した条件が提示されます。" },
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

        <h2>三菱ケミカルGの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,188万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>提出会社は持株会社単体(平均年齢50.2歳・勤続24.3年)であり、三菱ケミカルなど事業会社の平均とは別の数値です。年齢構成が高い分、平均給与は上振れしやすい点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>三菱ケミカルG転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。年収レンジの高いポジションの紹介に定評があります。" },
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

        <h2>三菱ケミカルG転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">三菱ケミカルG転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kagaku-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">化学 年収ランキング</Link>
            <Link href="/company/sumitomo-chemical/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">住友化学転職ガイド</Link>
            <Link href="/company/shin-etsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">信越化学転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
