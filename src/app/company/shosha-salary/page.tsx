import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/shosha-salary/" },
  title: "総合商社の年収ランキング【2026年・有価証券報告書】7大商社+専門商社を一次データで比較",
  description:
    "総合商社の平均年収を有価証券報告書の記載値（2026年3月期）でランキングしています。三菱商事2,112万円・三井物産2,058万円・伊藤忠商事1,991万円・住友商事1,840万円・丸紅1,784万円の5大商社に、豊田通商・双日・兼松などを加えた9社を掲載し、全従業員平均の意味と採用の入口まで解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "総合商社の年収ランキング【2026年・有価証券報告書】",
    description: "7大商社+専門商社9社の平均年収を有価証券報告書の記載値でランキングしています。キャリア採用の入口も解説します。",
  },
};

// 年収は各社ページ掲載の有価証券報告書で検証した数値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "mitsubishi-corp", name: "三菱商事", salary: "約2,112万円", term: "2026年3月期", note: "日本最大級の総合商社です。当サイト収録企業の中でも最高値です。2,000万円台で推移し、最新期は過去最高圏にあります。", hd: false, field: "総合商社" },
  { rank: 2, slug: "mitsui-bussan", name: "三井物産", salary: "約2,058万円", term: "2026年3月期", note: "資源分野に強みがあります。2年連続で上昇し、2,000万円台に到達しました。", hd: false, field: "総合商社" },
  { rank: 3, slug: "itochu", name: "伊藤忠商事", salary: "約1,991万円", term: "2026年3月期", note: "非資源・生活消費に強みがあります。最新期に187万円の大幅上昇となりました。", hd: false, field: "総合商社" },
  { rank: 4, slug: "sumitomo-corp", name: "住友商事", salary: "約1,840万円", term: "2026年3月期", note: "金属・輸送機・インフラのバランス型で、平均勤続18年3ヶ月の長期就業型です。", hd: false, field: "総合商社" },
  { rank: 5, slug: "marubeni", name: "丸紅", salary: "約1,784万円", term: "2026年3月期", note: "食料・アグリ・電力に強みがあります。2年連続で上昇しています。", hd: false, field: "総合商社" },
  { rank: 6, slug: "toyota-tsusho", name: "豊田通商", salary: "約1,421万円", term: "2026年3月期", note: "トヨタグループの商社で、自動車バリューチェーンとアフリカ事業を展開しています。2年で計159万円上昇しました。", hd: false, field: "総合商社" },
  { rank: 7, slug: "sojitz", name: "双日", salary: "約1,257万円", term: "2026年3月期", note: "7大商社で最も若い構成です(平均40.5歳)。航空・自動車に強みがあります。", hd: false, field: "総合商社" },
  { rank: 8, slug: "kanematsu", name: "兼松", salary: "約1,201万円", term: "2026年3月期", note: "電子・デバイスと食料の老舗専門商社です。平均37.7歳の若い構成で、2年間に計192万円の大幅上昇となりました。", hd: false, field: "専門商社" },
  { rank: 9, slug: "hanwa", name: "阪和興業", salary: "約997万円", term: "2026年3月期", note: "鉄鋼流通の独立系最大手です。平均37.4歳の最年少構成で、2年間に計148万円上昇し、1,000万円に迫る水準です。", hd: false, field: "専門商社" },
];

const faqData = [
  {
    q: "総合商社で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(2026年3月期・IR BANK掲載値を2026年9月5日確認)では、三菱商事が約2,112万円でトップです。三井物産 約2,058万円、伊藤忠商事 約1,991万円が続き、5大商社はいずれも1,700万円台後半〜2,100万円台に分布しています。",
  },
  {
    q: "商社の平均年収が高いのはなぜですか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値であり、商社は資源価格や事業投資の利益に連動して賞与が大きく変動します。近年は資源高・円安・事業投資の好調を背景に賞与水準が高く、伊藤忠商事の+187万円(最新期)のような大幅な増加が生じています。逆に、業績次第で下がる年もある点にご留意ください。",
  },
  {
    q: "平均年収2,000万円は全員がもらえる水準ですか？",
    a: "いいえ。有価証券報告書の値は総合職・一般職を含む従業員の平均で、賞与・時間外手当を含みます。なお、伊藤忠商事は休職者及び定年後再雇用等の有期雇用従業員を除いて算定しており、従業員持株会制度の特別奨励金を含みます。年次・職掌により実際の水準は大きく異なり、中途入社時の提示額はポジションごとに個別に決まります。あくまで「会社全体の給与水準の高さ」を示す指標としてご覧ください。",
  },
  {
    q: "未経験から総合商社へ転職できますか？",
    a: "5大商社のキャリア採用は事業領域別のポジション採用が中心で、応募領域の専門実務経験(資源・食料・金融・DX・経理財務など)が前提になります。業界未経験でも、職種の専門性(M&A・法務・デジタル等)が合致すれば可能性があります。若手ポテンシャル枠は第二新卒向けに開かれる時期もあるため、各社の採用サイトを定期的に確認することをおすすめします。",
  },
  {
    q: "総合商社の中途採用はどこに応募すればいいですか？",
    a: "9社とも公式のキャリア採用サイト(または採用ポータル)で募集ポジションを公開しています(2026年9月5日確認)。加えて商社は非公開求人・スカウト経由の採用も多いため、ハイクラス向け転職エージェントやスカウト型サービスの併用が有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "総合商社の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/shosha-salary/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "総合商社の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            総合商社の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手総合商社10社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。持株会社単体と事業会社の違いや、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有価証券報告書準拠 総合商社年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">分野</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">平均年間給与（有価証券報告書）</th>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・賞与含む）。伊藤忠商事は休職者及び定年後再雇用等の有期雇用従業員を除いた平均で、従業員持株会制度の特別奨励金を含みます。総合職・一般職を含む平均のため、職掌・年次による実際の水準とは異なります。IR BANK掲載値を2026年9月5日に確認。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
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
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有価証券報告書の数値は、本社機能スタッフを中心とした平均です。事業会社の技術職の水準は求人票や転職エージェント経由で確認することをおすすめします。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">年齢・勤続年数による平均値の上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">勤続年数が長く平均年齢が高い企業ほど、全社員平均は高く出ます。中途入社時の提示額とは異なる点にご留意ください。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期・業績連動で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">商社は資源価格・事業投資益に連動する賞与比率が高く、好業績の期は平均給与が大きく上振れします。決算期の併記をご確認ください。10社の決算期は同一ではありません。</p>
          </div>
        </div>

        <h2>総合商社転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          総合商社は非公開求人が多く、専門性の見せ方が選考を左右します。複数の転職エージェントに登録し、求人と情報を幅広く集めることをおすすめします。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手総合商社から中堅まで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。総合商社の同業比較・年収レンジ把握がしやすい点が特長です。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。管理職・高度専門職クラスの市場価値の把握に適しています。ハイクラスの総合商社求人が多く集まります。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・グローバル転職に強みがあります。商社の事業投資・海外系ポジションの紹介に適しています。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">総合商社への転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">各社の転職ガイドで一次データを確認したうえで、ポジションごとの詳細は転職エージェントを通じてご確認ください。</p>
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
