import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ディスコへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ディスコ（証券コード6146）への転職を有価証券報告書などの一次データで解説。平均年間給与は1,879万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  alternates: { canonical: "/company/disco/" },
  openGraph: {
    title: "ディスコへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ディスコ（6146）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ディスコの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は18,795,641円（約1,879万円・2026年3月期・提出会社単体）です。対前事業年度増減率は+12.4%でした。この数値は単体3,687名の全従業員平均で、賞与及び基準外賃金を含みます。職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "ディスコの年収はなぜ高いのですか？",
    "a": "有報で確認できる範囲では、平均年間給与は賞与及び基準外賃金を含む数値であり、同社は独自の社内管理会計「個人Will会計」を運用し、有報に「個人Will会計上の収支は自身の賞与に反映されます」と記載されています。つまり賞与が個人の成果に連動する仕組みで、業績や個人の成果により支給水準は変動し得ます。直近5年の平均年収はIRBANK集計で1,140万円（2022年3月期）から1,879万円（2026年3月期）へ推移しています。"
  },
  {
    "q": "ディスコは中途採用を行っていますか？",
    "a": "はい。2026年8月1日時点で、公式採用サイトにキャリア採用の求人情報ページとキャリア採用専用エントリーページがあり、技術系・営業系・IT系・管理系の幅広い職種が掲載されています。募集状況は時期により変動するため、最新は公式採用サイトでご確認ください。"
  },
  {
    "q": "ディスコの転職難易度は高いですか？",
    "a": "報酬水準の高さから注目度が高く、精密加工装置や近接領域での専門経験を持つ経験者採用が中心です。募集職種と自身の経験の適合性が重要になります。"
  },
  {
    "q": "ディスコの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有報によると平均勤続年数は10.6年、平均年齢は37.2歳（2026年3月期・提出会社）です。"
  },
  {
    "q": "ディスコの本社はどこですか？",
    "a": "本社は東京都大田区大森北二丁目13番11号です。応募ポジションにより勤務地は異なります。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ディスコへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/disco/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ディスコ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ディスコへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ディスコ（証券コード6146）は、半導体製造装置（ダイサ・グラインダ等の精密加工装置）と精密加工ツールの製造・販売を手がけるメーカーです。有価証券報告書ベースの平均年間給与は上場メーカーの中でも際立って高い水準にあります。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ディスコ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は18,795,641円・約1,879万円（2026年3月期・有価証券報告書）。提出会社単体3,687名の全従業員平均で、対前事業年度増減率は+12.4%。</li>
            <li>この平均は賞与及び基準外賃金を含む数値。有報には独自の社内管理会計「個人Will会計」について「個人Will会計上の収支は自身の賞与に反映されます」と記載があり、賞与が個人の成果に連動する仕組み。</li>
            <li>公式採用サイトでキャリア採用を実施中（2026年8月1日確認）。技術系・営業系・IT系・管理系の幅広い職種を掲載し、従業員の年収実績を「年収分布図」として開示。</li>
            <li>平均年齢37.2歳・平均勤続10.6年。半導体製造装置（切断・研削・研磨）の単一セグメントに集中する事業会社。</li>
          </ul>
        </div>

        <h2>ディスコの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社ディスコ" },
                { label: "証券コード", value: "6146" },
                { label: "本社", value: "東京都大田区大森北二丁目13番11号" },
                { label: "事業内容", value: "半導体製造装置（ダイサ・グラインダ等の精密加工装置）と精密加工ツールの製造・販売（単一セグメントの事業会社）" },
                { label: "平均年間給与", value: "18,795,641円（2026年3月期・有価証券報告書／提出会社。賞与及び基準外賃金を含む）" },
                { label: "決算期", value: "3月末決算（最新有報は第87期・2026年3月期、2026年6月16日提出）" },
                { label: "平均年齢", value: "37.2歳（同・提出会社）" },
                { label: "平均勤続年数", value: "10.6年（同・提出会社）" },
                { label: "従業員数", value: "3,687名（提出会社単体・臨時従業員 年平均1,814名を外数）" },
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
          ※数値は有価証券報告書（提出会社）に基づく単体・全従業員の平均です。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ディスコの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">ディスコは<a href="https://www.disco.co.jp/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>でキャリア採用（中途採用）を実施しており、<a href="https://www.disco.co.jp/recruit/information/kyujin/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">求人情報ページ</a>から募集中の職種を確認できます。キャリア採用専用のエントリーページも用意されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>技術系（公式表記）：メカエンジニア／電気設計エンジニア／ソフト開発エンジニア（組み込み系）／プロセス開発エンジニア／化学・材料開発エンジニア／光学設計エンジニア など。</li>
            <li>営業・サポート系：国内営業／海外営業／カスタマーエンジニア。IT系：Web・iOSアプリケーション開発／インフラエンジニア／システムエンジニア。</li>
            <li>管理系：経理・財務・管理会計／法務・知財／広報・IR／品質保証・品質管理／建築・施設管理 など。応募区分は正社員のほか準社員（契約社員）・パートの掲載もある。</li>
            <li>公式採用サイトでは「入社に際して重要な検討材料である収入に関して、当社従業員の年収実績を開示します」として年収分布図を公開している。</li>
            <li>※2026年8月1日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ディスコで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "精密加工・装置分野の専門性", desc: "ダイサ・グラインダ等の精密加工装置を扱うため、機械・電気・ソフト・プロセスなど装置関連の専門経験が中核職種で評価されます。" },
            { title: "自律的に考え動く姿勢", desc: "有報にも記載のある独自の社内管理会計「個人Will会計」を運用する企業のため、自分の意思で仕事を選び成果を出す働き方との相性が問われます。" },
            { title: "グローバル対応力", desc: "半導体産業は顧客・サプライチェーンともに世界規模のため、海外顧客や海外拠点と協働する力が活きます。" },
            { title: "品質・精度へのこだわり", desc: "半導体の切断・研削・研磨というミクロン単位の加工を支える事業のため、品質と精度に対する誠実な姿勢が重視されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ディスコの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。詳細は公式採用サイトでご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書（開発職はポートフォリオ等）を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 2, title: "一次面接", desc: "現場のマネージャー等との面接。実務経験・専門スキル・応募動機が中心です。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスとの面接。カルチャーフィットや中長期のキャリアビジョンが確認されます。" },
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

        <h2>ディスコの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>18,795,641円（2026年3月期）は提出会社単体・全従業員3,687名の平均。職種・役職・個人により実際の水準は異なる。</li>
            <li>有報注記のとおり賞与及び基準外賃金を含む数値。賞与には「個人Will会計上の収支」が反映されると有報に記載があり、業績や個人の成果により変動し得る。</li>
            <li>IRBANK集計の推移では2022年3月期1,140万円→2023年3月期1,329万円→2024年3月期1,507万円→2025年3月期1,671万円→2026年3月期1,879万円。</li>
            <li>中途入社時の提示額はポジション・経験により異なるため、公式の年収分布図やエージェント経由での確認が有効。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ディスコ転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
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

        <h2>ディスコ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ディスコ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体年収ランキング</Link>
            <Link href="/company/tokyo-electron/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京エレクトロン転職ガイド</Link>
            <Link href="/company/advantest/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">アドバンテスト転職ガイド</Link>
            <Link href="/company/lasertec/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">レーザーテック転職ガイド</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
