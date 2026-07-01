import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ニデック（旧日本電産）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ニデック（旧日本電産／証券コード6594）への転職を有価証券報告書などの一次データで解説。平均年間給与は約760万円（2025年3月期・有報／提出会社）。精密モーター世界最大手の中途採用、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "ニデック（旧日本電産）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description:
      "ニデック（6594）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "ニデック（旧日本電産）の平均年収はいくらですか？",
    a: "有価証券報告書によると、提出会社（単体）の平均年間給与は約760万円（2025年3月期）です。前期の2024年3月期は約720万円でした。これは持株会社である提出会社（単体）の全社員平均であり、グループ各社や職種・年齢・役職によって実際の水準は異なります。",
  },
  {
    q: "ニデックは中途採用を行っていますか？",
    a: "はい、ニデックはグループ全体で中途採用（キャリア採用）を積極的に行っています。モーター・車載・精密機器などの技術系を中心に、M&Aで拡大したグループ各社でも幅広い職種の募集があります。応募先の会社・職種は公式採用サイトでご確認ください。",
  },
  {
    q: "ニデックの転職難易度は高いですか？",
    a: "精密小型モーターで世界トップシェアを持つグローバル企業で、専門性の高いポジションでは相応の経験・スキルが求められます。一方でグループが大きく事業領域も広いため、技術・研究・営業・管理部門など多様な職種で募集があり、経験を活かせる余地は大きい企業です。",
  },
  {
    q: "ニデックの事業内容は何ですか？",
    a: "HDD用などの精密小型モーターから、車載（EV駆動用モーター等）、家電・商業・産業用モーター、機器装置、電子・光学部品まで、「回るもの・動くもの」を軸に幅広く手がける総合モーターメーカーです。積極的なM&Aで事業を拡大してきたことでも知られます。",
  },
  {
    q: "ニデックの選考ではどのような点が見られますか？",
    a: "職種にもよりますが、応募領域での専門経験・スキルに加え、スピード感を持って成果を出す姿勢、グローバル環境への適応力、変化の激しい環境での実行力などが評価される傾向にあります。応募する会社・事業の特性を理解しておくとよいでしょう。",
  },
  {
    q: "ニデックの勤務地はどこですか？",
    a: "本社は京都市南区にあります。国内外に多数の拠点・グループ会社があり、応募先の会社・職種によって勤務地や転勤の可能性が異なります。応募時に確認しましょう。",
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

export default function NidecCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "ニデック" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ニデック（旧日本電産）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ニデック（証券コード6594、旧・日本電産）は、精密小型モーターで世界トップシェアを持ち、車載・産業・家電向けなど幅広くモーター技術を展開するグローバルメーカーです。
            本記事では、有価証券報告書などの公開一次データをもとに、ニデックの平均年収・中途採用の状況・選考フロー・求められる人材を客観的に整理します。
          </p>
        </div>

        {/* 結論 */}
        <h2>結論：ニデック転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体・持株会社）の平均年間給与は<strong className="text-navy">約760万円（2025年3月期・有価証券報告書）</strong>。前期（2024年3月期）は約720万円。</li>
            <li>精密モーター世界最大手。M&Aで事業領域が広く、グループ全体で技術系を中心に多様な採用ニーズがある。</li>
            <li>専門職では相応の経験・スキルが必要だが、事業の幅が広く経験を活かせる余地は大きい。</li>
            <li>年収は提出会社の全社平均であり、グループ会社・職種・年代・役職によって実際の水準は大きく異なる点に注意。</li>
          </ul>
        </div>

        {/* 基本データ（有報） */}
        <h2>ニデックの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ニデック株式会社（NIDEC CORPORATION）※旧・日本電産" },
                { label: "証券コード", value: "6594（東証プライム）" },
                { label: "本社", value: "京都府京都市南区久世殿城町338" },
                { label: "事業内容", value: "精密小型モーター、車載（EV駆動用モーター等）、家電・商業・産業用モーター、機器装置、電子・光学部品等の開発・製造・販売" },
                { label: "平均年間給与", value: "約760万円（2025年3月期・有価証券報告書／提出会社）※前期・2024年3月期は約720万円" },
                { label: "平均年齢", value: "約42.2歳（2025年3月期・提出会社）" },
                { label: "平均勤続年数", value: "約13.3年（同・提出会社）" },
                { label: "従業員数", value: "約1,714名（同・提出会社単体、持株会社）／連結は多数・要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。ニデックは持株会社体制のため、提出会社（単体）の従業員数は連結に比べ少なく、グループ各社では年収・条件が異なります。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        {/* 中途採用の状況 */}
        <h2>ニデックの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            ニデックはEV向け駆動モーターなど成長分野への投資を進めており、グループ全体で技術系を中心に中途採用を継続しています。M&Aで多様な事業を取り込んでいるため、応募先の会社・事業によって求められるスキルや働き方が異なるのが特徴です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>モーター設計、電気・機械・制御、材料、生産技術などの技術・研究職。</li>
            <li>車載・産業向けの法人営業、事業企画、購買・SCMなどの職種。</li>
            <li>経理・財務・法務・人事・情報システムなどのコーポレート職。</li>
            <li>応募先の会社・募集職種は時期により変動するため、公式採用サイトでの最新確認が必須。</li>
          </ul>
        </div>

        {/* 求められる人材 */}
        <h2>ニデックで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "応募領域での専門経験",
              desc: "モーター・電気・機械・制御・材料など、応募職種に直結する設計・開発・生産技術の経験が評価されます。自動車部品・電機・精密など近接領域の経験も強みになります。",
            },
            {
              title: "スピードと実行力",
              desc: "スピード経営で知られる企業文化があり、素早く意思決定して成果につなげる実行力が重視される傾向にあります。",
            },
            {
              title: "グローバル対応力",
              desc: "海外売上比率が高く海外拠点も多いため、語学力や異文化環境での協働経験が歓迎されます。",
            },
            {
              title: "変化に適応する柔軟性",
              desc: "M&Aや事業ポートフォリオの変化が多い環境のため、変化を前向きに捉えて適応できる柔軟性・主体性が求められます。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* 選考フロー */}
        <h2>ニデックの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">
          ※以下は中途採用における一般的な選考の流れの一例です。応募先の会社・職種・時期により異なります。
        </p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる専門経験・スキルとの適合性が確認されます。公式採用サイトまたは転職エージェント経由で応募します。" },
            { step: 2, title: "一次面接", desc: "現場の技術者・マネージャーとの面接。これまでの実務経験や専門スキル、応募動機が問われます。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門長・役員クラスとの面接。カルチャーフィットや長期的なキャリアビジョン、グローバル・変化への適応が確認されます。" },
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
        <h2>ニデックの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-3">
            有価証券報告書における提出会社（持株会社・単体）の平均年間給与は約760万円（2025年3月期）です。ただしこれは<strong className="text-navy">提出会社の全社員平均</strong>であり、次の点に注意が必要です。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>ニデックは持株会社体制のため、提出会社の数値はグループ全体を代表するものではなく、応募先のグループ会社によって年収・条件が異なる。</li>
            <li>職種・役職によって年収レンジは大きく異なる。</li>
            <li>平均年齢が約42.2歳・平均勤続約13.3年で、年齢・役職が上がるほど平均は上振れする。</li>
            <li>中途入社時の提示額は、これまでの経験・スキル・応募ポジションによって決まる。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            正確な想定年収は、応募先の会社・ポジションごとに転職エージェントを通じて確認するのが確実です。
          </p>
        </div>

        {/* おすすめ転職エージェント */}
        <h2>ニデック転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          メーカーの技術・グローバル求人は非公開で扱われることが多いため、複数のエージェントに登録して情報を広く集めるのが有効です。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "JACリクルートメント", href: "/review/jac/", desc: "外資系・グローバル企業や技術系専門職に強み。ニデックのようなグローバルメーカーの専門ポジションと相性が良いです。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。メーカー・自動車・電機系の求人を幅広く扱い、非公開求人の紹介も期待できます。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用でき、メーカー・エンジニア求人が充実。同業他社も含めて比較できます。" },
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
        <h2>ニデック転職 よくある質問</h2>
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
            ニデック転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            グループが大きく求人も多様。転職エージェントを活用して、自分に合う会社・ポジションを見極めましょう。
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
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              HOYA転職ガイド
            </Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              トヨタ転職ガイド
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
