import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "転職エージェントに何をどう伝えるか｜紹介求人が変わる3つの伝え方",
  description:
    "転職エージェントから届く求人がピントはずれなのは、伝え方が原因であることが多いです。仕事内容を「動詞＋対象＋規模＋成果」で具体化する方法、自分が力を発揮できる状況の言語化、条件に優先順位をつけて渡すやり方を、そのまま使えるメモの形で整理します。",
  alternates: { canonical: "/knowledge/agent-briefing/" },
  openGraph: {
    title: "転職エージェントに何をどう伝えるか｜紹介求人が変わる3つの伝え方",
    description:
      "仕事内容の具体化・力を発揮できる状況の言語化・条件の優先順位。エージェントに渡す情報の粒度を上げる方法をまとめます。",
  },
};

const faqData = [
  {
    q: "エージェントから希望と違う求人ばかり届きます。どうすればよいですか？",
    a: "多くの場合、伝えている情報の粒度が粗いことが原因です。「営業をしていました」「年収は上げたいです」といった伝え方では、アドバイザーは職種名と年収レンジでしか検索できません。担当した顧客の規模・商材・自分の役割・使っていたツールまで具体的に伝えると、紹介される求人の精度が上がります。",
  },
  {
    q: "希望条件はどこまで細かく言ってよいですか？",
    a: "細かく言って構いませんが、必ず優先順位をつけてください。条件を10個フラットに並べると、全部を満たす求人は存在せず、結果として紹介が止まります。「絶対に譲れない」を2つまで、「できれば」を3つまでに絞り、残りは譲れると明示するのが実用的です。",
  },
  {
    q: "年収はどう伝えるのが正解ですか？",
    a: "「現在の年収」「これを下回るなら転職しない最低ライン」「希望額」の3つを数字で伝えます。希望額だけを言うと、その額に届く求人しか紹介されず母数が狭まります。最低ラインを示しておくと、年収以外の条件が良い求人も候補に入れてもらえます。",
  },
  {
    q: "転職回数が多いことは、先に言ったほうがよいですか？",
    a: "先に言ったほうがよいです。アドバイザーは企業に推薦する立場なので、経歴の弱点を把握していないと推薦コメントが書けません。回数と、それぞれの理由、そこから何を基準に会社を選ぶようになったかをセットで伝えると、通る可能性のある求人に絞って提案してもらえます。",
  },
  {
    q: "他社のエージェントも使っていることは伝えるべきですか？",
    a: "伝えるべきです。同じ求人に二重で応募すると企業側で重複が発覚し、両方とも選考対象外になることがあります。どのエージェント経由でどの企業の選考を受けているかは、すべてのアドバイザーに共有しておくのが安全です。",
  },
  {
    q: "まだ転職するか決めていない段階でも面談してよいですか？",
    a: "問題ありません。その場合は「情報収集の段階である」ことと「どうなったら転職を決めるか」を最初に伝えてください。前提が共有されていれば、急かされにくくなり、比較材料としての求人を出してもらいやすくなります。",
  },
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

export default function AgentBriefingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "活用ガイド一覧", href: "/knowledge/" },
          { name: "エージェントへの伝え方" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職エージェントに何をどう伝えるか｜紹介求人が変わる3つの伝え方
          </h1>

          <div className="rounded-xl overflow-hidden my-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/column-img/ts-agent-briefing.jpg" alt="面談の前に条件を整理する机の上" className="w-full h-auto" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            「エージェントから来る求人が、希望とずれている」——よく聞く不満です。
            ただ、アドバイザーは<strong>あなたが話した言葉を検索条件に変換している</strong>だけなので、
            話す言葉が粗ければ、返ってくる求人も粗くなります。
            このページでは、面談で渡す情報の粒度を上げるための3点を、そのまま書き写せるメモの形で整理します。
          </p>
        </div>

        <h2>先に結論：渡すのはこの3つ</h2>
        <div className="bg-navy rounded-2xl p-6 sm:p-7 mb-10">
          <ol className="space-y-3 list-decimal pl-5">
            <li>
              <strong>仕事内容</strong>を「動詞＋対象＋規模＋成果」で言う（職種名だけでは検索できない）
            </li>
            <li>
              <strong>自分が力を出せている状況</strong>を、実際にあった場面3つから言語化する
            </li>
            <li>
              <strong>条件</strong>は「絶対2つ・できれば3つ・譲れる」の3層で渡す
            </li>
          </ol>
        </div>

        <h2>① 仕事内容を「動詞＋対象＋規模＋成果」で言う</h2>
        <p>
          いちばん多いのが、職種名で止まってしまうケースです。
          「営業です」と言われたアドバイザーにできるのは、営業職の求人を年収レンジで絞ることだけになります。
        </p>

        <div className="grid sm:grid-cols-2 gap-5 my-8">
          <div className="card p-5 border-l-4 border-l-red-400">
            <h3 className="font-bold text-navy mb-2">粗い伝え方</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              「法人営業を5年やっていました。新規も既存もやっています。数字は達成していました。」
            </p>
            <p className="text-xs text-text-muted mt-3">
              これだと、同じ職種名の求人が広く届くだけになります。
            </p>
          </div>
          <div className="card p-5 border-l-4 border-l-teal">
            <h3 className="font-bold text-navy mb-2">具体化した伝え方</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              「<strong>中堅の食品メーカー向けに</strong>（対象）、<strong>生産管理システムを</strong>（商材）
              <strong>提案して</strong>（動詞）いました。<strong>担当は既存20社・新規は年10社</strong>（規模）。
              <strong>更新率を85%から94%に上げた</strong>（成果）のが一番大きい仕事です。
              <strong>導入後の定着支援まで入る</strong>のが自社の特徴で、そこを担当していました。」
            </p>
          </div>
        </div>

        <p>次の5項目が埋まっていれば、だいたい足ります。</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th style={{ width: "26%" }}>項目</th>
                <th>書くこと</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>対象（誰に）</td>
                <td>業界・企業規模・役職。「中堅製造業の生産管理部長」まで言えると強い</td>
              </tr>
              <tr>
                <td>商材・領域（何を）</td>
                <td>製品名でなく、何を解決するものかで言う</td>
              </tr>
              <tr>
                <td>動詞（何をした）</td>
                <td>提案した／設計した／運用した／立ち上げた／引き継いだ／直した</td>
              </tr>
              <tr>
                <td>規模（どれだけ）</td>
                <td>担当社数・金額・人数・件数・期間。1つでも数字があると具体性が跳ね上がる</td>
              </tr>
              <tr>
                <td>成果（どうなった）</td>
                <td>前後の変化。目標達成率でもよいが、「何が何に変わったか」のほうが伝わる</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-muted">
          数字が出せない職種でも、「毎月◯件」「◯人のチーム」「◯年運用」など、量が分かる表現は必ずあります。
        </p>

        <h2>② 「どんな仕事をしているときが良いか」を言語化する</h2>
        <p>
          条件だけを伝えると、条件を満たすが続かない会社に行き着くことがあります。
          <strong>自分が力を出せている状況</strong>を言葉にしておくと、アドバイザーは
          求人票の「業務内容」や「配属チーム」の側で合わせにいけるようになります。
        </p>
        <p>とはいえ「やりがい」から考えると手が止まるので、次の順で機械的に出します。</p>

        <div className="space-y-5 my-8">
          {[
            {
              n: 1,
              t: "直近1〜2年で、時間が早く過ぎた場面を3つ書き出す",
              d: "大きな成果でなくて構いません。「資料を作り直して通った日」「新人に教えた週」「障害対応で原因を特定できたとき」など、具体的な日の話で書きます。",
            },
            {
              n: 2,
              t: "その3つに共通している要素を抜く",
              d: "相手は誰か（社内／社外／初対面／長い付き合い）、役割は何か（考える／まとめる／動かす／直す／教える）、環境はどうか（1人／少人数／大人数、短期／長期）。",
            },
            {
              n: 3,
              t: "逆に、消耗した場面も3つ書き出す",
              d: "こちらのほうが重要なことがあります。避けたい条件が具体的に出てくるので、ミスマッチを事前に外せます。",
            },
          ].map((s) => (
            <div key={s.n} className="card p-5 flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full bg-navy text-white grid place-items-center font-bold">
                {s.n}
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">{s.t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-warm-gray rounded-xl p-5 my-6">
          <p className="font-bold text-navy mb-2">言語化の例</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            「<strong>長く付き合っている顧客の、込み入った課題を、少人数で腰を据えて解く</strong>仕事のときに力が出ます。
            逆に、<strong>短期で数を当てる新規開拓</strong>と、<strong>決裁者に会えない商談</strong>が続くと消耗します。」
          </p>
          <p className="text-xs text-text-muted mt-3">
            ここまで言えると、アドバイザーは「既存深耕型・少人数チーム・決裁者に直接会える規模」という軸で求人を絞れます。
          </p>
        </div>

        <h2>③ 条件は「絶対2つ・できれば3つ・譲れる」の3層で渡す</h2>
        <p>
          条件をフラットに10個並べると、すべてを満たす求人は存在せず、紹介自体が止まります。
          優先順位をつけて渡すのが、いちばん効きます。
        </p>

        <div className="grid sm:grid-cols-3 gap-5 my-8">
          <div className="card p-5">
            <h3 className="font-bold text-navy mb-2">絶対に譲れない（2つまで）</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              これを満たさないなら転職しない、という条件。勤務地・年収の最低ライン・リモートの可否など。
              <strong>3つ以上あると求人が消えます。</strong>
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-bold text-navy mb-2">できれば叶えたい（3つまで）</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              業界、企業規模、職種の幅、残業時間、評価制度など。
              ここは「優先度の高い順」で並べて渡します。
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-bold text-navy mb-2">譲れる</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              明示すると紹介の幅が広がります。「業界はこだわらない」「役職は問わない」など、
              言わないと勝手に絞られてしまう部分です。
            </p>
          </div>
        </div>

        <p>
          年収は、<strong>「現在」「最低ライン」「希望」の3つを数字で</strong>伝えます。
          希望額だけを言うと、その額に届く求人しか出てこなくなり、
          年収以外の条件が良い会社が候補から外れます。
        </p>

        <FelmatCta
          slug="agent-navi"
          heading="伝える内容を整理してから、面談に臨む"
          note="このページのメモを埋めてから面談を受けると、初回から精度の高い求人が出てきます。"
        />

        <h2>伝えないと損をする情報</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>伝えること</th>
                <th>理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>在職中か退職済みか、入社可能時期</td>
                <td>企業側の採用スケジュールと直結します。急ぎの求人か、待てる求人かで出す案件が変わります</td>
              </tr>
              <tr>
                <td>他社エージェントの利用状況と選考中の企業</td>
                <td>
                  <strong>同じ求人に二重応募すると、両方とも選考対象外になることがあります。</strong>
                  必ず全社に共有してください
                </td>
              </tr>
              <tr>
                <td>転職回数と、その背景</td>
                <td>
                  アドバイザーは企業に推薦する立場です。弱点を知らないと推薦コメントが書けません。
                  先に話すほど、通る求人に絞ってもらえます
                </td>
              </tr>
              <tr>
                <td>絶対に行きたくない企業・業界</td>
                <td>既応募の企業も含めて先に伝えると、重複と無駄な面談を避けられます</td>
              </tr>
              <tr>
                <td>転職するか迷っている段階であること</td>
                <td>
                  前提が共有されていれば急かされにくくなります。「どうなったら決めるか」も添えると、
                  比較材料としての求人が出てきます
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>そのまま埋められるメモ</h2>
        <div className="bg-warm-gray rounded-xl p-5 sm:p-6 my-6">
          <pre className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-text-secondary">{`【職務】
 対象   ：　　　　　業界／規模／相手の役職
 商材   ：　　　　　何を解決するものか
 動詞   ：　　　　　提案／設計／運用／立ち上げ／改善
 規模   ：　　　　　担当◯社・◯円・◯人・◯件
 成果   ：　　　　　◯◯が◯◯になった

【力が出る状況】
 相手   ：
 役割   ：
 環境   ：
 消耗する場面：

【条件】
 絶対（2つまで）  ：
 できれば（3つまで）：
 譲れる       ：
 年収  現在：      最低ライン：      希望：

【先に伝えること】
 入社可能時期：
 他社エージェント・選考中の企業：
 転職回数と理由：
 行きたくない企業・業界：`}</pre>
        </div>

        <p>
          面談で何を聞かれるかは <Link href="/knowledge/interview-prep/">エージェントとの面談対策</Link> に、
          経歴の弱点の扱い方は <Link href="/knowledge/job-history/">転職回数と職歴の見られ方</Link> にまとめています。
          複数社を併用するときの整理は <Link href="/knowledge/multiple/">複数利用・掛け持ちのコツ</Link> を参照してください。
          業界を絞って相談先を探す場合は{" "}
          <FelmatTextLink slug="agent-navi" text="転職エージェントナビ" /> のような紹介型サービスも使えます。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faqData.map((f) => (
            <details key={f.q} className="card p-5">
              <summary className="font-bold text-navy cursor-pointer">{f.q}</summary>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <h2>関連ガイド</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <Link href="/knowledge/job-history/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">転職回数と職歴の見られ方</h3>
            <p className="text-sm text-text-secondary">何回から気にされるか、調査データで整理</p>
          </Link>
          <Link href="/knowledge/interview-prep/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">エージェントとの面談対策</h3>
            <p className="text-sm text-text-secondary">準備・服装・当日の流れ</p>
          </Link>
          <Link href="/knowledge/resume/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">職務経歴書の書き方</h3>
            <p className="text-sm text-text-secondary">職務要約の例文と書類通過のコツ</p>
          </Link>
          <Link href="/knowledge/multiple/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">複数利用・掛け持ちのコツ</h3>
            <p className="text-sm text-text-secondary">併用時の整理と伝え方</p>
          </Link>
        </div>
      </article>
    </>
  );
}
