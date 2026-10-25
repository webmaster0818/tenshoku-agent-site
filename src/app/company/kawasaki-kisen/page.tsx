import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "川崎汽船の転職難易度・中途採用【2026年10月】キャリア採用比率41.67%・応募資格・平均年収1,450万円",
  description:
    "川崎汽船の中途採用は陸上総合職（若干名・大卒以上・英語TOEIC730点目安）と海上職（二級海技士以上）で募集されています。公式公表のキャリア採用比率は2025年度41.67%で、選考は書類・適性検査・複数回面接です（2026年10月15日確認）。平均年収は約1,450万円です（有価証券報告書）。",
  alternates: { canonical: "/company/kawasaki-kisen/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "川崎汽船の転職難易度・中途採用【2026年10月】キャリア採用比率41.67%・応募資格・平均年収1,450万円",
    description: "川崎汽船の中途採用の応募資格・選考・キャリア採用比率（公式・10/15確認）と平均年収（有価証券報告書）を解説します。",
  },
};

const faqData = [
  {
    q: "川崎汽船の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月18日提出、EDINETで2026年10月25日確認）によると、平均年間給与は14,504,365円（約1,450万円・提出会社単体）です。1,394万円（2024年3月期）→1,222万円（2025年3月期）→1,450万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年9月22日確認）。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "川崎汽船は中途採用を行っていますか？",
    a: "はい。公式の採用情報（https://www.kline.co.jp/ja/recruit.html）に「陸上職 キャリア採用」「海上職 キャリア採用」の窓口があり、陸上総合職は専用のキャリア採用サイト（https://www.kline-career.jp/）で募集要項を公開しています（2026年10月15日確認）。募集人数はいずれも若干名です。",
  },
  {
    q: "川崎汽船はどんな会社ですか？",
    a: "ドライバルク・自動車船・エネルギー資源輸送を柱とする海運大手です。本社は東京都千代田区内幸町二丁目1番1号(飯野ビルディング)にあります。",
  },
  {
    q: "川崎汽船の中途採用の難易度はどのくらいですか？",
    a: "倍率は公表されていないため数字で難易度は示せません。公式が公表している指標では、陸上職のキャリア採用比率（キャリア採用数／新卒含む全採用数）は28.1%（2023年度）→33.33%（2024年度）→41.67%（2025年度）と上がっており、採用の4割強が中途です（公表日2026年4月24日）。一方で陸上総合職の応募資格は大学卒以上・英語中級以上（目安TOEIC730点以上）が必須で、募集人数は若干名です。",
  },
  {
    q: "川崎汽船の中途採用はどのような選考フローですか？",
    a: "陸上総合職は、履歴書・職務経歴書（自己PRと志望理由を記載）をエントリーフォームから提出し、書類選考、筆記試験（適性検査）、面接（複数回・オンラインまたは東京本社）の順です。海上職は履歴書・職務経歴書を郵送し、書類選考後に適性検査・面接の案内があります（公式・2026年10月15日確認）。",
  },
  {
    q: "川崎汽船の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は13.4年、平均年齢は38.0歳（2026年3月期・提出会社）です。",
  },
  {
    q: "海運会社の平均年収が高いのはなぜですか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、海運は市況（運賃・傭船料）の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、川崎汽船も1,394万円→1,222万円→1,450万円と年ごとに動いています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "川崎汽船の転職難易度・中途採用【2026年10月】キャリア採用比率41.67%・応募資格・平均年収1,450万円",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/kawasaki-kisen/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "川崎汽船" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            川崎汽船の転職難易度・中途採用【2026年10月】キャリア採用比率41.67%・応募資格・平均年収1,450万円
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/kawasaki-kisen.jpg" alt="川崎汽船の採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">川崎汽船 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            川崎汽船（証券コード9107）は、ドライバルク・自動車船・エネルギー資源輸送を柱とする海運大手です。
            本記事では、公式の募集要項・キャリア採用比率と有価証券報告書をもとに、中途採用の難易度・応募資格・選考・平均年収を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">川崎汽船の中途採用の概要（公式情報・2026年10月15日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>中途の割合：</strong>陸上職のキャリア採用比率は<strong>41.67%</strong>です（2025年度。2023年度28.1%→2024年度33.33%）。キャリア採用社員の在籍比率は24.86%です（同）。</li>
            <li><strong>募集：</strong>陸上総合職（若干名）と海上職員（航海士・機関士、若干名）を募集しています。</li>
            <li><strong>陸上総合職の必須条件：</strong>大学卒以上・英語中級以上（目安TOEIC730点以上）です。配属は営業・管理・技術部門などで、入社後10年目程度までに3部署（機能）を経験するジョブローテーションがあります。</li>
            <li><strong>選考：</strong>書類選考 → 筆記試験（適性検査）→ 面接（複数回、オンラインまたは東京本社）の順です。倍率は公表されていません。</li>
            <li><strong>平均年収：</strong>約1,450万円です（2026年3月期・有価証券報告書／提出会社。平均38.0歳・勤続13.4年）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.kline.co.jp/ja/recruit/career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">川崎汽船 陸上職キャリア採用情報</a>／<a href="https://www.kline-career.jp/recruit/index.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">陸上職キャリア採用サイト 募集要項</a>／<a href="https://www.kline.co.jp/ja/recruit/sea_career.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">海上職キャリア採用情報</a>。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">川崎汽船転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">川崎汽船の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">川崎汽船の中途採用（難易度・応募資格）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">川崎汽船で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">川崎汽船の中途採用の選考フロー（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">川崎汽船の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">川崎汽船転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">川崎汽船転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">川崎汽船転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,450万円（14,504,365円、2026年3月期・有価証券報告書、EDINETで2026年10月25日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>1,394万円（2024年3月期）→1,222万円（2025年3月期）→1,450万円（2026年3月期）と推移しています。最新期は前期の下げ(▼172万円)から反発し、+228万円と海運5社で最大の上げ幅となりました。</li>
            <li>陸上職のキャリア採用比率は2025年度41.67%です（公式公表）。陸上総合職は大卒以上・TOEIC730点目安が必須で、選考は書類・適性検査・複数回面接です（2026年10月15日確認）。</li>
            <li>平均年齢は38.0歳、平均勤続年数は13.4年です。海運は市況により賞与が大きく変動するため、単年の平均額だけで判断しないことをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">川崎汽船の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "川崎汽船株式会社" },
                { label: "証券コード", value: "9107" },
                { label: "本社", value: "東京都千代田区内幸町二丁目1番1号(飯野ビルディング)" },
                { label: "事業内容", value: "ドライバルク・自動車船・エネルギー資源輸送を柱とする海運大手" },
                { label: "平均年間給与", value: "約1,450万円（14,504,365円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "1,394万円（2024年3月期）→1,222万円（2025年3月期）→1,450万円（2026年3月期）" },
                { label: "平均年齢", value: "38.0歳（同・提出会社）" },
                { label: "平均勤続年数", value: "13.4年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YC6B.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月18日提出、EDINETで2026年10月25日確認）、2025年3月期以前の推移はIR BANK掲載値（2026年9月22日確認）に基づく提出会社単体の平均です。有価証券報告書の注記により、従業員数（962人、臨時従業員59人は外数）は就業人員で、平均年間給与は賞与及び時間外手当等を含みます。対前事業年度増減率は18.6%と記載されています。海運会社は陸上勤務職と海上職で働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">川崎汽船の中途採用（難易度・応募資格）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">公式の採用情報と陸上職キャリア採用サイトの内容です（2026年10月15日確認）。</p>
          <h3 className="font-bold text-navy mb-2">キャリア採用の実績（公式公表・2026年4月24日）</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">陸上職</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2023年度</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2024年度</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">2025年度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">キャリア採用比率（キャリア採用数／新卒含む全採用数）</td><td className="py-2 px-3">28.1%</td><td className="py-2 px-3">33.33%</td><td className="py-2 px-3">41.67%</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">キャリア採用社員の在籍比率</td><td className="py-2 px-3">21.7%</td><td className="py-2 px-3">23.03%</td><td className="py-2 px-3">24.86%</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-navy mb-2">陸上総合職（キャリア採用）の募集要項</h3>
          <ul className="space-y-2 text-sm text-text-secondary mb-4">
            <li><strong>業務：</strong>国内営業・海外営業、船舶の運航管理、コーポレート部門の業務です。配属例は営業部門（顧客対応／運航管理／船舶調達）、管理部門（経営企画・システム・法務・環境推進・財務・経理・総務・人事）、技術部門（造船計画・新技術開発）です。</li>
            <li><strong>応募資格（必須）：</strong>大学卒以上、英語中級以上（目安TOEIC730点以上）です。求める人物像として「学習意欲が高く、様々な業務に前向きに取り組める方」「自ら率先して行動し、決断ができる方」「チームワークを発揮できる方」が挙げられています。</li>
            <li><strong>募集人数：</strong>若干名です。勤務地は本社（東京都千代田区内幸町）と国内外の各事業所で、在宅勤務制度があります。</li>
            <li><strong>勤務・待遇：</strong>9:00〜17:00（フレックスあり）です。給与は経験・能力に応じて支給され、賞与は年2回（7月・12月）です。住宅手当・退職金制度・社員持株会などの制度があります。</li>
            <li><strong>ジョブローテーション：</strong>入社後10年目程度までに、3部署もしくは営業・運航管理・事業管理・コーポレート関係のうち3つの機能を経験します。専門分野を持つ方でも専門外の部署に配属されることがあると明記されています。</li>
          </ul>
          <h3 className="font-bold text-navy mb-2">海上職（キャリア採用）</h3>
          <p className="text-sm text-text-secondary mb-2">航海士・機関士を若干名募集しています。応募資格は学歴・年齢不問、二級海技士以上（航海もしくは機関）の資格保有者です。</p>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で川崎汽船のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />で「どのエージェントに登録すべきか」から相談する方法もあります（特徴は<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で確認できます）。</p>
        </div>

        <h2 id="s4">川崎汽船で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収1,450万円の水準", desc: "当サイト収録企業の中でも海運各社は最上位帯にあり、川崎汽船は海運5社中3位です。" },
            { title: "市況連動の振れ幅", desc: "1,394→1,222→1,450万円と年ごとに動きます。賞与比率が高い業界であることの表れです。" },
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

        <h2 id="s5">川崎汽船の中途採用の選考フロー（公式）</h2>
        <p className="text-sm text-text-muted mb-4">陸上総合職の募集要項に記載の選考方法です（2026年10月15日確認）。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "エントリーフォームから応募", desc: "履歴書（写真貼付）と職務経歴書（形式自由）に、自己PR（強みを発揮したエピソード等）と志望理由を記載して提出します。" },
            { step: 2, title: "書類選考", desc: "提出書類による選考です。" },
            { step: 3, title: "筆記試験（適性検査）", desc: "公式の記載は「筆記試験（適性検査）」です。" },
            { step: 4, title: "面接（複数回）", desc: "オンライン、もしくは東京本社で実施されます。海上職も書類選考後に適性検査・面接の案内があります（書類は郵送）。" },
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

        <h2 id="s6">川崎汽船の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,450万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。海運は運賃市況の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均年齢は38.0歳、平均勤続年数は13.4年です。平均年収は年齢構成の影響を受ける点にご留意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">川崎汽船転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、転職エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
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

        <h2 id="s8">川崎汽船転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">川崎汽船転職を成功させるために</h2>
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
            <Link href="/company/nippon-yusen/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">日本郵船転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
