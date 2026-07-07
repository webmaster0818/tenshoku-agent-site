import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゲーム会社の年収ランキング【2026年・有価証券報告書】転職難易度もあわせて解説",
  description:
    "大手ゲーム会社の平均年収を有価証券報告書の記載値（決算期明記）でランキング。任天堂982万円・カプコン985万円・コーエーテクモ903万円・セガサミー884万円・コナミ850万円。持株会社単体と開発現場の数値の違い、中途採用の入口、転職難易度まで一次データで解説します。",
  openGraph: {
    title: "ゲーム会社の年収ランキング【2026年・有価証券報告書】",
    description: "大手ゲーム会社の平均年収を有報記載値でランキング。転職難易度も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "capcom", name: "カプコン", salary: "約985万円", term: "2026年3月期", note: "前期約919万円から上昇。業績好調が平均給与に反映。モンハン・バイオ等の看板IPを持つ大阪本社のメーカー", hd: false },
  { rank: 2, slug: "nintendo", name: "任天堂", salary: "約982万円", term: "2026年3月期", note: "平均勤続約14.6年と長期雇用型。Switch 2時代もハード・ソフト一体開発の総本山", hd: false },
  { rank: 3, slug: "koei-tecmo", name: "コーエーテクモHD", salary: "約903万円", term: "2026年3月期", note: "持株会社単体（121名）の数値。開発の中核はコーエーテクモゲームス等の事業会社", hd: true },
  { rank: 4, slug: "sega-sammy", name: "セガサミーHD", salary: "約884万円", term: "2026年3月期", note: "持株会社単体（408名）の数値。ゲームはセガ、遊技機はサミーが担う", hd: true },
  { rank: 5, slug: "konami", name: "コナミグループ", salary: "約850万円", term: "2026年3月期", note: "持株会社単体（259名）の数値。ゲームはKONAMIデジタルエンタテインメント等が担う", hd: true },
];

const faqData = [
  {
    q: "ゲーム会社で平均年収が一番高いのはどこですか？",
    a: "当サイトが有価証券報告書で確認した大手5社では、カプコンが約985万円（2026年3月期）で最も高く、任天堂の約982万円（同）がほぼ並びます。ただしコーエーテクモHD・セガサミーHD・コナミグループの数値は持株会社単体（本社機能スタッフ）の平均であり、開発現場の事業会社とは水準が異なる点に注意が必要です。",
  },
  {
    q: "持株会社（HD）の平均年収はなぜ参考程度なのですか？",
    a: "有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。持株会社体制の企業では単体＝本社機能スタッフ（経営企画・管理部門等）のみの平均となり、ゲーム開発者の給与実態を直接示しません。例えばセガサミーHDの平均勤続約4.9年もHD設立経緯・出向構造によるもので、定着率の低さを意味しません。",
  },
  {
    q: "ゲーム会社の年収は他業界と比べて高いですか？",
    a: "大手に限れば高水準です。有報ベースで比較すると、大手ゲーム5社（約850万〜985万円）は上場企業の平均を大きく上回り、当サイト掲載企業ではメルカリ（約1,176万円）やソニーグループ（約1,155万円）には及ばないものの、良品計画（約670万円）や東洋水産（約698万円）などの他業界大手を上回ります。ただし中小デベロッパーとの格差が大きい業界でもあります。",
  },
  {
    q: "ゲーム業界への転職難易度は高いですか？",
    a: "開発職（プログラマー・プランナー・デザイナー）はポートフォリオや実務実績の提示が実質必須で、人気IPを持つ大手は相応の競争があります。一方、各社ともコンシューマ・モバイル・運営型と募集領域が広く、Web・アプリ開発など近接領域からの転職事例もあります。詳しくは各社の転職ガイドをご覧ください。",
  },
  {
    q: "ゲーム会社の中途採用はどこに応募すればいいですか？",
    a: "持株会社体制の企業（コーエーテクモ・セガサミー・コナミ）は、採用が事業会社単位（コーエーテクモゲームス、セガ、KONAMIデジタルエンタテインメント等）で行われます。持株会社ではなく各事業会社の採用ページ、または転職エージェント経由での応募が入口になります。",
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

export default function GameSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ゲーム会社の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ゲーム会社の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            大手ゲーム会社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。持株会社単体と開発現場の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 ゲーム会社年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
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
                  <td className="py-3 px-4 font-bold text-navy">{r.salary}</td>
                  <td className="py-3 px-4 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・全社員平均）。「HD単体値」の3社は持株会社本体（本社機能スタッフ）の平均で、開発現場の事業会社（コーエーテクモゲームス・セガ・KONAMIデジタルエンタテインメント等）の給与水準とは異なります。参考: ゲーム事業を含むソニーグループは約1,155万円（2026年3月期・同じく本社機能中心の単体値）。
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
            <p className="text-xs text-text-secondary leading-relaxed">持株会社の有報値は本社機能スタッフの平均。開発職の水準は事業会社の求人票・エージェント経由で確認するのが確実です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均は年齢・勤続で上振れ</h3>
            <p className="text-xs text-text-secondary leading-relaxed">任天堂（平均勤続約14.6年）のような長期雇用型は平均値が高く出ます。中途入社時の提示額とは別物です。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">賞与・業績連動で変動</h3>
            <p className="text-xs text-text-secondary leading-relaxed">カプコンのように業績好調で平均給与が上昇する例があり、年度による変動があります。決算期の併記を確認しましょう。</p>
          </div>
        </div>

        <h2>ゲーム業界転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          ゲーム開発職は非公開求人が多く、ポートフォリオの見せ方も選考を左右します。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手ゲーム会社から中堅デベロッパーまで幅広くカバー。" },
            { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・エンジニア特化。ゲームプログラマー等の技術職の専門性を評価してもらいやすい。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。ゲーム業界の同業比較がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。リードクラス・マネジメント層の市場価値把握に。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ゲーム業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/maker-salary/" className="btn-outline px-8 py-3">メーカーの年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
