import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  alternates: { canonical: "/company/toyota/" },
  title: "トヨタ自動車に転職するには？年収・面接対策・おすすめエージェント",
  description:
    "トヨタ自動車への転職を解説。公式採用サイト記載の選考フロー（書類選考→1次面接＋適性検査→最終面接）、平均年収1,006万円（2026年3月期・有価証券報告書）、キャリア採用比率49%（2024年度・公式）、面接対策、おすすめ転職エージェント5社を紹介します。",
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "トヨタ自動車に転職するには？年収・面接対策・おすすめエージェント",
    description:
      "トヨタ転職の選考フロー・年収・キャリア採用比率・面接対策・おすすめエージェントを、有価証券報告書と公式採用サイトの情報をもとに解説。",
  },
};

const faqData = [
  {
    q: "トヨタ自動車の中途採用は異業種からでも応募できますか？",
    a: "応募できます。公式採用サイトのキャリア採用FAQでは「同業種はもちろん、異業種で活躍された方々も積極的に採用しており、半数以上の方が異業種から転職されています」と回答しています。公式の数値ページでも、キャリア入社者の約70%が他業界からの転職（2022〜2024年度平均）と紹介されています。",
  },
  {
    q: "トヨタ自動車のキャリア採用（中途採用）比率はどのくらいですか？",
    a: "公式採用サイト「数値で紐解く、トヨタのリアル」によると、採用に占めるキャリア採用の比率は2022年度47%、2023年度49%、2024年度49%です（当社実績数値として掲載）。",
  },
  {
    q: "トヨタ自動車の面接は何回ありますか？",
    a: "公式の選考プロセスページでは、書類選考の後に「1次面接＋適性検査」と「最終面接」の個別面接2回が案内されています。適性検査は面接日の3日前までにWEBで受験し、キャリア採用FAQでは一部職種でソフトウェア試験があるとされています。求人によって選考プロセスが異なる場合がある旨も記載されています。",
  },
  {
    q: "トヨタ自動車の年収はどのくらいですか？",
    a: "有価証券報告書（2026年3月期）記載の平均年間給与は1,006万円・平均年齢40.5歳・平均勤続15.1年です（提出会社の従業員平均）。キャリア採用の募集要項では、給与は「経験、能力等を考慮し、当社規定により支給」とされ、昇給は年1回、賞与は年2回と記載されています。",
  },
  {
    q: "トヨタ自動車の福利厚生にはどのようなものがありますか？",
    a: "キャリア採用の募集要項には、施設として寮・社宅、スポーツ施設、保養所など、制度として選択型福利厚生制度・従業員持株会制度・財形貯蓄制度などが記載されています。手当は超過勤務手当、通勤補助などです。",
  },
  {
    q: "トヨタ自動車の選考期間はどのくらいですか？",
    a: "公式のキャリア採用FAQでは、書類提出から合格まで1〜2ヶ月程度とされています。内定後は合格連絡から2〜3カ月後の入社で、入社日は毎月1日、具体的な入社月は面接時に相談して調整すると案内されています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ToyotaCareer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { name: "企業別転職ガイド", href: "/company/" },
          { name: "トヨタ自動車" },
        ]}
      />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              トヨタ自動車に転職するには？年収・面接対策・おすすめエージェント
            </h1>
          </div>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/toyota.jpg" alt="トヨタ自動車の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">トヨタ自動車 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            トヨタ自動車は愛知県豊田市に本社を置く自動車メーカーで、連結従業員数は390,927人（2026年3月末）にのぼります。
            公式採用サイトによると採用のおよそ半数をキャリア採用が占め（2024年度49%）、キャリア入社者の約70%は他業界からの転職です。
            本記事では、有価証券報告書と公式採用サイトの情報をもとに、トヨタ転職の選考フロー・年収・面接対策・おすすめエージェントを解説します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">トヨタ自動車の会社概要</a></li>
            <li><a href="#s2" className="text-teal hover:underline">トヨタ自動車の転職難易度をデータで見る</a></li>
            <li><a href="#s3" className="text-teal hover:underline">トヨタ自動車の中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">トヨタ自動車の選考フロー（公式記載）</a></li>
            <li><a href="#s5" className="text-teal hover:underline">トヨタ転職の面接対策ポイント</a></li>
            <li><a href="#s6" className="text-teal hover:underline">トヨタ転職におすすめの転職エージェント5社</a></li>
            <li><a href="#s7" className="text-teal hover:underline">トヨタ転職 よくある質問</a></li>
          </ol>
        </nav>

        {/* 会社概要 */}
        <h2 id="s1">トヨタ自動車の会社概要</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "トヨタ自動車株式会社（Toyota Motor Corporation）" },
                { label: "本社", value: "愛知県豊田市トヨタ町1番地" },
                { label: "設立", value: "1937年8月28日" },
                { label: "資本金", value: "6,354億円（2026年3月末）" },
                { label: "従業員数", value: "73,133人（単体）／390,927人（連結）（2026年3月末）" },
                { label: "平均年収", value: "1,006万円（2026年3月期・有価証券報告書）" },
                { label: "平均年齢・平均勤続年数", value: "40.5歳・15.1年（2026年3月期・有価証券報告書）" },
                { label: "事業内容", value: "自動車の生産・販売" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">
                    {row.label}
                  </th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※出典：<a href="https://global.toyota/jp/company/profile/overview/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">トヨタ自動車 会社概要</a>（社名・本社・設立・資本金・従業員数・事業内容）、有価証券報告書（平均年収・平均年齢・平均勤続年数。<a href="https://irbank.net/7203/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK</a>で確認）。2026年10月14日確認。最新情報は公式サイトでご確認ください。
        </p>

        {/* 転職難易度 */}
        <h2 id="s2">トヨタ自動車の転職難易度をデータで見る</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-text-secondary text-sm mb-4">
            トヨタ自動車は公式採用サイトでキャリア採用比率やキャリア入社者の出身業界を公開しています。採用の約半数がキャリア採用で、他業界からの転職者も多いことが数字から読み取れます。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary mb-5">
            <li>キャリア採用比率：2022年度47%、2023年度49%、2024年度49%</li>
            <li>キャリア入社者の約70%が他業界からの転職（出身業界は自動車・自動車部品31%、電気・機械17%、IT・ソフトウェア12%、素材・化学9%、コンサル4%、その他27%。2022〜2024年度平均）</li>
            <li>キャリア入社者の職種：技術系（ソフトウェア人材）49%、技術系（それ以外）19%、事務系32%（2022〜2024年度平均）</li>
            <li>入社3年の定着率（事技・業務職、新卒＋キャリア）：97.7%（2021〜2024年度平均）</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">決算期</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">平均年間給与</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">平均年齢</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">平均勤続年数</th>
                  <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy">従業員数（単体）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fy: "2026年3月期", pay: "1,006万円", age: "40.5歳", tenure: "15.1年", emp: "73,133人" },
                  { fy: "2025年3月期", pay: "982万円", age: "40.7歳", tenure: "15.6年", emp: "71,515人" },
                  { fy: "2024年3月期", pay: "899万円", age: "40.6歳", tenure: "16.0年", emp: "70,224人" },
                  { fy: "2023年3月期", pay: "895万円", age: "40.6歳", tenure: "16.2年", emp: "70,056人" },
                ].map((r) => (
                  <tr key={r.fy} className="border-b border-border">
                    <td className="py-2 px-3 text-text-secondary">{r.fy}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.pay}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.age}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.tenure}</td>
                    <td className="py-2 px-3 text-text-secondary">{r.emp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-secondary mt-4">
            平均年間給与は直近3期で899万円から1,006万円へ上昇しています。
          </p>
          <p className="text-xs text-text-muted mt-4">
            ※出典：キャリア採用比率・出身業界・職種・定着率は公式採用サイト<a href="https://recruit.toyota/figure/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「数値で紐解く、トヨタのリアル」</a>（当社実績数値として掲載。法定の「正規雇用労働者の中途採用比率」として明示された表記ではありません）。年収・年齢・勤続年数・従業員数は各期の有価証券報告書（<a href="https://irbank.net/7203/salary" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">IR BANK</a>で確認）。2026年10月14日確認。
          </p>
        </div>

        {/* 中途採用の状況 */}
        <h2 id="s3">トヨタ自動車の中途採用の状況</h2>
        <p className="text-sm text-text-secondary mb-4">20代・第二新卒でトヨタ自動車のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">
            トヨタ自動車の公式採用サイトは
            <a
              href="https://recruit.toyota/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              recruit.toyota
            </a>
            へ移行済みで（旧「toyota-recruit.com/career/」はrecruit.toyotaへリダイレクト）、キャリア採用は
            <a
              href="https://recruit.toyota/career/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              キャリア採用ページ
            </a>
            に募集要項・選考プロセスがまとまっています。応募は公式採用サイトからのWebエントリーです。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>募集職種（公式表記のまま・2026年7月31日確認時点）: 「ソフトウェア」「技術系」「事務系」「業務系」「新卒博士」「病院事務」の各区分で募集されています</li>
            <li>勤務地: 本社（愛知県豊田市）、名古屋オフィス（愛知県名古屋市）、東富士研究所（静岡県裾野市）、東京本社（東京都文京区）など。技術職・事務職は将来的に転勤の可能性があり、業務職は原則配属後の転勤なし（地区内異動）とされています</li>
            <li>雇用形態は「正社員（期間の定め無し）」で、試用期間なしと記載されています</li>
            <li>リファラル採用・アルムナイ採用の専用ページや、キャリア登録の仕組みも用意されています</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年7月31日に公式採用サイトで確認した情報です。募集状況は変動するため、最新の情報は公式サイトでご確認ください。
          </p>
        </div>

        {/* 選考フロー */}
        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s4">トヨタ自動車の選考フロー（公式記載）</h2>
        <div className="space-y-5 mb-8">
          {[
            {
              step: 1,
              title: "応募",
              desc: "公式採用サイトのキャリア採用ページからWebエントリーします。履歴書・職務経歴書を提出します。",
            },
            {
              step: 2,
              title: "書類選考",
              desc: "合否にかかわらず、2週間以内にメールで結果が連絡されるとされています。",
            },
            {
              step: 3,
              title: "1次面接＋適性検査",
              desc: "書類選考合格者に個別面接が実施されます。適性検査は面接日の3日前までにWEBで受験するとされ、キャリア採用FAQでは一部職種でソフトウェア試験があると案内されています。",
            },
            {
              step: 4,
              title: "最終面接",
              desc: "1次面接の合格者に個別面接が実施され、さらに詳細の確認が行われます。",
            },
            {
              step: 5,
              title: "最終面接合否連絡",
              desc: "最終面接の合否は、通常1〜2週間以内に連絡されるとされています。",
            },
            {
              step: 6,
              title: "内定",
              desc: "提示された入社条件に同意すると正式内定となります。合格連絡から2〜3カ月後に入社するスケジュールで、入社日は毎月1日と公式ページに記載されています。",
            },
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
        <p className="text-xs text-text-muted mb-8">
          ※出典：公式<a href="https://recruit.toyota/career/process/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">選考プロセス</a>・<a href="https://recruit.toyota/career/faq/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用FAQ</a>（2026年10月14日確認）。書類提出から合格までは1〜2ヶ月程度とされています。求人によって選考プロセスが異なる場合があります。
        </p>

        {/* 面接対策ポイント */}
        <h2 id="s5">トヨタ転職の面接対策ポイント</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "トヨタフィロソフィー・トヨタウェイ2020の理解",
              desc: "公式サイトでは「トヨタフィロソフィー」「トヨタウェイ2020」「トヨタ行動指針」が公開されています。面接前に目を通し、自身の仕事の進め方や価値観と重なる部分を具体的なエピソードで語れるよう準備しておくことをおすすめします。",
            },
            {
              title: "改善の実績を数字で語る",
              desc: "公式採用サイトでは、社員が改善のアイデアを出す「創意くふう提案制度」の件数が1人あたり年14.0件（2024年度）と紹介されています。過去の業務で取り組んだ改善の内容と成果を、数値を交えて説明できるよう準備しておくことをおすすめします。",
            },
            {
              title: "ソフトウェア・技術領域での専門性",
              desc: "キャリア入社者の49%が技術系（ソフトウェア人材）です（2022〜2024年度平均・公式）。ソフトウェア職種で応募する場合は、これまでの開発経験や技術スタックを、応募職種の業務内容と結びつけて整理しておくことをおすすめします。",
            },
            {
              title: "異業種での経験の活かし方",
              desc: "キャリア入社者の約70%が他業界からの転職です（2022〜2024年度平均・公式）。前職の業界知識やスキルを、応募職種でどう活かせるかを自分の言葉で説明できるようにしておくと、面接での受け答えに一貫性が出ます。",
            },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※出典：<a href="https://global.toyota/jp/company/vision-and-philosophy/toyotaway_code-of-conduct/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">トヨタウェイ2020／トヨタ行動指針（公式）</a>、<a href="https://recruit.toyota/figure/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">数値で紐解く、トヨタのリアル（公式採用サイト）</a>。2026年10月14日確認。
        </p>

        {/* おすすめ転職エージェント */}
        <h2 id="s6">トヨタ転職におすすめの転職エージェント5社</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              name: "リクルートエージェント",
              href: "/review/recruit-agent/",
              desc: "幅広い業界・職種を扱う大手総合型の転職エージェントです。メーカーやIT職種を含む多数の求人から比較検討でき、非公開求人の紹介や書類・面接対策のサポートも受けられます。",
            },
            {
              name: "ビズリーチ",
              href: "/review/bizreach/",
              desc: "ハイクラス向けのスカウト型転職サービスです。職務経歴を登録すると企業やヘッドハンターからスカウトが届く仕組みで、管理職・専門職として市場価値を確かめたい方に向いています。",
            },
            {
              name: "JACリクルートメント",
              href: "/review/jac/",
              desc: "外資系・グローバル企業やミドル〜ハイクラス層の転職支援を得意とする転職エージェントです。英語力や海外経験を活かしたいポジションを探す方におすすめです。",
            },
            {
              name: "doda",
              href: "/review/doda/",
              desc: "転職サイトとエージェントサービスを1つのサービス内で併用できる大手総合型のサービスです。自分で求人を探しながらキャリアアドバイザーの提案も受けられるため、幅広く情報収集したい方に向いています。",
            },
            {
              name: "マイナビ転職エージェント",
              href: "/review/mynavi/",
              desc: "20代〜30代の転職支援に力を入れる総合型の転職エージェントです。書類添削や面接対策などのサポートを受けながら進められるため、初めての転職の方にも適しています。",
            },
          ].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link
                  href={agent.href}
                  className="text-teal text-sm hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="s7">トヨタ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">
            トヨタ転職を成功させるために
          </h2>
          <p className="text-white/70 text-sm mb-6">
            転職エージェントを活用し、十分に準備したうえで選考に臨むことをおすすめします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">
              転職エージェントおすすめランキングを見る
            </Link>
          </div>
        </div>

        {/* 関連企業ガイド */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">他の企業の転職ガイド</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/google/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Google転職ガイド
            </Link>
            <Link href="/company/amazon/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              Amazon転職ガイド
            </Link>
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              任天堂転職ガイド
            </Link>
            <Link href="/company/accenture/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              アクセンチュア転職ガイド
            </Link>
            <Link href="/company/cyberagent/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              サイバーエージェント転職ガイド
            </Link>
            <Link href="/company/sony/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              ソニー転職ガイド
            </Link>
            <Link href="/company/mercari/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">
              メルカリ転職ガイド
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
