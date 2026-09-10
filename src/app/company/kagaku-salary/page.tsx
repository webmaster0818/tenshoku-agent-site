import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "化学業界の年収ランキング【2026年・有価証券報告書】大手9社を一次データで比較",
  description:
    "総合化学・機能材料大手9社の平均年収を有価証券報告書の記載値でランキング。三菱ケミカルG1,188万円・レゾナックHD1,131万円・住友化学958万円・信越化学898万円・三井化学871万円ほか。持株会社単体の数値の意味、年齢構成の注意、キャリア採用の入口まで一次データで解説します。",
  openGraph: {
    title: "化学業界の年収ランキング【2026年・有価証券報告書】",
    description: "化学大手9社の平均年収を有報記載値でランキング。キャリア採用の入口も解説。",
  },
};

// 年収は各社ページ掲載の有報検証値（決算期付き）。各社ページと必ず一致させること。
const ranking = [
  { rank: 1, slug: "mitsubishi-chemical", name: "三菱ケミカルグループ", salary: "約1,188万円", term: "2026年3月期", note: "国内最大の総合化学。HD単体は平均50.2歳・勤続24.3年と年齢構成が高い点に注意", hd: true, field: "総合化学" },
  { rank: 2, slug: "resonac", name: "レゾナックHD", salary: "約1,131万円", term: "2025年12月期", note: "旧昭和電工×旧日立化成。半導体後工程材料で世界トップクラス", hd: true, field: "半導体材料" },
  { rank: 3, slug: "sumitomo-chemical", name: "住友化学", salary: "約958万円", term: "2026年3月期", note: "直近期+140万円の大幅回復。経験者採用の専用サイトあり", hd: false, field: "総合化学" },
  { rank: 4, slug: "shin-etsu", name: "信越化学工業", salary: "約898万円", term: "2026年3月期", note: "塩ビ・半導体シリコンで世界トップ。営業利益率は化学業界最高水準", hd: false, field: "塩ビ・半導体材料" },
  { rank: 5, slug: "mitsui-chemicals", name: "三井化学", salary: "約871万円", term: "2026年3月期", note: "メガネレンズ材料世界大手。平均40.0歳の若い構成", hd: false, field: "総合化学" },
  { rank: 6, slug: "asahi-kasei", name: "旭化成", salary: "約848万円", term: "2026年3月期", note: "化学×住宅(ヘーベルハウス)×ヘルスケアの3領域。2年で+96万円", hd: false, field: "総合化学" },
  { rank: 7, slug: "nitto-denko", name: "日東電工", salary: "約843万円", term: "2026年3月期", note: "光学フィルム・半導体材料のニッチトップ戦略。大阪本社", hd: false, field: "機能材料" },
  { rank: 8, slug: "toray", name: "東レ", salary: "約838万円", term: "2026年3月期", note: "炭素繊維で世界トップ。航空機材料・水処理膜", hd: false, field: "繊維・先端材料" },
  { rank: 9, slug: "tosoh", name: "東ソー", salary: "約828万円", term: "2026年3月期", note: "平均38.5歳=収録9社最年少。基礎化学+診断薬の両輪", hd: false, field: "総合化学" },
];

const faqData = [
  {
    q: "化学業界で平均年収が一番高いのはどこですか？",
    a: "有価証券報告書(IR BANK掲載値を2026年9月10日確認)では、三菱ケミカルグループが約1,188万円(2026年3月期・持株会社単体)でトップです。ただし同社のHD単体は平均年齢50.2歳・勤続24.3年と年齢構成が高く、平均給与は上振れしやすい母集団です。事業会社ベースの比較では住友化学 約958万円・信越化学 約898万円などが上位になります。",
  },
  {
    q: "化学業界の年収は上がっていますか？",
    a: "収録9社のうち8社が直近期に上昇しています(2026年9月10日・IR BANK掲載の有報値で確認)。特に住友化学(+140万円)・三菱ケミカルG(+129万円)・レゾナックHD(+106万円)の上昇が大きく、業績回復と賃上げの両方が反映されています。",
  },
  {
    q: "この数値は研究職の平均年収ですか？",
    a: "いいえ、提出会社の全従業員平均です。研究職・プラントオペレーター・本社スタッフを合算した数値で、職種・年代により実際の水準は異なります。三菱ケミカルG・レゾナックHDは持株会社単体の数値のため、事業会社の現場の平均とは別物です。また平均年齢が38.5歳(東ソー)から50.2歳(三菱ケミカルG)まで大きく異なるため、序列は年齢構成の影響込みで見てください。",
  },
  {
    q: "化学メーカーの転職は未経験でも可能ですか？",
    a: "研究・生産技術の中核職は化学・化学工学・材料系の専門性が前提ですが、DX・データサイエンス・知財・経理財務などコーポレート系は異業種からの転職事例が広がっています。また旭化成のように住宅・ヘルスケアまで持つ会社では、営業・施工管理など化学以外の職種の入口もあります。",
  },
  {
    q: "化学大手の中途採用はどこに応募すればいいですか？",
    a: "9社とも公式サイトに採用ページがあります(2026年9月10日確認)。住友化学は経験者採用の専用サイト(sumitomochem-careers.com)、三井化学はキャリア採用専用ページを設けるなど、中途の入口が明確な会社が増えています。専門職は非公開求人も多いため、メーカーに強いエージェントやスカウト型サービスの併用が実質的な入口になります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "化学業界の年収ランキング【有価証券報告書準拠】",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kagaku-salary/" },
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

export default function KagakuSalaryRanking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "化学業界の年収ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            化学業界の年収ランキング【2026年・有価証券報告書】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            総合化学・機能材料大手9社の平均年収を、有価証券報告書の記載値（平均年間給与・決算期明記）だけでランキングしました。ネット上に多い「推定年収」ではなく、各社がEDINETに提出した一次データにもとづく数値です。持株会社単体の数値の意味、平均年齢の差による見え方の違い、中途採用の入口もあわせて解説します。
          </p>
        </div>

        <h2>有報準拠 化学業界年収ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">順位</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy">主領域</th>
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
          ※各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社・賞与含む）。IR BANK掲載値を2026年9月10日に確認。三菱ケミカルG・レゾナックHDは持株会社単体の数値です。12月期(レゾナック)と3月期が混在するため、時点差にご留意ください。
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
            <p className="text-xs text-text-secondary leading-relaxed">三菱ケミカルG(平均50.2歳・勤続24.3年)のように、持株会社単体は年齢構成の高い本社機能中心の母集団です。事業会社の現場の水準とは別物と考えてください。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">平均年齢の差に注意</h3>
            <p className="text-xs text-text-secondary leading-relaxed">東ソー38.5歳・三井化学40.0歳と若い会社ほど平均年収は低く見えます。同年齢帯での比較は求人票・エージェント経由で確認しましょう。</p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2 text-sm">業績連動の振れ幅が大きい</h3>
            <p className="text-xs text-text-secondary leading-relaxed">住友化学の+140万円のように、市況産業ゆえ賞与の振れが平均給与を大きく動かします。単年でなく推移で見るのがおすすめです。</p>
          </div>
        </div>

        <h2>化学業界の転職で活用したいエージェント</h2>
        <p className="text-sm text-text-muted mb-4">
          化学は研究・生産技術の専門職採用が中心で、非公開求人も多い業界です。複数登録で求人と情報を広く集めましょう。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。化学メーカーの研究開発からプラント・本社機能まで幅広くカバー。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。メーカー系の同業比較・年収レンジ把握がしやすい。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。R&Dマネジメント・事業企画などハイクラス職の市場価値把握に。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ハイクラス・外資系に強み。グローバル化学メーカーの管理職・スペシャリストに。" },
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
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">化学業界への転職を考えたら</h2>
          <p className="text-white/70 text-sm mb-6">まずは各社の転職ガイドで一次データを確認し、エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/company/maker-salary/" className="btn-outline px-8 py-3">メーカーの年収ランキングも見る</Link>
            <Link href="/company/tetsudo-salary/" className="btn-outline px-8 py-3">鉄道の年収ランキングも見る</Link>
            <Link href="/company/" className="btn-accent px-8 py-3">企業別転職ガイド一覧を見る</Link>
          </div>
        </div>
      </article>
    </>
  );
}
