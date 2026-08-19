import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "NTT（持株会社）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "NTT株式会社（証券コード9432・持株会社）への転職を有価証券報告書などの一次データで解説。平均年間給与は約1,056万円（2026年3月期・有報／提出会社＝持株単体）。ドコモ・NTTデータ等の事業会社と別である点、直近推移、採用の入口までまとめました。",
  alternates: { canonical: "/company/ntt/" },
  openGraph: {
    title: "NTT（持株会社）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "NTT（9432・持株会社）の平均年収・中途採用を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "NTTの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）によると、提出会社（NTT株式会社＝持株会社単体）の平均年間給与は約1,056万円（2026年3月期）です。これは研究開発・経営管理が中心の持株会社2,606名の平均であり、NTTドコモ・NTTデータ・NTT東日本/西日本など事業会社の給与水準とは別のものです。",
  },
  {
    q: "「NTTの平均年収」を見るときの注意点はありますか？",
    a: "証券コード9432で開示されるのは持株会社単体の数値です。実際にサービスを担う事業会社（ドコモ・データ・東西など）は別会社で、それぞれ採用・処遇も異なります。持株会社の推移は2024年3月期1,023万円→2025年3月期1,069万円→2026年3月期1,056万円で、直近期は微減です（IR BANK掲載値・2026年8月19日確認）。",
  },
  {
    q: "NTT（持株会社）は中途採用を行っていますか？",
    a: "NTTグループの採用情報は公式サイトの採用ページ（group.ntt/jp/careers/）に集約されており、グループ各社採用・研究開発（R&D）採用への入口になっています（2026年8月19日確認）。持株会社自体は研究開発・経営管理が中心のため、応募先は「どの会社の・どの職種か」を最初に特定するのが重要です。",
  },
  {
    q: "NTT持株会社の平均年齢・従業員数はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月19日確認）によると、平均年齢は41.4歳、従業員数は2,606名（いずれも2026年3月期・提出会社単体）です。IOWN・AIなどの研究開発人材が中核の構成です。",
  },
  {
    q: "NTTの本社はどこですか？",
    a: "日経会社情報（2026年8月19日確認）によると、本社は東京都千代田区大手町1-5-1 大手町ファーストスクエア イーストタワーです。設立は1952年8月1日。英文社名はNTT, Inc.です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NTT（持株会社）への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/ntt/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "NTT" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            NTT（持株会社）への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            NTT株式会社（証券コード9432）は、NTTグループの持株会社として研究開発（IOWN・AI等）とグループ経営を担う企業です。
            「NTTの平均年収」として広く引用される数値はこの持株会社単体のもので、ドコモやNTTデータなど事業会社とは別である点が最重要ポイントです。
            本記事では、有価証券報告書などの公開一次データをもとに客観的に整理します。
          </p>
        </div>

        <h2>結論：NTT転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,056万円（2026年3月期・有価証券報告書。IR BANK・日経会社情報掲載値・2026年8月19日確認）。提出会社＝持株会社単体2,606名の平均。</li>
            <li>この数値はドコモ・NTTデータ・NTT東西など事業会社の給与水準を表すものではない（各社は別採用・別処遇）。</li>
            <li>推移は1,023万円（2024年3月期）→1,069万円（2025年3月期）→1,056万円（2026年3月期）。直近期は微減。</li>
            <li>採用はgroup.ntt/jp/careers/がグループ各社・R&D採用への入口（2026年8月19日確認）。</li>
            <li>平均年齢41.4歳・研究開発中心の構成。応募前に「どの会社のどの職種か」の特定が必須。</li>
          </ul>
        </div>

        <h2>NTT（持株会社）の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "NTT株式会社（英文: NTT, Inc.）" },
                { label: "証券コード", value: "9432" },
                { label: "本社", value: "東京都千代田区大手町1-5-1 大手町ファーストスクエア イーストタワー" },
                { label: "設立", value: "1952年8月1日" },
                { label: "事業内容", value: "NTTグループの持株会社（研究開発・グループ経営管理）。事業は総合ICT・グローバル・地域通信等をグループ各社が担う" },
                { label: "平均年間給与", value: "約1,056万円（2026年3月期・有価証券報告書／提出会社＝持株単体。IR BANK・日経会社情報掲載値・2026年8月19日確認）" },
                { label: "直近3年の推移", value: "1,023万円（2024年3月期）→1,069万円（2025年3月期）→1,056万円（2026年3月期）" },
                { label: "平均年齢", value: "41.4歳（同・提出会社）" },
                { label: "従業員数", value: "2,606名（提出会社単体）" },
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
          ※数値は有価証券報告書（IR BANK・日経会社情報掲載値・2026年8月19日確認）に基づく提出会社（持株会社）単体・全従業員の平均です。事業会社の給与水準・採用条件は各社の公式情報でご確認ください。
        </p>

        <h2>NTTの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用情報は公式サイトの採用ページ（group.ntt/jp/careers/）に集約されており、グループ各社の採用・研究開発（R&D）採用への入口になっている（2026年8月19日確認）。</li>
            <li>持株会社は研究開発（IOWN構想・AI・基礎研究）と経営管理が中心で、研究職は論文・研究実績が評価軸になりやすい。</li>
            <li>「NTTに転職したい」場合、実際の応募先はドコモ・NTTデータ・NTT東西・NTTコミュニケーションズ等の事業会社であるケースが大半。志望する事業領域から会社を特定するのが第一歩。</li>
            <li>各社で採用サイト・選考プロセスが異なるため、募集要項は応募先各社の公式情報で確認が必要。</li>
          </ul>
        </div>

        <h2>NTT（持株会社・R&D）で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "研究開発の専門性と実績", desc: "IOWN・AI・ネットワーク基盤などの研究領域では、論文・学会発表・OSS等のアウトプットが専門性の証明として評価されやすい環境です。" },
            { title: "長期テーマに取り組む姿勢", desc: "基礎研究から社会実装まで時間軸の長いテーマが多く、腰を据えて研究開発に取り組めることが適性につながります。" },
            { title: "グループ横断の調整力", desc: "持株会社はグループ経営管理も担うため、複数会社をまたぐプロジェクトの調整・推進経験が活きる場面があります。" },
            { title: "応募先を見極める情報収集力", desc: "「NTT」と一括りにせず、事業会社ごとの役割・技術・処遇の違いを理解して応募先を選べることが、入社後のミスマッチ回避に直結します。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>NTTグループの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※選考は応募先の会社・職種により異なります。以下は一般的な流れの一例です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募先の会社・職種を特定", desc: "group.ntt/jp/careers/から志望領域の会社の採用ページへ進み、募集ポジションを確認します。" },
            { step: 2, title: "応募・書類選考", desc: "各社の採用システムから応募。職務経歴・研究実績と募集要件の適合が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "配属予定部門との面接。研究職は研究内容のプレゼンや技術ディスカッションが含まれる場合があります。" },
            { step: 4, title: "内定・条件提示", desc: "応募先会社の制度に基づき条件が提示され、確認を経て入社となります。" },
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

        <h2>NTTの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,056万円（2026年3月期）は持株会社単体・全従業員2,606名の平均で、管理職・上位等級を含みます。</li>
            <li>直近期は1,069万円→1,056万円と微減ですが、平均年間給与には賞与等の変動要素が含まれます（変動理由は有報の記載範囲では特定できないため断定しません）。</li>
            <li>事業会社（ドコモ・データ・東西等）の給与水準はこの数値とは別で、各社の開示・求人情報での確認が必要です。</li>
            <li>中途入社時の提示額は応募先会社・等級・役割で決まるため、エージェント経由で会社別・ポジション別の実勢を確認するのが確実です。</li>
          </ul>
        </div>

        <h2>NTTグループ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">グループ各社の採用ページへの直接応募に加えて、エージェント経由で会社別の求人情報を集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。NTTグループ各社・通信大手の求人も幅広く扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。グループ各社の求人を横並びで比較しやすいのが強みです。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "ITエンジニア特化。ネットワーク・クラウド・R&D系ポジションの要件読み解きに強みがあります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。通信・ITの管理職・専門職クラスの市場価値の把握と情報収集に向いています。" },
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

        <h2>NTT転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">NTTグループ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは「どの会社の・どの職種か」の特定から。公式採用ページとエージェントの両方で会社別の実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kddi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">KDDI転職ガイド</Link>
            <Link href="/company/fujitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士通転職ガイド</Link>
            <Link href="/company/nri/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">野村総合研究所転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
