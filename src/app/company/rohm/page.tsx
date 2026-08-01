import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ロームへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "ローム（証券コード6963）への転職を有価証券報告書などの一次データで解説。平均年間給与は約803.5万円（2026年3月期・有報／提出会社）。京都本社の半導体メーカーの中途採用（キャリア採用）の状況、求められる人材、選考の考え方をまとめました。",
  openGraph: {
    title: "ロームへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "ローム（6963）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "ロームの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は約803.5万円（2026年3月期・提出会社単体、賞与及び基準外賃金を含む）です。対前事業年度増減率は△0.8%でした。職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "ロームは中途採用を行っていますか？",
    "a": "はい。公式採用サイトに「キャリア採用について」のページがあり、「随時求人を行っています」と記載されています（2026年8月1日確認）。募集中の職種は採用サイトからリンクされた求人検索システムで職種一覧・職種カテゴリー・都道府県別に確認できます。"
  },
  {
    "q": "ロームの転職難易度は高いですか？",
    "a": "SiCパワー半導体などに強みを持つ大手半導体メーカーで、経験者採用が中心です。半導体・電子部品や近接する製造業での実務経験を持つ方が評価されやすい傾向とみられます。"
  },
  {
    "q": "ロームの本社はどこですか？",
    "a": "京都市右京区西院溝崎町21です。京都本社の半導体メーカーで、勤務地は応募ポジションにより異なります。"
  },
  {
    "q": "ロームの平均勤続年数はどのくらいですか？",
    "a": "有報の平均勤続年数は14.0年（2026年3月期・提出会社）、平均年齢は42.4歳です。単体従業員数は4,199人、連結では21,756人の規模です。"
  },
  {
    "q": "ロームの年収は近年どう推移していますか？",
    "a": "IRBANK掲載の有報ベース（万円丸め）で、2022年3月期789万円、2023年3月期856万円、2024年3月期879万円、2025年3月期810万円、2026年3月期803万円と推移しています。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ロームへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/rohm/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "ローム" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            ロームへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            ローム（証券コード6963）は京都本社の半導体メーカーです。LSI・半導体素子・モジュール等の開発・製造・販売を手がけ、SiCパワー半導体などに強みを持ちます。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：ローム転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は約803.5万円（2026年3月期・有価証券報告書・提出会社単体。賞与及び基準外賃金を含む）。対前事業年度増減率は△0.8%。</li>
            <li>単体4,199人・連結21,756人の大手半導体メーカー。平均年齢42.4歳・平均勤続14.0年。</li>
            <li>公式採用サイトにキャリア採用の専用ページがあり、「随時求人を行っています」と明記（2026年8月1日確認）。</li>
            <li>京都市右京区の本社をはじめ、勤務地・職種は求人検索システムで都道府県別に確認できる。</li>
            <li>SiCパワー半導体など成長領域を持つ一方、直近2期の平均年収は微減傾向（810万円→803万円）。</li>
          </ul>
        </div>

        <h2>ロームの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "ローム" },
                { label: "証券コード", value: "6963（東証プライム）" },
                { label: "本社", value: "京都市右京区西院溝崎町21" },
                { label: "事業内容", value: "LSI・半導体素子・モジュール等の開発・製造・販売（SiCパワー半導体等に強み）" },
                { label: "決算期", value: "3月（2026年3月期＝第68期）" },
                { label: "平均年間給与", value: "約803.5万円（2026年3月期・有価証券報告書／提出会社。賞与及び基準外賃金を含む）" },
                { label: "平均年齢", value: "42.4歳（2026年3月31日現在・提出会社）" },
                { label: "平均勤続年数", value: "14.0年（同・提出会社）" },
                { label: "従業員数", value: "単体4,199人／連結21,756人" },
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
          ※数値は有価証券報告書（第68期・2026年6月19日提出）の提出会社データに基づく全社平均です。直近5期の推移（万円丸め）は789万円→856万円→879万円→810万円→803万円（2022年3月期〜2026年3月期）。職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>ロームの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">2026年8月1日時点で、ロームの<a href="https://micro.rohm.com/jp/employment/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>には新卒採用と並んで<a href="https://micro.rohm.com/jp/employment/recruit_carrier.html" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">「キャリア採用について」</a>のページがあり、キャリア採用（中途採用）を実施しています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キャリア採用ページに「随時求人を行っていますので、まずは募集中の職種についてお調べください」と明記。</li>
            <li>募集中の職種は、採用サイトからリンクされた求人検索システムで「職種一覧」「職種カテゴリー一覧」「都道府県別」などから確認できる（個別の職種名の掲載は時期により変動）。</li>
            <li>採用区分は新卒採用・キャリア採用・留学生採用・グループ会社採用に分かれており、グループ会社の求人は別枠で案内されている。</li>
            <li>※2026年8月1日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>ロームで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "半導体・電子部品の実務経験", desc: "回路設計・プロセス・デバイス開発・品質保証など、半導体または近接する製造業での経験が最も評価されやすい領域です。" },
            { title: "パワー半導体など成長領域への関心", desc: "SiCパワー半導体をはじめとする注力領域があり、電動化・省エネの潮流に関わりたい技術者との親和性が高いとみられます。" },
            { title: "品質・信頼性への誠実な姿勢", desc: "車載・産業機器にも使われる部品を扱うため、品質・信頼性に対する着実な仕事ぶりが全職種で重視されます。" },
            { title: "腰を据えて技術を磨く志向", desc: "平均勤続14.0年という数字が示すように、長期で専門性を積み上げる働き方との相性が問われます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>ロームの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用サイトの「採用フロー」ページに掲載されているのは新卒採用向けのフローで、キャリア採用の完全な選考フローの公式記載は確認できませんでした（2026年8月1日時点）。以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "求人検索・応募", desc: "公式採用サイトからリンクされた求人検索システムで募集中の職種を確認し、応募します。" },
            { step: 2, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 3, title: "面接（複数回）", desc: "現場マネージャーや部門責任者との面接。技術職は専門領域の深掘りが中心になるとみられます。" },
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

        <h2>ロームの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約803.5万円（2026年3月期）は単体全社員の平均で、賞与及び基準外賃金を含む値。職種（開発・製造・営業・スタッフ）で水準は異なる。</li>
            <li>直近5期は789万円→856万円→879万円→810万円→803万円と、2024年3月期をピークに微減で推移。</li>
            <li>平均勤続14.0年・平均年齢42.4歳の長期雇用型。</li>
            <li>中途入社時の提示額はポジション・経験によるため、エージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>ローム転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">半導体業界は非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
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

        <h2>ローム転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">ローム転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/murata/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">村田製作所転職ガイド</Link>
            <Link href="/company/keyence/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">キーエンス転職ガイド</Link>
            <Link href="/company/tokyo-electron/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京エレクトロン転職ガイド</Link>
            <Link href="/company/shin-etsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">信越化学工業転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
