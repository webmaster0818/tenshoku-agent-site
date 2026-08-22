import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゼイキャリの評判は？税理士業界特化のハイクラス転職エージェントを解説【2026年】",
  description: "ゼイキャリ(マルゴト株式会社運営)は税理士業界特化・ハイクラス転職エージェント。年収600〜1,500万円の厳選求人・国内大手税理士法人代表からの推薦・業務委託案件の取扱いが特徴。公式情報ベースで解説します。利用は無料。",
  alternates: { canonical: "/review/zeicari/" },
};

const faqData = [
  {
    "q": "ゼイキャリの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用側(税理士法人・会計事務所)が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "どんな求人がありますか？",
    "a": "国内大手税理士法人・厳選会計事務所を中心に、年収600〜1,500万円のハイクラス求人を多数扱うと公式に掲げています(2026年8月22日確認)。業務委託案件の取扱いもあります。"
  },
  {
    "q": "科目合格の段階でも相談できますか？",
    "a": "税理士業界特化のエージェントとして、有資格者・科目合格者のキャリア相談に対応する設計です。個別の紹介可否は無料キャリア相談でご確認ください。"
  }
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb
        items={[
          { name: "エージェント一覧", href: "/#ranking" },
          { name: "ゼイキャリの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ゼイキャリの評判は？税理士業界特化のハイクラス転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">ゼイキャリは、マルゴト株式会社が運営する税理士業界特化のハイクラス転職エージェントです。「プロフェッショナルにこそ、選べる未来がある。」を掲げ、国内大手税理士法人・会計事務所を中心とした年収600〜1,500万円のハイクラス求人を扱います。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>税理士業界特化×ハイクラスの転職エージェント</strong>。年収600〜1,500万円の求人を多数と公式に掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>国内大手税理士法人の代表から推薦</strong>を受けていることを公式サイトで実名掲載(クリフィックス税理士法人・あいわ税理士法人の代表コメント)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>業務委託案件の取扱いもあり</strong>。中長期のキャリア設計重視のじっくり型支援で、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>ゼイキャリの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ゼイキャリ(税理士業界特化・ハイクラス転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">マルゴト株式会社</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">税理士業界(国内大手税理士法人・厳選会計事務所)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">求人レンジ</th><td className="px-3 py-2 border-b">年収600〜1,500万円のハイクラス求人多数(公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">業務委託案件の取扱い/大手税理士法人代表の推薦コメント掲載/中長期キャリア設計重視</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">登録</th><td className="px-3 py-2 border-b">最短20秒で無料キャリア相談申し込み</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">zei-career.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ゼイキャリ公式LP(zei-career.jp/lp01)、2026年8月22日確認。推薦コメントは公式サイト掲載のもの。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>ゼイキャリの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">大手税理士法人に絞った厳選求人</h3><p className="text-sm text-text-secondary leading-relaxed">国内大手税理士法人をはじめとした厳選税理士事務所のみを取り扱うと明言しており、事務所の質を重視する有資格者向けの設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">業界内部に踏み込んだ情報力</h3><p className="text-sm text-text-secondary leading-relaxed">大手税理士法人の代表から推薦を受け、業界の内部に深く踏み込んだ情報と本質的なマッチングを実現すると公式に掲げています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">正社員以外の選択肢(業務委託)</h3><p className="text-sm text-text-secondary leading-relaxed">業務委託案件の取扱いもあり、独立準備中の税理士や柔軟な働き方を求める人の相談にも対応できる構成です。</p></div>
        </div>

        <h2>ゼイキャリが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>税理士・科目合格者で大手法人へのステップアップを目指す人</li>
              <li>年収600万円以上のハイクラス求人を狙う会計人材</li>
              <li>独立も視野に業務委託案件を探したい税理士</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>経理など事業会社の管理部門志望 →<a href="/review/hupro/" className="text-teal underline">ヒュープロ</a>や<a href="/review/keiri-jobs/" className="text-teal underline">経理Jobs</a>へ</li>
              <li>未経験から会計業界に入りたい人 →求人幅の広いサービスと併用を</li>
            </ul>
          </div>
        </div>

        <h2>ゼイキャリ よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>ゼイキャリは、大手税理士法人に絞った厳選×ハイクラス路線の税理士業界特化エージェントです。業務委託を含む柔軟なキャリア提案が特徴で、利用は無料。士業全般をカバーするヒュープロと併用し、求人の質と幅を両取りするのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/hupro/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ヒュープロの詳細
            </Link>
            <Link href="/review/keiri-jobs/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              経理Jobsの詳細
            </Link>
            <Link href="/review/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職サービス解説一覧
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
