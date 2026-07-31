import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファナックへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ファナック（証券コード6954）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,144万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "ファナックへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ファナック（6954）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ファナックの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約1,144万円（2026年3月期・提出会社単体）です。前期（2025年3月期）は約1,163万円でした。FA・産業用ロボット分野の企業として高めの水準ですが、職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "ファナックは中途採用を行っていますか？",
    "a": "はい。技術系を中心にキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "ファナックの転職難易度は高いですか？",
    "a": "知名度の高い企業で、専門性を持つ経験者採用が中心です。FA・産業用ロボットや近接領域での実務経験を持つ方が有利です。"
  },
  {
    "q": "ファナックの平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は約15.3年（2026年3月期・提出会社）です。平均年齢は約40.0歳です。"
  },
  {
    "q": "ファナックの本社はどこですか？",
    "a": "本社は山梨県南都留郡忍野村です。事業所・工場勤務の職種もあり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファナックへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/fanuc/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ファナック" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ファナックへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ファナック（証券コード6954）は、工作機械用CNC（数値制御装置）や産業用ロボット、ロボマシンを手がける、FA・ロボットで世界トップクラスのメーカーです。山梨県忍野村の広大な拠点と高収益体質で知られます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ファナック転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,144万円（2026年3月期・有価証券報告書・単体）。製造業として高水準。</li>
            <li>CNC・産業用ロボットで世界トップクラス。高収益体質で知られる。</li>
            <li>平均年齢40.0歳・平均勤続15.3年。忍野村の拠点を軸にした独自の企業文化。</li>
            <li>制御・ソフト・機械設計・サービスエンジニアなどの技術職が中心。</li>
          </ul>
        </div>

        <h2>ファナックの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ファナック" },
                { label: "証券コード", value: "6954（東証プライム）" },
                { label: "本社", value: "山梨県南都留郡忍野村" },
                { label: "事業内容", value: "FA（工作機械用CNC等）・産業用ロボット・ロボマシンの開発・製造・販売" },
                { label: "平均年間給与", value: "約1,144万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約40.0歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約15.3年（同・提出会社）" },
                { label: "従業員数", value: "4,842名（提出会社単体）" },
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

        <h2>ファナックの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">ファナックは公式に「経験者採用」を行っており、<a href="https://www.fanuc.co.jp/ja/employ/career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">経験者採用ページ</a>と<a href="https://www.fanuc.co.jp/ja/employ/infomation/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集職種一覧</a>が公開されています。募集は「研究開発」「セールス・サービス」「製造」「コーポレート・その他」の4カテゴリで、応募は当社メールアドレス（recruit@fanuc.co.jp）宛に履歴書・職務経歴書を送付するエントリー方式です。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>研究開発：サーボアンプ・パルスコーダ開発業務／ハードウェア開発業務／機械設計業務／ソフトウェア開発業務／ロボカット加工技術開発業務／品質管理業務 ほか。</li>
            <li>セールス・サービス：ロボットセールス業務／ロボット技術サポート業務／FAセールス推進業務／フィールドサービスエンジニア。</li>
            <li>製造：ロボットの組立工程改善業務／ロボットの試験工程改善業務／機械加工部技術業務。コーポレート・その他：アプリケーション開発業務／Web開発業務／人事制度企画・運用業務／購買・調達業務 ほか。</li>
            <li>※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ファナックで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "制御・自動化の技術力", desc: "CNC・サーボ・ロボット制御など、応募領域に沿った制御／ソフトの技術力が重視されます。" },
            { title: "信頼性を追う姿勢", desc: "顧客の生産ラインを止めない高信頼な製品づくりへのこだわりが評価されます。" },
            { title: "現場・拠点への適応", desc: "忍野村を中心とした拠点環境で腰を据えて働ける適応力が問われます。" },
            { title: "グローバル保守の視点", desc: "世界中で稼働する装置を支えるため、サービス・保守の視点が活きます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ファナックの選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用ページ記載の流れ（2026年7月31日確認）。詳細・最新情報は公式採用サイトでご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "エントリー", desc: "当社メールアドレス（recruit@fanuc.co.jp）宛に履歴書・職務経歴書を送付します。" },
            { step: 2, title: "書類選考", desc: "送付した履歴書・職務経歴書をもとに選考が行われます。" },
            { step: 3, title: "適性検査（Web）", desc: "Web形式の適性検査を受検します。" },
            { step: 4, title: "面接", desc: "複数回実施されます（回数は部署により異なります）。基本はオンラインでの実施です。" },
            { step: 5, title: "最終面接", desc: "原則、本社（山梨県忍野村）にて対面面接となります。" },
            { step: 6, title: "内定", desc: "選考通過後、内定となります。" },
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

        <h2>ファナックの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,144万円（2026年3月期）は単体全社員の平均。職種・役職で水準は異なる。</li>
            <li>設備投資サイクルで業績が変動し、処遇に反映されやすい。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ファナック転職で活用したい転職エージェント</h2>
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

        <h2>ファナック転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ファナック転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/toyota/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">トヨタ自動車転職ガイド</Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ソニー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
