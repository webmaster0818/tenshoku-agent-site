import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "スーパーの売上高ランキング【有価証券報告書】上場12社の売上高・平均年収",
  description:
    "スーパーを運営する上場12社の連結売上高（営業収益）を有価証券報告書の原本で比較しました。1位はトライアルHD 1兆3,471億円、2位ユナイテッド・スーパーマーケットHD 9,444億円、3位バローHD 9,241億円です。店舗運営会社の平均年収と経営統合の影響も掲載しています。",
  alternates: { canonical: "/company/supermarket-salary/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "スーパーの売上高ランキング【有価証券報告書】上場12社",
    description: "スーパーマーケットを運営する上場12社の連結売上高と平均年間給与を、有価証券報告書の記載値で比較しています。",
  },
};

const CHECKED = "2026年11月27日";
const PDF = (id: string) => `https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/${id}.pdf`;
const oku = (m: number) => {
  const o = Math.floor(m / 100);
  return o >= 10000 ? `${Math.floor(o / 10000)}兆${(o % 10000).toLocaleString("ja-JP")}億円` : `${o.toLocaleString("ja-JP")}億円`;
};
const growth = (c: number, p: number) => {
  const g = (c / p - 1) * 100;
  return `${g >= 0 ? "+" : ""}${g.toFixed(1)}%`;
};

// 各社の有価証券報告書「主要な経営指標等の推移」連結経営指標等（百万円）。原本を2026-11-27にEDINETで確認
// label: 有報の項目名（営業収益＝売上高＋営業収入）。prev は同じ表の前期の値（ブルーゾーンHDは第1期のため株式会社ヤオコー第68期有報 S100W205 の連結売上高）
const ranking = [
  { name: "トライアルホールディングス", code: "141A", cur: 1347109, prev: 803829, label: "売上高", term: "2026年6月期（第12期）", filed: "2026年9月24日", doc: "S100Z3TN" },
  { name: "ユナイテッド・スーパーマーケット・ホールディングス", code: "3222", cur: 944425, prev: 793986, label: "売上高", term: "2026年2月期（第11期）", filed: "2026年5月20日", doc: "S100Y585" },
  { name: "バローホールディングス", code: "9956", cur: 924114, prev: 854435, label: "営業収益", term: "2026年3月期（第69期）", filed: "2026年6月25日", doc: "S100YHUD" },
  { name: "ライフコーポレーション", code: "8194", cur: 881325, prev: 850496, label: "営業収益", term: "2026年2月期（第71期）", filed: "2026年5月26日", doc: "S100Y63D" },
  { name: "フジ", code: "8278", cur: 784256, prev: 778238, label: "売上高", term: "2026年2月期（第59期）", filed: "2026年5月18日", doc: "S100Y4CU" },
  { name: "ブルーゾーンホールディングス（ヤオコー）", code: "417A", cur: 783434, prev: 708290, label: "売上高", term: "2026年3月期（第1期）", filed: "2026年6月17日", doc: "S100YC3L" },
  { name: "アークス", code: "9948", cur: 626957, prev: 608284, label: "売上高", term: "2026年2月期（第65期）", filed: "2026年5月25日", doc: "S100Y640" },
  { name: "イズミ", code: "8273", cur: 569312, prev: 524142, label: "営業収益", term: "2026年2月期（第65期）", filed: "2026年5月26日", doc: "S100Y671" },
  { name: "イオン九州", code: "2653", cur: 520588, prev: 505530, label: "売上高", term: "2026年2月期（第54期）", filed: "2026年5月19日", doc: "S100Y4YP" },
  { name: "平和堂", code: "8276", cur: 456010, prev: 444898, label: "営業収益", term: "2026年2月期（第69期・2月20日決算）", filed: "2026年5月11日", doc: "S100Y2FB" },
  { name: "ベルク", code: "9974", cur: 416514, prev: 381440, label: "売上高", term: "2026年2月期（第67期）", filed: "2026年5月20日", doc: "S100Y4X3" },
  { name: "マックスバリュ東海", code: "8198", cur: 384951, prev: 377418, label: "営業収益", term: "2026年2月期（第64期）", filed: "2026年5月18日", doc: "S100Y494" },
];
const TOTAL = ranking.reduce((s, r) => s + r.cur, 0);

// 店舗を運営する会社の値：事業会社は「提出会社の状況」、持株会社は同じ有報の「最大人員会社の状況」。平均年間給与の高い順（当サイトで並べ替え）
const stores = [
  { name: "ヤオコー", src: "ブルーゾーンHDの最大人員会社", pay: "6,573千円", man: "約657万円", age: "40.2歳", tenure: "11.4年", n: "4,493人（14,690人）" },
  { name: "平和堂", src: "提出会社", pay: "6,042千円", man: "約604万円", age: "43.0歳", tenure: "18.87年", n: "3,611人（8,700人）" },
  { name: "ライフコーポレーション", src: "提出会社", pay: "5,827,088円", man: "約582万円", age: "41.2歳", tenure: "15.8年", n: "7,499人（25,833人）" },
  { name: "マックスバリュ東海", src: "提出会社", pay: "5,742,962円", man: "約574万円", age: "43歳11カ月", tenure: "10年0カ月", n: "2,457人（10,006人）" },
  { name: "バロー", src: "バローHDの最大人員会社", pay: "5,643千円", man: "約564万円", age: "38.4歳", tenure: "12.3年", n: "2,828人（8,031人）" },
  { name: "イズミ", src: "提出会社", pay: "5,642千円", man: "約564万円", age: "41.3歳", tenure: "16.9年", n: "2,895人（6,148人）" },
  { name: "ベルク", src: "提出会社", pay: "5,570千円", man: "約557万円", age: "33.6歳", tenure: "9.6年", n: "2,808人（8,037人）" },
  { name: "フジ", src: "提出会社", pay: "5,151千円", man: "約515万円", age: "45.6歳", tenure: "19.1年", n: "6,681人（23,688人）" },
  { name: "イオン九州", src: "提出会社", pay: "4,811,193円", man: "約481万円", age: "47歳2ヵ月", tenure: "11年8ヵ月", n: "5,316人（13,323人）" },
  { name: "トライアルカンパニー", src: "トライアルHDの最大人員会社", pay: "4,786千円", man: "約478万円", age: "41.2歳", tenure: "8.4年", n: "4,686人（328人）" },
];

// 持株会社の提出会社単体の値（本社機能の少人数の平均）
const holding = [
  { name: "トライアルホールディングス", pay: "11,379千円", age: "40.9歳", n: "113人（14人）" },
  { name: "ブルーゾーンホールディングス", pay: "8,059千円", age: "35.4歳", n: "4人（−）" },
  { name: "バローホールディングス", pay: "7,357千円", age: "45.1歳", n: "192人（36人）" },
  { name: "アークス", pay: "6,240,495円", age: "47.4歳", n: "125人（30人）" },
  { name: "ユナイテッド・スーパーマーケット・ホールディングス", pay: "6百万円（百万円単位の記載）", age: "46.3歳", n: "445人（70人）" },
];

const faqData = [
  {
    q: "スーパーで売上高が一番多い会社はどこですか？",
    a: `スーパーマーケットを運営する上場12社の有価証券報告書（${CHECKED}に原本をEDINETで確認）では、トライアルホールディングスの連結売上高1兆3,471億円（2026年6月期）が最も多く、ユナイテッド・スーパーマーケット・ホールディングスの9,444億円（2026年2月期）、バローホールディングスの営業収益9,241億円（2026年3月期）が続きます。トライアルHDは2025年7月1日に西友の全株式を取得して連結しており、前期比+67.6%の大幅な増加です。`,
  },
  {
    q: "イオンやドン・キホーテ（PPIH）がランキングにないのはなぜですか？",
    a: "イオンの連結営業収益（2026年2月期 10兆7,153億円）には総合金融・ディベロッパー・ヘルス＆ウエルネスなどスーパー以外の事業が含まれ、提出会社は従業員559人の純粋持株会社です。パン・パシフィック・インターナショナルHD（2026年6月期 売上高2兆4,452億円）は、有価証券報告書で事業を「ビッグコンビニエンス＆ディスカウントストア」と説明しています。主な事業の範囲が他の12社と異なるため、ランキングの対象外とし、本文で参考値として記載しています。",
  },
  {
    q: "スーパーで平均年収が高いのはどこですか？",
    a: "店舗を運営する会社どうしで比べると、ヤオコー（ブルーゾーンHDの最大人員会社）の約657万円、平和堂の約604万円、ライフコーポレーションの約582万円の順です（各社の有価証券報告書・万円未満切り捨て）。持株会社の提出会社単体ではトライアルHDの約1,137万円が最も高く見えますが、本社機能の113人の平均で、店舗の従業員は含みません。",
  },
  {
    q: "売上高と営業収益は同じものですか？",
    a: "異なります。営業収益は、商品の売上高に不動産賃貸収入などの営業収入を加えた金額です。有価証券報告書で営業収益を記載しているバローHD・ライフコーポレーション・イズミ・平和堂・マックスバリュ東海は営業収益、それ以外の7社は売上高で並べています。同じ物差しではないため、順位が近い会社の比較は目安としてご覧ください。",
  },
  {
    q: "スーパーの平均年収にパートの給与は含まれますか？",
    a: "含まれません。有価証券報告書の平均年間給与は従業員（正社員など）の平均で、パートタイマー・アルバイトなどの臨時従業員は年間平均人員を外数で記載しています。ライフコーポレーションでは従業員7,499人に対して臨時従業員が25,833人と約3.4倍です（倍率は当サイト計算）。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "スーパーの売上高ランキング【有価証券報告書】上場12社の売上高・平均年収",
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/supermarket-salary/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const thL = "p-3 text-left";
const thR = "p-3 text-right";
const link = "text-teal font-bold hover:underline";

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "スーパーの売上高ランキング" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            スーパーの売上高ランキング【有価証券報告書】上場12社の売上高・平均年収
          </h1>
          <p className="text-text-secondary leading-relaxed">
            スーパーマーケットを運営する上場12社の連結売上高（営業収益）は、<strong>1位 トライアルホールディングス 1兆3,471億円、2位 ユナイテッド・スーパーマーケット・ホールディングス 9,444億円、3位 バローホールディングス 9,241億円、4位 ライフコーポレーション 8,813億円、5位 フジ 7,842億円</strong>です。
            各社がEDINETに提出した直近期の有価証券報告書の原本の記載値だけで並べています（{CHECKED}確認・億円未満切り捨て）。
            1位のトライアルHDは2025年7月に西友を、2位のユナイテッド・スーパーマーケットHDは2024年11月にいなげやを傘下に入れており、経営統合が順位に大きく影響しています。
          </p>
        </div>

        <h2>有価証券報告書準拠 スーパーの売上高ランキング</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className={`${thL} rounded-tl-lg`}>順位</th>
                <th className={thL}>会社（証券コード）</th>
                <th className={thR}>連結売上高（営業収益）</th>
                <th className={thR}>前期比</th>
                <th className={`${thL} rounded-tr-lg`}>決算期</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r, i) => (
                <tr key={r.code} className="border-b border-gray-100">
                  <td className="p-3 font-bold text-navy">{i + 1}位</td>
                  <td className="p-3">
                    <a href={PDF(r.doc)} target="_blank" rel="noopener noreferrer" className={link}>{r.name}</a>（{r.code}）
                  </td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">
                    {oku(r.cur)}
                    <span className="block text-[11px] text-text-muted font-normal">{r.label} {r.cur.toLocaleString("ja-JP")}百万円</span>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{growth(r.cur, r.prev)}</td>
                  <td className="p-3 text-text-secondary">{r.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各社の有価証券報告書「主要な経営指標等の推移」の連結経営指標等。営業収益（売上高＋営業収入）を記載している会社は営業収益、それ以外は売上高です。社名のリンクは有価証券報告書の原本PDF（EDINET）です。前期比は同じ表の前期の値から当サイトで計算しました。
          ブルーゾーンHDは2025年10月1日に株式会社ヤオコーの単独株式移転で設立された第1期で、連結財務諸表はヤオコーの連結を引き継いで作成されているため、前期比はヤオコーの第68期有価証券報告書（
          <a href={PDF("S100W205")} target="_blank" rel="noopener noreferrer" className="hover:underline">S100W205</a>）の連結売上高708,290百万円と比べています。
          提出日：{ranking.map((r) => `${r.name} ${r.filed}`).join("、")}。
        </p>
        <p className="mb-4">
          12社の売上高（営業収益）の単純合計は約{oku(TOTAL).replace("億円", "")}億円です（当サイト計算。決算期と項目が異なる数値の合計のため目安です）。
          前期比が10%を超えたのは、西友を連結したトライアルHD（+67.6%）、いなげやを通期で連結したユナイテッド・スーパーマーケットHD（+18.9%）、ブルーゾーンHD（+10.6%）の3社で、前期を下回った会社はありません。
        </p>
        <p className="mb-10">
          掲載の対象は、有価証券報告書の事業の内容でスーパーマーケット（食品スーパー・総合スーパー・スーパーセンター）の運営が主な事業と確認でき、連結売上高（営業収益）が当サイトで確認した範囲で上位の12社です。
          イオン北海道（単体の売上高3,800億円・連結子会社なし）は13番目の規模でした。アクシアル リテイリング、リテールパートナーズ、サンエー、オークワ、大黒天物産などは今回の確認の対象に含めていません。
          非上場のオーケー・サミットなどは有価証券報告書の提出がないため掲載していません。バローHDの営業収益にはドラッグストア事業（1,844億円）とホームセンター事業（1,240億円）が、トライアルHDの売上高にはスーパーセンター型のディスカウントストアの売上が含まれます。
        </p>

        <h2>経営統合で変わった順位</h2>
        <div className="glass-card p-6 mb-10">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>トライアルHDは2025年7月1日付で株式会社西友の全株式を取得し、西友とその子会社2社を連結の範囲に含めています。2026年6月期の売上高には西友の約12か月分が含まれます。</li>
            <li>ユナイテッド・スーパーマーケットHDは2024年11月に株式会社いなげやとの経営統合を完了し、2026年2月期は通期で連結されています。2025年12月には、マックスバリュ関東を完全子会社とする株式交換契約などを締結しています。</li>
            <li>イズミは2024年8月に西友の九州の食品スーパー事業を吸収分割で承継しており、2026年2月期はその通期分が含まれます（+8.6%）。</li>
            <li>フジは2024年3月にマックスバリュ西日本などを吸収合併し、持株会社から事業会社に戻りました。このため提出会社の従業員の値は店舗を運営する会社の値です。</li>
            <li>ヤオコーは2025年10月1日に持株会社のブルーゾーンホールディングスを設立し、上場会社が同社に移りました。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">
            出典：各社の有価証券報告書の沿革・連結の範囲に関する注記（
            <a href={PDF("S100Z3TN")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">トライアルHD 第12期</a>、
            <a href={PDF("S100Y585")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">USMH 第11期</a>、
            <a href={PDF("S100Y671")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">イズミ 第65期</a>、
            <a href={PDF("S100Y4CU")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">フジ 第59期</a>、
            <a href={PDF("S100YC3L")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ブルーゾーンHD 第1期</a>）。{CHECKED}確認。
          </p>
        </div>

        <h2>店舗を運営する会社の平均年間給与の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className={`${thL} rounded-tl-lg`}>会社</th>
                <th className={thL}>記載箇所</th>
                <th className={thR}>平均年間給与</th>
                <th className={thR}>平均年齢</th>
                <th className={thR}>平均勤続年数</th>
                <th className={`${thR} rounded-tr-lg`}>従業員数（臨時・外数）</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((r) => (
                <tr key={r.name} className="border-b border-gray-100">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3 text-text-secondary">{r.src}</td>
                  <td className="p-3 text-right whitespace-nowrap font-bold text-navy">{r.man}<span className="block text-[11px] text-text-muted font-normal">{r.pay}</span></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※売上高ランキングと同じ有価証券報告書の「従業員の状況」（賞与及び基準外賃金を含む・万円未満切り捨て）。事業会社は提出会社の状況、持株会社は「最大人員会社の状況」の値です。臨時従業員は1日8時間換算の年間平均人員です。
          ユナイテッド・スーパーマーケットHDとアークスの有価証券報告書には、店舗を運営する子会社の平均年間給与の記載がありません。
        </p>
        <p className="mb-10">
          店舗を運営する10社の平均年間給与は約478万〜約657万円です。平均勤続年数が18.87年の平和堂、15.8年のライフコーポレーションは、平均年間給与も上位にあります。
          一方、ライフコーポレーションの臨時従業員は25,833人、フジは23,688人で、いずれも従業員の3倍以上です。スーパーは売場をパートタイマー・アルバイトが支える割合が大きく、平均年間給与はその人たちを含まない値である点にご注意ください。
        </p>

        <h2>持株会社の平均年間給与（参考）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className={`${thL} rounded-tl-lg`}>持株会社（提出会社単体）</th>
                <th className={thR}>平均年間給与</th>
                <th className={thR}>平均年齢</th>
                <th className={`${thR} rounded-tr-lg`}>従業員数（臨時）</th>
              </tr>
            </thead>
            <tbody>
              {holding.map((r) => (
                <tr key={r.name} className="border-b border-gray-100">
                  <td className="p-3">{r.name}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.pay}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-10">
          持株会社の値は本社機能に勤める少人数の従業員の平均で、店舗の店長・バイヤー・売場担当者などは含みません。ブルーゾーンHDの4人はヤオコーからの出向者です。
          企業を比べるときは、上の「店舗を運営する会社」の値をご覧ください。
        </p>

        <h2>参考：イオンとPPIHの規模</h2>
        <div className="glass-card p-6 mb-10">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>イオン（2026年2月期・第101期）：連結営業収益10兆7,153億円（前期比+5.7%）。販売実績はGMS事業3兆6,918億円、SM事業3兆857億円です。提出会社は従業員559人の純粋持株会社で、平均年間給与は9,329,258円です。</li>
            <li>パン・パシフィック・インターナショナルHD（2026年6月期・第46期）：連結売上高2兆4,452億円（前期比+8.8%）。最大人員会社の㈱ドン・キホーテは平均年間給与5,517,100円・平均35.6歳です。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">
            出典：<a href={PDF("S100Y5VH")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">イオン 有価証券報告書（第101期）</a>、
            <a href={PDF("S100Z42G")} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">PPIH 有価証券報告書（第46期）</a>（{CHECKED}確認）
          </p>
        </div>

        <h2>数値を比べるときの注意点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>決算期末は、2月末の会社が多く（平和堂は2月20日）、バローHD・ブルーゾーンHDが3月31日、トライアルHDが6月30日です。いずれも12か月分ですが、対象期間は最大4か月ずれています。</li>
            <li>営業収益には不動産賃貸収入などの営業収入が含まれるため、売上高で記載している会社より大きく出ます。</li>
            <li>平均年間給与は正社員など従業員の平均で、職種別（店長・バイヤー・惣菜担当など）の内訳は有価証券報告書に記載されていません。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            小売業界への転職では、<Link href="/review/oishiru-career/" className={link}>スーパー・生鮮業界特化のオイシルキャリア</Link>のような業界特化型のサービスもあります。同じ小売の比較は<Link href="/company/drugstore-salary/" className={link}>ドラッグストアの売上高ランキング</Link>に掲載しています。
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
            <Link href="/company/drugstore-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ドラッグストアの売上高ランキング</Link>
            <Link href="/company/nitori/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ニトリの平均年収</Link>
            <Link href="/review/oishiru-career/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">オイシルキャリアの特徴</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
