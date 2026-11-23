import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/shigoto-muitenai/" },
  title: "仕事が向いてないと感じて辞めたいときに確認すること｜初職を「仕事が自分に合わない」で辞めた人は21.7%【厚生労働省の統計】",
  description:
    "仕事が向いていないと感じて辞めたいときに確認したい統計と制度を、厚生労働省の調査で整理しました。初めての勤務先を辞めた若年者の21.7%が「仕事が自分に合わない」を理由に挙げています。年齢別の離職理由、新卒3年以内の離職率、無料の適職診断とキャリア相談、失業給付の給付制限も掲載しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "仕事が向いてないと感じて辞めたいときに確認すること｜「仕事が自分に合わない」で初職を辞めた人は21.7%",
    description: "若年者雇用実態調査・雇用動向調査・新規学卒就職者の離職状況と、公的な適職診断・キャリア相談を整理しています。",
  },
};

const CHECKED = "2026年11月23日";
const JAKUNEN_URL = "https://www.mhlw.go.jp/toukei/list/dl/4-21c-jyakunenkoyou-r05_07.pdf";
const DOUKOU_URL = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/dl/kekka_gaiyo-03.pdf";
const RISHOKU_URL = "https://www.mhlw.go.jp/stf/houdou/0000177553_00011.html";
const RISHOKU_TABLE = "https://www.mhlw.go.jp/content/11800000/001318985.pdf";
const JOBTAG_LEAFLET = "https://www.mhlw.go.jp/content/11600000/001575015.pdf";
const CARIGAKU_URL = "https://carigaku.mhlw.go.jp/icc/";
const KYUFU_URL = "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000160564_00045.html";

// 令和5年 若年者雇用実態調査 表17（初めて勤務した会社をやめた主な理由・複数回答3つまで・総数）%
const firstJob = [
  { k: "労働時間・休日・休暇の条件がよくなかった", v: 28.5 },
  { k: "人間関係がよくなかった", v: 26.4 },
  { k: "賃金の条件がよくなかった", v: 21.8 },
  { k: "仕事が自分に合わない", v: 21.7, hl: true },
];

// 令和7年 雇用動向調査 表5（転職入職者が前職を辞めた理由別割合）%
// a=仕事の内容に興味を持てなかった b=能力・個性・資格を生かせなかった c=職場の人間関係が好ましくなかった d=労働時間、休日等の労働条件が悪かった e=給料等収入が少なかった
const doukou = [
  { k: "男性・計", a: 5.2, b: 5.2, c: 8.9, d: 8.5, e: 9.9 },
  { k: "男性 20〜24歳", a: 6.3, b: 3.5, c: 10.3, d: 12.4, e: 13.8 },
  { k: "男性 25〜29歳", a: 6.5, b: 5.6, c: 10.7, d: 10.5, e: 13.1 },
  { k: "男性 30〜34歳", a: 9.0, b: 5.2, c: 5.9, d: 13.0, e: 13.4 },
  { k: "男性 40〜44歳", a: 7.9, b: 11.0, c: 7.3, d: 9.6, e: 9.5 },
  { k: "女性・計", a: 4.6, b: 3.9, c: 11.5, d: 12.9, e: 8.6 },
  { k: "女性 20〜24歳", a: 3.5, b: 6.4, c: 10.3, d: 18.8, e: 5.3 },
  { k: "女性 25〜29歳", a: 4.1, b: 5.2, c: 10.5, d: 14.1, e: 13.4 },
  { k: "女性 30〜34歳", a: 2.7, b: 2.6, c: 10.6, d: 10.1, e: 12.2 },
];

const faqData = [
  {
    q: "仕事が向いていないという理由で辞める人は多いですか？",
    a: "厚生労働省「令和5年 若年者雇用実態調査」では、学校を卒業して初めて勤務した会社を辞めた若年者の21.7%が、主な理由（3つまで回答）に「仕事が自分に合わない」を挙げています。労働時間・休日の条件（28.5%）、人間関係（26.4%）、賃金の条件（21.8%）に次ぐ4番目の理由です。",
  },
  {
    q: "入社して何年以内に辞める人が多いですか？",
    a: "厚生労働省「新規学卒就職者の離職状況」（令和5年3月卒業者・2026年10月23日公表）では、就職後3年以内の離職率は大学卒が31.2%、高校卒が36.9%です。1年目の離職率は大学卒11.0%、高校卒17.4%で、1年目が最も高くなっています。",
  },
  {
    q: "自分に向いている仕事を無料で調べる方法はありますか？",
    a: "厚生労働省の職業情報提供サイト（job tag）には「自己診断ツール」があり、職業興味検査・仕事価値観検査・職業適性テスト（Gテスト）の結果から、自分に合う職業を検索できます。また、全国47か所のキャリア形成・リスキリング支援センターとハローワークの相談コーナーでは、在職者・求職者がキャリアコンサルティングを無料で受けられます（1回60分・対面またはオンライン）。",
  },
  {
    q: "自己都合で辞めると、失業給付はいつから受け取れますか？",
    a: "厚生労働省の案内では、正当な理由のない自己都合退職の場合、7日間の待期期間の後に給付制限があり、退職日が令和7年4月1日以降であれば原則1か月です。ただし、過去5年間に2回以上正当な理由のない自己都合退職で受給資格決定を受けている場合は3か月になります。",
  },
  {
    q: "向いていないと感じたら、すぐに辞めるべきですか？",
    a: "当サイトでは、辞めるかどうかを一律に判断することはできないと考えています。統計上も、辞めた理由は仕事内容だけでなく、労働時間・人間関係・賃金など複数にまたがっています。「向いていない」の中身が仕事内容なのか職場環境なのかを切り分け、異動や働き方の変更で解決できるかを確かめたうえで判断する方法をおすすめします。",
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

const sources = [
  { label: "厚生労働省「令和5年 若年者雇用実態調査」表17 初めて勤務した会社をやめた主な理由", url: JAKUNEN_URL },
  { label: "厚生労働省「令和7年 雇用動向調査結果の概要」3 転職入職者の状況（表5）", url: DOUKOU_URL },
  { label: "厚生労働省「新規学卒就職者の離職状況（令和5年3月卒業者）を公表します」（2026年10月23日）", url: RISHOKU_URL },
  { label: "厚生労働省 新規学校卒業就職者の在職期間別離職状況", url: RISHOKU_TABLE },
  { label: "厚生労働省 職業情報提供サイト（job tag）リーフレット（令和7年10月）", url: JOBTAG_LEAFLET },
  { label: "厚生労働省委託事業 キャリア形成・リスキリング推進事業（個人の方）", url: CARIGAKU_URL },
  { label: "厚生労働省 雇用保険の基本手当（失業給付）を受給される皆さまへ（給付制限）", url: KYUFU_URL },
];

const thc = "p-3 text-right";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "仕事が向いてないと感じて辞めたいとき" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            仕事が向いてないと感じて辞めたいときに確認すること｜初職を「仕事が自分に合わない」で辞めた人は21.7%
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "21.7%", l: "初めての勤務先を「仕事が自分に合わない」で辞めた若年者" },
              { v: "31.2%", l: "大学卒の就職後3年以内の離職率（令和5年3月卒）" },
              { v: "無料", l: "公的なキャリアコンサルティング（1回60分）" },
              { v: "原則1か月", l: "自己都合退職の失業給付の給付制限" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            仕事が向いていないと感じて辞める人は、珍しくありません。厚生労働省の調査では、学校を卒業して初めて勤務した会社を辞めた若年者の<strong>21.7%が「仕事が自分に合わない」</strong>を理由に挙げています。
            一方で、辞めた理由としては労働時間・人間関係・賃金を挙げる人のほうが多く、「向いていない」と感じる原因が仕事内容そのものにあるのか、職場環境にあるのかを切り分けることが判断の出発点になります。
          </p>
          <p className="text-xs text-text-muted mt-3">数値は{CHECKED}に厚生労働省の公表資料で当サイトが確認した値です。</p>
        </div>

        <h2>初めての勤務先を辞めた理由（若年者雇用実態調査）</h2>
        <p>厚生労働省「令和5年 若年者雇用実態調査」で、学校を卒業して初めて勤務した会社を辞めた若年者（15〜34歳）が挙げた主な理由（3つまで回答）の上位4項目は次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">辞めた主な理由</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {firstJob.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.hl ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className={thc}>{x.v}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">出典：厚生労働省「令和5年 若年者雇用実態調査」表17。複数回答のため合計は100%になりません。</p>
        <p className="mb-10">
          「仕事が自分に合わない」と「賃金の条件がよくなかった」はほぼ同じ割合で、労働時間や人間関係を挙げた人のほうが多い結果です。仕事が向いていないと感じている場合でも、実際には長時間労働や職場の人間関係が負担の原因になっていないかを確かめておくと、次の職場選びで同じ状況を避けやすくなります。
        </p>

        <h2>転職した人が前職を辞めた理由（年齢・男女別）</h2>
        <p>
          厚生労働省「令和7年 雇用動向調査」では、2025年の1年間に転職した人が前職を辞めた理由の割合が公表されています。「向いていない」に近い「仕事の内容に興味を持てなかった」「能力・個性・資格を生かせなかった」と、ほかの主な理由を年齢別に並べると次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className={thc}>仕事の内容に興味を持てなかった</th>
                <th className={thc}>能力・個性・資格を生かせなかった</th>
                <th className={thc}>職場の人間関係</th>
                <th className={thc}>労働時間・休日等の条件</th>
                <th className="p-3 text-right rounded-tr-lg">給料等収入が少なかった</th>
              </tr>
            </thead>
            <tbody>
              {doukou.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k.includes("計") ? "bg-gray-50 font-bold" : ""}`}>
                  <td className="p-3 whitespace-nowrap">{x.k}</td>
                  <td className={thc}>{x.a}%</td>
                  <td className={thc}>{x.b}%</td>
                  <td className={thc}>{x.c}%</td>
                  <td className={thc}>{x.d}%</td>
                  <td className={thc}>{x.e}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          出典：厚生労働省「令和7年 雇用動向調査結果の概要」表5。対象は前職が雇用者だった転職入職者で、理由は1つのみ回答です。表にない理由（定年・契約期間の満了、その他の個人的理由など）があるため、合計は100%になりません。
        </p>
        <p className="mb-10">
          男性では30〜34歳で「仕事の内容に興味を持てなかった」が9.0%、40〜44歳で「能力・個性・資格を生かせなかった」が11.0%と、ほかの年齢より高くなっています。女性はどの年齢でも労働時間・休日等の条件や人間関係を挙げる割合のほうが高い結果です。
          前年と比べて上昇幅が最も大きかったのは、女性の「仕事の内容に興味を持てなかった」（1.0ポイント上昇）でした。
        </p>

        <h2>新卒で就職した人の離職率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">学歴（令和5年3月卒業）</th>
                <th className={thc}>1年目</th>
                <th className={thc}>2年目</th>
                <th className={thc}>3年目</th>
                <th className="p-3 text-right rounded-tr-lg">3年以内の合計</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3">大学卒</td><td className={thc}>11.0%</td><td className={thc}>10.9%</td><td className={thc}>9.3%</td><td className={thc}>31.2%</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3">高校卒</td><td className={thc}>17.4%</td><td className={thc}>11.0%</td><td className={thc}>8.5%</td><td className={thc}>36.9%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">出典：厚生労働省「新規学卒就職者の離職状況（令和5年3月卒業者）」（2026年10月23日公表）・在職期間別離職状況の表。</p>
        <p className="mb-10">
          大学卒の約3人に1人が就職後3年以内に離職しており、1年目の離職率が最も高くなっています。入社後まもなく「向いていない」と感じること自体は、多くの人が経験している状況といえます。
          新卒3年以内の転職については<Link href="/knowledge/dai2-shinsotsu-itsumade/" className="text-teal underline">第二新卒はいつまでか</Link>のページで扱っています。
        </p>

        <h2>「向いていない」の原因を切り分ける</h2>
        <p>上の調査の理由の分類をもとに、当サイトでは次の3つに分けて確認する方法をおすすめしています。原因によって、取るべき行動が異なるためです。</p>
        <div className="space-y-4 mb-10">
          {[
            { t: "仕事内容が合わない（興味を持てない・能力を生かせない）", d: "異動や担当替えで解決できるかを先に確認します。職種そのものを変えたい場合は、下の自己診断ツールなどで向いている職業の候補を出してから転職先を探すと、同じ理由で辞めることを避けやすくなります。" },
            { t: "職場環境が合わない（人間関係・労働時間・休日）", d: "同じ職種でも、会社が変われば解決する可能性があります。転職する場合は、求人票や面接で残業時間・休日数・配属先の体制を確認します。休む制度は「仕事を休みたいときに使える制度」のページで整理しています。" },
            { t: "収入が見合わない", d: "職種・業界・企業規模による賃金の差を確認します。同じ仕事内容でも、業界や企業規模を変えることで収入が上がる場合があります。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>無料で使える公的な適職診断・キャリア相談</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "職業情報提供サイト（job tag）の自己診断ツール", d: "厚生労働省のリーフレットでは、「「職業興味検査」「仕事価値観検査」「職業適性テスト（G テスト）」から、仕事に対する興味や価値観、能力面の特徴を検査し、検査結果から自分に合う職業を検索することができます」と案内されています。これまでの職歴からスキルや知識を可視化する「しごと能力プロフィール」もあります。" },
            { t: "キャリア形成・リスキリング支援センターのキャリアコンサルティング", d: "厚生労働省の委託事業で、在職者・求職者は無料で受けられます。全国47か所のキャリア形成・リスキリング支援センターとハローワークの相談コーナーで実施され、所要時間は60分、対面またはオンラインです。なお、この事業では職業紹介は行っていません。学生は対象外です。" },
          ].map((x) => (
            <div key={x.t} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-1 text-sm">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          求人の紹介まで受けたい場合は、ハローワークや民間の転職エージェントを利用します。転職エージェントの選び方は<Link href="/knowledge/how-to-choose/" className="text-teal underline">転職エージェントの選び方</Link>のページで扱っています。
        </p>

        <h2>辞めると決めた場合に確認すること</h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 text-sm">
          <li>
            <strong>失業給付の給付制限</strong>：正当な理由のない自己都合退職では、7日間の待期期間の後、退職日が令和7年4月1日以降であれば原則1か月の給付制限があります（過去5年間に2回以上の場合は3か月）。令和7年4月以降に教育訓練等を受けた場合は、給付制限が解除されます。
          </li>
          <li>
            <strong>退職の申し出と手続き</strong>：期間の定めのない雇用では、民法の定めにより申し出から2週間で退職できます。手続きの流れは<Link href="/knowledge/kaisha-yamekata/" className="text-teal underline">会社の辞め方</Link>のページで確認できます。
          </li>
          <li>
            <strong>在職中に次の仕事を探すかどうか</strong>：収入が途切れないよう、在職中に転職活動を始める方法もあります。<Link href="/knowledge/when-to-start/" className="text-teal underline">転職活動を始める時期</Link>のページも参考にしてください。
          </li>
        </ul>

        <h2>よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <p className="mb-10">
          初めての勤務先を辞めた若年者の21.7%が「仕事が自分に合わない」を理由に挙げており、大学卒の31.2%が就職後3年以内に離職しています。仕事が向いていないと感じたときは、原因が仕事内容・職場環境・収入のどれにあるかを切り分け、公的な自己診断ツールや無料のキャリアコンサルティングも活用したうえで、辞めるかどうかを判断する方法をおすすめします。
        </p>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
