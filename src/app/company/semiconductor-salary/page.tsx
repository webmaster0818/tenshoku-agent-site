import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "半導体業界の年収ランキング【2026年・有価証券報告書】装置メーカー中心に9社を一次データで比較",
  description:
    "半導体業界の平均年収を有価証券報告書の記載値（決算期明記）にもとづきランキング形式で比較します。レーザーテック1,881万円・ディスコ1,879万円・東京エレクトロン1,380万円・アドバンテスト1,098万円ほか9社。持株会社単体と事業会社の違い、年収が高い背景、中途採用の入口まで一次データで解説します。",
  alternates: { canonical: "/company/semiconductor-salary/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "半導体業界の年収ランキング【2026年・有価証券報告書】",
    description: "半導体装置メーカー中心に9社の平均年収を有価証券報告書の記載値にもとづきランキング形式で比較します。転職の入口も解説します。",
  },
};

// 年収は各社ページ掲載の有価証券報告書で検証した数値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "lasertec", name: "レーザーテック", salary: "約1,881万円", term: "2026年6月期", note: "EUVマスク検査装置で世界シェアの大半を占めています。6月決算のため、2026年9月24日提出の有価証券報告書（2026年6月期）が最新確定値で、前事業年度比+11.9%です。単体の従業員数が少ない構成です。", hd: false, field: "検査装置（EUVマスク）" },
  { rank: 2, slug: "disco", name: "ディスコ", salary: "約1,879万円", term: "2026年3月期", note: "半導体の切断・研削・研磨装置（ダイサ・グラインダ等の精密加工装置）で世界トップシェアを持つメーカーです。有価証券報告書には独自の社内管理会計「個人Will会計」の収支が賞与に反映される旨の記載があり、平均給与は賞与を含む数値として業界最高水準です。", hd: false, field: "精密加工装置" },
  { rank: 3, slug: "tokyo-electron", name: "東京エレクトロン", salary: "約1,380万円", term: "2026年3月期", note: "半導体製造装置で国内首位・世界トップクラスのメーカーで、世界の半導体投資拡大が追い風となっています。製造・開発は国内子会社が担っていますが、純粋持株会社ではなく事業会社です。", hd: false, field: "半導体製造装置" },
  { rank: 4, slug: "advantest", name: "アドバンテスト", salary: "約1,098万円", term: "2026年3月期", note: "半導体テスタ（試験装置）で世界トップクラスのメーカーです。単体は連結の3割弱の人員であり、グループ全体の給与水準を示す値ではない点にご注意ください。", hd: false, field: "半導体試験装置" },
  { rank: 5, slug: "screen-hd", name: "SCREENホールディングス", salary: "約1,080万円", term: "2026年3月期", note: "半導体洗浄装置などを手がけるSCREENグループの純粋持株会社です。有価証券報告書の数値は持株会社単体653名（本社機能中心）の平均であり、SCREENセミコンダクターソリューションズ等の事業会社の水準を示す値ではない点にご注意ください。", hd: true, field: "洗浄装置（グループ）" },
  { rank: 6, slug: "murata", name: "村田製作所", salary: "約838万円", term: "2026年3月期", note: "積層セラミックコンデンサ（MLCC）で世界シェア首位級の、スマホ・車載向けを支える京都の電子部品大手です。装置ではなく電子部品・デバイスのメーカーです。", hd: false, field: "電子部品（MLCC）" },
  { rank: 7, slug: "tokyo-seimitsu", name: "東京精密", salary: "約828万円", term: "2026年3月期", note: "プローバ・ウェーハダイシング等の計測・加工装置と精密測定機器のメーカーです（ACCRETECHブランド）。前事業年度比+5.7%で、IR BANK集計の推移では過去12年の最高水準です。", hd: false, field: "計測・加工装置" },
  { rank: 8, slug: "rohm", name: "ローム", salary: "約804万円", term: "2026年3月期", note: "京都本社の半導体メーカーです。パワー半導体・カスタムLSIが主力で、SiCパワー半導体への投資を拡大しています。装置ではなく半導体デバイスそのものを製造しています。", hd: false, field: "半導体（パワー・LSI）" },
  { rank: 9, slug: "renesas", name: "ルネサスエレクトロニクス", salary: "約749万円", term: "2025年12月期", note: "マイコン(MCU)中心の半導体デバイス大手です。12月決算のため2025年12月期が最新確定値です。889万→809万→749万円と直近3年は減少傾向にあり、装置メーカー群との差にはデバイス市況の年度間変動も影響しています。", hd: false, field: "半導体デバイス(マイコン)" },
];

const faqData = [
  {
    q: "半導体業界で平均年収が一番高いのはどこですか？",
    a: "当サイトが有価証券報告書で確認した9社では、レーザーテックが約1,881万円（2026年6月期）で最も高く、ディスコ約1,879万円（2026年3月期）・東京エレクトロン約1,380万円（2026年3月期）が続きます。1位と2位の差は約1.6万円です。上位は半導体デバイスメーカーではなく、製造装置・検査装置のメーカーが占めています。ディスコの平均は賞与を含む数値で、有価証券報告書に賞与が個人の成果に連動する仕組み（個人Will会計）の記載がある点など、数値の背景もあわせて確認することをおすすめします。",
  },
  {
    q: "半導体業界の年収はなぜ高いのですか？",
    a: "有価証券報告書ベースで確認できる範囲では、上位各社は世界シェアの高い装置・検査分野を持ち、世界的な半導体投資の拡大が業績の追い風になってきたこと、平均年間給与が賞与・基準外賃金を含む数値で業績を反映しやすいことが背景として挙げられます。実際、ディスコ（+12.4%）や東京精密（+5.7%）のように前期比で平均給与が伸びた企業が複数あります。ただし賞与連動である以上、業績により変動し得る点にご留意ください。",
  },
  {
    q: "SCREENホールディングスの約1,080万円はなぜ注意が必要なのですか？",
    a: "SCREENホールディングスは純粋持株会社で、有価証券報告書の平均年間給与は単体653名（経営企画・管理部門など本社機能中心）の平均だからです。実際の事業と採用はSCREENセミコンダクターソリューションズ等の事業会社が担っており、事業会社の給与水準はこの数値と異なります。転職を検討する場合は、入社する事業会社の求人票やエージェント経由でポジションごとのレンジを確認することをおすすめします。",
  },
  {
    q: "半導体の装置メーカーとデバイスメーカーでは年収に差がありますか？",
    a: "今回の9社の有価証券報告書の数値では、製造装置・検査装置のメーカー（ディスコ約1,879万円〜東京精密約828万円）が上位に多く、デバイス・部品のメーカー（村田製作所約838万円・ローム約804万円）が続く分布です。ただし各社で決算期・従業員構成（平均年齢・勤続年数・単体の範囲）が異なるため、装置かデバイスかだけで単純に優劣を判断できるものではありません。",
  },
  {
    q: "半導体業界への転職はどこから応募すればいいですか？",
    a: "各社の公式採用サイトのキャリア採用ページが基本の入口です。SCREENグループのような持株会社体制では採用が事業会社単位で行われることがあるため、応募先の会社名をご確認ください。技術系はメーカー・製造業に強い転職エージェント、ハイクラス層はスカウト型サービスの併用が有効です。詳しくは各社の転職ガイドをご覧ください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "半導体業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/semiconductor-salary/" },
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

export default function SemiconductorSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "半導体業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            半導体業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            半導体業界9社（製造装置・検査装置・計測装置・電子部品・デバイス）の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）のみにもとづき、ランキング形式で整理しました。ネット上に多い「推定年収」や口コミの集計ではなく、各社がEDINETに提出した一次データにもとづく数値です。持株会社単体と事業会社の違い、年収が高い背景、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有価証券報告書準拠 半導体業界 年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均。賞与・基準外賃金を含む）です。「HD単体値」のSCREENホールディングスは持株会社本体（本社機能中心・単体653名）の平均で、事業会社の給与水準とは異なります。レーザーテックは6月決算のため決算期が他社と異なるなど、時点差にもご留意ください。
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

        <h2>半導体業界の年収が高い背景（有価証券報告書から確認できる範囲）</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>上位はレーザーテック（EUVマスク検査装置）・ディスコ（精密加工装置）・東京エレクトロン（製造装置）と、いずれも世界シェアの高い装置・検査分野を持つメーカーです。世界的な半導体投資の拡大が業績の追い風になってきたことが、給与水準の背景の一つとして挙げられます。</li>
            <li>有価証券報告書の平均年間給与は賞与・基準外賃金を含む数値のため、業績が賞与を通じて平均値に反映されやすい構造です。ディスコは有価証券報告書に「個人Will会計上の収支は自身の賞与に反映されます」と記載があり、賞与が個人の成果に連動する仕組みを取っています。</li>
            <li>実際に、レーザーテックは前事業年度比+11.9%、ディスコは前期比+12.4%、東京精密は前事業年度比+5.7%（過去12年で最高水準）、SCREENホールディングスは前期比+1.7%と、直近期に平均給与が伸びた企業が複数あります。</li>
            <li>ただし賞与に連動する以上、業績局面によって変動し得ます。半年〜1年で市況が動く業界のため、単年の数値だけでなく推移もあわせて確認することをおすすめします。</li>
          </ul>
        </div>

        <h2>持株会社と事業会社の違いに注意</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。どの範囲の従業員の平均なのかで、数値の意味が大きく変わります。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong className="text-navy">純粋持株会社の単体値（SCREENホールディングス）</strong>：単体653名は経営企画・管理部門など本社機能中心の構成です。半導体洗浄装置などの事業はSCREENセミコンダクターソリューションズ等の事業会社が担っており、約1,080万円は事業会社の給与水準を示す値ではありません。</li>
            <li><strong className="text-navy">単体が連結の一部のケース（アドバンテスト）</strong>：単体は連結の3割弱の人員で、海外を含むグループ全体の平均を示す値ではありません。</li>
            <li><strong className="text-navy">事業会社の単体値（ディスコ・東京精密など）</strong>：製造・開発を含む全従業員の平均に近く、実態を把握しやすい数値です。ただし、職種・役職による差はあります。</li>
            <li>中途採用の応募先も、持株会社体制では事業会社単位になるのが基本です。求人票の会社名と募集要項をご確認ください。</li>
          </ul>
        </div>

        <h2>ランキングを見るときの3つの注意点</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">「HD単体値」は本社の平均</h3>
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有価証券報告書の数値は、本社機能スタッフを中心とした平均です。事業会社の技術職の水準は求人票・転職エージェント経由で確認することをおすすめします。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期の違い</h3>
            <p className="text-xs text-text-secondary leading-relaxed">レーザーテックは6月決算で最新確定値は2026年6月期です。他社は2026年3月期が中心のため、比較の際は3か月の時点差にご留意ください。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均値と提示額の違い</h3>
            <p className="text-xs text-text-secondary leading-relaxed">平均年間給与は全社員平均で、年齢構成・勤続年数の影響を受けます。中途入社時の提示額はポジション・経験により個別に決まります。</p>
          </div>
        </div>

        <h2>半導体業界の転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          半導体の技術系は非公開求人が多く、専門性の見せ方が選考を左右します。複数のエージェントに登録し、求人と情報を幅広く集めることをおすすめします。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。装置メーカーからデバイス・部品メーカーまで幅広い求人を扱っており、技術系・事務系の両方に強みがあります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。半導体関連の同業比較・年収レンジ把握がしやすい点が特長です。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。年収レンジの高い装置メーカーのポジション紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。管理職・高度専門職クラスの市場価値の把握に適しています。ハイクラスのメーカー求人が多く集まります。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">半導体業界への転職を考えたら</h2>
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
