import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "日本郵船への転職【2026年10月】中途採用の募集職種・応募資格・選考と平均年収1,554万円",
  description:
    "日本郵船のキャリア採用（中途）は陸上職事務系・陸上職技術系・海上職の3職種＋リボーディング制度。応募資格「経験職務・業界は不問」、選考は書類と面接3回程度（公式募集要項・2026年10月15日確認）。平均年収約1,554万円（有価証券報告書）も整理しています。",
  alternates: { canonical: "/company/nippon-yusen/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "日本郵船への転職【2026年10月】中途採用の募集職種・応募資格・選考と平均年収1,554万円",
    description: "日本郵船のキャリア採用3職種・応募資格・選考（公式・10/15確認）と平均年収約1,554万円（有価証券報告書）。",
  },
};

const faqData = [
  {
    q: "日本郵船の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月16日提出、EDINETで2026年10月25日確認）によると、平均年間給与は15,545,044円（約1,554万円・提出会社単体）です。1,378万円（2024年3月期）→1,435万円（2025年3月期）→1,554万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年9月22日確認）。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "日本郵船は中途採用を行っていますか？",
    a: "はい。公式のキャリア採用サイト（https://www.nyk.com/recruit/career/）の募集要項に、陸上職事務系（総合職）・陸上職技術系（総合職）・海上職（航海士/機関士）と、元社員向けのリボーディング制度が掲載されています（2026年10月15日確認）。希望職種の募集がない場合の「キャリア登録」窓口もあります。",
  },
  {
    q: "日本郵船はどんな会社ですか？",
    a: "定期船・不定期専用船・航空運送・物流を展開する海運国内最大手です。本社は東京都千代田区丸の内二丁目3番2号にあります。",
  },
  {
    q: "日本郵船の中途採用は未経験の業界からでも応募できますか？",
    a: "陸上職事務系の応募資格は「四年制大学、大学院または高等専門学校を卒業され、就業経験のある方」で、「経験職務・業界は不問」と明記されています。陸上職技術系も「業界・職種経験は不問」（理系学部・大学院理系が対象）です。一方、海上職は航海士・機関士としての乗船履歴と三級海技士以上の海技免状などが必須です（公式募集要項・2026年10月15日確認）。",
  },
  {
    q: "日本郵船の中途採用の選考は何回ですか？",
    a: "公式募集要項では、陸上職事務系・技術系・海上職とも「書類選考及び面接（3回程度）」、リボーディング制度は「書類選考及び面接（2～3回程度）」です。応募はマイページ上のガイダンスに従って行います。なお、過去に応募した人も再応募できますが、1年間に複数回の応募はできません（2026年10月15日確認）。倍率は公表されていません。",
  },
  {
    q: "日本郵船の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は13.9年、平均年齢は37.8歳（2026年3月期・提出会社）です。",
  },
  {
    q: "海運会社の平均年収が高いのはなぜですか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、海運は市況（運賃・傭船料）の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、日本郵船も1,378万円→1,435万円→1,554万円と年ごとに動いています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "日本郵船への転職【2026年10月】中途採用の募集職種・応募資格・選考と平均年収1,554万円",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/nippon-yusen/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "日本郵船" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            日本郵船への転職【2026年10月】中途採用の募集職種・応募資格・選考と平均年収1,554万円
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/nippon-yusen.jpg" alt="日本郵船の採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">日本郵船 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            日本郵船（証券コード9101）は、定期船・不定期専用船・航空運送・物流を展開する海運国内最大手です。
            本記事では、公式キャリア採用サイトの募集要項と有価証券報告書をもとに、中途採用の募集職種・応募資格・選考・平均年収を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">日本郵船の中途採用の概要（公式サイトで確認・2026年10月15日）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>募集職種：</strong>陸上職事務系（総合職）・陸上職技術系（総合職）・海上職（航海士/機関士）の3職種と、元社員向けのリボーディング制度があります。</li>
            <li><strong>応募資格（陸上職事務系）：</strong>大学・大学院・高専卒で就業経験のある方が対象で、<strong>経験職務・業界は不問</strong>とされています。歓迎条件として、英語（TOEIC 750点以上）、海外折衝を含むPM/PL経験、ファイナンス・税務・IT戦略/DX・法務（弁護士資格・英文契約）などが挙げられています。</li>
            <li><strong>選考：</strong>書類選考及び面接（3回程度）です。応募はマイページから行い、1年間に複数回の応募はできません。</li>
            <li><strong>働き方：</strong>9:00〜17:00（フレックス・コアタイム11:00〜15:00）、勤務地は横浜・東京・国内支店・海外で、3〜4年ごとのジョブローテーションがあります。</li>
            <li><strong>平均年収：</strong>約1,554万円です（2026年3月期・有価証券報告書／提出会社。平均37.8歳・勤続13.9年）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.nyk.com/recruit/career/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">日本郵船 キャリア採用 募集要項</a>。募集内容は変わることがあるため、応募前に公式サイトで最新情報をご確認ください。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">日本郵船転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">日本郵船の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">日本郵船の中途採用（募集職種・応募資格）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">日本郵船で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">日本郵船の中途採用の選考フロー（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">日本郵船の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">日本郵船転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">日本郵船転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">日本郵船転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,554万円（15,545,044円、2026年3月期・有価証券報告書、EDINETで2026年10月25日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>1,378万円（2024年3月期）→1,435万円（2025年3月期）→1,554万円（2026年3月期）と推移しています。海運5社で唯一、直近3期とも上昇しており(1,378→1,435→1,554万円)、2年で計176万円増加しました。</li>
            <li>キャリア採用は陸上職事務系・技術系・海上職の3職種です。陸上職は経験職務・業界不問で、選考は書類＋面接3回程度です（公式募集要項・2026年10月15日確認）。</li>
            <li>平均年齢は37.8歳、平均勤続年数は13.9年です。海運は市況により賞与が大きく変動するため、単年の平均額だけで判断しないことをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">日本郵船の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "日本郵船株式会社" },
                { label: "証券コード", value: "9101" },
                { label: "本社", value: "東京都千代田区丸の内二丁目3番2号" },
                { label: "事業内容", value: "定期船・不定期専用船・航空運送・物流を展開する海運国内最大手" },
                { label: "平均年間給与", value: "約1,554万円（15,545,044円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "1,378万円（2024年3月期）→1,435万円（2025年3月期）→1,554万円（2026年3月期）" },
                { label: "平均年齢", value: "37.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "13.9年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YBT6.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月16日提出、EDINETで2026年10月25日確認）、2025年3月期以前の推移はIR BANK掲載値（2026年9月22日確認）に基づく提出会社単体の平均です。有価証券報告書の注記により、従業員数（1,370名、臨時雇用者200名は外数）は就業人員（他社への出向者を除き、他社からの出向者を含む）で、平均年齢・平均勤続年数・平均年間給与は他社からの出向者を含みません。平均年間給与は基本給・賞与・基準外賃金等を含みます。対前事業年度増減率は8.3%と記載されています。海運会社は陸上勤務職と海上職で働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">日本郵船の中途採用（募集職種・応募資格）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.nyk.com/recruit/career/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式キャリア採用サイトの募集要項</a>の内容です（2026年10月15日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">募集職種</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">主な業務</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">応募資格（要約）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { job: "陸上職事務系（総合職）", work: "航路管理・運航管理・蒐貨営業・企画・物流企画・法務・調査・財務・経理・客船・システム開発・海外勤務など", req: "大学・大学院・高専卒で就業経験のある方。経験職務・業界は不問" },
                  { job: "陸上職技術系（総合職）", work: "造船計画・船舶試設計・工務監督・船舶保守/管理・新技術開発など", req: "大学・大学院卒（理系）で就業経験のある方。業界・職種経験は不問" },
                  { job: "海上職（航海士/機関士）", work: "運航船舶の航海士・機関士、陸上での安全管理・船舶管理・技術開発など", req: "乗船履歴があり、三級海技士以上の海技免状（三級は二級筆記全科目合格が条件）等を保有" },
                  { job: "リボーディング制度", work: "陸上職事務系・技術系・海上職（退職時と同じ職種）", req: "総合職として通算3年以上就労し、退職後10年以内でNYK Friend Club等に登録した方" },
                ].map((r) => (
                  <tr key={r.job} className="border-b border-border">
                    <td className="py-2 px-3 font-bold text-navy">{r.job}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.work}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>陸上職は3〜4年ごとのジョブローテーションでさまざまな業務を経験します（公式募集要項）。</li>
            <li>待遇として、昇給年1回、賞与（社内基準による）、完全週休2日制（土・日）、有給休暇（初年度14日、以後1日ずつ増え20日まで）、夏季冬季休暇7日、独身寮・社宅などが記載されています。</li>
            <li>希望職種の募集がない場合は、公式の「キャリア登録」を利用できます。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で日本郵船のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />で「どのエージェントに登録すべきか」から相談する方法もあります（特徴は<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で確認できます）。</p>
        </div>

        <h2 id="s4">日本郵船で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収1,554万円の水準", desc: "当サイト収録企業の中でも海運各社は最上位帯にあり、日本郵船は海運5社中2位です。" },
            { title: "市況連動の振れ幅", desc: "1,378→1,435→1,554万円と年ごとに動きます。賞与比率が高い業界であることの表れです。" },
            { title: "グローバルな事業基盤", desc: "航路・顧客とも海外が中心で、英語を使う実務や海外勤務の機会があります。" },
            { title: "専門性の高い実務", desc: "営業(オペレーション)・船舶管理・財務・法務など、職種ごとの専門実務経験が評価されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">日本郵船の中途採用の選考フロー（公式）</h2>
        <p className="text-sm text-text-muted mb-4">公式募集要項の「選考方法」「応募方法」の記載です（2026年10月15日確認）。面接の回数は「程度」と書かれており、職種・時期で変わる可能性があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "マイページから応募", desc: "公式キャリア採用サイトのマイページ上のガイダンスに従って応募します。過去に応募した人も再応募できますが、1年間に複数回の応募はできません。" },
            { step: 2, title: "書類選考", desc: "陸上職事務系・技術系・海上職とも書類選考があります。" },
            { step: 3, title: "面接（3回程度）", desc: "公式の記載は「面接（3回程度）」です。リボーディング制度は「面接（2～3回程度）」です。" },
            { step: 4, title: "内定", desc: "給与・処遇は「当社規定により優遇」と記載されており、具体額は募集要項に掲載されていません。" },
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

        <h2 id="s6">日本郵船の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,554万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。海運は運賃市況の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均年齢は37.8歳、平均勤続年数は13.9年です。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジをご確認ください。</p>
        </div>

        <h2 id="s7">日本郵船転職で活用したい転職エージェント</h2>
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

        <h2 id="s8">日本郵船転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">日本郵船転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kaiun-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">海運 年収ランキング</Link>
            <Link href="/company/shosen-mitsui/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">商船三井転職ガイド</Link>
            <Link href="/company/kawasaki-kisen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">川崎汽船転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
