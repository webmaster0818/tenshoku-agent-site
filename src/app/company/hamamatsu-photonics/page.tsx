import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "浜松ホトニクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "浜松ホトニクス（証券コード6965）への転職を有価証券報告書などの一次データで解説。平均年間給与は約728万円（2025年9月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/hamamatsu-photonics/" },
  openGraph: {
    title: "浜松ホトニクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "浜松ホトニクス（6965）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "浜松ホトニクスの平均年収はいくらですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均年間給与は約728万円（2025年9月期・提出会社単体）です。同社は9月末決算のため、これが本記事執筆時点の最新確定値です。従業員4,262名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "浜松ホトニクスは中途採用を行っていますか？",
    "a": "公式サイトの採用情報ページにはキャリア採用（中途採用）のセクションが設けられていますが、2026年8月12日の確認時点では「現在募集しているキャリア採用の情報はありません。」と記載されていました。新卒採用（通年採用を含む）と障がい者採用の案内はあります。募集状況は変動するため、最新の情報は公式サイトでご確認ください。"
  },
  {
    "q": "浜松ホトニクスの転職難易度は高いですか？",
    "a": "確認時点ではキャリア採用の募集掲載がなく、公式窓口経由の中途入社の機会は限られているとみられます。光電子増倍管や光半導体素子など光技術に特化した製品群を手がけるため、募集が出た場合は光学・半導体・電子デバイス関連の専門経験を持つ方が有利と考えられます。転職エージェント経由の求人の有無を確認するのも一つの方法です。"
  },
  {
    "q": "浜松ホトニクスの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、平均勤続年数は15.9年、平均年齢は39.8歳（2025年9月期・提出会社）です。"
  },
  {
    "q": "浜松ホトニクスの従業員数はどのくらいですか？",
    "a": "有価証券報告書（IR BANK掲載値・2026年8月12日確認）によると、提出会社単体で4,262名（2025年9月期）です。"
  },
  {
    "q": "浜松ホトニクスの本社はどこですか？",
    "a": "公式サイトの会社情報によると、本社は静岡県浜松市中央区砂山町325-6です。応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "浜松ホトニクスへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/hamamatsu-photonics/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "浜松ホトニクス" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            浜松ホトニクスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            浜松ホトニクス（証券コード6965）は、光電子増倍管・イメージ機器・光源・光半導体素子・画像処理計測装置・レーザ装置などを手がける浜松本社の光技術メーカーです。公式採用情報にはキャリア採用のセクションがあるものの、確認時点では募集掲載がありませんでした。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：浜松ホトニクス転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約728万円（2025年9月期・有価証券報告書。IR BANK掲載値・2026年8月12日確認）。提出会社単体4,262名の全従業員平均。</li>
            <li>同社は9月末決算のため、2025年9月期が本記事執筆時点の最新確定値。</li>
            <li>公式サイトにキャリア採用のセクションはあるが、2026年8月12日確認時点では「現在募集しているキャリア採用の情報はありません。」との記載。</li>
            <li>平均年齢39.8歳・平均勤続15.9年。光電子増倍管や光半導体素子など光技術に特化した製品群を展開。</li>
          </ul>
        </div>

        <h2>浜松ホトニクスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "浜松ホトニクス株式会社" },
                { label: "証券コード", value: "6965" },
                { label: "本社", value: "静岡県浜松市中央区砂山町325-6" },
                { label: "事業内容", value: "光電子増倍管、イメージ機器、光源、光半導体素子、画像処理・計測装置、レーザ装置等の製造販売" },
                { label: "平均年間給与", value: "約728万円（2025年9月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "決算期", value: "9月末決算（2025年9月期が執筆時点の最新確定値）" },
                { label: "平均年齢", value: "39.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "15.9年（同・提出会社）" },
                { label: "従業員数", value: "4,262名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年8月12日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>浜松ホトニクスの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、浜松ホトニクスの<a href="https://www.hamamatsu.com/jp/ja/our-company/recruit.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトの採用情報ページ</a>にはキャリア採用（中途採用）のセクションが設けられていますが、確認時点では募集情報の掲載はありませんでした。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報ページのキャリア採用欄には「現在募集しているキャリア採用の情報はありません。」と記載されていた（2026年8月12日確認）。</li>
            <li>新卒採用（通年採用を含む）と障がい者採用の案内は用意されている。</li>
            <li>新卒採用サイトでは技術系総合職・事務系総合職の2職種が掲載されている。</li>
            <li>キャリア採用のセクション自体は常設されているため、募集が開始された場合は同ページに掲載されるとみられる。中途で入社するルートとしては、転職エージェント経由の求人の有無を確認するのも一つの方法。</li>
            <li>※募集状況は変動するため、最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>浜松ホトニクスで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "光技術・光デバイスの専門性", desc: "光電子増倍管や光半導体素子など光技術に特化した製品を手がけるため、光学・半導体・電子デバイス分野の専門経験が評価されます。" },
            { title: "研究開発への志向", desc: "光の可能性を追究する研究開発型の事業構造のため、技術を深掘りし成果につなげる研究開発志向が求められます。" },
            { title: "ものづくり・品質への意識", desc: "医用・計測・産業用途など高い信頼性が求められる製品群であり、品質への意識と丁寧なものづくりの姿勢が重視されます。" },
            { title: "腰を据えて取り組む姿勢", desc: "平均勤続15.9年と長期就業の傾向がうかがえるデータであり、長期的な視点で技術・事業に取り組む姿勢が適します。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>浜松ホトニクスの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※確認時点では中途採用の募集掲載がなく、公式の中途選考フローは確認できませんでした。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
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

        <h2>浜松ホトニクスの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約728万円（2025年9月期）は提出会社単体・全従業員4,262名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>9月末決算のため、この数値は2025年9月30日現在のもの。2026年9月期の有報提出までは2025年9月期が最新確定値です。</li>
            <li>平均年齢39.8歳・平均勤続15.9年の構成での平均値である点も踏まえて読む必要があります。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>浜松ホトニクス転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">確認時点で公式のキャリア採用募集がないため、エージェント経由で求人の有無を確認し情報を広く集めるのが有効です。</p>
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

        <h2>浜松ホトニクス転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">浜松ホトニクス転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式の採用情報とエージェントの両方で、募集の有無と実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体年収ランキング</Link>
            <Link href="/company/lasertec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">レーザーテック転職ガイド</Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">HOYA転職ガイド</Link>
            <Link href="/company/horiba/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">堀場製作所転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
