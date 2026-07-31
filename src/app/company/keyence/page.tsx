import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "キーエンスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "キーエンス（証券コード6861）への転職を有価証券報告書などの一次データで解説。平均年間給与は約2,178万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "キーエンスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "キーエンス（6861）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "キーエンスの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約2,178万円（2026年3月期・提出会社単体）です。前期（2025年3月期）は約2,039万円でした。FA機器（センサ・測定器）分野の企業として高めの水準ですが、職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "キーエンスは中途採用を行っていますか？",
    "a": "はい。技術系を中心にキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "キーエンスの転職難易度は高いですか？",
    "a": "知名度の高い企業で、専門性を持つ経験者採用が中心です。FA（ファクトリーオートメーション）機器や近接領域での実務経験を持つ方が有利です。"
  },
  {
    "q": "キーエンスの平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は約11.3年（2026年3月期・提出会社）です。平均年齢は約35.0歳です。"
  },
  {
    "q": "キーエンスの本社はどこですか？",
    "a": "本社は大阪府大阪市です。事業所・工場勤務の職種もあり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "キーエンスへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/keyence/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "キーエンス" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            キーエンスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            キーエンス（証券コード6861）は、センサ・測定器・画像処理機器などのファクトリーオートメーション（FA）機器を手がける大阪の高収益メーカーです。ファブレスに近い開発・直販体制と付加価値の高い製品で知られ、国内上場企業のなかでも最高水準の平均年収で知られます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：キーエンス転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約2,178万円（2026年3月期・有価証券報告書・単体）。上場メーカーのなかでも最高水準。</li>
            <li>平均年齢35.0歳・平均勤続11.3年と若く、成果に応じた処遇が特徴とされる。</li>
            <li>商品企画・技術営業（コンサルティング営業）・開発などで専門性と提案力が重視される。</li>
            <li>年収変動が大きく、業績連動の性格が強い点は有報の期別推移からも読み取れる。</li>
          </ul>
        </div>

        <h2>キーエンスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "キーエンス" },
                { label: "証券コード", value: "6861（東証プライム）" },
                { label: "本社", value: "大阪府大阪市" },
                { label: "事業内容", value: "センサ・測定器・画像処理機器等のファクトリーオートメーション（FA）機器の開発・製造・販売" },
                { label: "平均年間給与", value: "約2,178万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約35.0歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約11.3年（同・提出会社）" },
                { label: "従業員数", value: "3,306名（提出会社単体）／連結12,784名" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>キーエンスの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">キーエンスは公式の<a href="https://www.keyence.co.jp/jobs/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">採用情報ページ</a>に「キャリア採用情報」のリンクを設けており、そこから<a href="https://axol.jp/zw/c/keyence/public/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用求人一覧（応募システム）</a>へ進んで応募する方式です。2026年7月31日確認時点では、技術系（開発・デザイン）中心の掲載でした。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（求人一覧ページの公式表記）：ソフトウェア開発 / 商品デザイン(UX/UI・プロダクトデザイン) / ソフト開発リーダー(マネージャ) / ソフト開発リーダー(アーキテクト) / ソフト開発エンジニア / ＡＩエンジニア / 光学/構造/機構開発(クリエイター) / 光学/構造/機構開発(エンジニア) / 回路/システム開発（2026年7月31日確認時点）。</li>
            <li>応募方法：公式採用情報ページからリンクされるキャリア採用求人一覧（応募システム）経由で応募。</li>
            <li>確認したページ（採用情報トップ・求人一覧）には選考プロセスの記載はなし。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</p>
        </div>

        <h2>キーエンスで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "課題解決の提案力", desc: "製品を売るのではなく顧客の生産課題を解決する提案力が、技術営業を中心に強く求められます。" },
            { title: "スピードと自走力", desc: "意思決定と行動の速さを重んじる文化のなかで、自ら課題を見つけ動ける自走力が評価されます。" },
            { title: "技術と数字の両利き", desc: "技術理解とビジネス（費用対効果）の双方を語れる人材がFA領域で重宝されます。" },
            { title: "高い目標への耐性", desc: "高水準の処遇の背景にある目標志向・プレッシャー耐性との相性が問われます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>キーエンスの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書（開発職はポートフォリオ等）を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 2, title: "一次面接", desc: "現場のマネージャー等との面接。実務経験・専門スキル・応募動機が中心です。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスとの面接。カルチャーフィットや中長期のキャリアビジョンが確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。入社時期や条件面の確認を経て入社となります。" },
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

        <h2>キーエンスの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約2,178万円（2026年3月期）は単体全社員の平均。年代・職種で水準は大きく異なる。</li>
            <li>平均年齢35.0歳と若く、平均が高い＝年功ではなく成果連動の性格が強い。</li>
            <li>年収は業績連動で期ごとの振れが大きい（有報の期別推移でも確認できる）。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>キーエンス転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
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

        <h2>キーエンス転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">キーエンス転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
