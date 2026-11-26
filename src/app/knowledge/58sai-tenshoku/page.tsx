import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/58sai-tenshoku/" },
  title: "58歳の転職で確認すること｜60歳定年の企業62.2%・55〜59歳の転職で賃金が減った人36.6%【厚生労働省の統計】",
  description:
    "58歳で転職を考えるときに確認したい点を、厚生労働省の統計と法令でまとめました。60歳定年の企業は62.2%、65歳以上定年の企業は34.9%です。55〜59歳の転職入職者は賃金が増加した人27.4%・減少した人36.6%で、定年を上限とする求人の年齢制限は法令で認められています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "58歳の転職で確認すること【厚生労働省の統計】",
    description: "定年制の状況、55〜59歳の転職後の賃金、求人の年齢制限のルールを、厚生労働省の統計と法令で確認しています。",
  },
};

const CHECKED = "2026年11月27日";
const DOUKOU = "https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/25-2/dl/kekka_gaiyo-03.pdf";
const KOUREI = "https://www.mhlw.go.jp/content/11700000/001609988.pdf";
const LAW_KOUREI = "https://laws.e-gov.go.jp/law/346AC0000000068";
const LAW_SESAKU = "https://laws.e-gov.go.jp/law/341AC0000000132";
const RULE_SESAKU = "https://laws.e-gov.go.jp/law/341M50002000023";

// 厚生労働省「令和7年 高年齢者雇用状況等報告」集計結果（令和7年6月1日現在・常時雇用21人以上の237,739社）
const TEINEN = [
  { k: "定年制の廃止", n: 9367, r: 3.9 },
  { k: "60歳", n: 147864, r: 62.2 },
  { k: "61〜64歳", n: 6923, r: 2.9 },
  { k: "65歳", n: 64765, r: 27.2 },
  { k: "66〜69歳", n: 2783, r: 1.2 },
  { k: "70歳以上", n: 6037, r: 2.5 },
];

// 厚生労働省「令和6年 雇用動向調査結果の概況」表6 転職入職者の賃金変動状況別割合（%）
const WAGE = [
  { k: "45〜49歳", up: 46.4, up10: 29.1, same: 26.9, down: 23.8, down10: 16.5 },
  { k: "50〜54歳", up: 39.0, up10: 26.3, same: 31.7, down: 28.2, down10: 21.0 },
  { k: "55〜59歳", up: 27.4, up10: 17.3, same: 33.6, down: 36.6, down10: 30.7 },
  { k: "60〜64歳", up: 13.6, up10: 7.9, same: 24.2, down: 60.9, down10: 53.9 },
  { k: "全年齢", up: 40.5, up10: 29.4, same: 28.4, down: 29.4, down10: 21.7 },
];

// 同 表5 転職入職者が前職を辞めた理由別割合（55〜59歳・%）の主な項目
const REASON = [
  { k: "その他の理由（出向等を含む）", m: 29.0, f: 12.4 },
  { k: "その他の個人的理由", m: 17.3, f: 27.3 },
  { k: "会社都合", m: 10.9, f: 7.6 },
  { k: "給料等収入が少なかった", m: 9.0, f: 6.7 },
  { k: "職場の人間関係が好ましくなかった", m: 5.9, f: 13.0 },
  { k: "労働時間、休日等の労働条件が悪かった", m: 5.9, f: 9.2 },
  { k: "定年・契約期間の満了", m: 4.8, f: 10.2 },
];

const faq = [
  {
    q: "58歳で転職すると給料は下がりますか？",
    a: "厚生労働省「令和6年 雇用動向調査」では、55〜59歳の転職入職者のうち、前職より賃金が「増加」した人は27.4%、「変わらない」は33.6%、「減少」は36.6%です。全年齢（増加40.5%・減少29.4%）と異なり、減少した人の割合が増加した人を9.2ポイント上回ります。1割以上減った人は30.7%です。",
  },
  {
    q: "58歳を求人の年齢制限で断るのは違法ではありませんか？",
    a: "労働施策総合推進法9条により、事業主は募集・採用で原則として年齢にかかわりなく均等な機会を与える必要があります。ただし、同法施行規則1条の3第1項第1号により、定年の年齢を下回ることを条件とする募集（期間の定めのない労働契約の場合）は例外として認められています。60歳定年の企業が正社員を「60歳未満」で募集することは、この例外にあたります。",
  },
  {
    q: "58歳で転職しても、60歳で定年になりますか？",
    a: "転職先の就業規則の定年によります。令和7年 高年齢者雇用状況等報告では、定年を60歳とする企業は62.2%、65歳以上定年（定年制の廃止を含む）の企業は34.9%です。60歳定年の企業でも、高年齢者雇用安定法9条により65歳までの雇用確保措置（定年の引上げ・継続雇用制度・定年の廃止のいずれか）が義務付けられており、99.9%の企業が実施済みです。",
  },
  {
    q: "58歳の転職では、何を先に確認すればよいですか？",
    a: "応募先の定年年齢、定年後の継続雇用制度の内容（雇用形態・賃金）、70歳までの就業確保措置の有無を、求人票・面接で確認する方法をおすすめします。今の勤務先で60歳以降に継続雇用された場合の条件と比べると、転職するかどうかを判断しやすくなります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};

const sources = [
  { label: "厚生労働省「令和7年『高年齢者雇用状況等報告』の集計結果」（令和7年12月19日公表）", url: KOUREI },
  { label: "厚生労働省「令和6年 雇用動向調査結果の概況」転職入職者の状況（表5・表6）", url: DOUKOU },
  { label: "e-Gov法令検索 高年齢者等の雇用の安定等に関する法律（8条・9条・10条の2）", url: LAW_KOUREI },
  { label: "e-Gov法令検索 労働施策の総合的な推進並びに労働者の雇用の安定及び職業生活の充実等に関する法律（9条）", url: LAW_SESAKU },
  { label: "e-Gov法令検索 同法施行規則（1条の3）", url: RULE_SESAKU },
];

const a = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{label}</a>
);
const th = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "58歳の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            58歳の転職で確認すること｜定年制・転職後の賃金・求人の年齢制限
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "62.2%", l: "定年を60歳とする企業" },
              { v: "34.9%", l: "65歳以上定年（廃止を含む）の企業" },
              { v: "27.4%", l: "55〜59歳の転職で賃金が増加" },
              { v: "36.6%", l: "55〜59歳の転職で賃金が減少" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            58歳の転職では、<strong>応募先の定年年齢</strong>が大きく影響します。厚生労働省の集計では定年を60歳とする企業が62.2%で、60歳定年の企業に入ると定年まで約2年です。
            また、55〜59歳で転職した人は、賃金が減少した人（36.6%）が増加した人（27.4%）を上回っています。
            一方で、65歳以上定年の企業は34.9%まで増えており、65歳までの雇用確保措置は99.9%の企業が実施しています。
          </p>
          <p className="text-xs text-text-muted mt-3">出典：厚生労働省の統計・e-Gov法令検索（{CHECKED}に当サイトで確認）。</p>
        </div>

        <h2>企業の定年は何歳か</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">定年年齢</th>
                <th className={th}>企業数</th>
                <th className="p-3 text-right rounded-tr-lg">割合</th>
              </tr>
            </thead>
            <tbody>
              {TEINEN.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n.toLocaleString("ja-JP")}社</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{x.r}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和7年 高年齢者雇用状況等報告」集計結果（令和7年6月1日現在・常時雇用する労働者21人以上の企業237,739社）。
        </p>
        <p className="mb-4">
          定年を60歳とする企業は62.2%で、前年から2.2ポイント減りました。定年を65歳とする企業は27.2%（2.0ポイント増）で、定年の引上げが進んでいます。
          高年齢者雇用安定法8条により、定年を定める場合は60歳を下回ることができません。
        </p>
        <p className="mb-10">
          60歳定年の企業でも、同法9条により65歳までの雇用確保措置（定年の引上げ・継続雇用制度の導入・定年の廃止のいずれか）が義務付けられています。
          実施済みの企業は99.9%で、そのうち65.1%が継続雇用制度によるものです。70歳までの就業確保措置（同法10条の2・努力義務）を実施済みの企業は34.8%です（
          {a(KOUREI, "高年齢者雇用状況等報告")}）。
        </p>

        <h2>55〜59歳で転職した人の賃金の変化</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢</th>
                <th className={th}>増加</th>
                <th className={th}>うち1割以上</th>
                <th className={th}>変わらない</th>
                <th className={th}>減少</th>
                <th className="p-3 text-right rounded-tr-lg">うち1割以上</th>
              </tr>
            </thead>
            <tbody>
              {WAGE.map((x) => (
                <tr key={x.k} className={`border-b border-gray-100 ${x.k === "55〜59歳" ? "bg-warm-gray font-bold" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.up}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.up10}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.same}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.down}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.down10}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※厚生労働省「令和6年 雇用動向調査結果の概況」表6。転職入職者のうち前職が雇用者で調査時に在籍している人。賃金変動状況の不詳を含むため、合計は100%になりません。
        </p>
        <p className="mb-10">
          55〜59歳では、賃金が減少した人の割合が増加した人を9.2ポイント上回ります。50〜54歳までは増加が減少を上回っており、55歳を境に逆転しています。
          60〜64歳では減少した人が60.9%に増えるため、統計上は60歳以降の転職より55〜59歳の転職のほうが、賃金が減少した人の割合は低くなっています。
          全年齢の状況は<Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link>に掲載しています。
        </p>

        <h2>55〜59歳の転職者が前職を辞めた理由</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">前職を辞めた理由</th>
                <th className={th}>男性</th>
                <th className="p-3 text-right rounded-tr-lg">女性</th>
              </tr>
            </thead>
            <tbody>
              {REASON.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m}%</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.f}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※同 表5（55〜59歳・主な項目を抜粋）。</p>
        <p className="mb-10">
          55〜59歳の男性では「その他の理由（出向等を含む）」が29.0%と最も多く、出向・転籍による転職が多いことがうかがえます。「会社都合」も10.9%です。
          女性では「職場の人間関係が好ましくなかった」が13.0%、「定年・契約期間の満了」が10.2%となっています。
        </p>

        <h2>求人の年齢制限のルール</h2>
        <p className="mb-4">
          労働施策総合推進法9条により、事業主は労働者の募集・採用について、原則として年齢にかかわりなく均等な機会を与えなければなりません（{a(LAW_SESAKU, "e-Gov法令検索")}）。
          ただし、同法施行規則1条の3第1項で例外が定められており、その第1号は次のとおりです（{a(RULE_SESAKU, "施行規則")}）。
        </p>
        <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            事業主が、その雇用する労働者の定年の定めをしている場合において当該定年の年齢を下回ることを条件として労働者の募集及び採用を行うとき（期間の定めのない労働契約を締結することを目的とする場合に限る。）
          </p>
        </div>
        <p className="mb-10">
          60歳定年の企業が正社員を「60歳未満」で募集することは、この例外として認められています。58歳はこの条件を満たすため応募できますが、入社後に定年までの期間が短いことを前提に、定年後の継続雇用の条件まで確認しておく必要があります。
          65歳定年の企業であれば、定年まで約7年働けます。
        </p>

        <h2>58歳の転職で確認すること</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "応募先の定年年齢と継続雇用の条件", d: "定年が60歳か65歳かで、正社員として働ける期間が大きく変わります。継続雇用制度の場合は、定年後の雇用形態（嘱託・契約社員など）と賃金の決め方を確認します。" },
            { t: "今の勤務先に残った場合の条件", d: "今の勤務先の定年、役職定年の有無、継続雇用後の賃金と比べます。転職しない場合の60歳以降の働き方がわかると、転職による差を判断しやすくなります。" },
            { t: "退職金の計算方法", d: "退職金は勤続年数に応じて増える制度が多く、58歳での退職と定年退職で支給額が変わる場合があります。今の勤務先の退職金規程で確認します。" },
            { t: "70歳までの就業確保措置の有無", d: "70歳までの就業確保措置は努力義務で、実施済みの企業は34.8%です。65歳以降も働きたい場合は、応募先の制度を確認します。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          50代向けの転職エージェントの選び方は<Link href="/age/50s/" className={link}>50代におすすめの転職エージェント</Link>、50〜54歳の平均年収は<Link href="/knowledge/salary-50sai/" className={link}>50歳の平均年収</Link>に掲載しています。
        </p>

        <h2>よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faq.map((x) => (
            <div key={x.q} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">Q. {x.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>

        <h2>関連ページ</h2>
        <ul className="mb-10">
          <li><Link href="/age/50s/" className={link}>50代におすすめの転職エージェント</Link></li>
          <li><Link href="/knowledge/salary-50sai/" className={link}>50歳の平均年収</Link></li>
          <li><Link href="/knowledge/tenshoku-kowai/" className={link}>転職が怖いとき</Link></li>
          <li><Link href="/knowledge/tenshoku-umakuikanai/" className={link}>転職がうまくいかないとき</Link></li>
          <li><Link href="/knowledge/nenshu-600man-shokugyo/" className={link}>年収600万円の職業</Link></li>
          <li><Link href="/knowledge/kaisha-yamekata/" className={link}>会社の辞め方</Link></li>
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
