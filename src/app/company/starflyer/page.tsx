import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "スターフライヤーへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
  description:
    "スターフライヤー（証券コード9206）への転職を有価証券報告書などの一次データで解説します。平均年間給与は約696万円（2026年3月期・有価証券報告書／提出会社）。公式に掲載中の中途採用求人7職種と応募資格・選考の流れ（2026年10月27日確認）をまとめています。",
  alternates: { canonical: "/company/starflyer/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "スターフライヤーへの転職は難しい？中途採用・平均年収・選考を解説【2026年】",
    description: "スターフライヤー（9206）の平均年収・中途採用・選考を有価証券報告書ベースで解説します。",
  },
};

const faqData = [
  {
    q: "スターフライヤーの平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月25日提出、EDINETで2026年10月18日確認）によると、平均年間給与は6,967千円（約696万円・提出会社単体）です。619万円（2024年3月期）→631万円（2025年3月期）→696万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年9月22日確認）。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "スターフライヤーは中途採用を行っていますか？",
    a: "はい。公式採用サイトの「中途採用情報」に、2026年10月27日時点で7職種の求人が掲載されています（運航乗務員〈機長候補者・副操縦士候補者〉、地上運航従事者〈運航管理者〉、総務・法務担当、財務経理〈ファイナンス担当〉、IT・DX担当、シミュレーター整備担当）。客室乗務員の募集は2026年10月13日に終了したと案内されています。",
  },
  {
    q: "スターフライヤーはどんな会社ですか？",
    a: "北九州空港を拠点に羽田線などを運航する航空会社です。本社は福岡県北九州市小倉南区空港北町6番（スターフライヤー本社ビル）で、総合職の募集要項でも雇入れ直後の勤務地は北九州空港とされています（公式採用サイト、2026年10月27日確認）。",
  },
  {
    q: "スターフライヤーの平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は8.6年、平均年齢は38.7歳（提出会社）です。",
  },
  {
    q: "航空会社の平均年収はどう推移していますか？",
    a: "有価証券報告書の平均年間給与は賞与を含む値で、航空は旅客需要や燃油費の影響で業績が大きく振れるため賞与の変動も大きくなります。実際、スターフライヤーも619万円→631万円→696万円と年ごとに動いています。単年の水準だけで判断せず、複数年の推移を確認することをおすすめします。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "スターフライヤーへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/starflyer/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "スターフライヤー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            スターフライヤーへの転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/starflyer.jpg" alt="スターフライヤーの採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">スターフライヤー 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            スターフライヤー（証券コード9206）は、北九州空港を拠点に羽田線などを運航する航空会社です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">スターフライヤーの求人・中途採用の概要（公式情報・2026年10月27日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>募集中の求人：</strong>公式の「中途採用情報」に7職種が掲載されています。運航乗務員（機長候補者・副操縦士候補者）、地上運航従事者（運航管理者）、総合職の総務・法務担当、財務経理（ファイナンス担当）、IT・DX担当、シミュレーター整備担当です。客室乗務員の募集は2026年10月13日に終了しています。</li>
            <li><strong>総合職の条件：</strong>募集人数は各1名程度の正社員（運航管理者も総合職）で、雇入れ直後の勤務地は北九州空港です。給与は新卒の設定（大学卒269,000円／月額）を基準に、能力・経験等を勘案して決定すると記載されています。</li>
            <li><strong>必須経験の例：</strong>財務経理は事業会社での財務関連業務2〜5年以上、総務・法務は総務・法務関連業務2年以上、IT・DXは社内SEまたはSIerでのSE業務5年以上とITインフラ・セキュリティ3年以上です。</li>
            <li><strong>選考の流れ（総合職）：</strong>履歴書・職務経歴書提出 → 書類選考 → 個人（1次）面接 → WEB適性検査 → 個人（最終）面接です。運航乗務員は書類選考 → 一次選考（面接及び技倆試験）→ 最終選考です。</li>
            <li><strong>平均年収：</strong>約696万円です（2026年3月期・有価証券報告書／提出会社。平均38.7歳・勤続8.6年）。</li>
            <li><strong>中途採用比率：</strong>正規雇用労働者の中途採用比率は84％（2023年度）→48％（2024年度）→41％（2025年度）と公表されています。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.starflyer.jp/recruit/recruitment/professionals/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">スターフライヤー「中途採用情報」</a>と各職種の募集要項。求人は随時変わるため、応募前に公式サイトで最新の情報をご確認ください。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">スターフライヤー転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">スターフライヤーの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">スターフライヤーの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">スターフライヤーで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">スターフライヤーの選考フロー（総合職の公式記載）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">スターフライヤーの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">スターフライヤー転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">スターフライヤー転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">スターフライヤー転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約696万円です（6,967千円、2026年3月期・有価証券報告書、EDINETで2026年10月18日確認）。提出会社単体の全従業員の平均値です。</li>
            <li>619万円（2024年3月期）→631万円（2025年3月期）→696万円（2026年3月期）と推移しています。2023年3月期の500万円から3年で196万円増加しており、4社の中で最も伸び率が大きくなっています。</li>
            <li>中途採用は公式の「中途採用情報」に7職種が掲載されています（2026年10月27日確認）。総合職は各1名程度で、いずれも実務経験を必須としています。</li>
            <li>平均年齢は38.7歳、平均勤続年数は8.6年です。航空は旅客需要と燃油費の影響を受けやすく、コロナ禍で大きく落ち込んだ後に回復した経緯があります。単年の平均額だけでなく、推移もあわせて確認することをおすすめします。</li>
          </ul>
        </div>

        <h2 id="s2">スターフライヤーの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社スターフライヤー" },
                { label: "証券コード", value: "9206" },
                { label: "本社", value: "福岡県北九州市小倉南区空港北町6番（公式採用サイトの事業者情報）" },
                { label: "事業内容", value: "北九州空港を拠点に羽田線などを運航する航空会社" },
                { label: "平均年間給与", value: "約696万円（6,967千円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "619万円（2024年3月期）→631万円（2025年3月期）→696万円（2026年3月期）" },
                { label: "平均年齢", value: "38.7歳（同・提出会社）" },
                { label: "平均勤続年数", value: "8.6年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YJFT.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月25日提出、EDINETで2026年10月18日確認）、それ以前の推移はIR BANK掲載値（2026年9月22日確認）に基づく提出会社単体・全従業員の平均です。航空会社は総合職・客室乗務員・整備士など職種によって働き方も処遇体系も異なり、提出会社に在籍する従業員の構成は会社ごとに違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">スターフライヤーの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.starflyer.jp/recruit/recruitment/professionals/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式の中途採用情報</a>に掲載されている求人です（2026年10月27日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-warm-gray"><th className="text-left py-2 px-3">職種</th><th className="text-left py-2 px-3">募集人数・雇用形態</th><th className="text-left py-2 px-3">主な応募資格（必須）</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3">運航乗務員（機長候補者）</td><td className="py-2 px-3">2名程度・正社員（60歳以上は契約社員）</td><td className="py-2 px-3">定期運送用操縦士技能証明、本邦定期航空会社での機長経験とJET機PIC1,000時間以上ほか</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">運航乗務員（副操縦士候補者）【A320型式限定保有者】</td><td className="py-2 px-3">2名程度・正社員</td><td className="py-2 px-3">事業用操縦士技能証明・計器飛行証明、本邦定期航空会社での副操縦士経験、A320型式限定ほか</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">総合職 地上運航従事者（運航管理者）</td><td className="py-2 px-3">1名程度・正社員</td><td className="py-2 px-3">運航管理者技能検定合格者（学科試験科目合格を含む）。運航管理・ダイヤ統制業務、TOEIC600点以上は尚可</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">総合職 総務・法務担当スタッフ</td><td className="py-2 px-3">1名・正社員</td><td className="py-2 px-3">株主総会・取締役会運営や契約書作成などを含む総務・法務関連業務2年以上</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">総合職 財務経理（ファイナンス担当）スタッフ</td><td className="py-2 px-3">1名・正社員</td><td className="py-2 px-3">事業会社での財務関連業務2〜5年以上、ファイナンスの知識と実務能力</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">総合職 IT・DX担当スタッフ</td><td className="py-2 px-3">1名・正社員</td><td className="py-2 px-3">社内SEまたはSIerでのSE業務5年以上、ITインフラ・サイバーセキュリティ3年以上</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3">総合職 シミュレーター整備担当スタッフ</td><td className="py-2 px-3">1名程度・正社員</td><td className="py-2 px-3">高校・高専・専門学校・大学等の卒業、Windowsの基本操作、チームで業務を進めるコミュニケーション能力（シミュレーター保守経験は歓迎要件）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>総合職の勤務時間は9:00〜18:00で、フレックスタイム制（コアタイムなし）とテレワーク勤務（適用条件あり）が記載されています。運航管理者・シミュレーター整備担当と運航乗務員はシフト勤務です。</li>
            <li>年間休日は121日、賞与は年2回（2025年度実績、会社業績により支給しないことがある）、自社便・ANA便の従業員優待搭乗制度があります。</li>
            <li>給与は新卒採用の給与設定（大学卒269,000円／月額など）が示され、中途採用は能力・経験等を勘案して当社規程に基づき決定すると記載されています。</li>
            <li>※募集職種・募集状況は変動するため、最新の情報は公式採用ページでご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒でスターフライヤーのような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">スターフライヤーで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "平均年収696万円の水準", desc: "当サイト収録の空運4社の中で、スターフライヤーは3位です。" },
            { title: "需要回復の推移", desc: "619→631→696万円と年ごとに動きます。コロナ禍からの回復局面を数字が反映しています。" },
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

        <h2 id="s5">スターフライヤーの選考フロー（総合職の公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">総合職の募集要項に記載されている「採用選考の流れ」です（2026年10月27日確認）。公式には「採用選考の流れ及び内容は変更になる場合がございます」と記載されています。運航乗務員は、必要書類の送付 → 書類選考 → 一次選考（面接及び技倆試験）→ 最終選考の順です。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "履歴書・職務経歴書の提出", desc: "採用マイページからエントリーし、履歴書と職務経歴書を提出します。" },
            { step: 2, title: "書類選考", desc: "書類選考の通過者には、別途採用選考のスケジュールが案内されます。" },
            { step: 3, title: "個人（1次）面接", desc: "個人面接が行われます。" },
            { step: 4, title: "WEB適性検査の受検", desc: "1次面接の後にWEB適性検査を受検します。" },
            { step: 5, title: "個人（最終）面接", desc: "最終面接を経て採否が決まります。" },
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

        <h2 id="s6">スターフライヤーの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約696万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。航空は旅客需要・燃油費の影響で業績変動が大きく、賞与もそれに連動します。</li>
            <li>平均年齢は38.7歳、平均勤続年数は8.6年です。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">スターフライヤー転職で活用したい転職エージェント</h2>
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

        <h2 id="s8">スターフライヤー転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">スターフライヤー転職を成功させるために</h2>
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
            <Link href="/company/skymark/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">スカイマーク転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
