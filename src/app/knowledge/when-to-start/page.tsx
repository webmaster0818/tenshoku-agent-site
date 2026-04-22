import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントはいつ登録すべき？最適なタイミングと活動期間",
  description:
    "転職エージェントの登録タイミングを徹底解説。求人が増える1〜3月・7〜9月のベストシーズン、転職活動の平均期間3〜6ヶ月、在職中・退職後それぞれのメリデメ、年齢別のアドバイスまで完全網羅。",
  openGraph: {
    title: "転職エージェントはいつ登録すべき？最適なタイミングと活動期間",
    description: "転職エージェントの登録に最適なタイミングと転職活動の期間を徹底解説。",
  },
};

const faqData = [
  { q: "転職を決めていなくてもエージェントに登録して大丈夫？", a: "はい、まったく問題ありません。「転職するか迷っている」「市場価値を知りたい」という段階でも歓迎されます。多くのエージェントが情報収集目的の登録・面談に対応しています。登録したからといって、必ず転職する必要はありません。" },
  { q: "転職活動の平均期間はどのくらいですか？", a: "一般的に3〜6ヶ月です。内訳は、準備・エージェント面談に2〜4週間、書類応募・面接に1〜3ヶ月、内定・退職手続きに1〜2ヶ月程度です。ただし、ハイクラスや専門職はマッチする求人が少なく、6ヶ月以上かかることもあります。" },
  { q: "求人が多い時期はいつですか？", a: "1〜3月（4月入社向け）と7〜9月（10月入社向け）が求人の増える時期です。特に1〜3月は年度切り替えに伴う採用計画で、最も求人数が多くなります。ただし、通年採用を行う企業も多いため、時期を気にしすぎる必要はありません。" },
  { q: "在職中にエージェントに登録しても会社にバレませんか？", a: "基本的にバレることはありません。エージェントには守秘義務があり、あなたの許可なく現在の勤務先に連絡することはありません。ただし、転職サイト上に職務経歴を公開する場合は、現職の社名を非公開に設定しておきましょう。" },
  { q: "退職してからエージェントに登録すべきですか？", a: "在職中の登録がおすすめです。退職してからだと収入が途絶え、焦って不本意な決断をしてしまうリスクがあります。多くのエージェントが在職中の方向けに、夜間や土日の面談、オンライン面談に対応しています。" },
  { q: "40代でも転職エージェントを使えますか？", a: "もちろん使えます。40代はマネジメント経験や専門性が評価される年代です。JACリクルートメントやビズリーチなど、ミドル・シニア層に強いエージェントを活用しましょう。ただし、20代・30代に比べると求人数は限られるため、複数社への登録を推奨します。" },
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

export default function WhenToStartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "お役立ち", href: "/" },
          { name: "登録のベストタイミング" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントはいつ登録すべき？最適なタイミングと活動期間
          </h1>
          <p className="text-text-secondary leading-relaxed">
            転職エージェントへの登録タイミングは、転職活動の成否を左右する重要な要素です。
            求人が増えるベストシーズン、必要な活動期間、在職中と退職後それぞれの特徴を解説します。
          </p>
        </div>

        {/* 登録に最適な時期 */}
        <h2>登録に最適な時期</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">1〜3月（最も求人が多い）</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>4月入社に向けた採用が活発になる時期</li>
              <li>年度切り替えで新規ポジションが増加</li>
              <li>ボーナス支給後の退職者の補充求人も豊富</li>
              <li>企業の年間採用予算が確定し、採用意欲が最も高い</li>
            </ul>
          </div>
          <div className="bg-teal/5 rounded-2xl p-5 border border-teal/10">
            <h3 className="font-bold text-teal mb-3">7〜9月（第2のピーク）</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>10月入社に向けた採用が活発になる時期</li>
              <li>下半期のプロジェクト要員の補充</li>
              <li>夏のボーナス後の退職者の補充求人</li>
              <li>1〜3月に比べ競合する求職者が少なめ</li>
            </ul>
          </div>
        </div>

        {/* 転職活動の平均期間 */}
        <h2>転職活動の平均期間：3〜6ヶ月</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "準備期間：2〜4週間", desc: "エージェント登録、面談、職務経歴書の作成・添削、応募企業の選定を行います。この段階をしっかり行うことで、その後の活動がスムーズになります。" },
            { step: 2, title: "応募・面接期間：1〜3ヶ月", desc: "書類選考（1〜2週間）→ 一次面接 → 二次面接 → 最終面接と進みます。同時並行で複数社に応募するのが一般的で、5〜10社程度に応募する方が多いです。" },
            { step: 3, title: "内定・退職手続き：1〜2ヶ月", desc: "内定承諾後、現職への退職意思の伝達（1ヶ月前が一般的）、引き継ぎ、有給消化を経て入社となります。就業規則で退職予告期間が定められている場合があるため、事前に確認しましょう。" },
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

        {/* 在職中 vs 退職後 */}
        <h2>在職中 vs 退職後の登録メリット・デメリット</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">比較項目</th>
                <th className="p-3 text-left">在職中の登録</th>
                <th className="p-3 text-left rounded-tr-lg">退職後の登録</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "収入面", employed: "収入が途切れず安心", resigned: "収入がないため焦りが出やすい" },
                { item: "時間の自由度", employed: "面接の日程調整が難しい", resigned: "面接に柔軟に対応できる" },
                { item: "精神的余裕", employed: "「ダメなら今の仕事がある」と思える", resigned: "早く決めなければというプレッシャー" },
                { item: "ブランク", employed: "職歴にブランクが生じない", resigned: "離職期間が長いと不利になることも" },
                { item: "企業からの印象", employed: "在職中は安定感がある", resigned: "計画的な退職なら問題なし" },
                { item: "転職活動の集中度", employed: "業務と並行で負担が大きい", resigned: "転職活動に専念できる" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-warm-gray" : ""}>
                  <td className="p-3 font-bold text-navy">{row.item}</td>
                  <td className="p-3 text-text-secondary">{row.employed}</td>
                  <td className="p-3 text-text-secondary">{row.resigned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 年齢別のタイミング */}
        <h2>年齢別の登録タイミングアドバイス</h2>
        <div className="space-y-4 mb-10">
          {[
            { age: "20代", advice: "キャリアの方向性が見えたら早めに登録。第二新卒（入社3年以内）は未経験業界への転職もしやすい時期です。「3年は働くべき」にこだわりすぎず、合わないと感じたら行動しましょう。マイナビエージェントやリクルートエージェントが若手向けに手厚いサポートを提供しています。" },
            { age: "30代", advice: "専門性やマネジメント経験が評価される年代。市場価値が高い30代前半は特に有利です。35歳を超えると求人数が減る傾向があるため、キャリアアップを考えているなら30代前半のうちに行動を。dodaやJACリクルートメントが30代のキャリアアップに強みを持ちます。" },
            { age: "40代", advice: "管理職・専門職としての経験が最大の武器。求人数は20〜30代に比べ少なくなりますが、ピンポイントでマッチする求人に出会えれば高待遇も期待できます。JACリクルートメントやビズリーチなどハイクラス向けエージェントを中心に、3社以上に登録して幅広くアプローチしましょう。" },
          ].map((item, i) => (
            <div key={i} className="card-hover p-5">
              <h3 className="font-bold text-navy text-base mb-2">{item.age}</h3>
              <p className="text-sm text-text-secondary">{item.advice}</p>
            </div>
          ))}
        </div>

        {/* スケジュール例 */}
        <h2>登録から内定までのスケジュール例</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "1月：エージェント登録・面談", desc: "2〜3社のエージェントに登録し、面談を受ける。職務経歴書の添削を依頼し、応募書類を完成させる。" },
            { step: 2, title: "2月：書類応募・面接開始", desc: "興味のある求人に応募開始。書類選考の結果を待ちながら、面接対策を進める。同時に5〜10社に応募するのが目安。" },
            { step: 3, title: "3月：面接ラッシュ", desc: "一次〜最終面接が集中する時期。複数社の選考を並行して進め、比較検討できる状態を作る。" },
            { step: 4, title: "4月：内定・条件交渉", desc: "内定が出たら条件面を確認・交渉。エージェントが年収交渉を代行してくれる。複数内定の場合は比較して決断。" },
            { step: 5, title: "5月：退職手続き・引き継ぎ", desc: "現職に退職を申し出、引き継ぎを行う。有給消化期間も含めてスケジュールを調整。" },
            { step: 6, title: "6月：新しい職場へ入社", desc: "引き継ぎ完了後、新しい環境でのスタート。入社後もエージェントに相談できる場合があります。" },
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
            思い立ったときが登録のベストタイミング
          </h2>
          <p className="text-white/70 text-sm mb-6">
            「転職を考え始めた今」が最適な登録タイミングです。まずは無料で情報収集を始めましょう。
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
            <Link href="/knowledge/how-to-choose/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              エージェントの選び方
            </Link>
            <Link href="/knowledge/multiple/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              複数エージェントの活用法
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
