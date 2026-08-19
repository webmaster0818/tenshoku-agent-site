import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ZOZOへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ZOZO（証券コード3092）への転職を有価証券報告書などの一次データで解説。平均年間給与は約856万円（2026年3月期・有報）で前期656万円から200万円の大幅増。ZOZOTOWNを支える技術職の採用状況、千葉本社の働き方までまとめました。",
  alternates: { canonical: "/company/zozo/" },
  openGraph: {
    title: "ZOZOへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ZOZO（3092）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "ZOZOの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約856万円（2026年3月期・全社員平均）です。前期（2025年3月期）の656万円から200万円の大幅増となりました。物流・販売系を含む全職種の平均であり、エンジニア等の職種別水準を示すものではありません。",
  },
  {
    q: "ZOZOの年収が大きく上がったのはなぜですか？",
    a: "有報ベースの推移は2024年3月期692万円→2025年3月期656万円→2026年3月期856万円で、直近期に200万円増加しています（IR BANK・日経会社情報掲載値・2026年8月19日確認）。平均年間給与には賞与等の変動要素が含まれますが、増加の内訳は有価証券報告書の記載範囲では特定できないため、当サイトでは理由を断定しません。",
  },
  {
    q: "ZOZOは中途採用を行っていますか？",
    a: "はい。採用情報は公式コーポレートサイトの採用ページ（corp.zozo.com/recruit/）に集約されており、エンジニア・デザイナー・ビジネス等の職種で募集が行われています（2026年8月19日確認）。最新の募集ポジションは同ページでご確認ください。",
  },
  {
    q: "ZOZOの平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は34.7歳、従業員数は1,662名（いずれも2026年3月期）です。今回比較した通信・IT大手の中でも若い年齢構成です。",
  },
  {
    q: "ZOZOの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は千葉市稲毛区緑町1-15-16です。設立は2000年4月19日。ZOZOTOWNの物流拠点も千葉県内に集積しています。勤務地・働き方はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ZOZOへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/zozo/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ZOZO" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ZOZOへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ZOZO（証券コード3092）は、ファッションEC「ZOZOTOWN」を運営し、計測技術や研究開発にも投資するテック企業です。
            2026年3月期は平均年収が前期比200万円増と大きく動きました。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ZOZO転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約856万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月19日確認）。全社員1,662名の平均。</li>
            <li>推移は692万円（2024年3月期）→656万円（2025年3月期）→856万円（2026年3月期）。直近期に200万円の大幅増。</li>
            <li>全社員平均には物流・販売系も含まれるため、エンジニア職の水準を直接示す数値ではない。</li>
            <li>採用はcorp.zozo.com/recruit/から職種別に応募（2026年8月19日確認）。</li>
            <li>平均年齢34.7歳と若い組織。本社は千葉市で、首都圏東側からの通勤圏という立地も特徴。</li>
          </ul>
        </div>

        <h2>ZOZOの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社ZOZO" },
                { label: "証券コード", value: "3092" },
                { label: "本社", value: "千葉市稲毛区緑町1-15-16" },
                { label: "設立", value: "2000年4月19日" },
                { label: "事業内容", value: "ファッションEC「ZOZOTOWN」の運営、計測技術等の研究開発" },
                { label: "平均年間給与", value: "約856万円（2026年3月期・有価証券報告書・全社員平均。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "692万円（2024年3月期）→656万円（2025年3月期）→856万円（2026年3月期）" },
                { label: "平均年齢", value: "34.7歳" },
                { label: "従業員数", value: "1,662名" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく全社員平均です。職種・役割により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ZOZOの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報は公式コーポレートサイトの採用ページ（corp.zozo.com/recruit/）に集約（2026年8月19日確認）。</li>
            <li>エンジニア・デザイナー・ビジネス・物流など職種別の募集。大規模ECの開発・運用、マイクロサービス、データ活用などの技術ポジションがある。</li>
            <li>ファッション×テックという事業特性上、サービスへの共感・ユーザー視点も重視されやすい。</li>
            <li>最新の募集状況・勤務条件は公式採用ページで要確認。</li>
          </ul>
        </div>

        <h2>ZOZOで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "大規模ECの開発・運用経験", desc: "ZOZOTOWNの大規模トラフィック・在庫・決済を支えるため、ECや大規模Webサービスの設計・運用経験が直接活きます。" },
            { title: "技術刷新への参加意欲", desc: "マイクロサービス化や基盤刷新などの技術的挑戦が続いており、モダン化プロジェクトの経験者に活躍の場があります。" },
            { title: "サービスへの共感", desc: "ファッションECという事業ドメインへの興味・共感は、ユーザー視点の意思決定やチームでの協働に直結します。" },
            { title: "実務経験を言語化する力", desc: "経験と意思決定のプロセスを自分の言葉で語れることが、対話重視の選考でのアピールにつながります。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ZOZOの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "corp.zozo.com/recruit/でポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場・人事との面接。これまでの実務経験と意思決定の深掘りが中心です。" },
            { step: 4, title: "内定・条件提示", desc: "役割・グレードに応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>ZOZOの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約856万円（2026年3月期）は物流・販売系を含む全社員1,662名の平均であり、職種別の水準を示すものではありません。</li>
            <li>前期から200万円の大幅増ですが、平均年間給与には賞与等の変動要素が含まれ、増加の内訳は有報の記載範囲では特定できません。</li>
            <li>単年の平均値をそのまま自分の提示額の目安にせず、応募ポジションのレンジを求人票・面談で確認するのが確実です。</li>
            <li>エンジニア職の提示レンジは公式の一次情報が乏しいため、エージェント経由でポジション別の実勢を確認しましょう。</li>
          </ul>
        </div>

        <h2>ZOZO転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。EC・Web系の技術ポジションの要件読み解きに強みがあります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。EC・小売テック系の同業比較がしやすいのが強みです。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。千葉・首都圏東側の勤務地条件でも探しやすいです。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。テック企業の専門職・マネジメント職の市場価値の把握に向いています。" },
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

        <h2>ZOZO転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ZOZO転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メルカリ転職ガイド</Link>
            <Link href="/company/dena/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">DeNA転職ガイド</Link>
            <Link href="/company/mixi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">MIXI転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
