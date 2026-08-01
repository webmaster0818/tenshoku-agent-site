import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヤマハ発動機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ヤマハ発動機（証券コード7272）への転職を有価証券報告書などの一次データで解説。平均年間給与は834万7,789円（2025年12月期・有報／提出会社）。楽器のヤマハ（7951）とは別法人です。キャリア採用の状況、求められる人材、選考の考え方をまとめました。",
  openGraph: {
    title: "ヤマハ発動機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ヤマハ発動機（7272）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。楽器のヤマハとは別法人。",
  },
};

const faqData = [
  {
    "q": "ヤマハ発動機の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は834万7,789円（2025年12月期・提出会社単体、賞与及び基準外賃金を含む）です。同社は12月決算のため、3月決算の企業とは対象期間が異なる点に注意してください。職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "ヤマハ発動機と楽器のヤマハは同じ会社ですか？",
    "a": "別の会社です。ヤマハ発動機（証券コード7272）は二輪車・マリン製品などの輸送用機器メーカーで、楽器・音響のヤマハ株式会社（証券コード7951）とは別の上場法人です（1955年にヤマハから分離独立）。平均年収などのデータも別々に開示されており、混同しないよう注意が必要です。"
  },
  {
    "q": "ヤマハ発動機は中途採用を行っていますか？",
    "a": "公式採用サイトにキャリア採用のページがありますが、2026年8月1日時点の確認では「現在、キャリア採用の募集は行っておりません。募集再開の際は、当サイトにてご案内いたします」と案内されていました。中長期的な転職を検討する方向けのキャリア登録やLINEでの採用情報配信は用意されています。最新の募集状況は公式サイトでご確認ください。"
  },
  {
    "q": "ヤマハ発動機の決算期はいつですか？",
    "a": "12月決算です（2025年12月期＝第91期）。多くの日本企業と異なり3月決算ではないため、平均年収などの「期」の表記を比較する際は注意してください。"
  },
  {
    "q": "ヤマハ発動機の平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は18.1年（2025年12月期・提出会社）、平均年齢は42.7歳です。単体従業員数は12,082人、連結では55,176人の規模です。"
  },
  {
    "q": "本社はどこですか？",
    "a": "静岡県磐田市新貝2500です。二輪車・マリン（船外機）・ロボティクスなどの事業を展開しており、勤務地は応募ポジションにより異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ヤマハ発動機への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/yamaha-motor/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ヤマハ発動機" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ヤマハ発動機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ヤマハ発動機（証券コード7272）は、二輪車・マリン（船外機）・ロボティクスなどを手がける静岡県磐田市本社の輸送用機器メーカーです。楽器・音響のヤマハ株式会社（7951）とは別の上場法人（1955年に分離独立）で、12月決算という点も特徴です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ヤマハ発動機転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は834万7,789円（2025年12月期・有価証券報告書・提出会社単体。賞与及び基準外賃金を含む）。有報に珍しく円単位まで開示されている。</li>
            <li><strong>重要：楽器・音響のヤマハ株式会社（7951）とは別法人。</strong>給与・従業員データも別々に開示されているため混同に注意。</li>
            <li>12月決算（2025年12月期＝第91期）。3月決算企業と期の表記がずれる点に注意。</li>
            <li>単体12,082人・連結55,176人。平均勤続18.1年と長期雇用型。2025年12月期の連結売上収益は2兆5,342億円。</li>
            <li>2026年8月1日時点でキャリア採用は募集停止中（公式サイトに「募集再開の際は当サイトで案内」と記載）。キャリア登録・LINE配信で再開を待つ形。</li>
          </ul>
        </div>

        <h2>ヤマハ発動機の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ヤマハ発動機（楽器・音響のヤマハ株式会社〈7951〉とは別法人）" },
                { label: "証券コード", value: "7272（東証プライム）" },
                { label: "本社", value: "静岡県磐田市新貝2500" },
                { label: "事業内容", value: "二輪車・マリン（船外機）・アウトドアランドビークル・ロボティクス・金融サービス等の輸送用機器事業" },
                { label: "決算期", value: "12月（2025年12月期＝第91期。3月決算ではない）" },
                { label: "平均年間給与", value: "834万7,789円（2025年12月期・有価証券報告書／提出会社。賞与及び基準外賃金を含む）" },
                { label: "平均年齢", value: "42.7歳（2025年12月31日現在・提出会社）" },
                { label: "平均勤続年数", value: "18.1年（同・提出会社）" },
                { label: "従業員数", value: "単体12,082人／連結55,176人（臨時11,928人は外書）" },
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
          ※数値は有価証券報告書（第91期・2026年3月23日提出）の提出会社データに基づく全社平均です。単体従業員数は前期末から1,153名増で、有報によれば2025年1月1日付のヤマハモーターエレクトロニクスの吸収合併等が主因です。直近5期の推移（万円丸め）は726万円→795万円→812万円→817万円→834万円（2021年12月期〜2025年12月期）。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ヤマハ発動機の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月1日時点で、ヤマハ発動機の<a href="https://global.yamaha-motor.com/jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>には<a href="https://global.yamaha-motor.com/jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用ページ</a>がありますが、「現在、キャリア採用の募集は行っておりません。募集再開の際は、当サイトにてご案内いたします。」と案内されていました。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用サイトではランドモビリティ事業・ロボティクス事業・IT本部といった部門紹介があり、キャリア採用はこれらの部門を中心に行われてきたことがうかがえる。</li>
            <li>募集停止中の受け皿として、情報収集や中長期的な転職を検討する方向けの「キャリア登録」と、LINEでの採用情報配信が用意されている。</li>
            <li>募集再開時に備え、キャリア登録やエージェント経由での情報収集を先行させておくのが現実的な動き方。</li>
            <li>※2026年8月1日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ヤマハ発動機で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "輸送用機器・機械系の実務経験", desc: "二輪車・マリン・ロボティクスなど機械×電子の製品群を持つため、設計開発・生産技術・品質保証などの経験が評価されやすい領域です。" },
            { title: "電動化・ロボティクスへの対応力", desc: "モビリティの電動化やロボティクス事業の広がりに伴い、電動駆動・制御・ソフトウェア領域の専門性の重要度が増しているとみられます。" },
            { title: "グローバルに働く素地", desc: "連結55,176人の多くが海外を含むグループで働く事業構造。海外拠点・市場と連携して進める仕事への適応力が問われます。" },
            { title: "長期で技術を磨く志向", desc: "平均勤続18.1年という数字が示すように、腰を据えて専門性を積み上げる文化との相性が重視されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ヤマハ発動機の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※2026年8月1日時点でキャリア採用は募集停止中のため、公式の中途向け選考フローは確認できませんでした。以下は中途採用における一般的な選考の流れの一例です。募集再開時の職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "キャリア登録・応募", desc: "公式サイトのキャリア登録やエージェント経由で募集再開の情報を受け取り、募集職種に応募します。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャーや部門責任者との面接。技術職は専門領域の深掘り、事業への共感が中心になるとみられます。" },
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

        <h2>ヤマハ発動機の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>834万7,789円（2025年12月期）は単体全社員の平均で、賞与及び基準外賃金を含む値。職種（開発・製造・営業・スタッフ）で水準は異なる。</li>
            <li>直近5期（12月期）は726万円→795万円→812万円→817万円→834万円と推移。</li>
            <li>平均勤続18.1年・平均年齢42.7歳の長期雇用型。楽器のヤマハ（7951）の開示数値とは別ものなので比較時は注意。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ヤマハ発動機転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式のキャリア採用が停止中の時期は、非公開求人や再開情報をエージェント経由で押さえるのが有効です。複数登録で情報を広く集めましょう。</p>
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

        <h2>ヤマハ発動機転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ヤマハ発動機転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。キャリア採用の再開情報も含め、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/yamaha/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤマハ（楽器・別法人）転職ガイド</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/denso/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">デンソー転職ガイド</Link>
            <Link href="/company/fanuc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ファナック転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
