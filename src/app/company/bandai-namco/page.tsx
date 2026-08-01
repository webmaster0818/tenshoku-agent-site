import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "バンダイナムコHDへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "バンダイナムコホールディングス（証券コード7832）への転職を有価証券報告書などの一次データで解説。平均年間給与は約983.8万円（2026年3月期・有報／提出会社）。ただし同社は純粋持株会社で単体は本社機能約80名のみ。事業会社との違い、中途採用の状況、選考の考え方をまとめました。",
  openGraph: {
    title: "バンダイナムコHDへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "バンダイナムコホールディングス（7832）の平均年収・中途採用・持株会社と事業会社の違いを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "バンダイナムコホールディングスの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約983.8万円（2026年3月期・提出会社単体）です。ただしこれは純粋持株会社である提出会社単体（従業員80名・本社機能のみ）の値であり、バンダイやバンダイナムコエンターテインメントなど事業会社の給与水準を表すものではない点に注意が必要です。"
  },
  {
    "q": "持株会社の平均年収と事業会社の年収は別ものですか？",
    "a": "別ものです。バンダイナムコホールディングスは純粋持株会社で、単体従業員80名はグループ経営戦略・管理などの本社機能のみの人員です。参考として同じ有報に記載の主要事業会社では、バンダイナムコスタジオが約969.8万円（982名）、バンダイが約987.4万円（902名）となっており、各社ごとに水準が異なります。"
  },
  {
    "q": "平均年収が前期から下がったのはなぜですか？",
    "a": "有報記載の対前事業年度増減率は△19.1%です。有報では、連結子会社バンダイナムコビジネスアークのコーポレート機能の一部を持株会社へ移管したことで従業員数が増加し、人員構成が変化したことが主因と説明されています。"
  },
  {
    "q": "バンダイナムコホールディングスは中途採用を行っていますか？",
    "a": "公式採用サイトに「中途採用」の掲載枠はありますが、2026年8月1日時点の確認では中途採用ページに募集中の職種は掲載されていませんでした（「該当の対象がありません」表示）。バンダイやバンダイナムコエンターテインメントなど各事業会社の採用は別法人として行われるため、志望先の事業会社の採用情報を個別に確認するのが確実です。"
  },
  {
    "q": "バンダイナムコホールディングスの転職難易度は高いですか？",
    "a": "単体従業員80名の本社機能のみの組織で、募集自体が常時あるわけではないため、門戸は非常に狭いとみられます。グループ経営・経理財務・法務などコーポレート系の高い専門性が求められる傾向です。"
  },
  {
    "q": "本社はどこですか？",
    "a": "東京都港区芝5-37-8「バンダイナムコ未来研究所」です。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "バンダイナムコHDへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/bandai-namco/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "バンダイナムコホールディングス" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            バンダイナムコHDへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            バンダイナムコホールディングス（証券コード7832）は、バンダイ・バンダイナムコエンターテインメントなどを束ねるバンダイナムコグループの純粋持株会社です。グループの中長期経営戦略の立案・遂行と、グループ会社の事業戦略の実行支援・管理を担います。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。特に「持株会社単体の数値」と「事業会社の水準」の違いを明確に区別して解説します。
          </p>
        </div>

        <h2>結論：バンダイナムコHD転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約983.8万円（2026年3月期・有価証券報告書・提出会社単体）。対前事業年度増減率は△19.1%。</li>
            <li><strong>重要：同社は純粋持株会社で、単体従業員はグループ経営戦略・管理を担う本社機能の80名のみ。</strong>上記平均年収は持株会社単体の値であり、バンダイやバンダイナムコエンターテインメントなど事業会社（別法人）の給与水準を表すものではない。</li>
            <li>参考（同有報記載の主要事業会社）：バンダイナムコスタジオ約969.8万円（982名）、バンダイ約987.4万円（902名）。</li>
            <li>連結従業員数は11,457名。グループへの転職は基本的に各事業会社ごとの採用となる。</li>
            <li>2026年8月1日時点で公式の中途採用ページに募集中の職種掲載はなく、持株会社そのものへの中途入社の門戸は極めて限定的。</li>
          </ul>
        </div>

        <h2>バンダイナムコホールディングスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "バンダイナムコホールディングス" },
                { label: "証券コード", value: "7832（東証プライム）" },
                { label: "会社形態", value: "純粋持株会社（単体はグループ経営戦略・管理などの本社機能のみ。バンダイ等の事業会社は別法人）" },
                { label: "本社", value: "東京都港区芝5-37-8 バンダイナムコ未来研究所" },
                { label: "事業内容", value: "バンダイナムコグループの中長期経営戦略の立案・遂行、グループ会社の事業戦略実行支援・管理" },
                { label: "平均年間給与", value: "約983.8万円（2026年3月期・有価証券報告書／提出会社単体。事業会社の水準とは別）" },
                { label: "平均年齢", value: "44.6歳（2026年3月31日現在・提出会社）" },
                { label: "平均勤続年数", value: "16.7年（同・提出会社）" },
                { label: "従業員数", value: "単体80名（臨時従業員 年間平均6名は外書）／連結11,457名" },
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
          ※数値は有価証券報告書（第21期・2026年6月16日提出）の提出会社データに基づきます。純粋持株会社のため、単体の平均年間給与は事業会社の給与水準を表しません。直近5期の推移（万円丸め）は1,205万円→1,057万円→1,095万円→1,216万円→983万円（2022年3月期〜2026年3月期）。△19.1%の主因は、有報によれば連結子会社バンダイナムコビジネスアークのコーポレート機能一部移管に伴う従業員数増加・人員構成の変化です。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>バンダイナムコHDの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月1日時点で、バンダイナムコホールディングスの<a href="https://www.bandainamco.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>には「中途採用」の掲載枠がありますが、<a href="https://www.bandainamco.co.jp/recruit/midcareer/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">中途採用ページ</a>では募集中の職種は掲載されていませんでした（「該当の対象がありません」の表示）。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>中途採用ページは「事業」「職種」「キーワード」で検索できるポータル形式だが、確認時点で募集職種の掲載はゼロ。</li>
            <li>持株会社単体は本社機能80名のみの組織のため、募集が出る場合もコーポレート系の限定的なポジションになるとみられる。</li>
            <li>バンダイ・バンダイナムコエンターテインメント・バンダイナムコスタジオなど各事業会社の採用は別法人として個別に行われるため、志望先の事業会社の採用サイトを直接確認するのが確実。</li>
            <li>※2026年8月1日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>バンダイナムコHDで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "グループ経営・コーポレートの専門性", desc: "単体はグループ経営戦略・管理を担う本社機能のみ。経営企画・経理財務・法務・人事などコーポレート領域の高い専門性が軸になります。" },
            { title: "複数事業を俯瞰する視点", desc: "トイホビー・ゲームなど多様な事業会社を束ねる立場のため、事業を横断して数字と戦略を見る力が重視されるとみられます。" },
            { title: "IP（キャラクターなど）ビジネスへの理解", desc: "グループの軸はIPを活かしたビジネス。エンターテインメント業界の構造理解は前提になりやすい領域です。" },
            { title: "少数組織で完遂する自律性", desc: "単体80名の少数組織のため、一人が担う範囲は広くなりがち。自ら動いて完結させる働き方との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>バンダイナムコHDの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※2026年8月1日時点で公式サイトに中途採用の選考フローの記載は確認できませんでした。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。コーポレート系ポジションで求められる経験・スキルとの適合性が確認されます。" },
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

        <h2>バンダイナムコHDの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約983.8万円（2026年3月期）は純粋持株会社単体・80名の平均。グループ全体や事業会社の水準を代表する数字ではない。</li>
            <li>事業会社の参考値（同有報）：バンダイナムコスタジオ約969.8万円（対前年+21.3%）、バンダイ約987.4万円（同+4.1%）。転職先として検討するのは通常こちらの事業会社。</li>
            <li>単体の平均年収は人員構成の変化で大きく振れる（直近は△19.1%）。持株会社の平均値の増減を待遇の良し悪しと直結させないのが安全。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>バンダイナムコグループ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">持株会社の募集は限定的なため、事業会社も含めた求人を広く集めるのが有効です。複数のエージェントに登録して情報を比較しましょう。</p>
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

        <h2>バンダイナムコHD転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">バンダイナムコグループ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。持株会社と事業会社の違いを踏まえ、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/game-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ゲーム業界年収ランキング</Link>
            <Link href="/company/koei-tecmo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コーエーテクモ転職ガイド</Link>
            <Link href="/company/capcom/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カプコン転職ガイド</Link>
            <Link href="/company/konami/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">KONAMI転職ガイド</Link>
            <Link href="/company/sega-sammy/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">セガサミーHD転職ガイド</Link>
            <Link href="/company/takara-tomy/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">タカラトミー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
