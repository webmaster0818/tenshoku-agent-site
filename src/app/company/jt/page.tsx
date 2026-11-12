import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/company/jt/" },
  title: "JT（日本たばこ産業）への転職は難しい？キャリア採用・平均年収1,003万円・募集職種を解説【2026年】",
  description:
    "JT（日本たばこ産業・証券コード2914）への転職を有価証券報告書と公式のキャリア採用ページで解説します。平均年間給与は10,039,116円（約1,003万円・2025年12月期・提出会社）です。医薬事業の譲渡による従業員数の変化、キャリア採用の掲載職種（2026年11月12日確認）、人的資本データをまとめています。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "JT（日本たばこ産業）への転職は難しい？キャリア採用・平均年収1,003万円・募集職種を解説【2026年】",
    description: "JT（2914）の平均年収・キャリア採用の掲載職種を有価証券報告書と公式採用ページで解説します。",
  },
};

const EDINET = "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100XSSA.pdf";
const JOBS = "https://hrmos.co/pages/jt-career/jobs";

const faqData = [
  {
    q: "JTの平均年収はいくらですか？",
    a: "有価証券報告書（第41期・2025年12月期）によると、提出会社の平均年間給与は10,039,116円（約1,003万円）です。平均年齢41.0歳、平均勤続年数14.7年、従業員数5,303人の平均で、賞与および基準外賃金を含みます（2026年11月12日にEDINETの原本で確認）。",
  },
  {
    q: "JTの平均勤続年数には日本専売公社の期間も含まれますか？",
    a: "はい。有価証券報告書の注記では、平均勤続年数には日本専売公社における勤続年数を含むと記載されています。JTは1985年4月に日本専売公社から株式会社に移行して設立されました。",
  },
  {
    q: "JTの従業員数が減ったのはなぜですか？",
    a: "有価証券報告書の注記では、2025年12月に医薬事業を譲渡したこと等により、提出会社の従業員数は前年度末に比べ691名減少したと記載されています。医薬事業は塩野義製薬に承継されています。",
  },
  {
    q: "JTのキャリア採用ではどのような職種を募集していますか？",
    a: "2026年11月12日に公式のキャリア採用ページ（HRMOS）を確認したところ、7件が掲載されていました。キャリア登録制度のほか、加熱式／電子たばこ（Ploom等）デバイスのメカ設計・ソフトウェア設計、RRP製品の生産技術、部品調達、たばこ中央研究所の研究開発職（認知科学・感性工学）などです。",
  },
  {
    q: "キャリア登録制度とは何ですか？",
    a: "公式ページでは、自身のキャリアを登録し、JT内に適した職種・ポジションがある場合に選考の案内を受ける仕組みと説明されています。特定の職種に限定せずに登録でき、登録後1年間検討され、連絡がない場合は登録情報が消去されると記載されています。退職者の登録も歓迎すると案内されています。",
  },
  {
    q: "JTの女性管理職比率はどのくらいですか？",
    a: "有価証券報告書では、提出会社の管理職に占める女性従業員の割合は10.9%、男性の育児休業等取得率は141.5%です。男女の賃金格差は全従業員で75.9%（男性を100とした場合）と記載されています。",
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
  headline: "JT（日本たばこ産業）への転職ガイド（有価証券報告書・公式採用ページにもとづく解説）",
  dateModified: "2026-11-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/jt/" },
  inLanguage: "ja",
};

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "JT（日本たばこ産業）" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
          JT（日本たばこ産業）への転職は難しい？キャリア採用・平均年収1,003万円・募集職種を解説【2026年】
        </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            JT（日本たばこ産業・証券コード2914）の平均年間給与は<strong>10,039,116円（約1,003万円）</strong>、平均勤続年数は<strong>14.7年</strong>です（2025年12月期・有価証券報告書・提出会社）。キャリア採用は公式ページに<strong>7件</strong>が掲載され、加熱式／電子たばこのデバイス開発と研究開発職が中心でした（2026年11月12日確認）。
          </p>
          <p className="text-text-secondary leading-relaxed mt-2">
            本ページでは、有価証券報告書の原本と公式のキャリア採用ページで確認した内容のみを掲載しています。確認日は2026年11月12日です。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">JT転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">JTの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">事業別の従業員数と医薬事業譲渡の影響</a></li>
            <li><a href="#s4" className="text-teal hover:underline">JTのキャリア採用の掲載職種（公式）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">人的資本データ（有価証券報告書）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">食品・飲料大手との平均年収の比較</a></li>
            <li><a href="#s7" className="text-teal hover:underline">JT転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">JT転職 よくある質問</a></li>
            <li><a href="#s9" className="text-teal hover:underline">出典</a></li>
          </ol>
        </nav>

        <h2 id="s1">JT転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は10,039,116円（約1,003万円）、平均年齢41.0歳、平均勤続年数14.7年です（2025年12月期・提出会社5,303人）。</li>
            <li>平均勤続年数には日本専売公社での勤続年数が含まれます（原本の注記）。</li>
            <li>2025年12月の医薬事業譲渡等により、提出会社の従業員数は前年度末から691名減少しています。</li>
            <li>キャリア採用の掲載は7件で、Ploom等のデバイス開発・生産技術・調達・研究開発職が中心です。募集要項には、総合職採用のため海外を含む全国転勤の可能性があると記載されています。</li>
          </ul>
        </div>

        <h2 id="s2">JTの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "日本たばこ産業株式会社" },
                { label: "証券コード", value: "2914（東証プライム）" },
                { label: "本店所在地", value: "東京都港区虎ノ門四丁目1番1号" },
                { label: "沿革", value: "1949年6月設立の日本専売公社を前身とし、1985年4月に日本たばこ産業株式会社として設立されました。" },
                { label: "平均年間給与", value: "10,039,116円（約1,003万円）／2025年12月期・提出会社" },
                { label: "平均年齢", value: "41.0歳（同）" },
                { label: "平均勤続年数", value: "14.7年（同・日本専売公社での勤続年数を含む）" },
                { label: "従業員数", value: "提出会社 5,303人／連結 52,867人（2025年12月31日現在・就業人員数）" },
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
          ※第41期有価証券報告書（2026年3月23日提出）の「従業員の状況」から転記しています。原本の注記では、従業員数は契約社員（27人）・休職者（174人）・当社への出向者（68人）を含み、当社からの出向者（588人）を含みません。平均年間給与（税込）は賞与および基準外賃金を含みます。職種・年代・役職により実際の年収は異なります。
        </p>

        <h2 id="s3">事業別の従業員数と医薬事業譲渡の影響</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">セグメント</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">提出会社</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">連結</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["たばこ事業", "4,746人", "47,900人"],
                ["加工食品事業", "29人", "3,906人"],
                ["全社共通業務等", "528人", "1,061人"],
                ["合計", "5,303人", "52,867人"],
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
        <p className="text-sm text-text-secondary mb-4">
          提出会社の従業員の約9割（4,746人・89.5%、当サイト計算）がたばこ事業に所属しています。有価証券報告書によると、JTは2025年5月に塩野義製薬と医薬事業の承継等に関する合意書を締結し、2025年12月に医薬事業を譲渡しました。これにより提出会社の従業員数は前年度末から691名減少しています。
        </p>
        <p className="text-xs text-text-muted mb-8">
          ※臨時従業員は外数で、提出会社の年間平均は276人です。医薬事業を承継した会社の平均年収は<Link href="/company/shionogi/" className="text-teal hover:underline">塩野義製薬の転職ガイド</Link>に掲載しています。
        </p>

        <h2 id="s4">JTのキャリア採用の掲載職種（公式）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            JTのキャリア採用は、公式の<a href={JOBS} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用ページ（HRMOS・日本たばこ産業株式会社）</a>で募集職種を公開しています。2026年11月12日の確認時点で掲載されていた7件は以下のとおりです（公式表記を要約）。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キャリア登録制度（職種を限定しない登録。登録後1年間検討）</li>
            <li>【R&amp;D】RRP Sourcing 生産技術（Ploom等のRRP製品のメカ製造技術、OEM/ODM先の工程開発レビュー・指導など）</li>
            <li>開発職：加熱式／電子たばこ（Ploom等）デバイスのメカ設計（開発リーダー）</li>
            <li>開発職：加熱式／電子たばこ（Ploom等）デバイスのソフトウェア・アプリケーション設計</li>
            <li>部品調達およびEMS／部材サプライヤー管理業務</li>
            <li>研究開発職（たばこ中央研究所：認知科学）</li>
            <li>研究開発職（たばこ中央研究所：感性工学_評価）</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">
            確認した募集要項では、留意事項として「たばこに対するネガを持つ方は不可」「総合職採用のため、海外を含む全国転勤可能性有り」「賃金に関しては、職歴・スキル等を総合的に勘案し決定」と記載されていました。RRP Sourcing 生産技術とデバイス開発職2件の勤務地は東京都墨田区横川、キャリア登録は本社（東京都港区虎ノ門）と表示されています。
          </p>
          <p className="text-xs text-text-muted mt-4">※RRP（Reduced-Risk Products）は、JTグループが「喫煙に伴う健康へのリスクを低減させる可能性のある製品」と定義する製品群です（公式募集要項の記載）。募集状況は随時変わるため、応募前に公式ページをご確認ください。</p>
        </div>

        <h2 id="s5">人的資本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "管理職に占める女性従業員の割合", value: "10.9%" },
                { label: "男性の育児休業等取得率", value: "141.5%" },
                { label: "男女の賃金格差（男性＝100）", value: "全従業員 75.9%／従業員 75.8%／臨時雇用者 103.1%" },
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
          ※有価証券報告書「多様性に関する指標」（提出会社）の記載値です。原本の注記では、過年度に配偶者が出産した従業員が当事業年度に育児休業を取得することがあるため、取得率が100%を超えることがあると説明されています。男女の賃金格差については、同一労働の賃金に差はなく、等級別人数構成の差によるものと記載されています。
        </p>

        <h2 id="s6">食品・飲料大手との平均年収の比較</h2>
        <p className="text-sm text-text-secondary mb-4">JTは東証33業種で「食料品」に分類されます。当サイトの企業ページに掲載している食品・飲料大手の平均年間給与（いずれも有価証券報告書）と並べました。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">会社</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">平均年間給与</th>
                <th className="text-left py-3 px-3 bg-warm-gray font-bold text-navy">区分</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "アサヒグループHD", href: "/company/asahi-ghd/", v: "約1,335万円", t: "持株会社単体" },
                { name: "サントリー食品インターナショナル", href: "/company/suntory-bf/", v: "約1,170万円", t: "提出会社" },
                { name: "味の素", href: "/company/ajinomoto/", v: "約1,061万円", t: "提出会社" },
                { name: "JT（日本たばこ産業）", href: "", v: "約1,003万円", t: "提出会社" },
                { name: "キリンHD", href: "/company/kirin-hd/", v: "約998万円", t: "持株会社単体" },
                { name: "明治HD", href: "/company/meiji-hd/", v: "約938万円", t: "持株会社単体" },
              ].map((r) => (
                <tr key={r.name} className="border-b border-border">
                  <th className="text-left py-3 px-3 font-bold text-navy">
                    {r.href ? <Link href={r.href} className="text-teal hover:underline">{r.name}</Link> : r.name}
                  </th>
                  <td className="py-3 px-3 text-text-secondary">{r.v}</td>
                  <td className="py-3 px-3 text-text-secondary">{r.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※JT以外の値は当サイトの各企業ページの掲載値で、決算期・確認日は各ページに記載しています。持株会社単体の値は本社機能の従業員の平均で、事業会社の平均ではありません。JTは5,303人の事業会社の平均である点が異なります。業界全体の比較は<Link href="/company/shokuhin-salary/" className="text-teal hover:underline">食品・飲料業界の年収ランキング</Link>をご覧ください。
        </p>

        <h2 id="s7">JT転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">JTの公式ページに掲載された募集は技術職・研究職が中心です。メーカーの技術職・研究職の求人を扱う転職エージェントで、同業種の募集とあわせて比較する方法があります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数の多い総合型の転職エージェントです。メーカーの技術職・事務系職種を幅広く比較できます。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントサービスと求人サイトの両方を利用できます。同業他社の募集も含めて比較検討できます。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "管理職・専門職向けの転職エージェントです。開発リーダーなどの専門職を検討する方に適しています。" },
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

        <h2 id="s8">JT転職 よくある質問</h2>
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
          <li><a href={EDINET} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本たばこ産業株式会社 第41期 有価証券報告書</a>（2026年3月23日提出・EDINET書類管理番号 S100XSSA）／2026年11月12日確認</li>
          <li><a href={JOBS} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本たばこ産業株式会社 キャリア採用（HRMOS）</a>／2026年11月12日確認</li>
        </ul>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">JTへの転職を検討する方へ</h2>
          <p className="text-white/70 text-sm mb-6">職種ごとの条件は、公式の募集要項または転職エージェントを通じてご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/shokuhin-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">食品・飲料業界の年収ランキング</Link>
            <Link href="/company/shionogi/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">塩野義製薬転職ガイド</Link>
            <Link href="/company/kirin-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キリンHD転職ガイド</Link>
            <Link href="/company/ajinomoto/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">味の素転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
