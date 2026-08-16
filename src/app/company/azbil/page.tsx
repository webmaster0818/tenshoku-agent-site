import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "アズビルへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "アズビル（証券コード6845）への転職を有価証券報告書などの一次データで解説。平均年間給与は約918万円（2026年3月期・有報／提出会社）で直近2年で大きく上昇。計測と制御の専門メーカーのキャリア採用窓口・選考の考え方をまとめました。",
  alternates: { canonical: "/company/azbil/" },
  openGraph: {
    title: "アズビルへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "アズビル（6845）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "アズビルの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均年間給与は約918万円（2026年3月期・提出会社単体）です。761万円（2024年3月期）→833万円→918万円と直近2年で計157万円上昇しています。従業員5,143名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "アズビルは中途採用を行っていますか？",
    a: "はい。公式サイトにキャリア採用のページがあり、株式会社ステラスが運営する専用キャリア採用サイト（azbil.recruit-js.jp）で募集中の求人確認とエントリーができます（2026年8月16日確認）。社員紹介によるリファラル採用の受付も同サイトで案内されています。",
  },
  {
    q: "アズビルはどんな会社ですか？",
    a: "「計測と制御」の技術を基盤に、ビルディングオートメーション（ビルの空調制御・省エネ）、アドバンスオートメーション（工場・プラントの制御）、ライフオートメーション（ガス・水道等）の3事業を展開する専門メーカーです。旧社名は山武（やまたけ）で、創業1906年・設立1949年の老舗です。",
  },
  {
    q: "アズビルの雇用条件はどうなっていますか？",
    a: "公式キャリア採用ページでは、雇用形態は正社員もしくは契約社員、給与は経験・能力・資格要件・年齢を考慮して優遇、勤務時間は1日7時間55分と案内されています（2026年8月16日確認）。勤務地は東京本社のほか神奈川・札幌・仙台・名古屋・大阪・博多などです。",
  },
  {
    q: "アズビルの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均勤続年数は19.8年、平均年齢は46歳（2026年3月期・提出会社）です。",
  },
  {
    q: "アズビルの本社はどこですか？",
    a: "公式サイトの会社概要によると、本社は東京都千代田区丸の内二丁目6番1号 丸の内パークビルディング25階です。応募ポジションにより勤務地は異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "アズビルへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-16",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/azbil/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "アズビル" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            アズビルへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            アズビル（証券コード6845・旧 山武）は、「計測と制御」を基盤にビル・工場・ライフラインの自動化を手がける専門メーカーです。
            平均年間給与は直近2年で大きく上昇しており、キャリア採用の専用サイトで通年の募集が確認できます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：アズビル転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約918万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年8月16日確認）。提出会社単体5,143名の全従業員平均。</li>
            <li>761万円→833万円→918万円と直近2年で計157万円の上昇。当サイト収録メーカーの中でも上昇幅が大きい。</li>
            <li>キャリア採用は専用サイト（ステラス運営・azbil.recruit-js.jp）で通年エントリー可能。リファラル採用の窓口もある（2026年8月16日確認）。</li>
            <li>ビル空調制御・工場計装という安定需要の領域で、平均勤続19.8年と長期就業の傾向。</li>
            <li>勤務時間1日7時間55分・勤務地は東京本社ほか全国主要都市。</li>
          </ul>
        </div>

        <h2>アズビルの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "アズビル株式会社（旧 株式会社山武）" },
                { label: "証券コード", value: "6845" },
                { label: "本社", value: "東京都千代田区丸の内二丁目6番1号 丸の内パークビルディング25階" },
                { label: "創業・設立", value: "創業1906年12月1日・設立1949年8月22日" },
                { label: "事業内容", value: "ビルディングオートメーション、アドバンスオートメーション（工場・プラント制御）、ライフオートメーションの3事業" },
                { label: "平均年間給与", value: "約918万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月16日確認）" },
                { label: "直近3年の推移", value: "761万円（2024年3月期）→833万円（2025年3月期）→918万円（2026年3月期）" },
                { label: "平均年齢", value: "46歳（同・提出会社）" },
                { label: "平均勤続年数", value: "19.8年（同・提出会社）" },
                { label: "従業員数", value: "5,143名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年8月16日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>アズビルの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月16日時点で、<a href="https://www.azbil.com/jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトのキャリア採用ページ</a>から専用採用サイトへの導線があります。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募受付は株式会社ステラスが運営するキャリア採用サイト（azbil.recruit-js.jp）。募集中の求人確認とエントリーが可能。</li>
            <li>雇用形態は正社員もしくは契約社員。給与は経験・能力・資格要件・年齢を考慮して優遇と明記。</li>
            <li>勤務時間は1日7時間55分。勤務地は東京本社のほか神奈川・札幌・仙台・名古屋・大阪・博多など全国。</li>
            <li>社員紹介によるリファラル採用のエントリーも同サイトで受付中。</li>
            <li>※2026年8月16日に公式サイトで確認。募集状況は変動するため最新は採用サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>アズビルで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "計測・制御(計装)分野の専門性", desc: "ビル空調制御・プラント計装・バルブ/センサ関連の経験は同社の中核領域に直結します。電気・機械・情報系の技術バックグラウンドが広く活きます。" },
            { title: "現場と長く向き合う姿勢", desc: "建物や工場のライフサイクルに寄り添う保守・サービスビジネスが強みのため、顧客現場での継続的な課題解決に向き合える人が適合します。" },
            { title: "省エネ・脱炭素への関心", desc: "ビルの省エネソリューションが主力の一つで、エネルギーマネジメントや脱炭素分野への関心・経験が事業方向と合致します。" },
            { title: "職種に対応した実務経験", desc: "職種別の求人にエントリーする方式のため、募集要件と自分の経験の対応を職務経歴書で具体的に示すことが重視されます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>アズビルの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用サイトからエントリー", desc: "専用キャリア採用サイトで求人を確認し、希望ポジションにエントリーします。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等との面接。計装・制御領域の実務経験や顧客対応の経験が中心です。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。経験・能力・資格要件を考慮した条件が提示されます。" },
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

        <h2>アズビルの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約918万円（2026年3月期）は提出会社単体・全従業員5,143名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>直近2年で計157万円上昇していますが、平均年間給与には賞与等の変動要素が含まれます（上昇の内訳は有報の記載範囲では特定できないため当サイトでは断定しません）。</li>
            <li>平均年齢46歳・平均勤続19.8年という長期勤続の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>公式の募集要項では給与は経験・能力・資格要件・年齢を考慮して優遇と記載されており、中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>アズビル転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用サイトへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。計装・FA・設備関連メーカーの求人も幅広く扱っています。" },
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

        <h2>アズビル転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">アズビル転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式キャリア採用サイトとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/yaskawa/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">安川電機転職ガイド</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/horiba/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">堀場製作所転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
