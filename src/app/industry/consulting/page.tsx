import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンサル業界におすすめの転職エージェント｜ケース面接対策も解説",
  description:
    "コンサルティング業界への転職におすすめのエージェントを厳選紹介。JACリクルートメント、ビズリーチ、リクルートエージェントなど、コンサル転職に強いエージェントの特徴とケース面接対策を解説します。",
  openGraph: {
    title: "コンサル業界におすすめの転職エージェント｜ケース面接対策も解説",
    description: "コンサル業界の転職に強いエージェントとケース面接対策を解説。",
  },
};

const faqData = [
  { q: "コンサル未経験でも転職できますか？", a: "コンサル未経験からの転職は可能です。特に事業会社での専門的な経験や、論理的思考力・問題解決能力が高い方は、コンサルファームから評価されることがあります。エージェントに相談して適性を確認しましょう。" },
  { q: "コンサル業界の年収水準はどのくらいですか？", a: "コンサル業界の年収は一般的に高水準と言われています。ファームの種類やポジションにより幅がありますが、経験を積むほど大幅な年収アップが期待できる業界です。" },
  { q: "ケース面接とは何ですか？", a: "ケース面接は、ビジネス上の課題に対する解決策を面接中に提示する形式の面接です。論理的思考力、問題構造化能力、コミュニケーション力が評価されます。事前の練習が非常に重要です。" },
  { q: "戦略コンサルと総合コンサルの違いは何ですか？", a: "戦略コンサルは経営戦略の立案に特化し、少数精鋭で高度な分析を行います。総合コンサルはITシステム導入や業務改善など、幅広い領域のコンサルティングを提供します。自分の強みやキャリアプランに合わせて選びましょう。" },
  { q: "コンサルから事業会社への転職（ポストコンサル）は有利ですか？", a: "はい、コンサル出身者は問題解決能力や論理的思考力が評価され、事業会社への転職で好条件のオファーを受けるケースが多くあります。経営企画、新規事業、DX推進などのポジションで需要が高い傾向にあります。" },
  { q: "英語力はどのくらい必要ですか？", a: "外資系コンサルファームではビジネスレベルの英語力が求められることが多いです。日系ファームでは必須でない場合もありますが、グローバルプロジェクトに参加するには英語力があると有利です。" },
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

export default function ConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "業界別", href: "/" },
          { name: "コンサル" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            コンサル業界におすすめの転職エージェント
          </h1>
          <p className="text-text-secondary leading-relaxed">
            コンサルティング業界への転職には、業界の採用プロセスや選考基準を熟知したエージェントの活用が不可欠です。
            ケース面接対策からファーム選びまで、コンサル転職を成功させるためのエージェントと対策を紹介します。
          </p>
        </div>

        {/* おすすめランキング */}
        <h2>コンサル転職におすすめのエージェント TOP3</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              rank: 1,
              name: "JACリクルートメント",
              desc: "外資系・ハイクラスに強く、コンサルファームとの太いパイプを持つ。コンサルタント一気通貫型のため、ファームの内部情報や選考ポイントを直接聞けます。",
              href: "/review/jac/",
            },
            {
              rank: 2,
              name: "ビズリーチ",
              desc: "コンサルファームやヘッドハンターからのスカウトが届きます。ハイクラス向けのため、マネージャー以上のポジションの求人が充実しています。",
              href: "/review/bizreach/",
            },
            {
              rank: 3,
              name: "リクルートエージェント",
              desc: "大手から中堅までのコンサルファームの求人を幅広く保有。コンサル未経験からの転職相談にも対応しています。",
              href: "/review/recruit-agent/",
            },
          ].map((agent) => (
            <div key={agent.rank} className="card-hover p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="rank-badge rank-badge--1">{agent.rank}</span>
                <h3 className="font-bold text-navy text-lg">{agent.name}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-3">{agent.desc}</p>
              <Link href={agent.href} className="text-teal text-sm font-medium hover:underline">
                詳細レビューを見る &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* コンサル業界の転職事情 */}
        <h2>コンサル業界の転職事情</h2>
        <p>
          コンサルティング業界は、DX推進や経営変革の需要拡大に伴い、採用を積極的に行っている業界の一つです。
          戦略コンサル、総合コンサル、ITコンサル、人事コンサルなど、さまざまな領域で人材ニーズがあります。
        </p>
        <p>
          コンサル業界への転職では、論理的思考力やコミュニケーション能力が重視されます。
          また、ファームごとに選考プロセスが異なるため、業界に精通したエージェントのサポートが重要です。
        </p>

        {/* ケース面接対策 */}
        <h2>ケース面接対策</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "問題の構造化を練習する", desc: "ケース面接では、与えられた問題をMECE（漏れなくダブりなく）に分解する力が問われます。フレームワーク（3C、4Pなど）を使いこなせるよう練習しましょう。" },
            { step: 2, title: "フェルミ推定に慣れる", desc: "市場規模の推定や数値の見積もりは頻出問題です。日頃から「この市場は何円規模か」と考える習慣をつけ、論理的に数値を導き出す練習をしましょう。" },
            { step: 3, title: "模擬面接を重ねる", desc: "ケース面接は練習量が結果に直結します。エージェントの模擬面接を活用し、本番に近い環境で繰り返し練習しましょう。" },
            { step: 4, title: "ビジネスニュースを日常的にチェックする", desc: "ケース面接ではビジネスセンスも評価されます。業界の最新動向やビジネスモデルへの理解を深めておきましょう。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* コンサルファームの種類 */}
        <h2>コンサルファームの主な種類</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">戦略コンサル</h3>
            <p className="text-sm text-text-secondary">
              経営戦略の立案に特化。少数精鋭で高度な分析力が求められます。
              年収水準が高く、選考難易度も高いのが特徴です。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">総合コンサル</h3>
            <p className="text-sm text-text-secondary">
              戦略からIT導入、業務改善まで幅広く対応。組織規模が大きく、
              多様なプロジェクト経験が積めます。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">ITコンサル</h3>
            <p className="text-sm text-text-secondary">
              IT戦略の策定やシステム導入を支援。DX推進の需要拡大により、
              採用が活発な領域です。
            </p>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">専門コンサル</h3>
            <p className="text-sm text-text-secondary">
              人事、財務、マーケティングなど特定領域に特化。
              事業会社での専門経験を活かせるケースが多いです。
            </p>
          </div>
        </div>

        {/* FAQ */}
        <h2>コンサル転職 よくある質問</h2>
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
            コンサル業界への転職を実現しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            コンサル転職に精通したエージェントがあなたの選考対策をサポートします。登録は完全無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="btn-accent px-8 py-3"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              JACリクルートメントに無料登録
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他のカテゴリも見る</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/industry/it-engineer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ITエンジニア向けエージェント
            </Link>
            <Link href="/type/high-class/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ハイクラス向けエージェント
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
