import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "オープンハウスは誰でも受かる？中途採用の応募条件・1day選考会・離職率を公式情報と有価証券報告書で確認【2026年】",
  description:
    "オープンハウスの中途採用（不動産営業職）を、公式の募集要項・採用FAQと有価証券報告書で整理しました。営業・不動産業界の経験は不問ですが、必須条件があり、合格率は公表されていません。初年度理論年収528万円以上、離職率21.48%、持株会社の平均年間給与も掲載しています。",
  alternates: { canonical: "/company/openhouse/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "オープンハウスは誰でも受かる？中途採用の応募条件・選考を公式情報で確認【2026年】",
    description: "オープンハウスの中途採用の応募条件・選考の流れ・離職率・平均年収を、公式情報と有価証券報告書で整理しています。",
  },
};

const CHECKED = "2026年11月27日";
const YUHO_29 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XBTG.pdf";
const YUHO_28 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100UZQ5.pdf";
const YUHO_27 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100SI90.pdf";
const REQ = "https://recruit.openhouse-group.com/mid-career-sales/requirements/";
const REQ_SALES = "https://recruit.openhouse-group.com/mid-career-sales/requirements/real-estate-business/";
const FAQ = "https://recruit.openhouse-group.com/mid-career-sales/faq/";
const HR = "https://openhouse-group.co.jp/sustainability/social/human-resources/";
const link = "text-teal font-bold hover:underline";
const ext = "text-teal hover:underline";

const hrData = [
  { y: "2021年9月期", emp: "4,087人", rate: "17.16%", grad: "399人" },
  { y: "2022年9月期", emp: "4,493人", rate: "18.75%", grad: "461人" },
  { y: "2023年9月期", emp: "4,904人", rate: "21.57%", grad: "545人" },
  { y: "2024年9月期", emp: "6,107人", rate: "21.74%", grad: "439人" },
  { y: "2025年9月期", emp: "6,620人", rate: "21.48%", grad: "856人" },
];

const faqData = [
  {
    q: "オープンハウスの中途採用は誰でも受かりますか？",
    a: "「誰でも受かる」と判断できる公式の数値はありません。採用FAQでは「スキルや経験を問わず、やる気ある人を広く受け入れています」と案内され、不動産営業職の募集要項でも営業経験・不動産業界の経験は不問です。一方で、必須条件として「目標達成意欲、成長意欲が高いこと」「お客様と信頼関係を築けること」が明記されており、内定率や応募倍率、中途採用の人数は公表されていません（" + "2026年11月27日確認）。",
  },
  {
    q: "未経験でもオープンハウスの営業職に応募できますか？",
    a: "応募できます。住宅営業・土地仕入営業・米国不動産営業・収益不動産営業の4職種の募集要項で、経験は「未経験 OK（営業の経験、不動産業界の経験不問）」と記載されています。宅建士資格や営業・販売・接客経験は「尚可」（あれば望ましい条件）の扱いです。",
  },
  {
    q: "オープンハウスの中途採用の選考はどのくらいで終わりますか？",
    a: "採用サイトでは「1day選考会」として、1次面接から最終面接・選考結果までを1日で実施すると案内されています（目安時間約3時間・随時開催）。採用FAQでは、内定までの期間は「概ね2週間から1ヶ月程度」とされています。",
  },
  {
    q: "オープンハウスの営業職の年収はいくらですか？",
    a: "住宅営業の募集要項では「月給36万円＋賞与（年2回）」「2025年4月入社以降 初年度理論年収：528万円以上」（役職なしの場合）と記載されています。有価証券報告書の平均年間給与9,143,467円は持株会社オープンハウスグループ単体の従業員307名（管理部門）の平均で、営業職が所属する株式会社オープンハウスの平均年間給与は公表されていません。",
  },
  {
    q: "オープンハウスの離職率はどのくらいですか？",
    a: "会社のサステナビリティページの人材関連データでは、2025年9月期の離職率は21.48%です（国内連結企業・当事業年度の離職者数÷前事業年度期末時点の従業員数）。2021年9月期の17.16%から上昇し、2023年9月期以降は21%台で推移しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "オープンハウスの中途採用" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            オープンハウスは誰でも受かる？中途採用の応募条件・1day選考会・離職率を公式情報で確認【2026年】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "経験不問", l: "営業・不動産業界の経験（4職種）" },
              { v: "1日", l: "1次面接〜選考結果（1day選考会）" },
              { v: "528万円以上", l: "住宅営業の初年度理論年収" },
              { v: "21.48%", l: "離職率（2025年9月期）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            オープンハウスの中途採用（不動産営業職）は、営業経験・不動産業界の経験を問わず応募でき、採用FAQでも<strong>「スキルや経験を問わず、やる気ある人を広く受け入れています」</strong>と案内されています。
            ただし、募集要項には「目標達成意欲、成長意欲が高いこと」「お客様と信頼関係を築けること」という必須条件があり、<strong>内定率・応募倍率・中途採用の人数は公表されていません</strong>。
            公式情報から言えるのは「応募の間口が広い」ことまでで、「誰でも受かる」とは判断できません。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：オープンハウスグループ 採用サイト（<a href={REQ} target="_blank" rel="noopener noreferrer" className={ext}>募集要項</a>・<a href={FAQ} target="_blank" rel="noopener noreferrer" className={ext}>採用FAQ</a>）、<a href={HR} target="_blank" rel="noopener noreferrer" className={ext}>サステナビリティ「人材育成」</a>、<a href={YUHO_29} target="_blank" rel="noopener noreferrer" className={ext}>有価証券報告書（第29期）</a>。{CHECKED}に確認しています。
          </p>
        </div>

        <h2>中途採用の応募条件（不動産営業職の募集要項）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "経験", value: "未経験 OK（営業の経験、不動産業界の経験不問）※住宅営業・土地仕入営業・米国不動産営業・収益不動産営業の4職種で同じ" },
                { label: "必須", value: "目標達成意欲、成長意欲が高いこと／お客様と信頼関係を築けること" },
                { label: "尚可（住宅営業）", value: "宅建士資格保持者／普通自動車運転免許（AT限定可）／営業・販売・接客経験のある方" },
                { label: "給与（住宅営業）", value: "月給36万円＋賞与（年2回）。2025年4月入社以降の初年度理論年収528万円以上（役職なしの場合・経験やスキルなどを考慮して当社規定により決定）。昇給昇格は年4回" },
                { label: "試用期間", value: "5カ月間（中途入社の場合・採用FAQ）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※<a href={REQ_SALES} target="_blank" rel="noopener noreferrer" className={ext}>住宅営業の募集要項</a>ほか各職種の募集要項から転記（{CHECKED}確認）。募集要項は随時変わるため、応募前に最新の内容をご確認ください。
        </p>
        <p className="mb-10">
          公式の募集要項で求められているのは、経験や資格ではなく「目標達成意欲」「成長意欲」「信頼関係を築く力」です。学歴に関する条件は、当サイトが確認した採用サイトのページには記載がありませんでした。
          経験の有無で応募が絞られない分、選考では面接で意欲や対人姿勢が見られると考えられます。宅建士資格は必須ではありませんが、住宅営業・米国不動産営業では「尚可」に挙げられています。
        </p>

        <h2>選考の流れと期間</h2>
        <div className="glass-card p-6 mb-4">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>1day選考会：1次面接〜最終面接「選考結果」までを1日で実施（目安時間約3時間・随時開催）</li>
            <li>内定までの期間：時期や状況により異なり、概ね2週間から1ヶ月程度（採用FAQ）</li>
            <li>ノルマ：採用FAQでは「ノルマはありません。なお企業の成長のための目標設定はあります」とし、目標未達の罰則はないと説明</li>
          </ul>
        </div>
        <p className="text-xs text-text-muted mb-4">※<a href={REQ} target="_blank" rel="noopener noreferrer" className={ext}>募集要項</a>・<a href={FAQ} target="_blank" rel="noopener noreferrer" className={ext}>採用FAQ</a>（{CHECKED}確認）</p>
        <p className="mb-10">
          面接から結果までを1日で終える選考は、在職中の人でも日程を調整しやすい形式です。一方、選考が短い分、入社後の働き方を確認できる機会も限られます。
          目標設定の考え方や評価の仕組み、配属先の勤務時間などは、面接の場で質問して確かめることをおすすめします。
        </p>

        <h2>離職率と新卒採用数の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">従業員数（正社員）</th>
                <th className="p-3 text-right">離職率</th>
                <th className="p-3 text-right rounded-tr-lg">新卒採用数</th>
              </tr>
            </thead>
            <tbody>
              {hrData.map((r) => (
                <tr key={r.y} className="border-b border-gray-100">
                  <td className="p-3">{r.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.emp}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.rate}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.grad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※<a href={HR} target="_blank" rel="noopener noreferrer" className={ext}>オープンハウスグループ サステナビリティ「人材育成」の人材関連データ</a>（{CHECKED}確認）。離職率＝国内連結企業における当事業年度の離職者数÷前事業年度期末時点の従業員数。2024年9月期からメルディアを集計対象に追加しています。
          中途採用の人数は掲載されておらず、中途採用者に占める女性の割合（2025年9月期 24.10%）のみが公表されています。
        </p>
        <p className="mb-10">
          離職率は2021年9月期の17.16%から上がり、2023年9月期以降は21%台です。前期末の従業員数に対する割合のため、採用を増やして従業員が増えている会社ほど、分母が前年の人数になる点に注意が必要です。
          2025年9月期は新卒採用数が856人と前期（439人）の約2倍になっており、未経験者を含めて採用を拡大している状況がうかがえます。
          有価証券報告書の事業等のリスクでも「積極的に優秀な人材を数多く採用していく方針」と記載されています。
        </p>

        <h2>平均年収（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期（提出会社単体）</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数（臨時）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: "2023年9月期（第27期）", u: YUHO_27, pay: "7,316,752円", age: "33.5歳", ten: "3.9年", n: "249人（34人）" },
                { t: "2024年9月期（第28期）", u: YUHO_28, pay: "9,321,227円", age: "34.3歳", ten: "4.2年", n: "284人（48人）" },
                { t: "2025年9月期（第29期）", u: YUHO_29, pay: "9,143,467円", age: "34.7歳", ten: "4.5年", n: "307人（63人）" },
              ].map((r) => (
                <tr key={r.t} className={`border-b border-gray-100 ${r.u === YUHO_29 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3"><a href={r.u} target="_blank" rel="noopener noreferrer" className={ext}>{r.t}</a></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.pay}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.ten}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書「従業員の状況 (2) 提出会社の状況」。平均年間給与は賞与及び基準外賃金を含みます。従業員数は就業人員で、臨時雇用者数は派遣社員を含む年間平均人員を外数で記載しています。
        </p>
        <p className="mb-10">
          オープンハウスグループは2022年1月に純粋持株会社へ移行しており、提出会社の従業員307人はすべて全社（共通）の管理部門の人員です。
          営業職の多くが所属する株式会社オープンハウスの平均年間給与は、有価証券報告書に記載がありません。営業職の年収の目安としては、募集要項の初年度理論年収（528万円以上）が公式の数値です。
          なお、同じページには「2年目で年収734万円。6年目で年収1,049万円。これがオープンハウスの平均的な営業職です。」との記載がありますが、算出方法は示されていません。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社オープンハウスグループ（東証プライム・証券コード3288・純粋持株会社）" },
                { label: "主な子会社", value: "㈱オープンハウス、㈱オープンハウス・ディベロップメント、㈱オープンハウス・アーキテクト、㈱メルディア、㈱プレサンスコーポレーションなど" },
                { label: "連結従業員数", value: "6,620人（臨時601人）：戸建関連事業 3,660人、プレサンスコーポレーション 1,165人など（2025年9月30日現在）" },
                { label: "女性管理職比率（㈱オープンハウス）", value: "7.3%（2025年9月期・有価証券報告書）" },
                { label: "男性の育児休業取得率（㈱オープンハウス）", value: "41.5%（同上）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※<a href={YUHO_29} target="_blank" rel="noopener noreferrer" className={ext}>第29期有価証券報告書（2025年12月22日提出）</a>から転記（{CHECKED}確認）。2026年9月期の有価証券報告書は、例年どおりであれば12月下旬に提出される見込みです。
        </p>

        <h2>オープンハウスへの転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募の間口は広いものの、合格率は公表されていません。「目標達成意欲」「成長意欲」を、これまでの仕事の具体例で説明できるよう準備しておくと安心です。</li>
            <li>初年度理論年収528万円以上は役職なしの場合の目安で、賞与を含みます。賞与・インセンティブの算定方法は面接で確認することをおすすめします。</li>
            <li>離職率は21%台です。配属先の働き方（休日・勤務時間・目標の決め方）を入社前に確かめておくと、入社後の想定とのずれを減らせます。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            不動産業界の求人を他社と比べる場合は、<Link href="/review/rsg-fudosan/" className={link}>建設・不動産専門のRSG</Link>や、<Link href="/type/inexperienced/" className={link}>未経験の転職に強い転職エージェント</Link>も参考にしてください。
          </p>
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

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/fudosan-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">不動産会社の年収ランキング</Link>
            <Link href="/company/haseko/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">長谷工の転職ガイド</Link>
            <Link href="/knowledge/kensetsu-tenshoku/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">建設業の転職</Link>
            <Link href="/company/supermarket-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スーパーの売上高ランキング</Link>
            <Link href="/review/rsg-fudosan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">RSGの特徴</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
