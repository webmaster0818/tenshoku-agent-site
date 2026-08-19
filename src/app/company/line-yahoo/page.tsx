import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "LINEヤフーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "LINEヤフー（証券コード4689）への転職を有価証券報告書などの一次データで解説。平均年間給与は約902万円（2026年3月期・有報集計値）で上昇傾向。LINE・Yahoo! JAPANを支える国内最大級のサービス開発と中途採用の状況をまとめました。",
  alternates: { canonical: "/company/line-yahoo/" },
  openGraph: {
    title: "LINEヤフーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "LINEヤフー（4689）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "LINEヤフーの平均年収はいくらですか？",
    a: "有価証券報告書の集計値（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約902万円（2026年3月期・提出会社）です。2024年3月期819万円→2025年3月期884万円→2026年3月期902万円と上昇が続いています。全職種平均であり、エンジニア職・グレード別の年収は個別に異なります。",
  },
  {
    q: "LINEヤフーは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイトの採用ページ（www.lycorp.co.jp/ja/recruit/）に集約されており、エンジニア・デザイナー・ビジネス等の職種でキャリア採用が行われています（2026年8月19日確認）。最新の募集ポジションは同ページからご確認ください。",
  },
  {
    q: "LINEヤフーのエンジニアはどんな開発に携われますか？",
    a: "LINE・Yahoo! JAPAN・PayPayとの連携領域を含む、国内最大級のトラフィックを扱うサービス群の開発・運用に携わる機会があります。メッセージング・検索・コマース・広告・決済など事業領域が広く、大規模分散システム・データ基盤・機械学習などの専門性が活きる環境です。",
  },
  {
    q: "LINEヤフーの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書の集計値（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は39歳、従業員数は10,577名（いずれも2026年3月期・提出会社）です。国内インターネット企業として最大級の規模です。",
  },
  {
    q: "LINEヤフーの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は東京都千代田区紀尾井町1-3 東京ガーデンテラス紀尾井町 紀尾井タワーです。設立は1996年1月31日（旧ヤフー）。LINEとヤフーの合併で2023年10月にLINEヤフー株式会社となりました。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LINEヤフーへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/line-yahoo/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "LINEヤフー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            LINEヤフーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            LINEヤフー（証券コード4689）は、LINEとYahoo! JAPANを運営する国内最大級のインターネット企業です。
            メッセージング・検索・コマース・広告と事業領域が広く、大規模サービス開発に携わりたいエンジニアにとって代表的な選択肢です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：LINEヤフー転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約902万円（2026年3月期・有価証券報告書の集計値。IR BANK・日経会社情報掲載値・2026年8月19日確認）。提出会社10,577名の全職種平均。</li>
            <li>819万円→884万円→902万円と上昇傾向（有報集計値ベース）。</li>
            <li>採用はwww.lycorp.co.jp/ja/recruit/に集約。職種別のキャリア採用（2026年8月19日確認）。</li>
            <li>国内最大級トラフィックのサービス群（LINE・Yahoo! JAPAN）を扱える希少な環境。</li>
            <li>全職種平均であり、エンジニアのグレード別レンジは非公表。提示はオファーで個別確認が必要。</li>
          </ul>
        </div>

        <h2>LINEヤフーの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "LINEヤフー株式会社（LY Corporation）" },
                { label: "証券コード", value: "4689" },
                { label: "本社", value: "東京都千代田区紀尾井町1-3 東京ガーデンテラス紀尾井町 紀尾井タワー" },
                { label: "設立", value: "1996年1月31日（2023年10月にLINEとヤフーが合併しLINEヤフーに）" },
                { label: "事業内容", value: "LINE・Yahoo! JAPANを中心としたメッセージング・検索・コマース・広告等のインターネットサービス" },
                { label: "平均年間給与", value: "約902万円（2026年3月期・有価証券報告書の集計値／提出会社。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "819万円（2024年3月期）→884万円（2025年3月期）→902万円（2026年3月期）" },
                { label: "平均年齢", value: "39歳（同・提出会社）" },
                { label: "従業員数", value: "10,577名（提出会社）" },
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
          ※数値は有価証券報告書の集計値（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく提出会社・全職種の平均です。職種・グレードにより実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>LINEヤフーの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報は公式サイトの採用ページ（www.lycorp.co.jp/ja/recruit/）に集約（2026年8月19日確認）。</li>
            <li>エンジニア・デザイナー・ビジネス等の職種別採用。大規模分散システム・データ・機械学習・セキュリティなど技術ポジションの幅が広い。</li>
            <li>メッセージング・検索・コマース・広告・メディアなど、応募時に事業領域とポジションの対応を確認するのが基本。</li>
            <li>最新の募集状況・働き方の条件は公式採用ページで要確認。</li>
          </ul>
        </div>

        <h2>LINEヤフーで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "大規模システムの実務経験", desc: "国内最大級のトラフィックを支えるため、大規模分散システム・高可用性設計・パフォーマンス改善の経験が直接評価されます。" },
            { title: "データ・AIの専門性", desc: "検索・広告・レコメンドなどデータ駆動の事業が多く、機械学習・データ基盤の実務経験の活躍余地が大きい環境です。" },
            { title: "サービス統合期を楽しめる柔軟性", desc: "LINEとヤフーの統合により技術・組織の再編が続く時期のため、変化を前向きに捉えて動ける適応力が働きやすさに直結します。" },
            { title: "職種要件への適合を示す力", desc: "ポジション別採用のため、募集要項の技術スタック・役割と自分の経験の対応を職務経歴書で具体的に示すことが重要です。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>LINEヤフーの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）・技術選考", desc: "配属予定チームとの面接。エンジニア職は技術課題やコーディング確認が含まれる場合があります。" },
            { step: 4, title: "内定・条件提示", desc: "グレード・役割に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>LINEヤフーの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約902万円（2026年3月期）は提出会社・全職種10,577名の平均であり、エンジニア職・グレード別の水準を直接示す数値ではありません。</li>
            <li>上昇傾向が続いていますが、平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>グレード別の正確な年収表は公式に開示されていないため、当サイトでは出典のない等級別年収表は掲載しません。</li>
            <li>実際のレンジは選考過程で提示されるオファー内容と、エージェント経由のポジション別実勢で確認するのが確実です。</li>
          </ul>
        </div>

        <h2>LINEヤフー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。大規模Web系ポジションの技術要件の読み解きと選考対策に強みがあります。" },
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。メガベンチャー・IT大手の求人も幅広く扱っています。" },
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

        <h2>LINEヤフー転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">LINEヤフー転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">Google転職ガイド</Link>
            <Link href="/company/kddi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">KDDI転職ガイド</Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メルカリ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
