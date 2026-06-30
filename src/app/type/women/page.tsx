import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性におすすめの転職エージェント5選｜評判・選び方とライフバランス両立",
  description:
    "女性におすすめの転職エージェントを厳選紹介。女性の転職支援に強いサービスの評判・選び方、ワークライフバランス重視の求人や女性管理職ポジション、育児中・ブランクありの活用法まで解説します。利用は無料。",
  openGraph: {
    title: "女性におすすめの転職エージェント5選｜評判・選び方とライフバランス両立",
    description: "女性の転職に強いエージェントの評判・選び方を厳選紹介。利用は無料。",
  },
};

const faqData = [
  { q: "女性が転職エージェントを選ぶポイントは？", a: "女性のキャリア相談に慣れたアドバイザーがいるか、時短勤務やフレックスなど柔軟な働き方の求人を扱っているか、産休・育休制度が充実した企業の求人があるかなどを確認しましょう。総合型（求人数が多い）と特化型（業界・年代に強い）を1社ずつ併用すると、求人の取りこぼしを防げます。" },
  { q: "女性向けの転職エージェントは1社だけで十分ですか？", a: "2〜3社の併用が一般的です。求人数が業界最大級のリクルートエージェントやdodaで選択肢を広げつつ、20代・第二新卒なら手厚いマイナビエージェント、年収アップ・管理職ならビズリーチやJACリクルートメントを組み合わせると、ライフプランに合った求人を比較しやすくなります。" },
  { q: "育児中でも転職エージェントを利用できますか？", a: "はい、利用可能です。多くのエージェントがオンライン面談に対応しており、お子さんの都合に合わせて面談時間を調整できます。時短勤務やリモートワーク可能な求人も紹介してもらえます。面談時に「勤務時間」「通勤時間」「リモート可否」など譲れない条件を最初に伝えると、紹介の精度が上がります。" },
  { q: "女性の転職に有利な時期はありますか？", a: "一般的に求人数が増えるのは1〜3月と9〜11月です。ただし、女性の場合はライフイベントとの兼ね合いも重要なので、自分のタイミングで準備を始めることが大切です。在職中から登録して情報収集を始めておくと、良い求人が出たときに動きやすくなります。" },
  { q: "ブランクがあっても転職できますか？", a: "はい、可能です。育児や介護でのブランクがある方向けの支援を行うエージェントもあります。ブランク中に身につけたスキルや経験も立派なアピールポイントになります。職務経歴書の書き方やブランクの伝え方も、アドバイザーに相談して整理してもらえます。" },
  { q: "女性管理職の求人は増えていますか？", a: "はい、増加傾向にあります。政府の女性活躍推進法や企業のダイバーシティ推進により、女性管理職の登用に積極的な企業が増えています。管理職・スペシャリスト志向の方は、ハイクラス向けのビズリーチやJACリクルートメントでスカウトを受けて市場価値を確認するのも有効です。" },
  { q: "転職エージェントの利用に費用はかかりますか？", a: "いいえ、転職エージェントは求職者側の費用は一切かかりません。企業からの成功報酬で運営されているため、安心して利用できます。" },
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

export default function WomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "女性におすすめの転職エージェント" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            女性におすすめの転職エージェント5選｜評判と選び方
          </h1>
          <p className="text-text-secondary leading-relaxed">
            女性の転職では、キャリアアップとワークライフバランスの両立が重要なテーマです。
            ここでは、女性のキャリア形成を支援する転職エージェントを評判・特徴の傾向とあわせて厳選紹介し、
            選び方のポイントや育児中・ブランクありの場合の活用法までまとめます。利用はいずれも無料です。
          </p>
        </div>

        {/* 結論ボックス（結論先出し） */}
        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>20代・第二新卒なら手厚い伴走の<Link href="/review/mynavi/" className="text-teal underline">マイナビエージェント</Link></strong>、幅広い求人から選びたいなら<Link href="/review/doda/" className="text-teal underline">doda</Link>・<Link href="/review/recruit-agent/" className="text-teal underline">リクルートエージェント</Link>が軸になります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>管理職・年収アップ志向なら<Link href="/review/bizreach/" className="text-teal underline">ビズリーチ</Link>・<Link href="/review/jac/" className="text-teal underline">JACリクルートメント</Link></strong>。スカウトで自分の市場価値を確認できます。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>選ぶコツは「総合型＋年代・領域特化型」を2〜3社併用</strong>すること。時短・リモート可否など譲れない条件を最初に伝えると紹介精度が上がります。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span>
              <span><strong>利用はすべて無料</strong>。育児中・ブランクありでもオンライン面談で柔軟に活用できます。</span>
            </li>
          </ul>
        </div>

        {/* ランキング */}
        <h2>女性の転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "マイナビエージェント", href: "/review/mynavi/", desc: "女性の転職支援に力を入れており、女性向けの求人特集ページも用意されています。アドバイザーが丁寧にヒアリングし、ライフステージに合わせた求人を提案してくれます。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "女性の転職に関するコンテンツが充実しています。ワークライフバランスを重視した求人や、女性活躍推進企業の求人を多数保有しています。" },
            { rank: 3, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数が業界最大級のため、時短勤務やフレックス制度のある企業、女性管理職ポジションなど、条件に合った求人を見つけやすいです。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "ハイクラス求人が中心で、管理職やスペシャリストとしてキャリアアップしたい女性におすすめです。企業から直接スカウトが届くため、市場価値の把握にも役立ちます。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "外資系企業や日系グローバル企業の求人に強く、ダイバーシティに積極的な企業の求人が多い傾向があります。年収アップを目指す女性にも向いています。" },
          ].map((agent) => (
            <div key={agent.rank} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className={`rank-badge rank-badge--${agent.rank}`}>{agent.rank}</span>
                <h3 className="font-bold text-navy text-lg">{agent.name}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-3">{agent.desc}</p>
              <Link href={agent.href} className="text-teal text-sm font-medium hover:underline">
                詳細を見る →
              </Link>
            </div>
          ))}
        </div>

        {/* 女性のキャリア */}
        <h2>女性がキャリアを築くためのポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">ワークライフバランス</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>フレックスタイム制度の有無を確認</li>
              <li>リモートワーク・在宅勤務の可否</li>
              <li>産休・育休の取得実績</li>
              <li>時短勤務制度の対象期間</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">キャリアアップ</h3>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>女性管理職の比率を確認</li>
              <li>研修・スキルアップ支援制度</li>
              <li>女性活躍推進法に基づく認定企業</li>
              <li>メンター制度の有無</li>
            </ul>
          </div>
        </div>

        {/* 選び方 */}
        <h2>女性が転職エージェントを選ぶときのポイント</h2>
        <p>
          女性の転職では、求人数の多さだけでなく<strong>「働き方の柔軟性」「ライフイベントへの理解」</strong>を満たせるかが満足度を左右します。
          以下の観点で2〜3社を併用し、求人と担当者の相性を比較しながら進めるのがおすすめです。
        </p>
        <div className="space-y-4 mb-8">
          {[
            { point: "総合型と特化型を組み合わせる", desc: "求人数が業界最大級の総合型（リクルートエージェント・doda）で選択肢を広げ、年代や領域に強い特化型を加えると、ライフプランに合う求人を見つけやすくなります。" },
            { point: "柔軟な働き方の求人を扱っているか", desc: "時短勤務・フレックス・リモートワーク可の求人をどれだけ持っているかを確認。面談時に譲れない勤務条件を具体的に伝えると、紹介の精度が上がります。" },
            { point: "女性のキャリア相談に慣れているか", desc: "育児・介護とのバランス、ブランクの伝え方、復職後のキャリアなど、女性特有の相談に乗ってくれるアドバイザーかどうかは重要です。相性が合わなければ担当変更も申し出られます。" },
            { point: "年代・志向に合うサービスを選ぶ", desc: "20代・第二新卒は手厚いマイナビエージェント、管理職・年収アップ志向はビズリーチ・JACリクルートメントなど、自分のフェーズに合うサービスを軸にしましょう。" },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <p className="font-bold text-navy mb-1 text-sm">{item.point}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-8">出典：各社公式サイトのサービス内容（2026年6月確認）。求人数・制度内容は時期により変動するため、最新値は各公式サイトの表示をご確認ください（要確認）。当サイトでは口コミ・数値の創作は行っていません。</p>

        {/* FAQ */}
        <h2>女性の転職エージェント利用 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            あなたらしいキャリアを見つけよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            女性の転職に強いエージェントに無料登録して、理想の働き方を実現しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/mynavi/" className="btn-accent px-8 py-3">
              マイナビエージェントの詳細
            </Link>
            <Link href="/review/doda/" className="btn-primary px-8 py-3 bg-navy-light">
              dodaの詳細
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェント
            </Link>
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ランキングTOPへ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
