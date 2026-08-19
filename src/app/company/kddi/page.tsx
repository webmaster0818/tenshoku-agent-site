import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "KDDIへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "KDDI（証券コード9433）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,051万円（2026年3月期・有報／提出会社）で3年連続の上昇。ジョブ型人事のキャリア採用、通信×IT（5G・クラウド・データ・AI）の募集領域までまとめました。",
  alternates: { canonical: "/company/kddi/" },
  openGraph: {
    title: "KDDIへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "KDDI（9433）の平均年収・中途採用・選考を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "KDDIの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、平均年間給与は約1,051万円（2026年3月期・提出会社単体）です。2024年3月期986万円→2025年3月期1,018万円→2026年3月期1,051万円と3年連続で上昇しています。従業員9,891名の全従業員平均であり、ジョブ型のため職務・等級により実際の年収は異なります。",
  },
  {
    q: "KDDIは中途採用を行っていますか？",
    a: "はい。採用情報は公式サイト（www.kddi.com/recruit/）に集約されており、キャリア採用が継続的に行われています（2026年8月19日確認）。あわせてオウンドメディア「＆KDDI」（career.kddi.com）でキャリア採用社員の仕事・カルチャーが発信されており、応募前の情報収集に役立ちます。",
  },
  {
    q: "KDDIの中途採用ではどんな職種がありますか？",
    a: "通信インフラに加えて、クラウド・データ・AI・セキュリティ・金融（au経済圏）など通信×ITの幅広い領域で採用が行われています。ジョブ型人事のもとポジション単位の採用のため、募集要項の職務要件と自分の経験の対応を確認して応募するのが基本です。最新の募集職種は公式採用ページでご確認ください。",
  },
  {
    q: "KDDIの平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は42.3歳、従業員数は9,891名（いずれも2026年3月期・提出会社単体）です。ミドル層が中核の組織で、専門性があれば30代・40代の中途も現実的です。",
  },
  {
    q: "KDDIの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は東京都港区高輪2-21-1 THE LINK PILLAR 1 NORTHです。設立は1984年6月1日。勤務地はポジションにより異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KDDIへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kddi/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "KDDI" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            KDDIへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            KDDI（証券コード9433）は、auブランドの通信事業を軸に、クラウド・データ・AI・金融まで事業を広げる通信大手です。
            ジョブ型人事のもとでキャリア採用を継続しており、通信×ITの専門人材にとって選択肢の大きい企業です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：KDDI転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,051万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月19日確認）。提出会社単体9,891名の全従業員平均。</li>
            <li>986万円→1,018万円→1,051万円と3年連続で上昇（有報ベース）。</li>
            <li>ジョブ型人事のため、提示年収はポジションの職務・等級で個別に決まる。</li>
            <li>採用情報はwww.kddi.com/recruit/に集約。オウンドメディア「＆KDDI」でキャリア採用の事例発信あり（2026年8月19日確認）。</li>
            <li>平均年齢42.3歳のミドル中核組織。クラウド・データ・AI等の専門性があれば30代・40代の中途も現実的。</li>
          </ul>
        </div>

        <h2>KDDIの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "KDDI株式会社" },
                { label: "証券コード", value: "9433" },
                { label: "本社", value: "東京都港区高輪2-21-1 THE LINK PILLAR 1 NORTH" },
                { label: "設立", value: "1984年6月1日" },
                { label: "事業内容", value: "通信事業（au等）を軸としたクラウド・データ・AI・金融等の総合ICT事業" },
                { label: "平均年間給与", value: "約1,051万円（2026年3月期・有価証券報告書／提出会社。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "986万円（2024年3月期）→1,018万円（2025年3月期）→1,051万円（2026年3月期）" },
                { label: "平均年齢", value: "42.3歳（同・提出会社）" },
                { label: "従業員数", value: "9,891名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく提出会社単体・全従業員の平均です。職務・等級・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>KDDIの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報は公式サイトの採用ページ（www.kddi.com/recruit/）に集約（2026年8月19日確認）。</li>
            <li>オウンドメディア「＆KDDI」（career.kddi.com）で、キャリア採用社員の仕事内容・カルチャー・キャリアパスが記事として公開されており、応募前のリアルな情報収集に使える。</li>
            <li>通信インフラだけでなく、クラウド・データ・AI・セキュリティ・金融など「通信×IT」の広い職種で募集が行われている。</li>
            <li>ジョブ型のため、募集要項の職務要件と自分の実務経験の対応を職務経歴書で示すことが選考の土台になる。</li>
          </ul>
        </div>

        <h2>KDDIで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "通信×ITの専門性", desc: "5G・ネットワークに加え、クラウド・データ基盤・AI・セキュリティの実務経験は、拡大中の事業領域と直接適合します。" },
            { title: "大規模サービスの運用経験", desc: "数千万契約規模のサービスを支えるため、大規模システムの設計・運用・信頼性向上の経験が評価されやすい環境です。" },
            { title: "事業をまたぐ推進力", desc: "通信・金融・エネルギーなど複数事業の掛け合わせが戦略の軸で、部門横断プロジェクトの推進経験が活きます。" },
            { title: "ジョブ要件への適合を示す力", desc: "ジョブ型人事のため、応募ポジションの要件と自分の経験・実績の対応を具体的に言語化できることが重要です。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>KDDIの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページから応募", desc: "公式採用ページでポジションを確認し、オンラインで応募します。" },
            { step: 2, title: "書類選考", desc: "職務経歴と応募ポジションの要件適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属部門との面接。専門領域の深掘りとカルチャーフィットの確認が中心です。" },
            { step: 4, title: "内定・条件提示", desc: "職務・等級に応じた条件が提示され、確認を経て入社となります。" },
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

        <h2>KDDIの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,051万円（2026年3月期）は提出会社単体・全従業員9,891名の平均で、管理職・上位等級を含む数値です。</li>
            <li>3年連続の上昇傾向ですが、平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>ジョブ型のため、実際の提示額は応募ポジションの職務・等級で決まります。全社平均をそのまま自分の目安にはできません。</li>
            <li>中途入社時はエージェント経由でポジション別のレンジ実勢を確認するのが確実です。</li>
          </ul>
        </div>

        <h2>KDDI転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。通信大手・ITサービスの求人も幅広く扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。NTTグループ・ソフトバンク等の同業も含めて比較しやすいのが強みです。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。クラウド・データ・AI系ポジションの要件読み解きに強みがあります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。通信×ITの管理職・専門職クラスの市場価値の把握に向いています。" },
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

        <h2>KDDI転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">KDDI転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページ・「＆KDDI」とエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/ntt/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">NTT転職ガイド</Link>
            <Link href="/company/fujitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士通転職ガイド</Link>
            <Link href="/company/line-yahoo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">LINEヤフー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
