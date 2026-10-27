import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "スカイマークの求人・中途採用【2026年10月】募集職種・平均年収593万円・転職難易度",
  description:
    "スカイマークの中途採用求人は公式採用ページ（HRMOS）に7件掲載されています（2026年10月15日確認）。機長・副操縦士候補、航空整備士、ランプハンドリング、オープンポジション（営業・法務・経営企画・財務・人事・IT等）の募集内容と、平均年収約593万円（有価証券報告書）・応募資格を整理しています。",
  alternates: { canonical: "/company/skymark/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "スカイマークの求人・中途採用【2026年10月】募集職種・平均年収593万円・転職難易度",
    description: "スカイマークの中途採用求人7件（公式・10/15確認）と平均年収約593万円（有価証券報告書）を整理しています。",
  },
};

const faqData = [
  {
    q: "スカイマークの平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月24日提出、EDINETで2026年10月27日確認）によると、平均年間給与は5,932千円（約593万円・提出会社単体）です。577万円（2024年3月期）→577万円（2025年3月期）→593万円（2026年3月期）と推移しています。（2025年3月期以前はIR BANK掲載値・2026年9月22日確認）。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "スカイマークは中途採用を行っていますか？",
    a: "はい。公式採用ページから案内される求人一覧（HRMOS）に、2026年10月15日時点で7件の求人が掲載されています（B737機長候補者・B737副操縦士候補者〈いずれも他社経験者〉、エアラインエンジニアリング職〈航空整備士〉、運航/地上教官、空港/ランプハンドリング職、オープンポジション／キャリア採用、障がい者採用）。公式には「現在募集中の求人は、検索結果で表示される職種のみ」と記載されています。",
  },
  {
    q: "スカイマークはどんな会社ですか？",
    a: "1996年11月に新規参入航空会社の第1号として設立された航空会社で、羽田空港を中心に国内線を運航しています。本社は東京都大田区羽田空港3丁目5番10号（ユーティリティセンタービル8階）、社員数は2,738名（2026年3月31日現在）です（いずれも公式「会社概要」・採用サイト、2026年10月15日確認）。",
  },
  {
    q: "スカイマークの中途採用の難易度は高いですか？",
    a: "倍率は公表されていないため、難易度を数字で示すことはできません。公式の求人票で確認できる条件では、パイロット職はB737の機長・副操縦士の他社経験者が対象で、オープンポジションは「施策やプロジェクトの企画立案、実行、運営のご経験」が共通の必須要件で、募集は各部門とも若干名です（2026年10月15日確認）。未経験から応募できる職種があるかは、求人一覧で個別にご確認ください。",
  },
  {
    q: "スカイマークの平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は9.0年、平均年齢は36.5歳（2026年3月期・提出会社）です。",
  },
  {
    q: "航空会社の平均年収はどう推移していますか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、航空は旅客需要や燃油費の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、スカイマークも577万円→577万円→593万円と年ごとに動いています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "スカイマークの求人・中途採用【2026年10月】募集職種・平均年収593万円・転職難易度",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/skymark/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "スカイマーク" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            スカイマークの求人・中途採用【2026年10月】募集職種・平均年収593万円・転職難易度
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/skymark.jpg" alt="スカイマークの採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">スカイマーク 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            スカイマーク（証券コード9204）は、羽田空港を中心に国内線を運航する航空会社です。
            本記事では、公式採用ページの求人と有価証券報告書をもとに、中途採用の募集職種・平均年収・応募条件を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">スカイマークの求人・中途採用の概要（公式情報・2026年10月15日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>求人数：</strong>公式の求人一覧（HRMOS）に<strong>7件</strong>掲載されています（正社員5・契約社員1・アルバイト/パート1）。公式には「表示のない職種については、お問い合わせいただきましても回答・対応いたしかねます」と記載されています。</li>
            <li><strong>募集職種：</strong>B737機長候補者／B737副操縦士候補者（他社経験者）、エアラインエンジニアリング職（航空整備士）、運航/地上教官、空港/ランプハンドリング職、オープンポジション／キャリア採用、障がい者採用（オープンポジション）です。</li>
            <li><strong>オープンポジション：</strong>本社管理部門（営業・法務・経営企画・財務経理・人事企画）、オペレーション部門（整備間接・運航間接）、DX部門（システムエンジニア・インフラエンジニア）等で各若干名の募集です。勤務地は東京都、給与は応相談です。</li>
            <li><strong>平均年収：</strong>約593万円です（2026年3月期・有価証券報告書／提出会社。平均36.5歳・勤続9.0年）。</li>
            <li><strong>会社規模：</strong>社員数は2,738名です（2026年3月31日現在・公式会社概要）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://hrmos.co/pages/skymark/jobs" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">スカイマーク 求人一覧（HRMOS）</a>／<a href="https://www.skymark.co.jp/ja/company/about.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式 会社概要</a>。求人は随時変わるため、応募前に公式サイトで最新の情報をご確認ください。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">スカイマーク転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">スカイマークの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">スカイマークの中途採用・求人（募集職種一覧）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">スカイマークで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">スカイマークの選考フロー（一般的な流れ）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">スカイマークの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">スカイマーク転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">スカイマーク転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">スカイマーク転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約593万円（5,932千円、2026年3月期・有価証券報告書、EDINETで2026年10月27日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>577万円（2024年3月期）→577万円（2025年3月期）→593万円（2026年3月期）と推移しています。2024・2025年3月期は577万円で横ばいでしたが、最新期に+16万円上昇しました。平均36.5歳と、当サイトが収録する空運4社で最も若い構成です。</li>
            <li>中途採用の求人は公式の求人一覧（HRMOS）に7件掲載されています（2026年10月15日確認）。パイロットは他社経験者が対象で、オープンポジションは企画立案・推進経験が必須です。</li>
            <li>平均年齢は36.5歳、平均勤続年数は9.0年です。航空は旅客需要と燃油費の影響を受けやすく、コロナ禍で大きく落ち込んだ後に回復した経緯があります。単年の平均額だけでなく、推移もあわせて確認することをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">スカイマークの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社スカイマーク" },
                { label: "証券コード", value: "9204" },
                { label: "本社", value: "東京都大田区羽田空港3丁目5番10号 ユーティリティセンタービル8階（公式会社概要）" },
                { label: "社員数", value: "2,738名（2026年3月31日現在・公式会社概要）" },
                { label: "設立", value: "1996年11月12日" },
                { label: "事業内容", value: "定期航空運送事業他（羽田空港を中心に国内線を運航）" },
                { label: "平均年間給与", value: "約593万円（5,932千円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "577万円（2024年3月期）→577万円（2025年3月期）→593万円（2026年3月期）" },
                { label: "平均年齢", value: "36.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "9.0年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YJR8.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月24日提出、EDINETで2026年10月27日確認）、2025年3月期以前の推移はIR BANK掲載値（2026年9月22日確認）に基づく提出会社単体の平均です。原本の平均年間給与は千円単位（5,932千円）です。有価証券報告書の注記により、従業員数（2,738名）は就業人員（他社への出向社員を除く）で、運航乗務員・客室乗務員は訓練生を除いた人数です。平均年間給与は賞与及び基準外賃金を含み、人材会社からの受入出向運航乗務員を除いて算出されています。職種別の平均年間給与は、地上社員5,105千円（1,839名・平均38.4歳）、運航乗務員16,622千円（304名・平均40.7歳）、客室乗務員3,322千円（595名・平均28.7歳）と記載されています。対前事業年度増減率は2.7%と記載されています。航空会社は総合職・客室乗務員・整備士など職種によって働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">スカイマークの中途採用・求人（募集職種一覧）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.skymark.co.jp/ja/company/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用ページ</a>から案内される<a href="https://hrmos.co/pages/skymark/jobs" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">求人一覧</a>の掲載内容です（2026年10月15日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">求人</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">雇用形態</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">公式に書かれている内容（要約）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { job: "B737機長候補者（他社経験者）", type: "正社員", desc: "機長業務および関連業務" },
                  { job: "B737副操縦士候補者（他社経験者）", type: "正社員", desc: "副操縦士発令までは会社の定める各種訓練、発令後は運航する航空機の乗務等" },
                  { job: "エアラインエンジニアリング職（航空整備士）", type: "正社員", desc: "航空整備およびそれに関わる部内業務全般。選考は順次" },
                  { job: "運航/地上教官（運航乗務員訓練担当）", type: "アルバイト・パート", desc: "運航乗務員の定期訓練・資格取得訓練（座学・シミュレーター）、教材作成" },
                  { job: "空港/ランプハンドリング職", type: "正社員", desc: "ランプハンドリングに係る業務およびそれに関わる業務全般" },
                  { job: "オープンポジション／キャリア採用", type: "正社員", desc: "本社管理部門（営業・法務・経営企画・財務経理・人事企画）、オペレーション部門（整備間接・運航間接）、DX部門（SE・インフラ）等で各若干名。勤務地 東京都・給与 応相談・試用期間6ヶ月" },
                  { job: "障がい者採用（オープンポジション）", type: "契約社員", desc: "コーポレート部門・オペレーション部門のいずれかでデータ作成・管理・分析やサポート業務" },
                ].map((r) => (
                  <tr key={r.job} className="border-b border-border">
                    <td className="py-2 px-3 font-bold text-navy">{r.job}</td>
                    <td className="py-2 px-3 text-text-secondary whitespace-nowrap">{r.type}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>オープンポジションの共通応募資格（必須）は「当社の意義や公共交通機関としての使命に共感できる方」「施策やプロジェクトの企画立案、実行、運営のご経験がある方（マネジメント経験があれば尚可）」「関係者と協働して施策やプロジェクトを推進できる方」です。配属例のマーケティングは同業務3年以上、法務は契約審査3年以上が応募資格です。</li>
            <li>求人票に記載の待遇：企業型確定拠出年金、自社便搭乗制度、在宅勤務・フレックス（一部の部署に限る）などがあります。</li>
            <li>公式採用サイトでは、地上旅客職・ランプハンドリング職・航空機整備士・運航乗務員・客室乗務員など運航に関わる全ての職種を自社で採用していると説明しています。</li>
            <li>※求人は随時入れ替わります。応募前に公式の求人一覧で最新の情報をご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で航空業界を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />で「どのエージェントに登録すべきか」から相談する方法もあります（サービスの特徴は<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で確認できます）。</p>
        </div>

        <h2 id="s4">スカイマークで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収593万円の水準", desc: "当サイトが収録する空運4社の中で、スカイマークは4位です。" },
            { title: "需要回復の推移", desc: "577→577→593万円と年ごとに動きます。コロナ禍からの回復局面を数字が反映しています。" },
            { title: "公式が求める人財像", desc: "公式採用ページは「強い責任感のある人」「相手を尊重できる人」「プロ意識の高い人」「改革意欲の高い人」の4つを掲げています。" },
            { title: "即戦力の実務経験", desc: "オープンポジションは企画立案・実行・運営の経験が必須、パイロット職は他社でのB737乗務経験者が対象と、求人票は経験者を前提にしています。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">スカイマークの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※職種ごとの詳細な選考フローは応募先の募集要項で案内されます。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "採用ページからエントリー", desc: "公式採用ページで募集職種を確認し、希望ポジションにエントリーします。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を基に、応募求人の要件との適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャー・部門責任者等による面接が行われます。主に実務経験と応募職種との適合性が確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考を通過すると内定となります。経験・能力を考慮した条件が提示されます。" },
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

        <h2 id="s6">スカイマークの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約593万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。航空は旅客需要・燃油費の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均年齢は36.5歳、平均勤続年数は9.0年です。平均年収は年齢構成の影響を受ける点にご留意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">スカイマーク転職で活用したい転職エージェント</h2>
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

        <h2 id="s8">スカイマーク転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">スカイマーク転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/kuuun-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">空運(航空) 年収ランキング</Link>
            <Link href="/company/jal/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">日本航空(JAL)転職ガイド</Link>
            <Link href="/company/ana-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ANAホールディングス転職ガイド</Link>
            <Link href="/company/starflyer/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スターフライヤー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
