import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "建設ゼネコンの年収ランキング【2026年・有価証券報告書】大手9社を一次データで比較",
  description:
    "スーパーゼネコン・準大手9社の平均年収を有価証券報告書の記載値でランキング。鹿島建設1,245万円・大林組1,239万円・大成建設1,191万円・西松建設1,061万円・清水建設1,043万円ほか。2年で+227万円の急上昇組、年齢構成の注意、キャリア採用の入口まで一次データで解説します。",
  openGraph: {
    title: "建設ゼネコンの年収ランキング【2026年・有価証券報告書】",
    description: "ゼネコン大手9社の平均年収を有報記載値でランキング。キャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "kajima", name: "鹿島建設", salary: "約1,245万円", term: "2026年3月期", note: "収録9社トップ。3年連続上昇。北米中心の海外開発事業も柱", field: "スーパーゼネコン" },
  { rank: 2, slug: "obayashi", name: "大林組", salary: "約1,239万円", term: "2026年3月期", note: "2年で+173万円と急伸し鹿島と6万円差。建築・土木のバランス型", field: "スーパーゼネコン" },
  { rank: 3, slug: "taisei", name: "大成建設", salary: "約1,191万円", term: "2026年3月期", note: "直近期+133万円の大幅上昇。平均勤続17.0年", field: "スーパーゼネコン" },
  { rank: 4, slug: "nishimatsu", name: "西松建設", salary: "約1,061万円", term: "2026年3月期", note: "2年で+227万円=収録9社最大の伸び。ダム・トンネルの土木名門", field: "準大手" },
  { rank: 5, slug: "shimizu", name: "清水建設", salary: "約1,043万円", term: "2026年3月期", note: "スーパーゼネコンの一角。3年連続上昇", field: "スーパーゼネコン" },
  { rank: 6, slug: "haseko", name: "長谷工コーポレーション", salary: "約1,039万円", term: "2026年3月期", note: "マンション建設特化。平均39.4歳=収録9社最年少", field: "マンション特化" },
  { rank: 7, slug: "toda", name: "戸田建設", salary: "約1,038万円", term: "2026年3月期", note: "2年で+197万円。医療・教育建築の実績で知られる", field: "準大手" },
  { rank: 8, slug: "penta-ocean", name: "五洋建設", salary: "約935万円", term: "2026年3月期", note: "港湾・海洋土木(マリコン)の国内最大手。洋上風力に強み", field: "マリコン" },
  { rank: 9, slug: "kumagai", name: "熊谷組", salary: "約917万円", term: "2026年3月期", note: "山岳土木の伝統。住友林業と資本業務提携", field: "準大手" },
];

const faqData = [
  {
    q: "ゼネコンで平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(IR BANK掲載値を2026年9月12日確認)では、鹿島建設が約1,245万円(2026年3月期)でトップです。大林組が約1,239万円と6万円差で続き、大成建設約1,191万円まで、スーパーゼネコン3社が1,200万円前後に並びます。準大手でも西松建設が約1,061万円と1,000万円を超えています。",
  },
  {
    q: "ゼネコンの年収は上がっていますか？",
    a: "収録9社のうち8社が直近期に上昇しています(2026年9月12日・IR BANK掲載の有報値で確認)。特に西松建設(2年で+227万円)・戸田建設(2年で+197万円)・大林組(2年で+173万円)・大成建設(直近期+133万円)の伸びが大きく、建設需要と処遇改善が反映されています。唯一、長谷工コーポレーションは直近期▼18万円ですが、その前期に+94万円上昇していました。",
  },
  {
    q: "この数値は施工管理の平均年収ですか？",
    a: "いいえ、提出会社の全従業員平均です。施工管理・設計・技術研究・本社スタッフを合算した数値で、職種・年代により実際の水準は異なります。また平均年齢が39.4歳(長谷工)から44.27歳(戸田建設)まで異なるため、序列は年齢構成の影響込みで見てください。現場配属の場合は全国転勤・現場常駐の働き方も年収と合わせて確認が必要です。",
  },
  {
    q: "ゼネコンへの転職は未経験でも可能ですか？",
    a: "施工管理・設計の中核職は建築・土木系の専門性や資格(一級建築士・1級施工管理技士など)が前提になることが多い一方、DX・BIM関連・経理財務・法務などコーポレート系は異業種からの転職事例が広がっています。異業種から施工管理を目指す場合は、研修制度のある会社や派遣型からの経験積み上げも現実的な入口です。",
  },
  {
    q: "ゼネコン大手の中途採用はどこに応募すればいいですか？",
    a: "9社とも公式サイトに採用ページがあります(2026年9月12日確認)。大成建設は採用専用サイト(taisei.co.jp/saiyo/)、熊谷組は採用トップページ(saiyoutop)を設けるなど、入口はいずれも公式サイトから辿れます。専門職・管理職は非公開求人も多いため、建設業界に強いエージェントやスカウト型サービスの併用が実質的な入口になります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "建設ゼネコンの年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kensetsu-salary/" },
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

export default function KensetsuSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "建設ゼネコンの年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            建設ゼネコンの年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            スーパーゼネコン・準大手・専門大手9社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。この2年で200万円超上昇した会社もある賃上げ局面の実像、平均年齢の差による見え方の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 建設ゼネコン年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">区分</th>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・賞与含む）。IR BANK掲載値を2026年9月12日に確認。いずれも2026年3月期で時点が揃っています。竹中工務店は非上場のため有報ベースの比較対象外です。
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
            <h3 className="font-bold text-navy mb-2 text-sm">全従業員平均であること</h3>
            <p className="text-xs text-text-secondary leading-relaxed">施工管理・設計・本社スタッフを合算した提出会社の平均です。現場手当・残業の多寡で個人差が大きい業界のため、職種別の実額は求人票で確認しましょう。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均年齢の差に注意</h3>
            <p className="text-xs text-text-secondary leading-relaxed">長谷工39.4歳から戸田建設44.27歳まで約5歳の開きがあります。年齢構成が若い会社ほど平均年収は低く見えるため、序列は構成込みで読んでください。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">賃上げ局面の途中経過</h3>
            <p className="text-xs text-text-secondary leading-relaxed">西松+227万円・戸田+197万円(いずれも2年計)など急上昇中の会社が多く、単年の数値はすぐ古くなります。推移と最新の有報で見るのがおすすめです。</p>
          </div>
        </div>

        <h2>建設業界の転職で活用したいエージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          ゼネコンは施工管理・設計の専門職採用が中心で、非公開求人も多い業界です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。ゼネコンの施工管理から本社機能まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。建設業界の同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。所長級・技術系マネジメントなどハイクラス職の市場価値把握に。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラスに強み。海外工事・プラント系のスペシャリスト・管理職に。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">建設業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/tetsudo-salary/" className="btn-outline px-8 py-3">鉄道の年収ランキングも見る</Link>
            <Link href="/company/kagaku-salary/" className="btn-outline px-8 py-3">化学の年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
