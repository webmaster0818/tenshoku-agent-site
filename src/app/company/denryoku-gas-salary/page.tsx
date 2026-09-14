import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "電力・ガス業界の年収ランキング【2026年・有価証券報告書】大手9社を一次データで比較",
  description:
    "電力・都市ガス大手9社の平均年収を有価証券報告書の記載値でランキング。J-POWER1,188万円・中部電力945万円・関西電力938万円・東京電力HD882万円・大阪ガス845万円ほか。2年で+143万円の急上昇組、持株会社単体の注意、キャリア採用の入口まで一次データで解説します。",
  openGraph: {
    title: "電力・ガス業界の年収ランキング【2026年・有価証券報告書】",
    description: "電力・ガス大手9社の平均年収を有報記載値でランキング。キャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "jpower", name: "電源開発(J-POWER)", salary: "約1,188万円", term: "2026年3月期", note: "収録9社トップ。全国区の卸電力(水力・石炭火力)+海外発電", field: "卸電力" },
  { rank: 2, slug: "chubu-electric", name: "中部電力", salary: "約945万円", term: "2026年3月期", note: "旧一般電気事業者で最高水準。火力はJERAに統合", field: "電力" },
  { rank: 3, slug: "kepco", name: "関西電力", salary: "約938万円", term: "2026年3月期", note: "原子力比率が高い。前期973万円からは▼35万円", field: "電力" },
  { rank: 4, slug: "tepco", name: "東京電力HD", salary: "約882万円", term: "2026年3月期", note: "国内最大グループ。HD単体は平均45.1歳・勤続22.1年と年齢構成が高い点に注意", hd: true, field: "電力" },
  { rank: 5, slug: "tohoku-electric", name: "東北電力", salary: "約872万円", term: "2026年3月期", note: "東北6県+新潟の広域基盤。2年で+93万円", field: "電力" },
  { rank: 6, slug: "osaka-gas", name: "大阪ガス", salary: "約845万円", term: "2026年3月期", note: "直近期+107万円で都市ガス首位に。Daigasグループ中核", field: "都市ガス" },
  { rank: 7, slug: "kyuden", name: "九州電力", salary: "約842万円", term: "2026年3月期", note: "原子力再稼働が先行。2年で+90万円", field: "電力" },
  { rank: 8, slug: "tokyo-gas", name: "東京ガス", salary: "約784万円", term: "2026年3月期", note: "都市ガス最大手。電力小売・海外LNGも展開", field: "都市ガス" },
  { rank: 9, slug: "toho-gas", name: "東邦ガス", salary: "約733万円", term: "2026年3月期", note: "2年で+143万円=収録9社最大級の伸び。平均41.4歳と若い構成", field: "都市ガス" },
];

const faqData = [
  {
    q: "電力・ガス業界で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(IR BANK掲載値を2026年9月14日確認)では、電源開発(J-POWER)が約1,188万円(2026年3月期)でトップです。小売を持つ電力会社では中部電力 約945万円・関西電力 約938万円が上位で、都市ガスでは大阪ガスが約845万円と東京ガス(約784万円)を上回りました。",
  },
  {
    q: "電力・ガス業界の年収は上がっていますか？",
    a: "収録9社のうち8社が直近期に上昇しています(2026年9月14日・IR BANK掲載の有報値で確認)。特に東邦ガス(2年で+143万円)・J-POWER(2年で+143万円)・大阪ガス(直近期+107万円)の伸びが大きく、電気・ガス料金の制度環境の変化と処遇改善が反映されています。唯一、関西電力は直近期▼35万円ですが、その前期に+142万円上昇していました。",
  },
  {
    q: "この数値は技術職の平均年収ですか？",
    a: "いいえ、提出会社の全従業員平均です。発電所・支社・本社部門を合算した数値で、職種・年代により実際の水準は異なります。東京電力HDは持株会社単体(平均45.1歳・勤続22.1年)の数値のため、送配電・小売など事業会社の平均とは別物です。平均年齢も41.4歳(東邦ガス)〜45.1歳(東電HD)まで差があり、序列は年齢構成の影響込みで見てください。",
  },
  {
    q: "電力・ガス会社への転職は未経験でも可能ですか？",
    a: "電気・機械・土木・原子力など技術系の中核職は専門性が前提になることが多い一方、DX・データ分析・経理財務・法務などコーポレート系は異業種からの転職事例が広がっています。また電力小売・新規事業(再エネ開発・海外)では営業・企画職の中途採用も活発です。",
  },
  {
    q: "電力・ガス大手の中途採用はどこに応募すればいいですか？",
    a: "9社とも公式サイトに採用ページがあります(2026年9月14日確認)。中部電力(saiyo.chuden.jp)・東北電力(saiyou.tohoku-epco.co.jp)は採用専用サイト、東邦ガスはキャリア採用専用ページを設けるなど、入口は公式から辿れます。専門職は非公開求人も多いため、インフラ業界に強いエージェントやスカウト型サービスの併用が実質的な入口になります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "電力・ガス業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-14",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/denryoku-gas-salary/" },
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

export default function DenryokuGasSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "電力・ガス業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            電力・ガス業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            電力・都市ガス大手9社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。2年で140万円超上昇した会社もある処遇改善局面の実像、持株会社単体の数値の意味、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 電力・ガス業界年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・賞与含む）。IR BANK掲載値を2026年9月14日に確認。東京電力HDは持株会社単体の数値です。いずれも2026年3月期で時点が揃っています。
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
            <p className="text-xs text-text-secondary leading-relaxed">東京電力HD(平均45.1歳・勤続22.1年)は年齢構成の高い持株会社単体の母集団です。送配電・小売など事業会社の現場の水準とは別物と考えてください。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均年齢の差に注意</h3>
            <p className="text-xs text-text-secondary leading-relaxed">東邦ガス41.4歳から東電HD45.1歳まで開きがあります。年齢構成が若い会社ほど平均年収は低く見えるため、序列は構成込みで読んでください。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">制度環境で振れる業界</h3>
            <p className="text-xs text-text-secondary leading-relaxed">燃料費・料金制度の影響で業績と賞与が振れます(関西電力は+142万円の翌期に▼35万円)。単年でなく推移で見るのがおすすめです。</p>
          </div>
        </div>

        <h2>電力・ガス業界の転職で活用したいエージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          インフラは技術専門職の採用が中心で、非公開求人も多い業界です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。電力・ガスの技術職から本社機能まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。インフラ業界の同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。再エネ開発・新規事業などハイクラス職の市場価値把握に。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラスに強み。海外エネルギー事業・プラント系のスペシャリスト・管理職に。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">電力・ガス業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/kensetsu-salary/" className="btn-outline px-8 py-3">建設の年収ランキングも見る</Link>
            <Link href="/company/tetsudo-salary/" className="btn-outline px-8 py-3">鉄道の年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
