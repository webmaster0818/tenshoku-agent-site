import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "カプコンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "カプコン（証券コード9697）への転職を有価証券報告書などの一次データで解説。平均年間給与は約985万円（2026年3月期・有報／提出会社）。人気ゲームメーカーの中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "カプコンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description:
      "カプコン（9697）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "カプコンの平均年収はいくらですか？",
    a: "有価証券報告書によると、提出会社（単体）の平均年間給与は約985万円（2026年3月期）です。前期の2025年3月期は約919万円で、業績好調を背景に近年上昇しています。これは全社員の平均であり、職種・年齢・役職によって実際の水準は異なります。",
  },
  {
    q: "カプコンは中途採用を行っていますか？",
    a: "はい、カプコンは中途採用（キャリア採用）を積極的に行っています。プランナー、プログラマー、デザイナー、サウンド、アートなどの開発職を中心に、eスポーツ・IP事業・管理部門など幅広い職種で募集があります。最新の募集職種は公式採用サイトでご確認ください。",
  },
  {
    q: "カプコンの転職難易度は高いですか？",
    a: "『モンスターハンター』『バイオハザード』『ストリートファイター』など強力な自社IPを持つ人気企業で応募が集まりやすく、開発職ではゲーム開発経験や専門スキルが強く求められる傾向にあります。一方で継続的な採用を行っており、経験者にとっては挑戦の機会が多い企業です。",
  },
  {
    q: "カプコンの事業内容は何ですか？",
    a: "家庭用・PC・モバイル向けゲームソフトの企画・開発・販売を中核に、自社IPを活用したライセンス・映像・グッズなどのIP事業、アミューズメント、eスポーツなどを展開しています。デジタル販売比率が高く高収益な事業構造が特徴です。",
  },
  {
    q: "カプコンの選考ではどのような点が見られますか？",
    a: "開発職ではポートフォリオや制作実績、専門スキル（エンジン・ツール・言語等）が重視されます。加えて、カプコン作品への理解・情熱、チーム開発での協働姿勢、なぜカプコンなのかという志望動機が評価される傾向にあります。",
  },
  {
    q: "カプコンの勤務地はどこですか？",
    a: "本社は大阪市中央区にあり、東京にも開発拠点があります。職種によって勤務地が異なり、転勤の可能性もあるため応募時に確認しましょう。",
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

export default function CapcomCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "カプコン" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            カプコンへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            カプコン（証券コード9697）は『モンスターハンター』『バイオハザード』『ストリートファイター』など世界的な自社IPを持つゲームメーカーです。
            本記事では、有価証券報告書などの公開一次データをもとに、カプコンの平均年収・中途採用の状況・選考フロー・求められる人材を客観的に整理します。
          </p>
        </div>

        {/* 結論 */}
        <h2>結論：カプコン転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は<strong className="text-navy">約985万円（2026年3月期・有価証券報告書）</strong>。前期（2025年3月期）の約919万円から上昇。</li>
            <li>強力な自社IPとデジタル販売比率の高い高収益体質を背景に、賃上げ・処遇改善が進んでいる。</li>
            <li>開発職ではゲーム開発経験・専門スキルが強く求められる。人気企業ゆえ応募は集まりやすい。</li>
            <li>年収は全社平均であり、職種・年代・役職によって実際の水準は大きく異なる点に注意。</li>
          </ul>
        </div>

        {/* 基本データ（有報） */}
        <h2>カプコンの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社カプコン（CAPCOM CO., LTD.）" },
                { label: "証券コード", value: "9697（東証プライム）" },
                { label: "本社", value: "大阪府大阪市中央区内平野町3-1-3" },
                { label: "事業内容", value: "家庭用・PC・モバイルゲームの企画・開発・販売、IP活用事業、アミューズメント、eスポーツ等" },
                { label: "平均年間給与", value: "約985万円（2026年3月期・有価証券報告書／提出会社）※前期・2025年3月期は約919万円" },
                { label: "平均年齢", value: "約38.1歳（2026年3月期・提出会社）" },
                { label: "平均勤続年数", value: "約11.2年（同・提出会社）" },
                { label: "従業員数", value: "約3,593名（同・提出会社単体）／連結は要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        {/* 中途採用の状況 */}
        <h2>カプコンの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            カプコンは自社IPを軸に安定した収益を上げており、開発体制の強化に伴い開発職を中心に中途採用を継続しています。人気タイトルを抱えるため応募が集まりやすい一方、経験者にとっては幅広い職種で挑戦の機会があります。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>プランナー・プログラマー・デザイナー・アーティスト・サウンドなどの開発職。</li>
            <li>IP事業、eスポーツ、マーケティング、海外事業などの職種。</li>
            <li>経理・法務・人事・情報システムなどのコーポレート職。</li>
            <li>募集職種・要件は時期により変動するため、公式採用サイトでの最新確認が必須。</li>
          </ul>
        </div>

        {/* 求められる人材 */}
        <h2>カプコンで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "ゲーム開発の実績・専門スキル",
              desc: "開発職ではゲーム開発経験（エンジン・ツール・プログラミング言語・制作実績）が重視されます。ポートフォリオを充実させておくことが有効です。",
            },
            {
              title: "作品・IPへの理解と情熱",
              desc: "カプコン作品への理解と、ものづくりへの情熱が評価されます。なぜカプコンで何を作りたいのかを具体的に語れることが重要です。",
            },
            {
              title: "チーム開発での協働力",
              desc: "大規模タイトルの開発は多職種のチーム作業です。異なる職種のメンバーと連携し、成果を出した経験がアピール材料になります。",
            },
            {
              title: "品質へのこだわり",
              desc: "高品質なタイトルを継続的に生み出す文化があるため、細部まで品質にこだわり、改善を積み重ねられる姿勢が求められます。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* 選考フロー */}
        <h2>カプコンの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書・ポートフォリオ（開発職）を提出。応募職種で求められる制作実績・スキルとの適合性が確認されます。公式採用サイトまたは転職エージェント経由で応募します。" },
            { step: 2, title: "適性検査・課題（職種による）", desc: "職種によっては適性検査や実技課題（プログラミング・制作課題等）が課される場合があります。" },
            { step: 3, title: "面接（複数回）", desc: "現場のリーダー・マネージャーとの面接から始まり、部門責任者・役員クラスとの面接へと進みます。スキル・実績に加え、志望動機やカルチャーフィットが確認されます。" },
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
        <h2>カプコンの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-3">
            有価証券報告書における提出会社の平均年間給与は約985万円（2026年3月期）です。ただしこれは<strong className="text-navy">全社員を含む平均</strong>であり、次の点に注意が必要です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>職種（開発・管理部門等）や役職によって年収レンジは異なる。</li>
            <li>業績連動の賞与や、近年の賃上げ・処遇改善が平均を押し上げている面がある（前期は約919万円）。</li>
            <li>平均年齢が約38.1歳・平均勤続約11.2年で、年齢・役職が上がるほど平均は上振れする。</li>
            <li>中途入社時の提示額は、これまでの経験・スキル・応募ポジションによって決まる。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。
          </p>
        </div>

        {/* おすすめ転職エージェント */}
        <h2>カプコン転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          ゲーム業界の開発職は非公開求人や業界特化の求人が多いため、複数のエージェントに登録して情報を広く集めるのが有効です。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級で、ゲーム・IT業界の求人も豊富。人気企業への推薦力があり、非公開求人の紹介も期待できます。" },
            { name: "doda", href: "/review/doda/", desc: "IT・Web・ゲーム業界の求人が充実。エージェントと求人サイトの両方を使え、同業他社も含めて比較できます。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス・スカウト型。リードクラスやマネジメントのポジションの情報収集に向いています。" },
            { name: "マイナビ転職エージェント", href: "/review/mynavi/", desc: "20代〜30代の転職に強み。ゲーム・IT業界のアドバイザーが在籍し、初めての業界転職でも相談しやすいです。" },
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
        <h2>カプコン転職 よくある質問</h2>
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
            カプコン転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            人気のゲーム企業だからこそ、転職エージェントを活用して非公開求人や選考対策を押さえましょう。
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
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              任天堂転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
            <Link href="/company/muji/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              良品計画転職ガイド
            </Link>
            <Link href="/knowledge/resume/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              職務経歴書の書き方
            </Link>
            <Link href="/review/doda/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの口コミを見る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
