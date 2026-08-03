import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京精密への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "東京精密（証券コード7729・ACCRETECH）への転職を有価証券報告書などの一次データで解説。平均年間給与は8,276,412円（2026年3月期・有報／提出会社単体1,428名・前事業年度比+5.7%）。プローバ・ウェーハダイシングなど半導体製造装置と精密測定機器のメーカー。中途採用の状況、選考の考え方をまとめました。",
  alternates: { canonical: "/company/tokyo-seimitsu/" },
  openGraph: {
    title: "東京精密への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "東京精密（7729・ACCRETECH）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "東京精密の平均年収はいくらですか？",
    "a": "有価証券報告書によると平均年間給与は8,276,412円（約828万円・2026年3月期・提出会社単体）です。前事業年度比+5.7%で、賞与・基準外賃金を含みます。IRBANK集計の推移で見ると過去12年で最高の水準です。単体1,428名の全従業員平均のため、職種・年代・役職により実際のレンジは異なります。"
  },
  {
    "q": "東京精密は中途採用を行っていますか？",
    "a": "はい。2026年8月3日時点で、公式採用サイトにキャリア採用の募集要項ページとキャリア採用専用エントリーページがあります。製品の組立・調整、品質保証、生産管理、フィールドエンジニアなどの職種が掲載されています。募集状況は時期により変動するため、最新は公式採用サイトでご確認ください。"
  },
  {
    "q": "東京精密はどんな製品を作っている会社ですか？",
    "a": "半導体製造装置（ウェーハ検査に使うプローバ、ウェーハダイシング等の計測・加工装置）と精密測定機器を手がけるメーカーで、「ACCRETECH」ブランドで展開しています。持株会社ではなく事業会社です。"
  },
  {
    "q": "東京精密の転職難易度は高いですか？",
    "a": "半導体製造装置・精密測定という専門性の高い領域のため、機械・電気・計測など近接分野での実務経験を持つ方が有利とみられます。一方でキャリア採用の職種は組立・調整から品質保証・生産管理・フィールドエンジニアまで幅があり、募集職種と自身の経験の適合性が重要です。"
  },
  {
    "q": "東京精密の平均勤続年数・平均年齢はどのくらいですか？",
    "a": "有報によると平均勤続年数は9.5年、平均年齢は38.5歳（2026年3月期・提出会社）です。単体従業員数は1,428名で前期比+136名と増えており、有報には採用増と国内子会社からの事業譲受によるものと記載されています。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社は東京都八王子市です。公式のキャリア採用募集要項では、組立・品質保証・生産管理系は茨城県土浦市・愛知県東郷町、フィールドエンジニアは全国のサービス拠点勤務と案内されています（2026年8月3日確認）。応募ポジションによって異なるため募集要項でご確認ください。"
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東京精密への転職は難しい？中途採用・平均年収・選考【有価証券報告書準拠】",
  dateModified: "2026-08-03",
  author: { "@type": "Organization", name: "転職エージェント比較ラボ編集部", url: "https://tenshoku-agent-lab.com" },
  publisher: { "@type": "Organization", name: "転職エージェント比較ラボ", url: "https://tenshoku-agent-lab.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://tenshoku-agent-lab.com/company/tokyo-seimitsu/" },
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "東京精密" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            東京精密への転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            東京精密（証券コード7729）は、プローバやウェーハダイシングなど半導体の計測・加工装置と精密測定機器を手がける「ACCRETECH」ブランドのメーカーです。2026年3月期の平均年間給与は前事業年度比+5.7%と伸び、IRBANK集計の推移で過去12年の最高水準となりました。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：東京精密転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>平均年間給与は8,276,412円・約828万円（2026年3月期・有価証券報告書）。提出会社単体1,428名の全従業員平均で、前事業年度比+5.7%。賞与・基準外賃金を含む。</li>
            <li>IRBANK集計の推移では2025年3月期782万円→2026年3月期827万円と伸び、過去12年で最高の水準。</li>
            <li>公式採用サイトでキャリア採用を実施中（2026年8月3日確認）。組立・調整／品質保証／生産管理／フィールドエンジニア等の職種を掲載。</li>
            <li>平均年齢38.5歳・平均勤続9.5年。単体従業員は前期比+136名（採用増と国内子会社からの事業譲受による）と拡大中。</li>
          </ul>
        </div>

        <h2>東京精密の基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "株式会社東京精密（ブランド名：ACCRETECH）" },
                { label: "証券コード", value: "7729" },
                { label: "本社", value: "東京都八王子市" },
                { label: "事業内容", value: "半導体製造装置（プローバ・ウェーハダイシング等の計測・加工装置）と精密測定機器の製造・販売（事業会社）" },
                { label: "平均年間給与", value: "8,276,412円（2026年3月期・有価証券報告書／提出会社。賞与・基準外賃金を含む。前事業年度比+5.7%）" },
                { label: "決算期", value: "3月末決算（最新有報は第103期・2026年3月期、2026年6月19日提出）" },
                { label: "平均年齢", value: "38.5歳（同・提出会社）" },
                { label: "平均勤続年数", value: "9.5年（同・提出会社）" },
                { label: "従業員数", value: "1,428名（提出会社単体・前期比+136名。別途臨時従業員 年間平均861名）" },
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

        <h2>東京精密の中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">東京精密は<a href="https://www.accretech.com/recruit/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式採用サイト</a>でキャリア採用（中途採用）を実施しており、キャリア採用の募集要項ページと専用エントリーページが用意されています。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>掲載職種（公式表記）：製品の組立・調整（計測機器や半導体製造装置の機械・電気組立）／品質保証／生産管理／フィールドエンジニア（計測機器の校正・修理・保守）／その他職種。</li>
            <li>勤務地：組立・品質保証・生産管理系は茨城県土浦市・愛知県東郷町。フィールドエンジニアは全国のサービス拠点。</li>
            <li>募集要項には、給与は年齢・前給・能力を基準に決定、昇給年1回・賞与年2回（7月・12月）、家族・住宅・残業手当、年間休日122日等の記載がある。</li>
            <li>採用サイトには「主体性を持って仕事をする」ことを重視する企業メッセージが掲載されている。</li>
            <li>※2026年8月3日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。</li>
          </ul>
        </div>

        <h2>東京精密で求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "装置・計測分野の専門性", desc: "プローバ・ダイシング装置や精密測定機器を扱うため、機械・電気・計測など近接分野での実務経験が中核職種で評価されるとみられます。" },
            { title: "主体性を持って動く姿勢", desc: "公式採用サイトで「主体性を持って仕事をする」ことが重視されており、自ら考えて動く働き方との相性が問われます。" },
            { title: "品質・精度へのこだわり", desc: "半導体ウェーハの検査・加工や精密測定というミクロン単位の世界を支える事業のため、品質と精度に対する誠実な姿勢が重視されます。" },
            { title: "現場・顧客と向き合う力", desc: "フィールドエンジニアをはじめ顧客の製造現場と接する職種が多く、現場での課題解決力とコミュニケーション力が活きます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>東京精密の選考フロー（一般的な流れ）</h2>
        <p className="text-sm text-text-muted mb-4">※以下は中途採用における一般的な選考の流れの一例です。職種・時期により異なります。詳細は公式採用サイトでご確認ください。</p>
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

        <h2>東京精密の年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>8,276,412円（2026年3月期）は提出会社単体・全従業員1,428名の平均。職種（開発・製造・フィールド・管理）により実際の水準は異なる。</li>
            <li>賞与・基準外賃金を含む数値で、前事業年度比+5.7%。業績等により変動し得る。</li>
            <li>IRBANK集計の推移では2022年3月期749万円→2023年3月期798万円→2024年3月期801万円→2025年3月期782万円→2026年3月期827万円（過去12年で最高値）。</li>
            <li>公式キャリア採用の募集要項では、給与は年齢・前給・能力を基準に決定と案内されており、中途入社時の提示額は個別に確認する必要がある。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>東京精密転職で活用したい転職エージェント</h2>
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

        <h2>東京精密転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">東京精密転職を成功させるために</h2>
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
            <Link href="/company/disco/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ディスコ転職ガイド</Link>
            <Link href="/company/advantest/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">アドバンテスト転職ガイド</Link>
            <Link href="/company/screen-hd/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">SCREENホールディングス転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
