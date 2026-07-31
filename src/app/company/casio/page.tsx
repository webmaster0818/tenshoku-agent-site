import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "カシオ計算機への転職は難しい？中途採用・平均年収838万円・選考を徹底解説【2026年】",
  description:
    "カシオ計算機（証券コード6952）への転職を有価証券報告書などの一次データで解説。平均年間給与は約838万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "カシオ計算機への転職は難しい？中途採用・平均年収838万円・選考を徹底解説【2026年】",
    description: "カシオ計算機（6952）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "カシオ計算機の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約838万円（2026年3月期・提出会社）で、前期の約814万円から増加しています。大手メーカーとして高めの水準で、職種・役職により実際のレンジは異なります。"
  },
  {
    "q": "カシオ計算機は中途採用を行っていますか？",
    "a": "はい。商品企画・設計開発・品質保証・営業などの職種でキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "カシオ計算機の転職難易度は高いですか？",
    "a": "G-SHOCKをはじめ知名度の高い東証プライム上場メーカーで、応募が集まりやすい企業です。電機・精密機器など製造業での専門経験を持つ方が有利です。"
  },
  {
    "q": "カシオではどんな職種の募集がありますか？",
    "a": "商品企画・設計開発（機構・電気・ソフトウェア）・品質保証・営業などメーカー定番職種の募集が中心です。募集の有無は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都渋谷区本町1-6-2。拠点勤務の職種もあり、応募ポジションにより異なります。"
  },
  {
    "q": "定着率は高いですか？",
    "a": "有報の平均勤続年数は約15.7年（2026年3月期・提出会社）と、上場企業の中でも長い部類です。長く働く社員が多い企業文化がうかがえます。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "カシオ計算機" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            カシオ計算機への転職は難しい？中途採用・平均年収838万円・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            カシオ計算機（証券コード6952）はG-SHOCKなどの時計で知られる東京の大手メーカーです。時計のほか、電卓・電子辞書・電子文具・電子楽器の製造販売を展開しています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：カシオ計算機転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約838万円（2026年3月期・有価証券報告書／提出会社）。前期の約814万円から増加しており、大手メーカーとして高めの水準。</li>
            <li>平均勤続約15.7年・平均年齢約44.6歳と、定着率の高さがうかがえるのが特徴。</li>
            <li>G-SHOCKをはじめとする時計事業に加え、電卓・電子辞書・電子文具・電子楽器と製品群が幅広い。</li>
            <li>商品企画・設計開発・品質保証・営業などメーカー系職種の採用が中心。</li>
          </ul>
        </div>

        <h2>カシオ計算機の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "カシオ計算機" },
                { label: "証券コード", value: "6952（東証プライム）" },
                { label: "本社", value: "東京都渋谷区本町1-6-2" },
                { label: "事業内容", value: "時計（G-SHOCK等）・電卓・電子辞書・電子文具・電子楽器の製造販売" },
                { label: "平均年間給与", value: "約838万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約44.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約15.7年（同・提出会社）" },
                { label: "従業員数", value: "2,053名（同・提出会社単体）／連結は要公式確認" },
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

        <h2>カシオ計算機の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">カシオ計算機は<a href="https://www.casio.co.jp/saiyou/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用ページ</a>から<a href="https://hrmos.co/pages/casio" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式キャリア採用ページ（HRMOS）</a>にリンクしており、「様々な分野で活躍する経験豊富な方を積極的に募集」と公式に記載されています。2026年7月31日確認時点の掲載求人は20件でした。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（求人一覧の公式表記例）：企業法務 / グローバルマーケティングスペシャリスト / プロジェクトマーケティングプランナー / マーケティングテクノロジーエンジニア / 営業職 / 海外管理責任者 / 海外ビジネスプロセス改革業務担当 / 社内システムエンジニア／セキュリティー担当者 / 決算/税務担当者(リーダークラス)（2026年7月31日確認時点）。カテゴリ区分は営業職（海外／国内）・コーポレート職・IT職（DX／社内SE）。</li>
            <li>勤務地：初台本社（東京）が大多数。営業職に仙台オフィス・福岡支店、海外赴任ポジション（シンガポール、中国・上海、メキシコシティ、米ニュージャージー、インド・ニューデリー）の掲載もあり（2026年7月31日確認時点）。</li>
            <li>応募方法：HRMOSの各求人ページから応募する形式。選考プロセスの一覧的な公式記載は確認したページでは見当たらず。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</p>
        </div>

        <h2>カシオ計算機で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "電機・精密機器での実務経験", desc: "設計開発・品質保証・商品企画など、電機・精密機器または近接する製造業での経験が最も評価されます。" },
            { title: "製品品質・ブランドへの意識", desc: "G-SHOCKなど世界的に知られるブランドを扱うため、品質やブランド価値に対する誠実な姿勢が全職種で重視されます。" },
            { title: "部門を跨ぐ調整力", desc: "企画・開発・営業が連携して製品を生み出す体制のため、部門を跨ぐコミュニケーション力が求められます。" },
            { title: "腰を据えて働く姿勢", desc: "平均勤続15.7年という数字が示すように、腰を据えて長く働く文化との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>カシオ計算機の選考フロー（一般的な流れ）</h2>
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

        <h2>カシオ計算機の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約838万円（2026年3月期）は提出会社全社員の平均。前期の約814万円から増加。職種（本社・拠点・営業）で水準は異なる。</li>
            <li>平均勤続15.7年・平均年齢44.6歳の安定雇用型。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>カシオ計算機転職で活用したい転職エージェント</h2>
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

        <h2>カシオ計算機転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">カシオ計算機転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/citizen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">シチズン時計転職ガイド</Link>
            <Link href="/company/brother/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ブラザー工業転職ガイド</Link>
            <Link href="/company/yamaha/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤマハ転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニーグループ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
