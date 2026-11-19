import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/black-kigyo-tokucho/" },
  title: "ブラック企業の特徴とは？厚生労働省の説明と令和7年度の監督指導結果で確認する見分け方",
  description:
    "ブラック企業の特徴を、厚生労働省の公式Q&Aと令和7年度の監督指導結果で確認しました。厚生労働省は定義を定めていませんが、極端な長時間労働やノルマ、賃金不払残業やパワハラの横行などを一般的な特徴として挙げています。労働基準法の上限と相談先も整理しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ブラック企業の特徴とは？厚生労働省の説明と監督指導結果で確認",
    description: "厚生労働省の説明と監督指導の結果から、ブラック企業の特徴と確認方法を整理しています。",
  },
};

const CHECKED = "2026年11月20日";

// 厚生労働省「長時間労働が疑われる事業場に対する令和7年度の監督指導結果」（令和8年9月15日公表）
const R7 = [
  { k: "監督指導を実施した事業場", v: "29,150事業場", p: "—" },
  { k: "違法な時間外労働があった事業場", v: "11,228事業場", p: "38.5%" },
  { k: "賃金不払残業があった事業場", v: "1,901事業場", p: "6.5%" },
  { k: "過重労働による健康障害防止措置が未実施の事業場", v: "5,919事業場", p: "20.3%" },
];

// 同 違法な時間外労働があった11,228事業場のうち、時間外・休日労働が最も長い労働者の実績
const R7hours = [
  { k: "月80時間超", v: "4,991事業場", p: "44.5%" },
  { k: "うち月100時間超", v: "2,842事業場", p: "25.3%" },
  { k: "うち月150時間超", v: "554事業場", p: "4.9%" },
  { k: "うち月200時間超", v: "111事業場", p: "1.0%" },
];

const faq = [
  {
    q: "ブラック企業に法律上の定義はありますか？",
    a: "ありません。厚生労働省は公式Q&Aで「『ブラック企業』について定義していません」としたうえで、一般的な特徴として、①極端な長時間労働やノルマを課す、②賃金不払残業やパワーハラスメントが横行するなど企業全体のコンプライアンス意識が低い、③このような状況下で労働者に対し過度の選別を行う、などと言われていると説明しています。",
  },
  {
    q: "残業は月何時間からが違法ですか？",
    a: "労働基準法では、法定労働時間（1日8時間・1週40時間）を超えて働かせるには36協定の締結と届出が必要です。36協定を結んでも、時間外労働の上限は原則として月45時間・年360時間です。臨時的な特別の事情がある場合でも、時間外・休日労働は月100時間未満、2〜6か月平均80時間以内、時間外労働は年720時間以内でなければなりません（研究開発業務など一部の適用除外があります）。",
  },
  {
    q: "入社前にブラック企業かどうかを見分ける方法はありますか？",
    a: "確実に見分ける方法はありませんが、求人票の労働条件（固定残業代の時間数、休日数など）を確認する、新卒向け募集では青少年雇用情報（離職者数や平均所定外労働時間など）の提供を求める、厚生労働省のユースエール認定の有無を確認する、といった方法があります。転職エージェントを通じて、実際の残業時間や離職の状況を確認する方法もあります。",
  },
  {
    q: "今の会社がブラック企業かもしれない場合、どこに相談できますか？",
    a: "全国の労働局・労働基準監督署内などに設置された総合労働相談コーナー（無料・予約不要）や、厚生労働省の委託事業である労働条件相談「ほっとライン」（0120-811-610・平日17時〜22時、土日祝9時〜21時）に相談できます。法令違反の疑いがある場合、総合労働相談コーナーから労働基準監督署などに取り次がれます。",
  },
  {
    q: "退職を申し出たのに辞めさせてもらえない場合はどうなりますか？",
    a: "期間の定めのない雇用契約では、民法第627条により、労働者はいつでも解約の申入れができ、申入れの日から2週間を経過すると雇用は終了します。詳しくは当サイトの「会社の辞め方」のページで解説しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const sources = [
  { label: "厚生労働省 確かめよう労働条件 Q&A「『ブラック企業』ってどんな会社なの？」", url: "https://www.check-roudou.mhlw.go.jp/qa/roudousya/zenpan/q4.html" },
  { label: "厚生労働省「長時間労働が疑われる事業場に対する令和7年度の監督指導結果を公表します」（令和8年9月15日）", url: "https://www.mhlw.go.jp/stf/newpage_76158.html" },
  { label: "厚生労働省「平成25年 労働基準監督年報（第66回）」（若者の「使い捨て」が疑われる企業等への重点監督）", url: "https://www.mhlw.go.jp/bunya/roudoukijun/kantoku01/dl/25.pdf" },
  { label: "厚生労働省「令和7年度個別労働紛争解決制度の施行状況」（令和8年7月7日）", url: "https://www.mhlw.go.jp/stf/houdou/newpage_00235.html" },
  { label: "e-Gov法令検索 労働基準法（第32条・第36条・第37条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "e-Gov法令検索 青少年の雇用の促進等に関する法律（第13条・第15条）", url: "https://laws.e-gov.go.jp/law/345AC0000000098" },
  { label: "e-Gov法令検索 職業安定法（第5条の6）", url: "https://laws.e-gov.go.jp/law/322AC0000000141" },
  { label: "厚生労働省「ユースエール認定制度」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000100266.html" },
  { label: "厚生労働省「総合労働相談コーナーのご案内」", url: "https://www.mhlw.go.jp/general/seido/chihou/kaiketu/soudan.html" },
  { label: "厚生労働省 確かめよう労働条件「労働条件相談ほっとライン」", url: "https://www.check-roudou.mhlw.go.jp/lp/hotline/" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "ブラック企業の特徴" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ブラック企業の特徴とは？厚生労働省の説明と令和7年度の監督指導結果で確認する見分け方
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "定義なし", l: "厚生労働省は「ブラック企業」を定義していない" },
              { v: "38.5%", l: "長時間労働が疑われる事業場のうち違法な時間外労働（令和7年度）" },
              { v: "月45時間", l: "36協定を結んだ場合の時間外労働の原則上限" },
              { v: "55,614件", l: "「いじめ・嫌がらせ」の労働相談（令和7年度）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            「ブラック企業」に法律上の定義はありません。厚生労働省は公式Q&Aで、一般的な特徴として
            <strong>①極端な長時間労働やノルマを課す、②賃金不払残業やパワーハラスメントが横行するなど企業全体のコンプライアンス意識が低い、③このような状況下で労働者に対し過度の選別を行う</strong>、
            などと言われていると説明しています。本ページでは、この3つの特徴を、労働基準法の上限と厚生労働省の監督指導の結果に照らして確認する方法を整理します。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省の公表資料・e-Gov法令検索（{CHECKED}に当サイトで確認）。</p>
        </div>

        <h2>厚生労働省が挙げる一般的な特徴</h2>
        <div className="space-y-4 mb-4">
          {[
            { t: "① 極端な長時間労働やノルマを課す", d: "労働基準法の上限（下の表）を超える時間外労働や、達成が難しいノルマが常態化している状態です。36協定の上限を超えていれば、それ自体が法令違反になります。" },
            { t: "② 賃金不払残業やパワーハラスメントが横行する", d: "残業代が支払われない「サービス残業」や、職場のパワーハラスメントが放置されている状態です。労働基準法第37条は時間外労働に割増賃金の支払いを義務付けており、労働施策総合推進法は事業主にパワーハラスメントの防止措置を義務付けています。" },
            { t: "③ 過度の選別を行う", d: "①②のような状況のもとで、労働者をふるいにかけるように扱う状態です。厚生労働省は、このような企業に就職した場合、新入社員が単独で会社と交渉するのは現実的には非常に難しいとして、外部の関係機関や労働組合への相談も有効だとしています。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※厚生労働省 確かめよう労働条件 Q&A「『ブラック企業』ってどんな会社なの？」の説明を当サイトで整理。定義がないため、特定の企業を「ブラック企業」と判断する公的な基準はありません。
        </p>

        <h2>長時間労働が疑われる事業場の監督指導結果（令和7年度）</h2>
        <p>
          厚生労働省は毎年、時間外・休日労働が月80時間を超えていると考えられる事業場や、過労死等の労災請求があった事業場などを対象に監督指導を行い、結果を公表しています。令和7年度（令和7年4月〜令和8年3月）の結果は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-right">事業場数</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {R7.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.v}</td>
                  <td className="p-3 text-right">{x.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">時間外・休日労働が最も長い労働者の実績</th>
                <th className="p-3 text-right">事業場数</th>
                <th className="p-3 text-right rounded-tr-lg">違法な時間外労働があった事業場に占める割合</th>
              </tr>
            </thead>
            <tbody>
              {R7hours.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right">{x.v}</td>
                  <td className="p-3 text-right">{x.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「長時間労働が疑われる事業場に対する令和7年度の監督指導結果を公表します」（令和8年9月15日）。対象は長時間労働が疑われる事業場で、全国の事業場の平均的な状況を示すものではありません。
        </p>
        <p className="mb-10">
          監督指導を受けた事業場の約4割（38.5%）で違法な時間外労働が見つかり、そのうち4分の1（25.3%）では月100時間を超えて働いていた労働者がいました。
          なお、この調査の前身として、厚生労働省は平成25年9月に「若者の『使い捨て』が疑われる企業等」への重点監督を行い、5,111事業場のうち82.0%にあたる4,189事業場で労働基準関係法令の違反を確認しています（平成25年 労働基準監督年報）。
        </p>

        <h2>労働基準法で決まっている上限と、確認したいポイント</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-left rounded-tr-lg">法律の定め</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "法定労働時間", v: "1日8時間・1週40時間（労働基準法第32条）" },
                { k: "時間外労働の原則上限", v: "36協定を結んだ場合で月45時間・年360時間（第36条第4項）" },
                { k: "特別条項を結んだ場合", v: "時間外労働は年720時間以内、月45時間を超えられるのは年6か月まで（第36条第5項）" },
                { k: "協定があっても超えられない上限", v: "時間外・休日労働が月100時間未満、2〜6か月平均で80時間以内（第36条第6項）" },
                { k: "割増賃金", v: "時間外労働は政令で定める率以上、月60時間を超える部分は5割以上（第37条第1項）。深夜（午後10時〜午前5時）は2割5分以上（第37条第4項）" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy whitespace-nowrap">{x.k}</td>
                  <td className="p-3">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※e-Gov法令検索の労働基準法（現行）を当サイトで要約。新技術・新商品等の研究開発業務など、上限規制の適用が異なる業務があります。
        </p>

        <h2>入社前に確認できる情報</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "新卒・既卒向けの募集なら「青少年雇用情報」を求める", d: "若者雇用促進法第13条により、学校卒業見込者等を対象とした募集では、応募者や応募しようとする人から求められた場合、企業は募集・採用の状況や職場への定着の促進に関する取組の実施状況などの青少年雇用情報を提供しなければなりません。" },
            { t: "ユースエール認定の有無を見る", d: "厚生労働省のユースエール認定は、常時雇用する労働者が300人以下の企業が対象で、直近3事業年度の新卒者等の正社員の離職率が20%以下、前事業年度の正社員の月平均所定外労働時間が20時間以下などの基準を満たす必要があります。" },
            { t: "法令違反の企業の求人は受理されないことがある", d: "職業安定法第5条の6により、ハローワークや職業紹介事業者は、一定の労働関係法令に違反して処分・公表などを受けた企業からの求人の申込みを受理しないことができます。" },
            { t: "固定残業代と休日数を求人票で確かめる", d: "固定残業代が何時間分の残業を含むか、年間休日が何日かは、長時間労働の目安になります。年間休日の考え方は当サイトの「年間休日120日」「年間休日105日」のページでも解説しています。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>

        <h2>相談先と相談件数</h2>
        <p>
          厚生労働省「令和7年度個別労働紛争解決制度の施行状況」によると、全国の総合労働相談コーナーに寄せられた相談は119万8,010件でした。民事上の個別労働紛争の相談では「いじめ・嫌がらせ」が55,614件で14年連続の最多です。
          なお、労働施策総合推進法にもとづくパワーハラスメントの相談は別に計上されており、この件数には含まれていません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">相談先</th>
                <th className="p-3 text-left rounded-tr-lg">内容</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-bold text-navy">総合労働相談コーナー</td>
                <td className="p-3">都道府県労働局・労働基準監督署内などに設置。予約不要・無料で、面談または電話で相談できます（土日祝・年末年始は閉庁）。法律違反の疑いがある場合は労働基準監督署などに取り次がれます。</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-bold text-navy">労働条件相談「ほっとライン」</td>
                <td className="p-3">0120-811-610。月〜金17時〜22時、土日祝9時〜21時（12月29日〜1月3日を除く）。厚生労働省の委託事業で、匿名でも相談できます。事業場への指導はできません。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">※厚生労働省「総合労働相談コーナーのご案内」・確かめよう労働条件「労働条件相談ほっとライン」（{CHECKED}確認）。</p>

        <h2>転職先選びで同じ状況を繰り返さないために</h2>
        <p className="mb-10">
          転職エージェントは、求人企業の残業時間や離職の状況を、求人票よりも詳しく把握している場合があります。応募前に「直近の平均残業時間」「中途入社者の定着状況」を担当者に確認すると、入社後のギャップを減らせます。
          エージェントの選び方は<Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link>で解説しています。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {f.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/knowledge/kaisha-yamekata/" className="text-teal font-bold hover:underline">会社の辞め方（民法・労働基準法と退職後の手続き）</Link></li>
          <li><Link href="/knowledge/zangyo-average/" className="text-teal font-bold hover:underline">残業時間の平均</Link></li>
          <li><Link href="/knowledge/annual-holidays-120/" className="text-teal font-bold hover:underline">年間休日120日</Link></li>
          <li><Link href="/knowledge/how-to-choose/" className="text-teal font-bold hover:underline">転職エージェントの選び方</Link></li>
        </ul>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
          ))}
        </ul>
      </article>
    </>
  );
}
