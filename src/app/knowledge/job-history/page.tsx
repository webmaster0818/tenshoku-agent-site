import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "転職回数は何回から不利？コンサルタント243人調査と採用側の本音",
  description:
    "転職回数が選考に影響し始めるのは何回からか。エン・ジャパンのコンサルタント243人調査（2024年12月）では、採用企業が気にし始めるのは「3回」が最多の34%。転職を実現したミドルの67%は転職1〜3回でした。回数が多くても通る人の条件、他責に聞こえる転職理由の避け方まで、出典つきで整理します。",
  alternates: { canonical: "/knowledge/job-history/" },
  openGraph: {
    title: "転職回数は何回から不利？コンサルタント243人調査と採用側の本音",
    description:
      "採用企業が転職回数を気にし始めるのは「3回」が最多の34%。回数が多くても通る人の条件まで、調査データをもとに整理します。",
  },
};

const faqData = [
  {
    q: "転職回数は何回から選考に影響しますか？",
    a: "エン・ジャパンが『ミドルの転職』のコンサルタント243名に行った調査（2024年12月18〜25日実施）では、採用企業が転職回数を気にし始めるのは「3回」という回答が34%で最も多くなっています。ただし年代で基準は変わり、20代は3回以上で定着性を疑われやすい一方、40代ではよほど多くない限り回数自体はあまり重視されません。",
  },
  {
    q: "「転職回数は年齢の十の位より少ないほうがいい」というのは本当ですか？",
    a: "よく言われる目安ですが、公表された調査にこの基準は見当たりません。実際のデータに近いのは「20代は3回が分かれ目」「30代以降は回数よりキャリアの一貫性」という整理です。20代にはおおむね当てはまりますが、40代で4回までなら安心という根拠はなく、逆に40代では回数自体があまり見られない傾向があります。",
  },
  {
    q: "企業は転職回数で足切りをしていますか？",
    a: "募集要項に回数制限を明記する企業はまれです。ただし書類選考の段階で、短期間の在籍が続いている経歴は慎重に見られます。前述の調査で企業が懸念する理由の最多は「職務や組織への長期的なコミットメントに不安がある」（80%）で、回数そのものより“またすぐ辞めないか”が見られています。",
  },
  {
    q: "転職回数が多くても採用される人はどんな人ですか？",
    a: "同じ調査で、転職回数が多くても転職を実現した人の評価点として最も多かったのは「高い専門スキルを有している」（82%）でした。ポジションは課長クラス（43%）、職種は技術系（IT・Web・通信系）（25%）、転職先は中堅・中小企業（65%）が最多です。専門性があり、転職理由に納得性があることが共通しています。",
  },
  {
    q: "退職理由は正直に話してよいのでしょうか？",
    a: "事実を偽る必要はありません。ただし「自分は悪くない、周りが悪い」という話し方になると、他責思考が強いという印象につながります。事実→自分が取った行動→それでも解決しなかったこと→だから次はこうしたい、の順で話すと、同じ事実でも受け取られ方が変わります。",
  },
  {
    q: "短期間で辞めた経歴は隠せますか？",
    a: "隠すべきではありません。雇用保険や年金の記録で在籍期間は確認できるため、入社後に発覚すると経歴詐称として問題になります。短期離職がある場合は、先に理由と、そこから何を基準に会社を選ぶようになったかをセットで伝えるほうが安全です。",
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

export default function JobHistoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb
        items={[
          { name: "活用ガイド一覧", href: "/knowledge/" },
          { name: "転職回数と職歴の見られ方" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            転職回数は何回から不利？コンサルタント243人調査と採用側の本音
          </h1>

          <div className="rounded-xl overflow-hidden my-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/column-img/ts-job-history.jpg" alt="職務経歴を整理する机の上" className="w-full h-auto" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            「転職回数が多いと不利」とは言われますが、何回からどう不利なのかは、あまり具体的に語られません。
            このページでは、公表されている調査データをもとに、<strong>何回から気にされるのか</strong>、
            <strong>回数が多くても通る人は何が違うのか</strong>、そして
            <strong>同じ経歴でも印象を悪くしてしまう話し方</strong>を整理します。
          </p>
        </div>

        <h2>先に結論</h2>
        <div className="bg-navy rounded-2xl p-6 sm:p-7 mb-10">
          <ul className="space-y-3">
            <li>採用企業が転職回数を気にし始めるのは <strong>「3回」が最多で34%</strong>（コンサルタント243名調査）</li>
            <li>転職を実現したミドル人材の <strong>67%は転職回数1〜3回</strong>（1回9%・2回25%・3回33%）</li>
            <li>企業が懸念する理由の1位は <strong>「長期的なコミットメントへの不安」80%</strong>。回数そのものではなく「またすぐ辞めないか」</li>
            <li>回数が多くても通る人の評価点1位は <strong>「高い専門スキル」82%</strong>。転職先は<strong>中堅・中小企業が65%</strong></li>
            <li>年代で基準が違う。<strong>20代は3回が分かれ目／30代は一貫性／40代は回数自体をあまり見ない</strong></li>
          </ul>
        </div>

        <h2>データ：採用企業が気にし始めるのは「3回」</h2>
        <p>
          エン・ジャパンが、転職支援サービス『ミドルの転職』を利用するコンサルタント243名に行った調査
          （2024年12月18日〜25日実施）の結果です。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>設問</th>
                <th>回答</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>転職を実現したミドル人材の転職回数</td>
                <td>
                  1回 9% ／ 2回 25% ／ <strong>3回 33%</strong>
                  <br />
                  <span className="text-text-muted">合わせて「1〜3回」が67%</span>
                </td>
              </tr>
              <tr>
                <td>採用企業が何回目から転職回数を気にするか</td>
                <td>
                  <strong>「3回」が34%で最多</strong>
                </td>
              </tr>
              <tr>
                <td>企業が転職回数を懸念する理由（最多）</td>
                <td>
                  <strong>職務や組織への長期的なコミットメントに不安がある（80%）</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-muted">
          出典：エン・ジャパン「
          <a href="https://corp.en-japan.com/newsrelease/2025/40336.html" target="_blank" rel="noopener noreferrer">
            転職コンサルタント243人に聞いた「ミドル人材の転職回数と転職成功の可能性」調査
          </a>
          」（2026年10月7日確認）
        </p>

        <p>
          注目したいのは、懸念の理由が <strong>「長く働いてくれるか分からない」</strong> に集中している点です。
          回数という数字そのものが嫌われているわけではありません。
          つまり、<strong>回数が多くても「次は長く働く理由」が説明できれば、評価は変わり得る</strong>ということです。
        </p>

        <h2>年代で基準はかなり違う</h2>
        <p>
          同じ3回でも、20代の3回と40代の3回では受け取られ方がまったく違います。
          リクナビNEXTは、厚生労働省「令和2年転職者実態調査」などをもとに、年代別の見られ方を次のように整理しています。
        </p>

        <div className="space-y-4 my-8">
          {[
            {
              age: "20代",
              body: "3回以上になると定着性に懸念を持たれやすい。1〜2回は問題視されないことがほとんど。新卒3年以内の離職率は大卒33.8%・高卒37.9%で、1回目の転職自体は珍しくない。",
            },
            {
              age: "30代",
              body: "キャリアに一貫性があり、即戦力になり得ることを示せれば、多少回数が多くても問題視されにくい。ここから先は「回数」より「つながっているか」。",
            },
            {
              age: "40代",
              body: "よほど多くない限り、転職回数自体は重視されない。見られるのは専門性とマネジメント経験。",
            },
          ].map((x) => (
            <div key={x.age} className="card p-5">
              <h3 className="font-bold text-navy mb-2">{x.age}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-text-muted">
          出典：リクナビNEXT「
          <a
            href="https://next.rikunabi.com/tenshokuknowhow/archives/25529/"
            target="_blank"
            rel="noopener noreferrer"
          >
            転職回数は何回から選考に影響する？
          </a>
          」、厚生労働省「令和2年転職者実態調査」「新規学卒就職者の離職状況（令和4年3月卒業者）」（2026年10月7日確認）
        </p>

        <h2>「年齢の十の位より少なく」という目安について</h2>
        <p>
          転職の話題でよく出てくる「<strong>転職回数は年齢の十の位の数字より少ないほうがいい</strong>」
          （30代なら3回未満、40代なら4回未満）という目安があります。覚えやすく、話のとっかかりとしては便利です。
        </p>
        <div className="bg-warm-gray rounded-xl p-5 my-6">
          <p className="font-bold text-navy mb-2">ただし、この基準を載せている公的な調査は見当たりません。</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            実際のデータに近いのは、「<strong>20代は3回が分かれ目</strong>」「<strong>30代以降は回数より一貫性</strong>」という整理です。
            20代にはおおむね当てはまりますが、<strong>40代で4回までなら安心という根拠はありません</strong>。
            むしろ40代では回数そのものがあまり見られなくなるため、この目安は年齢が上がるほど実態から離れていきます。
            目安として頭に置くのは構いませんが、<strong>この数字を基準に転職を我慢したり、逆に安心したりする必要はありません</strong>。
          </p>
        </div>

        <h2>企業による「制限」は実在するのか</h2>
        <p>
          募集要項に「転職回数◯回以内」と明記する企業は、ほとんどありません。
          実態としては、<strong>書類選考の運用</strong>として、短い在籍が連続している経歴を慎重に見るという形です。
        </p>
        <p>
          一方で、同じ調査では「4回以上の転職経験者を採用したことがある」と答えた採用担当者が多数を占めるという結果もあります。
          <strong>「気にする」ことと「採らない」ことはイコールではありません。</strong>
          気にされたうえで、説明がつけば通る——というのが実務の感覚に近いと言えます。
        </p>

        <h2>同じ経歴でも印象が変わる：他責に聞こえる話し方を避ける</h2>
        <p>
          転職回数と同じか、それ以上に結果を左右するのが<strong>退職理由の話し方</strong>です。
          採用側は退職理由から、<strong>壁にぶつかったときに当事者意識を持って動ける人かどうか</strong>、
          そして<strong>どんなストレスに耐えられる人か</strong>を見ています。
        </p>
        <p>
          ここで「自分は何も悪くない」「周りがすべて悪い」という伝え方になると、
          事実がそのとおりであっても<strong>他責思考が強い人という印象</strong>につながり、マイナス評価になります。
        </p>

        <div className="grid sm:grid-cols-2 gap-5 my-8">
          <div className="card p-5 border-l-4 border-l-red-400">
            <h3 className="font-bold text-navy mb-2">他責に聞こえてしまう言い方</h3>
            <ul className="text-sm text-text-secondary space-y-2 leading-relaxed">
              <li>上司と合わなかったので辞めました</li>
              <li>評価制度がおかしかったので辞めました</li>
              <li>会社の方針がころころ変わったからです</li>
              <li>残業が多すぎて無理でした</li>
            </ul>
            <p className="text-xs text-text-muted mt-3">
              事実かもしれませんが、「で、あなたは何をしたのか」が無いため、次の職場でも同じことを言うのでは、と読まれます。
            </p>
          </div>
          <div className="card p-5 border-l-4 border-l-teal">
            <h3 className="font-bold text-navy mb-2">事実を変えずに伝える順番</h3>
            <ol className="text-sm text-text-secondary space-y-2 leading-relaxed list-decimal pl-4">
              <li>起きていた事実（評価の仕組み、体制、業務量）</li>
              <li>自分が取った行動（相談した、提案した、改善を試した）</li>
              <li>それでも解決しなかったこと</li>
              <li>だから次はこの条件を基準に選びたい</li>
            </ol>
            <p className="text-xs text-text-muted mt-3">
              事実は同じでも、②と③があるだけで「環境のせいにする人」から「動いたうえで判断した人」に変わります。
            </p>
          </div>
        </div>
        <p className="text-sm text-text-muted">
          参考：リクナビNEXT「
          <a
            href="https://next.rikunabi.com/tenshokuknowhow/mensetsu/interview/006/"
            target="_blank"
            rel="noopener noreferrer"
          >
            面接で退職理由・転職理由を聞かれたらどう答える？
          </a>
          」、マイナビ「
          <a
            href="https://saponet.mynavi.jp/column/detail/ty_saiyo_t03_how-to-spot-a-lie_210611.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            退職理由から求職者の嘘と本音を見抜く
          </a>
          」（採用担当者向け記事・2026年10月7日確認）
        </p>

        <h2>回数が多くても通る人は何が違うのか</h2>
        <p>
          前出のエン・ジャパンの調査では、<strong>転職回数が多くても転職を実現した人</strong>の特徴が集計されています。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>項目</th>
                <th>最も多かった回答</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>評価された点</td>
                <td>
                  <strong>高い専門スキルを有している（82%）</strong>
                </td>
              </tr>
              <tr>
                <td>ポジション</td>
                <td>課長クラス（43%）</td>
              </tr>
              <tr>
                <td>職種</td>
                <td>技術系（IT・Web・通信系）（25%）</td>
              </tr>
              <tr>
                <td>転職先の企業タイプ</td>
                <td>
                  <strong>中堅・中小企業（65%）</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          読み方としては、<strong>「専門性がある人が、中堅・中小企業に、納得性のある理由で移っている」</strong>という形です。
          大手の新卒的な評価軸では回数が効いてしまう一方、
          <strong>即戦力を求める規模の会社では、回数より「何ができるか」が先に見られている</strong>と考えられます。
        </p>
        <p>
          裏を返すと、回数が多い方が大手だけを受け続けるのは、確率の面で不利になりやすいということでもあります。
          応募先の規模とポジションを見直すほうが、職務経歴書を何度も書き直すより効くことがあります。
        </p>

        <FelmatCta
          slug="agent-navi"
          heading="転職回数が多いときこそ、求人の選び方で差がつきます"
          note="専任のアドバイザーに経歴を見てもらい、通る可能性のある求人に絞って応募するのが近道です。"
        />

        <h2>やっておくと効く3つの準備</h2>
        <div className="space-y-5 my-8">
          {[
            {
              n: 1,
              t: "在籍期間を正確に書き出す",
              d: "年月まで正確に。短い期間があるなら、そこを飛ばさず書いたうえで、理由を1行添えます。隠した経歴は雇用保険や年金の記録で分かるため、後から発覚するほうがダメージが大きくなります。",
            },
            {
              n: 2,
              t: "複数の経歴に共通する「できること」を1つ決める",
              d: "業界も職種もバラバラに見えても、たいてい共通の動詞があります（売る・作る・直す・まとめる・教える）。その1つを軸にすると、経歴が線としてつながり、一貫性の説明ができます。",
            },
            {
              n: 3,
              t: "退職理由を「行動」まで含めて書く",
              d: "前章の4ステップ（事実→自分の行動→それでも解決しなかった→だから次はこう選ぶ）を、転職1回ごとに1〜2行で用意します。面接で初めて考えると、どうしても他責寄りの言い方になります。",
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

        <p>
          経歴の整理そのものは <Link href="/knowledge/resume/">職務経歴書の書き方</Link> に、
          エージェントへの伝え方は <Link href="/knowledge/agent-briefing/">エージェントに何をどう伝えるか</Link> にまとめています。
          業界特化の相談先を探している場合は{" "}
          <FelmatTextLink slug="agent-navi" text="転職エージェントナビ" /> のような紹介型のサービスも選択肢になります。
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
          <Link href="/knowledge/agent-briefing/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">エージェントに何をどう伝えるか</h3>
            <p className="text-sm text-text-secondary">仕事内容の具体化と条件の優先順位の付け方</p>
          </Link>
          <Link href="/knowledge/resume/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">職務経歴書の書き方</h3>
            <p className="text-sm text-text-secondary">職務要約の例文と書類通過のコツ</p>
          </Link>
          <Link href="/knowledge/interview-prep/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">エージェントとの面談対策</h3>
            <p className="text-sm text-text-secondary">準備・服装・当日の流れ</p>
          </Link>
          <Link href="/knowledge/how-to-choose/" className="card-hover p-5 block">
            <h3 className="font-bold text-navy mb-1">転職エージェントの選び方</h3>
            <p className="text-sm text-text-secondary">失敗しない7つのポイント</p>
          </Link>
        </div>
      </article>
    </>
  );
}
