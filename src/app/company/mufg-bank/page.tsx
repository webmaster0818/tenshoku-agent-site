import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "三菱UFJ銀行の平均年収は約914万円【2026年3月期・有価証券報告書】2年で約101万円増・持株会社との違い",
  description:
    "三菱UFJ銀行の平均年間給与は9,143千円（約914万円・2026年3月期）で、前期比6.8%増です。同行の有価証券報告書3期分から、平均年齢・勤続年数・従業員数の推移、部門別の従業員数、持株会社の三菱UFJフィナンシャル・グループや他のメガバンクとの違い、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/mufg-bank/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "三菱UFJ銀行の平均年収は約914万円【2026年3月期・有価証券報告書】",
    description: "三菱UFJ銀行の有価証券報告書から、平均年収・平均年齢・勤続年数と持株会社との違いを整理しています。",
  },
};

const CHECKED = "2026年11月21日";
const YUHO_2026 = "https://www.mufg.jp/dam/ir/report/security_report/pdf/yu_bk26.pdf";
const YUHO_2025 = "https://www.mufg.jp/dam/ir/report/security_report/pdf/yu_bk25.pdf";
const YUHO_2024 = "https://www.mufg.jp/dam/ir/report/security_report/pdf/yu_bk24.pdf";
const IR_PAGE = "https://www.mufg.jp/ir/report/security_report/2026/index.html";
const FG_2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YJQO.pdf";
const CAREER = "https://www.mysite.bk.mufg.jp/career/recruit/index.html";

// 有価証券報告書「従業員の状況」当行の従業員数（各年3月31日現在）
const years = [
  { term: "2024年3月期（第19期）", n: 31756, age: "39.6歳", tenure: "15.7年", pay: 8128, url: YUHO_2024, filed: "2024年6月25日" },
  { term: "2025年3月期（第20期）", n: 31427, age: "40.0歳", tenure: "15.9年", pay: 8560, url: YUHO_2025, filed: "2025年6月25日" },
  { term: "2026年3月期（第21期）", n: 31691, age: "40.1歳", tenure: "15.8年", pay: 9143, url: YUHO_2026, filed: "2026年6月24日" },
];
const latest = years[2];
const rate = (a: number, b: number) => `${(((a - b) / b) * 100).toFixed(1)}%`;

const faqData = [
  {
    q: "三菱UFJ銀行の平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（第21期・2026年6月24日提出）によると、三菱UFJ銀行の平均年間給与は9,143千円（約914万円）です。前事業年度からの増減率は6.8%と記載されています。賞与と基準外賃金を含み、海外の現地採用者と他社から当行への出向者を含まない平均です（${CHECKED}に確認）。`,
  },
  {
    q: "三菱UFJ銀行の平均年収はどのくらい増えていますか？",
    a: `有価証券報告書の平均年間給与は、2024年3月期8,128千円、2025年3月期8,560千円、2026年3月期9,143千円です。2年間で1,015千円（約101万円・${rate(9143, 8128)}）増えました。3期とも、算定対象から海外の現地採用者と他社からの出向者を除く同じ注記で開示されています。`,
  },
  {
    q: "三菱UFJフィナンシャル・グループの平均年収（11,702千円）とはなぜ違うのですか？",
    a: "三菱UFJフィナンシャル・グループ（持株会社）の平均年間給与は、持株会社単体の従業員3,637人の平均です。同社の有価証券報告書の注記によると、この従業員は海外の現地採用者と、三菱UFJ銀行・三菱UFJ信託銀行・三菱UFJモルガン・スタンレー証券などからの出向者です。支店や法人営業を含む銀行の約3.2万人の平均は、三菱UFJ銀行の有価証券報告書の数値（9,143千円）です。",
  },
  {
    q: "三井住友銀行・みずほ銀行と比べるとどうですか？",
    a: "2026年3月期の有価証券報告書では、三井住友銀行が9,338千円、三菱UFJ銀行が9,143千円、みずほ銀行が8,701千円です。三菱UFJ銀行は三井住友銀行より195千円低く、みずほ銀行より442千円高い水準です。ただし、算定対象の定義（みずほ銀行は2026年3月期から海外勤務者を除外など）が各行で異なるため、目安として比べてください。",
  },
  {
    q: "三菱UFJ銀行は中途採用を行っていますか？",
    a: `三菱UFJ銀行はキャリア採用のサイト（mysite.bk.mufg.jp/career/recruit/）を公開しています（${CHECKED}に表示を確認）。募集職種や条件は時期によって変わるため、最新の募集要項をご確認ください。`,
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "三菱UFJ銀行の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            三菱UFJ銀行の平均年収は約914万円【2026年3月期・有価証券報告書】2年で約101万円増・持株会社との違い
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約914万円", l: "平均年間給与（2026年3月期）" },
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
            三菱UFJ銀行の平均年間給与は<strong>9,143千円（約914万円）</strong>です（2026年3月期・当行の従業員・前期比6.8%増）。
            同行は上場していませんが、金融商品取引法第24条第1項に基づく有価証券報告書を提出しており、持株会社とは別に銀行本体の給与水準を一次資料で確認できます。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：株式会社三菱UFJ銀行 <a href={YUHO_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第21期・2026年6月24日提出）</a>「従業員の状況」。
            三菱UFJフィナンシャル・グループの<a href={IR_PAGE} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書の掲載ページ</a>から取得し、{CHECKED}に確認しています。
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
          ※各期の有価証券報告書（提出日：{years.map((y) => `${y.term} ${y.filed}`).join("、")}）の「当行の従業員数」。従業員数は当行から他社への出向者を除き、他社から当行への出向者と海外の現地採用者を含みます（嘱託・臨時従業員と執行役員は含みません）。
          平均年齢・平均勤続年数・平均年間給与は、海外の現地採用者と他社から当行への出向者を除いて算出されています。平均年間給与は賞与と基準外賃金を含みます。
        </p>
        <p className="mb-10">
          平均年間給与は2024年3月期から2025年3月期に432千円（{rate(8560, 8128)}）、2025年3月期から2026年3月期に583千円（{rate(9143, 8560)}）増えました。
          この間、平均年齢は39.6歳から40.1歳、平均勤続年数は15.7年から15.8年とほぼ変わっておらず、従業員の構成が大きく変わらない中で給与水準が上がっています。
          参考までに、厚生労働省の賃金構造基本統計調査から算出した40〜44歳の一般労働者の平均年収は<Link href="/knowledge/salary-40sai/" className="text-teal font-bold hover:underline">40歳の平均年収</Link>のページに掲載しています。
        </p>

        <h2>持株会社・他のメガバンクとの比較</h2>
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
              {[
                { c: "三菱UFJ銀行", p: "9,143千円", n: "31,691人", a: "40.1歳", hl: true },
                { c: "三菱UFJフィナンシャル・グループ（持株会社）", p: "11,702千円", n: "3,637人", a: "40.3歳" },
                { c: "三菱UFJ信託銀行（参考）", p: "9,784千円", n: "6,431人", a: "43.5歳" },
                { c: "三井住友銀行（参考）", p: "9,338千円", n: "28,030人", a: "41歳2か月" },
                { c: "みずほ銀行（参考）", p: "8,701千円", n: "23,356人", a: "40.7歳" },
              ].map((x) => (
                <tr key={x.c} className={`border-b border-gray-100 ${x.hl ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{x.c}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.p}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.n}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※いずれも2026年3月期の有価証券報告書。三菱UFJフィナンシャル・グループと三菱UFJ信託銀行の値は<a href={FG_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三菱UFJフィナンシャル・グループの有価証券報告書（2026年6月24日提出）</a>の「従業員の状況」、
          三井住友銀行は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YEQG.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同行の有価証券報告書（2026年6月19日提出）</a>、
          みずほ銀行は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YFAH.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">同行の有価証券報告書（2026年6月19日提出）</a>から転記しています。算定対象の定義は各社で異なります。
        </p>
        <p className="mb-10">
          持株会社の三菱UFJフィナンシャル・グループの従業員は、海外の現地採用者とグループ各社からの出向者で構成されており、平均年間給与は銀行より2,559千円高く出ます。
          持株会社の平均勤続年数（13.5年）には出向元での勤続年数が加算されています。銀行の支店・法人部門などで働く人の水準としては、約3.2万人の平均である約914万円が実態に近い数値です。
          持株会社の詳細は<Link href="/company/mufg/" className="text-teal font-bold hover:underline">三菱UFJフィナンシャル・グループへの転職ガイド</Link>、他行は
          <Link href="/company/smbc/" className="text-teal font-bold hover:underline">三井住友銀行の平均年収</Link>・
          <Link href="/company/mizuho-bank/" className="text-teal font-bold hover:underline">みずほ銀行の平均年収</Link>をご覧ください。
        </p>

        <h2>部門別の従業員数</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "法人・ウェルスマネジメント部門", value: "12,237人" },
                { label: "その他部門", value: "8,986人" },
                { label: "コーポレートバンキング部門", value: "3,319人" },
                { label: "リテール・デジタル部門", value: "3,185人" },
                { label: "グローバルCIB部門", value: "2,941人" },
                { label: "市場部門", value: "1,019人" },
                { label: "グローバルコマーシャルバンキング部門", value: "4人" },
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
          ※2026年3月期の有価証券報告書「当行の従業員数」（2026年3月31日現在・合計31,691人）を人数の多い順に並べています。部門別の平均年間給与は開示されていません。
          グローバルコマーシャルバンキング部門は当行単体では4人ですが、連結会社（海外の現地採用者を含む）では73,806人が所属しています。
        </p>

        <h2>男女の賃金の差異とコース区分の廃止</h2>
        <p className="mb-10">
          同じ有価証券報告書では、女性活躍推進法などに基づく指標として、男性の賃金に対する女性の賃金の割合を全労働者53.2%、正規雇用労働者54.2%、非正規雇用労働者55.0%と開示しています。
          管理職に占める女性の割合は30.0%、男性の育児休業等の取得率（育児・介護休業法に基づく算出）は100.6%です。
          有価証券報告書では差異の要因として、コースによる賃金と男女比率の差、上位職における女性の比率の低さ、男女間の労働時間の差を挙げ、
          2025年4月にコース区分（いわゆる総合職と一般職の区分）を廃止したと記載しています。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社三菱UFJ銀行（非上場・三菱UFJフィナンシャル・グループの子会社）" },
                { label: "本店", value: "東京都千代田区丸の内一丁目4番5号" },
                { label: "従業員組合", value: "三菱UFJ銀行従業員組合（組合員25,641人）" },
                { label: "連結従業員数", value: "122,102人（海外の現地採用者を含む）" },
                { label: "キャリア採用", value: "三菱UFJ銀行のキャリア採用サイトで募集職種を公開" },
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
          ※2026年3月期の有価証券報告書から転記（2026年3月31日現在）。キャリア採用サイト（<a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">mysite.bk.mufg.jp/career/recruit/</a>）は{CHECKED}に表示を確認しています。
        </p>

        <h2>三菱UFJ銀行への転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約914万円は全従業員の平均で、中途入社時の提示額はポジションと経験により個別に決まります。</li>
            <li>メガバンク同士を比べる場合は、持株会社ではなく銀行本体の有価証券報告書の数値を使うと条件がそろいます。</li>
            <li>平均年間給与には賞与と基準外賃金（残業代など）が含まれます。</li>
            <li>非上場の事業会社でも、自社または親会社の有価証券報告書で平均年収を確認できる場合があります（例：<Link href="/company/fujifilm-bi/" className="text-teal hover:underline">富士フイルムビジネスイノベーション</Link>は親会社の有価証券報告書で開示）。</li>
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
            <Link href="/company/mufg/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三菱UFJ FG転職ガイド</Link>
            <Link href="/company/smbc/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三井住友銀行の平均年収</Link>
            <Link href="/company/mizuho-bank/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">みずほ銀行の平均年収</Link>
            <Link href="/company/kinyu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">金融 年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
