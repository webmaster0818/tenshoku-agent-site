import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/mitsui-fudosan/" },
  title: "三井不動産への転職は難しい？総合職キャリア採用・平均年収1,855万円・採用実績を解説【2026年】",
  description:
    "三井不動産（証券コード8801）への転職を有価証券報告書と公式採用サイトで解説します。平均年間給与は18,555千円（約1,855万円・2026年3月期・提出会社）です。総合職キャリア採用の過去6年の採用人数（22〜31名）、応募資格、入社者の前職業界、募集要項をまとめています（2026年11月12日確認）。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "三井不動産への転職は難しい？総合職キャリア採用・平均年収1,855万円・採用実績を解説【2026年】",
    description: "三井不動産（8801）の平均年収・総合職キャリア採用の実績と募集要項を有価証券報告書と公式採用サイトで解説します。",
  },
};

const EDINET = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YHUO.pdf";
const CAREER = "https://recruit.mitsuifudosan.co.jp/career/";
const REQ = "https://recruit.mitsuifudosan.co.jp/career/recruit/requirements.html";
const FAQ = "https://recruit.mitsuifudosan.co.jp/career/recruit/faq.html";
const CORP_RECRUIT = "https://www.mitsuifudosan.co.jp/corporate/recruit/";

const hires = [
  { y: "2020年度", n: 30 },
  { y: "2021年度", n: 26 },
  { y: "2022年度", n: 31 },
  { y: "2023年度", n: 24 },
  { y: "2024年度", n: 27 },
  { y: "2025年度", n: 22 },
];

const faqData = [
  {
    q: "三井不動産の平均年収はいくらですか？",
    a: "有価証券報告書（第114期・2026年3月期）によると、提出会社の平均年間給与は18,555千円（約1,855万円）で、対前事業年度増減率は5.7%です。平均年齢42.1歳、平均勤続年数16.0年、従業員数1,981人の平均で、賞与および基準外賃金を含みます（2026年11月12日にEDINETの原本で確認）。",
  },
  {
    q: "三井不動産の総合職キャリア採用では毎年何人採用していますか？",
    a: "公式採用サイトのFAQでは、総合職の採用実績は2020年度30名、2021年度26名、2022年度31名、2023年度24名、2024年度27名、2025年度22名です。6年間の合計は160名、年平均は約26.7名です（当サイト計算）。採用人数は固定していないと記載されています。",
  },
  {
    q: "不動産業界の経験がなくても応募できますか？",
    a: "公式の募集要項では、応募資格は大学卒業後または大学院修了後の就業経験満4年以上で、不動産業務に関する経験は不問と記載されています。就業経験年数は目安で、応募の絶対条件ではないとされています。",
  },
  {
    q: "どのような業界から転職している人がいますか？",
    a: "公式FAQでは、入社者の前職の業界として、総合商社、コンサルティングファーム、建設会社（ゼネコン・プラント）、各種メーカー（重工・電機・素材）、銀行、証券会社、官公庁・公的機関、石油・エネルギー会社、生保・損保会社、鉄道会社、航空会社、IT・通信会社、マスコミ、広告代理店、設計事務所、法律事務所、会計事務所が挙げられています。",
  },
  {
    q: "勤務地や配属は選べますか？",
    a: "募集要項では、勤務地は本社（東京・日本橋）ほか国内各地・海外で、地域限定はできないと記載されています。公式FAQでは、総合職は事業部門・コーポレート部門・関連会社への出向などを3〜5年前後で複数経験する運用であると説明されています。",
  },
  {
    q: "宅建などの資格は応募に必要ですか？",
    a: "公式FAQでは、応募に必要な公的資格はないと記載されています。入社後に全社レベルで取得すべきとされている資格は、宅地建物取引士、日商簿記3級以上、ビジネス実務法務3級以上、ITパスポート、TOEIC730点以上です。",
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
  headline: "三井不動産への転職ガイド（有価証券報告書・公式採用サイトにもとづく解説）",
  dateModified: "2026-11-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/mitsui-fudosan/" },
  inLanguage: "ja",
};

export default function CompanyCareer() {
  const max = Math.max(...hires.map((h) => h.n));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "三井不動産" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
          三井不動産への転職は難しい？総合職キャリア採用・平均年収1,855万円・採用実績を解説【2026年】
        </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            三井不動産（証券コード8801）の平均年間給与は<strong>18,555千円（約1,855万円）</strong>です（2026年3月期・有価証券報告書・提出会社）。総合職のキャリア採用は<strong>年22〜31名</strong>（2020〜2025年度の公式実績）で、不動産業務の経験は不問と公式に記載されています。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            本ページでは、有価証券報告書の原本と公式採用サイトで確認した内容のみを掲載しています。確認日は2026年11月12日です。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">三井不動産転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">三井不動産の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">総合職キャリア採用の採用実績（公式）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">募集要項と応募資格（公式）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">入社後の配属・資格・人事制度（公式FAQ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">人的資本データ（有価証券報告書）</a></li>
            <li><a href="#s7" className="text-teal hover:underline">大手デベロッパーとの平均年収の比較</a></li>
            <li><a href="#s8" className="text-teal hover:underline">三井不動産転職で活用したい転職エージェント</a></li>
            <li><a href="#s9" className="text-teal hover:underline">三井不動産転職 よくある質問</a></li>
            <li><a href="#s10" className="text-teal hover:underline">出典</a></li>
          </ol>
        </nav>

        <h2 id="s1">三井不動産転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は18,555千円（約1,855万円）、平均年齢42.1歳、平均勤続年数16.0年です（2026年3月期・提出会社1,981人）。</li>
            <li>総合職キャリア採用の実績は2020〜2025年度の6年間で計160名、年平均は約26.7名です（公式値から当サイト計算）。</li>
            <li>応募資格は大学卒業後または大学院修了後の就業経験満4年以上が目安で、不動産業務の経験は不問です。</li>
            <li>勤務地は国内各地・海外で地域限定はできず、複数部署を3〜5年前後で経験する運用です。</li>
          </ul>
        </div>

        <h2 id="s2">三井不動産の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "三井不動産株式会社" },
                { label: "証券コード", value: "8801（東証プライム）" },
                { label: "本店所在地", value: "東京都中央区日本橋室町二丁目1番1号" },
                { label: "沿革", value: "1941年7月15日、旧三井合名会社所有の不動産の経営を主な目的として設立されました。" },
                { label: "平均年間給与", value: "18,555千円（約1,855万円）／2026年3月期・提出会社（対前事業年度増減率 5.7%）" },
                { label: "平均年齢", value: "42.1歳（同）" },
                { label: "平均勤続年数", value: "16.0年（同）" },
                { label: "従業員数", value: "提出会社 1,981人（就業人数は2,209人）／連結 27,704人（2026年3月31日現在）" },
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
          ※第114期有価証券報告書（2026年6月24日提出）の「従業員の状況」から転記しています。原本の注記では、平均年間給与は賞与および基準外賃金を含み、従業員数に契約社員・他社からの出向者を含め、他社への出向者を除いた就業人数は2,209人です。職種・年代・役職により実際の年収は異なります。
        </p>

        <h2 id="s3">総合職キャリア採用の採用実績（公式）</h2>
        <p className="text-sm text-text-secondary mb-4">
          公式採用サイトの<a href={FAQ} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">FAQ</a>に掲載された、総合職キャリア採用の過去6年間の採用人数です。
        </p>
        <div className="space-y-2 mb-4">
          {hires.map((h) => (
            <div key={h.y} className="flex items-center gap-3 text-sm">
              <span className="w-20 shrink-0 text-text-secondary">{h.y}</span>
              <div className="flex-1 bg-warm-gray rounded h-5">
                <div className="bg-navy h-5 rounded" style={{ width: `${(h.n / max) * 100}%` }} />
              </div>
              <span className="w-12 text-right font-bold text-navy">{h.n}名</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※公式FAQの「過去6年間の採用実績（総合職）」の値です（2026年11月12日確認）。合計160名・年平均約26.7名は当サイトの計算です。公式FAQでは、採用人数は固定していないと記載されています。2026年11月12日時点の公式サイトには「2026年度総合職キャリア採用のエントリー受付中」と掲載されていました。
        </p>

        <h2 id="s4">募集要項と応募資格（公式）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "募集職種", value: "正社員・総合職掌" },
                { label: "職務内容", value: "オフィスビル、商業施設、ホテルリゾート、すまいとくらし、不動産ソリューション、ロジスティクス、ベンチャー共創、ライフサイエンス、グローバル、ビジネスイノベーションの企画・開発・営業・運営、ならびにコーポレート（総務・経理・広報・人事ほか）業務等" },
                { label: "応募資格", value: "大学卒業後または大学院修了後の就業経験満4年以上（目安であり絶対条件ではない）。不動産業務に関する経験は不問。過去に応募した方も再応募可（同じ職種・同じ年度内の複数回エントリーは不可）" },
                { label: "勤務地", value: "本社（東京・日本橋）ほか国内各地・海外（地域限定不可）" },
                { label: "勤務時間", value: "スーパーフレックス制度（コアタイムなし）。標準的な勤務時間は9:00〜17:30" },
                { label: "給与・賞与・昇給", value: "当社規定による／賞与 年2回／昇給 年1回" },
                { label: "休日", value: "完全週休2日制（土・日）、祝日、年末年始。年間休日122日（2024年度）" },
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
          ※公式の<a href={REQ} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集要項</a>（総合職キャリア採用）の記載です（2026年11月12日確認）。三井不動産はこのほか、エキスパート職（IT系）採用と三井不動産グループキャリア採用も<a href={CORP_RECRUIT} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトの採用情報</a>で案内しています。
        </p>

        <h2 id="s5">入社後の配属・資格・人事制度（公式FAQ）</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>選考の適性・能力試験では「基礎的能力・業務への適性」を確認し、不動産の専門知識に関する出題はないと記載されています。</li>
            <li>総合職は、事業部門・コーポレート部門・関連会社への出向などを3〜5年前後で複数経験します。文系・理系のコース設定はありません。</li>
            <li>入社後に全社レベルで取得すべきとされる資格は、宅地建物取引士・日商簿記3級以上・ビジネス実務法務3級以上・ITパスポート・TOEIC730点以上です。資格取得を昇給・昇格の条件にはしていないと記載されています。</li>
            <li>人事制度は職能資格制度で、定年は就業規則上65歳です。入社に伴う支度金はありません。</li>
            <li>海外拠点として、ニューヨーク・サンフランシスコ・ロンドン・シンガポール・ホノルル・ベンガルール・上海・台北・クアラルンプール・バンコク・シドニーが挙げられています。</li>
          </ul>
        </div>

        <h2 id="s6">人的資本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "管理的地位にある労働者に占める女性労働者の割合", value: "11.1%（2026年4月・総合職掌）" },
                { label: "男性労働者の育児休業等取得率", value: "103.2%" },
                { label: "労働者の男女の賃金の額の差異（男性＝100）", value: "全労働者 49.9%／正規雇用労働者 62.7%／パート・有期労働者 46.7%" },
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
          ※有価証券報告書（提出会社）の記載値です。原本では、育児休業等取得率は配偶者が出産した年度と取得年度が異なる場合に100%を超えることがあると注記されています。男女の賃金の差異については、同一職掌・同一資格で同一の給与制度を適用しており、職掌・雇用形態などの人員構成の違いにより生じていると説明されています（2026年4月時点の女性正社員比率は30.8%）。
        </p>

        <h2 id="s7">大手デベロッパーとの平均年収の比較</h2>
        <p className="text-sm text-text-secondary mb-8">
          当サイトの<Link href="/company/fudosan-salary/" className="text-teal font-bold hover:underline">不動産デベロッパーの年収ランキング</Link>（7社・有価証券報告書の原本で比較）では、三井不動産の約1,855万円はヒューリック（約2,295万円）に次ぐ2番目の水準で、三菱地所（約1,759万円）が続きます。ヒューリックは従業員234人と少人数で、1,000人を超える提出会社の中では三井不動産が最も高い値です。
        </p>

        <h2 id="s8">三井不動産転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">総合職キャリア採用は公式サイトからエントリーします。グループ会社や同業他社の求人もあわせて検討する場合は、転職エージェントの併用が有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リアルエステートWORKS", href: "/review/realestate-works/", desc: "不動産業界に特化した転職エージェントです。当サイトで公表データを整理しています。" },
            { name: "RSG", href: "/review/rsg-fudosan/", desc: "建設・不動産を専門とする転職エージェントです。当サイトで公表データを整理しています。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "管理職・専門職向けの転職エージェントです。アセットマネジメントや財務などの専門職を検討する方に適しています。" },
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

        <h2 id="s9">三井不動産転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <h2 id="s10">出典</h2>
        <ul className="text-xs text-text-muted space-y-1 mb-8 list-disc pl-5">
          <li><a href={EDINET} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三井不動産株式会社 第114期 有価証券報告書</a>（2026年6月24日提出・EDINET書類管理番号 S100YHUO）／2026年11月12日確認</li>
          <li><a href={CAREER} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三井不動産 総合職キャリア採用情報</a>／2026年11月12日確認</li>
          <li><a href={REQ} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三井不動産 総合職キャリア採用 募集要項</a>／2026年11月12日確認</li>
          <li><a href={FAQ} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三井不動産 総合職キャリア採用 FAQ</a>／2026年11月12日確認</li>
          <li><a href={CORP_RECRUIT} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三井不動産 採用情報</a>／2026年11月12日確認</li>
        </ul>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">三井不動産への転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">応募時期や条件は、公式の募集要項または転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/fudosan-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">不動産デベロッパーの年収ランキング</Link>
            <Link href="/company/kensetsu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">建設ゼネコンの年収ランキング</Link>
            <Link href="/company/shosha-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">総合商社の年収ランキング</Link>
            <Link href="/company/mitsui-bussan/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">三井物産転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
