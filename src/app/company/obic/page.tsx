import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/obic/" },
  title: "オービックへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "オービック（証券コード4684）への転職を有価証券報告書などの一次データで解説します。平均年間給与は約1,129万円（2026年3月期・有価証券報告書／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "オービックへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "オービック（4684）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説します。",
  },
};

const faqData = [
  {
    "q": "オービックの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約1,129万円（2026年3月期・単体）です。平均年齢約35.8歳でこの水準は、上場SIerの中でも上位に入ります。"
  },
  {
    "q": "オービックは中途採用を行っていますか？",
    "a": "2026年7月31日時点で、公式採用サイトに掲載されている採用区分は新卒採用とインターンシップのみで、中途採用（キャリア採用）の常設窓口は確認できませんでした。中途採用の実施有無は公式サイト上に明記されていないため、最新の募集状況は公式採用ページの更新をご確認ください。"
  },
  {
    "q": "オービックの転職難易度は高いですか？",
    "a": "中途採用の門戸自体が限定的とされるため、募集のタイミングに左右される面が大きいと考えられます。ERP・業務システム領域の経験者には、同業他社も含めて選択肢を広げることをおすすめします。"
  },
  {
    "q": "なぜ平均年収が高いのですか？",
    "a": "自社開発・直販・長期サポートの一貫モデルによる高い利益率が背景にあると説明されています（詳細は同社IR資料をご参照ください）。"
  },
  {
    "q": "どんな事業をしていますか？",
    "a": "統合業務ソフトウェア「OBIC7」を自社開発し、直販でシステムの構築から運用サポートまで一貫して提供しています。"
  },
  {
    "q": "似た環境の会社を探すには？",
    "a": "自社プロダクトを持つ高収益SIer・ERPベンダーが近い環境です。転職エージェントに「自社開発×直販×業務システム」という軸で相談すると非公開求人も含めて紹介を受けられます。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "オービック" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            オービックへの転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/obic.jpg" alt="オービックの公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">オービック 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            オービック（証券コード4684）は統合業務ソフト「OBIC7」を自社開発・直販するシステムインテグレーターで、平均年間給与約1,129万円（2026年3月期・有価証券報告書）とSIer業界でも上位の水準です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">オービック転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">オービックの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">オービックの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">オービックで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">オービックの選考フロー（一般的な流れ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">オービックの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">オービック転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">オービック転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">オービック転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,129万円（2026年3月期・有価証券報告書・単体2,030名）、平均年齢は約35.8歳で、若い年齢構成で高い年収水準を示す代表的なSIerです。</li>
            <li>外注に頼らない自社一貫体制・直販モデルが高収益の源泉となっています。</li>
            <li>採用は新卒中心の方針として知られ、中途採用の門戸は限定的とされています（最新の募集状況は公式採用サイトでご確認ください）。</li>
            <li>転職を検討する場合は、同業他社（自社開発SIer・ERP系）を含めた比較検討をおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">オービックの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "オービック" },
                { label: "証券コード", value: "4684（東証プライム）" },
                { label: "本社", value: "東京都中央区" },
                { label: "事業内容", value: "統合業務ソフトウェア「OBIC7」の開発・販売・導入支援（自社一貫のシステムインテグレーション）" },
                { label: "平均年間給与", value: "約1,129万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約35.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約12.9年（同・提出会社）" },
                { label: "従業員数", value: "2,030名（同・提出会社単体）／連結の人数は公式サイトをご確認ください" },
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

        <h2 id="s3">オービックの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年7月31日時点で、オービックの<a href="https://www.obic.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>は新卒採用・インターンシップが中心で、中途採用（キャリア採用）の常設窓口は掲載されていません。中途入社のルートは公式掲載外の求人が中心になるとみられます。最新の情報は公式採用ページの更新をご確認ください。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>公式採用ページに掲載されている採用区分は「新卒採用」と「インターンシップ」のみです（2026年7月31日確認）。中途採用（キャリア採用）専用ページは確認できませんでした。</li>
            <li>公式サイトの「career」ページ（www.obic.co.jp/career/）は社員のキャリア紹介コンテンツ「私たちのキャリアレポート」であり、中途採用の募集ページではない点にご注意ください。</li>
            <li>採用に関する問い合わせ窓口としては人事部の連絡先が公式に記載されています。</li>
            <li>ERP・会計システム等の業務知識やSI経験は近接他社でも高く評価されます。</li>
            <li>転職エージェント経由で「オービックに近い環境」の非公開求人を探す方法も有効です。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年7月31日に公式採用サイトで確認した内容です。募集状況は変動するため、最新情報は公式サイトでご確認ください。
          </p>
          <p className="text-sm text-text-secondary mt-4">IT・Web系の求人を非公開求人も含めて比較する場合は、IT特化の<FelmatTextLink slug="unison-ex" text="ユニゾンキャリア(PR)" />などの転職エージェントの利用も選択肢となります。</p>
        </div>

        <h2 id="s4">オービックで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "業務システムの知見", desc: "会計・人事・販売管理などの業務知識とシステム化経験は、ERP領域で最も評価される資産です。" },
            { title: "自社開発志向", desc: "外注に出さず自社で開発を完結させる文化のため、上流から下流まで一貫して関わりたい志向が合います。" },
            { title: "顧客と長く向き合う姿勢", desc: "直販・長期サポートのモデルのため、顧客企業と継続的に関わる粘り強さが求められます。" },
            { title: "高い基礎能力と学習意欲", desc: "新卒中心の育成文化では、基礎的な思考力と吸収力を重視する傾向が知られています。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="unison-ex" heading="IT・Web職種の転職サポート(無料)" />

        <h2 id="s5">オービックの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書（開発職はポートフォリオ等）を提出します。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 2, title: "一次面接", desc: "現場のマネージャー等による面接が行われます。主に実務経験・専門スキル・応募動機が確認されます。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスによる面接が行われます。カルチャーフィットや中長期のキャリアビジョンが確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考を通過すると内定となります。入社時期や条件面の確認を経て入社となります。" },
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

        <h2 id="s6">オービックの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,129万円（2026年3月期）は単体全社員の平均です。平均年齢35.8歳でこの水準は、上場SIerの中でも上位に入ります。</li>
            <li>中途採用枠が限定的なため、この水準の年収を目指す場合は、同業の高収益企業も含めて比較することをおすすめします。</li>
            <li>賞与は業績連動のため、変動する可能性があります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">オービック転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数の転職エージェントに登録して求人情報を広く集める方法が有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や、管理職・専門職の情報収集に適しています。" },
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

        <h2 id="s8">オービック転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">オービック転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/it-consultant-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ITコンサル年収ランキング</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニーグループ転職ガイド</Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">サイバーエージェント転職ガイド</Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メルカリ転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
