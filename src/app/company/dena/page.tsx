import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "DeNAへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "DeNA（ディー・エヌ・エー、証券コード2432）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,118万円（2026年3月期・有報）で前期883万円から大幅増。ゲーム・スポーツ・ヘルスケア等の事業領域と中途採用の状況をまとめました。",
  alternates: { canonical: "/company/dena/" },
  openGraph: {
    title: "DeNAへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "DeNA（2432）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "DeNAの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約1,118万円（2026年3月期・提出会社単体）です。前期（2025年3月期）の約883万円から大きく増加しました。従業員1,400名の全従業員平均であり、職種・等級により実際の年収は異なります。",
  },
  {
    q: "DeNAの年収が大きく上がったのはなぜですか？",
    a: "2025年3月期約883万円→2026年3月期約1,118万円と1年で230万円超の増加です（IR BANK・日経会社情報掲載値・2026年8月19日確認）。平均年間給与には賞与等の変動要素が含まれますが、増加の内訳は有価証券報告書の記載範囲では特定できないため、当サイトでは理由を断定しません。中途入社時の提示額はポジション・等級により個別に決まります。",
  },
  {
    q: "DeNAは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトの採用ページ（dena.com/jp/recruit/）に集約されており、エンジニア・ビジネス・デザイナー等の職種で中途採用が行われています（2026年8月19日確認）。最新の募集ポジションは同ページでご確認ください。",
  },
  {
    q: "DeNAの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は38.6歳、従業員数は1,400名（いずれも2026年3月期・提出会社単体）です。メガベンチャーの中でも比較的コンパクトな単体規模です。",
  },
  {
    q: "DeNAの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエアです。設立は1999年8月1日です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DeNAへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/dena/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "DeNA" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            DeNAへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            DeNA（株式会社ディー・エヌ・エー、証券コード2432）は、ゲームを軸にスポーツ・ライブストリーミング・ヘルスケアと多角的に事業を展開するインターネット企業です。
            2026年3月期は平均年収が大きく動いた年でもあります。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：DeNA転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,118万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月19日確認）。提出会社単体1,400名の全従業員平均。</li>
            <li>前期約883万円から1年で230万円超の大幅増。ただし増加の内訳は有報の記載範囲では特定できないため理由は断定しない。</li>
            <li>採用は公式採用ページ（dena.com/jp/recruit/）から。エンジニア・ビジネス・デザイナー等の職種別採用（2026年8月19日確認）。</li>
            <li>平均年齢38.6歳と比較的若い組織。ゲーム・スポーツ・ヘルスケア等、事業の幅が広い。</li>
            <li>実力主義の評価で処遇が動きやすい環境のため、提示条件と評価制度は選考過程で個別確認が確実。</li>
          </ul>
        </div>

        <h2>DeNAの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社ディー・エヌ・エー（DeNA Co., Ltd.）" },
                { label: "証券コード", value: "2432" },
                { label: "本社", value: "東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア" },
                { label: "設立", value: "1999年8月1日" },
                { label: "事業内容", value: "ゲーム・スポーツ・ライブストリーミング・ヘルスケア等のインターネットサービス" },
                { label: "平均年間給与", value: "約1,118万円（2026年3月期・有価証券報告書／提出会社。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近の推移", value: "約883万円（2025年3月期）→約1,118万円（2026年3月期）" },
                { label: "平均年齢", value: "38.6歳（同・提出会社）" },
                { label: "従業員数", value: "1,400名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく提出会社単体・全従業員の平均です。職種・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>DeNAの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報は公式サイトの採用ページ（dena.com/jp/recruit/）に集約（2026年8月19日確認）。</li>
            <li>エンジニア・ビジネス・デザイナー等の職種区分で、事業部門ごとのポジション別採用が行われている。</li>
            <li>大規模サービスのサーバーサイド・クライアント開発、データ・AI、SREなど技術職の募集領域が広い。</li>
            <li>エンジニア選考では技術力の確認（コーディングテスト等）が課される場合があるため、実務から離れている領域は事前の準備が安心。</li>
          </ul>
        </div>

        <h2>DeNAで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "大規模サービスの開発・運用力", desc: "ゲーム・ライブ配信等の大規模トラフィックを支える設計・運用・改善の実務経験は、多くのポジションで直接評価されます。" },
            { title: "事業を横断できる適応力", desc: "ゲームからヘルスケアまで事業の幅が広く、環境の変化や新規領域への挑戦を楽しめることが活躍の条件になります。" },
            { title: "成果で語れる実績", desc: "実力主義の評価文化のため、担当した施策の成果・数値・意思決定を自分の言葉で語れることが選考でも入社後でも重要です。" },
            { title: "専門領域の深さ", desc: "データ・AI・SRE・セキュリティなど、特定領域で深い専門性を持つスペシャリストの採用ニーズが継続しています。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>DeNAの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）・技術選考", desc: "現場との面接が中心。エンジニア職はコーディングテスト等の技術確認が含まれる場合があります。" },
            { step: 4, title: "内定・条件提示", desc: "等級・役割に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>DeNAの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,118万円（2026年3月期）は提出会社単体・全従業員1,400名の平均であり、職種・等級で実際の水準は異なります。</li>
            <li>前期から230万円超の大幅増ですが、平均年間給与には賞与等の変動要素が含まれ、増加の内訳は有報の記載範囲では特定できません。単年の平均値をそのまま自分の提示額の目安にしないことが大切です。</li>
            <li>実力主義の評価のため、入社後の処遇はパフォーマンスで動きます。評価制度・昇給の仕組みは面接で確認しておくと安心です。</li>
            <li>中途入社時の提示額はエージェント経由でポジション別の実勢を確認するのが確実です。</li>
          </ul>
        </div>

        <h2>DeNA転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。Web系メガベンチャーの技術選考対策と職務経歴書の添削に強みがあります。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。Web・ゲーム業界の求人も幅広く扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めた比較検討がしやすいのが強みです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。ハイクラス・専門職の市場価値の把握と情報収集に向いています。" },
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

        <h2>DeNA転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">DeNA転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/mixi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">MIXI転職ガイド</Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メルカリ転職ガイド</Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">サイバーエージェント転職ガイド</Link>
            <Link href="/company/game-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ゲーム業界の年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
