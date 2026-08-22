import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SaaSfieldの評判は？SaaS業界特化の転職エージェントを解説【2026年】",
  description: "SaaSfield(サースフィールド)は株式会社AMIキャリアが運営するSaaS業界特化の転職支援サービス。未経験からのSaaS営業職(IS/FS/CS)転職を、ポジション別の適性を踏まえて支援。有料職業紹介事業許可番号13-ユ-317207。公式情報ベースで解説します。",
  alternates: { canonical: "/review/saasfield/" },
};

const faqData = [
  {
    "q": "SaaSfieldの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。採用企業側が報酬を負担する人材紹介の標準モデルです。"
  },
  {
    "q": "IS・FS・CSとは何ですか？",
    "a": "SaaS営業の代表的な3職種で、IS(インサイドセールス)は見込み顧客の育成、FS(フィールドセールス)は商談・受注、CS(カスタマーサクセス)は導入後の活用支援を担います。SaaSfieldはこの職種ごとの適性の違いを踏まえた転職支援を掲げています。"
  },
  {
    "q": "営業未経験でもSaaS業界に転職できますか？",
    "a": "SaaSfieldは未経験からの挑戦を主対象に掲げています(2026年8月22日確認)。ただしポジションにより求められる素養が異なるため、面談で適性と戦略を確認するのが第一歩です。"
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
          { name: "SaaSfieldの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            SaaSfieldの評判は？SaaS業界特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">SaaSfield(サースフィールド)は、株式会社AMIキャリアが運営するSaaS業界特化の転職支援サービスです。SaaS営業職(インサイドセールス/フィールドセールス/カスタマーサクセス)への未経験転職で起きがちな「準備不足での大量エントリー→お見送り」を課題として掲げ、ポジション・プロダクトごとの適性を踏まえた支援を打ち出しています。公式サイトで確認できる情報をもとに整理します。</p>
        </div>

        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>SaaS業界特化の転職支援サービス</strong>。特に営業職(IS・FS・CS)への転職を主対象としています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>未経験からのSaaS転職の「準備」を重視</strong>。ポジション・プロダクトごとに求められるスキルの違いを踏まえた支援を掲げています。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>有料職業紹介事業許可番号(13-ユ-317207)を確認</strong>。利用は無料です。</span></li>
          </ul>
        </div>

        <h2>SaaSfieldの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">SaaSfield(サースフィールド・SaaS業界特化の転職支援)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社AMIキャリア</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">特化領域</th><td className="px-3 py-2 border-b">SaaS業界の転職(IS/FS/CSなどの営業職種を中心に)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">有料職業紹介事業許可番号</th><td className="px-3 py-2 border-b">13-ユ-317207</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">支援方針</th><td className="px-3 py-2 border-b">可能性を見つけて引き出し、最適なSaaS企業を紹介(公式サイト記載)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">amic.capoo.jp/lp/saasfield</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：SaaSfield公式サイト(amic.capoo.jp/lp/saasfield)、2026年8月22日確認。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>SaaSfieldの特徴(公式公表ベース)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">SaaS営業のポジション別適性を前提にした支援</h3><p className="text-sm text-text-secondary leading-relaxed">IS・FS・CSはポジションごと、プロダクトごとに求められるスキルや適性が異なるという前提を明示し、準備を整えてから挑戦する支援設計です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">未経験からの挑戦を主対象に</h3><p className="text-sm text-text-secondary leading-relaxed">「SaaSが流行ってそう」という浅い理解での大量エントリーがお見送りにつながる実態を指摘し、業界理解から伴走する構成を掲げています。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">じっくり型の転職支援</h3><p className="text-sm text-text-secondary leading-relaxed">「じっくりと、根気よく、芽が出るまで、あなたのペースで」という支援方針を公式に明記しており、急かされたくない人に合う設計です。</p></div>
        </div>

        <h2>SaaSfieldが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>未経験からSaaS業界の営業職(IS/FS/CS)に挑戦したい人</li>
              <li>SaaS業界の構造・職種の違いから理解したい人</li>
              <li>自分のペースでじっくり転職活動を進めたい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>SaaSエンジニア志望の人 →IT特化型エージェントへ</li>
              <li>今すぐ大量の求人を比較したい人 →総合型と併用を</li>
            </ul>
          </div>
        </div>

        <h2>SaaSfield よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>SaaSfieldは、SaaS営業職への転職を「準備」から支援する業界特化サービスです。ポジション別適性を踏まえたじっくり型の伴走が特徴で、利用は無料。SaaS転職では営業特化のhape Agentや総合型と併用して選択肢を広げるのがおすすめです。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/hape-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              hape Agent(営業特化)の詳細
            </Link>
            <Link href="/type/inexperienced/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              未経験向けエージェントまとめ
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
