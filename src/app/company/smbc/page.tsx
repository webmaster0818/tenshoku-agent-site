import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "三井住友銀行の平均年収は約934万円【2026年3月期・有価証券報告書】前期比4.73%増・持株会社との違い",
  description:
    "三井住友銀行の平均年間給与は9,338千円（約934万円・2026年3月期・提出会社）で、前期から4.73%増えました。同行がEDINETに提出した有価証券報告書から、平均年齢・平均勤続年数・従業員数の推移、持株会社の三井住友フィナンシャルグループとの違い、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/smbc/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "三井住友銀行の平均年収は約934万円【2026年3月期・有価証券報告書】",
    description: "三井住友銀行の有価証券報告書から、平均年収・平均年齢・勤続年数の推移を整理しています。",
  },
};

const CHECKED = "2026年11月18日";
const YUHO_2026 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YEQG.pdf";
const YUHO_2025 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100W0X8.pdf";

// 有価証券報告書「従業員の状況」当行の従業員数（各年3月31日現在）
const years = [
  { term: "2025年3月期", n: 28063, age: "40歳10か月", tenure: "17年3か月", pay: 8916, url: YUHO_2025, filed: "2025年6月20日" },
  { term: "2026年3月期", n: 28030, age: "41歳2か月", tenure: "17年6か月", pay: 9338, url: YUHO_2026, filed: "2026年6月19日" },
];
const latest = years[1];

const faqData = [
  {
    q: "三井住友銀行の平均年収はいくらですか？",
    a: `2026年3月期の有価証券報告書（2026年6月19日提出）によると、三井住友銀行の平均年間給与は9,338千円（約934万円）です。前事業年度からの増減率は4.73%と記載されています。賞与及び基準外賃金を含み、海外の現地採用者を含まない平均です（${CHECKED}にEDINETで確認）。`,
  },
  {
    q: "三井住友フィナンシャルグループの平均年収（約1,180万円）とはなぜ違うのですか？",
    a: "三井住友フィナンシャルグループの平均年間給与（2026年3月期 11,803千円）は、持株会社単体の従業員1,678人の平均です。同社の有価証券報告書の注記では、従業員は全員が三井住友銀行等からの出向者とされています。銀行の支店・法人営業などで働く人を含む約2.8万人の平均は、三井住友銀行の有価証券報告書の数値（約934万円）です。",
  },
  {
    q: "三井住友銀行の平均年齢・平均勤続年数はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均年齢は41歳2か月、平均勤続年数は17年6か月です（当行の従業員数28,030人）。",
  },
  {
    q: "三井住友銀行は中途採用を行っていますか？",
    a: `はい。三井住友銀行はキャリア採用情報のサイト（www.smbc-careers.com/）を公開しています（${CHECKED}確認）。募集職種や条件は時期によって変わるため、最新の募集要項をご確認ください。`,
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "三井住友銀行の平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            三井住友銀行の平均年収は約934万円【2026年3月期・有価証券報告書】前期比4.73%増・持株会社との違い
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約934万円", l: "平均年間給与（2026年3月期）" },
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
            三井住友銀行の平均年間給与は<strong>9,338千円（約934万円）</strong>です（2026年3月期・当行の従業員・前期比4.73%増）。
            同行は上場していませんが、金融商品取引法第24条第1項に基づく有価証券報告書をEDINETに提出しており、銀行本体の給与水準を一次資料で確認できます。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：株式会社三井住友銀行 <a href={YUHO_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第23期・2026年6月19日提出）</a>「従業員の状況」。{CHECKED}にEDINETで確認しています。
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
          ※各期の有価証券報告書（提出日：{years.map((y) => `${y.term} ${y.filed}`).join("、")}）の「当行の従業員数」。従業員数は就業者数で、海外の現地採用者を含み、嘱託及び臨時従業員と取締役を兼務しない執行役員を含みません。
          平均年齢・平均勤続年数・平均年間給与は海外の現地採用者を含まない値で、平均年間給与は賞与及び基準外賃金を含みます。
        </p>
        <p className="mb-10">
          平均年間給与は1年で422千円（約42万円）増えました。平均年齢は4か月、平均勤続年数は3か月延びていますが、従業員数はほぼ同じです。
          平均値は役職や職種を合わせた全従業員の平均であり、個人の年収は職種・役職・年次によって異なります。
        </p>

        <h2>持株会社（三井住友FG）の平均年収との違い</h2>
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
                <td className="p-3">三井住友銀行</td>
                <td className="p-3 text-right whitespace-nowrap">9,338千円</td>
                <td className="p-3 text-right whitespace-nowrap">28,030人</td>
                <td className="p-3 text-right whitespace-nowrap">41歳2か月</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">三井住友フィナンシャルグループ（持株会社）</td>
                <td className="p-3 text-right whitespace-nowrap">11,803千円</td>
                <td className="p-3 text-right whitespace-nowrap">1,678人</td>
                <td className="p-3 text-right whitespace-nowrap">39歳4か月</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※いずれも2026年3月期の有価証券報告書（三井住友FGは<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YERK.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2026年6月19日提出分</a>）。
        </p>
        <p className="mb-10">
          三井住友FGの有価証券報告書の注記によると、持株会社の従業員は全員が三井住友銀行等からの出向者で、平均年間給与は3月末の在籍者に三井住友銀行等が支給した給与の合計です。
          持株会社は本社機能を担う少人数の組織のため、銀行全体の水準より高く出ます。銀行で働く人の水準としては、約2.8万人の平均である約934万円が実態に近い数値です。
          持株会社の詳細は<Link href="/company/smfg/" className="text-teal font-bold hover:underline">三井住友フィナンシャルグループへの転職ガイド</Link>をご覧ください。
        </p>

        <h2>男女の賃金の差異</h2>
        <p className="mb-10">
          同じ有価証券報告書では、女性活躍推進法に基づく指標として、男性の平均年間賃金に対する女性の平均年間賃金の割合を全労働者46.9%、正規雇用労働者53.5%と開示しています。
          管理職に占める女性労働者の割合は22.8%、プロフェッショナル職の育児休業取得率は男性97.8%・女性99.9%です（2026年3月31日現在）。
          平均年間給与は男女・職種を合わせた平均のため、応募する職種の給与レンジは募集要項や面接で確認してください。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社三井住友銀行（非上場・三井住友フィナンシャルグループの子会社）" },
                { label: "本店", value: "東京都千代田区丸の内一丁目1番2号" },
                { label: "従業員組合", value: "三井住友銀行従業員組合（組合員19,070人）" },
                { label: "キャリア採用", value: "キャリア採用情報のサイトで募集職種を公開" },
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
          ※2026年3月期の有価証券報告書から転記。キャリア採用情報のサイト（<a href="https://www.smbc-careers.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">www.smbc-careers.com</a>）は{CHECKED}に表示を確認しています。
        </p>

        <h2>三井住友銀行への転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約934万円は全従業員の平均で、中途入社時の提示額はポジションと経験により個別に決まります。</li>
            <li>メガバンク同士を比べる場合は、持株会社ではなく銀行本体の有価証券報告書の数値を使うと条件がそろいます。</li>
            <li>平均年間給与には賞与と基準外賃金（残業代など）が含まれます。</li>
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
            <Link href="/company/smfg/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三井住友FG転職ガイド</Link>
            <Link href="/company/tokio-marine-nichido/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京海上日動の平均年収</Link>
            <Link href="/company/kinyu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">金融 年収ランキング</Link>
            <Link href="/company/mufg/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三菱UFJ FG転職ガイド</Link>
            <Link href="/company/mizuho-fg/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">みずほFG転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
