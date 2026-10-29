import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "SGホールディングスの年収・転職｜平均786万円・佐川急便は564万円・中途採用の窓口【2026年】",
  description:
    "SGホールディングスの平均年収は約786万円（2026年3月期・有価証券報告書、提出会社242人）、最大人員会社の佐川急便は約564万円です。SGHDは中途採用をWebサイトで募集しておらず、中途採用の窓口は佐川急便の採用ページです。",
  alternates: { canonical: "/company/sg-holdings/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "SGホールディングスの年収・転職｜平均786万円・佐川急便は564万円・中途採用の窓口【2026年】",
    description: "SGホールディングス（9143）と佐川急便の平均年収、中途採用の窓口を有価証券報告書と公式採用ページで確認して解説します。",
  },
};

const faqData = [
  {
    q: "SGホールディングスの平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月10日提出、EDINETで2026年10月19日確認）によると、平均年間給与は7,864,340円（約786万円・持株会社である提出会社の従業員242人）で、対前事業年度増減率は2.24%です。738万円（2024年3月期）→769万円（2025年3月期）→786万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年9月22日確認）。同じ有価証券報告書に記載された最大人員会社の佐川急便は、従業員38,920人・平均年間給与5,641,733円（約564万円）です。いずれも賞与及び基準外賃金を含みます。",
  },
  {
    q: "SGホールディングスは中途採用を行っていますか？",
    a: "SGホールディングスの公式採用ページ（www.sg-hldgs.co.jp/recruit/）では、中途採用について「ただいまWebサイトからは募集していません」と記載されています（2026年10月29日確認）。同ページで公表されている正規雇用労働者の中途採用比率は、2023年度22%・2024年度18%・2025年度46%です。グループ中核の佐川急便は、採用情報ページ（www.sagawa-exp.co.jp/recruit/career/）で中途採用（社員）の応募を受け付けています。",
  },
  {
    q: "SGホールディングスはどんな会社ですか？",
    a: "佐川急便を中核とする物流グループの持株会社です。有価証券報告書の本店所在地は京都市南区上鳥羽角田町68番地です。",
  },
  {
    q: "SGホールディングスの平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は9.9年、平均年齢は38.5歳（提出会社）です。平均勤続年数は、連結子会社からの転籍者について当該会社の勤続年数を通算しています。佐川急便は平均年齢44.2歳・平均勤続年数15.3年です。",
  },
  {
    q: "SGホールディングスの平均年収はどう推移していますか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、物流は取扱量や運賃水準の影響を受けるため賞与も変動します。実際、SGホールディングスも738万円→769万円→786万円と年ごとに変動しています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SGホールディングスの年収・転職｜平均786万円・佐川急便は564万円・中途採用の窓口【有価証券報告書準拠】",
  dateModified: "2026-10-29",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/sg-holdings/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "SGホールディングス" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            SGホールディングスの年収・転職｜平均786万円・佐川急便は564万円・中途採用の窓口【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/sg-holdings.jpg" alt="SGホールディングスの採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">SGホールディングス 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            SGホールディングスの平均年間給与は<strong>7,864,340円（約786万円）</strong>です（2026年3月期・有価証券報告書、持株会社である提出会社の従業員242人）。同じ有価証券報告書に記載された最大人員会社の<strong>佐川急便は5,641,733円（約564万円、従業員38,920人）</strong>です。SGホールディングスは中途採用をWebサイトで募集しておらず（2026年10月29日確認）、グループで中途採用の応募を受け付けている窓口は佐川急便の採用ページです。
            SGホールディングス（証券コード9143）は、佐川急便を中核とする物流グループの持株会社です。本記事では、有価証券報告書と公式採用ページの記載をもとに、年収・中途採用の窓口を整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">SGホールディングス転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">SGホールディングスの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">SGホールディングスの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">SGホールディングスで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">SGホールディングスの選考フロー（一般的な流れ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">SGホールディングスの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">SGホールディングス転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">SGホールディングス転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">SGホールディングス転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約786万円です（7,864,340円、2026年3月期・有価証券報告書、EDINETで2026年10月29日再確認）。持株会社である提出会社の従業員242人（ほかにパートナー社員等10人）の平均値です。</li>
            <li>最大人員会社の佐川急便は、従業員38,920人・平均年齢44.2歳・平均勤続年数15.3年・平均年間給与5,641,733円（約564万円）です（同じ有価証券報告書の記載）。</li>
            <li>738万円（2024年3月期）→769万円（2025年3月期）→786万円（2026年3月期）と推移しています。いずれも持株会社単体の値です。平均勤続9.9年と短めであり、佐川急便の現場職の水準とは異なります。</li>
            <li>SGホールディングスの公式採用ページでは、中途採用は「ただいまWebサイトからは募集していません」と記載されています。中途採用比率は2023年度22%・2024年度18%・2025年度46%です（2026年10月29日確認）。</li>
            <li>平均年齢は38.5歳、平均勤続年数は9.9年です。物流は燃料費・人件費・取扱量の影響を受けやすく、2024年問題以降の運賃改定や賃上げが数字に表れ始めています。単年の平均額だけでなく、推移もあわせて確認することをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">SGホールディングスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社SGホールディングス" },
                { label: "証券コード", value: "9143" },
                { label: "本店所在地", value: "京都市南区上鳥羽角田町68番地（有価証券報告書）" },
                { label: "事業内容", value: "佐川急便を中核とする物流グループの持株会社" },
                { label: "平均年間給与", value: "約786万円（7,864,340円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "738万円（2024年3月期）→769万円（2025年3月期）→786万円（2026年3月期）" },
                { label: "従業員数（提出会社）", value: "242人（就業人員。ほかにパートナー社員等10人）" },
                { label: "平均年齢", value: "38.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "9.9年（同・提出会社）" },
                { label: "参考：佐川急便", value: "従業員38,920人・平均44.2歳・勤続15.3年・平均年間給与5,641,733円（約564万円、最大人員会社として同じ有価証券報告書に記載）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100Y9P7.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月10日提出、EDINETで2026年10月19日確認・10月29日再確認）、それ以前の推移はIR BANK掲載値（2026年9月22日確認）に基づく提出会社の平均です。有価証券報告書の注記により、従業員数は就業人員数で、平均年間給与には賞与及び基準外賃金を含み、平均勤続年数は連結子会社からの転籍者について当該会社の勤続年数を通算しています。物流会社は総合職・ドライバー職・現業職など職種によって働き方も処遇体系も異なり、提出会社(とくに持株会社)に在籍する従業員の構成は会社ごとに大きく違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">SGホールディングスの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">SGホールディングスの<a href="https://www.sg-hldgs.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用ページ</a>では、中途採用について「ただいまWebサイトからは募集していません」と記載されています（2026年10月29日確認）。新卒採用はグループ合同募集として案内されています。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-warm-gray"><th className="text-left py-2 px-3">年度</th><th className="text-left py-2 px-3">正規雇用労働者の中途採用比率（SGホールディングス公表）</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3">2023年度</td><td className="py-2 px-3">22%</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">2024年度</td><td className="py-2 px-3">18%</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">2025年度</td><td className="py-2 px-3">46%</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>グループ中核の佐川急便は、<a href="https://www.sagawa-exp.co.jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">採用情報ページ（中途採用）</a>で社員での勤務を希望する方の応募を受け付けています。セールスドライバー職・輸送ドライバー職・営業係長職などの中途入社社員のインタビューも掲載されています（2026年10月29日確認）。</li>
            <li>佐川急便の採用情報ページには、中途採用のほか、パートナー採用（パート・アルバイト）、社員紹介採用、障がい者採用の窓口があります。</li>
            <li>※募集状況は変動するため、最新の情報は各社の公式採用ページにてご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒でSGホールディングスのような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">SGホールディングスで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収786万円の水準", desc: "当サイト収録の陸運・物流8社の中で、SGホールディングスは5位です。" },
            { title: "直近3期の推移", desc: "738→769→786万円と推移しており、運賃改定や賃上げの動きが数字に表れています。" },
            { title: "グローバルな事業基盤", desc: "国際輸送や海外拠点を持つ会社では、英語を使う実務や海外勤務の機会があります。" },
            { title: "専門性の高い実務", desc: "営業・倉庫運営・国際輸送・IT・財務など、職種ごとの専門実務経験が評価されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">SGホールディングスの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※SGホールディングスは2026年10月29日時点で中途採用をWebサイトで募集していないため、公式の選考フローは確認できません。以下は中途採用における一般的な選考の流れの一例で、グループ各社の実際の選考は応募先の募集要項で案内されます。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "募集要項の確認・応募", desc: "応募先（佐川急便などのグループ各社）の採用ページや転職エージェントで募集職種を確認し、応募します。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接", desc: "応募職種との適合性や実務経験が確認されます。回数は応募先・職種により異なります。" },
            { step: 4, title: "内定・条件提示", desc: "選考を通過すると内定となり、条件が提示されます。" },
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

        <h2 id="s6">SGホールディングスの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約786万円（2026年3月期）は持株会社である提出会社の従業員242人の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。物流は取扱量・運賃水準の影響を受け、賞与もそれに連動します。</li>
            <li>平均年齢は38.5歳、平均勤続年数は9.9年です。平均年収は年齢構成の影響を受ける点にご留意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジをご確認いただくことをおすすめします。</p>
        </div>

        <h2 id="s7">SGホールディングス転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">SGホールディングスは中途採用をWebサイトで募集していないため、グループ各社の求人は各社の採用ページや転職エージェント経由で確認すると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "業界最大級の求人数を有するエージェントです。大手からベンチャーまで幅広い求人を扱っています。" },
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

        <h2 id="s8">SGホールディングス転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">SGホールディングス転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">募集状況は、SGホールディングス・佐川急便の公式採用ページと転職エージェントの両方でご確認ください。</p>
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
