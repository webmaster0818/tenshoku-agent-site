import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "住友倉庫の年収・中途採用【2026年10月】平均年収844万円・キャリア採用の募集分野と応募条件",
  description:
    "住友倉庫の平均年間給与は約844万円（2026年3月期・有価証券報告書／提出会社）です。キャリア採用は総合職で、国際物流・国内物流は大卒以上・35歳未満（職務経験不問）、法務・経理財務・情報システム・不動産開発は実務経験者が対象です（公式・2026年10月17日確認）。応募方法と勤務条件も整理しています。",
  alternates: { canonical: "/company/sumitomo-soko/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "住友倉庫の年収・中途採用【2026年10月】平均年収844万円・キャリア採用の募集分野と応募条件",
    description: "住友倉庫の平均年収約844万円と、キャリア採用の募集分野・応募資格・応募方法（公式・10/17確認）を整理しています。",
  },
};

const faqData = [
  {
    q: "住友倉庫の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月23日提出、EDINETで2026年10月27日確認）によると、平均年間給与は8,441千円（約844万円・提出会社の就業人員918人）で、対前事業年度増減率は3.7%です。790万円（2024年3月期）→814万円（2025年3月期）→844万円（2026年3月期）と推移しています（2024年3月期はIR BANK掲載値）。賞与及び基準外賃金を含む提出会社の平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "住友倉庫は中途採用を行っていますか？",
    a: "はい。公式サイトの「キャリア採用情報」に総合職の募集事項が掲載されています（2026年10月17日確認）。募集分野は物流部門（国際物流・国内物流）、管理部門（一般法務・企業法務、経理・財務、管財業務）、情報システム部門、不動産開発部門です。応募は履歴書（写真添付）と職務経歴書を人事第一課キャリア採用担当へ郵送する方法で、書類選考を通過した場合のみ2週間以内に連絡があります。",
  },
  {
    q: "住友倉庫のキャリア採用に年齢制限はありますか？",
    a: "物流部門（国際物流・国内物流）の応募資格は「大卒以上、35歳未満（職務経験不問）」で、公式には「長期勤続によるキャリア形成を図るため、年齢制限を設けております」と記載されています。管理部門・情報システム部門・不動産開発部門は、年齢ではなく実務経験や資格（日商簿記2級以上、宅地建物取引士など）が応募資格として示されています（2026年10月17日確認）。",
  },
  {
    q: "住友倉庫を退職した人が再入社できる制度はありますか？",
    a: "あります。当社従業員として2年以上勤務した方を対象に「カムバック採用」を実施しています。募集職種は総合職と事務職（一般職）で、原則として退職時の職種となります。選考があり、採用を確約するものではないと記載されています（公式「カムバック採用情報」、2026年10月17日確認）。",
  },
  {
    q: "住友倉庫はどんな会社ですか？",
    a: "1899年創業の総合物流企業で、倉庫業、港湾運送業、陸上運送業、国際複合一貫輸送業、通関業、不動産の賃貸、情報システムの開発・運用などを営んでいます。本社は大阪市北区中之島、東京本社は東京都港区芝公園にあります（公式「会社概要」、2026年10月17日確認）。",
  },
  {
    q: "住友倉庫の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は12.9年、平均年齢は37.9歳（2026年3月期・提出会社）です。",
  },
  {
    q: "住友倉庫の平均年収はどう推移していますか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、物流は取扱量や運賃水準の影響を受けるため賞与も変動します。実際、住友倉庫も790万円→814万円→844万円と年ごとに変動しています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "住友倉庫の年収・中途採用【2026年10月】平均年収844万円・キャリア採用の募集分野と応募条件",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/sumitomo-soko/" },
  inLanguage: "ja",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "住友倉庫" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            住友倉庫への転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/sumitomo-soko.jpg" alt="住友倉庫の採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">住友倉庫 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            住友倉庫（証券コード9303）は、倉庫・港湾運送・国際輸送を手がける総合物流企業です。
            本記事では、有価証券報告書と公式サイトの「キャリア採用情報」をもとに、平均年収・中途採用の募集分野・応募資格・応募方法を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">住友倉庫の年収とキャリア採用の要約（2026年10月27日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>平均年収：</strong>約844万円（8,441千円）です（2026年3月期・有価証券報告書／提出会社、EDINETの原本で確認）。平均年齢37.9歳・平均勤続年数12.9年・従業員918人で、前期比3.7%増です。</li>
            <li><strong>募集職種：</strong>総合職です。物流部門（国際物流・国内物流）、管理部門（一般法務・企業法務、経理・財務、管財業務）、情報システム部門、不動産開発部門の募集事項が掲載されています。</li>
            <li><strong>応募資格：</strong>国際物流・国内物流は「大卒以上、35歳未満（職務経験不問）」です。法務・経理財務・管財・情報システム・不動産開発は、各分野の実務経験や資格（日商簿記2級以上、電気主任技術者・建築設備士、宅地建物取引士など）が求められます。</li>
            <li><strong>応募方法：</strong>履歴書（写真添付）と職務経歴書を、大阪本社の人事第一課キャリア採用担当へ郵送します。書類選考を通過した場合のみ、2週間以内に連絡があります。</li>
            <li><strong>勤務条件：</strong>勤務地は東京・横浜・名古屋・大阪・神戸及び海外の事業所、勤務時間は9:00〜17:00です。昇給は年1回、賞与は年2回で、社宅・独身寮があります。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.sumitomo-soko.co.jp/recruit/saiyo.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">住友倉庫「キャリア採用情報」</a>／<a href="https://www.sumitomo-soko.co.jp/corporate/summary.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「会社概要」</a>／<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100W076.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書 第148期（EDINET）</a>／<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YHFI.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書 第149期（EDINET）</a>。キャリア採用情報は2026年10月27日に再確認し、10月17日確認時から変更がないことを確認しています。募集内容は変わることがあるため、応募前に公式サイトで最新の情報をご確認ください。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">住友倉庫転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">住友倉庫の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">住友倉庫の中途採用（キャリア採用の募集事項）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">住友倉庫で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">住友倉庫のキャリア採用の応募方法と選考</a></li>
            <li><a href="#s6" className="text-teal hover:underline">住友倉庫の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">住友倉庫転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">住友倉庫転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">住友倉庫転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約844万円（8,441千円、2026年3月期・有価証券報告書、EDINETで2026年10月27日確認）。提出会社の就業人員918人の平均値です。</li>
            <li>790万円（2024年3月期）→814万円（2025年3月期）→844万円（2026年3月期）と推移しています。直近3期とも上昇しています(790→814→844万円)。倉庫系では平均年齢37.9歳と比較的若い構成です。</li>
            <li>キャリア採用は総合職で、国際物流・国内物流は大卒以上・35歳未満（職務経験不問）、管理部門などは実務経験者が対象です（公式「キャリア採用情報」、2026年10月17日確認）。</li>
            <li>平均年齢は37.9歳、平均勤続年数は12.9年です。平均年間給与には賞与が含まれ、年ごとに変動するため、単年の平均額だけでなく推移もあわせて確認することをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">住友倉庫の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社住友倉庫" },
                { label: "証券コード", value: "9303" },
                { label: "本社", value: "大阪市北区中之島三丁目2番18号（東京本社：東京都港区芝公園二丁目11番1号）" },
                { label: "創業", value: "1899年7月1日" },
                { label: "従業員数", value: "876人（連結4,450人、2025年3月31日現在・公式会社概要）" },
                { label: "事業内容", value: "倉庫業、港湾運送業、陸上運送業、国際複合一貫輸送業、通関業、不動産の賃貸、情報システムの企画・開発・運用ほか" },
                { label: "平均年間給与", value: "約844万円（8,441千円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "790万円（2024年3月期）→814万円（2025年3月期）→844万円（2026年3月期）" },
                { label: "平均年齢", value: "37.9歳（同・提出会社）" },
                { label: "平均勤続年数", value: "12.9年（同・提出会社）" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YHFI.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月23日提出、EDINETで2026年10月27日確認）、2024年3月期の値はIR BANK掲載値（2026年9月22日確認）に基づく提出会社単体の平均です。有価証券報告書の注記により、従業員数は就業人員で、平均年間給与は賞与及び基準外賃金を含みます。物流会社は総合職・ドライバー職・現業職など職種によって働き方も処遇体系も異なり、提出会社(とくに持株会社)に在籍する従業員の構成は会社ごとに大きく違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">住友倉庫の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.sumitomo-soko.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用ページ</a>から案内される<a href="https://www.sumitomo-soko.co.jp/recruit/saiyo.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「キャリア採用情報」</a>の募集事項です（2026年10月17日確認）。職種は総合職です。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">募集分野</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">職務内容（要約）</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">応募資格（公式の記載）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { area: "物流部門：国際物流", job: "国際輸送（海上・航空）や海外現地法人・海外物流拠点でのフォワーディング業務の企画・営業・オペレーション", req: "大卒以上、35歳未満（職務経験不問）" },
                  { area: "物流部門：国内物流", job: "輸出入及び国内貨物の企画・営業、倉庫・通関セクション・コンテナターミナル等でのオペレーション", req: "大卒以上、35歳未満（職務経験不問）" },
                  { area: "管理部門：一般法務・企業法務", job: "リーガルコンプライアンス、訴訟管理、株式、株主総会、取締役会など", req: "企業法務に精通し、実務経験豊富な方（大卒以上）" },
                  { area: "管理部門：経理・財務", job: "予算、決算（単体・連結）、業績管理、税務、資金管理、外国為替、IRなど", req: "日商簿記検定2級以上、経理・財務業務の実務経験豊富な方（大卒以上）" },
                  { area: "管理部門：管財業務", job: "電気・空調設備・大型港湾荷役機械の品質・安全・設計・施行等の管理業務など", req: "電気主任技術資格または建築設備士資格、または大型港湾荷役機械の管理業務のマネジメント経験（大卒以上）" },
                  { area: "情報システム部門", job: "基幹システムのオープン系再構築、3PL・SCM営業システムの開発支援など", req: "業務系システムエンジニアの知識経験（大卒以上）" },
                  { area: "不動産開発部門", job: "企画、設計・建設、テナント募集・管理、建物管理など", req: "宅地建物取引士資格、不動産開発業務の実務経験が豊富な方（大卒以上）" },
                ].map((r) => (
                  <tr key={r.area} className="border-b border-border">
                    <td className="py-2 px-3 font-bold text-navy">{r.area}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.job}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>物流部門の年齢制限について、公式には「長期勤続によるキャリア形成を図るため、年齢制限を設けております」と記載されています。</li>
            <li>勤務地は東京・横浜・名古屋・大阪・神戸及び海外の事業所、勤務時間は9:00〜17:00です。給与は経験・能力を考慮のうえ当社規定により優遇とされ、昇給年1回・賞与年2回、社宅・独身寮・各種手当があります。</li>
            <li>当社で2年以上勤務した退職者を対象とする<a href="https://www.sumitomo-soko.co.jp/recruit/comeback.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">カムバック採用</a>も実施しています。</li>
            <li>募集内容は変わることがあるため、最新の情報は公式採用ページでご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で住友倉庫などの大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化型の転職エージェントで、求人の紹介と応募書類の添削を受ける方法が有効です。</p>
        </div>

        <h2 id="s4">住友倉庫で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "物流に果敢に挑戦する姿勢", desc: "公式の「キャリア採用情報」では、ダイナミックに展開されるロジスティクスビジネスを正面からとらえ、強い意志を持って果敢にチャレンジしていく人材を求めるとしています。" },
            { title: "物流部門は経験不問・35歳未満", desc: "国際物流・国内物流の応募資格は大卒以上・35歳未満で、職務経験は問われません。長期勤続によるキャリア形成を前提とした採用です。" },
            { title: "管理部門は実務経験と資格", desc: "法務は企業法務の実務経験、経理・財務は日商簿記2級以上と実務経験、管財は電気主任技術者・建築設備士などの資格またはマネジメント経験が求められます。" },
            { title: "IT・不動産の専門職", desc: "情報システム部門は業務系システムエンジニアの知識経験、不動産開発部門は宅地建物取引士資格と不動産開発の実務経験が応募資格です。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">住友倉庫のキャリア採用の応募方法と選考</h2>
        <p className="text-sm text-text-muted mb-4">公式の「キャリア採用情報」に記載されている応募方法です（2026年10月17日確認）。書類選考後の面接の回数や内容は公表されていないため、記載していません。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募書類の郵送", desc: "履歴書（写真添付）と職務経歴書（書式自由）を、大阪本社（大阪市北区中之島3-2-18）の人事第一課キャリア採用担当へ郵送します。応募書類は返却されません。" },
            { step: 2, title: "書類選考", desc: "書類選考のうえ、次の選考へ進む場合のみ2週間以内に連絡があります。" },
            { step: 3, title: "次の選考", desc: "書類選考後の選考内容は公式サイトに記載がありません。連絡時の案内に従ってください。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="s6">住友倉庫の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約844万円（2026年3月期）は提出会社単体の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与が含まれます。キャリア採用の待遇は昇給年1回・賞与年2回です（公式「キャリア採用情報」）。</li>
            <li>平均年齢は37.9歳、平均勤続年数は12.9年です。平均年収は年齢構成の影響を受ける点にご留意ください。</li>
            <li>中途入社時の給与は、経験・能力を考慮のうえ当社規定により決定されます（公式「キャリア採用情報」）。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">住友倉庫転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、転職エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有する転職エージェントです。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社も含めて比較検討しやすい点が強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強みがあります。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や、管理職・専門職の情報収集に適しています。" },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2 id="s8">住友倉庫転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">住友倉庫転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/butsuryu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">陸運・物流 年収ランキング</Link>
            <Link href="/company/yamato-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤマトホールディングス転職ガイド</Link>
            <Link href="/company/mitsubishi-logistics/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三菱倉庫転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
