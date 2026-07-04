import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "セガサミーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "セガサミー（証券コード6460）への転職を有価証券報告書などの一次データで解説。平均年間給与は約884万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "セガサミーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "セガサミー（6460）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "セガサミーの平均年収はいくらですか？",
    "a": "有価証券報告書によると、提出会社（持株会社単体）の平均年間給与は約884万円（2026年3月期）です。ただし本社機能スタッフ408名の平均であり、セガやサミー等の事業会社の給与水準とは異なります。"
  },
  {
    "q": "平均勤続年数が約4.9年と短いのはなぜですか？",
    "a": "持株会社の設立経緯や事業会社からの出向・転籍の構造によるものです。グループとしての定着率の低さを示すものではありません。"
  },
  {
    "q": "セガサミーは中途採用を行っていますか？",
    "a": "はい。セガ（ゲーム開発）・サミー（遊技機）等の事業会社単位でキャリア採用を継続的に実施しています。"
  },
  {
    "q": "セガの転職難易度は高いですか？",
    "a": "龍が如く・ペルソナ等の人気IPを持つ大手開発会社のため、開発職は相応の競争があります。ポートフォリオと実務経験の質が問われます。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "セガ・HDは東京（品川区大崎周辺）が中心です。職種・事業会社により異なるため募集要項でご確認ください。"
  },
  {
    "q": "遊技機業界の経験がなくてもサミーに応募できますか？",
    "a": "機構設計・組み込みソフト・映像制作など、近接するメーカー系・エンタメ系の経験は評価される余地があります。募集要項の要件をご確認ください。"
  }
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

export default function CompanyCareer() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "セガサミー" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            セガサミーへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            セガサミーホールディングス（証券コード6460）は「ソニック」「龍が如く」「ペルソナ」等を持つセガと、遊技機のサミーを中核とする総合エンタテインメント企業です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：セガサミー転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は約884万円（2026年3月期・有価証券報告書）。持株会社単体408名の数値で、セガ・サミー等の事業会社とは別物。</li>
            <li>平均勤続約4.9年はHDの設立経緯・出向構造によるもので、ネガティブな指標ではない点に注意。</li>
            <li>セガのゲーム開発職（コンシューマ・モバイル）を中心に、事業会社単位でキャリア採用が活発。</li>
            <li>「龍が如く」「ペルソナ」等の看板IPの海外展開が加速しており、グローバル志向の人材ニーズもある。</li>
          </ul>
        </div>

        <h2>セガサミーの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "セガサミーホールディングス" },
                { label: "証券コード", value: "6460（東証プライム）" },
                { label: "本社", value: "東京都品川区" },
                { label: "事業内容", value: "ゲーム（セガ）・遊技機（サミー）等を展開する持株会社（「ソニック」「龍が如く」「ペルソナ」等のIPを保有）" },
                { label: "平均年間給与", value: "約884万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約43.1歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約4.9年（同・提出会社）" },
                { label: "従業員数", value: "408名（同・提出会社単体）／連結は要公式確認" },
              ]].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th className="text-left py-3 px-4 bg-warm-gray font-bold text-navy w-1/3">{row.label}</th>
                  <td className="py-3 px-4 text-text-secondary">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-8">
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。セガサミーホールディングスは持株会社であり、有報の数値は提出会社（単体・408名）＝本社機能スタッフの平均です。平均勤続約4.9年と短いのは、HD設立の経緯や事業会社からの出向・転籍構造によるもので、定着率の低さを意味するものではありません。ゲーム開発はセガ、遊技機はサミー等の事業会社が担います。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>セガサミーの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">採用はセガ・サミー等の事業会社単位で行われます。セガはコンシューマ・モバイル両面でゲーム開発職（プログラマー・プランナー・デザイナー）のキャリア採用を継続的に実施しており、大型IPの海外展開に伴う職種の広がりも見られます。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>応募窓口は持株会社ではなく事業会社（セガ・サミー等）。</li>
            <li>ゲーム開発職はポートフォリオ・実績の提示が実質必須。</li>
            <li>遊技機（サミー）側は機構設計・映像・ソフトなどメーカー系職種が中心。</li>
            <li>募集職種・要件は時期により変動するため公式採用サイトで最新確認を。</li>
          </ul>
        </div>

        <h2>セガサミーで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "ゲーム開発の実務経験", desc: "コンシューマタイトルの開発経験や、モバイル運営タイトルの経験など、応募職種に直結する実績が評価されます。" },
            { title: "IP・ブランドへの理解", desc: "ソニック・龍が如く・ペルソナ等の看板IPへの理解と敬意は、志望動機の説得力を高めます。" },
            { title: "グローバル展開への適応", desc: "海外売上の比重が高まっており、海外スタジオ・海外市場と関わる場面が増えています。" },
            { title: "事業会社を跨ぐ協働力", desc: "HD体制のもとグループ横断のプロジェクトもあり、調整力・協働力が求められます。" }
          ]].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>セガサミーの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書（開発職はポートフォリオ等）を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
            { step: 2, title: "一次面接", desc: "現場のマネージャー等との面接。実務経験・専門スキル・応募動機が中心です。" },
            { step: 3, title: "二次面接・最終面接", desc: "部門責任者・役員クラスとの面接。カルチャーフィットや中長期のキャリアビジョンが確認されます。" },
            { step: 4, title: "内定・条件提示", desc: "選考通過後に内定・条件提示。入社時期や条件面の確認を経て入社となります。" },
          ]].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="step-number text-base w-10 h-10">{s.step}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>セガサミーの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>約884万円（2026年3月期）は持株会社単体（408名）の平均で、セガ・サミー等の事業会社の水準を直接示すものではない。</li>
            <li>平均勤続4.9年はHD構造由来であり、待遇や定着率の判断材料にはならない。</li>
            <li>事業会社・職種ごとの想定年収は求人票・エージェント経由での確認が必須。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>セガサミー転職で活用したい転職エージェント</h2>
        <p className="text-sm text-text-muted mb-4">非公開求人も多い領域のため、複数のエージェントに登録して求人情報を広く集めるのが有効です。</p>
        <div className="space-y-4 mb-8">
          {[
            { name: "リクルートエージェント", href: "/review/recruit-agent/", desc: "求人数業界最大級。大手からニッチ企業まで幅広く、非公開求人の紹介を受けられる可能性があります。" },
            { name: "doda", href: "/review/doda/", desc: "エージェントと求人サイトの両方を利用可能。同業他社も含めて比較検討しやすいのが強みです。" },
            { name: "JACリクルートメント", href: "/review/jac/", desc: "ミドル・ハイクラスや専門職に強み。年収レンジの高いポジションの紹介に定評があります。" },
            { name: "ビズリーチ", href: "/review/bizreach/", desc: "スカウト型。市場価値の把握と、管理職・専門職の情報収集に向いています。" },
          ]].map((agent) => (
            <div key={agent.name} className="card-hover p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-navy">{agent.name}</h3>
                <Link href={agent.href} className="text-teal text-sm hover:underline">詳細を見る →</Link>
              </div>
              <p className="text-sm text-text-secondary">{agent.desc}</p>
            </div>
          ))}
        </div>

        <h2>セガサミー転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">セガサミー転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">任天堂転職ガイド</Link>
            <Link href="/company/capcom/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カプコン転職ガイド</Link>
            <Link href="/company/koei-tecmo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コーエーテクモ転職ガイド</Link>
            <Link href="/company/konami/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コナミ転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
