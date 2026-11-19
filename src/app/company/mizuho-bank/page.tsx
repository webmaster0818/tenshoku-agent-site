import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "みずほ銀行の平均年収は約870万円【2026年3月期・有価証券報告書】前期比5.9%増・持株会社との違い",
  description:
    "みずほ銀行の平均年間給与は8,701千円（約870万円・2026年3月期）で、有価証券報告書では前期比5.9%増と記載されています。同行の有価証券報告書から、平均年齢・勤続年数・従業員数、算定方法の変更、持株会社のみずほFGとの違い、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/mizuho-bank/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "みずほ銀行の平均年収は約870万円【2026年3月期・有価証券報告書】",
    description: "みずほ銀行の有価証券報告書から、平均年収・平均年齢・勤続年数と持株会社との違いを整理しています。",
  },
};

const CHECKED = "2026年11月20日";
const YUHO_2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YFAH.pdf";
const YUHO_2025 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100VYRM.pdf";
const FG_2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YF8Y.pdf";

// 有価証券報告書「従業員の状況」当行の従業員数（各年3月31日現在）
const years = [
  { term: "2025年3月期（第23期）", n: 23827, age: "40.3歳", tenure: "15.8年", pay: 8227, url: YUHO_2025, filed: "2025年6月17日" },
  { term: "2026年3月期（第24期）", n: 23356, age: "40.7歳", tenure: "16.3年", pay: 8701, url: YUHO_2026, filed: "2026年6月19日" },
];
const latest = years[1];

const faqData = [
  {
    q: "みずほ銀行の平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（第24期・2026年6月19日提出）によると、みずほ銀行の平均年間給与は8,701千円（約870万円）です。前事業年度からの増減率は5.9%と記載されています。給与・賞与・基準外賃金の合計で、出向者と海外の現地採用者、海外勤務者を含まない平均です（${CHECKED}にEDINETで確認）。`,
  },
  {
    q: "前期の8,227千円から計算すると5.76%増なのに、なぜ5.9%増なのですか？",
    a: "2026年3月期から、平均年間給与などの算定対象から海外勤務者が除外されました。有価証券報告書の注記によると、増減率5.9%は、前期の平均年間給与をこの新しい定義で再算定した数値と比べたものです。再算定後の前期の金額は開示されていないため、8,227千円と8,701千円は算定範囲が異なる数値として比べる必要があります。",
  },
  {
    q: "みずほフィナンシャルグループの平均年収（11,665千円）とはなぜ違うのですか？",
    a: "みずほフィナンシャルグループの平均年間給与（2026年3月期 11,665千円）は、持株会社単体の従業員2,867人の平均です。銀行の支店・法人営業などで働く人を含む約2.3万人の平均は、みずほ銀行の有価証券報告書の数値（8,701千円）です。持株会社は本社機能を担う組織で、平均年齢も42.5歳と銀行（40.7歳）より高くなっています。",
  },
  {
    q: "三井住友銀行と比べるとどうですか？",
    a: "三井住友銀行の2026年3月期の平均年間給与は9,338千円（平均年齢41歳2か月）で、みずほ銀行（8,701千円・40.7歳）より637千円高い水準です。ただし、両行で平均年間給与の算定対象（海外勤務者の扱いなど）の定義が完全に同じとは限らないため、目安として比べてください。",
  },
  {
    q: "みずほ銀行は中途採用を行っていますか？",
    a: `みずほフィナンシャルグループはキャリア採用のサイト（career-recruit.mizuho-fg.co.jp）を公開しています（${CHECKED}に表示を確認）。募集職種や条件は時期によって変わるため、最新の募集要項をご確認ください。`,
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "みずほ銀行の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            みずほ銀行の平均年収は約870万円【2026年3月期・有価証券報告書】前期比5.9%増・持株会社との違い
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約870万円", l: "平均年間給与（2026年3月期）" },
              { v: latest.age, l: "平均年齢" },
              { v: latest.tenure, l: "平均勤続年数" },
              { v: `${latest.n.toLocaleString("ja-JP")}人`, l: "従業員数（当行）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            みずほ銀行の平均年間給与は<strong>8,701千円（約870万円）</strong>です（2026年3月期・当行の従業員・有価証券報告書の記載で前期比5.9%増）。
            同行は上場していませんが、有価証券報告書をEDINETに提出しており、持株会社とは別に銀行本体の給与水準を一次資料で確認できます。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：株式会社みずほ銀行 <a href={YUHO_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第24期・2026年6月19日提出）</a>「従業員の状況」。{CHECKED}にEDINETで確認しています。
          </p>
        </div>

        <h2>平均年収・平均年齢・勤続年数の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">決算期</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数</th>
              </tr>
            </thead>
            <tbody>
              {years.map((y) => (
                <tr key={y.term} className={`border-b border-gray-100 ${y === latest ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">
                    <a href={y.url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{y.term}</a>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{y.pay.toLocaleString("ja-JP")}千円</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">{y.n.toLocaleString("ja-JP")}人</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書（提出日：{years.map((y) => `${y.term} ${y.filed}`).join("、")}）の「当行の従業員数」。従業員数は行外への出向者を除き、行外から受け入れた出向者と海外の現地採用者を含みます（嘱託・臨時従業員と役付執行役員は含みません）。
          平均年齢・平均勤続年数・平均年間給与は出向者と海外の現地採用者を除いて算出され、2026年3月期からは海外勤務者も算定対象から除外されています。平均年間給与は給与・賞与・基準外賃金の合計です。
        </p>
        <p className="mb-10">
          2つの期の金額の差は474千円（約47万円）ですが、2026年3月期から海外勤務者が算定対象から外れたため、そのまま比べることはできません。
          有価証券報告書は、前期を新しい定義で再算定した数値との比較で「5.9%増」と記載しています。従業員数は1年で471人減り、平均年齢は0.4歳、平均勤続年数は0.5年延びました。
          参考までに、厚生労働省の賃金構造基本統計調査から算出した35〜39歳の一般労働者の平均年収は約513万円です（<Link href="/knowledge/salary-35sai/" className="text-teal font-bold hover:underline">35歳の平均年収</Link>）。
          なお、みずほ銀行は2026年4月1日にみずほリサーチ＆テクノロジーズを吸収合併しており、上の数値は合併前の2026年3月31日現在のものです。
        </p>

        <h2>持株会社（みずほFG）・三井住友銀行との比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社（提出会社単体）</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">従業員数</th>
                <th className="p-3 text-right rounded-tr-lg">平均年齢</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">みずほ銀行</td>
                <td className="p-3 text-right whitespace-nowrap">8,701千円</td>
                <td className="p-3 text-right whitespace-nowrap">23,356人</td>
                <td className="p-3 text-right whitespace-nowrap">40.7歳</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">みずほフィナンシャルグループ（持株会社）</td>
                <td className="p-3 text-right whitespace-nowrap">11,665千円</td>
                <td className="p-3 text-right whitespace-nowrap">2,867人</td>
                <td className="p-3 text-right whitespace-nowrap">42.5歳</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">三井住友銀行（参考）</td>
                <td className="p-3 text-right whitespace-nowrap">9,338千円</td>
                <td className="p-3 text-right whitespace-nowrap">28,030人</td>
                <td className="p-3 text-right whitespace-nowrap">41歳2か月</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※いずれも2026年3月期の有価証券報告書（みずほFGは<a href={FG_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2026年6月19日提出分</a>、三井住友銀行は
          <a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YEQG.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2026年6月19日提出分</a>）。みずほFGの有価証券報告書にも、みずほ銀行の行として同じ数値が掲載されています。
        </p>
        <p className="mb-10">
          持株会社のみずほFGは本社機能を担う約2,900人の組織で、平均年間給与は銀行より2,964千円高く出ます。銀行の支店・法人部門などで働く人の水準としては、約2.3万人の平均である約870万円が実態に近い数値です。
          持株会社の詳細は<Link href="/company/mizuho-fg/" className="text-teal font-bold hover:underline">みずほフィナンシャルグループへの転職ガイド</Link>、
          三井住友銀行は<Link href="/company/smbc/" className="text-teal font-bold hover:underline">三井住友銀行の平均年収</Link>をご覧ください。
        </p>

        <h2>部門別の従業員数</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "リテール・事業法人部門", value: "12,890人" },
                { label: "コーポレート＆インベストメントバンキング部門", value: "1,741人" },
                { label: "グローバルコーポレート＆インベストメントバンキング部門", value: "3,811人" },
                { label: "グローバルマーケッツ部門", value: "749人" },
                { label: "アセットマネジメント部門", value: "106人" },
                { label: "その他", value: "4,059人" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-2/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary text-right">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※2026年3月期の有価証券報告書「当行の従業員数」（2026年3月31日現在・合計23,356人）。部門別の平均年間給与は開示されていません。従業員の半数以上がリテール・事業法人部門に所属しています。
        </p>

        <h2>男女の賃金の差異・女性管理職比率</h2>
        <p className="mb-10">
          同じ有価証券報告書では、女性活躍推進法などに基づく指標として、男性の賃金に対する女性の賃金の割合を全労働者48.1%、正規雇用労働者55.8%、非正規雇用労働者44.2%と開示しています。
          2026年3月期から算出方法が一部見直されており、新しい方法で再計算した前期の値は全労働者47.0%です。管理職に占める女性の割合は課長相当職以上で21.3%、部長相当職で17.0%、男性の育児休業取得率は94%です。
          有価証券報告書では差異の要因として、賃金水準の高い管理職で女性の比率が低いことなどを挙げています。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社みずほ銀行（非上場・みずほフィナンシャルグループの子会社）" },
                { label: "本店", value: "東京都千代田区大手町一丁目5番5号" },
                { label: "従業員組合", value: "みずほフィナンシャルグループ従業員組合（当行に在籍する組合員20,342人・出向者を含む）" },
                { label: "キャリア採用", value: "みずほフィナンシャルグループのキャリア採用サイトで募集職種を公開" },
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
          ※2026年3月期の有価証券報告書から転記。キャリア採用サイト（<a href="https://career-recruit.mizuho-fg.co.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">career-recruit.mizuho-fg.co.jp</a>）は{CHECKED}に表示を確認しています。
        </p>

        <h2>みずほ銀行への転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約870万円は全従業員の平均で、中途入社時の提示額はポジションと経験により個別に決まります。</li>
            <li>メガバンク同士を比べる場合は、持株会社ではなく銀行本体の有価証券報告書の数値を使うと条件がそろいます。</li>
            <li>平均年間給与には賞与と基準外賃金（残業代など）が含まれます。有価証券報告書では、賞与は会社業績と個人の成果に連動すると説明されています。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            金融業界の求人を比較する場合は、<Link href="/review/recruit-agent/" className="text-teal font-bold hover:underline">リクルートエージェント</Link>や
            <Link href="/review/jac/" className="text-teal font-bold hover:underline">JACリクルートメント</Link>など、大手企業の求人を扱う転職エージェントで想定年収のレンジを確認する方法があります。
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
            <Link href="/company/mizuho-fg/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">みずほFG転職ガイド</Link>
            <Link href="/company/smbc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三井住友銀行の平均年収</Link>
            <Link href="/company/kinyu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">金融 年収ランキング</Link>
            <Link href="/company/mufg/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三菱UFJ FG転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
