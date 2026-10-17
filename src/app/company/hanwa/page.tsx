import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "阪和興業の年収・中途採用【2026年10月】平均年収997万円・求人31件・選考の流れと難易度",
  description:
    "阪和興業の平均年間給与は9,976千円（約997万円・2026年3月期 有価証券報告書／提出会社）です。中途採用の求人は公式の求人一覧に31件（2026年10月17日確認）掲載されており、選考は書類選考→適性検査・面接3回で内定まで概ね1カ月です。中途採用比率や応募条件も公式情報で整理しています。",
  alternates: { canonical: "/company/hanwa/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "阪和興業の年収・中途採用【2026年10月】平均年収997万円・求人31件・選考の流れと難易度",
    description: "阪和興業の平均年収約997万円（有価証券報告書）と、中途採用の求人31件・選考の流れ（公式・10/17確認）を整理しています。",
  },
};

const faqData = [
  {
    q: "阪和興業の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月19日提出）によると、平均年間給与は9,976千円（約997万円・提出会社単体）で、前期比7.8％の増加です。849万円（2024年3月期）→925万円（2025年3月期）→997万円（2026年3月期）と推移しています。提出会社の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "阪和興業は中途採用を行っていますか？",
    a: "はい。キャリア採用は通年で受け付けており、公式の求人一覧（HRMOS）には2026年10月17日時点で31件（正社員25件・契約社員6件）が掲載されています。職種別では営業14件・管理13件・工務4件です。応募は求人ページからのみ受け付けており、郵送やメールでの応募は受け付けていません（公式キャリア採用サイト「よくあるご質問」）。",
  },
  {
    q: "阪和興業の中途採用の難易度は高いですか？",
    a: "応募者数や倍率は公表されていないため、難易度を数字で示すことはできません。公式の「よくあるご質問」では、中途採用は実務経験を通じたスキルを持ち即戦力として活躍できる方を前提としつつ、第二新卒は未経験または異業種からでも応募できるポジションがあると説明されています。正規雇用労働者の中途採用比率は2022年度39％・2023年度49％・2024年度37％と公表されています（公式募集要項、2026年10月17日確認）。",
  },
  {
    q: "阪和興業の中途採用の選考フローを教えてください。",
    a: "公式の「よくあるご質問」によると、通常は書類選考の後、適性検査・1次面接・2次面接・最終面接の順に進み、内定までは概ね1カ月程度です。面接は平日のみで、最終面接は対面形式です（遠方の方は往復交通費支給）。入社日は原則として毎月1日付です（2026年10月17日確認）。",
  },
  {
    q: "阪和興業はどんな会社ですか？",
    a: "鉄鋼、鉄鋼原料、各種金属、食品、エネルギー、生活資材、木材、機械等の国内販売及び輸出入を営む商社です。大阪本社（大阪市中央区）と東京本社（東京都中央区）の2本社を置き、従業員数は1,820名（連結6,079名、2026年3月31日時点）です（公式「会社概要」、2026年10月17日確認）。",
  },
  {
    q: "阪和興業の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は11.3年、平均年齢は37.4歳（提出会社）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "阪和興業の年収・中途採用【2026年10月】平均年収997万円・求人31件・選考の流れと難易度",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/hanwa/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "阪和興業" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            阪和興業への転職は難しい？中途採用・平均年収・選考を解説【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/hanwa.jpg" alt="阪和興業の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">阪和興業 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            阪和興業（証券コード8078）は、鉄鋼を中心に、金属原料・食品・エネルギー・生活資材・木材・機械などの国内販売と輸出入を手がける商社です。
            本記事では、有価証券報告書と公式キャリア採用サイト・求人一覧をもとに、平均年収・中途採用の求人・選考の流れを整理します。
          </p>
        </div>
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 mb-8">
          <p className="font-bold text-navy mb-3">阪和興業の年収と中途採用の要約（2026年10月17日確認）</p>
          <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
            <li><strong>平均年収：</strong>9,976千円（約997万円）です（2026年3月期 有価証券報告書／提出会社、賞与・基準外賃金を含む）。前期比7.8％増で、平均37.4歳・勤続11.3年・従業員1,820名です。</li>
            <li><strong>求人数：</strong>公式の求人一覧に31件が掲載されています（正社員25件・契約社員6件、職種別は営業14件・管理13件・工務4件、勤務地は東京21件が最多）。キャリア採用は通年で受け付けています。</li>
            <li><strong>募集職種：</strong>国内営業、海外営業、財務、経理、法務、人事、システム、経営企画などです。給与は経験等を考慮して決定され、昇給は年1回、賞与は年2回です。</li>
            <li><strong>選考の流れ：</strong>書類選考の後、適性検査・1次面接・2次面接・最終面接の順に進み、内定までは概ね1カ月程度です。面接は平日のみで、最終面接は対面形式です。</li>
            <li><strong>難易度の目安：</strong>倍率は公表されていません。中途採用は即戦力を前提としていますが、第二新卒は未経験・異業種から応募できるポジションがあります。正規雇用の中途採用比率は39％（2022年度）→49％（2023年度）→37％（2024年度）です。</li>
          </ul>
          <p className="text-xs text-text-muted mt-3">出典：<a href="https://www.hanwa.co.jp/ir/library/financial.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">阪和興業 有価証券報告書（2026年3月期）</a>／<a href="https://hrmos.co/pages/hanwa/jobs" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">求人一覧（HRMOS）</a>／<a href="https://recruit.hanwa.co.jp/career/recruitment/outline/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用「募集要項」</a>／<a href="https://recruit.hanwa.co.jp/career/recruitment/faq/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「よくあるご質問」</a>。求人は随時変わるため、応募前に公式サイトで最新の情報をご確認ください。</p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">阪和興業転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">阪和興業の基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">阪和興業の中途採用・求人（公式の募集要項）</a></li>
            <li><a href="#s4" className="text-teal hover:underline">阪和興業で求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">阪和興業の中途採用の選考フロー（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">阪和興業の年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">阪和興業転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">阪和興業転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">阪和興業転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は9,976千円（約997万円）です（2026年3月期・有価証券報告書、2026年10月17日確認）。提出会社単体の正社員の平均値です。</li>
            <li>849万円（2024年3月期）→925万円（2025年3月期）→997万円（2026年3月期）と推移しており、2年で計148万円上昇して1,000万円に迫る水準です。</li>
            <li>中途採用の求人は公式の求人一覧に31件掲載されています（2026年10月17日確認）。選考は書類選考・適性検査・面接3回で、内定まで概ね1カ月程度です。</li>
            <li>平均37.4歳・勤続11.3年と収録9社で最も若い構成です。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
          </ul>
        </div>

        <h2 id="s2">阪和興業の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "阪和興業株式会社" },
                { label: "証券コード", value: "8078" },
                { label: "本社", value: "大阪本社（大阪市中央区伏見町4-3-9）・東京本社（東京都中央区築地1-13-1）" },
                { label: "設立", value: "1947年4月1日" },
                { label: "従業員数", value: "1,820名（連結6,079名、2026年3月31日時点）" },
                { label: "営業品目", value: "鉄鋼、鉄鋼原料、各種金属、食品、エネルギー、生活資材、木材、機械等の国内販売及び輸出入" },
                { label: "平均年間給与", value: "9,976千円（約997万円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "849万円（2024年3月期）→925万円（2025年3月期）→997万円（2026年3月期）" },
                { label: "平均年齢", value: "37.4歳（同・提出会社）" },
                { label: "平均勤続年数", value: "11.3年（同・提出会社）" },
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
          ※2026年3月期の数値は有価証券報告書（2026年6月19日提出、公式IRライブラリーで2026年10月17日確認）、それ以前の推移はIR BANK掲載値（2026年9月15日確認）に基づく提出会社単体の平均です。本社・設立・従業員数・営業品目は公式「会社概要」によります。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">阪和興業の中途採用・求人（公式の募集要項）</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4"><a href="https://www.hanwa.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用ページ</a>から案内される<a href="https://recruit.hanwa.co.jp/career/recruitment/outline/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用の募集要項</a>と<a href="https://hrmos.co/pages/hanwa/jobs" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">求人一覧</a>の内容です（2026年10月17日確認）。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><strong>求人数：</strong>31件（正社員25件・契約社員6件）です。職種別は営業14件・管理13件・工務4件、勤務地別は東京21件・大阪3件・九州2件・名古屋・北海道・新潟各1件です。</li>
            <li><strong>募集部門の例：</strong>条鋼部門（5件）、エネルギー部門（3件）、法務部（3件）、鋼板部門・鉄構営業部門・リスクマネジメント部（各2件）のほか、経理部・財務部・経営企画部・監査部などの管理部門でも募集があります。</li>
            <li><strong>職務内容：</strong>鉄鋼を中心に、リサイクル・プライマリーメタル、エネルギー・生活資材、食品、木材、機械など各種商品の国内販売と輸出入を担当します。募集要項では「独立系商社の強みであるフットワークの良さを活かし、新たなビジネスを生み出すべく自ら考え、粘り強くものごとに向き合うことができる人材を求めます」とされています。</li>
            <li><strong>応募条件の例：</strong>プライマリーメタル部門の海外営業は「社会人経験8年以上」「メーカーや商社での営業経験5年以上」が必須で、TOEIC730点以上は歓迎条件です。必須条件は求人ごとに異なります。</li>
            <li><strong>勤務条件：</strong>勤務時間は8:45〜17:00（休憩60分）、完全週休2日制で年間休日は125日です。住宅手当は東京・千葉・神奈川・埼玉在住の場合45,000円/月、その他の地域は25,000円/月です（支給要件あり）。</li>
            <li>希望する職種がない場合に、今後の募集案内を受け取れる「キャリア登録」の窓口も用意されています。募集状況は変動するため、最新の情報は公式の求人一覧でご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で阪和興業のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">阪和興業で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "自ら考えて新しいビジネスを生み出す力", desc: "募集要項では、独立系商社の強みであるフットワークの良さを活かし、自ら考え、粘り強くものごとに向き合うことができる人材を求めるとしています。" },
            { title: "即戦力となる実務経験", desc: "公式の「よくあるご質問」では、中途採用は実務経験を通じたスキルを持ち、即戦力として活躍できる方を前提としていると説明されています。" },
            { title: "第二新卒は未経験でも応募できる枠あり", desc: "同じく公式の「よくあるご質問」では、第二新卒は未経験または異業種からでも応募できるポジションがあるとされています。" },
            { title: "語学力は必須ではない", desc: "語学力はアピールポイントの一つとされていますが、必須項目ではないと公式に記載されています。海外営業など、求人ごとの歓迎条件をご確認ください。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">阪和興業の中途採用の選考フロー（公式）</h2>
        <p className="text-sm text-text-muted mb-4">公式キャリア採用サイトの「よくあるご質問」に記載された通常の流れです（2026年10月17日確認）。内定までは概ね1カ月程度とされていますが、日程調整によってはそれ以上かかる場合があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "求人一覧から応募・書類選考", desc: "公式の求人一覧から希望の求人に応募します。郵送やメールでの応募は受け付けていません。原則として同じポジションへの再応募は控えるよう案内されています。" },
            { step: 2, title: "適性検査・1次面接", desc: "書類選考の後、適性検査と1次面接が行われます。面接は当社最寄り拠点での対面形式が希望とされていますが、来社が難しい場合は相談できます。" },
            { step: 3, title: "2次面接・最終面接", desc: "面接は平日のみで、時間帯は臨機応変に対応するとされています。最終面接のみ対面形式で、遠方の方には往復交通費が支給されます。" },
            { step: 4, title: "内定・入社日の調整", desc: "入社時の処遇（基本給・賞与）は経験・能力を考慮して当社規程により決定され、金額は採用内定通知書で伝えられます。入社日は原則として毎月1日付です。" },
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

        <h2 id="s6">阪和興業の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約997万円（2026年3月期）は提出会社単体の正社員の平均であり、職種・年代・役職により実際の水準は異なります。有価証券報告書では、正社員は総合職と一般職の二つの職掌に区分されていると説明されています。</li>
            <li>平均年間給与には賞与及び基準外賃金が含まれます。</li>
            <li>平均37.4歳・勤続11.3年と収録9社で最も若い構成です。平均年収は年齢構成の影響を受ける点にご注意ください。</li>
            <li>中途入社時の処遇（基本給・賞与）は経験・能力を考慮して当社規程により決定され、具体的な金額は採用内定通知書で伝えられます（公式「よくあるご質問」）。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">阪和興業転職で活用したい転職エージェント</h2>
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

        <h2 id="s8">阪和興業転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">阪和興業転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/shosha-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">商社 年収ランキング</Link>
            <Link href="/company/kanematsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">兼松転職ガイド</Link>
            <Link href="/company/itochu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">伊藤忠商事転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
