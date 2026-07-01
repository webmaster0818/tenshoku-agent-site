import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "HOYAへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "HOYA（証券コード7741）への転職を有価証券報告書などの一次データで解説。平均年間給与は約970万円（2026年3月期・有報／提出会社）。光学・メディカル・半導体マスクを手がける高収益メーカーの中途採用、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "HOYAへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description:
      "HOYA（7741）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "HOYAの平均年収はいくらですか？",
    a: "有価証券報告書によると、提出会社（単体）の平均年間給与は約970万円（2026年3月期）です。これは全社員の平均であり、職種・年齢・役職によって実際の水準は異なります。HOYAは高収益体質の企業として知られ、平均年収も製造業の中では高水準です。",
  },
  {
    q: "HOYAは中途採用を行っていますか？",
    a: "はい、HOYAは中途採用（キャリア採用）を行っています。眼鏡レンズ・コンタクトレンズなどのライフケア事業、半導体マスクブランクスやHDD用ガラス基板などの情報通信事業、内視鏡などのメディカル事業と幅広い領域で、技術・研究・営業・管理部門など多様な職種で募集があります。",
  },
  {
    q: "HOYAの転職難易度は高いですか？",
    a: "HOYAは高収益・グローバル展開の優良企業として人気があり、専門性の高いポジションでは相応の経験・スキルが求められます。ただし事業領域が非常に幅広いため、光学・半導体・医療機器・化学など各分野の経験を活かせる余地は大きく、募集職種は多岐にわたります。",
  },
  {
    q: "HOYAの事業内容は何ですか？",
    a: "HOYAはメガネレンズ・コンタクトレンズ・内視鏡・人工骨などのライフケア／メディカル分野と、半導体用フォトマスク・マスクブランクス、HDD用ガラス基板、光学ガラスなどの情報通信分野の2軸で事業を展開する光学技術ベースのグローバルメーカーです。",
  },
  {
    q: "HOYAの選考ではどのような点が見られますか？",
    a: "職種にもよりますが、応募領域における専門知識・実務経験に加え、グローバルに展開する事業への適応力、論理的思考力、成果志向などが評価される傾向にあります。事業ポートフォリオが幅広いため、自分の経験がどの事業でどう活きるかを整理しておくとよいでしょう。",
  },
  {
    q: "HOYAの勤務地はどこですか？",
    a: "本社は東京都新宿区にあります。事業ごとに国内外の拠点があり、職種によって勤務地や転勤の可能性が異なります。応募時に確認しましょう。",
  },
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

export default function HoyaCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "HOYA" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            HOYAへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            HOYA（証券コード7741）は、メガネレンズ・内視鏡などのライフケア／メディカル分野と、半導体用フォトマスク・HDD用ガラス基板などの情報通信分野を両輪とする光学技術ベースのグローバルメーカーです。
            本記事では、有価証券報告書などの公開一次データをもとに、HOYAの平均年収・中途採用の状況・選考フロー・求められる人材を客観的に整理します。
          </p>
        </div>

        {/* 結論 */}
        <h2>結論：HOYA転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は<strong className="text-navy">約970万円（2026年3月期・有価証券報告書）</strong>と製造業の中で高水準。</li>
            <li>高収益・グローバル展開の優良メーカーとして人気があり、専門職では相応の経験・スキルが求められる。</li>
            <li>事業領域が光学・半導体・医療機器・化学など幅広く、各分野の経験を活かせる募集が多い。</li>
            <li>年収は全社平均であり、事業・職種・年代・役職によって実際の水準は大きく異なる点に注意。</li>
          </ul>
        </div>

        {/* 基本データ（有報） */}
        <h2>HOYAの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "HOYA株式会社（HOYA CORPORATION）" },
                { label: "証券コード", value: "7741（東証プライム）" },
                { label: "本社", value: "東京都新宿区中落合2-7-5" },
                { label: "事業内容", value: "ライフケア（メガネ・コンタクトレンズ・内視鏡等）／情報通信（半導体マスク・HDD用ガラス基板・光学ガラス等）" },
                { label: "平均年間給与", value: "約970万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約47.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約18.7年（同・提出会社）" },
                { label: "従業員数", value: "約3,313名（同・提出会社単体）／連結は要公式確認" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。事業・職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        {/* 中途採用の状況 */}
        <h2>HOYAの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            HOYAは光学技術を核に多角的な事業を展開しており、事業ごとに専門人材を通年で採用しています。半導体マスクブランクスは世界的に高いシェアを持つなど各事業で高い競争力を有し、研究開発・技術系の採用ニーズが継続しています。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>半導体・光学・材料・精密加工などの研究開発・技術職。</li>
            <li>医療機器（内視鏡等）の開発・品質・薬事・マーケティング職。</li>
            <li>グローバル営業、事業企画、経理・財務・法務などのコーポレート職。</li>
            <li>募集職種・要件は事業ごとに異なるため、公式採用サイトでの最新確認が必須。</li>
          </ul>
        </div>

        {/* 求められる人材 */}
        <h2>HOYAで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "応募事業に直結する専門性",
              desc: "光学・半導体・材料・医療機器など、応募する事業領域での研究・開発・技術・薬事などの専門経験が評価されます。",
            },
            {
              title: "グローバル環境への適応力",
              desc: "海外売上比率が高く、海外拠点・海外顧客と関わる機会が多いため、語学力や異文化環境での協働経験が歓迎されます。",
            },
            {
              title: "成果志向と自律性",
              desc: "収益性を重視するカルチャーが知られており、自ら課題を設定して成果を出す自律的な働き方ができる人材が求められます。",
            },
            {
              title: "事業横断で価値を出す視点",
              desc: "多角的な事業ポートフォリオを持つため、自分の専門を軸にしつつ事業横断で価値を生み出す視点があると強みになります。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* 選考フロー */}
        <h2>HOYAの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※以下は中途採用における一般的な選考の流れの一例です。事業・職種・時期により異なります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募事業・職種で求められる専門経験との適合性が確認されます。公式採用サイトまたは転職エージェント経由で応募します。" },
            { step: 2, title: "一次面接", desc: "現場の技術者・マネージャーとの面接。専門スキル・実務経験と応募動機が問われます。" },
            { step: 3, title: "二次面接・最終面接", desc: "事業責任者・役員クラスとの面接。カルチャーフィットや長期的なキャリアビジョン、グローバル事業への適応が確認されます。" },
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

        {/* 年収の考え方 */}
        <h2>HOYAの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-3">
            有価証券報告書における提出会社の平均年間給与は約970万円（2026年3月期）です。ただしこれは<strong className="text-navy">全社員を含む平均</strong>であり、次の点に注意が必要です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>事業（ライフケア／情報通信）や職種、役職によって年収レンジは大きく異なる。</li>
            <li>平均年齢が約47.6歳・平均勤続年数が約18.7年と長めで、これが平均を押し上げている面がある。</li>
            <li>中途入社時の提示額は、これまでの経験・スキル・応募ポジションによって決まる。</li>
            <li>賞与は業績に連動するため変動する。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。
          </p>
        </div>

        {/* おすすめ転職エージェント */}
        <h2>HOYA転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          HOYAのような専門職・グローバル求人は非公開で扱われることが多いため、複数のエージェントに登録して情報を広く集めるのが有効です。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "JACリクルートメント", href: "/review/jac/", desc: "外資系・グローバル企業や技術系専門職に強み。HOYAのような高収益グローバルメーカーの専門ポジションと相性が良いです。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。メーカー・研究開発・医療機器など幅広い求人を扱い、非公開求人の紹介も期待できます。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス・スカウト型。管理職や専門性の高いポジションの情報収集に向いています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用でき、メーカー・技術系求人が充実。同業他社も含めて比較できます。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2>HOYA転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            HOYA転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            専門職・グローバル求人は非公開が多め。転職エージェントを活用して情報収集から始めましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連ページ */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/daifuku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ダイフク転職ガイド
            </Link>
            <Link href="/company/nidec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ニデック転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
            <Link href="/knowledge/resume/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              職務経歴書の書き方
            </Link>
            <Link href="/review/jac/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの口コミを見る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
