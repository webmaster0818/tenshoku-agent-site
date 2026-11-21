import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "富士フイルムビジネスイノベーションの平均年収は約1,059万円【2026年3月期・有価証券報告書】販売会社ジャパンとの違い",
  description:
    "富士フイルムビジネスイノベーション（旧 富士ゼロックス）の平均年間給与は10,590,463円（約1,059万円・2026年3月期・前期比5.32%増）です。親会社の有価証券報告書から、平均年齢・勤続年数、販売会社ジャパンや富士フイルムとの違い、男女の賃金の差異を整理しています。",
  alternates: { canonical: "/company/fujifilm-bi/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "富士フイルムビジネスイノベーションの平均年収は約1,059万円【2026年3月期】",
    description: "親会社の有価証券報告書から、富士フイルムビジネスイノベーションの平均年収・平均年齢・勤続年数とグループ各社との違いを整理しています。",
  },
};

const CHECKED = "2026年11月21日";
const YUHO_2026 = "https://ir.fujifilm.com/ja/investors/ir-news/auto_20260624154900_S100YIBH/pdfFile.pdf";
const OVERVIEW = "https://www.fujifilm.com/fb/ja/about/corporate-fb/overview";
const CAREERS = "https://www.fujifilm.com/fb/ja/about/careers";

// 富士フイルムホールディングス 有価証券報告書（第130期）「従業員の状況」②提出会社の状況・③最大人員会社等の状況（2026年3月31日現在）
const companies = [
  { name: "富士フイルムビジネスイノベーション㈱", n: 3875, temp: 658, age: "44.2歳", tenure: "18.9年", pay: 10590463, chg: "5.32%", hl: true },
  { name: "富士フイルムビジネスイノベーションジャパン㈱", n: 9591, temp: 1419, age: "43.2歳", tenure: "20.2年", pay: 7893833, chg: "6.16%" },
  { name: "富士フイルム㈱", n: 4338, temp: 491, age: "42.9歳", tenure: "17.3年", pay: 10396228, chg: "3.76%" },
  { name: "富士フイルムホールディングス㈱（持株会社）", n: 1198, temp: 99, age: "43.3歳", tenure: "17.2年", pay: 10855077, chg: "△3.45%" },
];
const bi = companies[0];
const jp = companies[1];
const manYen = (n: number) => `約${(Math.round(n / 10000)).toLocaleString("ja-JP")}万円`;

const faqData = [
  {
    q: "富士フイルムビジネスイノベーションの平均年収はいくらですか？",
    a: `親会社の富士フイルムホールディングスが2026年6月24日に提出した有価証券報告書（第130期）の「最大人員会社等の状況」によると、富士フイルムビジネスイノベーションの平均年間給与は10,590,463円（約1,059万円）で、前事業年度から5.32%増えています（2026年3月31日現在・賞与及び基準外賃金を含む）。同社は上場しておらず、自社では有価証券報告書を提出していません（${CHECKED}に確認）。`,
  },
  {
    q: "富士フイルムビジネスイノベーションジャパンとはどう違いますか？",
    a: "富士フイルムビジネスイノベーションジャパンは、オフィス用複合機・プリンター、ソリューション・サービス等の販売を行う子会社です（同有価証券報告書「関係会社の状況」）。平均年間給与は7,893,833円（約789万円）、従業員数は9,591名で、富士フイルムビジネスイノベーション（約1,059万円・3,875名）より約270万円低い水準です。求人に応募する際は、どちらの会社の募集かを確認してください。",
  },
  {
    q: "富士ゼロックスと同じ会社ですか？",
    a: "はい。富士フイルムホールディングスの有価証券報告書の沿革によると、2021年4月に富士ゼロックス株式会社の社名が富士フイルムビジネスイノベーション株式会社に変更されました。",
  },
  {
    q: "従業員数が会社概要（5,946名）と有価証券報告書（3,875名）で違うのはなぜですか？",
    a: "公式サイトの会社概要は「単独正社員数 5,946名（2026年3月31日現在）」、有価証券報告書は「就業人員 3,875名」と、数え方の定義が異なる数値です。両者の差の内訳は公表されていません。平均年間給与は有価証券報告書の就業人員3,875名についての値です。",
  },
  {
    q: "富士フイルムビジネスイノベーションは中途採用を行っていますか？",
    a: `公式サイトの採用情報ページでは、富士フイルムビジネスイノベーションと富士フイルムビジネスイノベーションジャパンの採用として、新卒採用・キャリア採用・カムバック採用・障がい者採用の案内を掲載しています（${CHECKED}に表示を確認）。募集職種や条件は時期によって変わるため、最新の募集要項をご確認ください。`,
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "富士フイルムビジネスイノベーションの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            富士フイルムビジネスイノベーションの平均年収は約1,059万円【2026年3月期・有価証券報告書】販売会社ジャパンとの違い
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約1,059万円", l: "平均年間給与（2026年3月期）" },
              { v: bi.age, l: "平均年齢" },
              { v: bi.tenure, l: "平均勤続年数" },
              { v: `${bi.n.toLocaleString("ja-JP")}名`, l: "従業員数（就業人員）" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            富士フイルムビジネスイノベーション（旧 富士ゼロックス）の平均年間給与は<strong>10,590,463円（約1,059万円）</strong>です（2026年3月31日現在・前期比5.32%増）。
            同社は非上場で自社の有価証券報告書は提出していませんが、親会社の富士フイルムホールディングスが有価証券報告書の「最大人員会社等の状況」で、主要子会社の平均年間給与を開示しています。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：富士フイルムホールディングス株式会社 <a href={YUHO_2026} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第130期・2026年6月24日提出）</a>「従業員の状況 ③最大人員会社等の状況」。{CHECKED}に確認しています。
          </p>
        </div>

        <h2>グループ主要会社の平均年収の比較</h2>
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
              {companies.map((c) => (
                <tr key={c.name} className={`border-b border-gray-100 ${c.hl ? "bg-teal/5 font-bold text-navy" : ""}`}>
                  <td className="p-3">{c.name}</td>
                  <td className="p-3 text-right whitespace-nowrap">
                    {c.pay.toLocaleString("ja-JP")}円
                    <span className="block text-xs text-text-muted">{manYen(c.pay)}</span>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{c.chg}</td>
                  <td className="p-3 text-right whitespace-nowrap">{c.age}</td>
                  <td className="p-3 text-right whitespace-nowrap">{c.tenure}</td>
                  <td className="p-3 text-right whitespace-nowrap">
                    {c.n.toLocaleString("ja-JP")}名
                    <span className="block text-xs text-text-muted">臨時〔{c.temp.toLocaleString("ja-JP")}〕</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※富士フイルムホールディングス 有価証券報告書（第130期）「従業員の状況」②提出会社の状況・③最大人員会社等の状況（2026年3月31日現在）。従業員数は就業人員で、臨時従業員は当事業年度の平均人員を外数で〔 〕内に記載しています。
          平均年間給与は賞与及び基準外賃金を含み、平均勤続年数は各社での勤続年数を通算しています。持株会社の従業員は富士フイルム㈱や富士フイルムビジネスイノベーション㈱等からの出向者で、前期比の減少はグループ会社からの機能移管・制度統合の影響を当期から反映したためと注記されています（影響を除くと11,649,362円・3.62%増）。
        </p>
        <p className="mb-10">
          富士フイルムビジネスイノベーションの平均年間給与は、富士フイルム㈱（約1,040万円）を194,235円上回り、有価証券報告書の「最大人員会社等の状況」に掲載された3社の中で最も高い水準です。
          一方、販売を担う富士フイルムビジネスイノベーションジャパンは約789万円で、両社の差は2,696,630円です。ジャパンの従業員数は9,591名と、富士フイルムビジネスイノベーション（3,875名）の約2.5倍です。
          富士フイルムホールディングスの持株会社単体の値は<Link href="/company/fujifilm/" className="text-teal font-bold hover:underline">富士フイルムホールディングスへの転職ガイド</Link>に掲載しています。
        </p>

        <h2>ビジネスイノベーション部門の規模</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "セグメント売上高（2026年3月期）", value: "1兆1,748億円（前期比2.0%減）" },
                { label: "セグメント営業利益（2026年3月期）", value: "637億円（前期比14.6%減）" },
                { label: "セグメントの連結従業員数", value: "33,916名（臨時〔5,110〕）" },
                { label: "グループ連結従業員数", value: "73,526名（臨時〔9,224〕）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/2">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※富士フイルムホールディングス 有価証券報告書（第130期）「経営者による財政状態、経営成績及びキャッシュ・フローの状況の分析」（売上高1,174,800百万円・営業利益63,712百万円を億円単位に切り捨て）と「従業員の状況」。
        </p>
        <p className="mb-10">
          ビジネスイノベーション部門は、富士フイルムグループの4つのセグメント（ヘルスケア・エレクトロニクス・ビジネスイノベーション・イメージング）のうち売上高が最も大きく、連結従業員の約46%が所属しています（当サイト計算）。
          2026年3月期は売上高・営業利益とも前期を下回りましたが、富士フイルムビジネスイノベーション単体の平均年間給与は5.32%増えています。
        </p>

        <h2>男女の賃金の差異・女性管理職比率</h2>
        <p className="mb-10">
          同じ有価証券報告書では、主要な連結子会社の指標として、富士フイルムビジネスイノベーションの男性の賃金に対する女性の賃金の割合を全労働者79.6%、正規雇用労働者78.9%、パート・有期労働者78.3%と開示しています。
          正規雇用労働者の内訳は管理的地位にある労働者98.5%、一般86.9%です。管理的地位にある労働者に占める女性の割合は9.6%、男性の育児休業等の取得率は85.0%です。
          富士フイルムビジネスイノベーションジャパンは、それぞれ全労働者76.5%、女性管理職比率8.2%、男性の育児休業等取得率75.6%です。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "富士フイルムビジネスイノベーション株式会社（非上場・富士フイルムホールディングスの100%子会社）" },
                { label: "旧社名", value: "富士ゼロックス株式会社（2021年4月に社名変更）" },
                { label: "本社", value: "東京都港区赤坂九丁目7番3号" },
                { label: "創立", value: "1962年2月20日" },
                { label: "資本金", value: "200億円（2026年3月31日現在）" },
                { label: "単独正社員数（会社概要）", value: "5,946名（2026年3月31日現在）" },
                { label: "事業内容", value: "ビジネスイノベーション（ビジネスソリューション、オフィスソリューション、グラフィックコミュニケーション）に関わる商品・サービスの提供" },
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
          ※<a href={OVERVIEW} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">富士フイルムビジネスイノベーション 会社概要</a>（{CHECKED}確認）と富士フイルムホールディングスの有価証券報告書（沿革・関係会社の状況）から転記。
          会社概要の単独正社員数（5,946名）と有価証券報告書の就業人員（3,875名）は定義が異なる数値です。
        </p>

        <h2>富士フイルムビジネスイノベーションへの転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,059万円は就業人員3,875名の平均で、中途入社時の提示額はポジションと経験により個別に決まります。</li>
            <li>採用情報は富士フイルムビジネスイノベーションと富士フイルムビジネスイノベーションジャパンの共通ページで案内されています。平均年間給与は両社で約270万円異なるため、募集している会社名を確認してください。</li>
            <li>平均年間給与には賞与と基準外賃金（残業代など）が含まれます。</li>
            <li>非上場の事業会社でも、自社で有価証券報告書を提出している会社があります（例：<Link href="/company/mufg-bank/" className="text-teal hover:underline">三菱UFJ銀行</Link>）。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            公式の<a href={CAREERS} target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:underline">採用情報ページ</a>のほか、
            <Link href="/review/recruit-agent/" className="text-teal font-bold hover:underline">リクルートエージェント</Link>や
            <Link href="/review/doda/" className="text-teal font-bold hover:underline">doda</Link>など、大手メーカーの求人を扱う転職エージェントで想定年収のレンジを確認する方法があります。
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
            <Link href="/company/fujifilm/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士フイルムHD転職ガイド</Link>
            <Link href="/company/canon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キヤノン転職ガイド</Link>
            <Link href="/company/ricoh/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">リコー転職ガイド</Link>
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー 年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
