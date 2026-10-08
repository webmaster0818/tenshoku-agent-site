import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { MHLW, DODA, STATS_CONFIRMED_AT } from "@/data/stats";

export const metadata: Metadata = {
  title: "転職エージェントの使い方・流れ｜登録から内定まで8ステップ",
  description:
    "転職エージェントの利用の流れを登録から内定まで8ステップで解説。各ステップで準備すべきことや注意点、効果的な活用法をわかりやすく紹介します。",
  openGraph: {
    title: "転職エージェントの使い方・流れ｜登録から内定まで8ステップ",
    description: "転職エージェントの利用の流れを8ステップで解説。",
  },
};

const faqData = [
  { q: "転職エージェントの登録に何が必要ですか？", a: "基本的には氏名、連絡先（電話番号・メールアドレス）、直近の職歴（会社名・職種・経験年数）があれば登録できます。詳細な職務経歴書は面談後に作成しても問題ありません。" },
  { q: "面談ではどんなことを聞かれますか？", a: "これまでの職歴、転職理由、希望条件（業界・職種・年収・勤務地・勤務時間）、キャリアの方向性などを聞かれます。素直に伝えることで、より適切な求人を紹介してもらえます。" },
  { q: "紹介された求人は必ず応募しなければなりませんか？", a: "いいえ、応募するかどうかは自分で判断できます。興味がない求人は断っても問題ありません。ただし、断る際は理由を伝えることで、次回以降の紹介精度が上がります。" },
  { q: "在職中でも転職エージェントは利用できますか？", a: "はい、利用できます。多くの転職者が在職中にエージェントを利用しています。面談や連絡は就業時間外やオンラインで対応可能です。" },
  { q: "内定後に辞退することはできますか？", a: "法的には可能ですが、企業やエージェントとの信頼関係に影響します。内定辞退する場合は、できるだけ早くエージェント経由で丁寧に伝えましょう。" },
  { q: "転職活動全体でどのくらいの期間がかかりますか？", a: "一般的に登録から内定まで2〜3ヶ月程度です。在職中の場合は退職交渉を含めて3〜4ヶ月、退職後の場合は1〜2ヶ月で決まるケースもあります。" },
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

export default function FlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "転職知識", href: "/" },
          { name: "使い方・流れ" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントの使い方・流れ｜登録から内定まで8ステップ
          </h1>

          <div className="rounded-xl overflow-hidden my-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/column-img/ts-flow.jpg" alt="転職活動の流れをイメージした静物" className="w-full h-auto" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            「転職活動は3ヶ月くらい」とよく言われます。実際、転職サービスdodaの調査では、
            活動開始から内定までの平均は<strong>約{DODA.avgMonths}ヶ月</strong>です。
            ただ、この3ヶ月は<strong>均等に流れません</strong>。
            厚生労働省の実態調査でも、求職期間は「1ヶ月以上3ヶ月未満」が{MHLW.jobSearchPeriod[0].pct}%で最も多い一方、
            「求職期間なし（在職中に決まった）」が{MHLW.jobSearchPeriod[1].pct}%、「1ヶ月未満」が{MHLW.jobSearchPeriod[2].pct}%と、
            短期で終わる人も相当数います。
            このページでは、登録から入社までの8ステップを並べたうえで、
            <strong>どこで時間を食い、どこで人が落ちるのか</strong>を公表されている数字で押さえます。
          </p>
        </div>

        {/* 8ステップ */}
        <h2>登録から内定まで8ステップ</h2>
        <div className="space-y-5 mb-10">
          {[
            { step: 1, title: "公式サイトから無料登録", desc: "エージェントの公式サイトで基本情報を入力します。所要時間は約5分。氏名、連絡先、直近の職歴、希望条件（大まかでOK）を入力するだけです。転職時期が未定でも登録可能です。" },
            { step: 2, title: "面談日程の調整", desc: "登録後、エージェントから電話またはメールで面談日程の連絡が届きます。通常、登録から1〜7日以内に連絡があります。対面、オンライン、電話から面談方法を選べます。" },
            { step: 3, title: "キャリアアドバイザーとの面談", desc: "専任のアドバイザーが、あなたの職歴、転職理由、希望条件、キャリアプランを丁寧にヒアリングします。面談時間は通常60〜90分程度。転職市場の動向や、あなたの市場価値についてもアドバイスを受けられます。" },
            { step: 4, title: "求人の紹介", desc: "面談内容をもとに、あなたに合った求人を紹介してもらえます。非公開求人を含め、複数の求人を比較検討できます。各求人の詳細な情報（社風、残業時間、離職率など）もアドバイザーに確認可能です。" },
            { step: 5, title: "応募書類の作成・添削", desc: "履歴書・職務経歴書の作成をサポートしてもらえます。アドバイザーが添削し、応募先企業に合わせた内容にブラッシュアップ。書類選考の通過率を高めるためのアドバイスを受けられます。" },
            { step: 6, title: "応募・書類選考", desc: "アドバイザーが応募手続きを代行します。推薦状を添えて応募してくれるため、書類選考の通過率が上がるケースもあります。複数社に同時に応募することも可能です。" },
            { step: 7, title: "面接対策・面接", desc: "応募先企業に合わせた面接対策を受けられます。過去の面接で聞かれた質問の情報や、企業が重視するポイントなどの情報も提供してもらえます。面接日程の調整もアドバイザーが代行します。" },
            { step: 8, title: "内定・年収交渉・入社", desc: "内定が出たら、年収交渉や入社日の調整をアドバイザーが代行します。現職の退職交渉のアドバイスも受けられます。入社後もフォローアップを行うエージェントもあります。" },
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

        {/* 数字で見る歩留まり（2026-10-08 追加） */}
        <h2>3ヶ月の中身：時間を食うのは「応募数を積むところ」</h2>
        <p className="text-text-secondary leading-relaxed mb-5">
          8つのステップを並べると、どれも同じ重さに見えます。
          しかし実際に時間と労力がかかるのは、ステップ4〜6（求人紹介・書類作成・応募）です。
          理由は単純で、<strong>1社の内定を得るために必要な応募数が多い</strong>からです。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
          {[
            { v: `${DODA.avgApplications}社`, l: "転職成功者の平均応募社数" },
            { v: `約${DODA.docPassPct}%`, l: "書類選考の通過率" },
            { v: `約${DODA.offerPct}%`, l: "応募からの内定率" },
            { v: `${DODA.appsPerOffer}社`, l: "内定1社に必要な応募数" },
          ].map((x) => (
            <div key={x.l} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{x.v}</p>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">{x.l}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-6">出典：{DODA.source}（{STATS_CONFIRMED_AT}に当サイトで確認）。数値は同社の公表値です。</p>
        <p className="text-text-secondary leading-relaxed mb-5">
          書類が3割しか通らず、応募からの内定が4.5%前後だとすると、
          <strong>1社の内定にはおよそ{DODA.appsPerOffer}社の応募が要る</strong>計算になります。
          週に3〜4社ずつ応募しても2ヶ月かかります。つまり「3ヶ月」の大半は、
          面接の回数ではなく<strong>応募を積み上げる時間</strong>です。
        </p>
        <div className="glass-card p-5 mb-10">
          <p className="font-bold text-navy mb-2">年代が上がるほど、応募社数は減る</p>
          <div className="flex flex-wrap gap-4">
            {DODA.byAge.map((a) => (
              <div key={a.age} className="min-w-[110px]">
                <p className="text-xs text-text-muted">{a.age}</p>
                <p className="text-lg font-extrabold text-navy">平均{a.n}社</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-secondary mt-3 leading-relaxed">
            応募できる求人そのものが絞られるためです。
            年代が上がるほど「数を打つ」戦い方が効かなくなり、
            <strong>1社ごとの精度</strong>——つまり職務経歴書と面接準備の質——が結果を決めます。
          </p>
        </div>

        {/* 転：どこでつまずくか */}
        <h2>つまずくのは、たいていこの3か所</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              t: "① 面談で希望を言語化できず、紹介求人がずれる",
              d: "「年収は上げたい、残業は減らしたい」だけでは、紹介される求人が絞れません。結果として応募できる求人が増えず、ステップ4から先が止まります。仕事内容を動詞で具体化し、条件に優先順位をつけてから面談に臨むと、初回の紹介から精度が変わります。",
              href: "/knowledge/agent-briefing/",
              label: "エージェントへの伝え方",
            },
            {
              t: "② 書類が3割の壁を越えられない",
              d: "書類通過率は約30%です。つまり10社出して3社しか進みません。職務経歴書を使い回していると、ここで止まったまま時間だけが過ぎます。応募先ごとに職務要約の先頭2〜3行を書き換えるだけでも通過率は変わります。",
              href: "/knowledge/resume/",
              label: "職務経歴書の書き方",
            },
            {
              t: "③ 1社だけに登録して、求人数が足りない",
              d: "必要な応募数が27社前後だとすると、1社のエージェントが保有する求人だけでは足りないことがあります。大手総合型と特化型を組み合わせて、母数を確保するのが現実的です。",
              href: "/knowledge/multiple/",
              label: "複数利用のコツ",
            },
          ].map((x) => (
            <div key={x.t} className="glass-card p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
              <p className="mt-3 text-sm">
                <Link href={x.href} className="text-teal hover:underline font-bold">→ {x.label}</Link>
              </p>
            </div>
          ))}
        </div>

        {/* 結：逆算スケジュール */}
        <h2>入社希望日から逆算すると、登録はいつか</h2>
        <p className="text-text-secondary leading-relaxed mb-5">
          厚生労働省の調査では、離職から入社までが「1ヶ月未満」の人が{MHLW.gapUnder1mPct}%です。
          在職中に決めてから辞める人が多い、ということです。
          そこから逆算すると、目安はこうなります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-warm-gray text-left">
                <th className="border-b border-border p-3">入社希望日まで</th>
                <th className="border-b border-border p-3">やること</th>
              </tr>
            </thead>
            <tbody>
              {[
                { w: "4〜5ヶ月前", d: "エージェントに登録し、面談。職務経歴書の初版を作る" },
                { w: "3〜4ヶ月前", d: "応募を開始。週3〜4社のペースを目安に積み上げる" },
                { w: "2〜3ヶ月前", d: "面接が重なる時期。並行して応募も続ける" },
                { w: "1〜2ヶ月前", d: "内定・条件交渉。現職へ退職を申し出る" },
                { w: "1ヶ月前", d: "引き継ぎ。有給の消化日程を確定する" },
              ].map((r) => (
                <tr key={r.w}>
                  <td className="border-b border-border p-3 font-bold whitespace-nowrap">{r.w}</td>
                  <td className="border-b border-border p-3 text-text-secondary">{r.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※{MHLW.source}およびdodaの公表値をもとにした目安です（{STATS_CONFIRMED_AT}確認）。
          業界・職種・年代によって必要な期間は変わります。在職中か離職後かでも大きく変わります。
        </p>

        {/* タイムライン目安 */}
        <h2>各ステップにかかる時間の目安</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "登録〜面談", value: "1〜7日" },
            { label: "求人紹介〜応募", value: "1〜2週間" },
            { label: "書類選考〜面接", value: "2〜4週間" },
            { label: "内定〜入社", value: "1〜2ヶ月" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <p className="text-xl font-extrabold text-teal">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2>よくある質問</h2>
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
            転職エージェントに無料登録しよう
          </h2>
          <p className="text-white/70 text-sm mb-6">
            まずは登録から。5分の登録で、プロのサポートが受けられます。
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
