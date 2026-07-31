import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ピジョンへの転職は難しい？中途採用・平均年収827万円・選考を徹底解説【2026年】",
  description:
    "ピジョン（証券コード7956）への転職を有価証券報告書などの一次データで解説。平均年間給与は約827万円（2025年12月期・有報／提出会社）。単体は本社機能中心の338名である点も含め、中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "ピジョンへの転職は難しい？中途採用・平均年収827万円・選考を徹底解説【2026年】",
    description: "ピジョン（7956）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ピジョンの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約827万円（2025年12月期・提出会社）です。ただし単体従業員は338名と少人数で、製造などはグループ会社が担うため、この数値は本社単体（本社機能中心）の値です。職種・役職により実際のレンジは異なります。"
  },
  {
    "q": "ピジョンは中途採用を行っていますか？",
    "a": "はい。商品企画・研究開発・品質保証・マーケティング・営業などの職種でキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "ピジョンの転職難易度は高いですか？",
    "a": "哺乳器で高い知名度を持つ安定メーカーで、本社単体338名と組織が小さいため中途の募集枠は多くありません。消費財・メーカーでの専門経験を持つ方が有利です。"
  },
  {
    "q": "ピジョンのどんな職種の募集がありますか？",
    "a": "商品企画・研究開発・品質保証・マーケティング・営業などの募集が中心です。募集の有無は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都中央区日本橋久松町です。応募ポジションにより勤務地は異なるため、募集要項でご確認ください。"
  },
  {
    "q": "定着率は高いですか？",
    "a": "有報の平均勤続年数は約15.0年（2025年12月期・提出会社）と、上場企業の中でも長い部類です。長く働く社員が多い企業文化がうかがえます。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ピジョン" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ピジョンへの転職は難しい？中途採用・平均年収827万円・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ピジョン（証券コード7956）は哺乳器・ベビーカーなどの育児用品で知られる1957年設立のメーカーです。マタニティ・女性ケア・介護用品の製造販売や保育事業も手がけています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ピジョン転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約827万円（2025年12月期・有価証券報告書・提出会社）。単体338名は本社機能中心のため、本社単体の水準である点に注意。</li>
            <li>平均勤続約15.0年と長く、定着率の高さがうかがえるのが特徴。</li>
            <li>哺乳器をはじめとする育児用品の国内知名度に加え、マタニティ・介護・保育へ事業を展開。</li>
            <li>商品企画・研究開発・品質保証・マーケティング・営業などの採用が中心。</li>
          </ul>
        </div>

        <h2>ピジョンの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ピジョン" },
                { label: "証券コード", value: "7956（東証プライム）" },
                { label: "本社", value: "東京都中央区日本橋久松町4-4" },
                { label: "事業内容", value: "哺乳器・ベビーカー等の育児用品、マタニティ・女性ケア・介護用品の製造販売、保育事業（1957年設立）" },
                { label: "平均年間給与", value: "約827万円（2025年12月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約42.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約15.0年（同・提出会社）" },
                { label: "従業員数", value: "338名（同・提出会社単体）／連結は要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。ピジョンは単体338名と少人数で、製造等はグループ会社が担うため、平均年収は本社単体（本社機能中心）の値です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ピジョンの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ピジョンは<a href="https://www.pigeon.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>で「経験者採用情報」として中途採用を実施しており、求人の一覧・応募は公式リンク先の<a href="https://arwrk.net/recruit/dyqpmzzv1nmud7b" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">経験者採用ページ</a>から行う形です。2026年7月31日確認時点では、以下の職種が掲載されていました（公式表記のまま・いずれも正社員）。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>掲載職種：哺乳瓶の技術開発／連結決算・開示・財務業務（スタッフ職／リーダー職）／社内SE業務／ブランディング業務／広報業務／法務業務／サステナビリティ関連業務／ベビー用品の国内提案型ルート営業／内部監査業務／食品の品質管理業務（2026年7月31日確認時点）。</li>
            <li>勤務地は東京本社が中心。哺乳瓶の技術開発は筑波事業所、食品の品質管理業務は中央研究所オフィス。</li>
            <li>応募は経験者採用ページの各求人から。あわせて「キャリア登録」フォームの案内もあり。</li>
            <li>選考ステップの詳細は各求人ページ単位での案内（一覧ページには明記なし）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</p>
        </div>

        <h2>ピジョンで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "消費財・メーカーでの実務経験", desc: "商品企画・研究開発・品質保証・マーケティングなど、消費財または近接するメーカーでの経験が評価されやすい構造です。" },
            { title: "製品品質・安全への意識", desc: "赤ちゃんが毎日使う育児用品を扱うため、品質・安全に対する誠実な姿勢が全職種で重視されます。" },
            { title: "グループ会社と連携する調整力", desc: "製造等をグループ会社が担う体制のため、社内外・部門を跨ぐコミュニケーション力が求められます。" },
            { title: "安定志向と着実さ", desc: "平均勤続15.0年という数字が示すように、腰を据えて長く働く文化との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ピジョンの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
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

        <h2>ピジョンの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約827万円（2025年12月期）は提出会社（単体338名）の平均。製造等はグループ会社が担うため、本社機能中心の水準であり、グループ全体の水準とは異なる可能性がある。</li>
            <li>平均勤続15.0年・平均年齢42.8歳の安定雇用型。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ピジョン転職で活用したい転職エージェント</h2>
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

        <h2>ピジョン転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ピジョン転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/yakult/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤクルト本社転職ガイド</Link>
            <Link href="/company/calbee/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カルビー転職ガイド</Link>
            <Link href="/company/zojirushi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">象印マホービン転職ガイド</Link>
            <Link href="/company/toyo-suisan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東洋水産転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
