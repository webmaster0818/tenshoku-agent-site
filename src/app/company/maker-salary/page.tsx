import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メーカーの年収ランキング【2026年・有価証券報告書】大手10社を一次データで比較",
  description:
    "大手メーカーの平均年収を有価証券報告書の記載値（決算期明記）でランキング。ソニーグループ1,155万円・タカラトミー1,038万円・トヨタ自動車1,006万円・HOYA970万円・ダイフク917万円ほか電機/精密/食品/家電/玩具の10社。持株会社単体と事業会社の違い、中途採用の入口、転職難易度まで一次データで解説します。",
  openGraph: {
    title: "メーカーの年収ランキング【2026年・有価証券報告書】",
    description: "大手メーカー10社の平均年収を有報記載値でランキング。転職難易度も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "sony", name: "ソニーグループ", salary: "約1,155万円", term: "2026年3月期", note: "持株会社（ソニーグループ株式会社）単体の数値で、本社機能中心の平均。エレクトロニクス・ゲーム・金融・エンタメを束ねるコングロマリット。国内メーカーでトップクラス", hd: true, field: "電機・エンタメ" },
  { rank: 2, slug: "takara-tomy", name: "タカラトミー", salary: "約1,038万円", term: "2026年3月期", note: "前期比+117万円と大きく上昇。トミカ・プラレール等の定番IPに加え、トレーディングカード・海外展開が業績を牽引", hd: false, field: "玩具" },
  { rank: 3, slug: "toyota", name: "トヨタ自動車", salary: "約1,006万円", term: "2026年3月期", note: "平均年齢40.5歳・平均勤続15.1年の全社員平均。国内製造業の頂点で、技術系・事務系とも採用規模が大きい", hd: false, field: "自動車" },
  { rank: 4, slug: "hoya", name: "HOYA", salary: "約970万円", term: "2026年3月期", note: "光学ガラス・半導体マスク・メディカル（眼鏡レンズ・内視鏡）を持つ高収益の精密メーカー。グローバル比率が高い", hd: false, field: "精密・光学" },
  { rank: 5, slug: "daifuku", name: "ダイフク", salary: "約917万円", term: "2025年12月期", note: "マテリアルハンドリング（物流・搬送システム）で世界首位級。半導体・EC物流の設備投資を追い風にする重工系メーカー", hd: false, field: "物流機器" },
  { rank: 6, slug: "yakult", name: "ヤクルト本社", salary: "約854万円", term: "2026年3月期", note: "平均勤続約17.7年と非常に長い安定雇用型。乳酸菌飲料の国内に加え、アジア・米州の海外事業が利益の柱", hd: false, field: "食品・飲料" },
  { rank: 7, slug: "zojirushi", name: "象印マホービン", salary: "約835万円", term: "2025年11月期", note: "炊飯ジャー・ステンレスボトルで知られる大阪の生活家電メーカー。単体527名規模で家電メーカーとして高めの水準", hd: false, field: "家電" },
  { rank: 8, slug: "nidec", name: "ニデック", salary: "約760万円", term: "2025年3月期", note: "精密小型モーターで世界首位。旧・日本電産。M&Aで事業領域を広げる、車載・家電・産業向けの総合モーターメーカー", hd: false, field: "精密・モーター" },
  { rank: 9, slug: "toyo-suisan", name: "東洋水産", salary: "約698万円", term: "2026年3月期", note: "「マルちゃん」ブランドの即席麺大手。北米の即席麺事業（Maruchan）が成長ドライバー。平均勤続が長い長期雇用型", hd: false, field: "食品" },
  { rank: 10, slug: "muji", name: "良品計画（無印良品）", salary: "約670万円", term: "2025年8月期", note: "「無印良品」を展開する製造小売（SPA）。企画・生産管理から店舗運営まで担う。他のメーカーとは事業構造が異なる", hd: false, field: "製造小売" },
];

const faqData = [
  {
    q: "メーカーで平均年収が一番高いのはどこですか？",
    a: "当サイトが有価証券報告書で確認した大手10社では、ソニーグループが約1,155万円（2026年3月期）で最も高く、タカラトミー約1,038万円・トヨタ自動車約1,006万円が続きます。ただしソニーグループの数値は持株会社単体（本社機能スタッフ中心）の平均であり、エレクトロニクス事業の現場給与を直接示すものではない点に注意が必要です。",
  },
  {
    q: "持株会社（HD）の平均年収はなぜ参考程度なのですか？",
    a: "有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。ソニーグループのような持株会社体制では、単体＝本社機能スタッフ（経営企画・管理部門等）中心の平均となり、各事業会社（ソニー・ソニーセミコンダクタ等）の技術者の給与実態とは水準が異なります。中途で入る事業会社の提示額はエージェント経由で確認するのが確実です。",
  },
  {
    q: "メーカーの年収は業種でどのくらい差がありますか？",
    a: "有報ベースで見ると、電機・玩具・自動車・精密（ソニー1,155万〜HOYA970万円）が上位、食品・家電・製造小売（東洋水産698万・良品計画670万円）が中位に分布します。高収益の精密・光学（HOYA・ダイフク）はグローバル比率と付加価値の高さ、食品は国内安定志向という違いが給与水準に表れています。",
  },
  {
    q: "メーカーへの転職難易度は高いですか？",
    a: "技術系（設計・開発・生産技術・品質保証）は近接する製造業での実務経験が最も評価され、経験者採用が中心です。事務系（企画・営業・管理）は募集枠が相対的に少なく競争があります。いずれも募集の有無・職種は時期により変動するため、各社の採用サイトとエージェントの併用が入口になります。詳しくは各社の転職ガイドをご覧ください。",
  },
  {
    q: "メーカーの中途採用はどこに応募すればいいですか？",
    a: "ソニーグループのような持株会社体制の企業は、採用が事業会社単位で行われることがあります。持株会社ではなく各事業会社の採用ページ、または転職エージェント経由での応募が入口です。技術系はメーカー・製造業に強いエージェント、ハイクラス層はスカウト型サービスの活用が有効です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "メーカーの年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/maker-salary/" },
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

export default function MakerSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "メーカーの年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            メーカーの年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手メーカー10社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。電機・自動車・精密・食品・家電・玩具まで、持株会社単体と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 メーカー年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均）。「HD単体値」のソニーグループは持株会社本体（本社機能スタッフ中心）の平均で、事業会社の給与水準とは異なります。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
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
            <p className="text-xs text-text-secondary leading-relaxed">ヤクルト（平均勤続約17.7年）のような長期雇用型は平均値が高く出ます。中途入社時の提示額とは別物です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">決算期・業績連動で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">タカラトミーのように業績好調で平均給与が上昇する例があり、決算期の併記を確認しましょう。10社の決算期は同一ではありません。</p>
          </div>
        </div>

        <h2>メーカー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          メーカーの技術系は非公開求人が多く、専門性の見せ方が選考を左右します。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手メーカーから中堅まで幅広くカバー。技術系・事務系の両方に強い。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。メーカーの同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。管理職・高度専門職クラスの市場価値把握に。ハイクラスのメーカー求人が集まる。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・エンジニア特化。メーカーの車載ソフト・組込・DX系の技術職に。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">メーカーへの転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/game-salary/" className="btn-outline px-8 py-3">ゲーム会社の年収ランキングも見る</Link>
            <Link href="/company/it-consultant-salary/" className="btn-outline px-8 py-3">ITコンサル・SIerの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
