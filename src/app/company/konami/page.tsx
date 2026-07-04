import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コナミへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "コナミ（証券コード9766）への転職を有価証券報告書などの一次データで解説。平均年間給与は約850万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "コナミへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "コナミ（9766）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "コナミの平均年収はいくらですか？",
    "a": "有価証券報告書によると、提出会社（持株会社単体）の平均年間給与は約850万円（2026年3月期）です。ただし本社機能スタッフ259名の平均であり、KONAMIデジタルエンタテインメント等の事業会社の給与水準とは異なります。"
  },
  {
    "q": "コナミは中途採用を行っていますか？",
    "a": "はい。事業会社単位でキャリア採用を継続的に実施しています。ゲーム開発職のほか、アミューズメント・スポーツ事業の職種もあります。"
  },
  {
    "q": "コナミの転職難易度は高いですか？",
    "a": "人気IPを持つ大手のため開発職の競争は相応にありますが、事業領域が広く職種も多様なため、経験がマッチする入口を選べば挑戦の余地があります。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "東京（銀座のコナミクリエイティブセンター等）が中心ですが、事業・職種により異なります。募集要項でご確認ください。"
  },
  {
    "q": "どの会社に応募すればいいですか？",
    "a": "ゲームならKONAMIデジタルエンタテインメント、スポーツクラブならコナミスポーツなど、事業ごとに採用主体が分かれています。公式採用サイトの案内に従って応募してください。"
  },
  {
    "q": "ゲーム業界未経験でも応募できますか？",
    "a": "職種によります。エンジニア系は近接領域からの転職余地がありますが、実力を示すポートフォリオ等が前提になります。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "コナミ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            コナミへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            コナミグループ（証券コード9766）は「eFootball」「パワフルプロ野球」「遊戯王」等のゲームからスポーツクラブまで展開する総合エンタテインメント企業です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：コナミ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は約850万円（2026年3月期・有価証券報告書）。ただし持株会社単体259名の数値で、事業会社（KONAMIデジタルエンタテインメント等）とは別物。</li>
            <li>ゲーム・アミューズメント・スポーツと事業が幅広く、職種の選択肢が多い。</li>
            <li>中途採用は事業会社単位で継続的に実施されており、開発職からスポーツ事業まで募集領域が広い。</li>
            <li>応募先の事業会社を明確にし、その事業への理解を示すことが重要。</li>
          </ul>
        </div>

        <h2>コナミの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "コナミグループ" },
                { label: "証券コード", value: "9766（東証プライム）" },
                { label: "本社", value: "東京都中央区" },
                { label: "事業内容", value: "ゲーム（eFootball・パワプロ・遊戯王等）・アミューズメント・スポーツクラブ等を展開する持株会社（事業会社: KONAMIデジタルエンタテインメント等）" },
                { label: "平均年間給与", value: "約850万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約35.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約10.8年（同・提出会社）" },
                { label: "従業員数", value: "259名（同・提出会社単体）／連結は要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。コナミグループは持株会社であり、有報の数値は提出会社（単体・259名）＝本社機能スタッフの平均です。ゲーム開発はKONAMIデジタルエンタテインメント、スポーツ事業はコナミスポーツ等の事業会社が担い、給与水準・採用はそれぞれ異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>コナミの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">採用は事業会社ごとに行われ、ゲーム開発（KONAMIデジタルエンタテインメント）ではプログラマー・プランナー・デザイナー等のキャリア採用が継続的にあります。モバイル・コンシューマ・eスポーツと領域が広いのが特徴です。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募窓口は持株会社ではなく各事業会社。</li>
            <li>ゲーム開発職はポートフォリオ・実績の提示が実質必須。</li>
            <li>スポーツクラブ事業など非ゲームの職種もある。</li>
            <li>募集職種・要件は時期により変動するため公式採用サイトで最新確認を。</li>
          </ul>
        </div>

        <h2>コナミで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "担当領域の実務経験", desc: "ゲーム開発・運営、アミューズメント機器、スポーツ事業など、応募する事業会社の職種に直結する経験が評価されます。" },
            { title: "運営型タイトルの知見", desc: "eFootballやモバイルタイトルなど運営型が主力のため、ライブオペレーション・データ分析の経験は強みになります。" },
            { title: "IPへの理解", desc: "遊戯王・パワプロ等の長寿IPを多数保有しており、IPビジネスへの理解・敬意が志望動機の軸になります。" },
            { title: "コンプライアンス意識", desc: "エンタメと健康産業を跨ぐ上場企業グループとして、堅実な業務姿勢が求められます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>コナミの選考フロー（一般的な流れ）</h2>
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

        <h2>コナミの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約850万円（2026年3月期）は持株会社単体（259名）の平均で、事業会社の水準を直接示すものではない。</li>
            <li>事業会社・職種ごとの想定年収は求人票・エージェント経由での確認が必須。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>コナミ転職で活用したい転職エージェント</h2>
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

        <h2>コナミ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">コナミ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">任天堂転職ガイド</Link>
            <Link href="/company/capcom/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カプコン転職ガイド</Link>
            <Link href="/company/koei-tecmo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コーエーテクモ転職ガイド</Link>
            <Link href="/company/sega-sammy/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">セガサミー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
