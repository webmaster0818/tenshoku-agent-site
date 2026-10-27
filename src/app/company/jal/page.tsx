import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "日本航空(JAL)への転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "日本航空(JAL)（証券コード9201）への転職を有価証券報告書などの一次データで解説します。平均年間給与は約1,011万円（2026年3月期・有価証券報告書／提出会社）。キャリア採用の窓口と選考の考え方をまとめています。",
  alternates: { canonical: "/company/jal/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "日本航空(JAL)への転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "日本航空(JAL)（9201）の平均年収・中途採用・選考を有価証券報告書ベースで解説します。",
  },
};

const faqData = [
  {
    q: "日本航空(JAL)の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月22日提出、EDINETで2026年10月27日確認）によると、平均年間給与は10,112千円（約1,011万円・提出会社の常勤社員14,627名）で、対前事業年度増減率は6.5%です。921万円（2024年3月期）→949万円（2025年3月期）→1,011万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値）。国内雇用社員と海外雇用社員の平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "日本航空(JAL)は中途採用を行っていますか？",
    a: "行っています。JALの新卒・キャリア採用サイト（job-jal.com）には、キャリア採用の職種別募集要項として業務企画職（コーポレート／オペレーション／ビジネス・マーケティングコース、データサイエンス・デジタルテクノロジーコース、エアラインエンジニアコース）が掲載されており、選考は通年で実施すると記載されています（2026年10月27日確認）。募集中の部門は随時変わり、募集人数に達し次第締め切られるため、最新の状況は公式の募集要項でご確認ください。",
  },
  {
    q: "日本航空(JAL)はどんな会社ですか？",
    a: "国内線・国際線を運航するフルサービスキャリア(FSC)として、航空運送事業を営んでいます。有価証券報告書の本店所在地は東京都品川区東品川二丁目4番11号です。",
  },
  {
    q: "日本航空(JAL)の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は14.9年、平均年齢は40.2歳（提出会社の常勤社員）です。平均年齢・平均勤続年数は海外現地雇用社員を母数に含みません。",
  },
  {
    q: "航空会社の平均年収はどう推移していますか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、航空は旅客需要や燃油費の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、日本航空(JAL)も921万円→949万円→1,011万円と年ごとに動いています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "日本航空(JAL)への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/jal/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "日本航空(JAL)" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            日本航空(JAL)への転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            日本航空(JAL)（証券コード9201）は、国内線・国際線を運航するフルサービスキャリア(FSC)として、航空運送事業を営んでいます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">日本航空(JAL)転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">日本航空(JAL)の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">日本航空(JAL)の中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">日本航空(JAL)で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">日本航空(JAL)の選考フロー（業務企画職キャリア採用）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">日本航空(JAL)の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">日本航空(JAL)転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">日本航空(JAL)転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">日本航空(JAL)転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,011万円（10,112千円、2026年3月期・有価証券報告書、EDINETで2026年10月27日確認）。提出会社の常勤社員14,627名の平均値です。</li>
            <li>921万円（2024年3月期）→949万円（2025年3月期）→1,011万円（2026年3月期）と推移しており、空運4社で唯一1,000万円台に到達しています。2022年3月期の702万円から4年で309万円増加しており、コロナ後の回復幅が最も大きくなっています。</li>
            <li>キャリア採用は業務企画職の職種別募集要項が公式採用サイトに掲載され、選考は通年で実施されています。想定年収は一般職で420万円～900万円（エアラインエンジニアコースは450万円～950万円）と記載されています（2026年10月27日確認）。</li>
            <li>平均年齢は40.2歳、平均勤続年数は14.9年です。航空は旅客需要と燃油費の影響を受けやすく、コロナ禍で大きく落ち込んだ後に回復した経緯があります。単年の平均額だけでなく、推移もあわせて確認することをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">日本航空(JAL)の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "日本航空株式会社（JAL）" },
                { label: "証券コード", value: "9201" },
                { label: "本店所在地", value: "東京都品川区東品川二丁目4番11号（有価証券報告書）" },
                { label: "事業内容", value: "国内線・国際線を運航するフルサービスキャリア(FSC)の航空運送事業" },
                { label: "平均年間給与", value: "約1,011万円（10,112千円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "921万円（2024年3月期）→949万円（2025年3月期）→1,011万円（2026年3月期）" },
                { label: "平均年齢", value: "40.2歳（同・提出会社）" },
                { label: "平均勤続年数", value: "14.9年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YFIO.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月22日提出、EDINETで2026年10月27日確認）、2025年3月期以前の推移はIR BANK掲載値（2026年9月22日確認）に基づく提出会社単体の平均です。有価証券報告書の注記により、従業員数（常勤社員14,627名）は海外現地雇用社員を含み、他社への出向者・派遣社員（2,640名）と休職者（1,496名）を含みません。平均年間給与は基準外賃金・各種手当を含み、国内雇用社員と海外雇用社員の平均で、他社への出向者の給与を除いて算出されています。参考情報として、グループ連結の平均年間給与は地上社員7,002千円・運航乗務員21,527千円・客室乗務員6,327千円・合計8,119千円と記載されています。航空会社は総合職・客室乗務員・整備士など職種によって働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">日本航空(JAL)の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">JALの<a href="https://www.job-jal.com/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">新卒・キャリア採用サイト（キャリア採用情報）</a>には「年間採用数の50%をキャリア採用へ」（業務企画職）という方針が掲載されています。キャリア採用の職種別募集要項の主な内容は次のとおりです（2026年10月27日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-warm-gray"><th className="text-left py-2 px-3">募集職種（キャリア）</th><th className="text-left py-2 px-3">想定年収（一般職）</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3"><a href="https://www.job-jal.com/recruit/requirement/career01.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業務企画職（コーポレート／オペレーション／ビジネス・マーケティングコース）</a></td><td className="py-2 px-3">420万円～900万円</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3"><a href="https://www.job-jal.com/recruit/requirement/career02.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業務企画職（データサイエンス・デジタルテクノロジーコース）</a></td><td className="py-2 px-3">420万円～900万円</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3"><a href="https://www.job-jal.com/recruit/requirement/career05.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">業務企画職（エアラインエンジニアコース）</a></td><td className="py-2 px-3">450万円～950万円</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募資格は、大学・大学院の学位取得者または高等専門学校（専攻科）修了者で、国内外を問わず勤務できる方です。</li>
            <li>採用方式は「部門別採用型」で、募集中の部門から希望の初期配属先を選んで応募します。各部門とも募集人数に達し次第締め切られます。</li>
            <li>給与は就業経験などを踏まえて決定され、時間外労働手当などは別途支給と記載されています。入社時期は原則として四半期ごと（4月・7月・10月・1月の各1日付）です。</li>
            <li>公式に公表されている業務企画職の中途採用比率（2024年10月25日公表）は、採用実績比率が2022年度33%・2023年度40%です。</li>
            <li>客室乗務職のキャリア採用ページには「2025年度の募集は終了いたしました」と記載されています。</li>
          </ul>
<p className="text-sm text-text-secondary mt-4">20代・第二新卒で日本航空(JAL)のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">日本航空(JAL)で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収1,011万円の水準", desc: "当サイトが収録する空運4社の中で、日本航空(JAL)は1位です。" },
            { title: "需要回復の推移", desc: "921→949→1,011万円と年ごとに動きます。コロナ禍からの回復局面を数字が反映しています。" },
            { title: "グローバルな事業基盤", desc: "国際線や海外拠点を持つ会社では、英語を使う実務や海外勤務の機会があります。" },
            { title: "専門性の高い実務", desc: "路線計画・営業・整備・IT・財務など、職種ごとの専門実務経験が評価されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">日本航空(JAL)の選考フロー（業務企画職キャリア採用）</h2>
        <p className="text-sm text-text-muted mb-4">公式の募集要項では、マイページ「JAL Next Career GATE」での応募の流れが次の3ステップで案内され、選考は通年で実施すると記載されています（2026年10月27日確認）。面接の回数などは募集要項に記載がないため、応募後の案内をご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "チェックイン", desc: "JAL Next Career GATE（マイページ）で基本情報を登録します。チェックインは通年で受け付けています。" },
            { step: 2, title: "WEBエントリーシート提出", desc: "希望する部門を1つ選択し、WEBエントリーシートを提出します。業務企画職の4コース間で複数職務に同時にエントリーすることはできません（エアラインエンジニアコースとの併願は可能です）。" },
            { step: 3, title: "適性検査受検", desc: "適性検査を受検します。以降の選考は応募部門ごとに案内されます。" },
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

        <h2 id="s6">日本航空(JAL)の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,011万円（2026年3月期）は提出会社の常勤社員（国内雇用社員と海外雇用社員）の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。航空は旅客需要・燃油費の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均年齢は40.2歳、平均勤続年数は14.9年です。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジをご確認ください。</p>
        </div>

        <h2 id="s7">日本航空(JAL)転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
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

        <h2 id="s8">日本航空(JAL)転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">日本航空(JAL)転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kuuun-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">空運(航空) 年収ランキング</Link>
            <Link href="/company/ana-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ANAホールディングス転職ガイド</Link>
            <Link href="/company/starflyer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スターフライヤー転職ガイド</Link>
            <Link href="/company/skymark/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スカイマーク転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
