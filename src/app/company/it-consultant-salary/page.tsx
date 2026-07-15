import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ITコンサル・SIerの年収ランキング【2026年・有価証券報告書】大手7社を一次データで比較",
  description:
    "大手ITコンサル・SIerの平均年収を有価証券報告書の記載値（決算期明記）でランキング。野村総研1,332万円・ベイカレント1,331万円・オービック1,129万円・電通総研1,125万円ほか7社。持株会社単体と事業会社の違い、中途採用の入口、転職難易度まで一次データで解説します。",
  openGraph: {
    title: "ITコンサル・SIerの年収ランキング【2026年・有価証券報告書】",
    description: "大手ITコンサル・SIer7社の平均年収を有報記載値でランキング。転職難易度も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "nri", name: "野村総合研究所（NRI）", salary: "約1,332万円", term: "2026年3月期", note: "コンサル＋SIの国内最大手級。単体7,982名と母集団が大きく代表性が高い", hd: false, field: "コンサル・SI" },
  { rank: 2, slug: "baycurrent", name: "ベイカレント", salary: "約1,331万円", term: "2026年2月期", note: "平均31.3歳でこの水準。総合コンサル。持株会社化で単体母集団は変動（要注記）", hd: true, field: "総合コンサル" },
  { rank: 3, slug: "obic", name: "オービック", salary: "約1,129万円", term: "2026年3月期", note: "業務ソフト「OBIC7」の開発・導入。高収益で知られるSIer", hd: false, field: "SI・業務ソフト" },
  { rank: 4, slug: "dentsu-soken", name: "電通総研", salary: "約1,125万円", term: "2025年12月期", note: "旧・電通国際情報サービス。コンサル＋システム開発", hd: false, field: "コンサル・SI" },
  { rank: 5, slug: "simplex", name: "シンプレクスHD", salary: "約938万円", term: "2026年3月期", note: "金融領域のフロントに強い。持株会社単体146名の値", hd: true, field: "金融IT" },
  { rank: 6, slug: "future", name: "フューチャー", salary: "約794万円", term: "2025年12月期", note: "ITコンサルを掲げる独立系。上流から実装まで一気通貫", hd: false, field: "ITコンサル・SI" },
  { rank: 7, slug: "shift", name: "SHIFT", salary: "約684万円", term: "2025年8月期", note: "ソフトウェアテスト起点の急成長企業。単体6,201名・未経験育成枠あり", hd: false, field: "品質保証・SI" },
];

const faqData = [
  {
    q: "ITコンサル・SIerで平均年収が一番高いのはどこですか？",
    a: "当サイトが有価証券報告書で確認した大手7社では、野村総研が約1,332万円（2026年3月期）とベイカレント約1,331万円（2026年2月期）がほぼ並んでトップです。ただしベイカレントは持株会社化で単体母集団が変動しており、少数精鋭の値である点に注意が必要です。",
  },
  {
    q: "持株会社（HD）の平均年収はなぜ参考程度なのですか？",
    a: "有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。ベイカレントやシンプレクスHDのような持株会社体制では、単体＝持株会社本体（経営管理・管理部門等）中心の平均となり、実際にコンサルタントとして働く事業会社の給与実態とは母集団が異なる場合があります。中途で入る事業会社の提示額はエージェント経由で確認するのが確実です。",
  },
  {
    q: "ITコンサルとSIerでは年収にどのくらい差がありますか？",
    a: "有報ベースで見ると、総合・IT系コンサルを掲げる企業（野村総研約1,332万・ベイカレント約1,331万・電通総研約1,125万円）が上位に、SI・品質保証系（シンプレクスHD約938万・フューチャー約794万・SHIFT約684万円）が中位に分布します。上流の企画・戦略に関わるコンサル領域ほど付加価値が高く給与に表れやすい傾向があります。一方でオービック約1,129万円のように、高収益なSIerは業種の枠を超えて高水準となる例もあり、分野だけで一概に決まるわけではありません。",
  },
  {
    q: "未経験からITコンサル・SIerへ転職できますか？",
    a: "職種によります。上流のコンサルタント（戦略・業務・IT）は同業やSIer・事業会社での実務経験が重視される経験者採用が中心で、難易度は高めです。一方、SHIFTのように未経験の育成枠を設ける企業や、SIerのエンジニア職では第二新卒・異業種からの採用枠もあります。募集の有無・職種は時期により変動するため、各社の採用サイトとエージェントの併用が入口になります。詳しくは各社の転職ガイドをご覧ください。",
  },
  {
    q: "ITコンサル・SIerの中途採用はどこに応募すればいいですか？",
    a: "各社の採用ページからの直接応募と、転職エージェント経由の応募が主な入口です。ITコンサル・SIerは非公開求人が多く、コンサル・IT領域に強いエージェントやスカウト型サービスを併用すると、ポジションや年収レンジの実情を確認しやすくなります。ベイカレントやシンプレクスHDのような持株会社体制の企業は、採用が事業会社単位で行われる場合がある点にも留意しましょう。",
  },
];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ITコンサル・SIerの年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ITコンサル・SIerの年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手ITコンサル・SIer7社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。コンサル・SI・品質保証まで、持株会社単体と事業会社の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 ITコンサル・SIer年収ランキング</h2>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均）。「HD単体値」のベイカレント・シンプレクスHDは持株会社本体（管理部門中心）の平均で、事業会社の給与水準とは母集団が異なる場合があります。決算期が各社で異なるため、単純比較の際は時点差にご留意ください。
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
            <p className="text-xs text-text-secondary leading-relaxed">コンサル・SIは業績連動賞与の比率が高く、好業績の期は平均給与が上振れする例があります。決算期の併記を確認しましょう。7社の決算期は同一ではありません。</p>
          </div>
        </div>

        <h2>ITコンサル・SIer転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          ITコンサル・SIerは非公開求人が多く、専門性の見せ方が選考を左右します。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手ITコンサル・SIerから中堅まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。ITコンサル・SIerの同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。管理職・高度専門職クラスの市場価値把握に。ハイクラスのITコンサル・SIer求人が集まる。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・エンジニア特化。SIer・ITコンサルのエンジニア・DX系の技術職に。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ITコンサル・SIerへの転職を考えたら</h2>
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
