import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AgentHero from "@/components/AgentHero";

export const metadata: Metadata = {
  title: "マイナビジョブ20'sの評判は？20代・第二新卒特化の転職エージェントを解説【2026年】",
  description: "マイナビジョブ20'sは、マイナビワークスが運営する20代・第二新卒・既卒専門の転職エージェントです。未経験OK求人76%以上・定着率94.6%・利用者数64万人と公式に表記しています。特徴・向いている人を公式情報にもとづいて解説します。利用は無料です。",
  alternates: { canonical: "/review/mynavi-job20s/" },
};

const faqData = [
  {
    "q": "マイナビジョブ20'sの利用に費用はかかりますか？",
    "a": "求職者の利用は無料です。カウンセリング・書類添削・面接対策・求人紹介まで無料でサポートすると公式に明記されています。"
  },
  {
    "q": "就業経験がなくても利用できますか？",
    "a": "申し込みフォームには「現職中・離職中・就業経験なし」の選択肢が用意されており(2026年8月22日確認)、就業経験のない20代の相談にも対応する設計です。"
  },
  {
    "q": "第二新卒エージェントneoやUZUZとの違いは何ですか？",
    "a": "いずれも20代特化ですが、マイナビジョブ20'sは大手マイナビグループの運営、UZUZはオーダーメイド型サポート、第二新卒エージェントneoは高卒・中卒まで幅広い学歴対応を掲げるなど設計が異なります。2〜3社を併用して相性を比較することをおすすめします。"
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
          { name: "エージェント一覧", href: "/review/" },
          { name: "マイナビジョブ20'sの評判・特徴" },
        ]}
      />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            マイナビジョブ20'sの評判は？20代・第二新卒特化の転職エージェントを解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">マイナビジョブ20'sは、株式会社マイナビワークス(マイナビグループ)が運営する20代・第二新卒・既卒向けの転職エージェントです。未経験OK求人76%以上・入社後3ヶ月の定着率94.6%・利用者数64万人と公式に掲げています。公式サイトで確認できる情報をもとに特徴を整理します。</p>
        </div>

        <AgentHero slug="mynavi-job20s" />


        <div className="bg-teal/5 rounded-2xl p-5 sm:p-6 mb-10 border border-teal/15">
          <p className="font-bold text-teal mb-2 text-lg">この記事の要点</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>20代・第二新卒・既卒に特化した転職エージェントです</strong>。マイナビグループの20代専門サービスです。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>未経験OK求人76%以上・定着率94.6%・利用者数64万人</strong>と公式サイトに表記されています(2026年8月22日確認)。</span></li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">&#10003;</span><span><strong>カウンセリング・書類添削・面接対策・求人紹介まで無料</strong>で、初めての転職を最初から最後までサポートすると公式に明記されています。</span></li>
          </ul>
        </div>

        <h2>マイナビジョブ20'sの基本データ【2026年8月22日確認】</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">サービス名</th><td className="px-3 py-2 border-b">マイナビジョブ20's(20代・第二新卒・既卒向け転職エージェント)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">運営会社</th><td className="px-3 py-2 border-b">株式会社マイナビワークス(マイナビグループ)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">未経験OK求人比率</th><td className="px-3 py-2 border-b">76%以上(公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">定着率</th><td className="px-3 py-2 border-b">94.6%(2024/10/1〜2025/9/30入社者の3ヶ月定着率・公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">利用者数</th><td className="px-3 py-2 border-b">64万人(公式表記)</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">料金</th><td className="px-3 py-2 border-b">求職者は無料</td></tr>
              <tr><th className="bg-gray-50 text-left px-3 py-2 border-b w-32 whitespace-nowrap">公式サイト</th><td className="px-3 py-2 border-b">mynavi-job20s.jp</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：マイナビジョブ20's公式サイト(mynavi-job20s.jp)、2026年8月22日確認。数値はすべて公式サイトの掲載値です(注記条件は公式サイトをご参照ください)。当サイトでは口コミ・数値の創作は行っていません。</p>

        <h2>マイナビジョブ20'sの特徴(公式の公表情報より)</h2>
        <div className="space-y-4 mb-8">
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">20代専門とマイナビグループの基盤</h3><p className="text-sm text-text-secondary leading-relaxed">対象を20代に絞ったうえで、マイナビグループの企業ネットワークを活かした求人紹介を行います。第二新卒・既卒・現職中いずれの状況でも申し込めます。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">未経験OK求人が7割超</h3><p className="text-sm text-text-secondary leading-relaxed">未経験OK求人76%以上と公式に表記しています。キャリアチェンジを考える20代が選択肢を広げやすい構成です。</p></div>
          <div className="card-hover p-5"><h3 className="font-bold text-navy mb-1 text-sm">定着率の公開</h3><p className="text-sm text-text-secondary leading-relaxed">入社後3ヶ月の定着率94.6%を公式に公開しており、ミスマッチの少なさを定量的に示しています。</p></div>
        </div>

        <h2>第三者サイトでのマイナビジョブ20'sの評判</h2>
        <div className="glass-card p-6 mb-4">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>みん評のマイナビジョブ20'sのページには口コミが73件あり、同ページに表示されている評価は5点満点中2.79です。当サイトで評点別に数えると、5点が5件、4点が7件、3点が1件、2点が6件、1点が45件、評点なしが9件でした。</li>
            <li>投稿は2018年から2026年10月までにわたります。2024年以降の22件は、1点が17件、2点が1件、評点なしが4件でした。キャリアアドバイザーの言葉遣いや態度への不満、希望と合わない求人を勧められた、返信が遅い・途中から連絡がなくなったという趣旨の投稿が中心です。4点以上の投稿では、カウンセリングや書類・面接の助言が役立った、内定を得られたという評価があり、担当者によって印象が異なるという内容も見られます。</li>
            <li>コエテコキャリアにもマイナビジョブ20'sのページがありますが、取得日時点で口コミは掲載されていませんでした。</li>
            <li>みん評は、同サイトの性質上厳しい声が多くなり、低評価が多いことが必ずしも問題を示すものではないと注記しています。個人の体験にもとづく投稿であり、サービス全体の品質を示すものではありません。</li>
          </ul>
        </div>
        <p className="text-xs text-text-muted mb-8">出典：<a href="https://minhyo.jp/mynavi-job20s" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">みん評「マイナビジョブ20'sの口コミ・評判」</a>(株式会社マイスタースタジオ運営)、<a href="https://coeteco.jp/career/job_change/mynavi-job20s" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">コエテコキャリア「マイナビジョブ20'sの評判・口コミ」</a>(GMOメディア株式会社運営)、いずれも2026年11月11日取得。みん評のページに20代・第二新卒サポート専門のサービスとして掲載されていることを確認しています。件数・評価は取得日時点の値です。評点別の件数と投稿時期は、当サイトがみん評の全73件を数えたものです。口コミ本文は転載せず、当サイトで傾向を要約しています。</p>

        <h2>マイナビジョブ20'sが向いている人・向いていない人</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">向いている人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>第二新卒・既卒として転職・就職活動を始める20代</li>
              <li>未経験の業界・職種に挑戦したい20代</li>
              <li>書類添削・面接対策までフルサポートしてほしい人</li>
            </ul>
          </div>
          <div className="card-hover p-5">
            <h3 className="font-bold text-navy mb-2">他サービスの方が合う人</h3>
            <ul className="space-y-1 text-sm text-text-secondary list-disc pl-4">
              <li>30代以上の人 →総合型エージェントの利用をおすすめします</li>
              <li>ハイクラス志向の20代 →<a href="/review/assign/" className="text-teal underline">ASSIGN</a>等のハイエンド特化型との比較もおすすめします</li>
            </ul>
          </div>
        </div>

        <h2>マイナビジョブ20's よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p>マイナビジョブ20'sは、未経験OK求人76%以上と定着率の公開が特徴の20代専門エージェントです。マイナビグループの基盤で初めての転職を無料でフルサポートします。20代特化型はUZUZ・第二新卒エージェントneo等と併用し、担当者との相性で選ぶことをおすすめします。</p>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/review/uzuz/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              UZUZ(第二の就活)の詳細
            </Link>
            <Link href="/review/daini-agent-neo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒エージェントneoの詳細
            </Link>
            <Link href="/review/career-ticket-tenshoku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              キャリアチケット転職の詳細
            </Link>
            <Link href="/type/second-new-grad/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              第二新卒向けエージェントまとめ
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
