import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "キオクシアの平均年収は約941万円（キオクシア㈱）・持株会社は約1,306万円【2026年3月期・有価証券報告書】",
  description:
    "キオクシアホールディングスの有価証券報告書（第8期・2026年3月期）から、事業会社キオクシア株式会社の平均年間給与9,415,757円（前期比16.1%増・平均44.0歳）と、持株会社単体の13,066,018円を整理しました。キャリア採用数の推移、離職率、男女の賃金の差異も掲載しています。",
  alternates: { canonical: "/company/kioxia/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "キオクシアの平均年収は約941万円（キオクシア㈱）・持株会社は約1,306万円【2026年3月期】",
    description: "キオクシアホールディングスの有価証券報告書から、キオクシア㈱と持株会社の平均年収・平均年齢・キャリア採用数を整理しています。",
  },
};

const CHECKED = "2026年11月27日";
const YUHO_8 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YJ18.pdf";
const YUHO_7 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100W440.pdf";
const TODOKE = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100UU02.pdf";
const PERF = "https://www.kioxia-holdings.com/ja-jp/sustainability/performance-data.html";
const LISTING = "https://www2.jpx.co.jp/disc/285A0/140120241217539866.pdf";
const link = "text-teal font-bold hover:underline";

const career = [
  { y: "2019年度", n: "113人" },
  { y: "2020年度", n: "275人" },
  { y: "2021年度", n: "280人" },
  { y: "2022年度", n: "282人" },
  { y: "2023年度", n: "25人" },
  { y: "2024年度", n: "63人" },
  { y: "2025年度", n: "208人" },
];

const faqData = [
  {
    q: "キオクシアの平均年収はいくらですか？",
    a: "キオクシアホールディングスの有価証券報告書（第8期・2026年6月24日提出）では、従業員数が最も多いキオクシア株式会社について、平均年間給与9,415,757円（約941万円）、平均年齢44.0歳、平均勤続年数18.5年と記載されています（2026年3月31日現在・従業員10,156名）。持株会社のキオクシアホールディングス単体は13,066,018円（約1,306万円・140名）です。",
  },
  {
    q: "キオクシアの年収は上がっていますか？",
    a: "第8期の有価証券報告書では、平均年間給与の対前事業年度増減率がキオクシア株式会社で16.1%、持株会社で13.8%と記載されています。持株会社単体の推移は約1,045万円（2024年10月末・有価証券届出書）→約1,148万円（2025年3月期）→約1,306万円（2026年3月期）です。平均年間給与には賞与と基準外賃金が含まれるため、業績により変動します。",
  },
  {
    q: "キオクシアは中途採用を行っていますか？",
    a: "行っています。有価証券報告書では「即戦力確保としてはキャリア採用を通年実施」と記載され、キオクシア株式会社のキャリア採用数は2025年度に208人でした。2023年度は25人、2024年度は63人で、年度による増減が大きい点が特徴です。",
  },
  {
    q: "キオクシアの離職率はどのくらいですか？",
    a: "会社公表のパフォーマンス・データでは、キオクシアグループの総離職率は2025年度3.68%、自己都合離職率は2.86%です（総離職率＝年度の退職者数÷各月末時点の正規従業員数の平均）。国内グループ会社の総離職率は2.69%です。",
  },
  {
    q: "キオクシアはいつ上場しましたか？",
    a: "キオクシアホールディングスは2024年12月18日に東京証券取引所プライム市場に上場しました（証券コード285A）。東芝のメモリ事業を分社化して設立された会社で、メモリ事業の単一セグメントです。",
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "キオクシアの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            キオクシアの平均年収は約941万円（キオクシア㈱）・持株会社は約1,306万円【2026年3月期・有価証券報告書】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約941万円", l: "キオクシア㈱の平均年間給与" },
              { v: "+16.1%", l: "キオクシア㈱の前期比" },
              { v: "44.0歳", l: "キオクシア㈱の平均年齢" },
              { v: "約1,306万円", l: "持株会社単体の平均年間給与" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            フラッシュメモリを製造するキオクシア株式会社の平均年間給与は<strong>9,415,757円（約941万円）</strong>です（2026年3月期・従業員10,156名・平均44.0歳）。
            キオクシア株式会社は有価証券報告書を提出していませんが、親会社のキオクシアホールディングスの第8期有価証券報告書から「提出会社及び最大人員会社の状況」として掲載されるようになりました。前期比は16.1%の増加です。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：キオクシアホールディングス株式会社 <a href={YUHO_8} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第8期・2026年6月24日提出）</a>「従業員の状況」。{CHECKED}にEDINETで確認しています。
          </p>
        </div>

        <h2>キオクシア㈱と持株会社の比較（2026年3月31日現在）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">前期比</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">キオクシア㈱（最大人員会社）</td>
                <td className="p-3 text-right whitespace-nowrap">9,415,757円</td>
                <td className="p-3 text-right whitespace-nowrap">+16.1%</td>
                <td className="p-3 text-right whitespace-nowrap">44.0歳</td>
                <td className="p-3 text-right whitespace-nowrap">18.5年</td>
                <td className="p-3 text-right whitespace-nowrap">10,156名</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">キオクシアHD（提出会社）</td>
                <td className="p-3 text-right whitespace-nowrap">13,066,018円</td>
                <td className="p-3 text-right whitespace-nowrap">+13.8%</td>
                <td className="p-3 text-right whitespace-nowrap">46.2歳</td>
                <td className="p-3 text-right whitespace-nowrap">13.9年</td>
                <td className="p-3 text-right whitespace-nowrap">140名</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※第8期有価証券報告書「(2) 提出会社及び最大人員会社の状況」。従業員数は正規従業員と1年以上働く（見込みの）有期雇用の従業員で、社外への出向者を除き社外からの出向者を含みます。執行役員は含みません。
          平均年間給与には賞与及び基準外賃金が含まれます。平均勤続年数は、株式会社東芝から転籍した従業員について東芝グループでの勤続年数を通算しています。臨時従業員は従業員数の10%未満のため記載が省略されています。
        </p>
        <p className="mb-10">
          キオクシア株式会社の平均勤続年数18.5年は、東芝時代からの勤続を通算した値です。平均年齢44.0歳と合わせると、長く勤める技術者が多い構成であることが分かります。
          持株会社の140名は、グループの経営戦略・資金調達・リスク管理などを担う人員で、工場や研究開発の現場で働く人の水準としてはキオクシア株式会社の値が参考になります。
          なお、キオクシア株式会社の前期の金額は有価証券報告書に記載されておらず、増減率（16.1%）のみが記載されています。
        </p>

        <h2>持株会社の平均年収の推移</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">時点</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数</th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: "2024年10月31日（有価証券届出書）", u: TODOKE, pay: "10,453,383円", age: "46.3歳", ten: "14.2年", n: "123名" },
                { t: "2025年3月31日（第7期）", u: YUHO_7, pay: "11,485,500円", age: "46.5歳", ten: "14.5年", n: "127名" },
                { t: "2026年3月31日（第8期）", u: YUHO_8, pay: "13,066,018円", age: "46.2歳", ten: "13.9年", n: "140名" },
              ].map((r) => (
                <tr key={r.t} className={`border-b border-gray-100 ${r.u === YUHO_8 ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3"><a href={r.u} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{r.t}</a></td>
                  <td className="p-3 text-right whitespace-nowrap">{r.pay}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.ten}</td>
                  <td className="p-3 text-right whitespace-nowrap">{r.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">※有価証券届出書は上場時（2024年11月22日提出の訂正届出書）、第7期は2025年6月26日提出、第8期は2026年6月24日提出の各書類の提出会社の状況です。</p>
        <p className="mb-10">
          持株会社単体の平均年間給与は、上場前の約1,045万円から約1,306万円へ、約1年5か月で約261万円増えています（当サイト計算）。
          同じ期間の業績は、連結売上収益が1兆7,064億円（2025年3月期）から2兆3,376億円（2026年3月期）に増加しており（IFRS）、賞与を含む給与の増加はこの業績の伸びと時期が重なります。
        </p>

        <h2>キャリア採用数の推移（キオクシア株式会社）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                {career.map((c, i) => (
                  <th key={c.y} className={`p-3 text-right ${i === 0 ? "rounded-tl-lg" : ""} ${i === career.length - 1 ? "rounded-tr-lg" : ""}`}>{c.y}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                {career.map((c) => (
                  <td key={c.y} className="p-3 text-right whitespace-nowrap">{c.n}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※2020〜2025年度は第8期有価証券報告書「（人材）」、2019年度は第7期有価証券報告書から転記。キオクシアホールディングスは新卒採用を行っていないと記載されています。
        </p>
        <p className="mb-10">
          キャリア採用は2020〜2022年度に年280人前後でしたが、2023年度は25人、2024年度は63人に減り、2025年度は208人に戻りました。
          有価証券報告書では「即戦力確保としてはキャリア採用を通年実施し、リファラル・アルムナイ採用も」行うと記載されています。採用数は年度によって大きく変わるため、応募を考える場合は採用ページで最新の募集職種を確認することをおすすめします。
        </p>

        <h2>離職率・男女の賃金の差異・女性管理職比率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">指標</th>
                <th className="p-3 text-right">2024年度</th>
                <th className="p-3 text-right rounded-tr-lg">2025年度</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "総離職率（キオクシアグループ）", a: "4.1%", b: "3.68%" },
                { k: "自己都合離職率（キオクシアグループ）", a: "3.46%", b: "2.86%" },
                { k: "管理職に占める女性労働者の割合（キオクシア㈱）", a: "4.9%", b: "5.1%" },
                { k: "男性労働者の育児休業等取得率（キオクシア㈱）", a: "54.3%", b: "69.8%" },
                { k: "男女の賃金の差異・全従業員（キオクシア㈱）", a: "76.3%", b: "77.7%" },
              ].map((x) => (
                <tr key={x.k} className="border-b border-gray-100">
                  <td className="p-3">{x.k}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.a}</td>
                  <td className="p-3 text-right whitespace-nowrap">{x.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-10">
          ※離職率は会社公表の<a href={PERF} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">パフォーマンス・データ（社会）</a>（総離職率＝年度の退職者数÷各月末時点の正規従業員数の平均）。女性管理職比率・育児休業等取得率・賃金の差異は第7期・第8期有価証券報告書の連結子会社の指標です（賃金の差異は男性の賃金に対する女性の賃金の割合）。{CHECKED}確認。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "キオクシアホールディングス株式会社（東証プライム・証券コード285A・持株会社）" },
                { label: "上場日", value: "2024年12月18日" },
                { label: "主な子会社", value: "キオクシア株式会社（フラッシュメモリ・SSDの開発・製造・販売）、キオクシア岩手株式会社など（連結子会社22社）" },
                { label: "連結従業員数", value: "15,218名（2026年3月31日現在）" },
                { label: "連結売上収益", value: "2兆3,376億円（2026年3月期・IFRS）" },
                { label: "セグメント", value: "メモリ事業の単一セグメント" },
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
          ※第8期有価証券報告書から転記。上場日は同書の沿革と、会社の適時開示「<a href={LISTING} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">東京証券取引所プライム市場への上場のお知らせ</a>」（2024年12月18日）で確認しています（{CHECKED}）。
        </p>

        <h2>キオクシアへの転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約941万円はキオクシア株式会社の従業員10,156名の平均で、中途入社時の提示額は職種・等級・経験により個別に決まります。</li>
            <li>平均年間給与には賞与が含まれます。メモリ市況によって業績が大きく変わる業界のため、賞与の算定方法は選考の過程で確認すると安心です。</li>
            <li>キャリア採用数は年度によって25人から282人まで変動しています。募集が多い時期かどうかで、選べるポジションの数が変わります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            半導体・電機メーカーの技術職を比較する場合は、<Link href="/review/recruit-agent/" className={link}>リクルートエージェント</Link>など、大手メーカーの求人を扱う転職エージェントで想定年収のレンジを確認する方法があります。
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
            <Link href="/company/advantest/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">アドバンテストの転職ガイド</Link>
            <Link href="/company/disco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ディスコの転職ガイド</Link>
            <Link href="/company/supermarket-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スーパーの売上高ランキング</Link>
            <Link href="/knowledge/nenshu-700man-shokugyo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">年収700万円の職業</Link>
            <Link href="/knowledge/tedori-900man/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">年収900万円の手取り</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
