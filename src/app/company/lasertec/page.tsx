import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "レーザーテックへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "レーザーテック（証券コード6920）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,680万円（2025年6月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/lasertec/" },
  openGraph: {
    title: "レーザーテックへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "レーザーテック（6920）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "レーザーテックの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は16,808,225円（約1,680万円・2025年6月期・提出会社単体）です。同社は6月末決算のため、これが本記事執筆時点（2026年8月1日）の最新確定値です（2026年6月期の有報は2026年9月提出予定）。有報注記のとおり賞与及び時間外手当等の基準外賃金を含む数値で、単体516名の全従業員平均です。"
  },
  {
    "q": "レーザーテックは中途採用を行っていますか？",
    "a": "2026年8月1日時点で、公式サイトの採用情報は新卒採用サイト（2027年卒・2028年卒対象）へのリンクとなっており、中途採用（キャリア採用）の窓口は公式サイト上では確認できませんでした。英語版Careersページにも確認時点で「There are currently no vacancies available」と記載されています。中途で入社するルートは転職エージェント経由の求人などが中心になるとみられます。最新の募集状況は公式サイトでご確認ください。"
  },
  {
    "q": "レーザーテックの転職難易度は高いですか？",
    "a": "単体従業員は516名と少数で、公式サイトに中途採用の常設窓口が確認できないこともあり、募集枠は多くないとみられます。光学・検査装置や半導体関連での専門経験を持つ方が有利です。"
  },
  {
    "q": "レーザーテックの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有報によると平均勤続年数は8.3年、平均年齢は40.1歳（2025年6月期・提出会社）です。"
  },
  {
    "q": "レーザーテックの従業員数はどのくらいですか？",
    "a": "有報によると提出会社単体516名（出向者含まず）、連結1,163名（2025年6月期）です。有報には従業員増加の主な理由として「研究開発、装置立上げ及びサービス体制を強化するための採用による」と記載されています。"
  },
  {
    "q": "レーザーテックの本社はどこですか？",
    "a": "本社は神奈川県横浜市港北区新横浜二丁目10番地1です。応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "レーザーテックへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/lasertec/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "レーザーテック" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            レーザーテックへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            レーザーテック（証券コード6920）は、光応用技術による半導体関連検査・測定装置（EUVマスク欠陥検査装置等）の設計・製造・販売を手がける横浜本社のメーカーです。単体516名という少数の陣容で、有報ベースの平均年間給与は上場メーカーの中でも高い水準にあります。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：レーザーテック転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は16,808,225円・約1,680万円（2025年6月期・有価証券報告書）。提出会社単体516名の全従業員平均で、賞与及び時間外手当等の基準外賃金を含む。</li>
            <li>同社は6月末決算のため最新確定値は2025年6月期。2026年6月期の有報は2026年9月提出予定（2026年8月1日時点では未提出）。</li>
            <li>2026年8月1日時点で、公式サイトの採用情報は新卒採用サイト（27卒・28卒対象）が中心で、中途採用（キャリア採用）の窓口は公式サイト上では確認できず。</li>
            <li>平均年齢40.1歳・平均勤続8.3年。EUVマスク欠陥検査装置等を手がける単一セグメントの事業会社。</li>
          </ul>
        </div>

        <h2>レーザーテックの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "レーザーテック株式会社" },
                { label: "証券コード", value: "6920" },
                { label: "本社", value: "神奈川県横浜市港北区新横浜二丁目10番地1" },
                { label: "事業内容", value: "光応用技術による半導体関連検査・測定装置（EUVマスク欠陥検査装置等）の設計・製造・販売（単一セグメントの事業会社）" },
                { label: "平均年間給与", value: "16,808,225円（2025年6月期・有価証券報告書／提出会社。賞与及び時間外手当等の基準外賃金を含む）" },
                { label: "決算期", value: "6月末決算（最新有報は第63期・2025年6月期、2025年9月25日提出。2026年6月期有報は2026年9月提出予定）" },
                { label: "平均年齢", value: "40.1歳（同・提出会社）" },
                { label: "平均勤続年数", value: "8.3年（同・提出会社）" },
                { label: "従業員数", value: "516名（提出会社単体・出向者含まず）／連結1,163名" },
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
          ※数値は有価証券報告書（提出会社）に基づく単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>レーザーテックの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月1日時点で、レーザーテックの<a href="https://www.lasertec.co.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイト</a>の採用情報は<a href="https://lasertec-saiyo.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">新卒採用サイト</a>（2027年卒・2028年卒対象）へのリンクとなっており、中途採用（キャリア採用）の窓口は公式サイト上では確認できませんでした。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>新卒採用サイトの掲載内容は27卒・28卒向けのエントリー案内が中心で、中途向けの職種・選考プロセスの記載は確認できなかった。</li>
            <li>英語版Careersページにも確認時点で「There are currently no vacancies available」（現在募集中の求人はありません）と記載されている。</li>
            <li>一方、有報には従業員増加の主な理由として「研究開発、装置立上げ及びサービス体制を強化するための採用による」と記載があり、人員は増加局面にある。</li>
            <li>中途で入社するルートは公式サイト外の求人（転職エージェント経由の非公開求人等）が中心になるとみられる。</li>
            <li>※2026年8月1日に公式サイト・新卒採用サイト・英語版Careersページで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>レーザーテックで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "光学・検査計測分野の専門性", desc: "光応用技術による検査・測定装置を扱うため、光学、画像処理、精密機器、半導体関連での専門経験が評価されます。" },
            { title: "最先端領域への探究心", desc: "EUVマスク欠陥検査装置など半導体の最先端プロセスを支える製品を手がけるため、未踏領域に挑む姿勢が求められます。" },
            { title: "少数精鋭で広く動ける力", desc: "単体516名の陣容で装置の設計から立上げ・サービスまで担うため、担当範囲を限定せず動ける人材が活きます。" },
            { title: "顧客の現場に向き合う姿勢", desc: "有報にも装置立上げ・サービス体制強化の採用方針が記載されており、顧客現場での対応力・責任感が重視されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>レーザーテックの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※中途採用の選考フローは公式サイトで確認できなかったため、以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
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

        <h2>レーザーテックの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,680万円（2025年6月期）は提出会社単体・全従業員516名の平均。有報注記のとおり賞与及び時間外手当等の基準外賃金を含む。</li>
            <li>6月末決算のため、この数値は2025年6月30日現在のもの。2026年6月期の有報は2026年9月提出予定で、それまでは2025年6月期が最新確定値。</li>
            <li>IRBANK集計の推移では2021年6月期1,379万円→2022年6月期1,448万円→2023年6月期1,581万円→2024年6月期1,638万円→2025年6月期1,680万円。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>レーザーテック転職で活用したい転職エージェント</h2>
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

        <h2>レーザーテック転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">レーザーテック転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体年収ランキング</Link>
            <Link href="/company/tokyo-electron/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京エレクトロン転職ガイド</Link>
            <Link href="/company/disco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ディスコ転職ガイド</Link>
            <Link href="/company/advantest/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">アドバンテスト転職ガイド</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
