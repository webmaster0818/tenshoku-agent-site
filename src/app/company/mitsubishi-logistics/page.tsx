import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "三菱倉庫の年収・給与【2026年10月】平均943万円（有報）・中途の基本給と募集要項（公式）・転職難易度",
  description:
    "三菱倉庫の平均年収は約943万円（2026年3月期・有報／平均40.7歳）。中途の募集要項（公式・2026年10月15日確認）は総合職・エリア総合職・地域職の3区分で、基本給は総合職26万円・エリア総合職24.3万円・地域職20.48万円（各初任給）以上、賞与年2回、残業月平均15時間程度。",
  alternates: { canonical: "/company/mitsubishi-logistics/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "三菱倉庫の年収・給与【2026年10月】平均943万円（有報）・中途の基本給と募集要項（公式）・転職難易度",
    description: "三菱倉庫の平均年収（有報）と、キャリア採用3区分の基本給・職務・応募方法（公式・10/15確認）。",
  },
};

const faqData = [
  {
    q: "三菱倉庫の平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年10月15日再確認）によると、平均年間給与は約943万円（2026年3月期・提出会社単体）です。938万円（2024年3月期）→912万円（2025年3月期）→943万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "三菱倉庫は中途採用を行っていますか？",
    a: "はい。公式の採用情報ページ（https://www.mitsubishi-logistics.co.jp/saiyo/）に「キャリア採用」として総合職・エリア総合職・地域職の募集要項が掲載されており、いずれも「現在募集を行っています」「入社日随時」「採用人数若干名」です（2026年10月15日確認）。なお https://www.mitsubishi-logistics.co.jp/recruit/ は新卒採用サイトです。",
  },
  {
    q: "三菱倉庫はどんな会社ですか？",
    a: "倉庫・港湾運送・国際輸送を中核に不動産事業も展開する総合物流企業です。本店は東京都中央区日本橋1-19-1 日本橋ダイヤビルディング、従業員数は単体1,026名・連結4,991名（2026年3月末、公式会社概要）です。",
  },
  {
    q: "三菱倉庫の中途採用の給与（基本給）はいくらですか？",
    a: "公式のキャリア採用募集要項では、基本給は総合職が260,000円（総合職大卒初任給）以上、エリア総合職が243,000円（エリア総合職大卒初任給）以上、地域職が204,800円（地域職高卒初任給）以上で、いずれも「年齢・経験を考慮して優遇」です。昇給年1回・賞与年2回（2026年10月15日確認）。想定年収の総額は募集要項に書かれていないため、選考の中で確認が必要です。",
  },
  {
    q: "三菱倉庫の中途採用の難易度は？",
    a: "倍率は公表されていないため、数字で難易度は示せません。公式の募集要項で読めるのは、採用人数がいずれの区分も若干名であること、応募資格が「職務内容に関連する職務経験のある方」であること（医薬品物流は薬剤師資格保有者なら物流の職務経験は不要）、総合職・エリア総合職は大卒・修士が対象であることです。",
  },
  {
    q: "三菱倉庫の平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年9月22日確認）によると、平均勤続年数は15.6年、平均年齢は40.7歳（2026年3月期・提出会社）です。",
  },
  {
    q: "三菱倉庫の平均年収はどう推移していますか？",
    a: "有報の平均年間給与は賞与を含む値で、物流は取扱量や運賃水準の影響を受けるため賞与も変動します。実際、三菱倉庫も938万円→912万円→943万円と年ごとに動いています。高水準の年だけを見て将来も同じとは考えず、複数年の推移で見るのが実態に近い読み方です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "三菱倉庫の年収・給与【2026年10月】平均943万円（有報）・中途の基本給と募集要項（公式）・転職難易度",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/mitsubishi-logistics/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "三菱倉庫" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            三菱倉庫の年収・給与【2026年10月】平均943万円（有報）・中途の基本給と募集要項（公式）・転職難易度
          </h1>
        <p className="text-xs text-text-muted mb-3">最終更新日：2026年10月15日</p>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/mitsubishi-logistics.jpg" alt="三菱倉庫の採用サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">三菱倉庫 採用サイトのスクリーンショット（2026年9月22日取得）。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            三菱倉庫（証券コード9301）は、倉庫・港湾運送を中核に不動産事業も展開する総合物流企業です。
            本記事では、有価証券報告書の平均年収と、公式サイトのキャリア採用募集要項（基本給・職務内容・応募方法）を整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">先に結論：三菱倉庫の年収・給与と中途採用（2026年10月15日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>平均年収：</strong>約<strong>943万円</strong>（2026年3月期・有価証券報告書／提出会社。平均40.7歳・勤続15.6年）。938万円→912万円→943万円と推移。</li>
            <li><strong>中途の基本給（公式募集要項）：</strong>総合職 260,000円以上／エリア総合職 243,000円以上／地域職 204,800円以上（各区分の初任給。年齢・経験を考慮して優遇）。昇給年1回・賞与年2回。</li>
            <li><strong>募集：</strong>総合職・エリア総合職・地域職の3区分とも「現在募集を行っています」、採用人数は若干名、入社日随時。</li>
            <li><strong>働き方：</strong>9:00〜17:00、時間外労働は月平均15時間程度、土曜は月1回程度の出勤あり。</li>
            <li><strong>応募方法：</strong>希望職種・勤務地を明記して履歴書・職務経歴書を郵送（エントリーフォームではなく書類送付）。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.mitsubishi-logistics.co.jp/saiyo/general.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三菱倉庫 キャリア採用（総合職）</a>／<a href="https://www.mitsubishi-logistics.co.jp/saiyo/area_general.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用（エリア総合職）</a>／<a href="https://www.mitsubishi-logistics.co.jp/saiyo/area.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用（地域職）</a>／<a href="https://www.mitsubishi-logistics.co.jp/company/outline/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">会社概要</a>／<a href="https://irbank.net/9301/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK（有報の従業員データ）</a>。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">結論：三菱倉庫転職のポイント</a></li>
            <li><a href="#s2" className="text-teal hover:underline">三菱倉庫の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">三菱倉庫の中途採用の募集要項（基本給・職務・応募資格）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">三菱倉庫で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">三菱倉庫の応募方法（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">三菱倉庫の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">三菱倉庫転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">三菱倉庫転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">結論：三菱倉庫転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約943万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年10月15日再確認）。提出会社単体の全従業員平均。</li>
            <li>938万円（2024年3月期）→912万円（2025年3月期）→943万円（2026年3月期）と推移。当サイト収録の陸運・物流8社では2位で、倉庫会社では最も高い水準（1位は持株会社単体のヤマトホールディングス）。2025年3月期に一度下げた後、最新期に+31万円と回復。</li>
            <li>キャリア採用は総合職・エリア総合職・地域職の3区分で募集中（若干名）。基本給は総合職26万円以上など各区分の初任給がベース（2026年10月15日確認）。</li>
            <li>平均40.7歳・勤続15.6年。物流は燃料費・人件費・取扱量の影響を受けやすく、2024年問題以降の運賃改定や賃上げが数字に表れ始めています。単年の平均額だけでなく推移で見るのが安全です。</li>
          </ul>
        </div>

        <h2 id="s2">三菱倉庫の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社三菱倉庫" },
                { label: "証券コード", value: "9301" },
                { label: "本店", value: "東京都中央区日本橋1-19-1 日本橋ダイヤビルディング（公式会社概要）" },
                { label: "従業員数", value: "単体1,026名・連結4,991名（2026年3月末、公式会社概要）" },
                { label: "事業内容", value: "倉庫・港湾運送・国際輸送・陸上運送を中核に不動産事業も展開する総合物流企業" },
                { label: "平均年間給与", value: "約943万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年9月22日確認）" },
                { label: "直近3年の推移", value: "938万円（2024年3月期）→912万円（2025年3月期）→943万円（2026年3月期）" },
                { label: "平均年齢", value: "40.7歳（同・提出会社）" },
                { label: "平均勤続年数", value: "15.6年（同・提出会社）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年9月22日確認）に基づく提出会社単体・全従業員の平均です。物流会社は総合職・ドライバー職・現業職など職種によって働き方も処遇体系も異なり、提出会社(とくに持株会社)に在籍する従業員の構成は会社ごとに大きく違います。職種・年代・役職により実際の年収は異なるため、比較には幅がある点にご留意ください。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">三菱倉庫の中途採用の募集要項（基本給・職務・応募資格）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">公式サイトの<a href="https://www.mitsubishi-logistics.co.jp/saiyo/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">採用情報</a>に掲載されているキャリア採用の募集要項です。3区分とも「現在、当社ではキャリア採用の募集を行っています」と記載されています（2026年10月15日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">区分</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">基本給</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">主な職務内容</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">勤務地</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">総合職（大卒・修士）</td><td className="py-2 px-3">260,000円以上（総合職大卒初任給）</td><td className="py-2 px-3">経理・財務／国内外の物流事業の営業・企画・管理／医薬品物流（薬剤師資格）／コンテナターミナル運営等／オフィスビル・商業施設・住宅の開発・管理</td><td className="py-2 px-3">東京・横浜・名古屋・大阪・神戸・福岡、海外ほか</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">エリア総合職（大卒・修士）</td><td className="py-2 px-3">243,000円以上（エリア総合職大卒初任給）</td><td className="py-2 px-3">総合職と同じ職務内容</td><td className="py-2 px-3">東日本・中部・関西・九州の各エリア内（原則エリア間異動なし）</td></tr>
                <tr className="border-b border-border"><td className="py-2 px-3 font-bold text-navy">地域職（高卒以上）</td><td className="py-2 px-3">204,800円以上（地域職高卒初任給）</td><td className="py-2 px-3">事業所内のネットワーク構築・運用保守／倉庫・配送センターの運営・管理</td><td className="py-2 px-3">各支店の管轄地域内（原則支店間異動なし）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong>共通：</strong>採用人数は若干名、入社日随時、期間の定めなし、試用期間3ヵ月。基本給は「年齢・経験を考慮して優遇」、昇給年1回・賞与年2回。</li>
            <li><strong>勤務・休日：</strong>9:00〜17:00、時間外労働は月平均15時間程度。土曜（月1回程度の土曜出勤あり）・日曜・祝日、年末年始・夏季・リフレッシュ休暇など。</li>
            <li><strong>福利厚生：</strong>独身寮（総合職用）・社宅（転勤者用）・保養所・退職金・住宅融資・財形貯蓄・持株会など。</li>
            <li>障がいのある方のキャリア採用（契約社員）も別枠で募集されています。退職者向けのカムバック制度（求人情報の案内）もあります。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">出典：<a href="https://www.mitsubishi-logistics.co.jp/saiyo/general.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">三菱倉庫 キャリア採用（総合職）</a>／<a href="https://www.mitsubishi-logistics.co.jp/saiyo/area_general.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用（エリア総合職）</a>／<a href="https://www.mitsubishi-logistics.co.jp/saiyo/area.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用（地域職）</a>（2026年10月15日確認）。募集状況は変動するため、最新は公式サイトでご確認ください。</p>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で三菱倉庫のような大手を目指すなら、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />で「どのエージェントに登録すべきか」から相談する方法もあります（特徴は<Link href="/review/agent-navi/" className="text-teal hover:underline">転職AGENT Naviの口コミ・評判</Link>で確認できます）。</p>
        </div>

        <h2 id="s4">三菱倉庫で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "職務内容に関連する経験", desc: "応募資格は3区分とも「上記職務内容に関連する職務経験のある方」。総合職・エリア総合職は経理、倉庫・国際輸送の営業/企画/管理、港運（コンテナターミナル運営）、不動産開発・管理が対象です。" },
            { title: "薬剤師資格は物流未経験でも可", desc: "医薬品に関する物流事業の営業・企画・管理は薬剤師資格が条件で、資格保有者は物流事業の職務経験が必須ではないと明記されています。" },
            { title: "海外拠点での勤務", desc: "総合職の勤務地には海外が含まれ、事業所はニューヨーク・ロッテルダム・上海・シンガポール・ジャカルタ・ホーチミンなど欧米・アジア各地にあります（公式募集要項）。" },
            { title: "地域職はIT・倉庫運営", desc: "地域職（高卒以上）は事業所内のネットワーク構築・運用保守と、倉庫・配送センターの運営・管理。原則として支店間の異動はありません。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">三菱倉庫の応募方法（公式）</h2>
        <p className="text-sm text-text-muted mb-4">キャリア採用募集要項の「応募方法」の記載です（2026年10月15日確認）。書類選考後の面接回数などの選考ステップは公表されていません。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募書類を郵送", desc: "希望職種・希望勤務地を明記のうえ、履歴書・職務経歴書を送付します。送付先は東京ダイヤサービス（株）キャリア採用担当（東京都中央区新川）。応募書類は返却されません。" },
            { step: 2, title: "書類選考", desc: "送付書類による選考です。質問は人事部人事課へ問い合わせできます。" },
            { step: 3, title: "面接など", desc: "面接の回数・形式は募集要項に記載がありません。選考の詳細は書類選考の案内で確認してください。" },
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

        <h2 id="s6">三菱倉庫の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約943万円（2026年3月期）は提出会社単体・全従業員の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。物流は取扱量・運賃水準の影響を受け、賞与もそれに連動します。</li>
            <li>平均40.7歳・勤続15.6年。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2 id="s7">三菱倉庫転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式採用ページへの直接応募に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からベンチャーまで幅広い求人を扱っています。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職の情報収集に向いています。" },
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

        <h2 id="s8">三菱倉庫転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">三菱倉庫転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式採用ページとエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/butsuryu-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">陸運・物流 年収ランキング</Link>
            <Link href="/company/yamato-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ヤマトホールディングス転職ガイド</Link>
            <Link href="/company/sumitomo-soko/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">住友倉庫転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
