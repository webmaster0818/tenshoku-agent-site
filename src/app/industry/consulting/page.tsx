import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { FelmatTextLink } from "@/components/FelmatCta";
import A8Cta from "@/components/A8Cta";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/consulting/" },
  title: "コンサル転職エージェントおすすめ｜特化型MyVision・NewMAの比較とケース面接対策",
  description:
    "コンサル業界への転職におすすめのエージェントを紹介。JACリクルートメント・ビズリーチ・リクルートエージェントに加え、コンサル特化型のMyVisionとNewMAを対象領域・未経験の扱い・サポート内容・許可番号で比較（2026年10月14日確認）。ケース面接対策も解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "コンサル転職エージェントおすすめ｜特化型MyVision・NewMAの比較とケース面接対策",
    description: "コンサル転職のエージェント選びと、MyVision・NewMAの比較（公式確認値・10/14）。",
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
          <p className="text-xs text-text-muted mb-3">最終更新日：2026年10月15日</p>
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

        {/* 提携先のコンサル特化型比較 */}
        <h2>コンサル特化型の2サービスを比較：MyVisionとNewMA</h2>
        <p className="mb-4">
          総合型・ハイクラス型と併用しやすいのが、コンサル業界に絞った特化型エージェントです。戦略・総合・ITコンサルのファームを狙うのか、M&amp;A・FASなど財務寄りの領域も含めて考えるのかで向き不向きが分かれます。
        </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr><th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">項目</th><th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy"><Link href="/review/myvision/" className="text-teal hover:underline">MyVision</Link></th><th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy"><Link href="/review/newma/" className="text-teal hover:underline">NewMA</Link></th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">対象領域</td><td className="py-2 px-3 align-top">戦略コンサル／総合コンサル／ITコンサル／シンクタンク等のコンサルティングファーム</td><td className="py-2 px-3 align-top">DX・戦略・AIコンサル／M&amp;A仲介／FAS／人事組織コンサル／経営企画／PEファンド 等</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">未経験の扱い</td><td className="py-2 px-3 align-top">「ご支援する求職者様の8割はコンサル業界未経験の方」と公式に記載</td><td className="py-2 px-3 align-top">未経験者から経験者まで対応と公式LPに記載</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">サポート内容</td><td className="py-2 px-3 align-top">キャリア相談／業界・個社説明／求人紹介／選考対策（ケース面接・Webテスト対策等）</td><td className="py-2 px-3 align-top">キャリア相談／求人紹介／書類・面接対策／条件交渉／内定後・入社後フォロー</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">求人の例・規模</td><td className="py-2 px-3 align-top">求人数の確認値なし</td><td className="py-2 px-3 align-top">M&amp;Aアドバイザリー（大阪府・年収500万〜1,200万円）、外資系大手ファームのDXコンサル（東京都・700万〜1,500万円）など。求人数は非公開</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">公開口コミの確認状況</td><td className="py-2 px-3 align-top">公式の評判ページが引用するGoogle口コミ25件を当サイトでテーマ別に集計（良い声18件・否定的な声7件）</td><td className="py-2 px-3 align-top">コエテコキャリアの利用証明済み口コミ2件</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">運営会社・許可番号</td><td className="py-2 px-3 align-top">株式会社MyVision（東京都港区・設立2022年6月・従業員423名）・13-ユ-314719</td><td className="py-2 px-3 align-top">NewMA株式会社（中之島キャピタルグループ・大阪市中央区）・27-ユ-304092</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">料金</td><td className="py-2 px-3 align-top">無料</td><td className="py-2 px-3 align-top">無料</td></tr>
              </tbody>
            </table>
          </div>
        <p className="text-xs text-text-muted mb-4">出典：各社公式サイト・公式LP・会社情報（2026年10月14日確認。MyVisionの未経験8割は2026年8月16日確認）、コエテコキャリア（同日確認）。口コミの件数は当サイトが確認できた範囲です。詳しくは<Link href="/review/myvision/" className="text-teal hover:underline">MyVisionの口コミ・評判</Link>・<Link href="/review/newma/" className="text-teal hover:underline">NewMAの口コミ・評判</Link>で整理しています。</p>
        <ul className="space-y-2 text-sm text-text-secondary mb-6">
          <li><strong>事業会社からコンサルファームへ初めて挑戦する</strong> → 業界・個社の説明からケース面接対策まで未経験前提で支援するMyVision</li>
          <li><strong>M&amp;A仲介・FAS・PEファンドなども視野に入れる</strong> → コンサルとM&amp;A領域を扱う<FelmatTextLink slug="newma" text="NewMA(PR)" /></li>
        </ul>
        <A8Cta slug="myvision" heading="MyVision公式サイトで無料転職相談を予約する" note="コンサル業界のキャリア相談は無料です。" />

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
            コンサル転職に精通したエージェントがあなたの選考対策をサポートします。登録は無料です。
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
