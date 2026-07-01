import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "職務経歴書の書き方｜職務要約の例文・テンプレートと通過するコツ",
  description:
    "職務経歴書の書き方を例文つきで解説。職務要約の例文（IT・営業・管理部門）、基本構成、実績の数値化・自己PRの書き方、よくある失敗例と修正例まで。無料で使える転職エージェントの添削も紹介します。",
  openGraph: {
    title: "職務経歴書の書き方｜職務要約の例文・テンプレートと通過するコツ",
    description: "職務経歴書の書き方を職務要約の例文つきで解説。IT・営業・管理部門の例文と通過のコツ。",
  },
};

const faqData = [
  { q: "転職エージェントの添削サービスは無料ですか？", a: "はい、すべて無料です。転職エージェントは企業からの成功報酬で運営しているため、求職者から費用を請求されることはありません。添削も何度でも無料で受けられます。" },
  { q: "職務経歴書は何枚が適切ですか？", a: "A4で2枚が一般的な目安です。経歴が長い場合でも3枚以内に収めましょう。採用担当者が短時間で判断するため、簡潔で要点が整理されていることが重要です。" },
  { q: "職務経歴書と履歴書の違いは何ですか？", a: "履歴書は学歴・職歴の時系列的な概要、職務経歴書は業務内容・実績・スキルの詳細です。転職では職務経歴書のほうが重視される傾向にあります。エージェントの添削は主に職務経歴書に対して行われます。" },
  { q: "添削にはどのくらいの期間がかかりますか？", a: "一般的に2〜3営業日でフィードバックがもらえます。急ぎの場合はその旨を伝えると、翌日対応してくれるエージェントもあります。応募先に合わせたカスタマイズは面談時にリアルタイムでアドバイスをもらえることもあります。" },
  { q: "テンプレートを使ってもいいですか？", a: "はい、テンプレートを使うこと自体は問題ありません。ただし、テンプレートをそのまま使うのではなく、自分の経歴に合わせて内容をカスタマイズすることが重要です。エージェントに相談すれば、業界に適したテンプレートを提供してもらえることもあります。" },
  { q: "転職回数が多い場合、どう書けばいいですか？", a: "各社での成長や学びを明確にし、一貫したキャリアのストーリーを作りましょう。「なぜ転職したのか」「何を得たか」を簡潔に書くことで、転職回数の多さをキャリアの幅として前向きにアピールできます。エージェントのアドバイスが特に効果的な部分です。" },
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

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "お役立ち", href: "/" },
          { name: "職務経歴書の書き方・例文" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            職務経歴書の書き方｜職務要約の例文・テンプレートと通過するコツ
          </h1>
          <p className="text-text-secondary leading-relaxed">
            職務経歴書の完成度は書類選考の通過率に直結します。
            このページでは、基本構成と各項目の書き方、そのまま参考にできる<strong className="text-navy">職務要約の例文</strong>を職種別に紹介します。
            自分だけで仕上げにくいときは、後半で紹介する転職エージェントの無料添削も活用しましょう。
          </p>
        </div>

        {/* 職務経歴書の基本構成 */}
        <h2>職務経歴書の基本構成</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "職務要約（3〜5行）", desc: "経歴全体の概要を簡潔にまとめます。「何年の経験があり」「どの領域で」「どんな成果を出してきたか」を3〜5行で伝えます。採用担当者が最初に読む部分なので、特に力を入れましょう。" },
            { step: 2, title: "職務経歴（時系列・逆時系列）", desc: "各社の在籍期間、会社概要、部署、役職、担当業務、実績を記載します。直近の経歴から書く「逆時系列」が一般的です。業務内容は箇条書きで、実績は可能な限り数値で表現します。" },
            { step: 3, title: "スキル・資格", desc: "業務に関連するスキル（プログラミング言語、ツール、語学力など）と保有資格を記載します。応募先の求人要件に合わせて優先順位をつけましょう。" },
            { step: 4, title: "自己PR（3〜5行）", desc: "経歴を通じて培った強みを具体的なエピソードとともに記載します。応募先企業でどう活かせるかまで書くと説得力が増します。" },
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

        {/* 職務要約の例文 */}
        <h2>職務要約の例文（職種別）</h2>
        <p className="text-sm text-text-secondary mb-6">
          職務要約は採用担当者が最初に読む部分で、書類選考の印象を大きく左右します。
          「経験年数＋領域＋主な実績＋強み」を3〜5行で簡潔にまとめるのがコツです。
          以下の例文を自分の経歴に合わせて書き換えて使ってください（数値・固有名詞はご自身のものに置き換えましょう）。
        </p>
        <div className="space-y-5 mb-6">
          {[
            {
              role: "IT・エンジニア（Webエンジニア）",
              text: "Web系開発会社にて6年間、自社SaaSのサーバーサイド開発に従事してまいりました。要件定義から設計・実装・運用まで一貫して担当し、直近ではリードエンジニアとして5名のチームを牽引。API応答速度を平均40%改善し、月間の障害件数を前年比で半減させました。TypeScript・Goを用いた開発と、チームの技術負債解消を得意としています。",
            },
            {
              role: "営業（法人営業・BtoB）",
              text: "人材サービス会社にて5年間、法人向けの新規開拓営業を担当してまいりました。IT業界を中心に年間約60社を新規開拓し、担当エリアの売上を3期連続で前年比120%以上に成長させ、全社表彰を2度受賞。近年は既存顧客のアップセルにも注力し、顧客単価を15%改善しました。課題ヒアリングに基づく提案営業を強みとしています。",
            },
            {
              role: "管理部門（経理）",
              text: "上場企業の経理部にて7年間、月次・年次決算および開示業務に従事してまいりました。連結決算の早期化プロジェクトに携わり、決算日程を3営業日短縮。日商簿記1級を保有し、税務・監査法人対応の実務経験もございます。正確性とスピードを両立した決算業務と、業務フローの改善を得意としています。",
            },
          ].map((item) => (
            <div key={item.role} className="bg-warm-gray rounded-2xl p-5">
              <p className="font-bold text-navy text-sm mb-2">例：{item.role}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10 mb-10">
          <h3 className="font-bold text-teal mb-2">職務要約を書くときのポイント</h3>
          <ul className="space-y-1.5 text-sm text-text-secondary">
            <li>冒頭で「何年・どの領域の経験か」を明示する。</li>
            <li>実績はできる限り数値（金額・割合・件数）で表す。</li>
            <li>最後の1文で「自分の強み」を一言で言い切る。</li>
            <li>応募先の求人要件に合わせて強調するキーワードを入れ替える。</li>
          </ul>
        </div>

        {/* 添削サービスの内容 */}
        <h2>職務経歴書を仕上げる：エージェントの無料添削</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "料金", value: "完全無料" },
            { label: "添削回数", value: "何度でもOK" },
            { label: "所要期間", value: "2〜3営業日" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 添削で変わるポイント */}
        <h2>添削で変わる3つのポイント</h2>
        <div className="space-y-6 mb-10">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">1. 実績の数値化</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-400 flex-shrink-0">Before:</span>
                <span className="text-text-secondary">「売上向上に貢献しました」</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal flex-shrink-0">After:</span>
                <span className="text-text-secondary">「担当エリアの売上を前年比120%に向上させ、チーム内で1位の成績を達成しました」</span>
              </div>
            </div>
          </div>

          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">2. 成果ベースの表現</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-400 flex-shrink-0">Before:</span>
                <span className="text-text-secondary">「顧客対応を行っていました」</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal flex-shrink-0">After:</span>
                <span className="text-text-secondary">「月間50社の既存顧客を担当し、アップセル提案により顧客単価を15%改善しました」</span>
              </div>
            </div>
          </div>

          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">3. 企業別カスタマイズ</h3>
            <p className="text-sm text-text-secondary">
              応募先企業の求人要件に合わせて、強調すべきスキルや経験の順序を調整します。
              たとえば「マネジメント経験重視」の求人にはチーム管理の実績を前面に出し、
              「技術力重視」の求人には技術スタックや開発実績を中心に構成し直します。
            </p>
          </div>
        </div>

        {/* 業界別の書き方ポイント */}
        <h2>業界別の書き方ポイント</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">業界</th>
                <th className="p-3 text-left">重視されるポイント</th>
                <th className="p-3 text-left rounded-tr-lg">書き方のコツ</th>
              </tr>
            </thead>
            <tbody>
              {[
                { industry: "IT・エンジニア", focus: "技術スキル、開発実績", tip: "使用言語・フレームワーク・ツールを具体的に記載。GitHubやポートフォリオのURLも添付すると効果的。" },
                { industry: "営業職", focus: "売上実績、顧客管理", tip: "売上金額、達成率、新規開拓件数など数値で表現。BtoB/BtoCの区別、担当顧客規模も明記。" },
                { industry: "管理部門（経理・人事・総務）", focus: "専門知識、業務改善", tip: "担当業務の範囲（決算、採用、労務など）と改善実績を具体的に記載。資格（簿記、社労士など）も忘れずに。" },
              ].map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray" : ""}>
                  <td className="p-3 font-bold text-navy">{item.industry}</td>
                  <td className="p-3 text-text-secondary">{item.focus}</td>
                  <td className="p-3 text-text-secondary">{item.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* よくある失敗例と修正例 */}
        <h2>よくある失敗例と修正例</h2>
        <div className="space-y-4 mb-10">
          {[
            { fail: "業務内容を羅列するだけで成果が書かれていない", fix: "各業務に「その結果どうなったか」を追記する。数値がなくても「チーム内で表彰された」「プロセスが改善された」などの成果を添える。" },
            { fail: "職務経歴書が3枚以上になっている", fix: "直近の経歴を厚く、古い経歴は簡潔にまとめる。10年以上前の経歴は1〜2行の概要だけで十分。" },
            { fail: "自己PRが抽象的（「コミュニケーション力があります」など）", fix: "具体的なエピソードを添える。「部門横断プロジェクトのリーダーとして、5部署の調整を行い、予定通りリリースを達成した」など。" },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-red-400 font-bold text-sm flex-shrink-0">NG:</span>
                <p className="text-sm text-text-secondary">{item.fail}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal font-bold text-sm flex-shrink-0">OK:</span>
                <p className="text-sm text-text-secondary">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* おすすめエージェント */}
        <h2>おすすめの転職エージェント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", feature: "求人数業界最大級・全業界対応" },
            { name: "ビズリーチ", href: "/review/bizreach/", feature: "ハイクラス・スカウト型" },
            { name: "doda", href: "/review/doda/", feature: "エージェント＋サイト一体型" },
            { name: "マイナビエージェント", href: "/review/mynavi/", feature: "20代・30代の転職に強い" },
            { name: "JACリクルートメント", href: "/review/jac/", feature: "外資系・管理職に強い" },
          ].map((agent) => (
            <Link key={agent.name} href={agent.href} className="card-hover p-4 block no-underline">
              <h3 className="font-bold text-navy text-base">{agent.name}</h3>
              <p className="text-sm text-text-muted mt-1">{agent.feature}</p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2>よくある質問</h2>
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
            プロの添削で書類選考通過率アップ
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントの無料添削サービスを活用して、あなたの強みが伝わる職務経歴書を作りましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキング
            </Link>
          </div>
        </div>

        {/* 関連記事 */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/knowledge/interview-prep/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              面談の準備と流れ
            </Link>
            <Link href="/knowledge/flow/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              転職エージェントの使い方
            </Link>
            <Link href="/knowledge/email-template/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メール例文集
            </Link>
            <Link href="/review/recruit-agent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの口コミ
            </Link>
            <Link href="/company/hoya/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              企業別の転職ガイド
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
