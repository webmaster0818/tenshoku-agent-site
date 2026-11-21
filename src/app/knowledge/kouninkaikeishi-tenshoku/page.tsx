import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "公認会計士の転職【2026年】組織内会計士の78%が監査法人から転職・年齢別の年収（賃金構造基本統計調査）",
  description:
    "公認会計士の転職先と年収を一次情報で整理しました。日本公認会計士協会の組織内会計士アンケート（2023年）では78%が監査法人を経由して企業などへ転職しています。協会の会員数（公認会計士38,820人・2026年10月末）、賃金構造基本統計調査の職種「公認会計士，税理士」の年齢別・企業規模別の年収も掲載しています。",
  alternates: { canonical: "/knowledge/kouninkaikeishi-tenshoku/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "公認会計士の転職【2026年】組織内会計士の78%が監査法人から転職",
    description: "日本公認会計士協会の会員数・組織内会計士アンケートと、賃金構造基本統計調査の年齢別年収から、公認会計士の転職を整理しています。",
  },
};

const CHECKED = "2026年11月22日";
const MEMBERS_URL = "https://jicpa.or.jp/about/0-0-0-0-20261031.pdf";
const TREND_URL = "https://jicpa.or.jp/about/0-0-0-0-20260108.pdf";
const SURVEY_URL = "https://jicpa.or.jp/business/paib/0-0-0-0-20250526.pdf";
const WAGE1_URL = "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116";
const WAGE5_URL = "https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421120";

// 日本公認会計士協会「会員・準会員数の推移（10年毎及び最新年度、12月末日現在）」（会員＝公認会計士・外国公認会計士・監査法人）
const trend = [
  { y: "2000年", m: 13375, a: 4038 },
  { y: "2010年", m: 21496, a: 8596 },
  { y: "2020年", m: 32744, a: 6454 },
  { y: "2025年", m: 38031, a: 6914 },
];

// e-Stat 令和7年 賃金構造基本統計調査 職種 第5表「公認会計士，税理士」（男女計・企業規模計・千円・労働者数は十人）
const ages = [
  { k: "25〜29歳", s: 363.4, b: 880.6, n: 373 },
  { k: "30〜34歳", s: 429.3, b: 1050.3, n: 300 },
  { k: "35〜39歳", s: 478.1, b: 1479.0, n: 427 },
  { k: "40〜44歳", s: 582.3, b: 1535.7, n: 367 },
  { k: "45〜49歳", s: 639.5, b: 1840.4, n: 326 },
  { k: "50〜54歳", s: 572.9, b: 1922.2, n: 325 },
];
// 同 第1表（男女計・企業規模別）
const sizes = [
  { k: "企業規模計（10人以上）", s: 533.7, b: 1252.5, age: 42.2 },
  { k: "1,000人以上", s: 471.4, b: 1762.2, age: 35.5 },
  { k: "100〜999人", s: 528.5, b: 1452.9, age: 39.1 },
  { k: "10〜99人", s: 564.4, b: 940.1, age: 46.4 },
];
const annual = (s: number, b: number) => (s * 12 + b) * 1000;
const man = (v: number) => `約${Math.round(v / 10000).toLocaleString("ja-JP")}万円`;

const faqData = [
  {
    q: "公認会計士の転職先で多いのはどこですか？",
    a: "日本公認会計士協会の組織内会計士アンケート（2023年3〜4月実施・組織内会計士ネットワーク正会員281人が回答）では、回答者の所属組織は上場企業が57%、非上場会社（IPO準備企業を含む）が36%でした。経歴は78%が「監査法人を経由して転職」で、試験合格後に直接就職した人や、組織内で資格を取得した人もいます。",
  },
  {
    q: "公認会計士の平均年収はいくらですか？",
    a: `厚生労働省「令和7年 賃金構造基本統計調査」の職種「公認会計士，税理士」（一般労働者・男女計）は、所定内給与額が月533.7千円、年間賞与その他特別給与額が1,252.5千円で、合計すると${man(annual(533.7, 1252.5))}です（当サイト計算・平均年齢42.2歳）。この区分には税理士も含まれ、公認会計士だけの平均は公表されていません。`,
  },
  {
    q: "公認会計士の資格があると転職後の待遇は良くなりますか？",
    a: "同アンケートでは、組織内での待遇について、公認会計士資格のない人と比べて「関係ない」が66%、「有利な待遇となっている」が30%でした。協会の専門委員会は、企業に入ってからは資格の有無より人間性や専門能力が重視されるとまとめています。一方、転職時にはメリットを感じるという意見が多かったとしています。",
  },
  {
    q: "公認会計士は何人いますか？",
    a: "日本公認会計士協会の会員数等調によると、2026年10月31日現在の公認会計士は38,820人、監査法人は300法人です。公認会計士試験に合格した四号準会員は6,451人です。公認会計士と監査法人は、すべて同協会に加入しています。",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "活用ガイド一覧", href: "/knowledge/" }, { name: "公認会計士の転職" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            公認会計士の転職【2026年】組織内会計士の78%が監査法人から転職・年齢別の年収
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "38,820人", l: "公認会計士の人数（2026年10月末）" },
              { v: "78%", l: "監査法人を経由して転職した組織内会計士" },
              { v: "93%", l: "上場企業・非上場会社に所属（同アンケート）" },
              { v: man(annual(533.7, 1252.5)), l: "公認会計士，税理士の平均年収（当サイト計算）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            日本公認会計士協会の組織内会計士アンケート（2023年）では、企業などで働く公認会計士の<strong>78%が監査法人を経由して転職</strong>しており、所属先は上場企業57%・非上場会社（IPO準備企業を含む）36%でした。
            協会は、合格者の大半が監査法人に就職するため、多くが監査法人を経て組織内会計士に転職していると説明しています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：日本公認会計士協会 <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「組織内会計士が置かれている状況 ～実態調査アンケートより～」</a>・<a href={MEMBERS_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">会員数等調（2026年10月31日現在）</a>、厚生労働省「令和7年 賃金構造基本統計調査」。{CHECKED}に確認しています。
          </p>
        </div>

        <h2>公認会計士の人数の推移</h2>
        <p>
          日本公認会計士協会の会員は公認会計士・外国公認会計士・監査法人で、会計士補と試験合格者などは準会員です。12月末日現在の推移は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年（12月末日）</th>
                <th className="p-3 text-right">会員</th>
                <th className="p-3 text-right rounded-tr-lg">準会員</th>
              </tr>
            </thead>
            <tbody>
              {trend.map((x) => (
                <tr key={x.y} className="border-b border-gray-100">
                  <td className="p-3">{x.y}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.m.toLocaleString("ja-JP")}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a.toLocaleString("ja-JP")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※日本公認会計士協会 <a href={TREND_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「会員・準会員数の推移（10年毎及び最新年度、12月末日現在）」</a>。会員の数には監査法人を含みます。
        </p>
        <p className="mb-10">
          会員は2020年の32,744から2025年の38,031へ、5年で{(((38031 - 32744) / 32744) * 100).toFixed(1)}%増えました（当サイト計算）。2026年10月31日現在の内訳は、公認会計士38,820人・外国公認会計士1人・監査法人300法人で、地域会別では東京会に公認会計士の約{((23094 / 38820) * 100).toFixed(0)}%（23,094人）が所属しています（会員数等調・当サイト計算）。
        </p>

        <h2>監査法人から企業へ転職した公認会計士の実態</h2>
        <p>
          日本公認会計士協会の組織内会計士協議会は、2023年3月1日〜4月30日に組織内会計士ネットワーク正会員を対象にアンケートを行い、281人から回答を得ています。主な結果は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">項目</th>
                <th className="p-3 text-right rounded-tr-lg">結果</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "経歴：監査法人を経由して転職", v: "78%" },
                { k: "所属組織：上場企業／非上場会社（IPO準備を含む）／その他", v: "57%／36%／7%" },
                { k: "職位：役員／管理職", v: "21%／53%" },
                { k: "回答者の年齢：40歳代", v: "44%" },
                { k: "現在の組織での在籍年数：5年以上／10年以上", v: "過半数／30%" },
                { k: "資格による待遇：関係ない／有利", v: "66%／30%" },
                { k: "公認会計士の名称を使用している", v: "71%" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※日本公認会計士協会 組織内会計士協議会 <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「組織内会計士アンケート2023」</a>。組織内会計士ネットワークの正会員が対象で、組織内で働く公認会計士全体の調査ではありません。
        </p>
        <p className="mb-10">
          前の組織を辞めた動機について、協会は「給与や残業、休日等の不満よりも、成長を求めたキャリアアップを志向した方が多い傾向」とまとめています。事業会社で活かしているスキルは、会計知識や経理力に次いで監査経験が多く挙がりました。
          また、別途調査した年収では、退職時より現在の年収が高い傾向がみられた一方、時点の差があるため転職による増減との関連は不明としています。
          協会の会費を所属組織が負担している（一部を含む）人は32%で、残りは自己負担でした。転職先を比べる際は、会費負担や資格手当の有無も確認しておくと安心です。
        </p>

        <h2>公認会計士・税理士の年齢別の年収</h2>
        <p>
          厚生労働省「令和7年 賃金構造基本統計調査」では、職種「公認会計士，税理士」の賃金が公表されています。所定内給与額の12か月分と年間賞与その他特別給与額を合計した年収は、年齢階級別に次のとおりです（男女計・企業規模10人以上）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">年齢階級</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与等</th>
                <th className="p-3 text-right">年収（当サイト計算）</th>
                <th className="p-3 text-right rounded-tr-lg">労働者数</th>
              </tr>
            </thead>
            <tbody>
              {ages.map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.s.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(annual(x.s, x.b))}</td>
                  <td className="p-3 text-right whitespace-nowrap">{(x.n * 10).toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※<a href={WAGE5_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第5表</a>（公認会計士，税理士・男女計・産業計）。労働者数は調査結果から推計された人数（十人単位の表章値を10倍）です。55歳以上は人数が少なく値の振れが大きいため省略しています。
        </p>
        <p className="mb-4">
          企業規模別では、従業員1,000人以上の企業で働く人は平均年齢35.5歳で年間賞与等が多く、10〜99人の企業は平均年齢46.4歳で所定内給与額が高い構成です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">企業規模</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">所定内給与額（月）</th>
                <th className="p-3 text-right">年間賞与等</th>
                <th className="p-3 text-right rounded-tr-lg">年収（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((x, i) => (
                <tr key={x.k} className={`border-b border-gray-100 ${i === 0 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.age}歳</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.s.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b.toFixed(1)}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{man(annual(x.s, x.b))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※<a href={WAGE1_URL} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表</a>（公認会計士，税理士・男女計・産業計）。
        </p>
        <p className="mb-10">
          この職種区分には税理士・会計士補も含まれ、公認会計士だけの値ではありません。また、雇用されている人（一般労働者）が対象のため、独立開業している公認会計士は含まれません。統計上の年収は目安としてご覧ください。
          35〜39歳から40〜44歳にかけて所定内給与額が月10万円以上上がっており（当サイト計算）。ただし、年齢階級ごとの値は在職者全体の平均で、同じ人の年収の伸びを追ったものではありません。
          職種区分の考え方は<Link href="/knowledge/nenshu-1000man-shokugyo/" className="text-teal font-bold hover:underline">年収1,000万円を超える職業</Link>のページでも解説しています。
        </p>

        <h2>公認会計士の転職で使える専門の転職サービス</h2>
        <p className="mb-10">
          会計・経理・税務分野に特化した転職サービスは、
          <Link href="/review/hupro/" className="text-teal font-bold hover:underline">ヒュープロ</Link>・
          <Link href="/review/keiri-jobs/" className="text-teal font-bold hover:underline">経理Jobs</Link>・
          <Link href="/review/zeicari/" className="text-teal font-bold hover:underline">ゼイキャリ</Link>
          の各ページで整理しています。役員・管理職クラスの求人は<Link href="/type/high-class/" className="text-teal font-bold hover:underline">ハイクラス向けの転職エージェント</Link>、コンサルティングファームへの転職は<Link href="/industry/consulting/" className="text-teal font-bold hover:underline">コンサル業界の転職エージェント</Link>も参考にしてください。
        </p>

        <h2>よくある質問</h2>
        <div className="mb-10">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2>出典</h2>
        <p className="text-sm text-text-secondary">いずれも{CHECKED}に当サイトで内容を確認しています。</p>
        <ul className="text-xs text-text-muted space-y-1">
          <li><a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">日本公認会計士協会 組織内会計士協議会「組織内会計士が置かれている状況 ～実態調査アンケートより～ 組織内会計士アンケート2023」</a></li>
          <li><a href={MEMBERS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">日本公認会計士協会「会員数等調」2026年10月31日現在</a></li>
          <li><a href={TREND_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">日本公認会計士協会「会員・準会員数の推移（10年毎及び最新年度、12月末日現在）」</a></li>
          <li><a href="https://jicpa.or.jp/about/outline/" target="_blank" rel="noopener noreferrer" className="hover:underline">日本公認会計士協会「概要／会員数」</a></li>
          <li><a href={WAGE1_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第1表「職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」</a></li>
          <li><a href={WAGE5_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">e-Stat 令和7年 賃金構造基本統計調査 一般労働者 職種 第5表「職種（小分類）、年齢階級別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計）」</a></li>
        </ul>
      </article>
    </>
  );
}
