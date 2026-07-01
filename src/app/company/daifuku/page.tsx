import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ダイフクへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ダイフク（証券コード6383）への転職を有価証券報告書などの一次データで解説。平均年間給与は約917万円（2025年12月期・有報／提出会社）。マテハン世界最大手の中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "ダイフクへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description:
      "ダイフク（6383）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "ダイフクの平均年収はいくらですか？",
    a: "有価証券報告書によると、提出会社（単体）の平均年間給与は約917万円（2025年12月期）です。これは総合職・技術職・一般職など全社員の平均であり、職種・年齢・役職によって実際の水準は異なります。ダイフクは2024年12月期より決算期を3月末から12月末へ変更している点にも留意してください。",
  },
  {
    q: "ダイフクは中途採用を行っていますか？",
    a: "はい、ダイフクは中途採用（キャリア採用）を継続的に行っています。マテリアルハンドリング（マテハン）システムの設計・エンジニアリング・営業・ソフトウェア・保守サービスなど幅広い職種で募集があります。最新の募集職種は公式採用サイトでご確認ください。",
  },
  {
    q: "ダイフクの転職難易度は高いですか？",
    a: "BtoB・産業機械分野の企業のため一般的な知名度は高くないものの、マテハン分野で世界トップクラスのメーカーであり、専門性の高いポジションでは相応の経験・スキルが求められます。一方で事業拡大に伴い技術系の採用ニーズは幅広く、業界未経験でも近接領域の経験があれば挑戦の余地があります。",
  },
  {
    q: "ダイフクの事業内容は何ですか？",
    a: "工場・倉庫・空港などの物流を自動化するマテリアルハンドリングシステム（搬送・保管・仕分け・ピッキング機器やソフトウェア）の開発・製造・販売・保守を手がけています。半導体・自動車・EC物流・空港向けなど幅広い分野に展開する世界最大手クラスのメーカーです。",
  },
  {
    q: "ダイフクの選考ではどのような点が見られますか？",
    a: "職種にもよりますが、これまでの実務経験・専門スキルに加え、グローバルに展開する事業への適応力、顧客課題を解決する提案姿勢、チームでの協働経験などが評価される傾向にあります。応募職種の要件に沿って経験を整理しておくことが重要です。",
  },
  {
    q: "ダイフクの勤務地はどこですか？",
    a: "本社は大阪市にあり、滋賀県（滋賀事業所）に大規模な生産・開発拠点があります。国内外に事業拠点を持ち、職種によって勤務地や転勤の可能性が異なります。応募時に確認しましょう。",
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

export default function DaifukuCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "ダイフク" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ダイフクへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ダイフク（証券コード6383）は、工場・倉庫・空港などの物流を自動化するマテリアルハンドリング（マテハン）システムで世界トップクラスのメーカーです。
            本記事では、有価証券報告書などの公開一次データをもとに、ダイフクの平均年収・中途採用の状況・選考フロー・求められる人材を客観的に整理します。
          </p>
        </div>

        {/* 結論 */}
        <h2>結論：ダイフク転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は<strong className="text-navy">約917万円（2025年12月期・有価証券報告書）</strong>と高水準。</li>
            <li>マテハン分野で世界最大手クラス。BtoB企業のため一般知名度は高くないが、専門性の高い技術・エンジニアリング職の採用ニーズが継続。</li>
            <li>半導体・EC物流・空港など成長分野に展開しており、近接領域の経験があれば中途での挑戦余地がある。</li>
            <li>年収は全社平均であり、職種・年代・役職によって実際の水準は大きく異なる点に注意。</li>
          </ul>
        </div>

        {/* 基本データ（有報） */}
        <h2>ダイフクの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社ダイフク（DAIFUKU CO., LTD.）" },
                { label: "証券コード", value: "6383（東証プライム）" },
                { label: "本社", value: "大阪府大阪市西淀川区御幣島3-2-11" },
                { label: "事業内容", value: "マテリアルハンドリングシステム（搬送・保管・仕分け・ピッキング等）の開発・製造・販売・保守" },
                { label: "平均年間給与", value: "約917万円（2025年12月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約41.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約14.7年（同・提出会社）" },
                { label: "従業員数", value: "約3,858名（同・提出会社単体）／連結は要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。ダイフクは2024年12月期より決算期を3月末から12月末に変更しています。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        {/* 中途採用の状況 */}
        <h2>ダイフクの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ダイフクはEC物流の拡大や半導体・自動車業界の設備投資を背景に事業を伸ばしており、技術系を中心にキャリア採用を継続的に実施しています。一般消費者向けの製品を持たないBtoB企業のため転職市場での知名度は限定的ですが、業界内では世界最大手クラスの存在感があります。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>機械設計・電気制御・ソフトウェア・システムエンジニアリングなど技術系の募集が中心。</li>
            <li>プロジェクト管理、法人営業、保守・アフターサービスなどの職種も募集される。</li>
            <li>グローバル展開が進んでおり、海外事業に関わる機会や語学力を活かせるポジションもある。</li>
            <li>募集職種・要件は時期により変動するため、公式採用サイトでの最新確認が必須。</li>
          </ul>
        </div>

        {/* 求められる人材 */}
        <h2>ダイフクで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "専門領域での実務経験",
              desc: "機械・電気・制御・ソフトウェアなど、応募職種に直結する設計・開発・エンジニアリングの経験が評価されます。マテハン未経験でも、産業機械・FA・物流システムなど近接領域の経験は強みになります。",
            },
            {
              title: "顧客課題を解決する提案力",
              desc: "顧客の生産・物流現場の課題をヒアリングし、最適なシステムを提案・構築する仕事が多いため、課題解決志向とコミュニケーション力が重視されます。",
            },
            {
              title: "グローバル対応力",
              desc: "海外売上比率が高く、海外拠点や海外顧客と関わる機会があります。語学力や異文化環境での協働経験は歓迎される傾向にあります。",
            },
            {
              title: "長期的にものづくりに向き合う姿勢",
              desc: "大規模な設備・システムを扱うため、プロジェクトが長期にわたることも多く、腰を据えて技術と向き合える人材が求められます。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* 選考フロー */}
        <h2>ダイフクの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる専門経験・スキルとの適合性が確認されます。公式採用サイトまたは転職エージェント経由で応募します。" },
            { step: 2, title: "一次面接", desc: "現場の技術者・マネージャーとの面接。これまでの実務経験や専門スキル、応募動機が問われます。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門長・役員クラスとの面接。カルチャーフィットや長期的なキャリアビジョン、グローバル事業への適応などが確認されます。" },
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
        <h2>ダイフクの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-3">
            有価証券報告書における提出会社の平均年間給与は約917万円（2025年12月期）です。ただしこれは<strong className="text-navy">総合職・技術職・一般職などを含む全社平均</strong>であり、次の点に注意が必要です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>職種（技術・営業・管理部門等）や役職によって年収レンジは大きく異なる。</li>
            <li>年齢・勤続年数が上がるほど平均は上振れする傾向がある（平均年齢約41.6歳・平均勤続約14.7年）。</li>
            <li>中途入社時の提示額は、これまでの経験・スキル・応募ポジションによって決まる。</li>
            <li>賞与は業績に連動するため、決算状況により変動する。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。
          </p>
        </div>

        {/* おすすめ転職エージェント */}
        <h2>ダイフク転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          BtoBメーカーの技術・エンジニアリング職は非公開求人が多いため、複数のエージェントに登録して求人情報を広く集めるのが有効です。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級で、メーカー・産業機械系の求人も幅広く扱います。非公開求人の紹介を受けられる可能性があります。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや技術系専門職に強み。BtoBメーカーの専門ポジションやグローバル求人の紹介に定評があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用でき、メーカー・エンジニア求人が充実。ダイフク以外の同業も含めて比較できます。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス・スカウト型。管理職や専門性の高いポジションの情報収集に向いています。" },
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
        <h2>ダイフク転職 よくある質問</h2>
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
            ダイフク転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            非公開求人の多い専門職は、転職エージェントの活用が近道です。まずは情報収集から始めましょう。
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
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              HOYA転職ガイド
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
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの口コミを見る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
