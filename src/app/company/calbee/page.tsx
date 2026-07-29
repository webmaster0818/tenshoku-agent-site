import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "カルビーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "カルビー（証券コード2229）への転職を有価証券報告書などの一次データで解説。平均年間給与は約685万円（2026年3月期・有報／提出会社）。同期に単体従業員が3,711名へ大幅増となり算入範囲が変わった点も含め、中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "カルビーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "カルビー（2229）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "カルビーの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約685万円（2026年3月期・提出会社）です。同期に単体従業員が3,711名へ+1,421名増加しており（工場勤務の無期契約社員を正社員等級体系へ統合する人事制度変更と整合）、前期の約819万円からの低下は算入範囲の変化によるものです。待遇が引き下げられたことを意味するものではなく、職種・役職により実際のレンジは異なります。"
  },
  {
    "q": "カルビーは中途採用を行っていますか？",
    "a": "はい。研究開発・生産技術・品質保証・マーケティング・営業などの職種でキャリア採用が行われることがあります。募集状況は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "カルビーの転職難易度は高いですか？",
    "a": "ポテトチップスやじゃがりこで圧倒的な知名度を持つ人気メーカーのため、応募が集まりやすく競争率は高めです。食品・製造業での専門経験を持つ方が有利です。"
  },
  {
    "q": "カルビーのどんな職種の募集がありますか？",
    "a": "研究開発・生産技術・品質保証・マーケティング・営業など食品メーカー定番職種の募集が中心です。募集の有無は時期により変動するため、公式採用サイトでご確認ください。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都千代田区丸の内です。全国に工場・拠点があり、応募ポジションにより勤務地は異なります。"
  },
  {
    "q": "定着率は高いですか？",
    "a": "有報の平均勤続年数は約12.6年（2026年3月期・提出会社）です。人事制度変更に伴い算入対象が広がった後の数値である点も踏まえつつ、長く働く社員が多い傾向がうかがえます。"
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

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "カルビー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            カルビーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            カルビー（証券コード2229）はポテトチップス・じゃがりこ・かっぱえびせん・フルグラなどで知られる大手菓子・食品メーカーです。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：カルビー転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約685万円（2026年3月期・有価証券報告書・提出会社）。同期に単体従業員が3,711名へ+1,421名増加しており、前期の約819万円からの低下は算入範囲の変化（工場勤務の無期契約社員を正社員等級体系へ統合する人事制度変更と整合）によるもの。「年収が下がった会社」ではない点に注意。</li>
            <li>平均勤続約12.6年と長めで、安定して働く社員が多い傾向。</li>
            <li>ポテトチップス・じゃがりこ・フルグラなど圧倒的な知名度のブランドを多数保有。</li>
            <li>研究開発・生産技術・品質保証・マーケティング・営業など食品メーカー系職種の採用が中心。</li>
          </ul>
        </div>

        <h2>カルビーの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "カルビー" },
                { label: "証券コード", value: "2229（東証プライム）" },
                { label: "本社", value: "東京都千代田区丸の内1-8-3" },
                { label: "事業内容", value: "ポテトチップス・じゃがりこ・かっぱえびせん・フルグラ等の菓子・食品の製造販売" },
                { label: "平均年間給与", value: "約685万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約42.2歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約12.6年（同・提出会社）" },
                { label: "従業員数", value: "3,711名（同・提出会社単体）／連結6,974名" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。カルビーは2026年3月期に単体従業員が3,711名へ+1,421名増加しており（工場勤務の無期契約社員を正社員等級体系へ統合する人事制度変更と整合）、平均年間給与が前期の約819万円から約685万円へ変化したのは算入範囲の変化によるものです。待遇の引き下げを意味するものではありません。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>カルビーの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">カルビーは研究開発・生産技術・品質保証・マーケティング・営業などの職種でキャリア採用を行うことがあります（募集の有無・職種は時期により変動）。食品業界の経験や、製造業での生産技術・品質保証の経験が活かしやすい採用構造です。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>研究開発・生産技術・品質保証など食品メーカーの定番職種が中心。</li>
            <li>強いブランドを多数持つため、マーケティング・商品企画のポジションも注目度が高い。</li>
            <li>工場勤務の職種と本社勤務の職種で働き方が異なる。</li>
            <li>募集職種・要件は時期により変動するため公式採用サイトで最新確認を。</li>
          </ul>
        </div>

        <h2>カルビーで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "食品・製造業での実務経験", desc: "研究開発・生産技術・品質保証など、食品または近接する製造業での経験が最も評価されます。" },
            { title: "食の品質・安全への意識", desc: "毎日口にする菓子・食品を扱うため、品質・安全に対する誠実な姿勢が全職種で重視されます。" },
            { title: "現場と連携する調整力", desc: "全国の工場・営業・開発が連携する事業のため、部門を跨ぐコミュニケーション力が求められます。" },
            { title: "ブランドを育てる視点", desc: "じゃがりこ・フルグラなど長寿ブランドを多数持つ企業のため、ブランドを長期で育てる視点との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>カルビーの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 2, title: "一次面接", desc: "現場のマネージャー等との面接。実務経験・専門スキル・応募動機が中心です。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスとの面接。カルチャーフィットや中長期のキャリアビジョンが確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。入社時期や条件面の確認を経て入社となります。" },
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

        <h2>カルビーの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約685万円（2026年3月期）は単体3,711名の平均。前期（約819万円・単体約2,290名）から数値が変化したのは、工場勤務の無期契約社員を正社員等級体系へ統合する人事制度変更と整合する算入範囲の拡大によるもので、待遇の引き下げではない。</li>
            <li>算入範囲が広がった分、工場勤務を含む幅広い職種の実態に近い平均になったと読むのが妥当。職種（本社・工場・営業）で水準は異なる。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>カルビー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職の情報収集に向いています。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2>カルビー転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">カルビー転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/toyo-suisan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東洋水産転職ガイド</Link>
            <Link href="/company/yakult/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤクルト本社転職ガイド</Link>
            <Link href="/company/pigeon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ピジョン転職ガイド</Link>
            <Link href="/company/muji/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">良品計画転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
