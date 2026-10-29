import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FelmatCta, { FelmatTextLink } from "@/components/FelmatCta";

export const metadata: Metadata = {
  title: "電源開発(J-POWER)の転職・中途採用｜平均年収1,188万円・面接3回程度【2026年】",
  description:
    "電源開発(J-POWER)の平均年収は約1,188万円（2026年3月期・有価証券報告書）です。経験者採用の募集コース（事務系・技術系）、E-mailでの応募方法、選考（面接3回程度）、中途採用比率を公式サイトで確認して解説します。",
  alternates: { canonical: "/company/jpower/" },
  openGraph: {
    images: ["/opengraph-image.jpg"],
    title: "電源開発(J-POWER)の転職・中途採用｜平均年収1,188万円・面接3回程度【2026年】",
    description: "電源開発(J-POWER)（9513）の平均年収・経験者採用の募集コース・応募方法・選考を、有価証券報告書と公式採用ページで確認して解説します。",
  },
};

const faqData = [
  {
    q: "電源開発(J-POWER)の平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書（2026年6月24日提出、EDINETで2026年10月18日確認）によると、平均年間給与は11,883,541円（約1,188万円・提出会社）で、対前事業年度増減率は6.4%です。1,045万円（2024年3月期）→1,117万円（2025年3月期）→1,188万円（2026年3月期）と推移しています（2025年3月期以前はIR BANK掲載値・2026年9月14日確認）。提出会社の就業人員1,994人（出向人員等1,160人を含みません）の平均で、基準外賃金と賞与を含みます。職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "電源開発(J-POWER)は中途採用を行っていますか？",
    a: "行っています。公式サイトの経験者採用ページでは、グローバル社員（総合職）を事務系・技術系の2コースで募集しており、応募資格は高等専門学校・四年制大学卒業または大学院修了後に企業等で正社員としての就業経験を有している方です（2026年10月29日確認）。公表されている正規雇用労働者の中途採用比率は、2023年度16%・2024年度20%・2025年度17%です（2026年4月16日公表）。",
  },
  {
    q: "電源開発(J-POWER)の中途採用の選考はどのように進みますか？",
    a: "公式の経験者採用ページによると、履歴書・職務経歴書・応募情報・志望理由書（当社指定のExcel形式）をE-mail（career@jpower.co.jp）で送付して応募します。郵送での受付は行っていません。選考は書類選考→面接試験（3回程度）等→内定・処遇条件説明・雇入時健康診断→入社の順で予定されており、書類選考の結果は通過者にのみ応募受付日から1か月以内に電話またはE-mailで連絡すると記載されています（2026年10月29日確認）。",
  },
  {
    q: "電源開発(J-POWER)はどんな会社ですか？",
    a: "全国で発電(水力・石炭火力等)と送電を手がける卸電力の大手で、海外発電事業も展開しています。有価証券報告書の本店所在地は東京都中央区銀座六丁目15番1号です。",
  },
  {
    q: "電源開発(J-POWER)の平均勤続年数・平均年齢はどのくらいですか？",
    a: "2026年3月期の有価証券報告書によると、平均勤続年数は18.5年、平均年齢は41.6歳（提出会社の就業人員1,994人）です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "電源開発(J-POWER)の転職・中途採用｜平均年収1,188万円・面接3回程度【有価証券報告書準拠】",
  dateModified: "2026-10-29",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/jpower/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "J-POWER" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            電源開発(J-POWER)の転職・中途採用｜平均年収1,188万円・面接3回程度【2026年】
          </h1>
        <figure className="mb-2 overflow-hidden rounded-2xl border border-border">
          <img src="/company-ss/jpower.jpg" alt="電源開発(J-POWER)の公式サイト(スクリーンショット)" className="w-full h-auto" loading="lazy" />
        </figure>
        <p className="text-xs text-text-muted mb-6">電源開発(J-POWER) 公式サイトのスクリーンショット(2026年9月16日取得)。最新の情報は公式サイトをご確認ください。</p>
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-text-secondary leading-relaxed">
            電源開発(J-POWER)の平均年間給与は<strong>11,883,541円（約1,188万円）</strong>です（2026年3月期・有価証券報告書、提出会社の就業人員1,994人）。経験者採用はグローバル社員（総合職）の事務系・技術系の2コースで募集されており、応募書類をE-mailで送付し、書類選考の後に面接試験（3回程度）等が行われます。正規雇用労働者の中途採用比率は2023年度16%・2024年度20%・2025年度17%と公表されています（いずれも公式サイトで2026年10月29日確認）。
            電源開発(J-POWER)（証券コード9513）は、全国で発電(水力・石炭火力等)と送電を手がける卸電力の大手で、海外発電事業も展開しています。本記事では、有価証券報告書と公式採用ページの記載をもとに、年収・中途採用・選考を整理します。
          </p>
        </div>
        <nav id="auto-toc" className="mb-10 rounded-2xl border border-border bg-warm-gray/60 p-5 sm:p-6">
          <p className="font-bold text-navy mb-3">目次</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-5">
            <li><a href="#s1" className="text-teal hover:underline">J-POWER転職の要点</a></li>
            <li><a href="#s2" className="text-teal hover:underline">J-POWERの基本データ（有価証券報告書）</a></li>
            <li><a href="#s3" className="text-teal hover:underline">J-POWERの中途採用の状況</a></li>
            <li><a href="#s4" className="text-teal hover:underline">J-POWERで求められる人材</a></li>
            <li><a href="#s5" className="text-teal hover:underline">J-POWERの応募方法と選考プロセス（公式）</a></li>
            <li><a href="#s6" className="text-teal hover:underline">J-POWERの年収の考え方</a></li>
            <li><a href="#s7" className="text-teal hover:underline">J-POWER転職で活用したい転職エージェント</a></li>
            <li><a href="#s8" className="text-teal hover:underline">J-POWER転職 よくある質問</a></li>
          </ol>
        </nav>

        <h2 id="s1">J-POWER転職の要点</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約1,188万円（11,883,541円、2026年3月期・有価証券報告書、EDINETで2026年10月29日再確認）で、提出会社の就業人員1,994人（出向人員等1,160人を含みません）の平均値です。</li>
            <li>1,045万円（2024年3月期）→1,117万円（2025年3月期）→1,188万円（2026年3月期）と推移しています（2年で計143万円上昇し収録9社トップ）。</li>
            <li>経験者採用はグローバル社員（総合職）の事務系・技術系の2コースで、勤務地は全国・海外の各事業所（出向先を含む）です。給与は経験・能力等を考慮のうえ当社規程により決定され、試用期間はありません（2026年10月29日確認）。</li>
            <li>選考は書類選考→面接試験（3回程度）等→内定の順で、中途採用比率は2025年度17%です。</li>
          </ul>
        </div>

        <h2 id="s2">J-POWERの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "電源開発株式会社" },
                { label: "証券コード", value: "9513" },
                { label: "本店所在地", value: "東京都中央区銀座六丁目15番1号（有価証券報告書）" },
                { label: "事業内容", value: "全国で発電(水力・石炭火力等)と送電を手がける卸電力の大手。海外発電事業も展開" },
                { label: "平均年間給与", value: "約1,188万円（11,883,541円、2026年3月期・有価証券報告書／提出会社）" },
                { label: "直近3年の推移", value: "1,045万円（2024年3月期）→1,117万円（2025年3月期）→1,188万円（2026年3月期）" },
                { label: "従業員数（提出会社）", value: "1,994人（就業人員。発電事業1,890人・海外事業101人・その他3人）" },
                { label: "平均年齢", value: "41.6歳（同・提出会社）" },
                { label: "平均勤続年数", value: "18.5年（同・提出会社）" },
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
          ※2026年3月期の数値は<a href="https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100YISC.pdf" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">有価証券報告書</a>（2026年6月24日提出、EDINETで2026年10月18日確認・10月29日再確認）、それ以前の推移はIR BANK掲載値（2026年9月14日確認）に基づく提出会社の平均です。有価証券報告書の注記により、従業員数は就業人員で出向人員等1,160人を含まず、平均年間給与は基準外賃金及び賞与を含みます。また、人財に関する指標として、経験者採用者の役付社員数は2024年度実績で150名（当社単体。目標は2030年までに2021年度の110名の1.5倍以上）と記載されています。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2 id="s3">J-POWERの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">J-POWERの<a href="https://www.jpower.co.jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">経験者採用ページ</a>に掲載されている<a href="https://www.jpower.co.jp/recruit/career/naiyou.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集内容</a>の主な項目は次のとおりです（2026年10月29日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  { label: "募集職種", value: "グローバル社員（総合職）。業務内容は当社及び出向先での全ての業務（配属部署の定めるところによる）" },
                  { label: "募集コース", value: "事務系グローバル社員、技術系グローバル社員" },
                  { label: "応募資格", value: "高等専門学校、四年制大学卒業または大学院修了後、企業等で正社員としての就業経験を有している方" },
                  { label: "勤務地", value: "会社の定める全国及び海外の各事業所（出向先を含む）" },
                  { label: "勤務時間", value: "9:00～17:30（休憩50分。本店以外の事業所では繰上・繰下あり）" },
                  { label: "給与", value: "経験・能力等を考慮のうえ当社規程により決定。試用期間なし、給与改定年1回・賞与年2回" },
                  { label: "休日休暇", value: "完全週休2日制、祝日、年末・年始等。有給休暇年20日（初年度は入社月に応じて付与）" },
                  { label: "中途採用比率", value: "正規雇用労働者 2023年度16%・2024年度20%・2025年度17%（2026年4月16日公表）" },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <th className="text-left py-2 px-3 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                    <td className="py-2 px-3 text-text-secondary">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><a href="https://www.jpower.co.jp/recruit/career/course.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">募集コース</a>のページでは、事務系は風力発電事業・再生可能エネルギー・新規事業・海外事業・エネルギー取引・財務・法務・燃料調達・資材調達・広報/株式の各分野、技術系は水力発電・変電、風力発電、送電、情報通信、土木、機械（鋼構造）、建築、地質、火力発電、原子力発電、エネルギー取引の各分野で、歓迎する実務経験が示されています。</li>
            <li>中途採用比率は2割前後で推移しており、正規雇用の採用者の約8割は新卒を条件とする募集による採用です。</li>
            <li>※募集状況は変動するため、最新情報は公式の経験者採用ページでご確認ください。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-4">20代・第二新卒で電源開発(J-POWER)のような大手企業を目指す場合は、<FelmatTextLink slug="agent-navi" text="転職AGENT Navi(PR)" />などの若手特化型の転職エージェントで、求人の紹介と応募書類の添削を受ける方法があります。</p>
        </div>

        <h2 id="s4">J-POWERで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "収録9社トップの1,188万円", desc: "電力・ガス9社の中で最も高い平均年間給与です(2026年3月期)。" },
            { title: "卸電力という独自の立ち位置", desc: "小売より発電・送電に特化した全国区の事業構造で、大規模電源の技術キャリアを積めます。" },
            { title: "海外事業の存在感", desc: "海外での発電事業を長く手がけており、グローバル志向の技術者にも門戸があります。" },
            { title: "平均41.6歳・勤続18.5年", desc: "高定着の年功的な構成です。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <FelmatCta slug="agent-navi" heading="20代・第二新卒の転職サポート(無料)" />

        <h2 id="s5">J-POWERの応募方法と選考プロセス（公式）</h2>
        <p className="text-sm text-text-muted mb-4">公式の<a href="https://www.jpower.co.jp/recruit/career/houhou.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">応募方法・選考プロセス</a>のページでは、次の流れが案内されています（2026年10月29日確認）。スケジュールは予定として記載されています。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募書類をE-mailで送付", desc: "履歴書（様式自由・写真貼付・PDF形式）、職務経歴書（様式自由・PDF形式）、応募情報・志望理由書（当社指定・Excel形式）を、人事労務部人事室経験者採用担当（career@jpower.co.jp）へE-mailで送付します。郵送での受付は行っていません。" },
            { step: 2, title: "書類選考", desc: "応募書類の内容に基づいて書類選考が行われます。結果は通過者にのみ、応募受付日から1か月以内に電話またはE-mailで連絡されます。" },
            { step: 3, title: "面接試験（3回程度）等", desc: "公式の選考スケジュールでは、面接試験は3回程度と記載されています。" },
            { step: 4, title: "内定・処遇条件説明・雇入時健康診断", desc: "内定後に処遇条件の説明と雇入時健康診断が行われます。入社日は現職の退職時期等を調整のうえ決定されます。" },
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

        <h2 id="s6">J-POWERの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約1,188万円（2026年3月期）は提出会社の就業人員（出向人員等を除く）の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>平均年間給与には賞与等の変動要素が含まれます。</li>
            <li>提出会社全体の平均であり、発電所勤務・本社部門などで水準は異なります。</li>
            <li>中途入社時の提示額はポジション・経験により個別に決まります。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認することをおすすめします。</p>
        </div>

        <h2 id="s7">J-POWER転職で活用したい転職エージェント</h2>
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

        <h2 id="s8">J-POWER転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">J-POWER転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">ポジションごとの詳細は、公式採用ページと転職エージェントの両方でご確認ください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/denryoku-gas-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">電力・ガス 年収ランキング</Link>
            <Link href="/company/tepco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京電力HD転職ガイド</Link>
            <Link href="/company/chubu-electric/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">中部電力転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
