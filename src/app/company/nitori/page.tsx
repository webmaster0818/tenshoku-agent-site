import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ニトリの平均年収は約598万円（㈱ニトリ）・持株会社は約746万円【2026年3月期・有価証券報告書】",
  description:
    "ニトリホールディングスの有価証券報告書（第54期・2026年3月期）から、店舗を運営する㈱ニトリの平均年間給与5,978千円（平均32.1歳）と、持株会社単体の7,456千円（前期比4.6%減）を整理しました。前期との比較、男女の賃金の差異、臨時従業員の人数も掲載しています。",
  alternates: { canonical: "/company/nitori/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "ニトリの平均年収は約598万円（㈱ニトリ）・持株会社は約746万円【2026年3月期】",
    description: "ニトリホールディングスの有価証券報告書から、㈱ニトリと持株会社の平均年収・平均年齢・勤続年数を整理しています。",
  },
};

const CHECKED = "2026年11月20日";
const YUHO_54 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YIMF.pdf";
const YUHO_53 = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100W5DK.pdf";

const faqData = [
  {
    q: "ニトリの平均年収はいくらですか？",
    a: `ニトリホールディングスの有価証券報告書（第54期・2026年6月24日提出）では、従業員数が最も多い子会社の㈱ニトリについて、平均年間給与5,978千円（約598万円）、平均年齢32.1歳、平均勤続年数7.8年と記載されています（2026年3月31日現在）。持株会社のニトリホールディングス単体は7,456千円（約746万円）です（${CHECKED}にEDINETで確認）。`,
  },
  {
    q: "持株会社と㈱ニトリの年収はなぜ違うのですか？",
    a: "持株会社の従業員は884人、㈱ニトリは4,651人で、平均年齢は持株会社が39.6歳、㈱ニトリが32.1歳と7.5歳の差があります。平均勤続年数も12.2年と7.8年で、年齢・勤続年数の構成の違いが平均年間給与の差に表れていると考えられます。店舗で働く人を含む水準としては、㈱ニトリの数値が実態に近いといえます。",
  },
  {
    q: "2026年3月期に平均年収が下がったのはなぜですか？",
    a: "有価証券報告書の注記では、持株会社の平均年間給与の対前事業年度増減率（△4.6%）について「月例給与は前事業年度比で堅調に増加した一方で、業績連動型報酬制度に基づき賞与支給額が変動したことが主な減少要因」と説明されています。㈱ニトリも△0.4%で、同じ注記が付いています。",
  },
  {
    q: "平均年間給与にはパート・アルバイトも含まれますか？",
    a: "含まれません。有価証券報告書では、臨時従業員は年間の平均人員（1日8時間換算）を従業員数の外数として記載しています。㈱ニトリの臨時従業員は14,519人で、従業員数4,651人の約3.1倍です。また、平均年間給与は専門職と嘱託社員を含まず、基準外給与（残業代など）と賞与を含めて算出されています。",
  },
  {
    q: "ニトリは中途採用を行っていますか？",
    a: `ニトリホールディングスの採用サイト（www.nitorihd.co.jp/recruit/）にキャリア採用の案内があります（${CHECKED}に表示を確認）。募集職種や条件は時期によって変わるため、最新の募集要項をご確認ください。`,
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ニトリの平均年収" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ニトリの平均年収は約598万円（㈱ニトリ）・持株会社は約746万円【2026年3月期・有価証券報告書】
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {[
              { v: "約598万円", l: "㈱ニトリの平均年間給与" },
              { v: "32.1歳", l: "㈱ニトリの平均年齢" },
              { v: "7.8年", l: "㈱ニトリの平均勤続年数" },
              { v: "約746万円", l: "持株会社単体の平均年間給与" },
            ].map((x) => (
              <div key={x.l} className="glass-card p-4 text-center">
                <p className="text-lg font-extrabold text-teal">{x.v}</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{x.l}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed">
            店舗を運営する㈱ニトリの平均年間給与は<strong>5,978千円（約598万円）</strong>です（2026年3月期・従業員4,651人・平均32.1歳）。
            ㈱ニトリは上場しておらず有価証券報告書を提出していませんが、親会社のニトリホールディングスの有価証券報告書に、2026年3月期から「最大人員会社の状況」として掲載されるようになりました。
          </p>
          <p className="text-xs text-text-muted mt-3">
            出典：株式会社ニトリホールディングス <a href={YUHO_54} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書（第54期・2026年6月24日提出）</a>「従業員の状況」。{CHECKED}にEDINETで確認しています。
          </p>
        </div>

        <h2>㈱ニトリと持株会社の比較（2026年3月31日現在）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">会社</th>
                <th className="p-3 text-right">平均年間給与</th>
                <th className="p-3 text-right">前期比</th>
                <th className="p-3 text-right">平均年齢</th>
                <th className="p-3 text-right">平均勤続年数</th>
                <th className="p-3 text-right rounded-tr-lg">従業員数（臨時）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3">㈱ニトリ（最大人員会社）</td>
                <td className="p-3 text-right whitespace-nowrap">5,978千円</td>
                <td className="p-3 text-right whitespace-nowrap">△0.4%</td>
                <td className="p-3 text-right whitespace-nowrap">32.1歳</td>
                <td className="p-3 text-right whitespace-nowrap">7.8年</td>
                <td className="p-3 text-right whitespace-nowrap">4,651人（14,519人）</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3">ニトリホールディングス（提出会社）</td>
                <td className="p-3 text-right whitespace-nowrap">7,456千円</td>
                <td className="p-3 text-right whitespace-nowrap">△4.6%</td>
                <td className="p-3 text-right whitespace-nowrap">39.6歳</td>
                <td className="p-3 text-right whitespace-nowrap">12.2年</td>
                <td className="p-3 text-right whitespace-nowrap">884人（347人）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※第54期有価証券報告書「(2) 提出会社の状況」「(3) 最大人員会社の状況」。従業員数は就業人員（社外への出向者を除き、社外からの出向者を含む）で、臨時従業員は年間の平均人員（1日8時間換算）を外数で記載。
          平均年間給与は専門職及び嘱託社員を含まず、基準外給与及び賞与を含みます。前期比は月例給与及び賞与の合計額で算出されています。
        </p>
        <p className="mb-10">
          持株会社と㈱ニトリの差は1,478千円（約148万円）です。持株会社は平均年齢が7.5歳高く、勤続年数も4.4年長いため、年齢構成の違いが差の一因と考えられます。
          参考までに、厚生労働省の賃金構造基本統計調査から当サイトで算出した一般労働者の平均年収は、30〜34歳が約464万円、35〜39歳が約513万円です（<Link href="/knowledge/salary-35sai/" className="text-teal font-bold hover:underline">35歳の平均年収</Link>）。
        </p>

        <h2>持株会社の平均年収の推移</h2>
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
              <tr className="border-b border-gray-100">
                <td className="p-3"><a href={YUHO_53} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2025年3月期（第53期）</a></td>
                <td className="p-3 text-right whitespace-nowrap">7,812千円</td>
                <td className="p-3 text-right whitespace-nowrap">39.6歳</td>
                <td className="p-3 text-right whitespace-nowrap">12.2年</td>
                <td className="p-3 text-right whitespace-nowrap">939人</td>
              </tr>
              <tr className="border-b border-gray-100 bg-teal/5 font-bold text-navy">
                <td className="p-3"><a href={YUHO_54} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2026年3月期（第54期）</a></td>
                <td className="p-3 text-right whitespace-nowrap">7,456千円</td>
                <td className="p-3 text-right whitespace-nowrap">39.6歳</td>
                <td className="p-3 text-right whitespace-nowrap">12.2年</td>
                <td className="p-3 text-right whitespace-nowrap">884人</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-4">
          ※各期の有価証券報告書（第53期：2025年6月25日提出、第54期：2026年6月24日提出）の提出会社の状況。同社は2022年に決算期を2月20日から3月31日に変更しており、第53期・第54期はいずれも12か月の決算期です。
        </p>
        <p className="mb-10">
          平均年齢・勤続年数が変わらない中で、平均年間給与は356千円減少しました。有価証券報告書では、月例給与は増加した一方、業績連動型報酬制度に基づく賞与支給額の変動が主な減少要因と説明されています。
          ㈱ニトリ単独の数値は第54期から掲載が始まったため、前期の金額は掲載されていません（増減率△0.4%のみ記載）。
        </p>

        <h2>男女の賃金の差異・女性管理職比率</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-3 text-left rounded-tl-lg">指標（2026年3月期）</th>
                <th className="p-3 text-right">㈱ニトリ（6社合算）</th>
                <th className="p-3 text-right rounded-tr-lg">㈱島忠（参考）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { k: "管理職に占める女性労働者の割合", a: "21.7%", b: "11.3%" },
                { k: "男性労働者の育児休業取得率", a: "82.4%", b: "76.5%" },
                { k: "男女の賃金の差異（全労働者）", a: "64.5%", b: "54.2%" },
                { k: "男女の賃金の差異（正規雇用労働者）", a: "77.3%", b: "73.2%" },
                { k: "男女の賃金の差異（パート・有期労働者）", a: "91.2%", b: "97.5%" },
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
        <p className="text-xs text-text-muted mb-4">
          ※第54期有価証券報告書「主要な連結子会社」の指標。㈱ニトリの欄は、一体となって雇用・労務管理を行っている㈱ニトリホールディングス・㈱ニトリ・㈱ホームロジスティクス・㈱ホームカーゴ・㈱ニトリファシリティ・㈱Ｎプラスの6社の合算値です。賃金の差異は男性の賃金に対する女性の賃金の割合です。
        </p>
        <p className="mb-10">
          前期（第53期）の㈱ニトリの欄は、女性管理職比率19.5%、男性の育児休業取得率77.2%、男女の賃金の差異（全労働者）62.1%で、いずれも1年で上昇しています。
        </p>

        <h2>会社の基本データ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社ニトリホールディングス（東証プライム上場・持株会社）" },
                { label: "主な子会社", value: "㈱ニトリ（家具・インテリア用品の販売）、㈱島忠（ホームセンター）など" },
                { label: "連結従業員数", value: "19,432人（臨時従業員 22,304人）：ニトリ事業 18,170人、島忠事業 1,262人" },
                { label: "決算期", value: "3月31日（2022年に2月20日から変更）" },
                { label: "キャリア採用", value: "ニトリホールディングスの採用サイトで案内" },
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
          ※第54期有価証券報告書から転記（2026年3月31日現在）。採用サイト（<a href="https://www.nitorihd.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">www.nitorihd.co.jp/recruit/</a>）は{CHECKED}に表示を確認しています。
        </p>

        <h2>ニトリへの転職で確認したいこと</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約598万円は㈱ニトリの正社員など（専門職・嘱託社員を除く）の平均で、中途入社時の提示額は職種と経験により個別に決まります。</li>
            <li>平均年間給与には賞与が含まれ、2026年3月期は業績連動型報酬制度に基づく賞与の変動で前期より減少しています。賞与の算定方法は選考の過程で確認すると安心です。</li>
            <li>持株会社と事業会社で数値が大きく異なるため、他社と比べる場合は対象の会社（提出会社か事業会社か）をそろえてください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">
            小売業界の求人を比較する場合は、<Link href="/review/recruit-agent/" className="text-teal font-bold hover:underline">リクルートエージェント</Link>など、大手企業の求人を扱う転職エージェントで想定年収のレンジを確認する方法があります。
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
            <Link href="/company/muji/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">良品計画（無印良品）の転職ガイド</Link>
            <Link href="/knowledge/salary-40sai/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">40歳の平均年収</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
