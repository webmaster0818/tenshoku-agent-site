import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "タカラトミーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "タカラトミー（証券コード7867）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,038万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "タカラトミーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "タカラトミー（7867）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "タカラトミーの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約1,038万円（2026年3月期・単体）です。食品メーカーとしては標準〜やや高めの水準で、職種により実際のレンジは異なります。"
  },
  {
    "q": "タカラトミーは中途採用を行っていますか？",
    "a": "はい。商品企画・開発設計・マーケティング・営業などの職種でキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "タカラトミーの転職難易度は高いですか？",
    "a": "人気IPを持つ玩具最大手級で応募が集まりやすく、企画・開発職の競争は高めです。玩具・消費財での実務経験を持つ方が有利です。"
  },
  {
    "q": "年収が大きく上がったのはなぜですか？",
    "a": "有報の平均年間給与は約1,038万円と前期比+117万円の上昇です（2026年3月期・IRBANK照合）。賞与は業績に連動するため年度により変動します（増減額は有報記載値）。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都葛飾区（立石）。応募ポジションにより勤務地が異なります。"
  },
  {
    "q": "どんな職種の募集がありますか？",
    "a": "有報の平均勤続年数は約12.7年（2026年3月期）と、上場企業の中でも長い部類です。長く働く社員が多い企業文化がうかがえます。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "タカラトミー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            タカラトミーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            タカラトミー（証券コード7867）はトミカ・プラレール・リカちゃん等で知られる玩具最大手級のメーカーです。玩具に加えトレーディングカード・ベビー用品等を展開しています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：タカラトミー転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,038万円（2026年3月期・有価証券報告書・単体630名）。前期比+117万円と大きく伸びた高水準。</li>
            <li>平均勤続約12.7年と長く、定着率の高さがうかがえるのが特徴。</li>
            <li>トミカ・プラレール等の定番IPに加え、トレカ・海外展開が成長ドライバー。</li>
            <li>商品企画・開発設計・マーケティング・営業などの職種でキャリア採用がある。</li>
          </ul>
        </div>

        <h2>タカラトミーの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "タカラトミー" },
                { label: "証券コード", value: "7867（東証プライム）" },
                { label: "本社", value: "東京都葛飾区" },
                { label: "事業内容", value: "トミカ・プラレール・リカちゃん・デュエル・マスターズ等の玩具・雑貨の企画・製造・販売" },
                { label: "平均年間給与", value: "約1,038万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約42.1歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約12.7年（同・提出会社）" },
                { label: "従業員数", value: "630名（同・提出会社単体）／連結は要公式確認" },
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

        <h2>タカラトミーの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">タカラトミーは生産・品質管理・研究開発・営業などの職種でキャリア採用を行っています（募集の有無・職種は時期により変動）。食品業界の経験や、製造業での生産技術・品質保証の経験が活かしやすい採用構造です。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>生産技術・品質保証・研究開発など企画・開発・営業などの職種が中心。</li>
            <li>海外展開・トレカ事業の伸長でグローバルに関わる可能性もある。</li>
            <li>企画系と生産管理系で働き方が異なる。</li>
            <li>募集職種・要件は時期により変動するため公式採用サイトで最新確認を。</li>
          </ul>
        </div>

        <h2>タカラトミーで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "玩具・消費財での企画開発経験", desc: "商品企画・開発設計・品質保証など、玩具または近接する消費財メーカーでの経験が最も評価されます。" },
            { title: "玩具の安全基準への意識", desc: "子どもが使う製品を扱うため、安全基準(ST基準等)への誠実な姿勢が全職種で重視されます。" },
            { title: "現場と連携する調整力", desc: "工場・営業・開発が連携する事業のため、部門を跨ぐコミュニケーション力が求められます。" },
            { title: "IPを育てる長期視点", desc: "定番IPを長く育てる文化のため、ブランドへの理解と愛着が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>タカラトミーの選考フロー（一般的な流れ）</h2>
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

        <h2>タカラトミーの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,038万円（2026年3月期）は単体全社員の平均。職種（本社・工場・営業）で水準は異なる。</li>
            <li>約1,038万円は前期比+117万円と業績連動で大きく変動しうる。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>タカラトミー転職で活用したい転職エージェント</h2>
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

        <h2>タカラトミー転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">タカラトミー転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/muji/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">良品計画転職ガイド</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/daifuku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ダイフク転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
