import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "金融業界の年収ランキング【2026年・有価証券報告書】メガバンク・証券・損保8社を一次データで比較",
  description:
    "メガバンク3グループ・大手証券・大手損保の平均年収を有価証券報告書の記載値（2026年3月期）でランキング。大和証券グループ1,793万円・東京海上HD1,487万円・野村HD1,420万円・三井住友FG1,180万円・三菱UFJ FG1,170万円ほか8社。持株会社単体の数値の意味、キャリア採用の入口まで一次データで解説します。",
  openGraph: {
    title: "金融業界の年収ランキング【2026年・有価証券報告書】",
    description: "メガバンク・証券・損保8グループの平均年収を有報記載値でランキング。キャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "daiwa", name: "大和証券グループ本社", salary: "約1,793万円", term: "2026年3月期", note: "2年で+494万円の急上昇。市況・業績連動の性格が強い持株単体値", hd: true, field: "証券" },
  { rank: 2, slug: "tokio-marine", name: "東京海上HD", salary: "約1,487万円", term: "2026年3月期", note: "国内最大級の損保グループ。1,400〜1,500万円台の高水準で推移", hd: true, field: "損害保険" },
  { rank: 3, slug: "nomura", name: "野村HD", salary: "約1,420万円", term: "2026年3月期", note: "国内最大手証券。持株単体は平均勤続4.3年と中途中心の特殊な構成", hd: true, field: "証券" },
  { rank: 4, slug: "sompo", name: "SOMPO HD", salary: "約1,259万円", term: "2026年3月期", note: "損保ジャパン+介護のSOMPOケアを展開。1,200万円台で推移", hd: true, field: "損害保険" },
  { rank: 5, slug: "ms-ad", name: "MS&ADインシュアランスGHD", salary: "約1,237万円", term: "2026年3月期", note: "三井住友海上・あいおいの2大損保。平均勤続21.7年の長期就業型", hd: true, field: "損害保険" },
  { rank: 6, slug: "smfg", name: "三井住友FG", salary: "約1,180万円", term: "2026年3月期", note: "3メガバンクで最高値。2年連続上昇", hd: true, field: "銀行" },
  { rank: 7, slug: "mufg", name: "三菱UFJ FG", salary: "約1,170万円", term: "2026年3月期", note: "国内最大の金融グループ。2年で+123万円", hd: true, field: "銀行" },
  { rank: 8, slug: "mizuho-fg", name: "みずほFG", salary: "約1,166万円", term: "2026年3月期", note: "銀信証一体運営。2年連続上昇でメガバンク3行が1,100万円台後半に並ぶ", hd: true, field: "銀行" },
];

const faqData = [
  {
    q: "金融業界で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(2026年3月期・IR BANK掲載値を2026年9月6日確認)では、大和証券グループ本社が約1,793万円でトップです。東京海上HD 約1,487万円、野村HD 約1,420万円が続きます。ただしいずれも持株会社単体の数値であり、賞与の市況連動で年度により大きく変動します。",
  },
  {
    q: "この数値は銀行員・証券マン全体の平均年収ですか？",
    a: "いいえ。有報の平均年間給与は「提出会社(持株会社)単体」の数値で、本社機能に勤務する社員中心の平均です。三菱UFJ銀行や野村證券など事業会社の全行員・全社員の平均とは母集団が異なります(事業会社単体の有報は提出されないため公表値がありません)。グループの給与水準の高さを示す指標として見てください。",
  },
  {
    q: "メガバンク3行の年収に差はありますか？",
    a: "持株会社単体の有報値では、三井住友FG 約1,180万円・三菱UFJ FG 約1,170万円・みずほFG 約1,166万円と、3グループが1,100万円台後半にほぼ横並びです(2026年3月期)。3行とも2年連続で上昇しています。",
  },
  {
    q: "未経験から金融業界へ転職できますか？",
    a: "職種によります。銀行・証券・損保の中核業務は経験者採用が中心ですが、近年はIT・デジタル・データサイエンス職の職種別採用が全グループで拡大しており、金融未経験のエンジニアの入口が広がっています。損保の損害サポートや介護事業(SOMPOケア等)など、異業種経験が活きる職種もあります。",
  },
  {
    q: "金融業界の中途採用はどこに応募すればいいですか？",
    a: "8グループとも事業会社(三菱UFJ銀行・三井住友銀行・野村證券・東京海上日動・損保ジャパン・三井住友海上など)が公式キャリア採用サイトで募集を公開しています(2026年9月6日確認)。ハイクラス・専門職は非公開求人も多いため、金融に強いエージェントやスカウト型サービスの併用が実質的な入口になります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "金融業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kinyu-salary/" },
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

export default function ItConsultantSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "金融業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            金融業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            メガバンク・証券・損保8グループの平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。コンサル・SI・品質保証まで、持株会社単体と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 金融業界年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">分野</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">平均年間給与（有報）</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">決算期</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r) => (
                <tr key={r.slug} className="border-b border-border">
                  <td className="py-3 px-4 font-bold text-navy">{r.rank}位</td>
                  <td className="py-3 px-4">
                    <Link href={`/company/${r.slug}/`} className="text-teal font-bold hover:underline">{r.name}</Link>
                    {r.hd && <span className="ml-2 text-xs bg-warm-gray rounded-full px-2 py-0.5 text-text-muted">HD単体値</span>}
                  </td>
                  <td className="py-3 px-4 text-text-secondary">{r.field}</td>
                  <td className="py-3 px-4 font-bold text-navy">{r.salary}</td>
                  <td className="py-3 px-4 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社=持株会社単体・賞与含む）。事業会社(銀行・証券・保険会社本体)の平均とは母集団が異なります。IR BANK掲載値を2026年9月6日に確認。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
        </p>

        <h2>各社の特徴と転職ガイド</h2>
        <div className="space-y-4 mb-8">
          {ranking.map((r) => (
            <div key={r.slug} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-bold text-navy">{r.rank}位 {r.name} <span className="text-teal">{r.salary}</span><span className="text-xs text-text-muted ml-1">（{r.term}）</span></h3>
                <Link href={`/company/${r.slug}/`} className="text-teal text-sm hover:underline">転職ガイドを見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{r.note}</p>
            </div>
          ))}
        </div>

        <h2>ランキングを見るときの3つの注意点</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">「HD単体値」は本社の平均</h3>
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有報値は本社機能スタッフ中心の平均。事業会社の技術職の水準は求人票・エージェント経由で確認するのが確実です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">勤続年数が長く平均年齢が高い企業ほど、全社員平均は高く出ます。中途入社時の提示額とは別物と考えましょう。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期・業績連動で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">金融は市況・業績に連動する賞与比率が高く、好業績の期は平均給与が大きく上振れします(大和証券Gの2年+494万円が典型例)。決算期の併記を確認しましょう。10社の決算期は同一ではありません。</p>
          </div>
        </div>

        <h2>金融業界の転職で活用したいエージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          金融は非公開求人が多く、専門性の見せ方が選考を左右します。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。メガバンクから地銀・保険・証券まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。金融の同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。管理職・高度専門職クラスの市場価値把握に。金融ハイクラス求人が集まる。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・金融専門職に強み。銀行・証券・保険のミドル〜ハイクラスに。" },
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

        <h2>よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">金融業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/maker-salary/" className="btn-outline px-8 py-3">メーカーの年収ランキングも見る</Link>
            <Link href="/company/game-salary/" className="btn-outline px-8 py-3">ゲーム会社の年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
