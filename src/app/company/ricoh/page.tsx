import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リコーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "リコー（証券コード7752）への転職を有価証券報告書などの一次データで解説。平均年間給与は約906万円（2026年3月期・有報／提出会社）。公式キャリア採用の10ステップ選考、キャリア登録制度、単体従業員数の変化まで一次情報でまとめました。",
  alternates: { canonical: "/company/ricoh/" },
  openGraph: {
    title: "リコーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "リコー（7752）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    q: "リコーの平均年収はいくらですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均年間給与は約906万円（2026年3月期・提出会社単体）です。前期の860万円から上昇しています。従業員4,596名（提出会社）の全従業員平均であり、職種・年代・役職により実際の年収は異なります。",
  },
  {
    q: "リコーは中途採用を行っていますか？",
    a: "はい。公式サイトにキャリア採用（中途採用）の常設ページがあり、オンライン応募から入社まで10ステップの選考プロセスが公開されています（2026年8月16日確認）。今すぐの応募でなくても経歴を登録しておくと、マッチするポジションが出た際に会社側から声がかかる「キャリア登録」制度もあります。",
  },
  {
    q: "リコーの選考プロセスはどうなっていますか？",
    a: "公式のキャリア採用ページでは、情報収集→募集要項確認→オンライン応募→書類選考→適性検査→一次面接→二次面接→リファレンスチェック等→内定→入社という流れが案内されています（2026年8月16日確認）。リファレンスチェックが明示されている点は事前に知っておくとよいでしょう。",
  },
  {
    q: "リコーの単体従業員数が減っているのはなぜですか？",
    a: "有価証券報告書ベースでは提出会社単体の従業員数は7,282名（2024年3月期）→5,041名→4,596名（2026年3月期）と推移しています（IR BANK掲載値・2026年8月16日確認)。有報の記載範囲では要因を特定できないため当サイトでは理由を断定しませんが、単体の母集団が変わると平均年間給与の比較にも影響するため、数値を読む際の前提として記載しています。連結従業員は75,635名（2026年3月31日時点・公式会社概要）です。",
  },
  {
    q: "リコーの平均勤続年数・平均年齢はどのくらいですか？",
    a: "有価証券報告書（IR BANK掲載値・2026年8月16日確認）によると、平均勤続年数は20年、平均年齢は45.4歳（2026年3月期・提出会社）です。",
  },
  {
    q: "リコーの本社はどこですか？",
    a: "公式サイトの会社概要によると、本社（本店）は東京都大田区中馬込1-3-6です。設立は1936年2月6日。応募ポジションにより勤務地は異なります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "リコーへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-16",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/ricoh/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "リコー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            リコーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            リコー（証券コード7752）は、オフィス向けデジタルサービスを中核に、デジタルプロダクツ・商用印刷・産業ソリューションなどを展開する大手メーカーです。
            公式サイトにキャリア採用の常設ページがあり、10ステップの選考プロセスとキャリア登録制度が公開されています。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：リコー転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約906万円（2026年3月期・有価証券報告書。IR BANK掲載値・2026年8月16日確認）。提出会社単体4,596名の全従業員平均で、前期860万円から上昇。</li>
            <li>公式のキャリア採用ページに10ステップの選考プロセス（適性検査・リファレンスチェック含む）が公開されている（2026年8月16日確認）。</li>
            <li>すぐに応募しない人向けの「キャリア登録」制度があり、マッチするポジションが出た際に声がかかる仕組み。</li>
            <li>単体従業員数は直近3年で7,282名→4,596名と大きく変化しており、平均給与の推移はこの母集団変化とセットで読む必要がある。</li>
            <li>平均年齢45.4歳・平均勤続20年。フレックス・リモート勤務や年間休日125日（2024年）などの制度も公式に公開。</li>
          </ul>
        </div>

        <h2>リコーの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社リコー" },
                { label: "証券コード", value: "7752" },
                { label: "本社", value: "東京都大田区中馬込1-3-6" },
                { label: "設立", value: "1936年2月6日" },
                { label: "事業内容", value: "デジタルサービス、デジタルプロダクツ、グラフィックコミュニケーションズ、インダストリアルソリューションズ等" },
                { label: "平均年間給与", value: "約906万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月16日確認）" },
                { label: "直近3年の推移", value: "860万円（2024年3月期）→860万円（2025年3月期）→906万円（2026年3月期）" },
                { label: "平均年齢", value: "45.4歳（同・提出会社）" },
                { label: "平均勤続年数", value: "20年（同・提出会社）" },
                { label: "従業員数", value: "4,596名（提出会社単体。2024年3月期の7,282名から減少）。連結75,635名（2026年3月31日時点・公式会社概要）" },
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
          ※数値は有価証券報告書（IR BANK掲載値・2026年8月16日確認）に基づく提出会社単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>リコーの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月16日時点で、<a href="https://jp.ricoh.com/jobs/recruit/careers" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式サイトのキャリア採用ページ</a>に中途採用の常設窓口があります。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>選考は「情報収集→募集要項確認→オンライン応募→書類選考→適性検査→一次面接→二次面接→リファレンスチェック等→内定→入社」の10ステップが公式に公開されている。</li>
            <li>給与は「スキル・経験・面接評価をもとに当社基準により個別に決定」。賞与は年2回（7月・12月）、昇給は年1回。</li>
            <li>所定労働時間7.5時間・フレックスタイム・リモートワーク可・年間休日125日（2024年）・5日連続休暇の取得推奨など、働き方の制度が具体的に公開されている。</li>
            <li>今すぐ転職しない人向けの「キャリア登録」制度があり、経歴を登録するとマッチするポジションが出た際に会社側からアプローチされる仕組み。</li>
            <li>※グループのリコージャパン（販売会社）は別法人で採用窓口も別。応募先の会社がどちらかは募集要項で確認を。</li>
          </ul>
        </div>

        <h2>リコーで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "デジタルサービスへの事業転換を担う力", desc: "オフィス機器からデジタルサービス中心への転換を進めており、IT・ソフトウェア・クラウド関連の経験が事業方向と合致します。" },
            { title: "職種に対応した実務経験", desc: "職種別採用のため、募集要項の要件と自分の経験の対応を職務経歴書で具体的に示すことが書類選考の前提になります。" },
            { title: "選考プロセスへの準備", desc: "適性検査とリファレンスチェックが選考に組み込まれています。推薦者への事前の相談など、後半ステップの準備も計画的に。" },
            { title: "グローバル事業への関心", desc: "連結7.5万名・海外比率の高い事業構成のため、海外拠点・グローバル顧客との協働に前向きであることが活きます。" },
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>リコーの選考フロー（公式公開の10ステップ）</h2>
        <p className="text-sm text-text-muted mb-4">公式キャリア採用ページで公開されている流れです（2026年8月16日確認）。職種・時期により変わる場合があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "応募〜書類選考", desc: "情報収集・募集要項の確認の上でオンライン応募。履歴書・職務経歴書による書類選考が行われます。" },
            { step: 2, title: "適性検査", desc: "書類通過後に適性検査を受検します。" },
            { step: 3, title: "一次面接・二次面接", desc: "現場・部門責任者との面接。実務経験・専門性・応募動機が中心です。" },
            { step: 4, title: "リファレンスチェック→内定", desc: "選考後半にリファレンスチェック等が行われ、通過後に内定・条件提示、入社となります。" },
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

        <h2>リコーの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約906万円（2026年3月期）は提出会社単体・全従業員4,596名の平均であり、職種・年代・役職により実際の水準は異なります。</li>
            <li>単体従業員数が直近3年で7,282名→4,596名と大きく変化しているため、平均給与の年度間比較は母集団の変化を織り込んで読む必要があります（変化の要因は有報の記載範囲では特定できないため当サイトでは断定しません）。</li>
            <li>公式の募集要項では給与は「スキル・経験・面接評価をもとに個別決定」と明記されており、中途入社時の提示額はポジション次第です。</li>
            <li>販売会社のリコージャパン等グループ会社は労働条件が異なるため、応募先法人の募集要項での確認が重要です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>リコー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式窓口への直接応募・キャリア登録に加えて、エージェント経由で求人情報を広く集めると比較検討がしやすくなります。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手メーカー・ITサービスの求人も幅広く、非公開求人の紹介を受けられる可能性があります。" },
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

        <h2>リコー転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">リコー転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。公式キャリア採用ページ(キャリア登録含む)とエージェントの両方で、ポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/konica-minolta/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コニカミノルタ転職ガイド</Link>
            <Link href="/company/brother/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ブラザー工業転職ガイド</Link>
            <Link href="/company/casio/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カシオ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
