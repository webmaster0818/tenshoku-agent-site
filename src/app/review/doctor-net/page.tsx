import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ドクターネットエージェントの評判は？放射線科特化の転職サービスを解説【2026年】",
  description: "ドクターネットエージェントは、遠隔読影大手の株式会社ドクターネットが運営する放射線科特化の転職サービス。放射線科医・診療放射線技師・臨床検査技師・消化器科医・内視鏡専門医の求人を常勤・非常勤問わず掲載。公式情報ベースで解説します。",
  alternates: { canonical: "/review/doctor-net/" },
};

const faqData = [
  {
    "q": "ドクターネットエージェントの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。医療機関側が費用を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "技師でも利用できますか？",
    "a": "診療放射線技師・臨床検査技師の求人ページが公式サイトに用意されています(2026年8月22日確認)。医師だけでなく技師の転職にも対応しています。"
  },
  {
    "q": "非常勤の求人もありますか？",
    "a": "常勤・非常勤問わず求人多数掲載と公式に記載されています。非常勤・スポットの条件は登録後にご確認ください。"
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
          { name: "ドクターネットエージェントの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ドクターネットエージェントの評判は？放射線科特化の転職サービスを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">ドクターネットエージェントは、株式会社ドクターネットが運営する放射線科領域特化の転職・求人サービスです。運営元は放射線診断専門医による遠隔読影サービス(Tele-RAD等)を手がける業界大手で、その専門性を土台に放射線科医・診療放射線技師・臨床検査技師などの人材紹介を行っています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>放射線科領域に特化した転職サービス</strong>。放射線科医・消化器科医・内視鏡専門医・診療放射線技師・臨床検査技師が対象です。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>運営は遠隔読影サービス大手のドクターネット</strong>。東証上場企業のグループ会社と公式に記載されています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>常勤・非常勤問わず求人を多数掲載</strong>と公式に掲げ、利用は無料です。</span></li>
          </ul>
        </div>

        <h2>ドクターネットエージェントの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">ドクターネットエージェント(放射線科特化の転職・求人サービス)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社ドクターネット(遠隔読影サービス大手・東証上場企業のグループ会社と公式記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">対象職種</th><td className="px-3 py-2 border-b">放射線科医/消化器科医/内視鏡専門医/診療放射線技師/臨床検査技師</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">求人形態</th><td className="px-3 py-2 border-b">常勤・非常勤の両方に対応</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特徴</th><td className="px-3 py-2 border-b">放射線科に関する深い知識で医療機関ごとの特徴に合わせたマッチング(公式記載)/非公開求人の紹介</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">dn-agent.com</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：ドクターネットエージェント公式サイト(dn-agent.com)・株式会社ドクターネット(dr-net.co.jp)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>ドクターネットエージェントの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">遠隔読影事業とつながる業界知見</h3><p className="text-sm text-text-secondary leading-relaxed">運営元は放射線診断専門医による遠隔読影サービス(Tele-RAD/Tele-DOC等)を展開しており、放射線科の現場・医療機関との日常的な接点を土台にした紹介ができる希少な体制です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">放射線領域の職種に限定した専門性</h3><p className="text-sm text-text-secondary leading-relaxed">放射線科医から技師(診療放射線技師・臨床検査技師)まで、放射線・検査領域の職種に対象を絞っています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">常勤・非常勤の両対応</h3><p className="text-sm text-text-secondary leading-relaxed">常勤転職だけでなく非常勤(スポット・兼業)の求人も扱っており、働き方の調整にも使えます。</p></div>
        </div>

        <h2>ドクターネットエージェントが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>放射線科医・消化器科医・内視鏡専門医で転職や非常勤先を探す人</li>
              <li>診療放射線技師・臨床検査技師で職場を変えたい人</li>
              <li>読影環境・設備など専門的な条件を重視する人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>放射線・検査領域以外の医療職 →<a href="/review/nishima-pharma/" className="text-teal underline">にしまファーマ</a>や<a href="/review/jobsoelu/" className="text-teal underline">ジョブソエル</a>へ</li>
              <li>薬剤師 →<a href="/review/oshigoto-lab/" className="text-teal underline">お仕事ラボ</a>へ</li>
            </ul>
          </div>
        </div>

        <h2>ドクターネットエージェント よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>ドクターネットエージェントは、遠隔読影大手の業界知見を土台にした放射線科特化の転職サービスです。医師・技師の両方に対応し、利用は無料。放射線領域はニッチなため、医療系総合サービスと併用して求人の幅を確保するのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/jobsoelu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ジョブソエルの詳細
            </Link>
            <Link href="/review/nishima-pharma/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              にしまファーマの詳細
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
