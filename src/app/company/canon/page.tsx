import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/canon/" },
  title: "キヤノンへの転職は難しい？中途採用・平均年収881万円・選考フローを解説【2026年】",
  description:
    "キヤノン（証券コード7751）への転職を有価証券報告書と公式採用ページで解説します。平均年間給与は8,817,253円（約881万円・2025年12月期・提出会社）、平均勤続年数18.9年です。公式の職種検索ページの掲載件数（2026年11月12日確認）、選考フロー、女性管理職比率などの人的資本データもまとめています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "キヤノンへの転職は難しい？中途採用・平均年収881万円・選考フローを解説【2026年】",
    description: "キヤノン（7751）の平均年収・中途採用・選考フローを有価証券報告書と公式採用ページで解説します。",
  },
};

const EDINET = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XTLJ.pdf";
const CAREER = "https://global.canon/ja/employ/career/";
const FLOW = "https://global.canon/ja/employ/career/info/flow.html";
const JOBS = "https://hrmos.co/pages/canon/jobs";

const faqData = [
  {
    q: "キヤノンの平均年収はいくらですか？",
    a: "有価証券報告書（第125期・2025年12月期）によると、提出会社の平均年間給与は8,817,253円（約881万円）です。平均年齢44.3歳、平均勤続年数18.9年、従業員数22,921人の平均で、賞与および基準外賃金を含みます（2026年11月12日にEDINETの原本で確認）。",
  },
  {
    q: "キヤノンは中途採用を行っていますか？",
    a: "はい。公式サイトの「キャリア採用」ページから職種検索・応募ができます。2026年11月12日に公式の職種検索ページ（HRMOS）を確認したところ、96件が掲載されていました（キャリア登録・採用イベント・障がい者採用の案内を含む件数です）。",
  },
  {
    q: "キヤノンの中途採用の選考フローを教えてください。",
    a: "公式の「選考フロー」ページでは、WEBエントリー、書類選考・適性検査、面接（2〜3回）、内定、入社の順で案内されています。書類選考には3週間程度かかることがあり、各面接の結果は1〜2週間程度で連絡すると記載されています。最終面接は対面での実施予定です。",
  },
  {
    q: "どのような職種の募集が多いですか？",
    a: "2026年11月12日の確認時点では、インクジェットプリンター・デジタル複合機などのプリンティング分野、半導体露光装置・ディスプレイ露光装置などの産業機器分野、医用機器などのメディカル分野の技術職が多く掲載されていました。企業法務・会計／税務／財務・人事・特許技術職などの募集もありました。",
  },
  {
    q: "入社日や内定から入社までの期間は決まっていますか？",
    a: "公式の選考フローページには、内定から入社までの期間は2カ月以内（遅くとも3カ月以内）、入社日は月初（各月1日）と記載されています。",
  },
  {
    q: "キヤノンの女性管理職比率はどのくらいですか？",
    a: "有価証券報告書では、提出会社の管理職に占める女性労働者の割合は4.6%、男性労働者の育児休業取得率は86.3%です。労働者の男女の賃金の差異は全労働者で76.1%（男性を100とした場合）で、同一役職レベルでは部長職97.2%、課長職96.4%と記載されています。",
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
  headline: "キヤノンへの転職ガイド（有価証券報告書・公式採用ページにもとづく解説）",
  dateModified: "2026-11-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/canon/" },
  inLanguage: "ja",
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "キヤノン" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
          キヤノンへの転職は難しい？中途採用・平均年収881万円・選考フローを解説【2026年】
        </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            キヤノン（証券コード7751）の平均年間給与は<strong>8,817,253円（約881万円）</strong>、平均勤続年数は<strong>18.9年</strong>です（2025年12月期・有価証券報告書・提出会社）。中途採用は公式の職種検索ページから通年で応募でき、2026年11月12日の確認時点で96件が掲載されていました。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            本ページでは、有価証券報告書の原本と公式採用ページで確認した内容のみを掲載しています。確認日は2026年11月12日です。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">キヤノン転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">キヤノンの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">事業別の従業員数と人的資本データ</a></li>
            <li><a href="#s4" className="text-teal hover:underline">キヤノンの中途採用の状況（公式採用ページ）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">キヤノンの選考フロー（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">同業他社との平均年収の比較</a></li>
            <li><a href="#s7" className="text-teal hover:underline">キヤノン転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">キヤノン転職 よくある質問</a></li>
            <li><a href="#s9" className="text-teal hover:underline">出典</a></li>
          </ol>
        </nav>

        <h2 id="s1">キヤノン転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は8,817,253円（約881万円）、平均年齢44.3歳、平均勤続年数18.9年です（2025年12月期・提出会社22,921人）。</li>
            <li>提出会社の従業員の約4割（8,873人）がプリンティングビジネスユニットに所属しています。</li>
            <li>公式の職種検索ページには96件が掲載され、プリンティング・半導体露光装置・メディカル分野の技術職が中心でした（2026年11月12日確認）。</li>
            <li>選考は書類選考・適性検査のあと面接2〜3回で、最終面接は対面での実施予定と公式に案内されています。</li>
          </ul>
        </div>

        <h2 id="s2">キヤノンの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "キヤノン株式会社" },
                { label: "証券コード", value: "7751（東証プライム）" },
                { label: "本店所在地", value: "東京都大田区下丸子三丁目30番2号" },
                { label: "沿革", value: "1933年に精機光学研究所として発足し、1937年8月に精機光学工業株式会社として創立。1947年にキヤノンカメラ株式会社へ商号変更しています。" },
                { label: "平均年間給与", value: "8,817,253円（約881万円）／2025年12月期・提出会社" },
                { label: "平均年齢", value: "44.3歳（同）" },
                { label: "平均勤続年数", value: "18.9年（同）" },
                { label: "従業員数", value: "提出会社 22,921人／連結 165,547人（2025年12月31日現在・就業人員数）" },
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
          ※第125期有価証券報告書（2026年3月25日提出）の「従業員の状況」から転記しています。原本の注記では、従業員数は就業人員数でパートタイマー・期間社員等を含み、平均年間給与は賞与および基準外賃金を含みます。職種・年代・役職により実際の年収は異なります。
        </p>

        <h2 id="s3">事業別の従業員数と人的資本データ</h2>
        <p className="text-sm text-text-secondary mb-4">
          有価証券報告書に記載された提出会社のセグメント別従業員数です。応募先の事業規模を把握する目安としてご利用ください。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">セグメント</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">提出会社の従業員数</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">構成比（当サイト計算）</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["プリンティングビジネスユニット", "8,873人", "38.7%"],
                ["その他及び全社", "6,987人", "30.5%"],
                ["イメージングビジネスユニット", "3,899人", "17.0%"],
                ["インダストリアルビジネスユニット", "2,558人", "11.2%"],
                ["メディカルビジネスユニット", "604人", "2.6%"],
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
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "管理職に占める女性労働者の割合", value: "4.6%" },
                { label: "男性労働者の育児休業取得率", value: "86.3%" },
                { label: "労働者の男女の賃金の差異（男性＝100）", value: "全労働者 76.1%／正規雇用労働者 77.1%／パート・有期雇用者 75.4%" },
                { label: "同一役職レベルの男女の賃金の差異（正規雇用）", value: "部長職 97.2%／課長職 96.4%" },
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
          ※いずれも有価証券報告書（提出会社・当事業年度）の記載値です。原本では、男女の賃金の差異の要因として男性の管理職比率が高いことを挙げ、正規雇用労働者の賃金差異は前事業年度から1.5ポイント改善したと記載されています。構成比は従業員数をもとに当サイトが計算した値です（小数第2位を四捨五入）。
        </p>

        <h2 id="s4">キヤノンの中途採用の状況（公式採用ページ）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            キヤノンは公式サイトの<a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用ページ</a>で中途採用を案内しており、求人の検索と応募は<a href={JOBS} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">職種検索＆応募ページ</a>から行います。2026年11月12日に確認した内容は以下のとおりです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>掲載件数は96件です。この件数には、キャリア登録・採用イベント・障がい者採用の案内が含まれます。</li>
            <li>プリンティング分野：インクジェットプリンター・デジタル複合機の機械設計、電気設計、ファームウェア開発、品質保証などの募集が掲載されていました。</li>
            <li>産業機器分野：半導体露光装置・ディスプレイ露光装置の機械設計、光学システム設計、フィールドエンジニア、生産技術などの募集が掲載されていました。</li>
            <li>メディカル分野：医用機器の機械設計・電気設計・システム設計、画像診断システムのマーケティングやグローバル営業などの募集が掲載されていました。</li>
            <li>事務系・専門職：企業法務、会計／税務／財務、人事スタッフ職、特許技術職、知的財産法務などの募集もありました。</li>
            <li>キャリア採用ページでは、職種に応募しない「キャリア登録」、カムバック採用、リファラル採用も案内されています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">※募集状況は随時変わります。応募前に公式ページで最新の情報をご確認ください。</p>
        </div>

        <h2 id="s5">キヤノンの選考フロー（公式）</h2>
        <p className="text-sm text-text-muted mb-4">※公式の<a href={FLOW} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">選考フローページ</a>の記載を要約しています（2026年11月12日確認）。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "WEBエントリー", desc: "職種検索＆応募ページで希望職種を選び、エントリーフォームから応募します。書面による応募は受け付けていません。" },
            { step: 2, title: "書類選考・適性検査", desc: "人事と募集部門が書類選考を行い、並行して適性検査を受検します。書類選考には3週間程度かかることがあります。" },
            { step: 3, title: "面接（2〜3回）", desc: "最終面接は対面での実施が予定されています。各面接の結果は1〜2週間程度で連絡されます。" },
            { step: 4, title: "内定・入社", desc: "内定から入社までは2カ月以内（遅くとも3カ月以内）です。入社日は各月1日で、入社研修のあと配属先に出社します。" },
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

        <h2 id="s6">同業他社との平均年収の比較</h2>
        <p className="text-sm text-text-secondary mb-4">当サイトの企業ページに掲載している事務機器・精密機器メーカーの平均年間給与（いずれも有価証券報告書・提出会社）と並べました。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">平均年間給与</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "リコー", href: "/company/ricoh/", v: "約906万円" },
                { name: "キヤノン", href: "", v: "約881万円" },
                { name: "コニカミノルタ", href: "/company/konica-minolta/", v: "約844万円" },
                { name: "セイコーエプソン", href: "/company/epson/", v: "約808万円" },
                { name: "ブラザー工業", href: "/company/brother/", v: "約805万円" },
              ].map((r) => (
                <tr key={r.name} className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-navy">
                    {r.href ? <Link href={r.href} className="text-teal hover:underline">{r.name}</Link> : r.name}
                  </th>
                  <td className="py-3 px-3 text-text-secondary">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※キヤノン以外の値は当サイトの各企業ページの掲載値で、決算期・確認日は各ページに記載しています。決算期が異なるため、目安としてご覧ください。キヤノンは従業員22,921人と規模が大きく、平均勤続年数18.9年の長期雇用型の構成です。
        </p>

        <h2 id="s7">キヤノン転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">キヤノンは技術職の募集が中心です。メーカー・技術職の求人を扱う転職エージェントを併用すると、同業他社の募集とも比較できます。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数の多い総合型の転職エージェントです。メーカーの技術職・事務系職種を幅広く比較できます。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社の募集も含めて比較検討できます。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "管理職・専門職向けの転職エージェントです。経験を生かした専門職のポジションを検討する方に適しています。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型のサービスです。市場価値の把握や管理職・専門職の情報収集に利用できます。" },
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

        <h2 id="s8">キヤノン転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2 id="s9">出典</h2>
        <ul className="text-xs text-text-muted space-y-1 mb-8 list-disc pl-5">
          <li><a href={EDINET} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キヤノン株式会社 第125期 有価証券報告書</a>（2026年3月25日提出・EDINET書類管理番号 S100XTLJ）／2026年11月12日確認</li>
          <li><a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キヤノン キャリア採用</a>／2026年11月12日確認</li>
          <li><a href={FLOW} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キヤノン キャリア採用 選考フロー</a>／2026年11月12日確認</li>
          <li><a href={JOBS} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キヤノン株式会社 職種検索＆応募（HRMOS）</a>／2026年11月12日確認</li>
        </ul>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">キヤノンへの転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの条件は、公式の募集要項または転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/ricoh/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">リコー転職ガイド</Link>
            <Link href="/company/fujifilm/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">富士フイルムHD転職ガイド</Link>
            <Link href="/company/konica-minolta/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コニカミノルタ転職ガイド</Link>
            <Link href="/company/epson/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">セイコーエプソン転職ガイド</Link>
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体業界の年収ランキング</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
