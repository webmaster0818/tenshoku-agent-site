import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヒロセ電機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ヒロセ電機（証券コード6806）への転職を有価証券報告書などの一次データで解説。平均年間給与は847万円（2026年3月期・有報／提出会社）。中途採用（キャリア採用）の状況、求められる人材、選考の考え方をまとめました。",
  alternates: { canonical: "/company/hirose/" },
  openGraph: {
    title: "ヒロセ電機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ヒロセ電機（6806）の平均年収・中途採用・選考の考え方を有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ヒロセ電機の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は847万円（2026年3月期・提出会社単体）です（IR BANK掲載値・2026年8月12日確認）。単体1,039名の全従業員平均であり、職種・年代・役職により実際の年収は異なります。"
  },
  {
    "q": "ヒロセ電機は中途採用を行っていますか？",
    "a": "行っています。2026年8月12日時点で、ヒロセ電機グループの採用サイトには新卒採用と並んで「キャリア採用エントリー」の窓口が常設されており、確認時点でコネクタ設計開発・生産技術・製造技術・ITエンジニア・管理スタッフ・国内営業など12件の求人が掲載されていました。最新の募集状況は公式採用サイトでご確認ください。"
  },
  {
    "q": "ヒロセ電機の中途採用ではどんな職種が募集されていますか？",
    "a": "2026年8月12日にキャリア採用エントリーページで確認できた求人は、コネクタの設計開発エンジニア（産機・車載・民生・通信サーバー向け高速伝送、高周波同軸など）、生産技術エンジニア、金型設計・プレス・成形技術者、社内システム担当のITエンジニア、海外工場管理部門マネージャー候補、国内営業などで、技術系が中心でした。募集内容は変動するため最新は公式採用サイトでご確認ください。"
  },
  {
    "q": "ヒロセ電機の平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有価証券報告書によると平均勤続年数は13.1年、平均年齢は40.7歳（2026年3月期・提出会社）です（IR BANK掲載値・2026年8月12日確認）。"
  },
  {
    "q": "ヒロセ電機の従業員数はどのくらいですか？",
    "a": "有価証券報告書によると提出会社単体1,039名（2026年3月期・IR BANK掲載値・2026年8月12日確認）です。公式サイトの会社概要では連結5,110人（2026年3月末現在）と記載されています。"
  },
  {
    "q": "ヒロセ電機の本社はどこですか？",
    "a": "本社は神奈川県横浜市都筑区中川中央二丁目6番3号です（公式サイト会社概要・2026年8月12日確認）。菊名事業所（横浜市港北区）、東北アドバンスト・テクノロジーセンター（盛岡市）、五反田事務所（東京都品川区）などの拠点があり、応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ヒロセ電機への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/hirose/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ヒロセ電機" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ヒロセ電機への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ヒロセ電機（証券コード6806）は、公式サイトの会社概要によると、コンピュータ・通信機器・民生機器・制御機器・自動車等向けの各種高性能コネクタの製造販売を営業品目とする横浜本社のコネクタメーカーです（1937年創業）。
            本記事では、有価証券報告書（IR BANK掲載値・2026年8月12日確認）などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ヒロセ電機転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は847万円（2026年3月期・有価証券報告書、IR BANK掲載値・2026年8月12日確認）。提出会社単体1,039名の全従業員平均。</li>
            <li>平均年齢40.7歳・平均勤続13.1年（同・提出会社）。</li>
            <li>グループ採用サイトに「キャリア採用エントリー」の窓口が常設されており、2026年8月12日確認時点で12件の求人が掲載。コネクタ設計開発・生産技術など技術系が中心。</li>
            <li>本社は横浜市都筑区。技術系の勤務地は横浜が中心で、営業拠点は東京・大阪・刈谷・宇都宮・広島など。</li>
          </ul>
        </div>

        <h2>ヒロセ電機の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ヒロセ電機株式会社" },
                { label: "証券コード", value: "6806" },
                { label: "本社", value: "神奈川県横浜市都筑区中川中央二丁目6番3号" },
                { label: "事業内容", value: "コンピュータ、周辺機器、端末機器、移動・有線・無線通信機器、事務機器、民生機器、制御機器、自動車等の各種高性能コネクタ製造販売（公式サイト会社概要より）" },
                { label: "平均年間給与", value: "847万円（2026年3月期・有価証券報告書／提出会社。IR BANK掲載値・2026年8月12日確認）" },
                { label: "平均年齢", value: "40.7歳（同・提出会社）" },
                { label: "平均勤続年数", value: "13.1年（同・提出会社）" },
                { label: "従業員数", value: "1,039名（提出会社単体・2026年3月期有報）／連結5,110人（2026年3月末現在・公式サイト会社概要）" },
                { label: "決算期", value: "3月末決算" },
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
          ※数値は有価証券報告書（提出会社）に基づく単体・全従業員の平均です（IR BANK掲載値・2026年8月12日確認）。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ヒロセ電機の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月12日時点で、<a href="https://www.hirose-recruitment.jp/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">ヒロセ電機グループ採用サイト</a>には新卒採用と並んで「キャリア採用エントリー」の窓口が常設されており、採用管理システム上でグループの求人一覧が公開されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>確認時点のキャリア採用求人は12件。コネクタ設計開発（産機・車載・民生向け、高速伝送、高周波同軸、光関連の新分野）、生産技術、金型設計・プレス・成形、ITエンジニア（社内システム）、海外工場管理部門マネージャー候補、国内営業などが掲載されていた。</li>
            <li>技術系の求人が中心で、コネクタという製品領域に紐づく専門職種の募集が多い。</li>
            <li>グループの東北ヒロセ電機（設備・金型設計製作、部品加工等）の求人も同じ窓口に掲載されている。</li>
            <li>採用窓口はヒロセ電機グループ採用担当（人事総務部）。</li>
            <li>※2026年8月12日に公式採用サイトおよびキャリア採用エントリーページで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ヒロセ電機で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "コネクタ・精密部品の専門性", desc: "産機・車載・民生・通信サーバー向けコネクタの設計開発求人が中心のため、精密部品や電気・機械設計の実務経験が評価されやすい構成です。" },
            { title: "生産技術・金型の実装力", desc: "量産設備設計・工程設計、精密プレス金型・成形金型の設計組立など、モノづくりの現場を支える職種の募集が確認できます。" },
            { title: "高速伝送・高周波などの先端領域", desc: "通信サーバー向け高速伝送コネクタや高周波（同軸）コネクタ、光アクティブコネクタなど先端領域の求人が掲載されています。" },
            { title: "グローバルに動ける素養", desc: "海外工場（マレーシア・インドネシア・韓国・中国）の管理部門マネージャー候補の募集もあり、海外拠点と連携できる人材が求められています。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ヒロセ電機の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※キャリア採用は採用サイトのエントリー窓口から求人ごとに応募する形式です。応募後の詳細な選考ステップは公式に一律の記載が確認できなかったため、以下は中途採用における一般的な流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "キャリア採用エントリー", desc: "採用サイトのキャリア採用エントリーから、希望する求人に応募します。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書をもとに、応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場部門や人事との面接で、実務経験・専門スキル・応募動機が確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。入社時期や条件面の確認を経て入社となります。" },
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

        <h2>ヒロセ電機の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>847万円（2026年3月期）は提出会社単体・全従業員1,039名の平均であり、職種・年代・役職で実際の水準は異なります。</li>
            <li>出典は有価証券報告書（IR BANK掲載値・2026年8月12日確認）。</li>
            <li>平均年齢40.7歳・平均勤続13.1年という構成の中での平均値である点も踏まえて読む必要があります。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、エージェント経由での確認が有効です。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ヒロセ電機転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">公式のキャリア採用窓口に加えて、非公開求人も含めて情報を広く集めるため、複数のエージェントに登録するのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
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

        <h2>ヒロセ電機転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ヒロセ電機転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/taiyo-yuden/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">太陽誘電転職ガイド</Link>
            <Link href="/company/murata/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">村田製作所転職ガイド</Link>
            <Link href="/company/rohm/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ローム転職ガイド</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
