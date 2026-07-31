import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京エレクトロンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "東京エレクトロン（証券コード8035）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,380万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "東京エレクトロンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "東京エレクトロン（8035）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "東京エレクトロンの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約1,380万円（2026年3月期・提出会社単体）です。前期（2025年3月期）は約1,354万円でした。半導体製造装置分野の企業として高めの水準ですが、職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "東京エレクトロンは中途採用を行っていますか？",
    "a": "はい。技術系を中心にキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "東京エレクトロンの転職難易度は高いですか？",
    "a": "知名度の高い企業で、専門性を持つ経験者採用が中心です。半導体製造装置や近接領域での実務経験を持つ方が有利です。"
  },
  {
    "q": "東京エレクトロンの平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は約14.7年（2026年3月期・提出会社）です。平均年齢は約43.1歳です。"
  },
  {
    "q": "東京エレクトロンの本社はどこですか？",
    "a": "本社は東京都港区赤坂です。事業所・工場勤務の職種もあり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東京エレクトロンへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/tokyo-electron/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "東京エレクトロン" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            東京エレクトロンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            東京エレクトロン（証券コード8035）は、半導体製造装置とFPD（フラットパネルディスプレイ）製造装置を手がける、半導体製造装置で世界トップクラスのメーカーです。世界の半導体投資拡大を追い風に成長を続けています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：東京エレクトロン転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,380万円（2026年3月期・有価証券報告書・単体）。装置メーカーとして高水準。</li>
            <li>半導体製造装置で国内首位・世界トップクラス。世界的な半導体投資が追い風。</li>
            <li>単体従業員2,309名は少なめだが、製造・開発機能は国内グループ子会社が担う（純粋持株会社ではない事業会社）。</li>
            <li>プロセス／装置エンジニア・フィールドエンジニア・開発などで専門経験が重視される。</li>
          </ul>
        </div>

        <h2>東京エレクトロンの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "東京エレクトロン" },
                { label: "証券コード", value: "8035（東証プライム）" },
                { label: "本社", value: "東京都港区赤坂" },
                { label: "事業内容", value: "半導体製造装置・FPD（フラットパネルディスプレイ）製造装置の開発・製造・販売" },
                { label: "平均年間給与", value: "約1,380万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約43.1歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約14.7年（同・提出会社）" },
                { label: "従業員数", value: "2,309名（提出会社単体・製造/開発は主にグループ子会社）" },
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

        <h2>東京エレクトロンの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">東京エレクトロンは専用の<a href="https://careers-tel.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用サイト</a>を運営しており、<a href="https://careers-tel.jp/description/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集要項ページ</a>から募集中の求人を確認できます。募集職種は8つの職種カテゴリーに分かれ、採用はグループ各社単位で行われます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>職種カテゴリー（公式表記）：ビジネス（営業・マーケティング）／エンジニア（研究開発）／デジタル（エンジニア・データサイエンス）／生産・製造（工場）／フィールド／情報システム・情報セキュリティ／コーポレート／物流・施設管理。</li>
            <li>掲載グループ会社：東京エレクトロン テクノロジーソリューションズ／東京エレクトロン九州／東京エレクトロン宮城／東京エレクトロンFE／東京エレクトロンBP。</li>
            <li>応募ルートは通常応募のほか、社員紹介制度・カムバック採用・障がい者採用・キャリア登録（簡易登録による適職マッチング）が用意されている。</li>
            <li>※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>東京エレクトロンで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "半導体・精密の技術理解", desc: "装置・プロセス・材料など半導体関連の技術理解が中核職種で強く求められます。" },
            { title: "グローバル対応力", desc: "世界中の顧客・拠点と関わるため、英語や海外拠点との協働力が活きます。" },
            { title: "最先端を追う探究心", desc: "微細化が進む最先端プロセスに向き合う探究心・学習意欲が評価されます。" },
            { title: "品質・安全への責任感", desc: "顧客の生産ラインを支える装置を扱うため、品質と安全への責任感が重視されます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>東京エレクトロンの選考フロー（一般的な流れ）</h2>
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

        <h2>東京エレクトロンの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,380万円（2026年3月期）は単体全社員の平均。職種・役職で水準は異なる。</li>
            <li>単体は本社・開発機能中心で、製造・保守はグループ子会社が担う点に留意。</li>
            <li>半導体市況で業績が変動し、賞与など処遇に反映されやすい。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>東京エレクトロン転職で活用したい転職エージェント</h2>
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

        <h2>東京エレクトロン転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">東京エレクトロン転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
