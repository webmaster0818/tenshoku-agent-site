import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コーエーテクモへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
  description:
    "コーエーテクモ（証券コード3635）への転職を有価証券報告書などの一次データで解説。平均年間給与は約903万円（2026年3月期・有報／提出会社）。中途採用の状況、求められる人材、選考フロー、年収の考え方をまとめました。",
  openGraph: {
    title: "コーエーテクモへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】",
    description: "コーエーテクモ（3635）の平均年収・中途採用・選考フローを有価証券報告書ベースで解説。",
  },
};

const faqData = [
  {
    "q": "コーエーテクモの平均年収はいくらですか？",
    "a": "有価証券報告書によると、提出会社（持株会社単体）の平均年間給与は約903万円（2026年3月期）です。ただしこれは本社機能スタッフ121名の平均であり、ゲーム開発の中核であるコーエーテクモゲームス等の事業会社の給与水準とは異なります。"
  },
  {
    "q": "コーエーテクモは中途採用を行っていますか？",
    "a": "はい。公式表記は「経験者採用」で、ゲーム開発職を含む幅広い事業分野で経験者を募集していると公式に明記されています。採用窓口は株式会社コーエーテクモホールディングスで、選考を経て各事業会社・事業部へ配属されるグループ一括の採用です（2026年7月31日に公式採用ページで確認）。最新の募集状況は公式採用サイトでご確認ください。"
  },
  {
    "q": "コーエーテクモの転職難易度は高いですか？",
    "a": "開発職はポートフォリオや実務経験の提示が実質必須で、人気IPを持つ企業のため競争は相応にあります。一方でブランド・職種が多様なため、経験がマッチすれば挑戦の余地は十分あります。"
  },
  {
    "q": "勤務地はどこですか？",
    "a": "本社・開発拠点は横浜市が中心です。職種により異なるため募集要項でご確認ください。"
  },
  {
    "q": "どんな職種の募集がありますか？",
    "a": "プログラマー・ゲームプランナー・3DCGデザイナー・サウンド・品質管理など開発系のほか、コーポレート系の募集が出ることもあります。時期により変動します。"
  },
  {
    "q": "ゲーム業界未経験でも応募できますか？",
    "a": "職種によります。技術職は近接領域（Web・アプリ開発等）からの転職事例が業界全体で見られますが、ポートフォリオ等で実力を示せることが前提になります。"
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
      <Breadcrumb items={[{ name: "企業別転職ガイド", href: "/company/" }, { name: "コーエーテクモ" }]} />

      <article className="prose-custom max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-warm-gray rounded-2xl p-6 sm:p-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight mb-3">
            コーエーテクモへの転職は難しい？中途採用・平均年収・選考を徹底解説【2026年】
          </h1>
          <p className="text-text-secondary leading-relaxed">
            コーエーテクモホールディングス（証券コード3635）は「信長の野望」「三國無双」「アトリエ」シリーズなどで知られるゲーム大手です。
            本記事では、有価証券報告書などの公開一次データをもとに、平均年収・中途採用の状況・選考の考え方を客観的に整理します。
          </p>
        </div>

        <h2>結論：コーエーテクモ転職のポイント</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>提出会社（単体）の平均年間給与は約903万円（2026年3月期・有価証券報告書）。ただし持株会社単体121名の数値で、開発現場（コーエーテクモゲームス等）とは別物である点に注意。</li>
            <li>歴史シミュレーション・アクションで独自ポジションを持ち、IPの海外展開・コラボ開発（無双系の受託）も活発。</li>
            <li>中途採用（公式表記は「経験者採用」）はコーエーテクモホールディングスが窓口のグループ一括採用で、選考を経て各事業会社・事業部へ配属される（公式記載）。</li>
            <li>ゲーム業界での実務経験、またはポートフォリオ・技術力の証明が重要になる。</li>
          </ul>
        </div>

        <h2>コーエーテクモの基本データ（有価証券報告書）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                { label: "社名", value: "コーエーテクモホールディングス" },
                { label: "証券コード", value: "3635（東証プライム）" },
                { label: "本社", value: "神奈川県横浜市" },
                { label: "事業内容", value: "「信長の野望」「三國無双」「アトリエ」シリーズ等を手がけるゲームソフトの開発・販売（事業会社: コーエーテクモゲームス等）" },
                { label: "平均年間給与", value: "約903万円（2026年3月期・有価証券報告書／提出会社）" },
                { label: "平均年齢", value: "約38.8歳（同・提出会社）" },
                { label: "平均勤続年数", value: "約9.8年（同・提出会社）" },
                { label: "従業員数", value: "121名（同・提出会社単体）／連結は要公式確認" },
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
          ※数値は有価証券報告書（提出会社）に基づく全社平均です。職種・年代・役職により実際の年収は異なります。コーエーテクモホールディングスは持株会社であり、有報の数値は提出会社（単体・121名）＝本社機能スタッフの平均です。ゲーム開発の中核はコーエーテクモゲームス等の事業会社で、給与水準・働き方は事業会社ごとに異なります。最新情報は公式IR・有価証券報告書でご確認ください。
        </p>

        <h2>コーエーテクモの中途採用の状況</h2>
        <div className="glass-card p-6 mb-8">
          <p className="text-sm text-text-secondary mb-4">コーエーテクモグループの中途採用は公式表記で「経験者採用」と呼ばれ、「当グループではゲーム開発に関する職種はもちろん様々な事業分野で、経験者の方を積極的に募集しております」と公式に明記されています。採用窓口は事業会社ではなく<strong className="text-navy">株式会社コーエーテクモホールディングス</strong>で、選考を経て各事業会社・事業部へ配属されるグループ一括のキャリア採用です。詳細は<a href="https://www.koeitecmo.co.jp/recruit/career/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">公式キャリア採用ページ</a>でご確認ください。</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>採用窓口はコーエーテクモホールディングス（HD）。グループ一括で採用し、各事業会社・事業部へ配属される。</li>
            <li>募集職種（公式カテゴリ表記）: 開発系（プログラマー、システムエンジニア等 13職種）／CG制作系（デザイナー、ディレクター、TA、制作進行 10職種）／クリエイティブ系（2職種）／企画・ディレクション系（3職種）／マーケティング・販売・管理系（19職種）／その他（リファラル採用）。</li>
            <li>応募方法はメール saiyo@koeitecmo.co.jp（件名に「【経験者採用】」と記載）または郵送（人事部宛）。</li>
            <li>年齢制限なし・業界未経験でも応募可・複数職種への同時応募可・海外からの応募にも対応（公式記載）。</li>
            <li>勤務地は日吉、みなとみらい、市ヶ谷、京都の各拠点。本社は横浜・みなとみらい21地区。</li>
          </ul>
          <p className="text-xs text-text-muted mt-4">
            ※2026年7月31日に公式採用サイトで確認。募集状況は変動するため最新は公式サイトでご確認ください。
          </p>
        </div>

        <h2>コーエーテクモで求められる人材</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "ゲーム開発の実務経験", desc: "プログラマーならC++等での開発経験、デザイナーなら3DCG制作実績など、応募職種に直結する経験・ポートフォリオが評価されます。" },
            { title: "IP・ジャンルへの理解", desc: "歴史シミュレーションや無双系アクションなど同社の看板ジャンルへの理解・熱意は、志望動機の説得力につながります。" },
            { title: "長期タイトル運営の視点", desc: "シリーズ物・運営型タイトルが多く、リリース後の運営・改善まで見据えた開発姿勢が求められます。" },
            { title: "チーム開発での協働力", desc: "大規模タイトルはブランド横断の協働も多く、職種間コミュニケーション力が重視されます。" }
          ].map((point) => (
            <div key={point.title} className="card-hover p-5">
              <h3 className="font-bold text-navy mb-2">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.desc}</p>
            </div>
          ))}
        </div>

        <h2>コーエーテクモの選考フロー（公式記載）</h2>
        <p className="text-sm text-text-muted mb-4">※公式採用ページ記載の流れ（2026年7月31日確認）。職種・時期により変わる場合があります。</p>
        <div className="space-y-5 mb-8">
          {[
            { step: 1, title: "書類選考（2週間程度）", desc: "メール（saiyo@koeitecmo.co.jp・件名に「【経験者採用】」と記載）または郵送で応募し、書類選考が行われます。目安は2週間程度と公式に記載されています。" },
            { step: 2, title: "一次面接", desc: "書類選考通過後、一次面接が行われます。" },
            { step: 3, title: "筆記試験", desc: "一次面接の後に筆記試験が実施されます。" },
            { step: 4, title: "最終面接（役員）", desc: "役員による最終面接が行われます。" },
            { step: 5, title: "内定・入社", desc: "最終面接通過後、内定を経て入社となります。" },
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

        <h2>コーエーテクモの年収の考え方</h2>
        <div className="glass-card p-6 mb-8">
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>有報の約903万円は持株会社単体（121名・本社機能）の平均で、開発現場の水準を直接示すものではない。</li>
            <li>事業会社の想定年収はポジション・経験により大きく異なるため、求人票・エージェント経由での確認が必須。</li>
            <li>ゲーム業界はタイトルの業績・インセンティブで変動する部分もある。</li>
          </ul>
          <p className="text-sm text-text-secondary mt-3">正確な想定年収は、転職エージェントを通じてポジションごとのレンジを確認するのが確実です。</p>
        </div>

        <h2>コーエーテクモ転職で活用したい転職エージェント</h2>
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

        <h2>コーエーテクモ転職 よくある質問</h2>
        <div className="mb-8">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3 border-none pb-0 mt-0">コーエーテクモ転職を成功させるために</h2>
          <p className="text-white/70 text-sm mb-6">まずは情報収集から。エージェント経由でポジションごとの実情を確かめましょう。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-accent px-8 py-3">転職エージェントおすすめランキングを見る</Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-bold text-navy mb-4">関連ページ</h3>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <Link href="/company/game-salary/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">ゲーム会社 年収ランキング</Link>
            <Link href="/company/nintendo/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">任天堂転職ガイド</Link>
            <Link href="/company/capcom/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">カプコン転職ガイド</Link>
            <Link href="/company/konami/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">コナミ転職ガイド</Link>
            <Link href="/company/sega-sammy/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">セガサミー転職ガイド</Link>
            <Link href="/company/" className="btn-primary text-sm px-5 py-2.5 bg-navy-light">企業別転職ガイド一覧</Link>
          </div>
        </div>
      </article>
    </>
  );
}
