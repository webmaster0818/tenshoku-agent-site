import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/oriental-land/" },
  title: "オリエンタルランドへの転職は難しい？経験者採用・平均年収605万円・募集職種を解説【2026年】",
  description:
    "オリエンタルランド（証券コード4661）への転職を有価証券報告書と公式採用ページで解説します。平均年間給与は6,051,217円（約605万円・2026年3月期・提出会社）、社員6,528人に対し臨時雇用者は平均14,263人です。経験者採用の募集職種（2026年11月12日確認）と人的資本データをまとめています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "オリエンタルランドへの転職は難しい？経験者採用・平均年収605万円・募集職種を解説【2026年】",
    description: "オリエンタルランド（4661）の平均年収・経験者採用の募集職種を有価証券報告書と公式採用ページで解説します。",
  },
};

const EDINET = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YCJX.pdf";
const CAREER = "https://www.olc.co.jp/ja/recruit/career.html";
const CATEGORY = "https://www.olc.co.jp/ja/recruit/career/category.html";
const RECRUIT = "https://www.olc.co.jp/ja/recruit.html";

const jobs = [
  { cat: "専門職（技術）", n: 13, list: "建築技術者、建築設備（機械設備・電気設備）技術者、建築設備設計（電気設備）技術者、内外装デコレーション技術者、アトラクション技術（機械系エンジニア・照明エンジニア・制御システム）、照明品質監理者、音響映像品質監理者、空間デザイナー、イベントデコレーションデザイナー、エンターテイメントエンジニア" },
  { cat: "専門職（IT）", n: 2, list: "プロジェクトマネジメント（アプリケーション領域／クラウドプラットフォーム・共通アーキテクチャ）【デジタル本部】" },
  { cat: "専門職（調理）", n: 1, list: "スーシェフ" },
  { cat: "専門職（その他）", n: 2, list: "ショーディレクター（演出）、エンターテイメントメイク・エンターテイメントウィッグ" },
];

const faqData = [
  {
    q: "オリエンタルランドの平均年収はいくらですか？",
    a: "有価証券報告書（第66期・2026年3月期）によると、提出会社の平均年間給与は6,051,217円（約605万円）で、対前事業年度増減率は0.7%です。平均年齢39.8歳、平均勤続年数10.1年、従業員数6,528人の平均で、基準外賃金および賞与を含みます（2026年11月12日にEDINETの原本で確認）。",
  },
  {
    q: "平均年収の対象に準社員や出演者は含まれますか？",
    a: "有価証券報告書の従業員数6,528人には、嘱託社員361人と当社からの出向社員94人は含まれず、当社への出向社員22人は含まれています。臨時雇用者は外数で、当事業年度の平均は14,263人（総労働時間を社員換算）と記載されています。平均年間給与はこの6,528人の平均です。",
  },
  {
    q: "オリエンタルランドは中途採用（経験者採用）を行っていますか？",
    a: "はい。公式サイトの「経験者（社員・嘱託社員）採用」ページで募集職種を公開しています。2026年11月12日の確認時点では、専門職（技術・IT・調理・その他）の18職種が掲載されていました。テーマパークマネジメント職は「現在、募集は行っておりません」と表示されていました。",
  },
  {
    q: "どのような専門職の募集がありますか？",
    a: "2026年11月12日の確認時点では、建築・建築設備の技術者、アトラクション技術（機械系・照明・制御システム）、照明や音響映像の品質監理者、空間デザイナー、デジタル本部のプロジェクトマネジメント、スーシェフ、ショーディレクターなどが掲載されていました。2026年6月4日には専門職（技術）の大型採用募集（建築×土木×設備×内外装）の開始が告知されています。",
  },
  {
    q: "女性管理職比率はどのくらいですか？",
    a: "有価証券報告書では、提出会社の管理的地位にある労働者に占める女性労働者の割合は20.8%、男性労働者の育児休業取得率は91.6%です。2027年度に女性管理職比率25%以上を目標に掲げています。社員の女性比率は57.0%と記載されています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "オリエンタルランドへの転職ガイド（有価証券報告書・公式採用ページにもとづく解説）",
  dateModified: "2026-11-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/oriental-land/" },
  inLanguage: "ja",
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "オリエンタルランド" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
          オリエンタルランドへの転職は難しい？経験者採用・平均年収605万円・募集職種を解説【2026年】
        </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            オリエンタルランド（証券コード4661）の平均年間給与は<strong>6,051,217円（約605万円）</strong>です（2026年3月期・有価証券報告書・提出会社）。経験者採用は専門職が中心で、2026年11月12日の確認時点では<strong>専門職18職種</strong>が公式ページに掲載されていました。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            本ページでは、有価証券報告書の原本と公式採用ページで確認した内容のみを掲載しています。確認日は2026年11月12日です。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">オリエンタルランド転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">オリエンタルランドの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">平均年収の対象範囲（社員と臨時雇用者）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">経験者採用の募集職種（公式）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">人的資本データ（有価証券報告書）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">オリエンタルランド転職で活用したい転職エージェント</a></li>
            <li><a href="#s7" className="text-teal hover:underline">オリエンタルランド転職 よくある質問</a></li>
            <li><a href="#s8" className="text-teal hover:underline">出典</a></li>
          </ol>
        </nav>

        <h2 id="s1">オリエンタルランド転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は6,051,217円（約605万円）、平均年齢39.8歳、平均勤続年数10.1年です（2026年3月期・提出会社6,528人）。</li>
            <li>提出会社の従業員6,528人のうち6,461人がテーマパーク事業に所属しています。臨時雇用者は外数で平均14,263人です。</li>
            <li>経験者採用は総合職・テーマパークマネジメント職・専門職の3区分で、確認時点では専門職18職種が掲載されていました。</li>
            <li>女性管理職比率は20.8%、男性の育児休業取得率は91.6%です（提出会社）。</li>
          </ul>
        </div>

        <h2 id="s2">オリエンタルランドの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社オリエンタルランド" },
                { label: "証券コード", value: "4661（東証プライム）" },
                { label: "本店所在地", value: "千葉県浦安市舞浜1番地1" },
                { label: "沿革", value: "1960年7月設立。1983年4月に「東京ディズニーランド」を開業しています。" },
                { label: "平均年間給与", value: "6,051,217円（約605万円）／2026年3月期・提出会社（対前事業年度増減率 0.7%）" },
                { label: "平均年齢", value: "39.8歳（同）" },
                { label: "平均勤続年数", value: "10.1年（同）" },
                { label: "従業員数", value: "提出会社 6,528人（臨時雇用者は外数で平均14,263人）／連結 11,207人（2026年3月31日現在）" },
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
          ※第66期有価証券報告書（2026年6月25日提出）の「従業員の状況」から転記しています。原本の注記では、平均年間給与は税込支払給与額で、基準外賃金および賞与を含みます。職種・年代・役職により実際の年収は異なります。
        </p>

        <h2 id="s3">平均年収の対象範囲（社員と臨時雇用者）</h2>
        <p className="text-sm text-text-secondary mb-4">
          オリエンタルランドはテーマパークの運営に多くの臨時雇用者が従事しています。有価証券報告書の平均年間給与がどの範囲の平均かを、原本の注記から整理しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">区分</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">人数</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">平均年間給与の対象</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["従業員数（テーマパーク 6,461人・その他 67人）", "6,528人", "対象"],
                ["当社への出向社員", "22人", "従業員数に含む"],
                ["嘱託社員", "361人", "従業員数に含まない"],
                ["当社からの出向社員", "94人", "従業員数に含まない"],
                ["臨時雇用者（当事業年度平均・社員換算）", "14,263人", "外数（対象外）"],
                ["臨時雇用者の在籍数（2026年3月31日現在）", "18,547人", "外数（対象外）"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-navy">{r[0]}</th>
                  <td className="py-3 px-3 text-text-secondary">{r[1]}</td>
                  <td className="py-3 px-3 text-text-secondary">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※有価証券報告書「提出会社の状況」の注記から転記しています。臨時雇用者数は総労働時間を社員換算して算出された値です。社員換算の臨時雇用者14,263人は、従業員数6,528人の約2.2倍にあたります（当サイト計算）。
        </p>

        <h2 id="s4">経験者採用の募集職種（公式）</h2>
        <div className="glass-card p-6 mb-4">
          <p className="text-sm text-text-secondary mb-4">
            オリエンタルランドは公式サイトの<a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">経験者（社員・嘱託社員）採用ページ</a>で、総合職・テーマパークマネジメント職・専門職の3区分の募集を案内しています。2026年11月12日に<a href={CATEGORY} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集職種のご紹介</a>で確認した掲載職種は以下のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">区分</th>
                  <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">職種数</th>
                  <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">掲載職種</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.cat} className="border-b border-border">
                    <th className="text-left py-3 px-3 font-bold text-navy align-top whitespace-nowrap">{j.cat}</th>
                    <td className="py-3 px-3 text-text-secondary align-top">{j.n}</td>
                    <td className="py-3 px-3 text-text-secondary">{j.list}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-text-secondary mb-4 list-disc pl-5">
          <li>テーマパークマネジメント職は、確認時点で「現在、募集は行っておりません」と表示されていました。</li>
          <li>公式ページでは、2026年6月4日に専門職（技術）の大型採用募集（建築×土木×設備×内外装）、2026年11月5日にエンターテイメントメイク・エンターテイメントウィッグの募集開始が告知されています。</li>
          <li>応募は公式ページの「経験者マイページ／エントリー」から行います。選考ステップは各職種の募集要項でご確認ください。</li>
        </ul>
        <p className="text-xs text-text-muted mb-8">※職種数は当サイトが公式ページの掲載職種を数えた値です。準社員・出演者の募集は別サイトで案内されています（<a href={RECRUIT} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式の採用情報</a>）。募集状況は随時変わるため、応募前に公式ページをご確認ください。</p>

        <h2 id="s5">人的資本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "管理的地位にある労働者に占める女性労働者の割合", value: "20.8%（目標：2027年度に25%以上）" },
                { label: "男性労働者の育児休業取得率", value: "91.6%（目標：95%以上）" },
                { label: "労働者の男女の賃金の額の差異（男性＝100）", value: "全従業員 78.8%／社員 79.5%／嘱託社員・出演者・準社員等 95.6%" },
                { label: "社員の女性比率", value: "57.0%" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/2">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※有価証券報告書（提出会社・当事業年度）の記載値です。目標値はESGマテリアリティ「ダイバーシティ・エクイティ＆インクルージョン」のKPIとして記載されたものです。
        </p>

        <h2 id="s6">オリエンタルランド転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">経験者採用は建築・設備・IT・演出などの専門職が中心です。専門職の求人を扱う転職エージェントで、同業種の募集とあわせて比較する方法があります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数の多い総合型の転職エージェントです。業界をまたいで求人を比較できます。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社の募集も含めて比較検討できます。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "管理職・専門職向けの転職エージェントです。プロジェクトマネジメントなどの専門職を検討する方に適しています。" },
            { name: "RSG", href: "/review/rsg-fudosan/", desc: "建設・不動産を専門とする転職エージェントです。建築・設備系の技術職を検討する方の比較先になります。" },
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

        <h2 id="s7">オリエンタルランド転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2 id="s8">出典</h2>
        <ul className="text-xs text-text-muted space-y-1 mb-8 list-disc pl-5">
          <li><a href={EDINET} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">株式会社オリエンタルランド 第66期 有価証券報告書</a>（2026年6月25日提出・EDINET書類管理番号 S100YCJX）／2026年11月12日確認</li>
          <li><a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">オリエンタルランド 経験者（社員・嘱託社員）採用</a>／2026年11月12日確認</li>
          <li><a href={CATEGORY} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">オリエンタルランド 募集職種のご紹介</a>／2026年11月12日確認</li>
          <li><a href={RECRUIT} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">オリエンタルランド 採用情報</a>／2026年11月12日確認</li>
        </ul>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">オリエンタルランドへの転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">職種ごとの条件は、公式の募集要項または転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/bandai-namco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">バンダイナムコHD転職ガイド</Link>
            <Link href="/company/sega-sammy/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">セガサミーHD転職ガイド</Link>
            <Link href="/company/tetsudo-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">鉄道会社の年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
