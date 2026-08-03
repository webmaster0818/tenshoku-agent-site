import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SCREENホールディングスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "SCREENホールディングス（証券コード7735）への転職を有価証券報告書などの一次データで解説。平均年間給与は10,802,000円（2026年3月期・有報／提出会社＝持株会社単体653名）。持株会社と事業会社（SCREENセミコンダクターソリューションズ等）の違い、中途採用の状況、選考の考え方をまとめました。",
  alternates: { canonical: "/company/screen-hd/" },
  openGraph: {
    title: "SCREENホールディングスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "SCREENホールディングス（7735）の平均年収・中途採用・選考を有価証券報告書ベースで解説。持株会社単体の数値である点も注記。",
  },
};

const faqData = [
  {
    "q": "SCREENホールディングスの平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は10,802,000円（約1,080万円・2026年3月期・提出会社単体）で、前期比+1.7%です。ただしSCREENホールディングスは純粋持株会社で、この数値は単体653名（本社機能中心の人員）の平均です。SCREENセミコンダクターソリューションズなどの事業会社の給与水準を示す値ではない点にご注意ください。"
  },
  {
    "q": "持株会社単体の平均年収はなぜ参考程度なのですか？",
    "a": "有価証券報告書の平均年間給与は「提出会社（単体）」の数値です。SCREENホールディングスの単体653名は経営企画・管理部門など本社機能中心の構成で、グループ全体（事業会社の技術職・製造職を含む）の平均より高めに出やすい典型パターンです。転職先となる事業会社の想定年収は、求人票やエージェント経由で個別に確認するのが確実です。"
  },
  {
    "q": "SCREENホールディングスとSCREENセミコンダクターソリューションズの違いは何ですか？",
    "a": "SCREENホールディングスはグループを統括する純粋持株会社です。半導体洗浄装置などの事業は、SCREENセミコンダクターソリューションズをはじめ、SCREENグラフィックソリューションズ・SCREENファインテックソリューションズ・SCREEN PEソリューションズ・SCREENアドバンストシステムソリューションズといった事業会社が担っています。中途採用も事業会社単位で行われるのが基本です。"
  },
  {
    "q": "SCREENグループは中途採用を行っていますか？",
    "a": "はい。2026年8月3日時点で、公式採用サイトにキャリア採用情報のページがあり、外部の採用管理システムから募集職種一覧の確認・応募ができる仕組みになっています。ページには異業種からの応募も多い旨の記載があります。募集状況は時期により変動するため、最新は公式採用サイトでご確認ください。"
  },
  {
    "q": "SCREENホールディングスの平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有報によると平均勤続年数は13.9年、平均年齢は42.0歳（2026年3月期・提出会社＝持株会社単体）です。"
  },
  {
    "q": "SCREENホールディングスの本社はどこですか？",
    "a": "本社は京都市です。事業会社・応募ポジションにより勤務地は異なるため、募集要項でご確認ください。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SCREENホールディングスへの転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-03",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/screen-hd/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "SCREENホールディングス" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            SCREENホールディングスへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            SCREENホールディングス（証券コード7735）は、半導体洗浄装置などを手がけるSCREENグループの純粋持株会社です。実際の事業はSCREENセミコンダクターソリューションズをはじめとする事業会社が担っており、有価証券報告書の平均年間給与も「持株会社単体（本社機能中心の653名）」の数値である点が読み解きのポイントになります。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：SCREENホールディングス転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は10,802,000円・約1,080万円（2026年3月期・有価証券報告書）。前期比+1.7%で、賞与・基準外賃金を含む数値。</li>
            <li>ただしこれは純粋持株会社の単体653名（本社機能中心）の平均。SCREENセミコンダクターソリューションズ等の事業会社の給与水準を示す値ではない。</li>
            <li>中途採用（キャリア採用）は公式採用サイトにグループのキャリア採用情報ページがあり、事業会社単位の募集が基本（2026年8月3日確認）。異業種からの応募も多い旨の記載あり。</li>
            <li>平均年齢42.0歳・平均勤続13.9年（持株会社単体）。IRBANK集計の平均年収推移は2022年3月期822万円→2026年3月期1,080万円と上昇傾向。</li>
          </ul>
        </div>

        <h2>SCREENホールディングスの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社SCREENホールディングス（純粋持株会社）" },
                { label: "証券コード", value: "7735" },
                { label: "本社", value: "京都市" },
                { label: "事業内容", value: "SCREENグループの持株会社。半導体洗浄装置等の事業はSCREENセミコンダクターソリューションズなどの事業会社が担う" },
                { label: "平均年間給与", value: "10,802,000円（2026年3月期・有価証券報告書／提出会社＝持株会社単体。賞与・基準外賃金を含む。前期比+1.7%）" },
                { label: "決算期", value: "3月末決算（最新有報は第85期・2026年3月期、2026年6月25日提出）" },
                { label: "平均年齢", value: "42.0歳（同・提出会社）" },
                { label: "平均勤続年数", value: "13.9年（同・提出会社）" },
                { label: "従業員数", value: "653名（提出会社単体・本社機能中心。社外への出向者を除き、社外からの出向者を含む）" },
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
          ※数値は有価証券報告書（提出会社）に基づく持株会社単体の平均です。事業会社を含むグループ全体の給与水準を示すものではなく、職種・年代・役職により実際の年収は異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>持株会社単体の「約1,080万円」をどう読むか</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>SCREENホールディングスは純粋持株会社のため、有報の平均年間給与は単体653名＝経営企画・管理部門など本社機能中心の人員の平均です。</li>
            <li>この構成では、事業会社の技術職・製造職を含むグループ実態よりも平均値が高めに出やすい傾向があります。</li>
            <li>中途採用で入社するのは基本的にSCREENセミコンダクターソリューションズ等の事業会社であり、想定年収はポジションごとの求人票で確認する必要があります。</li>
            <li>参考として、IRBANK集計の持株会社単体の平均年収推移は2022年3月期822万円→2023年3月期923万円→2024年3月期1,024万円→2025年3月期1,062万円→2026年3月期1,080万円です。</li>
          </ul>
        </div>

        <h2>SCREENグループの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">SCREENグループは<a href="https://www.screen.co.jp/recruit_info" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>に<a href="https://www.screen.co.jp/recruit_info/recruit_career" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">キャリア採用情報ページ</a>を設けており、外部の採用管理システムから募集職種一覧の確認・応募ができる仕組みになっています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>キャリア採用ページには、SCREENセミコンダクターソリューションズ／SCREENグラフィックソリューションズ／SCREENファインテックソリューションズ／SCREEN PEソリューションズ／SCREENアドバンストシステムソリューションズといった事業会社が紹介されており、採用は事業会社単位が基本。</li>
            <li>具体的な募集職種は「応募・募集職種一覧」（外部の採用管理システム）で確認する流れ。</li>
            <li>キャリア採用ページには異業種からの応募も多い旨の記載があり、前職の経験・スキルを活かせる職場として紹介されている。</li>
            <li>※2026年8月3日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>SCREENグループで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "装置・製造業分野の専門性", desc: "半導体洗浄装置などの装置事業が中核のため、機械・電気・ソフト・プロセスなど装置関連の実務経験が中核職種で評価されるとみられます。" },
            { title: "異業種経験の応用力", desc: "公式キャリア採用ページに異業種からの応募も多い旨の記載があり、前職で培った専門性をどう活かすかを示せることが重要です。" },
            { title: "グローバル対応力", desc: "半導体産業は顧客・サプライチェーンともに世界規模のため、海外顧客や海外拠点と協働する力が活きます。" },
            { title: "グループ横断の連携力", desc: "持株会社の下に複数の事業会社が並ぶ体制のため、部門や会社を跨いで連携するコミュニケーション力が求められます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>SCREENグループの選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。事業会社・職種・時期により異なります。詳細は公式採用サイトでご確認ください。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考", desc: "履歴書・職務経歴書を提出。応募職種で求められる経験・スキルとの適合性が確認されます。" },
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

        <h2>SCREENホールディングスの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>10,802,000円（2026年3月期）は持株会社単体653名の平均。本社機能中心の構成のため、事業会社を含むグループ全体の水準とは異なる。</li>
            <li>賞与・基準外賃金を含む数値で、業績等により変動し得る。</li>
            <li>IRBANK集計の推移では2022年3月期822万円から2026年3月期1,080万円へと上昇傾向。</li>
            <li>中途入社時の提示額は入社する事業会社・ポジション・経験により異なるため、求人票やエージェント経由での確認が確実。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>SCREENグループ転職で活用したい転職エージェント</h2>
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

        <h2>SCREENホールディングス転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">SCREENグループ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/semiconductor-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">半導体業界の年収ランキング</Link>
            <Link href="/company/maker-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">メーカー年収ランキング</Link>
            <Link href="/company/tokyo-electron/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京エレクトロン転職ガイド</Link>
            <Link href="/company/disco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ディスコ転職ガイド</Link>
            <Link href="/company/tokyo-seimitsu/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">東京精密転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
