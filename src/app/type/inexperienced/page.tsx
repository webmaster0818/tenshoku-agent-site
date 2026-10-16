import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/type/inexperienced/" },
  title: "未経験向け転職エージェントおすすめ｜Re:WORK・転職AGENT Naviの比較と未経験可の求人の探し方",
  description:
    "未経験から新しい業界・職種に挑戦したい方向けに、総合型5社と未経験向けのRe:WORKエージェント・転職AGENT Naviを比較（仕組み・対象・公式の求人数・許可番号、2026年10月14日確認）。未経験可の求人の探し方とよくある質問も解説します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "未経験向け転職エージェントおすすめ｜Re:WORK・転職AGENT Naviの比較と未経験可の求人の探し方",
    description: "未経験転職のエージェント選びと、Re:WORKエージェント・転職AGENT Naviの比較（公式確認値・10/14）。",
  },
};

const faqData = [
  { q: "未経験でも転職エージェントに登録できますか？", a: "はい、登録できます。多くのエージェントが未経験者向けの求人を取り扱っており、業界・職種未経験の方もサポートしています。" },
  { q: "未経験からの転職で人気の業界・職種を教えてください。", a: "IT業界（エンジニア、Webマーケティング）、営業職、事務職、介護・福祉、物流などは、未経験歓迎の求人が多い傾向にあります。" },
  { q: "未経験転職で年収は下がりますか？", a: "業界・職種によります。未経験の場合、最初は年収が下がるケースもありますが、成長産業や人手不足の業界では、未経験でも好条件の求人があります。転職エージェントに相談し、市場相場を確認することをおすすめします。" },
  { q: "未経験者が転職を成功させるためのポイントは何ですか？", a: "ポテンシャルや意欲をアピールすることが重要です。前職で培った汎用スキル（コミュニケーション力、問題解決力など）を新しい仕事にどう活かせるかを伝えることが有効です。" },
  { q: "資格がなくても未経験転職は可能ですか？", a: "はい、多くの未経験歓迎の求人は資格不問です。ただし、事前に関連資格を取得しておくと、意欲のアピールになります。エージェントに相談すれば、有利な資格についてアドバイスを受けられます。" },
  { q: "未経験転職の場合、転職活動期間はどのくらいですか？", a: "一般的に2〜4ヶ月程度です。未経験の場合は応募数を増やす必要があるため、経験者転職よりやや時間がかかる傾向があります。" },
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

export default function InexperiencedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "タイプ別", href: "/" },
          { name: "未経験" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            未経験向け転職エージェントおすすめ5選
          </h1>
          <p className="text-xs text-text-muted mb-3">最終更新日：2026年10月15日</p>
          <p className="text-text-secondary leading-relaxed">
            未経験から新しい業界・職種に挑戦したい方にとって、転職エージェントは有効な支援手段です。
            未経験可の求人を多く持つエージェントと、効果的な活用法を紹介します。
          </p>
        </div>

        <h2>未経験転職に強いエージェントランキング</h2>
        <div className="space-y-4 mb-10">
          {[
            { rank: 1, name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を持つ総合型です。幅広い業界・職種をカバーしているため、未経験歓迎の求人も含めて異業種転職の選択肢を広げやすいです。" },
            { rank: 2, name: "doda", href: "/review/doda/", desc: "未経験歓迎の求人特集があり、求人検索時に「未経験可」のフィルターで絞り込めます。エージェントとサイトの両方が使えるため、自分のペースで進められます。" },
            { rank: 3, name: "マイナビエージェント", href: "/review/mynavi/", desc: "20代・30代の未経験転職に強みがあります。丁寧なカウンセリングで、未経験でも活かせるスキルの棚卸しをサポートしてくれます。" },
            { rank: 4, name: "ビズリーチ", href: "/review/bizreach/", desc: "管理職・専門職経験がある方が新しい業界に挑戦する場合に活用できます。スカウト型のため、自分の経験を評価してくれる企業を見つけやすいです。" },
            { rank: 5, name: "JACリクルートメント", href: "/review/jac/", desc: "異業界への転職でも、前職の経験やスキルを活かせるポジションの提案が得意です。特にグローバル企業への転職を考えている方に向いています。" },
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

        {/* 未経験特化型という選択肢 */}
        <h2>「未経験特化型」エージェントという選択肢</h2>
        <p className="mb-4">
          上記の総合型に加えて、未経験からの転職だけを専門に扱うエージェントもあります。
          <Link href="/review/rework/" className="text-teal underline">Re:WORKエージェント</Link>は「未経験からの転職専門」を掲げ、
          未経験応募OKの求人を中心に、紹介可能求人数16,432件以上と公式に表記しています（2026年10月14日確認。8月22日は39,652件以上と表記）。
          接客業からIT業界へ、工場勤務から一般事務へといった異業種チャレンジを専属アドバイザーが伴走すると公表しています（利用無料）。
        </p>
        <p className="text-sm mb-4">
          → <FelmatTextLink slug="rework" text="Re:WORKエージェント公式サイトで未経験転職を無料相談する" />
          <span className="text-xs text-text-muted">（※本リンクはプロモーション（PR）です）</span>
        </p>
        <FelmatCta slug="rework" heading="未経験からの転職を専門エージェントに相談する" note="キャリアの方向性が決まっていない段階の相談も歓迎と公式に記載されています。" />
        <p className="mb-8 text-sm text-text-secondary">
          目指す業界が決まっている場合は業界特化型も有力です。飲食業界なら
          <FelmatTextLink slug="inshoku-agent" text="飲食店ドットコムエージェント" />
          （東証プライム上場シンクロ・フード運営・未経験歓迎求人あり／<Link href="/review/inshoku-agent/" className="text-teal underline">詳細解説はこちら</Link>）、
          不動産営業なら<Link href="/company/ebisu-fudousan/" className="text-teal underline">恵比寿不動産</Link>のような
          研修体制を公開している企業への直接応募も選択肢になります。
          <span className="text-xs text-text-muted">（※テキストリンクはプロモーション（PR）を含みます）</span>
        </p>

        {/* 提携先の未経験向け比較 */}
        <h2>未経験向けの2サービスを比較：Re:WORKエージェントと転職AGENT Navi</h2>
        <p className="mb-4">
          未経験からの転職で名前が挙がる2つのサービスは、仕組みがまったく違います。Re:WORKエージェントは自社で未経験歓迎の求人を紹介するエージェント、転職AGENT Naviは「どのエージェントに登録すべきか」から相談して担当者を紹介してもらうマッチングサービスです。
        </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr><th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">項目</th><th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy"><Link href="/review/rework/" className="text-teal hover:underline">Re:WORKエージェント</Link></th><th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy"><Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Navi</Link></th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">サービスの形</td><td className="py-2 px-3 align-top">未経験からの転職専門の転職エージェント（自社で求人を紹介）</td><td className="py-2 px-3 align-top">自分に合う転職エージェントの担当者を紹介するマッチングサービス（求人紹介は紹介先のエージェントが行う）</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">主な対象</td><td className="py-2 px-3 align-top">未経験からの異業種転職。全都道府県・20代〜50代の求人を「未経験歓迎」「フリーターOK」「第二新卒歓迎」などで検索可能</td><td className="py-2 px-3 align-top">20代の既卒・第二新卒・フリーター・ニート（「職歴の有無、年齢、学歴などで判断することは一切ございません」とも記載）</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">規模（公式表記）</td><td className="py-2 px-3 align-top">紹介可能求人数16,432件以上（8月22日の確認時は39,652件以上。集計時点の記載なし）</td><td className="py-2 px-3 align-top">様々な会社に所属する転職アドバイザー300名以上・求人10万件以上</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">サポート内容</td><td className="py-2 px-3 align-top">キャリア相談／求人紹介／業界分析／応募書類の添削／オンライン模擬面接（希望者）／適職診断</td><td className="py-2 px-3 align-top">ナビ担当との面談で希望・相性を確認 → 合う担当者を紹介。担当変更の相談可</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">最初の相談</td><td className="py-2 px-3 align-top">専属コンサルタントへの無料相談</td><td className="py-2 px-3 align-top">LINEで予約し、コンシェルジュとLINE通話（15分程度）</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">運営会社・許可番号</td><td className="py-2 px-3 align-top">株式会社Nexly（設立2024年5月）・28-ユ-301343</td><td className="py-2 px-3 align-top">circus株式会社（設立2017年7月）・13-ユ-317371</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">第三者の公開口コミ</td><td className="py-2 px-3 align-top">ほとんど確認できず（公式サイト内の転職体験記は12件）</td><td className="py-2 px-3 align-top">利用者投稿の公開口コミは少数（コエテコキャリアは掲載0件）</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy align-top">料金</td><td className="py-2 px-3 align-top">無料</td><td className="py-2 px-3 align-top">無料</td></tr>
              </tbody>
            </table>
          </div>
        <p className="text-xs text-text-muted mb-4">出典：各社公式サイト・運営会社の会社概要（2026年10月14日確認）。数値は各社の公式表記で、当サイトの集計ではありません。詳しくは<Link href="/review/rework/" className="text-teal hover:underline">Re:WORKエージェントの口コミ・評判</Link>・<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で、確認日と出典を明記して整理しています。</p>
        <ul className="space-y-2 text-sm text-text-secondary mb-8">
          <li><strong>目指す業界・職種がある程度決まっている</strong> → 未経験歓迎の求人を直接紹介してもらえるRe:WORKエージェント</li>
          <li><strong>20代で、どのエージェントを使えばよいかわからない</strong> → まず転職AGENT Naviで相性の良い担当者を紹介してもらう方法が有効です（<FelmatTextLink slug="agent-navi" text="転職AGENT Navi公式サイト(PR)" />）</li>
          <li>どちらも運営会社が新しく、第三者の口コミがまだ少ないため、大手総合型エージェントとの併用をおすすめします</li>
        </ul>

        {/* 未経験可の求人の探し方 */}
        <h2>未経験可の求人を見つける方法</h2>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "複数のエージェントに登録する", desc: "エージェントごとに保有する未経験歓迎求人が異なります。2〜3社に登録することで、より多くの求人に出会えます。" },
            { step: 2, title: "希望条件を柔軟に伝える", desc: "業界・職種を限定しすぎず、興味のある分野を幅広く伝えることで、思わぬ好条件の求人に出会えることがあります。" },
            { step: 3, title: "転職サイトとの併用", desc: "エージェント経由だけでなく、転職サイトで「未経験歓迎」の求人を自分で探すことも効果的です。dodaなら両方の機能が使えます。" },
            { step: 4, title: "汎用スキルを整理する", desc: "コミュニケーション力、PCスキル、マネジメント経験など、業界を問わず活かせるスキルを洗い出しておくことをおすすめします。" },
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

        <h2>未経験転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            未経験からの転職に向けて
          </h2>
          <p className="text-white/70 text-sm mb-6">
            まずは転職エージェントに無料登録し、未経験歓迎の求人を確認することをおすすめします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/review/recruit-agent/" className="btn-accent px-8 py-3">
              リクルートエージェントの詳細
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
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
            </Link>
            <Link href="/review/security-work/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              警備員専門セキュリティーワークの詳細
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
