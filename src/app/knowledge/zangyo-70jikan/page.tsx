import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/zangyo-70jikan/" },
  title: "残業70時間は違法？36協定の特別条項で年6か月まで・過労死の認定基準との関係【厚生労働省の基準で確認】",
  description:
    "月70時間の残業は、36協定の原則の上限（月45時間）を超えるため、特別条項がある場合に年6か月までしか認められません。休日労働を含めた2〜6か月平均80時間以内の上限、脳・心臓疾患の労災認定基準（月45時間・80時間・100時間）との関係、1日あたりの時間と残業代の計算例を厚生労働省の資料で確認しています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "残業70時間は違法？36協定と過労死の認定基準で確認",
    description: "月70時間の残業が認められる条件と、労災認定基準・残業代の計算を厚生労働省の資料で確認しています。",
  },
};

const CHECKED = "2026年11月29日";
const HOURS = 70;
const DAYS = 20;
const AVG = 13.2; // 毎月勤労統計調査 2025年分 一般労働者の所定外労働時間（月）

// 残業代の計算例：月給（割増の基礎となる賃金）30万円・月平均所定労働時間160時間
const BASE_PAY = 300000;
const BASE_HOURS = 160;
const unit = BASE_PAY / BASE_HOURS;
const pay60 = unit * 1.25 * 60;
const pay10 = unit * 1.5 * (HOURS - 60);
const yen = (v: number) => `${Math.round(v).toLocaleString("ja-JP")}円`;
const link = "text-teal font-bold hover:underline";

const faq = [
  {
    q: "残業70時間は違法ですか？",
    a: "36協定に特別条項があり、月45時間を超えるのが年6か月以内であれば、月70時間の残業そのものは違法になりません。特別条項がない場合や、月45時間を超える月が年7か月以上になる場合は、労働基準法第36条の上限を超えるため違法です。休日労働を合わせた2〜6か月の平均が80時間を超える場合も違法になります。",
  },
  {
    q: "残業70時間は過労死ラインですか？",
    a: "厚生労働省の脳・心臓疾患の労災認定基準では、発症前2〜6か月にわたって1か月あたりおおむね80時間を超える時間外労働、または発症前1か月におおむね100時間の時間外労働があると、業務と発症との関連性が強いと評価されます。月70時間はこの水準には届きませんが、おおむね45時間を超えて長くなるほど関連性が徐々に強まるとされており、令和3年の改正で、これに近い時間外労働と労働時間以外の負荷を総合的に評価することが明確にされています。",
  },
  {
    q: "残業70時間は1日あたり何時間ですか？",
    a: `月の出勤日を${DAYS}日とすると、1日あたり${(HOURS / DAYS).toFixed(1)}時間です。始業9時・終業18時（休憩1時間）の会社では、毎日21時30分ごろまで働く計算になります（当サイト計算）。`,
  },
  {
    q: "残業70時間の残業代はいくらですか？",
    a: `月60時間を超える時間外労働の割増率は50%以上です（2023年4月から中小企業にも適用）。割増の基礎となる賃金が月30万円、月平均所定労働時間が160時間の場合、60時間分は${yen(pay60)}、残り10時間分は${yen(pay10)}で、合計${yen(pay60 + pay10)}です（当サイト計算・深夜・休日労働を含まない）。`,
  },
  {
    q: "残業70時間が続くときはどこに相談できますか？",
    a: "労働基準法違反の疑いがある場合は、勤務先を管轄する労働基準監督署に相談できます。厚生労働省は、労働条件に関する相談窓口として総合労働相談コーナーも設けています。",
  },
];
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
};
const sources = [
  { label: "e-Gov法令検索 労働基準法（第32条・第36条・第37条）", url: "https://laws.e-gov.go.jp/law/322AC0000000049" },
  { label: "厚生労働省「脳・心臓疾患の労災認定（過労死等の労災補償Ⅰ）」パンフレット（令和3年9月改正の認定基準）", url: "https://www.mhlw.go.jp/content/001309213.pdf" },
  { label: "厚生労働省「中小企業の月60時間超の時間外労働に対する割増賃金率が50%になります」", url: "https://www.mhlw.go.jp/content/000930914.pdf" },
  { label: "厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」", url: "https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r07/25cr/25cr.html" },
  { label: "厚生労働省 総合労働相談コーナーのご案内", url: "https://www.mhlw.go.jp/general/seido/chihou/kaiketu/soudan.html" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "残業70時間は違法か" }]} />
      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            残業70時間は違法？36協定の特別条項で年6か月まで【厚生労働省の基準で確認】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "45時間", l: "36協定の原則の上限（月）" },
              { v: "年6か月", l: "月45時間を超えられる回数" },
              { v: "80時間", l: "2〜6か月平均の上限（休日労働を含む）" },
              { v: `${(HOURS / AVG).toFixed(1)}倍`, l: `平均残業時間（月${AVG}時間）との比較` },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            月70時間の残業は、36協定の原則の上限（月45時間・年360時間）を超えます。そのため、<strong>36協定に特別条項があり、月45時間を超えるのが年6か月以内の場合に限って認められます</strong>（労働基準法第36条）。
            特別条項がない会社や、月70時間の残業が年7か月以上続く場合は違法です。
            また、厚生労働省の脳・心臓疾患の労災認定基準では、月45時間を超えて長くなるほど業務と発症との関連性が徐々に強まるとされており、月70時間は過労死の認定基準（2〜6か月平均80時間超など）に近い水準です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            {CHECKED}に、e-Gov法令検索の労働基準法と厚生労働省の資料で内容を確認しています。個別の事案が違法かどうかは、労働基準監督署などにご確認ください。
          </p>
        </div>

        <h2>36協定の上限と月70時間の関係</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">上限の種類</th>
                <th className="p-3 text-left">基準（労働基準法第36条）</th>
                <th className="p-3 text-left rounded-tr-lg">月70時間の場合</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3">原則（限度時間）</td>
                <td className="p-3">月45時間・年360時間</td>
                <td className="p-3">超える（特別条項が必要）</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">特別条項：月45時間を超えられる回数</td>
                <td className="p-3">年6か月まで</td>
                <td className="p-3">7か月目から違法</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">特別条項：年間の時間外労働</td>
                <td className="p-3">年720時間以内</td>
                <td className="p-3">毎月70時間なら年840時間で超える</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">時間外労働＋休日労働（単月）</td>
                <td className="p-3">月100時間未満</td>
                <td className="p-3">休日労働が30時間以上あると超える</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">時間外労働＋休日労働（2〜6か月平均）</td>
                <td className="p-3">いずれも80時間以内</td>
                <td className="p-3">休日労働が月10時間を超える月が続くと超える</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          表の右列は、月70時間の時間外労働に休日労働が加わった場合などを当サイトで計算したものです。
          例えば、時間外労働が70時間の月が6か月あり、残りの6か月を月45時間に抑えると、年間は690時間で年720時間以内に収まります。
          一方で、時間外労働70時間に加えて休日出勤が月2日（1日8時間）あると、合計は86時間になり、これが2か月続くと2〜6か月平均80時間以内の上限を超えます。
          残業時間の平均や業種別の値は<Link href="/knowledge/zangyo-average/" className={link}>残業時間の平均</Link>で確認できます。
        </p>

        <h2>過労死の労災認定基準と月70時間</h2>
        <p>厚生労働省の脳・心臓疾患の労災認定基準（令和3年9月改正）は、発症前の時間外労働の長さを次のように評価しています。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">時間外労働の長さ</th>
                <th className="p-3 text-left rounded-tr-lg">業務と発症との関連性の評価</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3">発症前1〜6か月間にわたり、1か月あたりおおむね45時間以内</td>
                <td className="p-3">関連性が弱い</td>
              </tr>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">おおむね45時間を超えて長くなる（月70時間はここに入る）</td>
                <td className="p-3">長くなるほど関連性が徐々に強まる</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">発症前1か月間におおむね100時間、または発症前2〜6か月間にわたり1か月あたりおおむね80時間を超える</td>
                <td className="p-3">関連性が強い</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※出典：<a href="https://www.mhlw.go.jp/content/001309213.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">厚生労働省「脳・心臓疾患の労災認定」</a>。ここでの時間外労働は、1週間あたり40時間を超えて労働した時間（休日労働を含む）です。{CHECKED}確認。
        </p>
        <p className="mb-10">
          令和3年の改正で、80時間・100時間の水準には至らないものの、これに近い時間外労働があり、勤務時間の不規則さなど労働時間以外の負荷も認められる場合は、総合的に評価して労災認定することが明確にされました。
          月70時間の残業が続いている場合、休日出勤や深夜の勤務が加わるとこの水準に近づくため、勤怠の記録を手元に残しておくことをおすすめします。
        </p>

        <h2>月70時間の残業は1日あたり何時間か</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">月の出勤日数</th>
                <th className="p-3 text-right">1日あたりの残業</th>
                <th className="p-3 text-right rounded-tr-lg">9時始業・休憩1時間の場合の終業</th>
              </tr>
            </thead>
            <tbody>
              {[18, 20, 22].map((d) => {
                const h = HOURS / d;
                const end = 18 * 60 + Math.round(h * 60);
                return (
                  <tr key={d} className="border-b border-gray-100">
                    <td className="p-3">{d}日</td>
                    <td className="p-3 text-right whitespace-nowrap">約{h.toFixed(1)}時間</td>
                    <td className="p-3 text-right whitespace-nowrap">{Math.floor(end / 60)}時{String(end % 60).padStart(2, "0")}分ごろ</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          当サイト計算です。厚生労働省「毎月勤労統計調査 2025年分結果確報」の一般労働者（フルタイム）の所定外労働時間は月{AVG}時間で、月70時間はその約{(HOURS / AVG).toFixed(1)}倍にあたります。
        </p>

        <h2>月70時間の残業代の計算例</h2>
        <p>
          時間外労働の割増率は25%以上で、月60時間を超える部分は50%以上です（労働基準法第37条）。中小企業も2023年4月から50%以上が適用されています。
          割増の基礎となる賃金が月{(BASE_PAY / 10000).toFixed(0)}万円、月平均所定労働時間が{BASE_HOURS}時間の場合で計算しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">区分</th>
                <th className="p-3 text-right">時間</th>
                <th className="p-3 text-right">割増率</th>
                <th className="p-3 text-right rounded-tr-lg">残業代</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3">60時間まで</td>
                <td className="p-3 text-right">60時間</td>
                <td className="p-3 text-right">25%</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(pay60)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">60時間を超える部分</td>
                <td className="p-3 text-right">{HOURS - 60}時間</td>
                <td className="p-3 text-right">50%</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(pay10)}</td>
              </tr>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">合計</td>
                <td className="p-3 text-right">{HOURS}時間</td>
                <td className="p-3 text-right">－</td>
                <td className="p-3 text-right whitespace-nowrap">{yen(pay60 + pay10)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          1時間あたりの賃金は{yen(unit)}です（{yen(BASE_PAY)}÷{BASE_HOURS}時間）。深夜（22時〜5時）の労働はさらに25%以上、法定休日の労働は35%以上の割増になります。
          固定残業代（みなし残業）制度の会社でも、固定分の時間を超えた残業には追加の支払いが必要です。給与明細の残業時間と実際の勤務時間が合っているかを確認してください。
        </p>

        <h2>残業70時間が続くときの選択肢</h2>
        <div className="space-y-4 mb-10">
          {[
            { t: "36協定の内容を確認する", d: "36協定は事業場ごとに締結・届出され、労働者に周知する必要があります。特別条項の有無と、月45時間を超えられる回数を確認すると、今の残業が上限内かどうかを判断できます。" },
            { t: "労働基準監督署・総合労働相談コーナーに相談する", d: "上限を超えていると考えられる場合や、残業代が支払われていない場合は、勤務先を管轄する労働基準監督署に相談できます。" },
            { t: "残業の少ない職場への転職を検討する", d: "職種ごとの残業時間は定時で帰れる仕事のページで比較しています。転職エージェントを使う場合は、求人企業の平均残業時間を確認してから応募すると、同じ状況を繰り返しにくくなります。" },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-navy mb-2">{x.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mb-10">
          残業の少ない職種は<Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link>、連続勤務の上限は<Link href="/knowledge/7renkin-ihou/" className={link}>7連勤は違法か</Link>、
          退職を考える場合は<Link href="/knowledge/shigoto-yamedoki/" className={link}>仕事の辞めどき</Link>も参考にしてください。
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
          <li><Link href="/knowledge/zangyo-average/" className={link}>残業時間の平均</Link></li>
          <li><Link href="/knowledge/teiji-kaereru-shigoto/" className={link}>定時で帰れる仕事</Link></li>
          <li><Link href="/knowledge/7renkin-ihou/" className={link}>7連勤は違法か</Link></li>
          <li><Link href="/knowledge/stress-nai-shigoto/" className={link}>ストレスの少ない仕事</Link></li>
          <li><Link href="/knowledge/seiho-lady-nenshu/" className={link}>生保レディの年収</Link></li>
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
